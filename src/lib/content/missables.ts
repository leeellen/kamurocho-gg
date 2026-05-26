import type { ChapterMissable } from "./types";

export const MISSABLES: Partial<Record<number, ChapterMissable[]>> = {
  // ──────────────────────────────────────────────────────────────
  // Yakuza 0
  // ──────────────────────────────────────────────────────────────
  2988580: [
    {
      chapter: 2,
      title: { ko: "부동산 브로커", en: "The Real Estate Broker" },
      items: [
        {
          kind: "missable",
          title: { ko: "「이왕이면 화끈하게」— 골드 샴페인을 노숙자에게", en: "'Rich Taste' — Gold Champagne to the homeless man" },
          when: { ko: "2장 종료 전", en: "Before Chapter 2 ends" },
          body: {
            ko: "돈키호테에서 ¥20,000짜리 골드 샴페인을 구매해 카무로초 거리의 노숙자에게 건네면 트로피 발동. 3장으로 넘어가면 영구 잠금. 자금이 부족하면 부동산 회수나 삥쟁이로 ¥20,000을 우선 확보하세요.",
            en: "Buy Gold Champagne (¥20,000) from Don Quijote and hand it to the homeless man on a Kamurocho street. Roll into Chapter 3 and the trophy is permanently locked. Pull ¥20,000 from Real Estate Royale or a Mr. Shakedown win first if cash is tight.",
          },
        },
      ],
    },
    {
      chapter: 3,
      title: { ko: "소텐보리의 첫 밤", en: "A Gilded Cage" },
      items: [
        {
          kind: "missable",
          title: { ko: "「전격 트레이트 성립」— 오디세이 정찰", en: "'Smooth Criminal' — Odyssey recon" },
          when: { ko: "마지마 3장", en: "Majima — Chapter 3" },
          body: {
            ko: "비샤몬 다리 녹색 자켓 남성, 르 마르셰 남동쪽 녹색 자켓 여성, 오디세이 남쪽 회사원 무리에게 말을 건 뒤 가게 안 1인칭 시점에서 미스터 리비도 대신 맞은편 테이블 3개와 바로 좌측 테이블을 관찰. 장이 넘어가면 트로피 영구 잠금.",
            en: "Talk to the green-jacket man on Bishamon Bridge, the green-jacket woman southeast of Le Marche, and the suited group south of Odyssey. Inside, in the first-person view, look at the three tables on the far side and the table immediately to the left — not Mr. Libido. Move past Ch.3 and it's gone.",
          },
        },
      ],
    },
    {
      chapter: 5,
      title: { ko: "정직한 일", en: "An Honest Living" },
      items: [
        {
          kind: "missable",
          title: { ko: "「엘리트 비즈니스맨」— 카페 알프스 미팅", en: "'Business Etiquette 101' — Café Alps meeting" },
          when: { ko: "오다와의 클라이언트 미팅 시", en: "During the client meeting with Oda" },
          body: {
            ko: "카페 알프스에서 「뒤쪽 테이블」 → 「가장 가까운 의자」 → 「주문 없음」 선택 후 야마노이 등장 시 QTE 성공. 한 단계라도 틀리면 장 종료와 동시에 영구 잠금.",
            en: "At Café Alps choose 'Near the back' → 'Nearest chair' → 'Nothing', then nail the QTE when Yamanoi enters. Any wrong pick and the trophy locks when Chapter 5 ends.",
          },
        },
      ],
    },
    {
      chapter: 7,
      title: { ko: "어둠 속 탈출", en: "A Dark Escape" },
      items: [
        {
          kind: "missable",
          title: { ko: "「식어도 맛있다」— 타코야키 식히기", en: "'Best Served Cold?' — let the takoyaki go cold" },
          when: { ko: "마지마 7장 심부름", en: "Majima — Ch.7 errand" },
          body: {
            ko: "마구타코에서 타코야키 구매 후 마코토에게 곧장 돌아가지 말고 실시간 15분 이상 다른 활동(서브스토리, 미니게임 등)을 진행. 인벤토리 아이콘이 바뀌면 식은 것 — 장 진행 시 영구 잠금.",
            en: "Buy takoyaki at Magutako, then waste 15+ real-time minutes on substories or minigames before delivering it to Makoto. The inventory icon changes when it's cold. Advance the chapter without doing this and it's gone.",
          },
        },
      ],
    },
    {
      chapter: 10,
      title: { ko: "남자의 가치", en: "A Man's Worth" },
      items: [
        {
          kind: "missable",
          title: { ko: "「사원이 한마음 되어」— 오다/타치바나와 협동 히트 액션 3회", en: "'It Takes Two' — three co-op heat actions with Oda/Tachibana" },
          when: { ko: "도조 본부 진입 전투", en: "Tojo HQ assault" },
          body: {
            ko: "오다 또는 타치바나가 적을 잡을 때 △로 협동 히트 액션 발동. 총 3회 필요. 동료가 잡는 빈도가 낮으므로 히트 회복 아이템을 미리 준비하세요. 장 종료 후 재진입 불가.",
            en: "When Oda or Tachibana grabs an enemy, close in and press Triangle for the co-op heat action. You need three. They grab infrequently, so stock heat-restoring items. No way back after Ch.10.",
          },
        },
      ],
    },
    {
      chapter: 12,
      title: { ko: "욕망의 굴", en: "Den of Desires" },
      items: [
        {
          kind: "missable",
          title: { ko: "「보물이 왕창!」— 벤텐 여관 2층 금고 2개", en: "'They Won't Mind' — two safes at Benten Inn 2F" },
          when: { ko: "벤텐 여관 돌파 중", en: "Pushing through Benten Inn" },
          body: {
            ko: "쌍부채 적을 처치한 뒤 두 번째 계단 직전, 오른쪽 방 좌측 안쪽 구석에 흰 금고 2개가 있습니다. 둘 다 파괴 후 진행. 계단을 먼저 오르면 트로피 영구 잠금.",
            en: "After the fan-dual-wielding enemy and before the second staircase, duck into the room on the right — two white safes sit in the back-left corner. Smash both before going upstairs or it's locked.",
          },
        },
      ],
    },
    {
      chapter: 13,
      title: { ko: "추격전", en: "Bloody Battle Royale" },
      items: [
        {
          kind: "missable",
          title: { ko: "「히트 스나이프」— 아프로 야쿠자 처치", en: "'Big Hair in the Crosshairs' — drop the afro yakuza" },
          when: { ko: "차량 추격전 중반", en: "Mid-way through the car chase" },
          body: {
            ko: "기관총 밴 직전, 흰 양복 + 아프로 적이 짧게 차창 밖으로 나옵니다. 히트 아이로 슬로우 처리한 뒤 사격해 격추. 놓치면 장 종료와 동시에 영구 잠금.",
            en: "Just before the machine-gun van, a white-suited afro mook leans out briefly. Trigger Heat Eye to slow time and shoot him. Miss the window and the trophy locks at chapter end.",
          },
        },
      ],
    },
    {
      chapter: 15,
      title: { ko: "마지마의 결의", en: "Bound by Oath" },
      items: [
        {
          kind: "missable",
          title: { ko: "「트러블 대처는 나의 특기」— 레이나 와인병 QTE 실패하기", en: "'Hitting the Bottle' — intentionally fail Reina's bottle QTE" },
          when: { ko: "마지마 vs 니시키야마 (세레나)", en: "Majima vs Nishikiyama at Serena" },
          body: {
            ko: "니시키야마가 카운터 쪽으로 던졌을 때 레이나가 와인병으로 내려치는 QTE가 발생. 일부러 버튼을 누르지 않거나 잘못 누르면 트로피 발동. 정상적으로 막으면 영구 미획득.",
            en: "When Nishikiyama tosses you toward the counter, Reina swings a wine bottle in a QTE. Deliberately let it land — wrong button or no input. Block successfully and the trophy is gone for good.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Yakuza Kiwami
  // ──────────────────────────────────────────────────────────────
  3717330: [
    {
      chapter: 7,
      title: { ko: "용과 잉어", en: "The Dragon and the Koi" },
      items: [
        {
          kind: "missable",
          title: { ko: "하루카의 선물 찾기 — 7장/11 동행 서브스토리", en: "'Searching for the Present' — Haruka-only substory" },
          when: { ko: "하루카 동행 7장", en: "While Haruka tags along in Ch.7" },
          body: {
            ko: "하루카와 함께 칠드런즈 파크에 가서 소녀를 만난 뒤 포포(쇼와 거리)·텐카이치 골목·클럽 세가·포켓 서킷 스타디움 중 3곳 이상에서 선물 후보를 확보해 가져다 줘야 100% 카운트. 7장과 11에서만 하루카가 동행하므로 둘 다 놓치면 영구 잠금.",
            en: "With Haruka in tow, find the girl at Children's Park, then collect a gift from at least three of the four spots: Poppo on Showa St., the Tenkaichi back alley, Club SEGA Theater Square, and the Pocket Circuit Stadium. Haruka only walks with you in Ch.7 and Ch.11 — miss both and the substory is gone.",
          },
        },
      ],
    },
    {
      chapter: 11,
      title: { ko: "재회", en: "A Reunion" },
      items: [
        {
          kind: "missable",
          title: { ko: "하루카 동행 서브스토리 정리 마지막 기회", en: "Last window for Haruka-walks-with-you substories" },
          when: { ko: "11장 도중", en: "During Chapter 11" },
          body: {
            ko: "메인 스토리상 하루카가 다시 동행하는 마지막 장입니다. 7장에서 놓친 하루카 한정 서브스토리(숨바꼭질, 선물 찾기 등)는 이번이 마지막 — 12장 진입 시 100% 라인에서 영구 락아웃.",
            en: "Chapter 11 is the final stretch where Haruka actually walks with Kiryu in the main story. Anything you skipped in Ch.7 (Hide-and-Seek, Searching for the Present, etc.) must be cleared now — Chapter 12 locks them out of the 100% list for good.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "포켓 서킷 풀 클리어와 메스킹 병행", en: "Close out Pocket Circuit and MesuKing here" },
          when: { ko: "11장 자유 시간", en: "Free time in Ch.11" },
          body: {
            ko: "마지막 자유 구간이므로 포켓 서킷 챔피언십, 메스킹 톱 랭크, 마지마 에브리웨어 잔여 랭크를 12장 이전에 정리하면 엔딩 후 완료 정리가 가벼워집니다.",
            en: "This is the last big open stretch — finish Pocket Circuit's championships, push MesuKing to the top, and grind out remaining Majima Everywhere ranks now. Post-game cleanup gets a lot lighter.",
          },
        },
      ],
    },
    {
      chapter: 12,
      title: { ko: "최후의 전장", en: "The Final Battlefield" },
      items: [
        {
          kind: "anytime",
          title: { ko: "프리미엄 어드벤처 정리 가능", en: "Premium Adventure cleanup available" },
          when: { ko: "엔딩 이후", en: "Post-credits" },
          body: {
            ko: "스토리 클리어 후 프리미엄 어드벤처에서 서브스토리·미니게임·완료 항목 대부분을 회수할 수 있습니다. 하루카 한정 콘텐츠와 장 한정 스토리 QTE만 영구 잠금.",
            en: "After the credits, Premium Adventure unlocks and lets you mop up nearly every substory, minigame, and completion item. Only Haruka-tagalong content and chapter-locked story QTEs stay permanently missed.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Yakuza Kiwami 2 — no missable trophies
  // ──────────────────────────────────────────────────────────────
  3717340: [
    {
      chapter: 1,
      title: { ko: "도지마의 유산", en: "The Dojima Legacy" },
      items: [
        {
          kind: "anytime",
          title: { ko: "영구 잠금 트로피 없음", en: "No permanently missable trophies" },
          when: { ko: "전체 플레이", en: "Entire playthrough" },
          body: {
            ko: "세가가 키와미 2 리메이크 단계에서 영구적으로 놓치기 쉬운 요소를 제거했습니다. 모든 서브스토리·미니게임·100% 항목은 엔딩 후 프리미엄 어드벤처에서 회수 가능.",
            en: "Sega scrubbed permanent missables out of Kiwami 2 during the remake. Every substory, minigame, and 100% checkmark can still be picked up in Premium Adventure after the credits.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "도시별 장 윈도우 의식", en: "Mind the city-by-city chapter windows" },
          when: { ko: "1장·5–11·13–16 / 2–4·11–13", en: "Ch.1, 5–11, 13–16 (Kamurocho) · Ch.2–4, 11–13 (Sotenbori)" },
          body: {
            ko: "서브스토리는 도시별로 등장 장가 다르고 일부는 시간대 조건이 붙습니다. 카무로초 장(1·5–11·13–16)와 소텐보리 장(2–4·11–13)를 인식하고 그때그때 정리하면 후반이 한결 수월합니다.",
            en: "Substories appear in fixed city windows and a few need specific times of day. Knock out Kamurocho substories during Ch.1, 5–11, 13–16 and Sotenbori during Ch.2–4, 11–13 — the late-game cleanup gets a lot easier.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "마지마 서브스토리 별도 진행", en: "Run the Majima Saga as its own track" },
          when: { ko: "메인 메뉴에서 별도 선택", en: "Selected separately from the main menu" },
          body: {
            ko: "마지마 사가는 키류 본편과 분리된 별도 시나리오입니다. 본편 7장 클리어 전후 어디서든 시작 가능하니 잊지 말고 진행하세요.",
            en: "The Majima Saga is launched separately from the main menu and runs alongside Kiryu's story. Start it any time around Chapter 7 — easy to forget it exists otherwise.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Yakuza 3 Remastered
  // ──────────────────────────────────────────────────────────────
  1088710: [
    {
      chapter: 1,
      title: { ko: "오키나와 모리닝글로리", en: "Morning Glory Orphanage" },
      items: [
        {
          kind: "recommended",
          title: { ko: "「최강의 증표」— 시작 난이도 하드 이상 권장", en: "'Testament to Strength' — start on Hard or above" },
          when: { ko: "뉴 게임 난이도 선택 시", en: "At new game difficulty select" },
          body: {
            ko: "리마스터 일부 빌드에서는 도중 난이도 상향이 트로피에 반영되지 않을 수 있습니다. 안전하게 처음부터 Hard 이상으로 시작하거나, 별도의 하드 세이브를 보존하세요.",
            en: "Some remaster builds don't reliably credit mid-run difficulty bumps for this trophy. Either start on Hard from the beginning or keep a clean Hard save as backup.",
          },
        },
      ],
    },
    {
      chapter: 6,
      title: { ko: "카무로초 복귀", en: "Return to Kamurocho" },
      items: [
        {
          kind: "missable",
          title: { ko: "리키야의 고향 친구 — 6장 동행 서브스토리", en: "'Hometown Girl' — Rikiya tagalong substory" },
          when: { ko: "리키야가 동행하는 6장", en: "Ch.6 while Rikiya is walking with you" },
          body: {
            ko: "리키야가 동행하는 6장에서 카무로초 곳곳을 안내하며 그가 원하는 모든 곳을 따라가야 진행. 장이 넘어가면 메인 플레이에선 영구 잠금되며 프리미엄 어드벤처에서만 회수 가능 — 100% 정리 시 Golden Pistol과 연결됩니다.",
            en: "While Rikiya tags along in Chapter 6, walk him through every place he asks to see. Push past the chapter and the main-run window closes; only Premium Adventure can recover it. Tied to the Golden Pistol on the substory-100% chain.",
          },
        },
        {
          kind: "missable",
          title: { ko: "제로 보석 — 룰렛 1회 한정 치트 아이템", en: "'Zero Jewel' — roulette cheat item" },
          when: { ko: "6장 리키야 라인", en: "Ch.6 via the Rikiya line" },
          body: {
            ko: "리키야와 카무로초를 도는 라인에서 1회 한정 지급. 워킹 뱅크·미니게임 마스터 트로피 진행에 사용되므로 받은 즉시 일반 인벤토리로 옮기지 말고 장 종료 전에 활용하세요.",
            en: "Granted once on Rikiya's Kamurocho tour. It feeds the Walking Bank and Minigame Master trophies via roulette, so save it for that purpose before the chapter ends.",
          },
        },
      ],
    },
    {
      chapter: 12,
      title: { ko: "엔딩 직전", en: "Pre-finale window" },
      items: [
        {
          kind: "anytime",
          title: { ko: "대부분의 서브스토리는 프리미엄 어드벤처 회수 가능", en: "Most substories recoverable in Premium Adventure" },
          when: { ko: "엔딩 이후", en: "Post-credits" },
          body: {
            ko: "리키야/하루카 등 동행 한정 서브 3종을 제외한 대부분은 프리미엄 어드벤처에서 정리 가능. 다만 진행 효율을 위해 장 윈도우 안에서 처리하는 것을 권장합니다.",
            en: "Aside from three tagalong-locked substories (Rikiya / Haruka), Premium Adventure recovers virtually everything. Still worth clearing inside the chapter windows for pacing.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Yakuza 4 Remastered
  // ──────────────────────────────────────────────────────────────
  1105500: [
    {
      chapter: 1,
      title: { ko: "아키야마 편 — 돈과 여자", en: "Part 1 — Akiyama: Money and Women" },
      items: [
        {
          kind: "missable",
          title: { ko: "「미스터 드레스업」— 카탈로그 서비스 전 카테고리 수집", en: "'Mr. Dress-Up' — collect every Catalog outfit category" },
          when: { ko: "아키야마 편 종료 전", en: "Before Akiyama's part ends" },
          body: {
            ko: "아키야마의 호스티스 메이커 미니게임 「No.1 캬바걸을 만들자」 카탈로그 서비스에서 의상 카테고리를 빠짐없이 수집해야 합니다. 아키야마 편이 끝나면 카탈로그 자체가 영구 잠금되므로, 사에지마 편으로 넘어가기 전에 자금을 모아 모든 카테고리 1벌씩 구매해 두세요.",
            en: "Akiyama's Hostess Maker has a Catalog Service — collect at least one outfit from every category before his part ends. Once Saejima's part starts the catalog locks, so finish buying while you still have access.",
          },
        },
      ],
    },
    {
      chapter: 2,
      title: { ko: "공통 — 난이도 함정", en: "Common — difficulty trap" },
      items: [
        {
          kind: "missable",
          title: { ko: "「불굴의 사나이」— 이지 모드 권유 거절", en: "'Indomitable' — refuse the easy-mode prompt" },
          when: { ko: "초중반 사망 누적 시", en: "After a few story losses" },
          body: {
            ko: "스토리 전투에서 여러 번 패배하면 「Easy로 변경하시겠습니까?」 팝업이 뜹니다. 「예」를 선택하면 트로피가 영구 잠금되니 반드시 「아니오」.",
            en: "Lose a few story fights and the game offers to drop you to Easy. Pick 'Yes' and the trophy is locked forever — always select 'No'.",
          },
        },
      ],
    },
    {
      chapter: 1,
      title: { ko: "각 캐릭터 장 윈도우", en: "Per-character chapter windows" },
      items: [
        {
          kind: "recommended",
          title: { ko: "서브스토리는 해당 캐릭터 파트에서 정리", en: "Clear substories inside each character's part" },
          when: { ko: "각 파트 종료 전", en: "Before each part ends" },
          body: {
            ko: "야쿠자 4는 아키야마 → 사에지마 → 타니무라 → 키류 순으로 주인공이 바뀌며, 일부 서브스토리는 해당 주인공 파트가 끝나면 메인 플레이에선 잠깁니다(프리미엄 어드벤처에서만 회수). 파트별 정리가 핵심.",
            en: "Yakuza 4 hands you Akiyama → Saejima → Tanimura → Kiryu in sequence. Some character-bound substories shut for the main run when their part ends — only Premium Adventure picks them back up. Clear within each part.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Yakuza 5 Remastered
  // ──────────────────────────────────────────────────────────────
  1105510: [
    {
      chapter: 2,
      title: { ko: "사에지마 편 — 사냥꾼", en: "Part 2 — Saejima: Hunter" },
      items: [
        {
          kind: "missable",
          title: { ko: "야마오로시 사냥 — 사에지마 한정 서브스토리", en: "'Hunter and Killer' — defeat Yama-oroshi" },
          when: { ko: "사에지마 파트 종료 전", en: "Before Saejima's part wraps" },
          body: {
            ko: "사에지마 장 동안 사냥꾼 서브스토리를 끝까지 진행해 야마오로시를 잡아야 합니다. 장 진행으로 사에지마에서 다른 주인공으로 넘어가면 메인 플레이에선 잠김.",
            en: "Run the Hunter sideline to completion and bring down Yama-oroshi during Saejima's chapters. Once the story shifts off Saejima, the main-run window is gone.",
          },
        },
      ],
    },
    {
      chapter: 3,
      title: { ko: "하루카 편 — 아이돌의 길", en: "Part 3 — Haruka: Road to Fame" },
      items: [
        {
          kind: "missable",
          title: { ko: "「프린세스는 너」— 프린세스 리그 우승", en: "'You're the Princess' — win the Princess League" },
          when: { ko: "하루카 파트 / 피날레 4장 전", en: "Haruka's part — before Finale Ch.4" },
          body: {
            ko: "더 로드 투 페임을 끝까지 완주해 프린세스 리그 결승을 우승. 피날레 4장에서 하루카가 아이돌을 그만두면 트로피와 100% 카운트가 동시에 영구 잠금됩니다.",
            en: "Run 'The Road to Fame' to completion and take the Princess League finals. Quit being an idol in Finale Ch.4 and both the trophy and the 100% counter lock together.",
          },
        },
        {
          kind: "missable",
          title: { ko: "「인기 아이돌」— 모든 잡 종류 체험", en: "'Trendy Idol' — sample every job type" },
          when: { ko: "하루카 파트", en: "Haruka's part" },
          body: {
            ko: "더 로드 투 페임에서 등장하는 잡(촬영·라디오·인터뷰 등)을 전 종류 한 번씩 수락. 하루카 장를 닫고 나면 메인 라인에선 다시 받을 수 없습니다.",
            en: "Accept every job type that appears in 'The Road to Fame' (photoshoot, radio, interview, etc.) at least once. Close out Haruka's chapter and the menu won't surface them again on the main save.",
          },
        },
      ],
    },
    {
      chapter: 4,
      title: { ko: "시나다 편 — 야구장의 그림자", en: "Part 4 — Shinada: Baseball Shadow" },
      items: [
        {
          kind: "missable",
          title: { ko: "「날려버린 남자」— 시나다 야구 사이드 미션 10회", en: "'Big Hitter' — clear 10 of Shinada's baseball sub-missions" },
          when: { ko: "시나다 파트 종료 전", en: "Before Shinada's part ends" },
          body: {
            ko: "시나다 장에서만 등장하는 야구장 사이드 미션을 10개 이상 클리어. 일부 미션은 재도전이 불가능한 1회성이므로 받자마자 처리하세요.",
            en: "Clear 10+ of the baseball-cage sub-missions that only show up in Shinada's chapters. A few are one-shot with no retry, so take them as they appear.",
          },
        },
      ],
    },
    {
      chapter: 5,
      title: { ko: "피날레 — Hall of Famer", en: "Finale — Hall of Famer" },
      items: [
        {
          kind: "missable",
          title: { ko: "「전당 입성 플레이어」— 100% 완료 (하루카 종속)", en: "'Hall of Famer' — full 100% (gated on Haruka)" },
          when: { ko: "피날레 4장 전", en: "Before Finale Ch.4" },
          body: {
            ko: "100% 카운트의 상당 부분이 하루카 트랙(아이돌·댄스·잡)에 묶여 있어 피날레 4장 시점에 하루카 콘텐츠가 끝나 있어야 합니다. 또한 카미야마 워크스 제작용 일부 재료는 1회 한정이므로 함부로 판매·소비 금지.",
            en: "Big chunks of the 100% list run through Haruka's idol/dance/jobs track, so finish them before Finale Ch.4. Several Kamiyama Works crafting mats are one-per-run too — don't sell or burn them casually.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Yakuza 6: The Song of Life
  // ──────────────────────────────────────────────────────────────
  1388590: [
    {
      chapter: 3,
      title: { ko: "하루토와의 시간", en: "Caring for Haruto" },
      items: [
        {
          kind: "missable",
          title: { ko: "「댄들링 드래곤」— 하루토 달래기 미니게임", en: "'Dandling Dragon' — soothe Haruto" },
          when: { ko: "3장 한정", en: "Chapter 3 only" },
          body: {
            ko: "3장에서 키류가 하루토를 돌보는 동안 등장하는 달래기 미니게임을 모두 성공시켜 만족도 게이지를 채워야 합니다. 3장이 지나면 미니게임 자체가 재등장하지 않으므로 영구 잠금 — 시작 전 별도 세이브 권장.",
            en: "During Kiryu's babysitting stretch in Chapter 3, clear every soothing minigame so Haruto's satisfaction bar fills. The minigame doesn't return after Chapter 3, so it's the only window — drop a manual save before you start.",
          },
        },
      ],
    },
    {
      chapter: 4,
      title: { ko: "온오프라인 정리", en: "Cleanup roadmap" },
      items: [
        {
          kind: "anytime",
          title: { ko: "댄들링 드래곤 외엔 영구 미스 없음", en: "Nothing else is permanently missable" },
          when: { ko: "엔딩 이후", en: "Post-credits" },
          body: {
            ko: "야쿠자 6는 댄들링 드래곤을 제외하면 모든 서브스토리·미니게임·100% 항목을 프리미엄 어드벤처에서 정리할 수 있어 시리즈 중에서 가장 너그럽습니다.",
            en: "Aside from Dandling Dragon, every substory, minigame, and 100% checkmark in Yakuza 6 is reachable in Premium Adventure — the most forgiving entry in the series.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Yakuza: Like a Dragon — no missable trophies
  // ──────────────────────────────────────────────────────────────
  1235140: [
    {
      chapter: 1,
      title: { ko: "이세자키 이진초 출발", en: "Departure from Ijincho" },
      items: [
        {
          kind: "anytime",
          title: { ko: "영구 잠금 트로피 없음", en: "No permanently missable trophies" },
          when: { ko: "전체 플레이", en: "Entire playthrough" },
          body: {
            ko: "용과 같이 7은 서브스토리·미니게임 어느 것도 장 잠금이 없습니다. 모든 항목을 프리미엄 어드벤처에서 회수 가능 — 자유 진행 후 마지막에 정리해도 됩니다.",
            en: "Yakuza: Like a Dragon has no chapter-locked substories or minigames. Everything is reachable in Premium Adventure, so you can play freely and mop up at the end.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "「주물주물 마스터」·「드래곤 카트 마스터」— 15장 이후 라이벌 레이스", en: "'Honk-Honk Hero' / 'Pop the Cork' — Chapter 15+ rival races" },
          when: { ko: "15장 진입 후", en: "After Chapter 15 opens" },
          body: {
            ko: "마지막 두 라이벌 레이스는 15장부터 해금되므로 그 전엔 어떤 카트 트로피도 완료 불가. 15장에 도달하면 우선순위로 처리하세요.",
            en: "The final two rival races only unlock in Chapter 15, so neither kart trophy can be finished before then. Once you reach Ch.15, push them up the priority list.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "잡 마스터·인연 미리 진행", en: "Raise Jobs and Bonds early" },
          when: { ko: "이진초 자유 진행", en: "Free roam in Ijincho" },
          body: {
            ko: "직업 마스터·인연 트로피는 그라인드 시간이 많이 소요되므로 메인 진행과 병행해야 효율적입니다. 엔딩 후엔 적이 강해져 레벨링이 더 길어집니다.",
            en: "Job Master and Bond trophies are the longest grinds — run them alongside the main story for pacing. Post-game enemies hit harder, so late-stage levelling drags.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Like a Dragon Gaiden — no missable trophies
  // ──────────────────────────────────────────────────────────────
  2375550: [
    {
      chapter: 1,
      title: { ko: "조료의 그림자", en: "Joryu's Shadow" },
      items: [
        {
          kind: "anytime",
          title: { ko: "영구 잠금 트로피 없음", en: "No permanently missable trophies" },
          when: { ko: "전체 플레이", en: "Entire playthrough" },
          body: {
            ko: "「가이덴」(외전)은 짧은 외전으로 영구 미스 요소가 없습니다. 엔딩 후에도 자유롭게 카무로초·소텐보리·콜로세움을 재방문해 모든 사이드 컨텐츠를 정리할 수 있습니다.",
            en: "Gaiden is a short spin-off with zero permanent missables. Even after the credits you can hop back into Kamurocho, Sotenbori, and the Coliseum to finish every side activity.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "아카메 네트워크 의뢰 병행", en: "Work Akame Network requests as you go" },
          when: { ko: "아카메 접촉 직후", en: "Right after meeting Akame" },
          body: {
            ko: "아카메 네트워크 의뢰는 양이 많고 다른 트로피(콜로세움 영입 인원, 시설 해금)와 맞물려 있으니 장 진행과 함께 꾸준히 처리하는 편이 효율적입니다.",
            en: "Akame Network requests are numerous and feed other trophies (Coliseum recruits, facility unlocks). Spread them across chapters rather than dumping everything to the end.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Like a Dragon: Infinite Wealth — no missable trophies
  // ──────────────────────────────────────────────────────────────
  2072450: [
    {
      chapter: 1,
      title: { ko: "호놀룰루 도착", en: "Arrival in Honolulu" },
      items: [
        {
          kind: "anytime",
          title: { ko: "영구 잠금 트로피 없음 — 포인트 오브 노 리턴 무시 가능", en: "No permanently missable trophies — ignore the Point of No Return prompt" },
          when: { ko: "전체 플레이", en: "Entire playthrough" },
          body: {
            ko: "피날레 장의 엄중한 「포인트 오브 노 리턴」 경고에도 불구하고 엔딩 후 모든 서브스토리·미니게임·도지마 드링크 링크·수지몬 등을 프리미엄 어드벤처에서 마저 정리할 수 있습니다.",
            en: "Despite the stern 'Point of No Return' warning before the finale, Premium Adventure still lets you finish every substory, minigame, Dondoko Island task, Sujimon roster, and bond after the credits.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "돈도코 섬 일찍 시작", en: "Open Dondoko Island as early as possible" },
          when: { ko: "5장 해금 직후", en: "Right after Ch.5 unlocks it" },
          body: {
            ko: "돈도코 섬과 수지몬 배틀은 별도 진행도가 있어 일찍 시작할수록 자원이 누적되어 100% 정리가 수월합니다.",
            en: "Dondoko Island and Sujimon Battle run on their own progression curves — start them right after they unlock so resources stack up before the post-game cleanup.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Like a Dragon: Pirate Yakuza in Hawaii — no missable trophies
  // ──────────────────────────────────────────────────────────────
  3061810: [
    {
      chapter: 1,
      title: { ko: "해적 마지마", en: "Pirate Majima" },
      items: [
        {
          kind: "anytime",
          title: { ko: "영구 잠금 트로피 없음", en: "No permanently missable trophies" },
          when: { ko: "전체 플레이", en: "Entire playthrough" },
          body: {
            ko: "「Pirate Yakuza in Hawaii」(파이러츠 인 하와이)는 모든 트로피가 엔딩 이후 프리미엄 어드벤처에서 회수 가능합니다. 시리즈 중에서도 가장 너그러운 100% 라인 중 하나.",
            en: "Every trophy in Pirate Yakuza in Hawaii is recoverable in Premium Adventure. One of the easiest 100% runs in the entire RGG catalog.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "데빌 플래그 → 파이리츠 콜로세움 순서", en: "Devil Flags first, then Pirates Coliseum" },
          when: { ko: "스토리 진행 중 병행", en: "Alongside the main story" },
          body: {
            ko: "파이리츠 콜로세움의 후반 매치는 데빌 플래그 서브스토리 완료 후 해금되므로 먼저 바다에서 깃발을 정리하면 콜로세움 정리가 한결 빨라집니다.",
            en: "The later Pirates Coliseum matches only open after the Devil Flags side story wraps. Clean the seas first and Coliseum cleanup flows much faster.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Like a Dragon: Ishin! — no missable trophies
  // ──────────────────────────────────────────────────────────────
  1805480: [
    {
      chapter: 1,
      title: { ko: "토사에서 교토로", en: "Tosa to Kyoto" },
      items: [
        {
          kind: "anytime",
          title: { ko: "영구 잠금 트로피 없음", en: "No permanently missable trophies" },
          when: { ko: "전체 플레이", en: "Entire playthrough" },
          body: {
            ko: "「이신!」(유신)의 모든 트로피는 프리미엄 어드벤처에서 회수 가능. 2장·4·6·8·10·12·14 클리어와 토사 재방문이 스토리 트로피 라인.",
            en: "Every Ishin! trophy is reachable in Premium Adventure. The story-trophy line just tracks clearing chapters 2, 4, 6, 8, 10, 12, 14 and setting foot in Tosa.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "「Legend」난이도 — 14장 직전 전환", en: "'Legend' difficulty — flip just before Ch.14" },
          when: { ko: "피날레 전 신센구미 막사", en: "Shinsengumi barracks before the finale" },
          body: {
            ko: "전 장를 낮은 난이도로 진행한 뒤, 14장(피날레)에서 토사로 향하기 전 신센구미 막사에서 오키타와 대화해 Legend로 전환하면 단일 회차로 Legend 트로피를 획득할 수 있습니다.",
            en: "Play the whole game on a comfortable difficulty, then before heading back to Tosa in Ch.14 talk to Okita at the Shinsengumi barracks and switch to Legend. Bags the Legend trophy in one playthrough.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "트루퍼 카드 일찍 모으기", en: "Build the Trooper Card roster early" },
          when: { ko: "어나더 라이프 해금 직후", en: "Once Another Life opens" },
          body: {
            ko: "강력한 트루퍼 카드 조합은 후반 전투 부담을 크게 줄여줍니다. 어나더 라이프와 가챠를 일찍 시작해 카드를 누적하세요.",
            en: "Strong Trooper Card builds carry late-game combat. Start Another Life and the gacha loop early so the deck stacks up.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Judgment
  // ──────────────────────────────────────────────────────────────
  2058180: [
    {
      chapter: 2,
      title: { ko: "라망 카지노", en: "L'Amant Casino" },
      items: [
        {
          kind: "missable",
          title: { ko: "「이면 보고서 1 — 배로 늘려 줄게」— 카지노 칩 두 배 만들기", en: "'I'll Make it Double' — double the casino chips" },
          when: { ko: "2장 스토리 중 카지노 진입 시", en: "First story visit to the casino in Ch.2" },
          body: {
            ko: "스토리 진행 중 라망에서 300칩이 지급됩니다. 그 자리에서 도박 미니게임으로 600칩 이상으로 만들어야 트로피 발동. 진입 시점에 별도 세이브를 만들어두고 재시도 권장.",
            en: "L'Amant hands you 300 chips during the story. Hit the casino games then and there to push past 600 before the scene advances. Make a manual save on entry so you can retry.",
          },
        },
      ],
    },
    {
      chapter: 5,
      title: { ko: "회상 — 테라사와 병실", en: "Flashback — Terasawa's room" },
      items: [
        {
          kind: "missable",
          title: { ko: "「이면 보고서 2 — 꼼꼼하게 체크」— 환자 회상 수색", en: "'Way Too Thorough!' — flashback investigation" },
          when: { ko: "5장 회상 시퀀스", en: "Ch.5 flashback sequence" },
          body: {
            ko: "병실 1인칭 수색에서 간호사의 얼굴·가슴·엉덩이 세 지점을 모두 관찰해야 트로피 발동. 한 번에 끝내지 않으면 회상 종료와 동시에 영구 잠금.",
            en: "In the first-person search, examine the nurse's face, chest, and rear — all three spots in one go. The flashback ends without flagging if you skip any of them.",
          },
        },
      ],
    },
    {
      chapter: 7,
      title: { ko: "리메라이트 호스티스 잠입", en: "Limelight hostess infiltration" },
      items: [
        {
          kind: "missable",
          title: { ko: "「이면 보고서 3 — 숨겨진 재능」— 호스티스 대화 무실수", en: "'The Art of Conversation' — perfect hostess chat" },
          when: { ko: "7장 위장 시퀀스", en: "Ch.7 disguise sequence" },
          body: {
            ko: "여성 캐릭터로 위장해 손님 접대 미니게임 진행. 모든 선택지를 실수 없이 클리어해야 트로피 발동. 장 진행 시 영구 잠금.",
            en: "Playing the female disguise, work the hostess-chat minigame without a single wrong choice. The trophy locks the moment Ch.7 moves on.",
          },
        },
      ],
    },
    {
      chapter: 8,
      title: { ko: "도박장 잠입", en: "Gambling Hall infiltration" },
      items: [
        {
          kind: "missable",
          title: { ko: "「이면 보고서 4 — 암호는」— 비밀번호 1발 통과", en: "'Professional Password Presenter' — nail the password first try" },
          when: { ko: "8장 입구 검문", en: "Ch.8 hall entrance check" },
          body: {
            ko: "비밀 도박장 입구에서 비밀번호를 처음 시도에 정확히 입력. 진입 직전 세이브 후 도전 권장.",
            en: "At the hidden gambling hall entrance, get the password right on your very first attempt. Save right before the door and retry as needed.",
          },
        },
      ],
    },
    {
      chapter: 12,
      title: { ko: "스기우라 구출", en: "Saving Sugiura" },
      items: [
        {
          kind: "missable",
          title: { ko: "「이면 보고서 5 — 영웅은 늦게 나타난다」— 3분 타이머 10초 남기고 처치", en: "'Hung Jury' — finish with under 10 seconds" },
          when: { ko: "12장 폐건물", en: "Ch.12 abandoned building" },
          body: {
            ko: "스기우라가 잡힌 방에 도착하면 3분 타이머가 시작됩니다. 10초가 남을 때까지 기다리다가 적 두 명을 처치해야 트로피 발동. 장 종료 시 영구 잠금.",
            en: "When you reach the room where Sugiura's held, a three-minute timer starts. Stall until the clock drops below 10 seconds, then drop the two thugs. Past the chapter, gone.",
          },
        },
      ],
    },
    {
      chapter: 13,
      title: { ko: "피날레 — 법정", en: "Finale — courtroom" },
      items: [
        {
          kind: "missable",
          title: { ko: "「이면 보고서 6 — 이것이 증거다」— 증거 제출 무실수", en: "'The Final Nail' — flawless evidence presentation" },
          when: { ko: "피날레 법정 시퀀스", en: "Finale court sequence" },
          body: {
            ko: "최종 법정 시퀀스에서 모든 증거를 첫 시도에 정확히 제출해야 합니다. 1회 실수도 트로피 영구 잠금 — 시작 전 세이브 필수.",
            en: "Hand the judge the right evidence on the first try at every prompt. One slip-up locks the trophy — save before the sequence opens.",
          },
        },
        {
          kind: "missable",
          title: { ko: "「길고양이 서치」— 길고양이 14마리 (전 장)", en: "'Oh Look, a Cat!' — all 14 stray cats" },
          when: { ko: "전 장의 액티브 서치 구간", en: "Every Active Search across the story" },
          body: {
            ko: "1인칭 액티브 서치 도중 「야옹」 소리가 들리면 화면을 돌려 길고양이를 발견해야 합니다. 장별 등장 위치가 고정되어 있고 모두 1회성 — 1회차에 누락하면 신규 회차 필요.",
            en: "When you hear a faint meow during a first-person Active Search, pan to spot the cat. Each one is fixed to a chapter scene and one-shot — miss any in a run and you'll need a fresh playthrough.",
          },
        },
      ],
    },
  ],

  // ──────────────────────────────────────────────────────────────
  // Lost Judgment — no missable trophies
  // ──────────────────────────────────────────────────────────────
  2058190: [
    {
      chapter: 1,
      title: { ko: "츠루노 고등학교 잠입", en: "Infiltrating Seiryo High" },
      items: [
        {
          kind: "anytime",
          title: { ko: "영구 잠금 트로피 없음", en: "No permanently missable trophies" },
          when: { ko: "전체 플레이", en: "Entire playthrough" },
          body: {
            ko: "전작 「Judgment」(저지먼트)의 놓치기 쉬운 요소(고양이·QTE·증거 등)는 「Lost Judgment」(로스트 저지먼트)에서 모두 제거되었습니다. 청춘 드라마·서브스토리·미니게임 전부 엔딩 이후에도 회수 가능.",
            en: "Lost Judgment removes every missable hazard from the first game — cats, QTEs, evidence prompts. School Stories, side cases, and minigames all stay open after the credits.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "청춘 드라마는 중반부터 병행", en: "Push School Stories from mid-game on" },
          when: { ko: "3장–8", en: "Around Chapters 3–8" },
          body: {
            ko: "9개의 청춘 드라마 모두 시간 투자량이 큽니다. 3장 무렵부터 한두 개씩 병행하면 엔딩 후 타운고·VR 스토어와 함께 몰리지 않아 페이스가 좋습니다.",
            en: "All nine School Stories eat real hours. Start chipping at them from around Chapter 3 so they don't pile up with TownGo and VR Store cleanup post-credits.",
          },
        },
        {
          kind: "recommended",
          title: { ko: "탐정 견 & 드론 레이스 잊지 말기", en: "Don't forget Detective Dog and drone races" },
          when: { ko: "이진초 진입 후", en: "After arriving in Ijincho" },
          body: {
            ko: "두 미니게임은 메인 동선과 떨어져 있어 잊기 쉽지만 100% 정리에 필수입니다. 이진초 도착 직후 한 번 둘러보고 진행률을 시작해두세요.",
            en: "Both minigames sit off the main path and are easy to forget, but they're essential for the 100% list. Loop through them once Ijincho opens so the meters start ticking.",
          },
        },
      ],
    },
  ],
};
