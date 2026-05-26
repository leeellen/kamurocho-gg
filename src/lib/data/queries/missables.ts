import { cache } from "react";

import { type Locale } from "@/lib/i18n";

import { buildDisplayMissables, countMissableChecks } from "../missables";

import { getAllGamePagesData } from "./page";

export const getMissablesIndex = cache(async (locale: Locale) => {
  const pages = await getAllGamePagesData(locale);
  const entries = pages
    .map((page) => {
      const chapters = buildDisplayMissables({
        achievements: page.achievements,
        curatedMissables: page.missables,
        locale,
      });
      if (chapters.length === 0) return null;
      return {
        game: { ...page.game, missableCount: countMissableChecks(chapters) },
        chapters,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
  return entries;
});
