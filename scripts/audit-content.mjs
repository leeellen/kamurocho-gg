import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { load, snapshot } from "../tests/content-loader.mjs";

const { CURATED_GAMES, EXTERNAL_GUIDES } = load("@/lib/content");
const { getCuratedGuide } = load("@/lib/guides/curated");
const { getSubstories } = load("@/lib/substories");
const { getCollectibles } = load("@/lib/collectibles");
const { getMinigames } = load("@/lib/minigames");
const evidence = JSON.parse(readFileSync(new URL("../docs/content-verification.json", import.meta.url), "utf8"));

function fingerprint(rows) {
  return createHash("sha256").update(JSON.stringify(rows.sort((a, b) => a.api.localeCompare(b.api)))).digest("hex");
}

export async function auditContent({ verifySteam = false } = {}) {
  const findings = [];
  const add = (game, detail) => findings.push({ game, detail });
  const sources = new Set();
  const checkUrl = (url, game) => {
    try {
      const parsed = new URL(url);
      assert.ok(["https:", "http:"].includes(parsed.protocol));
      assert.ok(!/%(?![0-9a-f]{2})/i.test(url));
      sources.add(url);
    } catch { add(game, `Invalid reference URL: ${url}`); }
  };
  const checkRefs = (refs, game) => {
    for (const ref of [refs ?? []].flat()) checkUrl(ref.url, game);
  };
  const games = [];
  const knownKeys = new Set(snapshot.achievements.map((row) => `${row.app_id}:${row.api_name.toLowerCase()}`));
  for (const file of readdirSync(new URL("../src/lib/guides/curated/", import.meta.url))) {
    if (!file.endsWith(".ts") || file === "index.ts") continue;
    for (const guides of Object.values(load(`@/lib/guides/curated/${file}`))) {
      for (const key of Object.keys(guides)) {
        if (!knownKeys.has(key)) add(file, `Curated guide has no Steam achievement: ${key}`);
      }
    }
  }
  for (const game of CURATED_GAMES) {
    const rows = snapshot.achievements.filter((row) => row.app_id === game.appId);
    const keys = new Set(rows.map((row) => row.api_name.toLowerCase()));
    if (!rows.length || keys.size !== rows.length) add(game.slug, "Missing or duplicate Steam achievement keys");
    const strings = rows.map((row) => {
      const sidecar = JSON.parse(row.category ?? "{}");
      return { api: row.api_name, en: row.display_name ?? null, descEn: row.description ?? null, ko: sidecar.nameKo ?? null, descKo: sidecar.descKo ?? null };
    });
    const proof = evidence.games.find((row) => row.appId === game.appId);
    if (proof?.achievementFingerprint !== fingerprint(strings)) add(game.slug, "Snapshot differs from the recorded Steam verification");
    if (verifySteam) {
      if (!process.env.STEAM_API_KEY) throw new Error("STEAM_API_KEY is required for --verify-steam");
      const schemas = [];
      for (const language of ["english", "koreana"]) {
        const url = new URL("https://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2/");
        url.search = new URLSearchParams({ key: process.env.STEAM_API_KEY, appid: String(game.appId), l: language }).toString();
        // Never print credential-bearing URLs or fetch error messages.
        const response = await fetch(url, { signal: AbortSignal.timeout(20_000) }).catch(() => null);
        if (!response?.ok) throw new Error(`Steam verification unavailable for ${game.slug}/${language}`);
        const data = await response.json();
        schemas.push(new Map((data.game?.availableGameStats?.achievements ?? []).map((row) => [row.name, row])));
      }
      const actual = [...schemas[0]].map(([api, row]) => ({ api, en: row.displayName ?? null, descEn: row.description ?? null, ko: schemas[1].get(api)?.displayName ?? null, descKo: schemas[1].get(api)?.description ?? null }));
      if (fingerprint(actual) !== fingerprint(strings)) add(game.slug, "Live Steam names, requirements, or achievement keys differ from the snapshot");
    }
    for (const row of rows) {
      const guide = getCuratedGuide(game.appId, row.api_name);
      if (guide?.sourceUrl) checkUrl(guide.sourceUrl, game.slug);
      if (!row.description && (!guide?.summary?.ko || !guide?.summary?.en || !guide.sourceUrl)) {
        add(game.slug, `Hidden achievement without sourced conditions: ${row.api_name}`);
      }
      const locales = snapshot.guides.filter((guide) => guide.achievement_id === row.id).map((guide) => guide.locale);
      if (!locales.includes("english") || !locales.includes("koreana")) add(game.slug, `Missing guide locale: ${row.api_name}`);
    }
    for (const ref of EXTERNAL_GUIDES[game.slug] ?? []) {
      checkUrl(ref.url, game.slug);
      const id = new URL(ref.url).searchParams.get("id");
      const sourceApp = evidence.steamGuideApps[id];
      const legacyApp = { 2988580: 638970, 3717330: 834530, 3717340: 927380 }[game.appId];
      if (sourceApp && sourceApp !== game.appId && sourceApp !== legacyApp) add(game.slug, `Reference belongs to a different game: ${id}`);
    }
    if (!EXTERNAL_GUIDES[game.slug]?.length) add(game.slug, "Missing game-level external references");
    const substories = getSubstories(game.appId);
    const collectibles = getCollectibles(game.appId);
    const minigames = getMinigames(game.appId);
    if (!substories || !collectibles || !minigames) { add(game.slug, "Missing content dataset"); continue; }
    checkRefs(substories.source, game.slug);
    const subKeys = new Set();
    for (const group of substories.groups) for (const item of group.items) {
      checkRefs(item.source, game.slug);
      // Numbering is local to a protagonist/scenario (not globally unique in 0 or Kiwami 3).
      const key = `${item.protagonist?.en ?? group.title.en}:${item.number}`;
      if (subKeys.has(key)) add(game.slug, `Duplicate substory identifier: ${key}`);
      subKeys.add(key);
    }
    const miniSlugs = new Set();
    for (const minigame of minigames.minigames) {
      if (miniSlugs.has(minigame.slug)) add(game.slug, `Duplicate minigame slug: ${minigame.slug}`);
      miniSlugs.add(minigame.slug);
      if (minigame.achievementSlug && !keys.has(minigame.achievementSlug)) add(game.slug, `Unknown linked achievement: ${minigame.achievementSlug}`);
      if (!minigame.source) add(game.slug, `Minigame without references: ${minigame.slug}`);
      checkRefs(minigame.source, game.slug);
    }
    for (const category of collectibles.categories) {
      checkRefs(category.source, game.slug);
      for (const group of category.groups ?? []) for (const [id, position] of Object.entries(group.hotspots ?? {})) {
        if (!group.items.some((item) => String(item.number) === id)) add(game.slug, `Map pin without an item: ${category.slug}/${id}`);
        if (position.length !== 2 || position.some((n) => !Number.isFinite(n) || n < 0 || n > 100)) add(game.slug, `Invalid map coordinates: ${category.slug}/${id}`);
      }
    }
    games.push({ slug: game.slug, achievements: rows.length, curatedGuides: rows.filter((row) => getCuratedGuide(game.appId, row.api_name)).length, substories: substories.groups.reduce((n, group) => n + group.items.length, 0), minigames: minigames.minigames.length });
  }
  return { games, referenceUrls: sources.size, findings, steamCheckedLive: verifySteam };
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const result = await auditContent({ verifySteam: process.argv.includes("--verify-steam") });
  console.log(JSON.stringify(result, null, 2));
  if (result.findings.length) process.exitCode = 1;
}
