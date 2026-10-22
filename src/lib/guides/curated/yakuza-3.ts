import type { CuratedGuide } from "./index";

const YAKUZA_3_APP_ID = 1088710;

const walkingBank: CuratedGuide = {
  "summary": {
    "ko": "소지금이 1000만 엔을 넘었다.",
    "en": "Accumulate 10,000,000 yen."
  },
  "steps": [
    {
      "ko": "도박 경품 등을 팔아 자금을 확보하세요. 조건 금액은 9,999,999엔이 아니라 10,000,000엔입니다.",
      "en": "Sell items such as gambling prizes to raise funds. The threshold is 10,000,000 yen, not 9,999,999."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
};

const perfectSubstory: CuratedGuide = {
  "summary": {
    "ko": "모든 서브 스토리를 클리어했다.",
    "en": "Complete all substories."
  },
  "steps": [
    {
      "ko": "서브스토리 목록 119개를 모두 완료하세요. 미완료 항목은 클리어 후 모드에서 정리할 수 있습니다.",
      "en": "Complete all 119 substories. Outstanding entries can be finished after the story."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
};

const platinum: CuratedGuide = {
  "summary": {
    "ko": "다른 모든 업적을 달성하세요.",
    "en": "Unlock every other achievement."
  },
  "steps": [],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
};

const minigameMaster: CuratedGuide = {
  "summary": {
    "ko": "미니 게임을 전부 컴플리트했다.",
    "en": "Complete all minigames."
  },
  "steps": [
    {
      "ko": "완료 목록의 미니게임별 기준을 채우세요. 한 번 플레이하는 것만으로는 달성되지 않습니다.",
      "en": "Meet each minigame's Completion List requirements; merely playing once is insufficient."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
};

const exHardClear: CuratedGuide = {
  "summary": {
    "ko": "클리어 후 모드의 난이도「EX-HARD」를 클리어했다.",
    "en": "Beat the game on Legend difficulty."
  },
  "steps": [
    {
      "ko": "클리어 데이터를 이용해 Legend 난이도를 진행하세요.",
      "en": "Use clear data to complete a Legend playthrough."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103",
  "tips": []
};

const coliseumChampion: CuratedGuide = {
  "summary": {
    "ko": "투기장의 모든 토너먼트에서 우승했다.",
    "en": "Claim victory in all Coliseum tournaments."
  },
  "steps": [
    {
      "ko": "새 대회의 해금에 반복 우승이 필요하므로 대회별 우승 횟수를 확인하세요.",
      "en": "Track wins per tournament, as later tournaments require repeat victories to unlock."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103",
  "tips": []
};

const hitmanHunter: CuratedGuide = {
  "summary": {
    "ko": "히트맨을 전부 잡았다.",
    "en": "Apprehend all hitmen."
  },
  "steps": [
    {
      "ko": "6장에서 만나는 이부키의 의뢰와 류큐 장기소에서 받는 의뢰를 모두 확인하세요.",
      "en": "Complete Ibuki's requests introduced in Chapter 6 and the requests at the Ryukyu shogi parlour."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103",
  "tips": []
};

const gourmetMaster: CuratedGuide = {
  "summary": {
    "ko": "모든 음식점에서 가장 비싼 메뉴를 주문했다.",
    "en": "Order the most expensive item in all restaurants."
  },
  "steps": [
    {
      "ko": "두 도시의 음식점별 최고가 메뉴를 주문하세요. 가격이 공동 1위인 메뉴도 확인하세요.",
      "en": "Order each restaurant's highest-priced dishes in both cities, checking for tied prices."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103",
  "tips": []
};

const sub80: CuratedGuide = {
  "summary": {
    "ko": "80개의 서브 스토리를 클리어했다.",
    "en": "Complete 80 substories."
  },
  "steps": [
    {
      "ko": "119개 서브스토리 중 80개를 완료하세요. 80번 서브스토리를 뜻하는 조건이 아닙니다.",
      "en": "Complete 80 of the 119 substories; this does not mean substory number 80."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103",
  "tips": []
};

export const YAKUZA_3_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_3_APP_ID}:achievement_0`]: platinum,
  [`${YAKUZA_3_APP_ID}:achievement_15`]: sub80,
  [`${YAKUZA_3_APP_ID}:achievement_16`]: perfectSubstory,
  [`${YAKUZA_3_APP_ID}:achievement_17`]: hitmanHunter,
  [`${YAKUZA_3_APP_ID}:achievement_21`]: gourmetMaster,
  [`${YAKUZA_3_APP_ID}:achievement_23`]: coliseumChampion,
  [`${YAKUZA_3_APP_ID}:achievement_40`]: minigameMaster,
  [`${YAKUZA_3_APP_ID}:achievement_42`]: exHardClear,
  [`${YAKUZA_3_APP_ID}:achievement_47`]: walkingBank,
  "1088710:achievement_1": {
    "summary": {
      "ko": "제1장 스토리 전투에서 마지마를 쓰러뜨립니다.",
      "en": "Defeat Majima in the Chapter 1 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_2": {
    "summary": {
      "ko": "제2장 스토리 전투에서 리키야를 쓰러뜨립니다.",
      "en": "Defeat Rikiya in the Chapter 2 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_3": {
    "summary": {
      "ko": "제3장 스토리 전투에서 타마시로를 쓰러뜨립니다.",
      "en": "Defeat Tamashiro in the Chapter 3 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_4": {
    "summary": {
      "ko": "제4장 스토리 전투에서 하세베를 쓰러뜨립니다.",
      "en": "Defeat Hasebe in the Chapter 4 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_5": {
    "summary": {
      "ko": "제5장 스토리 전투에서 검은 옷의 남자를 쓰러뜨립니다.",
      "en": "Defeat the man in black in the Chapter 5 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_6": {
    "summary": {
      "ko": "제6장 스토리 전투에서 칸다를 쓰러뜨립니다.",
      "en": "Defeat Kanda in the Chapter 6 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_7": {
    "summary": {
      "ko": "제7장 스토리 전투에서 마지마를 쓰러뜨립니다.",
      "en": "Defeat Majima in the Chapter 7 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_8": {
    "summary": {
      "ko": "제8장 스토리 전투에서 라우 카 롱를 쓰러뜨립니다.",
      "en": "Defeat Lau Ka Long in the Chapter 8 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_9": {
    "summary": {
      "ko": "제10장 스토리 전투에서 카자마 죠지를 쓰러뜨립니다.",
      "en": "Defeat Joji Kazama in the Chapter 10 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_10": {
    "summary": {
      "ko": "제12장 스토리 전투에서 미네를 쓰러뜨립니다.",
      "en": "Defeat Mine in the Chapter 12 story battle."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_11": {
    "summary": {
      "ko": "메인 스토리를 완료하고 엔딩을 봅니다.",
      "en": "Complete the main story and reach the ending."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_44": {
    "summary": {
      "ko": "거리를 달리며 보행자를 누적 100명 넘어뜨립니다.",
      "en": "Knock over 100 pedestrians while running through the streets."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_45": {
    "summary": {
      "ko": "1인칭 시점으로 적을 바라봐 거리 전투를 3회 시작합니다.",
      "en": "Trigger three street fights by looking at enemies in first-person mode."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
  "1088710:achievement_46": {
    "summary": {
      "ko": "전투 중 주운 무기를 사용해 누적 30개 부숩니다.",
      "en": "Use and break 30 picked-up weapons during combat."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"
  },
};
