import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const STEAM_API_KEY = process.env.STEAM_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing Supabase env vars.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const STOPWORDS = new Set([
  "the", "and", "for", "with", "this", "that", "you", "your", "from", "into", "have", "will",
  "then", "than", "just", "after", "before", "once", "while", "they", "them", "their", "about",
  "main", "story", "complete", "chapter", "achievement", "obtain", "get", "started", "through",
  "도전", "과제", "업적", "달성", "게임", "시작", "완료", "스토리", "챕터",
]);
const translationCache = new Map();

function argValue(flag) {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : null;
}

function decodeHtml(text) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

function stripTags(html) {
  return decodeHtml(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/li>/gi, "\n")
      .replace(/<li[^>]*>/gi, "- ")
      .replace(/<\/(p|div|ul|ol|h1|h2|h3|h4)>/gi, "\n")
      .replace(/<div class="sharedFilePreviewYouTubeVideo[^>]*><\/div>/gi, "")
      .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, "$2")
      .replace(/<[^>]+>/g, "")
      .replace(/\r/g, "")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}

function normalize(text) {
  return decodeHtml(text)
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalize(text)
    .split(" ")
    .filter((token) => token.length >= 2 && !STOPWORDS.has(token));
}

function uniq(values) {
  return [...new Set(values)];
}

function extractGuideUrls(text) {
  return uniq(
    [...text.matchAll(/https:\/\/steamcommunity\.com\/sharedfiles\/filedetails\/\?id=\d+/g)].map((match) => match[0]),
  );
}

function pageSuitability(page, gameName) {
  const haystack = normalize(`${page.title} ${page.intro}`);
  const gameTokens = tokenize(gameName || "");
  let score = 0;
  const positiveTitle =
    /(100|achievement|complete guide|walkthrough|hidden achievement|story related|reference|guide)/i.test(page.title);
  const positiveIntro =
    /(achievement|completion list|100%|story related|side mission|hidden achievement|walkthrough|guide)/i.test(page.intro);
  const negativeTitle =
    /(steam profile|soundtrack|actual matters in japanese school now|bakamitai|русификатор|translation|localization|save file|ultimate saves|mod|trainer|cheat|reshade|fix)/i.test(page.title);
  const negativeIntro =
    /(steam profile|featured showcase|soundtrack|русификатор|translation|localization|save file|ultimate saves|mod|trainer|cheat|reshade|patch)/i.test(page.intro);

  if (negativeTitle || negativeIntro) return -999;
  if (!positiveTitle && !positiveIntro) return -999;

  if (positiveTitle) {
    score += 80;
  }
  if (positiveIntro) {
    score += 40;
  }
  for (const token of gameTokens) {
    if (haystack.includes(token)) score += 5;
  }

  return score;
}

function parseGuidePage(html, url) {
  const titleMatch = html.match(/<div class="workshopItemTitle">([\s\S]*?)<\/div>/i);
  const introMatch = html.match(/<div class="guideTopDescription" id="highlightContent">([\s\S]*?)<\/div>/i);
  const sectionMatches = [...html.matchAll(
    /<div class="subSection detailBox" id="[^"]+">[\s\S]*?<div class="subSectionTitle">\s*([\s\S]*?)\s*<\/div>\s*<div class="subSectionDesc">\s*([\s\S]*?)<div style="clear: both"><\/div>\s*<\/div>/gi,
  )];

  const sections = sectionMatches.map((match) => ({
    title: stripTags(match[1]),
    text: stripTags(match[2]),
    raw: match[2],
  }));

  return {
    url,
    title: titleMatch ? stripTags(titleMatch[1]) : url,
    intro: introMatch ? stripTags(introMatch[1]) : "",
    sections,
    links: uniq([
      ...extractGuideUrls(html),
      ...extractGuideUrls(introMatch?.[1] ?? ""),
      ...sections.flatMap((section) => extractGuideUrls(section.raw)),
    ]),
  };
}

async function fetchText(url) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const res = await fetch(url, {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; UnlokdGuideBackfill/1.0)",
      },
    });
    if (res.ok) {
      await new Promise((resolve) => setTimeout(resolve, 700));
      return await res.text();
    }
    if (res.status !== 429 || attempt === 3) {
      throw new Error(`Fetch failed ${res.status}: ${url}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 2500 * (attempt + 1)));
  }
  throw new Error(`Fetch failed: ${url}`);
}

async function getTopGuideUrls(appId, limit = 6) {
  if (!STEAM_API_KEY) return [];
  const params = new URLSearchParams({
    key: STEAM_API_KEY,
    query_type: "9",
    numperpage: String(limit),
    appid: String(appId),
    filetype: "10",
    return_vote_data: "true",
    return_short_description: "true",
    format: "json",
  });
  const url = `https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const json = await res.json();
  const files = json?.response?.publishedfiledetails ?? [];
  return files
    .map((file) => file?.publishedfileid)
    .filter(Boolean)
    .map((id) => `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`);
}

async function collectCandidateGuides(appId, guideRows, gameName, seedUrls = []) {
  const urls = new Set();

  for (const row of guideRows) {
    if (row.source_url?.includes("steamcommunity.com/sharedfiles/filedetails")) urls.add(row.source_url);
    for (const url of extractGuideUrls(row.content ?? "")) urls.add(url);
  }

  for (const url of await getTopGuideUrls(appId, 6)) urls.add(url);
  for (const url of seedUrls) {
    if (url) urls.add(url);
  }

  const pages = [];
  const seen = new Set();
  const queue = [...urls].slice(0, 12);

  while (queue.length > 0 && pages.length < 12) {
    const url = queue.shift();
    if (!url || seen.has(url)) continue;
    seen.add(url);
    try {
      const html = await fetchText(url);
      const page = parseGuidePage(html, url);
      if (pageSuitability(page, gameName) >= 20) {
        pages.push(page);
      }

      const looksLikeReference =
        /reference/i.test(page.title) ||
        /link to the original/i.test(page.intro) ||
        /exactly the same/i.test(page.intro);

      if (looksLikeReference) {
        for (const linkedUrl of page.links) {
          if (!seen.has(linkedUrl) && queue.length < 20) queue.push(linkedUrl);
        }
      }
    } catch (error) {
      console.error("[guide-fetch]", url, error.message);
    }
  }

  return pages;
}

function scoreSection(section, achievement) {
  const sectionNorm = normalize(`${section.title} ${section.text}`);
  const titleNorm = normalize(achievement.display_name || achievement.api_name);
  const descNorm = normalize(achievement.description || "");
  const tokens = uniq([
    ...tokenize(achievement.api_name || ""),
    ...tokenize(achievement.display_name || ""),
    ...tokenize(achievement.description || ""),
    ...tokenize(achievement.nameKo || ""),
    ...tokenize(achievement.descKo || ""),
  ]);

  let score = 0;
  if (titleNorm && sectionNorm.includes(titleNorm)) score += 80;
  if (descNorm && descNorm.length > 12 && sectionNorm.includes(descNorm)) score += 50;

  for (const token of tokens) {
    if (normalize(section.title).includes(token)) score += 10;
    if (sectionNorm.includes(token)) score += 3;
  }

  if (/missable achievement alert/i.test(section.text)) score += 8;
  if (/you will be rewarded with|rewarded with/i.test(section.text)) score += 5;
  if (/choose |head to |complete |beat |talk to |observe |buy |visit /i.test(section.text)) score += 5;

  return score;
}

function splitSentences(text) {
  return text
    .replace(/\n+/g, "\n")
    .split(/\n|(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function sentenceRelevance(line, achievement) {
  const lineNorm = normalize(line);
  const titleNorm = normalize(achievement.display_name || achievement.api_name);
  const descNorm = normalize(achievement.description || "");
  const tokens = uniq([
    ...tokenize(achievement.api_name || ""),
    ...tokenize(achievement.display_name || ""),
    ...tokenize(achievement.description || ""),
    ...tokenize(achievement.nameKo || ""),
    ...tokenize(achievement.descKo || ""),
  ]);

  let score = 0;
  if (titleNorm && lineNorm.includes(titleNorm)) score += 60;
  if (descNorm && descNorm.length > 12 && lineNorm.includes(descNorm)) score += 40;
  for (const token of tokens) {
    if (lineNorm.includes(token)) score += 8;
  }
  if (/choose |head to |complete |beat |talk to |observe |buy |visit |wait |play |unlock |go to /i.test(line)) {
    score += 5;
  }
  if (/rewarded with|achievement alert|missable/i.test(line)) score += 3;
  return score;
}

function buildGuideContent(achievement, page, section) {
  const sentences = splitSentences(section.text);
  const scoredLines = sentences
    .map((line, index) => ({ line, index, score: sentenceRelevance(line, achievement) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => (b.score - a.score) || (a.index - b.index))
    .slice(0, 6)
    .sort((a, b) => a.index - b.index)
    .map((entry) => entry.line);

  const steps = [];
  steps.push(`Use the route from **${page.title}** → **${section.title}**.`);

  for (const line of scoredLines) {
    const cleaned = line.replace(/^- /, "").trim();
    if (cleaned && !steps.includes(cleaned)) steps.push(cleaned);
    if (steps.length >= 5) break;
  }

  if (steps.length === 1) {
    for (const line of sentences) {
      if (line.length >= 30) steps.push(line);
      if (steps.length >= 4) break;
    }
  }

  const watchFor = sentences.filter((line) =>
    /missable|legend difficulty|premium adventure|point of no return|rewarded with/i.test(line),
  );

  const lines = [
    achievement.description || achievement.display_name,
    "",
    "**Do this next:**",
    ...steps.slice(0, 5).map((step) => `- ${step}`),
  ];

  if (watchFor.length > 0) {
    lines.push("", "**Watch for:**", ...watchFor.slice(0, 3).map((line) => `- ${line}`));
  }

  return lines.join("\n");
}

function isMetaAchievement(achievement) {
  const haystack = normalize(
    [
      achievement.api_name,
      achievement.display_name,
      achievement.description,
      achievement.nameKo,
      achievement.descKo,
    ]
      .filter(Boolean)
      .join(" "),
  );

  return (
    /platinum|unlock every other achievement|all other achievement|master detective|detective of legend|conquista final/.test(
      haystack,
    ) || (
      haystack.includes("모든 다른 업적") ||
      haystack.includes("모든 업적")
    )
  );
}

function buildMetaGuideContent(achievement, page) {
  const lines = [
    achievement.description || achievement.display_name,
    "",
    "**Do this next:**",
    `- Use **${page.title}** as the full completion checklist for this game.`,
    "- Clear every story achievement first so all missables and difficulty requirements are locked in.",
    "- Finish side cases or substories, collection tracks, progression checklists, and all minigame-related trophies from the guide before cleanup.",
    "- Re-check the guide's endgame or 100% section once every other achievement is done to confirm the last unlock conditions.",
    "",
    "**Watch for:**",
    "- Meta achievements usually pop only after every other base-game achievement is registered on the same save/profile.",
  ];

  return lines.join("\n");
}

function parseSidecar(raw) {
  if (!raw || !raw.startsWith("{")) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function translateText(text, target = "ko") {
  const cacheKey = `${target}:${text}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" +
    target +
    "&dt=t&q=" +
    encodeURIComponent(text);
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; UnlokdGuideBackfill/1.0)" },
  });
  if (!res.ok) throw new Error(`Translate failed ${res.status}`);
  const payload = await res.json();
  const translated = (payload?.[0] ?? []).map((part) => part[0] ?? "").join("");
  translationCache.set(cacheKey, translated);
  await new Promise((resolve) => setTimeout(resolve, 250));
  return translated;
}

async function localizeGuideContent(englishContent, achievement, locale) {
  if (locale !== "koreana") return englishContent;

  const lines = englishContent.split("\n");
  const nameKo = achievement.nameKo || achievement.display_name || achievement.api_name;
  const localized = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (index === 0) {
      localized.push(nameKo);
      continue;
    }
    if (!line.trim()) {
      localized.push("");
      continue;
    }

    let nextLine = line
      .replace("**Do this next:**", "**지금 해야 할 일:**")
      .replace("**Watch for:**", "**주의할 점:**")
      .replace("///MISSABLE ACHIEVEMENT ALERT///", "놓치기 쉬운 업적입니다.")
      .replace("Like A Dragon ZERO 100%", "Like A Dragon ZERO 100%");

    if (nextLine.startsWith("- Use the route from ")) {
      nextLine = nextLine.replace(
        /^- Use the route from (.+)$/,
        "- 다음 공략 흐름을 기준으로 진행하세요: $1",
      );
      localized.push(nextLine);
      continue;
    }

    if (
      nextLine.includes("**지금 해야 할 일:**") ||
      nextLine.includes("**주의할 점:**") ||
      nextLine.includes("놓치기 쉬운 업적입니다.")
    ) {
      localized.push(nextLine);
      continue;
    }

    const bulletPrefix = nextLine.startsWith("- ") ? "- " : "";
    const body = bulletPrefix ? nextLine.slice(2) : nextLine;
    const translated = await translateText(body, "ko");
    localized.push(`${bulletPrefix}${translated}`);
  }

  return localized.join("\n");
}

async function resolveTargetUser() {
  const explicitUserId = argValue("--user-id");
  if (explicitUserId) return explicitUserId;

  const explicitSteamId = argValue("--steam-id");
  if (explicitSteamId) {
    const { data } = await supabase.from("users").select("id").eq("steam_id", explicitSteamId).maybeSingle();
    if (data?.id) return data.id;
  }

  const { data } = await supabase.from("users").select("id").limit(1).maybeSingle();
  if (!data?.id) throw new Error("No user found.");
  return data.id;
}

async function main() {
  const userId = await resolveTargetUser();
  const onlyAppId = argValue("--app-id");
  const appIdsArg = argValue("--app-ids");
  const seedUrlsArg = argValue("--seed-urls");
  const minScore = Number(argValue("--min-score") ?? 60);
  const appIdSet = appIdsArg
    ? new Set(appIdsArg.split(",").map((value) => value.trim()).filter(Boolean))
    : null;
  const seedUrls = seedUrlsArg
    ? seedUrlsArg.split(",").map((value) => value.trim()).filter(Boolean)
    : [];

  const { data: userGames, error: userGamesError } = await supabase
    .from("user_games")
    .select("app_id, games(name)")
    .eq("user_id", userId)
    .order("playtime_mins", { ascending: false });
  if (userGamesError) throw new Error(userGamesError.message);

  const scopedGames = (userGames ?? []).filter((row) => {
    if (onlyAppId && String(row.app_id) !== onlyAppId) return false;
    if (appIdSet && !appIdSet.has(String(row.app_id))) return false;
    return true;
  });
  console.log(`[start] user=${userId} apps=${scopedGames.length}`);

  for (const gameRow of scopedGames) {
    const appId = Number(gameRow.app_id);
    const gameName = Array.isArray(gameRow.games) ? gameRow.games[0]?.name : gameRow.games?.name;
    console.log(`\n[app] ${appId} ${gameName ?? ""}`);

    const { data: achievements, error: achievementsError } = await supabase
      .from("achievements")
      .select("id, api_name, display_name, description, category")
      .eq("app_id", appId);
    if (achievementsError) throw new Error(achievementsError.message);
    if (!achievements?.length) {
      console.log("  no achievements");
      continue;
    }

    const achievementIds = achievements.map((item) => item.id);
    const { data: guideRows, error: guideRowsError } = await supabase
      .from("guides")
      .select("id, achievement_id, content, source_url, source_type, locale")
      .in("achievement_id", achievementIds)
      .eq("is_active", true);
    if (guideRowsError) throw new Error(guideRowsError.message);

    const candidatePages = await collectCandidateGuides(appId, guideRows ?? [], gameName ?? "", seedUrls);
    console.log(`  candidate pages=${candidatePages.length}`);
    if (candidatePages.length === 0) continue;

    let updated = 0;

    for (const achievement of achievements) {
      const sidecar = parseSidecar(achievement.category);
      const enrichedAchievement = {
        ...achievement,
        nameKo: sidecar?.nameKo ?? "",
        descKo: sidecar?.descKo ?? "",
      };

      let best = null;
      for (const page of candidatePages) {
        for (const section of page.sections) {
          const score = scoreSection(section, enrichedAchievement);
          if (!best || score > best.score) best = { score, page, section };
        }
      }

      const fallbackPage = candidatePages[0];
      const canUseMetaFallback =
        fallbackPage &&
        isMetaAchievement(enrichedAchievement) &&
        pageSuitability(fallbackPage, gameName ?? "") >= 20;

      if ((!best || best.score < minScore) && !canUseMetaFallback) continue;

      const englishContent = canUseMetaFallback && (!best || best.score < minScore)
        ? buildMetaGuideContent(enrichedAchievement, fallbackPage)
        : buildGuideContent(enrichedAchievement, best.page, best.section);
      const confidence = Number(
        Math.min(
          0.95,
          Math.max(0.65, canUseMetaFallback && (!best || best.score < minScore) ? 0.72 : best.score / 100),
        ).toFixed(2),
      );
      const sourcePage = canUseMetaFallback && (!best || best.score < minScore) ? fallbackPage : best.page;
      const targetGuides = (guideRows ?? []).filter((row) => row.achievement_id === achievement.id);
      if (targetGuides.length === 0) continue;

      for (const targetGuide of targetGuides) {
        const content = await localizeGuideContent(englishContent, enrichedAchievement, targetGuide.locale);
        const { error: updateError } = await supabase
          .from("guides")
          .update({
            content,
            confidence,
            source_url: sourcePage.url,
            updated_at: new Date().toISOString(),
          })
          .eq("id", targetGuide.id);
        if (updateError) {
          console.error("  update failed", achievement.display_name, targetGuide.locale, updateError.message);
        }
      }

      updated += 1;
      if (canUseMetaFallback && (!best || best.score < minScore)) {
        console.log(`  updated ${achievement.display_name} <- ${sourcePage.title} / META FALLBACK`);
      } else {
        console.log(`  updated ${achievement.display_name} <- ${best.page.title} / ${best.section.title} (${best.score})`);
      }
    }

    console.log(`  updated achievements=${updated}/${achievements.length}`);
  }
}

await main();
