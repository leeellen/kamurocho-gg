// Generate the static fallback snapshot that src/lib/data/fetch.ts serves when
// Supabase is unreachable (paused project, outage, bad migration). Content
// changes rarely and lands via the backfill scripts, so a periodically
// refreshed snapshot keeps read pages alive even with the DB fully down.
//
// Usage:
//   node --env-file=.env.local scripts/generate-snapshot.mjs
//
// Re-run after any content change so the fallback does not drift stale.

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function main() {
  const { data: games, error: gameError } = await supabase
    .from("games")
    .select("app_id,name,img_icon_url,img_logo_url,total_achievements");
  if (gameError) throw gameError;

  const { data: achievements, error: achError } = await supabase
    .from("achievements")
    .select(
      "id,app_id,api_name,display_name,description,global_percent,difficulty,icon_url,icon_gray_url,category,sort_order",
    )
    .order("app_id", { ascending: true });
  if (achError) throw achError;

  const ids = (achievements ?? []).map((r) => r.id);
  const guides = [];
  for (let i = 0; i < ids.length; i += 200) {
    const slice = ids.slice(i, i + 200);
    if (slice.length === 0) continue;
    const { data, error } = await supabase
      .from("guides")
      .select("achievement_id,locale,content,source_url,confidence")
      .in("achievement_id", slice)
      .eq("is_active", true);
    if (error) throw error;
    guides.push(...(data ?? []));
  }

  const snapshot = { games: games ?? [], achievements: achievements ?? [], guides };
  const out = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "lib", "data", "snapshot.json");
  writeFileSync(out, JSON.stringify(snapshot));
  console.log(
    `[snapshot] wrote ${snapshot.games.length} games, ${snapshot.achievements.length} achievements, ${snapshot.guides.length} guides -> ${out}`,
  );
}

main().catch((err) => {
  console.error("[snapshot] failed:", err);
  process.exit(1);
});
