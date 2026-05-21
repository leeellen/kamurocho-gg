#!/usr/bin/env node
/**
 * Scrape Yakuza 0 substories from kamigame (index) + warukuma (KO guides) + wiki (fallback).
 * Usage: node scripts/substories/scrape-yakuza0.mjs [--out src/lib/substories/yakuza-0.ts]
 */
import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { cleanKoField, hasJapanese, translateJpToKo } from "./ko-sanitize.mjs";
import { renderSubstoriesFile } from "./render-ts.mjs";
import { fetchText, stripHtml } from "./utils.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT =
  process.argv.includes("--out")
    ? process.argv[process.argv.indexOf("--out") + 1]
    : join(__dirname, "../../src/lib/substories/yakuza-0.ts");

const KAMIGAME_INDEX = "https://kamigame.jp/ryugagotoku0/page/273134300881279258.html";
const WIKI_PAGES = Array.from({ length: 10 }, (_, i) =>
  `https://dswiipspwikips3.jp/yakuza0/substory${String(i + 1).padStart(2, "0")}.html`,
);

/** English titles from Yakuza Wiki (in-game list order by number). */
const EN_TITLES = {
  1: "The Visionary Fortune-teller",
  2: "Arakure Quest",
  3: "Passport to Pizza",
  4: "Kamurocho Undercover",
  5: "The Human Trafficking Ring",
  6: "Damned Yanki",
  7: "How to Train Your Dominatrix",
  8: "Password Protected",
  9: "The Show Must Go On",
  10: "Sugar Daddy",
  11: "The Shrink-wrapped Dream",
  12: "Miracle on Tenkaichi Street",
  13: "The Tax Lady",
  14: "Destiny Calls",
  15: "Help Wanted!",
  16: "Help Wanted! Again...",
  17: "Underneath It All",
  18: "Beyond the Door",
  19: "Heir to the Family",
  20: "A Shining Example",
  21: "First Impressions",
  22: "A Watery Investment",
  23: "Miracle in Maharaja",
  24: "The Girl in the Video",
  25: "Postcard Rookie - Kiryu",
  26: "Postcard Pro - Kiryu",
  27: "Postcard Master - Kiryu",
  28: "Don't Dance Alone",
  29: "Technique to Die For",
  30: "Maharaja Showdown",
  31: "The Innocent Hook-up",
  32: "The Sexy Hook-up",
  33: "The Flirty Hook-up",
  34: "Sakura Shock",
  35: "Verbal Warning",
  36: "I Am Kazuma-kun",
  37: "The Rocky Road of Romance",
  38: "Gift of Love",
  39: "Suspicion of Perversion",
  40: "The Prodigious Racer",
  41: "The Woman They Call Professor",
  42: "The Greatest Glory",
  43: "The Fighter's Crown",
  44: "The Predator's Call",
  45: "A Mother's Touch",
  46: "The Stop-and-Search Specialist",
  47: "The Mushroom Merchant",
  48: "Kamurocho's Mr. Libido",
  49: "Kamurocho's Mr. Moneybags",
  50: "Pocket Circuit Fighter!",
  51: "Miho, Convenience Store Clerk",
  52: "Emiri, Mach Bowl Receptionist",
  53: "Sushi Gin's Chef",
  54: "Luka at SEGA HI-TECH LAND",
  55: "Calling the Future",
  56: "A Taxing Issue",
  57: "Crossed Words",
  58: "Stadium Jumper Strut",
  59: "Postcard Rookie - Majima",
  60: "Postcard Pro - Majima",
  61: "Postcard Master - Majima",
  62: "The 10 Million Drug Test",
  63: "Errands on the Run",
  64: "Toilet Talk",
  65: "The Obatarian Strikes",
  66: "Party at Maharaja",
  67: "Disco Transformation",
  68: "Disco Dancing Goddess",
  69: "Paternal Instincts",
  70: "A Moment Shared",
  71: "Of Love and Ramen",
  72: "The First Friend",
  73: "A Little Brotherly Love",
  74: "Dream Chaser",
  75: "Mystery Caller",
  76: "Sotenbori's Mr. Moneybags",
  77: "Sotenbori's Mr. Libido",
  78: "The Doll Girl",
  79: "Komian's Chef",
  80: "STIJL's Barkeep",
  81: "Gandhara's Clerk",
  82: "Kyoko at SEGA HI-TECH LAND",
  89: "Bacchus's Training",
  90: "Kamoji's Training",
  91: "Miss Tatsu's Training",
  92: "Apex Predator",
  93: "A Dream Unfulfilled",
  94: "The Head of the Clan",
  95: "Sparring with Komeki",
  96: "Fei Hu's Training",
  97: "Areshi's Training",
  98: "Play-Money Shakedown",
  99: "The Ultimate Plan",
  100: "Sotenbori in Peril",
};

/** Majima-only numbers (duplicate IDs with Kiryu). */
const MAJIMA_NUMBERS = new Set([
  49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72,
  73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 95, 96, 97, 98, 99, 100,
]);

/** JP index title → KO display title when warukuma did not match. */
const KO_TITLE_BY_JA = {
  "せめてヤンキーらしく": "최소한 양키답게",
  "合言葉は……": "합의어는……",
  "桐生はプロデューサー？": "키류는 프로듀서?",
  "テレフォン誘拐クラブ": "전화 협박 클럽",
  "男の背中": "남자의 등",
  "ハートのネックレス": "하트 목걸이",
  "龍と呼ばれそうな男": "용이라 불릴 남자",
  "彼氏になってください": "제 남자친구가 되어 주세요",
  "顔を変えられた男": "얼굴을 바꾼 남자",
  "インチキ宗教の罠": "사이비 종교의 함정",
  "蒼天堀の危機": "소텐보리의 위기",
  "未来が見える占い師": "미래를 보는 점술가",
  "SM講座": "SM 강좌",
  "ビニールに包まれた夢": "비닐에 싸인 꿈",
  "神室町ゾンビウォーカー": "카무로초 좀비 워커",
  "マルサにご用心": "마루사를 조심해",
  "人材求む！": "인재 구합니다!",
  "二次募集": "2차 모집",
  "彼女の秘密": "그녀의 비밀",
  "扉の向こうに": "문 너머에",
  "若様のおねだり": "젊은 도련님의 조르기",
  "表と裏": "겉과 속",
  "袋の鼠": "독 안에 든 쥐",
  "ミラクルinマハラジャ": "미라클 in 마하라자",
  "ビデオ・ガール": "비디오 걸",
  "気になる存在、ポケサーファイター！": "포켓 서킷 파이터!",
  "大道芸人": "거리의 예인",
  "コンビニ店員・未帆": "편의점 점원 미호",
  "マッハボウル店員・エミリ": "볼링장 점원 에미리",
  "寿司吟の板前": "스시긴의 주방장",
  "ゲーセン店員・るか": "오락실 점원 루카",
  "一族の長": "일족의 장",
  "龍が如くと呼ばれそうな男": "용이라 불릴 남자",
};

/** Hand-written KO when warukuma/wiki merge still leaves Japanese. */
const MANUAL_KO = {
  6: {
    trigger: "제2장에서 키류 아파트로 돌아갈 때",
    body: "극장 북서쪽에서 칠복 거리 서쪽으로 가다 「험한 얼굴의 남자」와 부딪히면 시작. 【맵2】에서 양아치 컷신 후, 기둥 뒤에서 엿보는 남자에게 말을 건다. 인사 선택 3회 — ② 야도요로시구, ① 싸움 이야기, ③ 침묵 순이 정답. 라이브 후 보상은 선택 조합에 따라 달라진다.",
    reward: "정답 루트: 와일드 셔츠 / 오답 루트: 카리스마 사진, 흉 고용 가능",
  },
  7: {
    trigger: "서브스토리 6 완료 후",
    body: "가라오케 스낵 히로인 앞에서 마조 남성이 여왕에게 무릎 꿇고 있는 장면으로 시작. 여왕 아유와 대화 후 거리 양아치 2명을 쓰러뜨린다. 말 때리기 3라운드 — ②③① 순으로 고르는 것이 정답. 오답 루트도 클리어는 되지만 보상이 다르다.",
    reward: "정답: 수모의 복대 / 오답: 숨겨진 강철 폴·터프니스 Z, 이미지 비디오·마조 아저씨 고용",
  },
  8: {
    trigger: "제2장에서 키류 아파트로 돌아갈 때",
    body: "【맵1】 상점가 안쪽 남자 2명에게 접근 → 수상한 점주와 대화. 【맵2】 사연이 있는 남자에게 합의어를 듣고, 【맵3】 몬몬에게 말 건 뒤 선택지(어느 쪽이든 마피아 4명 전투). 합의어를 리론에게 전달하면 무기 BROKEN M1985, 틀리면 리론과 전투. 점주에게 문자 입력 합의어 「스보떼누히게우키로코세미테무」로 완료.",
    reward: "무기 BROKEN M1985, 수상한 점주 상점 이용, 리론 고용",
  },
  9: {
    trigger: "제2장에서 키류 아파트로 돌아갈 때",
    body: "【맵1】을 지나가면 촬영 스태프가 키류에게 로케이 협조를 요청. 인사·소품·요리 관련 선택지 3단계 — ①③② 조합이 좋은 보상(자기력 목걸리). 촬영 후 프로듀서 이이다 이벤트와 양아치 3명 전투.",
    reward: "정답 조합: 자기력 목걸리 / 오답: 타우리너+",
  },
  10: {
    trigger: "제6장 시작 시",
    body: "호텔 거리를 걷다 전봇대 뒤에서 걱정하는 남자 이벤트. 딸이 맞는지 확인해 달라는 부탁 후 가게 안에서 레이카와 대화 선택지 진행. 선택지는 보상 차이가 거의 없으며 끝까지 보면 완료.",
    reward: "현금 1만 엔",
  },
  14: {
    trigger: "제10장 후반, 아시아 거리 진 마을에 갈 때",
    body: "【맵1】 핑크 거리 북쪽 젊은 텔클럽 점원에게 말을 건다. 「이상한 전화 상대」를 선택해 통화 진행(선택지는 보상 무관). 이후 서공원 【맵2】에서 수상한 남자를 쓰러뜨린다.",
    reward: "극한 나이프",
  },
  20: {
    trigger: "제10장 후반, 진 마을 방문 시",
    body: "【맵1】 양키풍 여성에게 말을 걸고 「도와주러 간다」 선택. 친구가 습격당하는 곳으로 이동해 철파이프 남자(용1 탄지 신지)를 쓰러뜨린다. 서공원에서 야쿠자 3명→사무소에서 6명 연속 전투.",
    reward: "경험치·완료 카운트",
  },
  94: {
    trigger: "최종장, 최종 결전 전 카무로초에서 (키류 서브 94 제외 전부 완료)",
    body: "키류 편 서브스토리를 94번을 제외하고 모두 마친 뒤, 최종 결전 전 카무로초에서 발생. 일족의 장과의 대결. 승리하면 완료.",
    reward: "고급 보상·완료",
  },
  100: {
    trigger: "최종장, 최종 결전 전 소텐보리 (마지마 서브 100 제외 전부 완료)",
    body: "마지마 편 서브를 100번 제외하고 전부 클리어한 뒤, 최종 결전 전 소텐보리에서 포켓벨 이상 신호로 시작. 아몬 신과의 결전. 승리 시 완료.",
    reward: "아몬의 선글라스",
  },
  "50-pocket": {
    title: "포켓 서킷 파이터!",
    chapter: "제 2장",
    trigger: "제2장에서 키류 아파트로 돌아갈 때 · 포켓 서킷 스타디움",
    body: "포켓 서킷 스타디움에서 「포켓 파이터」에게 말을 걸면 튜토리얼 레이스가 열린다. 설명을 따라 첫 레이스를 이기면 완료. 부스트와 기합 게이지, 코스 이탈에 주의.",
    reward: "골렘 타이거·스타터 파츠, 포켓 서킷 스타디움",
  },
  "50-entertainer": {
    title: "거리의 예인",
    trigger: "제3장에서 마지마 아파트로 돌아갈 때",
    body: "이와오바시 동상을 본따는 예술가를 조사하면 시작. 동상에서 멀어졌다가 다시 접근하면 이벤트 진행. 화장실 못 가는 토코키치 돕기. 선택지 3→3→3이 정답. 거리 양아치 전투 후 【맵2】 피자 가게 앞 토코키치에게 말 걸면 완료.",
    reward: "스테미난 로열(정답) / 스테미난 X(오답)",
  },
  "53-face": {
    title: "얼굴을 바꾼 남자",
    trigger: "제3장에서 키류 아파트로 돌아갈 때",
    body: "아지와바 공원에서 「졸린 남자」에게 말을 걸면 시작. 아이에게 공을 돌려준 뒤 다시 대화. 아카타니의 사정을 듣고 이동. 【맵3】 유스케 근처 이벤트 후 거리 양아치 4명 전투. 총을 든 적을 먼저 처리하는 것이 안전.",
    reward: "무기 「벚꽃 소용돌이」",
  },
};

const WARUKUMA_POSTS = [
  "https://warukuma.tistory.com/35",
  "https://warukuma.tistory.com/37",
  "https://warukuma.tistory.com/41",
  "https://warukuma.tistory.com/42",
  "https://warukuma.tistory.com/43",
  "https://warukuma.tistory.com/44",
  "https://warukuma.tistory.com/59",
  "https://warukuma.tistory.com/45",
  "https://warukuma.tistory.com/53",
  "https://warukuma.tistory.com/54",
  "https://warukuma.tistory.com/55",
  "https://warukuma.tistory.com/58",
  "https://warukuma.tistory.com/56",
  "https://warukuma.tistory.com/52",
  "https://warukuma.tistory.com/57",
  "https://warukuma.tistory.com/51",
  "https://warukuma.tistory.com/50",
  "https://warukuma.tistory.com/49",
  "https://warukuma.tistory.com/46",
  "https://warukuma.tistory.com/47",
  "https://warukuma.tistory.com/60",
  "https://warukuma.tistory.com/61",
];

function parseKamigameIndex(html) {
  const rows = [];
  const re =
    /<tr>\s*<td[^>]*>(\d+)<\/td>\s*<td><a href="([^"]+)">([^<]+)<\/a><\/td>\s*<td>([\s\S]*?)<\/td>\s*<\/tr>/gi;
  for (const m of html.matchAll(re)) {
    const meta = stripHtml(m[4]);
    const [triggerPart, rewardPart] = meta.split(/報酬|보상/).length > 1
      ? [meta.split(/報酬/)[0], meta.split(/報酬/)[1]]
      : [meta, ""];
    rows.push({
      number: +m[1],
      detailUrl: m[2].startsWith("http") ? m[2] : `https://kamigame.jp${m[2]}`,
      titleJa: m[3].trim(),
      meta,
      triggerJa: stripHtml(triggerPart).replace(/^発生条件\s*/, "").trim(),
      rewardJa: stripHtml(rewardPart || "").trim(),
    });
  }
  return rows;
}

function parseChapter(text) {
  const ko =
    text.match(/제\s*(\d+)\s*장/)?.[0] ??
    text.match(/(\d+)부\s*챕터\s*(\d+)/)?.[0] ??
    text.match(/최종장/)?.[0] ??
    text.match(/第(\d+)章/)?.[0]?.replace(/第(\d+)章/, "챕터 $1") ??
    null;
  let en = null;
  if (ko?.includes("최종")) en = "Final Chapter";
  else if (ko) {
    const m = ko.match(/제\s*(\d+)\s*장/);
    en = m ? `Chapter ${m[1]}` : ko.replace(/제/g, "Chapter ").replace(/장/g, "").trim();
  }
  return ko ? { ko, en: en ?? ko } : null;
}

function manualKeyForSeed(raw) {
  if (raw.number === 50 && /ポケサ|ポケット/i.test(raw.titleJa)) return "50-pocket";
  if (raw.number === 50 && /大道|芸人/i.test(raw.titleJa)) return "50-entertainer";
  if (raw.number === 53 && /顔を|변え/i.test(raw.titleJa)) return "53-face";
  return null;
}

function protagonistFor(number, titleJa, titleKo, titleEn) {
  const blob = `${titleJa} ${titleKo} ${titleEn}`;
  if (/ポケサ|ポケット|Pocket Circuit|파이터！/i.test(blob) && !/大道|芸人|Entertainer/i.test(blob))
    return { ko: "키류", en: "Kiryu" };
  if (/大道|芸人|Entertainer|예인/i.test(blob)) return { ko: "마지마", en: "Majima" };
  if (/하트|목걸이|From the Heart/i.test(blob)) return { ko: "마지마", en: "Majima" };
  if (/포켓|서킷|Pocket Circuit/i.test(blob)) return { ko: "키류", en: "Kiryu" };
  if (/금|머니|부자|Moneybags/i.test(titleKo + titleEn)) return { ko: "키류", en: "Kiryu" };
  if (/편의점|마하|스시|오락|Miho|Emiri|Sushi|Luka|SEGA/i.test(titleEn)) {
    return number >= 51 && number <= 54 ? { ko: "키류", en: "Kiryu" } : { ko: "마지마", en: "Majima" };
  }
  if (MAJIMA_NUMBERS.has(number)) {
    if (number === 100) return { ko: "키류", en: "Kiryu" };
    if (number <= 54 && number >= 49) {
      // 49–54: Kiryu bond stories vs Majima — bond/clerk = Kiryu for 51–54
      if (number >= 51 && number <= 54) return { ko: "키류", en: "Kiryu" };
      return { ko: "마지마", en: "Majima" };
    }
    return { ko: "마지마", en: "Majima" };
  }
  return { ko: "키류", en: "Kiryu" };
}

function parseWarukumaPost(html) {
  const region = html.includes("contents_style") ? html.slice(html.indexOf("contents_style")) : html;
  const first = region.match(/No\.(\d+)(?:&nbsp;|\s)/);
  if (!first) return [];
  const start = region.indexOf(first[0]);
  const chunk = region.slice(start);
  const text = stripHtml(chunk);
  let parts = text.split(/｜\s*(?=No\.?\s*\d)/).filter((p) => /No\.?\s*\d/.test(p));
  if (parts.length === 0 && /No\.?\s*\d/.test(text)) parts = [text];
  const out = [];
  for (const part of parts) {
    const head = part.match(/No\.?\s*(\d+)\s+([\s\S]+?)(?=\n\s*발생시기|\n\s*발생|\n\s*보상|$)/);
    if (!head) continue;
    const number = +head[1];
    const titleKo = head[2].replace(/\s+/g, " ").trim();
    const triggerMatch = part.match(/발생시기\s*\n?([\s\S]*?)(?=\n\s*보상|\n\s*공략|$)/);
    const rewardMatch = part.match(/보상\s*\n?[·]?\s*([\s\S]*?)(?=\n\s*공략|$)/);
    const bodyMatch = part.match(/공략\s*내용\s*\n?([\s\S]*)/);
    const triggerKo = triggerMatch?.[1]?.replace(/\s+/g, " ").trim() ?? "";
    const rewardKo = rewardMatch?.[1]?.replace(/\s+/g, " ").trim() ?? "";
    let bodyKo = bodyMatch?.[1]?.replace(/\s+/g, " ").trim() ?? "";
    bodyKo = bodyKo.split(/｜\s*No\./)[0].trim();
    if (bodyKo.length > 1400) bodyKo = `${bodyKo.slice(0, 1397)}…`;
    out.push({
      number,
      titleKo: cleanKoField(titleKo, { allowTranslate: false }),
      triggerKo: cleanKoField(triggerKo),
      rewardKo: cleanKoField(rewardKo),
      bodyKo: cleanKoField(bodyKo),
      chapter: parseChapter(triggerKo),
    });
  }
  return out;
}

function parseWikiPage(html) {
  const sections = [];
  const re = /<h2><a id="(\d+[mk]?)">No\.(\d+)[^<]*<\/a><\/h2>([\s\S]*?)(?=<h2>|$)/gi;
  for (const m of html.matchAll(re)) {
    const number = +m[2];
    const block = m[3];
    const when = stripHtml(block.match(/<th>発生時期<\/th>\s*<td>([\s\S]*?)<\/td>/)?.[1] ?? "");
    const reward = stripHtml(block.match(/<th>報酬<\/th>\s*<td>([\s\S]*?)<\/td>/)?.[1] ?? "");
    const guide = stripHtml(block.match(/<dt>攻略内容<\/dt>\s*<dd>([\s\S]*?)<\/dd>/)?.[1] ?? "");
    const titleJa = m[0].match(/『([^』]+)』/)?.[1] ?? "";
    sections.push({ number, titleJa, when, reward, guide: guide.slice(0, 1200) });
  }
  return sections;
}

function splitSteps(bodyKo, bodyEn) {
  const chunks = bodyKo.split(/(?=\d+[\).．]\s*|【맵\s*\d+】|①|②|③|④|⑤)/).map((s) => s.trim()).filter(Boolean);
  if (chunks.length <= 1) return null;
  const enChunks = bodyEn.split(/(?=\d+[\).．]\s*|Map\s*\d+|①|②|③|④|⑤)/).map((s) => s.trim()).filter(Boolean);
  return chunks.slice(0, 8).map((ko, i) => ({
    body: { ko, en: enChunks[i] ?? ko },
  }));
}

async function main() {
  console.log("Fetching kamigame index…");
  const indexHtml = await fetchText(KAMIGAME_INDEX);
  const indexRows = parseKamigameIndex(indexHtml);
  console.log(`  ${indexRows.length} index rows`);

  /** @type {Map<string, object>} */
  const seeds = new Map();

  for (const row of indexRows) {
    if (row.number >= 83 && row.number <= 88) continue;
    seeds.set(`${row.number}:${row.titleJa}`, {
      number: row.number,
      titleJa: row.titleJa,
      detailUrl: row.detailUrl,
      indexMeta: row.meta,
    });
  }

  function findSeed(number, titleHint = "") {
    const candidates = [...seeds.values()].filter((s) => s.number === number);
    if (candidates.length === 1) return candidates[0];
    const majimaHint = /하트|목걸이|마지마|소텐|오사카|편의점|스시|가라오케|가디언|신미|스타일/i.test(titleHint);
    const kiryuHint = /키류|카무로|편의|볼링|포켓|금|머니/i.test(titleHint);
    if (majimaHint)
      return candidates.find((s) => /ハート|真島|蒼天|ネックレス|龍と|彼氏|顔を|インチキ|ショルダー|税金|クロス|憧れ|ハガキ|1000万|パッシー|落書き|オバタリアン|今夜|おじさん|伝説|親心|君と|初恋|はじめて|ボク|夢への|謎の|ガンダーラ|ゲーセン|神味|ステイル|ミステリー|蒼天堀/i.test(s.titleJa)) ?? candidates[1];
    if (kiryuHint)
      return candidates.find((s) => /桐生|神室|コンビニ|マッハ|寿司|ポケサー|金持ち|絶倫|警官|きのこ|生物|米木|フェイフウ|アレシ|遊ぶ|究極|危機/i.test(s.titleJa)) ?? candidates[0];
    if (!titleHint) return candidates[0];
    const hint = titleHint.replace(/\s/g, "").slice(0, 4);
    return (
      candidates.find((s) => KO_TITLE_BY_JA[s.titleJa]?.replace(/\s/g, "").includes(hint)) ??
      candidates.find((s) => s.titleJa.replace(/\s/g, "").includes(hint)) ??
      candidates[0]
    );
  }

  console.log("Fetching warukuma KO guides…");
  for (const url of WARUKUMA_POSTS) {
    try {
      const html = await fetchText(url, { delayMs: 600 });
      const parsed = parseWarukumaPost(html);
      console.log(`  ${url} → ${parsed.length} substories`);
      for (const p of parsed) {
        const candidates = [...seeds.values()].filter((s) => s.number === p.number);
        let seed =
          candidates.find((s) => {
            const mapped = KO_TITLE_BY_JA[s.titleJa];
            if (!mapped) return false;
            const a = p.titleKo.replace(/\s/g, "");
            const b = mapped.replace(/\s/g, "");
            return a.includes(b.slice(0, 6)) || b.includes(a.slice(0, 6));
          }) ?? findSeed(p.number, p.titleKo);
        if (seed) seed.warukuma = p;
      }
    } catch (e) {
      console.warn(`  WARN ${url}: ${e.message}`);
    }
  }

  console.log("Fetching wiki fallback (JP)…");
  for (const url of WIKI_PAGES) {
    try {
      const html = await fetchText(url, { delayMs: 500 });
      for (const s of parseWikiPage(html)) {
        const seed = findSeed(s.number, s.titleJa);
        if (seed && !seed.wiki) seed.wiki = s;
      }
    } catch (e) {
      console.warn(`  WARN ${url}: ${e.message}`);
    }
  }

  const items = [];

  for (const raw of seeds.values()) {
    const num = raw.number;
    const w = raw.warukuma;
    const wiki = raw.wiki;
    const mKey = manualKeyForSeed(raw);
    const manual = (mKey && MANUAL_KO[mKey]) || MANUAL_KO[num];
    const titleKo = cleanKoField(
      manual?.title ??
        w?.titleKo ??
        KO_TITLE_BY_JA[raw.titleJa] ??
        translateJpToKo(raw.titleJa) ??
        EN_TITLES[num] ??
        `서브스토리 ${num}`,
      { allowTranslate: false },
    );
    let titleEn = EN_TITLES[num] ?? raw.titleJa ?? titleKo;
    if (num === 49 && /ハート|하트|목걸이/i.test(raw.titleJa + titleKo)) titleEn = "From the Heart";
    if (mKey === "50-pocket") titleEn = "Pocket Circuit Fighter!";
    if (mKey === "50-entertainer") titleEn = "The Entertainer's Throne";
    if (mKey === "53-face") titleEn = "The Man Who Changed His Face";
    const triggerKo = cleanKoField(
      manual?.trigger ||
        w?.triggerKo ||
        translateJpToKo(wiki?.when) ||
        translateJpToKo(raw.triggerJa) ||
        "메인 스토리 진행 중 거리에서 ? 아이콘을 확인",
    );
    const triggerEn = triggerKo
      .replace(/제\s*(\d+)\s*장/g, "Chapter $1")
      .replace(/최종장/g, "Final Chapter")
      .replace(/키류/g, "Kiryu")
      .replace(/마지마/g, "Majima");
    const rewardKo = cleanKoField(
      manual?.reward || w?.rewardKo || translateJpToKo(wiki?.reward) || "",
    );
    const rewardEn = wiki?.reward || rewardKo;
    let bodyKo = cleanKoField(
      manual?.body || w?.bodyKo || "거리를 이동하며 ? 아이콘 이벤트를 진행한다.",
    );
    if (!w?.bodyKo && !manual?.body && wiki?.guide) {
      const wikiKo = cleanKoField(translateJpToKo(wiki.guide));
      if (!hasJapanese(wikiKo)) bodyKo = wikiKo;
    }
    const bodyEn = bodyKo;
    const chapter = manual?.chapter
      ? { ko: manual.chapter, en: manual.chapter.replace(/제\s*(\d+)\s*장/, "Chapter $1") }
      : (w?.chapter ?? parseChapter(triggerKo));
    const protag = protagonistFor(num, raw.titleJa, titleKo, titleEn);

    const location =
      num === 100
        ? { ko: "소텐보리 — 최종전 전", en: "Sotenbori — before the final battle" }
        : {
            ko: protag.ko === "마지마" ? "소텐보리 — 거리 ? 아이콘" : "카무로초 — 거리 ? 아이콘",
            en: protag.en === "Majima" ? "Sotenbori — street ? icon" : "Kamurocho — street ? icon",
          };

    const item = {
      number: num,
      title: { ko: titleKo, en: titleEn },
      chapter: chapter ?? undefined,
      protagonist: protag,
      location,
      trigger: { ko: triggerKo, en: triggerEn },
      reward: rewardKo ? { ko: rewardKo, en: rewardEn } : undefined,
      _order: num,
    };

    const steps = splitSteps(bodyKo, bodyEn);
    for (const step of steps ?? []) {
      step.body.ko = cleanKoField(step.body.ko);
      step.body.en = step.body.en || step.body.ko;
    }
    const stepsOk =
      steps &&
      steps.length >= 2 &&
      steps.length <= 8 &&
      steps.every((s) => s.body.ko.length >= 15 && !/^[③④⑤]$/.test(s.body.ko.trim()));
    if (stepsOk) item.steps = steps;
    else item.body = { ko: bodyKo, en: bodyEn };

    items.push(item);
  }

  const missingKo = items.filter((i) => !i.body?.ko && !i.steps?.length);
  if (missingKo.length) console.warn("Missing body:", missingKo.map((i) => i.number).join(", "));

  console.log(`Writing ${items.length} items → ${OUT}`);
  const ts = renderSubstoriesFile({
    appId: 2988580,
    exportName: "yakuza0Substories",
    summary: {
      ko: "키류 편 카무로초 + 마지마 편 소텐보리 합쳐 총 100건. 완료 시 「두 마리 용 트로피」 라인 + 각종 특수 능력(클럽 SEGA·포켓 서킷·캬바레)이 풀립니다. 챕터별로 풀리므로 메인 스토리와 병행 진행이 효율적입니다.",
      en: "100 substories total — Kiryu's Kamurocho + Majima's Sotenbori. Completion unlocks the 'Two Dragons' trophy line plus side ability boosts (Club SEGA, Pocket Circuit, Cabaret). Substories gate on chapters, so run them alongside the main story.",
    },
    source: {
      label: "kamigame.jp + warukuma.tistory.com + dswiipspwikips3.jp — Yakuza 0 substories",
      url: KAMIGAME_INDEX,
    },
    items,
  });

  writeFileSync(OUT, ts);
  console.log("Done.");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
