import { cache } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { getGuidePreview, structureGuide } from "@/lib/guides/structured";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient as createServerSupabaseClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { slugify } from "@/lib/utils";
import { libraryGames } from "@/lib/mock-data";

type AppUser = {
  id: string;
  steam_id: string;
  persona_name: string | null;
  avatar_url: string | null;
  profile_url: string | null;
  last_synced: string | null;
};

type DbGuide = {
  achievement_id: number;
  content: string;
  confidence: string | number | null;
  source_url: string | null;
  license: string | null;
  upvotes: number | null;
  source_type?: string | null;
};

export type LibraryGameView = {
  appId: number;
  slug: string;
  name: string;
  completion: number;
  completedAchievements: number;
  totalAchievements: number;
  playtime: string;
  lastPlayed: string;
  coverClass: string;
  accentClass: string;
  state: string;
  imgIconUrl: string | null;
  headerUrl: string | null;
  capsuleUrl: string | null;
  guidedAchievements: number;
  nextGuide: {
    achievementSlug: string;
    achievementName: string;
    summary: string;
    rarity: number;
  } | null;
};

export type UserSummary = {
  name: string;
  status: string;
  avatarUrl: string | null;
  steamId: string | null;
  lastSyncedLabel: string;
  overallPct: number;
  unlockedCount: number;
};

function coverClassFromAppId(appId: number) {
  return `cover-${appId % 20}`;
}

function getAdminOrNull() {
  try {
    return createAdminClient();
  } catch {
    return null;
  }
}

function formatPlaytime(minutes: number | null | undefined) {
  if (!minutes) return "0h";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins === 0 ? `${hours}h` : `${hours}h ${mins}m`;
}

function formatLastPlayed(value: string | null | undefined) {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "—";
  const diff = Date.now() - date.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(hours / 24);
  if (hours < 1) return "Just now";
  if (hours < 24) return `${hours}h ago`;
  if (days === 1) return "Yesterday";
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function formatLastSynced(value: string | null | undefined) {
  if (!value) return "Never";
  return formatLastPlayed(value);
}

const getSelectedUser = cache(async () => {
  noStore();
  const admin = getAdminOrNull();
  let authUser:
    | {
        id: string;
        email?: string;
        user_metadata?: Record<string, unknown>;
      }
    | null = null;

  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    authUser = user;

    if (admin && user?.id) {
      const { data } = await admin
        .from("users")
        .select("id, steam_id, persona_name, avatar_url, profile_url, last_synced")
        .eq("id", user.id)
        .maybeSingle();

      if (data) {
        return data as AppUser;
      }
    }
  } catch {
    // Fall through to optional development override.
  }

  if (authUser?.id) {
    const metadata = authUser.user_metadata ?? {};
    const metadataSteamId =
      typeof metadata.steam_id === "string" && metadata.steam_id.length > 0 ? metadata.steam_id : null;
    const emailSteamId =
      typeof authUser.email === "string" && authUser.email.endsWith("@steam.kamurocho.gg")
        ? authUser.email.replace("@steam.kamurocho.gg", "")
        : null;
    const steamId = metadataSteamId ?? emailSteamId;

    if (steamId) {
      return {
        id: authUser.id,
        steam_id: steamId,
        persona_name: typeof metadata.persona_name === "string" ? metadata.persona_name : null,
        avatar_url: typeof metadata.avatar_url === "string" ? metadata.avatar_url : null,
        profile_url: typeof metadata.profile_url === "string" ? metadata.profile_url : null,
        last_synced: null,
      };
    }
  }

  const steamId = process.env.NODE_ENV === "development" ? process.env.DEV_STEAM_ID : undefined;
  if (admin && steamId) {
    const { data } = await admin
      .from("users")
      .select("id, steam_id, persona_name, avatar_url, profile_url, last_synced")
      .eq("steam_id", steamId)
      .maybeSingle();
    if (data) return data as AppUser;
  }

  return null;
});

const getUserStats = cache(async (userId: string | null) => {
  if (!userId) return { overallPct: 0, unlockedCount: 0 };
  const admin = getAdminOrNull();
  if (!admin) return { overallPct: 0, unlockedCount: 0 };

  // Run count + completion query in parallel
  const [unlockedRes, gamesRes] = await Promise.all([
    admin
      .from("user_achievements")
      .select("*", { count: "exact", head: true })
      .eq("user_id", userId)
      .eq("unlocked", true),
    admin
      .from("user_games")
      .select("completion_pct")
      .eq("user_id", userId),
  ]);

  const pcts = (gamesRes.data ?? []).map((r) => Number(r.completion_pct ?? 0));
  const overallPct = pcts.length
    ? Math.round(pcts.reduce((s, n) => s + n, 0) / pcts.length)
    : 0;

  return { overallPct, unlockedCount: unlockedRes.count ?? 0 };
});

export const getUserSummary = cache(async (): Promise<UserSummary> => {
  const user = await getSelectedUser();
  if (!user) {
    return {
      name: "CURATOR_01",
      status: "Legendary Status",
      avatarUrl: null,
      steamId: null,
      lastSyncedLabel: "Never",
      overallPct: 0,
      unlockedCount: 0,
    };
  }

  const stats = await getUserStats(user.id);

  return {
    name: user.persona_name || user.steam_id,
    status: `${stats.overallPct}% · ${stats.unlockedCount.toLocaleString()}`,
    avatarUrl: user.avatar_url,
    steamId: user.steam_id,
    lastSyncedLabel: formatLastSynced(user.last_synced),
    overallPct: stats.overallPct,
    unlockedCount: stats.unlockedCount,
  };
});

export const getLibraryGames = cache(async (limit: number = 500): Promise<LibraryGameView[]> => {
  const admin = getAdminOrNull();
  const user = await getSelectedUser();

  if (!admin || !user) {
    return libraryGames.map((game, index) => ({
      appId: game.appId,
      slug: game.slug,
      name: game.name,
      completion: game.completion,
      completedAchievements: game.completedAchievements,
      totalAchievements: game.totalAchievements,
      playtime: game.playtime,
      lastPlayed: game.lastPlayed,
      coverClass: game.coverClass,
      accentClass:
        index === 0 ? "border-secondary" : index === 2 ? "border-tertiary" : "border-secondary/20",
      state: game.state,
      imgIconUrl: null,
      headerUrl: null,
      capsuleUrl: null,
      guidedAchievements: game.achievements.filter((achievement) => achievement.guide?.content?.length).length,
      nextGuide: (() => {
        const next = game.achievements.find((achievement) => !achievement.unlocked);
        if (!next) return null;
        return {
          achievementSlug: next.slug,
          achievementName: next.name,
          summary: next.guide.content[0] ?? next.description ?? "",
          rarity: next.rarity ?? 0,
        };
      })(),
    }));
  }

  const locale = await getLocale();
  const { data } = await admin
    .from("user_games")
    .select("app_id, playtime_mins, completion_pct, last_played, games(app_id, name, img_logo_url, total_achievements, img_icon_url)")
    .eq("user_id", user.id)
    .order("playtime_mins", { ascending: false, nullsFirst: false })
    .limit(limit);

  if (!data?.length) {
    return [];
  }

  const appIds = data.map((row) => Number(row.app_id));
  const desiredLocale = locale === "ko" ? "koreana" : "english";
  type LibraryAchievementRow = {
    id: number;
    app_id: number;
    api_name: string;
    display_name: string | null;
    description: string | null;
    category: string | null;
    global_percent: number | null;
  };
  type GuideRow = DbGuide & { locale?: string | null; is_active?: boolean | null };

  let achievementRows: LibraryAchievementRow[] = [];
  const APP_CHUNK = 30;
  for (let i = 0; i < appIds.length; i += APP_CHUNK) {
    const slice = appIds.slice(i, i + APP_CHUNK);
    const { data: chunk } = await admin
      .from("achievements")
      .select("id, app_id, api_name, display_name, description, category, global_percent")
      .in("app_id", slice);
    achievementRows = achievementRows.concat((chunk ?? []) as LibraryAchievementRow[]);
  }

  const achievementIds = achievementRows.map((row) => row.id);
  const unlockedIds = new Set<number>();
  const guideMap = new Map<number, GuideRow[]>();

  const ACH_CHUNK = 200;
  for (let i = 0; i < achievementIds.length; i += ACH_CHUNK) {
    const slice = achievementIds.slice(i, i + ACH_CHUNK);
    const [userAchRes, guideRes] = await Promise.all([
      admin
        .from("user_achievements")
        .select("achievement_id, unlocked")
        .eq("user_id", user.id)
        .in("achievement_id", slice),
      admin
        .from("guides")
        .select("achievement_id, content, confidence, source_url, license, upvotes, locale, is_active, source_type")
        .eq("is_active", true)
        .in("achievement_id", slice)
        .order("upvotes", { ascending: false }),
    ]);

    if (userAchRes.error) {
      console.error("[library] user_achievements query failed:", userAchRes.error.message);
    }
    if (guideRes.error) {
      console.error("[library] guides query failed:", guideRes.error.message);
    }

    for (const row of userAchRes.data ?? []) {
      if (row.unlocked) unlockedIds.add(Number(row.achievement_id));
    }

    for (const guide of (guideRes.data ?? []) as GuideRow[]) {
      const current = guideMap.get(guide.achievement_id) ?? [];
      current.push(guide);
      guideMap.set(guide.achievement_id, current);
    }
  }

  const nextGuideByApp = new Map<number, LibraryGameView["nextGuide"]>();
  const guidedCountByApp = new Map<number, number>();

  for (const achievement of achievementRows) {
    const guide = pickBestGuide(guideMap.get(achievement.id) ?? [], desiredLocale);
    if (guide) {
      guidedCountByApp.set(achievement.app_id, (guidedCountByApp.get(achievement.app_id) ?? 0) + 1);
    }
    if (!guide || unlockedIds.has(achievement.id)) continue;

    const sidecar = parseAchievementSidecar(achievement.category);
    const name = locale === "ko"
      ? (sidecar?.nameKo || achievement.display_name || achievement.api_name)
      : (achievement.display_name || achievement.api_name);
    const structuredGuide = structureGuide(guide.content.split(/\n+/).filter(Boolean), guide.source_url);
    const candidate = {
      achievementSlug:
        slugify(achievement.api_name || name || `achievement-${achievement.id}`) || `ach-${achievement.id}`,
      achievementName: name,
      summary: getGuidePreview(
        structuredGuide,
        locale === "ko" ? "다음 조건부터 확인하세요." : "Check the trigger requirements before your next session.",
      ),
      rarity: Number(achievement.global_percent ?? 100),
    };
    const current = nextGuideByApp.get(achievement.app_id);
    if (!current || candidate.rarity < current.rarity) {
      nextGuideByApp.set(achievement.app_id, candidate);
    }
  }

  return data.map((row) => {
    const game = Array.isArray(row.games) ? row.games[0] : row.games;
    const appId = Number(row.app_id);
    const totalAchievements = Number(game?.total_achievements ?? 0);
    const completion = Number(row.completion_pct ?? 0);
    const enName = game?.name ?? `Game ${row.app_id}`;
    const sidecar = parseLocalizationSidecar(game?.img_logo_url);
    const koName = sidecar?.nameKo;
    const displayName = locale === "ko" ? (koName || enName) : enName;
    const baseSlug = slugify(enName);
    return {
      appId,
      slug: baseSlug || `app-${appId}`,
      name: displayName,
      completion: Math.round(completion),
      completedAchievements: totalAchievements
        ? Math.round((totalAchievements * completion) / 100)
        : 0,
      totalAchievements,
      playtime: formatPlaytime(row.playtime_mins),
      lastPlayed: formatLastPlayed(row.last_played),
      coverClass: coverClassFromAppId(appId),
      accentClass: "border-secondary/20",
      state: "Active",
      imgIconUrl: game?.img_icon_url ?? null,
      headerUrl: sidecar?.headerUrl ?? null,
      capsuleUrl: sidecar?.capsuleUrl ?? null,
      guidedAchievements: guidedCountByApp.get(appId) ?? 0,
      nextGuide: nextGuideByApp.get(appId) ?? null,
    };
  });
});

type LocalizationSidecar = {
  nameKo?: string | null;
  headerUrl?: string | null;
  capsuleUrl?: string | null;
};
function parseLocalizationSidecar(raw: string | null | undefined): LocalizationSidecar | null {
  if (!raw) return null;
  // Older rows stored an asset URL string here, not JSON — ignore those.
  if (!raw.startsWith("{")) return null;
  try {
    const obj = JSON.parse(raw) as LocalizationSidecar & { v?: number };
    if (typeof obj !== "object" || obj == null) return null;
    return obj;
  } catch {
    return null;
  }
}

type AchievementSidecar = { nameKo?: string | null; descKo?: string | null };
function parseAchievementSidecar(raw: string | null | undefined): AchievementSidecar | null {
  if (!raw || !raw.startsWith("{")) return null;
  try {
    const obj = JSON.parse(raw) as AchievementSidecar;
    return typeof obj === "object" && obj !== null ? obj : null;
  } catch {
    return null;
  }
}

function guideQualityScore(guide: DbGuide & { locale?: string | null }, desiredLocale: string) {
  let score = 0;

  if (guide.source_type === "steam_scrape") score += 1000;
  else if (guide.source_type === "manual") score += 300;
  else if (guide.source_type === "ai") score += 100;
  else if (guide.source_type === "template") score += 10;

  if (guide.locale === desiredLocale) score += 100;
  if (guide.source_url?.includes("steamcommunity.com/sharedfiles/filedetails")) score += 20;
  if (typeof guide.upvotes === "number") score += Math.min(guide.upvotes, 50);

  const confidence =
    typeof guide.confidence === "number"
      ? guide.confidence
      : typeof guide.confidence === "string"
        ? Number(guide.confidence)
        : 0;
  if (Number.isFinite(confidence)) score += confidence * 100;

  return score;
}

function pickBestGuide(
  guides: Array<DbGuide & { locale?: string | null }>,
  desiredLocale: string,
) {
  return [...guides].sort((a, b) => guideQualityScore(b, desiredLocale) - guideQualityScore(a, desiredLocale))[0];
}
