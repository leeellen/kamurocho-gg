import type { CuratedGuide } from "./index";

const YAKUZA_5_APP_ID = 1105510;

// "전당 입성 플레이어" — Hall of Famer (100% completion list).
// Steam api_name: achievement_20.
const hallOfFamer: CuratedGuide = {
  summary: {
    ko:
      "용과 같이 5의 100% 완료 트로피. 콘텐츠의 큰 비중이 하루카의 아이돌 트랙(아이돌·댄스·잡)에 잠겨 있어 피날레 4장 전에 모두 끝내야 합니다. 하루카 장가 끝나면 100% 라인이 영구 잠금되며, 일부 카미야마 워크스 제작 재료는 1회 한정이라 사용·판매에도 주의가 필요합니다.",
    en:
      "Yakuza 5's full 100% completion trophy. Huge chunks of the list run through Haruka's idol track (idol, dance, jobs) and must finish before Finale Ch.4 closes her arc. Some Kamiyama Works crafting materials are one-per-run, so don't sell or burn them casually.",
  },
  steps: [
    {
      ko:
        "1) 메인 스토리 장 진입 시 마다 컴플리트 리스트(시작 메뉴 → 컴플리트)에서 미달성 항목 점검. 장 잠금 항목을 조기에 식별.",
      en:
        "1) Check the Completion List at each chapter boundary to flag anything still unchecked, especially chapter-locked items.",
    },
    {
      ko:
        "2) 하루카 파트(파트 3)에 진입하면 「The Road to Fame」 잡 전 종류(촬영·라디오·인터뷰·CM·라이브)를 한 번씩 수락 → 「인기 아이돌」 카운트. 동시에 댄스 미션 풀 완료, 라이브 배틀 풀 클리어, 프린세스 리그 결승 우승까지 정리.",
      en:
        "2) During Haruka's part, accept every job type in The Road to Fame (shoot/radio/interview/CM/live) for the 'Trendy Idol' counter, then finish every dance mission, live battle, and the Princess League final.",
    },
    {
      ko:
        "3) 파트 4(시나다 편)에서 야구장 사이드 미션 10건 이상 클리어해 「날려버린 남자」도 함께 마감. 일부 미션은 1회성이라 받자마자 처리.",
      en:
        "3) In Shinada's part, clear 10+ baseball-cage sub-missions for the 'Big Hitter' link. A few are one-shot, so take them as they appear.",
    },
    {
      ko:
        "4) 파트 2(사에지마 사냥꾼) — 야마오로시 사냥 완수 + 황금 수사슴 추가 사냥. 캐릭터 파트 전환 시 사냥 라인이 잠기므로 사에지마 파트 종료 전에 모두 처리.",
      en:
        "4) In Saejima's hunter arc, kill Yama-oroshi and also bag the rare Golden Stag before his part ends — hunting locks once the protagonist swaps.",
    },
    {
      ko:
        "5) 카미야마 워크스 제작 재료(특히 1회성 레시피 재료)는 사용 전 컴플리트 리스트 「제작」 카운트 충족 여부 확인. 판매·소비 후 재획득 불가 재료가 다수 있습니다.",
      en:
        "5) Before consuming any Kamiyama Works material, double-check the Completion List crafting counter — several mats can't be re-obtained once spent.",
    },
    {
      ko:
        "6) 피날레 4장 진입 직전 컴플리트 리스트 100%를 확인하고 장 진행. 100% 상태로 4장를 클리어하면 트로피 발동 — 미체크 항목이 있으면 영구 잠금.",
      en:
        "6) Right before Finale Ch.4, confirm 100% on the Completion List, then push through the chapter. The trophy fires on chapter clear — anything unchecked is gone for this run.",
    },
  ],
  tips: [
    {
      ko:
        "100% 라인은 게임 내 「컴플리트」 메뉴에서 카테고리별로 정렬되며, 카테고리 100%마다 추가 보상(키류·사에지마·아키야마·시나다·하루카별 어메니티 슈트 등)이 주어집니다.",
      en:
        "Each Completion-List category that reaches 100% drops bonus gear (special outfits for each protagonist), so the trophy and the rewards roll together.",
    },
    {
      ko:
        "하루카는 피날레 4장에서 아이돌을 그만두는 컷이 자동 진행 — 그 컷 이후 100% 라인 전체가 잠기므로 사전 점검이 필수.",
      en:
        "Haruka quits the idol path automatically in Finale Ch.4. Once that cutscene plays, the entire 100% list locks — pre-check is non-negotiable.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402",
  sourceLabel: {
    ko: "Steam Community — Yakuza 5 Achievement Guide",
    en: "Steam Community — Yakuza 5 Achievement Guide",
  },
};

// "날려버린 남자" — Big Hitter (Shinada's baseball sub-missions).
// Steam api_name: achievement_19.
const bigHitter: CuratedGuide = {
  summary: {
    ko:
      "시나다 파트(파트 4) 한정 야구장 사이드 미션을 10건 이상 클리어해야 트로피 발동. 일부 미션은 재도전이 불가능한 1회성이라 의뢰가 뜨는 즉시 처리하는 것이 안전합니다.",
    en:
      "Clear 10+ baseball-cage sub-missions during Shinada's part — several are one-shot with no retry, so take every offered mission immediately.",
  },
  steps: [
    {
      ko:
        "1) 시나다 파트 진입 직후 나가스가이의 야구장(배팅 센터)에 들러 메인 시나리오 트리거를 확인. 「오니에다 코치」 라인이 본격 해금되면 사이드 미션이 풀리기 시작합니다.",
      en:
        "1) Open Shinada's part by stopping at the Nagasugai batting center — once the Oniaeda coach line activates, side missions begin spawning.",
    },
    {
      ko:
        "2) 미션 게시판이 아닌 야구장 입구의 인물·NPC 마커에 직접 말을 걸어 의뢰 수령. 미션 수령 후 24시간(인게임) 동안만 유효한 경우가 있어 즉시 진행해야 합니다.",
      en:
        "2) Talk to the rotating NPC at the cage entrance (not a board) to accept jobs — some expire after one in-game day, so run them right away.",
    },
    {
      ko:
        "3) 일반 타격 미션 외에도 「밴드 멤버 영입(라이벌 야구팀과의 시합)」 라인이 함께 굴러갑니다. 라이벌 팀 격파 미션도 카운트되니 둘 다 받으세요.",
      en:
        "3) Apart from straight batting drills, the rival-team recruitment line counts too — pick up both kinds.",
    },
    {
      ko:
        "4) 누적 10건 클리어 시 트로피 발동. 시나다 파트는 분량이 짧으므로 다른 미니게임에 한눈팔지 말고 사이드 미션을 우선순위로 도는 게 안전.",
      en:
        "4) Ten cleared missions fires the trophy. Shinada's part is short — prioritize side missions over unrelated minigames.",
    },
  ],
  tips: [
    {
      ko:
        "수령했지만 클리어 못 한 미션은 시나다 파트 종료와 동시에 영구 잠금. 다음 캐릭터 파트로 넘어가기 전에 미션 마커가 남아 있는지 컴플리트 리스트로 점검.",
      en:
        "Open-but-incomplete missions vanish when Shinada's part ends — verify against the Completion List before swapping protagonist.",
    },
    {
      ko:
        "「전당 입성 플레이어」 100% 라인의 일부이기도 하므로 같은 회차에서 함께 정리.",
      en:
        "This counts toward the 100% 'Hall of Famer' chain — knock them out in the same run.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402",
  sourceLabel: {
    ko: "Steam Community — Yakuza 5 Achievement Guide",
    en: "Steam Community — Yakuza 5 Achievement Guide",
  },
};

// Y5R 플래티넘 "꿈을 이루는 자". Steam api_name: achievement_0.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Yakuza 5 Remastered 플래티넘 — 다른 55개 업적 전부 해금 시 자동 발동. Y5는 5인 주인공+5개 도시 구조에 캐릭터별 파트가 분리돼 있어, 「전당 입성 플레이어(100% 컴플리트)」와 캐릭터 파트 한정 라인(하루카 아이돌·사에지마 사냥·시나다 야구)을 메인 회차 안에서 정확히 처리하는 게 핵심.",
    en:
      "Y5R's platinum auto-pops at full trophy unlock. The 5-protagonist / 5-city structure makes part-locked lines (Haruka idol, Saejima hunter, Shinada baseball) the main risk; finish them inside each part's window and 'Hall of Famer' (100 %) carries the rest.",
  },
  steps: [
    {
      ko:
        "1) 파트 1 (키류 — 후쿠오카 나가스가이) — 택시 미션 컴플리트, 도시별 NPC 친밀도 시작. 메인 진행과 병행해 「관광의 용」 뷰 포인트 1곳씩.",
      en:
        "1) Part 1 (Kiryu — Nagasugai) — taxi missions, start NPC bonds, snap one View Point per city.",
    },
    {
      ko:
        "2) 파트 2 (사에지마 — 츠키미노) — 사냥꾼 미니게임 풀 완료(「야마오로시 격파」 + 「황금 수사슴」 추가), 모든 사에지마 한정 서브스토리.",
      en:
        "2) Part 2 (Saejima — Tsukimino) — finish Hunter minigame (Yama-oroshi + rare Golden Stag) and every Saejima-only sub.",
    },
    {
      ko:
        "3) 파트 3 (하루카 — 소텐보리) — 「The Road to Fame」 전 잡 종류 수락 + 댄스 미션 풀 클리어 + 프린세스 리그 결승 우승. 피날레 4장 진입 전에 100% 카운트 점검.",
      en:
        "3) Part 3 (Haruka — Sotenbori) — accept every job type, finish all dance missions, win the Princess League final. Verify 100 % before Finale Ch.4.",
    },
    {
      ko:
        "4) 파트 4 (시나다 — 나가스가이) — 야구장 사이드 미션 10건 이상(「날려버린 남자」) + 라이벌 야구팀 격파. 미션은 1회성이 많아 받자마자 처리.",
      en:
        "4) Part 4 (Shinada — Nagasugai) — clear 10+ baseball-cage subs (Big Hitter) and rival-team beatdowns. One-shot missions, run them on sight.",
    },
    {
      ko:
        "5) 피날레 — 4인 모두 MAX Lv.20(「최강을 잇는 자」) + 「전당 입성 플레이어」 100% 도달. 마지막으로 새 회차에서 LEGEND/EX-HARD 클리어로 「전설을 잇는 자」·「궁극을 잇는 자」 마감.",
      en:
        "5) Finale — push all four leads to MAX Lv.20 (Linked Together), tick 'Hall of Famer' at 100 %, then a fresh LEGEND/EX-HARD run for the difficulty trophies.",
    },
  ],
  tips: [
    {
      ko:
        "하루카는 피날레 4장에서 아이돌을 그만두는 자동 컷이 있어, 그 컷 이후 모든 하루카 100% 라인이 영구 잠금. 사전에 100%인지 컴플리션 리스트로 반드시 확인.",
      en:
        "Haruka auto-quits idol life at Finale Ch.4. Anything unticked beforehand locks for the run — verify on the Completion List.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402",
  sourceLabel: {
    ko: "Steam Community — Yakuza 5 Remastered Achievement Guide",
    en: "Steam Community — Yakuza 5 Remastered Achievement Guide",
  },
};

// 「전설을 잇는 자」 — LEGEND 클리어. Steam api_name: achievement_8.
const legendY5: CuratedGuide = {
  summary: {
    ko:
      "Yakuza 5 Remastered 메인 스토리를 LEGEND 난이도로 클리어 시 발동. 5인 주인공 모두 보스 패턴이 달라 사전 학습 필수. 1회차 진행도가 이월되므로 「클리어 후 모드」에서 LEGEND 직주행이 표준.",
    en:
      "Clear Y5R's story on LEGEND. All five leads have unique boss patterns — read them. Carry-over from your first clear makes a LEGEND sprint the standard route.",
  },
  steps: [
    {
      ko:
        "1) 엔딩 후 「클리어 후 모드」 → LEGEND 새 회차. 1회차 무기·스킬·돈 모두 이월.",
      en:
        "1) Post-credits, start Clear Mode + LEGEND — gear, skills, and money carry over.",
    },
    {
      ko:
        "2) 사에지마 사냥 장의 야마오로시 + 시나다 야구 + 키류 택시 풀 운영 + 하루카 라이브 배틀 모두 LEGEND 보정으로 난이도 급상승. 회복 아이템 풀 비축.",
      en:
        "2) Saejima hunting, Shinada baseball, Kiryu taxi, Haruka live battles all spike — stock healing.",
    },
    {
      ko:
        "3) 장 「피날레 4」 라스트 보스 클리어 시 트로피 발동.",
      en:
        "3) Finale Ch.4 final boss kill fires the trophy.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402",
  sourceLabel: {
    ko: "Steam Community — Yakuza 5 Remastered Achievement Guide",
    en: "Steam Community — Yakuza 5 Remastered Achievement Guide",
  },
};

// 「서브 스토리 완전 제패」 — Y5의 아몬 격파. Steam api_name: achievement_24.
const subAmonY5: CuratedGuide = {
  summary: {
    ko:
      "5인 주인공의 모든 서브스토리(약 130건)를 클리어한 뒤 Premium Adventure에서 아몬 일족(5명)과 격투해 모두 격파하면 발동. Yakuza 5의 최종 컴플리션 라인 중 하나.",
    en:
      "Clear every substory across the 5 leads (~130 total), then beat all 5 Amon Clan members in Premium Adventure.",
  },
  steps: [
    {
      ko:
        "1) 5인 주인공별 서브스토리 100% 도달. 캐릭터 파트 한정 서브는 메인 회차에서 정리하지 않으면 Premium Adventure 재방문 필요.",
      en:
        "1) Hit 100 % subs per lead. Part-locked subs need Premium Adventure if missed in the main run.",
    },
    {
      ko:
        "2) 모든 서브 완료 후 아몬 일족 격투가 캐릭터별로 자동 트리거. 5인 모두 격파 시 트로피 발동.",
      en:
        "2) Complete subs trigger Amon fights per lead. Beat all 5 for the trophy.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402",
  sourceLabel: {
    ko: "Steam Community — Yakuza 5 Remastered Achievement Guide",
    en: "Steam Community — Yakuza 5 Remastered Achievement Guide",
  },
};

// 「미스터 클라이맥스」 — 4인 클라이맥스 히트 전 종류. Steam api_name: achievement_37.
const mrClimaxY5: CuratedGuide = {
  summary: {
    ko:
      "키류·사에지마·아키야마·시나다 4명 모두로 모든 「클라이맥스 히트(특정 무기·환경에서 발동하는 강력 히트 액션)」 종류를 발동시켜야 트로피 발동. 무기별·환경별·체술별 조건이 까다로워 체크리스트 기반 진행 필수.",
    en:
      "Trigger every Climax Heat (weapon- or environment-specific super heat action) with each of Kiryu/Saejima/Akiyama/Shinada. Weapon/environment/style conditions are strict — checklist-driven.",
  },
  steps: [
    {
      ko:
        "1) 컴플리트 리스트의 「클라이맥스 히트」 카테고리를 열어 캐릭터별 미발동 종류 확인. 종류별 무기·환경 조건 메모.",
      en:
        "1) Open the Climax Heat category and list missing entries per lead with their weapon/env conditions.",
    },
    {
      ko:
        "2) 4인 캐릭터 모두 같은 클라이맥스 히트 종류를 1회 이상 발동시켜야 카운트. 특정 무기(예: 카타나, 골프채)와 특정 적 위치(벽·테이블·차량 등) 조합이 필요한 종류가 다수.",
      en:
        "2) Each Climax Heat must fire once per lead — many require a specific weapon + enemy positioning (wall, table, car).",
    },
    {
      ko:
        "3) 모든 종류 카운트 시 트로피 발동. 누락된 종류만 별도 세이브로 반복 도전.",
      en:
        "3) Full coverage fires the trophy. Save before chasing rare conditions for retries.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402",
  sourceLabel: {
    ko: "Steam Community — Yakuza 5 Remastered Achievement Guide",
    en: "Steam Community — Yakuza 5 Remastered Achievement Guide",
  },
};

// 「인생은 엔터테인먼트」 — 모든 미니게임 1회. Steam api_name: achievement_42.
const allMinigamesY5: CuratedGuide = {
  summary: {
    ko:
      "Y5의 모든 미니게임(SPECIAL CONTENTS 제외) 1회 이상 플레이 시 발동. 5개 도시별 클럽 세가 + 술집 + 도박 + 사이드 시스템(택시·사냥·아이돌·야구·눈싸움 등)이 모두 카운트 대상.",
    en:
      "Touch every Y5 minigame at least once (excluding SPECIAL CONTENTS). Spans the 5 cities' Club Sega cabinets, bars, gambling, taxis, hunting, idol, baseball, snowball fights.",
  },
  steps: [
    {
      ko:
        "1) 캐릭터별 도시(키류 → 후쿠오카, 사에지마 → 츠키미노, 아키야마 → 소텐보리, 하루카 → 소텐보리, 시나다 → 나가스가이)의 클럽 세가 모든 캐비넷 1회씩.",
      en:
        "1) Run every Club Sega cabinet in each lead's home city.",
    },
    {
      ko:
        "2) 각 도시의 도박·술집 미니게임(다트·당구·볼링·마작·블랙잭 등)을 1회씩.",
      en:
        "2) Hit gambling + bar minigames in every city (darts, billiards, bowling, mahjong, blackjack).",
    },
    {
      ko:
        "3) 캐릭터 한정 시스템 — 키류 택시, 사에지마 사냥, 아키야마 댄스, 하루카 아이돌, 시나다 야구 — 모두 1회 이상.",
      en:
        "3) Lead-specific systems — taxi, hunting, dance, idol, baseball — each touched.",
    },
    {
      ko:
        "4) 컴플리트 리스트의 「미니게임」 카테고리가 모두 카운트되면 트로피 발동.",
      en:
        "4) Full Minigame category coverage fires the trophy.",
    },
  ],
  tips: [
    {
      ko:
        "[캐릭터 한정 미니게임] Y5는 시리즈에서 미니게임 밀도가 가장 높습니다. 사에지마 사냥은 발자국을 따라가 짐승의 약점에 사격하고, 아키야마 댄스 배틀은 프롬프트 타이밍을 맞추는 리듬게임, 하루카 「프린세스 리그」는 댄스·토크 응답을 패턴대로 맞추는 게임입니다. 시나다 야구는 타격 타이밍, 키류 택시는 코스 준수·승객 요청 충족이 핵심. 트로피는 각 1회 플레이면 충분하니 가볍게 훑으세요.",
      en:
        "[Lead-specific minigames] Y5 has the densest minigame spread in the series. Saejima's hunting is track-the-prints then shoot the weak point; Akiyama's dance battles are timing-based rhythm; Haruka's Princess League is matching dance and talk-response patterns; Shinada's baseball is swing timing; Kiryu's taxi is route-following + passenger requests. The trophy only needs one play of each, so don't sweat the scores.",
    },
    {
      ko:
        "[마작·당구] 마작은 닫은 손으로 2~8 숫자패만 모아 「리치+탄야오」 한 패턴을 노리면 역이 자동으로 붙습니다. 당구는 「고스트 볼」 원리로 포켓 정반대편 목적구 표면을 큐볼이 때리도록 조준하세요.",
      en:
        "[Mahjong & billiards] For mahjong keep your hand closed and chase Riichi + Tanyao with simples (2–8) only. For pool, use the 'ghost ball' rule — aim at the point on the object ball opposite the pocket.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402",
  sourceLabel: {
    ko: "Steam Community — Yakuza 5 Remastered Achievement Guide",
    en: "Steam Community — Yakuza 5 Remastered Achievement Guide",
  },
};

export const YAKUZA_5_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_5_APP_ID}:achievement_0`]: platinum,
  [`${YAKUZA_5_APP_ID}:achievement_8`]: legendY5,
  [`${YAKUZA_5_APP_ID}:achievement_19`]: bigHitter,
  [`${YAKUZA_5_APP_ID}:achievement_20`]: hallOfFamer,
  [`${YAKUZA_5_APP_ID}:achievement_24`]: subAmonY5,
  [`${YAKUZA_5_APP_ID}:achievement_37`]: mrClimaxY5,
  [`${YAKUZA_5_APP_ID}:achievement_42`]: allMinigamesY5,
};
