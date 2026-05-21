import type { CuratedGuide } from "./index";

const PIRATE_APP_ID = 3061810;

// Pirate Yakuza in Hawaii 플래티넘. Steam api_name: platinum.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Like a Dragon: Pirate Yakuza in Hawaii 플래티넘 — 다른 61개 업적 전부 해금 시 자동 발동. 시리즈 중 가장 너그러운 100% 라인 중 하나로 영구 미서블 0. 핵심 게이트는 ①해적단 명성 「전설의 해적단」 ②Devil Flags 사이드 스토리 풀 ③파이리츠 콜로세움 ④미나토 걸 5인 라인 + The One ⑤Legend 난이도 클리어.",
    en:
      "Pirate Yakuza's platinum auto-pops at full unlock. One of the most forgiving 100 % runs in the series — zero permanent missables. Gates: ① pirate-crew fame to 'Legendary Pirate' ② Devil Flags side story ③ Pirates Coliseum ④ Minato Girl 5-line + The One ⑤ Legend clear.",
  },
  steps: [
    {
      ko:
        "1) 메인 스토리 챕터 2까지 진행해 해적단·해상 시스템을 모두 해금. 챕터 3에서 미나토 걸 라인 등 컴플리션 트로피 라인이 풀립니다.",
      en:
        "1) Push to Ch.2 to unlock pirate / naval systems, then Ch.3 opens the Minato Girl + completion lines.",
    },
    {
      ko:
        "2) Devil Flags 사이드 스토리 완료 → 파이리츠 콜로세움 후반 매치가 해금됩니다. 두 시스템이 직렬로 묶여 있어 Devil Flags 우선.",
      en:
        "2) Clear Devil Flags first — it unlocks the late Pirates Coliseum matches.",
    },
    {
      ko:
        "3) 미나토 걸 라인 — 챕터 3에서 라인 추가, 26~30번 5인 미니 라인 + 31번 「The One」으로 마무리. 컴플리션 보상 + 해적단 명성 + 콜로세움 + 고로마루 라인까지 동시에 진행됩니다.",
      en:
        "3) Minato Girl line — Ch.3 adds it; finish Subs 26~30 + 31 'The One.' Pairs with the pirate fame line.",
    },
    {
      ko:
        "4) 해적단 명성 — 사이드 미션·해상 전투·콜로세움 보상으로 명성을 누적해 「전설의 해적단」 랭크 도달. 5스테이지(어엿한 → 유명 → 초거물 → 전설) 별도 트로피 4종.",
      en:
        "4) Pirate fame — accumulate via side missions/sea battles/coliseum rewards, climbing 5 ranks for 4 separate trophies up to Legendary.",
    },
    {
      ko:
        "5) 엔딩 후 새 회차 Legend 난이도로 메인 스토리 클리어. 진행도 이월되어 스토리 직주행으로 충분.",
      en:
        "5) Post-credits: fresh save on Legend, story-sprint only.",
    },
  ],
  tips: [
    {
      ko:
        "Devil Flags → Pirates Coliseum 순서를 지키지 않으면 콜로세움 후반 매치 자체가 안 열립니다. 챕터 3 직후부터 Devil Flags 우선.",
      en:
        "Skip Devil Flags first and the late Coliseum matches never unlock — sequence matters.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Pirate Yakuza in Hawaii Trophy Guide", en: "PowerPyx — Pirate Yakuza in Hawaii Trophy Guide" },
};

// 「레전드 오브 콜로세움」 아몬. Steam: amon.
const amonPirate: CuratedGuide = {
  summary: { ko: "파이리츠 콜로세움의 최종 챔피언 매치(아몬 출현)에서 아몬을 격파해야 발동. 다른 모든 콜로세움 매치 클리어가 전제이며, 아몬은 시리즈 최고난도 보스급.", en: "Beat Amon in the Pirates Coliseum's final championship match. Every other Coliseum match must be cleared first." },
  steps: [
    { ko: "1) 파이리츠 콜로세움의 일반·에이스·마스터 매치 30종을 모두 우승.", en: "1) Win all 30 standard + Ace + Master coliseum tournaments." },
    { ko: "2) 모든 매치 완료 후 아몬 매치 자동 해금 → 도전 전 회복 아이템 + 강력 무기 비축.", en: "2) Clearing them unlocks the Amon match. Stock heals + strong weapons before entering." },
    { ko: "3) 아몬 격파 시 트로피 + 아몬 의상 보상.", en: "3) Beat Amon for the trophy + outfit reward." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Pirate Yakuza Trophy Guide", en: "PowerPyx — Pirate Yakuza Trophy Guide" },
};

// 「마스터 오브 콜로세움」 30종 대회 제패. Steam: arena_c.
const masterOfColiseum: CuratedGuide = {
  summary: { ko: "파이리츠 콜로세움에서 30종류의 대회를 모두 우승하면 발동. Devil Flags 사이드 스토리 완료가 일부 후반 매치 해금 조건.", en: "Win 30 Pirates Coliseum tournaments. Some late tournaments require Devil Flags side story completion." },
  steps: [
    { ko: "1) Devil Flags 사이드 스토리 풀 완료 → 콜로세움 후반 매치 자동 해금.", en: "1) Finish Devil Flags first — it unlocks late tournament tiers." },
    { ko: "2) 일반 → 에이스 → 마스터 차례로 우승. 무기·회복 비축으로 안전하게.", en: "2) Win Standard → Ace → Master tiers in sequence." },
    { ko: "3) 30종 모두 우승 시 트로피 발동.", en: "3) 30 wins fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Pirate Yakuza Trophy Guide", en: "PowerPyx — Pirate Yakuza Trophy Guide" },
};

// 「에이스 오브 콜로세움」 20종 대회. Steam: arena_b.
const aceOfColiseum: CuratedGuide = {
  summary: { ko: "파이리츠 콜로세움에서 20종류의 대회 우승 시 발동. 「마스터 오브 콜로세움」 30종 라인의 중간 단계.", en: "Win 20 Pirates Coliseum tournaments. Mid-step toward Master of Coliseum (30)." },
  steps: [
    { ko: "1) Devil Flags 진행과 병행해 콜로세움 매치를 차례로 클리어.", en: "1) Win matches in sequence while Devil Flags ramps." },
    { ko: "2) 20번째 우승 직후 트로피 발동.", en: "2) Trophy fires on win #20." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Pirate Yakuza Trophy Guide", en: "PowerPyx — Pirate Yakuza Trophy Guide" },
};

// 「하와이 스피드왕을 향한 길」 드래곤 카트 3종 컵 우승. Steam: dragon_cart.
const dragonCartHawaii: CuratedGuide = {
  summary: { ko: "하와이 드래곤 카트의 3종류 컵에서 모두 우승하면 발동. Y7·Y8의 카트와 다른 신규 코스 + 무기 시스템이 추가됨.", en: "Win all 3 Hawaii Dragon Kart cups. New courses + weapon mechanics vs. Y7/Y8 Kart." },
  steps: [
    { ko: "1) 챕터 진행 중 드래곤 카트 해금 → 첫 컵 출전.", en: "1) Unlock Dragon Kart and enter the first cup." },
    { ko: "2) 부품 강화 후 3개 컵 모두 우승. 무기 사용으로 라이벌 처리가 핵심.", en: "2) Upgrade parts, then win all 3 cups — weaponize against rivals." },
    { ko: "3) 3개 컵 우승 시 트로피 발동.", en: "3) Three-cup sweep fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Pirate Yakuza Trophy Guide", en: "PowerPyx — Pirate Yakuza Trophy Guide" },
};

// 「크레이지 선장」 크레이지 딜리버리 모든 코스. Steam: delivery_clear.
const crazyCaptain: CuratedGuide = {
  summary: { ko: "하와이의 크레이지 딜리버리 모든 코스를 클리어하면 발동. 챕터 진행과 함께 새 코스가 추가되며, ★3 클리어가 100% 라인 조건은 아닙니다 — 단순 클리어로 충분.", en: "Clear every Crazy Delivery course. New courses unlock per chapter; only clears (not ★3) are required." },
  steps: [
    { ko: "1) 챕터 진행 중 코스가 추가될 때마다 즉시 클리어.", en: "1) Knock out each new course as it appears." },
    { ko: "2) 시간 제한 안에 코스 끝까지 도달하면 클리어 카운트. 점프대·지름길 활용.", en: "2) Finish within the timer; use jumps/shortcuts to bank time." },
    { ko: "3) 모든 코스 클리어 시 트로피 발동.", en: "3) Trophy fires on full clear." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Pirate Yakuza Trophy Guide", en: "PowerPyx — Pirate Yakuza Trophy Guide" },
};

// 「패션 마스터」 100종 코디네이트. Steam: coordinate_c.
const fashionMaster: CuratedGuide = {
  summary: { ko: "100종류 이상의 코디네이트 아이템을 획득하면 발동. 의류 상점·미니게임 포인트 보상·하와이 상자 등에서 의류를 수집. 색상만 다른 모델은 별개 카운트로 잡히지 않을 수 있으니 신규 모델 위주로 수집.", en: "Obtain 100+ outfit items. Recolors may not count — focus on unique models." },
  steps: [
    { ko: "1) 하와이 의류 상점에서 모델별 1벌씩 구매.", en: "1) Buy one of each unique model at Hawaii's clothing shops." },
    { ko: "2) 미니게임 포인트 보상 + 상자 보상으로 추가 모델 누적.", en: "2) Add models via minigame point rewards + chests." },
    { ko: "3) 100종 도달 시 트로피 발동.", en: "3) 100 unique items fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Pirate Yakuza Trophy Guide", en: "PowerPyx — Pirate Yakuza Trophy Guide" },
};

// 「가정적인 일면」 모든 요리. Steam: cooking.
const allCooking: CuratedGuide = {
  summary: { ko: "하와이 거점(고로마루 호) 또는 캠프에서 모든 요리 레시피를 제작하면 발동. 재료 수집 + 레시피 해금이 전제.", en: "Cook every recipe at the Goromaru / camp kitchen. Needs materials + unlocked recipes." },
  steps: [
    { ko: "1) 챕터 진행과 함께 레시피 해금. 식료품 상점·서브스토리 보상으로 추가 레시피.", en: "1) Unlock recipes via story + shop + sub rewards." },
    { ko: "2) 각 레시피를 1회씩 제작. 재료가 부족하면 채집·구매로 보충.", en: "2) Cook each recipe once; gather/buy missing materials." },
    { ko: "3) 모든 레시피 제작 시 트로피 발동.", en: "3) Trophy fires on full cookbook." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Pirate Yakuza Trophy Guide", en: "PowerPyx — Pirate Yakuza Trophy Guide" },
};

export const LIKE_A_DRAGON_PIRATE_CURATED: Record<string, CuratedGuide> = {
  [`${PIRATE_APP_ID}:platinum`]: platinum,
  [`${PIRATE_APP_ID}:amon`]: amonPirate,
  [`${PIRATE_APP_ID}:arena_c`]: masterOfColiseum,
  [`${PIRATE_APP_ID}:arena_b`]: aceOfColiseum,
  [`${PIRATE_APP_ID}:dragon_cart`]: dragonCartHawaii,
  [`${PIRATE_APP_ID}:delivery_clear`]: crazyCaptain,
  [`${PIRATE_APP_ID}:coordinate_c`]: fashionMaster,
  [`${PIRATE_APP_ID}:cooking`]: allCooking,
};
