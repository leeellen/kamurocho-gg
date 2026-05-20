import { createClient } from "@supabase/supabase-js";
import { readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Missing Supabase env vars.");

const IN_DIR = resolve(process.env.IN_DIR ?? "/tmp/ko-rewrite");
const DRY = process.env.DRY === "1";

const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

const files = readdirSync(IN_DIR).filter((f) => /^batch-\d+-out\.json$/.test(f)).sort();
if (files.length === 0) {
  console.error("no batch-NNN-out.json files found in", IN_DIR);
  process.exit(1);
}

const seen = new Set();
const entries = [];
for (const f of files) {
  const arr = JSON.parse(readFileSync(resolve(IN_DIR, f), "utf8"));
  if (!Array.isArray(arr)) throw new Error(`${f} is not an array`);
  for (const row of arr) {
    if (typeof row.guide_id !== "number") throw new Error(`${f} row missing guide_id`);
    if (typeof row.new_content !== "string" || !row.new_content.trim()) {
      throw new Error(`${f} guide_id=${row.guide_id} missing new_content`);
    }
    if (seen.has(row.guide_id)) {
      console.warn(`duplicate guide_id ${row.guide_id} in ${f} - last write wins`);
    }
    seen.add(row.guide_id);
    entries.push({ guide_id: row.guide_id, new_content: row.new_content });
  }
}

console.log(`loaded ${entries.length} rewrites from ${files.length} files`);

if (DRY) {
  console.log("DRY=1 set, not writing");
  process.exit(0);
}

let updated = 0;
let failed = 0;
const now = new Date().toISOString();
for (const e of entries) {
  const { error } = await sb
    .from("guides")
    .update({ content: e.new_content, updated_at: now })
    .eq("id", e.guide_id);
  if (error) {
    console.error("FAIL", e.guide_id, error.message);
    failed += 1;
    continue;
  }
  updated += 1;
  if (updated % 50 === 0) console.log(`...updated ${updated}`);
}

console.log(`done updated=${updated} failed=${failed}`);
