import { RGG_APP_IDS } from "@/lib/kamurocho-content";
import { createAdminClient } from "@/lib/supabase/admin";

import type { AchievementRow, GameRow, GuideRow } from "./types";

function admin() {
  return createAdminClient();
}

export async function fetchSeriesRows() {
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
