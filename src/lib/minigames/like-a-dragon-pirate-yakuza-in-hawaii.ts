import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Like a Dragon: Pirate Yakuza in Hawaii (용과 같이 8
// 외전), the 2025 Majima-led pirate spin-off. Difficulty is rated for the
// Completion (컴플리션) grind, not casual play. Cross-referenced against community
// guides (GameFAQs, Neoseeker, TheGamer, Deltia's Gaming, PSNProfiles) and video
// walkthroughs. Videos are only attached where a real upload was confirmed.
export const likeADragonPirateMinigames: MinigamesData = {
  appId: 3061810,
  intro: {
    ko: "마지마 고로가 해적이 되어 하와이를 누비는 2025년 외전. 골격은 노티컬 컴뱃(해상 전투)과 마들랜티스의 파이러츠 콜로세움이며, 드래곤 카트·크레이지 딜리버리·고로고로 키친 같은 시리즈 전통 미니게임과 오션 헌터·시코 스냅 같은 신작 종목이 컴플리션을 채웁니다. 다수가 챕터 2 이후 서브스토리로 해금되니 순서를 참고하세요.",
    en: "The 2025 spin-off where Goro Majima turns pirate across Hawaii. Its backbone is Nautical Combat and Madlantis' Pirates' Coliseum, rounded out by series staples like Dragon Kart, Crazy Delivery, and the Goro Goro Kitchen, plus new acts like The Ocean Hunter and Sicko Snap. Many unlock via Chapter 2 substories, so mind the order.",
  },
  minigames: [
    {
      slug: "nautical-combat",
      name: { ko: "노티컬 컴뱃 (해상 함선 전투)", en: "Nautical Combat (ship battles)" },
      category: { ko: "해상 전투", en: "Naval combat" },
      difficulty: 3,
      location: { ko: "외해 (마지마의 배 고로마루)", en: "The open sea (Majima's ship, the Goromaru)" },
      summary: {
        ko: "마지마의 해적선 고로마루를 몰고 좌우 캐논과 전방 기관총으로 적선을 격침하는 본작의 핵심 시스템. 갑판 시점으로 전환해 RPG로 원거리 견제도 가능합니다. 함선·크루 강화가 후반 콜로세움 공략의 전제 조건입니다.",
        en: "The game's signature system: pilot the Goromaru and sink enemy ships with port/starboard cannons and a forward machine gun. Switch to deck view to soften targets with an RPG from range. Ship and crew upgrades are the prerequisite for the late-game Coliseum.",
      },
      howTo: [
        { ko: "캐논은 해당 측면이 적선을 향한 상태에서만 발사됩니다. 적선에 조준 마커가 점등되는 순간 쏘면 거의 명중합니다.", en: "Cannons only fire when that broadside faces the target — wait for the lock-on marker to light up on the enemy ship for a near-guaranteed hit." },
        { ko: "부스트로 가속한 뒤 브레이크로 드리프트하면 적 공격을 흘리면서 반대편 측면을 노출시켜 연속 포격할 수 있습니다.", en: "Boost to build speed, then brake to drift — it dodges incoming fire and swings your other broadside into firing position." },
        { ko: "파도를 거스르지 말고 흐름을 타면 선회가 훨씬 부드럽습니다. 잡몹 배는 무시하고 보스 함선에 화력을 집중하세요.", en: "Ride with the waves rather than fighting them for sharper turns, and ignore small ships to concentrate fire on the boss vessel." },
      ],
      videos: [
        { title: { ko: "노티컬 컴뱃 공식 개요 (PlayStation)", en: "Naval Combat Overview (official PlayStation)" }, url: YT("rGhbqRwvni0") },
      ],
    },
    {
      slug: "pirates-coliseum",
      name: { ko: "파이러츠 콜로세움 (마들랜티스 투기장)", en: "Pirates' Coliseum (Madlantis arena)" },
      category: { ko: "투기장", en: "Arena" },
      difficulty: 5,
      location: { ko: "마들랜티스 콜로세움", en: "The Coliseum, Madlantis" },
      summary: {
        ko: "마들랜티스의 메인 투기장. 퀵 클래시(난투)·마들랜티스 매니아(갑판 전투)·캡틴 토너먼트 등 모드가 있으며 16개 적 해적단이 등장합니다. 입장 가능한 전투는 파이럿 랭크(평판)에 따라 풀리고, S랭크 클리어 시 막대한 돈과 평판을 줍니다.",
        en: "Madlantis' main arena, offering modes like Quick Clash (brawls), Madlantis Mania (deck battles), and the Tournament of Captains, with 16 enemy crews. Available fights gate behind your Pirate Rank (reputation), and S-Rank clears pay out huge money and rep.",
      },
      howTo: [
        { ko: "마들랜티스 매니아는 적선에 올라타 크루와 난투하는 모드입니다. 마지마와 크루 장비를 먼저 끌어올린 뒤 도전하세요.", en: "Madlantis Mania is deck-to-deck brawling — gear up Majima and his crew before attempting the higher tiers." },
        { ko: "캡틴 토너먼트는 함선 전투와 갑판 전투가 섞여 나옵니다. 기관총으로 적을 묶고 캐논 사정거리로 끌어들여 큰 피해를 주며 틈틈이 수리하세요.", en: "The Tournament of Captains mixes ship and deck combat — pin enemies with machine guns, drag them into cannon range for big hits, and repair between exchanges." },
        { ko: "입장 가능한 전투는 평판으로 풀립니다. 매니아로 평판을 모아 상위 전투와 아몬 해적단까지 차근차근 해금하세요.", en: "Higher fights unlock with reputation — grind Mania to bank rep and work up to the top brackets and the Amon Pirates." },
      ],
    },
    {
      slug: "dragon-kart",
      name: { ko: "드래곤 카트", en: "Dragon Kart" },
      category: { ko: "레이싱", en: "Racing" },
      difficulty: 3,
      location: { ko: "하버 파크 (아나콘다 하버 파크), 호놀룰루", en: "Harbor Park (Anaconda Harbor Park), Honolulu" },
      summary: {
        ko: "하와이 거리를 카트로 질주하는 마리오 카트풍 레이싱. 3개 그랑프리 컵과 아이템으로 상대를 탈락시키는 듀얼 모드가 있으며, 최종적으로 라이벌 란과의 일대일 탈락전이 기다립니다. 서브스토리 2 완료 후 서브스토리 7로 해금됩니다.",
        en: "A Mario Kart-style racer through Hawaii's streets. There are three Grand Prix cups plus a Duel mode where items knock out rivals, capped by a 1-on-1 elimination duel against the rival Ran. Unlocks via Substory 7 after clearing Substory 2.",
      },
      howTo: [
        { ko: "드리프트로 코너를 돌며 부스트 게이지를 채우고, 직선 구간에서 부스트를 터뜨려 시간을 단축하세요.", en: "Drift through corners to charge boost, then unload it on straights to make up time." },
        { ko: "듀얼·그랑프리에서는 아이템이 승패를 가릅니다. 공격 아이템은 선두를 따라잡을 때, 방어 아이템은 1위 유지에 아껴 쓰세요.", en: "Items decide Duel and GP races — save offensive items for catching the leader and defensive ones for holding first." },
        { ko: "카트 성능을 강화하면 후반 컵과 란과의 최종전이 훨씬 수월합니다. 컵 상금으로 우선 투자하세요.", en: "Upgrading the kart makes the late cups and the final duel with Ran much easier — reinvest cup winnings first." },
      ],
      videos: [
        { title: { ko: "전 드래곤 카트 레이스 & 듀얼", en: "All Dragon Kart races & battles" }, url: YT("p2YFoBP7Fgs") },
        { title: { ko: "드래곤 카트 전 서브스토리 & 듀얼", en: "All Dragon Kart substories & duels" }, url: YT("OBDgy3k6Fo0") },
      ],
      achievementSlug: "dragon_cart",
    },
    {
      slug: "crazy-delivery",
      name: { ko: "크레이지 딜리버리", en: "Crazy Delivery" },
      category: { ko: "레이싱", en: "Racing" },
      difficulty: 3,
      location: { ko: "선셋 스트리트 & 아나콘다 대로 분수대 (서브스토리 「Stay Crazy」)", en: "Sunset St. & Anaconda Blvd. fountain (Substory 'Stay Crazy')" },
      summary: {
        ko: "자전거를 몰며 음식을 받아 NPC에게 배달하는 크레이지 택시 계열 미니게임. 트릭으로 보너스와 팁을 올립니다. 전용 포인트로만 살 수 있는 실버 보물상자 등 한정 상품이 있어 컴플리션 가치가 높습니다. 챕터 2부터 「Stay Crazy」 서브스토리로 해금됩니다.",
        en: "A Crazy Taxi-style minigame: grab food on a bike and deliver it to NPCs, racking up bonuses and tips with tricks. Its exclusive shop sells items (like a coveted Silver Treasure Chest) bought only with its own points, so it's worth completing. Unlocks via the 'Stay Crazy' substory from Chapter 2.",
      },
      howTo: [
        { ko: "트릭은 스틱+점프 버튼으로 발동합니다. 연속 트릭(최대 3회)을 이어가면 배달 팁이 크게 늘어납니다.", en: "Trigger tricks with the stick + jump button — chaining tricks (up to three) sharply boosts your delivery tips." },
        { ko: "미니맵 아이콘 색으로 주문을 구분하세요: 노랑=버거, 주황=피자, 파랑=초밥. 초밥이 가장 보상이 큽니다.", en: "Read order icons by color on the minimap: yellow = burger, orange = pizza, blue = sushi — sushi pays the most." },
        { ko: "제한 시간이 빡빡하니 동선을 짧게 잡고, 트릭으로 속도를 유지하면서 한 번에 여러 건을 처리하세요.", en: "The timer is tight — plan short routes, keep speed up with tricks, and batch several deliveries per run." },
      ],
      videos: [
        { title: { ko: "슈퍼 크레이지 딜리버리 전 레벨 S랭크", en: "Super Crazy Delivery, all levels S Rank" }, url: YT("86mu5lmXQws") },
        { title: { ko: "크레이지 딜리버리 S랭크", en: "Crazy Delivery S Rank" }, url: YT("S8nZ8LeztYU") },
      ],
      achievementSlug: "delivery_clear",
    },
    {
      slug: "goro-goro-kitchen",
      name: { ko: "고로고로 키친 (요리)", en: "Goro Goro Kitchen (cooking)" },
      category: { ko: "요리", en: "Cooking" },
      difficulty: 2,
      location: { ko: "고로고로 키친 (챕터 1부터 이용)", en: "Goro Goro Kitchen (available from Chapter 1)" },
      summary: {
        ko: "재료로 HP·히트 회복 아이템과 크루용 특수 소비 아이템을 만드는 요리 미니게임. 「불 지피기」·「썰기」·「불순물 걷어내기」 세 가지 타이밍/입력 게임으로 구성되며, 결과가 좋을수록 요리 품질과 효과가 올라갑니다. 챕터 1 「Shipwrecked」부터 해금됩니다.",
        en: "A cooking minigame that turns ingredients into HP/Heat recovery items and special crew consumables. It's built from three timing/input games — Starting a Fire, Slicing and Dicing, and Skimming the Scum — and better results raise dish quality and effects. Unlocks in Chapter 1, 'Shipwrecked.'",
      },
      howTo: [
        { ko: "「불 지피기」는 버튼을 누르고 있다가 게이지가 구간에 들어올 때 떼세요. 주황은 양호, 빨강은 최상의 결과입니다.", en: "In Starting a Fire, hold and release when the gauge hits the zone — orange is good, red is a great result." },
        { ko: "「썰기」는 정확한 입력이 전부입니다. 속도보다 입력 정확도를 우선해 원을 채우세요.", en: "Slicing and Dicing is all about clean inputs — prioritize accuracy over speed to fill the circles." },
        { ko: "한 번에 같은 요리 3개까지 만들 수 있지만 미니게임 난이도가 올라갑니다. 처음엔 1개씩 안정적으로 만드세요.", en: "You can batch up to three of the same dish, but the minigames get harder — make one at a time until you're comfortable." },
      ],
      videos: [
        { title: { ko: "고로고로 키친 첫 4가지 요리", en: "Goro Goro Kitchen: first 4 dishes" }, url: YT("yeSXMFls-Lw") },
      ],
      achievementSlug: "cooking",
    },
    {
      slug: "the-ocean-hunter",
      name: { ko: "오션 헌터 (수중 슈팅)", en: "The Ocean Hunter (underwater shooter)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "게임 센터 아케이드", en: "Game Center arcade" },
      summary: {
        ko: "세가 클래식 「오션 헌터」 이식작. 잠수해 상어·바다뱀과 싸우며 보물을 노리는 온레일 수중 슈터로, 협동 플레이도 지원합니다. 바로크 시(스테이지 1)·루나 시(스테이지 2) 등으로 진행되며 크라켄·해머헤드 같은 보스가 등장합니다.",
        en: "A port of the SEGA classic The Ocean Hunter — an on-rails underwater shooter where you dive to fight sharks and sea snakes while grabbing treasure, with co-op support. It runs through Baroque Sea (Stage 1), Luna Sea (Stage 2), and more, with bosses like the Kraken and Hammerheads.",
      },
      howTo: [
        { ko: "단발보다 연사를 쓰세요. 탄이 수중에서 느리게 나아가니 움직이는 적은 살짝 앞을 겨냥(리드 샷)해야 맞습니다.", en: "Use rapid fire over single shots, and lead moving targets a bit since bullets travel slowly underwater." },
        { ko: "보물상자는 한 번 쏴 열고 계속 쏘면 보물 점수가 누적됩니다. 스테이지 곳곳을 둘러보며 상자를 챙기세요.", en: "Shoot a chest once to open it, then keep shooting to pile up treasure points — scan each stage for chests." },
        { ko: "크라켄은 공격해 오는 촉수를 쏴서 피해를 막습니다. 보스전은 패턴을 외워 안정적으로 대응하세요.", en: "Against the Kraken, shoot its attacking tentacles to negate damage — learn each boss pattern for a clean run." },
      ],
    },
    {
      slug: "sicko-snap",
      name: { ko: "시코 스냅 (사진 촬영)", en: "Sicko Snap (photo rally)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "알로하 비치 트롤리 정류장 (쿠로키)", en: "Aloha Beach Trolley Stop (Kuroki)" },
      summary: {
        ko: "트롤리를 타고 호놀룰루를 돌며 나비 가면을 쓴 기인(파피용 보이즈)들을 카메라로 찍는 미니게임. 점수로 받은 스냅 포인트를 쿠로키의 교환소에서 보상으로 바꿉니다. 챕터 2 「Snap Those Sickos! Again!」 서브스토리 완료 후 해금됩니다.",
        en: "Ride the trolley around Honolulu and photograph eccentric masked weirdos (the Papillon Boys). Snap Points earned are traded at Kuroki's exchange for rewards. Unlocks after the Chapter 2 substory 'Snap Those Sickos! Again!'",
      },
      howTo: [
        { ko: "촬영 직전 줌인하고 대상을 화면 중앙에 맞추세요. 사진을 찍는 순간 시간이 느려져 구도를 잡기 쉽습니다.", en: "Zoom in and center the subject before shooting — taking a photo briefly slows time, making framing easier." },
        { ko: "흰색·금색 시코는 한 자리에 가만히 서 있습니다. 금색 시코가 팔로 「N」 포즈를 만드는 순간 찍으면 보너스 점수입니다.", en: "White and Gold Sickos stand still — snap the Gold one the instant his arms form the 'N' pose for bonus points." },
        { ko: "첫 플레이 후 3개 트롤리 노선을 고를 수 있습니다. 노선별로 등장 시코가 다르니 포인트를 효율적으로 모으세요.", en: "After your first run you can pick among three trolley routes — each spawns different Sickos, so farm points efficiently." },
      ],
    },
    {
      slug: "sega-arcade",
      name: { ko: "세가 아케이드 (버추어 파이터 3 등)", en: "SEGA arcade (Virtua Fighter 3, etc.)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "게임 센터 아케이드", en: "Game Center arcade" },
      summary: {
        ko: "세가 모델 3 이식작 모음. 버추어 파이터 3·3tb, 파이팅 바이퍼즈 2, 스파이크아웃 파이널 에디션, 세가 레이싱 클래식 2, 오션 헌터 등 7종의 아케이드 게임을 즐길 수 있습니다.",
        en: "A collection of SEGA Model 3 ports: Virtua Fighter 3 and 3tb, Fighting Vipers 2, Spikeout: Final Edition, Sega Racing Classic 2, The Ocean Hunter, and more — seven arcade titles in all.",
      },
      howTo: [
        { ko: "버추어 파이터 3·파이팅 바이퍼즈 같은 대전 격투는 CPU 한 판만 이기면 대개 컴플리션 체크가 됩니다.", en: "For fighters like Virtua Fighter 3 and Fighting Vipers, beating the CPU once usually ticks the completion check." },
        { ko: "스파이크아웃은 벨트스크롤 액션입니다. 적에게 둘러싸이지 말고 광역기로 군집을 정리하세요.", en: "Spikeout is a beat-'em-up — avoid getting surrounded and use area attacks to clear groups." },
        { ko: "막히는 종목은 풀 플레이 영상을 참고하면 패턴 파악이 빨라집니다.", en: "For stubborn titles, a full-playthrough video speeds up learning the patterns." },
      ],
    },
    {
      slug: "master-system",
      name: { ko: "세가 마스터 시스템 (레트로 콘솔)", en: "SEGA Master System (retro console)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "리치 아일랜드 창고 · 리볼브 바 · 마들랜티스 해적 방", en: "Rich Island shed, Revolve Bar, Madlantis pirate room" },
      summary: {
        ko: "본작에는 통째로 마스터 시스템이 추가되어 15종의 게임을 수집·플레이할 수 있습니다. 포세이돈 워즈 3D·스페이스 해리어 3D 등 신규 수록작도 있으며, ROM 카트리지를 거점 곳곳에서 찾아 모으는 수집 요소가 핵심입니다.",
        en: "The game adds an entire Master System with 15 collectible, playable titles, including new additions like Poseidon Wars 3D and Space Harrier 3D. The hook is hunting down ROM cartridges scattered across your bases.",
      },
      howTo: [
        { ko: "ROM은 리치 아일랜드 창고, 리볼브 바, 마들랜티스 해적 방 등에 흩어져 있습니다. 거점을 둘러보며 카트리지를 모으세요.", en: "ROMs are scattered across the Rich Island shed, Revolve Bar, and the Madlantis pirate room — sweep your bases to collect cartridges." },
        { ko: "컴플리션은 게임 클리어가 아니라 수집·구동 자체가 목적인 경우가 많으니 우선 모든 ROM을 확보하세요.", en: "Completion usually wants the collection itself rather than clearing each game — secure every ROM first." },
      ],
    },
    {
      slug: "goro-kingdom",
      name: { ko: "고로 킹덤 (동물 농장/동물원)", en: "Goro Kingdom (animal farm/zoo)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "고로 킹덤 (마지마의 해적단 거점)", en: "Goro Kingdom (Majima's pirate base)" },
      summary: {
        ko: "마지마가 모험 중 구조·포획한 동물을 모아 기르는 농장/동물원형 미니게임. 동물은 요리 재료를 제공하고 일부는 크루로 합류합니다. 하와이 각지를 탐색하며 동물을 찾아 채우는 수집 요소가 컴플리션과 연결됩니다.",
        en: "A farm/zoo minigame where Majima keeps animals rescued and captured on his travels. Animals supply cooking ingredients and some join the crew. The collection — tracking down animals across Hawaii — ties into completion.",
      },
      howTo: [
        { ko: "동물은 하와이 곳곳과 해상 탐험에서 발견됩니다. 특정 동물은 진행/장비 조건이 있으니 단서를 보고 차근차근 모으세요.", en: "Animals turn up across Hawaii and on sea expeditions — some have progress or gear requirements, so collect them as clues unlock." },
        { ko: "모은 동물은 고로고로 키친 요리 재료가 되므로, 요리 컴플리션과 병행하면 효율적입니다.", en: "Collected animals feed Goro Goro Kitchen recipes, so progressing cooking and the kingdom together is efficient." },
      ],
      videos: [
        { title: { ko: "고로 킹덤 소개", en: "The Goro Kingdom" }, url: YT("P7Z2AVKY2xc") },
      ],
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "호놀룰루 가라오케", en: "Karaoke spots, Honolulu" },
      summary: {
        ko: "시리즈 전통의 타이밍 리듬게임. 노트가 판정 링에 겹치는 순간 입력해 점수를 올리며, 전곡 일정 점수 이상이 컴플리션 조건입니다.",
        en: "The series' staple timing rhythm game — input as notes overlap the judgment ring; completion wants a target score on every track.",
      },
      howTo: [
        { ko: "음악 박자보다 화면 표시를 믿으세요. 노트가 링에 정확히 겹치는 순간 입력하면 고득점이 안정적입니다.", en: "Trust the on-screen cue over the music's beat — input exactly as the note overlaps the ring for a steady high score." },
        { ko: "막히는 곡은 풀콤보 영상으로 입력 패턴을 외우면 목표 점수를 넘기기 쉽습니다.", en: "For stubborn songs, memorize the pattern from a full-combo video to clear the target score." },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "호놀룰루 바", en: "Bars, Honolulu" },
      summary: {
        ko: "301과 카운트업 모드의 다트. 흔들리는 조준 레티클을 타이밍 맞춰 던지는 시리즈 전통 종목입니다.",
        en: "Darts in 301 and Count-Up modes — time your throw as the swaying reticle crosses the target, a series staple.",
      },
      howTo: [
        { ko: "조준점이 목표(불스아이 또는 트리플20)를 지나는 순간 릴리스하세요.", en: "Release the instant the reticle crosses your target (bullseye or triple-20)." },
        { ko: "301은 무리하게 트리플을 노리지 말고 안정적인 20점·불로 정확히 0까지 깎으세요.", en: "In 301, don't force triples — steady 20s and bulls that bring you to exactly zero win it." },
      ],
    },
  ],
};
