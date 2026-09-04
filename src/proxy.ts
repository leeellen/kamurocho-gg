import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { ARCHIVE_SLUGS } from "@/lib/data";
import { CURATED_GAMES } from "@/lib/content";

// `/game/[id]` and `/archive/[slug]` call `notFound()` for an unknown slug,
// but the app has a root `loading.tsx`, so the response has already started
// streaming by the time that throws. Next then can no longer change the
// status: the reader gets the 404 page under a 200, which search engines log
// as a soft 404. See `next/dist/docs/01-app/03-api-reference/03-file-conventions/loading.md`
// ("If you need a 404 status ... ensure the resource exists before the
// response body is streamed ... run this check in proxy").
//
// Both slug sets are static and in-process, so the check costs nothing and no
// database round-trip happens here.
const GAME_SLUGS = new Set(CURATED_GAMES.map((game) => game.slug));
const ARCHIVE = new Set<string>(ARCHIVE_SLUGS);

export function proxy(request: NextRequest) {
  const segments = request.nextUrl.pathname.split("/").filter(Boolean);
  const [section, slug] = segments;

  const known =
    section === "game" ? GAME_SLUGS.has(slug ?? "") : ARCHIVE.has(slug ?? "");
  if (known) return NextResponse.next();

  // Rewriting to a path no route matches lets Next's own routing produce the
  // 404 — real status code, same `not-found.tsx` UI.
  return NextResponse.rewrite(new URL("/_kamurocho_not_found", request.url));
}

export const config = {
  matcher: ["/game/:slug", "/archive/:slug"],
};
