import type { CuratedGuide } from "./index";

const LJ_APP_ID = 2058190;

// Lost Judgment 플래티넘 "탐정 끝판왕". Steam api_name: coyote_platinum.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Lost Judgment 플래티넘 — 다른 55개 업적 전부 해금 시 자동 발동. 전작 Judgment의 미서블 요소가 모두 제거되어 영구 미서블 0. 다만 청춘 드라마 9종·타운고·VR 스토어 등 분량이 큰 시스템이 많아 100~120시간이 표준. 핵심 게이트는 ①사이드 케이스 54건 + 「최후의 의뢰」(아몬) ②청춘 드라마 9종 풀 클리어 ③타운고 컴플리트 ④EX-HARD 메인 스토리.",
    en:
      "Lost Judgment platinum auto-pops at full unlock. Judgment's missable hazards are all removed — zero permanent missables. But the 9 School Stories + TownGo + VR Store run ~100~120 hr. Gates: ① 54 side cases + Amon ② all 9 School Stories ③ TownGo completion ④ EX-HARD main story.",
  },
  steps: [
    {
      ko:
        "1) 3장에서 버즈 리서처 + 사이드 케이스 시스템 해금 → 장별 사이드 케이스를 메인 진행과 병행. No.43 이후는 「탐정 라이프 충실 팩」 DLC가 필수.",
      en:
        "1) Open the Buzz Researcher + Side Case system in Ch.3, then chase cases chapter by chapter. Case No.43+ requires the Detective's Essentials Pack DLC.",
    },
    {
      ko:
        "2) 청춘 드라마 9종 — 3~8장 사이에 두 작품씩 병행해 후반에 몰리지 않게 정리. 댄스·복싱·로봇·BMX·미스터리·뱀파이어·등 각 드라마마다 별도 진행도.",
      en:
        "2) Push 2 School Stories at a time from Ch.3~8 so they don't dump at the end — Dance / Boxing / Robotics / BMX / Mystery / Vampire each track separately.",
    },
    {
      ko:
        "3) 타운고 — 시티 미션·상점 미션·청춘 드라마 미션 등 카테고리별 컴플리트. 「타운고 마스터」(100% 컴플리션) + 「타운고 투어 가이드」(전 미션) + 「타운고 시니어」(전 스쿨 미션) 3종 트로피 연동.",
      en:
        "3) TownGo — clear City / Shop / School categories. Three trophies pair: Master (100 %) + Tour Guide (all city) + Senior (all school).",
    },
    {
      ko:
        "4) 사이드 케이스 54건 + 거리 평판 Lv.50 도달 → 「최후의 의뢰」(아몬 신 격투) 해금. 친구 이벤트(카이토·히라누마 등)도 일부 케이스 트리거 조건.",
      en:
        "4) 54 side cases + Street Rep Lv.50 unlocks the 'Final Case' Amon fight. Friend events (Kaito, Hiranuma) gate some cases.",
    },
    {
      ko:
        "5) 새 회차 EX-HARD 메인 스토리 클리어로 「용맹한 탐정」 트로피. 진행도 이월되므로 직주행 가능.",
      en:
        "5) Fresh save on EX-HARD for the difficulty trophy — carry-over makes it a sprint.",
    },
  ],
  tips: [
    {
      ko:
        "DLC 「탐정 라이프 충실 팩」이 없으면 사이드 케이스 No.43~54 + 일부 청춘 드라마 보상이 잠겨 100% 도달 자체가 불가능합니다. 플래티넘 목표라면 DLC 필수.",
      en:
        "Without the 'Detective's Essentials Pack' DLC, Side Cases 43~54 and several School Story rewards are locked — platinum impossible.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Lost Judgment Trophy Guide", en: "PowerPyx — Lost Judgment Trophy Guide" },
};

// 「타운고 마스터」 — TownGo 100%. Steam api_name: coyote_town_act_all_complete.
const townGoMaster: CuratedGuide = {
  summary: {
    ko:
      "TownGo 시스템의 컴플리트 토털 100% 도달 시 발동. 시티 미션·상점 미션·청춘 드라마 미션·기타 컬렉션이 모두 카테고리별 100%여야 합니다. 일부 상점은 메인 스토리 진행으로만 해금되므로 9장 이상 진행 필수.",
    en:
      "TownGo total completion at 100 %. City missions + Shop missions + School Story missions + extra collections must each hit 100 %. Some shops only unlock past Ch.9, so push the story first.",
  },
  steps: [
    {
      ko:
        "1) 3장 이후 타운고 앱이 풀리면 카무로초 + 이세자키 이진초 양쪽에서 시티 미션을 받아 동시 진행.",
      en:
        "1) After Ch.3 opens TownGo, run city missions in both Kamurocho and Ijincho in parallel.",
    },
    {
      ko:
        "2) 상점 미션 — 일부 상점은 장 진행으로만 해금되므로, 컴플리트 리스트의 상점 카테고리 100% 도달이 보이지 않으면 메인 스토리 추가 진행이 필요한 경우가 많습니다.",
      en:
        "2) Shop missions — many shops gate on story progress; if the Shop category isn't moving, push the main story.",
    },
    {
      ko:
        "3) 청춘 드라마 미션 — 9종 청춘 드라마 진행 중 발생하는 타운고 연동 미션. 학교 잠입 시퀀스가 열릴 때마다 새 미션 점검.",
      en:
        "3) School Story missions — track new TownGo entries each time a school infiltration sequence opens.",
    },
    {
      ko:
        "4) 모든 카테고리 100% 도달 시 「타운고 마스터」 트로피 + 「타운고 투어 가이드」 + 「타운고 시니어」 + 「타운고 고래」 등 연동 트로피가 함께 발동.",
      en:
        "4) Full 100 % fires Master + Tour Guide + Senior + Whale (TownGo line) all at once.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Lost Judgment Trophy Guide", en: "PowerPyx — Lost Judgment Trophy Guide" },
};

// 「용맹한 탐정」 EX-HARD 클리어. Steam: coyote_most_difficult_clear.
const mostDifficultLJ: CuratedGuide = {
  summary: { ko: "Lost Judgment 메인 스토리를 EX-HARD 난이도로 클리어 시 발동. 엔딩 후 「클리어 후 모드」에서 해금되며, 1회차 스킬·장비·청춘 드라마 진행도 모두 이월.", en: "Clear LJ's story on EX-HARD post-credits. Carry-over from your first clear." },
  steps: [
    { ko: "1) 엔딩 후 클리어 데이터 → EX-HARD 새 회차 시작.", en: "1) Clear Data → EX-HARD." },
    { ko: "2) 야가미·카이토의 전투 스타일 트리 + 청춘 드라마 보상 스킬 풀 강화 후 도전.", en: "2) Max Yagami/Kaito's style trees + School Story rewards." },
    { ko: "3) 최종 보스 클리어 시 트로피 발동.", en: "3) Final boss kill fires it." },
  ],
  sourceUrl: "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Lost Judgment Trophy Guide", en: "PowerPyx — Lost Judgment Trophy Guide" },
};

// 「유비무환」 모든 장비. Steam: coyote_get_all_equip.
const allEquipLJ: CuratedGuide = {
  summary: { ko: "Lost Judgment의 모든 의류/액세서리 장비를 획득해야 발동. 에비스 폰·허슬 부티크·커밍 분·라 샤트 블랑슈·헤븐스 골프·드론 레이스·다람쥐 수색·더 건틀릿 보상 등 다양한 입수처를 모두 커버해야 합니다.", en: "Collect every piece of clothing + accessory. Sources span Ebisu Pawn, Hustle Boutique, Coming Vinyl, La Chatte Blanche, Heaven's Golf, Drone Race, Squirrel Search, The Gauntlet rewards." },
  steps: [
    { ko: "1) 카무로초 + 이세자키 이진초 양 도시 의류 상점 + 액세서리 상점 모두 방문 → 모델별 1벌씩 구매.", en: "1) Buy one of each model from every clothing + accessory shop in both cities." },
    { ko: "2) 미니게임 보상 라인 — 드론 레이스 그랑프리·헤븐스 골프 컴플리트·다람쥐 수색 컴플리트 등으로 상점 미공급 아이템 확보.", en: "2) Earn shop-exclusive gear via Drone Race, Heaven's Golf, Squirrel Search rewards." },
    { ko: "3) 컴플리트 리스트 「장비」 카테고리 100% 도달 시 트로피 발동.", en: "3) Full Equipment category fires it." },
  ],
  sourceUrl: "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Lost Judgment Trophy Guide", en: "PowerPyx — Lost Judgment Trophy Guide" },
};

// 「게이머」 모든 아케이드. Steam: coyote_all_arcade_game_played.
const allArcadeLJ: CuratedGuide = {
  summary: { ko: "Lost Judgment 클럽 세가의 모든 아케이드 게임을 1회 이상 플레이하면 발동. 클리어 조건은 없고 시작 후 일정 시간 플레이만 카운트.", en: "Play every Club Sega arcade cabinet at least once — no clear required, just touch time." },
  steps: [
    { ko: "1) 카무로초 + 이진초 클럽 세가 모두 입장 → 캐비넷별 시작 + 짧게 플레이.", en: "1) Hit both cities' Club Sega and start every cabinet." },
    { ko: "2) 컴플리트 리스트 「아케이드」 카테고리가 100% 카운트되면 트로피 발동.", en: "2) Trophy fires on full Arcade category." },
  ],
  sourceUrl: "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Lost Judgment Trophy Guide", en: "PowerPyx — Lost Judgment Trophy Guide" },
};

// 「가장 빠른 드론 파일럿」 드론 리그 모든 그랑프리. Steam: coyote_drone_league_all_clear.
const droneRaceMaster: CuratedGuide = {
  summary: { ko: "Lost Judgment 드론 레이스의 모든 그랑프리에서 우승하면 발동. 드론 부품 강화로 SPD/HANDLING/ACCEL 최적화가 핵심.", en: "Win every Drone Race Grand Prix. Tune SPD/HANDLING/ACCEL via parts upgrades." },
  steps: [
    { ko: "1) 장 진행 중 드론 레이스 해금 → 첫 그랑프리 출전.", en: "1) Unlock Drone Race and enter the first GP." },
    { ko: "2) 부품 강화로 최고 등급에 가까운 사양 셋업. 코스별 권장 빌드 다름.", en: "2) Tune to near-max specs; builds vary by course." },
    { ko: "3) 모든 그랑프리 우승 시 트로피 발동.", en: "3) Sweep every GP for the trophy." },
  ],
  tips: [
    { ko: "[드론 레이스] 부품 강화로 코스에 맞게 SPD/ACCEL/HANDLING을 셋업하는 게 8할입니다. 직선 위주 코스는 SPD·ACCEL을, 좁은 커브 코스는 HANDLING을 올리세요. 부스트는 직선 구간에서만 쓰고, 게이트·체크포인트는 안쪽 라인으로 최단 거리를 노립니다. 막히면 한 등급 낮은 그랑프리로 자금을 모은 뒤 상위 부품을 사서 재도전하세요.", en: "[Drone Race] Tuning SPD/ACCEL/HANDLING to the course is 80% of it. Favor SPD + ACCEL on straight-heavy tracks and HANDLING on tight, curvy ones. Spend boost only on straights, and cut the inside line through gates and checkpoints. Stuck? Farm cash on a lower GP, then buy higher-tier parts and retry." },
  ],
  sourceUrl: "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Lost Judgment Trophy Guide", en: "PowerPyx — Lost Judgment Trophy Guide" },
};

// 「음악 애호가」 모든 레코드. Steam: coyote_get_all_record.
const allRecordsLJ: CuratedGuide = {
  summary: { ko: "Lost Judgment의 모든 레코드(BGM 컬렉션 아이템)를 수집하면 발동. 카무로초 「커밍 분」, 이진초 레코드 상점, 사이드 케이스 보상에서 입수.", en: "Collect every record (BGM collectible). Sources include Kamurocho's Coming Vinyl, Ijincho's record shop, and side case rewards." },
  steps: [
    { ko: "1) 양 도시 레코드 상점에서 판매 중인 모든 모델 구매.", en: "1) Buy every record in stock at both cities' shops." },
    { ko: "2) 사이드 케이스 + DLC 보상에서 한정 레코드 추가 수집.", en: "2) Pull rare records from Side Cases + DLC rewards." },
    { ko: "3) 모든 레코드 수집 시 트로피 발동.", en: "3) Full collection fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Lost Judgment Trophy Guide", en: "PowerPyx — Lost Judgment Trophy Guide" },
};

// 「주사위의 패자」 VR 쌍륙 모든 스테이지. Steam: coyote_all_daiq_stage_win.
const allVrBoard: CuratedGuide = {
  summary: { ko: "Lost Judgment의 VR 쌍륙(보드게임) 모든 스테이지에서 승리하면 발동. VR 살롱에서 해금되며, 스테이지별 룰이 달라 전략 다양화가 핵심.", en: "Win every VR Sugoroku (board) stage at the VR Salon. Rules vary per stage." },
  steps: [
    { ko: "1) 3장 이후 VR 살롱 해금 → VR 쌍륙 첫 스테이지부터 차례로 클리어.", en: "1) Unlock VR Salon in Ch.3 and clear stages in sequence." },
    { ko: "2) 스테이지별 룰(특수 칸·아이템·페널티 등) 적응. RNG가 강한 스테이지는 재시도 권장.", en: "2) Adapt to per-stage rules; restart RNG-heavy stages as needed." },
    { ko: "3) 모든 스테이지 승리 시 트로피 발동.", en: "3) Full clear fires the trophy." },
  ],
  tips: [
    { ko: "[VR 쌍륙] 스테이지별 룰(특수 칸·아이템·페널티)이 달라 전략을 바꿔야 합니다. 아이템 칸을 우선 밟아 이동·방해 아이템을 확보하고, 골인 직전에는 정확히 멈출 수 있는 주사위 눈을 노려 오버슛을 피하세요. 주사위 운이 크게 작용하므로 초반부터 불리하면 빠르게 재시작하는 편이 시간을 아낍니다.", en: "[VR Sugoroku] Each stage has its own rules (special tiles, items, penalties), so adapt your strategy. Land on item tiles early to grab movement/disruption items, and near the goal aim for a roll that stops you exactly on it to avoid overshooting. Dice luck matters a lot — if you fall behind early, a quick restart saves time." },
  ],
  sourceUrl: "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Lost Judgment Trophy Guide", en: "PowerPyx — Lost Judgment Trophy Guide" },
};

export const LOST_JUDGMENT_CURATED: Record<string, CuratedGuide> = {
  [`${LJ_APP_ID}:coyote_platinum`]: platinum,
  [`${LJ_APP_ID}:coyote_town_act_all_complete`]: townGoMaster,
  [`${LJ_APP_ID}:coyote_most_difficult_clear`]: mostDifficultLJ,
  [`${LJ_APP_ID}:coyote_get_all_equip`]: allEquipLJ,
  [`${LJ_APP_ID}:coyote_all_arcade_game_played`]: allArcadeLJ,
  [`${LJ_APP_ID}:coyote_drone_league_all_clear`]: droneRaceMaster,
  [`${LJ_APP_ID}:coyote_get_all_record`]: allRecordsLJ,
  [`${LJ_APP_ID}:coyote_all_daiq_stage_win`]: allVrBoard,
};
