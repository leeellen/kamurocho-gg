// Hand-authored Korean strings for games Steam does not localize into Korean.
//
// `GetSchemaForGame?l=koreana` silently returns the *English* strings when a
// title has no Korean achievement localization (Yakuza 6 is the only RGG game
// affected). Storing that verbatim made 59 achievement names and 51
// descriptions render in English on the Korean site, so the Korean text lives
// here instead and is layered on top of the Steam sync.
//
// Sources: Japanese Steam schema (`l=japanese`) for wording, cross-checked
// against the Korean PS4 trophy list.
//
// Add a file per app id: `scripts/ko-overrides/<appId>.json`, shaped
// `{ appId, nameKo, shortDescriptionKo, achievements: { <api_name>: { nameKo, descKo } } }`.
// `descKo` is `null` for achievements Steam ships with no description.

import { readdirSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

/** @type {Map<number, { appId: number, nameKo: string | null, shortDescriptionKo: string | null, achievements: Record<string, { nameKo: string | null, descKo: string | null }> }>} */
export const KO_OVERRIDES = new Map();

for (const file of readdirSync(HERE).filter((f) => f.endsWith(".json")).sort()) {
  const entry = JSON.parse(readFileSync(resolve(HERE, file), "utf8"));
  if (typeof entry.appId !== "number") throw new Error(`${file}: missing numeric appId`);
  KO_OVERRIDES.set(entry.appId, entry);
}

const HANGUL = /[가-힣]/;

/**
 * Steam echoes English back for unlocalized titles, so treat a Korean field
 * with no Hangul in it as absent rather than storing the English twice.
 */
export function koTextOrNull(value) {
  const text = typeof value === "string" ? value.trim() : "";
  if (!text || !HANGUL.test(text)) return null;
  return text;
}
