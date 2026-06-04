import type { CollectiblesData } from "./types";

export const likeADragonIshin: CollectiblesData = {
  appId: 1805480,
  categories: [
    {
      slug: "trooper-cards",
      title: { ko: "소년이여, 대원을 품어라 — 대원 100명", en: "Trooper Recruits — 100 Members" },
      summary: {
        ko: "대원을 100명 이상 모으면 「소년이여, 대원을 품어라」 업적 발동. 카드는 사이드 미션·콜로세움·또 하나의 삶 보상으로 누적됩니다.",
        en: "Recruit 100+ Troopers to unlock 'Embrace the Troopers, Lad'. Cards accumulate via side missions, the Arena, and Another Life rewards.",
      },
    },
  {
    slug: "trooper-cards-detail",
    title: { ko: "대원 카드 — 4티어 + 핵심 영입 카드 일람", en: "Trooper Cards — 4 Tiers + Key Pickups" },
    summary: { ko: "료마의 대원 시스템에서 카드를 모아 덱(전투용 4명 + 빠른 발사 보조)을 구성합니다. 카드는 4티어로 나뉘며, S랭크 카드 일부는 사이드 미션·콜로세움 보상 한정입니다.", en: "Build Ryoma's Trooper deck (4 combat + 1 quick-fire support). Cards fall into 4 tiers (C / B / A / S). Many S-rank cards drop only from side missions or the Arena." },
    tips: [
        { ko: "동일 캐릭터의 카드는 합치면 강해지므로 중복 입수가 곧 강화입니다. 신사 봉헌으로 카드 확률 보너스도 챙기세요.", en: "Duplicates merge to upgrade — keep collecting copies. Shrine offerings boost card drop chances." },
        { ko: "카드 효과는 스타일(전사/검·총·전기) 별로 다르므로 자기 주력 스타일과 매칭하는 편이 효율적입니다.", en: "Effects vary by combat style (Brawler / Swordsman / Gunman / Wild Dancer). Match cards to your main style." },
    ],
    source: { label: "龍が如く 維新! 極 — 隊士カード", url: "https://dswiipspwikips3.jp/ryu_ishin/" },
    items: [
      {
        number: 1,
        title: { ko: "C랭크 — 입문 카드", en: "C-Rank — Starter Cards" },
        location: { ko: "초반 장", en: "Early chapters" },
        body: { ko: "메인 진행 + 일반 전투 보상으로 풀리는 기본 카드입니다. 덱 초기 구성용.", en: "Default cards from main story + street fight rewards — fills the initial deck." },
      },
      {
        number: 2,
        title: { ko: "B랭크 — 표준 카드", en: "B-Rank — Standard Cards" },
        location: { ko: "사이드 미션 + 신사 봉헌", en: "Side missions + shrine offerings" },
        body: { ko: "신사 봉헌과 일반 사이드 미션 보상으로 입수. 효과가 본격적으로 차이를 만들기 시작합니다.", en: "Earned from offerings + standard side missions. Stat differences begin to matter here." },
      },
      {
        number: 3,
        title: { ko: "A랭크 — 고급 카드", en: "A-Rank — Advanced Cards" },
        location: { ko: "콜로세움 + 또 하나의 삶 + 후반 사이드 미션", en: "Arena + Another Life + late-game missions" },
        body: { ko: "콜로세움 매치, 또 하나의 삶 농사/요리 보상, 후반 사이드 미션에서 풀립니다. 핵심 카드가 다수 포진.", en: "Arena matches, Another Life farming/cooking, and late side missions. Many key cards reside here." },
      },
      {
        number: 4,
        title: { ko: "S랭크 — 최강 카드", en: "S-Rank — Top-Tier Cards" },
        location: { ko: "얼티밋 챌린지 + 콜로세움 최심부 + 특수 사이드 미션", en: "Ultimate Challenges + deepest Arena + special side missions" },
        body: { ko: "엔딩 후 얼티밋 챌린지 + 콜로세움 최심부 + 특수 사이드 미션 한정. 풀 덱 완성에 필수.", en: "Locked behind Ultimate Challenges + deepest Arena + special side missions. Required for the full deck." },
        reward: { ko: "달성 목록 「대원 카드 컴플리트」 업적", en: "Trooper Card Completion achievement" },
      },
    ],
  },
  ],
};
