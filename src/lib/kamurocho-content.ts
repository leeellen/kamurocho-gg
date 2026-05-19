export type LocalizedText = {
  ko: string;
  en: string;
};

export type CuratedGame = {
  appId: number;
  slug: string;
  arc: "kiryu" | "ichiban" | "judgment";
  year: number;
  title: LocalizedText;
  summary: LocalizedText;
  lead: LocalizedText;
  platforms: string[];
  estimatedHours: string;
  difficulty: number;
  missableCount: number;
};

export type MissableItem = {
  kind: "missable" | "recommended" | "anytime";
  title: LocalizedText;
  when: LocalizedText;
  body: LocalizedText;
};

export type ChapterMissable = {
  chapter: number;
  title: LocalizedText;
  items: MissableItem[];
};

export type PlayOrderEntry = {
  slug: string;
  recommended: boolean;
  reason: LocalizedText;
};

export const CURATED_GAMES: CuratedGame[] = [
  {
    appId: 2988580,
    slug: "yakuza-0",
    arc: "kiryu",
    year: 1988,
    title: { ko: "용과 같이 0 Director's Cut", en: "Yakuza 0 Director's Cut" },
    summary: {
      ko: "시리즈 입문과 공략 동선을 동시에 잡기 가장 좋은 프리퀄.",
      en: "The cleanest starting point in the series and the easiest place to learn its completion rhythm.",
    },
    lead: { ko: "키류 / 마지마", en: "Kiryu / Majima" },
    platforms: ["PC", "Steam"],
    estimatedHours: "35h",
    difficulty: 3,
    missableCount: 7,
  },
  {
    appId: 3717330,
    slug: "yakuza-kiwami",
    arc: "kiryu",
    year: 1995,
    title: { ko: "용과 같이 극", en: "Yakuza Kiwami" },
    summary: {
      ko: "0편에서 쌓인 관계를 원작 1편 리메이크로 바로 이어받는 핵심 축.",
      en: "The direct continuation of 0 and the modernized version of the original Yakuza 1.",
    },
    lead: { ko: "키류", en: "Kiryu" },
    platforms: ["PC", "Steam"],
    estimatedHours: "30h",
    difficulty: 3,
    missableCount: 4,
  },
  {
    appId: 3717340,
    slug: "yakuza-kiwami-2",
    arc: "kiryu",
    year: 2006,
    title: { ko: "용과 같이 극2", en: "Yakuza Kiwami 2" },
    summary: {
      ko: "드래곤 엔진 초반부의 감각과 시리즈 대표 인기 에피소드를 함께 보여줍니다.",
      en: "A fan-favorite sequel and one of the strongest showcases of the early Dragon Engine era.",
    },
    lead: { ko: "키류", en: "Kiryu" },
    platforms: ["PC", "Steam"],
    estimatedHours: "40h",
    difficulty: 3,
    missableCount: 6,
  },
  {
    appId: 1088710,
    slug: "yakuza-3",
    arc: "kiryu",
    year: 2009,
    title: { ko: "용과 같이 3", en: "Yakuza 3 Remastered" },
    summary: {
      ko: "구식 감각이 남아 있지만 키류 아크 서사에는 빠질 수 없는 전환점입니다.",
      en: "Older and rougher, but essential for understanding where Kiryu's later arc is headed.",
    },
    lead: { ko: "키류", en: "Kiryu" },
    platforms: ["PC", "Steam"],
    estimatedHours: "45h",
    difficulty: 4,
    missableCount: 9,
  },
  {
    appId: 1105500,
    slug: "yakuza-4",
    arc: "kiryu",
    year: 2010,
    title: { ko: "용과 같이 4", en: "Yakuza 4 Remastered" },
    summary: {
      ko: "4인 주인공 구조가 본격적으로 시작되는 구간.",
      en: "The point where RGG's multi-protagonist structure fully takes over.",
    },
    lead: { ko: "키류 외 3명", en: "Kiryu + 3" },
    platforms: ["PC", "Steam"],
    estimatedHours: "40h",
    difficulty: 4,
    missableCount: 12,
  },
  {
    appId: 1105510,
    slug: "yakuza-5",
    arc: "kiryu",
    year: 2012,
    title: { ko: "용과 같이 5", en: "Yakuza 5 Remastered" },
    summary: {
      ko: "분량과 사이드 콘텐츠 모두 시리즈 최고 수준인 장기전.",
      en: "A maximalist entry with one of the largest completion footprints in the series.",
    },
    lead: { ko: "키류 외 4명", en: "Kiryu + 4" },
    platforms: ["PC", "Steam"],
    estimatedHours: "70h",
    difficulty: 5,
    missableCount: 14,
  },
  {
    appId: 1388590,
    slug: "yakuza-6",
    arc: "kiryu",
    year: 2016,
    title: { ko: "용과 같이 6", en: "Yakuza 6: The Song of Life" },
    summary: {
      ko: "키류 사가의 마지막 장을 정리하는 작품.",
      en: "The closing chapter of Kiryu's mainline story.",
    },
    lead: { ko: "키류", en: "Kiryu" },
    platforms: ["PC", "Steam"],
    estimatedHours: "35h",
    difficulty: 3,
    missableCount: 5,
  },
  {
    appId: 2375550,
    slug: "like-a-dragon-gaiden",
    arc: "kiryu",
    year: 2023,
    title: { ko: "용과 같이 7 외전: 이름을 지운 자", en: "Like a Dragon Gaiden: The Man Who Erased His Name" },
    summary: {
      ko: "키류의 공백기를 직접 메우며 6편 이후와 8편 직전까지 연결하는 외전.",
      en: "Kiryu's missing-years side story that bridges Yakuza 6 to the lead-in for Infinite Wealth.",
    },
    lead: { ko: "키류", en: "Kiryu" },
    platforms: ["PC", "Steam"],
    estimatedHours: "30h",
    difficulty: 3,
    missableCount: 5,
  },
  {
    appId: 1235140,
    slug: "yakuza-like-a-dragon",
    arc: "ichiban",
    year: 2019,
    title: { ko: "용과 같이 7", en: "Yakuza: Like a Dragon" },
    summary: {
      ko: "턴제 RPG로 완전히 넘어가며 새 주인공 체제를 여는 작품.",
      en: "The hard pivot to turn-based combat and Ichiban's true starting point.",
    },
    lead: { ko: "이치반", en: "Ichiban" },
    platforms: ["PC", "Steam"],
    estimatedHours: "55h",
    difficulty: 3,
    missableCount: 8,
  },
  {
    appId: 2058180,
    slug: "judgment",
    arc: "judgment",
    year: 2018,
    title: { ko: "저지먼트", en: "Judgment" },
    summary: {
      ko: "탐정 구조와 도시 탐사가 전면으로 나오는 스핀오프 축의 시작.",
      en: "The detective-side spinoff where investigation and city activity routing become central.",
    },
    lead: { ko: "야가미", en: "Yagami" },
    platforms: ["PC", "Steam"],
    estimatedHours: "40h",
    difficulty: 3,
    missableCount: 4,
  },
  {
    appId: 2058190,
    slug: "lost-judgment",
    arc: "judgment",
    year: 2021,
    title: { ko: "로스트 저지먼트", en: "Lost Judgment" },
    summary: {
      ko: "청춘 드라마, TownGo, 카이토 파일까지 완주 루트가 크게 확장된 후속작.",
      en: "A denser sequel with School Stories, TownGo, and a much wider cleanup route.",
    },
    lead: { ko: "야가미", en: "Yagami" },
    platforms: ["PC", "Steam"],
    estimatedHours: "55h",
    difficulty: 4,
    missableCount: 7,
  },
];

export const PLAY_ORDER: Record<"new" | "chronological", PlayOrderEntry[]> = {
  new: [
    {
      slug: "yakuza-0",
      recommended: true,
      reason: {
        ko: "프리퀄이자 인물 관계 설명이 가장 자연스럽습니다.",
        en: "The prequel and still the cleanest point to learn the cast and tone.",
      },
    },
    {
      slug: "yakuza-kiwami",
      recommended: true,
      reason: {
        ko: "0편에서 쌓인 감정을 바로 이어받는 리메이크입니다.",
        en: "The best immediate follow-up because it pays off 0's setup directly.",
      },
    },
    {
      slug: "yakuza-kiwami-2",
      recommended: true,
      reason: {
        ko: "구식 리마스터 구간에 들어가기 전 템포가 좋습니다.",
        en: "A strong modern stop before the older remasters begin to show their age.",
      },
    },
    {
      slug: "yakuza-3",
      recommended: false,
      reason: {
        ko: "전투 감각이 낡았지만 이후 서사 이해에 중요합니다.",
        en: "A dated combat feel, but story context here matters later.",
      },
    },
    {
      slug: "yakuza-4",
      recommended: false,
      reason: {
        ko: "멀티 주인공 구성이 본격화됩니다.",
        en: "This is where the multi-lead structure fully arrives.",
      },
    },
    {
      slug: "yakuza-5",
      recommended: true,
      reason: {
        ko: "분량은 길지만 키류 아크의 정서적 정점입니다.",
        en: "Huge, but the emotional peak of the Kiryu arc.",
      },
    },
    {
      slug: "yakuza-6",
      recommended: true,
      reason: {
        ko: "키류 사가를 정리하는 마무리입니다.",
        en: "The capstone that closes Kiryu's mainline saga.",
      },
    },
    {
      slug: "yakuza-like-a-dragon",
      recommended: true,
      reason: {
        ko: "새 주인공 체제와 RPG 시스템이 완전히 시작됩니다.",
        en: "The clean start of Ichiban's era and the RPG-style structure.",
      },
    },
    {
      slug: "like-a-dragon-gaiden",
      recommended: true,
      reason: {
        ko: "7편 이후에 보면 키류 쪽 공백기가 가장 자연스럽게 이어집니다.",
        en: "It lands best after Like a Dragon, when Kiryu's side of the timeline can pay off cleanly.",
      },
    },
    {
      slug: "judgment",
      recommended: true,
      reason: {
        ko: "메인 라인과 별도로 즐기기 좋은 탐정 축의 입문점입니다.",
        en: "The best entry point for the detective-side spin-off line.",
      },
    },
    {
      slug: "lost-judgment",
      recommended: true,
      reason: {
        ko: "전작 이해 후 들어가면 훨씬 정교하게 읽히는 후속작입니다.",
        en: "A much richer sequel once the first Judgment's cast and systems are familiar.",
      },
    },
  ],
  chronological: CURATED_GAMES
    .slice()
    .sort((a, b) => a.year - b.year)
    .map((game) => ({
      slug: game.slug,
      recommended: game.arc !== "kiryu" || game.slug !== "yakuza-3",
      reason: {
        ko: `스토리 시점이 ${game.year}년인 순서입니다.`,
        en: `Ordered by the story era starting in ${game.year}.`,
      },
    })),
};

export const MISSABLES: Partial<Record<number, ChapterMissable[]>> = {
  2988580: [
    {
      chapter: 2,
      title: { ko: "복수의 칼", en: "The Real Estate Broker" },
      items: [
        {
          kind: "missable",
          title: { ko: "미디어 메가 한정 잡지", en: "Media Mega rotating stock" },
          when: { ko: "챕터 종료 전", en: "Before chapter end" },
          body: {
            ko: "챕터 2에서만 사는 잡지 4종입니다. 넘어가면 영구 구매 불가입니다.",
            en: "Four magazines only sold during Chapter 2. Once the chapter advances, they are gone permanently.",
          },
        },
      ],
    },
    {
      chapter: 3,
      title: { ko: "돈의 가치", en: "A Gilded Cage" },
      items: [
        {
          kind: "recommended",
          title: { ko: "부동산 로열 시작", en: "Start Real Estate Royale" },
          when: { ko: "구역이 열리자마자", en: "As soon as districts open" },
          body: {
            ko: "5개 구역을 늦게 열면 나중에 완료 정리에 시간이 더 걸립니다.",
            en: "If you delay all five districts, the completion cleanup becomes much longer later.",
          },
        },
        {
          kind: "anytime",
          title: { ko: "쇼기 클럽 방문", en: "Shogi Club visits" },
          when: { ko: "언제든 가능", en: "Any time" },
          body: {
            ko: "쇼기 관련 진행은 엔딩 이후에도 계속 처리할 수 있습니다.",
            en: "Shogi-related cleanup remains available after the story ends.",
          },
        },
      ],
    },
    {
      chapter: 4,
      title: { ko: "쇼와시대의 그림자", en: "A Foggy Promise" },
      items: [
        {
          kind: "missable",
          title: { ko: "미스 텔레폰 클럽 코스 #2", en: "Telephone Club route #2" },
          when: { ko: "챕터 종료 전", en: "Before chapter end" },
          body: {
            ko: "에리코 루트는 챕터 5 진입과 동시에 닫힙니다.",
            en: "Eriko's route locks out the moment you start Chapter 5.",
          },
        },
        {
          kind: "missable",
          title: { ko: "한정 헤어스타일 레오파드", en: "Leopard hairstyle" },
          when: { ko: "챕터 종료 전", en: "Before chapter end" },
          body: {
            ko: "이 챕터 한정 NPC라 뒤로 가서 다시 해결할 수 없습니다.",
            en: "The NPC is chapter-limited, so you cannot loop back later to finish it.",
          },
        },
      ],
    },
  ],
  3717330: [
    {
      chapter: 4,
      title: { ko: "카무로초 복귀 구간", en: "Return to Kamurocho" },
      items: [
        {
          kind: "recommended",
          title: { ko: "서브스토리와 메스킹 정리", en: "Front-load substories and MesuKing" },
          when: { ko: "메스킹 해금 직후", en: "Right after MesuKing opens" },
          body: {
            ko: "취미 루프를 너무 늦게 미루면 드래곤 스타일 강화와 병행 정리가 꼬입니다.",
            en: "If you leave the hobby loop too late, it clashes badly with Dragon style cleanup later.",
          },
        },
        {
          kind: "missable",
          title: { ko: "메스킹 카드 한정 보스", en: "Chapter-locked MesuKing cards" },
          when: { ko: "챕터 6 진입 전", en: "Before entering Chapter 6" },
          body: {
            ko: "특정 메스킹 보스 카드는 챕터 6 이후 다시 만나기 어렵습니다. 가능하면 챕터 5에서 한 바퀴 돌리세요.",
            en: "A subset of MesuKing boss cards become inconvenient to grind after Chapter 6. Try to clear a full loop while Chapter 5 is still active.",
          },
        },
      ],
    },
    {
      chapter: 8,
      title: { ko: "최종장 진입 전", en: "Before the finale" },
      items: [
        {
          kind: "recommended",
          title: { ko: "100% 정리 시점", en: "Best cleanup window" },
          when: { ko: "마지막 챕터 직전", en: "Right before the last chapter" },
          body: {
            ko: "마지막 챕터에 들어가면 일부 서브스토리와 미니게임이 영구 잠금됩니다. 100% 정리는 챕터 9 전에 끝내세요.",
            en: "Several substories and minigames lock the moment the final chapter starts. Wrap completion before entering Chapter 9.",
          },
        },
      ],
    },
  ],
  3717340: [
    {
      chapter: 7,
      title: { ko: "소텐보리 활약 구간", en: "Sotenbori spotlight" },
      items: [
        {
          kind: "missable",
          title: { ko: "캬바쿠라 그랑프리", en: "Cabaret Club Grand Prix" },
          when: { ko: "챕터 종료 전", en: "Before chapter end" },
          body: {
            ko: "캬바쿠라 그랑프리는 챕터 7~9 동안만 진행할 수 있는 구간입니다. 미루면 엔딩 후에 다시 시작해야 합니다.",
            en: "The Cabaret Grand Prix arc is only fully playable from Chapter 7 through 9. Delay it and you'll be replaying the finale.",
          },
        },
      ],
    },
  ],
  1088710: [
    {
      chapter: 4,
      title: { ko: "오키나와 구간", en: "Okinawa stretch" },
      items: [
        {
          kind: "recommended",
          title: { ko: "오키나와 한정 서브스토리 정리", en: "Wrap Okinawa-only substories" },
          when: { ko: "도쿄 이동 전", en: "Before the move to Tokyo" },
          body: {
            ko: "오키나와에서 시작한 일부 서브스토리는 도쿄로 이동하면 진행 불가가 됩니다. 사다이마/엽서/소년원 관련 라인은 챕터 끝나기 전에 마무리하세요.",
            en: "Several Okinawa-only substories lock the moment the story moves to Tokyo. Wrap up the orphanage, postcard, and side characters there before advancing.",
          },
        },
      ],
    },
  ],
  1105500: [
    {
      chapter: 2,
      title: { ko: "아키야마 챕터 초반", en: "Akiyama opening" },
      items: [
        {
          kind: "missable",
          title: { ko: "아키야마 한정 서브스토리", en: "Akiyama-only substories" },
          when: { ko: "아키야마 파트 종료 전", en: "Before the Akiyama part ends" },
          body: {
            ko: "4편은 주인공 4인 구성으로, 각자 챕터 안에서만 진행 가능한 서브가 있습니다. 아키야마 챕터 안에 사이드를 마치세요.",
            en: "Yakuza 4 splits into four protagonist arcs and most substories only run inside the active protagonist's chapter window. Clear Akiyama's list before swapping.",
          },
        },
      ],
    },
    {
      chapter: 5,
      title: { ko: "사에지마 파트", en: "Saejima arc" },
      items: [
        {
          kind: "missable",
          title: { ko: "사에지마 한정 서브", en: "Saejima-only side content" },
          when: { ko: "탈옥 이후 챕터 종료 전", en: "Before Saejima's arc closes" },
          body: {
            ko: "사에지마 탈옥 이후 진행되는 서브와 호스티스 라인은 그의 챕터 종료와 함께 닫힙니다.",
            en: "Post-prison substories and the hostess maker tied to Saejima's chapter close out with his arc.",
          },
        },
      ],
    },
  ],
  1105510: [
    {
      chapter: 2,
      title: { ko: "키류 (나하)", en: "Kiryu — Naha" },
      items: [
        {
          kind: "missable",
          title: { ko: "택시 미션 일부", en: "Taxi missions" },
          when: { ko: "택시 운전 파트 종료 전", en: "Before the taxi arc ends" },
          body: {
            ko: "키류 택시 미션 중 일부는 그의 챕터를 떠나면 영구 잠금됩니다. 비싼 도색·터보 강화 전에 가능한 만큼 처리하세요.",
            en: "Several taxi missions become unobtainable once Kiryu leaves his chapter. Finish what you can before the expensive paint/turbo upgrades.",
          },
        },
      ],
    },
    {
      chapter: 9,
      title: { ko: "하루카 파트", en: "Haruka chapter" },
      items: [
        {
          kind: "missable",
          title: { ko: "하루카 댄스 배틀", en: "Haruka dance battles" },
          when: { ko: "댄스 파트 종료 전", en: "Before the dance arc closes" },
          body: {
            ko: "하루카의 댄스 배틀 일부는 그녀 챕터에서만 진행할 수 있습니다. 마지막 챕터 진입 전 모두 클리어하세요.",
            en: "A subset of Haruka's dance battles only run inside her chapter. Clear them before the finale begins.",
          },
        },
      ],
    },
  ],
  1388590: [
    {
      chapter: 5,
      title: { ko: "오노미치 구간", en: "Onomichi stretch" },
      items: [
        {
          kind: "missable",
          title: { ko: "오노미치 한정 서브", en: "Onomichi-only substories" },
          when: { ko: "카무로초 이동 전", en: "Before returning to Kamurocho" },
          body: {
            ko: "오노미치에서만 진행 가능한 서브와 미니게임은 카무로초로 이동하면 한동안 진행 불가. 챕터 종료 전 처리하세요.",
            en: "Several Onomichi-only substories pause when you return to Kamurocho. Wrap them before the chapter swap.",
          },
        },
      ],
    },
  ],
  1235140: [
    {
      chapter: 4,
      title: { ko: "요코하마 합류 구간", en: "Yokohama assembly" },
      items: [
        {
          kind: "recommended",
          title: { ko: "수지몬 배틀 조기 정리", en: "Front-load Sujimon battles" },
          when: { ko: "파티 합류 직후", en: "Right after the party joins" },
          body: {
            ko: "특정 수지몬은 후반부에 만나기 까다롭습니다. 챕터 4~5에서 도시를 돌며 한 차례 채워두면 후반 부담이 줄어듭니다.",
            en: "Some Sujimon become inconvenient to track later. Sweep the city during Chapters 4–5 to reduce the post-game grind.",
          },
        },
        {
          kind: "missable",
          title: { ko: "홍콩 프롤로그 한정 라인", en: "Hong Kong prologue lines" },
          when: { ko: "프롤로그 종료 전", en: "Before leaving the prologue" },
          body: {
            ko: "이치반의 18년 전 회상 구간에서만 진행 가능한 한정 컷씬과 대화가 있습니다. 다시 돌아갈 수 없으니 모두 확인하세요.",
            en: "Ichiban's prologue flashback has dialogue and scenes that never replay. Sweep them before the story timeskip.",
          },
        },
      ],
    },
  ],
  2058180: [
    {
      chapter: 6,
      title: { ko: "탐정 의뢰 구간", en: "Investigation arc" },
      items: [
        {
          kind: "missable",
          title: { ko: "탐정 의뢰 한정 분기", en: "Time-locked side cases" },
          when: { ko: "챕터 7 진입 전", en: "Before Chapter 7" },
          body: {
            ko: "탐정 의뢰 중 일부는 챕터 6에서만 의뢰판에 노출됩니다. 챕터 종료 전 사이드 목록을 한 번 훑어보세요.",
            en: "A subset of side cases only appear on the board in Chapter 6. Skim the side menu before advancing.",
          },
        },
      ],
    },
  ],
  2375550: [
    {
      chapter: 5,
      title: { ko: "주식 정리 구간", en: "Stock arc cleanup" },
      items: [
        {
          kind: "recommended",
          title: { ko: "주식 시뮬레이션 100%", en: "Stock simulator 100%" },
          when: { ko: "최종 챕터 전", en: "Before the final chapter" },
          body: {
            ko: "주식 마스터 관련 진행은 최종 챕터 진입 후에도 가능하지만, 시간 가속이 묶이는 구간이 있어 미리 정리해두는 게 안전합니다.",
            en: "Stock-master progress is still possible after the final chapter, but several time skip windows lock — finishing early is safer.",
          },
        },
      ],
    },
  ],
  2058190: [
    {
      chapter: 8,
      title: { ko: "청춘 드라마 확장 구간", en: "School Stories expansion" },
      items: [
        {
          kind: "recommended",
          title: { ko: "청춘 드라마를 중반부터 병행", en: "Work on School Stories mid-run" },
          when: { ko: "챕터 8 전후", en: "Around Chapter 8" },
          body: {
            ko: "엔딩 이후에 한꺼번에 밀면 TownGo와 스킬 정리까지 한 번에 몰립니다.",
            en: "If you postpone everything to post-game, School Stories, TownGo, and skill cleanup all stack at once.",
          },
        },
      ],
    },
  ],
};

export const RGG_APP_IDS = CURATED_GAMES.map((game) => game.appId);

export function getCuratedGameBySlug(slug: string) {
  return CURATED_GAMES.find((game) => game.slug === slug || String(game.appId) === slug) ?? null;
}
