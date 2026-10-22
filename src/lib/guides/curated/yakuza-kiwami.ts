import type { CuratedGuide } from "./index";

const YAKUZA_KIWAMI_APP_ID = 3717330;

const handInHand: CuratedGuide = {
  "summary": {
    "ko": "프리미엄 어드벤처에서 하루카와 손을 잡은 상태로 1km 걸었다",
    "en": "Walked 1km during Premium Adventure while holding Haruka's hand."
  },
  "steps": [
    {
      "ko": "프리미엄 어드벤처에서 세레나의 하루카와 동행한 뒤 R1 또는 RB를 누른 채 천천히 걸으세요. 손잡은 거리 1km가 필요합니다.",
      "en": "In Premium Adventure, take Haruka out from Serena, then hold R1 or RB while walking slowly. Walk 1 km while holding hands."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2924279743"
};

const platinum: CuratedGuide = {
  "summary": {
    "ko": "모든 도전 과제를 달성했다",
    "en": "Obtain all other achievements."
  },
  "steps": [
    {
      "ko": "다른 모든 업적을 달성하세요.",
      "en": "Unlock every other achievement."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
};

const perfectionist: CuratedGuide = {
  "summary": {
    "ko": "달성 목록 달성률이 100%가 되었다",
    "en": "Completed 100% of the Completion List."
  },
  "steps": [
    {
      "ko": "완료 목록에서 미달성 조건을 확인해 채우세요.",
      "en": "Complete the outstanding entries on the Completion List."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
};

const dragonOfDojimaReturns: CuratedGuide = {
  "summary": {
    "ko": "어디서나 마지마로 가능한 능력 강화를 모두 완료했다",
    "en": "Upgraded all Majima Everywhere abilities."
  },
  "steps": [
    {
      "ko": "어디서나 마지마를 SSS까지 진행하고 니시다의 문자에 따른 특수 대전도 완료하세요.",
      "en": "Reach SSS in Majima Everywhere and complete the special encounters prompted by Nishida's messages."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
};

const mesuKingThrone: CuratedGuide = {
  "summary": {
    "ko": "메스킹에서 모든 라이벌에게 우승했다",
    "en": "Won against all rivals in MesuKing."
  },
  "steps": [
    {
      "ko": "나카미치 거리 클럽 세가에서 메스킹 박사의 서브스토리와 라이벌전을 진행하세요.",
      "en": "Progress the MesuKing Professor's substories and rival matches at Nakamichi Street Club SEGA."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
};

const pocketCircuitReborn: CuratedGuide = {
  "summary": {
    "ko": "포켓 서킷의 모든 대회에서 우승했다",
    "en": "Won all Pocket Circuit races."
  },
  "steps": [
    {
      "ko": "포켓 서킷의 정규 레이스를 모두 우승하세요.",
      "en": "Win every regular Pocket Circuit race."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
};

const strongestFighter: CuratedGuide = {
  "summary": {
    "ko": "지하 투기장의 모든 대회에서 우승했다",
    "en": "Won all tournaments in the underground coliseum."
  },
  "steps": [
    {
      "ko": "투기장의 대회별 우승 기록을 확인하세요. 반복 우승으로 새 대회가 열립니다.",
      "en": "Check wins in each Coliseum tournament; repeat wins unlock further tournaments."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  "tips": []
};

const komakiMaster: CuratedGuide = {
  "summary": {
    "ko": "코마키류의 수련을 모두 마쳤다",
    "en": "Completed all training for Komaki Style."
  },
  "steps": [
    {
      "ko": "코마키의 수련을 차례로 완료하세요. 일부 수련에는 투기장 경품으로 교환하는 그림이 필요합니다.",
      "en": "Complete Komaki's training sequence. Some lessons require paintings from the Coliseum exchange."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  "tips": []
};

const amonDefeated: CuratedGuide = {
  "summary": {
    "ko": "다른 서브스토리를 마친 뒤 46번 아몬전을 클리어하세요.",
    "en": "Finish the other substories, then complete substory 46's Amon fight."
  },
  "steps": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  "tips": []
};

const allMinigamesPlayed: CuratedGuide = {
  "summary": {
    "ko": "모든 미니 게임을 플레이했다",
    "en": "Played all minigames."
  },
  "steps": [
    {
      "ko": "클럽 아시아의 쇼 관람도 플레이로 집계됩니다. 완료 목록과 플레이 스폿을 함께 확인하세요.",
      "en": "Watching a show at Club Asia also counts. Check both the Completion List and the play spots."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
};

// 「아저씨를 제패한 자」 — 하루카 신뢰도 EX 랭크 달성. Steam api_name: 53_mister_master.
const misterMaster: CuratedGuide = {
  summary: {
    ko:
      "메인 스토리(엔딩) 클리어 후 풀리는 프리미엄 어드벤처 한정 트로피. 세레나에서 하루카를 데리고 다니며 「부탁」을 계속 들어주면 신뢰도가 F→E→D→C→B→A→S→SS→SSS→EX 순으로 9단계 상승하고, EX 랭크에 도달하는 순간 자동으로 발동합니다.",
    en:
      "Premium Adventure only — unlocks after finishing the main story on any difficulty. Bring Haruka along from Serena and keep fulfilling her requests; trust climbs through 9 tiers (F→E→D→C→B→A→S→SS→SSS→EX) and the trophy fires the instant she hits EX.",
  },
  steps: [
    {
      ko:
        "0) 준비\n엔딩을 본 뒤 열리는 프리미엄 어드벤처에서 세레나로 가 하루카에게 말을 걸고 「함께 외출」을 선택하면 동행이 시작됩니다.\n거리를 걸으면 하루카가 무작위로 부탁을 겁니다 — 가게/식당에서 물건 사주기, 또는 특정 미니게임에서 목표치 달성 두 종류. 완료하면 즉시 다음 부탁이 걸립니다.",
      en:
        "0) Setup\nAfter the ending, head to Serena in Premium Adventure, talk to Haruka, and pick \"go out together\" to start the tagalong.\nWalking the streets triggers random requests — buy something at a shop/restaurant, or hit a target in a specific minigame. A new request appears the moment the previous one clears.",
    },
    {
      ko:
        "1) F→E 랭크\n• 돈키호테에서 「호신부적」 구매 (500엔)\n• 코토부키 약국에서 「스태미나 로열」 구매 (12,000엔)\n• 타이헤이 거리 아카우시마루에서 규동 주문 (400엔)\n• 천하일 거리 POPPO에서 낫짱 오렌지 구매 (140엔)\n→ 보상: 하루카의 사탕",
      en:
        "1) F→E\n• Buy the Protective Amulet at Don Quijote (500¥)\n• Buy Staminan Royale at Kotobuki Drugs (12,000¥)\n• Order a beef bowl at Akaushimaru, Taihei Blvd (400¥)\n• Buy a Natchan Orange at the Poppo on Tenkaichi St (140¥)\n→ Reward: Haruka's Candy",
    },
    {
      ko:
        "2) E→D 랭크\n• 나카미치 거리 POPPO에서 개껌 구매 (750엔)\n• 도박장에서 오이초카부 300점 이상\n• 큐슈 넘버원 스타에서 차슈 돈코츠 라멘 주문 (950엔)\n• 카지노 룰렛에서 칩 1,000개 이상 획득\n→ 보상: 하루카의 초콜릿",
      en:
        "2) E→D\n• Buy dog food at the Poppo on Nakamichi St (750¥)\n• Score 300+ in Oicho-Kabu at the gambling hall\n• Order chashu tonkotsu ramen at Kyushu No.1 Star (950¥)\n• Win 1,000+ chips at roulette in the casino\n→ Reward: Haruka's Chocolate",
    },
    {
      ko:
        "3) D→C 랭크\n• 르마르쉐에서 「프랑스제 지갑」 구매 (39,800엔)\n• 도박장에서 씨로(Cee-lo) 500점 이상\n• 카지노 포커에서 칩 2,000개 이상\n• 빈센트 바 다트 카운트업 3라운드 합계 200점 이상\n→ 보상: 하루카의 부적",
      en:
        "3) D→C\n• Buy the French Wallet at Le Marche (39,800¥)\n• Score 500+ in Cee-lo at the gambling hall\n• Win 2,000+ chips at poker in the casino\n• Score 200+ over 3 rounds of Count Up darts at Bar Vincent\n→ Reward: Haruka's Amulet",
    },
    {
      ko:
        "4) C→B 랭크\n• 칸라이에서 돌솥 비빔밥 주문 (1,500엔)\n• 스마일버거에서 스마일 쉐이크 주문 (220엔)\n• 도박장 조한에서 800점 이상\n• 카지노 블랙잭에서 칩 3,000개 이상\n• 배팅센터 노멀 코스에서 800~1,000점\n→ 보상: 붉은 보석",
      en:
        "4) C→B\n• Order stone-cooked bibimbap at Kanrai (1,500¥)\n• Order a Smile Shake at Smile Burger (220¥)\n• Score 800+ in Cho-Han at the gambling hall\n• Win 3,000+ chips at blackjack\n• Score 800–1,000 on the batting center's normal course\n→ Reward: Red Jewel",
    },
    {
      ko:
        "5) B→A 랭크\n• 프론토(주간)에서 삼종 치즈 카르보나라 주문 (790엔)\n• 극장 앞 광장 클럽 세가 포토부스에서 「완벽한 한 컷」 촬영\n• 쇼와 거리 POPPO에서 오징어 야키소바 구매 (180엔)\n• 가라오케 「오토메탈 마이 라이프」 800점 이상\n→ 보상: 하루카의 구급상자",
      en:
        "5) B→A\n• Order Three Cheese Carbonara at daytime Pronto (790¥)\n• Nail a perfect shot at the Theater Sq Club Sega photo booth\n• Buy squid yakisoba at the Poppo on Showa St (180¥)\n• Score 800+ on \"Otometal My Life\" at karaoke\n→ Reward: Haruka's First Aid Kit",
    },
    {
      ko:
        "6) A→S 랭크\n• 요로노타키에서 카시스 레몬 셔벗 주문 (194엔)\n• 긴다코 하이볼 주점에서 파 다코야키 주문 (370엔)\n• 시치후쿠 거리 M상점에서 야키소바빵 구매 (130엔)\n• 도박장 고이코이에서 1,000점 이상\n• 나카미치 거리 클럽 세가에서 메스킹으로 하루카와 대전 승리\n→ 보상: 하루카의 도시락",
      en:
        "6) A→S\n• Order a cassis-lemon sherbet at Yoronotaki (194¥)\n• Order green-onion takoyaki at the Gindaco highball stand (370¥)\n• Buy a yakisoba bun at the M-Store on Shichifuku St (130¥)\n• Score 1,000+ in Koi-Koi at the gambling hall\n• Beat Haruka in a MesuKing match at the Nakamichi St Club Sega\n→ Reward: Haruka's Lunch Box",
    },
    {
      ko:
        "7) S→SS 랭크\n• 스시 긴에서 전복(아와비) 주문 (3,000엔)\n• 극장 앞 광장 클럽 세가 UFO 캐처에서 베이비몽키 인형 뽑기 성공\n• 마하 볼에서 3프레임 이내 스트라이크 3회\n• 빈센트 바 당구 포볼에서 중급 AI 상대 승리\n→ 보상: 제로 보석",
      en:
        "7) S→SS\n• Order abalone (awabi) at Sushi Gin (3,000¥)\n• Win the Baby Monkey plush from the UFO catcher at Theater Sq Club Sega\n• Land 3 strikes within 3 frames at Mach Bowl\n• Beat the medium-difficulty AI at Four-Ball billiards, Bar Vincent\n→ Reward: Zero Jewel",
    },
    {
      ko:
        "8) SS→SSS 랭크\n• 카페 알프스에서 블렌드 커피 주문 (500엔)\n• 에비스 전당포에서 「금 접시」 구매 (100,000엔)\n• 카지노 바카라에서 칩 4,000개 이상\n→ 보상: 하루카의 목걸이",
      en:
        "8) SS→SSS\n• Order blended coffee at Cafe Alps (500¥)\n• Buy the Gold Plate at Ebisu Pawn Shop (100,000¥)\n• Win 4,000+ chips at baccarat in the casino\n→ Reward: Haruka's Necklace",
    },
    {
      ko:
        "9) SSS→EX 랭크 (마지막)\n• 빈센트 바 당구 로테이션에서 상급 AI 상대 승리\n• 가라오케 「오토메탈 마이 라이프」 950점 이상\n• 마하 볼에서 스플릿 처리 3회\n• 배팅센터 하드 코스 1,200점 이상\n→ 4개 모두 완료 시 EX 랭크 보상 「나팔꽃 스카프」와 함께 트로피 즉시 해금",
      en:
        "9) SSS→EX (final)\n• Beat the expert AI at Rotation billiards, Bar Vincent\n• Score 950+ on \"Otometal My Life\" at karaoke\n• Land 3 split conversions at Mach Bowl\n• Score 1,200+ on the batting center's hard course\n→ Finishing all four pops the EX-rank \"Morning Glory Scarf\" and the trophy together",
    },
  ],
  tips: [
    {
      ko:
        "미니게임 계열 부탁(도박 칩 누적, 다트·당구 점수 등)은 「놀이를 제패한 남자」(모든 미니게임 플레이) 트로피 작업과 겹치는 경우가 많으니 두 트로피를 동시에 진행하면 효율적입니다.",
      en:
        "Minigame-type requests (gambling chip totals, darts/billiards scores) often overlap with the \"What a Player\" (play every minigame) trophy — work both at once.",
    },
    {
      ko:
        "부탁은 하루카와 동행 중에만 발생합니다. 전투·서브스토리 진행 등으로 동행이 풀리면 세레나로 돌아가 다시 말을 걸어 동행 상태를 재개하세요.",
      en:
        "Requests only trigger while Haruka is actively tagging along. If combat or a substory breaks the pairing, head back to Serena and talk to her again to resume.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2924279743",
  sourceLabel: {
    ko: "Steam Community — Haruka's Requests",
    en: "Steam Community — Haruka's Requests",
  },
};

export const YAKUZA_KIWAMI_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_KIWAMI_APP_ID}:00_kiwami`]: platinum,
  [`${YAKUZA_KIWAMI_APP_ID}:02_perfectionist`]: perfectionist,
  [`${YAKUZA_KIWAMI_APP_ID}:09_the_dragon_of_dojima_returns`]: dragonOfDojimaReturns,
  [`${YAKUZA_KIWAMI_APP_ID}:15_komaki_style_master`]: komakiMaster,
  [`${YAKUZA_KIWAMI_APP_ID}:18_the_strongest_fighter`]: strongestFighter,
  [`${YAKUZA_KIWAMI_APP_ID}:21_the_dragon_of_pocket_circuit_reborn`]: pocketCircuitReborn,
  [`${YAKUZA_KIWAMI_APP_ID}:22_throne_of_the_mesuking`]: mesuKingThrone,
  [`${YAKUZA_KIWAMI_APP_ID}:23_what_a_player`]: allMinigamesPlayed,
  [`${YAKUZA_KIWAMI_APP_ID}:24_hand_in_hand`]: handInHand,
  [`${YAKUZA_KIWAMI_APP_ID}:51_amon_defeated`]: amonDefeated,
  [`${YAKUZA_KIWAMI_APP_ID}:53_mister_master`]: misterMaster,
  "3717330:44_youll_only_get_burned": {
    "summary": {
      "ko": "서브스토리 1번을 완료하세요.",
      "en": "Complete substory 1: The Price of an F-Cup."
    },
    "steps": [
      {
        "ko": "서브스토리 목록에서 1번의 발생 위치와 진행 조건을 확인하세요. 영문 공략의 제목은 The Price of an F-Cup입니다.",
        "en": "Follow the location and prerequisites for substory 1 in the substory list."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:45_thats_a_man": {
    "summary": {
      "ko": "서브스토리 2번을 완료하세요.",
      "en": "Complete substory 2: My Baby’s a Showgirl."
    },
    "steps": [
      {
        "ko": "서브스토리 목록에서 2번의 발생 위치와 진행 조건을 확인하세요. 영문 공략의 제목은 My Baby’s a Showgirl입니다.",
        "en": "Follow the location and prerequisites for substory 2 in the substory list."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:46_sonic_right_hook": {
    "summary": {
      "ko": "서브스토리 3번을 완료하세요.",
      "en": "Complete substory 3: Bet On a Champ."
    },
    "steps": [
      {
        "ko": "서브스토리 목록에서 3번의 발생 위치와 진행 조건을 확인하세요. 영문 공략의 제목은 Bet On a Champ입니다.",
        "en": "Follow the location and prerequisites for substory 3 in the substory list."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:47_an_answer_owed": {
    "summary": {
      "ko": "서브스토리 4번을 완료하세요.",
      "en": "Complete substory 4: The Yakuza’s Wife."
    },
    "steps": [
      {
        "ko": "서브스토리 목록에서 4번의 발생 위치와 진행 조건을 확인하세요. 영문 공략의 제목은 The Yakuza’s Wife입니다.",
        "en": "Follow the location and prerequisites for substory 4 in the substory list."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:48_kidney_stones": {
    "summary": {
      "ko": "서브스토리 5번을 완료하세요.",
      "en": "Complete substory 5: A Doctor’s Duty."
    },
    "steps": [
      {
        "ko": "서브스토리 목록에서 5번의 발생 위치와 진행 조건을 확인하세요. 영문 공략의 제목은 A Doctor’s Duty입니다.",
        "en": "Follow the location and prerequisites for substory 5 in the substory list."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:49_a_bad_business": {
    "summary": {
      "ko": "서브스토리 6번을 완료하세요.",
      "en": "Complete substory 6: The Fake Mizuki’s Truth."
    },
    "steps": [
      {
        "ko": "서브스토리 목록에서 6번의 발생 위치와 진행 조건을 확인하세요. 영문 공략의 제목은 The Fake Mizuki’s Truth입니다.",
        "en": "Follow the location and prerequisites for substory 6 in the substory list."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:50_shes_worth_it": {
    "summary": {
      "ko": "서브스토리 7번을 완료하세요.",
      "en": "Complete substory 7: Man on a Ledge."
    },
    "steps": [
      {
        "ko": "서브스토리 목록에서 7번의 발생 위치와 진행 조건을 확인하세요. 영문 공략의 제목은 Man on a Ledge입니다.",
        "en": "Follow the location and prerequisites for substory 7 in the substory list."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:52_death_by_climax": {
    "summary": {
      "ko": "메인 메뉴의 궁극 투기를 모두 클리어하세요.",
      "en": "Clear every Climax Battle from the main menu."
    },
    "steps": [
      {
        "ko": "각 과제에 정해진 캐릭터 상태와 장비를 사용합니다. 본편 키류의 강화나 소지품을 준비하는 방식이 아닙니다.",
        "en": "Challenges use their assigned character setup and equipment; campaign upgrades and inventory are not preparation for these trials."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:14_story_of_my_life": {
    "summary": {
      "ko": "서브스토리 78건을 모두 완료하세요.",
      "en": "Complete all 78 substories."
    },
    "steps": [
      {
        "ko": "스토리와 필요한 미니게임·수련을 진행해 남은 의뢰를 해금하세요. 프리미엄 어드벤처에서도 완료할 수 있습니다.",
        "en": "Advance the story, required minigames, and training to unlock the remaining cases. They can be completed in Premium Adventure."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:04_lets_fight": {
    "summary": {
      "ko": "Thug 스타일의 마지마가 다른 전투에 난입하는 이벤트를 보세요.",
      "en": "Trigger a fight interruption by Thug Majima."
    },
    "steps": [
      {
        "ko": "인연 랭크 A 이후의 난입 이벤트가 대상입니다. 길에서 마지마와 직접 싸우는 일반 조우와 구분하세요.",
        "en": "Use the interruption encounters available from Rank A; ordinary direct street encounters are a different event type."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:05_swing_for_the_fences": {
    "summary": {
      "ko": "Slugger 스타일의 마지마가 다른 전투에 난입하는 이벤트를 보세요.",
      "en": "Trigger a fight interruption by Slugger Majima."
    },
    "steps": [
      {
        "ko": "인연 랭크 A 이후의 난입 이벤트가 대상입니다. 길에서 마지마와 직접 싸우는 일반 조우와 구분하세요.",
        "en": "Use the interruption encounters available from Rank A; ordinary direct street encounters are a different event type."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:06_break_it_down": {
    "summary": {
      "ko": "Breaker 스타일의 마지마가 다른 전투에 난입하는 이벤트를 보세요.",
      "en": "Trigger a fight interruption by Breaker Majima."
    },
    "steps": [
      {
        "ko": "인연 랭크 A 이후의 난입 이벤트가 대상입니다. 길에서 마지마와 직접 싸우는 일반 조우와 구분하세요.",
        "en": "Use the interruption encounters available from Rank A; ordinary direct street encounters are a different event type."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:07_are_ya_havin_fun_yet": {
    "summary": {
      "ko": "Mad Dog 스타일의 마지마가 다른 전투에 난입하는 이벤트를 보세요.",
      "en": "Trigger a fight interruption by Mad Dog Majima."
    },
    "steps": [
      {
        "ko": "인연 랭크 A 이후의 난입 이벤트가 대상입니다. 길에서 마지마와 직접 싸우는 일반 조우와 구분하세요.",
        "en": "Use the interruption encounters available from Rank A; ordinary direct street encounters are a different event type."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:08_its_not_over_yet": {
    "summary": {
      "ko": "마지마와의 인연 랭크를 B까지 올리세요.",
      "en": "Raise Majima Everywhere to Rank B."
    },
    "steps": [
      {
        "ko": "전투로 게이지를 채운 뒤 니시다의 연락과 승격 이벤트를 진행하세요.",
        "en": "Fill the gauge through battles, then follow Nishida’s messages and the rank-up events."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:42_majima_on_the_beat": {
    "summary": {
      "ko": "경찰 마지마를 만나세요.",
      "en": "Encounter Officer Majima."
    },
    "steps": [
      {
        "ko": "니시다의 연락에 따라 경찰 마지마 이벤트를 진행하고, 무기를 소지하라는 조건을 확인하세요.",
        "en": "Follow Nishida’s Officer Majima message and its weapon-carrying requirement."
      }
    ],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:26_things_will_never_be_the_same": {
    "summary": {
      "ko": "제1장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 1. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:27_turmoil_in_the_tojo_clan": {
    "summary": {
      "ko": "제2장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 2. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:28_funeral_for_the_old_ways": {
    "summary": {
      "ko": "제3장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 3. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:29_mother_and_child": {
    "summary": {
      "ko": "제4장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 4. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:30_the_price_of_life": {
    "summary": {
      "ko": "제5장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 5. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:31_sins_of_the_father": {
    "summary": {
      "ko": "제6장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 6. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:32_the_dragon_and_the_koi": {
    "summary": {
      "ko": "제7장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 7. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:33_puppet_masters": {
    "summary": {
      "ko": "제8장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 8. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:34_a_mans_conviction": {
    "summary": {
      "ko": "제9장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 9. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:35_the_dragon_roars": {
    "summary": {
      "ko": "제10장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 10. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:36_ashes_to_ashes": {
    "summary": {
      "ko": "제11장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 11. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:37_legends_never_die": {
    "summary": {
      "ko": "제12장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 12. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:38_thank_you": {
    "summary": {
      "ko": "제13장을 완료하면 스토리 진행 중 달성합니다.",
      "en": "Complete Chapter 13. This unlocks through story progression."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:25_when_you_dont_pay_your_debts": {
    "summary": {
      "ko": "게임 도입부에서 히라타의 빚을 회수합니다.",
      "en": "Collect Hirata’s debt during the opening story sequence."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:39_majima_from_above": {
    "summary": {
      "ko": "위쪽 은신처에서 기습하는 마지마와 만납니다.",
      "en": "Encounter Majima ambushing you from above."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:40_majima_from_below": {
    "summary": {
      "ko": "맨홀에서 나타나는 마지마와 만납니다.",
      "en": "Encounter Majima emerging from a manhole."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:41_goromi_the_hostess": {
    "summary": {
      "ko": "샤인에서 고로미 이벤트를 진행합니다.",
      "en": "Complete the Goromi encounter at Shine."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:43_majima_of_the_end": {
    "summary": {
      "ko": "좀비 마지마 이벤트를 진행합니다.",
      "en": "Complete the Zombie Majima encounter."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
  "3717330:39_dragon_of_legend": {
    "summary": {
      "ko": "LEGEND 난이도로 메인 스토리를 완료합니다.",
      "en": "Complete a main-story playthrough on Legend difficulty."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"
  },
};
