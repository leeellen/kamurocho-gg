import {
  localizeAchievementDescription,
  localizeAchievementName,
  parseAchievementSidecar,
} from "@/lib/achievement-text";
import { getCuratedGuide, pickCuratedList, pickCuratedString, pickCuratedVideos } from "@/lib/guides/curated";
import { type Locale } from "@/lib/i18n";
import type { CuratedGame } from "@/lib/content";
import { EXTERNAL_GUIDES, MISSABLES } from "@/lib/content";

import {
  buildDisplayMissables,
  countMissableChecks,
  extractChapterFromGuide,
  inferMissable,
} from "../missables";
import {
  coercePercent,
  decodeHtmlEntities,
  normalizeComparableText,
  parseJsonish,
} from "../sanitize";
import type {
  AchievementRow,
  GameAchievementCard,
  GamePageData,
  GameRow,
  GuideRow,
  SeriesGameCard,
} from "../types";

type GameSidecar = {
  nameKo?: string | null;
  shortDescriptionEn?: string | null;
  shortDescriptionKo?: string | null;
  releaseDate?: string | null;
  releaseYear?: number | null;
  headerUrl?: string | null;
  capsuleUrl?: string | null;
};

// Game title + short description must come from Steam's own appdetails
// response. Steam Korean storefront is requested with `l=koreana` in the
// sync script and stored in the sidecar; titles like Yakuza 6 that lack a
// Korean schema return null, and we deliberately fall back to the English
// Steam strings rather than a curated translation.
function pickSteamGameName({
  sidecarName,
  englishName,
}: {
  sidecarName?: string | null;
  englishName?: string | null;
}): string {
  const ko = decodeHtmlEntities(sidecarName).trim();
  const en = decodeHtmlEntities(englishName).trim();
  if (ko && ko !== en) return ko;
  return en || ko || "";
}

function pickSteamShortDescription({
  locale,
  sidecar,
}: {
  locale: Locale;
  sidecar: GameSidecar | null;
}): string {
  const en = decodeHtmlEntities(sidecar?.shortDescriptionEn).trim();
  const ko = decodeHtmlEntities(sidecar?.shortDescriptionKo).trim();
  if (locale === "ko") return ko || en;
  return en || ko;
}

export function buildSeriesGameCard({
  curated,
  game,
  rows,
  locale,
}: {
  curated: CuratedGame;
  game: GameRow | null | undefined;
  rows: AchievementRow[];
  locale: Locale;
}): SeriesGameCard {
  const gameSidecar = parseJsonish(game?.img_logo_url ?? null) as GameSidecar | null;
  const steamName = pickSteamGameName({
    sidecarName: locale === "ko" ? gameSidecar?.nameKo : null,
    englishName: game?.name,
  });
  const steamShortDescription = pickSteamShortDescription({ locale, sidecar: gameSidecar });
  // Curated missable titles contain the trophy name plus a description, so
  // instead of trying to extract just the name with bracket/quote regex
  // (which fails on apostrophes like "They Won't Mind"), we keep the full
  // curated title text and check whether each DB achievement name appears
  // inside it. Use the shared comparable-text normalizer so brackets and
  // em-dashes don't break substring matches — must stay in lock-step with
  // buildDisplayMissables() in ../missables.ts so both surfaces agree.
  const curatedTitleHay: string[] = [];
  for (const chapter of MISSABLES[curated.appId] ?? []) {
    for (const item of chapter.items) {
      if (item.kind !== "missable") continue;
      curatedTitleHay.push(normalizeComparableText(item.title.ko));
      curatedTitleHay.push(normalizeComparableText(item.title.en));
    }
  }
  const isNameCovered = (name: string) => {
    const needle = normalizeComparableText(name);
    if (needle.length < 3) return false;
    return curatedTitleHay.some((hay) => hay.includes(needle));
  };
  const derivedAchievements = rows.map((achievement) => {
    const sidecar = parseAchievementSidecar(achievement.category ?? null);
    const localizedName = localizeAchievementName({
      locale,
      englishName: achievement.display_name,
      apiName: achievement.api_name,
      sidecar,
    });
    return {
      missable: getCuratedGuide(curated.appId, achievement.api_name)?.missable
        ?? inferMissable(achievement, JSON.stringify(getCuratedGuide(curated.appId, achievement.api_name) ?? {})),
      name: localizedName,
    };
  });
  const curatedChecks = (MISSABLES[curated.appId] ?? []).reduce(
    (sum, chapter) => sum + chapter.items.filter((item) => item.kind === "missable").length,
    0,
  );
  const derivedChecks = derivedAchievements.filter(
    (achievement) => achievement.missable && !isNameCovered(achievement.name),
  ).length;
  const rareCount = rows.filter(
    (achievement) =>
      coercePercent(achievement.global_percent) > 0 &&
      coercePercent(achievement.global_percent) <= 10,
  ).length;
  const guideCoverage = rows.filter((achievement) => {
    const guide = getCuratedGuide(curated.appId, achievement.api_name);
    return Boolean(guide?.sourceUrl && (guide.summary || guide.steps?.length));
  }).length;

  return {
    appId: curated.appId,
    slug: curated.slug,
    name: steamName || curated.title.en,
    altName:
      locale === "ko" && game?.name && game.name !== steamName ? game.name : null,
    arc: curated.arc,
    year: curated.year,
    // Steam short_description is the source of truth. Falls back to the
    // curated copy only when the sidecar predates the v3 sync (no
    // shortDescription* fields yet). Re-run scripts/sync-steam-app.mjs to
    // remove that fallback for any given title.
    summary: steamShortDescription || (locale === "ko" ? curated.summary.ko : curated.summary.en),
    releaseYear: gameSidecar?.releaseYear ?? null,
    releaseDate: gameSidecar?.releaseDate ?? null,
    platforms: curated.platforms,
    timeEstimate: {
      story: curated.timeEstimate.story,
      completion: curated.timeEstimate.completion,
      note: locale === "ko" ? curated.timeEstimate.note.ko : curated.timeEstimate.note.en,
    },
    difficulty: curated.difficulty,
    missableCount: curatedChecks + derivedChecks,
    achievements: rows.length || game?.total_achievements || 0,
    guideCoverage,
    rareCount,
    imgIconUrl: game?.img_icon_url ?? null,
    headerUrl: gameSidecar?.headerUrl ?? null,
    capsuleUrl: gameSidecar?.capsuleUrl ?? null,
    engine: curated.engine,
  };
}

export function buildGamePageData({
  curated,
  game,
  gameAchievements,
  locale,
}: {
  curated: CuratedGame;
  game: GameRow | null;
  gameAchievements: AchievementRow[];
  guides: GuideRow[];
  locale: Locale;
}): GamePageData | null {
  if (!game) return null;

  const mappedCards: GameAchievementCard[] = gameAchievements
    .map((achievement) => {
      const achievementSidecar = parseAchievementSidecar(achievement.category ?? null);
      const displayName = localizeAchievementName({
        locale,
        englishName: achievement.display_name,
        apiName: achievement.api_name,
        sidecar: achievementSidecar,
      });
      const description = localizeAchievementDescription({
        locale,
        englishDescription: achievement.description,
        sidecar: achievementSidecar,
      });
      const rarity = coercePercent(achievement.global_percent);
      // Imported guide prose is unreviewed generation, not evidence for requirements.
      const curatedGuide = getCuratedGuide(curated.appId, achievement.api_name);
      const guideSummary = pickCuratedString(curatedGuide?.summary, locale) ?? description;
      const guideSteps = pickCuratedList(curatedGuide?.steps, locale) ?? [];
      const guideTips = pickCuratedList(curatedGuide?.tips, locale) ?? [];
      const guideVideos = pickCuratedVideos(curatedGuide?.videos, locale);
      const guideSource = curatedGuide?.sourceUrl ?? EXTERNAL_GUIDES[curated.slug]?.[0]?.url ?? null;
      const guideSourceLabel = pickCuratedString(curatedGuide?.sourceLabel, locale) ?? null;

      return {
        id: achievement.id,
        slug: achievement.api_name.toLowerCase(),
        name: displayName,
        description,
        rarity,
        difficulty:
          achievement.difficulty ||
          (rarity <= 5 ? "legendary" : rarity <= 10 ? "rare" : rarity <= 30 ? "uncommon" : "common"),
        iconUrl: achievement.icon_url ?? null,
        iconGrayUrl: achievement.icon_gray_url ?? null,
        guideSummary,
        guideSteps,
        guideTips,
        guideVideos,
        guideStats: "",
        guideSource,
        guideSourceLabel,
        confidence: null,
        missable: curatedGuide?.missable
          ?? inferMissable(achievement, JSON.stringify(getCuratedGuide(curated.appId, achievement.api_name) ?? {})),
        chapter: extractChapterFromGuide(JSON.stringify(curatedGuide ?? {})),
      };
    })
    .sort((left, right) => left.rarity - right.rarity);

  const gameCard = buildSeriesGameCard({
    curated,
    game,
    rows: gameAchievements,
      locale,
  });

  const displayMissables = buildDisplayMissables({
    achievements: mappedCards,
    curatedMissables: MISSABLES[curated.appId],
    locale,
  });
  const curatedMissables = (MISSABLES[curated.appId] ?? [])
    .map((chapter) => ({
      ...chapter,
      items: chapter.items.filter((item) => item.kind === "missable"),
    }))
    .filter((chapter) => chapter.items.length > 0);

  return {
    game: {
      ...gameCard,
      missableCount: countMissableChecks(displayMissables),
    },
    achievements: mappedCards,
    missables: curatedMissables,
  };
}
