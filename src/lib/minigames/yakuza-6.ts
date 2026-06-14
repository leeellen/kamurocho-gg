import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza 6: The Song of Life. Difficulty is rated
// for the Completion List grind, not casual play. Cross-referenced against
// community guides (GameFAQs, gamepressure, Neoseeker) and video tutorials.
export const yakuza6Minigames: MinigamesData = {
  appId: 1388590,
  intro: {
    ko: "Y6는 무대가 카무로초와 오노미치 두 곳으로 나뉘고, 야구단 매니지먼트·클랜 크리에이터·작살 낚시 같은 굵직한 미니게임이 컴플리션의 핵심입니다. 일부는 챕터 진행으로만 해금되니 순서를 참고하세요. 악명 높은 종목은 영상까지 함께 보면 훨씬 수월합니다.",
    en: "Yakuza 6 splits play between Kamurocho and Onomichi, and its big-ticket minigames — baseball management, Clan Creator, and spearfishing — anchor the Completion List. Some only unlock as the story advances, so mind the order. The tougher ones go much smoother with the videos attached.",
  },
  minigames: [
    {
      slug: "baseball-management",
      name: { ko: "야구단 매니지먼트 (세토우치 워리어스)", en: "Baseball Management (Setouchi Warriors)" },
      category: { ko: "매니지먼트", en: "Management" },
      difficulty: 4,
      location: { ko: "오노미치 진가이초 야구장 (키류가 감독)", en: "Onomichi Jingaicho ball field (Kiryu as manager)" },
      summary: {
        ko: "키류가 동네 약체 야구단 「세토우치 워리어스」의 감독이 되어 선수를 영입·육성하고 리그를 제패하는 매니지먼트 미니게임. 챕터 4 낮에 해금됩니다.",
        en: "Kiryu becomes manager of the puny Setouchi Warriors, recruiting and training players to dominate the local league. Unlocks in Chapter 4 during daytime.",
      },
      howTo: [
        { ko: "선수는 오노미치 거리·바에서 영입합니다. 술·음식·근육 보충제 등 요구 아이템을 미리 사 두면 바로 합류시킬 수 있습니다.", en: "Recruit players around Onomichi's streets and bars — stock the item each one demands (booze, food, supplements) to sign them on the spot." },
        { ko: "경기는 자동 진행되지만 타석 기회가 옵니다. 안타(출루)만 쳐도 팀 사기 버프가 붙으니 무리한 홈런보다 정확한 타이밍을 우선하세요.", en: "Matches auto-play but you get at-bats — even a single buffs team morale, so prioritize timing over swinging for the fences." },
        { ko: "에이스급 영입 선수(요시다 등)를 라인업에 넣고, 상금으로 선수 능력치를 강화해 후반 강팀에 대비하세요.", en: "Slot ace recruits (e.g. Yoshida) into the lineup and reinvest winnings into stat upgrades for the tougher late opponents." },
      ],
      videos: [
        { title: { ko: "야구 서브스토리 19 가이드 (영입 치트시트)", en: "Baseball Substory 19 guide (recruit cheat sheet)" }, url: YT("N3RYb3XbF3w") },
        { title: { ko: "세토우치 워리어스 팀 운영 가이드", en: "Setouchi Warriors team management" }, url: YT("SyRHN87e0ro") },
      ],
      achievementSlug: "ogfac41",
    },
    {
      slug: "clan-creator",
      name: { ko: "클랜 크리에이터 (대 JUSTIS 전투)", en: "Clan Creator (battles vs. JUSTIS)" },
      category: { ko: "매니지먼트", en: "Management" },
      difficulty: 3,
      location: { ko: "카무로초 (챕터 5 해금, 마사오에게 말 걸기)", en: "Kamurocho (unlocks Chapter 5, talk to Masao)" },
      summary: {
        ko: "키류가 「키류 클랜」을 이끌고 JUSTIS 군단과 싸우는 RTS+타워 디펜스형 라인 전투. 리더를 영입·승급시켜 근접·탱크·원거리·돌격·수류탄 등 유닛 조합을 짭니다.",
        en: "A real-time, lane-based RTS/tower-defense where Kiryu's clan attacks JUSTIS. Recruit and promote leaders to unlock Melee, Tank, Ranged, Frenzy, and Grenade unit types.",
      },
      howTo: [
        { ko: "유닛은 라인을 따라 전진합니다. 적 구성에 맞춰 카운터 유닛(탱크로 막고 원거리로 딜)을 적시에 투입하세요.", en: "Units advance down lanes — feed in counter types on cue (tanks to soak, ranged to chip) against the enemy makeup." },
        { ko: "클랜 코드를 입력하면 특수 캐릭터(리더)를 영입할 수 있으니, 강한 리더를 빠르게 확보해 라인업을 강화하세요.", en: "Enter clan codes to recruit special leaders — grab strong ones early to power up your roster." },
        { ko: "보스급 미션은 게이지를 모아 발동하는 키류 본인의 필살기로 타이밍을 잡으면 안정적입니다.", en: "On boss missions, time Kiryu's own gauge-fueled special to swing tough fights." },
      ],
      videos: [
        { title: { ko: "클랜 크리에이터 입문 + 코드", en: "Clan Creator beginner's guide + codes" }, url: YT("scO7zV5BObE") },
        { title: { ko: "클랜 미션 01: 대 JUSTIS 전투", en: "Clan Mission 01: Battle Against JUSTIS" }, url: YT("H5TYsqQ5Ro4") },
      ],
      achievementSlug: "ogfac41",
    },
    {
      slug: "spearfishing",
      name: { ko: "작살 낚시", en: "Spearfishing" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "오노미치 페리 선착장 (이사오 씨, 낮)", en: "Onomichi ferry dock (talk to Isao-san, daytime)" },
      summary: {
        ko: "작살총으로 해양 생물을 쏘는 수중 온레일 슈터. 폐활량(HP)이 줄지 않게 공격적인 생물을 피하며 보물상자로 고득점을 노립니다. 챕터 4 낚시 서브스토리로 해금됩니다.",
        en: "An underwater on-rails shooter where you harpoon sea life. Avoid aggressive creatures (they drain your lung-capacity HP) and farm treasure chests for big scores. Unlocks via the Chapter 4 fishing substories.",
      },
      howTo: [
        { ko: "마지막 작살이 나가기 전에 수동 재장전하세요. 탄을 완전히 비우면 자동 재장전이 훨씬 느립니다.", en: "Reload manually before the last spear fires — letting it empty triggers a much slower auto-reload." },
        { ko: "보물상자는 드물지만 점수(=돈)가 막대하니 발견 즉시 우선 사격하세요.", en: "Treasure chests are rare but worth huge points (and money) — shoot them the instant you spot them." },
        { ko: "엠퍼러 스퀴드·상어 같은 보스는 더 좋은 작살총을 갖춘 뒤 도전하면 클리어가 쉬워집니다.", en: "Bosses like the Emperor Squid and the final shark get far easier once you've unlocked a better speargun." },
      ],
      videos: [
        { title: { ko: "작살 낚시 전 스테이지 (노 대미지)", en: "Spearfishing all stages (no damage)" }, url: YT("1c5EuQ2O8WY") },
        { title: { ko: "전 작살총 입수 가이드", en: "All spearguns guide" }, url: YT("NxWp0WBnPp0") },
      ],
    },
    {
      slug: "rizap",
      name: { ko: "RIZAP (헬스장 트레이닝)", en: "RIZAP (gym training)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "RIZAP 짐 (카무로초·오노미치)", en: "RIZAP gym (Kamurocho & Onomichi)" },
      summary: {
        ko: "벤치프레스·데드리프트·스쿼트·랫풀다운 등 운동의 타이밍 입력으로 키류를 단련하는 트레이닝 미니게임. 트레이닝 후 지정 식사를 하면 다량의 경험치를 줍니다.",
        en: "A training minigame where timed inputs power Kiryu through bench press, deadlifts, squats, and lat pulldowns. After a session you eat a prescribed dish for a big EXP payout.",
      },
      howTo: [
        { ko: "프롬프트가 판정 구간에 들어오는 순간 정확히 입력하면 S랭크가 나옵니다. 음악 박자보다 화면 표시를 믿으세요.", en: "Hit each prompt exactly inside the timing window for an S rank — trust the on-screen cue over rhythm." },
        { ko: "트레이닝 직후 지정된 가게에서 추천 메뉴를 먹어 경험치 보너스를 챙기세요.", en: "Right after training, eat the prescribed dish at the named restaurant to claim the EXP bonus." },
        { ko: "모든 종목을 한 번씩 체험하는 것이 트로피/컴플리션 조건이니 빠짐없이 돌아 보세요.", en: "Completion/trophy wants every exercise tried at least once — cycle through them all." },
      ],
      videos: [
        { title: { ko: "RIZAP 짐 전 종목 S랭크", en: "RIZAP gym all exercises, all S ranks" }, url: YT("7UxJkmrj_ps") },
      ],
    },
    {
      slug: "cat-cafe",
      name: { ko: "캣 카페 (고양이 영입)", en: "Cat Café (recruiting cats)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "냥냥 캣 카페, 카무로초 센료도리", en: "Nyan Nyan Cat Café, Senryo Ave., Kamurocho" },
      summary: {
        ko: "거리에 흩어진 길고양이 19마리를 찾아 카페로 데려오는 수집 미니게임. 챕터 2에서 Troublr 앱 해금 후 고양이가 등장합니다.",
        en: "A collection minigame: track down 19 stray cats and bring them to the café. Cats start appearing after the Troublr app unlocks in Chapter 2.",
      },
      howTo: [
        { ko: "근처에 고양이가 있으면 울음소리가 크게 들리고 미니맵에 파란 점이 뜹니다. 소리를 단서로 탐색하세요.", en: "A nearby cat meows loudly and shows as a blue dot on the minimap — use the sound as your cue." },
        { ko: "고양이마다 좋아하는 먹이가 달라 3번 안에 맞춰 친밀도를 채워야 합니다. 실패하면 도망가니 신중히.", en: "Each cat likes a specific food and you get three tries to fill its friendship meter before it bolts — choose carefully." },
        { ko: "어떤 고양이든 골드 참치(1캔 10,000엔)는 무조건 좋아하니, 까다로운 개체는 골드 참치로 확실히 영입하세요.", en: "Every cat loves Gold Tuna (¥10,000/can) — use it to guarantee the fussy ones." },
      ],
      videos: [
        { title: { ko: "고양이 19마리 전체 위치", en: "All 19 cat locations" }, url: YT("rj4zm6CKqF4") },
      ],
    },
    {
      slug: "live-chat",
      name: { ko: "라이브 챗 (웹캠 채팅)", en: "Live Chat (webcam chat)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "인터넷 카페 PC (서브스토리 22 이후)", en: "Net café PCs (after Substory 22)" },
      summary: {
        ko: "웹캠 채팅 상대(안리/유아)에게 제한 시간 안에 정확한 버튼 입력으로 메시지를 보내 호감도를 올리는 미니게임. 「라이브 챗의 유혹」 서브스토리 완료 후 해금됩니다.",
        en: "A timed input minigame: type the right responses to webcam chat partners (Anri/Yua) to raise their affection. Unlocks after Substory 22, 'The Temptation of Live Chat.'",
      },
      howTo: [
        { ko: "프롬프트로 뜨는 버튼 조합을 제한 시간 안에 정확히 입력해야 메시지가 전송됩니다. 입력 실패가 쌓이면 세션이 조기 종료됩니다.", en: "Enter each prompted button combo within the timer or the message fails — too many misses ends the session early." },
        { ko: "세션당 DMM 3000 포인트가 들고, 호감도를 끝까지 채우면 다음 진행에 필요한 세션 수가 줄어듭니다.", en: "Each session costs 3,000 DMM points; maxing affection reduces how many sessions you need to progress." },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "스낵 뉴 가우디 (오노미치)", en: "Snack New Gaudi (Onomichi)" },
      summary: {
        ko: "301과 카운트업 모드. 조준 레티클이 흔들리는 걸 타이밍 맞춰 던지는 게임입니다.",
        en: "301 and Count-Up modes — time your throw as the swaying reticle crosses the target.",
      },
      howTo: [
        { ko: "조준점이 목표(불스아이/트리플20)를 지나는 순간 릴리스합니다.", en: "Release the instant the reticle crosses your target (bullseye or triple-20)." },
        { ko: "301은 무리하게 트리플을 노리지 말고 안정적인 20점·불로 정확히 0까지 깎으세요.", en: "In 301 don't force triples — steady 20s and bulls that bring you to exactly zero win it." },
      ],
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 4,
      location: { ko: "마작장 (카무로초)", en: "Mahjong parlor (Kamurocho)" },
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
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "가라오케관·스낵 뉴 가우디", en: "Karaoke bars & Snack New Gaudi" },
      summary: {
        ko: "타이밍 리듬게임. 시리즈 명곡들을 부르며 전곡 일정 점수 이상이 컴플리션 조건입니다.",
        en: "A timing rhythm game with series classics; completion wants a target score on every track.",
      },
      howTo: [
        { ko: "노트가 판정 링에 정확히 겹치는 순간 입력하세요. 음악 박자보다 화면 표시를 믿는 게 정확합니다.", en: "Input exactly as the note overlaps the ring — trust the on-screen cue over the music's beat." },
        { ko: "막히는 곡은 풀콤보 영상으로 입력 패턴을 외우면 고득점이 안정적입니다.", en: "For stubborn songs, memorize the pattern from a full-combo video for a steady high score." },
      ],
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드 (버추어 파이터 5·뿌요뿌요 등)", en: "Club SEGA arcades (Virtua Fighter 5, Puyo Puyo, etc.)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "클럽 세가 (카무로초 나카미치도리·게키조도리)", en: "Club SEGA (Nakamichi St. & Theater Square, Kamurocho)" },
      summary: {
        ko: "버추어 파이터 5 FS·뿌요뿌요 전편이 플레이 가능하며, 스페이스 해리어·판타지 존·아웃런·슈퍼 행온 같은 레트로 이식작도 들어 있습니다. UFO 캐처(인형뽑기)도 즐길 수 있습니다.",
        en: "The full Virtua Fighter 5: Final Showdown and Puyo Puyo are playable, alongside retro ports of Space Harrier, Fantasy Zone, OutRun, and Super Hang-On — plus UFO Catcher claw machines.",
      },
      howTo: [
        { ko: "버추어 파이터 5와 뿌요뿌요는 나카미치도리 클럽 세가, 레트로 4종은 게키조도리 클럽 세가에 있습니다.", en: "VF5 and Puyo Puyo are at Club SEGA Nakamichi St.; the four retro titles are at Club SEGA Theater Square." },
        { ko: "판타지 존은 코인을 모아 풍선 상점에서 엔진→강화 무기→폭탄 순으로 투자하는 돈 관리 게임입니다.", en: "Fantasy Zone is money-management — spend coins at the balloon shop on engines, then a strong weapon, then bombs." },
        { ko: "UFO 캐처는 발톱이 경품을 살짝이라도 출구 쪽으로 미는 위치를 노려 여러 번 시도하세요.", en: "For UFO Catcher, aim where the claw nudges the prize toward the chute and retry — patience pays." },
      ],
    },
  ],
};
