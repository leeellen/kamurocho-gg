import type { CuratedGuide } from "./index";

const YAKUZA_5_APP_ID = 1105510;

const hallOfFamer: CuratedGuide = {
  "summary": {
    "ko": "총 컴플리트가 100%가 되었다",
    "en": "Achieve 100% on your Completion List."
  },
  "steps": [
    {
      "ko": "완료 목록의 모든 항목을 채우세요. 하루카의 활동과 제작 재료도 확인하세요.",
      "en": "Complete every list entry, including Haruka's activities and crafting requirements."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
};

const bigHitter: CuratedGuide = {
  "summary": {
    "ko": "시나다의 야구 관련 서브 미션을 10개 완료하세요.",
    "en": "Complete ten of Shinada's baseball sub-missions."
  },
  "steps": [],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
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
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
};

const legendY5: CuratedGuide = {
  "summary": {
    "ko": "Legend 난이도로 본편을 클리어하세요.",
    "en": "Complete the story on Legend difficulty."
  },
  "steps": [
    {
      "ko": "승계할 클리어 데이터는 본편 클리어 시점에 준비하세요. 프리미엄 어드벤처에서는 클리어 데이터를 새로 만들 수 없습니다.",
      "en": "Prepare carryover data at story completion; Premium Adventure cannot create new clear data in Yakuza 5."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389",
  "tips": []
};

const subAmonY5: CuratedGuide = {
  "summary": {
    "ko": "아몬을 격파했다",
    "en": "Defeat Amon."
  },
  "steps": [
    {
      "ko": "서브스토리 78개를 완료한 뒤 아몬 일족전을 진행하세요.",
      "en": "Complete the 78 substories, then progress the Amon clan fights."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389",
  "tips": []
};

const mrClimaxY5: CuratedGuide = {
  "summary": {
    "ko": "키류, 사에지마, 아키야마, 시나다의 클라이맥스 히트를 전 종류 구사했다",
    "en": "Trigger all Climax Heat variations for Kiryu, Saejima, Akiyama, and Shinada."
  },
  "steps": [
    {
      "ko": "능력 화면의 절기 조건을 확인하고 전투 중 각 기술을 실제로 발동하세요.",
      "en": "Check each Climax Heat ability's conditions, then activate every variation in combat."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389",
  "tips": []
};

const allMinigamesY5: CuratedGuide = {
  "summary": {
    "ko": "모든 미니 게임을 플레이했다(SPECIAL CONTENTS 제외)",
    "en": "Play all minigames (excluding special contents)."
  },
  "steps": [
    {
      "ko": "완료 목록의 일반 미니게임을 확인하세요. 택시·수렵·아이돌·야구의 어나더 드라마는 이 조건에서 제외됩니다.",
      "en": "Check the regular minigames on the Completion List. The taxi, hunting, idol, and baseball side stories are excluded from this condition."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
};

const noEasyWayOut: CuratedGuide = {
  "missable": true,
  "summary": {
    "ko": "NORMAL 모드에서 난이도를 EASY로 한 번도 낮추지 않고 클리어했다",
    "en": "Clear Normal Mode without changing difficulty to Easy."
  },
  "steps": [
    {
      "ko": "Normal로 시작하고 Easy로 낮추지 않은 채 본편을 클리어하세요.",
      "en": "Start on Normal and complete the story without dropping to Easy."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
};

export const YAKUZA_5_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_5_APP_ID}:achievement_10`]: noEasyWayOut,
  [`${YAKUZA_5_APP_ID}:achievement_0`]: platinum,
  [`${YAKUZA_5_APP_ID}:achievement_8`]: legendY5,
  [`${YAKUZA_5_APP_ID}:achievement_19`]: bigHitter,
  [`${YAKUZA_5_APP_ID}:achievement_20`]: hallOfFamer,
  [`${YAKUZA_5_APP_ID}:achievement_24`]: subAmonY5,
  [`${YAKUZA_5_APP_ID}:achievement_37`]: mrClimaxY5,
  [`${YAKUZA_5_APP_ID}:achievement_42`]: allMinigamesY5,
  "1105510:achievement_1": {
    "summary": {
      "ko": "키류의 초반 스토리를 진행해 나가스가이에 도착하세요.",
      "en": "Reach Nagasugai during Kiryu’s opening story."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_11": {
    "summary": {
      "ko": "키류의 택시 레이스 스토리에서 데빌 킬러의 리더를 이기세요.",
      "en": "Defeat the Devil Killers leader in Kiryu’s taxi-racing story."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_12": {
    "summary": {
      "ko": "키류의 택시 운전 미션 10개를 완료하세요.",
      "en": "Complete ten taxi driving missions as Kiryu."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_14": {
    "summary": {
      "ko": "사에지마의 사냥 의뢰 5개를 완료하세요.",
      "en": "Complete five hunting missions as Saejima."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_15": {
    "summary": {
      "ko": "하루카의 어나더 드라마에서 모든 종류의 일을 경험하세요.",
      "en": "Try every job type in Haruka’s Side Story."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_17": {
    "summary": {
      "ko": "댄스 배틀 서밋에서 아카리와의 승부를 마무리하세요.",
      "en": "Settle the rivalry with Akari at the Dance Battle Summit."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_18": {
    "summary": {
      "ko": "시나다의 어나더 드라마에서 시라카와와의 최종 승부를 이기세요.",
      "en": "Win the final showdown with Shirakawa in Shinada’s Side Story."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_29": {
    "summary": {
      "ko": "캬바클럽의 최종 이벤트를 완료하세요.",
      "en": "Complete the final hostess-club event."
    },
    "steps": [
      {
        "ko": "각 도시의 캬바걸 공략과 엘리제 영입을 마치고 히나타의 마지막 이벤트까지 진행한 뒤 아키야마로 확인하세요.",
        "en": "Complete the hostess routes and Elise recruitment, finish Hinata’s final event, then return as Akiyama."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_54": {
    "summary": {
      "ko": "Tips가 표시됐을 때 추가 설명을 열어 보세요.",
      "en": "Open the extra information when a tip appears."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_55": {
    "summary": {
      "ko": "거리에서 일반 차량에 부딪히세요.",
      "en": "Get hit by a regular car in the street."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_9": {
    "summary": {
      "ko": "궁극 투기의 모든 과제를 완료하세요.",
      "en": "Complete all Ultimate Matches."
    },
    "steps": [
      {
        "ko": "스토리 클리어 후 메인 메뉴에서 도전하세요. 과제마다 정해진 조건으로 싸우는 모드입니다.",
        "en": "Enter from the main menu after clearing the story; each challenge supplies its own conditions."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_25": {
    "summary": {
      "ko": "모든 음식점에서 음식을 주문하세요.",
      "en": "Order food at every eatery."
    },
    "steps": [
      {
        "ko": "카무로쵸·나가스가이·츠키미노·소텐보리·킨에이쵸의 목록을 확인하세요.",
        "en": "Check the lists for Kamurocho, Nagasugai, Tsukimino, Sotenbori, and Kineicho."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_32": {
    "summary": {
      "ko": "빅토리 로드 이벤트를 처음 완료하세요.",
      "en": "Complete your first Victory Road event."
    },
    "steps": [
      {
        "ko": "도시의 격투 대회 관련 이벤트를 진행하세요. 시나다의 야구 어나더 드라마와는 별도입니다.",
        "en": "Follow the city fighting-tournament events, separate from Shinada’s baseball story."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_34": {
    "summary": {
      "ko": "카미야마 워크스의 레벨을 5까지 올리세요.",
      "en": "Raise Kamiyama Works to level 5."
    },
    "steps": [
      {
        "ko": "상점의 투자 메뉴를 이용하세요. 단순히 개조 횟수만 늘리는 조건이 아닙니다.",
        "en": "Use the shop’s investment option; modification count alone does not raise the level."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_50": {
    "summary": {
      "ko": "코친 컵 클래식에서 처음 우승하세요.",
      "en": "Win the Cochin Cup Classic for the first time."
    },
    "steps": [
      {
        "ko": "킨에이쵸의 닭 경주 콘텐츠에서 닭을 육성하고 대회에 출전하세요.",
        "en": "Train your racing chicken in Kineicho and enter the competition."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_38": {
    "summary": {
      "ko": "키류의 Dragon Spirit로 적 50명을 쓰러뜨리세요.",
      "en": "Defeat 50 enemies with Dragon Spirit."
    },
    "steps": [
      {
        "ko": "캐릭터별 특수 기술의 조작을 확인하고 해당 기술로 마무리하세요. 클라이맥스 히트와 별도 조건입니다.",
        "en": "Check the character’s special-move controls and finish enemies with that move; Climax Heat is a separate mechanic."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_39": {
    "summary": {
      "ko": "사에지마의 Tiger Puppetry로 적 50명을 쓰러뜨리세요.",
      "en": "Defeat 50 enemies with Tiger Puppetry."
    },
    "steps": [
      {
        "ko": "캐릭터별 특수 기술의 조작을 확인하고 해당 기술로 마무리하세요. 클라이맥스 히트와 별도 조건입니다.",
        "en": "Check the character’s special-move controls and finish enemies with that move; Climax Heat is a separate mechanic."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_40": {
    "summary": {
      "ko": "아키야마의 Launch Strike로 적 50명을 쓰러뜨리세요.",
      "en": "Defeat 50 enemies with Launch Strike."
    },
    "steps": [
      {
        "ko": "캐릭터별 특수 기술의 조작을 확인하고 해당 기술로 마무리하세요. 클라이맥스 히트와 별도 조건입니다.",
        "en": "Check the character’s special-move controls and finish enemies with that move; Climax Heat is a separate mechanic."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_41": {
    "summary": {
      "ko": "시나다의 My Meteor Tackle로 적 50명을 쓰러뜨리세요.",
      "en": "Defeat 50 enemies with My Meteor Tackle."
    },
    "steps": [
      {
        "ko": "캐릭터별 특수 기술의 조작을 확인하고 해당 기술로 마무리하세요. 클라이맥스 히트와 별도 조건입니다.",
        "en": "Check the character’s special-move controls and finish enemies with that move; Climax Heat is a separate mechanic."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_2": {
    "summary": {
      "ko": "키류의 제1부를 완료합니다.",
      "en": "Complete Part 1, Kiryu’s story."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_3": {
    "summary": {
      "ko": "사에지마의 제2부를 완료합니다.",
      "en": "Complete Part 2, Saejima’s story."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_4": {
    "summary": {
      "ko": "제3부에서 아키야마와 하루카가 재회하는 시점까지 스토리를 진행합니다.",
      "en": "Progress through Part 3 until Akiyama and Haruka reunite."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_5": {
    "summary": {
      "ko": "하루카와 아키야마의 제3부를 완료합니다.",
      "en": "Complete Part 3, Haruka and Akiyama’s story."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_6": {
    "summary": {
      "ko": "시나다의 제4부를 완료합니다.",
      "en": "Complete Part 4, Shinada’s story."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_7": {
    "summary": {
      "ko": "최종부를 완료하고 엔딩을 봅니다.",
      "en": "Complete the finale and reach the ending."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_13": {
    "summary": {
      "ko": "사에지마의 사냥 스토리를 진행해 야마오로시를 쓰러뜨립니다.",
      "en": "Defeat Yama-oroshi through Saejima’s hunting storyline."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"
  },
  "1105510:achievement_16": {
    "summary": {
      "ko": "프린세스 리그 결승에서 T-SET에게 승리합니다.",
      "en": "Defeat T-Set in the Princess League Finals."
    },
    "steps": [
      {
        "ko": "결승 전에 별도 저장을 남기고 중도 포기하지 않습니다. 패배해도 스토리가 진행되므로 승리하지 못했다면 저장을 불러와 재도전합니다.",
        "en": "Keep a separate save before the final and do not withdraw. The story can continue after losing, so reload that save if you fail to win."
      }
    ],
    "tips": [],
    "missable": true,
    "sourceUrl": "https://www.playstationtrophies.org/game/yakuza-5/trophy/58492-you-re-the-princess.html"
  },
};
