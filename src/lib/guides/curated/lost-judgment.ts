import type { CuratedGuide } from "./index";

const LJ_APP_ID = 2058190;

const platinum: CuratedGuide = {
  "summary": {
    "ko": "모든 업적을 달성했다.",
    "en": "Obtained all achievements."
  },
  "steps": [
    {
      "ko": "다른 모든 업적을 달성하세요. 본편 사이드 케이스는 42개이며 DLC 케이스는 별도로 구분됩니다.",
      "en": "Unlock every other achievement. The base game has 42 side cases; DLC cases are a separate group."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
};

const townGoMaster: CuratedGuide = {
  "summary": {
    "ko": "TownGo의 컴플리트 토털 100%를 달성했다",
    "en": "Achieved 100% completion of TownGo. Wow!"
  },
  "steps": [
    {
      "ko": "상점·거리·청춘 미션과 사이드 케이스·능력을 완료하세요. 새 회차에서 사이드 케이스 진행은 초기화됩니다.",
      "en": "Complete Shop, City, and School Missions, side cases, and skills. Side-case progress resets in New Game+."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  "tips": []
};

const mostDifficultLJ: CuratedGuide = {
  "summary": {
    "ko": "최고 난이도로 메인 스토리를 클리어했다",
    "en": "Beat the main story on the highest difficulty."
  },
  "steps": [
    {
      "ko": "본편 클리어 후 Legend를 해금하고 승계 회차를 완료하세요.",
      "en": "Clear the story to unlock Legend, then complete a New Game+ playthrough."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  "tips": []
};

const allEquipLJ: CuratedGuide = {
  missable: false,
  "summary": {
    "ko": "모든 장비를 획득했다",
    "en": "Obtained all equipment."
  },
  "steps": [
    {
      "ko": "장비 메뉴에서 착용할 수 있는 아이템을 모두 모으세요. 의상 수집과는 다릅니다.",
      "en": "Collect every item equipable in the Gear menu; this is not a clothing collection objective."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  "tips": []
};

const allArcadeLJ: CuratedGuide = {
  "summary": {
    "ko": "모든 아케이드 게임을 플레이했다",
    "en": "Played every arcade game."
  },
  "steps": [
    {
      "ko": "이진쵸의 사사키 게임장도 확인하세요. 같은 게임이 여러 지점에 있으면 한 지점에서 플레이하면 됩니다.",
      "en": "Include Sasaki Arcade in Ijincho. Duplicated games only need to be played at one location."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  "tips": []
};

const droneRaceMaster: CuratedGuide = {
  "summary": {
    "ko": "모든 드론 리그의 그랑프리에서 우승했다.",
    "en": "Won first place in every Grand Prix drone race."
  },
  "steps": [
    {
      "ko": "드론 레이스 접수처에서 부품을 개발하고 모든 그랑프리 우승 기록을 채우세요.",
      "en": "Develop parts at the drone-race reception and win every Grand Prix."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
};

const allRecordsLJ: CuratedGuide = {
  "summary": {
    "ko": "모든 레코드를 획득했다",
    "en": "Obtained all records."
  },
  "steps": [
    {
      "ko": "본편 클리어 보상 레코드도 포함되므로 엔딩 후 목록을 확인하세요.",
      "en": "Include the record awarded for finishing the story, then check the remaining collection."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  "tips": []
};

const allVrBoard: CuratedGuide = {
  "summary": {
    "ko": "모든 VR쌍륙의 스테이지에서 승리했다",
    "en": "Clear all of the stages in Dice & Cube."
  },
  "steps": [
    {
      "ko": "숏·미들·롱 코스의 일반·도전 버전, 총 6코스를 클리어하세요.",
      "en": "Clear Normal and Challenge versions of Short, Middle, and Long courses, six in total."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
};

export const LOST_JUDGMENT_CURATED: Record<string, CuratedGuide> = {
  [`${LJ_APP_ID}:coyote_platinum`]: platinum,
  [`${LJ_APP_ID}:coyote_town_act_all_complete`]: townGoMaster,
  [`${LJ_APP_ID}:coyote_most_difficult_clear`]: mostDifficultLJ,
  [`${LJ_APP_ID}:coyote_get_all_equip`]: allEquipLJ,
  [`${LJ_APP_ID}:coyote_all_arcade_game_played`]: allArcadeLJ,
  [`${LJ_APP_ID}:coyote_drone_league_all_clear`]: droneRaceMaster,
  [`${LJ_APP_ID}:coyote_get_all_record`]: allRecordsLJ,
  [`${LJ_APP_ID}:coyote_all_daiq_stage_win`]: allVrBoard,
  "2058190:coyote_get_skate_board": {
    "summary": {
      "ko": "1장 스토리에서 스기우라에게 스케이트보드를 받으세요.",
      "en": "Receive the skateboard from Sugiura during Chapter 1."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_professor_clear": {
    "summary": {
      "ko": "청춘 드라마의 모든 활동을 진행하고 프로페서 조사를 마치세요.",
      "en": "Finish every School Stories investigation and resolve the Professor case."
    },
    "steps": [
      {
        "ko": "주요 네 활동뿐 아니라 사진부·스케이트보드·e스포츠부·카지노·걸즈 바도 진행해야 합니다.",
        "en": "Complete Photography, Skateboarding, eSports, Casino, and Girls’ Bar as well as the four major activities."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_surrender": {
    "summary": {
      "ko": "류 스타일의 EX 항복 액션으로 적을 항복시키세요.",
      "en": "Make an enemy surrender using Snake style’s EX Surrender action."
    },
    "steps": [
      {
        "ko": "적이 겁먹었을 때 EX 액션 표시를 확인해 발동하세요. 체력만 깎고 기다리는 행동은 조건을 충족하지 않습니다.",
        "en": "Trigger the EX action when a frightened enemy allows it; simply lowering health and waiting is insufficient."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_skill_all": {
    "summary": {
      "ko": "스킬을 모두 해금하고 SP로 습득하세요.",
      "en": "Unlock and purchase all skills with SP."
    },
    "steps": [
      {
        "ko": "스토리 중 놓친 스킬북은 대체 상점에서 구할 수 있습니다. 스킬 메뉴에서 선행 스킬과 책의 조건을 확인하세요.",
        "en": "Missed story skill books have alternative vendors. Check prerequisite skills and books in the Skills menu."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_side_case_all": {
    "summary": {
      "ko": "DLC를 제외한 본편 사이드 케이스 42건을 완료하세요.",
      "en": "Complete all 42 base-game Side Cases, excluding DLC."
    },
    "steps": [
      {
        "ko": "스토리 클리어 후 프리미엄 어드벤처에서 남은 케이스를 해결할 수 있습니다.",
        "en": "Remaining cases can be completed in Premium Adventure after the story."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_use_dog": {
    "summary": {
      "ko": "탐지견으로 대상 10개를 찾으세요.",
      "en": "Find ten targets with the Detective Dog."
    },
    "steps": [
      {
        "ko": "4장에 탐지견을 이용할 수 있게 되면 산책하며 발견한 물건을 회수하세요.",
        "en": "Once the dog becomes available in Chapter 4, follow him and collect the items he locates."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_town_act_complete_a": {
    "summary": {
      "ko": "TownGo 시티 미션 20개를 달성하세요.",
      "en": "Complete 20 TownGo City Missions."
    },
    "steps": [
      {
        "ko": "이동 거리·획득 금액·전투 같은 누적 목표를 앱에서 확인하세요.",
        "en": "Check the app for cumulative movement, money, and combat objectives."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_town_act_seishun_a": {
    "summary": {
      "ko": "TownGo 스쿨 미션을 10개 달성하세요.",
      "en": "Complete ten TownGo School Missions."
    },
    "steps": [
      {
        "ko": "청춘 드라마의 각 활동에 연결된 달성 목록입니다. 조사 완료 외에 미니게임을 반복해야 하는 목표도 있습니다.",
        "en": "These are activity-specific School Stories goals; some require additional minigame play beyond completing the investigation."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_town_act_seishun_b": {
    "summary": {
      "ko": "TownGo 스쿨 미션을 모두 달성하세요.",
      "en": "Complete all TownGo School Missions."
    },
    "steps": [
      {
        "ko": "청춘 드라마의 각 활동에 연결된 달성 목록입니다. 조사 완료 외에 미니게임을 반복해야 하는 목표도 있습니다.",
        "en": "These are activity-specific School Stories goals; some require additional minigame play beyond completing the investigation."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_girl_frend_a": {
    "summary": {
      "ko": "여자친구 후보 1명에게 고백받으세요.",
      "en": "Be asked out by 1 girlfriend candidate."
    },
    "steps": [
      {
        "ko": "에밀리는 걸즈 바 조사 이후 진행합니다. 미나토·츠키노·쿄코는 추가 여자친구 콘텐츠이며, 각각의 의뢰와 데이트를 진행하세요.",
        "en": "Emily follows the Girls’ Bar investigation. Minato, Tsukino, and Kyoko belong to the additional girlfriend content; follow each candidate’s cases and dates."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.trueachievements.com/a340163/such-a-flirt-achievement"
  },
  "2058190:coyote_girl_friend_b": {
    "summary": {
      "ko": "여자친구 후보 2명에게 고백받으세요.",
      "en": "Be asked out by 2 girlfriend candidates."
    },
    "steps": [
      {
        "ko": "에밀리는 걸즈 바 조사 이후 진행합니다. 미나토·츠키노·쿄코는 추가 여자친구 콘텐츠이며, 각각의 의뢰와 데이트를 진행하세요.",
        "en": "Emily follows the Girls’ Bar investigation. Minato, Tsukino, and Kyoko belong to the additional girlfriend content; follow each candidate’s cases and dates."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.trueachievements.com/a340163/such-a-flirt-achievement"
  },
  "2058190:coyote_girl_friend_c": {
    "summary": {
      "ko": "여자친구 후보 3명에게 고백받으세요.",
      "en": "Be asked out by 3 girlfriend candidates."
    },
    "steps": [
      {
        "ko": "에밀리는 걸즈 바 조사 이후 진행합니다. 미나토·츠키노·쿄코는 추가 여자친구 콘텐츠이며, 각각의 의뢰와 데이트를 진행하세요.",
        "en": "Emily follows the Girls’ Bar investigation. Minato, Tsukino, and Kyoko belong to the additional girlfriend content; follow each candidate’s cases and dates."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.trueachievements.com/a340163/such-a-flirt-achievement"
  },
  "2058190:coyote_girl_friend_d": {
    "summary": {
      "ko": "여자친구 후보 4명에게 고백받으세요.",
      "en": "Be asked out by 4 girlfriend candidates."
    },
    "steps": [
      {
        "ko": "에밀리는 걸즈 바 조사 이후 진행합니다. 미나토·츠키노·쿄코는 추가 여자친구 콘텐츠이며, 각각의 의뢰와 데이트를 진행하세요.",
        "en": "Emily follows the Girls’ Bar investigation. Minato, Tsukino, and Kyoko belong to the additional girlfriend content; follow each candidate’s cases and dates."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.trueachievements.com/a340163/such-a-flirt-achievement"
  },
  "2058190:coyote_skate_board_last_race_1st": {
    "summary": {
      "ko": "스케이트보드 레이스 최종 코스에서 1위를 하세요.",
      "en": "Win the final skateboard race course."
    },
    "steps": [
      {
        "ko": "성능이 좋은 보드를 장비하고 코스의 점프와 가속 아이템을 활용하세요.",
        "en": "Equip a strong board and use the course’s jumps and boost pickups."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_airserious_last_stage_clear": {
    "summary": {
      "ko": "에어셀리오스 최종 스테이지를 클리어하세요.",
      "en": "Clear the final Aircelios stage."
    },
    "steps": [
      {
        "ko": "이진쵸 게임 센터 사사키에서 플레이하는 슈팅 게임입니다.",
        "en": "Play this shooter at Sasaki Arcade in Ijincho."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_kaito_story_cleaer_1": {
    "summary": {
      "ko": "카이토 마사하루의 사건부 제1장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 1 of The Kaito Files. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.playstationtrophies.org/game/lost-judgment/trophies/"
  },
  "2058190:coyote_kaito_story_cleaer_2": {
    "summary": {
      "ko": "카이토 마사하루의 사건부 제2장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 2 of The Kaito Files. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.playstationtrophies.org/game/lost-judgment/trophies/"
  },
  "2058190:coyote_kaito_story_cleaer_3": {
    "summary": {
      "ko": "카이토 마사하루의 사건부 제3장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 3 of The Kaito Files. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.playstationtrophies.org/game/lost-judgment/trophies/"
  },
  "2058190:coyote_kaito_story_cleaer_4": {
    "summary": {
      "ko": "카이토 마사하루의 사건부 제4장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 4 of The Kaito Files. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.playstationtrophies.org/game/lost-judgment/trophies/"
  },
  "2058190:coyote_animal_paint_clear": {
    "summary": {
      "ko": "다람쥐 그림을 모두 조사하고 관련 수색을 완료합니다.",
      "en": "Complete all of Squirrel Search."
    },
    "steps": [
      {
        "ko": "제4장에서 다람쥐 관련 사이드 케이스를 진행한 뒤 그림의 동작에 맞는 탐정 도구로 아이템을 찾습니다.",
        "en": "Start the squirrel-related side case in Chapter 4, then use the detective tool indicated by each squirrel drawing to locate its item."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_side_case_returns": {
    "summary": {
      "ko": "본편의 마지막 의뢰에서 아몬을 쓰러뜨립니다.",
      "en": "Defeat Amon in the final base-game side case."
    },
    "steps": [
      {
        "ko": "다른 본편 사이드 케이스 41개를 완료한 뒤 요코하마99 게시판의 마지막 의뢰를 받습니다.",
        "en": "Complete the other 41 base-game side cases, then take the final request from the Yokohama 99 board."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/"
  },
  "2058190:coyote_kaito_defeated_last_boss": {
    "summary": {
      "ko": "카이토 마사하루의 사건부에서 가면을 쓴 전사를 모두 쓰러뜨립니다.",
      "en": "Defeat all masked warriors in The Kaito Files."
    },
    "steps": [
      {
        "ko": "최종 목적지로 출발하기 전에 별도 저장을 남기고 가면 전사와 스킬 수집을 마칩니다. 이 추가 시나리오에는 본편 같은 클리어 후 자유 탐색이 없습니다.",
        "en": "Keep a separate save before leaving for the final destination and finish the masked-warrior and skill requirements. This add-on has no post-story free roam like the base game."
      }
    ],
    "tips": [],
    "missable": true,
    "sourceUrl": "https://www.trueachievements.com/game/Lost-Judgment/walkthrough/9"
  },
};
