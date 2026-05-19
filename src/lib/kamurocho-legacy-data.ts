import { cache } from "react";
import { unstable_noStore as noStore } from "next/cache";

import { getGuidePreview, structureGuide } from "@/lib/guides/structured";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient as createServerSupabaseClient } from "@/lib/supabase/server";
import { getLocale } from "@/lib/i18n";
import { getPlayerJoinTimestamp, getSteamLevel } from "@/lib/steam/api";
import { slugify } from "@/lib/utils";
import {
  type Achievement,
  type Confidence,
  type Difficulty,
  findGameBySlug,
  hallOfFame as mockHallOfFame,
  libraryGames,
  matchingTitles,
  searchAchievements,
  trendingAchievements,
} from "@/lib/mock-data";

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

type DbTip = {
  achievement_id: number;
  user_id: string;
  content: string;
  upvotes: number | null;
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

export type RecentUnlock = {
  achievementId: number;
  apiName: string;
  slug: string;
  name: string;
  iconUrl: string | null;
  unlockedAt: string;
  unlockedAtLabel: string;
  rarity: number;
  appId: number;
  gameName: string;
  gameImgIconUrl: string | null;
  gameHeaderUrl: string | null;
  gameCapsuleUrl: string | null;
};

export const getRecentUnlocks = cache(async (limit: number = 8): Promise<RecentUnlock[]> => {
  const admin = getAdminOrNull();
  const user = await getSelectedUser();
  if (!admin || !user) return [];

  const locale = await getLocale();
  const { data } = await admin
    .from("user_achievements")
    .select(
      "achievement_id, unlock_time, achievements!inner(id, api_name, display_name, description, category, icon_url, global_percent, app_id, games!inner(app_id, name, img_logo_url, img_icon_url))",
    )
    .eq("user_id", user.id)
    .eq("unlocked", true)
    .not("unlock_time", "is", null)
    .order("unlock_time", { ascending: false })
    .limit(limit);

  if (!data?.length) return [];

  return data.map((row) => {
    const ach = Array.isArray(row.achievements) ? row.achievements[0] : row.achievements;
    const game = ach && (Array.isArray(ach.games) ? ach.games[0] : ach.games);
    const enName = ach?.display_name || ach?.api_name || "Achievement";
    const sidecar = parseAchievementSidecar((ach as { category?: string | null } | null)?.category);
    const displayName = locale === "ko" ? (sidecar?.nameKo || enName) : enName;
    const gameSidecar = parseLocalizationSidecar((game as { img_logo_url?: string | null } | null)?.img_logo_url);
    const gameEn = game?.name || `Game ${ach?.app_id ?? ""}`;
    const gameDisplay = locale === "ko" ? (gameSidecar?.nameKo || gameEn) : gameEn;
    const apiName = ach?.api_name ?? "";
    return {
      achievementId: ach?.id ?? row.achievement_id,
      apiName,
      slug: slugify(apiName || enName || "") || `ach-${ach?.id ?? row.achievement_id}`,
      name: displayName,
      iconUrl: ach?.icon_url ?? null,
      unlockedAt: row.unlock_time as string,
      unlockedAtLabel: formatLastPlayed(row.unlock_time as string),
      rarity: Number(ach?.global_percent ?? 0),
      appId: Number(ach?.app_id ?? game?.app_id ?? 0),
      gameName: gameDisplay,
      gameImgIconUrl: (game as { img_icon_url?: string | null } | null)?.img_icon_url ?? null,
      gameHeaderUrl: gameSidecar?.headerUrl ?? null,
      gameCapsuleUrl: gameSidecar?.capsuleUrl ?? null,
    };
  });
});

export type RarestLocked = {
  achievementId: number;
  slug: string;
  name: string;
  description: string;
  iconUrl: string | null;
  iconGrayUrl: string | null;
  rarity: number;
  appId: number;
  gameName: string;
  gameHeaderUrl: string | null;
  gameCapsuleUrl: string | null;
  gameImgIconUrl: string | null;
};

export const getRarestLocked = cache(async (limit: number = 4): Promise<RarestLocked[]> => {
  const admin = getAdminOrNull();
  const user = await getSelectedUser();
  if (!admin || !user) return [];

  const locale = await getLocale();
  const { data } = await admin
    .from("user_achievements")
    .select(
      "achievement_id, unlocked, achievements!inner(id, api_name, display_name, description, category, icon_url, icon_gray_url, global_percent, app_id, games!inner(app_id, name, img_logo_url, img_icon_url))",
    )
    .eq("user_id", user.id)
    .eq("unlocked", false)
    .order("achievement_id", { ascending: true })
    .limit(500);

  if (!data?.length) return [];

  const mapped = data.map((row) => {
    const ach = Array.isArray(row.achievements) ? row.achievements[0] : row.achievements;
    const game = ach && (Array.isArray(ach.games) ? ach.games[0] : ach.games);
    const enName = ach?.display_name || ach?.api_name || "Achievement";
    const sidecar = parseAchievementSidecar((ach as { category?: string | null } | null)?.category);
    const gameSidecar = parseLocalizationSidecar((game as { img_logo_url?: string | null } | null)?.img_logo_url);
    const gameEn = game?.name || "Game";
    return {
      achievementId: ach?.id ?? row.achievement_id,
      apiName: ach?.api_name ?? "",
      name: locale === "ko" ? (sidecar?.nameKo || enName) : enName,
      description: locale === "ko"
        ? (sidecar?.descKo || ach?.description || "")
        : (ach?.description || ""),
      iconUrl: ach?.icon_url ?? null,
      iconGrayUrl: ach?.icon_gray_url ?? null,
      rarity: Number(ach?.global_percent ?? 100),
      appId: Number(ach?.app_id ?? 0),
      gameName: locale === "ko" ? (gameSidecar?.nameKo || gameEn) : gameEn,
      gameHeaderUrl: gameSidecar?.headerUrl ?? null,
      gameCapsuleUrl: gameSidecar?.capsuleUrl ?? null,
      gameImgIconUrl: (game as { img_icon_url?: string | null } | null)?.img_icon_url ?? null,
    };
  });

  return mapped
    .filter((m) => m.rarity > 0 && m.rarity < 100)
    .sort((a, b) => a.rarity - b.rarity)
    .slice(0, limit)
    .map((m) => ({
      achievementId: m.achievementId,
      slug: slugify(m.apiName || m.name) || `ach-${m.achievementId}`,
      name: m.name,
      description: m.description,
      iconUrl: m.iconUrl,
      iconGrayUrl: m.iconGrayUrl,
      rarity: m.rarity,
      appId: m.appId,
      gameName: m.gameName,
      gameHeaderUrl: m.gameHeaderUrl,
      gameCapsuleUrl: m.gameCapsuleUrl,
      gameImgIconUrl: m.gameImgIconUrl,
    }));
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
      nextGuide: game.achievements.find((achievement) => !achievement.unlocked)
        ? {
            achievementSlug: game.achievements.find((achievement) => !achievement.unlocked)?.slug ?? "",
            achievementName: game.achievements.find((achievement) => !achievement.unlocked)?.name ?? "",
            summary:
              game.achievements.find((achievement) => !achievement.unlocked)?.guide.content[0] ??
              game.achievements.find((achievement) => !achievement.unlocked)?.description ??
              "",
            rarity: game.achievements.find((achievement) => !achievement.unlocked)?.rarity ?? 0,
          }
        : null,
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
    const [{ data: userAchievements }, { data: guides }] = await Promise.all([
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

    for (const row of userAchievements ?? []) {
      if (row.unlocked) unlockedIds.add(Number(row.achievement_id));
    }

    for (const guide of (guides ?? []) as GuideRow[]) {
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

function difficultyFromPercent(value: number | null | undefined): Difficulty {
  if (!value && value !== 0) return "common";
  if (value >= 50) return "common";
  if (value >= 20) return "uncommon";
  if (value >= 5) return "rare";
  return "legendary";
}

function localizeGuideLinesForDisplay(
  lines: string[],
  locale: "en" | "ko",
  opts: { koName?: string | null; enName?: string | null },
) {
  if (locale !== "ko") return lines;

  return lines.map((line, index) => {
    let next = line;

    if (index === 0 && opts.koName) return opts.koName;
    if (opts.enName && opts.koName && next.trim() === opts.enName.trim()) return opts.koName;

    next = next
      .replace(/^\*\*Do this next:\*\*$/i, "**지금 해야 할 일:**")
      .replace(/^\*\*Watch for:\*\*$/i, "**주의할 점:**")
      .replace(/^\*\*Tips:\*\*$/i, "**팁:**")
      .replace(/^\*\*Steps:\*\*$/i, "**단계별 안내:**")
      .replace(/\/\/\/MISSABLE ACHIEVEMENT ALERT\/\/\//g, "놓치기 쉬운 업적입니다.");

    if (next.startsWith("- Use the route from ")) {
      next = next.replace(
        /^- Use the route from (.+)$/,
        "- 다음 공략 흐름을 기준으로 진행하세요: $1",
      );
    }

    return next;
  });
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

export async function getGameDetail(idOrSlug: string) {
  const admin = getAdminOrNull();
  const user = await getSelectedUser();

  if (!admin || !user) {
    return findGameBySlug(idOrSlug) ?? null;
  }

  // Route param is appId (preferred) but fall back to slug for older links.
  const asAppId = Number(idOrSlug);
  const library = await getLibraryGames();
  const libraryGame = Number.isFinite(asAppId) && asAppId > 0
    ? library.find((item) => item.appId === asAppId)
    : library.find((item) => item.slug === idOrSlug);
  if (!libraryGame) return null;

  const locale = await getLocale();
  const { data: achievements } = await admin
    .from("achievements")
    .select("id, api_name, display_name, description, category, global_percent, difficulty, sort_order, icon_url, icon_gray_url")
    .eq("app_id", libraryGame.appId)
    .order("sort_order", { ascending: true, nullsFirst: false })
    .order("global_percent", { ascending: true, nullsFirst: false });

  if (!achievements?.length) {
    // No achievements synced for this game yet — return library shell.
    return {
      appId: libraryGame.appId,
      slug: libraryGame.slug,
      name: libraryGame.name,
      completion: libraryGame.completion,
      completedAchievements: libraryGame.completedAchievements,
      totalAchievements: libraryGame.totalAchievements,
      playtime: libraryGame.playtime,
      lastPlayed: libraryGame.lastPlayed,
      imgIconUrl: libraryGame.imgIconUrl,
      headerUrl: libraryGame.headerUrl,
      capsuleUrl: libraryGame.capsuleUrl,
      state: "Active" as const,
      accent: "secondary" as const,
      coverClass: coverClassFromAppId(libraryGame.appId),
      heroClass: "cover-hero",
      tagline: "",
      achievements: [] as Achievement[],
    };
  }

  const achievementIds = achievements.map((item) => item.id);

  const [{ data: userAchievements }, { data: guides }, { data: tips }, { data: tipUsers }] =
    await Promise.all([
      admin
        .from("user_achievements")
        .select("achievement_id, unlocked, unlock_time")
        .eq("user_id", user.id)
        .in("achievement_id", achievementIds),
      admin
        .from("guides")
        .select("achievement_id, content, confidence, source_url, license, upvotes, locale, source_type")
        .in("achievement_id", achievementIds)
        .eq("is_active", true)
        .order("upvotes", { ascending: false }),
      admin
        .from("user_tips")
        .select("achievement_id, user_id, content, upvotes")
        .in("achievement_id", achievementIds)
        .order("upvotes", { ascending: false }),
      admin.from("users").select("id, persona_name"),
    ]);

  const userAchievementMap = new Map(
    (userAchievements ?? []).map((item) => [item.achievement_id, item]),
  );
  const desiredLocale = locale === "ko" ? "koreana" : "english";
  const guideMap = new Map<number, Array<DbGuide & { locale?: string | null }>>();
  for (const guide of guides ?? []) {
    const g = guide as DbGuide & { locale?: string | null };
    const current = guideMap.get(g.achievement_id) ?? [];
    current.push(g);
    guideMap.set(g.achievement_id, current);
  }
  const tipUserMap = new Map((tipUsers ?? []).map((item) => [item.id, item.persona_name || "Curator"]));

  const normalizedAchievements: Achievement[] = achievements.map((item) => {
    const userAchievement = userAchievementMap.get(item.id);
    const guide = pickBestGuide(guideMap.get(item.id) ?? [], desiredLocale);
    const achievementTips = ((tips ?? []) as DbTip[])
      .filter((tip) => tip.achievement_id === item.id)
      .slice(0, 3)
      .map((tip) => ({
        author: tipUserMap.get(tip.user_id) ?? "Curator",
        body: tip.content,
        votes: tip.upvotes ?? 0,
      }));

    const mockGuide = findGameBySlug(libraryGame.slug)?.achievements.find(
      (achievement) => achievement.slug === slugify(item.api_name || item.display_name || ""),
    );

    const enName = item.display_name || item.api_name;
    const enDesc = item.description || "";
    const achSidecar = parseAchievementSidecar((item as { category?: string | null }).category);
    const koName = achSidecar?.nameKo;
    const koDesc = achSidecar?.descKo;
    const displayName = locale === "ko" ? (koName || enName) : enName;
    const displayDesc = locale === "ko" ? (koDesc || enDesc) : enDesc;
    const rawGuideContent = guide?.content
      ? guide.content.split(/\n+/).filter(Boolean)
      : mockGuide?.guide.content || ["Guide is being generated for this achievement."];
    const guideContent = localizeGuideLinesForDisplay(rawGuideContent, locale, {
      koName,
      enName,
    });
    const structuredGuide = structureGuide(guideContent, guide?.source_url || mockGuide?.guide.source);
    return {
      slug: slugify(item.api_name || enName || `achievement-${item.id}`),
      name: displayName,
      description: displayDesc || "",
      difficulty: (item.difficulty as Difficulty) || difficultyFromPercent(item.global_percent),
      rarity: Number(item.global_percent ?? 0),
      estimatedTime: mockGuide?.estimatedTime || "Est. 2h",
      unlocked: Boolean(userAchievement?.unlocked),
      iconUrl: item.icon_url ?? null,
      iconGrayUrl: item.icon_gray_url ?? null,
      unlockedAt: userAchievement?.unlock_time
        ? new Date(userAchievement.unlock_time).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : undefined,
      guide: {
        confidence: ((guide?.confidence as Confidence) || "unverified") as Confidence,
        content: guideContent,
        source: guide?.source_url || mockGuide?.guide.source || "kamurocho.gg",
        license: guide?.license || mockGuide?.guide.license || "Original",
      },
      guideSummary: structuredGuide.summary ?? undefined,
      guideStatsLine: structuredGuide.statsLine ?? undefined,
      guideSteps: structuredGuide.steps,
      guideTips: structuredGuide.tips,
      guideReferences: structuredGuide.references,
      tips: achievementTips.length ? achievementTips : mockGuide?.tips || [],
      videos: mockGuide?.videos || [],
    };
  });

  return {
    appId: libraryGame.appId,
    slug: libraryGame.slug,
    name: libraryGame.name,
    completion: libraryGame.completion,
    completedAchievements: libraryGame.completedAchievements,
    totalAchievements: libraryGame.totalAchievements,
    playtime: libraryGame.playtime,
    lastPlayed: libraryGame.lastPlayed,
    imgIconUrl: libraryGame.imgIconUrl,
    headerUrl: libraryGame.headerUrl,
    capsuleUrl: libraryGame.capsuleUrl,
    state: libraryGame.state as "Active" | "Returning" | "Finished",
    accent: "secondary" as const,
    coverClass: coverClassFromAppId(libraryGame.appId),
    heroClass: "cover-hero",
    tagline: "",
    achievements: normalizedAchievements,
  };
}

export async function getSearchData() {
  const library = await getLibraryGames(50);
  return {
    trendingAchievements,
    matchingTitles:
      library.length > 0
        ? library.slice(0, 3).map((game) => ({
            name: game.name,
            subtitle: `${game.completedAchievements}/${game.totalAchievements} achievements`,
            total: `${game.completedAchievements}/${game.totalAchievements}`,
            className: game.coverClass,
          }))
        : matchingTitles,
    searchAchievements,
  };
}

export async function getProfileData() {
  const [library, user, selectedUser] = await Promise.all([
    getLibraryGames(100),
    getUserSummary(),
    getSelectedUser(),
  ]);
  const admin = getAdminOrNull();
  const steamId = selectedUser?.steam_id ?? null;

  // Real Steam profile facts in parallel with DB aggregates
  const [steamLevel, joinTs, ultraRareCount, monthlyUnlocks] = await Promise.all([
    steamId ? getSteamLevel(steamId) : Promise.resolve(null),
    steamId ? getPlayerJoinTimestamp(steamId) : Promise.resolve(null),
    (async () => {
      if (!admin || !selectedUser) return 0;
      const { count } = await admin
        .from("user_achievements")
        .select("achievement_id, achievements!inner(global_percent)", { count: "exact", head: true })
        .eq("user_id", selectedUser.id)
        .eq("unlocked", true)
        .lt("achievements.global_percent", 1);
      return count ?? 0;
    })(),
    (async () => {
      if (!admin || !selectedUser) return Array(12).fill(0) as number[];
      const cutoff = new Date();
      cutoff.setMonth(cutoff.getMonth() - 11);
      cutoff.setDate(1);
      cutoff.setHours(0, 0, 0, 0);
      const { data } = await admin
        .from("user_achievements")
        .select("unlock_time")
        .eq("user_id", selectedUser.id)
        .eq("unlocked", true)
        .gte("unlock_time", cutoff.toISOString())
        .order("unlock_time", { ascending: true });
      const buckets = Array(12).fill(0) as number[];
      const now = new Date();
      for (const row of data ?? []) {
        const ts = row.unlock_time as string | null;
        if (!ts) continue;
        const d = new Date(ts);
        const monthsAgo = (now.getFullYear() - d.getFullYear()) * 12 + (now.getMonth() - d.getMonth());
        const idx = 11 - monthsAgo;
        if (idx >= 0 && idx < 12) buckets[idx]++;
      }
      return buckets;
    })(),
  ]);

  const totalMinutes = library.reduce((sum, game) => {
    const match = game.playtime.match(/(\d+)h(?: (\d+)m)?/);
    if (!match) return sum;
    return sum + Number(match[1]) * 60 + Number(match[2] ?? 0);
  }, 0);
  const avgCompletion = library.length
    ? library.reduce((sum, game) => sum + game.completion, 0) / library.length
    : 0;

  let rarest = mockHallOfFame[0];
  let hall = mockHallOfFame;

  if (admin && selectedUser) {
    const locale = await getLocale();
    const { data } = await admin
      .from("user_achievements")
      .select(
        "unlocked, achievements!inner(api_name, app_id, display_name, category, global_percent, games!inner(name, img_logo_url))",
      )
      .eq("user_id", selectedUser.id)
      .eq("unlocked", true)
      .order("achievement_id", { ascending: false })
      .limit(50);

    if (data?.length) {
      const unlocked = data
        .map((item) => {
          const achievement = Array.isArray(item.achievements)
            ? item.achievements[0]
            : item.achievements;
          const game = Array.isArray(achievement?.games)
            ? achievement.games[0]
            : achievement?.games;
          const achEn = achievement?.display_name || "Achievement";
          const achKo = parseAchievementSidecar(
            (achievement as { category?: string | null } | null)?.category,
          )?.nameKo;
          const gameEn = game?.name || "Game";
          const gameKo = parseLocalizationSidecar(
            (game as { img_logo_url?: string | null } | null)?.img_logo_url,
          )?.nameKo;
          const apiName = (achievement as { api_name?: string } | null)?.api_name || "";
          const appId = Number((achievement as { app_id?: number } | null)?.app_id ?? 0);
          return {
            title: locale === "ko" ? (achKo || achEn) : achEn,
            game: locale === "ko" ? (gameKo || gameEn) : gameEn,
            rarity: `${Number(achievement?.global_percent ?? 0).toFixed(2)}%`,
            label: difficultyFromPercent(Number(achievement?.global_percent ?? 0)).toUpperCase(),
            appId,
            slug: slugify(apiName || achEn || `achievement`) || `ach-${appId}`,
          };
        })
        .sort((a, b) => Number(a.rarity.replace("%", "")) - Number(b.rarity.replace("%", "")));

      hall = unlocked.slice(0, 5).map((item, index) => ({
        rank: String(index + 1).padStart(2, "0"),
        ...item,
      }));
      rarest = hall[0];
    }
  }

  const joinYear = joinTs ? new Date(joinTs * 1000).getFullYear() : null;

  return {
    user,
    totalHours: Math.round(totalMinutes / 60),
    avgCompletion: avgCompletion.toFixed(1),
    rarest,
    hall,
    steamLevel,
    joinYear,
    ultraRareCount,
    monthlyUnlocks,
  };
}

export async function getSettingsData() {
  const user = await getUserSummary();
  return {
    user,
    email: `${(user.name || "curator").toLowerCase().replace(/\s+/g, ".")}@kamurocho.gg`,
    bio: "Digital completionist specializing in CRPGs and retro-modern shooters. Currently hunting Platinums in the Neon Sector.",
  };
}
