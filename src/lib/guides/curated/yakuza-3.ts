import type { CuratedGuide } from "./index";

const YAKUZA_3_APP_ID = 1088710;

// "걸어다니는 은행" — Walking Bank. 누적 9,999,999엔 보유 트로피.
// 6장에서 받는 1회성 「제로 보석」 치트 아이템이 룰렛에서 큰 자금원이 되어
// 직접 연관. Premium Adventure에서도 자금 누적은 가능하므로 영구 미서블은
// 아니지만, 제로 보석을 놓치면 자금 모으기 난이도가 크게 올라갑니다.
// Steam api_name: achievement_47.
const walkingBank: CuratedGuide = {
  summary: {
    ko:
      "키류가 한 번에 9,999,999엔 이상의 자금을 보유해야 트로피 발동. 메인 진행만으로는 모이지 않으므로 미니게임/도박 + 6장 리키야 라인에서 받는 1회성 「제로 보석」을 활용해 룰렛/카지노 자금을 폭주시키는 것이 가장 빠릅니다. 보유액 기준이라 사용 직전에 카운트되므로 큰 지출 전에 잔액을 확인하세요.",
    en:
      "Stockpile ¥9,999,999 in Kiryu's wallet at once. The fastest route uses the one-time \"Zero Jewel\" cheat item from Chapter 6's Rikiya line — feed it into roulette/casino for explosive growth. The trophy checks current balance, so verify before any big purchase.",
  },
  steps: [
    {
      ko:
        "1) 6장 진행 중 리키야 동행 라인을 정리해 「제로 보석」을 반드시 수령. 다른 보석류와 섞이지 않게 분리 보관.",
      en:
        "1) During Chapter 6 with Rikiya in tow, complete his Kamurocho line to receive the one-shot Zero Jewel. Keep it separate so it doesn't get sold by mistake.",
    },
    {
      ko:
        "2) 카무로초 카지노에서 룰렛 플레이 시작 — 「제로 보석」을 사용하면 다음 1회의 룰렛 결과가 0번 그린에 떨어지도록 조작됩니다. 그 1회에 최대 베팅(가능한 모든 칩)을 0에 올인.",
      en:
        "2) At the Kamurocho casino, start a roulette session — using the Zero Jewel rigs the next spin to land on 0 (green). Max-bet every chip on 0 in that single spin.",
    },
    {
      ko:
        "3) 룰렛 0 적중 시 35배 배당으로 칩이 폭증. 칩을 사은품 라인 중 「플래티넘 접시(¥500,000)」 같은 고가 상품으로 모두 교환한 뒤 전당포에서 현금화.",
      en:
        "3) Hitting 0 pays out 35× — convert the chip pile into high-value prizes like Platinum Plates (¥500,000 each) at the prize counter, then cash them at the pawn shop.",
    },
    {
      ko:
        "4) 자금이 모자라면 미니게임(마사지·골프·낚시 등), 카바레 등으로 추가 적립. 9,999,999엔 보유 시점에 트로피 발동.",
      en:
        "4) If still short, top up with minigames (massage, golf, fishing) and cabaret jobs. The trophy pops the instant your balance ticks ¥9,999,999.",
    },
  ],
  tips: [
    {
      ko:
        "「제로 보석」은 6장에서만 1회 한정 지급되며, 사용 즉시 소모됩니다. 룰렛 외 다른 게임에서는 효과가 없으니 반드시 룰렛에서 사용하세요.",
      en:
        "The Zero Jewel is a one-shot Chapter 6 item and consumes on use — only roulette accepts it, so don't waste it elsewhere.",
    },
    {
      ko:
        "트로피는 「보유액」 기준이라 큰 장비를 사거나 부동산에 투자하면 즉시 잔액이 줄어 카운트가 풀립니다. 잔액 확정 직후 다른 트로피 진행도 같이 처리하면 효율적입니다.",
      en:
        "The trophy reads current balance — buying gear or investing in property drops it instantly. Knock out other money-dependent trophies at the same balance peak.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-3-remastered-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Yakuza 3 Trophy Guide",
    en: "PowerPyx — Yakuza 3 Trophy Guide",
  },
};

// "퍼펙트 서브 스토리" — All substories cleared. Rikiya 동행 / 하루카 동행
// 한정 서브스토리를 메인 회차에서 놓치면 Premium Adventure에서만 회수 가능.
// Steam api_name: achievement_16.
const perfectSubstory: CuratedGuide = {
  summary: {
    ko:
      "야쿠자 3의 모든 서브스토리를 클리어하면 트로피 발동. 6장 리키야 동행, 하루카 동행 시퀀스처럼 메인 진행 중 단발적으로만 풀리는 서브가 여럿 있어, 장별로 컴플리션 리스트를 점검하며 진행해야 안전합니다. 영구 미스 요소는 아니므로 Premium Adventure에서도 회수 가능합니다.",
    en:
      "Clear every substory in Yakuza 3. Several only spawn during tagalong windows (Rikiya in Ch.6, Haruka on the beach, etc.), so chapter-check the Completion List before pushing the story. Not permanently missable — Premium Adventure can mop up.",
  },
  steps: [
    {
      ko:
        "1) 1~2장 (오키나와) — 모리닝글로리 고아원 주변과 류큐 거리의 서브스토리를 메인 진행 전에 정리. 「실력파 헌터」 같은 사냥 라인은 장를 넘기면 후반에 재방문해야 합니다.",
      en:
        "1) Chapters 1~2 (Okinawa) — clear Morning Glory orphanage and Ryukyu Street substories before advancing. Hunting-line subs (e.g. Ace Hunter) need a later revisit if skipped.",
    },
    {
      ko:
        "2) 4~6장 (카무로초) — 리키야가 동행하는 6장에서 「리키야의 고향 친구」 라인 등 동행 한정 서브를 반드시 처리. 장를 넘기면 Premium Adventure에서만 회수.",
      en:
        "2) Chapters 4~6 (Kamurocho) — finish Rikiya-tagalong-only substories (e.g. Hometown Girl) during Ch.6. Past that, only Premium Adventure recovers them.",
    },
    {
      ko:
        "3) 8~10장 — 카무로초·오키나와 양쪽에 새 서브가 추가됩니다. 하루카가 해변에 등장하는 시점의 「숨바꼭질」 등 시점 한정 서브도 함께 정리.",
      en:
        "3) Chapters 8~10 — new substories drop in both cities, including time-window subs (Haruka's beach hide-and-seek).",
    },
    {
      ko:
        "4) 모든 서브 클리어 후 컴플리트 리스트(시작 메뉴 → 컴플리트 → 서브스토리)의 카운트를 확인. 100%가 되는 순간 트로피 발동.",
      en:
        "4) Once the Completion List's substory counter hits 100 %, the trophy fires.",
    },
  ],
  tips: [
    {
      ko:
        "엔딩 후 Premium Adventure에서 시점 한정 서브도 다시 풀리지만, 메인 회차 안에서 정리해 두면 「걸어다니는 은행(자금)」 + 「Golden Pistol」 보상까지 일직선으로 잡을 수 있습니다.",
      en:
        "Premium Adventure does revive locked subs, but finishing in the main run also chains into the Walking Bank cash trophy + Golden Pistol weapon reward.",
    },
    {
      ko:
        "서브 No.80은 다른 모든 서브스토리 100%가 전제이므로, 마지막에 정리하는 게 자연스럽습니다.",
      en:
        "Substory No. 80 gates on 100 % of the rest, so save it for last by design.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-3-remastered-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Yakuza 3 Trophy Guide",
    en: "PowerPyx — Yakuza 3 Trophy Guide",
  },
};

// Yakuza 3 Remastered 플래티넘. Steam api_name: achievement_0.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Yakuza 3 Remastered 플래티넘 — 다른 49개 업적을 모두 해금하면 자동 발동. 핵심 게이트는 ①「최강의 증표」 EX-HARD 클리어 ②서브스토리 80건 전부 클리어 ③모든 미니게임 마스터(미니 게임 마스터·맛집·캐바쿠라 등) ④9,999,999엔 보유(걸어다니는 은행) ⑤투기장 모든 챌린지. 영구 미서블은 적지만 6장 동행 서브를 놓치면 Premium Adventure 추가 시간이 발생합니다.",
    en:
      "Y3R's platinum auto-pops when every other trophy is unlocked. Gates: ① EX-HARD clear ② 80 substories ③ minigame mastery (Master, Gourmet, cabaret) ④ ¥9,999,999 in wallet ⑤ Coliseum all challenges. Few permanent missables — but skipping Ch.6 tagalong subs costs Premium Adventure cleanup time.",
  },
  steps: [
    {
      ko:
        "1) 1회차 (Normal/Hard) — 장별로 서브스토리 정리 + 「제로 보석」을 6장에서 반드시 수령. 자금이 부족할 때 룰렛 0 적중으로 자금 확보.",
      en:
        "1) Run 1 — clear substories chapter by chapter; grab the Zero Jewel during Ch.6 and feed it into roulette when money gets tight.",
    },
    {
      ko:
        "2) 미니게임 컴플리션 — 골프·낚시·다트·당구·마작·화투·UFO 캐처·카라오케·맛집 등 모든 종목 「퍼펙트」 클리어. 메인 진행과 병행해야 마지막에 몰리지 않습니다.",
      en:
        "2) Minigame completion — golf/fishing/darts/billiards/mahjong/hanafuda/UFO catcher/karaoke/restaurant orders all to perfect grades. Spread them over the story so they don't dump at the end.",
    },
    {
      ko:
        "3) 「걸어다니는 은행(9,999,999엔)」 + 「인간 워처(전 NPC 친밀도)」 + 「전설의 챔피언(투기장 마스터)」 등 시간이 걸리는 라인은 사이드 시스템 해금 즉시 시작.",
      en:
        "3) Long-tail trophies (Walking Bank, Human Watcher, Coliseum Master) — start as soon as their systems unlock.",
    },
    {
      ko:
        "4) 「최강의 증표」 EX-HARD 1회 클리어 — 처음부터 EX-HARD로 시작하거나, 중간 난이도 상향이 안정적으로 카운트되는지 별도 세이브로 확인. 일부 리마스터 빌드는 도중 상향이 반영되지 않습니다.",
      en:
        "4) Clear EX-HARD — start there or keep a clean Hard save in case mid-run difficulty bumps don't credit (a known remaster quirk).",
    },
    {
      ko:
        "5) Premium Adventure에서 동행 한정 서브(리키야·하루카) + 「서브스토리 80건」 마무리. 모든 트로피 카운트 완료 시 플래티넘 발동.",
      en:
        "5) Premium Adventure picks up tagalong-locked subs (Rikiya, Haruka) and the 80-substory finish line — platinum fires at full count.",
    },
  ],
  tips: [
    {
      ko:
        "Yakuza 3 리마스터는 일부 빌드에서 도중 난이도 상향 시 「최강의 증표」가 발동하지 않는 사례가 보고됩니다. 안전하게 처음부터 EX-HARD로 시작하거나, 별도 세이브를 분리 보관하세요.",
      en:
        "Some remaster builds drop the EX-HARD trophy if you raise difficulty mid-run. Either start on EX-HARD or keep a clean save as backup.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-3-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 3 Trophy Guide", en: "PowerPyx — Yakuza 3 Trophy Guide" },
};

// "미니 게임 마스터" — Master every minigame. Steam api_name: achievement_40.
const minigameMaster: CuratedGuide = {
  summary: {
    ko:
      "Y3 Remastered의 모든 미니게임을 컴플리트해야 발동. 골프 「토너먼트 우승」, 낚시 「전 어종 도감」, 다트 「하이 스코어」, 볼링 「퍼펙트」, 당구 「전 패턴」, 마작·화투 「상위 수상」, UFO 캐처 「전 인형」, 가라오케 「전곡」 등 종목별 최고 레벨 보상을 모두 받아야 카운트됩니다.",
    en:
      "Master every Y3R minigame — golf tournament win, full fishing dex, darts high score, perfect bowling, all billiards patterns, mahjong/hanafuda top wins, UFO Catcher full doll set, every karaoke track.",
  },
  steps: [
    {
      ko:
        "1) 골프 — 카무로초의 코토부키 골프 컴퍼니, 또는 코스 골프장에서 「토너먼트 우승」까지 진행. 클럽 강화는 미리 끝내 두면 안정적.",
      en:
        "1) Golf — clear the Kotobuki Golf Company tournament. Upgrade clubs first for stability.",
    },
    {
      ko:
        "2) 낚시 — 류큐 거리 낚시터에서 도감의 모든 어종 등록. 시간대(낮/밤)와 미끼 종류가 어종마다 다르므로 가이드 옆에 두고 진행.",
      en:
        "2) Fishing — fill the species log at the Ryukyu pier. Time-of-day and bait gate specific species.",
    },
    {
      ko:
        "3) 클럽 세가 — UFO 캐처 전 인형 종류, 메다루펀치, 비밀 회선, 버추어 파이터 등 모든 아케이드 게임 클리어 조건 달성.",
      en:
        "3) Club Sega — every UFO Catcher doll, Boxcelios, Sega Network, Virtua Fighter clears.",
    },
    {
      ko:
        "4) 가라오케 — 전곡(7~8곡) 모두 최소 1회 플레이 + 일정 점수 이상.",
      en:
        "4) Karaoke — all 7~8 tracks at the required score.",
    },
    {
      ko:
        "5) 마사지(아로마)·다트·당구·볼링·마작·화투·체스·장기 등 잔여 미니게임을 모두 1회 이상 완료. 컴플리트 리스트 「미니게임」 카테고리가 100%가 되면 트로피 발동.",
      en:
        "5) Wrap remaining minigames (massage parlor, darts, billiards, bowling, mahjong, hanafuda, chess, shogi). When the Minigames category hits 100 %, the trophy fires.",
    },
  ],
  tips: [
    {
      ko:
        "골프 토너먼트와 UFO 캐처 인형 운 요소가 가장 시간을 잡아먹습니다. 자금이 모이는 7장 이후에 본격 진행하는 게 효율적입니다.",
      en:
        "Golf tourney + UFO doll RNG are the biggest time sinks — push them post-Ch.7 once cash is comfortable.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-3-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 3 Trophy Guide", en: "PowerPyx — Yakuza 3 Trophy Guide" },
};

// 「최강의 증표」 — EX-HARD 클리어. Steam api_name: achievement_42.
const exHardClear: CuratedGuide = {
  summary: {
    ko:
      "엔딩 후 해금되는 EX-HARD 난이도로 메인 스토리를 클리어해야 발동. Y3 Remastered 일부 빌드에서는 도중 난이도 상향 시 카운트가 반영되지 않으므로, 처음부터 EX-HARD로 시작하거나 별도 세이브를 분리 보관해야 안전.",
    en:
      "Clear the main story on EX-HARD (post-credits unlock). Some remaster builds void mid-run difficulty bumps, so either start on EX-HARD or keep a clean save as a fallback.",
  },
  steps: [
    {
      ko:
        "1) 1회차 엔딩 클리어 후 메인 메뉴에서 「클리어 후 모드」 시작 → 난이도 EX-HARD 선택. 1회차 자원·스킬 이월.",
      en:
        "1) After credits, pick \"Clear Mode\" + EX-HARD. Your stats and inventory carry over.",
    },
    {
      ko:
        "2) 보스 패턴 학습 + 회복 아이템 풀 비축이 핵심. 일반 잡병도 데미지가 크게 늘어나므로 무기 휘두르기·환경 활용 적극.",
      en:
        "2) Pattern-read bosses and bank healing. Mobs hit hard too — lean on weapons and environmental hazards.",
    },
    {
      ko:
        "3) 12장 라스트 보스 클리어 시 트로피 발동. 일부 빌드에서 누락 시 별도 세이브로 1회차 EX-HARD 새 회차를 다시 시작해 클리어해야 합니다.",
      en:
        "3) Beating Ch.12's final boss fires the trophy. If the trophy fails, restart EX-HARD from a clean save.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-3-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 3 Trophy Guide", en: "PowerPyx — Yakuza 3 Trophy Guide" },
};

// 「전설의 챔피언」 — 투기장 모든 토너먼트 우승. Steam api_name: achievement_23.
const coliseumChampion: CuratedGuide = {
  summary: {
    ko:
      "카무로초 「산기슭 콜로세움(투기장)」의 모든 토너먼트를 우승하면 발동. 5장 이후 해금되며, 후반 토너먼트는 무기 봉인·집단 전투 등 조건이 까다로워집니다.",
    en:
      "Win every tournament at the Kamurocho Coliseum. Unlocks after Ch.5; later tiers add weapon bans and group-fight rules.",
  },
  steps: [
    {
      ko:
        "1) 5장 이후 카무로초 산기슭 콜로세움 입구에서 첫 토너먼트 출전 → 일반 → 워리어 → 챔피언 → 갓 라인 차례로 클리어.",
      en:
        "1) After Ch.5, enter the Coliseum and run Standard → Warrior → Champion → God tiers in order.",
    },
    {
      ko:
        "2) 회복 아이템 풀 + 강력 무기 사전 비축. 갓 라인은 「듀얼 포톤 블레이드(가드 불가)」 패턴을 가진 보스가 등장 — 좌우 콤보 사이에 타이거 드롭으로 카운터.",
      en:
        "2) Stock healing + strong weapons. God tier bosses use unguardable dual-photon-blade combos — Tiger Drop counters between the left/right hits.",
    },
    {
      ko:
        "3) 갓 라인 우승 시 트로피 발동 + 「산기슭 콜로세움 챔피언」 보상.",
      en:
        "3) Winning God-tier fires the trophy and grants the Coliseum Champion reward.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-3-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 3 Trophy Guide", en: "PowerPyx — Yakuza 3 Trophy Guide" },
};

// 「실력파 헌터」 — 모든 히트맨 격파. Steam api_name: achievement_17.
const hitmanHunter: CuratedGuide = {
  summary: {
    ko:
      "Y3 「히트맨」(보스급 NPC) 11명을 모두 격파하면 발동. 6장 이후 「히트맨 사냥꾼」 서브스토리를 통해 의뢰 시작. 각 히트맨은 카무로초·오키나와 곳곳에 등장하며 일부는 특정 시간대(낮/밤) 또는 특정 장 진행 후에만 출현합니다.",
    en:
      "Defeat all 11 Hitmen across Kamurocho and Okinawa. Triggered via the Ch.6 Hitman Hunter substory — some only appear at specific times of day or post-certain chapters.",
  },
  steps: [
    {
      ko:
        "1) 6장에서 카무로초 「히트맨 사냥꾼」 서브 진행 → 의뢰 목록 해금. 11명의 위치 + 출현 조건 확인.",
      en:
        "1) Trigger the Hitman Hunter sub in Ch.6 to unlock the list of 11 marks + their spawn conditions.",
    },
    {
      ko:
        "2) 시간대(낮/밤) 한정 히트맨은 인게임 시계를 맞춰서 조우. 일부는 메인 스토리 일정 장 진행 후에만 등장하니 가이드 확인.",
      en:
        "2) Some marks require day/night cycles — sync the in-game clock. Others gate on story chapters.",
    },
    {
      ko:
        "3) 11명 모두 격파 시 트로피 발동 + 보상 무기 「Golden Pistol」 진행도 연동.",
      en:
        "3) Beating all 11 fires the trophy and feeds the Golden Pistol weapon line.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-3-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 3 Trophy Guide", en: "PowerPyx — Yakuza 3 Trophy Guide" },
};

// 「맛집 마스터」 — 모든 음식점 가장 비싼 메뉴 주문. Steam api_name: achievement_21.
const gourmetMaster: CuratedGuide = {
  summary: {
    ko:
      "카무로초·오키나와의 모든 음식점에서 메뉴 중 가장 비싼 항목을 주문하면 발동. 메뉴 가격 비교 후 최고가 항목만 주문하면 컴플리트 리스트의 「음식점」 카테고리가 차례로 카운트됩니다.",
    en:
      "Order the priciest dish at every restaurant in Kamurocho and Okinawa. The Completion List's restaurant row ticks per unique top-price order.",
  },
  steps: [
    {
      ko:
        "1) 자금이 안정되는 7장 이후 음식점을 차례로 방문. 카무로초 라멘집·스시 긴·간다라·돈키호테 푸드코트 등 + 오키나와 와라바·우미가메테이 등.",
      en:
        "1) Past Ch.7, tour restaurants in both cities — Kamurocho ramen/sushi/Gandara, Okinawa Wara-ba/Umigame-tei.",
    },
    {
      ko:
        "2) 각 매장 메뉴판에서 가장 비싼 항목 1회 주문. 가격이 낮은 항목은 카운트 안 됨에 주의.",
      en:
        "2) Order the single highest-priced menu item — cheaper picks don't count.",
    },
    {
      ko:
        "3) 모든 음식점 컴플리트 시 트로피 발동.",
      en:
        "3) Every restaurant covered fires the trophy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-3-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 3 Trophy Guide", en: "PowerPyx — Yakuza 3 Trophy Guide" },
};

// 「서브 스토리 80」 — 80번 서브 클리어. Steam api_name: achievement_15.
const sub80: CuratedGuide = {
  summary: {
    ko:
      "서브스토리 80번은 다른 모든 서브(79건) 클리어가 전제. 모든 서브 컴플리션 라인이 차곡차곡 끝난 뒤에야 마지막 80번이 자동 발생합니다. 「퍼펙트 서브 스토리」 트로피와 직렬 연결.",
    en:
      "Sub 80 only triggers after every other sub (79) is cleared. Direct partner to the 'Perfect Substory' trophy.",
  },
  steps: [
    {
      ko:
        "1) 1~79번 서브를 차례로 클리어. 장 한정 동행 서브(리키야 ch.6, 하루카 등)를 메인 회차에서 정리해야 효율적.",
      en:
        "1) Knock out Subs 1~79, including the chapter-locked tagalong subs (Ch.6 Rikiya, Haruka).",
    },
    {
      ko:
        "2) 79번 완료 시 「가장 위대한 도우미」가 등장하며 서브 80번 자동 발생 → 클리어 시 트로피 발동.",
      en:
        "2) On Sub 79 the final NPC auto-spawns for Sub 80 — clear it for the trophy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-3-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 3 Trophy Guide", en: "PowerPyx — Yakuza 3 Trophy Guide" },
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
};
