import type { CollectiblesData } from "./types";

export const likeADragonIshin: CollectiblesData = {
  appId: 1805480,
  categories: [
    {
      slug: "trooper-cards",
      title: { ko: "소년이여, 대원을 품어라 — 대원 100명", en: "Trooper Recruits — 100 Members" },
      summary: {
        ko: "전체 카드 풀은 약 400장이며, 그중 100장을 모으면 「소년이여, 대원을 품어라」 업적이 발동합니다. 완전 랜덤 가챠·전투 보상이라 개별 카드별 고정 위치는 존재하지 않습니다 — 여러 위키가 3년 넘게 시도했지만 400장 중 12장 이상을 문서화하지 못했습니다.",
        en: "The full card pool is roughly 400, and collecting 100 unlocks 'Drop and Give Me 100'. Cards drop from fully randomized gacha/combat rewards, so no individual card has a fixed location — even 3+ years post-launch, no wiki (English or Japanese) has documented more than a handful of the 400.",
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
  {
    slug: "pets",
    title: { ko: "또 하나의 삶 — 반려동물 6마리", en: "Another Life — All 6 Pets" },
    summary: {
      ko: "챕터 4부터 열리는 「또 하나의 삶」 농장 파트에서 개 3마리·고양이 3마리를 돌볼 수 있습니다. 각자 원하는 것이 다릅니다.",
      en: "Once the 'Another Life' farm sim opens in Chapter 4, you can befriend 3 dogs and 3 cats — each wants something different.",
    },
    source: { label: "Shacknews — Ishin Cats and Dogs Pet Locations", url: "https://www.shacknews.com/article/134282/like-a-dragon-ishin-cats-and-dogs-pet-locations" },
    items: [
      { number: 1, title: { ko: "짖는 개", en: "Barking Dog" }, location: { ko: "전당포 근처", en: "Near a pawn shop" }, body: { ko: "뼈다귀를 주면 바로 조용해지며 친해집니다.", en: "Give it a Bone to quiet it down and befriend it." } },
      { number: 2, title: { ko: "다친 개", en: "Injured Dog" }, location: { ko: "무쿠로가이 빈민가", en: "Mukurogai's slums" }, body: { ko: "기본 연고와 활력환 같은 치료 아이템으로 돌봐줘야 합니다.", en: "Needs healing items like basic Ointment and Vitality Pills." } },
      { number: 3, title: { ko: "참을성 있는 개", en: "Patient Dog" }, location: { ko: "특정 구역", en: "A specific district" }, body: { ko: "음식 종류를 가리지 않아 아무거나 줘도 됩니다.", en: "Not picky — any food works." } },
      { number: 4, title: { ko: "지저분한 고양이", en: "Filthy Cat" }, location: { ko: "선착장", en: "On a dock" }, body: { ko: "몇 차례 자동으로 씻겨주기만 하면 친해집니다.", en: "Just needs to be cleaned up several times — happens automatically." } },
      { number: 5, title: { ko: "배고픈 고양이", en: "Hungry Cat" }, location: { ko: "특정 구역", en: "A specific area" }, body: { ko: "처음엔 아무 음식이나 받다가 점점 도미, 나중엔 희귀한 청새치 참치까지 요구합니다.", en: "Accepts any food at first, then demands sea bream, and eventually a rare Bluefish Tuna." } },
      { number: 6, title: { ko: "행운의 고양이", en: "Lucky Cat" }, location: { ko: "특정 구역", en: "A specific district" }, body: { ko: "1000몬 → 2000몬 → 3000몬 → 5000몬 → 1료 순서로 금전 공양을 요구합니다.", en: "Requests money in sequence: 1,000 mon, 2,000 mon, 3,000 mon, 5,000 mon, then 1 ryo." } },
    ],
  },
  {
    slug: "fishing",
    title: { ko: "낚시 — 어종 29종 × 낚시터 4곳", en: "Fishing — 29 Species Across 4 Spots" },
    summary: {
      ko: "「양식 있는 캐스트」 업적 자체는 총 10마리만 낚으면 되지만, 실제로는 바다 2곳·강 2곳 총 4개 낚시터에 29종의 물고기가 나뉘어 서식합니다.",
      en: "'A Well-Rounded Cast' itself only needs 10 total catches, but 29 distinct species are actually split across 2 sea spots and 2 river spots.",
    },
    tips: [
      { ko: "미끼·낚싯대 등급에 따라 낚이는 어종 확률이 달라지므로, 특정 어종을 노린다면 상점에서 미끼를 미리 확인하세요.", en: "Bait/rod grade affects which species bite, so check bait options at the shop if you're after a specific fish." },
    ],
    source: { label: "Steam Community — Fishing Guide", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2935822405" },
  },
  {
    slug: "diligence-records",
    title: { ko: "정진기록 — 5/20/50/전체", en: "Diligence Records — 5/20/50/All" },
    summary: {
      ko: "정진기록은 마을 곳곳의 소소한 심부름·선행 과제 목록입니다. 5건 시 「신의 미소」, 20건 시 「신의 기쁨」, 50건 시 「신의 찬가」, 전체 완료 시 「신도 겸손해지다」 업적이 발동합니다.",
      en: "Diligence Records are small errands/good-deed tasks scattered around town. 5 unlocks 'The Gods Smile Upon Thee', 20 unlocks 'The Gods Rejoice at Thee', 50 unlocks 'The Gods Sing Thy Praises', and clearing all of them unlocks 'The Gods Hath Been Humbled'.",
    },
    tips: [
      { ko: "각 마을(교토·사츠마·쵸슈 등)의 정진기록 목록은 완료 목록(Completion List) 메뉴에서 지역별로 확인할 수 있습니다.", en: "Check the Completion List menu, sorted by town (Kyo, Satsuma, Choshu, etc.), to see each region's remaining records." },
    ],
  },
  {
    slug: "restaurants",
    title: { ko: "레스토랑 전부 주문 — 「무엇이든 하나씩」", en: "One of Everything — All Restaurants" },
    summary: {
      ko: "각 마을의 레스토랑에서 메뉴 하나씩만 주문하면 「무엇이든 하나씩」 업적이 발동합니다. 가장 싼 메뉴를 하나만 시켜도 카운트되며, 새 마을이 열릴 때마다 그 지역 식당을 한 바퀴 돌면 됩니다.",
      en: "Order at least one item at every restaurant across every town for 'I'll Have One of Everything'. Even the cheapest menu item counts — sweep each town's restaurants as soon as it unlocks.",
    },
    tips: [
      { ko: "라쿠나이의 카마토라는 포장이 아니라 매장 내 취식으로 주문해야 카운트됩니다.", en: "Kamatora in Rakunai only counts if you dine in, not takeout." },
      { ko: "토사 지역 식당은 이 업적 카운트에서 아예 제외됩니다 — 구매해도 체크되지 않습니다.", en: "Tosa-region restaurants don't count toward this achievement at all — purchases there log nothing." },
      { ko: "일부 메뉴는 「인연」으로 가게 주인과 유대를 맺어야 열리는 히든 메뉴입니다. 완료 목록에서 방문한 가게·메뉴 수를 확인할 수 있습니다.", en: "Some dishes are Bond-locked secret menu items requiring friendship with the owner. Track visited restaurants/menu counts via the Completion List." },
    ],
    source: { label: "GameFAQs — Restaurants and Eateries", url: "https://gamefaqs.gamespot.com/ps4/730573-like-a-dragon-ishin/faqs/80347/restaurants-and-eateries" },
  },
  ],
};
