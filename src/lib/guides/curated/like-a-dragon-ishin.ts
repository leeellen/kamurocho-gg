import type { CuratedGuide } from "./index";

const ISHIN_APP_ID = 1805480;

// Like a Dragon: Ishin! 플래티넘. Steam api_name: platinum.
// Note: 본 페이지에서는 「꿈을 이루는 자」(pause_complete_rate100)이 100%
// 완료 트로피로 등록되어 있고, 별도의 플래티넘 트로피는 같은 이름으로
// 사용됩니다. 두 슬러그 모두 한국어 번역상 「꿈을 이루는 자」.
const completion100: CuratedGuide = {
  summary: {
    ko:
      "Like a Dragon: Ishin! 컴플리션 100% — 메인 메뉴 「컴플리트」 달성률 100% 도달 시 발동. 영구 미서블 0, 모든 컨텐츠는 Premium Adventure에서 회수 가능. 핵심 게이트는 ①Trooper Cards 도감 풀 + 카드 가챠 ②Another Life 풀 ③다잘 격투 4스타일 풀 마스터 ④사이드 미션 풀 ⑤Legend 난이도 클리어. Bakumatsu(막부 말기) 시대 배경이라 본편과 동떨어진 분위기.",
    en:
      "Hit 100 % on the in-game Completion List. Zero permanent missables — everything is recoverable. Gates: ① Trooper Cards dex + gacha ② Another Life full ③ four fighting styles mastered ④ all side missions ⑤ Legend clear. Bakumatsu setting — wholly separate from the main saga.",
  },
  steps: [
    {
      ko:
        "1) Another Life 해금 직후부터 적극 진행. 농사·요리·교사 등 일상 시스템이 통합되어 있어 자금·트루퍼 카드·아이템이 동시에 누적됩니다.",
      en:
        "1) Once Another Life opens, push it daily — farming/cooking/teaching feed Trooper Cards, money, and items at once.",
    },
    {
      ko:
        "2) Trooper Cards — 가챠와 사이드 미션 보상을 통해 모든 카드 등록. 강력한 카드 조합은 후반 보스전 부담을 크게 줄여 줍니다.",
      en:
        "2) Trooper Cards — collect every card via gacha + side missions. Strong builds break late bosses easily.",
    },
    {
      ko:
        "3) 4 전투 스타일(검·격투·총·와일드 댄서) 모두 풀 마스터 — 각 스타일 트리의 모든 노드를 채워야 「전투 스타일 마스터」 라인 카운트.",
      en:
        "3) Master all four styles (Swordsman / Brawler / Gunman / Wild Dancer) — fill every skill node.",
    },
    {
      ko:
        "4) 사이드 미션 — 100여 건 전부 클리어. 일부는 시간대(낮/밤)·특정 장 도달이 조건이라 컴플리트 리스트 점검 필수.",
      en:
        "4) Side missions — clear all ~100; some gate on time of day or chapter, so audit the Completion List.",
    },
    {
      ko:
        "5) 새 회차에서 Legend 난이도 → 14장(피날레) 직전 신센구미 막사에서 오키타와 대화해 Legend로 전환 가능. 단일 회차로 Legend 트로피 획득 가능.",
      en:
        "5) Legend run — at Ch.14 before heading back to Tosa, talk to Okita at the Shinsengumi barracks to flip difficulty. One-run Legend possible.",
    },
  ],
  tips: [
    {
      ko:
        "Ishin!은 시리즈 중 유일한 시대극 외전이라 위치명·NPC명이 본편과 전혀 다릅니다. 컴플리트 리스트 카테고리를 자주 확인해야 누락이 없습니다.",
      en:
        "Ishin! is the only period spin-off — names/locations don't carry from the main saga. Audit the Completion List often.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Like a Dragon: Ishin! Trophy Guide", en: "PowerPyx — Like a Dragon: Ishin! Trophy Guide" },
};

// 「절반의 꿈」 — 메인 메뉴 컴플리트 달성률 50% 이상.
// Steam api_name: pause_complete_rate50.
const halfDream: CuratedGuide = {
  summary: {
    ko:
      "메인 메뉴 「컴플리트」 달성률을 50% 이상으로 끌어올리면 발동. 100% 완료 트로피 「꿈을 이루는 자」 진행 중에 자동 카운트되므로 별도 작업이 필요 없습니다. 메인 스토리 진행만으로는 50%에 도달하지 않으므로 사이드 시스템(Another Life·트루퍼 카드·사이드 미션)을 일정 수준 이상 정리해야 합니다.",
    en:
      "Hit 50 % on the Completion List. Auto-counts toward 100 %, so no separate work — but main-story alone doesn't reach 50 %, so push some Another Life / Trooper / side missions.",
  },
  steps: [
    {
      ko:
        "1) Another Life 해금 후 농사·낚시·요리·취침 등 일상 카테고리 100% 도달 — 단일 카테고리만으로도 컴플리트 달성률 ~20%를 잡을 수 있습니다.",
      en:
        "1) After Another Life opens, hit 100 % on farming/fishing/cooking/sleep daily-life categories — that alone is ~20 %.",
    },
    {
      ko:
        "2) 사이드 미션 50건 이상 클리어 — 컴플리트 리스트 「사이드 미션」 라인 50% 도달.",
      en:
        "2) Clear 50+ side missions to hit the Side Mission row at 50 %.",
    },
    {
      ko:
        "3) Trooper Cards 도감 절반 등록 + 다잘 격투 1~2 스타일 풀 마스터로 합산 달성률 50% 도달 시 트로피 발동.",
      en:
        "3) Half the Trooper Cards dex + master 1~2 fighting styles → combined progress crosses 50 % and the trophy fires.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Like a Dragon: Ishin! Trophy Guide", en: "PowerPyx — Like a Dragon: Ishin! Trophy Guide" },
};

// 「궁극의 끝에 도달한 자」 — 궁극 투기 전부 클리어. Steam: clear_ultimate_battles.
const ultimateBattlesIshin: CuratedGuide = {
  summary: { ko: "Ishin!의 「궁극 투기」(엔드게임 챌린지 매치 시리즈) 전부 클리어 시 발동. 무기 봉인·맨손·집단 전투 등 매치별 조건이 까다로워, 트루퍼 카드 + 4 전투 스타일 풀 강화가 필수.", en: "Clear every Ultimate Battle (endgame challenge matches). Each has strict rules — full Trooper Cards + maxed styles required." },
  steps: [
    { ko: "1) 메인 스토리 엔딩 후 궁극 투기 NPC에게 말 걸기 → 챌린지 라인업 확인.", en: "1) After credits, talk to the Ultimate Battle NPC to see the lineup." },
    { ko: "2) 매치별 규정에 맞춰 빌드 셋업. 강력 트루퍼 카드(S랭크) + 풀 스타일 트리.", en: "2) Tune builds per rule (weapon ban, bare-fist, group). Use S-tier Trooper Cards + maxed style trees." },
    { ko: "3) 모든 매치 클리어 시 트로피 발동.", en: "3) Full clear fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Ishin Trophy Guide", en: "PowerPyx — Ishin Trophy Guide" },
};

// 「인류는 모두 형제」 — 모든 인물·동물 유대 풀. Steam: global_brotherhood.
const allBondsIshin: CuratedGuide = {
  summary: { ko: "Ishin!의 Another Life에서 만나는 모든 인물·동물(개·고양이 등)과의 유대를 풀로 끌어올리면 발동. 음식·선물·동행 활동으로 유대 게이지 누적.", en: "Max bonds with every person and animal in Another Life. Feed, gift, and walk with each for the gauge." },
  steps: [
    { ko: "1) Another Life 진입 후 농사·요리·취침을 반복하며 자원 누적.", en: "1) Open Another Life and farm/cook/sleep to bank resources." },
    { ko: "2) 마을의 모든 NPC + 가축에게 음식·선물 제공. 매일 1회씩 누적되며, 일부 NPC는 특정 시간대만 등장.", en: "2) Gift food + items daily; some NPCs only appear at certain times." },
    { ko: "3) 모든 유대 게이지 풀 시 트로피 발동.", en: "3) Full bonds across the roster fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Ishin Trophy Guide", en: "PowerPyx — Ishin Trophy Guide" },
};

// 「놀이를 섭렵한 남자」 — 모든 플레이 스팟. Steam: play_all_playspot.
const allPlaySpotsIshin: CuratedGuide = {
  summary: { ko: "Ishin!의 모든 플레이 스팟(가라오케·노래 주점·도박장·게임 캐비넷 등)에서 한 번 이상 플레이하면 발동. 교토·토사 양 지역의 플레이 스팟을 모두 방문해야 함.", en: "Touch every play spot in Ishin! (karaoke, song-bar, gambling, arcade). Cover Kyoto + Tosa areas." },
  steps: [
    { ko: "1) 메인 스토리 진행과 병행해 거리에서 플레이 스팟 마커를 모두 방문.", en: "1) Visit every play-spot marker as you progress." },
    { ko: "2) 도박(친치로린·고이·하나후다·블랙잭 등) + 노래 주점 + 게임 캐비넷 모두 1회씩.", en: "2) Touch every gambling table, song-bar, and cabinet at least once." },
    { ko: "3) 모든 플레이 스팟 카운트 시 트로피 발동.", en: "3) Full coverage fires it." },
  ],
  tips: [
    { ko: "[Ishin 도박·놀이 팁] 친치로(주사위 홀짝)는 거의 50:50 운 게임이니 소액으로 빠르게 1회만 카운트하세요. 코이코이(화투)는 「약(야쿠)」 조합을 완성해 「코이!」로 판돈을 키우는 게임이고, 마작은 닫은 손 「리치+탄야오」 한 패턴이면 충분합니다. 노래 주점·춤은 프롬프트 타이밍을 맞추는 리듬게임입니다. 트로피는 각 1회 플레이면 카운트되니 어렵게 생각할 필요 없습니다.", en: "[Ishin gambling & play tips] Cho-Han (odd/even dice) is near 50/50 luck — bet small and just log one play. Koi-Koi (hanafuda) is about completing yaku combos and calling 'Koi!' to raise the stakes; for mahjong, a closed Riichi + Tanyao hand is plenty. Song-bars and dancing are timing-based rhythm games. The trophy only needs one play of each, so don't overthink it." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Ishin Trophy Guide", en: "PowerPyx — Ishin Trophy Guide" },
};

// 「서브 스토리 제패!」 — 모든 서브 클리어. Steam: clear_substory_all.
const allSubsIshin: CuratedGuide = {
  summary: { ko: "Ishin!의 모든 서브스토리(약 70건)를 클리어하면 발동. 일부 서브는 장 진행·시간대·NPC 친밀도 조건이 붙어 있어 컴플리트 리스트 점검 필수.", en: "Clear all ~70 Ishin substories. Some gate on chapter/time/NPC bonds — audit the Completion List." },
  steps: [
    { ko: "1) 각 장 진입 시 교토·토사 거리를 한 바퀴 돌며 새 서브 마커 확인.", en: "1) Sweep Kyoto + Tosa for new sub markers each chapter." },
    { ko: "2) 시간대(낮/밤) 한정 서브는 별도 메모. 일부는 자격증·요리 스탯 조건도 있음.", en: "2) Time-locked subs need clock sync; some require qualifications/cooking stats." },
    { ko: "3) 모든 서브 클리어 시 트로피 발동.", en: "3) Full clear fires it." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Ishin Trophy Guide", en: "PowerPyx — Ishin Trophy Guide" },
};

// 「나, 천계를 얻었도다」 — 모든 천계 마침. Steam: finish_all_tenkei.
const allRevelations: CuratedGuide = {
  summary: { ko: "Ishin!의 모든 「천계(天啓 — 시리즈의 \"계시\" 시스템에 해당)」 이벤트를 완료하면 발동. 각 천계는 특정 행동·장소·시점 조건이 붙어 있어 가이드 옆에 두고 진행.", en: "Finish every Revelation event in Ishin!. Each gates on a specific action/place/time — keep a list." },
  steps: [
    { ko: "1) 천계 이벤트 트리거 조건은 거리 NPC의 행동 관찰 → 카메라 줌인 → 영감 획득.", en: "1) Revelations trigger by observing NPC behavior with the camera." },
    { ko: "2) 컴플리트 리스트의 「천계」 카테고리를 보며 미발동 항목 추적.", en: "2) Track missing entries in the Revelations Completion category." },
    { ko: "3) 모든 천계 완료 시 트로피 발동 + 신규 스킬·기술 카드 보상.", en: "3) Full completion fires the trophy + bonus skills/cards." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Ishin Trophy Guide", en: "PowerPyx — Ishin Trophy Guide" },
};

export const LIKE_A_DRAGON_ISHIN_CURATED: Record<string, CuratedGuide> = {
  [`${ISHIN_APP_ID}:pause_complete_rate100`]: completion100,
  [`${ISHIN_APP_ID}:pause_complete_rate50`]: halfDream,
  [`${ISHIN_APP_ID}:clear_ultimate_battles`]: ultimateBattlesIshin,
  [`${ISHIN_APP_ID}:global_brotherhood`]: allBondsIshin,
  [`${ISHIN_APP_ID}:play_all_playspot`]: allPlaySpotsIshin,
  [`${ISHIN_APP_ID}:clear_substory_all`]: allSubsIshin,
  [`${ISHIN_APP_ID}:finish_all_tenkei`]: allRevelations,
};
