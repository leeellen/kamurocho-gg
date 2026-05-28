import { NextResponse } from "next/server";

import { buildSteamOpenIdUrl } from "@/lib/steam/openid";

export const dynamic = "force-dynamic";

const AUTH_NEXT_COOKIE = "kamurocho_auth_next";

// Only accept same-origin paths so an attacker can't bounce the user to a
// different domain after Steam round-trip.
function sanitizeNext(raw: string | null): string {
  if (!raw) return "/";
  if (!raw.startsWith("/")) return "/";
  if (raw.startsWith("//")) return "/";
  if (raw.length > 512) return "/";
  return raw;
}

export async function GET(request: Request) {
  // Trust forwarded headers (Vercel proxy) so the realm/return_to we ship to
  // Steam match what the browser actually sees and the callback verification
  // can reconstruct the same origin.
  const proto = request.headers.get("x-forwarded-proto");
  const host = request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  const url = new URL(request.url);
  const origin =
    proto && host
      ? `${proto.split(",")[0].trim()}://${host.split(",")[0].trim()}`
      : `${url.protocol}//${url.host}`;
  // Build the OpenID realm from the actual browser-facing origin so the
  // callback's realm-equality check passes. NEXTAUTH_URL is ignored: when
  // misconfigured (e.g. localhost left over from dev, or a non-public
  // preview URL) it makes verification fail silently. The forwarded origin
  // is what the browser actually loaded, which is what Steam will echo back.
  const target = buildSteamOpenIdUrl(origin);
  const response = NextResponse.redirect(target, { status: 302 });

  // Stash the return-to path so the callback can land the user back on the
  // page they were viewing instead of always sending them to /me.
  const next = sanitizeNext(url.searchParams.get("next"));
  response.cookies.set(AUTH_NEXT_COOKIE, next, {
    httpOnly: true,
    sameSite: "lax",
    secure: origin.startsWith("https://"),
    path: "/",
    maxAge: 60 * 10,
  });
  return response;
}
