import { unstable_cache } from "next/cache";

import { RGG_APP_IDS } from "@/lib/kamurocho-content";
import { createAdminClient } from "@/lib/supabase/admin";

import type { AchievementRow, GameRow, GuideRow } from "./types";

function admin() {
  return createAdminClient();
}

// Achievement metadata + guides change rarely (manual backfill scripts).
// Cache the full series rows behind Next's data cache so locale switches
// and adjacent page loads do not trigger a fresh Supabase fan-out fetch
// every time. Bust via `revalidateTag("series-rows")` after content edits.
export const fetchSeriesRows = unstable_cache(
  fetchSeriesRowsInner,
  ["fetch-series-rows-v1"],
  { revalidate: 60 * 60 * 24, tags: ["series-rows"] },
);

async function fetchSeriesRowsInner() {
  const client = admin();
  const { data: games, error: gameError } = await client
    .from("games")
    .select("app_id,name,img_icon_url,img_logo_url,total_achievements")
    .in("app_id", RGG_APP_IDS);
  if (gameError) throw gameError;

  const { data: achievements, error: achievementError } = await client
    .from("achievements")
    .select("id,app_id,api_name,display_name,description,global_percent,difficulty,icon_url,icon_gray_url,category")
    .in("app_id", RGG_APP_IDS)
    .order("app_id", { ascending: true });
  if (achievementError) throw achievementError;

  const achievementIds = (achievements ?? []).map((row) => row.id);
  const guides: GuideRow[] = [];

  for (let index = 0; index < achievementIds.length; index += 200) {
    const slice = achievementIds.slice(index, index + 200);
    if (slice.length === 0) continue;
    const { data, error } = await client
      .from("guides")
      .select("achievement_id,locale,content,source_url,confidence")
      .in("achievement_id", slice)
      .eq("is_active", true);
    if (error) throw error;
    guides.push(...(data ?? []));
  }

  return {
    games: (games ?? []) as GameRow[],
    achievements: (achievements ?? []) as AchievementRow[],
    guides,
  };
}

// Single-game fetch — used by /game/[id] so it does not pull data for the
// other 13 titles. Cached individually because each game page is a hot route.
export function fetchGameRows(appId: number) {
  return cachedGameRows(appId);
}

const cachedGameRows = unstable_cache(
  async (appId: number) => {
    const client = admin();
    const { data: gameRow, error: gameError } = await client
      .from("games")
      .select("app_id,name,img_icon_url,img_logo_url,total_achievements")
      .eq("app_id", appId)
      .maybeSingle();
    if (gameError) throw gameError;

    const { data: achievements, error: achievementError } = await client
      .from("achievements")
      .select("id,app_id,api_name,display_name,description,global_percent,difficulty,icon_url,icon_gray_url,category")
      .eq("app_id", appId)
      .order("sort_order", { ascending: true, nullsFirst: false });
    if (achievementError) throw achievementError;

    const achievementIds = (achievements ?? []).map((row) => row.id);
    const guides: GuideRow[] = [];
    for (let index = 0; index < achievementIds.length; index += 200) {
      const slice = achievementIds.slice(index, index + 200);
      if (slice.length === 0) continue;
      const { data, error } = await client
        .from("guides")
        .select("achievement_id,locale,content,source_url,confidence")
        .in("achievement_id", slice)
        .eq("is_active", true);
      if (error) throw error;
      guides.push(...(data ?? []));
    }

    return {
      game: gameRow as GameRow | null,
      achievements: (achievements ?? []) as AchievementRow[],
      guides,
    };
  },
  ["fetch-game-rows-v1"],
  { revalidate: 60 * 60 * 24, tags: ["series-rows"] },
);
