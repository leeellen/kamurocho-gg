import type { CuratedGuide } from "./index";

const Y8_APP_ID = 2072450;

// Like a Dragon: Infinite Wealth (Y8) 플래티넘. Steam api_name: platinum.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Like a Dragon: Infinite Wealth 플래티넘 — 다른 73개 업적 전부 해금 시 자동 발동. Y8은 「Point of No Return」 경고에도 불구하고 엔딩 후 모든 컴플리션 회수 가능 — 영구 미서블 0. 핵심 게이트는 ①「돈도코 섬」 5성 리조트 ②「수지몬 도감」 250종 + 배틀 ③드링크 링크(전 동료) ④알로하 링크스 친밀도 ⑤EX-HARD/PREMIUM NEW GAME ⑥아마도 우리가 최강(드림 머신 보스).",
    en:
      "Y8 platinum auto-pops at full unlock. Despite the stern 'Point of No Return' warning, every completion is reachable post-credits — zero permanent missables. Gates: ① Dondoko Island 5★ resort ② Sujimon Dex 250 + battles ③ Drink Links (all party) ④ Aloha Links bonds ⑤ EX-HARD / PREMIUM NEW GAME ⑥ Drink Master boss.",
  },
  steps: [
    {
      ko:
        "1) 5장에서 돈도코 섬 해금 직후부터 적극 진행 — 5성 리조트(목표 충실도/인기도 + 클린 파이러츠 격파 + 다리 건설)는 진행도 누적이 길어 일찍 시작할수록 유리.",
      en:
        "1) Open Dondoko Island in Ch.5 and start grinding immediately — 5★ resort needs cumulative goals, so earlier is better.",
    },
    {
      ko:
        "2) 메인 스토리 진행과 병행해 스지몬 도감 250종 등록 + 스지몬 배틀 컵 우승. 호놀룰루 외곽에 강한 스지몬이 다수 출몰하므로 후반 장에서 집중 정리.",
      en:
        "2) Catch 250 Sujimon and clear the Sujimon Battle Cup — top-tier Sujimon spawn in Honolulu's outskirts, so push them in late chapters.",
    },
    {
      ko:
        "3) 동료 드링크 링크 풀 — 술집 미니게임에서 인간력 스탯 7 이상이 필요한 동료가 다수. 자격증 학교 + 길거리 인카운터로 인간력을 일찍 7~8 이상으로 올려 두면 효율적.",
      en:
        "3) Drink Links — most party members need Personality 7+. Push stats via Qualifications School and street encounters early.",
    },
    {
      ko:
        "4) 알로하 링크스 + 미스 매치 + 크레이지 딜리버리 — 호놀룰루 3대 앱 컨텐츠 모두 3장에 풀리니, 3장 후반부터 진행해 9장 이전에 마무리.",
      en:
        "4) Aloha Links + Miss Match + Crazy Delivery — the three Honolulu apps drop in Ch.3. Wrap them by Ch.9.",
    },
    {
      ko:
        "5) 엔딩 후 진정한 최종 던전(스파이크 차이나타운 외)으로 「궁극의 시련」 + 「드림 머신 보스」 격파. 「아마도 우리가 최강!」(PREMIUM NEW GAME EX-HARD 클리어)도 새 회차 직주행.",
      en:
        "5) Post-credits — clear the True Final Dungeon, beat the Drink Master boss, then a fresh PREMIUM NEW GAME on EX-HARD for the difficulty trophy.",
    },
  ],
  tips: [
    {
      ko:
        "Y8은 「피날레 직전 Point of No Return」 경고가 떠도 실제로는 엔딩 후 Premium Adventure에서 모든 콘텐츠 회수 가능. 경고에 휘둘리지 말고 자신의 페이스로 진행하세요.",
      en:
        "Ignore the Ch.13 'Point of No Return' warning — Premium Adventure recovers everything. Don't rush the final chapter.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Infinite Wealth Trophy Guide", en: "PowerPyx — Infinite Wealth Trophy Guide" },
};

// 「아마도 우리가 최강!」 PREMIUM NEW GAME EX-HARD 클리어.
// Steam api_name: pnew_game_hard_clear.
const premiumNewGameHardClear: CuratedGuide = {
  summary: {
    ko:
      "엔딩 후 해금되는 PREMIUM NEW GAME(승계 회차)을 EX-HARD 난이도로 끝까지 클리어해야 발동. 1회차 레벨·스킬·장비·돈도코 가구 등을 그대로 이어받기 때문에 메인 스토리 직주행이 표준 루트입니다.",
    en:
      "Clear PREMIUM NEW GAME (carry-over+) on EX-HARD difficulty. Level, skills, gear, and Dondoko furniture carry over, so a story-sprint is the standard run.",
  },
  steps: [
    {
      ko:
        "1) 1회차 엔딩 후 메인 메뉴에서 「PREMIUM NEW GAME」 선택. 난이도 옵션에서 EX-HARD를 명시적으로 고르세요(중간 변경 가능하나 일부 빌드에서 카운트 누락 보고).",
      en:
        "1) After credits, pick PREMIUM NEW GAME from the main menu and explicitly select EX-HARD difficulty (mid-run changes have credited unreliably in some builds).",
    },
    {
      ko:
        "2) 1회차 자원이 그대로 이월되므로 메인 스토리를 직주행. 서브·미니게임은 1회차에서 끝낸 상태일 때 이 회차에서는 무시 가능.",
      en:
        "2) Story-only sprint — leverage your carried-over levels, skills, and gear. Skip side content already cleared.",
    },
    {
      ko:
        "3) 14장 최종 보스 클리어 시 트로피 발동. 도중 난이도를 낮추면 카운트가 누락될 수 있으니 처음부터 EX-HARD 유지 권장.",
      en:
        "3) Beat the Ch.14 final boss to fire the trophy. Don't drop difficulty mid-run — some builds void the trophy.",
    },
  ],
  tips: [
    {
      ko:
        "후반 보스(특히 12장·13 라스트 보스)가 가장 까다롭습니다. 모브 인카운트에서 EXP·자금을 미리 비축해 직업 레벨을 80+로 올려 두면 안정적입니다.",
      en:
        "Late bosses (Ch.12~13) are the spike. Bank a few job levels (80+) via mob fights before pushing the finale.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Infinite Wealth Trophy Guide", en: "PowerPyx — Infinite Wealth Trophy Guide" },
};

// 「우리가 최강!」 PREMIUM NEW GAME EX-HARD. Steam: pnew_game_exhard_clear.
const premiumExHardY8: CuratedGuide = {
  summary: { ko: "엔딩 후 해금되는 PREMIUM NEW GAME(승계 회차)을 EX-HARD 난이도로 클리어해야 발동. 1회차 레벨·스킬·장비·돈도코 가구가 모두 이월되므로 스토리 직주행 가능.", en: "Clear PREMIUM NEW GAME on EX-HARD post-credits. Level/skills/gear/Dondoko furniture carry over." },
  steps: [
    { ko: "1) 엔딩 후 메인 메뉴에서 PREMIUM NEW GAME → EX-HARD 명시적 선택. 중간 변경은 일부 빌드에서 카운트 누락.", en: "1) Pick PREMIUM NEW GAME + EX-HARD explicitly — mid-run changes void some builds." },
    { ko: "2) 스토리 직주행. 12장·13 후반 보스가 가장 까다로움 — 직업 레벨 80+ 유지.", en: "2) Story-sprint; Ch.12~13 bosses spike — keep jobs at Lv.80+." },
    { ko: "3) 14장 라스트 보스 클리어 시 트로피 발동.", en: "3) Final boss kill fires it." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Infinite Wealth Trophy Guide", en: "PowerPyx — Infinite Wealth Trophy Guide" },
};

// 「전설의 용」 — 카스가 Lv.70. Steam: kasuga_level_d.
const lv70Y8: CuratedGuide = {
  summary: { ko: "카스가 이치반의 직업 레벨이 Lv.70 이상에 도달하면 발동. 진정한 최종 던전(스파이크 차이나타운 등)에서 적 레벨 50~70 그라인드로 도달.", en: "Push Kasuga's job level to 70+. The True Final Dungeon (Daiyama / Spike) covers it via Lv.50~70 mob grinding." },
  steps: [
    { ko: "1) 엔딩 후 「스파이크 차이나타운」 진정한 최종 던전 진입.", en: "1) After credits, enter the True Final Dungeon (Spike Chinatown)." },
    { ko: "2) EXP 부스트 장비(돈도코 가구·드링크 링크) 활용. Lv.70 도달 시 트로피 발동.", en: "2) Stack EXP buffs from Dondoko furniture + Drink Links. Lv.70 fires it." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Infinite Wealth Trophy Guide", en: "PowerPyx — Infinite Wealth Trophy Guide" },
};

// 「미스터 크레이지」 — 크레이지 딜리버리 모든 코스. Steam: delivery_clear.
const crazyDeliveryAll: CuratedGuide = {
  summary: { ko: "호놀룰루의 크레이지 딜리버리(자전거 배달 미니게임) 모든 코스를 클리어해야 발동. 서브스토리 3 「크레이지 머니」 클리어로 해금되며, 코스별로 시간 제한과 경로 난이도가 다릅니다.", en: "Clear every Crazy Delivery course (bike-delivery minigame). Unlocked via Sub 3 'Crazy Money'; each course has its own time + path challenge." },
  steps: [
    { ko: "1) 3장 이후 서브스토리 3 클리어로 크레이지 딜리버리 해금.", en: "1) Clear Sub 3 in Ch.3 to unlock Crazy Delivery." },
    { ko: "2) 각 코스를 시간 안에 통과. 점프대·지름길을 적극 활용하면 코스별 ★3 달성 안정적.", en: "2) Use jumps + shortcuts to hit ★3 ratings on each course." },
    { ko: "3) 모든 코스 클리어 시 트로피 발동.", en: "3) Full clear fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Infinite Wealth Trophy Guide", en: "PowerPyx — Infinite Wealth Trophy Guide" },
};

// 「재활용 마스터」 — DIY로 100종류 가구 제작. Steam: resort_diy.
const diyMaster: CuratedGuide = {
  summary: { ko: "돈도코 섬의 DIY(가구 제작) 시스템에서 누적 100종류의 가구를 제작하면 발동. 5장 돈도코 섬 해금 후 자원 + 도면 수집으로 진행.", en: "Craft 100 unique furniture pieces via Dondoko Island's DIY system. Unlocks in Ch.5 after Dondoko opens." },
  steps: [
    { ko: "1) 돈도코 섬 진행 중 자원(목재·금속·천 등) 수집 + 도면 해금.", en: "1) Gather resources + blueprints across Dondoko." },
    { ko: "2) DIY 메뉴에서 100종류 누적 제작 — 중복 제작은 카운트 안 됨에 주의.", en: "2) Craft 100 unique items (duplicates don't count)." },
    { ko: "3) 100종 도달 시 트로피 발동.", en: "3) Trophy fires at 100." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Infinite Wealth Trophy Guide", en: "PowerPyx — Infinite Wealth Trophy Guide" },
};

// 「하와이 던전 마스터」. Steam: dungeon_hawaii_clear.
const hawaiiDungeon: CuratedGuide = {
  summary: { ko: "하와이의 「지하 던전」(하와이의 미궁 등)을 답파하면 발동. 5~6장쯤 입구 NPC와 대화로 해금되며, 보스 「앨런」 격파가 마지막. 통행료 「10달러」 선택지로 정신력 +30 보상 획득 권장.", en: "Clear Hawaii's underground dungeon. Unlocked in Ch.5~6 via the gate NPC; final boss is Alan. Pay the $10 entry fee for the +30 Spirit reward." },
  steps: [
    { ko: "1) 5~6장 진행 후 지하 던전 입구의 노숙자에게 통행료 「10달러」 지불 → 입장.", en: "1) After Ch.5~6, pay $10 at the gate." },
    { ko: "2) B3까지 내려가며 적 격파 + 회복 아이템 확보. 보스 「앨런」 격파 시 답파.", en: "2) Descend to B3, beat boss Alan." },
    { ko: "3) 답파 시 트로피 발동.", en: "3) Trophy fires on clear." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Infinite Wealth Trophy Guide", en: "PowerPyx — Infinite Wealth Trophy Guide" },
};

// 「요코하마 던전 마스터」. Steam: dungeon_yokohama_clear.
const yokohamaDungeon: CuratedGuide = {
  summary: { ko: "요코하마(이세자키 이진초)의 「지하 던전」을 답파하면 발동. 9장 키류의 「엔딩 노트」 라인 진행 중 풀리며, 후반 보스는 강력한 잡몬과 「길드 마스터」.", en: "Clear Yokohama (Ijincho)'s underground dungeon. Opens during Ch.9's Kiryu Ending Note line; ends with a strong mob-rush + the Guild Master boss." },
  steps: [
    { ko: "1) 9장 키류 엔딩 노트 진행 → 요코하마 던전 해금.", en: "1) Open via Ch.9's Kiryu Ending Note." },
    { ko: "2) 던전 끝까지 진행 → 「길드 마스터」 격파. 풀 강화 장비 권장.", en: "2) Push to the end and beat the Guild Master." },
    { ko: "3) 답파 시 트로피 발동.", en: "3) Trophy fires on clear." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Infinite Wealth Trophy Guide", en: "PowerPyx — Infinite Wealth Trophy Guide" },
};

export const LIKE_A_DRAGON_INFINITE_WEALTH_CURATED: Record<string, CuratedGuide> = {
  [`${Y8_APP_ID}:platinum`]: platinum,
  [`${Y8_APP_ID}:pnew_game_hard_clear`]: premiumNewGameHardClear,
  [`${Y8_APP_ID}:pnew_game_exhard_clear`]: premiumExHardY8,
  [`${Y8_APP_ID}:kasuga_level_d`]: lv70Y8,
  [`${Y8_APP_ID}:delivery_clear`]: crazyDeliveryAll,
  [`${Y8_APP_ID}:resort_diy`]: diyMaster,
  [`${Y8_APP_ID}:dungeon_hawaii_clear`]: hawaiiDungeon,
  [`${Y8_APP_ID}:dungeon_yokohama_clear`]: yokohamaDungeon,
};
