import { NextResponse } from "next/server";

import { searchKamurocho } from "@/lib/data";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") ?? "").trim();
  const locale = url.searchParams.get("locale") === "ko" ? "ko" : "en";

  const results = await searchKamurocho(q, locale);

  return NextResponse.json({
    games: results.games.map((game) => ({
      appId: game.appId,
      name: game.name,
      headerUrl: game.headerUrl,
      capsuleUrl: game.capsuleUrl,
      imgIconUrl: game.imgIconUrl,
      completion: 0,
    })),
    achievements: results.achievements.map(({ game, achievement }) => ({
      id: achievement.id,
      appId: game.appId,
      apiName: achievement.slug,
      slug: achievement.slug,
      name: achievement.name,
      iconUrl: achievement.iconUrl,
      iconGrayUrl: achievement.iconGrayUrl,
      rarity: achievement.rarity,
      gameName: game.name,
      gameAppId: game.appId,
    })),
  });
}
