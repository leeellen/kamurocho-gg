import type { Locale } from "@/lib/i18n";

import { JUDGMENT_CURATED } from "./judgment";
import { LIKE_A_DRAGON_GAIDEN_CURATED } from "./like-a-dragon-gaiden";
import { LIKE_A_DRAGON_INFINITE_WEALTH_CURATED } from "./like-a-dragon-infinite-wealth";
import { LIKE_A_DRAGON_ISHIN_CURATED } from "./like-a-dragon-ishin";
import { LIKE_A_DRAGON_PIRATE_CURATED } from "./like-a-dragon-pirate-yakuza-in-hawaii";
import { LOST_JUDGMENT_CURATED } from "./lost-judgment";
import { YAKUZA_0_CURATED } from "./yakuza-0";
import { YAKUZA_3_CURATED } from "./yakuza-3";
import { YAKUZA_4_CURATED } from "./yakuza-4";
import { YAKUZA_5_CURATED } from "./yakuza-5";
import { YAKUZA_6_CURATED } from "./yakuza-6";
import { YAKUZA_KIWAMI_CURATED } from "./yakuza-kiwami";
import { YAKUZA_KIWAMI_2_CURATED } from "./yakuza-kiwami-2";
import { YAKUZA_LIKE_A_DRAGON_CURATED } from "./yakuza-like-a-dragon";

export type LocalizedText = { ko: string; en: string };

/**
 * Curated override for an achievement guide. Values here take precedence over
 * the auto-generated DB summary/steps/tips so editors can hand-author the
 * step-by-step detail that the bulk Steam guide ingest can't produce on its
 * own — exact dialogue choices, every cat/photo/key location, etc.
 *
 * Every field is optional: only the parts present override the DB output, so
 * a curated entry can extend just the summary or just the steps.
 */
export type CuratedVideo = {
  title: LocalizedText;
  url: string;
};

export type CuratedGuide = {
  summary?: LocalizedText;
  steps?: LocalizedText[];
  tips?: LocalizedText[];
  /**
   * Optional video walkthroughs (e.g. YouTube) for steps that read better as
   * a demonstration than as text — mahjong, billiards carom shots, arcade
   * minigames, and the like.
   */
  videos?: CuratedVideo[];
  sourceUrl?: string;
  sourceLabel?: LocalizedText;
};

// Keyed by `${appId}:${apiName.toLowerCase()}`. The api_name is the Steam
// achievement key, which is stable across regions and the same string we use
// for the URL slug.
const CURATED_GUIDES: Record<string, CuratedGuide> = {
  ...JUDGMENT_CURATED,
  ...LOST_JUDGMENT_CURATED,
  ...LIKE_A_DRAGON_GAIDEN_CURATED,
  ...LIKE_A_DRAGON_INFINITE_WEALTH_CURATED,
  ...LIKE_A_DRAGON_ISHIN_CURATED,
  ...LIKE_A_DRAGON_PIRATE_CURATED,
  ...YAKUZA_0_CURATED,
  ...YAKUZA_KIWAMI_CURATED,
  ...YAKUZA_KIWAMI_2_CURATED,
  ...YAKUZA_3_CURATED,
  ...YAKUZA_4_CURATED,
  ...YAKUZA_5_CURATED,
  ...YAKUZA_6_CURATED,
  ...YAKUZA_LIKE_A_DRAGON_CURATED,
};

export function getCuratedGuide(appId: number, apiName: string): CuratedGuide | null {
  const key = `${appId}:${apiName.toLowerCase()}`;
  return CURATED_GUIDES[key] ?? null;
}

export function pickCuratedString(value: LocalizedText | undefined, locale: Locale): string | undefined {
  if (!value) return undefined;
  return locale === "ko" ? value.ko : value.en;
}

export function pickCuratedList(values: LocalizedText[] | undefined, locale: Locale): string[] | undefined {
  if (!values || values.length === 0) return undefined;
  return values.map((entry) => (locale === "ko" ? entry.ko : entry.en));
}

export function pickCuratedVideos(
  videos: CuratedVideo[] | undefined,
  locale: Locale,
): { title: string; url: string }[] {
  if (!videos || videos.length === 0) return [];
  return videos.map((video) => ({
    title: locale === "ko" ? video.title.ko : video.title.en,
    url: video.url,
  }));
}
