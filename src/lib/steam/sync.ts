import { createAdminClient } from "@/lib/supabase/admin";
import { RGG_APP_IDS } from "@/lib/kamurocho-content";

const STEAM_ROOT = "https://api.steampowered.com";
const RGG_SET = new Set(RGG_APP_IDS);

function getKey() {
  const key = process.env.STEAM_API_KEY;
  if (!key) throw new Error("Missing STEAM_API_KEY.");
  return key;
}

async function steamFetch<T>(path: string, params: Record<string, string>): Promise<T> {
  const url = new URL(path, STEAM_ROOT);
  url.searchParams.set("key", getKey());
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url.toString(), { cache: "no-store" });
  if (!res.ok) throw new Error(`Steam ${path} → ${res.status}`);
  return res.json() as Promise<T>;
}

type SteamGame = {
  appid: number;
  name: string;
  playtime_forever: number;
  img_icon_url: string;
  rtime_last_played?: number;
};

type SteamAchievementSchema = {
  name: string;
  displayName: string;
  description?: string;
  icon?: string;
  icongray?: string;
};

type SteamPlayerAchievement = {
  apiname: string;
  achieved: 0 | 1;
  unlocktime: number;
};

type SteamGlobalPct = {
  name: string;
  percent: number;
};

type SteamPlayerSummary = {
  steamid: string;
  personaname?: string;
  avatarfull?: string;
  profileurl?: string;
};

async function fetchSteamProfile(steamId: string): Promise<SteamPlayerSummary | null> {
  try {
    const res = await steamFetch<{ response?: { players?: SteamPlayerSummary[] } }>(
      "/ISteamUser/GetPlayerSummaries/v2/",
      { steamids: steamId },
    );
    return res.response?.players?.[0] ?? null;
  } catch {
    return null;
  }
}

export async function syncSteamLibrary(steamId: string) {
  const admin = createAdminClient();
  const syncedAt = new Date().toISOString();

  // 0. Always ensure the users row exists. Foreign keys on user_games /
  // user_achievements depend on it, and the OpenID callback's profile cache is
  // best-effort. Refresh profile fields opportunistically so /me stays in sync.
  const profile = await fetchSteamProfile(steamId);
  const upsertUser = await admin.from("users").upsert(
    {
      steam_id: steamId,
      display_name: profile?.personaname ?? null,
      avatar_url: profile?.avatarfull ?? null,
      profile_url: profile?.profileurl ?? null,
    },
    { onConflict: "steam_id" },
  );
  if (upsertUser.error) {
    throw new Error(`users upsert failed: ${upsertUser.error.message}`);
  }

  // 1. Owned games — only the RGG titles we cover.
  const ownedRes = await steamFetch<{
    response?: { games?: SteamGame[] };
  }>("/IPlayerService/GetOwnedGames/v1/", {
    steamid: steamId,
    include_appinfo: "1",
    include_played_free_games: "1",
  });

  const allGames = ownedRes.response?.games ?? [];
  const owned = allGames.filter((g) => RGG_SET.has(g.appid));

  if (owned.length === 0) {
    await admin
      .from("users")
      .update({ last_synced: syncedAt })
      .eq("steam_id", steamId);
    return {
      steamId,
      synced: 0,
      total: 0,
      totalInLibrary: allGames.length,
      ownedInHub: 0,
      message: "No RGG titles found in this Steam library.",
    };
  }

  // 2. Ensure parent games rows exist before writing user_games (FK).
  const gameRows = owned.map((g) => ({
    app_id: g.appid,
    name: g.name,
    img_icon_url: g.img_icon_url || null,
  }));
  const upsertGames = await admin
    .from("games")
    .upsert(gameRows, { onConflict: "app_id", ignoreDuplicates: false });
  if (upsertGames.error) {
    throw new Error(`games upsert failed: ${upsertGames.error.message}`);
  }

  // 3. user_games rows.
  const userGameRows = owned.map((g) => ({
    steam_id: steamId,
    app_id: g.appid,
    playtime_mins: g.playtime_forever,
    last_played: g.rtime_last_played
      ? new Date(g.rtime_last_played * 1000).toISOString()
      : null,
    synced_at: syncedAt,
  }));

  for (let i = 0; i < userGameRows.length; i += 50) {
    const res = await admin
      .from("user_games")
      .upsert(userGameRows.slice(i, i + 50), { onConflict: "steam_id,app_id" });
    if (res.error) {
      throw new Error(`user_games upsert failed: ${res.error.message}`);
    }
  }

  // 4. Per-game schema + player progress.
  let synced = 0;
  const perGameErrors: string[] = [];

  for (const game of owned) {
    try {
      // Fetch English (canonical) + Korean schemas in parallel. Korean strings
      // are stashed in the achievements.category text column as a JSON sidecar
      // ({nameKo, descKo}) so the curated data layer can pick the localized
      // copy without a separate column.
      const [schemaRes, schemaKoRes] = await Promise.all([
        steamFetch<{
          game?: { availableGameStats?: { achievements?: SteamAchievementSchema[] } };
        }>("/ISteamUserStats/GetSchemaForGame/v2/", { appid: String(game.appid) }),
        steamFetch<{
          game?: { availableGameStats?: { achievements?: SteamAchievementSchema[] } };
        }>("/ISteamUserStats/GetSchemaForGame/v2/", {
          appid: String(game.appid),
          l: "koreana",
        }).catch(() => null),
      ]);

      const achSchemas = schemaRes.game?.availableGameStats?.achievements ?? [];
      const koMap = new Map<string, SteamAchievementSchema>();
      for (const a of schemaKoRes?.game?.availableGameStats?.achievements ?? []) {
        koMap.set(a.name, a);
      }
      if (achSchemas.length === 0) {
        synced++;
        continue;
      }

      // Global rarity percentages.
      const globalMap = new Map<string, number>();
      try {
        const pctRes = await steamFetch<{
          achievementpercentages?: { achievements?: SteamGlobalPct[] };
        }>("/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/", {
          gameid: String(game.appid),
        });
        for (const a of pctRes.achievementpercentages?.achievements ?? []) {
          globalMap.set(a.name, a.percent);
        }
      } catch {
        // Some titles have no global stats.
      }

      const achRows = achSchemas.map((a) => {
        const ko = koMap.get(a.name);
        const sidecar = (ko?.displayName || ko?.description)
          ? JSON.stringify({ v: 1, nameKo: ko?.displayName ?? null, descKo: ko?.description ?? null })
          : null;
        return {
          app_id: game.appid,
          api_name: a.name,
          display_name: a.displayName || a.name,
          description: a.description || null,
          category: sidecar,
          icon_url: a.icon || null,
          icon_gray_url: a.icongray || null,
          global_percent: globalMap.has(a.name) ? globalMap.get(a.name) : null,
          last_updated: syncedAt,
        };
      });

      for (let i = 0; i < achRows.length; i += 100) {
        await admin
          .from("achievements")
          .upsert(achRows.slice(i, i + 100), { onConflict: "app_id,api_name" });
      }

      await admin
        .from("games")
        .update({ total_achievements: achSchemas.length, last_schema_sync: syncedAt })
        .eq("app_id", game.appid);

      // Player progress.
      const playerRes = await steamFetch<{
        playerstats?: {
          achievements?: SteamPlayerAchievement[];
          success?: boolean;
          error?: string;
        };
      }>("/ISteamUserStats/GetPlayerAchievements/v1/", {
        steamid: steamId,
        appid: String(game.appid),
      });

      const playerAchs = playerRes.playerstats?.achievements ?? [];
      if (playerAchs.length === 0) {
        synced++;
        continue;
      }

      const { data: dbAchs } = await admin
        .from("achievements")
        .select("id, api_name")
        .eq("app_id", game.appid);

      const achIdMap = new Map((dbAchs ?? []).map((a) => [a.api_name, a.id]));

      const userAchRows = playerAchs
        .filter((a) => achIdMap.has(a.apiname))
        .map((a) => ({
          steam_id: steamId,
          achievement_id: achIdMap.get(a.apiname)!,
          unlocked: a.achieved === 1,
          unlock_time:
            a.achieved && a.unlocktime
              ? new Date(a.unlocktime * 1000).toISOString()
              : null,
          synced_at: syncedAt,
        }));

      if (userAchRows.length > 0) {
        for (let i = 0; i < userAchRows.length; i += 100) {
          const res = await admin
            .from("user_achievements")
            .upsert(userAchRows.slice(i, i + 100), {
              onConflict: "steam_id,achievement_id",
            });
          if (res.error) {
            throw new Error(`user_achievements upsert failed: ${res.error.message}`);
          }
        }

        const unlockedCount = userAchRows.filter((r) => r.unlocked).length;
        const completionPct = userAchRows.length > 0 ? (unlockedCount / userAchRows.length) * 100 : 0;

        await admin
          .from("user_games")
          .update({ completion_pct: completionPct })
          .eq("steam_id", steamId)
          .eq("app_id", game.appid);
      }

      synced++;
    } catch (err) {
      // Per-game failure: record but do not abort the whole sync.
      perGameErrors.push(
        `${game.appid}: ${err instanceof Error ? err.message : String(err)}`,
      );
    }
  }

  await admin.from("users").update({ last_synced: syncedAt }).eq("steam_id", steamId);

  return {
    steamId,
    synced,
    total: owned.length,
    totalInLibrary: allGames.length,
    ownedInHub: owned.length,
    perGameErrors: perGameErrors.length ? perGameErrors : undefined,
  };
}
