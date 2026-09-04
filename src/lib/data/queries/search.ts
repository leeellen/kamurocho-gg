import { cache } from "react";

import { type Locale } from "@/lib/i18n";

import type { GameAchievementCard, SeriesGameCard } from "../types";

import { COLLECTIBLES_BY_APP } from "@/lib/collectibles";
import { MINIGAMES_BY_APP } from "@/lib/minigames";
import { SUBSTORIES_BY_APP, flattenSubstories } from "@/lib/substories";

import { getAllGamePagesData } from "./page";
import { getSeriesGames } from "./series";

/** A substory, collectible or minigame hit, linking into the game's tab. */
export type GuideHit = {
  kind: "substory" | "collectible" | "minigame";
  gameSlug: string;
  gameName: string;
  tab: string;
  title: string;
  subtitle: string;
};

export const searchKamurocho = cache(async (query: string, locale: Locale) => {
  const trimmed = query.trim().toLowerCase();
  // Match on every whitespace-separated token rather than the raw string, so
  // a natural two-word query ("타이거 드롭", "kiryu clan") still hits rows
  // where the words are separated by other text.
  const tokens = trimmed.split(/\s+/).filter(Boolean);
  const matches = (hay: string) => tokens.every((t) => hay.includes(t));
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
      guides: [] as GuideHit[],
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
    return matches(hay);
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
      if (matches(hay)) {
        achievements.push({ game: seriesGame, achievement });
      }
    }
  }

  // Substories, collectibles and minigames are a big part of what the site
  // documents, but searching only hit games and achievements — a reader
  // looking up a substory by name got "no results".
  const guides: GuideHit[] = [];
  const pick = (pair: { ko?: string | null; en?: string | null } | null | undefined) =>
    (locale === "ko" ? pair?.ko || pair?.en : pair?.en || pair?.ko) ?? "";
  const bothText = (...pairs: Array<{ ko?: string | null; en?: string | null } | null | undefined>) =>
    pairs
      .flatMap((pair) => [pair?.ko ?? "", pair?.en ?? ""])
      .join(" ")
      .toLowerCase();

  for (const game of games) {
    const substories = SUBSTORIES_BY_APP.get(game.appId);
    if (substories) {
      for (const item of flattenSubstories(substories)) {
        if (!matches(bothText(item.title, item.location, item.trigger))) continue;
        guides.push({
          kind: "substory",
          gameSlug: game.slug,
          gameName: game.name,
          tab: "substories",
          title: `#${item.number} ${pick(item.title)}`,
          subtitle: pick(item.location),
        });
      }
    }

    const collectibles = COLLECTIBLES_BY_APP.get(game.appId);
    for (const category of collectibles?.categories ?? []) {
      for (const group of category.groups ?? []) {
        for (const item of group.items ?? []) {
          if (!matches(bothText(item.title, item.location))) continue;
          guides.push({
            kind: "collectible",
            gameSlug: game.slug,
            gameName: game.name,
            tab: "collectibles",
            title: pick(item.title) || pick(item.location),
            subtitle: pick(category.title),
          });
        }
      }
    }

    const minigames = MINIGAMES_BY_APP.get(game.appId);
    for (const minigame of minigames?.minigames ?? []) {
      if (!matches(bothText(minigame.name, minigame.category, minigame.location, minigame.summary))) continue;
      guides.push({
        kind: "minigame",
        gameSlug: game.slug,
        gameName: game.name,
        tab: "minigames",
        title: pick(minigame.name),
        subtitle: pick(minigame.location),
      });
    }
  }

  return {
    games: matchedGames,
    achievements: achievements.slice(0, 24),
    guides: guides.slice(0, 24),
  };
});
