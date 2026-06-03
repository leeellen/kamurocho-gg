import type { CuratedGuide } from "./index";

const YAKUZA_0_APP_ID = 2988580;

// Per-achievement detailed walkthroughs for Yakuza 0. Cross-referenced
// against PowerPyx (PSN Trophy Guide), Steam Community guides, and the
// in-game scene scripts so every step lists the exact location, timing,
// dialogue, or input the player needs.

// Trophy "Rich Taste" / "이왕이면 화끈하게" — Chapter 2 (Kiryu).
const richTaste: CuratedGuide = {
  summary: {
    ko:
      "2장 진행 중, 돈키호테에서 가장 비싼 「골드 샴페인」(¥20,000)을 구매해 카무로초 거리에서 떨고 있는 노숙자에게 건네면 트로피 발동. 3장으로 넘어가는 순간 영구 잠금되니 반드시 2장 안에 처리하세요.",
    en:
      "During Chapter 2 (Kiryu), buy the Gold Champagne (¥20,000) at Don Quijote and hand it to the homeless man shivering on a Kamurocho street. Roll into Chapter 3 and the trophy is gone for the rest of the run.",
  },
  steps: [
    {
      ko:
        "1) 2장 메인 스토리에서 「술을 사 오라」 부탁이 떨어지면, 돈키호테(쇼와 거리·텐카이치 거리 입구 근처)로 향합니다. 자금이 부족하면 부동산 회수, 삥쟁이(미스터 셰이크다운) 격파, 거리 양아치 처리로 ¥20,000을 먼저 확보.",
      en:
        "1) When Chapter 2 asks you to fetch booze, head to Don Quijote on Showa Street. Short on cash? Pull funds from Real Estate Royale, beat a Mr. Shakedown, or mop up street thugs first.",
    },
    {
      ko:
        "2) 매장 내부에서 가장 비싼 술 항목인 「골드 샴페인 — ¥20,000」을 구매. 더 싼 술을 사면 일반 진행은 되지만 트로피는 발동하지 않습니다.",
      en:
        "2) Inside, buy the most expensive bottle on the shelf — Gold Champagne for ¥20,000. Cheaper picks finish the errand but skip the trophy.",
    },
    {
      ko:
        "3) 노숙자의 위치는 「인공섬 예정지(공터)」 근처 강가입니다. 돈키호테에서 곧장 향하면 짧은 컷신 후 자동 전달.",
      en:
        "3) The homeless man is sitting by the river near the empty lot earmarked for the artificial island. Walk straight there and a short cutscene auto-hands him the bottle.",
    },
    {
      ko:
        "4) 전달이 끝나면 즉시 트로피 발동. 장 진행도와 무관하게 잠금되지만, 3장 전환 시 영구 잠금이라 미리 처리하는 게 안전합니다.",
      en:
        "4) The trophy pops on the hand-off. It's gated on Chapter 2, so do it before any cutscene that pushes the story into Chapter 3.",
    },
  ],
  tips: [
    {
      ko:
        "2장 자금이 빠듯하면 「술 사 오라」 의뢰를 받기 전에 부동산 첫 매물 인수(시치후쿠 거리 쪽)부터 끝내 두면 ¥20,000을 어렵지 않게 모을 수 있습니다.",
      en:
        "Cash tight? Close the first Real Estate purchase on Shichifuku Street before triggering the errand — ¥20,000 lands easily.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2869817839",
  sourceLabel: {
    ko: "Steam Community — Yakuza 0 Achievement Guide",
    en: "Steam Community — Yakuza 0 Achievement Guide",
  },
};

// "Smooth Criminal" / "전격 트레이트 성립" — Chapter 3 (Majima).
const smoothCriminal: CuratedGuide = {
  summary: {
    ko:
      "3장 마지마 편, 「클럽 오디세이」 정찰 임무에서 사전 답사 3명을 모두 만나 정보 수집 → 매장 내부 진입 후 1인칭 시야에서 정해진 4개 테이블만 정확히 관찰해야 트로피 발동. 한 단계라도 빠지면 장 종료 시 영구 잠금.",
    en:
      "Chapter 3 (Majima) sends you to scout Club Odyssey. Talk to all three pre-scout contacts, then inside the club inspect the four specific tables in first-person view — miss any step and the trophy locks at chapter end.",
  },
  steps: [
    {
      ko:
        "1) 비샤몬 다리에서 「녹색 자켓을 입은 남성」에게 말 걸어 정보 수집.",
      en: "1) Bishamon Bridge — talk to the man in the green jacket for the first tip.",
    },
    {
      ko:
        "2) 르 마르셰 남동쪽 골목에서 「녹색 코트를 입은 여성」에게 말 걸어 두 번째 정보 확보.",
      en:
        "2) South-east of Le Marche — talk to the woman in the green coat for tip #2.",
    },
    {
      ko:
        "3) 오디세이 남쪽 길에 모여 있는 「양복 차림의 회사원 무리」에게 말 걸어 세 번째 정보 수집. 3명 모두와 대화해야 다음 단계가 풀립니다.",
      en:
        "3) Just south of Odyssey — talk to the suited businessmen group. All three pre-scouts must be done for the next step.",
    },
    {
      ko:
        "4) 클럽 안으로 진입하면 자동으로 1인칭 시야로 전환. 미스터 리비도가 보이는 카운터 쪽이 아니라 반대편(맞은편 벽) 테이블 3개를 왼쪽 → 가운데 → 오른쪽 순으로 관찰합니다.",
      en:
        "4) Inside, the camera locks to first-person. Ignore Mr. Libido at the bar — instead pan to the wall opposite and inspect the three tables left → center → right.",
    },
    {
      ko:
        "5) 마지막으로 바로 좌측(시야 왼쪽 끝) 테이블 1개를 추가로 관찰. 4개 모두 카운트되면 트로피 발동 + 정찰 완료.",
      en:
        "5) Finally, pan hard left and inspect the table at the very edge. All four hits trigger the trophy and finish the recon.",
    },
  ],
  tips: [
    {
      ko:
        "야마노이 등장 컷신이 시작되기 전에 모든 테이블을 봐야 합니다. 한 번 컷신이 진행되면 시야 회전이 불가하므로, 진입 직전 수동 세이브가 유일한 재시도 안전망.",
      en:
        "All four tables must be inspected before the Yamanoi cutscene fires — once it triggers the camera locks. Save before entry is the only retry.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
    en: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
  },
};

// "Business Etiquette 101" / "엘리트 비즈니스맨" — Chapter 5 (Kiryu).
const businessEtiquette: CuratedGuide = {
  summary: {
    ko:
      "5장에서 오다와 함께 카페 알프스에서 클라이언트(야마노이)를 접대하는 시퀀스. 3개의 좌석 안내 선택지에서 정해진 순서대로 정답을 골라 야마노이 등장 시점에 QTE까지 성공해야 트로피 발동. 한 단계라도 오답이면 5장 종료와 동시에 영구 잠금.",
    en:
      "Chapter 5's Café Alps client meeting: pick the right seating choice three times in order, then nail the QTE when Yamanoi walks in. Any wrong pick and the trophy locks at chapter end.",
  },
  steps: [
    {
      ko:
        "1) 진입 직전 수동 세이브. 오답 시 즉시 로드해야 재시도 가능합니다.",
      en: "1) Manual save before entering — wrong picks lock the trophy with no in-run retry.",
    },
    {
      ko: "2) 1번째 선택 — 「뒤쪽 테이블」을 선택. (창가나 중앙 자리는 오답)",
      en: "2) Prompt #1 — choose \"Near the back.\" (Window/center seats are wrong.)",
    },
    {
      ko: "3) 2번째 선택 — 「가장 가까운 의자」를 선택.",
      en: "3) Prompt #2 — choose \"Nearest chair.\"",
    },
    {
      ko:
        "4) 3번째 선택 — 「주문 없음」을 선택. 음료를 주문하면 격식 부족으로 오답 처리.",
      en:
        "4) Prompt #3 — choose \"Nothing\" for the order. Picking a drink reads as too casual.",
    },
    {
      ko:
        "5) 야마노이가 들어와 인사하는 컷신 중 QTE 프롬프트가 뜨면 즉시 성공시킵니다. 실패해도 스토리는 진행되지만 트로피는 발동하지 않습니다.",
      en:
        "5) When Yamanoi enters and the QTE prompt flashes, hit it successfully. Story still progresses on failure, but the trophy doesn't fire.",
    },
  ],
  tips: [
    {
      ko:
        "정발 한국어판은 선택지 표기가 「뒤쪽 테이블 / 가장 가까운 의자 / 주문 없음」 그대로 표시됩니다. 영문 메뉴 표기는 괄호의 원문을 그대로 참조.",
      en:
        "Korean release shows these prompts as 뒤쪽 테이블 / 가장 가까운 의자 / 주문 없음 — same wording. English players just pick Near the back / Nearest chair / Nothing.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
    en: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
  },
};

// "Best Served Cold?" / "식어도 맛있다" — Chapter 7 (Majima).
const bestServedCold: CuratedGuide = {
  summary: {
    ko:
      "7장 마지마 편, 마코토에게 줄 타코야키 심부름 도중에 음식이 식도록 일부러 시간을 끌어야 트로피 발동. 마구타코에서 타코야키를 받은 직후부터 실시간 약 15분이 지나면 인벤토리 아이콘이 바뀌며, 그 상태로 마코토에게 전달하면 발동.",
    en:
      "Chapter 7 (Majima) sends you to buy takoyaki for Makoto. Stall in real time so the food cools — about 15 minutes — and the inventory icon changes. Hand the cold takoyaki over for the trophy.",
  },
  steps: [
    {
      ko:
        "1) 마구타코에서 타코야키를 구매. 마코토가 있는 곳으로 곧장 돌아가지 마세요.",
      en:
        "1) Buy the takoyaki at Magutako. Do NOT head straight to Makoto.",
    },
    {
      ko:
        "2) 실시간(현실 시간) 15분 이상이 지날 때까지 다른 활동을 진행 — 서브스토리 정리, 부동산 매물 관리, 미니게임 등 어느 행동이든 가능. 단, 식당·휴게실에서의 '시간 흐르기' 메뉴는 시간이 흐르지 않는 점 주의.",
      en:
        "2) Burn 15+ real-time minutes on anything else — substories, real-estate management, minigames. Note: the in-game \"rest\" menus don't advance real time, so go do something active.",
    },
    {
      ko:
        "3) 인벤토리에서 타코야키 아이템 아이콘이 김이 빠진 모양으로 바뀌면 식은 상태. 그제서야 마코토에게 전달.",
      en:
        "3) The takoyaki's inventory icon visibly changes once it's gone cold — that's your signal to deliver to Makoto.",
    },
    {
      ko:
        "4) 마코토에게 식은 타코야키를 건네면 컷신 후 트로피 발동. 따뜻한 상태로 전달하면 일반 진행만 되고 트로피는 영구 잠금.",
      en:
        "4) Hand over the cold version — cutscene plays, trophy pops. A still-warm delivery just completes the errand normally and skips the trophy for this run.",
    },
  ],
  tips: [
    {
      ko:
        "실시간 15분이 너무 오래 느껴진다면, 7장 시점에 풀리는 마지마의 다른 서브스토리·캐바쿠라 영업·드림 머신 등 미니게임 한 사이클을 돌리는 게 가장 자연스럽게 시간이 흐릅니다.",
      en:
        "If 15 real-time minutes feels long, run one full Cabaret Club Cabaret cycle or a couple of Majima substories — that naturally burns the clock.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
    en: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
  },
};

// "It Takes Two" / "사원이 한마음 되어" — Chapter 10 (Kiryu).
const itTakesTwo: CuratedGuide = {
  summary: {
    ko:
      "10장, 키류가 오다·타치바나와 함께 도조 본부를 돌파하는 전투 시퀀스에서, 동료가 적을 잡은 순간 △ 입력으로 협동 히트 액션을 총 3회 발동시켜야 트로피 발동. 장 종료 후 재진입 불가.",
    en:
      "Chapter 10's Tojo HQ assault: Kiryu fights alongside Oda and Tachibana. When either ally grabs an enemy, press Triangle to launch a co-op heat action — do this three times before the chapter ends.",
  },
  steps: [
    {
      ko:
        "1) 전투 진입 전 △ 키 위치를 확인하고, 히트 회복 아이템(스테미난 류)을 충분히 준비합니다. 협동 히트 액션은 히트 게이지 1칸 이상 소모.",
      en:
        "1) Before the fight, confirm your Triangle / Y button and stock heat-restoring items (Staminan). Each co-op heat costs at least one heat segment.",
    },
    {
      ko:
        "2) 전투가 시작되면 오다·타치바나가 적을 붙잡는 모션을 주시. 동료가 적을 잡는 순간 카메라가 살짝 줌인됩니다.",
      en:
        "2) Watch Oda and Tachibana — when they latch onto a mob the camera nudges in slightly.",
    },
    {
      ko:
        "3) 동료가 적을 잡은 즉시 가까이 다가가 △(코업 히트 액션) 입력. 잡는 순간이 짧으니 항상 동료 근처에 붙어 있어야 기회를 놓치지 않습니다.",
      en:
        "3) Sprint over and press Triangle while they're holding the enemy. The grab is short — stay glued to whichever ally is currently engaging.",
    },
    {
      ko:
        "4) 총 3회 발동 시 트로피 발동. 동료가 적을 잡는 빈도가 낮으므로, 한 번 놓쳤다고 강제 진행하지 말고 같은 방에서 적이 다 정리되기 전에 추가 기회를 만드세요.",
      en:
        "4) Three co-op heats triggers the trophy. Allies grab infrequently, so don't rush to clear the room — give them time to re-engage.",
    },
  ],
  tips: [
    {
      ko:
        "전투 도중 동료의 체력이 0이 되면 잡기 자체가 나오지 않습니다. 동료 근처에서 위협을 정리해 주거나, 회복 아이템을 동료에게 사용해 잡기 빈도를 유지하세요.",
      en:
        "Downed allies can't grab — keep enemies off them or use healing items on them so they keep entering the grab animation.",
    },
    {
      ko:
        "장 종료 후에는 같은 컷이 재현되지 않습니다. 3회를 못 채웠다면 즉시 세이브 로드.",
      en:
        "The encounter doesn't reset after the chapter ends. If you didn't hit 3, reload the manual save before the fight.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
    en: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
  },
};

// "They Won't Mind" / "보물이 왕창!" — Chapter 12 (Kiryu).
const theyWontMind: CuratedGuide = {
  summary: {
    ko:
      "12장 벤텐 여관 돌파 시퀀스에서 2층 진입 직전, 우측 방 안쪽 좌측 구석에 흰 금고 2개가 숨겨져 있습니다. 두 번째 계단을 오르기 전에 두 금고를 모두 파괴해야 트로피 발동.",
    en:
      "Chapter 12, pushing through Benten Inn: before the second staircase, duck into the right-side room and smash both white safes hidden in the back-left corner. Climb the stairs first and the trophy is gone.",
  },
  steps: [
    {
      ko:
        "1) 벤텐 여관 2층 첫 진입 시 양손에 부채를 든 적과의 전투가 발생. 이 적을 처치한 직후가 진입 타이밍입니다.",
      en:
        "1) After defeating the dual-fan enemy on Benten Inn's 2F, do NOT advance to the next staircase yet.",
    },
    {
      ko:
        "2) 같은 층의 두 번째 계단 직전, 우측 방을 들어가 좌측 안쪽 구석을 살피세요. 흰색 금고 2개가 나란히 놓여 있습니다.",
      en:
        "2) Step into the right-side room before the staircase and head to the back-left corner — two white safes sit side by side.",
    },
    {
      ko:
        "3) 일반 공격(또는 무기 휘두르기)으로 금고 2개를 모두 파괴. 안에서 아이템이 떨어지는 즉시 트로피 발동.",
      en:
        "3) Smash both safes with a normal attack or weapon — loot drops on destruction and the trophy fires.",
    },
    {
      ko:
        "4) 두 금고를 모두 처리한 뒤 계단을 오르며 스토리를 진행합니다. 계단을 먼저 오르면 컷신 후 영구 잠금이라 우선순위를 지켜야 합니다.",
      en:
        "4) Only after both safes are gone, push up the stairs to continue. Going up first locks the trophy at the next cutscene.",
    },
  ],
  tips: [
    {
      ko:
        "방 안에는 일반 적이 추가로 등장할 수 있으니, 금고 위치를 외워 두고 적부터 정리한 뒤 빠르게 코너로 파고드세요.",
      en:
        "The room can spawn extra mooks — clear them first, then bee-line the back-left corner so you don't get bumped past the safes.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
    en: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
  },
};

// "Big Hair in the Crosshairs" / "히트 스나이프" — Chapter 13 (Kiryu).
const bigHairInTheCrosshairs: CuratedGuide = {
  summary: {
    ko:
      "13장, 차량 추격전 중반 — 기관총 밴이 등장하기 직전에 흰 양복 + 아프로 머리 야쿠자가 짧게 차창 밖으로 몸을 내밉니다. 히트 아이로 슬로우 처리한 뒤 사격해 격추시키면 트로피 발동. 그 한 컷이 유일한 기회입니다.",
    en:
      "Chapter 13's car chase: just before the machine-gun van appears, a white-suited afro yakuza leans out for a couple of seconds. Pop Heat Eye to slow time and shoot him — that single window is the only one this run.",
  },
  steps: [
    {
      ko:
        "1) 추격전이 시작되면 히트 게이지를 풀로 유지. 히트 아이 스킬이 해금되어 있어야 합니다(10장대까지 1회 이상 슈팅 챌린지 등으로 자동 해금).",
      en:
        "1) Enter the chase with a full Heat gauge. Heat Eye must be unlocked (usually granted earlier via shooting tutorials).",
    },
    {
      ko:
        "2) 추격 중 「기관총 밴 출현 직전」 — 흰 양복에 큼지막한 아프로 머리의 적이 다른 차에서 짧게 몸을 내밉니다. 컷 길이는 약 2~3초.",
      en:
        "2) Mid-chase, just before the machine-gun van shows up, a white-suited afro mook briefly leans out of an enemy car. The window is roughly 2-3 seconds.",
    },
    {
      ko:
        "3) 그 순간 즉시 히트 아이 발동 → 시간이 느려진 사이 아프로 야쿠자에게 조준하고 사격.",
      en:
        "3) Trigger Heat Eye instantly — time slows. Drop the crosshair on the afro and fire.",
    },
    {
      ko:
        "4) 격추 성공 시 트로피 발동 + 추격전 연출은 그대로 진행. 놓치면 같은 컷이 다시 등장하지 않으니 즉시 세이브 로드.",
      en:
        "4) Hit confirms the trophy; the chase keeps going. Miss the window and the cut never re-fires — reload the pre-chase save.",
    },
  ],
  tips: [
    {
      ko:
        "히트 아이 발동 타이밍을 외우기 위해 「기관총 밴 등장」 직전을 트리거로 기억하세요. 밴 등장 후엔 너무 늦습니다.",
      en:
        "Memorise the cue: the moment is right before the machine-gun van. Once the van is on-screen you've missed it.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
    en: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
  },
};

// "Hitting the Bottle" / "트러블 대처는 나의 특기" — Chapter 15 (Majima).
const hittingTheBottle: CuratedGuide = {
  summary: {
    ko:
      "15장, 마지마와 니시키야마가 세레나에서 충돌하는 시퀀스. 니시키야마가 마지마를 카운터 쪽으로 던질 때 레이나가 와인병으로 마지마를 후려치는 QTE가 발생합니다. 트로피 조건이 특이하게도 「이 QTE를 일부러 실패해야」 발동.",
    en:
      "Chapter 15: Majima clashes with Nishikiyama at Serena. When Nishikiyama hurls Majima toward the bar, Reina swings a wine bottle at him in a QTE. The trophy fires only when you intentionally FAIL the QTE and let the bottle land.",
  },
  steps: [
    {
      ko:
        "1) 세레나 진입 전 수동 세이브. 정상 처리(QTE 성공) 시 그대로 스토리가 진행돼 영구 잠금됩니다.",
      en:
        "1) Manual save before entering Serena. A successful QTE moves the story on with the trophy locked.",
    },
    {
      ko:
        "2) 마지마 vs 니시키야마 전투 컷신을 진행하다가 니시키야마가 마지마를 카운터로 던지는 순간 화면 중앙에 QTE 프롬프트가 표시됩니다.",
      en:
        "2) Play through the fight until Nishikiyama tosses Majima toward the counter — a QTE prompt flashes mid-screen.",
    },
    {
      ko:
        "3) 그 QTE를 「일부러」 실패시킵니다. 아무 버튼도 누르지 않거나 잘못된 버튼을 빠르게 누르면 자동 실패 처리.",
      en:
        "3) Fail it on purpose — either don't press anything or hit the wrong button. The QTE auto-fails.",
    },
    {
      ko:
        "4) 레이나가 와인병으로 마지마의 머리를 후려치는 컷이 재생되고 트로피 발동. 그 뒤로는 정상 스토리로 복귀.",
      en:
        "4) Reina cracks Majima with the wine bottle and the trophy pops. Story resumes normally afterward.",
    },
  ],
  tips: [
    {
      ko:
        "정상적으로 막아내면(QTE 성공) 트로피가 안 뜨고, 같은 회차에서는 컷이 다시 나오지 않습니다. 영문판 PowerPyx도 「fail on purpose」 명시 — 실수 아닌 의도된 실패입니다.",
      en:
        "Block successfully and you lose the trophy with no in-run re-trigger. Every reputable guide spells out \"fail on purpose\" — this isn't a missed input, it's intentional.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
  sourceLabel: {
    ko: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
    en: "PowerPyx / PSN — Yakuza 0 Trophy Guide",
  },
};

// "맹세의 장소" — Platinum (다른 모든 업적 달성). Yakuza 0의 플래티넘 로드맵.
// Steam api_name: 00_where_it_all_began.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Yakuza 0의 플래티넘 — 다른 54개 업적을 모두 달성하는 순간 자동 발동. 핵심 게이트는 ①장 한정 미서블 8종(별도 큐레이션 참조) ②전설 난이도 클리어 ③컴플리트 리스트 100%(부동산·캬바쿠라 그랑프리·미니게임·전투 챌린지) ④조 아몬·소 아몬 격파. 권장 회차 수는 1회+엔딩 후 전설 1회 = 총 2회.",
    en:
      "Earned automatically the moment Yakuza 0's other 54 trophies are unlocked. Key gates: ① 8 chapter-locked missables (see dedicated guides) ② Legend-difficulty clear ③ 100 % Completion List (Real Estate + Cabaret + minigames + combat) ④ defeat Jo and So Amon. Budget two playthroughs — normal + Legend.",
  },
  steps: [
    {
      ko:
        "1) 1회차 (Normal) — 장 진행과 병행해 8개 미서블 트로피를 장별로 정리(별도 큐레이션 참조). 컷신 진입 전 수동 세이브를 항상 분산 보관.",
      en:
        "1) Run 1 (Normal) — knock out the 8 chapter-locked missables as you go (each has its own curated guide). Keep two save slots in rotation before any cutscene.",
    },
    {
      ko:
        "2) 메인 사이드 시스템을 장 진행과 병행 — 키류 「부동산 로얄」 5구역 100%, 마지마 「캐바쿠라 그랑프리」 No.1 등극, 포켓 서킷 모든 컵 우승, 메스킹 톱 랭크, 마지마 에브리웨어 풀 진행.",
      en:
        "2) Roll the side systems in parallel — Kiryu's Real Estate Royale 100 % across all 5 districts, Majima's Cabaret Grand Prix to #1, every Pocket Circuit cup, MesuKing top rank, all of Majima Everywhere.",
    },
    {
      ko:
        "3) 미니게임 컴플리션 — 마작·낚시·노래방·다트·빌리어드·볼링·카지노·클럽 세가 아케이드를 모두 최소 1회 플레이. 드림 머신 최상급 아이템 1종 획득(운 요소).",
      en:
        "3) Minigame completion — touch every Club Sega arcade + mahjong + fishing + karaoke + darts + billiards + bowling + casino at least once, and pull one Top-Grade Dream Machine prize (RNG).",
    },
    {
      ko:
        "4) 엔딩 후 Premium Adventure에서 남은 서브스토리 + 컴플리트 리스트 마무리. 키류 서브스토리 94 + 마지마 서브스토리 100으로 조 아몬·소 아몬을 각각 격파.",
      en:
        "4) After credits, mop up substories + Completion List in Premium Adventure. Kiryu sub 94 + Majima sub 100 unlock Jo Amon and So Amon respectively.",
    },
    {
      ko:
        "5) 2회차 — 전설 난이도 새 회차 시작. 무진투연 30연승, 「궁극의 길」 보스 러시, 「베스트 트레저 헌터(드래곤 앤 타이거 부품 풀)」, 「초절정 기교(전 스타일 트리 풀)」 등 고난도 트로피를 모두 정리.",
      en:
        "5) Run 2 — start a fresh save on Legend. Clear 30-straight Coliseum, the Ultimate boss rush, full Dragon & Tiger gear, every fight-style tree, and the Legend clear itself.",
    },
    {
      ko:
        "6) 모든 트로피가 카운트되면 자동으로 「맹세의 장소」 발동. 플래티넘 등록.",
      en:
        "6) The 'Stuff of Legend' trophy auto-fires when every other trophy is in the bank — that's your platinum.",
    },
  ],
  tips: [
    {
      ko:
        "Yakuza 0의 누적 플레이타임은 컴플리션 100% + 전설 1회 = 약 70~90시간이 표준입니다. 「얼티밋 배틀(궁극의 길)」과 「드림 머신 최상급」 운 요소가 가장 큰 변수.",
      en:
        "Expected total time is ~70~90 hours covering both runs. Ultimate Battle + Dream Machine RNG are the biggest variability factors.",
    },
    {
      ko:
        "전설 난이도는 0편 미니게임/사이드와 무관하므로 1회차에서 100% + 미서블을 모두 끝낸 뒤 2회차는 메인 스토리 직주행 + 보스만 클리어해도 됩니다.",
      en:
        "Legend difficulty only affects the main story. Front-load 100 % and missables in Run 1; Run 2 can be a story-only sprint.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2869817839",
  sourceLabel: {
    ko: "Steam Community — Yakuza 0 Achievement Guide",
    en: "Steam Community — Yakuza 0 Achievement Guide",
  },
};

// "꿈을 이룬 자" — 100% Completion List trophy.
// Steam api_name: 09_perfectionist.
const perfectionist: CuratedGuide = {
  summary: {
    ko:
      "컴플리트 리스트(시작 메뉴 → 컴플리트)의 모든 항목을 100% 채우면 트로피 발동. 키류 절반(부동산·드래곤 앤 타이거·일반 전투·미니게임 등)과 마지마 절반(캐바쿠라·포켓 서킷·미니게임 등)이 별도 100%씩 합산. 카테고리별 100% 도달 시 보상이 추가되며, 모든 카테고리가 동시에 100%가 되어야 트로피가 발동합니다.",
    en:
      "Trip every entry on the in-game Completion List. Kiryu's half (Real Estate, Dragon & Tiger, combat, minigames) and Majima's half (Cabaret, Pocket Circuit, minigames) tally separately — only when every category hits 100 % does the trophy fire.",
  },
  steps: [
    {
      ko:
        "1) 메인 스토리 진행과 병행해 컴플리트 리스트를 자주 확인. 카테고리별로 「수련(미스터/마이스터)」·「사이드 사업」·「컬렉션」·「미니게임」·「전투 챌린지」 라인이 분리되어 있어 한 라인이 빠지면 전체가 막힙니다.",
      en:
        "1) Audit the Completion List as you play. Categories (training, side businesses, collections, minigames, combat challenges) tally independently — one missing line stalls the whole trophy.",
    },
    {
      ko:
        "2) 키류 라인 핵심 — 부동산 로얄 5구역 100% + 5억만장자 격파, 드래곤 앤 타이거 전 장비 컴플리트, 마하라자 디스코 전곡 클리어, 일반 전투 스타일 트리 완성.",
      en:
        "2) Kiryu core — Real Estate Royale 5-district 100 % + 5 Billionaires defeated, Dragon & Tiger gear full collection, Maharaja Disco all songs, basic-style trees maxed.",
    },
    {
      ko:
        "3) 마지마 라인 핵심 — 캐바쿠라 그랑프리 「소텐보리 5스타」 격파 + 플래티넘 캐스트 6명 풀 영입, 포켓 서킷 모든 컵 우승, 메스킹 톱 랭크, 마지마 에브리웨어 풀 진행.",
      en:
        "3) Majima core — Cabaret Grand Prix's Five Stars + 6 Platinum Cast, every Pocket Circuit cup, MesuKing top rank, full Majima Everywhere progression.",
    },
    {
      ko:
        "4) 양 캐릭터 공통 — 모든 미니게임 최소 1회 플레이, 무진투연 30연승, 얼티밋 배틀 보스 러시, 텔레폰 클럽 진짜 만남 이벤트, 캣 파이트 누적 베팅 10회 적중.",
      en:
        "4) Both leads — every minigame at least once, 30-win Coliseum streak, Ultimate Boss Rush, Telephone Club real-meet events, 10 winning Cat Fight bets.",
    },
    {
      ko:
        "5) 모든 카테고리가 100%에 도달하면 자동 발동. 1개 카테고리만 99%여도 트로피는 안 뜨므로 컴플리트 리스트의 모든 행을 한 번씩 직접 확인.",
      en:
        "5) The trophy pops when every category hits 100 % — a single 99 % stalls it, so verify every row by hand.",
    },
  ],
  tips: [
    {
      ko:
        "플래티넘 트로피 「맹세의 장소」의 가장 큰 게이트입니다. 「드림 머신 최상급」 운 요소가 변수이므로, 부동산 자금이 충분할 때 일찍 시작해 두면 시간 손실이 적습니다.",
      en:
        "Biggest gate to the platinum. Start chasing Top-Grade Dream Machine prizes early once Real Estate cashflow is healthy — RNG eats the most time.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2869817839",
  sourceLabel: {
    ko: "Steam Community — Yakuza 0 Achievement Guide",
    en: "Steam Community — Yakuza 0 Achievement Guide",
  },
};

// 「부동산왕」 — Real Estate Royale, 가장 비싼 매물 구입. Steam api_name: 04_the_glamorous_life.
const realEstateKing: CuratedGuide = {
  summary: {
    ko:
      "키류의 부동산 로얄에서 가장 비싼 매물(디스코 시티 보이 — ¥9억대)을 구입하면 발동. 5장에서 부동산 로얄이 해금되면 본격 진행 가능하며, 매물 인수에는 매장 매출 점유율 + 충분한 자금이 동시에 필요합니다.",
    en:
      "Buy the priciest plot in Kiryu's Real Estate Royale (the Disco City Boy property, ~¥900M). The system opens in Ch.5 — closing the deal needs both district market share and a huge cash reserve.",
  },
  steps: [
    {
      ko:
        "1) 5장에서 부동산 로얄 해금. 시치후쿠 거리(레저 킹) 매물부터 인수해 시드 매출 확보.",
      en:
        "1) Unlock Real Estate Royale in Ch.5 and start buying Shichifuku Street (Leisure King) properties for seed income.",
    },
    {
      ko:
        "2) 5구역(레저·일렉트로닉스·플레저·갬블링·미디어)을 순서대로 80% 이상 점유 → 5억만장자 격파 → 새 구역의 비싼 매물 해금.",
      en:
        "2) Push each of the 5 districts (Leisure / Electronics / Pleasure / Gambling / Media) past 80 % share, then beat the Billionaire to unlock the high-tier listings.",
    },
    {
      ko:
        "3) 「디스코 시티 보이」 또는 같은 등급의 최상위 매물을 시드 매출에서 누적한 약 ¥9억으로 직접 인수. 인수 직후 트로피 「부동산왕」 발동.",
      en:
        "3) Purchase the top-tier listing (Disco City Boy or its district equivalent) for ~¥900M. The trophy fires on acquisition.",
    },
  ],
  tips: [
    {
      ko:
        "「제로 보석」(Y3 자료처럼 룰렛 조작) 같은 도박 트릭은 Y0에서는 불가능. 자금은 정직하게 매물 매출 + 사이드 미션으로 모아야 합니다.",
      en:
        "No casino-rigging tricks in Y0 — funds must come honestly from property revenue + side missions.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「카무로초 제패」 — 키류 부동산 5구역 풀 정복. Steam api_name: 51_we_built.
const conqueredKamurocho: CuratedGuide = {
  summary: {
    ko:
      "키류의 부동산 사이드 사업을 끝까지 진행해 카무로초 5구역 모두 점유율 100% + 5명의 「억만장자(빌리어네어)」 격파 + 방어전 클리어 시 발동. 부동산 로얄 컴플리션 라인의 끝.",
    en:
      "Conquer all 5 Kamurocho districts (100 % share each) + defeat all 5 Billionaires + survive their defense battles. The endpoint of Kiryu's Real Estate Royale.",
  },
  steps: [
    {
      ko:
        "1) 5구역 각각의 매물을 우선 인수 — 같은 구역의 매물이 많을수록 매출 점유율이 빠르게 오릅니다.",
      en:
        "1) Buy aggressively in each of the 5 districts — more holdings = faster market share growth.",
    },
    {
      ko:
        "2) 각 구역 점유율 90% 도달 시 해당 구역 「억만장자(빌리어네어)」 격파전 발생. 5명 전원 격파.",
      en:
        "2) At 90 % share per district, the Billionaire challenges trigger — beat all five.",
    },
    {
      ko:
        "3) 각 구역 100% 도달 후 「방어전」 — 라이벌 사업체의 반격을 격퇴해야 점유율이 유지됩니다. 5구역 모두 방어전까지 클리어 시 트로피 발동.",
      en:
        "3) Hitting 100 % triggers the Defense Battle in that district — repel the rival assault to lock the share. Clear all five for the trophy.",
    },
  ],
  tips: [
    {
      ko:
        "방어전 시점에는 매출이 일시적으로 떨어집니다. 자금이 두둑할 때 한 구역씩 차근차근 정리하는 게 안전.",
      en:
        "Defense battles dip revenue temporarily — knock out one district at a time when your reserves are healthy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「지지 않는 태양」 — 마지마 캐바쿠라 그랑프리, 클럽 선샤인 운영.
// Steam api_name: 52_walking_on.
const sunNeverSets: CuratedGuide = {
  summary: {
    ko:
      "마지마의 캐바쿠라 그랑프리 시스템에서 「클럽 선샤인」을 인수해 본격 운영하면 발동. 7장부터 시작 가능하며, 「소텐보리 5스타」 격파 전 단계 진행도로도 트로피가 풀립니다.",
    en:
      "Take ownership of Club Sunshine and begin Majima's Cabaret Grand Prix. Available from Ch.7 — the trophy fires on first operational shift, before the 5-Star showdown.",
  },
  steps: [
    {
      ko:
        "1) 7장 진행 후 소텐보리 「캐바쿠라 거리」에서 점장 도라와 만나 클럽 선샤인 인수 동의.",
      en:
        "1) After Ch.7, meet manager Yuki at Sotenbori's cabaret strip and accept the Club Sunshine offer.",
    },
    {
      ko:
        "2) 첫 캬바걸 영입 → 첫 영업 시프트 진행. 매출 0이라도 정상 영업이 카운트되면 트로피 발동.",
      en:
        "2) Recruit your first hostess and run a single operational shift — even a zero-yen night counts.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「다이아몬드 캐스트」 — 플래티넘 호스티스 1명 LV MAX. Steam api_name: 07_you's_still_number_one.
const diamondCast: CuratedGuide = {
  summary: {
    ko:
      "마지마 캐바쿠라 그랑프리에서 플래티넘 캐스트 1명을 「LV MAX(레벨 최대)」로 키우면 발동. 6명의 플래티넘 캐스트(유키·사키·치카·아이·히비키·마나) 중 누구 한 명이라도 시간 투자해 최대 레벨까지 키우면 됩니다.",
    en:
      "Raise any one Platinum Cast (Yuki/Saki/Chika/Ai/Hibiki/Mana) to MAX level in Majima's Cabaret Grand Prix.",
  },
  steps: [
    {
      ko:
        "1) 클럽 선샤인 인수 후 그랑프리 진행 중 플래티넘 캐스트 1명을 영입 — 각 캐스트는 별도 서브스토리로 해금됩니다.",
      en:
        "1) After taking over Club Sunshine, recruit any single Platinum Cast — each unlocks via a dedicated substory.",
    },
    {
      ko:
        "2) 의상·헤어 강화 + 시프트 동반 출근 → 평가 누적 → 레벨 상승. 4개 능력치(섹시·뷰티·큐트·퍼니)가 모두 X→△→○→◎ 4단계를 거쳐 MAX 도달.",
      en:
        "2) Buy outfits, hair upgrades, and bring her on shifts. Each evaluation stat ladders X → △ → ○ → ◎; the trophy fires on full MAX.",
    },
  ],
  tips: [
    {
      ko:
        "유키가 첫 영입 가능 캐스트이자 가장 빨리 풀 강화 가능. 트로피만 목표라면 유키 1명에 자원을 몰아 주세요.",
      en:
        "Yuki unlocks first and maxes fastest — concentrate resources on her if the trophy is the only goal.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「서킷의 용」 — 포켓 서킷 모든 레이스 우승. Steam api_name: 32_the_dragon.
const dragonOfPocketCircuit: CuratedGuide = {
  summary: {
    ko:
      "키류의 포켓 서킷 스타디움에서 열리는 모든 레이스·컵에 출전해 우승하면 발동. 4장 「달인과 연인은 종이 한 장 차이」 서브스토리 클리어로 포켓 서킷 시스템이 해금됩니다.",
    en:
      "Win every race and cup at Kiryu's Pocket Circuit Stadium. Unlocks after the Ch.4 substory 'A Hand-to-Hand Master's Path' opens the minigame.",
  },
  steps: [
    {
      ko:
        "1) 4장에서 포켓 서킷 스타디움 해금 → 첫 레이스 출전 → 키트 강화 시작. 카무로초 카토와 대화로 신규 부품 구매.",
      en:
        "1) After Ch.4 unlocks the stadium, run your first race and start parts upgrades via Kato.",
    },
    {
      ko:
        "2) 부품 + 카츠 카스(소년) 서브스토리 진행 시 풀 키트 + 「드래곤 카트」 등 강력 부품 해금. 모든 부품이 풀린 뒤 챔피언십 컵까지 도전.",
      en:
        "2) Progress the Kazuya kid substories to unlock the Dragon Kart-tier parts, then push through the championship cups.",
    },
    {
      ko:
        "3) 모든 컵(일반 + 챔피언십) 우승 시 트로피 발동. 일부 컵은 특정 차량 셋업이 필요하니 가이드 옆에 두고 진행.",
      en:
        "3) Wins across every cup (regular + championship) fires the trophy. Some cups demand specific builds — keep a build guide handy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「전설이 된 자」 — Legend 난이도 클리어. Steam api_name: 01_stuff_of_legend.
const legendCleared: CuratedGuide = {
  summary: {
    ko:
      "Y0 메인 스토리를 Legend 난이도로 클리어 시 발동. Legend는 1회 엔딩 클리어 후 해금되는 최고 난이도. 적의 체력·공격력이 대폭 상승하고, 회복 아이템 효과가 감소합니다. 회차 진행도가 이월되지 않으므로 새 회차 직주행이 표준.",
    en:
      "Beat Y0's main story on Legend — unlocked after a normal-difficulty clear. Enemies are spongier and hit harder, healing items are weakened. Fresh save required, no carry-over.",
  },
  steps: [
    {
      ko:
        "1) 첫 회차 엔딩을 본 뒤 메인 메뉴에서 「Legend」 난이도 새 회차 시작. 1회차 자원은 이월되지 않습니다.",
      en:
        "1) Finish a Normal/Hard run, then start a fresh save on Legend from the main menu. No carry-over.",
    },
    {
      ko:
        "2) 무기 + 회복 아이템 비축 최우선. 장 진행 중 가능한 한 부동산 자금을 활용해 강화 장비를 빠르게 확보.",
      en:
        "2) Stockpile weapons + healing items immediately. Use Real Estate cashflow to buy upgrade gear early.",
    },
    {
      ko:
        "3) 보스전은 패턴 학습이 핵심 — 러시 스타일 회피 또는 비스트 스타일 가드 후 카운터 콤보로 데미지 누적. 그랜드 마스터 보스 16장 클리어 시 트로피 발동.",
      en:
        "3) Bosses demand pattern memorization — Rush dodges and Beast guard-counters carry. Trophy fires on the Ch.16 final boss kill.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「궁극의 길」 — Ultimate Battle 보스 러시. Steam api_name: 54_just_beat.
const ultimateBoss: CuratedGuide = {
  summary: {
    ko:
      "얼티밋 배틀의 보스 러시(스토리 보스 연속 격파)를 끝까지 클리어해야 발동. 엔딩 후 해금되며, 모든 스토리 보스를 연속으로 격파해야 하므로 무기·회복 아이템·스킬 트리 완성이 사전 조건.",
    en:
      "Clear the Ultimate Battle boss rush — every story boss back-to-back without resupply. Unlocked post-credits; needs maxed style trees + a stocked inventory.",
  },
  steps: [
    {
      ko:
        "1) 메인 스토리 엔딩 후 카무로초 + 소텐보리에서 「얼티밋 배틀」 매치 해금. 일반 챌린지를 먼저 클리어한 뒤 보스 러시가 풀립니다.",
      en:
        "1) After credits, clear standard Ultimate Battle matches to unlock the Boss Rush variant.",
    },
    {
      ko:
        "2) 회복 아이템 최대치(스테미난 X·스타미난 R 등)을 100% 채우고 출전. 보스 간 회복이 없습니다.",
      en:
        "2) Top up healing items (Staminan X, Staminan Royale) — no resupply between bosses.",
    },
    {
      ko:
        "3) 전 스타일 트리 완성 후 도전 권장. 키류는 드래곤 + 비스트 + 러시 + 브롤러 풀, 마지마는 슬러거 + 러시 + 브레이커 풀.",
      en:
        "3) Best attempted with all four style trees maxed for both leads. Trophy fires on the last boss KO.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「아케보노 냥냥」 — 캣 파이트 단승 예상 10회 적중. Steam api_name: 31_cat_scratch.
const catFightWin10: CuratedGuide = {
  summary: {
    ko:
      "캣 파이트(소텐보리 명물 미니게임)에서 단승 예상을 누적 10회 적중하면 발동. 토너먼트 우승 1회가 아니라 베팅 적중 누적 카운트가 조건. 적중률을 높이려면 양쪽 선수 능력치를 사전에 확인하세요.",
    en:
      "Win 10 single-bet predictions across Cat Fight matches in Sotenbori — cumulative wins, not tournament wins. Check fighter stats before betting to push hit rate.",
  },
  steps: [
    {
      ko:
        "1) 7장 이후 소텐보리 핑크 거리 「소텐보리 어쇼션 클럽」에서 캣 파이트 진입. 베팅창에서 한쪽 선수에 단승을 걸어 적중 시 카운트.",
      en:
        "1) After Ch.7, enter the Cat Fight venue on Sotenbori's Pink St. and place single-fighter bets — wins tick the counter.",
    },
    {
      ko:
        "2) 각 선수의 STR/DEF/SPD 능력치는 매치 시작 전 화면에 표시. 강한 쪽에 베팅 + 베팅 단가를 최소화하면 시간/자금 부담이 적습니다.",
      en:
        "2) Each fighter's STR/DEF/SPD is shown pre-match — pick the stronger side at minimum stakes for safety.",
    },
    {
      ko:
        "3) 10회 적중 누적 시 트로피 발동. 토너먼트 우승은 별도 트로피가 아닙니다.",
      en:
        "3) Trophy pops on win #10. Tournament victories don't have a separate trophy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「게임을 마스터한 남자」 — 모든 미니게임 1회씩. Steam api_name: 28_what_a.
const masterOfMinigames: CuratedGuide = {
  summary: {
    ko:
      "Y0의 모든 미니게임을 최소 1회씩 플레이하면 발동. 마작·낚시·노래방·다트·빌리어드·볼링·캣 파이트·텔레폰 클럽·드림 머신·디스코·클럽 세가 아케이드(아웃런/스페이스 해리어/판타지 존/슈퍼 행온/판타지 존 II 등)·메스킹·포켓 서킷 모두 카운트 대상.",
    en:
      "Play every Y0 minigame at least once. Mahjong, fishing, karaoke, darts, billiards, bowling, cat fight, telephone club, dream machine, disco, every Club Sega arcade cab (OutRun, Space Harrier, Fantasy Zone, Super Hang-On, etc.), MesuKing, Pocket Circuit.",
  },
  steps: [
    {
      ko:
        "1) 카무로초 + 소텐보리 양 도시 클럽 세가의 모든 아케이드 1회씩 플레이. 컴플리트 리스트의 「미니게임」 행을 보면서 진행 상황 점검.",
      en:
        "1) Visit Club Sega in both cities and play every cabinet at least once. Use the Completion List's Minigames row as a checklist.",
    },
    {
      ko:
        "2) 도박 라인(마작·코이코이·다이아·블랙잭·룰렛·바카라·체프) + 술집 미니게임(다트·당구·빌리어드 트릭샷·볼링) 전 종류 진행.",
      en:
        "2) Gambling line (mahjong, koi-koi, dice, blackjack, roulette, baccarat, chouhan) + bar games (darts, billiards trick shots, bowling) all touched.",
    },
    {
      ko:
        "3) 소텐보리 한정 — 캣 파이트 + 텔레폰 클럽 + 댄스 배틀 + 캐바쿠라 그랑프리 1시프트. 카무로초 한정 — 부동산 로얄 1매물 + 마하라자 디스코 1곡.",
      en:
        "3) Sotenbori-only — Cat Fight, Telephone Club, Disco battle, Cabaret shift. Kamurocho-only — Real Estate 1 plot, Maharaja Disco 1 track.",
    },
    {
      ko:
        "4) 모든 라인이 컴플리트 리스트에 1회 이상 카운트되면 트로피 발동. 한 종목이라도 빠지면 안 뜨므로 직접 행 단위 확인 필수.",
      en:
        "4) Every row on the Minigames category needs at least 1 — trophy pops when the last untouched one fires.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「베스트 트레져 헌터」 — 드래곤 앤 타이거 모든 소재. Steam api_name: 26_eye_of.
const bestTreasureHunter: CuratedGuide = {
  summary: {
    ko:
      "키류의 「드래곤 앤 타이거」 장비 검색을 반복해 모든 장비 부품을 수집하면 발동. 3장에서 베이커리 사장 카가시와 만나 시스템 해금. 일부 부품은 1회당 약 30초~수 분의 실시간 대기가 필요하며, 운 요소가 강합니다.",
    en:
      "Run Kiryu's Dragon & Tiger gear search until every part is collected. Unlocks in Ch.3 via the bakery shopkeeper. Each search needs 30 s~few minutes of real-time wait + RNG.",
  },
  steps: [
    {
      ko:
        "1) 3장 진행 후 드래곤 앤 타이거 시스템 해금 → 첫 「에이전트 파견」 의뢰. 부품 카탈로그를 보며 결손 부품 우선 탐색.",
      en:
        "1) Open Dragon & Tiger in Ch.3, then dispatch agents — sort the catalog by missing parts and target them.",
    },
    {
      ko:
        "2) 자금 + 시간 투자가 필요한 라인 — 부동산 자금이 안정된 7장 이후부터 본격 진행하면 자금 부담이 적습니다.",
      en:
        "2) Push it post-Ch.7 when Real Estate cashflow can absorb the costs.",
    },
    {
      ko:
        "3) 모든 부품 카탈로그 100% 도달 시 「베스트 트레져 헌터」 + 「대・대・대성공!」 등 연동 트로피 동시 발동.",
      en:
        "3) Full catalog completion fires this trophy + the 'Smooth Going' / 'Best Result' trophies together.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「파이트 머니는 육문전」 — 무진투연 30연승. Steam api_name: 27_prizefighter.
const prizefighter30: CuratedGuide = {
  summary: {
    ko:
      "「무진투연」(소텐보리 지하 콜로세움 격투 챌린지)에서 사망하지 않고 30명을 연속 격파하면 발동. 장 후반부에 풀리며, 무기 + 회복 아이템 풀 비축이 사실상 전제.",
    en:
      "Win 30 fights in a row without dying at the Sotenbori underground Coliseum. Unlocks late-game and effectively requires a stocked inventory + maxed styles.",
  },
  steps: [
    {
      ko:
        "1) 11장 이후 소텐보리 지하 「무진투연」 입장. 첫 입장 시 일반 챌린지부터 클리어해 30연승 라인 해금.",
      en:
        "1) Past Ch.11 enter the underground arena; clear standard challenges first to unlock the 30-streak mode.",
    },
    {
      ko:
        "2) 회복 아이템 + 무기 풀 비축. 격투가 시작되면 인벤토리 보충 불가. 추천: 스테미난 로열 ×5, 슈퍼 행온 키트 + 강력 무기 1.",
      en:
        "2) Top up healing (Staminan Royale ×5) + a strong weapon — no resupply once the streak starts.",
    },
    {
      ko:
        "3) 후반 라운드는 무기 적이 많아지므로 무기 빼앗기 → 환경 공격 활용. 한 번 사망 시 카운트 리셋, 처음부터 다시.",
      en:
        "3) Late rounds spawn weapon-bearing mooks — disarm and turn it back on them. One death resets the counter.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「아몬 격파」 — 조 아몬 + 소 아몬 격파. Steam api_name: 55_amon_defeated.
const amonDefeated: CuratedGuide = {
  summary: {
    ko:
      "키류 서브스토리 94 「우리는 카무로초 가족이다」 + 마지마 서브스토리 100 「소텐보리의 호혈관 호객꾼」을 진행해 조 아몬과 소 아몬을 모두 격파하면 발동. 두 서브 모두 다른 모든 서브스토리 클리어가 전제.",
    en:
      "Beat Jo Amon via Kiryu Sub 94 + So Amon via Majima Sub 100. Both gate on clearing every other substory first.",
  },
  steps: [
    {
      ko:
        "1) 키류·마지마 양쪽의 서브스토리를 모두 클리어 (각 50건 = 합산 100건). 누락 항목이 있으면 아몬 서브가 풀리지 않습니다.",
      en:
        "1) Clear every substory for both Kiryu and Majima (50 each, 100 total). Missing any one keeps Amon locked.",
    },
    {
      ko:
        "2) 모든 서브 완료 후 카무로초 칠드런즈 파크에서 「검은 양복의 남자」 자동 등장 → 키류 서브스토리 94 진행 → 조 아몬과 격투.",
      en:
        "2) With all subs done, the Man in Black auto-spawns at Children's Park for Kiryu's Sub 94 → fight Jo Amon.",
    },
    {
      ko:
        "3) 마지마 측에서는 소텐보리 「호혈관」에서 동일 방식으로 소 아몬과 격투. 양쪽 격파 시 트로피 발동.",
      en:
        "3) Majima's side mirrors at Sotenbori's Hoketsukan — beat So Amon. Trophy fires when both are down.",
    },
  ],
  tips: [
    {
      ko:
        "아몬 격투는 시리즈 최고난도 보스. 전 스타일 트리 풀 강화 + 회복 아이템 풀 비축은 필수. Legend 난이도와 무관(노멀에서도 발동 가능).",
      en:
        "Amon is series-tier hardest. Max style trees + full heal stack mandatory. Difficulty-agnostic — Normal works.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「초절정 기교」 — 키류 + 마지마 전 스타일 트리 풀. Steam api_name: 22_master_of.
const styleMaster: CuratedGuide = {
  summary: {
    ko:
      "키류의 일반 4스타일 트리(브롤러·러시·비스트·드래곤)와 마지마의 일반 4스타일 트리(슬러거·러시·브레이커·매드 도그) 모든 노드를 풀로 채우면 발동. 일부 노드는 수련 마스터·사이드 사업 진행으로만 풀립니다.",
    en:
      "Fill every node on Kiryu's four style trees (Brawler / Rush / Beast / Dragon) and Majima's four (Thug / Rush / Breaker / Mad Dog). Some nodes only unlock via masters + side businesses.",
  },
  steps: [
    {
      ko:
        "1) 부동산 로얄(키류) + 캐바쿠라(마지마) 자금이 안정되는 7~8장부터 본격 강화. 자금 부족이 가장 큰 게이트.",
      en:
        "1) Push it from Ch.7~8 once Real Estate (Kiryu) and Cabaret (Majima) revenue stabilizes — money is the biggest gate.",
    },
    {
      ko:
        "2) 마스터 6명(베이커 미스터 셰이크다운·미스터 모닝글로리·코마키·미스터 마지마 등)에게 모두 수련 받기. 일부 노드는 마스터 수련 보상으로만 풀림.",
      en:
        "2) Train with every master — some nodes only unlock through master rewards.",
    },
    {
      ko:
        "3) 사업 마일스톤 보상 — 부동산 100% 도달, 캐바쿠라 No.1 등극 등에서 추가 노드 + 「전설 스타일」(도지마의 용 + 매드 도그) 해금.",
      en:
        "3) Business milestones (Real Estate 100 %, Cabaret #1) unlock Legend styles + remaining nodes.",
    },
    {
      ko:
        "4) 양 캐릭터 8개 트리 모두 100% 채우면 트로피 발동. 도지마의 용 + 매드 도그 트리는 별도(다른 트로피와 연동).",
      en:
        "4) Full 100 % on all 8 basic trees fires this trophy. Legend styles tally toward separate trophies.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「달인과 연인은 종이 한 장 차이」 — 마스터 6명 모두 만남. Steam api_name: 20_training_in.
const meetAllMasters: CuratedGuide = {
  summary: {
    ko:
      "키류·마지마의 전투 스타일에 연결된 마스터 6명(베이커·미스터 모닝글로리·코마키·미스터 마지마·찰스·미스 텟찬 등) 각각의 수련 미션을 최소 1개씩 클리어하면 발동. 「초절정 기교」 트로피의 사전 단계 같은 성격.",
    en:
      "Meet and complete at least one training mission with every fighting-style master across Kiryu and Majima — six total. Stepping stone to the 'Style Master' trophy.",
  },
  steps: [
    {
      ko:
        "1) 장 진행과 병행해 거리에서 마스터 NPC 마커가 보이면 즉시 말 걸기. 베이커는 4장, 코마키는 6장, 미스터 모닝글로리는 5장 등 장별로 등장.",
      en:
        "1) Talk to master NPCs as their markers appear — Baker (Ch.4), Komaki (Ch.6), Mr. Morning Glory (Ch.5), etc.",
    },
    {
      ko:
        "2) 각 마스터의 첫 수련 미션 1회 클리어 → 스타일 트리 신규 노드 해금. 6명 모두 첫 수련을 끝내면 트로피 발동.",
      en:
        "2) Clear each master's first training once — that unlocks new style nodes. All 6 done = trophy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「에브리데이 나이트 피버」 — 마하라자 디스코 전곡 클리어. Steam api_name: 30_say_you.
const everydayNightFever: CuratedGuide = {
  summary: {
    ko:
      "마하라자 카무로초의 디스코 미니게임에서 모든 곡을 난이도 무관하게 한 번씩 클리어하면 발동. 7장 이후 디스코 시스템 해금 시 진행 가능.",
    en:
      "Clear every song in the Maharaja Kamurocho disco minigame at least once on any difficulty. Available after Ch.7 unlocks the disco system.",
  },
  steps: [
    {
      ko:
        "1) 7장 「불타는 토요일 밤」 서브스토리로 디스코 미니게임 해금.",
      en:
        "1) Unlock the disco via Ch.7's 'Saturday Night Fever' substory.",
    },
    {
      ko:
        "2) 곡 목록을 한 곡씩 EASY 난이도로 클리어. 점수와 무관, 「클리어」 카운트만 필요합니다.",
      en:
        "2) Run every track on EASY — score doesn't matter, just a clear flag.",
    },
    {
      ko:
        "3) 모든 곡 1회 클리어 시 트로피 발동. 「퍼펙트 클리어」는 별도 트로피와 연동.",
      en:
        "3) Trophy fires once every song has at least one clear. Perfect clears tally to another trophy.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

// 「대면♪」 — 텔레폰 클럽 실제 만남. Steam api_name: 29_call_me.
const phoneMeetup: CuratedGuide = {
  summary: {
    ko:
      "텔레폰 클럽(전화방) 미니게임에서 「진짜 만남」 이벤트를 1회 이상 트리거하면 발동. 페이크 응답이 다수 섞여 있어 정답 단어/대화를 골라야 진짜 만남으로 이어집니다.",
    en:
      "Trigger at least one 'real meeting' event in the Telephone Club minigame. Most calls are bait — pick the right keywords/replies to escalate to a real meet.",
  },
  steps: [
    {
      ko:
        "1) 텔레폰 클럽 입장 → 응답 선택지에서 친근하고 흥미를 유발하는 대답 선택. 「짧고 자극적」보다 「공감 + 호기심」 라인이 정답률이 높습니다.",
      en:
        "1) Inside Telephone Club, pick warm/curious replies over short, aggressive ones — empathy lands more real meets.",
    },
    {
      ko:
        "2) 진짜 만남 트리거 시 카무로초 거리 약속 장소로 이동 → 컷신 진행. 만남이 성사되면 트로피 발동.",
      en:
        "2) When a real meet triggers, head to the meeting spot in Kamurocho. Cutscene resolves → trophy.",
    },
  ],
  tips: [
    {
      ko:
        "처음 몇 번은 함정 응답이 많아 실패 누적. 컴플리트 리스트의 「텔레폰 클럽」 항목을 보면서 진행도를 확인하세요.",
      en:
        "Early calls bait you with fakes — track progress via the Completion List entry.",
    },
  ],
  sourceUrl: "https://www.powerpyx.com/yakuza-zero-trophy-guide-roadmap/",
  sourceLabel: { ko: "PowerPyx — Yakuza 0 Trophy Guide", en: "PowerPyx — Yakuza 0 Trophy Guide" },
};

export const YAKUZA_0_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_0_APP_ID}:00_where_it_all_began`]: platinum,
  [`${YAKUZA_0_APP_ID}:01_stuff_of_legend`]: legendCleared,
  [`${YAKUZA_0_APP_ID}:04_the_glamorous_life`]: realEstateKing,
  [`${YAKUZA_0_APP_ID}:07_you're_still_number_one`]: diamondCast,
  [`${YAKUZA_0_APP_ID}:09_perfectionist`]: perfectionist,
  [`${YAKUZA_0_APP_ID}:20_training_in`]: meetAllMasters,
  [`${YAKUZA_0_APP_ID}:22_master_of`]: styleMaster,
  [`${YAKUZA_0_APP_ID}:26_eye_of`]: bestTreasureHunter,
  [`${YAKUZA_0_APP_ID}:27_prizefighter`]: prizefighter30,
  [`${YAKUZA_0_APP_ID}:28_what_a`]: masterOfMinigames,
  [`${YAKUZA_0_APP_ID}:29_call_me`]: phoneMeetup,
  [`${YAKUZA_0_APP_ID}:30_say_you`]: everydayNightFever,
  [`${YAKUZA_0_APP_ID}:31_cat_scratch`]: catFightWin10,
  [`${YAKUZA_0_APP_ID}:32_the_dragon`]: dragonOfPocketCircuit,
  [`${YAKUZA_0_APP_ID}:35_rich_taste`]: richTaste,
  [`${YAKUZA_0_APP_ID}:37_smooth_criminal`]: smoothCriminal,
  [`${YAKUZA_0_APP_ID}:39_business_etiquette`]: businessEtiquette,
  [`${YAKUZA_0_APP_ID}:41_best_served`]: bestServedCold,
  [`${YAKUZA_0_APP_ID}:43_it_takes`]: itTakesTwo,
  [`${YAKUZA_0_APP_ID}:45_they_wont`]: theyWontMind,
  [`${YAKUZA_0_APP_ID}:47_big_hair`]: bigHairInTheCrosshairs,
  [`${YAKUZA_0_APP_ID}:49_hitting_the`]: hittingTheBottle,
  [`${YAKUZA_0_APP_ID}:51_we_built`]: conqueredKamurocho,
  [`${YAKUZA_0_APP_ID}:52_walking_on`]: sunNeverSets,
  [`${YAKUZA_0_APP_ID}:54_just_beat`]: ultimateBoss,
  [`${YAKUZA_0_APP_ID}:55_amon_defeated`]: amonDefeated,
};
