import { cache } from "react";

import { PLAY_ORDER, REFERENCE_TITLES } from "@/lib/content";
import { type Locale } from "@/lib/i18n";

import { getSeriesGames } from "./series";

export const getPlayOrderData = cache(async (locale: Locale) => {
  const games = await getSeriesGames(locale);
  const gameMap = new Map(games.map((game) => [game.slug, game]));
  return {
    newcomer: PLAY_ORDER.new
      .map((entry) => ({
        ...entry,
        reason: locale === "ko" ? entry.reason.ko : entry.reason.en,
        game: gameMap.get(entry.slug),
      }))
      .filter((entry) => entry.game),
    chronological: PLAY_ORDER.chronological
      .map((entry) => ({
        ...entry,
        reason: locale === "ko" ? entry.reason.ko : entry.reason.en,
        game: gameMap.get(entry.slug),
      }))
      .filter((entry) => entry.game),
    references: REFERENCE_TITLES.map((entry) => ({
      slug: entry.slug,
      title: locale === "ko" ? entry.title.ko : entry.title.en,
      year: entry.year,
      releaseInfo: locale === "ko" ? entry.releaseInfo.ko : entry.releaseInfo.en,
      placement: locale === "ko" ? entry.placement.ko : entry.placement.en,
      note: locale === "ko" ? entry.note.ko : entry.note.en,
    })),
  };
});
