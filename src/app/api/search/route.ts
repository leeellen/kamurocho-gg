import { NextResponse } from "next/server";

import { getLocale } from "@/lib/i18n";
import { createAdminClient } from "@/lib/supabase/admin";
import { createClient as createServerClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

type GameRow = {
  app_id: number;
  name: string;
  img_logo_url: string | null;
  img_icon_url: string | null;
};

type AchievementRow = {
  id: number;
  app_id: number;
  api_name: string;
  display_name: string;
  description: string | null;
  category: string | null;
  global_percent: number | null;
  icon_url: string | null;
  icon_gray_url: string | null;
};

type Sidecar = { nameKo?: string | null; headerUrl?: string | null; capsuleUrl?: string | null };
type AchSidecar = { nameKo?: string | null; descKo?: string | null };

function parseJsonish<T>(raw: string | null | undefined): T | null {
  if (!raw || !raw.startsWith("{")) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const q = (url.searchParams.get("q") ?? "").trim();
  const limit = Math.min(20, Number(url.searchParams.get("limit") ?? 8));
  if (!q) return NextResponse.json({ games: [], achievements: [] });

  const supabase = await createServerClient();
  const {
    data: { user: authUser },
  } = await supabase.auth.getUser();
  if (!authUser) return NextResponse.json({ error: "unauthenticated" }, { status: 401 });

  const admin = createAdminClient();
  const locale = await getLocale();
  const escaped = q.replace(/[%_]/g, (m) => `\\${m}`);
  const pattern = `%${escaped}%`;

  // Game name search restricted to user's owned games (canonical English `name`).
  const { data: userGames } = await admin
    .from("user_games")
    .select("app_id, completion_pct, games!inner(app_id, name, img_logo_url, img_icon_url)")
    .eq("user_id", authUser.id)
    .ilike("games.name", pattern)
    .limit(limit);

  const games = (userGames ?? []).map((row) => {
    const g = (Array.isArray(row.games) ? row.games[0] : row.games) as GameRow | null;
    const sidecar = parseJsonish<Sidecar>(g?.img_logo_url);
    return {
      appId: g?.app_id ?? row.app_id,
      name: locale === "ko" ? (sidecar?.nameKo || g?.name || "") : (g?.name || ""),
      headerUrl: sidecar?.headerUrl ?? null,
      capsuleUrl: sidecar?.capsuleUrl ?? null,
      imgIconUrl: g?.img_icon_url ?? null,
      completion: Math.round(Number(row.completion_pct ?? 0)),
    };
  });

  // Achievement search restricted to apps the user owns. ilike on display_name
  // covers English; for Korean we filter the rows whose sidecar nameKo includes q.
  const userAppIds = await admin
    .from("user_games")
    .select("app_id")
    .eq("user_id", authUser.id);
  const ownedAppIds = (userAppIds.data ?? []).map((r) => r.app_id);

  let achievementRows: AchievementRow[] = [];
  if (ownedAppIds.length > 0) {
    const { data } = await admin
      .from("achievements")
      .select("id, app_id, api_name, display_name, description, category, global_percent, icon_url, icon_gray_url")
      .in("app_id", ownedAppIds)
      .ilike("display_name", pattern)
      .order("global_percent", { ascending: true, nullsFirst: false })
      .limit(limit);
    achievementRows = (data ?? []) as AchievementRow[];

    // Korean fuzzy: also match against sidecar nameKo for any ach in owned apps
    if (locale === "ko" && achievementRows.length < limit) {
      const { data: koRows } = await admin
        .from("achievements")
        .select("id, app_id, api_name, display_name, description, category, global_percent, icon_url, icon_gray_url")
        .in("app_id", ownedAppIds)
        .ilike("category", `%"nameKo"%${escaped}%`)
        .limit(limit);
      const known = new Set(achievementRows.map((r) => r.id));
      for (const r of (koRows ?? []) as AchievementRow[]) {
        if (!known.has(r.id)) achievementRows.push(r);
      }
      achievementRows = achievementRows.slice(0, limit);
    }
  }

  const gameByApp = new Map<number, GameRow>();
  if (achievementRows.length) {
    const appIds = Array.from(new Set(achievementRows.map((r) => r.app_id)));
    const { data: gamesById } = await admin
      .from("games")
      .select("app_id, name, img_logo_url, img_icon_url")
      .in("app_id", appIds);
    for (const g of (gamesById ?? []) as GameRow[]) gameByApp.set(g.app_id, g);
  }

  const achievements = achievementRows.map((r) => {
    const g = gameByApp.get(r.app_id);
    const sidecar = parseJsonish<Sidecar>(g?.img_logo_url ?? null);
    const achSidecar = parseJsonish<AchSidecar>(r.category);
    return {
      id: r.id,
      appId: r.app_id,
      apiName: r.api_name,
      name: locale === "ko" ? (achSidecar?.nameKo || r.display_name) : r.display_name,
      iconUrl: r.icon_url,
      iconGrayUrl: r.icon_gray_url,
      rarity: Number(r.global_percent ?? 0),
      gameName: locale === "ko" ? (sidecar?.nameKo || g?.name || "") : (g?.name || ""),
      gameAppId: r.app_id,
    };
  });

  return NextResponse.json({ games, achievements });
}
