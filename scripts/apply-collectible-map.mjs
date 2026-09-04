// Attach a map image and its pin coordinates to collectible groups.
//
// Input (IN=...): an array of
//   { file, group, mapImage, bareMap?, hotspots: { "<item number>": [x%, y%] } }
// `group` is the group's English title, which is unique inside a file, and the
// three fields are written directly after that title line. Re-running replaces
// whatever is already there, so a re-derived set of coordinates can just be
// applied again.
//
//   IN=/tmp/maps.json DRY=1 node scripts/apply-collectible-map.mjs
//   IN=/tmp/maps.json node scripts/apply-collectible-map.mjs

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const IN = process.env.IN;
if (!IN) throw new Error("set IN=<maps.json>");
const DRY = process.env.DRY === "1";

const rows = JSON.parse(readFileSync(resolve(IN), "utf8"));
const byFile = new Map();
for (const row of rows) {
  if (!row.file || !row.group || !row.mapImage) throw new Error("file, group and mapImage are required");
  if (!row.hotspots || Object.keys(row.hotspots).length === 0) throw new Error(`${row.group}: no hotspots`);
  for (const [key, value] of Object.entries(row.hotspots)) {
    if (!/^\d+$/.test(key)) throw new Error(`${row.group}: hotspot key ${key} is not an item number`);
    if (!Array.isArray(value) || value.length !== 2 || value.some((n) => typeof n !== "number" || n < 0 || n > 100)) {
      throw new Error(`${row.group}: hotspot ${key} is not an [x%, y%] pair`);
    }
  }
  if (!byFile.has(row.file)) byFile.set(row.file, []);
  byFile.get(row.file).push(row);
}

let written = 0;
for (const [file, list] of byFile) {
  const path = resolve("src/lib/collectibles", file);
  let src = readFileSync(path, "utf8");

  for (const row of list) {
    const literal = JSON.stringify(row.group).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const anchor = new RegExp(`\\n(\\s*)title: \\{ ko: "[^"]*", en: ${literal} \\},`, "g");
    const hit = [...src.matchAll(anchor)];
    if (hit.length !== 1) throw new Error(`${file}: ${hit.length} matches for group ${row.group}`);
    const [match] = hit;
    const indent = match[1];

    // Drop any map fields already sitting between the title and `items:`.
    const after = match.index + match[0].length;
    const itemsAt = src.indexOf(`${indent}items: [`, after);
    if (itemsAt < 0) throw new Error(`${file}: no items after ${row.group}`);

    const pins = Object.entries(row.hotspots)
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([n, [x, y]]) => `${indent}  "${n}": [${x}, ${y}],`)
      .join("\n");
    const block =
      `\n${indent}mapImage: ${JSON.stringify(row.mapImage)},` +
      (row.bareMap === false ? "" : `\n${indent}bareMap: true,`) +
      `\n${indent}hotspots: {\n${pins}\n${indent}},\n`;

    src = src.slice(0, after) + block + src.slice(itemsAt);
    written += 1;
  }

  if (!DRY) writeFileSync(path, src, "utf8");
  console.log(`${file}: ${list.length} group(s)`);
}

console.log(DRY ? `DRY=1 — nothing written (${written} would change)` : `done written=${written}`);
