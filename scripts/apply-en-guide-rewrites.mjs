// Write rewritten English guide bodies back to the `guides` table.
//
// Input: `<IN_DIR>/en-rewrite-<appId>-out.json`, an array of
// `{ achievement_id, en_content }`. `en_content` must use the same markdown
// skeleton `src/lib/guides/structured.ts` parses:
//
//   <one-line summary>
//
//   **Do this next:**
//   - step
//   - step
//
//   **Tips:**
//   - tip
//
// Validated before anything is written: the steps header must be present, the
// body must carry at least two steps, and it must contain no Hangul (that
// would mean the Korean source was pasted through untranslated).
//
//   DRY=1 node --env-file=.env.local scripts/apply-en-guide-rewrites.mjs
//   node --env-file=.env.local scripts/apply-en-guide-rewrites.mjs

import { createClient } from "@supabase/supabase-js";
import { readdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Missing Supabase env vars.");

const IN_DIR = resolve(process.env.IN_DIR ?? "/tmp");
const DRY = process.env.DRY === "1";
const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

const HANGUL = /[가-힣]/;
const files = readdirSync(IN_DIR).filter((f) => /^en-rewrite-\d+-out\.json$/.test(f)).sort();
if (files.length === 0) throw new Error(`no en-rewrite-<appId>-out.json files in ${IN_DIR}`);

const rewrites = new Map();
for (const file of files) {
  const rows = JSON.parse(readFileSync(resolve(IN_DIR, file), "utf8"));
  for (const row of rows) {
    const id = row.achievement_id;
    const content = typeof row.en_content === "string" ? row.en_content.trim() : "";
    if (typeof id !== "number") throw new Error(`${file}: missing numeric achievement_id`);
    if (!content) throw new Error(`${file}: ${id} missing en_content`);
    if (!content.includes("**Do this next:**")) throw new Error(`${file}: ${id} missing steps header`);
    const steps = content.split("**Do this next:**")[1].split("**Tips:**")[0];
    const bullets = steps.split("\n").filter((l) => l.trim().startsWith("- "));
    if (bullets.length < 2) throw new Error(`${file}: ${id} has ${bullets.length} step(s), need 2+`);
    if (HANGUL.test(content)) throw new Error(`${file}: ${id} still contains Hangul`);
    if (rewrites.has(id)) throw new Error(`${file}: ${id} appears twice`);
    rewrites.set(id, content);
  }
}

console.log(`validated ${rewrites.size} rewrites from ${files.length} file(s)`);
if (DRY) {
  console.log("DRY=1 — nothing written");
  process.exit(0);
}

const now = new Date().toISOString();
let updated = 0;
let missing = 0;
for (const [achievementId, content] of rewrites) {
  const { data, error } = await sb
    .from("guides")
    .update({ content, source_type: "manual", confidence: 0.95, updated_at: now })
    .eq("achievement_id", achievementId)
    .eq("locale", "english")
    .select("achievement_id");
  if (error) throw new Error(`${achievementId}: ${error.message}`);
  if (!data || data.length === 0) {
    console.warn(`  no english guide row for achievement ${achievementId}`);
    missing += 1;
    continue;
  }
  updated += data.length;
  if (updated % 25 === 0) console.log(`...updated ${updated}`);
}

console.log(`done updated=${updated} missing-row=${missing}`);
