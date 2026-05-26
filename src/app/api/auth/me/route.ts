import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/user-progress";

// Tiny endpoint the header user-menu hits from the client. Lets public pages
// stay static (ISR) while still showing the user's avatar + sign-in state.
export const dynamic = "force-dynamic";

export async function GET() {
  const user = await getCurrentUser();
  return NextResponse.json(
    { user },
    {
      headers: {
        "cache-control": "private, no-store",
      },
    },
  );
}
