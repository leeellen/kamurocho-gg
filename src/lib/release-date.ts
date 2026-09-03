import type { Locale } from "@/lib/i18n";

// Steam's storefront returns the release date as a free-form string in the
// requested locale. We only ever request the English storefront for it (see
// `scripts/sync-steam-app.mjs`), so the stored value looks like "Jan 28, 2021".
const STEAM_DATE_RE = /^([A-Za-z]{3,})\s+(\d{1,2}),\s*(\d{4})$/;
const MONTHS = [
  "jan", "feb", "mar", "apr", "may", "jun",
  "jul", "aug", "sep", "oct", "nov", "dec",
];

function parseSteamDate(raw: string | null | undefined): Date | null {
  const match = STEAM_DATE_RE.exec((raw ?? "").trim());
  if (!match) return null;
  const month = MONTHS.indexOf(match[1].slice(0, 3).toLowerCase());
  if (month < 0) return null;
  const date = new Date(Date.UTC(Number(match[3]), month, Number(match[2])));
  return Number.isNaN(date.getTime()) ? null : date;
}

/** `YYYY-MM-DD` for schema.org `datePublished`, which requires ISO 8601. */
export function releaseDateIso(raw: string | null | undefined): string | null {
  return parseSteamDate(raw)?.toISOString().slice(0, 10) ?? null;
}

/** Human-readable release date in the reader's locale, falling back to raw. */
export function formatReleaseDate(raw: string | null | undefined, locale: Locale): string | null {
  const date = parseSteamDate(raw);
  if (!date) return raw?.trim() || null;
  return date.toLocaleDateString(locale === "ko" ? "ko-KR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
