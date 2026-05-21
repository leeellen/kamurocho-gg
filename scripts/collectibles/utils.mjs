import { readFileSync } from "node:fs";

export function stripHtml(s) {
  return s
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/li>|<\/p>|<\/dt>|<\/dd>|<\/h[1-6]>/gi, "\n")
    .replace(/<img[^>]*>/gi, "")
    .replace(/<a\s+[^>]*>/gi, "")
    .replace(/<\/a>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&rarr;/gi, "→")
    .replace(/　/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function extractArticleBody(html) {
  // gamewith + kamigame both ship JSON-LD with articleBody
  const m =
    html.match(/"articleBody"\s*:\s*"((?:\\.|[^"\\])*)"/) ??
    html.match(/"description"\s*:\s*"((?:\\.|[^"\\])*)"/);
  if (!m) return null;
  return m[1]
    .replace(/\\n/g, "\n")
    .replace(/\\"/g, '"')
    .replace(/\\u([0-9A-Fa-f]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&rarr;/g, "→")
    .replace(/&amp;/g, "&");
}

export function findYoutubeIds(html) {
  const ids = new Set();
  for (const m of html.matchAll(/youtube\.com\/(?:embed|watch\?v=)([A-Za-z0-9_-]{11})/g)) {
    ids.add(m[1]);
  }
  return [...ids];
}

export function findHeadings(html, levels = [2, 3, 4]) {
  const out = [];
  for (const lvl of levels) {
    const re = new RegExp(`<h${lvl}[^>]*>([\\s\\S]*?)</h${lvl}>`, "g");
    for (const m of html.matchAll(re)) {
      out.push({
        level: lvl,
        title: stripHtml(m[1]),
        start: m.index,
        end: m.index + m[0].length,
      });
    }
  }
  return out.sort((a, b) => a.start - b.start);
}

export function loadHtml(path) {
  return readFileSync(path, "utf8");
}

export function dumpBlock(label, body) {
  return `=== ${label} ===\n${body}\n`;
}
