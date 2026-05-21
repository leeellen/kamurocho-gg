import type { CuratedGuide } from "./index";

const YAKUZA_4_APP_ID = 1105500;

// "미스터 드레스업" — Mr. Dress-Up (Akiyama part — collect all outfit
// categories in the "No.1 캬바걸을 만들자" Catalog Service).
// Steam api_name: achievement_18.
const mrDressUp: CuratedGuide = {
  summary: {
    ko:
      "아키야마 편 호스티스 메이커 미니게임 「No.1 캬바걸을 만들자」의 카탈로그 서비스에서 의상을 카테고리별 1벌씩 모두 수집해야 트로피 발동. 카탈로그가 닫히는 시점(아키야마 편 종료)이 영구 잠금 기점이므로, 의상 구매·세트 강화·동반 출근을 아키야마 챕터 안에서 마무리해야 합니다.",
    en:
      "Mr. Dress-Up is Akiyama's Hostess Maker side trophy: collect at least one outfit from every category in the Catalog Service. The catalog closes when Akiyama's part ends, so finish buying / upgrading / wearing inside his chapters.",
  },
  steps: [
    {
      ko:
        "1) 아키야마 편에서 캬바쿠라 「엘리제」 매니저에게 말 걸어 호스티스 메이커 + 카탈로그 서비스를 해금.",
      en:
        "1) Talk to the Elise manager during Akiyama's chapters to unlock the Hostess Maker minigame and Catalog Service.",
    },
    {
      ko:
        "2) 카탈로그를 열어 4개 평가 카테고리(섹시·큐트·쿨·캐주얼) 각각에서 의상 1벌씩 구매. 자금이 부족하면 토미자와 비즈니스(돈 빌리기)와 거리 양아치 격파로 채워둡니다.",
      en:
        "2) Open the catalog and buy one outfit each from Sexy / Cute / Cool / Casual. Short on cash? Run Akiyama's money minigame and street fights.",
    },
    {
      ko:
        "3) 「Sub」(서브) 액세서리 카테고리, 「특별 의상」 카테고리 등 일반 카테고리 외에도 별도 칸이 풀려 있으면 각 칸에서 최소 1개씩 추가 구매. 카탈로그 「수집률 100%」 게이지를 채우는 것이 핵심.",
      en:
        "3) Beyond the four main categories, the catalog opens additional rows (accessories, special outfits) — buy at least one in each row to push the catalog completion bar.",
    },
    {
      ko:
        "4) 카탈로그 수집률이 100%에 도달하는 순간 트로피 발동. 메뉴를 닫지 말고 마지막 구매 직후 잠시 머물러 카운트 확정을 확인하세요.",
      en:
        "4) The trophy fires when the catalog hits 100 % collection — linger after the final purchase to let the counter lock.",
    },
  ],
  tips: [
    {
      ko:
        "「Sub」 의상은 다른 카테고리 평가까지 한 번에 끌어올리는 보너스가 있어 자금 여유가 있다면 우선 구매. 미니게임 진행이 동시에 빨라집니다.",
      en:
        "\"Sub\" tier outfits also bump other-category stats — pricier but they accelerate the rest of Hostess Maker.",
    },
    {
      ko:
        "아키야마 편 종료 → 사에지마 편 진입 시 카탈로그 자체가 영구 잠금. 한 카테고리라도 빠뜨리면 같은 회차에서는 회수 불가.",
      en:
        "The Catalog Service is permanently locked once Saejima's part begins — missing categories can't be picked up later in this run.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-4-remastered-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Yakuza 4 Trophy Guide",
    en: "PowerPyx — Yakuza 4 Trophy Guide",
  },
};

// Yakuza 4 Remastered 플래티넘. Steam api_name: achievement_0.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Yakuza 4 Remastered 플래티넘 — 다른 46개 업적을 모두 해금하면 자동 발동. 핵심 게이트는 ①「불굴」(난이도 NORMAL 클리어 중 EASY로 한 번도 안 낮추기) ②4인 주인공 모두 MAX Lv.20 도달 ③아키야마 편 한정 「미스터 드레스업」(카탈로그 100%) ④EX-HARD 클리어 ⑤모든 캐릭터별 사이드 미션·미니게임. 4인 멀티 주인공 구조 때문에 캐릭터 파트별 윈도우를 놓치지 않는 게 핵심.",
    en:
      "Y4R's platinum auto-pops at full trophy unlock. Gates: ① 'Indomitable' (never drop to EASY during Normal) ② all 4 leads to MAX Lv.20 ③ Akiyama's Mr. Dress-Up (100 % catalog) ④ EX-HARD clear ⑤ each lead's sideline. The 4-protagonist structure makes per-part windows the main risk.",
  },
  steps: [
    {
      ko:
        "1) 1회차 (NORMAL) — 「Easy로 변경하시겠습니까?」 팝업이 떠도 절대 「예」 선택 금지. 무기·회복 아이템을 충분히 비축해 NORMAL을 끝까지 유지.",
      en:
        "1) Run 1 (NORMAL) — never accept the auto-prompt to drop to EASY. Stock weapons and healing so NORMAL holds end to end.",
    },
    {
      ko:
        "2) 캐릭터별 파트 진행 중 해당 캐릭터 한정 서브·미니게임을 모두 정리: 아키야마(엘리제 호스티스·드레스업), 사에지마(권총 5정·격투), 타니무라(카지노·도박), 키류(무기 100개 파괴).",
      en:
        "2) Clear each lead's part-locked side content in window: Akiyama (Elise hostess + Catalog), Saejima (5 guns), Tanimura (casino), Kiryu (smash 100 weapons).",
    },
    {
      ko:
        "3) 엔딩 후 Premium Adventure에서 4인 모두 MAX Lv.20 + 카무로초의 「캬바걸 명함 풀 수집」 + 모든 서브스토리 + 「아몬 격파」(사에지마 라인 끝) 정리.",
      en:
        "3) After credits, push all four leads to MAX Lv.20, collect every cabaret business card, finish all subs, beat Amon (Saejima's final line).",
    },
    {
      ko:
        "4) EX-HARD 새 회차 — 메인 스토리만 직주행해도 충분합니다. Premium Adventure 진행도가 이월되므로 무기·스킬 트리는 1회차 자원 그대로 활용.",
      en:
        "4) EX-HARD second run — story-only sprint is enough. Weapons + skill trees carry over.",
    },
  ],
  tips: [
    {
      ko:
        "「불굴」 트로피는 NORMAL 시작 후 시스템 팝업에서 한 번이라도 「예」를 선택하면 영구 잠금. 사망 누적 시 팝업이 더 자주 뜨므로 회복 아이템 관리에 신경 쓰세요.",
      en:
        "'Indomitable' locks the moment you accept the EASY downgrade. Death streaks raise the prompt frequency — keep healing items high.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-4-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 4 Trophy Guide", en: "PowerPyx — Yakuza 4 Trophy Guide" },
};

// 「전설을 잇는 자」 — LEGEND 클리어. Steam api_name: achievement_6.
const legendCleared: CuratedGuide = {
  summary: {
    ko:
      "Y4 Remastered 메인 스토리를 LEGEND 난이도로 클리어 시 발동. 엔딩 후 해금되는 최고 난이도이며, 1회차 진행도 + 「클리어 후 모드」 자원을 이월해 진행. 4인 주인공 모두 보스 패턴이 다르므로 사전 학습이 핵심.",
    en:
      "Clear Y4R's story on LEGEND (post-credits unlock). Carry-over from your 1st run; each of the 4 leads has distinct boss patterns, so memorize them.",
  },
  steps: [
    {
      ko:
        "1) 엔딩 클리어 후 클리어 데이터 → LEGEND 새 회차. 1회차 캐릭터 레벨·스킬·장비 모두 이월.",
      en:
        "1) After credits, start a Clear-Data run on LEGEND — all levels/skills/gear carry over.",
    },
    {
      ko:
        "2) 캐릭터별 권장 운영 — 아키야마(스피드형, 회피 카운터), 사에지마(파워형, 무기 활용), 타니무라(카운터 마스터), 키류(드래곤 스타일 풀). 보스 패턴 학습 후 회복 아이템 풀로 도전.",
      en:
        "2) Per-lead playstyle — Akiyama (dodge counters), Saejima (power + weapons), Tanimura (counter master), Kiryu (Dragon style).",
    },
    {
      ko:
        "3) 챕터 18 라스트 보스 클리어 시 트로피 발동. 「궁극을 잇는 자」(다른 모든 트로피 + 클리어 후 모드)와 함께 진행 권장.",
      en:
        "3) Trophy fires on the final boss kill. Pair the run with 'Ultimate Successor' trophy progress.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-4-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 4 Trophy Guide", en: "PowerPyx — Yakuza 4 Trophy Guide" },
};

// 「명함 헌터」 — 캬바걸 모든 명함. Steam api_name: achievement_19.
const businessCardHunter: CuratedGuide = {
  summary: {
    ko:
      "Y4의 모든 캬바걸로부터 명함을 수집하면 발동. 호스티스 메이커(엘리제, 자유 입장 포함)에 등장하는 모든 캬바걸과 자유 입장 + 데이트 + 동반 출근을 진행해 명함을 받아야 합니다.",
    en:
      "Collect business cards from every hostess in Y4. Hit every cabaret hostess (Hostess Maker + free-entry) via dates / shifts to receive their cards.",
  },
  steps: [
    {
      ko:
        "1) 아키야마 편에서 엘리제 호스티스(히요리·나나미·쿄코) 영입 + 풀 데이트 → 첫 명함 카운트.",
      en:
        "1) Akiyama recruits Hiyori, Nanami, Kyoko and dates them — first card batch.",
    },
    {
      ko:
        "2) 자유 입장 캬바걸은 카무로초 + 도시 외곽 캬바레 클럽 모두 방문해 한 번씩 데이트. 일부 캬바걸은 메인 스토리 진행도에 따라 새로 등장.",
      en:
        "2) Free-entry hostesses live in Kamurocho clubs — date each at least once. Some new entries gate on story progress.",
    },
    {
      ko:
        "3) 모든 명함 수집 시 컴플리트 리스트의 「명함」 카테고리 100% + 트로피 발동.",
      en:
        "3) Full card collection ticks the Business Cards category at 100 % and fires the trophy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-4-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 4 Trophy Guide", en: "PowerPyx — Yakuza 4 Trophy Guide" },
};

// 「어서 오세요 세가입니다」 — 클럽 세가 모든 미니게임 1회. Steam api_name: achievement_33.
const welcomeToSega: CuratedGuide = {
  summary: {
    ko:
      "Y4 카무로초 「클럽 세가」의 모든 미니 게임(아웃런·스페이스 해리어·판타지 존·UFO 캐처·메다루펀치·버추어 파이터 등)을 1회씩 플레이하면 발동.",
    en:
      "Touch every Club Sega cabinet in Y4 Kamurocho at least once — OutRun, Space Harrier, Fantasy Zone, UFO Catcher, Boxcelios, Virtua Fighter, etc.",
  },
  steps: [
    {
      ko:
        "1) 카무로초 + 챔피언 거리 클럽 세가 입장. 시어터 광장 + 나카미치 거리 두 곳 모두 방문.",
      en:
        "1) Hit both Club Sega locations (Theater Sq. + Nakamichi St.).",
    },
    {
      ko:
        "2) 각 캐비넷에서 짧게라도 1회씩 플레이 — 클리어 점수와 무관, 플레이 카운트만 필요.",
      en:
        "2) Play each cabinet at least once — score doesn't matter, just the play flag.",
    },
    {
      ko:
        "3) 컴플리트 리스트의 「클럽 세가」 카테고리 100% 시 트로피 발동.",
      en:
        "3) Trophy fires when the Club Sega category is fully ticked.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-4-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 4 Trophy Guide", en: "PowerPyx — Yakuza 4 Trophy Guide" },
};

// 「아몬 격파」 — Y4. Steam api_name: achievement_13.
const amonY4: CuratedGuide = {
  summary: {
    ko:
      "Y4의 아몬 4형제(키류·사에지마·아키야마·타니무라 모두 격파)를 모두 격파하면 발동. 4인 모두 다른 모든 서브스토리 클리어가 전제. Premium Adventure에서 진행.",
    en:
      "Beat all four Amon Clan members (one per lead). Each requires clearing every substory for that lead first. Done in Premium Adventure.",
  },
  steps: [
    {
      ko:
        "1) 각 주인공 서브스토리 풀 클리어 → 카무로초 칠드런즈 파크에서 검은 양복의 남자 등장 → 아몬 격투 트리거.",
      en:
        "1) Clear every substory for a lead, then the Man in Black spawns at Children's Park to challenge that lead.",
    },
    {
      ko:
        "2) 4명 모두(다이고로 아몬·소고 아몬·진 아몬·조 아몬) 격파 시 트로피 발동. 회복 아이템 풀 + 강력 무기 사전 준비.",
      en:
        "2) Defeat all four (Daigoro / Sango / Jin / Jo Amon). Stock heals and a strong weapon.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-4-remastered-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 4 Trophy Guide", en: "PowerPyx — Yakuza 4 Trophy Guide" },
};

export const YAKUZA_4_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_4_APP_ID}:achievement_0`]: platinum,
  [`${YAKUZA_4_APP_ID}:achievement_6`]: legendCleared,
  [`${YAKUZA_4_APP_ID}:achievement_13`]: amonY4,
  [`${YAKUZA_4_APP_ID}:achievement_18`]: mrDressUp,
  [`${YAKUZA_4_APP_ID}:achievement_19`]: businessCardHunter,
  [`${YAKUZA_4_APP_ID}:achievement_33`]: welcomeToSega,
};
