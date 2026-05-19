import { NextResponse } from "next/server";

import { searchKamurocho } from "@/lib/kamurocho-data";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") ?? "").trim();
  const locale = url.searchParams.get("locale") === "ko" ? "ko" : "en";

  const results = await searchKamurocho(q, locale);

  return NextResponse.json({
    games: results.games.map((game) => ({
      appId: game.appId,
      slug: game.slug,
      name: game.name,
      summary: game.summary,
    })),
    achievements: results.achievements.map(({ game, achievement }) => ({
      appId: game.appId,
      gameSlug: game.slug,
      gameName: game.name,
      slug: achievement.slug,
      name: achievement.name,
      summary: achievement.guideSteps[0] || achievement.guideSummary || achievement.description,
    })),
  });
}
