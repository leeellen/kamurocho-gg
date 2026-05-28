import { cache } from "react";

import { type Locale } from "@/lib/i18n";

import type { GameAchievementCard, SeriesGameCard } from "../types";

import { getAllGamePagesData } from "./page";
import { getSeriesGames } from "./series";

export const searchKamurocho = cache(async (query: string, locale: Locale) => {
  const trimmed = query.trim().toLowerCase();
  // Fetch both locales' rows so a Korean user searching "kiryu" can still
  // hit the English form, and vice versa — the search placeholder advertises
  // 한국어·영어·로마자 표기 모두 인식 / Korean+English+romaji support.
  // Both calls share the same underlying fetchSeriesRows cache.
  const altLocale: Locale = locale === "ko" ? "en" : "ko";
  const [pages, altPages, games, gamesAlt] = await Promise.all([
    getAllGamePagesData(locale),
    getAllGamePagesData(altLocale),
    getSeriesGames(locale),
    getSeriesGames(altLocale),
  ]);
  if (!trimmed) {
    return {
      games,
      achievements: [] as Array<{ game: SeriesGameCard; achievement: GameAchievementCard }>,
    };
  }

  const altByAppId = new Map(gamesAlt.map((g) => [g.appId, g]));
  const matchedGames = games.filter((game) => {
    const alt = altByAppId.get(game.appId);
    const hay = [
      game.name,
      game.altName,
      game.summary,
      alt?.name,
      alt?.altName,
      alt?.summary,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return hay.includes(trimmed);
  });

  const altPagesByAppId = new Map(altPages.map((p) => [p.game.appId, p]));
  const gamesByAppId = new Map(games.map((g) => [g.appId, g]));
  const achievements: Array<{ game: SeriesGameCard; achievement: GameAchievementCard }> = [];
  for (const page of pages) {
    const altPage = altPagesByAppId.get(page.game.appId);
    const altById = new Map((altPage?.achievements ?? []).map((a) => [a.id, a]));
    const seriesGame = gamesByAppId.get(page.game.appId);
    if (!seriesGame) continue;
    for (const achievement of page.achievements) {
      const alt = altById.get(achievement.id);
      const hay = [
        achievement.name,
        achievement.description,
        achievement.guideSummary ?? "",
        alt?.name,
        alt?.description,
        alt?.guideSummary ?? "",
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();
      if (hay.includes(trimmed)) {
        achievements.push({ game: seriesGame, achievement });
      }
    }
  }

  return {
    games: matchedGames,
    achievements: achievements.slice(0, 24),
  };
});
