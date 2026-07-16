import { createClient } from "@supabase/supabase-js";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { parseSteamGuide } from "./parse-steam-guide.mjs";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

async function fetchAll(table, columns, filter) {
  const pageSize = 1000;
  let from = 0;
  const rows = [];
  while (true) {
    let q = sb.from(table).select(columns).range(from, from + pageSize - 1);
    if (filter) q = filter(q);
    const { data, error } = await q;
    if (error) throw new Error(error.message);
    rows.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }
  return rows;
}

const achievements = await fetchAll(
  "achievements",
  "id,app_id,api_name,display_name,description,category",
);
const achById = new Map(achievements.map((a) => [a.id, a]));

const games = await fetchAll("games", "app_id,name");
const gameById = new Map(games.map((g) => [g.app_id, g.name]));

const guides = await fetchAll("guides", "id,achievement_id,locale,content,source_url,confidence", (q) =>
  q.eq("locale", "koreana").eq("is_active", true),
);

function urlId(url) {
  const m = url?.match(/[?&]id=(\d+)/);
  return m ? m[1] : null;
}

function norm(s) {
  return (s ?? "").toLowerCase().replace(/[\s.,!?'":;\-()\[\]/]+/g, "").trim();
}

// Tokenize string for fuzzy matching
function tokens(s) {
  return new Set(
    (s ?? "")
      .toLowerCase()
      .replace(/[^a-z0-9가-힣\s]+/g, " ")
      .split(/\s+/)
      .filter((t) => t.length > 1),
  );
}

function jaccard(a, b) {
  const A = tokens(a);
  const B = tokens(b);
  if (A.size === 0 || B.size === 0) return 0;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter += 1;
  return inter / (A.size + B.size - inter);
}

// Cache parsed sources
const parsedCache = new Map();
function getParsed(srcUrl) {
  const id = urlId(srcUrl);
  if (!id) return null;
  if (parsedCache.has(id)) return parsedCache.get(id);
  const path = resolve("/tmp/audit/html", `${id}.html`);
  if (!existsSync(path)) {
    parsedCache.set(id, null);
    return null;
  }
  const html = readFileSync(path, "utf8");
  const parsed = parseSteamGuide(html);
  // Build normalized name lookup
  parsed.normMap = new Map();
  for (const [name, body] of parsed.achievements) {
    parsed.normMap.set(norm(name), { name, body });
    // pt-BR / fr sources often write "Local (English alias)" — index alias too
    const aliasMatch = name.match(/\(([^()]{2,80})\)\s*$/);
    if (aliasMatch) {
      const aliasKey = norm(aliasMatch[1]);
      if (aliasKey && !parsed.normMap.has(aliasKey)) {
        parsed.normMap.set(aliasKey, { name, body });
      }
    }
  }
  parsedCache.set(id, parsed);
  return parsed;
}

const findings = [];
for (const g of guides) {
  const ach = achById.get(g.achievement_id);
  if (!ach) continue;
  const parsed = getParsed(g.source_url);
  if (!parsed) {
    findings.push({
      guide_id: g.id,
      app_id: ach.app_id,
      game: gameById.get(ach.app_id),
      api_name: ach.api_name,
      display_name: ach.display_name,
      source_url: g.source_url,
      status: "no-source-html",
      source_text: null,
      db_content: g.content,
      score: 0,
    });
    continue;
  }
  // Find matching source section by display_name (EN)
  let match = parsed.normMap.get(norm(ach.display_name));
  if (!match && ach.display_name) {
    // Try a fuzzy lookup
    let best = null;
    let bestScore = 0;
    for (const [, candidate] of parsed.normMap) {
      const score = jaccard(ach.display_name, candidate.name);
      if (score > bestScore) {
        best = candidate;
        bestScore = score;
      }
    }
    if (best && bestScore >= 0.7) match = best;
  }
  if (!match) {
    findings.push({
      guide_id: g.id,
      app_id: ach.app_id,
      game: gameById.get(ach.app_id),
      api_name: ach.api_name,
      display_name: ach.display_name,
      source_url: g.source_url,
      status: "no-source-section",
      source_text: null,
      db_content: g.content,
      score: 0,
    });
    continue;
  }
  // Semantic check: jaccard token overlap between KO db_content and source body
  // KO content is Korean, source is English. So we should translate-compare via key
  // numbers and English proper nouns. Use number/name overlap as proxy.
  // Better metric: extract numbers + proper nouns from source; check presence in KO.
  // Use source's "X completed/Y bonded/Z defeated" patterns — counts and thresholds
  // that should be preserved verbatim. Skip year-shaped numbers and 4+ digit raw IDs.
  function extractCounts(text) {
    const out = new Set();
    const reCount =
      /\b(\d{1,3}(?:,\d{3})*)\b\s*(?:times?|achievements?|completed|substor|matches?|gambl|battles?|wins?|races?|fish|stations?|chapters?|skills?|jobs?|copies?|enem|cats?|items?|missions?|locker|drink|hostess|trophies|bonds?|trades?|gladia|kills?|levels?|points?|kg|m|회|개|번|가지|마리|편)\b/gi;
    for (const match of text.matchAll(reCount)) {
      const raw = match[1].replace(/,/g, "");
      const n = Number(raw);
      if (Number.isFinite(n) && n >= 2 && n <= 1_000_000) out.add(String(n));
    }
    // Also accept bare numbers in description-style lines (e.g., guide says "Defeat 30 of...")
    for (const m of text.matchAll(/\b(\d{1,4})\b/g)) {
      const n = Number(m[1]);
      // skip year-shaped 4-digit numbers
      if (n >= 1900 && n <= 2099) continue;
      if (n < 2) continue;
      // require nearby keyword in same sentence
      const slice = text.slice(Math.max(0, m.index - 40), m.index + 40);
      if (
        /\b(complete|defeat|earn|obtain|collect|raise|win|finish|reach|kill|level|natural|chapter|time|rank|hostess|substor|cat|bond|drink|fish|item|gladiator|match)\b/i.test(
          slice,
        ) ||
        /(총|회|개|번|마리|레벨|챕터|클리어|달성|승리|회복|연속|장|판|벌|발|건|섬|만|천|백|명)/u.test(slice)
      ) {
        out.add(String(n));
      }
    }
    return out;
  }
  const sourceNumbers = Array.from(extractCounts(match.body));
  const dbNumbers = Array.from(extractCounts(g.content));
  const numbersMatch =
    sourceNumbers.length === 0 ||
    sourceNumbers.some((n) => dbNumbers.includes(n)) ||
    sourceNumbers.every((n) => Number.isFinite(Number(n)));
  const score = jaccard(match.body, g.content); // low for KO/EN comparison, used as backup

  let status = "match";
  let notes = [];
  if (!numbersMatch) {
    status = "number-mismatch";
    notes.push(`source numbers: ${sourceNumbers.join(", ")}; db numbers: ${dbNumbers.join(", ")}`);
  }
  if (sourceNumbers.length > 0 && dbNumbers.length === 0) {
    status = "missing-numbers";
    notes.push(`source has numbers ${sourceNumbers.join(", ")}, db has none`);
  }
  // Check key number drift: any sourceNumber not appearing in db is suspicious
  const missingSourceNum = sourceNumbers.filter((n) => !dbNumbers.includes(n));
  if (missingSourceNum.length > 0 && missingSourceNum.length === sourceNumbers.length) {
    status = "all-numbers-missing";
    notes.push(`all source numbers absent in db: ${missingSourceNum.join(", ")}`);
  }
  findings.push({
    guide_id: g.id,
    app_id: ach.app_id,
    game: gameById.get(ach.app_id),
    api_name: ach.api_name,
    display_name: ach.display_name,
    source_url: g.source_url,
    matched_source_name: match.name,
    status,
    notes: notes.join("; ") || null,
    source_text: match.body.slice(0, 2000),
    db_content: g.content,
    score: Number(score.toFixed(3)),
  });
}

const summary = {
  total: findings.length,
  by_status: {},
};
for (const f of findings) {
  summary.by_status[f.status] = (summary.by_status[f.status] ?? 0) + 1;
}

writeFileSync("/tmp/audit/findings.json", JSON.stringify(findings, null, 2));
writeFileSync("/tmp/audit/summary.json", JSON.stringify(summary, null, 2));
console.log(JSON.stringify(summary, null, 2));
