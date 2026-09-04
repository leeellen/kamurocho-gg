// Render a group's map with its pins into a standalone HTML file, so the
// coordinates can be eyeballed against the map before they are trusted.
//
//   node scripts/preview-collectible-map.mjs --maps /tmp/maps.json --out /tmp/preview.html
//
// `--maps` is the same file `apply-collectible-map.mjs` takes. Open the result
// (or screenshot it) and check the pins sit on the streets they name.

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function arg(flag) {
  const i = process.argv.indexOf(flag);
  return i >= 0 ? process.argv[i + 1] : null;
}

const rows = JSON.parse(readFileSync(resolve(arg("--maps")), "utf8"));
const out = arg("--out") ?? "/tmp/preview.html";

const sections = rows
  .map((row) => {
    const pins = Object.entries(row.hotspots)
      .map(
        ([n, [x, y]]) =>
          `<b style="left:${x}%;top:${y}%">${n}</b>`,
      )
      .join("");
    return `<h2>${row.group} — ${Object.keys(row.hotspots).length} pins</h2>
<div class="wrap"><img src="${row.mapImage}" alt="">${pins}</div>`;
  })
  .join("\n");

writeFileSync(
  resolve(out),
  `<!doctype html><meta charset="utf-8"><title>map preview</title>
<style>
body{margin:0;background:#111;color:#eee;font:13px system-ui}
h2{margin:16px}
.wrap{position:relative;width:1000px;margin:0 16px 32px;line-height:0}
.wrap img{width:100%;display:block}
b{position:absolute;transform:translate(-50%,-50%);background:#f43f5e;color:#fff;
  font:700 11px/16px system-ui;min-width:16px;height:16px;border-radius:8px;
  text-align:center;padding:0 3px;box-shadow:0 0 0 1px #fff}
</style>
${sections}
`,
  "utf8",
);
console.log(`wrote ${out}`);
