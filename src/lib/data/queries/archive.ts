import { cache } from "react";

import { REFERENCE_TITLES } from "@/lib/content";
import { type Locale } from "@/lib/i18n";

function pick(value: { ko: string; en: string }, locale: Locale) {
  return locale === "ko" ? value.ko : value.en;
}

/** Localized archive entry for the /archive/[slug] vault pages. */
export type ArchiveEntry = {
  slug: string;
  title: string;
  originalTitle: string | null;
  year: number;
  releaseInfo: string;
  lead: string;
  placement: string;
  availability: string;
  note: string;
  overview: string[];
  whyItMatters: string;
  modernRoute: string | null;
};

function toEntry(
  entry: (typeof REFERENCE_TITLES)[number],
  locale: Locale,
): ArchiveEntry {
  return {
    slug: entry.slug,
    title: pick(entry.title, locale),
    originalTitle: entry.originalTitle ?? null,
    year: entry.year,
    releaseInfo: pick(entry.releaseInfo, locale),
    lead: pick(entry.lead, locale),
    placement: pick(entry.placement, locale),
    availability: pick(entry.availability, locale),
    note: pick(entry.note, locale),
    overview: entry.overview.map((paragraph) => pick(paragraph, locale)),
    whyItMatters: pick(entry.whyItMatters, locale),
    modernRoute: entry.modernRoute ? pick(entry.modernRoute, locale) : null,
  };
}

export const getArchiveEntries = cache((locale: Locale): ArchiveEntry[] =>
  REFERENCE_TITLES.map((entry) => toEntry(entry, locale)),
);

export const getArchiveEntry = cache(
  (slug: string, locale: Locale): ArchiveEntry | null => {
    const match = REFERENCE_TITLES.find((entry) => entry.slug === slug);
    return match ? toEntry(match, locale) : null;
  },
);

export const ARCHIVE_SLUGS = REFERENCE_TITLES.map((entry) => entry.slug);
