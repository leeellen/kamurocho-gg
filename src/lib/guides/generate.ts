// Lightweight template-based guide generator. Matches the structure of the
// existing AI guide rows already in DB (see ~46k rows) so the UI renders the
// same way for collected and baseline content.

import { createAdminClient } from "@/lib/supabase/admin";

type AchievementRow = {
  id: number;
  app_id: number;
  api_name: string;
  display_name: string;
  description: string | null;
  category: string | null;
  global_percent: number | null;
};

type AchSidecar = { nameKo?: string | null; descKo?: string | null };

function parseSidecar(raw: string | null | undefined): AchSidecar | null {
  if (!raw || !raw.startsWith("{")) return null;
  try {
    return JSON.parse(raw) as AchSidecar;
  } catch {
    return null;
  }
}

function rarityBucketEn(percent: number | null | undefined): string {
  const p = Number(percent ?? 0);
  if (!p && p !== 0) return "Common";
  if (p >= 50) return "Common";
  if (p >= 20) return "Uncommon";
  if (p >= 5) return "Rare";
  if (p >= 1) return "Very Rare";
  return "Ultra Rare";
}

function rarityBucketKo(percent: number | null | undefined): string {
  const p = Number(percent ?? 0);
  if (!p && p !== 0) return "흔함";
  if (p >= 50) return "흔함";
  if (p >= 20) return "보통";
  if (p >= 5) return "희귀";
  if (p >= 1) return "매우 희귀";
  return "최고 난이도";
}

function buildEnglishGuide(ach: AchievementRow, gameName: string): string {
  const desc = ach.description?.trim();
  const rarity = rarityBucketEn(ach.global_percent);
  const rarityNum = Number(ach.global_percent ?? 0).toFixed(2);
  const tips: string[] = [];
  if (Number(ach.global_percent ?? 100) < 5) {
    tips.push("A rare achievement — plan carefully and consider following a detailed walkthrough.");
  } else if (Number(ach.global_percent ?? 100) < 20) {
    tips.push("Moderately uncommon — most players pick this up while completing the main story plus a bit of optional content.");
  } else {
    tips.push("Most players unlock this naturally during normal play.");
  }
  tips.push(`Search "${ach.display_name} ${gameName} guide" if you want a step-by-step walkthrough with screenshots.`);

  return [
    desc || ach.display_name,
    "",
    `**Difficulty:** ${rarity} | **Global unlock rate:** ${rarityNum}%`,
    "",
    "**Tips:**",
    ...tips.map((t) => `- ${t}`),
  ].join("\n");
}

function buildKoreanGuide(ach: AchievementRow, gameNameKo: string | null, gameNameEn: string): string {
  const sidecar = parseSidecar(ach.category);
  const descKo = sidecar?.descKo?.trim();
  const descEn = ach.description?.trim();
  const rarity = rarityBucketKo(ach.global_percent);
  const rarityNum = Number(ach.global_percent ?? 0).toFixed(2);
  const tips: string[] = [];
  if (Number(ach.global_percent ?? 100) < 5) {
    tips.push("희귀한 도전과제입니다. 상세한 공략을 참고하면서 진행하세요.");
  } else if (Number(ach.global_percent ?? 100) < 20) {
    tips.push("적당히 드문 업적입니다. 메인 스토리에 약간의 부가 콘텐츠를 곁들이면 자연스럽게 달성됩니다.");
  } else {
    tips.push("일반 플레이 중 자연스럽게 달성되는 업적입니다.");
  }
  const targetGame = gameNameKo || gameNameEn;
  const targetAch = sidecar?.nameKo || ach.display_name;
  tips.push(`자세한 공략은 "${targetGame} ${targetAch} 공략" 으로 검색해 보세요.`);

  return [
    descKo || descEn || sidecar?.nameKo || ach.display_name,
    "",
    `**난이도:** ${rarity} | **글로벌 달성률:** ${rarityNum}%`,
    "",
    "**팁:**",
    ...tips.map((t) => `- ${t}`),
  ].join("\n");
}

export async function collectGuidesForUser(userId: string): Promise<{
  scanned: number;
  inserted: number;
  skipped: number;
  failed: number;
}> {
  const admin = createAdminClient();

  // 1. Get all app_ids the user owns
  const { data: userGames, error: ugErr } = await admin
    .from("user_games")
    .select("app_id, games!inner(app_id, name, img_logo_url)")
    .eq("user_id", userId);
  if (ugErr) throw new Error(`user_games fetch failed: ${ugErr.message}`);
  const ownedAppIds = (userGames ?? []).map((r) => Number(r.app_id));
  if (ownedAppIds.length === 0) return { scanned: 0, inserted: 0, skipped: 0, failed: 0 };

  const gameNameByApp = new Map<number, { en: string; ko: string | null }>();
  for (const row of userGames ?? []) {
    const g = (Array.isArray(row.games) ? row.games[0] : row.games) as {
      app_id: number;
      name: string;
      img_logo_url: string | null;
    } | null;
    if (!g) continue;
    let ko: string | null = null;
    if (g.img_logo_url?.startsWith("{")) {
      try {
        const sc = JSON.parse(g.img_logo_url) as { nameKo?: string | null };
        ko = sc.nameKo ?? null;
      } catch {
        // ignore
      }
    }
    gameNameByApp.set(g.app_id, { en: g.name, ko });
  }

  // 2. Pull achievements for owned apps in chunks (REST has URL length limits)
  type AchPlus = AchievementRow;
  const APP_CHUNK = 30;
  let allAchievements: AchPlus[] = [];
  for (let i = 0; i < ownedAppIds.length; i += APP_CHUNK) {
    const slice = ownedAppIds.slice(i, i + APP_CHUNK);
    const { data, error } = await admin
      .from("achievements")
      .select("id, app_id, api_name, display_name, description, category, global_percent")
      .in("app_id", slice);
    if (error) throw new Error(`achievements fetch failed: ${error.message}`);
    allAchievements = allAchievements.concat((data ?? []) as AchPlus[]);
  }
  if (allAchievements.length === 0) return { scanned: 0, inserted: 0, skipped: 0, failed: 0 };

  // 3. Pull existing guides for those achievements to skip rows that already
  //    have any guide row (regardless of locale)
  const ACH_CHUNK = 200;
  const achievementIds = allAchievements.map((a) => a.id);
  const haveGuides = new Set<number>();
  for (let i = 0; i < achievementIds.length; i += ACH_CHUNK) {
    const slice = achievementIds.slice(i, i + ACH_CHUNK);
    const { data, error } = await admin
      .from("guides")
      .select("achievement_id, locale")
      .in("achievement_id", slice);
    if (error) throw new Error(`guides fetch failed: ${error.message}`);
    for (const row of data ?? []) haveGuides.add(Number(row.achievement_id));
  }

  // 4. Build template guides for missing ones and bulk insert
  const now = new Date().toISOString();
  const toInsert: Array<Record<string, unknown>> = [];
  let skipped = 0;
  for (const ach of allAchievements) {
    if (haveGuides.has(ach.id)) {
      skipped++;
      continue;
    }
    const game = gameNameByApp.get(ach.app_id);
    const en = buildEnglishGuide(ach, game?.en ?? `App ${ach.app_id}`);
    const ko = buildKoreanGuide(ach, game?.ko ?? null, game?.en ?? `App ${ach.app_id}`);
    toInsert.push({
      achievement_id: ach.id,
      content: en,
      confidence: 0.5,
      source_type: "template",
      source_url: null,
      license: null,
      upvotes: 0,
      downvotes: 0,
      is_active: true,
      created_at: now,
      updated_at: now,
      locale: "english",
    });
    toInsert.push({
      achievement_id: ach.id,
      content: ko,
      confidence: 0.5,
      source_type: "template",
      source_url: null,
      license: null,
      upvotes: 0,
      downvotes: 0,
      is_active: true,
      created_at: now,
      updated_at: now,
      locale: "koreana",
    });
  }

  let inserted = 0;
  let failed = 0;
  const INSERT_CHUNK = 200;
  for (let i = 0; i < toInsert.length; i += INSERT_CHUNK) {
    const slice = toInsert.slice(i, i + INSERT_CHUNK);
    const { error } = await admin.from("guides").insert(slice);
    if (error) {
      failed += slice.length;
      console.error("[collectGuides] insert failed:", error.message);
    } else {
      inserted += slice.length;
    }
  }

  return {
    scanned: allAchievements.length,
    inserted,
    skipped,
    failed,
  };
}
