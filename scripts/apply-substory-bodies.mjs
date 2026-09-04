// Write hand-authored substory walkthrough bodies into src/lib/substories/*.ts.
//
// Input: a JSON array of
//   { appId, number, koTitle, body: { ko, en },
//     reward?: { ko, en }, location?: { ko, en }, trigger?: { ko, en } }
// `koTitle` disambiguates the entries that legitimately share a number
// (Yakuza 0 numbers 49-54 twice, once per protagonist).
//
//   IN=/path/to/bodies.json node scripts/apply-substory-bodies.mjs
//   IN=... DRY=1 node scripts/apply-substory-bodies.mjs
//
// It edits the TypeScript source with regexes rather than a parser, which is
// fine for these files because every entry is a flat one-line-per-field object
// literal. A `body: {` broken across lines with a nested `},` inside would be
// mis-matched — run with DRY=1 first and check the reported counts.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const IN = process.env.IN;
if (!IN) throw new Error("set IN=<bodies.json>");
const DRY = process.env.DRY === "1";

const FILES = {
  1088710: "yakuza-3.ts",
  2058190: "lost-judgment.ts",
  1388590: "yakuza-6.ts",
  2988580: "yakuza-0.ts",
  3717340: "yakuza-kiwami-2.ts",
  3717330: "yakuza-kiwami.ts",
  3937550: "yakuza-kiwami-3.ts",
};
const ROOT = resolve("src/lib/substories");

/** Escape a value for a double-quoted TS string literal. */
const q = (s) => `"${String(s).replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n")}"`;

const rows = JSON.parse(readFileSync(resolve(IN), "utf8"));
const byApp = new Map();
for (const row of rows) {
  if (!FILES[row.appId]) throw new Error(`unknown appId ${row.appId}`);
  if (!row.body?.ko?.trim() || !row.body?.en?.trim()) {
    throw new Error(`${row.appId} #${row.number}: body needs both locales`);
  }
  if (!/[가-힣]/.test(row.body.ko)) throw new Error(`${row.appId} #${row.number}: ko body has no Hangul`);
  if (/[가-힣]/.test(row.body.en)) throw new Error(`${row.appId} #${row.number}: en body contains Hangul`);
  if (!byApp.has(row.appId)) byApp.set(row.appId, []);
  byApp.get(row.appId).push(row);
}

let written = 0;
let skipped = 0;
for (const [appId, list] of byApp) {
  const path = resolve(ROOT, FILES[appId]);
  let src = readFileSync(path, "utf8");

  for (const row of list) {
    // Find every object literal opening with this number, then pick the one
    // whose Korean title matches.
    const starts = [...src.matchAll(new RegExp(`\\n(\\s*)number: ${row.number},`, "g"))];
    const hit = starts.find((m) => {
      const end = src.indexOf("\n" + m[1].slice(0, -2) + "},", m.index + 1);
      const block = src.slice(m.index, end === -1 ? m.index + 4000 : end);
      return block.includes(`ko: ${q(row.koTitle)}`);
    });
    if (!hit) {
      console.warn(`  no match: app ${appId} #${row.number} ${row.koTitle}`);
      skipped += 1;
      continue;
    }
    const indent = hit[1];
    const blockEnd = src.indexOf(`\n${indent.slice(0, -2)}},`, hit.index + 1);
    let block = src.slice(hit.index, blockEnd);

    // `location` and `trigger` first: entries that were only documented by
    // name and number carry neither, and `body` is inserted after `trigger`.
    for (const field of ["location", "trigger"]) {
      const value = row[field];
      if (!value?.ko || !value?.en) continue;
      const line = `${indent}${field}: { ko: ${q(value.ko)}, en: ${q(value.en)} },`;
      const re = new RegExp(`\\n\\s*${field}: \\{.*?\\},`, "s");
      block = re.test(block) ? block.replace(re, `\n${line}`) : `${block}\n${line}`;
    }

    const bodyLine = `${indent}body: { ko: ${q(row.body.ko)}, en: ${q(row.body.en)} },`;
    let next;
    if (/\n\s*body: \{/.test(block)) {
      next = block.replace(/\n\s*body: \{.*?\n?(?=\s*(?:reward|steps|choices|prereq|video|image|number|title):|$)/s, `\n${bodyLine}\n`);
    } else {
      // insert right after the trigger line, which every entry has
      next = block.replace(/(\n\s*trigger: \{.*?\},)/s, `$1\n${bodyLine}`);
      if (next === block) next = `${block}\n${bodyLine}`;
    }

    if (row.reward?.ko && row.reward?.en) {
      const rewardLine = `${indent}reward: { ko: ${q(row.reward.ko)}, en: ${q(row.reward.en)} },`;
      next = /\n\s*reward: \{/.test(next)
        ? next.replace(/\n\s*reward: \{.*?\},/s, `\n${rewardLine}`)
        : `${next}\n${rewardLine}`;
    }

    src = src.slice(0, hit.index) + next + src.slice(blockEnd);
    written += 1;
  }

  if (!DRY) writeFileSync(path, src, "utf8");
  console.log(`${FILES[appId]}: ${list.length} requested`);
}

console.log(DRY ? `DRY=1 — nothing written (${written} would change, ${skipped} unmatched)` : `done written=${written} skipped=${skipped}`);
