import type { CuratedGuide } from "./index";

const JUDGMENT_APP_ID = 2058180;

// Per-achievement detailed walkthroughs that hand-author the data the bulk
// Steam guide ingest can't represent — exact chapter/scene/location per cat,
// the verbatim hostess-disguise dialogue order, etc. Cross-referenced against
// PowerPyx's dedicated Judgment guides (Stray Cat Locations + Trophy
// Roadmap, 2024 fan-curated). Keys are `${appId}:${api_name.toLowerCase()}`.

const cats: CuratedGuide = {
  summary: {
    ko:
      "메인 스토리·사이드 케이스 진행 중 액티브 서치 또는 드론 서치 장면에서 등장하는 길고양이 14마리를 빠짐없이 조사해야 합니다. 한 마리라도 놓치면 같은 회차에서는 다시 풀리지 않으므로, 진입 직전 수동 세이브를 만들어 두는 편이 안전합니다.",
    en:
      "Inspect all 14 stray cats that appear during Active Search or Drone Search scenes across the main story and a few side cases. Miss any one of them and you can't re-trigger it this playthrough — drop a manual save before every flagged scene below.",
  },
  steps: [
    {
      ko:
        "#01 · 1장 — 2번째 액티브 서치 (드론을 추적): 에어컨 실외기 위, 벽쪽을 바라보고 있는 고양이를 확대 조사.",
      en:
        "#01 · Chapter 1 — 2nd Active Search (\"Locate your drone\"): on top of the air-con unit, facing the wall.",
    },
    {
      ko: "#02 · 1장 — 3번째 액티브 서치: 왼쪽 출입문 안쪽 그늘에 앉아 있음.",
      en: "#02 · Chapter 1 — 3rd Active Search (outside Club Amour): in the doorway to the left.",
    },
    {
      ko: "#03 · 1장 — 4번째 액티브 서치: 길가 자판기 위에 올라가 있음.",
      en: "#03 · Chapter 1 — 4th Active Search (outside KJ Art): perched on top of a vending machine.",
    },
    {
      ko:
        "#04 · 1장 — 1번째 드론 서치: 건물 모서리 위쪽 난간에 앉아 있어 드론을 위로 들어 올려야 조사 가능.",
      en:
        "#04 · Chapter 1 — 1st Drone Search (KJ Art building): on the ledge at the upper corner — fly the drone up to inspect.",
    },
    {
      ko: "#05 · 1장 — 5번째 액티브 서치: 좌측 창문 너머 출입문 바로 옆에 보임.",
      en: "#05 · Chapter 1 — 5th Active Search (KJ Art security room): just outside the door, visible through the left window.",
    },
    {
      ko: "#06 · 1장 — 6번째 액티브 서치 (큐슈 No.1 별 라멘 바깥): 골목 남쪽 끝에 웅크리고 있음.",
      en: "#06 · Chapter 1 — 6th Active Search (outside Kyushu No.1 Star Ramen): at the south end of the alley.",
    },
    {
      ko:
        "#07 · 2장 — 1번째 액티브 서치 (연쇄살인 현장): 왼쪽 노란 박스 위 선반 부분에 올라가 있음.",
      en:
        "#07 · Chapter 2 — 1st Active Search (serial-murder scene): on the ledge above the yellow crates on the left.",
    },
    {
      ko:
        "#08 · 사이드 케이스 — 「타이거 자켓」 (배팅 센터): 도로 오른쪽 콘크리트 콘 옆에 앉아 있음.",
      en:
        "#08 · Side Case — 'Tiger Jacket' (batting cages): by a traffic cone on the street to the right.",
    },
    {
      ko: "#09 · 사이드 케이스 — 「뒤틀린 그로퍼」: 왼쪽에 주차된 차 지붕 위에 있음.",
      en: "#09 · Side Case — 'The Twisted Groper': on top of a car parked to the left.",
    },
    {
      ko:
        "#10 · 4장 — 1번째 액티브 서치 (겐다 법률사무소 앞): 길 건너 파란 셔터 앞 전기 배전함 위에 앉아 있음.",
      en:
        "#10 · Chapter 4 — 1st Active Search (Genda Law Office): on the power box in front of the blue garage door across the street.",
    },
    {
      ko: "#11 · 사이드 케이스 — 「부비트랩」(바 잠입): 화면 좌측 하단, 스툴과 카운터 사이 모서리.",
      en: "#11 · Side Case — 'Entrapment' (bar investigation): lower-left corner between the stools and the bar.",
    },
    {
      ko:
        "#12 · 5장 — 1번째 액티브 서치 (야가미 탐정 사무소 바깥): 길 건너 건물 입구 안쪽에 보임.",
      en:
        "#12 · Chapter 5 — 1st Active Search (Yagami Detective Agency): in the entryway across the road.",
    },
    {
      ko:
        "#13 · 5장 — 2번째 액티브 서치: 보행자 다리 아래 기둥의 정사각형 받침 가장 아래쪽.",
      en:
        "#13 · Chapter 5 — 2nd Active Search (ADDC flashback): at the very bottom on the square base of the pillar under the sky bridge.",
    },
    {
      ko:
        "#14 · 사이드 케이스 — 「데빌 와이프」: 카페 난간 아래 벤치 뒤쪽에 앉아 있음.",
      en:
        "#14 · Side Case — 'The Devil Wife' (M Side Cafe): sitting below behind a bench off the railing.",
    },
  ],
  tips: [
    {
      ko:
        "장면이 시작되자마자 화면 음향에 크게 들리는 「야옹~」 소리가 단서. 화면을 천천히 돌리면서 소리가 가장 크게 들리는 방향을 잡고, 좁은 영역 안에서 확대 조사 모드로 다시 한 번 살펴보세요.",
      en:
        "When the scene starts you'll hear a loud meow that gets louder as you face the right direction. Pan slowly, then zoom-inspect the narrow area to actually trigger the count.",
    },
    {
      ko:
        "사이드 케이스 한정 4마리(#08, #09, #11, #14)는 의뢰를 받지 않으면 영영 등장하지 않습니다. 「탐정 라이프 충실 팩」 DLC가 있어야 풀리는 케이스도 있으니 보유 여부를 먼저 확인하세요.",
      en:
        "Four cats (#08, #09, #11, #14) only spawn during specific side cases — you have to accept the case to see them, and a couple require the Detective's Essentials Pack DLC.",
    },
    {
      ko:
        "각 장 액티브 서치 직전에 수동 세이브를 만들어 두면 놓쳤을 때 그 장만 재시도하면 됩니다. 모든 14마리 발견 직후에 트로피가 떠야 정상이며, 마지막 1마리가 어디인지 모르겠으면 서치 모드에서 음향을 다시 한 번 확인하세요.",
      en:
        "Save before every flagged Active Search so a missed cat only costs that chapter, not a full re-run. The trophy pops the moment cat #14 is inspected.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Judgment Trophy Guide",
    en: "PowerPyx — Judgment Trophy Guide",
  },
};

// "이면 보고서 3 「숨겨진 재능」" — the 3rd hidden-story trophy in the Steam
// schema (api_name `judge_main_story_03_hidden`). Western releases shipped
// this as "The Art of Conversation". You play through Chapter 7 disguised
// as the hostess Mika; every dialogue prompt below must land on the listed
// answer in a single, uninterrupted run.
const artOfConversation: CuratedGuide = {
  summary: {
    ko:
      "7장 호스티스 잠입 시퀀스에서 미카로 변장한 야가미가 손님 4명과 나누는 모든 대화를 정답으로 통과해야 합니다. 미용실 진입 직후부터 시작되며, 잠입이 끝날 때까지 세이브를 다시 만들 수 없으므로 진입 직전에 수동 세이브 1개를 반드시 확보하세요.",
    en:
      "Survive the hostess-disguise infiltration in Chapter 7 by picking the correct line at every dialogue prompt. The sequence starts the moment you enter the hair salon and you can't save again until it's done, so drop a manual save right before entering.",
  },
  steps: [
    {
      ko:
        "1) 자기소개 — 「내 이름은 사오리야」를 선택. 본명이 들킬 만한 선택지(예: 야가미·하시키 등)는 즉시 실패.",
      en:
        "1) Self-introduction — pick \"My name is Saori.\" Any answer that leaks Yagami's real name (or Hashiki's) immediately fails.",
    },
    {
      ko:
        "2) 첫 손님 잡담 — 졸린 표정으로 앉아 있는 손님에게 「잠 좀 잤어요?」를 선택. 다른 선택지는 손님의 의심을 키워 정답 라인에서 이탈됩니다.",
      en:
        "2) First customer small talk — for the drowsy-looking client choose \"Were you asleep?\" Other picks raise suspicion and break the chain.",
    },
    {
      ko:
        "3) 탈의실 — 진짜 미카(하시키)를 마주치면 「하시키 씨?!」를 선택. 그녀의 사인을 인식해 신분을 들키지 않습니다.",
      en:
        "3) Dressing room — when the real Mika (Hashiki) appears, pick \"Hashiki-san?!\" so she clocks Yagami's signal and stays in character.",
    },
    {
      ko:
        "4) 다음 손님 응대 — 진짜 미카에게 신호를 보내야 하는 장면에서는 「미카에게 사인을 보낸다」를 선택.",
      en:
        "4) Next customer — when you have to coordinate with the real Mika, pick \"Give Mika a Sign.\"",
    },
    {
      ko:
        "5) 마지막 손님 — 카운터 끝에 앉아 의심하는 손님에게 「가까이 다가간다」를 선택. 마지막 정답을 고른 직후 트로피 발동.",
      en:
        "5) Final customer — for the suspicious patron at the end of the bar pick \"Get close to him.\" The trophy fires the instant this last choice resolves.",
    },
  ],
  tips: [
    {
      ko:
        "잠입 도중에는 일반 메뉴 세이브가 불가능합니다. 미용실 입구에서 강제 컷신이 시작되기 전 수동 세이브를 만들어 두는 게 유일한 안전망입니다.",
      en:
        "You can't manually save once the infiltration is rolling — your only safety net is a save dropped at the salon entrance before the cutscene takes over.",
    },
    {
      ko:
        "한 단계라도 오답을 고르면 그 회차에서는 같은 미션이 다시 열리지 않습니다. 첫 시도에서 자신이 없을 땐 세이브를 두 슬롯에 분산해 두세요.",
      en:
        "A single wrong line locks the trophy for this run — there's no second pass. Keep the save on two slots if you want to be conservative.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Judgment Trophy Guide",
    en: "PowerPyx — Judgment Trophy Guide",
  },
};

// "이면 보고서 1 「배로 늘려 줄게」" — judge_main_story_01_hidden.
// Chapter 2: stretch the casino chips at L'Amant.
const illMakeItDouble: CuratedGuide = {
  summary: {
    ko:
      "2장 스토리 진행 중 L'Amant 카지노에 들어가면 무료 칩 300개를 받습니다. 야가미가 자리를 뜨기 전에 칩을 정확히 600개 이상으로 만들면 트로피 발동. 자리에서 일어나는 순간 스토리가 진행되므로 안전한 게임을 선택하는 게 핵심입니다.",
    en:
      "Chapter 2's story stop at L'Amant hands you 300 free casino chips. Get your stack to at least 600 before you leave the table — once you stand up the story advances and the window closes.",
  },
  steps: [
    {
      ko:
        "1) L'Amant 진입 직전(또는 자리에 앉기 직전) 수동 세이브를 1슬롯 만들어 둡니다. 자리에서 일어나는 순간 컷신이 자동 진행되므로 재시도 안전망 필수.",
      en:
        "1) Drop a manual save right before sitting down at L'Amant — standing up auto-advances the story and there's no rewind.",
    },
    {
      ko:
        "2) 게임은 블랙잭 또는 포커 중 한 종목 선택. 블랙잭이 더 안정적입니다(딜러가 17 이상에서 멈추는 규칙). 매 라운드 최소 베팅으로 천천히 늘리세요.",
      en:
        "2) Pick Blackjack or Poker — Blackjack is steadier (dealer stands on 17+). Bet the table minimum and grind chips up.",
    },
    {
      ko:
        "3) 누적 칩 600개를 찍는 순간 잔액 표시가 바뀝니다. 그 직후 게임을 종료하지 말고 1라운드 정도 더 머무르면 카운트가 안정적으로 잡힙니다.",
      en:
        "3) The moment your stack ticks 600+ the counter flips. Stay in for one extra round so the count locks before you stand up.",
    },
    {
      ko:
        "4) 600개 이상 상태에서 자리에서 일어나면 트로피 발동. 만약 운이 나빠 칩이 300 미만으로 떨어지면 그대로 스토리가 진행돼 영구 잠금됩니다 — 즉시 세이브 로드.",
      en:
        "4) Stand up while ≥600 chips and the trophy pops. If RNG sinks you below 300, leaving the table still advances the story and the trophy is locked — reload immediately.",
    },
  ],
  tips: [
    {
      ko:
        "뉴 게임 플러스에서는 전 회차 칩이 누적되어 시작합니다. 300 무료 칩만 더 벌어 합산 600이면 충분합니다.",
      en:
        "On NG+ your chip pile carries over, so you only need to gain 300 more on this visit instead of the full 600.",
    },
    {
      ko:
        "이 시퀀스는 2장의 1회성 스토리 이벤트이므로, 자리에서 일어나는 순간 영구 잠금. 세이브 로드만이 유일한 재시도 방법입니다.",
      en:
        "It's a one-shot Chapter 2 sequence — leave without 600 and the trophy is gone for this run. Save/load is the only retry.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Judgment Trophy Guide",
    en: "PowerPyx — Judgment Trophy Guide",
  },
};

// "이면 보고서 2 「꼼꼼하게 체크」" — judge_main_story_02_hidden.
// Chapter 5: ADDC nurse Terasawa first-person inspection.
const wayTooThorough: CuratedGuide = {
  summary: {
    ko:
      "5장의 ADDC 건물 회상 시퀀스에서 야가미가 1인칭 시점으로 시신 현장을 조사할 때, 옆에 서 있는 간호사 테라사와의 신체 세 부위(얼굴·가슴·엉덩이)를 모두 확대 관찰해야 합니다. 한 부위라도 누락되면 회상이 끝나는 순간 영구 잠금.",
    en:
      "During Chapter 5's ADDC flashback, while Yagami investigates the victim's room in first-person, also zoom in on the nurse Terasawa's face, chest, and rear — all three. Miss one and the trophy locks the moment the scene ends.",
  },
  steps: [
    {
      ko:
        "1) 회상 시퀀스가 시작되면 1인칭 시야로 전환됩니다. 시신/현장보다 먼저 옆에 서 있는 간호사 테라사와에게 시선을 돌립니다.",
      en:
        "1) When the flashback shifts to first-person, look at nurse Terasawa standing beside you before checking the corpse / room evidence.",
    },
    {
      ko:
        "2) 테라사와의 얼굴을 확대 조사 → 야가미가 어색하게 시선을 떼는 코멘트를 남깁니다.",
      en:
        "2) Zoom in on Terasawa's face — Yagami gives an awkward inner-monologue line.",
    },
    {
      ko:
        "3) 가슴 부위를 확대 조사 → 다시 본인 행동을 자책하는 라인이 출력됩니다.",
      en:
        "3) Zoom in on her chest — Yagami chides himself for staring.",
    },
    {
      ko:
        "4) 엉덩이 부위까지 확대 조사하면 세 부위가 모두 카운트되며 야가미가 마지막으로 「난 뭘 보고 있는 거지」류 대사를 출력 — 그 순간 트로피 발동.",
      en:
        "4) Zoom in on her rear to complete the trio; Yagami's final \"what am I even doing\" line fires the trophy.",
    },
    {
      ko:
        "5) 세 부위를 모두 확인했으면 그제서야 시신과 책상·창문 등의 단서를 조사해 스토리를 진행합니다.",
      en:
        "5) Only after all three inspections finish should you turn to the corpse, desk, and window clues to advance the case.",
    },
  ],
  tips: [
    {
      ko:
        "조사 순서는 자유지만, 셋 중 한 부위라도 빠진 채 단서 조사를 마치면 회상이 종료되어 트로피 영구 잠금. 회상 진입 직전 수동 세이브 권장.",
      en:
        "Order doesn't matter, but missing any one before completing the clue search ends the flashback and locks the trophy. Manual save before the flashback is the safety net.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Judgment Trophy Guide",
    en: "PowerPyx — Judgment Trophy Guide",
  },
};

// "이면 보고서 4 「암호는」" — judge_main_story_04_hidden.
// Chapter 8: gambling-hall password sequence on Champion District.
const professionalPasswordPresenter: CuratedGuide = {
  summary: {
    ko:
      "8장에서 챔피언 거리의 비밀 도박장 입구를 통과할 때 야가미가 3단계 암호 대화를 거칩니다. 세 답을 모두 첫 시도에 정확히 맞춰야 트로피 발동 — 한 문항이라도 오답이면 같은 회차에서는 다시 도전할 수 없습니다.",
    en:
      "Chapter 8's hidden Champion District gambling hall has a three-step password challenge. Get every answer right on the first try — a single wrong pick locks the trophy for this run.",
  },
  steps: [
    {
      ko:
        "1) 도박장 입구에서 첫 번째 문답이 시작되기 직전 수동 세이브 작성. 자동 진행되므로 오답 직후 즉시 로드해야 재시도가 가능합니다.",
      en:
        "1) Make a manual save right before the doorman starts the exchange — the trophy locks instantly on a wrong pick, so save-scumming is the only retry.",
    },
    {
      ko:
        "2) 첫 문항 — 「세 번」을 선택. 다른 숫자나 문구는 모두 실패.",
      en:
        "2) Prompt #1 — choose \"Three Times.\" Any other count fails.",
    },
    {
      ko:
        "3) 두 번째 문항 — 「문에게 말 좀 할 수 있을까?」를 선택. 도박장 운영자의 별명이 「문」이라는 점이 단서.",
      en:
        "3) Prompt #2 — choose \"Can I talk to Moon\". The owner's code name \"Moon\" is the hint.",
    },
    {
      ko:
        "4) 세 번째 문항 — 「샤토브리앙, 블루」를 선택. 메뉴 이름+색상 조합이 비밀 출입어입니다.",
      en:
        "4) Prompt #3 — choose \"Chateaubriand, Blue\". The menu-item + color combo is the actual passcode.",
    },
    {
      ko: "5) 3문항 모두 정답이면 그 자리에서 트로피 발동, 도박장 내부로 입장합니다.",
      en: "5) All three correct triggers the trophy on the spot and opens the back room.",
    },
  ],
  tips: [
    {
      ko:
        "정답 라인을 모르겠으면 한 문항마다 세이브/로드를 활용해 정답을 찾을 수 있지만, 한 번이라도 오답이 확정되면 입장은 가능해도 트로피는 영구 잠금이라 세이브 분리가 안전합니다.",
      en:
        "You can save/load between prompts if unsure, but a confirmed wrong answer still lets you in — the trophy is just gone. Keep saves on two slots.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Judgment Trophy Guide",
    en: "PowerPyx — Judgment Trophy Guide",
  },
};

// "이면 보고서 5 「영웅은 늦게 나타난다」" — judge_main_story_05_hidden.
// Chapter 12: Sugiura rescue, the 3-minute timer.
const hungJury: CuratedGuide = {
  summary: {
    ko:
      "12장에서 폐호텔에 매달린 스기우라를 구출할 때, 적 2명을 격파하기까지 3분 카운트다운이 시작됩니다. 타이머가 10초 이하로 떨어진 직후 마지막 적을 쓰러뜨려야 트로피 발동 — 너무 빨리 처치하거나 시간을 초과하면 모두 실패.",
    en:
      "Chapter 12's hotel rescue puts a 3-minute timer on Sugiura's life as you fight two thugs. Finish the second knockout only after the clock has dropped under 10 seconds — too early and the trophy doesn't fire, too late and Sugiura dies.",
  },
  steps: [
    {
      ko:
        "1) 전투 진입 직전 수동 세이브. 한 번 실패하면 같은 회차에서는 같은 컷이 나오지 않습니다.",
      en:
        "1) Manual save before the fight starts — there's no re-trigger this playthrough.",
    },
    {
      ko:
        "2) 첫 번째 적은 정상적으로 완전 격파. 무기를 활용해 빠르게 처리하면 시간 관리가 편합니다.",
      en:
        "2) Knock the first thug out cleanly — weapons help so you can manage the clock.",
    },
    {
      ko:
        "3) 두 번째 적의 체력은 빨간 게이지 직전(약 10~15%)까지만 깎고, 그 뒤로는 회피·후퇴 위주로 시간을 끕니다.",
      en:
        "3) Drop the second thug to about 10-15 % HP, then back off and dodge to bleed the clock.",
    },
    {
      ko:
        "4) 화면 상단의 타이머가 0:10 이하로 내려간 순간을 노려, 강타 1~2회로 마지막 격파. 격파 동시에 트로피 발동.",
      en:
        "4) Once the on-screen timer drops under 0:10, finish him with one strong blow. The trophy fires on the knockout.",
    },
  ],
  tips: [
    {
      ko:
        "타이머가 0이 되면 스기우라가 사망 처리되어 게임 오버 — 회피로 시간을 끌더라도 9초 정도 남기고 마무리 입력을 시작하는 게 안전합니다.",
      en:
        "Hit 0:00 and Sugiura dies (Game Over), so start your finisher around 0:09 to leave a buffer.",
    },
    {
      ko:
        "두 번째 적을 너무 빨리 잡지 마세요. 타이머가 10초보다 많이 남은 상태에서 격파 시 트로피는 발동하지 않습니다.",
      en:
        "Don't KO the second thug too early — finishing with more than 10s left does not pop the trophy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Judgment Trophy Guide",
    en: "PowerPyx — Judgment Trophy Guide",
  },
};

// "이면 보고서 6 「이것이 증거다」" — judge_main_story_06_hidden.
// Final chapter courtroom: every evidence pick must be correct on the first try.
const theFinalNail: CuratedGuide = {
  summary: {
    ko:
      "피날레 법정 시퀀스에서 야가미가 검찰의 주장에 반박할 때 제출하는 증거 4건을 모두 첫 시도에 정확히 선택해야 합니다. 한 번이라도 잘못된 증거를 제출하면 트로피는 영구 잠금되며, 메인 스토리는 그대로 진행됩니다.",
    en:
      "Pick the correct evidence at every prompt during the finale courtroom showdown — all four must land on the first try. A single wrong pick locks the trophy even though the story still resolves.",
  },
  steps: [
    {
      ko:
        "1) 법정 시퀀스 진입 직전 수동 세이브 필수. 한 문항이라도 오답이면 그 회차에서는 트로피 회수 불가.",
      en:
        "1) Manual save before the courtroom scene starts — one wrong pick burns the trophy for this run.",
    },
    {
      ko:
        "2) 1번 제출 — 검찰이 「관피아 비호」를 부정할 때 「퇴직 후 보직 마련」 메모를 증거로 제출.",
      en:
        "2) Prompt #1 — when the prosecution denies the bureaucratic cover-up, present the \"It created cushy retirement positions\" memo.",
    },
    {
      ko:
        "3) 2번 제출 — 신타니의 알리바이를 깨야 할 때 「신타니의 통화 기록」을 증거로 제출.",
      en:
        "3) Prompt #2 — to break Shintani's alibi, submit \"Shintani's Phone Log.\"",
    },
    {
      ko:
        "4) 3번 제출 — 쇼노의 무관함 주장이 나올 때 「쇼노와 쿄레이회 살인의 연결고리」 자료를 제출.",
      en:
        "4) Prompt #3 — when Shono claims no involvement, submit \"Shono's Connection to the Kyorei Clan Murders.\"",
    },
    {
      ko:
        "5) 4번 제출(결정타) — 하무라와 이치노세의 공모를 입증할 「하무라·이치노세의 미싱 링크」를 제출. 이 마지막 선택이 정답이면 즉시 트로피 발동.",
      en:
        "5) Prompt #4 (the kill shot) — present \"Hamura and Ichinose's Missing Link\" to nail the collusion. Trophy fires the moment the verdict reads.",
    },
  ],
  tips: [
    {
      ko:
        "피날레 법정 사이의 각 증거 제출 사이엔 자동 진행 컷이 끼어들기 때문에, 안전하게 가려면 매 문항마다 세이브를 분리해 두는 편이 좋습니다.",
      en:
        "Cutscenes auto-roll between prompts, so if you want full safety, drop a separate save at each prompt rather than relying on a single pre-trial save.",
    },
    {
      ko:
        "법정 시퀀스는 메인 스토리 진행에는 영향이 없습니다(오답이어도 엔딩으로 이어집니다). 트로피만 잠기므로 헷갈리면 즉시 로드.",
      en:
        "Wrong picks don't break the ending — they just kill the trophy. If you mis-click, reload immediately rather than push through.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx — Judgment Trophy Guide",
    en: "PowerPyx — Judgment Trophy Guide",
  },
};

// Judgment 플래티넘 「궁극의 탐정」. Steam api_name: judge_platinum.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Judgment 플래티넘 — 다른 46개 업적 전부 해금 시 자동 발동. 핵심 게이트는 ①히든 스토리 트로피 6종(이면 보고서) + 길고양이 14마리(별도 큐레이션 참조) ②카무로초(KAMGO 친구 이벤트) 50인 친밀도 ③탐정 사이드 케이스 50건 풀 ④EX-HARD 메인 스토리 ⑤아몬 신 격투. 영구 미서블이 7종이라 장별 수동 세이브가 필수.",
    en:
      "Judgment platinum auto-pops at full unlock. Gates: ① 6 hidden Side Reports + 14 stray cats (see dedicated guides) ② 50-friend bonds across Kamurocho (KAMGO) ③ 50 detective Side Cases ④ EX-HARD main story ⑤ Amon. 7 missables make manual saves per chapter essential.",
  },
  steps: [
    {
      ko:
        "1) 1회차 NORMAL — 장별 미서블 트로피(이면 보고서 1~6 + 길고양이)를 별도 큐레이션 참조해 수동 세이브 분리 보관하며 진행. 한 번이라도 놓치면 같은 회차에서 회수 불가.",
      en:
        "1) Run 1 (NORMAL) — chase the 6 Side Reports + 14 cats using the per-trophy curated guides. Keep two save slots; missed trophies don't re-trigger this run.",
    },
    {
      ko:
        "2) 친구 이벤트(KAMGO) — 카무로초 50명 친밀도 최대치까지. 거리 평판 + 친구 이벤트 트리거 조건이 각 인물별로 달라 가이드 옆에 두고 진행.",
      en:
        "2) Friend Events (KAMGO) — max bond with 50 Kamurocho residents. Each has unique unlock conditions tied to Street Rep.",
    },
    {
      ko:
        "3) 사이드 케이스 — 2장 야가미 탐정 사무소 게시판 해금부터 50건 모두 클리어. 「최후의 의뢰」(아몬 신 격투)는 49건 클리어 + 거리 평판 Lv.50 도달 시 해금.",
      en:
        "3) Side Cases — 50 total starting from Ch.2's agency board. Case #50 (Amon fight) unlocks at 49 cleared + Street Rep Lv.50.",
    },
    {
      ko:
        "4) 미니게임 — Kamuro of the Dead·드론 레이스·VR 보드게임·바이크 체이스·다트·당구 등 모든 카테고리 1회 이상 + 일부 컴플리션.",
      en:
        "4) Minigames — Kamuro of the Dead, Drone Race, VR boardgames, bike chase, darts, billiards. Each needs at least one play + select completion targets.",
    },
    {
      ko:
        "5) 새 회차 EX-HARD 직주행 → 13장 피날레 클리어 시 「용맹한 탐정」 + 플래티넘 동시 발동.",
      en:
        "5) Fresh save on EX-HARD, story-sprint — clearing the finale fires the difficulty trophy + platinum together.",
    },
  ],
  tips: [
    {
      ko:
        "Judgment는 미서블 7종이 모두 장·시퀀스 한정이라 회차 분리 작업이 가장 까다롭습니다. 2장·5·7·8·12·13·14 진입 직전 수동 세이브 분리 보관.",
      en:
        "Judgment's 7 missables are all chapter-locked — save before Ch.2/5/7/8/12/13/14 entry and rotate two slots.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Judgment Trophy Guide", en: "PowerPyx — Judgment Trophy Guide" },
};

// 「카무로초 마스터」 — KAMGO 100%. Steam api_name: judge_all_complete.
const kamuroMaster: CuratedGuide = {
  summary: {
    ko:
      "Judgment의 카무로초 친구 이벤트(KAMGO) 진행도 100% 도달 시 발동. 50명 NPC 친밀도 + 모든 시티/상점 미션 컴플리트가 동시에 필요합니다. 「카무로초 가이드」(시티 미션 풀) + 「카무로초 사교계 명사」(상점 미션 풀) 두 트로피와 직렬 연동.",
    en:
      "Hit 100 % on KAMGO (Kamurocho friend system). Needs 50 NPC bonds + all City + Shop missions cleared. Pairs with 'Kamurocho Guide' (city) + 'Kamurocho Socialite' (shop).",
  },
  steps: [
    {
      ko:
        "1) 3장 이후 KAMGO 앱 해금 → 거리 평판을 5/15/25/35/45/50 단계로 올리며 새 NPC 친구 이벤트를 차례로 해금.",
      en:
        "1) Open KAMGO after Ch.3 and climb Street Rep through 5/15/25/35/45/50 — each tier unlocks new NPC friend events.",
    },
    {
      ko:
        "2) 시티 미션 — 카무로초 거리 곳곳의 일회성 의뢰 30건 풀 클리어. 시간대 조건이 붙은 미션도 있어 낮·밤 모두 둘러봐야 합니다.",
      en:
        "2) City missions — clear all 30 one-shot quests, including time-of-day gated ones.",
    },
    {
      ko:
        "3) 상점 미션 — 상점 10곳 이상의 의뢰 컴플리트. 각 상점마다 일정 평판 이상 도달 시에만 미션이 풀립니다.",
      en:
        "3) Shop missions — 10+ shops, gated on Street Rep tiers.",
    },
    {
      ko:
        "4) 모든 카테고리 100% 도달 시 「카무로초 마스터」 + 「카무로초 가이드」 + 「카무로초 사교계 명사」 + 「카무로초 트렌드세터」 트로피 라인이 함께 발동.",
      en:
        "4) Full 100 % fires Master + Guide + Socialite + Trendsetter together.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Judgment Trophy Guide", en: "PowerPyx — Judgment Trophy Guide" },
};

export const JUDGMENT_CURATED: Record<string, CuratedGuide> = {
  [`${JUDGMENT_APP_ID}:judge_platinum`]: platinum,
  [`${JUDGMENT_APP_ID}:judge_all_complete`]: kamuroMaster,
  [`${JUDGMENT_APP_ID}:judge_all_cats_found_in_search_mode`]: cats,
  [`${JUDGMENT_APP_ID}:judge_main_story_01_hidden`]: illMakeItDouble,
  [`${JUDGMENT_APP_ID}:judge_main_story_02_hidden`]: wayTooThorough,
  [`${JUDGMENT_APP_ID}:judge_main_story_03_hidden`]: artOfConversation,
  [`${JUDGMENT_APP_ID}:judge_main_story_04_hidden`]: professionalPasswordPresenter,
  [`${JUDGMENT_APP_ID}:judge_main_story_05_hidden`]: hungJury,
  [`${JUDGMENT_APP_ID}:judge_main_story_06_hidden`]: theFinalNail,
};
