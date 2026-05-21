import type { CuratedGuide } from "./index";

const GAIDEN_APP_ID = 2375550;

// Like a Dragon Gaiden 플래티넘. Steam api_name: platinum.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Like a Dragon Gaiden: The Man Who Erased His Name 플래티넘 — 다른 61개 업적 전부 해금 시 자동 발동. 시리즈 중 가장 짧은 외전으로 영구 미서블 0, 컴플리션 30~40시간이면 충분합니다. 핵심 게이트는 ①아카메 네트워크 의뢰 풀 ②투기장(콜로세움) 풀 클리어 + 지옥의 챔피언 ③클럽 캐슬·클럽 헤븐리 캬바걸 풀 ④Legend 난이도 클리어 ⑤아몬 격파.",
    en:
      "Gaiden's platinum auto-pops at full unlock. The shortest entry in the series — zero permanent missables, ~30~40 hr for completion. Gates: ① Akame Network requests ② Coliseum full + Hell's Champion ③ Club Castle + Club Heavenly hostesses ④ Legend clear ⑤ Amon.",
  },
  steps: [
    {
      ko:
        "1) 아카메를 만나는 순간 아카메 네트워크 의뢰를 본격 진행. 의뢰 보상이 「콜로세움 영입 인원」 + 「시설 해금」과 연동되어 같이 굴러갑니다.",
      en:
        "1) After meeting Akame, immediately push Akame Network requests — rewards feed Coliseum recruits and facility unlocks.",
    },
    {
      ko:
        "2) 콜로세움(투기장) — 플래티넘 랭크 이하 모든 매치 클리어 → 「지옥의 챔피언」 트로피 + 캐슬 카바레 추가 이벤트 해금.",
      en:
        "2) Coliseum — clear every match through Platinum rank for the 'Hell's Champion' trophy and Castle Cabaret events.",
    },
    {
      ko:
        "3) 클럽 캐슬·클럽 헤븐리 — 두 캬바레 클럽 모든 캬바걸 친밀도 풀로 끌어올려 「캐슬 귀빈」 + 「천국의 귀빈」 두 트로피 동시 마감.",
      en:
        "3) Club Castle + Club Heavenly — bond every hostess to max for both 'Castle VIP' and 'Heavenly VIP' trophies.",
    },
    {
      ko:
        "4) 「캐슬 갬블러」 — 캐슬 도박장 + 카지노 모든 게임을 1회 이상 플레이. 칩 누적 보상도 추가 트로피와 연동.",
      en:
        "4) 'Castle Gambler' — play every game in the Castle gambling hall + casino at least once. Chip accumulation feeds another trophy.",
    },
    {
      ko:
        "5) 엔딩 후 새 회차 Legend 난이도 직주행 → 아몬 격파(아몬 라인 서브)로 모든 트로피 마감.",
      en:
        "5) Post-credits: fresh save on Legend, then beat Amon to wrap the trophy list.",
    },
  ],
  tips: [
    {
      ko:
        "Gaiden은 카무로초·소텐보리·콜로세움 3 거점만 사용하는 컴팩트한 외전이라 컴플리션 시간이 가장 짧습니다. 「데드」(Devil Flags) 같은 시리즈 미니게임이 없어 RNG 부담도 거의 없습니다.",
      en:
        "Gaiden uses only Kamurocho, Sotenbori, and the Coliseum — the most compact completion in the series, with minimal RNG.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Like a Dragon Gaiden Trophy Guide", en: "PowerPyx — Like a Dragon Gaiden Trophy Guide" },
};

// 「캐슬 귀빈」 — 클럽 캐슬 모든 캬바걸. Steam: caba_b.
const castleVIP: CuratedGuide = {
  summary: { ko: "Gaiden의 캐바레 클럽 「클럽 캐슬」에 재적 중인 모든 캬바걸과의 친밀도 라인을 풀로 클리어하면 발동. 콜로세움 보상 + 의상 강화로 단계별 친밀도가 누적됩니다.", en: "Max bonds with every Club Castle hostess. Bonds tick via coliseum rewards + outfit gifts." },
  steps: [
    { ko: "1) Akame Network 진행 중 클럽 캐슬 해금 → 모든 캬바걸 한 명씩 데이트.", en: "1) Unlock Club Castle via the Akame Network; date each hostess." },
    { ko: "2) 의상 선물 + 동반 출근으로 친밀도 풀까지 누적. 캐스트별 호감 키워드 다름.", en: "2) Gift outfits + run companion shifts; each hostess prefers different keywords." },
    { ko: "3) 모든 캬바걸 풀 친밀도 시 트로피 발동.", en: "3) Full bonds on all hostesses fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Like a Dragon Gaiden Trophy Guide", en: "PowerPyx — Like a Dragon Gaiden Trophy Guide" },
};

// 「천국의 귀빈」 — 클럽 헤븐리. Steam: caba_a.
const heavenlyVIP: CuratedGuide = {
  summary: { ko: "캐바레 클럽 「클럽 헤븐리」에 재적 중인 모든 캬바걸과의 친밀도 라인을 풀로 클리어하면 발동. 진행은 클럽 캐슬과 동일.", en: "Max bonds with every Club Heavenly hostess. Same flow as Castle." },
  steps: [
    { ko: "1) 챕터 진행 중 클럽 헤븐리 해금 → 모든 캬바걸 데이트.", en: "1) Unlock Club Heavenly and date each hostess." },
    { ko: "2) 의상 선물 + 동반 출근 + 호감 키워드 사용으로 친밀도 풀.", en: "2) Gift outfits + run shifts + use preferred keywords." },
    { ko: "3) 모든 캬바걸 풀 친밀도 시 트로피 발동.", en: "3) Full bonds fires the trophy." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Like a Dragon Gaiden Trophy Guide", en: "PowerPyx — Like a Dragon Gaiden Trophy Guide" },
};

// 「지옥의 챔피언」 — 플래티넘 랭크 이하 모든 콜로세움 매치 클리어. Steam: arena_c.
const hellsChampion: CuratedGuide = {
  summary: { ko: "Gaiden의 콜로세움(투기장)에서 플래티넘 랭크 이하의 모든 매치(개인전·팀전·서바이벌)를 클리어하면 발동. 단계별로 매치 종류가 늘어나며 후반 매치는 무기 봉인·맨손 조건 등이 붙음.", en: "Clear every Coliseum match through Platinum rank — solo, team, survival. Later matches add weapon bans or bare-fist rules." },
  steps: [
    { ko: "1) Akame Network 진행 중 콜로세움 해금. 첫 매치부터 차례로 클리어.", en: "1) Unlock the Coliseum via Akame; clear matches in order." },
    { ko: "2) 팀 멤버 영입(Akame 의뢰 + 콜로세움 보상)으로 팀전 셋업. 회복 아이템 비축 필수.", en: "2) Recruit team members (Akame quests + arena rewards). Stock heals." },
    { ko: "3) 플래티넘 랭크 최종 매치 클리어 시 트로피 + 캐슬 카바레 추가 이벤트 해금.", en: "3) Platinum-rank final clear fires the trophy + Castle Cabaret events." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Like a Dragon Gaiden Trophy Guide", en: "PowerPyx — Like a Dragon Gaiden Trophy Guide" },
};

// 「레트로 게이머」 — 마스터 시스템 5종 플레이. Steam: retro_games.
const retroGamer: CuratedGuide = {
  summary: { ko: "다이도지 본거지의 SEGA 마스터 시스템 캐비넷에서 5종류 이상의 소프트를 1회 이상 플레이하면 발동. 챕터 3부터 접근 가능.", en: "Play 5+ SEGA Master System cartridges at the Daidoji base cabinet. Available from Ch.3." },
  steps: [
    { ko: "1) 챕터 3 이후 다이도지 본거지로 이동 → 마스터 시스템 캐비넷 입장.", en: "1) After Ch.3, head to the Daidoji base and use the cabinet." },
    { ko: "2) 5개 이상 다른 소프트를 한 번씩 플레이. 클리어 점수 무관.", en: "2) Play 5+ different titles once each — score-agnostic." },
    { ko: "3) 트로피 발동.", en: "3) Trophy fires." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Like a Dragon Gaiden Trophy Guide", en: "PowerPyx — Like a Dragon Gaiden Trophy Guide" },
};

// 「포켓 서킷 상급자」 — 마스터즈 서킷 개방. Steam: pokecir_a.
const pocketCircuitMaster: CuratedGuide = {
  summary: { ko: "Gaiden 포켓 서킷에서 마스터즈 서킷(최상위 컵)을 개방하면 발동. 일반 컵 → 챔피언십 컵 차례로 우승하면 마스터즈가 풀리며, 부품 강화 + 빌드 셋업이 필수.", en: "Open the Masters Circuit (top cup) in Gaiden's Pocket Circuit. Win Standard + Championship cups first; parts + builds matter." },
  steps: [
    { ko: "1) 카무로초 포켓 서킷 스타디움에서 일반 컵부터 차례로 우승.", en: "1) Win standard cups in sequence at Kamurocho's stadium." },
    { ko: "2) 챔피언십 컵까지 우승 → 마스터즈 서킷 자동 해금.", en: "2) Win championship cups to auto-unlock Masters." },
    { ko: "3) 마스터즈 서킷 해금 즉시 트로피 발동.", en: "3) Trophy fires the moment Masters opens." },
  ],
  sourceUrl: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Like a Dragon Gaiden Trophy Guide", en: "PowerPyx — Like a Dragon Gaiden Trophy Guide" },
};

export const LIKE_A_DRAGON_GAIDEN_CURATED: Record<string, CuratedGuide> = {
  [`${GAIDEN_APP_ID}:platinum`]: platinum,
  [`${GAIDEN_APP_ID}:caba_a`]: heavenlyVIP,
  [`${GAIDEN_APP_ID}:caba_b`]: castleVIP,
  [`${GAIDEN_APP_ID}:arena_c`]: hellsChampion,
  [`${GAIDEN_APP_ID}:retro_games`]: retroGamer,
  [`${GAIDEN_APP_ID}:pokecir_a`]: pocketCircuitMaster,
};
