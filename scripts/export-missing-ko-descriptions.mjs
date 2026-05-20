import { createClient } from "@supabase/supabase-js";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Missing Supabase env vars.");

const BATCH_SIZE = Number(process.env.BATCH_SIZE ?? 60);
const OUT_DIR = resolve(process.env.OUT_DIR ?? "/tmp/ko-desc");

const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

async function fetchAll(table, columns) {
  const pageSize = 1000;
  let from = 0;
  const rows = [];
  while (true) {
    const { data, error } = await sb.from(table).select(columns).range(from, from + pageSize - 1);
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
  "id,app_id,api_name,display_name,description,category",
);

const entries = [];
for (const a of achievements) {
  if (!a.description || !a.description.trim()) continue;
  let cat = null;
  try {
    cat = a.category ? JSON.parse(a.category) : null;
  } catch {
    cat = null;
  }
  const descKo = cat?.descKo;
  const needs =
    !descKo ||
    !descKo.trim() ||
    descKo.trim() === a.description.trim();
  if (!needs) continue;
  entries.push({
    achievement_id: a.id,
    game: gameById.get(a.app_id) ?? `app:${a.app_id}`,
    app_id: a.app_id,
    api_name: a.api_name,
    display_name: a.display_name,
    name_ko: cat?.nameKo ?? null,
    description: a.description,
  });
}

entries.sort((a, b) => a.app_id - b.app_id || a.achievement_id - b.achievement_id);

mkdirSync(OUT_DIR, { recursive: true });
const chunks = [];
for (let i = 0; i < entries.length; i += BATCH_SIZE) {
  chunks.push(entries.slice(i, i + BATCH_SIZE));
}

const index = [];
chunks.forEach((chunk, i) => {
  const num = String(i + 1).padStart(3, "0");
  const path = resolve(OUT_DIR, `desc-${num}.json`);
  writeFileSync(path, JSON.stringify(chunk, null, 2));
  index.push({ batch: num, count: chunk.length, path });
});
writeFileSync(resolve(OUT_DIR, "index.json"), JSON.stringify(index, null, 2));

console.log(`exported ${entries.length} entries → ${chunks.length} batches at ${OUT_DIR}`);
