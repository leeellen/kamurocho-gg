import { NextResponse } from "next/server";

import { SESSION_COOKIE, SESSION_MAX_AGE, encodeSession } from "@/lib/auth/session";
import { createAdminClient } from "@/lib/supabase/admin";
import { extractSteamId, verifySteamAssertion } from "@/lib/steam/openid";

export const dynamic = "force-dynamic";

const AUTH_NEXT_COOKIE = "kamurocho_auth_next";

function sanitizeNext(raw: string | null | undefined): string {
  if (!raw) return "/me?welcome=1";
  if (!raw.startsWith("/")) return "/me?welcome=1";
  if (raw.startsWith("//")) return "/me?welcome=1";
  if (raw.length > 512) return "/me?welcome=1";
  return raw;
}

type SteamPlayer = {
  steamid: string;
  personaname?: string;
  avatarfull?: string;
  profileurl?: string;
};

async function fetchSteamProfile(steamId: string): Promise<SteamPlayer | null> {
  const key = process.env.STEAM_API_KEY;

  // Try Web API first
  if (key) {
    try {
      const res = await fetch(
        `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${key}&steamids=${steamId}`,
        { cache: "no-store", signal: AbortSignal.timeout(5000) },
      );
      if (res.ok) {
        const data = (await res.json()) as { response?: { players?: SteamPlayer[] } };
        if (data.response?.players?.[0]) {
          return data.response.players[0];
        }
      }
    } catch {
      // Fall through to fallback
    }
  }

  // Fallback: try scraping the Steam profile page directly
  try {
    const res = await fetch(
      `https://steamcommunity.com/profiles/${steamId}`,
      { cache: "no-store", signal: AbortSignal.timeout(5000) },
    );
    if (res.ok) {
      const html = await res.text();
      // Extract persona name from the page
      const personaMatch = html.match(/<span class="actual_persona_name">(.+?)<\/span>/);
      const avatarMatch = html.match(/<img[^>]+class="[^"]*playeravatar[^"]*"[^>]+src="([^"]+)"/);
      if (personaMatch) {
        return {
          steamid: steamId,
          personaname: personaMatch[1].trim(),
          avatarfull: avatarMatch?.[1],
          profileurl: `https://steamcommunity.com/profiles/${steamId}/`,
        };
      }
    }
  } catch {
    // Fall through to null
  }

  console.warn(`[auth/callback] Could not fetch Steam profile for ${steamId}. Consider setting STEAM_API_KEY for better reliability.`);
  return null;
}

// Vercel sits behind a proxy: `request.url` can report the internal
// origin while the public URL the browser sees is HTTPS. Reconstruct the
// public origin from forwarded headers so the OpenID verify check and the
// redirect target both line up with what the browser actually used.
function publicOrigin(request: Request, fallback: URL): string {
  const proto = request.headers.get("x-forwarded-proto");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (proto && host) return `${proto.split(",")[0].trim()}://${host.split(",")[0].trim()}`;
  return fallback.origin;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  // Use the forwarded-origin the browser actually arrived at, never
  // NEXTAUTH_URL. A wrong NEXTAUTH_URL (leftover localhost, preview URL,
  // missing https) silently breaks verification. The initiator also signs
  // the realm from the same forwarded headers, so the two sides stay
  // self-consistent without depending on env.
  const origin = publicOrigin(request, url);
  const expectedOrigin = origin;

  let valid = false;
  try {
    valid = await verifySteamAssertion(url.searchParams, expectedOrigin);
  } catch (err) {
    console.error("[auth/callback] verifySteamAssertion threw:", err);
  }
  if (!valid) {
    console.error("[auth/callback] Steam assertion verification failed.", {
      expectedOrigin,
      nextauthUrl: process.env.NEXTAUTH_URL ?? null,
      returnTo: url.searchParams.get("openid.return_to"),
      realm: url.searchParams.get("openid.realm"),
    });
    return NextResponse.redirect(new URL("/?auth=failed&reason=verify", origin));
  }

  const claimedId = url.searchParams.get("openid.claimed_id");
  const steamId = extractSteamId(claimedId);
  if (!steamId) {
    return NextResponse.redirect(new URL("/?auth=failed&reason=claim", origin));
  }

  // Cache profile basics (display name, avatar) for the header badge.
  try {
    const profile = await fetchSteamProfile(steamId);
    console.log("[auth/callback] fetchSteamProfile result:", {
      steamId,
      profileReceived: !!profile,
      personaname: profile?.personaname,
      avatarfull: profile?.avatarfull,
      profileurl: profile?.profileurl,
    });
    const admin = createAdminClient();
    const res = await admin.from("users").upsert(
      {
        steam_id: steamId,
        display_name: profile?.personaname ?? null,
        avatar_url: profile?.avatarfull ?? null,
        profile_url: profile?.profileurl ?? null,
      },
      { onConflict: "steam_id" },
    );
    if (res.error) {
      console.error("[auth/callback] users upsert failed:", res.error.message);
    } else {
      console.log("[auth/callback] users upsert success for", steamId);
    }
  } catch (err) {
    console.error("[auth/callback] profile cache error:", err);
  }

  // Library/achievement sync is fired client-side from the /me welcome flow
  // (see app/me/page.tsx + sync-on-welcome island) so the OpenID callback
  // can return as fast as possible and the cookie + redirect always land
  // before Vercel's serverless invocation budget runs out.

  let token: string;
  try {
    token = await encodeSession({ steamId, issuedAt: Date.now() });
  } catch (err) {
    console.error("[auth/callback] encodeSession failed (missing STEAM_SESSION_SECRET / NEXTAUTH_SECRET?):", err);
    return NextResponse.redirect(new URL("/?auth=failed&reason=session", origin));
  }

  const nextCookie = request.headers
    .get("cookie")
    ?.split(/;\s*/)
    .find((c) => c.startsWith(`${AUTH_NEXT_COOKIE}=`))
    ?.slice(AUTH_NEXT_COOKIE.length + 1);
  const next = sanitizeNext(nextCookie ? decodeURIComponent(nextCookie) : null);

  // Append `welcome=1` so the AutoSyncOnWelcome island can fire the Steam
  // library sync exactly once after the redirect, regardless of which page
  // the user came from.
  const redirectUrl = new URL(next, origin);
  redirectUrl.searchParams.set("welcome", "1");
  const response = NextResponse.redirect(redirectUrl);
  const isHttps = origin.startsWith("https://");
  response.cookies.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: isHttps,
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  // Clear the one-shot return-to cookie so a later sign-in starts fresh.
  response.cookies.set(AUTH_NEXT_COOKIE, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: isHttps,
    path: "/",
    maxAge: 0,
  });
  return response;
}
