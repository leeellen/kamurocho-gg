import type { CuratedGuide } from "./index";

const GAIDEN_APP_ID = 2375550;

// Requirements checked against the linked roadmap; names come from Steam.
const platinum: CuratedGuide = {
  summary: {
    ko: "다른 업적을 모두 달성하면 해금됩니다. 난이도 지정이나 새 회차는 필요하지 않습니다.",
    en: "Unlock every other achievement. No difficulty requirement or second playthrough is needed.",
  },
  steps: [
    { ko: "스토리를 마친 뒤 남은 업적을 정리하세요.", en: "Finish the story, then complete outstanding achievements." },
  ],
  tips: [
    { ko: "달성률 100%와 게임 내 활동 목록 100%는 다른 목표입니다.", en: "All achievements and a full Activity Log are different goals." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — 업적 로드맵", en: "PowerPyx — trophy roadmap" },
};

const castleVIP: CuratedGuide = {
  summary: { ko: "Club Castle의 캬바걸 3명 모두 하트 3개를 달성하세요.", en: "Reach three hearts with all three Castle hostesses." },
  steps: [
    { ko: "대화·음료·선물로 친밀도를 높이세요.", en: "Raise affection through conversation, drinks, and gifts." },
  ],
  tips: [],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
};

const heavenlyVIP: CuratedGuide = {
  summary: { ko: "Club Heavenly의 캬바걸 2명 모두 하트 3개를 달성하세요.", en: "Reach three hearts with both Heavenly hostesses." },
  steps: [
    { ko: "대화·음료·선물로 친밀도를 높이세요.", en: "Raise affection through conversation, drinks, and gifts." },
  ],
  tips: [],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
};

const hellsChampion: CuratedGuide = {
  summary: { ko: "플래티넘 랭크 이하의 투기를 전부 클리어하세요.", en: "Complete all Coliseum matches through Platinum rank." },
  steps: [
    { ko: "투기 목록에서 미완료 경기를 확인하세요.", en: "Check the match list for unfinished fights." },
  ],
  tips: [],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
};

// 「레트로 게이머」 — 마스터 시스템 5종 플레이. Steam: retro_games.
const retroGamer: CuratedGuide = {
  summary: { ko: "다이도지 본거지의 SEGA 마스터 시스템 캐비넷에서 5종류 이상의 소프트를 1회 이상 플레이하면 발동. 3장부터 접근 가능.", en: "Play 5+ SEGA Master System cartridges at the Daidoji base cabinet. Available from Ch.3." },
  steps: [
    { ko: "1) 3장 이후 다이도지 본거지로 이동 → 마스터 시스템 캐비넷 입장.", en: "1) After Ch.3, head to the Daidoji base and use the cabinet." },
    { ko: "2) 5개 이상 다른 소프트를 한 번씩 플레이. 클리어 점수 무관.", en: "2) Play 5+ different titles once each — score-agnostic." },
    { ko: "3) 트로피 발동.", en: "3) Trophy fires." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Like a Dragon Gaiden Trophy Guide", en: "PowerPyx — Like a Dragon Gaiden Trophy Guide" },
};

const pocketCircuitMaster: CuratedGuide = {
  summary: { ko: "포켓 서킷에서 마스터즈 서킷을 개방하세요. 최종 대회가 아닌 중간 진행 단계입니다.", en: "Unlock the Masters Circuit, a mid-progression milestone rather than the final cup." },
  steps: [
    { ko: "소텐보리의 CourStar(코스타)에서 대회를 진행하세요.", en: "Progress through races at CourStar in Sotenbori." },
  ],
  tips: [],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
};

export const LIKE_A_DRAGON_GAIDEN_CURATED: Record<string, CuratedGuide> = {
  [`${GAIDEN_APP_ID}:platinum`]: platinum,
  [`${GAIDEN_APP_ID}:caba_a`]: heavenlyVIP,
  [`${GAIDEN_APP_ID}:caba_b`]: castleVIP,
  [`${GAIDEN_APP_ID}:arena_c`]: hellsChampion,
  [`${GAIDEN_APP_ID}:retro_games`]: retroGamer,
  [`${GAIDEN_APP_ID}:pokecir_a`]: pocketCircuitMaster,
  "2375550:main_story_01": {
    "summary": {
      "ko": "제1장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 1. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
  "2375550:main_story_02": {
    "summary": {
      "ko": "제2장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 2. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
  "2375550:main_story_03": {
    "summary": {
      "ko": "제3장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 3. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
  "2375550:main_story_04": {
    "summary": {
      "ko": "제4장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 4. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
  "2375550:main_story_05": {
    "summary": {
      "ko": "제5장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 5. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
  "2375550:shitennou_a": {
    "summary": {
      "ko": "투기장 사천왕 도전에서 댄 브로디를 쓰러뜨립니다.",
      "en": "Defeat Dan Brody in the Coliseum Four Kings challenge."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
  "2375550:shitennou_b": {
    "summary": {
      "ko": "투기장 사천왕 도전에서 사메지마를 쓰러뜨립니다.",
      "en": "Defeat Samejima in the Coliseum Four Kings challenge."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
  "2375550:shitennou_c": {
    "summary": {
      "ko": "투기장 사천왕 도전에서 저스티스를 쓰러뜨립니다.",
      "en": "Defeat Justice in the Coliseum Four Kings challenge."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
  "2375550:shitennou_d": {
    "summary": {
      "ko": "투기장 사천왕 도전에서 우가진를 쓰러뜨립니다.",
      "en": "Defeat Ugajin in the Coliseum Four Kings challenge."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
  "2375550:amon": {
    "summary": {
      "ko": "투기장과 관련 의뢰를 진행해 아몬을 쓰러뜨립니다.",
      "en": "Defeat Amon after progressing through the Coliseum and its associated requests."
    },
    "steps": [
      {
        "ko": "사천왕과 관련 의뢰, 남은 투기장 경기를 완료한 뒤 아몬 도전을 진행합니다.",
        "en": "Finish the Four Kings, the follow-up request and remaining Coliseum matches, then complete the Amon challenge."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/"
  },
};
