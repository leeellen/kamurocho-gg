import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Missing Supabase env vars.");

const IN_DIR = resolve(process.env.IN_DIR ?? "/tmp/ko-desc");
const DRY = process.env.DRY === "1";

const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

const files = readdirSync(IN_DIR).filter((f) => /^desc-\d+-out\.json$/.test(f)).sort();
if (files.length === 0) {
  console.error("no desc-NNN-out.json files in", IN_DIR);
  process.exit(1);
}

const translations = new Map();
for (const f of files) {
  const arr = JSON.parse(readFileSync(resolve(IN_DIR, f), "utf8"));
  for (const row of arr) {
    if (typeof row.achievement_id !== "number") throw new Error(`${f}: missing achievement_id`);
    if (typeof row.desc_ko !== "string" || !row.desc_ko.trim()) {
      throw new Error(`${f}: ${row.achievement_id} missing desc_ko`);
    }
    translations.set(row.achievement_id, row.desc_ko.trim());
  }
}

console.log(`loaded ${translations.size} translations from ${files.length} files`);

if (DRY) {
  console.log("DRY=1");
  process.exit(0);
}

const ids = [...translations.keys()];
let updated = 0;
let failed = 0;
const pageSize = 500;
for (let i = 0; i < ids.length; i += pageSize) {
  const slice = ids.slice(i, i + pageSize);
  const { data, error } = await sb
    .from("achievements")
    .select("id,category")
    .in("id", slice);
  if (error) throw new Error(error.message);
  for (const row of data ?? []) {
    let cat = {};
    if (row.category) {
      try {
        cat = JSON.parse(row.category) ?? {};
      } catch {
        cat = {};
      }
    }
    cat.descKo = translations.get(row.id);
    if (typeof cat.v !== "number") cat.v = 1;
    const { error: e2 } = await sb
      .from("achievements")
      .update({ category: JSON.stringify(cat) })
      .eq("id", row.id);
    if (e2) {
      console.error("FAIL", row.id, e2.message);
      failed += 1;
      continue;
    }
    updated += 1;
    if (updated % 50 === 0) console.log(`...updated ${updated}`);
  }
}

console.log(`done updated=${updated} failed=${failed}`);
