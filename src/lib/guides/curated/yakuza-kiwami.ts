import type { CuratedGuide } from "./index";

const YAKUZA_KIWAMI_APP_ID = 3717330;

// "하루카에게 다정하게" — Hand in Hand. Premium Adventure에서 하루카와 손을
// 잡은 상태로 1km를 걸어야 발동. 영구 미서블 아님(엔딩 후 언제든 가능).
// Steam api_name: 24_hand_in_hand.
const handInHand: CuratedGuide = {
  summary: {
    ko:
      "스토리 클리어 후 풀리는 프리미엄 어드벤처에서 하루카와 손을 잡고 누적 1km를 걸으면 트로피 발동. 영구 미서블이 아니므로 엔딩 이후 컴플리션 정리 차원에서 천천히 진행해도 됩니다.",
    en:
      "Post-credits Premium Adventure trophy: hold Haruka's hand and walk a cumulative 1 km. Not missable — finish it at your own pace during the 100% cleanup.",
  },
  steps: [
    {
      ko:
        "1) 메인 스토리 엔딩을 보고 프리미엄 어드벤처를 시작합니다. 하루카가 뉴 세레나에 와 있어야 동행 가능 — 본편 진행 중에는 손잡기 시스템 자체가 안 풀립니다.",
      en:
        "1) Finish the main story to unlock Premium Adventure. Haruka becomes available at New Serena; the hand-holding system isn't in the main story.",
    },
    {
      ko:
        "2) 뉴 세레나에서 하루카에게 말을 걸고 「함께 외출」을 선택. 키류 옆에 하루카 마커가 떠 있으면 동행 상태가 시작됩니다.",
      en:
        "2) Talk to Haruka at New Serena and pick \"Go out together.\" Once her marker sits next to Kiryu you're in tagalong mode.",
    },
    {
      ko:
        "3) 거리에서 △(또는 Y) 입력으로 「손잡기」 발동. 카무로초 곳곳을 천천히 걸으며 누적 거리가 1km(인게임 거리) 이상이 될 때까지 진행. 적과 마주치면 풀리지만 다시 손잡기로 이어가면 카운트가 재개됩니다.",
      en:
        "3) On the street press Triangle/Y to grab Haruka's hand. Walk Kamurocho slowly until 1 km accumulates. Combat breaks the link, but re-grabbing resumes the counter.",
    },
    {
      ko:
        "4) 1km 도달 순간 트로피 발동. 컴플리트 리스트의 「하루카와 손을 잡고 1km」 항목도 동시에 체크되어 100% 라인이 한 칸 채워집니다.",
      en:
        "4) The trophy pops on 1 km. The matching Completion List checkbox also fires, ticking the 100 % bar by one.",
    },
  ],
  tips: [
    {
      ko:
        "큰 도로(쇼와 거리·테아토르 광장 주변)를 한 바퀴 도는 동선이 직선 거리가 가장 잘 쌓입니다. 빠르게 끝내고 싶다면 적 인카운트가 비교적 적은 뒷골목보다 메인 거리를 선택하세요.",
      en:
        "Long straight stretches (Showa St., Theater Sq. loop) bank distance fastest. Skip the back alleys — main streets have lower encounter density.",
    },
    {
      ko:
        "프리미엄 어드벤처 한정이므로, 본편 장 진행 중에는 카운트가 쌓이지 않습니다. 엔딩을 본 뒤에 작업하세요.",
      en:
        "Only Premium Adventure counts — pre-ending walking does nothing toward this trophy.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
};

// "극" — Platinum. Yakuza Kiwami 플래티넘 로드맵.
// Steam api_name: 00_kiwami.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Yakuza Kiwami 플래티넘 — 다른 54개 업적을 모두 달성하면 자동 발동. 핵심 게이트는 ①「마지마 에브리웨어」 모든 스폿/랭크 완료(SS 등급) ②컴플리션 리스트 100% ③EX-HARD/Legend 난이도 클리어 ④조 아몬 격파(서브스토리 46). Premium Adventure에서도 대부분 회수 가능해 영구 미서블 부담은 적습니다.",
    en:
      "All Kiwami's other trophies auto-platinum it. Big gates: ① Majima Everywhere to SS rank ② Completion List 100 % ③ EX-HARD/Legend clear ④ defeat Jo Amon via Sub 46. Premium Adventure recovers most missables, so the load is lighter than 0.",
  },
  steps: [
    {
      ko:
        "1) 1회차 (Normal) — 메인 스토리 진행 중 「마지마 에브리웨어」 모든 스폿 발견 + 랭크 진행. 7장·11 동행 한정 하루카 서브(「선물 찾기」·「숨바꼭질」)도 같은 회차에서 정리.",
      en:
        "1) Run 1 (Normal) — surface every Majima Everywhere spot and grind ranks alongside the story. Knock out Haruka-only subs (Searching for the Present, Hide-and-Seek) in Ch.7/11.",
    },
    {
      ko:
        "2) 미니게임 전 종류 1회씩 — 마작·낚시·노래방·다트·빌리어드·볼링·캣 파이트·캐바쿠라(유이/리나)·포켓 서킷·메스킹. 메스킹 톱 랭크와 포켓 서킷 챔피언십 우승은 별도 트로피.",
      en:
        "2) Touch every minigame — mahjong/fishing/karaoke/darts/billiards/bowling/cat fight/cabaret (Yui & Rina)/Pocket Circuit/MesuKing. MesuKing top rank + Pocket Circuit champ have their own trophies.",
    },
    {
      ko:
        "3) 마지마 에브리웨어 — 그라운드 워크, 셰이크다운, MajiCo 골프, 무에타이 등 모든 스타일별 마지마를 격파해 SS 랭크 도달. 도지마의 용 스타일이 풀리면서 「도지마의 용이 부활한기라!」 트로피도 함께.",
      en:
        "3) Majima Everywhere — beat every style variant (street, golf, MajiCo, Muay Thai, etc.) to hit SS rank. Unlocks Dragon of Dojima style + its trophy.",
    },
    {
      ko:
        "4) 엔딩 후 Premium Adventure에서 누락 서브스토리·코마키류 수련 4종·하루카 손잡고 1km 등 잔여 컴플리션. 서브스토리 46 「The Last Assassin」로 조 아몬과 격투.",
      en:
        "4) Premium Adventure mop-up: missed substories, all 4 Komaki training drills, Haruka 1 km hand-hold, and Sub 46 to fight Jo Amon.",
    },
    {
      ko:
        "5) 2회차 — EX-HARD 또는 Legend 새 회차로 메인 스토리 클리어. 1회차 장비/스킬이 이월되지 않으므로 무기·회복 아이템을 사전에 충분히 비축한 세이브 활용 권장.",
      en:
        "5) Run 2 — fresh save on EX-HARD or Legend. Carry-over is limited, so stockpile weapons and healing items on a separate save before starting.",
    },
  ],
  tips: [
    {
      ko:
        "마지마 에브리웨어는 메인 스토리 진행에 따라 자동으로 스폿이 풀리지만, 일부 SS 랭크 마지마는 11장 이후에야 등장합니다. 마지막에 몰아서 정리하는 게 효율적.",
      en:
        "Majima Everywhere spots unlock with story progress, but the SS-rank variants only appear after Ch.11. Batch them near the end.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
};

// "카무로초를 제패한 남자" — Completion List 100%.
// Steam api_name: 02_perfectionist.
const perfectionist: CuratedGuide = {
  summary: {
    ko:
      "컴플리션 리스트(시작 메뉴 → 컴플리트) 100% 도달 시 발동. 미니게임·전투·캐바쿠라·포켓 서킷·서브스토리 78건·코마키류·치트 아이템 사용 등 다양한 카테고리가 별도로 카운트되며, 모든 카테고리 100%가 되어야 트로피 발동.",
    en:
      "Hit 100 % on the in-game Completion List. Minigames, combat, cabaret, Pocket Circuit, all 78 substories, Komaki training, cheat-item use — every row must close.",
  },
  steps: [
    {
      ko:
        "1) 미니게임 — 마작·낚시·노래방·다트·빌리어드·볼링·캣 파이트·텔레폰 클럽 실제 만남 등 전 종류 최소 1회 플레이.",
      en:
        "1) Minigames — mahjong/fishing/karaoke/darts/billiards/bowling/cat fight/Telephone Club real-meet, all touched at least once.",
    },
    {
      ko:
        "2) 캐바쿠라 — 유이 + 리나 두 호스티스 풀 영입·풀 데이트, 자유 입장으로 1번 이상 모든 호스티스와 대화.",
      en:
        "2) Cabaret — fully date Yui and Rina, plus at least one free-entry chat with every other hostess.",
    },
    {
      ko:
        "3) 포켓 서킷 — 전 컵 우승 + 「서킷의 용이 다시 탄생하다!」 트로피 연동. 메스킹은 톱 랭크 시 별도 트로피.",
      en:
        "3) Pocket Circuit — win every cup (pairs with the 'Reborn' trophy). MesuKing's top rank is its own trophy.",
    },
    {
      ko:
        "4) 서브스토리 78건 + 코마키류 수련 4종 (체술·기술·완력·종합) 클리어. 7장/11 한정 하루카 동행 서브를 메인 진행 중에 챙겨야 100% 라인이 매끄럽게 차오릅니다.",
      en:
        "4) All 78 substories + four Komaki training drills. Knock out Haruka-tagalong subs during Ch.7/11 to keep the bar moving cleanly.",
    },
    {
      ko:
        "5) 누락 항목이 있는 카테고리를 컴플리트 리스트에서 직접 확인하며 빈칸을 채우면 100% 도달, 트로피 발동.",
      en:
        "5) Walk the Completion List, check every category, fill any blanks. Hits 100 % → trophy.",
    },
  ],
  tips: [
    {
      ko:
        "서브스토리 46 「The Last Assassin」 (아몬 격투)는 다른 모든 서브스토리 완료가 전제 조건. 마지막에 정리하는 게 자연스러운 흐름입니다.",
      en:
        "Sub 46 (Jo Amon fight) requires every other substory done first — save it for last by design.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
};

// 「도지마의 용이 부활한기라!」 — 마지마 에브리웨어 풀 완료 (도지마의 용 스타일 해금).
// Steam api_name: 09_the_dragon_of_dojima_returns.
const dragonOfDojimaReturns: CuratedGuide = {
  summary: {
    ko:
      "마지마 에브리웨어 시스템에서 모든 스폿·랭크를 풀로 진행해 「도지마의 용」 스타일을 해금하면 발동. 카무로초 곳곳의 마지마와 격투하면서 랭크가 오를 때마다 새 스폿이 추가되며, 최종 「진정한 매드 도그」를 격파하면 도지마의 용 스타일 + 트로피 동시 풀.",
    en:
      "Push Majima Everywhere to its endgame and unlock Kiryu's Dragon of Dojima style. Defeat Majima in every encounter type, climbing through ranks E → SS — the final True Mad Dog fight unlocks both the style and this trophy.",
  },
  steps: [
    {
      ko:
        "1) 첫 마지마 인카운트(4장) 직후부터 거리에서 마지마 마커가 보이면 무조건 격투. 그라운드·셰이크다운·골프·MajiCo·무에타이·터프 가이 등 모든 스타일 변형을 한 번씩 격파.",
      en:
        "1) From the first encounter (Ch.4), fight every Majima marker on sight — Street, Shakedown, Golf, MajiCo, Muay Thai, Tough Guy variants all need at least one win.",
    },
    {
      ko:
        "2) 격투 승리 시 랭크 게이지 상승 → 일정 누적 시 새 스폿 + 새 격투 형태 해금. SS 랭크 직전 「캬바쿠라 마지마」 + 「에이지로 변장 마지마」 등 고난도 변형이 등장합니다.",
      en:
        "2) Wins raise the Everywhere rank gauge — new spots + variants spawn each tier. SS-tier brings the disguised Majimas (Cabaret Majima, Eiji-disguise Majima).",
    },
    {
      ko:
        "3) SS 랭크 도달 후 텐카이치 거리에서 「진정한 매드 도그(True Mad Dog)」 보스전 자동 발생. 격파 시 도지마의 용 스타일 풀 해금 + 트로피 발동.",
      en:
        "3) At SS rank, True Mad Dog auto-triggers on Tenkaichi St. Beating him unlocks the Dragon of Dojima style and fires the trophy.",
    },
  ],
  tips: [
    {
      ko:
        "마지마 에브리웨어 진행도는 장별 잠금이 있어 일부 변형(특히 SS 직전)은 11장 이후에야 등장합니다. 마지막 장에 몰아서 정리하는 게 효율적.",
      en:
        "Some Majima variants only spawn past Ch.11 — bulk them in the late game.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
};

// 「곤충 대왕 탄생!」 — 메스킹 모든 라이벌 격파. Steam api_name: 22_throne_of_the_mesuking.
const mesuKingThrone: CuratedGuide = {
  summary: {
    ko:
      "메스킹(곤충 카드 배틀 미니게임)에서 모든 라이벌 NPC에게 우승하면 발동. 4장에서 시오리 카페에서 시작되며, 강력한 곤충 카드 + 기술 카드 조합 + 정답 가위·바위·보 패턴 인식이 핵심.",
    en:
      "Win against every MesuKing rival in the bug-card RPS minigame. Starts in Ch.4 at Shiori's cafe; relies on strong bug cards + technique cards + reading opponent RPS patterns.",
  },
  steps: [
    {
      ko:
        "1) 4장에서 시오리 카페 진입 → 첫 메스킹 튜토리얼. 카드 팩 구매로 곤충·기술 카드 확보.",
      en:
        "1) Open Ch.4 to Shiori's cafe for the tutorial. Buy packs to expand your bug + technique deck.",
    },
    {
      ko:
        "2) 라이벌 NPC와 차례로 매치 — 가위·바위·보(STR·SPD·TECH) 패턴은 NPC별로 고정 경향. 패턴 학습 후 카운터 카드 조합.",
      en:
        "2) Battle each rival in sequence — every NPC has a fixed RPS bias (STR / SPD / TECH). Learn it and counter-deck.",
    },
    {
      ko:
        "3) 모든 라이벌 격파 시 트로피 발동. 「최강의 메스킹」 시즌 챔피언 NPC가 마지막 라이벌입니다.",
      en:
        "3) Beating every rival including the seasonal champion fires the trophy.",
    },
  ],
  tips: [
    {
      ko:
        "[메스킹 잘하는 법] 본질은 가위바위보(STR > TECH > SPD > STR) 삼각관계 + 스탯 싸움입니다. 라이벌마다 선호 타입이 고정이라, 한 번 지더라도 상대 패턴을 외운 뒤 카운터 타입 카드를 덱에 넣으면 안정적으로 이깁니다. 기술(필살기) 카드는 게이지가 찼을 때 큰 데미지를 주니 접전 라운드에 아껴 쓰세요.",
      en:
        "[How to win MesuKing] It's rock-paper-scissors (STR > TECH > SPD > STR) layered on a stat check. Each rival favors a fixed type, so even after a loss you can memorize their bias and stack counter-type cards. Save technique (special) cards for close rounds — they hit hardest once the gauge is full.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
};

// 「서킷의 용이 다시 탄생하다!」 — 포켓 서킷 모든 대회 우승. Steam api_name: 21_the_dragon_of_pocket_circuit_reborn.
const pocketCircuitReborn: CuratedGuide = {
  summary: {
    ko:
      "키류의 포켓 서킷 스타디움에서 모든 챔피언십(레이스 컵)을 우승하면 발동. 4장 이후 「포켓 서킷 파이터」 카츠 카스 라인을 진행하며 부품을 차례로 강화해 컵 순서대로 클리어.",
    en:
      "Win every Pocket Circuit Stadium championship cup. After Ch.4, progress the Pocket Circuit Fighter (Kazuya) substory line, upgrade parts, and clear cups in sequence.",
  },
  steps: [
    {
      ko:
        "1) 4장에서 카츠 카스 라인 「포켓 서킷 파이터」 서브 진행 → 첫 컵 출전. 부품 상점 해금.",
      en:
        "1) Trigger the Pocket Circuit Fighter sub line in Ch.4; first cup unlocks the parts shop.",
    },
    {
      ko:
        "2) 컵별 권장 빌드를 따라 차량을 셋업 — 평탄 코스는 SPD 우선, 곡선 코스는 GRIP/STABILITY 우선. 부품 합산 무게에 주의.",
      en:
        "2) Build per-cup setups: SPD bias for flat tracks, GRIP/STABILITY for curve-heavy courses. Watch total weight.",
    },
    {
      ko:
        "3) 챔피언십 7~8개 모두 우승 → 「드래곤 카트」 최종 컵 해금. 마지막 컵 우승 시 트로피 발동.",
      en:
        "3) Win every championship to unlock the Dragon Kart final cup — that cup's win fires the trophy.",
    },
  ],
  tips: [
    {
      ko:
        "[포켓 서킷 셋업이 8할] 운전 실력보다 차 세팅이 승부를 가릅니다. 직선이 긴 코스는 모터·기어비로 최고속을 올리고, 커브가 많은 코스는 그립 타이어+다운포스 부품으로 코스 이탈을 막으세요. 부품 무게가 무거우면 후반에 배터리(스태미나)가 떨어져 멈추니, 완주 가능한 무게로 균형을 맞추는 게 핵심입니다. 막히는 컵은 카츠가 추천하는 빌드를 그대로 따라가면 대부분 뚫립니다.",
      en:
        "[Pocket Circuit is 80% setup] Tuning matters more than driving. Gear for top speed (motor + gear ratio) on straight-heavy tracks, and add grip tires + downforce on curvy ones to stop flying off. Heavy parts drain the battery (stamina) and stall you late in the race, so balance for a weight that finishes. Stuck on a cup? Just copy the build Kazuya recommends.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
};

// 「싸움 최강을 제패한 남자」 — 지하 투기장 모든 대회 우승. Steam api_name: 18_the_strongest_fighter.
const strongestFighter: CuratedGuide = {
  summary: {
    ko:
      "카무로초 지하 투기장의 모든 대회(일반 토너먼트 + S랭크 토너먼트)를 우승하면 발동. 6장 이후 해금되며, 후반 대회는 무기 봉인·맨손 조건 등이 붙어 스타일 트리 + 회복 아이템 풀 비축 필수.",
    en:
      "Win every underground Coliseum tournament (standard + S-rank). Unlocks past Ch.6; later cups impose weapon bans or bare-fist rules — max styles + healing required.",
  },
  steps: [
    {
      ko:
        "1) 6장 진행 후 카무로초 지하 「투기장」 입구에서 첫 토너먼트 출전. 입장 시 단계별 토너먼트 라인업 확인.",
      en:
        "1) After Ch.6, enter the underground Coliseum and start the first tier.",
    },
    {
      ko:
        "2) 토너먼트별 규정(무기 봉인·맨손·낙승 등) 확인 후 회복 아이템 풀 비축. 일반 토너먼트 → 워리어 → 챔피언 → 갓 라인 순서.",
      en:
        "2) Check each tier's rules (no weapons, bare-fist, etc.) and stock healing. Tiers run Standard → Warrior → Champion → God.",
    },
    {
      ko:
        "3) 갓 라인 토너먼트 우승 시 트로피 발동. 추가 보상으로 강력 무기 + 코마키류 수련 노드 해금.",
      en:
        "3) Winning the God-tier final fires the trophy and unlocks Komaki training nodes.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
};

// 「코마키류 전수 완료!」 — 코마키류 수련 4종 풀. Steam api_name: 15_komaki_style_master.
const komakiMaster: CuratedGuide = {
  summary: {
    ko:
      "코마키 마스터에게서 받는 4종 수련(체술 마스터·기술 마스터·완력 마스터·종합 마스터)을 모두 완료하면 발동. 장 진행과 별개로 서브스토리 「달인 코마키」 라인을 통해 단계별 수련 해금.",
    en:
      "Complete all four Komaki training drills (Style / Tech / Power / Comprehensive). The drills unlock via the Komaki substory chain, independent of main-story chapters.",
  },
  steps: [
    {
      ko:
        "1) 5장 이후 코마키 마스터 위치(카무로초 카메우라 약국 뒷골목 등)에서 서브스토리 시작 → 첫 수련 「체술 마스터」 완료.",
      en:
        "1) After Ch.5, find Komaki (alley behind Kameura Pharmacy) and clear the first drill, Style Master.",
    },
    {
      ko:
        "2) 차례로 「기술 마스터」(반격 콤보) → 「완력 마스터」(파괴 카운트) → 「종합 마스터」(연속 격투) 진행. 각 수련에는 개별 조건이 붙어 있어 가이드 확인 권장.",
      en:
        "2) Progress through Tech (counter combos), Power (destruction counts), and Comprehensive (combat streak) drills.",
    },
    {
      ko:
        "3) 4종 모두 완료 시 트로피 발동 + 코마키 보상 스킬 풀 해금.",
      en:
        "3) All four drills cleared fires the trophy and unlocks the full Komaki skill rewards.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
};

// 「아몬 격파」 — 조 아몬 격투 (서브스토리 46). Steam api_name: 51_amon_defeated.
const amonDefeated: CuratedGuide = {
  summary: {
    ko:
      "Premium Adventure에서 다른 모든 서브스토리(77건)를 클리어한 뒤 서브스토리 46 「The Last Assassin」를 진행하면 조 아몬과의 격투가 발생. 격파 시 트로피 + 「검은 양복의 아몬」 의상 보상.",
    en:
      "Clear every other substory (77) in Premium Adventure to unlock Sub 46 — Jo Amon's fight. Beating him fires the trophy and grants the Amon outfit.",
  },
  steps: [
    {
      ko:
        "1) 메인 스토리 엔딩 후 Premium Adventure에서 잔여 서브스토리 모두 클리어. 서브스토리 46은 77건을 먼저 완료한 후에야 진행 가능.",
      en:
        "1) After credits, clear every remaining substory in Premium Adventure. Sub 46 becomes available once you've completed 77 others.",
    },
    {
      ko:
        "2) 77건 완료 시 카무로초 칠드런즈 파크 또는 텐카이치 거리에서 「검은 양복의 남자」 자동 등장 → 서브 46 진행.",
      en:
        "2) With 77 done, the Man in Black auto-spawns (Children's Park / Tenkaichi St.) — start Sub 46.",
    },
    {
      ko:
        "3) 조 아몬과 격투 → 격파 시 트로피 발동. 회복 아이템 풀 + 강력 무기 사전 준비 필수.",
      en:
        "3) Beat Jo Amon. Bring full healing and a strong weapon.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
};

// 「놀이를 제패한 남자」 — 모든 미니게임 1회. Steam api_name: 23_what_a_player.
const allMinigamesPlayed: CuratedGuide = {
  summary: {
    ko:
      "Yakuza Kiwami의 모든 미니게임을 최소 1회씩 플레이하면 발동. 컴플리트 리스트의 「미니게임」 카테고리가 모두 카운트 상태여야 합니다. 캐바쿠라(유이/리나)·다트·당구·볼링·마작·코이코이·블랙잭·룰렛·바카라·캣 파이트·메스킹·포켓 서킷·클럽 세가 아케이드·낚시·KO.J 등 모두 대상.",
    en:
      "Touch every Kiwami minigame at least once — cabaret, darts, billiards, bowling, mahjong, koi-koi, blackjack, roulette, baccarat, cat fight, MesuKing, Pocket Circuit, every Club Sega arcade, fishing, KOJ.",
  },
  steps: [
    {
      ko:
        "1) 카무로초 클럽 세가의 모든 아케이드 캐비넷 1회씩 플레이.",
      en:
        "1) Run every Club Sega cabinet at least once.",
    },
    {
      ko:
        "2) 도박 라인(마작·코이코이·블랙잭·룰렛·바카라·체프) 모두 1라운드 플레이 + 술집 미니게임(다트·당구·볼링) 진행.",
      en:
        "2) Play every gambling table + bar minigames.",
    },
    {
      ko:
        "3) 캐바쿠라(유이/리나) 첫 데이트 + 캣 파이트 1매치 + 메스킹 1매치 + 포켓 서킷 1레이스로 누적 카운트 완료.",
      en:
        "3) Open cabaret dates (Yui/Rina), one cat fight, one MesuKing match, one Pocket Circuit race to finish coverage.",
    },
    {
      ko:
        "4) 컴플리트 리스트 「미니게임」 카테고리가 모두 카운트되면 트로피 발동.",
      en:
        "4) Trophy fires when the Minigames category lists every entry as touched.",
    },
  ],
  tips: [
    {
      ko:
        "[마작] 막막하면 「리치+탄야오」 한 패턴만 노리세요. 펑/치로 손패를 공개하지 말고(닫은 손) 2~8 숫자패만 모아 텐파이가 되면 리치 선언 → 역이 자동으로 붙어 화료됩니다. Kiwami 마작은 표준 일본 리치 룰이라 Y0와 동일하게 통합니다.",
      en:
        "[Mahjong] If it feels impossible, aim for just one pattern: Riichi + Tanyao. Keep your hand closed (no Pon/Chi), collect only simples (2–8), and declare Riichi the moment you're tenpai — a yaku attaches automatically. Kiwami uses standard Japanese riichi rules, so the same trick from Y0 works.",
    },
    {
      ko:
        "[당구·캐롬] 「고스트 볼」 원리입니다. 목적구를 포켓에 넣으려면 포켓의 정반대편 목적구 표면 지점을 큐볼이 때리도록 조준선을 맞추세요. 처음엔 회전을 끄고 조준 정확도를 풀파워보다 우선합니다.",
      en:
        "[Billiards] Use the 'ghost ball' rule: aim so the cue ball strikes the point on the object ball directly opposite the pocket. Leave spin off at first and value aim over power.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742",
  sourceLabel: {
    ko: "Steam Community — Yakuza Kiwami Achievement Guide",
    en: "Steam Community — Yakuza Kiwami Achievement Guide",
  },
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
};
