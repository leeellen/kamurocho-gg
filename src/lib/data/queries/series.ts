import { cache } from "react";

import { CURATED_GAMES } from "@/lib/content";
import { type Locale } from "@/lib/i18n";

import { fetchSeriesRows } from "../fetch";
import type { GuideRow, SeriesGameCard } from "../types";

import { buildSeriesGameCard } from "./helpers";

export const getSeriesGames = cache(async (locale: Locale): Promise<SeriesGameCard[]> => {
  const { games, achievements, guides } = await fetchSeriesRows();
  const gameMap = new Map(games.map((game) => [game.app_id, game]));
  const guidesByAchievement = new Map<number, GuideRow[]>();

  for (const guide of guides) {
    const current = guidesByAchievement.get(guide.achievement_id) ?? [];
    current.push(guide);
    guidesByAchievement.set(guide.achievement_id, current);
  }

  return CURATED_GAMES.map((curated) => {
    const rows = achievements.filter((achievement) => achievement.app_id === curated.appId);
    return buildSeriesGameCard({
      curated,
      game: gameMap.get(curated.appId) ?? null,
      rows,
      guidesByAchievement,
      locale,
    });
  });
});
