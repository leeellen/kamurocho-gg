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

function buildEnglishGuide(ach: AchievementRow): string {
  const desc = ach.description?.trim();
  const rarity = rarityBucketEn(ach.global_percent);
  const rarityNum = Number(ach.global_percent ?? 0).toFixed(2);
  const steps: string[] = [
    "Check the exact trigger in the achievement description before advancing your current save.",
    "Keep a manual save before major chapter transitions, route splits, or point-of-no-return sections.",
  ];
  const tips: string[] = [];
  if (Number(ach.global_percent ?? 100) < 5) {
    steps.push("Handle missable side content before the final chapter whenever possible.");
    tips.push("This is a rare achievement, so assume there may be missable conditions or route-specific requirements.");
  } else if (Number(ach.global_percent ?? 100) < 20) {
    steps.push("Clear side objectives tied to this achievement during the main run instead of postponing them.");
    tips.push("This is moderately uncommon, which usually means a small detour or an optional system is involved.");
  } else {
    steps.push("If it does not unlock naturally, review chapter-specific interactions or optional conversations you may have skipped.");
    tips.push("Most players unlock this naturally, so double-check for one missed interaction or requirement.");
  }

  return [
    desc || ach.display_name,
    "",
    `**Difficulty:** ${rarity} | **Global unlock rate:** ${rarityNum}%`,
    "",
    "**Do this next:**",
    ...steps.map((t) => `- ${t}`),
    "",
    "**Tips:**",
    ...tips.map((t) => `- ${t}`),
  ].join("\n");
}

function buildKoreanGuide(ach: AchievementRow): string {
  const sidecar = parseSidecar(ach.category);
  const descKo = sidecar?.descKo?.trim();
  const descEn = ach.description?.trim();
  const rarity = rarityBucketKo(ach.global_percent);
  const rarityNum = Number(ach.global_percent ?? 0).toFixed(2);
  const steps: string[] = [
    "현재 세이브에서 업적 설명의 트리거 조건이 정확히 무엇인지 먼저 확인하세요.",
    "장 전환, 분기 선택, 되돌릴 수 없는 구간 전에 수동 세이브를 남겨 두세요.",
  ];
  const tips: string[] = [];
  if (Number(ach.global_percent ?? 100) < 5) {
    steps.push("최종장에 들어가기 전에 Missable 서브 콘텐츠나 분기 조건을 먼저 처리하세요.");
    tips.push("희귀 업적이라면 Missable 조건이나 특정 루트 요구사항이 있을 가능성이 큽니다.");
  } else if (Number(ach.global_percent ?? 100) < 20) {
    steps.push("관련된 서브 목표가 있다면 메인 진행 중 함께 처리하는 편이 안전합니다.");
    tips.push("적당히 드문 업적은 보통 짧은 우회 진행이나 선택형 콘텐츠를 요구합니다.");
  } else {
    steps.push("자연스럽게 달성되지 않았다면 특정 대화, 상호작용, 스테이지 조건을 놓친 경우가 많습니다.");
    tips.push("자연 달성 업적에 가깝기 때문에 한두 개의 상호작용 누락만 다시 확인하면 되는 경우가 많습니다.");
  }

  return [
    descKo || descEn || sidecar?.nameKo || ach.display_name,
    "",
    `**난이도:** ${rarity} | **글로벌 달성률:** ${rarityNum}%`,
    "",
    "**지금 해야 할 일:**",
    ...steps.map((t) => `- ${t}`),
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
    const en = buildEnglishGuide(ach);
    const ko = buildKoreanGuide(ach);
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
