import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const STEAM_API_KEY = process.env.STEAM_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY || !STEAM_API_KEY) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, or STEAM_API_KEY.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

function argValue(flag) {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : null;
}

function cleanAssetUrl(url) {
  return url?.split("?")[0] ?? null;
}

async function fetchJson(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; KamurochoSteamSync/1.0)",
    },
  });
  if (!res.ok) throw new Error(`Fetch failed ${res.status}: ${url}`);
  return res.json();
}

async function fetchStore(appId, lang, country) {
  // Drop `filters=basic` so Steam returns short_description per locale, which
  // we surface on the site as the canonical Steam-provided game summary.
  const payload = await fetchJson(
    `https://store.steampowered.com/api/appdetails?appids=${appId}&l=${lang}&cc=${country}`,
  );
  return payload?.[String(appId)]?.data ?? null;
}

async function fetchSchema(appId, lang) {
  return fetchJson(
    `https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/?key=${STEAM_API_KEY}&appid=${appId}&l=${lang}`,
  );
}

async function fetchGlobalPercentages(appId) {
  return fetchJson(
    `https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=${appId}`,
  );
}

async function syncApp(appId) {
  const syncedAt = new Date().toISOString();
  const [storeEn, storeKo, storeJa, schemaEn, schemaKo, schemaJa, pct] = await Promise.all([
    fetchStore(appId, "english", "US"),
    fetchStore(appId, "koreana", "KR").catch(() => null),
    fetchStore(appId, "japanese", "JP").catch(() => null),
    fetchSchema(appId, "english"),
    fetchSchema(appId, "koreana").catch(() => null),
    fetchSchema(appId, "japanese").catch(() => null),
    fetchGlobalPercentages(appId).catch(() => null),
  ]);

  if (!storeEn?.name) {
    throw new Error(`Store payload missing for ${appId}`);
  }

  const achievementsEn = schemaEn?.game?.availableGameStats?.achievements ?? [];
  const achievementsKo = new Map(
    (schemaKo?.game?.availableGameStats?.achievements ?? []).map((achievement) => [achievement.name, achievement]),
  );
  const achievementsJa = new Map(
    (schemaJa?.game?.availableGameStats?.achievements ?? []).map((achievement) => [achievement.name, achievement]),
  );
  const globalPercentages = new Map(
    (pct?.achievementpercentages?.achievements ?? []).map((achievement) => [achievement.name, achievement.percent]),
  );

  // Steam returns release date as a free-form string in the storefront
  // locale (e.g. "Jan 26, 2017" / "2017年1月26日"). Extract a 4-digit year so
  // the UI can display a clean release year without re-parsing per-render.
  const releaseDateRaw = storeEn?.release_date?.date ?? null;
  const yearMatch = releaseDateRaw ? /(\d{4})/.exec(releaseDateRaw) : null;
  const releaseYear = yearMatch ? Number(yearMatch[1]) : null;

  const gameSidecar = JSON.stringify({
    v: 4,
    nameKo: storeKo?.name ?? null,
    nameJa: storeJa?.name ?? null,
    shortDescriptionEn: storeEn?.short_description ?? null,
    shortDescriptionKo: storeKo?.short_description ?? null,
    shortDescriptionJa: storeJa?.short_description ?? null,
    releaseDate: releaseDateRaw,
    releaseYear,
    headerUrl: cleanAssetUrl(storeEn?.header_image ?? storeKo?.header_image ?? storeJa?.header_image),
    capsuleUrl: cleanAssetUrl(storeEn?.capsule_imagev5 ?? storeEn?.capsule_image ?? storeKo?.capsule_imagev5 ?? storeJa?.capsule_imagev5),
  });

  const { error: gameError } = await supabase.from("games").upsert({
    app_id: appId,
    name: storeEn.name,
    img_logo_url: gameSidecar,
    img_icon_url: null,
    total_achievements: achievementsEn.length,
    last_schema_sync: syncedAt,
  }, { onConflict: "app_id" });
  if (gameError) throw new Error(gameError.message);

  const achievementRows = achievementsEn.map((achievement) => {
    const ko = achievementsKo.get(achievement.name);
    const ja = achievementsJa.get(achievement.name);
    return {
      app_id: appId,
      api_name: achievement.name,
      display_name: achievement.displayName || achievement.name,
      description: achievement.description || null,
      category: JSON.stringify({
        v: 2,
        nameKo: ko?.displayName ?? null,
        descKo: ko?.description ?? null,
        nameJa: ja?.displayName ?? null,
        descJa: ja?.description ?? null,
      }),
      icon_url: achievement.icon || null,
      icon_gray_url: achievement.icongray || null,
      global_percent: globalPercentages.get(achievement.name) ?? null,
      last_updated: syncedAt,
    };
  });

  for (let index = 0; index < achievementRows.length; index += 100) {
    const { error } = await supabase
      .from("achievements")
      .upsert(achievementRows.slice(index, index + 100), { onConflict: "app_id,api_name" });
    if (error) throw new Error(error.message);
  }

  console.log(`[synced] ${appId} achievements=${achievementRows.length}`);
}

async function main() {
  const onlyAppId = argValue("--app-id");
  const appIdsArg = argValue("--app-ids");
  const appIds = onlyAppId
    ? [Number(onlyAppId)]
    : (appIdsArg ?? "")
      .split(",")
      .map((value) => Number(value.trim()))
      .filter((value) => Number.isFinite(value) && value > 0);

  if (appIds.length === 0) {
    throw new Error("Pass --app-id or --app-ids.");
  }

  for (const appId of appIds) {
    await syncApp(appId);
  }
}

await main();
