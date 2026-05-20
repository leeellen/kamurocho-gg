import { readFileSync } from "node:fs";

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<\/ul>/gi, "\n")
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
    .replace(/[ \t]+/g, " ")
    .replace(/\n[ \t]+/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export function parseSteamGuide(html) {
  // Strip everything past the comment thread / sidebar so trailing user comments
  // do not leak into the last guide section's body when slicing.
  const cutMarkers = [
    'class="commentthread_area"',
    "commentthread_header",
  ];
  let trimmed = html;
  for (const marker of cutMarkers) {
    const idx = trimmed.indexOf(marker);
    if (idx > 0) trimmed = trimmed.slice(0, idx);
  }
  // Find all <div class="subSection detailBox"...> openings and split
  const openings = [];
  const openRe = /<div class="subSection detailBox"[^>]*>/g;
  let m;
  while ((m = openRe.exec(trimmed)) !== null) {
    openings.push(m.index);
  }
  const sections = [];
  for (let i = 0; i < openings.length; i++) {
    const start = openings[i];
    const end = i + 1 < openings.length ? openings[i + 1] : trimmed.length;
    const block = trimmed.slice(start, end);
    const titleMatch = block.match(/<div class="subSectionTitle">([\s\S]*?)<\/div>/);
    const descStart = block.indexOf('<div class="subSectionDesc">');
    if (!titleMatch || descStart < 0) continue;
    // Take from descStart through end of block (next section / EOF)
    const desc = block.slice(descStart + '<div class="subSectionDesc">'.length);
    sections.push({
      title: stripHtml(titleMatch[1]),
      desc,
    });
  }

  const achievements = new Map();
  for (const section of sections) {
    // Many guides wrap achievement names like `<b><u>Name</u></b>` or include
    // inner <span> formatting. Pull names from either <b>...</b> or
    // <u>...</u> wrappers that contain only inline formatting + text.
    const split = section.desc.split(/<(?:b|u)>((?:<[^>]+>)?[^<]+(?:<\/[^>]+>)?)<\/(?:b|u)>/);
    for (let i = 1; i < split.length; i += 2) {
      const rawName = split[i] ?? "";
      const name = stripHtml(rawName).trim().replace(/\s+/g, " ");
      const bodyHtml = split[i + 1] ?? "";
      const body = stripHtml(bodyHtml).replace(/^[\s.,]+/, "");
      if (!name || name.length < 3 || name.length > 80) continue;
      // Skip prose-like fragments that are clearly not achievement names.
      if (/^(this|the|that|so|but|then|and|or|if|to|from|with|on|as)\b/i.test(name)) continue;
      const existing = achievements.get(name) ?? "";
      achievements.set(name, existing ? existing + "\n---\n" + body : body);
    }
  }
  return { sections: sections.map((s) => s.title), achievements };
}

if (process.argv[2]) {
  const html = readFileSync(process.argv[2], "utf8");
  const parsed = parseSteamGuide(html);
  console.log("sections:", parsed.sections.length, parsed.sections.slice(0,8));
  console.log("achievements:", parsed.achievements.size);
  let i = 0;
  for (const [k, v] of parsed.achievements) {
    if (i++ < 4) console.log("\n===", k, "===\n", v.slice(0, 300));
  }
}
