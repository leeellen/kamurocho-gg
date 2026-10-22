import type { CuratedGuide } from "./index";

const JUDGMENT_APP_ID = 2058180;

const cats: CuratedGuide = {
  "summary": {
    "ko": "메인 스토리의 서치 모드로 모든 길고양이를 발견했다.",
    "en": "Found all the stray cats while in search mode during the main story."
  },
  "steps": [
    {
      "ko": "한 회차의 본편 조사에서 고양이 14마리를 모두 관찰하세요. 사이드 케이스의 고양이는 이 업적의 대상이 아닙니다.",
      "en": "Inspect all 14 main-story search cats in one playthrough. Side-case cats do not count toward this achievement."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
};

const artOfConversation: CuratedGuide = {
  "summary": {
    "ko": "7장 사오리의 접객 장면에서 올바르게 응대하세요.",
    "en": "Choose the correct responses during Saori's hostess sequence in Chapter 7."
  },
  "steps": [
    {
      "ko": "미용실 입장 전에 저장하세요. 사오리로 진행하는 장면이며 야가미의 여장 잠입이 아닙니다.",
      "en": "Save before entering the hair salon. You control Saori in this sequence, not Yagami in disguise."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
};

const illMakeItDouble: CuratedGuide = {
  "summary": {
    "ko": "2장 라망에서 플레이를 끝내기 전에 칩을 300개 더 따세요.",
    "en": "Earn 300 additional chips at L'Amant during the Chapter 2 story visit."
  },
  "steps": [
    {
      "ko": "첫 회차에는 300개에서 600개가 목표입니다. 승계 회차에도 추가 300개가 필요합니다.",
      "en": "The first playthrough starts at 300, so the target is 600. NG+ still requires earning an additional 300."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
};

const wayTooThorough: CuratedGuide = {
  "summary": {
    "ko": "5장 회상 장면에서 테라사와의 관찰 지점 3곳을 모두 조사하세요.",
    "en": "Inspect all three observation points on Terasawa during Chapter 5's flashback."
  },
  "steps": [],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
};

const professionalPasswordPresenter: CuratedGuide = {
  "summary": {
    "ko": "8장 도박장 암호를 첫 시도에 맞히세요.",
    "en": "Give the correct gambling-hall password on the first attempt in Chapter 8."
  },
  "steps": [
    {
      "ko": "원문의 순서는 Three Times → Can I talk to Moon → Chateaubriand, Blue입니다. 번역한 문구를 정발판 선택지로 단정하지 말고 게임의 한국어 선택지를 확인하세요.",
      "en": "The source sequence is Three Times → Can I talk to Moon → Chateaubriand, Blue. Match these to the options shown in your game."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
};

const hungJury: CuratedGuide = {
  "summary": {
    "ko": "12장 스기우라 구출전에서 남은 시간이 10초 이하일 때 적을 모두 쓰러뜨리세요.",
    "en": "Defeat the remaining enemies with ten seconds or less left in Chapter 12's Sugiura rescue."
  },
  "steps": [],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
};

const theFinalNail: CuratedGuide = {
  "summary": {
    "ko": "최종장 재판에서 첫 시도에 올바른 증거를 제시하세요.",
    "en": "Present the correct evidence on the first attempt in the finale trial."
  },
  "steps": [
    {
      "ko": "'Hamura and Ichinose’s Missing Link'에 해당하는 증거를 선택하세요. 한국어 선택지 문구는 게임 화면을 확인하세요.",
      "en": "Select the evidence corresponding to 'Hamura and Ichinose’s Missing Link'. Check the game for the localized option text."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
};

const platinum: CuratedGuide = {
  "summary": {
    "ko": "다른 모든 업적을 획득하십시오.",
    "en": "Obtain all other achievements."
  },
  "steps": [
    {
      "ko": "다른 모든 업적을 달성하세요. 장 한정 업적과 본편 조사 중의 고양이를 확인하세요.",
      "en": "Unlock every other achievement, tracking the chapter-specific objectives and main-story search cats."
    }
  ],
  "tips": [],
  "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
};

const kamuroMaster: CuratedGuide = {
  "summary": {
    "ko": "KAMGO 컴플리트를 100% 달성했다. 굉장해!",
    "en": "Achieved 100% completion of KamuroGo. Wow!"
  },
  "steps": [
    {
      "ko": "KAMURO GO의 상점·거리 미션과 친구·사이드 케이스·능력·드론 부품 등 완료 항목을 모두 확인하세요.",
      "en": "Complete KamuroGo's Shop and City Missions and its friends, side cases, skills, and drone-part requirements."
    }
  ],
  "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  "tips": []
};

export const JUDGMENT_CURATED: Record<string, CuratedGuide> = {
  [`${JUDGMENT_APP_ID}:judge_platinum`]: platinum,
  [`${JUDGMENT_APP_ID}:judge_all_complete`]: kamuroMaster,
  [`${JUDGMENT_APP_ID}:judge_all_cats_found_in_search_mode`]: cats,
  [`${JUDGMENT_APP_ID}:judge_main_story_01_hidden`]: illMakeItDouble,
  [`${JUDGMENT_APP_ID}:judge_main_story_02_hidden`]: wayTooThorough,
  [`${JUDGMENT_APP_ID}:judge_main_story_03_hidden`]: artOfConversation,
  [`${JUDGMENT_APP_ID}:judge_main_story_04_hidden`]: professionalPasswordPresenter,
  [`${JUDGMENT_APP_ID}:judge_main_story_05_hidden`]: hungJury,
  [`${JUDGMENT_APP_ID}:judge_main_story_06_hidden`]: theFinalNail,
  "2058180:judge_top_in_kamuro": {
    "summary": {
      "ko": "마지막 사이드 케이스에서 아몬을 쓰러뜨리세요.",
      "en": "Defeat Amon in the final side case."
    },
    "steps": [
      {
        "ko": "친구 50명과 나머지 사이드 케이스 49건을 완료한 뒤 야가미 탐정 사무소 게시판의 마지막 의뢰를 받으세요.",
        "en": "Befriend all 50 friends and finish the other 49 cases, then accept A Final Request at the agency board."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_drone_race_all_win": {
    "summary": {
      "ko": "드론 챔피언 리그의 모든 레이스에서 1위를 달성하세요.",
      "en": "Finish first in every Champion League drone race."
    },
    "steps": [
      {
        "ko": "한 번의 리그 도전에서 전 레이스 1위가 필요합니다. 매 레이스 전에 저장하면 실패한 경기부터 다시 시도할 수 있습니다.",
        "en": "Win every race in a single league run. Save before each race so a missed win can be retried."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_frend_all": {
    "summary": {
      "ko": "친구 50명의 프렌드 이벤트를 완료하세요.",
      "en": "Complete the friendship events for all 50 friends."
    },
    "steps": [
      {
        "ko": "각 인물의 조건을 확인하세요. 구매만 반복해서 모든 친구를 만들 수 없으며, 저장을 되돌리면 그 이후의 진행도도 되돌아갑니다.",
        "en": "Check each friend’s requirements; purchases alone cannot complete every friendship, and reloading rolls back unsaved progress."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_kamgo_complete_a": {
    "summary": {
      "ko": "KamuroGo의 시티 미션을 10개 완료하세요.",
      "en": "Complete 10 KamuroGo City Missions."
    },
    "steps": [
      {
        "ko": "이동·전투 등 누적 행동 목표입니다. 앱에서 조건과 진행도를 확인하며, 스토리 종료 후에도 마저 달성할 수 있습니다.",
        "en": "These track activities such as movement and combat. Check the app’s counters; remaining objectives can be completed after the story."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_kamgo_complete_b": {
    "summary": {
      "ko": "KamuroGo의 시티 미션을 30개 완료하세요.",
      "en": "Complete 30 KamuroGo City Missions."
    },
    "steps": [
      {
        "ko": "이동·전투 등 누적 행동 목표입니다. 앱에서 조건과 진행도를 확인하며, 스토리 종료 후에도 마저 달성할 수 있습니다.",
        "en": "These track activities such as movement and combat. Check the app’s counters; remaining objectives can be completed after the story."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_kamgo_complete_all": {
    "summary": {
      "ko": "KamuroGo의 시티 미션을 모두 완료하세요.",
      "en": "Complete all KamuroGo City Missions."
    },
    "steps": [
      {
        "ko": "이동·전투 등 누적 행동 목표입니다. 앱에서 조건과 진행도를 확인하며, 스토리 종료 후에도 마저 달성할 수 있습니다.",
        "en": "These track activities such as movement and combat. Check the app’s counters; remaining objectives can be completed after the story."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_kamgo_shop_a": {
    "summary": {
      "ko": "KamuroGo 상점 미션에서 5곳의 목표를 완료하세요.",
      "en": "Complete the objectives for 5 stores in KamuroGo Shop Missions."
    },
    "steps": [
      {
        "ko": "음식점 메뉴와 각 장소의 미니게임 목표를 확인하세요. 상점별 모든 목표를 채워야 해당 상점 완료로 인정됩니다.",
        "en": "Check restaurant menus and venue-specific minigame goals. A store counts only after every objective for it is complete."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_kamgo_shop_b": {
    "summary": {
      "ko": "KamuroGo 상점 미션에서 10곳의 목표를 완료하세요.",
      "en": "Complete the objectives for 10 stores in KamuroGo Shop Missions."
    },
    "steps": [
      {
        "ko": "음식점 메뉴와 각 장소의 미니게임 목표를 확인하세요. 상점별 모든 목표를 채워야 해당 상점 완료로 인정됩니다.",
        "en": "Check restaurant menus and venue-specific minigame goals. A store counts only after every objective for it is complete."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_kamgo_shop_all": {
    "summary": {
      "ko": "KamuroGo 상점 미션에서 모든 상점의 목표를 완료하세요.",
      "en": "Complete the objectives for all stores in KamuroGo Shop Missions."
    },
    "steps": [
      {
        "ko": "음식점 메뉴와 각 장소의 미니게임 목표를 확인하세요. 상점별 모든 목표를 채워야 해당 상점 완료로 인정됩니다.",
        "en": "Check restaurant menus and venue-specific minigame goals. A store counts only after every objective for it is complete."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_get_all_drone_parts": {
    "summary": {
      "ko": "모든 드론 부품을 입수하세요.",
      "en": "Obtain every drone part."
    },
    "steps": [
      {
        "ko": "부품 개발과 Quickstarter, 친구 이벤트를 확인하세요. 프리미엄 어드벤처에서도 수집을 계속할 수 있습니다.",
        "en": "Check development, Quickstarter, and friendship unlocks. Collection can continue in Premium Adventure."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_side_case_all": {
    "summary": {
      "ko": "사이드 케이스 50건을 모두 해결하세요.",
      "en": "Resolve all 50 side cases."
    },
    "steps": [
      {
        "ko": "친구 이벤트와 스토리 진행 조건을 충족하고, 마지막 아몬 의뢰까지 완료하세요. 프리미엄 어드벤처에서 남은 의뢰를 진행할 수 있습니다.",
        "en": "Meet friendship and story prerequisites and finish the final Amon case. Remaining cases can be completed in Premium Adventure."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_girl_frend_b": {
    "summary": {
      "ko": "여자친구 후보 2명의 고백 이벤트까지 진행하세요.",
      "en": "Reach the confession events for 2 girlfriend candidates."
    },
    "steps": [
      {
        "ko": "관련 사이드 케이스 이후 메시지와 데이트를 진행해 호감도를 높이세요. 스토리 종료 후에도 진행할 수 있습니다.",
        "en": "After the relevant side cases, respond to messages and go on dates to raise affection. This remains available after the story."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_girl_frend_c": {
    "summary": {
      "ko": "여자친구 후보 4명의 고백 이벤트까지 진행하세요.",
      "en": "Reach the confession events for 4 girlfriend candidates."
    },
    "steps": [
      {
        "ko": "관련 사이드 케이스 이후 메시지와 데이트를 진행해 호감도를 높이세요. 스토리 종료 후에도 진행할 수 있습니다.",
        "en": "After the relevant side cases, respond to messages and go on dates to raise affection. This remains available after the story."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_all_sugoroku_cource_clear": {
    "summary": {
      "ko": "VR 살롱의 DICE & CUBE에서 코스와 규칙 조합 6종을 모두 클리어합니다.",
      "en": "Clear all six course-and-rule combinations of Dice & Cube at Paradise VR."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
  "2058180:judge_eat_all_of_cooking": {
    "summary": {
      "ko": "토미오카 씨가 만들어 주는 요리 5종을 모두 먹습니다.",
      "en": "Eat all five types of Tomioka’s homecooked meals."
    },
    "steps": [
      {
        "ko": "토미오카 씨와의 프렌드 이벤트를 진행하고 사무소 냉장고를 확인합니다. 같은 요리가 반복될 수 있으므로 먹지 않은 종류가 나올 때까지 확인합니다.",
        "en": "Progress Tomioka’s friendship and check the office fridge. Meals can repeat, so keep checking until you have eaten every variety."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/"
  },
};
