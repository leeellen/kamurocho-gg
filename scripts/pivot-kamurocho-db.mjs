import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing Supabase env vars.");
}

const KEEP_APP_IDS = [2988580, 3717330, 3717340, 1088710, 1105500, 1105510, 1388590, 1235140, 2058180, 2058190];
const KEEP_LOCALES = new Set(["english", "koreana"]);

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function count(table) {
  const { count, error } = await supabase.from(table).select("*", { count: "exact", head: true });
  if (error) throw error;
  return count ?? 0;
}

async function removeByIds(table, column, ids) {
  for (let index = 0; index < ids.length; index += 200) {
    const slice = ids.slice(index, index + 200);
    if (slice.length === 0) continue;
    const { error } = await supabase.from(table).delete().in(column, slice);
    if (error) throw error;
  }
}

async function main() {
  console.log("[before]");
  for (const table of ["users", "games", "achievements", "user_games", "user_achievements", "guides", "user_tips", "votes"]) {
    console.log(`${table}\t${await count(table)}`);
  }

  const { data: allAchievements, error: achievementError } = await supabase
    .from("achievements")
    .select("id, app_id");
  if (achievementError) throw achievementError;

  const keepAchievementIds = [];
  const dropAchievementIds = [];

  for (const achievement of allAchievements ?? []) {
    if (KEEP_APP_IDS.includes(achievement.app_id)) {
      keepAchievementIds.push(achievement.id);
    } else {
      dropAchievementIds.push(achievement.id);
    }
  }

  if (dropAchievementIds.length > 0) {
    await removeByIds("guides", "achievement_id", dropAchievementIds);
    await removeByIds("user_tips", "achievement_id", dropAchievementIds);
    await removeByIds("user_achievements", "achievement_id", dropAchievementIds);
    await removeByIds("achievements", "id", dropAchievementIds);
  }

  const extraGuideIds = [];
  for (let index = 0; index < keepAchievementIds.length; index += 200) {
    const slice = keepAchievementIds.slice(index, index + 200);
    const { data: extraGuides, error: extraGuideError } = await supabase
      .from("guides")
      .select("id, locale")
      .in("achievement_id", slice);
    if (extraGuideError) throw extraGuideError;
    for (const guide of extraGuides ?? []) {
      if (!KEEP_LOCALES.has(guide.locale ?? "")) {
        extraGuideIds.push(guide.id);
      }
    }
  }
  if (extraGuideIds.length > 0) {
    await removeByIds("guides", "id", extraGuideIds);
  }

  const { data: allGames, error: gameError } = await supabase.from("games").select("app_id");
  if (gameError) throw gameError;

  const dropGameIds = (allGames ?? [])
    .map((game) => game.app_id)
    .filter((appId) => !KEEP_APP_IDS.includes(appId));

  if (dropGameIds.length > 0) {
    await removeByIds("user_games", "app_id", dropGameIds);
    await removeByIds("games", "app_id", dropGameIds);
  }

  const cleanupOps = [
    ["votes", "target_id"],
    ["user_tips", "achievement_id"],
    ["user_achievements", "achievement_id"],
    ["user_games", "app_id"],
  ];

  for (const [table, column] of cleanupOps) {
    const { error } = await supabase.from(table).delete().gte(column, 0);
    if (error) throw error;
  }

  const { error: userDeleteError } = await supabase.from("users").delete().not("steam_id", "is", null);
  if (userDeleteError) throw userDeleteError;

  console.log("[after]");
  for (const table of ["users", "games", "achievements", "user_games", "user_achievements", "guides", "user_tips", "votes"]) {
    console.log(`${table}\t${await count(table)}`);
  }
}

await main();
