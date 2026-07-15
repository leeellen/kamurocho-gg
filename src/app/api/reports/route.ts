import { after, NextResponse } from "next/server";

import { sendReportNotification } from "@/lib/notify/report-email";
import { createAdminClient } from "@/lib/supabase/admin";

const REPORT_KINDS = ["achievement", "collectible", "substory", "guide", "general"] as const;
type ReportKind = (typeof REPORT_KINDS)[number];

type ReportBody = {
  app_id?: number;
  kind?: ReportKind;
  target_ref?: string;
  locale?: string;
  description?: string;
};

// Simple per-process IP rate limit. Not durable across instances but blocks
// trivial spam from a single client. For stronger guarantees swap for Upstash.
//
// IP source assumes deployment behind a trusted edge (Vercel/Cloudflare) that
// rewrites x-forwarded-for. In an untrusted setup an attacker can spoof the
// header to bypass the per-IP limit — bound the bucket cardinality so even
// spoofed traffic cannot blow up memory.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60_000;
const MAX_TRACKED_IPS = 10_000;
const rateBuckets = new Map<string, number[]>();

function clientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0]!.trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

function pruneStale(now: number): void {
  for (const [ip, bucket] of rateBuckets) {
    const fresh = bucket.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
    if (fresh.length === 0) rateBuckets.delete(ip);
    else if (fresh.length !== bucket.length) rateBuckets.set(ip, fresh);
  }
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  // Sweep expired entries when the table grows large so memory stays bounded.
  if (rateBuckets.size > MAX_TRACKED_IPS) pruneStale(now);
  const bucket = (rateBuckets.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (bucket.length >= RATE_LIMIT_MAX) {
    rateBuckets.set(ip, bucket);
    return true;
  }
  bucket.push(now);
  rateBuckets.set(ip, bucket);
  return false;
}

export async function POST(request: Request) {
  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ error: "rate limit" }, { status: 429 });
  }
  let payload: ReportBody;
  try {
    payload = (await request.json()) as ReportBody;
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const description = payload.description?.trim();
  if (!description || description.length < 3) {
    return NextResponse.json({ error: "description required" }, { status: 400 });
  }
  if (description.length > 2000) {
    return NextResponse.json({ error: "description too long" }, { status: 400 });
  }

  const kind: ReportKind =
    payload.kind && REPORT_KINDS.includes(payload.kind) ? payload.kind : "general";
  const locale = payload.locale === "en" ? "en" : "ko";
  const appId = typeof payload.app_id === "number" ? payload.app_id : null;
  const targetRef = payload.target_ref?.slice(0, 200) ?? null;
  const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

  const admin = createAdminClient();
  const trimmedDescription = description.slice(0, 2000);
  const { data: inserted, error } = await admin
    .from("reports")
    .insert({
      app_id: appId,
      kind,
      target_ref: targetRef,
      locale,
      description: trimmedDescription,
      user_agent: userAgent,
    })
    .select("id")
    .single();

  if (error) {
    // Table missing → 503 with hint so admin knows to run migration 006_reports.sql.
    if (error.code === "PGRST205" || /relation .*reports.*does not exist/i.test(error.message)) {
      console.warn("[reports] supabase reports table missing — apply migration 006_reports.sql");
      return NextResponse.json(
        { ok: false, queued: false, hint: "reports table not provisioned" },
        { status: 503 },
      );
    }
    console.error("[reports] insert failed", error);
    return NextResponse.json({ error: "insert failed" }, { status: 500 });
  }

  // Notify after the response is sent so email latency never blocks the submitter.
  after(() =>
    sendReportNotification({
      id: inserted?.id ?? null,
      appId,
      kind,
      targetRef,
      locale,
      description: trimmedDescription,
      userAgent,
    }),
  );

  return NextResponse.json({ ok: true });
}
