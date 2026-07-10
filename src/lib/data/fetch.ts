import { unstable_cache } from "next/cache";

import { RGG_APP_IDS } from "@/lib/content";
import { createAdminClient } from "@/lib/supabase/admin";

import type { AchievementRow, GameRow, GuideRow } from "./types";

function admin() {
  return createAdminClient();
}

function isValidGameRow(row: unknown): row is GameRow {
  if (!row || typeof row !== "object") return false;
  const r = row as Record<string, unknown>;
  return typeof r.app_id === "number" && typeof r.name === "string" && r.name.length > 0;
}

function isValidAchievementRow(row: unknown): row is AchievementRow {
  if (!row || typeof row !== "object") return false;
  const r = row as Record<string, unknown>;
  return (
    typeof r.id === "number" &&
    typeof r.app_id === "number" &&
    typeof r.api_name === "string" &&
    r.api_name.length > 0
  );
}

function isValidGuideRow(row: unknown): row is GuideRow {
  if (!row || typeof row !== "object") return false;
  const r = row as Record<string, unknown>;
  return typeof r.achievement_id === "number" && typeof r.content === "string";
}

function filterValid<T>(
  rows: unknown[] | null | undefined,
  predicate: (row: unknown) => row is T,
  label: string,
): T[] {
  const out: T[] = [];
  let dropped = 0;
  for (const row of rows ?? []) {
    if (predicate(row)) out.push(row);
    else dropped++;
  }
  if (dropped > 0) {
    console.warn(`[fetch] ${label}: dropped ${dropped} invalid row(s)`);
  }
  return out;
}

// Achievement metadata + guides change rarely (manual backfill scripts).
// Cache the full series rows behind Next's data cache so locale switches
// and adjacent page loads do not trigger a fresh Supabase fan-out fetch
// every time. Bust via `revalidateTag("series-rows")` after content edits.
const cachedSeriesRows = unstable_cache(
  fetchSeriesRowsInner,
  // Bumped to v4 to invalidate Vercel Data Cache after the Steam sidecar
  // gained shortDescription* + releaseDate + releaseYear fields. Cached rows
  // produced before the sidecar bump lack those columns, so the UI renders
  // empty release-year tiles until the new key forces a fresh fetch.
  ["fetch-series-rows-v8"],
  { revalidate: 60 * 60 * 24, tags: ["series-rows"] },
);

// Static fallback served when Supabase is unreachable (paused free-tier
// project, outage, bad migration) so read pages render instead of throwing
// into error.tsx. Refresh via `node --env-file=.env.local scripts/generate-snapshot.mjs`.
// Loaded lazily so the 1.3MB JSON is only parsed on the rare failure path.
type Snapshot = { games: GameRow[]; achievements: AchievementRow[]; guides: GuideRow[] };
async function loadSnapshot(): Promise<Snapshot> {
  const mod = await import("./snapshot.json");
  return mod.default as Snapshot;
}

// Public accessor: try the live/cached DB fetch, fall back to the snapshot on
// any failure. The fallback sits OUTSIDE unstable_cache so a recovered DB is
// picked up on the next revalidate instead of caching the stale snapshot.
export async function fetchSeriesRows() {
  try {
    return await cachedSeriesRows();
  } catch (err) {
    console.error("[fetch] fetchSeriesRows failed, serving snapshot:", err);
    const snap = await loadSnapshot();
    return {
      games: filterValid<GameRow>(snap.games, isValidGameRow, "games"),
      achievements: filterValid<AchievementRow>(snap.achievements, isValidAchievementRow, "achievements"),
      guides: filterValid<GuideRow>(snap.guides, isValidGuideRow, "guides"),
    };
  }
}

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
    games: filterValid<GameRow>(games, isValidGameRow, "games"),
    achievements: filterValid<AchievementRow>(achievements, isValidAchievementRow, "achievements"),
    guides: filterValid<GuideRow>(guides, isValidGuideRow, "guides"),
  };
}

// Single-game fetch — used by /game/[id] so it does not pull data for the
// other 13 titles. Cached individually because each game page is a hot route.
export async function fetchGameRows(appId: number) {
  try {
    return await cachedGameRows(appId);
  } catch (err) {
    console.error(`[fetch] fetchGameRows(${appId}) failed, serving snapshot:`, err);
    const snap = await loadSnapshot();
    const gameRow = snap.games.find((g) => g.app_id === appId) ?? null;
    const achievements = filterValid<AchievementRow>(
      snap.achievements.filter((a) => a.app_id === appId),
      isValidAchievementRow,
      "achievements",
    );
    const ids = new Set(achievements.map((a) => a.id));
    const guides = filterValid<GuideRow>(
      snap.guides.filter((g) => ids.has(g.achievement_id)),
      isValidGuideRow,
      "guides",
    );
    return { game: isValidGameRow(gameRow) ? gameRow : null, achievements, guides };
  }
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
      game: isValidGameRow(gameRow) ? gameRow : null,
      achievements: filterValid<AchievementRow>(achievements, isValidAchievementRow, "achievements"),
      guides: filterValid<GuideRow>(guides, isValidGuideRow, "guides"),
    };
  },
  ["fetch-game-rows-v8"],
  { revalidate: 60 * 60 * 24, tags: ["series-rows"] },
);
