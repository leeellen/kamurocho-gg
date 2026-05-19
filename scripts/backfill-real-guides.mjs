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
const GUIDE_LOCALES = ["english", "koreana"];
const CURATED_SEED_URLS = {
  3717330: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"],
  3717340: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"],
  1088710: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"],
  1105500: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402"],
  1105510: ["https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"],
  1388590: ["https://steamcommunity.com/sharedfiles/filedetails/?id=3430885986"],
  2375550: [
    "https://steamcommunity.com/sharedfiles/filedetails/?id=3085063886",
    "https://steamcommunity.com/sharedfiles/filedetails/?id=3549694940",
  ],
};
const MANUAL_GUIDE_OVERRIDES = {
  "1105500:ACHIEVEMENT_38": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293",
    englishContent: [
      "Possess 10,000,000 yen or more.",
      "",
      "**Do this next:**",
      "- Save this for Tanimura, because his casino grind overlaps cleanly with this trophy.",
      "- Clear money-heavy substories first, especially the ones that award expensive items or large cash payouts.",
      "- If you still need more, cash in casino winnings or sell high-value rewards until your carried money goes over 10,000,000 yen at one time.",
      "- The achievement pops from money currently on hand, so do not spend it until the unlock appears.",
      "",
      "**Watch for:**",
      "- Banked value, items in storage, and chips do not count until you convert them into cash you are carrying.",
    ].join("\n"),
    koreanContent: [
      "걸어다니는 은행",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 타니무라 파트에서 정리하는 편이 가장 편합니다. 카지노 관련 진행과 함께 처리할 수 있기 때문입니다.",
      "- 먼저 값비싼 보상 아이템이나 큰 현금 보상이 나오는 서브스토리를 끝내세요.",
      "- 금액이 부족하면 카지노 교환품이나 고가 아이템을 현금으로 바꿔서 소지금이 1,000만 엔을 넘도록 맞추세요.",
      "- 판정은 현재 들고 있는 현금 기준이라, 업적이 뜰 때까지 바로 쓰지 않는 편이 안전합니다.",
      "",
      "**주의할 점:**",
      "- 보관함 아이템, 칩, 환전 전 보상은 소지금으로 인정되지 않습니다.",
    ].join("\n"),
  },
  "1105500:ACHIEVEMENT_40": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293",
    englishContent: [
      "Knock over 100 people you pass by.",
      "",
      "**Do this next:**",
      "- Hold the sprint button and shoulder through dense pedestrian areas in Kamurocho.",
      "- Theater Square, Nakamichi Street, and the Millennium Tower approach are the fastest places to build the count.",
      "- Keep weaving through crowds instead of fighting; every civilian you bowl over adds to the total.",
      "- If it does not pop naturally during cleanup, run repeated loops through the busiest streets in Premium Adventure.",
      "",
      "**Watch for:**",
      "- You need actual pedestrian collisions, not enemy knockdowns from combat.",
    ].join("\n"),
    koreanContent: [
      "카무로 폭주왕",
      "",
      "**지금 해야 할 일:**",
      "- 카무로초의 보행자가 많은 거리에서 질주하면서 시민들과 계속 부딪히세요.",
      "- 시어터 스퀘어, 나카미치 거리, 밀레니엄 타워 주변처럼 사람이 많은 구간이 가장 빠릅니다.",
      "- 전투를 할 필요는 없고, 시민을 들이받아 넘어뜨린 횟수만 누적하면 됩니다.",
      "- 자연스럽게 안 뜨면 프리미엄 어드벤처에서 같은 구간을 몇 바퀴 반복하세요.",
      "",
      "**주의할 점:**",
      "- 전투 중 적을 쓰러뜨리는 건 카운트되지 않습니다. 반드시 길거리 시민과 충돌해야 합니다.",
    ].join("\n"),
  },
  "1105500:ACHIEVEMENT_45": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293",
    englishContent: [
      "Pick up 20 pieces of trash around the city.",
      "",
      "**Do this next:**",
      "- Walk the streets and check for trash pickup prompts while exploring Kamurocho.",
      "- Grab every piece of litter you see during normal story travel instead of using taxis everywhere.",
      "- If you are still short, sweep alleys and side streets in Premium Adventure until the total reaches 20.",
      "- The unlock is cumulative, so you do not need to collect all 20 in one session.",
      "",
      "**Watch for:**",
      "- This is city trash pickup, not item collection from shops or enemies.",
    ].join("\n"),
    koreanContent: [
      "카무로의 에코 마스터",
      "",
      "**지금 해야 할 일:**",
      "- 카무로초를 돌아다니면서 쓰레기를 줍는 상호작용이 보이면 바로 처리하세요.",
      "- 스토리 진행 중 택시만 타지 말고 도보 이동을 섞으면 자연스럽게 개수를 채우기 쉽습니다.",
      "- 부족하면 프리미엄 어드벤처에서 골목과 뒷길을 다시 훑어 총 20개까지 맞추세요.",
      "- 누적형 업적이라 한 번에 다 모을 필요는 없습니다.",
      "",
      "**주의할 점:**",
      "- 상점 아이템이나 적 드롭이 아니라, 거리에서 직접 줍는 쓰레기만 카운트됩니다.",
    ].join("\n"),
  },
  "1105510:ACHIEVEMENT_20": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389",
    englishContent: [
      "Achieve 100% on your Completion List.",
      "",
      "**Do this next:**",
      "- Open the Completion List and clear every category on the same save file until the total reaches 100.00%.",
      "- Treat this as your final cleanup goal after substories, minigames, food, collectibles, training, and side jobs are all done.",
      "- Double-check city-specific tasks and Haruka/Shinada content, because those are the most common places people miss progress.",
      "- If the trophy does not pop instantly at 100%, leave the menu, move areas, or trigger another completion update so the game refreshes the total.",
      "",
      "**Watch for:**",
      "- Completion progress is stricter than just clearing the story or substories; every checklist tab has to be finished.",
    ].join("\n"),
    koreanContent: [
      "전당 입성 플레이어",
      "",
      "**지금 해야 할 일:**",
      "- 같은 세이브 파일에서 컴플리트 리스트 전 항목을 채워 총합 100.00%를 만드세요.",
      "- 이 업적은 사실상 최종 클린업 목표입니다. 서브스토리, 미니게임, 음식, 수집 요소, 수련, 전용 사이드 콘텐츠를 전부 끝낸 뒤 마무리하세요.",
      "- 특히 도시별 체크리스트와 하루카, 시나다 전용 콘텐츠를 빠뜨리기 쉽습니다. 마지막에 다시 훑는 편이 안전합니다.",
      "- 100%를 찍고 바로 안 뜨면 메뉴를 나왔다가 다시 열거나, 다른 완료 항목 하나를 갱신해 판정을 새로 받으세요.",
      "",
      "**주의할 점:**",
      "- 스토리 클리어나 서브스토리 완료만으로는 부족합니다. 컴플리트 리스트의 모든 탭을 채워야 합니다.",
    ].join("\n"),
  },
  "1105510:ACHIEVEMENT_44": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389",
    englishContent: [
      "Use a local PrintCircle frame in all cities.",
      "",
      "**Do this next:**",
      "- Visit every PrintCircle booth and choose the city-specific local frame once, then save the photo.",
      "- Kamurocho has two separate PrintCircle locations, and both count for this achievement.",
      "- The remaining cities each need one successful saved photo with their local-exclusive frame.",
      "- If you are cleaning this up late, go city by city and confirm the saved photo before moving on.",
      "",
      "**Watch for:**",
      "- This is not one frame total. You need every local booth, including both Kamurocho locations.",
    ].join("\n"),
    koreanContent: [
      "현지 프레이머",
      "",
      "**지금 해야 할 일:**",
      "- 각 도시의 프리서클 부스를 찾아 지역 한정 프레임으로 한 번씩 사진을 찍고 저장하세요.",
      "- 카무로초는 프리서클 위치가 두 군데라 두 곳 모두 별도로 처리해야 합니다.",
      "- 나머지 도시도 각 부스에서 지역 전용 프레임으로 저장 사진을 하나씩 남기면 됩니다.",
      "- 클린업 단계라면 도시를 하나씩 돌면서 저장 여부를 확인하고 넘어가세요.",
      "",
      "**주의할 점:**",
      "- 도시당 한 장이 아니라 모든 지역 부스를 처리해야 합니다. 카무로초 2곳을 빼먹기 쉽습니다.",
    ].join("\n"),
  },
  "1105510:ACHIEVEMENT_49": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389",
    englishContent: [
      "Play a routine in Comedy Team.",
      "",
      "**Do this next:**",
      "- Progress Haruka's part until the Comedy Team content opens.",
      "- Start the Aspiring Comedians substory to unlock the first audition and enter the routine properly.",
      "- Finish one Comedy Team performance by answering the prompts with correct timing.",
      "- The achievement pops after you complete a routine, so you do not need to master the whole minigame for this specific unlock.",
      "",
      "**Watch for:**",
      "- This is tied to Haruka's content, not a citywide activity available to every protagonist.",
    ].join("\n"),
    koreanContent: [
      "만담 첫 도전",
      "",
      "**지금 해야 할 일:**",
      "- 하루카 파트를 진행해 코미디 팀 콘텐츠가 열릴 때까지 스토리를 진행하세요.",
      "- 먼저 `지망 개그 콤비` 계열 서브스토리를 시작해 첫 오디션을 해금해야 합니다.",
      "- 이후 코미디 팀 공연에서 한 번이라도 루틴을 끝까지 진행하면 업적이 뜹니다.",
      "- 이 업적 자체는 전체 만담 콘텐츠를 다 끝낼 필요 없이 첫 공연 성공만으로 충분합니다.",
      "",
      "**주의할 점:**",
      "- 하루카 전용 콘텐츠라 다른 주인공 파트에서는 진행할 수 없습니다.",
    ].join("\n"),
  },
  "1388590:OGFAC57": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3430885986",
    englishContent: [
      "Engaged enemies while a drink's effect is active.",
      "",
      "**Do this next:**",
      "- Buy or drink any consumable that grants a temporary effect and wait until the buff icon appears.",
      "- While the effect is still active, immediately start a random street fight.",
      "- The achievement should unlock as soon as the encounter begins under the drink buff.",
      "- If it does not pop, try again with a fresh drink and pick a nearby enemy group so the timer does not expire.",
      "",
      "**Watch for:**",
      "- The effect must still be active when combat starts, not after the fight is already underway.",
    ].join("\n"),
    koreanContent: [
      "Can of Whoop Ass",
      "",
      "**지금 해야 할 일:**",
      "- 일시 버프가 붙는 음료나 소모품을 사용하고, 화면에 효과 아이콘이 뜬 것을 확인하세요.",
      "- 효과가 남아 있는 상태에서 바로 근처 잡몹과 전투를 시작하세요.",
      "- 버프가 켜진 상태로 전투에 진입하면 바로 업적이 뜹니다.",
      "- 안 뜨면 새 음료를 마시고, 멀리 이동하지 말고 가장 가까운 적에게 바로 부딪히세요.",
      "",
      "**주의할 점:**",
      "- 효과가 켜진 뒤 전투가 시작되어야 합니다. 전투 도중 버프를 쓰는 건 판정이 불안정할 수 있습니다.",
    ].join("\n"),
  },
};

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

function pagePreferenceScore(page, gameName) {
  const title = page.title ?? "";
  let score = 0;

  if (gameName && title.toLowerCase().includes(gameName.toLowerCase())) score += 30;
  if (/100%\s+achievement\s+guide/i.test(title)) score += 35;
  if (/achievement\s+guide|walkthrough|guide/i.test(title)) score += 18;
  if (/side activities tips/i.test(title)) score -= 10;
  if (/[А-Яа-яЁёІіЇїЄєҐґ]/.test(title)) score -= 35;
  if (/[一-龯ぁ-ゖァ-ヺ]/.test(title)) score -= 10;

  return score;
}

function preferPrimaryGuidePages(pages, gameName) {
  const hasStrongEnglishPage = pages.some((page) =>
    !/[А-Яа-яЁёІіЇїЄєҐґ]/.test(page.title ?? "") &&
    pageSuitability(page, gameName) >= 20 &&
    /100%\s+achievement\s+guide|achievement\s+guide/i.test(page.title ?? ""),
  );

  if (!hasStrongEnglishPage) return pages;

  return pages.filter((page) => {
    const title = page.title ?? "";
    if (/[А-Яа-яЁёІіЇїЄєҐґ]/.test(title)) return false;
    return /guide|tips|walkthrough/i.test(title) || pageSuitability(page, gameName) >= 20;
  });
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
        "user-agent": "Mozilla/5.0 (compatible; KamurochoGuideBackfill/1.0)",
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
    headers: { "user-agent": "Mozilla/5.0 (compatible; KamurochoGuideBackfill/1.0)" },
  });
  if (!res.ok) throw new Error(`Translate failed ${res.status}`);
  const payload = await res.json();
  const translated = (payload?.[0] ?? []).map((part) => part[0] ?? "").join("");
  translationCache.set(cacheKey, translated);
  await new Promise((resolve) => setTimeout(resolve, 250));
  return translated;
}

function isGenericKoreanAchievementName(nameKo, displayName, gameName) {
  const value = (nameKo ?? "").trim();
  if (!value) return true;
  if (/[A-Za-z]{4,}/.test(value)) return true;
  if (gameName && normalize(value) === normalize(gameName)) return true;
  if (
    displayName &&
    /^(프롤로그|에필로그|최종장|제\s*\d+\s*장|챕터\s*\d+).*(클리어|완료)$/.test(value) &&
    /[A-Za-z]/.test(displayName)
  ) {
    return true;
  }
  return false;
}

async function preferredKoreanAchievementName(achievement) {
  if (!isGenericKoreanAchievementName(achievement.nameKo, achievement.display_name, achievement.gameName)) {
    return achievement.nameKo;
  }
  if (achievement.display_name) {
    return await translateText(achievement.display_name, "ko");
  }
  return achievement.api_name;
}

async function localizeGuideContent(englishContent, achievement, locale) {
  if (locale === "english") return englishContent;
  if (locale === "koreana" && achievement.manualKoContent) return achievement.manualKoContent;

  const lines = englishContent.split("\n");
  const targetLang = "ko";
  const targetName = await preferredKoreanAchievementName(achievement);
  const localized = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (index === 0) {
      localized.push(targetName);
      continue;
    }
    if (!line.trim()) {
      localized.push("");
      continue;
    }

    let nextLine = line;

    nextLine = nextLine
      .replace("**Do this next:**", "**지금 해야 할 일:**")
      .replace("**Watch for:**", "**주의할 점:**")
      .replace("///MISSABLE ACHIEVEMENT ALERT///", "놓치기 쉬운 업적입니다.");

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
    const translated = await translateText(body, targetLang);
    localized.push(`${bulletPrefix}${translated}`);
  }

  return localized.join("\n");
}

function manualOverrideFor(appId, apiName) {
  return MANUAL_GUIDE_OVERRIDES[`${appId}:${apiName}`] ?? null;
}

async function main() {
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

  let gameQuery = supabase.from("games").select("app_id,name").order("app_id", { ascending: true });
  if (onlyAppId) {
    gameQuery = gameQuery.eq("app_id", Number(onlyAppId));
  } else if (appIdSet) {
    gameQuery = gameQuery.in("app_id", [...appIdSet].map((value) => Number(value)));
  }
  const { data: scopedGames, error: gamesError } = await gameQuery;
  if (gamesError) throw new Error(gamesError.message);
  console.log(`[start] apps=${scopedGames?.length ?? 0}`);

  for (const gameRow of scopedGames ?? []) {
    const appId = Number(gameRow.app_id);
    const gameName = gameRow.name;
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
      .select("id, achievement_id, content, source_url, locale")
      .in("achievement_id", achievementIds)
      .eq("is_active", true);
    if (guideRowsError) throw new Error(guideRowsError.message);

    const extraSeeds = CURATED_SEED_URLS[appId] ?? [];
    const candidatePages = await collectCandidateGuides(appId, guideRows ?? [], gameName ?? "", [...extraSeeds, ...seedUrls]);
    const preferredPages = extraSeeds.length > 0
      ? candidatePages.filter((page) => extraSeeds.includes(page.url))
      : preferPrimaryGuidePages(candidatePages, gameName ?? "");
    console.log(`  candidate pages=${candidatePages.length} preferred=${preferredPages.length}`);
    if (preferredPages.length === 0) continue;

    let updated = 0;

    for (const achievement of achievements) {
      const sidecar = parseSidecar(achievement.category);
      const manualOverride = manualOverrideFor(appId, achievement.api_name);
      const enrichedAchievement = {
        ...achievement,
        nameKo: sidecar?.nameKo ?? "",
        descKo: sidecar?.descKo ?? "",
        manualKoContent: manualOverride?.koreanContent ?? null,
        gameName,
      };

      let best = null;
      if (!manualOverride) {
        for (const page of preferredPages) {
          const pageBonus = pagePreferenceScore(page, gameName ?? "");
          for (const section of page.sections) {
            const score = scoreSection(section, enrichedAchievement) + pageBonus;
            if (!best || score > best.score) best = { score, page, section };
          }
        }
      }

      const fallbackPage = preferredPages[0];
      const canUseMetaFallback =
        fallbackPage &&
        isMetaAchievement(enrichedAchievement) &&
        pageSuitability(fallbackPage, gameName ?? "") >= 20;

      if (!manualOverride && (!best || best.score < minScore) && !canUseMetaFallback) continue;

      const englishContent = manualOverride
        ? manualOverride.englishContent
        : canUseMetaFallback && (!best || best.score < minScore)
          ? buildMetaGuideContent(enrichedAchievement, fallbackPage)
          : buildGuideContent(enrichedAchievement, best.page, best.section);
      const confidence = Number(
        Math.min(
          0.95,
          Math.max(
            0.65,
            manualOverride
              ? 0.84
              : canUseMetaFallback && (!best || best.score < minScore)
                ? 0.72
                : best.score / 100,
          ),
        ).toFixed(2),
      );
      const sourcePage = manualOverride
        ? { url: manualOverride.sourceUrl, title: "Manual override" }
        : canUseMetaFallback && (!best || best.score < minScore)
          ? fallbackPage
          : best.page;
      const targetGuides = (guideRows ?? []).filter((row) => row.achievement_id === achievement.id);
      const existingByLocale = new Map(
        targetGuides
          .filter((row) => row.locale)
          .map((row) => [row.locale, row]),
      );

      for (const locale of GUIDE_LOCALES) {
        const content = await localizeGuideContent(englishContent, enrichedAchievement, locale);
        const existing = existingByLocale.get(locale);

        if (existing?.id) {
          const { error: updateError } = await supabase
            .from("guides")
            .update({
              content,
              confidence,
              source_url: sourcePage.url,
              updated_at: new Date().toISOString(),
            })
            .eq("id", existing.id);
          if (updateError) {
            console.error("  update failed", achievement.display_name, locale, updateError.message);
          }
          continue;
        }

        const { error: insertError } = await supabase
          .from("guides")
          .insert({
            achievement_id: achievement.id,
            locale,
            content,
            confidence,
            source_type: "ai",
            source_url: sourcePage.url,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
        if (insertError) {
          console.error("  insert failed", achievement.display_name, locale, insertError.message);
        }
      }

      updated += 1;
      if (manualOverride) {
        console.log(`  updated ${achievement.display_name} <- MANUAL OVERRIDE`);
      } else if (canUseMetaFallback && (!best || best.score < minScore)) {
        console.log(`  updated ${achievement.display_name} <- ${sourcePage.title} / META FALLBACK`);
      } else {
        console.log(`  updated ${achievement.display_name} <- ${best.page.title} / ${best.section.title} (${best.score})`);
      }
    }

    console.log(`  updated achievements=${updated}/${achievements.length}`);
  }
}

await main();
