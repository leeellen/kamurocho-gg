import type { CuratedGuide } from "./index";

const YAKUZA_4_APP_ID = 1105500;

const mrDressUp: CuratedGuide = {
  missable: true,
  "summary": {
    "ko": "「No. 1 캬바걸을 만들자」에서 의상을 모든 카테고리 1개씩 수집했다",
    "en": "Gather at least one outfit from each category in \"Hostess Maker.\""
  },
  "steps": [
    {
      "ko": "캬바걸 만들기를 모두 끝내기 전에 의상 분류를 빠짐없이 구입하세요. 영업 횟수에 따라 구입 가능한 의상이 늘어납니다.",
      "en": "Buy the outfit categories before finishing Hostess Maker; more outfits become available after additional shifts."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
};

const platinum: CuratedGuide = {
  "summary": {
    "ko": "게임에서 다른 모든 업적을 달성해보세요.",
    "en": "Acquire all achievements in the game."
  },
  "steps": [
    {
      "ko": "다른 모든 업적을 달성하세요.",
      "en": "Unlock every other achievement."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
};

const legendCleared: CuratedGuide = {
  "summary": {
    "ko": "Legend 난이도로 본편을 클리어하세요.",
    "en": "Complete the story on Legend difficulty."
  },
  "steps": [
    {
      "ko": "Hard 클리어로 Legend를 해금하세요. 클리어 데이터를 승계할 수 있습니다.",
      "en": "Clear Hard to unlock Legend. Clear-data carryover is supported."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293",
  "tips": []
};

const businessCardHunter: CuratedGuide = {
  "summary": {
    "ko": "캬바걸 육성을 포함한 캬바걸로부터 자유 입장으로 모든 명함을 입수했다",
    "en": "Receive business cards from all hostesses, including ones you train in \"Hostess Maker.\""
  },
  "steps": [
    {
      "ko": "육성한 캬바걸을 포함해 모두에게 첫 방문 명함을 받으세요. 최종 명함은 필요하지 않습니다.",
      "en": "Collect the first-visit cards from every hostess, including the ones you train. Their final cards are not required."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293",
  "tips": []
};

const welcomeToSega: CuratedGuide = {
  "summary": {
    "ko": "클럽 세가의 모든 미니 게임을 1회씩 플레이했다",
    "en": "Play all minigames at Club SEGA."
  },
  "steps": [
    {
      "ko": "UFO 캐처·BOXCELIOS·BOXCELIOS 2를 플레이하세요. 아키야마로 BOXCELIOS 2를 반복 플레이하고 점원과의 교류를 진행하면 BOXCELIOS가 추가됩니다.",
      "en": "Play UFO Catcher, Boxcelios, and Boxcelios 2. Play Boxcelios 2 repeatedly as Akiyama and progress the clerk's friendship to add Boxcelios."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
};

const amonY4: CuratedGuide = {
  "summary": {
    "ko": "서브스토리 63개를 완료 또는 종료하세요.",
    "en": "Complete or finish all 63 substories."
  },
  "steps": [
    {
      "ko": "아키야마·타니무라·키류 각 16개, 사에지마 15개를 확인하세요.",
      "en": "Check 16 each for Akiyama, Tanimura, and Kiryu, and 15 for Saejima."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293",
  "tips": []
};

const indomitable: CuratedGuide = {
  "missable": true,
  "summary": {
    "ko": "NORMAL 모드에서 일시적으로 EASY 모드로 바꾸지 않고 클리어",
    "en": "Clear Normal Mode without reverting to Easy Mode."
  },
  "steps": [
    {
      "ko": "Normal로 시작하고 Easy로 낮추지 않은 채 본편을 클리어하세요.",
      "en": "Start on Normal and complete the story without dropping to Easy."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
};

export const YAKUZA_4_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_4_APP_ID}:achievement_9`]: indomitable,
  [`${YAKUZA_4_APP_ID}:achievement_0`]: platinum,
  [`${YAKUZA_4_APP_ID}:achievement_6`]: legendCleared,
  [`${YAKUZA_4_APP_ID}:achievement_13`]: amonY4,
  [`${YAKUZA_4_APP_ID}:achievement_18`]: mrDressUp,
  [`${YAKUZA_4_APP_ID}:achievement_19`]: businessCardHunter,
  [`${YAKUZA_4_APP_ID}:achievement_33`]: welcomeToSega,
  "1105500:achievement_1": {
    "summary": {
      "ko": "제1부을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Part 1. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
  },
  "1105500:achievement_2": {
    "summary": {
      "ko": "제2부을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Part 2. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
  },
  "1105500:achievement_3": {
    "summary": {
      "ko": "제3부을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Part 3. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
  },
  "1105500:achievement_4": {
    "summary": {
      "ko": "제4부을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Part 4. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
  },
  "1105500:achievement_5": {
    "summary": {
      "ko": "최종부를 완료하고 엔딩을 봅니다.",
      "en": "Complete the finale and reach the ending."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
  },
  "1105500:achievement_45": {
    "summary": {
      "ko": "거리와 지하에서 쓰레기를 누적 20개 줍습니다.",
      "en": "Pick up 20 pieces of trash around the city."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.playstationtrophies.org/game/yakuza-4/trophy/28443-kamurocho-tree-hugger.html"
  },
  "1105500:achievement_7": {
    "summary": {
      "ko": "메인 스토리 완료 후 열리는 궁극투기를 모두 클리어합니다.",
      "en": "Clear all Ultimate Matches unlocked after the main story."
    },
    "steps": [
      {
        "ko": "각 과제의 지정된 캐릭터와 조건에 맞춰 클리어합니다. 본편의 장비 강화가 그대로 적용되는 모드가 아닙니다.",
        "en": "Follow each challenge’s preset character and rules; campaign equipment upgrades are not the solution to these trials."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293"
  },
  "1105500:achievement_34": {
    "summary": {
      "ko": "쇼기 대국에서 말을 한 번 승격시킵니다. 플레이어 등급을 올리는 조건이 아닙니다.",
      "en": "Promote a piece during a shogi game; this is not a player-rank requirement."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.trueachievements.com/a320244/shogi-promotion-achievement"
  },
};
