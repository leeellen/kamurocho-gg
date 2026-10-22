import type { CuratedGuide } from "./index";

const YAKUZA_KIWAMI_2_APP_ID = 3717340;

const platinum: CuratedGuide = {
  "summary": {
    "ko": "다른 모든 업적을 달성하세요.",
    "en": "Unlock every other achievement."
  },
  "steps": [],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
};

const legendK2: CuratedGuide = {
  "summary": {
    "ko": "난이도 LEGEND로 클리어했다",
    "en": "Completed the game in Legend mode."
  },
  "steps": [
    {
      "ko": "본편 클리어 데이터를 승계해 Legend로 시작하고 최종장까지 완료하세요.",
      "en": "Start Legend with clear-data carryover and finish the final chapter."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154",
  "tips": []
};

const completionK2: CuratedGuide = {
  "summary": {
    "ko": "모든 달성 목록을 클리어했다",
    "en": "Completed 100% of the Completion List."
  },
  "steps": [
    {
      "ko": "게임 안의 완료 목록에 표시되는 조건을 모두 채우세요.",
      "en": "Complete every requirement shown on the in-game Completion List."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154",
  "tips": []
};

const cabaretGPK2: CuratedGuide = {
  "summary": {
    "ko": "캬바클럽 그랑프리에서 우승했다",
    "en": "Won first league championship in the Cabaret Club Grand Prix."
  },
  "steps": [
    {
      "ko": "물장사 아일랜드의 첫 번째 리그에서 우승하세요. 최종 리그까지 끝낼 필요는 없습니다.",
      "en": "Win the first league in the Cabaret Club Grand Prix; the final championship is not required for this achievement."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
};

const clanCreatorK2: CuratedGuide = {
  "summary": {
    "ko": "클랜 크리에이터의 스토리를 클리어했다",
    "en": "Completed the Clan Creator storyline."
  },
  "steps": [
    {
      "ko": "마지마 건설의 본편 미션을 끝까지 진행하세요.",
      "en": "Finish the main Majima Construction missions."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
};

const amonK2: CuratedGuide = {
  "summary": {
    "ko": "아몬 일족의 서브스토리를 차례로 진행해 마지막 아몬을 쓰러뜨리세요.",
    "en": "Progress the Amon clan substories and defeat the final Amon."
  },
  "steps": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154",
  "tips": []
};

const majimaSaga: CuratedGuide = {
  "summary": {
    "ko": "마지마 고로의 진실을 전부 클리어하세요.",
    "en": "Complete the Majima Saga."
  },
  "steps": [
    {
      "ko": "키류 본편 진행으로 해금되는 별도 시나리오를 메인 메뉴에서 선택하세요.",
      "en": "Select the separate scenario from the main menu as its chapters unlock through Kiryu's story."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154",
  "tips": []
};

const popularScout: CuratedGuide = {
  "summary": {
    "ko": "재적 중인 캬바걸이 30명이 되었다",
    "en": "Registered 30 hostesses."
  },
  "steps": [
    {
      "ko": "영업 메뉴의 스카우트, 서브스토리 보상, 리그 진행을 통해 캐스트를 모으세요.",
      "en": "Recruit through the club's scouting menu, substories, and league progression."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154",
  "tips": []
};

export const YAKUZA_KIWAMI_2_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_KIWAMI_2_APP_ID}:lexus2_platinum`]: platinum,
  [`${YAKUZA_KIWAMI_2_APP_ID}:lexus2_legend_clear`]: legendK2,
  [`${YAKUZA_KIWAMI_2_APP_ID}:lexus2_tasseimkokuroku_all_clear`]: completionK2,
  [`${YAKUZA_KIWAMI_2_APP_ID}:lexus2_cabaret_island_gp_all_clear`]: cabaretGPK2,
  [`${YAKUZA_KIWAMI_2_APP_ID}:lexus2_cabaret_island_scout`]: popularScout,
  [`${YAKUZA_KIWAMI_2_APP_ID}:lexus2_clan_creater_clear`]: clanCreatorK2,
  [`${YAKUZA_KIWAMI_2_APP_ID}:lexus2_majima_story_all_clear`]: majimaSaga,
  [`${YAKUZA_KIWAMI_2_APP_ID}:lexus2_amon_gekiha`]: amonK2,
  "3717340:lexus2_story_all_clear": {
    "summary": {
      "ko": "제16장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 16. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear1": {
    "summary": {
      "ko": "제1장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 1. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear10": {
    "summary": {
      "ko": "제10장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 10. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear11": {
    "summary": {
      "ko": "제11장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 11. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear12": {
    "summary": {
      "ko": "제12장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 12. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear13": {
    "summary": {
      "ko": "제13장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 13. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear14": {
    "summary": {
      "ko": "제14장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 14. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear15": {
    "summary": {
      "ko": "제15장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 15. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear2": {
    "summary": {
      "ko": "제2장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 2. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear3": {
    "summary": {
      "ko": "제3장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 3. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear4": {
    "summary": {
      "ko": "제4장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 4. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear5": {
    "summary": {
      "ko": "제5장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 5. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear6": {
    "summary": {
      "ko": "제6장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 6. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear7": {
    "summary": {
      "ko": "제7장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 7. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear8": {
    "summary": {
      "ko": "제8장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 8. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
  "3717340:lexus2_story_clear9": {
    "summary": {
      "ko": "제9장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 9. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"
  },
};
