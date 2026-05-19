import { NextResponse } from "next/server";

import { SESSION_COOKIE, SESSION_MAX_AGE, encodeSession } from "@/lib/auth/session";
import { createAdminClient } from "@/lib/supabase/admin";
import { extractSteamId, verifySteamAssertion } from "@/lib/steam/openid";

type SteamPlayer = {
  steamid: string;
  personaname?: string;
  avatarfull?: string;
  profileurl?: string;
};

async function fetchSteamProfile(steamId: string): Promise<SteamPlayer | null> {
  const key = process.env.STEAM_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&steamids=${steamId}`,
      { cache: "no-store", signal: AbortSignal.timeout(5000) },
    );
    if (!res.ok) return null;
    const data = (await res.json()) as { response?: { players?: SteamPlayer[] } };
    return data.response?.players?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const valid = await verifySteamAssertion(url.searchParams);
  if (!valid) {
    return NextResponse.redirect(new URL("/?auth=failed", url.origin));
  }

  const claimedId = url.searchParams.get("openid.claimed_id");
  const steamId = extractSteamId(claimedId);
  if (!steamId) {
    return NextResponse.redirect(new URL("/?auth=failed", url.origin));
  }

  // Cache profile basics (display name, avatar) for the header badge.
  try {
    const profile = await fetchSteamProfile(steamId);
    const admin = createAdminClient();
    await admin.from("users").upsert(
      {
        steam_id: steamId,
        display_name: profile?.personaname ?? null,
        avatar_url: profile?.avatarfull ?? null,
        profile_url: profile?.profileurl ?? null,
      },
      { onConflict: "steam_id" },
    );
  } catch {
    // Best-effort profile cache; session still proceeds even if DB write fails.
  }

  const token = await encodeSession({ steamId, issuedAt: Date.now() });
  const response = NextResponse.redirect(new URL("/me?welcome=1", url.origin));
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: url.protocol === "https:",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return response;
}
