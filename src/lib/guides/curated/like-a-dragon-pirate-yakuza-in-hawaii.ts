import type { CuratedGuide } from "./index";

const PIRATE_APP_ID = 3061810;

const platinum: CuratedGuide = {
  "summary": {
    "ko": "모든 도전 과제를 달성했다",
    "en": "Obtained all achievements."
  },
  "steps": [
    {
      "ko": "다른 모든 업적을 달성하세요. Legend 난이도 클리어를 요구하는 업적은 없습니다.",
      "en": "Unlock every other achievement. No achievement requires a Legend-difficulty clear."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
};

// 「레전드 오브 콜로세움」 아몬. Steam: amon.
const amonPirate: CuratedGuide = {
  summary: { ko: "파이리츠 콜로세움 「파이리츠 챔피언십」 9개 대회 중 마지막 두 경기가 아몬전입니다. 아몬을 격파하면 발동하며, 아몬전은 「최강 해적단 결정전」을 클리어하면 열립니다.", en: "The last two of the nine Pirates' Championship events are the Amon fights. Beat Amon to unlock it; the Amon match opens after clearing the Strongest Pirate Crew Showdown." },
  steps: [
    { ko: "1) 콜로세움은 해적 싱글 매치 16 · 선상 배틀 러시 10 · 파이리츠 챔피언십 9 · 해적 결투 쇼다운 4, 총 39경기입니다. 챔피언십을 진행해 「최강 해적단 결정전」까지 클리어하세요.", en: "1) The Coliseum has 39 matches: 16 Single Matches, 10 Battle Rush stages, 9 Championship events and 4 Showdowns. Progress the Championship through the Strongest Pirate Crew Showdown." },
    { ko: "2) 아몬전이 열리면 회복 아이템과 강한 무기를 챙겨 도전합니다. 광견 스타일의 스웨이·가드로 버티며 뒤를 잡고, 분신 단계는 파이리츠 스타일 전방위 가드로 막습니다(미니게임 탭 콜로세움 항목에 상세 공략).", en: "2) Stock heals and strong weapons. Sway and guard with Mad Dog and hit from behind; block the clone phase with the Pirate style's all-round guard (full walkthrough in the Minigames tab Coliseum entry)." },
    { ko: "3) 아몬을 쓰러뜨리면 트로피와 함께 50,000달러 · 명성 50,000, 「패자의 반지」(전투 중 히트 게이지가 계속 참)를 받습니다.", en: "3) Beating Amon pays $50,000, 50,000 fame and the Conqueror's Ring (; the Heat gauge keeps filling in fights), plus the trophy." },
  ],
  sourceUrl: "https://game8.jp/ryu-ga-gotoku8-gaiden/669352",
  sourceLabel: { ko: "Game8(일본) — 파이리츠 콜로세움 공략과 해금 조건", en: "Game8 (JP) — Pirates' Coliseum guide and unlock conditions" },
};

// 「마스터 오브 콜로세움」 30종 대회 제패. Steam: arena_c.
const masterOfColiseum: CuratedGuide = {
  summary: { ko: "파이리츠 콜로세움에서 서로 다른 매치 30개를 우승하면 발동(전체 39경기). 해적 결투 쇼다운 4개는 데빌 플래그스 진행으로만 열립니다.", en: "Win 30 different Pirates Coliseum matches (39 in all). The four Showdown stages only open through Devil Flags progress." },
  steps: [
    { ko: "1) 해적 싱글 매치 16 · 선상 배틀 러시 10 · 파이리츠 챔피언십 9 · 해적 결투 쇼다운 4 중에서 30개를 채웁니다. 쇼다운이 필요하면 데빌 플래그스를 먼저 진행하세요.", en: "1) Pick 30 from the 16 Single Matches, 10 Battle Rush stages, 9 Championship events and 4 Showdowns; push Devil Flags first if you need the Showdowns." },
    { ko: "2) 무기·회복 아이템을 비축해 두고, 막히는 매치는 다른 모드로 돌려 승수를 채웁니다.", en: "2) Stock weapons and heals; if a match stalls you, bank wins in another mode instead." },
    { ko: "3) 서로 다른 매치 30개 우승 시 트로피 발동.", en: "3) The trophy fires on the 30th different match won." },
  ],
  sourceUrl: "https://game8.jp/ryu-ga-gotoku8-gaiden/669352",
  sourceLabel: { ko: "Game8(일본) — 파이리츠 콜로세움 공략과 해금 조건", en: "Game8 (JP) — Pirates' Coliseum guide and unlock conditions" },
};

// 「에이스 오브 콜로세움」 20종 대회. Steam: arena_b.
const aceOfColiseum: CuratedGuide = {
  summary: { ko: "파이리츠 콜로세움에서 서로 다른 매치 20개 우승 시 발동. 「마스터 오브 콜로세움」(30개)의 중간 단계입니다.", en: "Win 20 different Pirates Coliseum matches. Mid-step toward Master of Coliseum (30)." },
  steps: [
    { ko: "1) Devil Flags 진행과 병행해 콜로세움 매치를 차례로 클리어.", en: "1) Win matches in sequence while Devil Flags ramps." },
    { ko: "2) 20번째 우승 직후 트로피 발동.", en: "2) Trophy fires on win #20." },
  ],
  sourceUrl: "https://game8.jp/ryu-ga-gotoku8-gaiden/669352",
  sourceLabel: { ko: "Game8(일본) — 파이리츠 콜로세움 공략과 해금 조건", en: "Game8 (JP) — Pirates' Coliseum guide and unlock conditions" },
};

const dragonCartHawaii: CuratedGuide = {
  "summary": {
    "ko": "3종류의 드래곤 카트 컵에서 우승했다",
    "en": "Won 3 different cups in Dragon Kart."
  },
  "steps": [
    {
      "ko": "컵별로 우승하세요. 3위 이내로 다음 컵이 열리는 것과 해당 컵을 우승하는 것은 별개입니다.",
      "en": "Win each required cup. Placing in the top three to unlock the next cup is different from winning it."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
};

const crazyCaptain: CuratedGuide = {
  "summary": {
    "ko": "크레이지 딜리버리의 모든 코스를 클리어했다",
    "en": "Completed all Crazy Delivery courses."
  },
  "steps": [
    {
      "ko": "크레이지 딜리버리의 두 접수처에서 4개씩, 총 8코스를 클리어하세요.",
      "en": "Clear four Crazy Delivery courses at each of its two locations, eight in total."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
};

const fashionMaster: CuratedGuide = {
  "summary": {
    "ko": "100종류 이상의 코디네이트 아이템을 획득했다",
    "en": "Obtained 100 types of clothing items."
  },
  "steps": [
    {
      "ko": "옷차림 메뉴에서 미입수 의상의 입수처를 확인해 100종을 모으세요.",
      "en": "Check locked outfits for their acquisition locations and collect 100 clothing types."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  "tips": []
};

const allCooking: CuratedGuide = {
  "summary": {
    "ko": "모든 요리를 만들었다",
    "en": "Cooked all recipes."
  },
  "steps": [
    {
      "ko": "요리 레벨·공통 능력·선박 확장·동물 수집에 따라 열리는 조리법까지 확인하세요.",
      "en": "Check recipes unlocked by chef level, shared abilities, ship upgrades, and animal collection."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  "tips": []
};

const islandAdventurer: CuratedGuide = {
  summary: { ko: "서로 다른 섬 10곳을 공략하세요.", en: "Complete 10 different islands." },
  steps: [
    { ko: "항해 지도에서 아직 공략하지 않은 섬을 확인하세요.", en: "Check the sailing map for islands you have not completed." },
  ],
  tips: [],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
};

export const LIKE_A_DRAGON_PIRATE_CURATED: Record<string, CuratedGuide> = {
  [`${PIRATE_APP_ID}:adventurer`]: islandAdventurer,
  [`${PIRATE_APP_ID}:platinum`]: platinum,
  [`${PIRATE_APP_ID}:amon`]: amonPirate,
  [`${PIRATE_APP_ID}:arena_c`]: masterOfColiseum,
  [`${PIRATE_APP_ID}:arena_b`]: aceOfColiseum,
  [`${PIRATE_APP_ID}:dragon_cart`]: dragonCartHawaii,
  [`${PIRATE_APP_ID}:delivery_clear`]: crazyCaptain,
  [`${PIRATE_APP_ID}:coordinate_c`]: fashionMaster,
  [`${PIRATE_APP_ID}:cooking`]: allCooking,
  "3061810:main_story_1": {
    "summary": {
      "ko": "제1장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 1. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
  "3061810:main_story_2": {
    "summary": {
      "ko": "제2장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 2. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
  "3061810:main_story_3": {
    "summary": {
      "ko": "제3장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 3. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
  "3061810:main_story_4": {
    "summary": {
      "ko": "제4장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 4. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
  "3061810:main_story_clear": {
    "summary": {
      "ko": "제5장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 5. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
  "3061810:devil_a": {
    "summary": {
      "ko": "제2장 로커섬의 스토리 전투에서 승리합니다.",
      "en": "Win the Chapter 2 story battle on Rokka Island."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
  "3061810:devil_b": {
    "summary": {
      "ko": "데빌 플래그스의 첫 번째 간부를 쓰러뜨립니다.",
      "en": "Defeat the first Devil Flags officer."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
  "3061810:devil_c": {
    "summary": {
      "ko": "데빌 플래그스의 두 번째 간부를 쓰러뜨립니다.",
      "en": "Defeat the second Devil Flags officer."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
  "3061810:devil_d": {
    "summary": {
      "ko": "데빌 플래그스의 세 번째 간부를 쓰러뜨립니다.",
      "en": "Defeat the third Devil Flags officer."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
  "3061810:devil_e": {
    "summary": {
      "ko": "데빌 플래그스의 두목을 쓰러뜨립니다.",
      "en": "Defeat the leader of the Devil Flags."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/"
  },
};
