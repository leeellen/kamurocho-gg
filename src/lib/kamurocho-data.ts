import { cache } from "react";

import { structureGuide } from "@/lib/guides/structured";
import { type Locale } from "@/lib/i18n";
import {
  CURATED_GAMES,
  MISSABLES,
  PLAY_ORDER,
  RGG_APP_IDS,
  type ChapterMissable,
  getCuratedGameBySlug,
} from "@/lib/kamurocho-content";
import { createAdminClient } from "@/lib/supabase/admin";

type GameRow = {
  app_id: number;
  name: string;
  img_icon_url?: string | null;
  img_logo_url?: string | null;
  total_achievements?: number | null;
};

type AchievementRow = {
  id: number;
  app_id: number;
  api_name: string;
  display_name?: string | null;
  description?: string | null;
  global_percent?: number | string | null;
  difficulty?: string | null;
  icon_url?: string | null;
  icon_gray_url?: string | null;
  category?: string | null;
};

type GuideRow = {
  achievement_id: number;
  locale?: string | null;
  content: string;
  source_url?: string | null;
  confidence?: string | number | null;
};

export type SeriesGameCard = {
  appId: number;
  slug: string;
  name: string;
  altName: string | null;
  arc: string;
  year: number;
  summary: string;
  lead: string;
  platforms: string[];
  estimatedHours: string;
  difficulty: number;
  missableCount: number;
  achievements: number;
  guideCoverage: number;
  rareCount: number;
  imgIconUrl: string | null;
  headerUrl: string | null;
  capsuleUrl: string | null;
};

export type GameAchievementCard = {
  id: number;
  slug: string;
  name: string;
  description: string;
  rarity: number;
  difficulty: string;
  iconUrl: string | null;
  iconGrayUrl: string | null;
  guideSummary: string | null;
  guideSteps: string[];
  guideTips: string[];
  guideStats: string | null;
  guideSource: string | null;
  confidence: string | null;
  missable: boolean;
};

export type GamePageData = {
  game: SeriesGameCard;
  achievements: GameAchievementCard[];
  missables: ChapterMissable[] | undefined;
};

function admin() {
  return createAdminClient();
}

function parseJsonish(raw: string | null | undefined) {
  if (!raw || !raw.startsWith("{")) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function coercePercent(value: number | string | null | undefined) {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  return 0;
}

function pickLocaleGuide(guides: GuideRow[], locale: Locale) {
  const wanted = locale === "ko" ? ["koreana", "korean", "english"] : ["english", "koreana", "korean"];
  for (const loc of wanted) {
    const found = guides.find((guide) => guide.locale === loc && guide.content?.trim());
    if (found) return found;
  }
  return guides.find((guide) => guide.content?.trim()) ?? null;
}

function normalizeConfidence(value: string | number | null | undefined) {
  if (typeof value === "number") return value.toFixed(2);
  if (typeof value === "string" && value.trim()) return value.trim();
  return null;
}

function normalizeComparableText(value: string | null | undefined) {
  return (value ?? "").toLowerCase().replace(/[\s:!?.,'"()[\]-]+/g, "").trim();
}

function sanitizeGuideSummary(summary: string | null, achievementName: string, description: string) {
  if (!summary) return null;
  const normalized = normalizeComparableText(summary);
  if (!normalized) return null;
  if (normalized === normalizeComparableText(achievementName)) return null;
  if (normalized === normalizeComparableText(description)) return null;
  return summary;
}

function sanitizeGuideLines(lines: string[], achievementName: string, description: string) {
  const seen = new Set<string>();
  const blocked = new Set([
    normalizeComparableText(achievementName),
    normalizeComparableText(description),
    normalizeComparableText("지금 해야 할 일"),
    normalizeComparableText("단계별 안내"),
    normalizeComparableText("주의할 점"),
    normalizeComparableText("팁"),
    normalizeComparableText("do this next"),
    normalizeComparableText("next steps"),
    normalizeComparableText("steps"),
    normalizeComparableText("watch for"),
    normalizeComparableText("tips"),
  ]);

  return lines.filter((line) => {
    const normalized = normalizeComparableText(line);
    if (!normalized || blocked.has(normalized) || seen.has(normalized)) return false;
    seen.add(normalized);
    return true;
  });
}

function pickKoreanGameName({
  curatedName,
  sidecarName,
  englishName,
}: {
  curatedName: string;
  sidecarName?: string | null;
  englishName?: string | null;
}) {
  if (curatedName.trim()) return curatedName;
  if (sidecarName?.trim() && sidecarName !== englishName) return sidecarName;
  return englishName ?? curatedName;
}

function shouldPreferEnglishAchievementName(koreanName: string | null | undefined, englishName: string | null | undefined) {
  const ko = koreanName?.trim() ?? "";
  const en = englishName?.trim() ?? "";
  if (!ko || !en || !/[A-Za-z]/.test(en)) return false;
  return /^(프롤로그|에필로그|최종장|제\s*\d+\s*장|챕터\s*\d+).*(클리어|완료)$/.test(ko);
}

function inferMissable(achievement: AchievementRow, guideText: string) {
  const sidecar = parseJsonish(achievement.category ?? null) as { nameKo?: string | null; descKo?: string | null } | null;
  const text = `${achievement.display_name ?? ""} ${achievement.description ?? ""} ${sidecar?.nameKo ?? ""} ${sidecar?.descKo ?? ""} ${guideText}`.toLowerCase();
  return /(missable|chapter end|before chapter|놓치기 쉬운|영구|사라집니다|lock out)/.test(text);
}

async function fetchSeriesRows() {
  const client = admin();
  const { data: games, error: gameError } = await client
    .from("games")
    .select("app_id,name,img_icon_url,img_logo_url,total_achievements")
    .in("app_id", RGG_APP_IDS);
  if (gameError) throw gameError;

  const { data: achievements, error: achievementError } = await client
    .from("achievements")
    .select("id,app_id,api_name,display_name,description,global_percent,difficulty,icon_url,icon_gray_url,category")
    .in("app_id", RGG_APP_IDS)
    .order("app_id", { ascending: true });
  if (achievementError) throw achievementError;

  const achievementIds = (achievements ?? []).map((row) => row.id);
  const guides: GuideRow[] = [];

  for (let index = 0; index < achievementIds.length; index += 200) {
    const slice = achievementIds.slice(index, index + 200);
    if (slice.length === 0) continue;
    const { data, error } = await client
      .from("guides")
      .select("achievement_id,locale,content,source_url,confidence")
      .in("achievement_id", slice)
      .eq("is_active", true);
    if (error) throw error;
    guides.push(...(data ?? []));
  }

  return {
    games: (games ?? []) as GameRow[],
    achievements: (achievements ?? []) as AchievementRow[],
    guides,
  };
}

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
    const game = gameMap.get(curated.appId);
    const gameSidecar = parseJsonish(game?.img_logo_url ?? null) as { nameKo?: string | null; headerUrl?: string | null; capsuleUrl?: string | null } | null;
    const rows = achievements.filter((achievement) => achievement.app_id === curated.appId);
    const rareCount = rows.filter((achievement) => coercePercent(achievement.global_percent) > 0 && coercePercent(achievement.global_percent) <= 10).length;
    const guideCoverage = rows.filter((achievement) => {
      const guide = pickLocaleGuide(guidesByAchievement.get(achievement.id) ?? [], locale);
      return Boolean(guide?.source_url);
    }).length;

    return {
      appId: curated.appId,
      slug: curated.slug,
      name: locale === "ko"
        ? pickKoreanGameName({
            curatedName: curated.title.ko,
            sidecarName: gameSidecar?.nameKo,
            englishName: game?.name ?? curated.title.en,
          })
        : (game?.name || curated.title.en),
      altName:
        locale === "ko"
          ? (game?.name && game?.name !== curated.title.en ? game.name : curated.title.en)
          : null,
      arc: curated.arc,
      year: curated.year,
      summary: locale === "ko" ? curated.summary.ko : curated.summary.en,
      lead: locale === "ko" ? curated.lead.ko : curated.lead.en,
      platforms: curated.platforms,
      estimatedHours: curated.estimatedHours,
      difficulty: curated.difficulty,
      missableCount: curated.missableCount,
      achievements: rows.length || game?.total_achievements || 0,
      guideCoverage,
      rareCount,
      imgIconUrl: game?.img_icon_url ?? null,
      headerUrl: gameSidecar?.headerUrl ?? null,
      capsuleUrl: gameSidecar?.capsuleUrl ?? null,
    };
  });
});

export const getGamePageData = cache(async (slugOrId: string, locale: Locale): Promise<GamePageData | null> => {
  const curated = getCuratedGameBySlug(slugOrId);
  if (!curated) return null;

  const { games, achievements, guides } = await fetchSeriesRows();
  const game = games.find((row) => row.app_id === curated.appId);
  if (!game) return null;

  const guidesByAchievement = new Map<number, GuideRow[]>();
  for (const guide of guides) {
    const current = guidesByAchievement.get(guide.achievement_id) ?? [];
    current.push(guide);
    guidesByAchievement.set(guide.achievement_id, current);
  }

  const cards: GameAchievementCard[] = achievements
    .filter((achievement) => achievement.app_id === curated.appId)
    .map((achievement) => {
      const achievementSidecar = parseJsonish(achievement.category ?? null) as { nameKo?: string | null; descKo?: string | null } | null;
      const selectedGuide = pickLocaleGuide(guidesByAchievement.get(achievement.id) ?? [], locale);
      const structured = structureGuide(selectedGuide?.content.split("\n") ?? [], selectedGuide?.source_url ?? null);
      const koreanName = achievementSidecar?.nameKo || achievement.display_name || achievement.api_name;
      const displayName =
        locale === "ko"
          ? shouldPreferEnglishAchievementName(koreanName, achievement.display_name)
            ? achievement.display_name || koreanName
            : koreanName
          : achievement.display_name || achievementSidecar?.nameKo || achievement.api_name;
      const description =
        locale === "ko"
          ? achievementSidecar?.descKo || achievement.description || ""
          : achievement.description || achievementSidecar?.descKo || "";
      const rarity = coercePercent(achievement.global_percent);
      const guideSteps = sanitizeGuideLines(structured.steps, displayName, description).slice(0, 5);
      const guideTips = sanitizeGuideLines(structured.tips, displayName, description).slice(0, 4);

      return {
        id: achievement.id,
        slug: achievement.api_name.toLowerCase(),
        name: displayName,
        description,
        rarity,
        difficulty: achievement.difficulty || (rarity <= 5 ? "legendary" : rarity <= 10 ? "rare" : rarity <= 30 ? "uncommon" : "common"),
        iconUrl: achievement.icon_url ?? null,
        iconGrayUrl: achievement.icon_gray_url ?? null,
        guideSummary: sanitizeGuideSummary(structured.summary, displayName, description),
        guideSteps,
        guideTips,
        guideStats: structured.statsLine,
        guideSource: selectedGuide?.source_url ?? null,
        confidence: normalizeConfidence(selectedGuide?.confidence),
        missable: inferMissable(achievement, selectedGuide?.content ?? ""),
      };
    })
    .sort((left, right) => left.rarity - right.rarity);

  const gameCard = (await getSeriesGames(locale)).find((item) => item.appId === curated.appId);
  if (!gameCard) return null;

  return {
    game: gameCard,
    achievements: cards,
    missables: MISSABLES[curated.appId],
  };
});

export const getAchievementPageData = cache(async (slugOrId: string, achievementSlug: string, locale: Locale) => {
  const page = await getGamePageData(slugOrId, locale);
  if (!page) return null;
  const achievement = page.achievements.find((item) => item.slug === achievementSlug);
  if (!achievement) return null;
  return { game: page.game, achievement, missables: page.missables };
});

export const getPlayOrderData = cache(async (locale: Locale) => {
  const games = await getSeriesGames(locale);
  const gameMap = new Map(games.map((game) => [game.slug, game]));
  return {
    newcomer: PLAY_ORDER.new.map((entry) => ({
      ...entry,
      reason: locale === "ko" ? entry.reason.ko : entry.reason.en,
      game: gameMap.get(entry.slug),
    })).filter((entry) => entry.game),
    chronological: PLAY_ORDER.chronological.map((entry) => ({
      ...entry,
      reason: locale === "ko" ? entry.reason.ko : entry.reason.en,
      game: gameMap.get(entry.slug),
    })).filter((entry) => entry.game),
  };
});

export const getMissablesIndex = cache(async (locale: Locale) => {
  const games = await getSeriesGames(locale);
  const gameMap = new Map(games.map((game) => [game.appId, game]));
  return Object.entries(MISSABLES)
    .map(([appId, chapters]) => ({
      game: gameMap.get(Number(appId)) ?? null,
      chapters: (chapters ?? []).map((chapter) => ({
        chapter: chapter.chapter,
        title: locale === "ko" ? chapter.title.ko : chapter.title.en,
        items: chapter.items.map((item) => ({
          kind: item.kind,
          title: locale === "ko" ? item.title.ko : item.title.en,
          when: locale === "ko" ? item.when.ko : item.when.en,
          body: locale === "ko" ? item.body.ko : item.body.en,
        })),
      })),
    }))
    .filter((entry) => entry.game);
});

export const searchKamurocho = cache(async (query: string, locale: Locale) => {
  const trimmed = query.trim().toLowerCase();
  const games = await getSeriesGames(locale);
  if (!trimmed) {
    return { games, achievements: [] as Array<{ game: SeriesGameCard; achievement: GameAchievementCard }> };
  }

  const matchedGames = games.filter((game) =>
    [game.name, game.altName, game.summary, game.lead].join(" ").toLowerCase().includes(trimmed),
  );

  const achievements: Array<{ game: SeriesGameCard; achievement: GameAchievementCard }> = [];
  for (const game of games) {
    const page = await getGamePageData(game.slug, locale);
    for (const achievement of page?.achievements ?? []) {
      if ([achievement.name, achievement.description, achievement.guideSummary ?? ""].join(" ").toLowerCase().includes(trimmed)) {
        achievements.push({ game, achievement });
      }
    }
  }

  return {
    games: matchedGames,
    achievements: achievements.slice(0, 24),
  };
});
