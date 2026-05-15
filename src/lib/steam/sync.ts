import { createAdminClient } from "@/lib/supabase/admin";

const STEAM_ROOT = "https://api.steampowered.com";

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
  return res.json() as T;
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

export async function syncSteamLibrary(steamId: string, userId: string) {
  const admin = createAdminClient();
  const syncedAt = new Date().toISOString();

  // ── 1. Owned games ──────────────────────────────────────────────
  const ownedRes = await steamFetch<{
    response?: { games?: SteamGame[] };
  }>("/IPlayerService/GetOwnedGames/v1/", {
    steamid: steamId,
    include_appinfo: "1",
    include_played_free_games: "1",
  });

  const allGames = ownedRes.response?.games ?? [];
  if (allGames.length === 0) {
    return { steamId, synced: 0, total: 0, message: "No games found." };
  }

  // Sort by playtime: process all for library display, top N for Korean/achievements
  const sorted = [...allGames].sort((a, b) => b.playtime_forever - a.playtime_forever);
  const ACH_LIMIT = 80;        // games processed for achievements (Steam API budget)
  const KO_LIMIT  = 150;       // games queried for Korean title via Store API
  const topForAch = sorted.slice(0, ACH_LIMIT);
  const topForKo  = sorted.slice(0, KO_LIMIT);

  // Fetch English + Korean Store API data in parallel (per chunk).
  // English: canonical name (already from GetOwnedGames) + locale-agnostic asset URLs.
  // Korean: localized name only.
  type StoreEntry = {
    success?: boolean;
    data?: { name?: string; header_image?: string; capsule_image?: string; capsule_imagev5?: string };
  };
  const koreanNames = new Map<number, string>();
  const englishNames = new Map<number, string>();
  const headerUrls = new Map<number, string>();
  const capsuleUrls = new Map<number, string>();
  const KO_CHUNK = 10;
  async function fetchStore(appid: number, lang: "english" | "koreana") {
    try {
      const res = await fetch(
        `https://store.steampowered.com/api/appdetails?appids=${appid}&l=${lang}&cc=KR&filters=basic`,
        { cache: "no-store", signal: AbortSignal.timeout(5000) },
      );
      if (!res.ok) return null;
      const json = (await res.json()) as Record<string, StoreEntry>;
      const entry = json[String(appid)];
      return entry?.success ? entry.data ?? null : null;
    } catch {
      return null;
    }
  }
  for (let i = 0; i < topForKo.length; i += KO_CHUNK) {
    const chunk = topForKo.slice(i, i + KO_CHUNK);
    await Promise.all(
      chunk.map(async (g) => {
        const [en, ko] = await Promise.all([
          fetchStore(g.appid, "english"),
          fetchStore(g.appid, "koreana"),
        ]);
        if (en?.name) englishNames.set(g.appid, en.name);
        if (ko?.name) koreanNames.set(g.appid, ko.name);
        // Strip `?t=` cache-buster — stale timestamps can produce 404s after Steam refreshes assets.
        const clean = (u?: string) => u?.split("?")[0];
        const header = clean(en?.header_image ?? ko?.header_image);
        const capsule = clean(
          en?.capsule_imagev5 ?? en?.capsule_image ?? ko?.capsule_imagev5 ?? ko?.capsule_image,
        );
        if (header) headerUrls.set(g.appid, header);
        if (capsule) capsuleUrls.set(g.appid, capsule);
      }),
    );
  }

  // ── 2. Upsert ALL games + user_games rows (so library shows everything) ─
  // Repurpose existing `img_logo_url` text column as a JSON sidecar for
  // localized name + Store API asset URLs. Avoids requiring a DDL migration.
  const localizationBlob = (appid: number) => {
    const payload = {
      v: 1,
      nameKo: koreanNames.get(appid) ?? null,
      headerUrl: headerUrls.get(appid) ?? null,
      capsuleUrl: capsuleUrls.get(appid) ?? null,
    };
    return JSON.stringify(payload);
  };

  const gameRows = sorted.map((g) => ({
    app_id: g.appid,
    // Canonical English name preferred (from Store API), fallback to GetOwnedGames.
    name: englishNames.get(g.appid) ?? g.name,
    img_logo_url: localizationBlob(g.appid),
    img_icon_url: g.img_icon_url || null,
  }));

  for (let i = 0; i < gameRows.length; i += 50) {
    await admin
      .from("games")
      .upsert(gameRows.slice(i, i + 50), { onConflict: "app_id", ignoreDuplicates: false });
  }

  const userGameRows = sorted.map((g) => ({
    user_id: userId,
    app_id: g.appid,
    playtime_mins: g.playtime_forever,
    last_played: g.rtime_last_played
      ? new Date(g.rtime_last_played * 1000).toISOString()
      : null,
    synced_at: syncedAt,
  }));

  for (let i = 0; i < userGameRows.length; i += 50) {
    await admin
      .from("user_games")
      .upsert(userGameRows.slice(i, i + 50), { onConflict: "user_id,app_id" });
  }

  // ── 3. Per-game: achievements + user progress (top N by playtime) ────
  let synced = 0;

  for (const game of topForAch) {
    try {
      // Fetch English (canonical) + Korean schemas in parallel
      const [schemaEnRes, schemaKoRes] = await Promise.all([
        steamFetch<{
          game?: { availableGameStats?: { achievements?: SteamAchievementSchema[] } };
        }>("/ISteamUserStats/GetSchemaForGame/v2/", { appid: String(game.appid) }),
        steamFetch<{
          game?: { availableGameStats?: { achievements?: SteamAchievementSchema[] } };
        }>("/ISteamUserStats/GetSchemaForGame/v2/", { appid: String(game.appid), l: "koreana" }).catch(() => null),
      ]);

      const achSchemas = schemaEnRes.game?.availableGameStats?.achievements ?? [];
      if (achSchemas.length === 0) {
        synced++;
        continue;
      }
      const koMap = new Map<string, SteamAchievementSchema>();
      for (const a of schemaKoRes?.game?.availableGameStats?.achievements ?? []) {
        koMap.set(a.name, a);
      }

      // Get global percentages
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
        // Some games have no global stats — continue without percentages
      }

      // Upsert achievements; Korean name/desc stored as JSON in unused `category` text column.
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

      // Update total_achievements on games row
      await admin
        .from("games")
        .update({ total_achievements: achSchemas.length, last_schema_sync: syncedAt })
        .eq("app_id", game.appid);

      // Get player achievement progress
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
      if (playerAchs.length > 0) {
        // Fetch achievement IDs from DB
        const { data: dbAchs } = await admin
          .from("achievements")
          .select("id, api_name")
          .eq("app_id", game.appid);

        const achIdMap = new Map((dbAchs ?? []).map((a) => [a.api_name, a.id]));

        const userAchRows = playerAchs
          .filter((a) => achIdMap.has(a.apiname))
          .map((a) => ({
            user_id: userId,
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
            await admin
              .from("user_achievements")
              .upsert(userAchRows.slice(i, i + 100), {
                onConflict: "user_id,achievement_id",
              });
          }

          const unlockedCount = userAchRows.filter((r) => r.unlocked).length;
          const completionPct =
            userAchRows.length > 0
              ? (unlockedCount / userAchRows.length) * 100
              : 0;

          await admin
            .from("user_games")
            .update({ completion_pct: completionPct })
            .eq("user_id", userId)
            .eq("app_id", game.appid);
        }
      }

      synced++;
    } catch {
      // Skip this game on error, continue with others
    }
  }

  // ── 4. Update last_synced ────────────────────────────────────────
  await admin
    .from("users")
    .update({ last_synced: syncedAt })
    .eq("steam_id", steamId);

  return {
    steamId,
    synced,
    total: topForAch.length,
    totalInLibrary: allGames.length,
  };
}
