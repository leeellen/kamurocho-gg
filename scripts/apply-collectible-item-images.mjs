// Attach a per-item screenshot to collectible entries.
//
// Pins tell you which block a thing is on; they cannot tell you it is on the
// third-floor wall behind a lamppost. Guide sites publish an in-game capture
// per item with the thing ringed, and `CollectibleItem.image` renders it as a
// grid thumbnail and full width in the detail modal.
//
// Input (IN=...): an array of
//   { file, group, images: { "<item number>": "<url>" } }
// `group` is the group's English title. Only entries already present in that
// group are touched; a number with no matching item is reported and skipped.
//
//   IN=/tmp/images.json DRY=1 node scripts/apply-collectible-item-images.mjs
//   IN=/tmp/images.json node scripts/apply-collectible-item-images.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const IN = process.env.IN;
if (!IN) throw new Error("set IN=<images.json>");
const DRY = process.env.DRY === "1";

const rows = JSON.parse(readFileSync(resolve(IN), "utf8"));
const byFile = new Map();
for (const row of rows) {
  if (!row.file || !row.group || !row.images) throw new Error("file, group and images are required");
  for (const [key, url] of Object.entries(row.images)) {
    if (!/^\d+$/.test(key)) throw new Error(`${row.group}: ${key} is not an item number`);
    // Either an external URL or a self-hosted path under public/.
    if (typeof url !== "string" || !/^(https?:\/\/|\/)/.test(url)) throw new Error(`${row.group}: ${key} is not a url or path`);
  }
  if (!byFile.has(row.file)) byFile.set(row.file, []);
  byFile.get(row.file).push(row);
}

let written = 0;
let missing = 0;
for (const [file, list] of byFile) {
  const path = resolve("src/lib/collectibles", file);
  let src = readFileSync(path, "utf8");

  for (const row of list) {
    const literal = JSON.stringify(row.group).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const anchor = new RegExp(`\\n(\\s*)title: \\{ ko: "[^"]*", en: ${literal} \\},`, "g");
    const hit = [...src.matchAll(anchor)];
    if (hit.length !== 1) throw new Error(`${file}: ${hit.length} matches for group ${row.group}`);

    // The group runs from its title to the next group's opening brace.
    const from = hit[0].index;
    const nextGroup = src.indexOf(`\n${hit[0][1].slice(0, -2)}},`, from + 1);
    const to = nextGroup === -1 ? src.length : nextGroup;
    let block = src.slice(from, to);

    for (const [no, url] of Object.entries(row.images)) {
      // Item objects are one per line: `{ number: 7, title: {...}, ... },`
      const line = new RegExp(`^(\\s*)\\{ number: ${no},(.*)$`, "m");
      const m = line.exec(block);
      if (!m) {
        console.warn(`  ${row.group}: no item ${no}`);
        missing += 1;
        continue;
      }
      const rest = m[2].includes(" image: ")
        ? m[2].replace(/ image: "(?:[^"\\]|\\.)*",/, ` image: ${JSON.stringify(url)},`)
        : ` image: ${JSON.stringify(url)},${m[2]}`;
      block = block.replace(m[0], `${m[1]}{ number: ${no},${rest}`);
      written += 1;
    }

    src = src.slice(0, from) + block + src.slice(to);
  }

  if (!DRY) writeFileSync(path, src, "utf8");
  console.log(`${file}: ${list.length} group(s)`);
}

console.log(DRY ? `DRY=1 — nothing written (${written} would change, ${missing} unmatched)` : `done written=${written} unmatched=${missing}`);
