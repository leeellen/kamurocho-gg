import { NextResponse } from "next/server";

import { buildSteamOpenIdUrl } from "@/lib/steam/openid";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const origin = `${url.protocol}//${url.host}`;
  const target = buildSteamOpenIdUrl(origin);
  return NextResponse.redirect(target, { status: 302 });
}
