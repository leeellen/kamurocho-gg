import { cache } from "react";

import { getCurrentSession, type SteamSession } from "@/lib/auth/session";
import { createAdminClient } from "@/lib/supabase/admin";

export type CurrentUser = {
  steamId: string;
  displayName: string | null;
  avatarUrl: string | null;
  profileUrl: string | null;
  lastSynced: string | null;
};

export type UserAchievementState = {
  achievementId: number;
  unlocked: boolean;
  unlockTime: string | null;
};

export type GameProgress = {
  appId: number;
  playtimeMins: number;
  lastPlayed: string | null;
  completionPct: number;
  unlocked: number;
  total: number;
};

async function getSession(): Promise<SteamSession | null> {
  try {
    return await getCurrentSession();
  } catch {
    return null;
  }
}

export const getCurrentUser = cache(async (): Promise<CurrentUser | null> => {
  const session = await getSession();
  if (!session) return null;
  try {
    const admin = createAdminClient();
    const { data } = await admin
      .from("users")
      .select("steam_id, display_name, avatar_url, profile_url, last_synced")
      .eq("steam_id", session.steamId)
      .maybeSingle();
    if (!data) {
      return {
        steamId: session.steamId,
        displayName: null,
        avatarUrl: null,
        profileUrl: null,
        lastSynced: null,
      };
    }
    return {
      steamId: data.steam_id as string,
      displayName: (data.display_name as string | null) ?? null,
      avatarUrl: (data.avatar_url as string | null) ?? null,
      profileUrl: (data.profile_url as string | null) ?? null,
      lastSynced: (data.last_synced as string | null) ?? null,
    };
  } catch {
    return {
      steamId: session.steamId,
      displayName: null,
      avatarUrl: null,
      profileUrl: null,
      lastSynced: null,
    };
  }
});

export const getUserAchievementMap = cache(async (appId: number): Promise<Map<number, UserAchievementState>> => {
  const session = await getSession();
  if (!session) return new Map();
  try {
    const admin = createAdminClient();
    const { data: achs } = await admin
      .from("achievements")
      .select("id")
      .eq("app_id", appId);
    const ids = (achs ?? []).map((row) => row.id as number);
    if (ids.length === 0) return new Map();
    const { data } = await admin
      .from("user_achievements")
      .select("achievement_id, unlocked, unlock_time")
      .eq("steam_id", session.steamId)
      .in("achievement_id", ids);
    const map = new Map<number, UserAchievementState>();
    for (const row of data ?? []) {
      map.set(row.achievement_id as number, {
        achievementId: row.achievement_id as number,
        unlocked: Boolean(row.unlocked),
        unlockTime: (row.unlock_time as string | null) ?? null,
      });
    }
    return map;
  } catch {
    return new Map();
  }
});

export const getUserGameProgress = cache(async (): Promise<Map<number, GameProgress>> => {
  const session = await getSession();
  if (!session) return new Map();
  try {
    const admin = createAdminClient();
    const { data: games } = await admin
      .from("user_games")
      .select("app_id, playtime_mins, last_played, completion_pct")
      .eq("steam_id", session.steamId);
    if (!games?.length) return new Map();

    // Calculate unlocked/total per game from user_achievements join
    const appIds = games.map((g) => g.app_id as number);
    const { data: counts } = await admin
      .from("achievements")
      .select("id, app_id")
      .in("app_id", appIds);

    const achievementsByApp = new Map<number, number[]>();
    for (const row of counts ?? []) {
      const list = achievementsByApp.get(row.app_id as number) ?? [];
      list.push(row.id as number);
      achievementsByApp.set(row.app_id as number, list);
    }

    const allAchIds = (counts ?? []).map((row) => row.id as number);
    const { data: userAchs } = allAchIds.length
      ? await admin
          .from("user_achievements")
          .select("achievement_id, unlocked")
          .eq("steam_id", session.steamId)
          .in("achievement_id", allAchIds)
      : { data: [] };

    const unlockedSet = new Set<number>();
    for (const row of userAchs ?? []) {
      if (row.unlocked) unlockedSet.add(row.achievement_id as number);
    }

    const map = new Map<number, GameProgress>();
    for (const game of games) {
      const appId = game.app_id as number;
      const ids = achievementsByApp.get(appId) ?? [];
      const unlocked = ids.filter((id) => unlockedSet.has(id)).length;
      const total = ids.length;
      map.set(appId, {
        appId,
        playtimeMins: (game.playtime_mins as number) ?? 0,
        lastPlayed: (game.last_played as string | null) ?? null,
        completionPct: total > 0 ? (unlocked / total) * 100 : Number(game.completion_pct ?? 0),
        unlocked,
        total,
      });
    }
    return map;
  } catch {
    return new Map();
  }
});

export type IncompleteAchievement = {
  achievementId: number;
  appId: number;
  apiName: string;
  displayName: string;
  description: string | null;
  rarity: number;
};

/** Achievements the player has not yet unlocked, sorted by rarity (rarest = highest priority). */
export const getIncompleteAchievements = cache(async (limit = 24): Promise<IncompleteAchievement[]> => {
  const session = await getSession();
  if (!session) return [];
  try {
    const admin = createAdminClient();
    const { data: rows } = await admin
      .from("user_achievements")
      .select("achievement_id, unlocked, achievements!inner(id, app_id, api_name, display_name, description, global_percent)")
      .eq("steam_id", session.steamId)
      .eq("unlocked", false);
    type Joined = {
      achievements: {
        id: number;
        app_id: number;
        api_name: string;
        display_name: string | null;
        description: string | null;
        global_percent: number | string | null;
      };
    };
    const items = (rows ?? []).map((row) => {
      const ach = (row as unknown as Joined).achievements;
      const rarity = typeof ach.global_percent === "number"
        ? ach.global_percent
        : ach.global_percent
          ? Number(ach.global_percent)
          : 100;
      return {
        achievementId: ach.id,
        appId: ach.app_id,
        apiName: ach.api_name,
        displayName: ach.display_name || ach.api_name,
        description: ach.description,
        rarity,
      };
    });
    items.sort((a, b) => a.rarity - b.rarity);
    return items.slice(0, limit);
  } catch {
    return [];
  }
});
