import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Judgment (Judge Eyes). The play-spot roster and venues
// come from GameWith's minigame index, with 生臭坊主のゲームメモ for the
// per-spot detail (batting pitch charts, drone customisation, the Dice & Cube
// board and the six free-pass vouchers). Every entry cites its page.
export const judgmentMinigames: MinigamesData = {
  appId: 2058180,
  intro: {
    ko: "탐정 야가미 타카유키의 무대는 카무로초 한 곳이지만 플레이 스폿의 밀도는 본가 못지않습니다. 테이블 게임(마작·장기), VR 스고로쿠와 드론 레이스, 배팅 센터·다트·핀볼, 클럽 세가의 실제 아케이드 기체, 그리고 카지노와 도박장이 모두 들어 있습니다. VR 스고로쿠의 「프리 패스」 6장이 다른 미니게임의 경품으로 흩어져 있어, 사실상 전 종목을 한 번씩 돌게 되는 구조입니다.",
    en: "Yagami works one city — Kamurocho — but its play spots rival the mainline games: mahjong and shogi, the Dice & Cube VR board game and drone racing, the batting centre, darts and pinball, real SEGA cabinets at Club SEGA, and both a casino and a gambling den. Dice & Cube's six free passes are scattered across the other minigames' prize counters, which in practice makes you play all of them at least once.",
  },
  minigames: [
    {
      slug: "drone-racing",
      name: { ko: "드론 레이스 (D 리그)", en: "Drone racing (D League)" },
      category: { ko: "레이스", en: "Racing" },
      difficulty: 5,
      location: { ko: "밀레니엄 타워 1F 드론 레이스 회장 (챕터 2에서 이벤트로 해금)", en: "The drone race venue on Millennium Tower 1F — unlocked by an event in Chapter 2" },
      summary: {
        ko: "드론을 커스터마이즈해 리그 우승을 노리는 레이스입니다. 네트워크 대전도 지원합니다. 챔피언 리그 우승 보상이 VR 스고로쿠용 「프리 패스 교환권【6】」이라, 프리 패스를 모으려면 반드시 넘어야 하는 최대 난관입니다.",
        en: "Customise a drone and take the league, with online play supported. Winning the Champion League is where Free Pass Voucher 6 comes from — which makes it the hardest mandatory step on the free-pass checklist.",
      },
      howTo: [
        { ko: "드론 레이스가 해금되면 스킬의 「스페셜」 항목에 드론 전용 스킬 「스타트 대시」와 「프로텍션」이 추가됩니다. 먼저 이 둘을 배워 두세요.", en: "Unlocking the races adds two drone-only skills under Special — Start Dash and Protection. Learn both before you start losing to the field." },
        { ko: "스타트 대시는 스킬을 배운 상태에서 카운트다운의 「2」가 또렷해지는 순간(1로 바뀌기 직전)에 전진을 입력하면 발동합니다.", en: "Start Dash triggers by inputting forward at the moment the countdown's 2 sharpens — just before it flips to 1." },
        { ko: "코스의 가속 링에 터보로 가속한 상태로 접촉하면 기체가 한 바퀴 회전하며 평소보다 더 빨라집니다. 가속 링에 닿은 직후에 터보를 써도 같은 현상이 일어납니다. 이 두 가지 조합이 타임을 줄이는 핵심입니다.", en: "Hitting an acceleration ring while already boosting spins the drone and pushes it past normal top speed — and boosting immediately after touching the ring does the same. Chaining those two is where the time comes from." },
        { ko: "그랑프리는 레이스 사이의 커스터마이즈 타이밍에 ×를 누르면 일시 중단하고 접수 앞으로 돌아갈 수 있고, 다시 접수와 대화하면 도중부터 재개됩니다. 이걸 이용하면 1레이스마다 세이브할 수 있으니, 챔피언 리그처럼 고난도 리그에서는 반드시 쓰세요.", en: "Between Grand Prix races, pressing cross at the customisation prompt suspends the event and returns you to reception; talking to them again resumes mid-league. That lets you save after every single race — essential on the Champion League." },
        { ko: "커스터마이즈 파츠의 소재는 상점 구입·프렌드 증정·거리 습득으로 모읍니다. 에비스야는 나사·플라스틱·와이어·전선·회로·자석·코일과 무지 도료, 류구조 카지노는 최고 품질 와이어와 강력한 자석 같은 상위 소재, 류구조 도박장은 일급품 나사와 특수 도료, 라 만은 각종 무늬 도료를 취급합니다.", en: "Customisation materials come from shops, friends and street pickups: Ebisuya sells screws, plastics, wire, cable, circuits, magnets, coils and plain paints; the Ryugujo casino stocks the top-tier wire and magnets; the Ryugujo gambling den has premium screws and novelty paints; and La Man carries the patterned paints." },
      ],
      videos: [
        { title: { ko: "챔피언 리그 전 코스 1위 (드론 챔피언 트로피)", en: "Champion League all courses 1st (Drone Champion trophy)" }, url: YT("riIxpwAFNWo") },
        { title: { ko: "드론 레이스 타임 트라이얼 100% 가이드", en: "Time Trial Drone Racing 100% guide" }, url: YT("PZ2DZgyFRBM") },
      ],
      source: { label: "生臭坊主のゲームメモ — ドローンレース攻略メモ", url: "https://bozumemo.blogspot.com/2018/12/blog-post_59.html" },
      achievementSlug: "judge_drone_race_all_win",
    },
    {
      slug: "paradise-vr",
      name: { ko: "VR 스고로쿠 「다이큐」 (파라다이스 VR)", en: "Dice & Cube (VR Salon Paradise)" },
      category: { ko: "보드게임", en: "Board game" },
      difficulty: 4,
      location: { ko: "VR 살롱 파라다이스 (챕터 3 진행으로 해금)", en: "VR Salon Paradise — unlocked as Chapter 3 progresses" },
      summary: {
        ko: "정해진 횟수만큼 주사위를 굴려 아이템을 모으는 스고로쿠로, 이 게임 최고의 돈벌이 수단입니다. 골에 도착하거나 주사위 사용 횟수가 0이 되면 종료됩니다. 특정 코스에서는 스킬북도 나옵니다.",
        en: "A board game where a limited pool of dice rolls buys you items — the best money in the game. It ends when you reach the goal or run out of rolls, and certain courses drop skill books.",
      },
      howTo: [
        { ko: "플레이에는 「플레이 패스」가 필요합니다. 배팅 센터나 카지노의 경품, 엔카운트 배틀 드롭 등 여러 곳에서 나옵니다.", en: "Each run costs a Play Pass, which drops from batting centre and casino prizes, random encounters and elsewhere." },
        { ko: "프리 패스 교환권 6장을 모아 파라다이스 접수와 대화하면 프리 패스를 받아 이후 무제한으로 플레이할 수 있습니다. 입수처는 【1】 배팅 센터 「악마의 홈런 코스」 클리어, 【2】 오노데라 상점 SP 4,500, 【3】 라 만 경품 교환 1만 매, 【4】 류구조 카지노 경품 교환 1만 매, 【5】 류구조 도박장 경품 교환 1만 점, 【6】 드론 레이스 챔피언 리그 우승입니다.", en: "Six vouchers earn you the Free Pass from Paradise's receptionist and unlimited play. They come from clearing the batting centre's Devil Home Run course, 4,500 SP at Onodera's shop, 10,000 chips at La Man, 10,000 at the Ryugujo casino, 10,000 points at the Ryugujo gambling den, and winning the drone Champion League." },
        { ko: "칸 효과: 기프트 칸은 환금 아이템, 금고 칸은 피킹이나 섬턴 돌리기로 여는 금고, 배틀 칸은 전투(별이 많을수록 어렵고 이기면 별 수만큼 주사위 추가, 조건부 전투가 많음), 주사위 마이너스/플러스 칸은 사용 횟수 증감, 도어 칸은 방 에리어로 워프입니다.", en: "Square effects: gift squares hand you cash items; safe squares spawn a safe to lockpick or thumb-turn; battle squares fight (more stars means harder, and a win adds that many dice — many carry conditions); dice plus and minus squares change your remaining rolls; door squares warp you to the room area." },
        { ko: "미들·롱 코스에는 방해 캐릭터 「쿠로냥」이 나옵니다. 접촉하면 그때까지 얻은 아이템을 전부 빼앗기고 다른 칸으로 도망칩니다. 다시 접촉하면 배틀이 되고, 이기면 아이템을 되찾는 데다 보너스까지 붙습니다. 전투에 드물게 나오는 보라색 적을 쓰러뜨리지 않고 끝내면 새 쿠로냥이 나옵니다.", en: "The Middle and Long courses have Kuronyan, who steals everything you've collected on contact and runs to another square. Catching him starts a battle, and winning gets the haul back with a bonus on top. Finishing a fight without killing the rare purple enemy spawns a new Kuronyan." },
        { ko: "돈벌이의 핵심은 「코로냥 모드」입니다. 미들·롱 코스의 킹 코로냥에 접촉하면 발동하고, 모든 칸에서 큰돈을 버는 보너스 챌린지에 도전할 수 있게 됩니다. 3번 칸에 멈추면 종료됩니다. 전투에 드물게 나오는 금색 적을 쓰러뜨리면 킹 코로냥이 또 나옵니다.", en: "The money is in Koronyan Mode: touch King Koronyan on the Middle or Long course and every square becomes a high-paying bonus challenge, ending after you stop on three squares. Killing the rare gold enemy in a battle spawns another King Koronyan." },
        { ko: "킹 코로냥 없이도 주사위 눈을 5 → 6 → 2 순으로 내면 코로냥 모드를 발동할 수 있습니다. 스킬 「스페셜 > 눈속임의 달인」을 배우면 목押し가 쉬워져 발동 확률이 오르고, 클라우드 캄파 투자로 얻는 「스고로쿠 명인」 같은 주사위 사용 횟수 증가 스킬을 더하면 훨씬 잘 벌립니다.", en: "You can also force Koronyan Mode by rolling 5, then 6, then 2. The Special skill for stopping the dice on purpose makes that far more reliable, and dice-count skills like the one funded through Crowd Kanpa stretch each run further." },
      ],
      videos: [
        { title: { ko: "파라다이스 VR 100% 트로피 가이드", en: "Paradise VR 100% trophy guide" }, url: YT("pzMDaDmGxWI") },
        { title: { ko: "주사위와 큐브 미들 코스 해금 방법", en: "How to unlock the Dice & Cube Middle Course" }, url: YT("ZtkOX2rQoMY") },
        { title: { ko: "VR 쌍륙 플레이 (저지 아이즈: 사신의 유언)", en: "VR sugoroku gameplay (Judge Eyes)" }, url: YT("kJ9JGoctyVQ") },
      ],
      source: { label: "生臭坊主のゲームメモ — VRすごろく：ダイキュー攻略メモ", url: "https://bozumemo.blogspot.com/2018/12/vr.html" },
      achievementSlug: "judge_all_sugoroku_cource_clear",
    },
    {
      slug: "batting-center",
      name: { ko: "요시다 배팅 센터", en: "Yoshida Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 4,
      location: { ko: "카무로초 북부 — 시치후쿠도리 서쪽~호텔가 사이의 요시다 배팅 센터", en: "The Yoshida Batting Center in northern Kamurocho, between west Shichifuku Street and the hotel district" },
      summary: {
        ko: "홈런 코스는 코스별로 정해진 개수의 홈런을 치면 클리어, 챌린지 코스는 정해진 점수만큼 안타나 홈런을 치면 클리어입니다. 클리어하면 플레이 패스나 동 접시를 받습니다. 변화구를 던지는 진화판이고, 일반 손님은 못 하는 숨겨진 코스도 있습니다.",
        en: "Home Run courses ask for a set number of home runs and Challenge courses for a set score of hits or home runs; clearing either pays a Play Pass or a bronze plate. The pitchers throw breaking balls here, and there's a hidden course ordinary customers can't play.",
      },
      howTo: [
        { ko: "홈런 코스·챌린지 코스 모두 코스마다 구종과 공이 오는 위치가 고정입니다. 미리 알고 있으면 난이도가 크게 내려가므로, 출처 페이지의 코스별 구종·코스 표를 보고 들어가는 것이 정석입니다.", en: "Every course has a fixed pitch sequence and fixed locations, so knowing them ahead of time changes the difficulty entirely — the linked guide writes out the pitch-by-pitch chart per course." },
        { ko: "예를 들어 「쇼와의 괴물」은 스트레이트 한가운데 → 커브 한가운데 → 스트레이트 좌상 → 투심 우하 → 커브 좌하 → 커브 우 → 스트레이트 상 → 드롭 하 → 투심 좌상 → 드롭 우하 순입니다.", en: "The Showa Monster course, for instance, runs straight down the middle, curve middle, straight upper-left, two-seam lower-right, curve lower-left, curve right, straight high, drop low, two-seam upper-left, drop lower-right." },
        { ko: "통로에 있는 하타노에게서 배팅 글러브(3,000엔)와 금색 배트(3만 엔)를 살 수 있습니다. 금색 배트는 타이밍이 꽤 어긋나도 홈런이 되므로 손에 넣으면 난이도가 확 내려갑니다. 다만 구입에는 배팅 센터를 일정 횟수 플레이해야 하는 것으로 보입니다.", en: "Hatano in the corridor sells batting gloves for ¥3,000 and a golden bat for ¥30,000. The golden bat turns badly mistimed swings into home runs and makes everything easier — though buying it seems to require having played a certain number of games first." },
        { ko: "홈런 코스와 챌린지 코스를 전부 클리어하면 요시다 지배인과의 이벤트가 발생하고, 이후 대화로 「악마 코스」가 열립니다. 악마의 홈런 코스는 프리 패스 교환권【1】, 악마의 챌린지 코스는 스킬북 「비기 무구 탈취」(EX 배트 강탈 해금)를 줍니다. 둘 다 클리어하면 요시다 지배인이 프렌드가 됩니다.", en: "Clearing every Home Run and Challenge course triggers an event with manager Yoshida, after which talking to him opens the Devil courses. The Devil Home Run course pays Free Pass Voucher 1 and the Devil Challenge course a skill book that unlocks the EX bat-snatch move; clearing both makes Yoshida a friend." },
      ],
      videos: [
        { title: { ko: "배팅센터 홈런·챌린지 전 코스 클리어 가이드", en: "Batting Center HomeRun & Challenge all-courses clear guide" }, url: YT("E3dJF9_8ZUg") },
        { title: { ko: "배팅센터 전 홈런 코스", en: "Batting Center all home run courses" }, url: YT("yRlPp8CpUfo") },
      ],
      source: { label: "生臭坊主のゲームメモ — バッティングセンター攻略メモ", url: "https://bozumemo.blogspot.com/2018/11/blog-post_32.html" },
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "바 「밴텀」 / 클럽세가 극장앞광장점", en: "Bar Bantam and Club SEGA Theater Square" },
      summary: {
        ko: "01·크리켓·카운트업 3종을 플레이할 수 있습니다. 가디언 프렌드가 아니라 걸프렌드와 함께 가면 대전도 가능해, 데이트 겸 친밀도 올리기로도 쓰입니다.",
        en: "Three modes — 01, Cricket and Count Up — and taking a girlfriend along lets you play against her, which doubles as date content.",
      },
      howTo: [
        { ko: "01은 설정 점수를 정확히 0으로 만드는 종목, 크리켓은 15~20과 BULL만 유효한 진지 뺏기, 카운트업은 맞힌 숫자를 그대로 합산하는 스코어 어택입니다.", en: "01 reduces a score to exactly zero, Cricket is territory-claiming on 15 through 20 plus the bull, and Count Up simply totals what you hit." },
        { ko: "걸프렌드와의 데이트 장소로 지정할 수 있어, 다트 자체의 컴플리트와 친밀도 올리기를 겸할 수 있습니다.", en: "It works as a date location, so a session doubles as both minigame completion and intimacy progress." },
      ],
      videos: [
        { title: { ko: "다트 튜토리얼: 매번 불스아이 명중하는 법", en: "Darts tutorial: how to hit the bullseye every time" }, url: YT("PmVKd7EYGY8") },
      ],
      source: { label: "GameWith — ミニゲームの攻略とプレイスポット", url: "https://gamewith.jp/judgeeyes/article/show/134380" },
    },
    {
      slug: "pinball",
      name: { ko: "핀볼 팔러", en: "Pinball parlour" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "야가미 탐정사무소 (무료)", en: "The Yagami Detective Agency — free to play" },
      summary: {
        ko: "사무소에 놓인 핀볼 대입니다. 무료라서 부담 없이 스코어를 올릴 수 있고, 컴플리트 미션 소화용으로 좋습니다.",
        en: "A pinball table sitting in the office. It's free, which makes it the low-friction way to chip at the completion missions.",
      },
      howTo: [
        { ko: "스코어를 늘리는 요령은 「NEXT DOUBLE」을 통과시키는 것입니다. 통과시키면 다음에 획득하는 효과가 2배가 되므로, 공을 아무 데나 쏘지 말고 이 레인을 먼저 노리세요.", en: "The scoring trick is passing the NEXT DOUBLE lane: doing so doubles whatever you earn next, so aim for that lane before anything else." },
      ],
      source: { label: "GameWith — ミニゲームの攻略とプレイスポット", url: "https://gamewith.jp/judgeeyes/article/show/134380" },
    },
    {
      slug: "kamuro-of-the-dead",
      name: { ko: "KAMURO OF THE DEAD", en: "Kamuro of the Dead" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "클럽세가 극장앞광장점", en: "Club SEGA Theater Square" },
      summary: {
        ko: "덤벼드는 좀비를 쓰러뜨리는 건 슈팅형 아케이드입니다. 트로피 「Zombie Apocalypse Survivor」는 이 게임에서 픽업 50개를 획득하는 조건입니다.",
        en: "A light-gun style arcade shooter against oncoming zombies. The Zombie Apocalypse Survivor trophy asks for 50 pickups inside it.",
      },
      howTo: [
        { ko: "하이스코어는 헤드샷·콤보·타임 보너스를 엮어서 냅니다. 아무 데나 난사하기보다 머리를 노려 콤보를 끊지 않는 쪽이 총점이 높습니다.", en: "High scores come from chaining headshots, combo and the time bonus — aiming for heads and keeping the chain beats spraying." },
        { ko: "클럽세가 극장앞광장점에는 이 외에 모터레이드·스페이스 해리어·UFO 캐처가 함께 있습니다. 아케이드 컴플리트를 노린다면 한 번에 돌기 좋습니다.", en: "The same arcade also has Motor Raid, Space Harrier and the UFO catcher, so it's the efficient stop for arcade completion." },
      ],
      source: { label: "GameWith — ミニゲームの攻略とプレイスポット", url: "https://gamewith.jp/judgeeyes/article/show/134380" },
      achievementSlug: "judge_zombie_hanter",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드", en: "Club SEGA arcade" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "클럽세가 극장앞광장점 / 클럽세가 나카미치도리점", en: "Club SEGA Theater Square and Club SEGA Nakamichi Street" },
      summary: {
        ko: "실제 세가 아케이드 타이틀을 플레이할 수 있습니다. 점포마다 놓인 기체가 다르므로 트로피 「The Gamer Life」(전 아케이드 게임 플레이)를 노린다면 두 점포를 모두 돌아야 합니다.",
        en: "Real SEGA arcade titles, split between two branches — so The Gamer Life, which wants every cabinet played, needs both.",
      },
      howTo: [
        { ko: "극장앞광장점에는 KAMURO OF THE DEAD, 모터레이드, 스페이스 해리어, UFO 캐처가 있습니다.", en: "Theater Square holds Kamuro of the Dead, Motor Raid, Space Harrier and the UFO catcher." },
        { ko: "나카미치도리점에는 파이팅 바이퍼즈, 뿌요뿌요, 버추어 파이터, 판타지 존이 있습니다.", en: "Nakamichi Street holds Fighting Vipers, Puyo Puyo, Virtua Fighter and Fantasy Zone." },
        { ko: "모터레이드는 체감형 레이스로, 레이스 중 라이벌을 공격해 추월당하지 않게 막을 수 있습니다.", en: "Motor Raid is a body-english racer where you can attack rivals mid-race to stop them passing." },
        { ko: "파이팅 바이퍼즈는 대전 격투로, 캐릭터가 착용한 아머를 얼마나 빨리 부수느냐가 공략 포인트입니다.", en: "Fighting Vipers is a fighter whose whole angle is how fast you can shatter the opponent's armour." },
      ],
      videos: [
        { title: { ko: "클럽 세가: 파이팅 바이퍼스 등 아케이드 플레이 (2019)", en: "Club SEGA: Fighting Vipers and other arcade games (2019)" }, url: YT("IoikCU-EWVs") },
        { title: { ko: "파이팅 바이퍼스 (허니) 플레이", en: "Fighting Vipers (Honey) gameplay" }, url: YT("cNe9ZxKTOHw") },
        { title: { ko: "클럽 세가: 파이팅 바이퍼스 플레이", en: "Club SEGA: Fighting Vipers playthrough" }, url: YT("8aj9iK9x06Y") },
      ],
      source: { label: "GameWith — ミニゲームの攻略とプレイスポット", url: "https://gamewith.jp/judgeeyes/article/show/134380" },
      achievementSlug: "judge_all_arcade_game_played",
    },
    {
      slug: "ufo-catcher",
      name: { ko: "UFO 캐처", en: "UFO catcher" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "클럽세가 극장앞광장점", en: "Club SEGA Theater Square" },
      summary: {
        ko: "크레인으로 경품을 집는 종목입니다. VR 스고로쿠의 내비게이션 캐릭터 「코로냥」 인형 등을 얻을 수 있습니다.",
        en: "The crane game, whose prizes include a plush of Koronyan, the Dice & Cube navigator.",
      },
      howTo: [
        { ko: "획득한 아이템은 야가미 탐정사무소에 장식할 수 있습니다. 사무소 꾸미기 요소와 연결된 유일한 미니게임입니다.", en: "What you win can be displayed in the Yagami Detective Agency — it's the only minigame that feeds the office decoration." },
      ],
      source: { label: "GameWith — ミニゲームの攻略とプレイスポット", url: "https://gamewith.jp/judgeeyes/article/show/134380" },
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "마작 라라바이 / 킨다이 마작 / 마작 「타치바나」", en: "Mahjong Lullaby, Kindai Mahjong and Mahjong Tachibana" },
      summary: {
        ko: "약탁·중탁·강탁으로 레이트가 나뉘어 있어 실력에 맞춰 고를 수 있습니다. 특정 조건을 만족하면 초고레이트 탁이 해금됩니다.",
        en: "Weak, medium and strong tables let you pick a rate to match your skill, and meeting a specific condition unlocks a super-high-rate table.",
      },
      howTo: [
        { ko: "세 점포 모두 같은 마작이지만 레이트 구성이 다르므로, 자금이 얼마 없을 때는 낮은 레이트 점포부터 도세요.", en: "All three parlours play the same game at different rates — start at the cheap one while your bankroll is thin." },
        { ko: "초고레이트 탁은 조건 해금형입니다. 컴플리트 미션을 노린다면 통상 탁을 충분히 돌아 조건을 채워 두세요.", en: "The top-rate table is condition-gated, so grind the normal tables first if you're chasing the completion mission." },
      ],
      source: { label: "GameWith — ミニゲームの攻略とプレイスポット", url: "https://gamewith.jp/judgeeyes/article/show/134380" },
    },
    {
      slug: "shogi",
      name: { ko: "장기 / 쓰메쇼기", en: "Shogi and tsume-shogi" },
      category: { ko: "보드게임", en: "Board game" },
      difficulty: 3,
      location: { ko: "아오조라 장기 / 지하 수도", en: "Aozora Shogi and the underground waterway" },
      summary: {
        ko: "아오조라 장기에서는 일반 규칙의 장기를 둡니다. 특정 이벤트를 클리어하면 쓰메쇼기를 플레이할 수 있게 됩니다.",
        en: "Aozora Shogi plays standard shogi, and clearing a specific event opens the tsume-shogi problems.",
      },
      howTo: [
        { ko: "쓰메쇼기는 정해진 수 안에 상대 옥을 잡는 퍼즐이라 한 판이 짧습니다. 포인트나 컴플리트만 필요하다면 이쪽이 효율적입니다.", en: "Tsume-shogi problems are short puzzles with a fixed move limit, so they're the efficient option when you only need the points or the completion tick." },
        { ko: "쓰메쇼기는 이벤트 해금형입니다. 아오조라 장기가 열린 뒤에도 바로 나오지 않으니 해당 이벤트를 먼저 처리하세요.", en: "Tsume-shogi is event-gated: it doesn't appear the moment Aozora Shogi opens, so clear the event first." },
      ],
      source: { label: "GameWith — ミニゲームの攻略とプレイスポット", url: "https://gamewith.jp/judgeeyes/article/show/134380" },
    },
    {
      slug: "casino",
      name: { ko: "카지노·도박장 (블랙잭·포커·코이코이·오이초카부)", en: "Casino and gambling den" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "라 만 / 류구조 2F (블랙잭·포커) · 류구조 3F (코이코이·오이초카부)", en: "La Man and Ryugujo 2F for blackjack and poker; Ryugujo 3F for koi-koi and oicho-kabu" },
      summary: {
        ko: "칩과 목찰을 걸고 노는 도박 종목이 모여 있습니다. VR 스고로쿠의 프리 패스 교환권 3장(【3】【4】【5】)이 전부 여기 경품 교환에서 나오므로, 프리 패스를 노린다면 반드시 돌아야 합니다.",
        en: "The gambling block — and the source of three of the six Dice & Cube free-pass vouchers, so it's unavoidable if you want unlimited board-game runs.",
      },
      howTo: [
        { ko: "프리 패스 교환권 입수처는 【3】 라 만 경품 교환 1만 매, 【4】 류구조 카지노 경품 교환 1만 매, 【5】 류구조 도박장 경품 교환 1만 점입니다. 세 곳 모두 상당한 양을 벌어야 하니 초반부터 조금씩 쌓아 두세요.", en: "Voucher 3 costs 10,000 chips at La Man, voucher 4 costs 10,000 at the Ryugujo casino, and voucher 5 costs 10,000 points at the Ryugujo gambling den — all substantial, so start banking early." },
        { ko: "류구조 카지노와 도박장은 드론 커스터마이즈용 상위 소재의 공급처이기도 합니다. 카지노는 최고 품질 와이어·정밀한 회로·강력한 자석 등을, 도박장은 일급품 나사·고강도 플라스틱과 특수 도료를 취급합니다.", en: "The Ryugujo tables also stock the high-end drone parts: the casino sells top-quality wire, precision circuits and strong magnets, and the gambling den premium screws, high-strength plastic and the novelty paints." },
        { ko: "블랙잭은 손패 합계를 21에 가깝게 만드는 게임이고, 포커·코이코이·오이초카부는 시리즈 공통 규칙입니다. 자금이 부족하면 라 만보다 저레이트 쪽부터 도세요.", en: "Blackjack is the usual race to 21, and poker, koi-koi and oicho-kabu follow the series rules — work the lower rates first if your bankroll is thin." },
      ],
      source: { label: "GameWith — ミニゲームの攻略とプレイスポット", url: "https://gamewith.jp/judgeeyes/article/show/134380" },
    },
    {
      slug: "girlfriends",
      name: { ko: "걸프렌드 (연애 이벤트)", en: "Girlfriends" },
      category: { ko: "연애·대화", en: "Dating / dialogue" },
      difficulty: 3,
      location: { ko: "사이드 케이스로 만난 뒤 메시지 앱과 데이트로 진행", en: "Met through side cases, then progressed via the messaging app and dates" },
      summary: {
        ko: "특정 여성을 걸프렌드로 만들 수 있습니다. 흐름은 ① 사이드 케이스에서 만남 → ② 메시지로 약속 → ③ 데이트로 친밀도 상승 → ④ 고백 수락입니다. 후보는 사오토메 츠키노, 미하마 사나, 아마네, 마쓰오카 나나미 4명입니다.",
        en: "Four women can become girlfriends — Tsukino Saotome, Sana Mihama, Amane and Nanami Matsuoka — via the loop of meeting through a side case, arranging to meet by message, raising intimacy on dates, and accepting the confession.",
      },
      howTo: [
        { ko: "친밀도가 5가 되면 고백 이벤트가 발생합니다. 친밀도는 데이트와 메시지에서 나오는 선택지를 잘 고르면 오릅니다.", en: "Intimacy 5 triggers the confession, and it rises from picking the right options in dates and messages." },
        { ko: "선물은 상대의 취향에 맞아야 합니다. 좋아하지 않는 선물은 상승치가 크게 줄어듭니다.", en: "Gifts have to match her tastes — the wrong one moves the gauge far less." },
        { ko: "야가미의 스페셜 스킬에 친밀도 상승 보정이 있습니다. 「선물의 달인」·「데이트의 달인」·「회화의 달인」·「메시지의 달인」이 각각 SP 50이고, 대응하는 행동에서 절 게이지가 잘 오릅니다.", en: "Four Special skills at 50 SP each — the gift, date, conversation and message masters — boost the bond gauge for their matching activity." },
        { ko: "해금 조건은 각자 다릅니다. 사오토메 츠키노는 사이드 케이스 「변태왕: 자이언트 임팩트」 클리어 + 사오토메 요스케의 프렌드 이벤트 발생, 미하마 사나는 「꿈의 도중」 클리어, 아마네는 「속속·닥쳐오는 재앙의 정체는?」 클리어 후 10장에서 스기우라의 질문에 「아니, 아직이다」로 답하기입니다.", en: "Each unlocks differently: Tsukino needs the Giant Impact side case plus Yosuke Saotome's friend event; Sana needs the 'Midway Through a Dream' case; Amane needs her side case cleared and then answering Sugiura's Chapter 10 question with \"no, not yet\"." },
      ],
      source: { label: "GameWith — ガールフレンド（彼女）一覧", url: "https://gamewith.jp/judgeeyes/article/show/134433" },
      achievementSlug: "judge_girl_frend_c",
    },
    {
      slug: "friend-events",
      name: { ko: "프렌드 이벤트 (프렌드 시스템)", en: "Friend events" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "카무로초 전역 — 맵의 초록색 「악수 아이콘」", en: "All over Kamurocho — the green handshake icons on the map" },
      summary: {
        ko: "챕터 1을 어느 정도 진행하면 열리는 시스템입니다. 거리 사람들의 고민과 의뢰를 해결해 절 게이지를 최대까지 올리면 프렌드가 됩니다. 50명을 만들면 트로피 「A Guy Everybody Knows」입니다.",
        en: "Unlocked partway through Chapter 1: solve people's problems around town to fill their bond gauge and make them a friend. Fifty of them gives A Guy Everybody Knows.",
      },
      howTo: [
        { ko: "프렌드 이벤트 발생 조건은 「말을 건다」와 「상품을 산다」인 경우가 많습니다. 아이콘 위치에서 아무 일도 일어나지 않으면 대개 대화나 구매를 아직 안 한 것입니다.", en: "Most friend events fire from talking to the person or buying something from them, so an icon that seems dead usually just means you haven't done one of those yet." },
        { ko: "그래도 발생하지 않는다면 다른 프렌드 이벤트를 먼저 클리어해 평판을 올리거나, 시간을 좀 두고 다시 찾아가세요. 평판이 조건인 이벤트가 섞여 있습니다.", en: "If it still won't trigger, clear other friend events to raise your reputation or come back later — some are reputation-gated." },
        { ko: "프렌드를 늘리면 평판이 올라 새 사이드 케이스가 열립니다. 사이드 케이스를 전부 해금하려면 프렌드 만들기는 피할 수 없습니다.", en: "More friends means more reputation and more side cases — unlocking every side case is impossible without working the friend system." },
        { ko: "전투 면에서도 EX 게이지 회복, 배틀 협력, 프렌드와의 EX 배틀 액션 같은 지원을 받습니다. 요시다 배팅 센터의 하타노(배팅에 도전 후 대화)와 요시다 지배인(전 코스 클리어)처럼, 미니게임을 통해 프렌드가 되는 인물도 있습니다.", en: "In combat they refill your EX gauge, join fights and enable co-op EX actions. Some are recruited through minigames — Hatano at the batting centre after you play and talk, and manager Yoshida after clearing every course." },
      ],
      source: { label: "GameWith — フレンド一覧", url: "https://gamewith.jp/judgeeyes/article/show/134523" },
      achievementSlug: "judge_frend_all",
    },
    {
      slug: "cat-search",
      name: { ko: "들고양이 서치", en: "Stray cat search" },
      category: { ko: "수집", en: "Collection" },
      difficulty: 3,
      location: { ko: "메인 스토리·사이드 케이스의 서치 모드 장면", en: "Search-mode scenes across the main story and side cases" },
      summary: {
        ko: "메인 스토리의 서치 모드에서 모든 들고양이를 찾으면 트로피 「Oh Look, a Cat!」를 받습니다. 서치 모드는 L3로 들어가는 1인칭 조사 액션입니다.",
        en: "Finding every stray cat in the main story's search-mode scenes gives the Oh Look, a Cat! trophy. Search mode is the first-person investigation view on L3.",
      },
      howTo: [
        { ko: "고양이는 조사 대상과 무관한 곳, 특히 창밖이나 화면 뒤쪽에 숨어 있는 경우가 많습니다. 서치 시작 화면에서 일단 뒤를 돌아보는 습관을 들이세요. 챕터 1의 클럽 아무르 앞 방범 카메라 조사에서는 시작 지점에서 뒤를 돌아 그대로 직진해 왼쪽을 보면 있습니다.", en: "Cats hide away from the actual evidence — often out of a window or directly behind you. Make turning around the first thing you do: in Chapter 1's security-camera search outside Club Amour, the cat is behind you, straight ahead and to the left." },
        { ko: "예: 챕터 2 제2 사건 현장은 노란 상자가 쌓인 곳의 좌상, 챕터 4 「사오리 씨의 생케이크 재판」 증거 수집은 겐다 법률사무소의 「법」 글자가 쓰인 창밖, 챕터 5 야가미 탐정사무소의 신야 조사는 레코드가 있는 곳의 창밖입니다.", en: "Examples: Chapter 2's second crime scene has one upper-left of the stacked yellow boxes; Chapter 4's cake-trial evidence hunt has one outside the window bearing the Genda law office's kanji; and Chapter 5's office search has one out the window by the records." },
        { ko: "서치 모드로 놓친 고양이는 되돌아가 다시 찾을 수 없는 장면이 있으므로, 조사 장면마다 한 번씩 주위를 둘러보는 편이 안전합니다.", en: "Some search scenes can't be revisited, so sweep the surroundings once in every one rather than trusting you can come back." },
        { ko: "고양이 관련으로는 사이드 케이스 「성가신 고양이 수색」도 있습니다. 3장에서 거리 평판 Lv.5 이상일 때 BAR 텐더에서 수주할 수 있으므로, 프렌드 이벤트로 평판을 먼저 올려 두세요.", en: "There's also the side case about tracking down a troublesome cat, taken at Bar Tender in Chapter 3 once your town reputation hits level 5 — so push friend events first." },
      ],
      source: { label: "GameWith — 野良猫の居場所一覧", url: "https://gamewith.jp/judgeeyes/article/show/134534" },
      achievementSlug: "judge_all_cats_found_in_search_mode",
    },
  ],
};
