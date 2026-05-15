import { NextResponse } from "next/server";

import { buildSteamOpenIdUrl } from "@/lib/steam/openid";

export async function GET() {
  if (!process.env.NEXTAUTH_URL) {
    const loginUrl = new URL("/login?steam=missing-nextauth-url", "http://localhost:3000");
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.redirect(buildSteamOpenIdUrl());
}
