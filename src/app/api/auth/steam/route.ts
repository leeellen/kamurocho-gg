import { NextResponse } from 'next/server'

import { buildSteamOpenIdUrl } from '@/lib/steam/openid'

export async function GET(request: Request) {
  const origin = new URL(request.url).origin
  return NextResponse.redirect(buildSteamOpenIdUrl(origin))
}
