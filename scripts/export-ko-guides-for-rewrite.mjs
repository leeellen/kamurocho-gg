import { createClient } from "@supabase/supabase-js";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Missing Supabase env vars.");

const BATCH_SIZE = Number(process.env.BATCH_SIZE ?? 50);
const OUT_DIR = resolve(process.env.OUT_DIR ?? "/tmp/ko-rewrite");

const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

async function fetchAll(table, columns, filterFn) {
  const pageSize = 1000;
  let from = 0;
  const rows = [];
  while (true) {
    let q = sb.from(table).select(columns).range(from, from + pageSize - 1);
    if (filterFn) q = filterFn(q);
    const { data, error } = await q;
    if (error) throw new Error(error.message);
    rows.push(...data);
    if (data.length < pageSize) break;
    from += pageSize;
  }
  return rows;
}

const games = await fetchAll("games", "app_id,name");
const gameById = new Map(games.map((g) => [g.app_id, g.name]));

const achievements = await fetchAll(
  "achievements",
  "id,app_id,api_name,display_name,description",
);
const achById = new Map(achievements.map((a) => [a.id, a]));

const guides = await fetchAll("guides", "id,achievement_id,locale,content,source_type,confidence", (q) =>
  q.eq("is_active", true),
);

const enByAch = new Map();
const koGuides = [];
for (const g of guides) {
  if (g.locale === "english") enByAch.set(g.achievement_id, g);
  else if (g.locale === "koreana") koGuides.push(g);
}

const entries = koGuides
  .map((g) => {
    const ach = achById.get(g.achievement_id);
    if (!ach) return null;
    const en = enByAch.get(g.achievement_id);
    return {
      guide_id: g.id,
      achievement_id: g.achievement_id,
      game: gameById.get(ach.app_id) ?? `app:${ach.app_id}`,
      api_name: ach.api_name,
      display_name: ach.display_name,
      description: ach.description,
      ko_content: g.content,
      en_content: en?.content ?? null,
      source_type: g.source_type,
      confidence: g.confidence,
    };
  })
  .filter(Boolean);

entries.sort((a, b) => a.guide_id - b.guide_id);

mkdirSync(OUT_DIR, { recursive: true });

const chunks = [];
for (let i = 0; i < entries.length; i += BATCH_SIZE) {
  chunks.push(entries.slice(i, i + BATCH_SIZE));
}

const index = [];
chunks.forEach((chunk, i) => {
  const num = String(i + 1).padStart(3, "0");
  const path = resolve(OUT_DIR, `batch-${num}.json`);
  writeFileSync(path, JSON.stringify(chunk, null, 2));
  index.push({ batch: num, count: chunk.length, path });
});

writeFileSync(resolve(OUT_DIR, "index.json"), JSON.stringify(index, null, 2));

console.log(`exported ${entries.length} guides into ${chunks.length} batches at ${OUT_DIR}`);
