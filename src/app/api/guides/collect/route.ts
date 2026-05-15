import { NextResponse } from "next/server";

import { collectGuidesForUser } from "@/lib/guides/generate";
import { createClient as createServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

export async function POST() {
  try {
    const supabase = await createServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }
    const result = await collectGuidesForUser(user.id);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Collect failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
