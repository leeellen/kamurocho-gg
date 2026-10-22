import type { CuratedGuide } from "./index";

const ISHIN_APP_ID = 1805480;

const completion100: CuratedGuide = {
  "summary": {
    "ko": "메인 메뉴의 컴플리트 달성률이 100%가 되었다",
    "en": "Brought the Completion List to 100%."
  },
  "steps": [
    {
      "ko": "완료 목록의 전 항목을 채우세요. Legend 본편 클리어는 별도 업적입니다.",
      "en": "Finish every Completion List entry. Clearing the story on Legend is a separate achievement."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938400399"
};

const halfDream: CuratedGuide = {
  "summary": {
    "ko": "메인 메뉴의 컴플리트 달성률이 50% 이상이 되었다",
    "en": "Brought the Completion List to 50%."
  },
  "steps": [
    {
      "ko": "완료 목록의 달성률을 50%까지 올리세요. 100% 업적 진행 중 함께 달성됩니다.",
      "en": "Raise Completion List progress to 50%; this also counts toward 100%."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938400399",
  "tips": []
};

const ultimateBattlesIshin: CuratedGuide = {
  "summary": {
    "ko": "궁극 투기를 전부 클리어했다",
    "en": "Completed every Ultimate Challenge."
  },
  "steps": [
    {
      "ko": "본편 클리어 후 메인 메뉴의 궁극투기를 진행하세요. 각 과제에서 지정한 장비·능력·규칙을 사용합니다.",
      "en": "After clearing the story, select Ultimate Challenges from the main menu. Challenges use their own specified equipment, abilities, and rules."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938400399",
  "tips": []
};

const allBondsIshin: CuratedGuide = {
  "summary": {
    "ko": "모든 사람/동물과의 유대를 달성했다",
    "en": "Completed all Bonds."
  },
  "steps": [
    {
      "ko": "인연 목록의 인물·가게·동물을 모두 확인하세요. 어나더 라이프 안의 인연만 채우는 조건이 아닙니다.",
      "en": "Complete the Bonds list for people, shops, and animals; Bonds are not confined to Another Life."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938400399",
  "tips": []
};

const allPlaySpotsIshin: CuratedGuide = {
  "summary": {
    "ko": "모든 플레이 스팟에서 놀았다",
    "en": "Played every minigame."
  },
  "steps": [
    {
      "ko": "가라오케·일본무용·유녀 놀이·도박·마작·장기·우동집 등을 확인하세요. 현대 작품의 게임 센터는 없습니다.",
      "en": "Check karaoke, Buyo dance, courtesan games, gambling, mahjong, shogi, and the udon shop. There is no modern arcade in Ishin."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938400399"
};

const allSubsIshin: CuratedGuide = {
  "summary": {
    "ko": "모든 서브 스토리를 클리어했다",
    "en": "Completed all Substories."
  },
  "steps": [
    {
      "ko": "서브스토리 72개를 모두 완료하세요.",
      "en": "Complete all 72 substories."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938400399",
  "tips": []
};

const allRevelations: CuratedGuide = {
  "summary": {
    "ko": "모든 천계를 마쳤다",
    "en": "Attained all Revelations."
  },
  "steps": [
    {
      "ko": "천계서 8종을 얻고 각 책에 대응하는 행동을 반복한 뒤 표시되는 천계를 발동하세요.",
      "en": "Obtain all eight Revelation books, repeat their required actions, then trigger each Revelation when prompted."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2938400399",
  "tips": []
};

export const LIKE_A_DRAGON_ISHIN_CURATED: Record<string, CuratedGuide> = {
  [`${ISHIN_APP_ID}:pause_complete_rate100`]: completion100,
  [`${ISHIN_APP_ID}:pause_complete_rate50`]: halfDream,
  [`${ISHIN_APP_ID}:clear_ultimate_battles`]: ultimateBattlesIshin,
  [`${ISHIN_APP_ID}:global_brotherhood`]: allBondsIshin,
  [`${ISHIN_APP_ID}:play_all_playspot`]: allPlaySpotsIshin,
  [`${ISHIN_APP_ID}:clear_substory_all`]: allSubsIshin,
  [`${ISHIN_APP_ID}:finish_all_tenkei`]: allRevelations,
  "1805480:clear_chapter_all": {
    "summary": {
      "ko": "제14장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 14. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
  "1805480:clear_chapter10": {
    "summary": {
      "ko": "제10장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 10. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
  "1805480:clear_chapter12": {
    "summary": {
      "ko": "제12장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 12. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
  "1805480:clear_chapter2": {
    "summary": {
      "ko": "제2장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 2. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
  "1805480:clear_chapter4": {
    "summary": {
      "ko": "제4장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 4. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
  "1805480:clear_chapter6": {
    "summary": {
      "ko": "제6장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 6. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
  "1805480:clear_chapter8": {
    "summary": {
      "ko": "제8장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 8. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
  "1805480:first_tosa": {
    "summary": {
      "ko": "게임을 시작하고 토사에서 료마를 조작할 수 있는 시점까지 진행합니다.",
      "en": "Begin the story and reach the opening playable sequence in Tosa."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
  "1805480:clear_ex_hard": {
    "summary": {
      "ko": "LEGEND 난이도로 게임을 완료합니다.",
      "en": "Complete the game on Legend difficulty."
    },
    "steps": [
      {
        "ko": "마지막 구간만 LEGEND로 도전한다면 제14장에서 토사로 떠나기 전 난이도를 바꾸고 별도 저장을 남깁니다. 최종 전투에 들어간 뒤에는 난이도를 변경할 수 없습니다.",
        "en": "For a final-section Legend attempt, change difficulty and keep a separate save before leaving for Tosa in Chapter 14. Difficulty cannot be changed during the final combat section."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
  "1805480:win_zetugi_100": {
    "summary": {
      "ko": "궁극투기 밖에서 절기를 사용해 적을 누적 100명 쓰러뜨립니다.",
      "en": "Defeat 100 enemies with Special Moves outside Ultimate Challenges."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/"
  },
};
