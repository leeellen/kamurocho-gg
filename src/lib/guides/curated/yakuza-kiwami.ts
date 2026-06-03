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
      "Yakuza Kiwami 플래티넘 — 다른 54개 업적을 모두 달성하면 자동 발동. 핵심 게이트는 ①「마지마 에브리웨어」 모든 스폿/랭크 완료(SS 등급) ②컴플리션 리스트 100% ③EX-HARD/Legend 난이도 클리어 ④조 아몬 격파(서브스토리 78). Premium Adventure에서도 대부분 회수 가능해 영구 미서블 부담은 적습니다.",
    en:
      "All Kiwami's other trophies auto-platinum it. Big gates: ① Majima Everywhere to SS rank ② Completion List 100 % ③ EX-HARD/Legend clear ④ defeat Jo Amon via Sub 78. Premium Adventure recovers most missables, so the load is lighter than 0.",
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
        "4) 엔딩 후 Premium Adventure에서 누락 서브스토리·코마키류 수련 4종·하루카 손잡고 1km 등 잔여 컴플리션. 서브스토리 78 「대체 누가 죽인 것이냐!?」로 조 아몬과 격투.",
      en:
        "4) Premium Adventure mop-up: missed substories, all 4 Komaki training drills, Haruka 1 km hand-hold, and Sub 78 to fight Jo Amon.",
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
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami Trophy Guide", en: "PowerPyx — Yakuza Kiwami Trophy Guide" },
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
        "서브스토리 78 「대체 누가 죽인 것이냐!?」 (아몬 격투)는 다른 모든 서브스토리 완료가 전제 조건. 마지막에 정리하는 게 자연스러운 흐름입니다.",
      en:
        "Sub 78 (Jo Amon fight) requires every other substory done first — save it for last by design.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami Trophy Guide", en: "PowerPyx — Yakuza Kiwami Trophy Guide" },
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
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami Trophy Guide", en: "PowerPyx — Yakuza Kiwami Trophy Guide" },
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
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami Trophy Guide", en: "PowerPyx — Yakuza Kiwami Trophy Guide" },
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
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami Trophy Guide", en: "PowerPyx — Yakuza Kiwami Trophy Guide" },
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
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami Trophy Guide", en: "PowerPyx — Yakuza Kiwami Trophy Guide" },
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
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami Trophy Guide", en: "PowerPyx — Yakuza Kiwami Trophy Guide" },
};

// 「아몬 격파」 — 조 아몬 격투 (서브스토리 78). Steam api_name: 51_amon_defeated.
const amonDefeated: CuratedGuide = {
  summary: {
    ko:
      "Premium Adventure에서 다른 모든 서브스토리(77건)를 클리어한 뒤 서브스토리 78 「대체 누가 죽인 것이냐!?」를 진행하면 조 아몬과의 격투가 발생. 격파 시 트로피 + 「검은 양복의 아몬」 의상 보상.",
    en:
      "Clear every other substory (77) in Premium Adventure to unlock Sub 78 — Jo Amon's fight. Beating him fires the trophy and grants the Amon outfit.",
  },
  steps: [
    {
      ko:
        "1) 메인 스토리 엔딩 후 Premium Adventure에서 잔여 서브스토리 모두 클리어. 「퍼펙트 서브스토리(서브 78 직전)」 카운트가 컴플리트 리스트에서 확인 가능.",
      en:
        "1) After credits, clear every remaining substory in Premium Adventure — verify the count via the Completion List.",
    },
    {
      ko:
        "2) 77건 완료 시 카무로초 칠드런즈 파크 또는 텐카이치 거리에서 「검은 양복의 남자」 자동 등장 → 서브 78 진행.",
      en:
        "2) With 77 done, the Man in Black auto-spawns (Children's Park / Tenkaichi St.) — start Sub 78.",
    },
    {
      ko:
        "3) 조 아몬과 격투 → 격파 시 트로피 발동. 회복 아이템 풀 + 강력 무기 사전 준비 필수.",
      en:
        "3) Beat Jo Amon. Bring full healing and a strong weapon.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami Trophy Guide", en: "PowerPyx — Yakuza Kiwami Trophy Guide" },
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
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami Trophy Guide", en: "PowerPyx — Yakuza Kiwami Trophy Guide" },
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
};
