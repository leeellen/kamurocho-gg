import { cache } from "react";

import { CURATED_GAMES, EXTERNAL_GUIDES, type ExternalGuideKind } from "@/lib/content";
import { type Locale } from "@/lib/i18n";

export type EmptyLotGuide = {
  slug: string;
  name: string;
  year: number;
  links: { kind: ExternalGuideKind; url: string }[];
  /**
   * Steam Community guides for this title filtered to save-file uploads.
   * We link to the live search rather than hard-coding fragile guide IDs, so
   * it always lands on whatever 100% saves the community currently hosts.
   */
  saveUrl: string;
};

function steamSaveSearchUrl(appId: number): string {
  return `https://steamcommunity.com/app/${appId}/guides/?searchText=save&browsefilter=trend`;
}

/**
 * Game-by-game external achievement guides for the hidden "Empty Lot" hub.
 * Ordered by in-universe year, matching the rest of the site, and limited to
 * titles that have a curated authoritative source link.
 */
export const getEmptyLotGuides = cache((locale: Locale): EmptyLotGuide[] =>
  CURATED_GAMES.filter((game) => EXTERNAL_GUIDES[game.slug]?.length)
    .slice()
    .sort((a, b) => a.year - b.year)
    .map((game) => ({
      slug: game.slug,
      name: locale === "ko" ? game.title.ko : game.title.en,
      year: game.year,
      links: EXTERNAL_GUIDES[game.slug],
      saveUrl: steamSaveSearchUrl(game.appId),
    })),
);
