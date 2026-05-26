import { NextResponse } from "next/server";

import { getCurrentSession } from "@/lib/auth/session";
import { syncSteamLibrary } from "@/lib/steam/sync";

export async function POST() {
  const session = await getCurrentSession();
  if (!session) {
    return NextResponse.json({ error: "not-signed-in" }, { status: 401 });
  }

  try {
    const result = await syncSteamLibrary(session.steamId);
    return NextResponse.json(result);
  } catch (err) {
    console.error("[api/sync] failed:", err);
    return NextResponse.json({ error: "sync-failed" }, { status: 500 });
  }
}
