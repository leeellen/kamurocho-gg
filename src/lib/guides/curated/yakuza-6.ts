import type { CuratedGuide } from "./index";

const YAKUZA_6_APP_ID = 1388590;

// "댄들링 드래곤" — Dandling Dragon (Ch.3 Haruto soothing minigame).
// Steam api_name: ogfac50.
const dandlingDragon: CuratedGuide = {
  summary: {
    ko:
      "챕터 3에서 키류가 하루토를 돌보는 시퀀스 중에만 등장하는 달래기 미니게임을 모두 성공시켜 만족도 게이지를 가득 채워야 트로피 발동. 챕터 3 종료와 함께 미니게임 자체가 재등장하지 않으므로 같은 회차에서는 영구 잠금 — 진입 직전 수동 세이브 필수.",
    en:
      "Chapter 3 only — Kiryu's babysitting stretch has a Haruto-soothing minigame; fill his satisfaction meter via consecutive successful prompts. The minigame never returns after Ch.3, so manual-save before the babysitting scene starts.",
  },
  steps: [
    {
      ko:
        "1) 챕터 3 진행 중 키류가 하루토를 안고 거리를 도는 시퀀스 직전에 수동 세이브.",
      en:
        "1) Manual save right before the cutscene that hands Haruto to Kiryu in Ch.3.",
    },
    {
      ko:
        "2) 시퀀스가 시작되면 화면 중앙에 「달래기 프롬프트」가 떠오릅니다. 표시된 버튼을 정확한 타이밍에 누르거나 좌우 스틱을 지시된 방향으로 흔드는 등 입력 종류가 다양합니다.",
      en:
        "2) Soothe prompts appear mid-screen — press the indicated button on cue, or wiggle the stick in the marked direction (input type varies).",
    },
    {
      ko:
        "3) 한 번이라도 실패하면 만족도 게이지가 떨어집니다. 끝까지 100% 만족도를 유지해 모든 프롬프트를 성공시키세요. 게이지가 일정 이상 차오른 채로 시퀀스가 끝나면 트로피 발동.",
      en:
        "3) A single miss drops the meter. Land every prompt cleanly so the meter stays full to the end of the sequence — that's the trophy condition.",
    },
    {
      ko:
        "4) 트로피가 안 떴으면 즉시 1단계 수동 세이브로 로드. 챕터 3을 넘어가면 영구 잠금이라 재시도 시점이 매우 좁습니다.",
      en:
        "4) No trophy? Reload the pre-Ch.3 manual save. Once Ch.3 ends the minigame never returns this run.",
    },
  ],
  tips: [
    {
      ko:
        "프롬프트 타이밍은 게임 내 BGM 박자와 거의 일치합니다. BGM 볼륨을 조금 키워 두면 빨라지는 박자에 더 쉽게 반응할 수 있습니다.",
      en:
        "Prompt timing tracks the BGM — turn it up a notch to read the rhythm.",
    },
    {
      ko:
        "용과 같이 6의 유일한 영구 미서블 트로피이므로, 챕터 3 진입 시점부터 가장 우선으로 챙겨야 합니다.",
      en:
        "This is Yakuza 6's only permanent missable — prioritize it the moment Ch.3 begins.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-6-the-song-of-life-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Yakuza 6 Trophy Guide",
    en: "PowerPyx — Yakuza 6 Trophy Guide",
  },
};

// Y6 플래티넘 "생명의 노래". Steam api_name: ogfac01.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Yakuza 6 The Song of Life 플래티넘 — 다른 58개 업적 전부 해금 시 자동 발동. 영구 미서블은 「댄들링 드래곤(챕터 3 한정)」 1종뿐이라 나머지는 Premium Adventure에서 자유롭게 정리 가능. 핵심 게이트는 ①클럽 크리에이터(키류 클랜) 100승 ②야구단 매니저 ③RIZAP/라이잡 트레이닝 풀 + 클럽 세가 모든 게임 ④EX-HARD/LEGEND 클리어 ⑤아몬 격파.",
    en:
      "Y6 platinum auto-pops at full unlock. Only one permanent missable (Dandling Dragon, Ch.3) — everything else lands cleanly in Premium Adventure. Gates: ① Kiryu Clan 100 wins ② Baseball Team manager ③ RIZAP + every Club Sega game ④ EX-HARD/LEGEND ⑤ Amon.",
  },
  steps: [
    {
      ko:
        "1) 챕터 3 진입 직전 수동 세이브 → 하루토 돌보기 시퀀스에서 「댄들링 드래곤」 미니게임을 만족도 100%로 클리어. 유일한 영구 미서블이므로 최우선.",
      en:
        "1) Manual save before Ch.3, then nail the Haruto-soothing minigame at 100 % satisfaction for the Dandling Dragon trophy — the only permanent missable.",
    },
    {
      ko:
        "2) 메인 진행과 병행해 키류 클랜 크리에이터(클랜 배틀)에서 누적 100승 달성 + 야구단 매니저 미니게임 완주. 두 시스템은 별도 진행도라 일찍 시작할수록 후반이 가볍습니다.",
      en:
        "2) Run Clan Creator and the Baseball Team minigame in parallel with the story — both have separate progression bars and benefit from early starts.",
    },
    {
      ko:
        "3) 「대단한 선수야」(모든 미니게임 플레이) + 「이렇게 좋은 사람이 되려면 오랜 시간이 걸립니다」(클럽 세가 모든 게임) + 「도그마의 용」(라이잡 트레이닝 모두 체험) 세 라인을 카무로초·오노미치 양쪽에서 정리.",
      en:
        "3) Touch every minigame across Kamurocho and Onomichi; clear every Club Sega arcade; complete every RIZAP training set.",
    },
    {
      ko:
        "4) 엔딩 후 Premium Adventure에서 잔여 서브스토리·캣 카페·낚시 도감·아몬 격파(서브스토리 51)까지 마무리.",
      en:
        "4) Premium Adventure cleanup — remaining subs, Cat Cafe, fishing dex, and Amon (Sub 51).",
    },
    {
      ko:
        "5) 새 회차에서 EX-HARD 또는 LEGEND 메인 스토리 클리어. 1회차 진행도가 이월되므로 스토리 직주행으로 충분.",
      en:
        "5) Fresh save on EX-HARD or LEGEND for the difficulty trophy — carry-over means story-only is enough.",
    },
  ],
  tips: [
    {
      ko:
        "용과 같이 6는 시리즈 중 100% 정리가 가장 자유롭습니다. 댄들링 드래곤만 챕터 3 안에 처리하면 나머지는 엔딩 후 자유 진행 가능.",
      en:
        "Y6 is the most forgiving 100 % run in the series. Lock down Dandling Dragon in Ch.3 and the rest plays out at your pace post-credits.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-6-the-song-of-life-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 6 Trophy Guide", en: "PowerPyx — Yakuza 6 Trophy Guide" },
};

// 「전설의 드래곤」 — LEGEND 클리어. Steam api_name: ogfac10.
const legendY6: CuratedGuide = {
  summary: {
    ko:
      "Yakuza 6 메인 스토리를 LEGEND 난이도로 클리어 시 발동. 엔딩 후 「클리어 후 모드」에서 해금되며 1회차 진행도 + 자원 이월. Y6는 시리즈 중 LEGEND 난이도가 비교적 자비로운 편이라 직주행이 무난.",
    en:
      "Clear Y6's story on LEGEND (post-credits). Carry-over from your first run; LEGEND is comparatively forgiving in Y6 — a story-sprint works.",
  },
  steps: [
    {
      ko:
        "1) 엔딩 후 클리어 데이터 → LEGEND 새 회차. 1회차 무기·스킬·EXP 이월.",
      en:
        "1) After credits, Clear Data → LEGEND. All gear/skills/EXP carry over.",
    },
    {
      ko:
        "2) 보스전 회피·가드 카운터 위주. Y6는 트리플 콤보·반격 시스템이 핵심이라 회피 후 캐스트 가드 → 반격 패턴 학습.",
      en:
        "2) Lean on dodge + guard counters — Y6's triple-combo system rewards counter-timing.",
    },
    {
      ko:
        "3) 챕터 13 라스트 보스 클리어 시 트로피 발동.",
      en:
        "3) Ch.13 final boss kill fires the trophy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-6-the-song-of-life-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 6 Trophy Guide", en: "PowerPyx — Yakuza 6 Trophy Guide" },
};

// 「대단한 선수야」 — 모든 미니게임 플레이. Steam api_name: ogfac41.
const allMinigamesY6: CuratedGuide = {
  summary: {
    ko:
      "Y6의 모든 미니게임(카무로초 + 오노미치) 1회 이상 플레이 시 발동. 클럽 세가·다트·당구·볼링·마작·낚시·캣 카페·라이브 챗·라이잡·야구단·클랜 크리에이터·맥주컵 등 모두 대상.",
    en:
      "Play every Y6 minigame across Kamurocho + Onomichi — Club Sega, darts, billiards, bowling, mahjong, fishing, cat cafe, live chat, RIZAP, baseball, Clan Creator, beer cup, etc.",
  },
  steps: [
    {
      ko:
        "1) 카무로초 + 오노미치 양 도시의 클럽 세가, 술집 미니게임을 모두 1회씩.",
      en:
        "1) Touch every Club Sega cabinet + bar minigame in both cities.",
    },
    {
      ko:
        "2) 라이잡 트레이닝 풀 + 야구단 매니저 1경기 + 클랜 크리에이터 1전투 + 캣 카페 1마리 영입 + 라이브 챗 1회.",
      en:
        "2) RIZAP full + 1 baseball game + 1 Clan Creator battle + 1 cat caught + 1 live chat.",
    },
    {
      ko:
        "3) 컴플리트 리스트의 「미니게임」 카테고리가 모두 카운트되면 트로피 발동.",
      en:
        "3) Full Minigame category coverage fires the trophy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-6-the-song-of-life-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 6 Trophy Guide", en: "PowerPyx — Yakuza 6 Trophy Guide" },
};

// 「내 인생의 이야기」 — 모든 서브스토리 완료. Steam api_name: ogfac13.
const allSubsY6: CuratedGuide = {
  summary: {
    ko:
      "Y6의 모든 서브스토리(약 51건)를 클리어하면 발동. 영구 미서블 0이라 Premium Adventure에서도 회수 가능. 카무로초 + 오노미치 양 도시를 오가며 챕터별로 새 서브가 추가되니 주기적으로 확인.",
    en:
      "Clear every Y6 substory (~51). Zero permanent missables — recoverable in Premium Adventure. New subs drop each chapter in both cities, so audit regularly.",
  },
  steps: [
    {
      ko:
        "1) 각 챕터 진행 직후 카무로초 + 오노미치 거리를 한 바퀴 돌며 새 서브 마커 확인.",
      en:
        "1) After each chapter, do a sweep of both cities for new sub markers.",
    },
    {
      ko:
        "2) 일부 서브는 시간대(낮/밤)나 특정 NPC 조우 후에만 발생. 가이드 옆에 두고 진행.",
      en:
        "2) Some subs gate on time of day or NPC encounters — keep a checklist.",
    },
    {
      ko:
        "3) 51건 모두 클리어 시 트로피 발동.",
      en:
        "3) Trophy fires when all 51 are cleared.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-6-the-song-of-life-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 6 Trophy Guide", en: "PowerPyx — Yakuza 6 Trophy Guide" },
};

// 「클럽샤인스타」 — 모든 호스티스 지명. Steam api_name: ogfac45.
const liveChatStar: CuratedGuide = {
  summary: {
    ko:
      "Y6의 라이브 챗(스마트폰 라이브 미니게임)에서 모든 호스티스를 1회 이상 지명하면 발동. 카무로초·오노미치 각각 5명씩 총 10명. 라이브 챗 자체는 챕터 5 이후 해금됩니다.",
    en:
      "Tune into every Live Chat hostess at least once — 5 in Kamurocho + 5 in Onomichi (10 total). Live Chat unlocks past Ch.5.",
  },
  steps: [
    {
      ko:
        "1) 챕터 5 이후 스마트폰에서 「라이브 챗」 앱 해금. 매일 등장 시간이 다르므로 시간대 변경 시 한 번씩 확인.",
      en:
        "1) Open the Live Chat app post-Ch.5. Different hostesses appear at different times — check across the in-game day.",
    },
    {
      ko:
        "2) 각 호스티스 라이브 1회 시청 + 1회 이상 「지명」(채팅). 카무로초 5명 + 오노미치 5명 모두 카운트.",
      en:
        "2) Watch each hostess's live + chat at least once — all 10 must register.",
    },
    {
      ko:
        "3) 10명 모두 지명 시 트로피 발동.",
      en:
        "3) Trophy fires on the tenth.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-6-the-song-of-life-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 6 Trophy Guide", en: "PowerPyx — Yakuza 6 Trophy Guide" },
};

// 「아몬 패배」 — 아몬 격파. Steam api_name: ogfac28.
const amonY6: CuratedGuide = {
  summary: {
    ko:
      "다른 모든 서브스토리(50건) 클리어 후 발생하는 서브스토리 51 「복수의 아몬」을 진행해 아몬을 격파하면 발동. Premium Adventure 진행 권장.",
    en:
      "Clear every other substory (50), then trigger Sub 51 'Amon's Revenge' to fight him. Best done in Premium Adventure.",
  },
  steps: [
    {
      ko:
        "1) 서브스토리 50건 클리어 → 카무로초 칠드런즈 파크 또는 오노미치 특정 지점에서 아몬 자동 등장.",
      en:
        "1) Clear 50 subs to spawn Amon at Children's Park or an Onomichi flag.",
    },
    {
      ko:
        "2) 회복 아이템 풀 + 강력 무기 사전 비축. 아몬은 시리즈 최고난도 보스이지만 Y6는 트리플 콤보/카운터로 비교적 안정적으로 잡힙니다.",
      en:
        "2) Stock heals + a strong weapon. Y6's combo + counter system makes Amon manageable.",
    },
    {
      ko:
        "3) 격파 시 트로피 발동 + 보상 의상.",
      en:
        "3) Beat him for the trophy and the bonus outfit.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-6-the-song-of-life-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 6 Trophy Guide", en: "PowerPyx — Yakuza 6 Trophy Guide" },
};

export const YAKUZA_6_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_6_APP_ID}:ogfac01`]: platinum,
  [`${YAKUZA_6_APP_ID}:ogfac10`]: legendY6,
  [`${YAKUZA_6_APP_ID}:ogfac13`]: allSubsY6,
  [`${YAKUZA_6_APP_ID}:ogfac28`]: amonY6,
  [`${YAKUZA_6_APP_ID}:ogfac41`]: allMinigamesY6,
  [`${YAKUZA_6_APP_ID}:ogfac45`]: liveChatStar,
  [`${YAKUZA_6_APP_ID}:ogfac50`]: dandlingDragon,
};
