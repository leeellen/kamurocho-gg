import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error: "steam-sync-disabled",
      message: "Steam library sync was removed in the kamurocho.gg pivot.",
    },
    { status: 410 },
  );
}
