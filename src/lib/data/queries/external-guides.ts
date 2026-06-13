import { cache } from "react";

import { CURATED_GAMES, EXTERNAL_GUIDES, type ExternalGuideKind } from "@/lib/content";
import { type Locale } from "@/lib/i18n";

export type EmptyLotGuide = {
  slug: string;
  name: string;
  year: number;
  links: { kind: ExternalGuideKind; url: string }[];
};

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
    })),
);
