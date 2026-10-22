import type { CuratedGuide } from "./index";

const Y8_APP_ID = 2072450;

const platinum: CuratedGuide = {
  "summary": {
    "ko": "모든 도전 과제를 달성했다",
    "en": "Obtained all achievements."
  },
  "steps": [
    {
      "ko": "본편의 나머지 64개 업적을 달성하세요. 이 업적에는 DLC가 필요하지 않지만, Steam 전체 74개 업적을 100%로 만들려면 DLC 업적도 필요합니다.",
      "en": "Unlock the other 64 base-game achievements. This achievement does not require DLC, while 100% of Steam’s full 74-achievement list does."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
};

const premiumNewGameHardClear: CuratedGuide = {
  missable: true,
  "summary": {
    "ko": "PREMIUM NEW GAME을 HARD 상태로 클리어했다",
    "en": "Completed New Game+ on Hard difficulty."
  },
  "steps": [
    {
      "ko": "New Game+ 최종 보스 직전의 별도 저장을 남기고 Hard로 클리어하세요. Legend 클리어만으로 Hard 업적이 함께 달성되지는 않습니다.",
      "en": "Keep a separate save before the final boss in New Game+ and finish on Hard. A Legend clear does not also unlock the Hard achievement."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-master-vacation-pack-dlc-trophy-guide-roadmap/"
};

const premiumExHardY8: CuratedGuide = {
  "summary": {
    "ko": "PREMIUM NEW GAME을 EX-HARD 상태로 클리어했다",
    "en": "Completed New Game+ on Legend difficulty."
  },
  "steps": [
    {
      "ko": "New Game+ 최종 보스를 Legend로 쓰러뜨리세요. Hard 업적을 위해 보스 직전 저장을 보관하세요.",
      "en": "Defeat the New Game+ final boss on Legend. Preserve the pre-boss save for the separate Hard achievement."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-master-vacation-pack-dlc-trophy-guide-roadmap/",
  "tips": []
};

const lv70Y8: CuratedGuide = {
  "summary": {
    "ko": "카스가가 Lv.70 이상이 되었다",
    "en": "Reached level 70 with Kasuga."
  },
  "steps": [
    {
      "ko": "카스가의 캐릭터 레벨을 70까지 올리세요. 직업 랭크 70은 이 조건을 대신하지 않습니다.",
      "en": "Raise Kasuga's character level to 70. Job rank 70 does not satisfy this requirement."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  "tips": []
};

const crazyDeliveryAll: CuratedGuide = {
  "summary": {
    "ko": "크레이지 딜리버리의 모든 코스를 클리어했다",
    "en": "Completed all Crazy Delivery courses."
  },
  "steps": [
    {
      "ko": "크레이지 딜리버리의 각 코스를 클리어하세요.",
      "en": "Complete each Crazy Delivery course."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
};

const diyMaster: CuratedGuide = {
  "summary": {
    "ko": "DIY로 100종류의 가구를 만들었다",
    "en": "Crafted 100 different pieces of DIY furniture."
  },
  "steps": [
    {
      "ko": "DIY 목록의 제작 완료 표시를 확인하며 서로 다른 가구 100종을 만드세요.",
      "en": "Use the crafted checkmarks to make 100 distinct pieces of DIY furniture."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
};

const hawaiiDungeon: CuratedGuide = {
  "summary": {
    "ko": "하와이 던전을 답파했다",
    "en": "Conquered the Hawaiian Haunt."
  },
  "steps": [
    {
      "ko": "하와이 던전의 EX 구역까지 총 40층을 클리어하세요.",
      "en": "Clear all 40 floors of the Hawaiian Haunt, including its EX sector."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  "tips": []
};

const yokohamaDungeon: CuratedGuide = {
  "summary": {
    "ko": "요코하마 던전을 답파했다",
    "en": "Conquered the Yokohama Underground."
  },
  "steps": [
    {
      "ko": "요코하마 던전의 EX 구역까지 총 40층을 클리어하세요.",
      "en": "Clear all 40 floors of the Yokohama Underground, including its EX sector."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/",
  "tips": []
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
  "2072450:main_story_1": {
    "summary": {
      "ko": "제1장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 1. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_10": {
    "summary": {
      "ko": "제10장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 10. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_11": {
    "summary": {
      "ko": "제11장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 11. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_12": {
    "summary": {
      "ko": "제12장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 12. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_13": {
    "summary": {
      "ko": "제13장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 13. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_2": {
    "summary": {
      "ko": "제2장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 2. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_3": {
    "summary": {
      "ko": "제3장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 3. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_4": {
    "summary": {
      "ko": "제4장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 4. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_5": {
    "summary": {
      "ko": "제5장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 5. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_6": {
    "summary": {
      "ko": "제6장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 6. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_7": {
    "summary": {
      "ko": "제7장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 7. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_8": {
    "summary": {
      "ko": "제8장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 8. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_9": {
    "summary": {
      "ko": "제9장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 9. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:main_story_clear": {
    "summary": {
      "ko": "제14장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 14. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:kizuna_adachi": {
    "summary": {
      "ko": "아다치의 유대 드라마를 모두 봅니다.",
      "en": "View every Drink Link with Adachi."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:kizuna_chitose": {
    "summary": {
      "ko": "치토세의 유대 드라마를 모두 봅니다.",
      "en": "View every Drink Link with Chitose."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:kizuna_chou": {
    "summary": {
      "ko": "쵸우의 유대 드라마를 모두 봅니다.",
      "en": "View every Drink Link with Zhao."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:kizuna_han": {
    "summary": {
      "ko": "한준기의 유대 드라마를 모두 봅니다.",
      "en": "View every Drink Link with Joongi Han."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:kizuna_saeko": {
    "summary": {
      "ko": "사에코의 유대 드라마를 모두 봅니다.",
      "en": "View every Drink Link with Saeko."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:kizuna_sonhi": {
    "summary": {
      "ko": "선희의 유대 드라마를 모두 봅니다.",
      "en": "View every Drink Link with Seonhee."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:kizuna_tomizawa": {
    "summary": {
      "ko": "토미자와의 유대 드라마를 모두 봅니다.",
      "en": "View every Drink Link with Tomizawa."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:rainbow": {
    "summary": {
      "ko": "하와이에서 소나기가 그친 뒤 나타난 무지개를 휴대폰 카메라로 촬영합니다.",
      "en": "Photograph a rainbow with the phone camera in Hawaii after a rain shower."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
  "2072450:toilet": {
    "summary": {
      "ko": "공중화장실의 변기와 상호작용해 아이템을 얻습니다.",
      "en": "Interact with a public-restroom toilet to obtain an item."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/"
  },
};
