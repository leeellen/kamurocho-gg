// Pull a game8 interactive-map widget's data and base images.
//
// game8 guide pages embed `<div class="react-new_map_tool-wrapper"
// data-react-props='{"toolStructuralMapping":{"id":"374",...}}'>`, and the
// widget reads `https://game8.jp/api/tool_structural_mappings/<id>.json`. The
// API refuses requests without a Referer from the page, so send one.
//
// The JSON carries one base image per `area` (usually one per city) and one
// entry per marker: `{ title, description, area, classification, coordinate }`.
// `coordinate` is "A,B" in the widget's own space, NOT percentages — see
// `game8Percent` below.
//
//   node scripts/fetch-game8-map.mjs --page https://game8.jp/<site>/<id>
//   node scripts/fetch-game8-map.mjs --page <url> --out /tmp/map.json
//   node scripts/fetch-game8-map.mjs --page <url> --images public/<game>-<feature>
//   node scripts/fetch-game8-map.mjs --page <url> --coords 鍵 --out /tmp/pins.json
//
// With --images, each area's base image is downloaded and converted to webp
// (max 1600px wide, never upscaled) as `<area index>.webp`; ImageMagick's
// `magick` must be on PATH. With --coords, `--out` instead receives
// `{ "<area>": { "<marker title>": { pos: [x%, y%], image } } }` — `pos` is
// ready to become `hotspots`, and `image` is the marker's popup screenshot
// (an in-game capture with the item ringed), ready to become `item.image`.

import { execFileSync } from "node:child_process";
import { mkdirSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

// The widget is Leaflet over a plain image. Its "A,B" pair is not x,y percent:
// the numbers are swapped and the first one counts up from the bottom, on a
// 100/256 scale. Regressing the JSON values against the live widget's rendered
// marker centres gives this fit on both of Kiwami 3's areas with a residual
// under 0.15% of image width — see `docs` in the commit that added this. Derive
// it again for any new mapping id rather than assuming, but start here.
function game8Percent(coordinate) {
  // One marker in Kiwami 3's data reads "216.82,42,32", where the second
  // comma is a typo for a decimal point. Repair rather than drop the pin.
  const parts = coordinate.split(",");
  const [a, b] = (parts.length === 3 ? [parts[0], `${parts[1]}.${parts[2]}`] : parts).map(Number);
  return [Number((0.3903 * b + 1.77).toFixed(2)), Number((100 - 0.3906 * a).toFixed(2))];
}

// A few popupImage values in game8's data are the same URL written twice with
// no separator ("…/originalhttps://…/original"). Keep the first one.
function firstUrl(value) {
  if (!value) return null;
  const [first] = value.split(/(?=https:\/\/)/).filter(Boolean);
  return first ?? null;
}

function arg(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}

const page = arg("--page");
if (!page) throw new Error("pass --page <game8 article url>");

const html = await (await fetch(page, { headers: { "User-Agent": UA } })).text();
const props = /react-new_map_tool-wrapper[^>]*data-react-props='([^']+)'/.exec(html)?.[1];
if (!props) throw new Error("no map widget on that page");
const parsed = JSON.parse(props.replace(/&quot;/g, '"').replace(/&amp;/g, "&"));
const { id, updatedAt } = parsed.toolStructuralMapping;
console.log(`mapping ${id} (updatedAt ${updatedAt})`);

const api = `https://game8.jp/api/tool_structural_mappings/${id}.json?updatedAt=${updatedAt}`;
const res = await fetch(api, { headers: { "User-Agent": UA, Referer: page, Accept: "application/json" } });
if (!res.ok) throw new Error(`api ${res.status}`);
const data = await res.json();

const markers = data.coordinateArraySchema.coordinates;
console.log(`areas: ${data.areas.map((a) => a.title).join(", ")}`);
const counts = new Map();
for (const m of markers) {
  const key = `${m.classification} / ${m.area}`;
  counts.set(key, (counts.get(key) ?? 0) + 1);
}
for (const [key, n] of [...counts].sort((a, b) => b[1] - a[1])) console.log(`  ${n.toString().padStart(4)}  ${key}`);

const out = arg("--out");
const coordsOf = arg("--coords");
if (out) {
  let payload = data;
  if (coordsOf) {
    payload = {};
    for (const m of markers.filter((m) => m.classification === coordsOf)) {
      (payload[m.area] ??= {})[m.title] = { pos: game8Percent(m.coordinate), image: firstUrl(m.popupImage) };
    }
  }
  writeFileSync(resolve(out), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`wrote ${out}`);
}

const images = arg("--images");
if (images) {
  const dir = resolve(images);
  mkdirSync(dir, { recursive: true });
  for (const [index, area] of data.areas.entries()) {
    const bytes = Buffer.from(await (await fetch(area.url, { headers: { "User-Agent": UA } })).arrayBuffer());
    const tmp = resolve(dir, `.tmp-${index}`);
    writeFileSync(tmp, bytes);
    const dest = resolve(dir, `${index}.webp`);
    execFileSync("magick", [tmp, "-resize", "1600x>", "-quality", "82", dest]);
    rmSync(tmp);
    console.log(`  ${area.title} -> ${dest}`);
  }
}
