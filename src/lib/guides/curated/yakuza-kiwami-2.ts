import type { CuratedGuide } from "./index";

const YAKUZA_KIWAMI_2_APP_ID = 3717340;

// Yakuza Kiwami 2 플래티넘. Steam api_name: lexus2_platinum.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Yakuza Kiwami 2 플래티넘 — 다른 58개 업적 전부 해금 시 자동 발동. K2는 영구 미서블이 0인 가장 너그러운 작품이라 Premium Adventure에서 자유롭게 모든 컴플리션을 정리할 수 있습니다. 핵심 게이트는 ①캐바쿠라 그랑프리 우승 ②클랜 크리에이터(고로마루 라인) 풀 진행 ③신세이초 건설(토지·인부) ④마지마 사가 ⑤EX-HARD/LEGEND 클리어 ⑥아몬 격파.",
    en:
      "K2's platinum auto-pops at full unlock. Zero permanent missables — everything is reachable in Premium Adventure. Gates: ① Cabaret Grand Prix win ② Clan Creator full line ③ Shinseicho Construction ④ Majima Saga ⑤ EX-HARD/LEGEND ⑥ Amon.",
  },
  steps: [
    {
      ko:
        "1) 메인 스토리 진행과 별개로 「마지마 사가」를 메인 메뉴에서 별도 선택해 진행. 본편 챕터 7 클리어 전후 어디서든 가능하지만 잊기 쉽습니다.",
      en:
        "1) Start the Majima Saga from the main menu — it runs separately from Kiryu's story. Easy to forget; trigger it around Ch.7.",
    },
    {
      ko:
        "2) 캐바쿠라 그랑프리(소텐보리·카무로초) — 「축 그랑프리 우승!」 + 「인기 스카우트맨」(30명 캬바걸 영입) + 「키류의 고민 상담실」(전 플래티넘 캐스트 고민 청취) 3종 동시 진행.",
      en:
        "2) Cabaret Grand Prix (Sotenbori + Kamurocho) — three trophies pair: win the GP, recruit 30 hostesses, hear out every Platinum Cast's troubles.",
    },
    {
      ko:
        "3) 「신세이초 건설(토건업)」 — 토지·인부 관리 미니게임을 챕터 진행과 병행. 직원 영입(서브스토리)이 진행에 묶여 있어 메인 스토리와 동시에 정리해야 효율적.",
      en:
        "3) Shinseicho Construction — manage land/workers alongside the story. Staff recruitment is gated on subs, so run them together.",
    },
    {
      ko:
        "4) 클랜 크리에이터(고로마루 라인) — 키류 클랜으로 적 클랜을 격파하며 진행. 「고로마루 라인」 완주 시 별도 보상 + 트로피.",
      en:
        "4) Clan Creator — push the Goromaru storyline. Completing it grants gear and a unique trophy.",
    },
    {
      ko:
        "5) Premium Adventure에서 잔여 서브스토리·캐바쿠라·미니게임 마무리. 아몬은 다른 모든 서브 완료 후 등장.",
      en:
        "5) Premium Adventure mop-up for subs/cabaret/minigames. Amon spawns only after every other sub is done.",
    },
    {
      ko:
        "6) 새 회차에서 EX-HARD 또는 LEGEND 메인 스토리 클리어. 진행도/스킬이 이월되어 직주행으로 충분.",
      en:
        "6) Fresh save on EX-HARD/LEGEND; carry-over makes a story-sprint enough.",
    },
  ],
  tips: [
    {
      ko:
        "마지마 사가는 본편과 별개 시나리오로, 본편을 끝낸 뒤에도 잊고 지나가는 사례가 많습니다. 그랑프리·아몬 라인이 본편에 묶여 있지 않아 시간이 가장 적게 듭니다.",
      en:
        "Don't forget Majima Saga — it sits in the main menu, separate from Kiryu's story.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-2-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami 2 Trophy Guide", en: "PowerPyx — Yakuza Kiwami 2 Trophy Guide" },
};

// 「전설의 사나이」 LEGEND 클리어. Steam: lexus2_legend_clear.
const legendK2: CuratedGuide = {
  summary: { ko: "Kiwami 2 메인 스토리를 LEGEND 난이도로 클리어 시 발동. 엔딩 후 「클리어 후 모드」에서 해금되며, 1회차 진행도·드래곤 엔진 액션 트리·장비 이월. 시리즈 LEGEND 중 가장 무난한 편으로 직주행 가능.", en: "Clear K2 on LEGEND post-credits. Carry-over makes a story-sprint viable." },
  steps: [
    { ko: "1) 엔딩 후 클리어 데이터 → LEGEND 새 회차 시작.", en: "1) Clear Data → LEGEND fresh save." },
    { ko: "2) 드래곤 엔진 액션 트리(맨손 카운터·가드 브레이크)를 풀로 강화 후 도전.", en: "2) Max the Dragon Engine action tree first." },
    { ko: "3) 챕터 14 라스트 보스 클리어 시 트로피 발동.", en: "3) Ch.14 final boss kill fires it." },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-2-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami 2 Trophy Guide", en: "PowerPyx — Yakuza Kiwami 2 Trophy Guide" },
};

// 「달성 목록 전부 제패!」 100% 컴플리트. Steam: lexus2_tasseimkokuroku_all_clear.
const completionK2: CuratedGuide = {
  summary: { ko: "Kiwami 2 컴플리트 리스트 100% 도달 시 발동. 영구 미서블 0이므로 Premium Adventure에서 자유롭게 마무리 가능. 핵심 카테고리: 캐바쿠라 그랑프리(인기 스카우트맨 + 키류 고민 상담실), 신세이초 건설(클랜 크리에이터), 마지마 사가, 음식점·미니게임·서브스토리.", en: "Reach 100 % on K2's Completion List. Zero missables — Premium Adventure cleans everything." },
  steps: [
    { ko: "1) 캐바쿠라 그랑프리에서 30명 캬바걸 영입(인기 스카우트맨) + 플래티넘 캐스트 5명 고민 청취(키류 고민 상담실).", en: "1) Cabaret Grand Prix: 30 hostesses + 5 Platinum Cast troubles." },
    { ko: "2) 마지마 건설 클랜 크리에이터 스토리 풀 클리어 + 적 클랜 모두 격파.", en: "2) Majima Construction Clan Creator story + all rival clans." },
    { ko: "3) 본편 음식점·플레이 스폿·웨펀 마스터·물품 보관함·드링크 마스터 등 잔여 카테고리를 컴플리트 리스트로 점검하며 마감.", en: "3) Sweep restaurants, play spots, weapons, lockers, drinks per the Completion List." },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-2-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami 2 Trophy Guide", en: "PowerPyx — Yakuza Kiwami 2 Trophy Guide" },
};

// 「축 그랑프리 우승!」 캐바쿠라 그랑프리. Steam: lexus2_cabaret_island_gp_all_clear.
const cabaretGPK2: CuratedGuide = {
  summary: { ko: "캐바쿠라 그랑프리(소텐보리·카무로초)에서 매장 운영을 통해 최종 챔피언 라이벌 매장을 격파하고 그랑프리 우승 시 발동. 호스티스 영입 + 의상 강화 + 시프트 운영으로 매장 매출을 라이벌 이상으로 끌어올려야 진행.", en: "Win the Cabaret Grand Prix by topping the rival club's revenue. Recruit hostesses, buy outfits, run shifts." },
  steps: [
    { ko: "1) 챕터 3 이후 캐바쿠라 그랑프리 시스템 해금 → 첫 호스티스 영입 + 첫 시프트.", en: "1) Unlock the Cabaret Grand Prix after Ch.3 and recruit the first hostess." },
    { ko: "2) 의상·헤어 강화 + 동반 출근으로 캐스트 평가 1위. 라이벌 매장과의 매출 대결 단계별 격파.", en: "2) Outfit + companion buffs to push to #1, then beat each rival shop's revenue in sequence." },
    { ko: "3) 그랑프리 결승 우승 시 트로피 발동. 「인기 스카우트맨」(30명) + 「키류의 고민 상담실」 라인도 동시 진행하면 효율적.", en: "3) Win the finale for the trophy. Pair with the 30-hostess + Platinum Cast trophies." },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-2-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami 2 Trophy Guide", en: "PowerPyx — Yakuza Kiwami 2 Trophy Guide" },
};

// 「전설의 건설회사」 클랜 크리에이터 스토리. Steam: lexus2_clan_creater_clear.
const clanCreatorK2: CuratedGuide = {
  summary: { ko: "마지마 건설(클랜 크리에이터) 스토리를 끝까지 진행하면 발동. 5개 적 클랜과의 클랜 배틀 시리즈 클리어 + 「전설의 클랜」 격파가 마지막. 직원 영입(서브스토리)과 스토리 진행이 동시에 묶여 있어 메인과 병행 진행이 효율적.", en: "Clear Clan Creator's full story — defeat 5 rival clans + the Legendary Clan. Staff recruitment via subs runs in parallel." },
  steps: [
    { ko: "1) 챕터 3 이후 마지마 건설 본부 입장 → 첫 클랜 배틀 진행 + 서브스토리로 신규 직원 영입.", en: "1) Past Ch.3, run the first clan battle + recruit staff via subs." },
    { ko: "2) 5개 라이벌 클랜을 차례로 격파 — 각 격파 시 신규 직원 + 강력 무기 보상.", en: "2) Defeat 5 rival clans in sequence — each unlocks new staff + gear." },
    { ko: "3) 「전설의 클랜」 최종 보스 격파 시 트로피 발동.", en: "3) Beat the Legendary Clan for the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-2-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami 2 Trophy Guide", en: "PowerPyx — Yakuza Kiwami 2 Trophy Guide" },
};

// 「아몬과 결판」 아몬 격파. Steam: lexus2_amon_gekiha.
const amonK2: CuratedGuide = {
  summary: { ko: "다른 모든 서브스토리 클리어 후 발생하는 「아몬 격투」 서브를 진행해 조 아몬을 격파하면 발동. K2의 아몬은 시리즈 최고난도 보스 중 하나로, 회복 아이템 + 강력 무기 + 풀 스킬 트리가 필수.", en: "Beat Jo Amon after every other sub is done. One of the series' toughest fights — stock heals + max styles." },
  steps: [
    { ko: "1) 모든 서브스토리 클리어 후 텐카이치 거리 또는 칠드런즈 파크에서 검은 양복의 아몬 등장 → 서브 트리거.", en: "1) After every sub is done, the Amon spawns at Tenkaichi/Children's Park." },
    { ko: "2) 회복 아이템 풀 + 강력 무기(키류 다이아몬드 무기 등) + 액션 트리 풀. 카운터 콤보 + 가드 브레이크 사용.", en: "2) Stock heals + diamond-tier weapon + maxed action tree. Counter + guard-break combos work." },
    { ko: "3) 격파 시 트로피 + 보상 의상 「아몬 슈트」.", en: "3) Beat him for the trophy + Amon Suit outfit." },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-2-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami 2 Trophy Guide", en: "PowerPyx — Yakuza Kiwami 2 Trophy Guide" },
};

// 「마지마가 사는 방식」 마지마 사가 완주. Steam: lexus2_majima_story_all_clear.
const majimaSaga: CuratedGuide = {
  summary: { ko: "마지마 사가(메인 메뉴에서 별도 선택 가능한 마지마 시점 외전)를 끝까지 클리어하면 발동. 본편과 분리된 시나리오라 본편 진행 전후 어느 시점이든 진행 가능하지만 잊고 지나가는 사례가 많음.", en: "Clear Majima Saga, the separate Majima-perspective spin-off accessed from the main menu. Easy to forget — it runs apart from Kiryu's story." },
  steps: [
    { ko: "1) 메인 메뉴에서 「마지마 사가」 선택 → 첫 챕터 시작. 본편 챕터 7 클리어 전후 어디서든 시작 가능.", en: "1) Pick Majima Saga from the main menu; start any time around Kiryu's Ch.7." },
    { ko: "2) 마지마 사가 챕터를 끝까지 진행. 1회차 분량이 짧아 5~8시간이면 완주.", en: "2) Push through Majima Saga's chapters — short, ~5~8 hr to clear." },
    { ko: "3) 엔딩 직후 트로피 발동 + 본편 키류의 액션 트리에 매드 도그 스타일 노드 추가.", en: "3) Trophy fires on credits + Kiryu gains Mad Dog style nodes." },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-2-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami 2 Trophy Guide", en: "PowerPyx — Yakuza Kiwami 2 Trophy Guide" },
};

// 「인기 스카우트맨」 30명 캬바걸 영입. Steam: lexus2_cabaret_island_scout.
const popularScout: CuratedGuide = {
  summary: { ko: "캐바쿠라 그랑프리에서 재적 중인 캬바걸 누적 30명 도달 시 발동. 영입은 그랑프리 진행 보상 + 서브스토리 + 캐바걸 스카우트 미션으로 누적. 우승 후에도 영입 라인은 유지되므로 천천히 진행해도 됨.", en: "Have 30 hostesses on roster at once. Recruits via story progress, subs, and scout missions. The line stays open after the GP win." },
  steps: [
    { ko: "1) 캐바쿠라 그랑프리 메인 진행 → 스토리 보상으로 첫 ~10명 자동 영입.", en: "1) Main GP story drops the first ~10 recruits automatically." },
    { ko: "2) 거리에서 캬바걸 스카우트 마커 + 서브스토리 보상으로 추가 영입. 30명 도달 시 트로피 발동.", en: "2) Street scout markers + sub rewards fill out the roster. 30 fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-kiwami-2-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza Kiwami 2 Trophy Guide", en: "PowerPyx — Yakuza Kiwami 2 Trophy Guide" },
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
};
