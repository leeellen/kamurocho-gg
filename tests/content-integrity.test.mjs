import assert from "node:assert/strict";
import { test } from "node:test";

import { load, snapshot } from "./content-loader.mjs";

const text = load("@/lib/achievement-text");
const curated = load("@/lib/guides/curated");
const { pickLocalized } = load("@/lib/i18n");

test("editorial wording follows verified Korean sources without rewriting Steam names", () => {
  assert.equal(text.localizeGuideText({ locale: "ko", text: "Kamurocho / Tojo Clan / Drink Link / Romance Workshop / Beast Style / Brawler Style" }), "카무로쵸 / 동성회 / 유대 드라마 / 낭만 제작소 / 파괴자 스타일 / 불한당 스타일");
  assert.equal(pickLocalized({ ko: "카무로초의 도조 클랜", en: "Kamurocho" }, "ko"), "카무로쵸의 동성회");
  assert.equal(pickLocalized({ ko: "고마키류 / 후루마키의 수련", en: "Komaki" }, "ko"), "코마키류 / 코마키의 수련");
  assert.equal(pickLocalized({ ko: "", en: "Kamurocho" }, "ko"), "Kamurocho");
  assert.equal(text.localizeGuideText({ locale: "en", text: "Drink Link" }), "Drink Link");
  assert.equal(text.localizeAchievementName({ locale: "ko", sidecar: { nameKo: "카무로초" } }), "카무로초");
  assert.equal(text.localizeAchievementDescription({ locale: "ko", sidecar: { descKo: "카무로초" } }), "카무로초");
});

test("empty curated tips suppress superseded DB advice", () => {
  assert.equal(curated.pickCuratedList(undefined, "ko"), undefined);
  assert.deepEqual(curated.pickCuratedList([], "ko"), []);
  assert.deepEqual(curated.pickCuratedList([{ ko: "음료 링크", en: "Drink Link" }], "ko"), ["유대 드라마"]);
});

test("Kiwami, 4 and 7 routes retain sourced requirements instead of invented events", () => {
  const { getSubstories } = load("@/lib/substories");
  const entries = (appId) => getSubstories(appId).groups.flatMap((group) => group.items);
  const kiwami = entries(3717330);
  assert.equal(kiwami.length, 78);
  assert.equal(new Set(kiwami.map((item) => item.source?.url)).size, 78);
  assert.match(kiwami.find((item) => item.number === 8).body.en, /Neither choice prevents completion/);
  assert.match(kiwami.find((item) => item.number === 25).body.en, /three-frame/);
  assert.match(kiwami.find((item) => item.number === 77).body.en, /40 cards/);
  assert.match(kiwami.find((item) => item.number === 78).body.en, /50 cards/);
  assert.match(kiwami.find((item) => item.number === 46).body.en, /Jo Amon/);
  assert.match(kiwami.find((item) => item.number === 47).body.en, /six packs of pocket tissues/);
  assert.match(kiwami.find((item) => item.number === 53).body.en, /begin MesuKing/);
  assert.match(kiwami.find((item) => item.number === 68).source.label, /虎落とし/);
  const four = entries(1105500);
  assert.equal(four.length, 63);
  assert.ok(four.every((item) => item.source?.url));
  assert.match(four.find((item) => item.number === 43).body.en, /children in first-person/);
  assert.match(four.find((item) => item.number === 56).body.en, /warm it at New Serena/);
  assert.match(four.find((item) => item.number === 62).body.en, /Kamurocho Hills entrance/);
  assert.match(four.find((item) => item.number === 63).body.en, /62 substories/);
  const seven = entries(1235140);
  assert.equal(seven.length, 52);
  assert.ok(seven.every((item) => item.source?.url));
  const six = entries(1388590);
  assert.match(six.find((item) => item.number === 10).body.en, /photo messages/);
  assert.match(six.find((item) => item.number === 13).body.en, /regardless of ruleset or result/);
  assert.match(six.find((item) => item.number === 19).body.en, /five consecutive home runs/);
  assert.match(six.find((item) => item.number === 51).body.en, /every other substory is not required/);
});

test("game-specific Korean names are not overwritten by a series-wide substitution", () => {
  const { getMinigames } = load("@/lib/minigames");
  const seven = JSON.stringify(getMinigames(1235140));
  const eight = JSON.stringify(getMinigames(2072450));
  assert.match(seven, /서바이버 캔 줍기/);
  assert.match(eight, /서바이벌 캔 줍기/);
  assert.match(eight, /야쿠몬 스폿/);
  assert.match(eight, /야쿠틴/);
  assert.doesNotMatch(eight, /스지테인|쾌활|상냥함/);
  assert.match(eight, /Answer: Iron pipe/);
  assert.doesNotMatch(eight, /Answer: Nail Bat|swimming around|agree on every answer|세련 \+/);
  assert.equal(pickLocalized({ ko: "서바이벌 캔 줍기", en: "Can Quest" }, "ko"), "서바이벌 캔 줍기");
  const { buildDisplayMissables } = load("@/lib/data/missables");
  const notes = buildDisplayMissables({
    achievements: [], locale: "ko",
    curatedMissables: [{ chapter: 1, title: { ko: "카무로초", en: "Kamurocho" }, items: [{ kind: "missable", title: { ko: "카무로초", en: "Kamurocho" }, when: { ko: "카무로초", en: "Kamurocho" }, body: { ko: "카무로초", en: "Kamurocho" } }] }],
  });
  assert.equal(notes[0].title, "카무로쵸");
  assert.equal(notes[0].items[0].body, "카무로쵸");
});

test("Kiwami 2 routes preserve actual rewards, prerequisites and cross-city tasks", () => {
  const items = load("@/lib/substories").getSubstories(3717340).groups.flatMap((group) => group.items);
  const item = (number) => items.find((entry) => entry.number === number);
  assert.equal(items.length, 75);
  assert.equal(new Set(items.map((entry) => entry.number)).size, 75);
  assert.ok(items.every((entry) => entry.source?.url && entry.body.ko && entry.body.en));
  assert.match(item(20).body.en, /signed baseball/);
  assert.doesNotMatch(JSON.stringify(item(20)), /Utsunomiya|캐스트로 합류/);
  assert.match(item(21).body.en, /Win the match/);
  assert.match(item(21).chapter.en, /5/);
  assert.match(item(36).body.en, /white briefs/);
  assert.match(item(37).body.en, /Purchases are not required/);
  assert.match(item(38).body.en, /71 substories/);
  assert.match(item(38).source.label, /CyricZ/);
  assert.match(item(54).body.en, /High Voltage Stun Gun/);
  assert.match(item(58).body.en, /300 points/);
  assert.match(item(64).body.en, /Haruka/);
  assert.match(item(72).body.en, /leave and re-enter/);
});

test("Lost Judgment cases retain investigation steps and chapter gates", () => {
  const items = load("@/lib/substories").getSubstories(2058190).groups.flatMap((group) => group.items);
  const item = (number) => items.find((entry) => entry.number === number);
  assert.equal(items.length, 54);
  assert.equal(new Set(items.map((entry) => entry.source?.url)).size, 54);
  assert.match(item(1).body.en, /figure/);
  assert.match(item(2).body.en, /rear pocket/);
  assert.doesNotMatch(JSON.stringify(item(2)), /자살|empathic/);
  assert.match(item(3).body.en, /cardboard box/);
  assert.match(item(9).body.en, /during the day/);
  assert.match(item(13).body.en, /seven designated strong rivals/);
  assert.match(item(24).chapter.en, /4/);
  assert.match(item(25).chapter.en, /6/);
  assert.match(item(26).body.en, /dance-club boxes/);
  assert.match(item(34).chapter.en, /Finale/);
  assert.match(item(42).body.en, /43–54 are not prerequisites/);
  assert.match(item(53).body.en, /finish the Dance Club story/);
});

test("all hidden achievements have sourced bilingual conditions", () => {
  for (const achievement of snapshot.achievements.filter((row) => !row.description)) {
    const guide = curated.getCuratedGuide(achievement.app_id, achievement.api_name);
    assert.ok(guide?.summary?.ko && guide?.summary?.en && guide.sourceUrl, `${achievement.app_id}:${achievement.api_name}`);
  }
  assert.match(curated.getCuratedGuide(3937550, "_13").summary.en, /Chapter 1 of Dark Ties/);
  assert.match(curated.getCuratedGuide(2058190, "COYOTE_KAITO_DEFEATED_LAST_BOSS").summary.en, /masked warriors/);
  assert.equal(curated.getCuratedGuide(2058190, "COYOTE_KAITO_DEFEATED_LAST_BOSS").missable, true);
});

test("Yakuza 5 substories cite individual walkthroughs and distinguish unrelated activities", async () => {
  const { getSubstories } = load("@/lib/substories");
  const { getGuideSources } = load("@/lib/data/queries/sources");
  const items = getSubstories(1105510).groups.flatMap((group) => group.items);
  assert.equal(items.length, 78);
  assert.equal(new Set(items.map((item) => item.source?.url)).size, 78);
  assert.match(items.find((item) => item.number === 1).body.en, /70,000/);
  assert.match(items.find((item) => item.number === 6).body.en, /president.*online scam/);
  assert.match(items.find((item) => item.number === 14).body.en, /taxi driving mission/);
  assert.doesNotMatch(JSON.stringify(items), /Missable|미씨블/);
  const first = await getGuideSources("ko");
  const second = await getGuideSources("ko");
  assert.deepEqual(first, second);
  const refs = first.find((entry) => entry.game.appId === 1105510).substorySources;
  for (const item of items) assert.ok(refs.some((ref) => ref.url === item.source.url));
});

test("unreviewed generated prose cannot become instructions, missable flags, or coverage", () => {
  const { buildGamePageData } = load("@/lib/data/queries/helpers");
  const { CURATED_GAMES } = load("@/lib/content");
  const game = CURATED_GAMES.find((entry) => entry.slug === "yakuza-5");
  const achievement = snapshot.achievements.find((entry) => entry.app_id === game.appId && entry.api_name === "ACHIEVEMENT_21");
  const data = buildGamePageData({
    curated: game,
    game: snapshot.games.find((entry) => entry.app_id === game.appId),
    gameAchievements: [achievement],
    guides: [{ achievement_id: achievement.id, locale: "koreana", content: "조작된 조건\n- 챕터 9에서만 가능\nmissable achievement", source_url: "https://example.com/unreviewed", confidence: 1 }],
    locale: "ko",
  });
  assert.deepEqual(data.achievements[0].guideSteps, []);
  assert.deepEqual(data.achievements[0].guideTips, []);
  assert.equal(data.achievements[0].missable, false);
  assert.equal(data.achievements[0].chapter, null);
  assert.equal(data.game.guideCoverage, 0);
  assert.doesNotMatch(JSON.stringify(data.achievements), /조작된 조건|example.com/);
});

test("Gaiden requirements retain corrected difficulty and location guidance", () => {
  const platinum = curated.getCuratedGuide(2375550, "PLATINUM");
  assert.match(platinum.summary.ko, /새 회차는 필요하지/);
  const pocket = curated.getCuratedGuide(2375550, "POKECIR_A");
  assert.match(pocket.steps[0].ko, /소텐보리/);
  assert.doesNotMatch(JSON.stringify(pocket), /Kamurocho|카무로초|최상위/);
});

test("source inventory includes curated-only references, localized names, and all minigames", async () => {
  const { getGuideSources } = load("@/lib/data/queries/sources");
  const { MINIGAMES_BY_APP } = load("@/lib/minigames");
  const first = curated.getCuratedGuide(2375550, "PLATINUM");
  const original = first.sourceUrl;
  first.sourceUrl = "https://example.com/editorial-reference";
  try {
    const sources = await getGuideSources("ko");
    const gaiden = sources.find((entry) => entry.game.appId === 2375550);
    const citation = gaiden.achievementSources.find((entry) => entry.url === first.sourceUrl);
    assert.ok(citation);
    const achievement = snapshot.achievements.find((entry) => entry.app_id === 2375550 && entry.api_name === "PLATINUM");
    assert.ok(citation.achievements.includes(JSON.parse(achievement.category).nameKo));
    for (const [appId, data] of MINIGAMES_BY_APP) {
      const entry = sources.find((item) => item.game.appId === appId);
      for (const minigame of data.minigames) {
        const refs = minigame.source ? [minigame.source].flat() : [];
        for (const ref of refs) {
          const match = entry.minigameSources.find((item) => item.url === ref.url);
          assert.ok(match, `${appId}/${minigame.slug}: missing ${ref.url}`);
          assert.ok(match.categories.includes(pickLocalized(minigame.name, "ko")));
        }
      }
      assert.equal(new Set(entry.minigameSources.map((item) => item.url)).size, entry.minigameSources.length);
    }
  } finally { first.sourceUrl = original; }
});

test("registered citation URLs are HTTP(S), with coverage reported separately from factual verification", async (t) => {
  const { getGuideSources } = load("@/lib/data/queries/sources");
  const { MINIGAMES_BY_APP } = load("@/lib/minigames");
  const sources = await getGuideSources("ko");
  const urls = new Set(sources.flatMap((entry) => [
    ...entry.achievementSources, ...entry.substorySources, ...entry.collectibleSources, ...entry.minigameSources,
  ]).map((entry) => entry.url));
  for (const url of urls) assert.ok(["https:", "http:"].includes(new URL(url).protocol), url);
  const minigames = [...MINIGAMES_BY_APP.values()].flatMap((entry) => entry.minigames);
  const missing = minigames.filter((entry) => !entry.source || (Array.isArray(entry.source) && !entry.source.length));
  t.diagnostic(`${snapshot.games.length} games; ${snapshot.achievements.length} achievements; ${snapshot.guides.length} guide rows; ${urls.size} unique citation URLs; ${minigames.length} minigames; ${missing.length} minigames without sources.`);
  if (missing.length) t.diagnostic(`Missing sources: ${missing.map((entry) => entry.slug).join(", ")}`);
});

test("every game passes the complete offline content audit", async () => {
  const { auditContent } = await import("../scripts/audit-content.mjs");
  const result = await auditContent();
  assert.equal(result.games.length, 15);
  assert.equal(result.games.reduce((n, game) => n + game.achievements, 0), 863);
  assert.deepEqual(result.findings, []);
});

test("numeric and cross-game regressions stay corrected", () => {
  const get = (app, api) => curated.getCuratedGuide(app, api);
  assert.match(get(1088710, "ACHIEVEMENT_47").summary.en, /10,000,000/);
  assert.match(get(1235140, "YAZAWA_SUJIMON_B").summary.ko, /200/);
  assert.match(get(1235140, "YAZAWA_KASUGA_LEVEL_D").steps[0].en, /character level/);
  assert.match(get(2072450, "PNEW_GAME_HARD_CLEAR").summary.en, /Hard/);
  assert.match(get(2072450, "PNEW_GAME_EXHARD_CLEAR").summary.en, /Legend/);
  assert.equal(get(1105500, "ACHIEVEMENT_18").missable, true);
  assert.equal(get(2058190, "COYOTE_GET_ALL_EQUIP").missable, false);
  assert.match(get(2988580, "31_Cat_Scratch").steps[0].en, /full three-round tournaments/);
  assert.match(get(2988580, "52_Walking_On").summary.en, /Complete/);
});

test("Steam play spots exclude console-only activities and Gaiden requests retain stable IDs", () => {
  const { getMinigames } = load("@/lib/minigames");
  const { getSubstories } = load("@/lib/substories");
  assert.ok(!getMinigames(1105500).minigames.some((item) => item.slug === "pachinko"));
  assert.ok(!getMinigames(1105510).minigames.some((item) => item.slug === "pachinko-pachislot"));
  const judgment = getMinigames(2058180).minigames;
  assert.ok(!judgment.some((item) => item.slug === "pinball"));
  assert.ok(judgment.some((item) => item.slug === "out-run"));
  const requests = getSubstories(2375550).groups.flatMap((group) => group.items);
  assert.equal(requests.length, 24);
  assert.equal(new Set(requests.map((item) => item.number)).size, 24);
  assert.equal(requests.find((item) => item.number === 1).title.en, "Emergency Request!");
  assert.equal(requests.find((item) => item.number === 21).title.en, "Operation: Destroy the Gokuso-gumi");
  assert.doesNotMatch(JSON.stringify(requests), /Kamurocho|Spider Camera|카무로초/);
});

test("dungeon EX sectors and base-game completion do not acquire false requirements", () => {
  const yokohama = curated.getCuratedGuide(2072450, "DUNGEON_YOKOHAMA_CLEAR");
  assert.match(yokohama.steps[0].en, /40 floors.*EX sector/);
  const platinum = curated.getCuratedGuide(2072450, "PLATINUM");
  assert.match(platinum.steps[0].en, /does not require DLC/);
  assert.match(platinum.steps[0].en, /64 base-game/);
  const hard = curated.getCuratedGuide(2072450, "PNEW_GAME_HARD_CLEAR");
  assert.equal(hard.missable, true);
  const { MISSABLES } = load("@/lib/content");
  assert.ok(!MISSABLES[1388590].flatMap((group) => group.items).some((item) => item.kind === "missable"));
  assert.ok(MISSABLES[2072450].flatMap((group) => group.items).some((item) => item.title.en === "We're Probably the Best!" && item.kind === "missable"));
});

test("Ishin substories follow the sourced routes and official Korean area names", () => {
  const { getSubstories } = load("@/lib/substories");
  const data = getSubstories(1805480);
  const items = data.groups.flatMap((group) => group.items);
  assert.equal(items.length, 72);
  assert.deepEqual(data.groups.map((group) => group.title.ko), ["도성 안", "도성 밖", "해골 거리", "후시미", "기온", "기타"]);
  const byNumber = (number) => items.find((item) => item.number === number);
  assert.match(byNumber(2).body.en, /south of Kanamaru Udon/);
  assert.match(byNumber(11).body.en, /help him read a globe/);
  assert.match(byNumber(61).body.en, /at your house/);
  assert.ok(items.every((item) => item.source?.url.includes("powerpyx.com")));
  assert.doesNotMatch(JSON.stringify(data), /Virtue|덕 보상|라쿠나이|라쿠가이|무쿠로가이|How was the song/);
  const { getMinigames } = load("@/lib/minigames");
  assert.doesNotMatch(JSON.stringify(getMinigames(1805480)), /라쿠나이|라쿠가이|무쿠로가이/);
});

test("Judgment side cases use official English names and sourced rewards", () => {
  const { getSubstories } = load("@/lib/substories");
  const items = getSubstories(2058180).groups.flatMap((group) => group.items);
  assert.equal(items.length, 50);
  const byNumber = (number) => items.find((item) => item.number === number);
  assert.equal(byNumber(1).title.en, "The Twisted Trio: Panty Professor");
  assert.equal(byNumber(49).title.en, "Gone in 20 Minutes");
  assert.equal(byNumber(1).reward.en, "¥50,000 · 80 SP");
  assert.match(byNumber(5).body.en, /4134/);
  assert.match(byNumber(7).body.en, /8925/);
  assert.match(byNumber(16).body.en, /never actually paid/);
  assert.doesNotMatch(JSON.stringify(items), /Perv Trinity|Butt Meister|Rip-off Bar|탐정의 관찰력/);
});

test("Pirate Yakuza substories follow PowerPyx and official Korean terms", () => {
  const { getSubstories } = load("@/lib/substories");
  const items = getSubstories(3061810).groups.flatMap((group) => group.items);
  assert.equal(items.length, 31);
  const byNumber = (number) => items.find((item) => item.number === number);
  assert.equal(byNumber(11).title.ko, "수상한 사람 촬영 사가");
  assert.equal(byNumber(15).title.ko, "아이돌이 아니었더라면");
  assert.match(byNumber(3).body.en, /recruit Elizabeth/);
  assert.match(byNumber(11).reward.en, /Scope Ring/);
  const { getMinigames } = load("@/lib/minigames");
  assert.doesNotMatch(JSON.stringify(items), /경험치/);
  assert.doesNotMatch(JSON.stringify([items, getMinigames(3061810)]), /시코 스냅|불심자|매들랜티스|마들랜티스|미나토 걸|리치 아일랜드/);
});

test("Infinite Wealth substories use official names and game8 conditions", () => {
  const { getSubstories } = load("@/lib/substories");
  const items = getSubstories(2072450).groups.flatMap((group) => group.items);
  assert.equal(items.length, 52);
  const byNumber = (number) => items.find((item) => item.number === number);
  assert.equal(byNumber(1).title.en, "Radio Active");
  assert.equal(byNumber(38).title.ko, "야쿠신 사천왕 등장");
  assert.match(byNumber(26).body.en, /8931/);
  assert.match(byNumber(11).choices.at(-1).correct.en, /Obispo/);
  assert.ok(items.every((item) => item.source?.url.startsWith("https://game8.jp/ryu-ga-gotoku8/")));
  assert.doesNotMatch(JSON.stringify(items), /스지가미|리볼브|Intelligence|Snap That Creep/);
});

test("Yakuza 0 substories cite per-entry pages without guide-only map labels", () => {
  const { getSubstories } = load("@/lib/substories");
  const items = getSubstories(2988580).groups.flatMap((group) => group.items);
  assert.equal(items.length, 100);
  assert.ok(items.every((item) => item.source?.url.startsWith("https://kamigame.jp/ryugagotoku0/")));
  const text = JSON.stringify(items);
  assert.doesNotMatch(text, /【맵|\[Map|본인은 현재|고급 보상/);
  const majima99 = items.find((item) => item.number === 99 && item.protagonist?.en === "Majima");
  assert.equal(majima99.title.ko, "궁극의 계획");
  assert.match(items.find((item) => item.number === 7).trigger.ko, /서브 스토리 9/);
});

test("Yakuza 3 substory triggers and rewards follow CyricZ and the Yakuza Wiki", () => {
  const { getSubstories } = load("@/lib/substories");
  const items = getSubstories(1088710).groups.flatMap((group) => group.items);
  assert.equal(items.length, 119);
  const byNumber = (number) => items.find((item) => item.number === number);
  assert.match(byNumber(79).trigger.en, /cat, Lasagna/);
  assert.match(byNumber(84).trigger.en, /lottery/);
  assert.equal(byNumber(20).reward.en, "3,000 EXP · Sata andagi");
  assert.ok(items.every((item) => item.source?.url.includes("/faqs/77723/chapter-")));
  assert.doesNotMatch(JSON.stringify(items), /completion credit|cinematic|Big EXP|Massive EXP/);
});

test("Kiwami 3 substories cite game8 entries and keep conflicting Amon sources explicit", () => {
  const { getSubstories } = load("@/lib/substories");
  const [main, darkTies] = getSubstories(3937550).groups;
  assert.equal(main.items.length, 31);
  assert.equal(darkTies.items.length, 13);
  assert.ok(main.items.every((item) => item.source?.url.startsWith("https://game8.jp/ryu-ga-gotoku-kiwami3/")));
  const byNumber = (number) => main.items.find((item) => item.number === number);
  assert.match(byNumber(25).body.en, /manzai/);
  assert.doesNotMatch(byNumber(25).body.ko, /특촬/);
  assert.match(byNumber(31).trigger.en, /Sources disagree/);
});
