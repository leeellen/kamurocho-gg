import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Like a Dragon Gaiden: The Man Who Erased His
// Name. Difficulty is rated for the Akame Network / completion grind, not
// casual play. Most activities are in Sotenbori and the Castle, and most only
// open up from Chapter 2 onward. Cross-referenced against community guides
// (GameFAQs/CyricZ, Gamer Guides, PowerPyx, Game Rant, Neoseeker) and videos.
export const likeADragonGaidenMinigames: MinigamesData = {
  appId: 2375550,
  intro: {
    ko: "용과 같이 7 외전은 소텐보리와 「캐슬」을 무대로 콜로세움·캐바레 클럽(실사 호스티스)·포켓 서킷이 컴플리션의 핵심입니다. 대부분의 미니게임은 챕터 2 이후에 해금되고, 다이도지 본거지의 SEGA 마크 III로 레트로 게임도 즐길 수 있습니다. 악명 높은 종목은 영상을 함께 보면 훨씬 수월합니다.",
    en: "Like a Dragon Gaiden plays out across Sotenbori and 'the Castle,' with the Coliseum, the (live-action) Cabaret Club, and Pocket Circuit anchoring completion. Most minigames open up from Chapter 2 onward, and the Daidoji hideout's SEGA Mark III lets you play retro Master System titles. The tougher ones go much smoother with the videos attached.",
  },
  minigames: [
    {
      slug: "coliseum",
      name: { ko: "콜로세움 (투기장 — 4대 천왕)", en: "The Coliseum (4 Kings)" },
      category: { ko: "전투", en: "Combat" },
      difficulty: 4,
      location: { ko: "캐슬 콜로세움 (챕터 4에 본격 해금)", en: "The Coliseum at the Castle (opens up fully in Chapter 4)" },
      summary: {
        ko: "조류(키류)가 무기·악세서리를 들고 1대1, 팀 배틀, 서바이벌, 무기전 등 다양한 규칙으로 싸우는 투기장. 브론즈→실버→골드를 거쳐 플래티넘 랭크에 도달하면 「4대 천왕」 서브스토리가 열립니다.",
        en: "Joryu (Kiryu) fights through 1-on-1s, team battles, survival, and weapon matches in the arena, using gear and accessories. Clearing Bronze, Silver, and Gold to hit Platinum Rank unlocks the 'Four Kings of the Coliseum' substory.",
      },
      howTo: [
        { ko: "콜로세움 매치 중에는 회복 아이템을 쓸 수 없습니다. 능력치(체력·공격)를 먼저 강화하고 입장하세요.", en: "You can't use healing items inside Coliseum matches — upgrade your Health and Attack abilities before entering." },
        { ko: "에이전트 스타일의 거미줄·전기 디바이스로 적을 묶어두고, 팀 배틀에서는 광역기로 다수를 한 번에 정리하세요.", en: "Use the Agent style's wire/electric devices to lock enemies down, and lean on AoE moves to thin out crowds in team battles." },
        { ko: "4대 천왕은 아이템 금지 보스전입니다. 야쿠자 스타일의 강력한 콤보와 가드·회피 타이밍을 숙지하고 도전하세요.", en: "The Four Kings are item-banned boss fights — go in with the Yakuza style's heavy combos and clean guard/dodge timing." },
      ],
      videos: [
        { title: { ko: "콜로세움 플래티넘 랭크 + 4대 천왕 가이드", en: "Coliseum: reaching Platinum Rank & the Four Kings" }, url: YT("fPj_pyIz5Zg") },
        { title: { ko: "4대 천왕 4연전 공략", en: "Four Kings — all four fights" }, url: YT("I_zzBl35Cpc") },
      ],
    },
    {
      slug: "cabaret-heavenly",
      name: { ko: "캐바레 클럽 — 클럽 헤븐리 (실사 호스티스)", en: "Cabaret Club — Club Heavenly (live-action hostesses)" },
      category: { ko: "캐바레 클럽", en: "Cabaret Club" },
      difficulty: 3,
      location: { ko: "클럽 헤븐리, 소텐보리 E 쇼후쿠초", en: "Club Heavenly, E Shofukucho, Sotenbori" },
      summary: {
        ko: "호스티스가 실사 영상으로 등장하는 캐바레 클럽. 드링크 주문 → 대화 선택지 응답 → 선물로 호감도를 올립니다. 클럽 헤븐리에는 케이와 아유 두 호스티스가 있고, 호감도를 최대로 채우면 전용 이벤트가 열립니다.",
        en: "A cabaret club where the hostesses appear as live-action video. A session is ordering drinks, answering conversation prompts, then an optional gift, all to raise Affection. Club Heavenly has two hostesses, Kei and Ayu; maxing Affection unlocks their special events.",
      },
      howTo: [
        { ko: "방문마다 10,000엔 + 드링크·선물 비용이 듭니다. 돈을 넉넉히 챙겨 가세요.", en: "Each visit costs ¥10,000 plus drinks and gifts — bring plenty of cash." },
        { ko: "대화 선택지는 가장 다정하고 공감하는 답을 고르면 대부분 호감도가 오릅니다. 막히면 호스티스별 정답 치트시트를 참고하세요.", en: "Pick the most affectionate, empathetic answer and Affection usually rises — use a per-hostess answer cheat sheet if you get stuck." },
        { ko: "「mini-more 향수」 계열 기어를 장착하면 호감도 상승에 보너스가 붙습니다.", en: "Equip 'mini-more Perfume' type gear for a bonus to Affection gains." },
      ],
      videos: [
        { title: { ko: "클럽 헤븐리 호스티스 아유 공략 (해피엔딩)", en: "Club Heavenly hostess Ayu guide (happy ending)" }, url: YT("7iHrZVEWqCA") },
        { title: { ko: "클럽 헤븐리 호스티스 아유 공략", en: "Club Heavenly hostess Ayu guide" }, url: YT("SgFEV-hUGdc") },
      ],
      achievementSlug: "caba_a",
    },
    {
      slug: "cabaret-castle",
      name: { ko: "캐바레 클럽 — 캐슬 캐바레 (실사 호스티스)", en: "Cabaret Club — Castle Cabaret (live-action hostesses)" },
      category: { ko: "캐바레 클럽", en: "Cabaret Club" },
      difficulty: 3,
      location: { ko: "캐슬 캐바레, 캐슬 센트럴 스트리트 (콜로세움 게이트 앞)", en: "Castle Cabaret, Castle Central Street (just before the Coliseum gate)" },
      summary: {
        ko: "캐슬에 위치한 두 번째 캐바레 클럽으로, 아이·카나메·코코로 등 전용 호스티스가 있습니다. 헤븐리와 동일하게 드링크·대화·선물로 호감도를 올리는 방식이며 캐슬 전용 이벤트가 준비되어 있습니다.",
        en: "The second cabaret club, located at the Castle, with its own hostesses including Ai, Kaname, and Kokoro. It works the same as Heavenly — drinks, conversation, gifts to raise Affection — with Castle-exclusive events.",
      },
      howTo: [
        { ko: "캐슬은 게임 후반에 자유롭게 드나들 수 있으니, 캐슬 호스티스 공략은 헤븐리 이후로 미뤄도 됩니다.", en: "You get free run of the Castle later on, so it's fine to tackle the Castle hostesses after Heavenly." },
        { ko: "호스티스마다 좋아하는 선물과 정답 선택지가 다르니, 대화 전에 호감도 임계 마커를 확인하고 응답하세요.", en: "Each hostess has different preferred gifts and right answers — check the Affection threshold marker before you respond." },
        { ko: "정답률을 높이려면 호스티스별 정답 가이드를 참고하는 것이 가장 확실합니다.", en: "For the highest hit rate, follow a per-hostess best-answers guide." },
      ],
      videos: [
        { title: { ko: "캐슬 캐바레 호스티스 카나메 공략 (해피엔딩)", en: "Castle Cabaret hostess Kaname guide (happy ending)" }, url: YT("w6Ek9DDELKk") },
        { title: { ko: "카나메 로맨스 완전판 + 정답 + 최종 데이트", en: "Complete Kaname romance, best answers & final date" }, url: YT("IHYdmAd_h6s") },
      ],
      achievementSlug: "caba_b",
    },
    {
      slug: "pocket-circuit",
      name: { ko: "포켓 서킷", en: "Pocket Circuit" },
      category: { ko: "레이싱", en: "Racing" },
      difficulty: 3,
      location: { ko: "포켓 서킷 스타디움 (소텐보리)", en: "Pocket Circuit stadium (Sotenbori)" },
      summary: {
        ko: "미니 RC카를 조립·튜닝해 트랙을 도는 레이싱 미니게임의 부활. 모터·기어·타이어·프레임·배터리 등 부품을 코스에 맞게 조합하고, 레이스 중에는 부스트 타이밍만 조작합니다.",
        en: "The return of the build-and-tune mini RC racer. Assemble motors, gears, tires, frames, and batteries to suit each track; during a race you only control when to fire Boost.",
      },
      howTo: [
        { ko: "코스마다 최적 세팅이 다릅니다. 직선이 긴 트랙은 속도형, 급커브가 많은 트랙은 안정형(느려도 코너에서 안 튕기는) 빌드를 쓰세요.", en: "Each track wants a different setup — speed builds for long straights, slow/stable builds for tracks full of sharp corners so you don't fly off." },
        { ko: "부스트는 코너 직전이나 트랙 이탈 위험 구간에서 아껴 쓰세요. 남발하면 차가 코스 밖으로 튕겨 나갑니다.", en: "Spend Boost sparingly — before corners or when you risk falling off — overusing it throws the car off the track." },
        { ko: "부품은 거리·상점에서 모읍니다. 검증된 추천 빌드(예: 골렘 재규어 + 슬림 타이어 계열)를 그대로 따라 하면 후반 컵도 안정적으로 우승할 수 있습니다.", en: "Collect parts around town and shops; copying a proven recommended build (e.g. Golem Jaguar + slim tires) reliably wins even the late cups." },
      ],
      videos: [
        { title: { ko: "포켓 서킷 완전 공략 (전 레이스)", en: "Pocket Circuit complete guide (all races)" }, url: YT("Sk3iPRprsiE") },
        { title: { ko: "전 부품 위치 가이드", en: "All parts locations guide" }, url: YT("jfIzMPUsrjQ") },
      ],
      achievementSlug: "pokecir_a",
    },
    {
      slug: "master-system",
      name: { ko: "SEGA 마스터 시스템 레트로 게임", en: "SEGA Master System retro games" },
      category: { ko: "레트로 게임", en: "Retro games" },
      difficulty: 2,
      location: { ko: "다이도지 본거지의 SEGA 마크 III (챕터 3부터)", en: "The SEGA Mark III at the Daidoji hideout (from Chapter 3)" },
      summary: {
        ko: "다이도지 본거지 골방의 구형 CRT와 SEGA 마크 III(서양명 마스터 시스템)로 즐기는 레트로 게임. 총 12종이며 4종(판타지 존, 시크릿 커맨드, 펭귄 랜드, 메이즈 헌터 3-D)은 처음부터, 나머지 8종은 오픈 월드에서 입수해야 합니다.",
        en: "Retro games on the old CRT and SEGA Mark III (the Master System in the West) in a side room of the Daidoji hideout. There are 12 total — four (Fantasy Zone, Secret Command, Penguin Land, Maze Hunter 3-D) from the start, the other eight obtained out in the world.",
      },
      howTo: [
        { ko: "트로피/도전과제는 5종을 플레이하면 됩니다. 기본 4종 + 추가 1종만 확보해도 「레트로 게이머」를 달성할 수 있습니다.", en: "The trophy/achievement only needs five games played — the four starters plus any one more earns 'Retro Gamer.'" },
        { ko: "아카메 네트워크 로그를 100% 채우려면 12종을 모두 입수해 한 번씩 플레이해야 합니다.", en: "To fully complete the Akame Network log you must obtain and play all 12 at least once each." },
        { ko: "게임 ROM은 우산 위, 전당포(에비스 폰), 캐슬 카지노 등에 흩어져 있으니 위치 가이드를 보고 수집하세요.", en: "Game ROMs are scattered on umbrellas, at Ebisu Pawn, the Castle casino, and more — follow a location guide to collect them." },
      ],
      videos: [
        { title: { ko: "마스터 시스템 전 게임 위치 (레트로 게이머)", en: "All Master System game locations (Retro Gamer)" }, url: YT("ggeLlkWSW-4") },
      ],
      achievementSlug: "retro_games",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 4,
      location: { ko: "리치 타워 마작장 (소텐보리)", en: "Riichi Tower mahjong parlor (Sotenbori)" },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 까다롭지만 한 가지 패턴만 알면 컴플리션은 충분히 넘깁니다.",
        en: "Standard Japanese riichi mahjong — tricky if you don't know the rules, but one pattern is enough for completion.",
      },
      howTo: [
        { ko: "손패를 닫은 채(펑/치 금지) 유지해 리치를 선언할 수 있게 하세요.", en: "Keep your hand fully closed (never call Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 「탄야오」를 노립니다. 텐파이가 되면 리치 선언 → 역이 자동으로 붙어 화료.", en: "Chase Tanyao (only simples 2–8); declare Riichi at tenpai and a yaku attaches automatically." },
        { ko: "컴플리션은 큰 점수가 아니라 화료 자체가 목적이니 빠른 화료 위주로 가세요.", en: "Completion only needs wins, not big scores — prioritize fast hands." },
      ],
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드게임", en: "Board game" },
      difficulty: 3,
      location: { ko: "소텐보리 (쇼기를 두는 가게)", en: "Sotenbori (shogi venue)" },
      summary: {
        ko: "일본식 장기. 잡은 말을 다시 자기 말로 둘 수 있는 「드롭」 규칙이 핵심이며, AI 상대로 한 판만 이겨도 컴플리션 조건을 채울 수 있습니다.",
        en: "Japanese chess. Its defining 'drop' rule lets you redeploy captured pieces as your own; a single win against the AI is enough for completion.",
      },
      howTo: [
        { ko: "잡은 말을 빈 칸에 다시 두는 드롭을 적극 활용하면 공격 압박을 크게 키울 수 있습니다.", en: "Lean on drops — redeploying captured pieces onto empty squares ramps up your attacking pressure." },
        { ko: "왕(옥장)을 금·은으로 단단히 굳히는 「囲い(가코이)」 전법으로 수비를 먼저 갖추세요.", en: "Castle your king behind golds and silvers first to lock down your defense before attacking." },
        { ko: "규칙이 낯설면 쉬운 난이도 상대를 골라 한 판만 이겨 도전과제를 챙기세요.", en: "If the rules feel alien, pick an easy opponent and grab the one win you need." },
      ],
    },
    {
      slug: "koi-koi",
      name: { ko: "코이코이 (화투)", en: "Koi-Koi (hanafuda)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "겜블러 홀 (캐슬)", en: "Gambler's Hall (the Castle)" },
      summary: {
        ko: "화투 카드로 「야쿠(役)」 족보를 만드는 일본 전통 카드 게임. 족보 완성 후 「코이코이」를 외쳐 점수를 더 노릴지, 멈추고 점수를 확정할지 결정합니다.",
        en: "A traditional Japanese card game where you form 'yaku' combinations from hanafuda cards. After completing a yaku you call 'koi-koi' to gamble for more, or stop to bank your score.",
      },
      howTo: [
        { ko: "필드의 카드와 같은 달(月)의 패를 맞춰 가져옵니다. 어떤 족보가 가까운지 늘 확인하세요.", en: "Match cards of the same month from the field to capture them — always track which yaku you're closest to." },
        { ko: "족보가 완성되면 욕심내지 말고 멈춰 점수를 확정하는 편이 안전합니다. 코이코이는 상대가 먼저 완성하면 손해가 큽니다.", en: "Once you have a yaku, banking it is the safe play — calling koi-koi backfires badly if the opponent finishes first." },
      ],
    },
    {
      slug: "oicho-kabu",
      name: { ko: "오이쵸카부", en: "Oicho-Kabu" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "겜블러 홀 (캐슬)", en: "Gambler's Hall (the Castle)" },
      summary: {
        ko: "화투 카드의 끝자리 합을 9에 가깝게 만드는 일본식 바카라형 도박. 룰이 단순해 운에 크게 좌우되며, 컴플리션은 일정 금액 획득이 목적입니다.",
        en: "A baccarat-like Japanese gambling game where you aim for a card total whose last digit is closest to 9. Simple and luck-heavy; completion is about hitting a winnings target.",
      },
      howTo: [
        { ko: "두 장의 합 끝자리가 9(가부)에 가까울수록 강합니다. 한 장 더 받을지(드로우)는 합산 끝자리로 판단하세요.", en: "The closer your last digit is to 9 (kabu), the stronger your hand — decide whether to draw a third card by that digit." },
        { ko: "운 요소가 크니 소액으로 여러 판을 돌려 안정적으로 목표 금액을 쌓으세요.", en: "It's swingy — bet small across many rounds to grind your way to the target safely." },
      ],
    },
    {
      slug: "casino",
      name: { ko: "카지노 (포커·블랙잭 등)", en: "Casino (poker, blackjack, etc.)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "캐슬 카지노", en: "The Casino at the Castle" },
      summary: {
        ko: "캐슬 카지노에서 포커·블랙잭 등을 칩으로 즐깁니다. 모은 칩은 전용 경품(레트로 게임 ROM 포함)으로 교환할 수 있어 컴플리션에 유용합니다.",
        en: "Play poker, blackjack, and more with chips at the Castle casino. Chips trade for exclusive prizes — including retro game ROMs — which makes the casino useful for completion.",
      },
      howTo: [
        { ko: "블랙잭은 딜러 업카드 기준의 기본 전략(17 이상이면 스탠드 등)을 지키면 기대값이 가장 안정적입니다.", en: "In blackjack, sticking to basic strategy against the dealer's up-card (e.g. stand on 17+) gives the steadiest returns." },
        { ko: "포커는 무리한 블러프보다 좋은 패에서만 베팅을 키우는 보수적 운영이 칩 손실을 줄입니다.", en: "In poker, play conservatively — raise only on strong hands rather than bluffing — to limit chip losses." },
        { ko: "충분한 칩을 모으면 경품 카운터에서 마스터 시스템 ROM 등 컴플리션용 아이템을 우선 교환하세요.", en: "Once you've banked enough chips, prioritize prize-counter items like Master System ROMs that feed completion." },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "소텐보리의 바 (다트 보드 비치)", en: "Sotenbori bars (with dartboards)" },
      summary: {
        ko: "301과 카운트업 모드. 흔들리는 조준 레티클을 타이밍 맞춰 던지는 게임입니다.",
        en: "301 and Count-Up modes — time your throw as the swaying reticle crosses the target.",
      },
      howTo: [
        { ko: "조준점이 목표(불스아이/트리플20)를 지나는 순간 릴리스합니다.", en: "Release the instant the reticle crosses your target (bullseye or triple-20)." },
        { ko: "301은 무리하게 트리플을 노리지 말고 안정적인 20점·불로 정확히 0까지 깎으세요.", en: "In 301 don't force triples — steady 20s and bulls that bring you to exactly zero win it." },
      ],
    },
    {
      slug: "billiards",
      name: { ko: "당구 (포켓 빌리어드)", en: "Billiards (pool)" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "소텐보리의 바 (당구대 비치)", en: "Sotenbori bars (with pool tables)" },
      summary: {
        ko: "포켓 당구(나인볼 등). 큐의 방향·강도·회전을 조절해 공을 포켓에 넣는 게임으로, 컴플리션은 게임 클리어가 목적입니다.",
        en: "Pocket billiards (nine-ball, etc.). Aim, adjust power and spin, and sink balls; completion just wants a clean win.",
      },
      howTo: [
        { ko: "다음 샷의 수구 위치(포지션 플레이)를 미리 그리며 강도를 조절하세요.", en: "Control your power with the next shot's cue-ball position (position play) already in mind." },
        { ko: "회전(잉글리시)을 살짝만 주어 수구를 원하는 자리로 보내면 연속 득점이 쉬워집니다.", en: "A touch of english to steer the cue ball makes stringing pots together much easier." },
      ],
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "소텐보리 가라오케·스낵", en: "Sotenbori karaoke bars & snacks" },
      summary: {
        ko: "타이밍 리듬게임. 시리즈 명곡들을 부르며 일정 점수 이상을 노리는 종목입니다.",
        en: "A timing rhythm game with series classics; aim for a target score on each track.",
      },
      howTo: [
        { ko: "노트가 판정 링에 정확히 겹치는 순간 입력하세요. 음악 박자보다 화면 표시를 믿는 게 정확합니다.", en: "Input exactly as the note overlaps the ring — trust the on-screen cue over the music's beat." },
        { ko: "막히는 곡은 풀콤보 영상으로 입력 패턴을 외우면 고득점이 안정적입니다.", en: "For stubborn songs, memorize the pattern from a full-combo video for a steady high score." },
      ],
    },
  ],
};
