import { NextResponse } from "next/server";

import { syncSteamLibrary } from "@/lib/steam/sync";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { steamId?: string };

  if (!body.steamId) {
    return NextResponse.json({ error: "steamId is required" }, { status: 400 });
  }

  const result = await syncSteamLibrary(body.steamId);
  return NextResponse.json(result);
}
