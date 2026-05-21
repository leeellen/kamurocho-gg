import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/admin";

type ReportBody = {
  app_id?: number;
  kind?: "achievement" | "collectible" | "guide" | "general";
  target_ref?: string;
  locale?: string;
  description?: string;
};

export async function POST(request: Request) {
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

  const kind = payload.kind && ["achievement", "collectible", "guide", "general"].includes(payload.kind)
    ? payload.kind
    : "general";
  const locale = payload.locale === "en" ? "en" : "ko";
  const appId = typeof payload.app_id === "number" ? payload.app_id : null;
  const targetRef = payload.target_ref?.slice(0, 200) ?? null;
  const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

  const admin = createAdminClient();
  const { error } = await admin.from("reports").insert({
    app_id: appId,
    kind,
    target_ref: targetRef,
    locale,
    description: description.slice(0, 2000),
    user_agent: userAgent,
  });

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

  return NextResponse.json({ ok: true });
}
