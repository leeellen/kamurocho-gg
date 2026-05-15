import { NextResponse } from "next/server";

import { createAdminClient } from "@/lib/supabase/admin";
import { createClient as createServerClient } from "@/lib/supabase/server";
import { syncSteamLibrary } from "@/lib/steam/sync";

export async function POST() {
  try {
    const supabase = await createServerClient();
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (!authUser) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const admin = createAdminClient();
    const { data: appUser } = await admin
      .from("users")
      .select("id, steam_id")
      .eq("id", authUser.id)
      .maybeSingle();

    const steamIdFromMeta =
      typeof authUser.user_metadata?.steam_id === "string"
        ? authUser.user_metadata.steam_id
        : null;
    const steamIdFromEmail = authUser.email?.endsWith("@steam.unlokd.gg")
      ? authUser.email.replace("@steam.unlokd.gg", "")
      : null;

    const steamId = appUser?.steam_id ?? steamIdFromMeta ?? steamIdFromEmail;
    const userId = appUser?.id ?? authUser.id;

    if (!steamId) {
      return NextResponse.json({ error: "Steam ID not found for user" }, { status: 400 });
    }

    const result = await syncSteamLibrary(steamId, userId);
    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Sync failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
