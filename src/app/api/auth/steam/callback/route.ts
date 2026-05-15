import { NextResponse } from "next/server";

import { getPlayerSummary } from "@/lib/steam/api";
import { createAdminClient } from "@/lib/supabase/admin";
import { extractSteamId, verifySteamAssertion } from "@/lib/steam/openid";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const valid = await verifySteamAssertion(url.searchParams);

  if (!valid) {
    return NextResponse.redirect(new URL("/login?steam=invalid", url.origin));
  }

  const steamId = extractSteamId(url.searchParams.get("openid.claimed_id"));

  if (!steamId) {
    return NextResponse.redirect(new URL("/login?steam=missing-id", url.origin));
  }

  try {
    const profile = await getPlayerSummary(steamId);
    const admin = createAdminClient();
    const syntheticEmail = `${steamId}@steam.unlokd.gg`;

    const { data: existing } = await admin
      .from("users")
      .select("id")
      .eq("steam_id", steamId)
      .maybeSingle();

    if (!existing) {
      const { data: authUser } = await admin.auth.admin.createUser({
        email: syntheticEmail,
        password: crypto.randomUUID(),
        email_confirm: true,
      });

      await admin.from("users").insert({
        id: authUser.user?.id,
        steam_id: steamId,
        persona_name: profile?.personaname,
        avatar_url: profile?.avatarfull,
        profile_url: profile?.profileurl,
      });
    } else {
      await admin
        .from("users")
        .update({
          persona_name: profile?.personaname,
          avatar_url: profile?.avatarfull,
          profile_url: profile?.profileurl,
          updated_at: new Date().toISOString(),
        })
        .eq("steam_id", steamId);
    }
  } catch (error) {
    console.error("Steam callback failed:", error);
    return NextResponse.redirect(new URL("/login?steam=setup-required", url.origin));
  }

  return NextResponse.redirect(new URL("/", url.origin));
}
