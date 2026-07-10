import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/admin";

// Keep-warm ping. Supabase free tier pauses a project after ~7 days of no
// activity, then deletes it if it stays paused — which is what took the site
// down. A daily Vercel Cron hit here runs one trivial query so the project
// never crosses the inactivity threshold.
// ponytail: no CRON_SECRET check — endpoint only reads a count, nothing to
// abuse. Add `Authorization: Bearer $CRON_SECRET` gating if that changes.
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { error } = await createAdminClient()
      .from("games")
      .select("app_id", { count: "exact", head: true });
    if (error) throw error;
    return NextResponse.json({ ok: true }, { headers: { "cache-control": "no-store" } });
  } catch (err) {
    console.error("[keep-warm] ping failed:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
