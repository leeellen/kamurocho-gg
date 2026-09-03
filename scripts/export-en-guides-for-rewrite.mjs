// Export the material needed to rewrite a game's English guides from its
// Korean ones.
//
// The English guide rows were bulk-ingested from Steam community guides and
// carry the scrape's noise: bullets that repeat the achievement title, bullets
// lifted from a *neighbouring* achievement, run-together text, and (for
// Yakuza: Like a Dragon) Portuguese. The Korean rows were rewritten by hand
// and are the accurate source, so English is regenerated from Korean.
//
//   node --env-file=.env.local scripts/export-en-guides-for-rewrite.mjs --app-id 2058180
//   node --env-file=.env.local scripts/export-en-guides-for-rewrite.mjs --app-ids 2058180,2058190
//
// Writes `<OUT_DIR>/en-rewrite-<appId>.json`; default OUT_DIR is `/tmp`.

import { createClient } from "@supabase/supabase-js";
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) throw new Error("Missing Supabase env vars.");

const OUT_DIR = resolve(process.env.OUT_DIR ?? "/tmp");
const sb = createClient(SUPABASE_URL, SUPABASE_KEY, { auth: { persistSession: false } });

function argValue(flag) {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : null;
}

const single = argValue("--app-id");
const many = argValue("--app-ids");
const appIds = single
  ? [Number(single)]
  : (many ?? "").split(",").map((v) => Number(v.trim())).filter((v) => Number.isFinite(v) && v > 0);
if (appIds.length === 0) throw new Error("Pass --app-id or --app-ids.");

mkdirSync(OUT_DIR, { recursive: true });

for (const appId of appIds) {
  const { data: achievements, error: achError } = await sb
    .from("achievements")
    .select("id,api_name,display_name,description,global_percent,sort_order")
    .eq("app_id", appId)
    .order("sort_order", { ascending: true, nullsFirst: false });
  if (achError) throw new Error(achError.message);

  const ids = (achievements ?? []).map((a) => a.id);
  const guides = new Map();
  for (let i = 0; i < ids.length; i += 200) {
    const { data, error } = await sb
      .from("guides")
      .select("achievement_id,locale,content")
      .in("achievement_id", ids.slice(i, i + 200));
    if (error) throw new Error(error.message);
    for (const row of data ?? []) guides.set(`${row.achievement_id}:${row.locale}`, row.content ?? "");
  }

  const rows = (achievements ?? []).map((a) => ({
    achievement_id: a.id,
    api_name: a.api_name,
    display_name: a.display_name,
    description: a.description,
    global_percent: a.global_percent,
    ko_content: guides.get(`${a.id}:koreana`) ?? "",
    en_content_old: guides.get(`${a.id}:english`) ?? "",
  }));

  const file = resolve(OUT_DIR, `en-rewrite-${appId}.json`);
  writeFileSync(file, `${JSON.stringify(rows, null, 2)}\n`, "utf8");
  console.log(`[export] ${appId}: ${rows.length} achievements -> ${file}`);
}
