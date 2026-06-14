import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza 0 (Director's Cut). Difficulty is rated
// for the completion-list / 100% grind, not for casual play. Cross-referenced
// against the curated achievement guides and community video tutorials.
export const yakuza0Minigames: MinigamesData = {
  appId: 2988580,
  intro: {
    ko: "Y0는 시리즈에서 미니게임 밀도가 가장 높은 작품 중 하나입니다. 컴플리트 리스트와 「놀이를 제패한 남자」 트로피를 노린다면 아래 종목을 모두 한 번씩은 건드려야 합니다. 악명 높은 종목(마작·당구·Fantasy Zone)은 영상까지 함께 보면 훨씬 수월합니다.",
    en: "Yakuza 0 has one of the densest minigame spreads in the series. For the Completion List and the 'What a Player' trophy you'll need to touch every entry below at least once. The notorious ones (mahjong, billiards, Fantasy Zone) go much smoother with the videos attached.",
  },
  minigames: [
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: { ko: "카무로초·소텐보리 마작장", en: "Mahjong parlors in Kamurocho & Sotenbori" },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 시리즈 최대 난관이지만, 한 가지 패턴만 알면 컴플리션은 충분히 넘깁니다.",
        en: "Standard Japanese riichi mahjong — the series' biggest wall if you don't know the rules, but one pattern is enough for completion.",
      },
      howTo: [
        { ko: "손패를 절대 공개(펑/치)하지 말고 닫은 채로 유지하세요. 그래야 리치를 선언할 수 있습니다.", en: "Keep your hand fully closed (never call Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 「탄야오」를 노립니다. 4면자+1쌍으로 텐파이가 되면 리치 선언 → 역이 자동으로 붙어 화료.", en: "Chase Tanyao (only simples 2–8). When you're one tile from 4 sets + a pair, declare Riichi — a yaku attaches automatically." },
        { ko: "컴플리션은 큰 점수가 아니라 화료(승리) 자체가 목적입니다. 점수 욕심 내지 말고 빠른 화료 위주로.", en: "Completion only needs wins, not big scores — prioritize fast hands over value." },
      ],
      videos: [
        { title: { ko: "마작 입문 가이드 (Yakuza 0)", en: "Mahjong for beginners (Yakuza 0)" }, url: YT("VwnEujAKE3A") },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: { ko: "소텐보리 쇼기장", en: "Sotenbori shogi parlor" },
      summary: {
        ko: "일본 장기. 잡은 말을 다시 놓을 수 있는 「持ち駒」 규칙이 체스와 다른 핵심입니다.",
        en: "Japanese chess — the key difference from Western chess is that captured pieces can be dropped back onto the board.",
      },
      howTo: [
        { ko: "왕을 지키는 「囲い(가코이)」 진형을 먼저 갖추고 공격하세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king before attacking — Mino castle is the easiest starter." },
        { ko: "잡은 말은 즉시 재투입할 수 있으니, 적진 깊숙이 말을 떨어뜨려 압박하세요.", en: "Captured pieces can be dropped anywhere — parachute them deep into enemy territory to apply pressure." },
        { ko: "컴플리션은 1승이면 충분합니다. 어려우면 약한 상대를 골라 도전하세요.", en: "Completion needs just one win — pick a weak opponent if you're struggling." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "billiards",
      name: { ko: "당구 (포켓·캐롬)", en: "Billiards / Pool" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 3,
      location: { ko: "소텐보리 바 등", en: "Bars in Sotenbori" },
      summary: {
        ko: "9볼 포켓과 캐롬(캐논)·콤비네이션 샷이 핵심. 컴플리션에 캐롬샷 3회·콤비네이션 3회 조건이 있어 악명 높습니다.",
        en: "9-ball pool plus carom (cannon) and combination shots. The 3-carom and 3-combination completion targets are what make it infamous.",
      },
      howTo: [
        { ko: "「고스트 볼」 원리: 목적구를 포켓에 넣으려면 포켓 정반대편 목적구 표면을 큐볼이 때리도록 조준선을 맞춥니다.", en: "Ghost-ball rule: to sink a ball, aim so the cue ball strikes the point on it directly opposite the pocket." },
        { ko: "캐롬(캐논)샷은 큐볼이 한 공을 맞고 다른 공으로 가는 샷입니다. 혼자 플레이로 두 공을 일직선에 두고 연습하면 쉽게 나옵니다.", en: "A carom is when the cue ball hits one ball then another — line two balls up in solo play to farm it easily." },
        { ko: "처음엔 회전(잉글리시)을 끄고 풀파워보다 조준 정확도를 우선하세요.", en: "Leave spin off at first and value aim over power." },
      ],
      videos: [
        { title: { ko: "당구 캐롬·콤비네이션 샷 공략", en: "Billiards: carom & combination shots" }, url: YT("UOR-DbgucxQ") },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "소텐보리 바", en: "Bars in Sotenbori" },
      summary: {
        ko: "301과 크리켓 모드. 레티클이 좌우로 흔들리는 걸 타이밍 맞춰 던지는 게임입니다.",
        en: "301 and Cricket modes — you time your throw as the reticle sways side to side.",
      },
      howTo: [
        { ko: "조준점이 목표(불스아이/트리플20)를 지나는 순간 릴리스합니다.", en: "Release the instant the reticle crosses your target (bullseye or triple-20)." },
        { ko: "301은 무리하게 트리플을 노리지 말고 안정적인 20점·불로 점수를 정확히 0까지 깎으세요.", en: "In 301 don't force triples — steady 20s and bulls that bring you to exactly zero win it." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 1,
      location: { ko: "마하라자 인근 볼링장", en: "Bowling alley near Maharaja" },
      summary: {
        ko: "방향과 파워, 스핀만 맞추면 되는 가장 쉬운 미니게임 중 하나.",
        en: "One of the easiest minigames — just line up direction, power, and spin.",
      },
      howTo: [
        { ko: "스폿(레인의 화살표)에 핀이 아니라 화살표를 기준으로 조준하면 스트라이크 확률이 올라갑니다.", en: "Aim at the lane arrows (spots), not the pins, for more consistent strikes." },
        { ko: "약간의 스핀을 줘 1-3번 핀 사이 「포켓」을 노리세요.", en: "Apply slight spin to hit the 1-3 'pocket'." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "pocket-circuit",
      name: { ko: "포켓 서킷", en: "Pocket Circuit" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "카무로초 포켓 서킷 스타디움 (키류)", en: "Pocket Circuit Stadium, Kamurocho (Kiryu)" },
      summary: {
        ko: "미니카 튜닝 레이스. 운전 실력보다 차 세팅이 승부를 가르며, 후반 컵은 빌드 없이는 거의 불가능합니다.",
        en: "A mini-car tuning racer — setup matters more than driving, and late cups are near-impossible without the right build.",
      },
      howTo: [
        { ko: "직선이 긴 코스는 모터·기어비로 최고속을, 커브 많은 코스는 그립 타이어+다운포스로 코스 이탈을 막으세요.", en: "Gear for top speed on straight tracks; add grip tires + downforce on curvy ones to stop flying off." },
        { ko: "부품이 무거우면 후반에 배터리(스태미나)가 떨어져 멈춥니다. 완주 가능한 무게로 균형을 맞추세요.", en: "Heavy parts drain the battery and stall you late — balance for a weight that finishes." },
        { ko: "막히는 컵은 영상의 추천 빌드를 그대로 따라가면 대부분 뚫립니다.", en: "Stuck on a cup? Copy a recommended build from the video and it usually clears." },
      ],
      videos: [
        { title: { ko: "포켓 서킷 우승 빌드·팁", en: "Pocket Circuit win & build tips" }, url: YT("mp-4G6Q-7gs") },
      ],
      achievementSlug: "32_the_dragon",
    },
    {
      slug: "disco",
      name: { ko: "디스코", en: "Disco" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 3,
      location: { ko: "마하라자 디스코 (마지마)", en: "Maharaja disco (Majima)" },
      summary: {
        ko: "리듬게임. 프롬프트 타이밍을 맞춰 점수를 쌓고, 「코이노 디스코 퀸」 등 댄스 배틀에서 라이벌을 이겨야 합니다.",
        en: "A rhythm game — match the prompt timing to build score and beat dance-battle rivals like the Disco Queen.",
      },
      howTo: [
        { ko: "프롬프트가 판정선에 「닿기 직전」 살짝 빨리 누르는 느낌으로 입력하면 Perfect가 잘 나옵니다.", en: "Input slightly early, just before each prompt reaches the line, to land Perfects." },
        { ko: "「Friday Night」 곡이 가장 쉬워 감을 잡는 연습용으로 추천합니다.", en: "'Friday Night' is the easiest track — best for learning the timing." },
        { ko: "고득점이 필요한 미스 이소베 배틀은 풀콤보 영상을 보고 입력 패턴을 외우면 안정적입니다.", en: "For the high-score Miss Isobe battle, memorize the input pattern from a full-combo video." },
      ],
      videos: [
        { title: { ko: "미스 이소베 디스코 배틀 (풀콤보)", en: "Miss Isobe disco battle (full combo)" }, url: YT("XuhUb6pHCQA") },
      ],
      achievementSlug: "30_say_you",
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초·소텐보리 가라오케관", en: "Karaoke bars in both cities" },
      summary: {
        ko: "타이밍 리듬게임. 「Bakamitai」 등 시리즈 명곡을 부르며, 전곡 일정 점수 이상이 컴플리션 조건입니다.",
        en: "A timing rhythm game with series classics like 'Bakamitai'; completion wants a target score on every track.",
      },
      howTo: [
        { ko: "노트가 판정 링에 정확히 겹치는 순간 입력하세요. 음악 박자보다 화면 표시를 믿는 게 정확합니다.", en: "Input exactly as the note overlaps the ring — trust the on-screen cue over the music's beat." },
        { ko: "키류와 마지마의 곡 목록이 다르니 양쪽 모두 점검하세요.", en: "Kiryu and Majima have different song lists — check both." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드 (Fantasy Zone 등)", en: "Club Sega arcades (Fantasy Zone, etc.)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 클럽 세가", en: "Club Sega in both cities" },
      summary: {
        ko: "아웃런·스페이스 해리어·슈퍼 행온·Fantasy Zone 등 실제 SEGA 아케이드 이식작. Fantasy Zone이 고득점 기준 가장 까다롭습니다.",
        en: "Real SEGA arcade ports — OutRun, Space Harrier, Super Hang-On, Fantasy Zone. Fantasy Zone is the trickiest for a high score.",
      },
      howTo: [
        { ko: "Fantasy Zone은 돈 관리 게임입니다. 코인을 모아 풍선 상점에서 ① 엔진(스피드업) → ② 강화 무기(와이드 빔/레이저) → ③ 보스용 폭탄 순으로 투자하세요.", en: "Fantasy Zone is money-management: spend coins at the balloon shop on ① engines (speed), ② a strong weapon (Wide Beam/Laser), ③ bombs for bosses." },
        { ko: "각 스테이지의 기지 10개를 모두 부수면 보스가 등장합니다. 보스는 근접에서 더 큰 데미지를 줍니다.", en: "Destroy all 10 bases in a stage to summon the boss — it takes more damage up close." },
        { ko: "아웃런은 갈림길에서 난이도 낮은 쪽을 골라 체크포인트를 안정적으로 통과하세요.", en: "In OutRun, take the easier fork to reach checkpoints reliably." },
      ],
      videos: [
        { title: { ko: "Fantasy Zone 공략 (Director's Cut)", en: "Fantasy Zone easy guide (Director's Cut)" }, url: YT("FFkdY2YqRXY") },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "catfight",
      name: { ko: "캣 파이트", en: "Cat Fight" },
      category: { ko: "소텐보리", en: "Sotenbori" },
      difficulty: 2,
      location: { ko: "소텐보리 캣 파이트 클럽 (마지마)", en: "Cat Fight club, Sotenbori (Majima)" },
      summary: {
        ko: "여성 격투에 베팅하는 도박+육성 미니게임. 선수를 영입·강화해 토너먼트에서 우승해야 합니다.",
        en: "A betting-plus-management minigame: recruit and train fighters, then win tournaments.",
      },
      howTo: [
        { ko: "선수의 체급·기술·체력 밸런스를 보고 상대보다 우위인 선수를 출전시키세요.", en: "Field the fighter who out-stats the opponent in weight, technique, and stamina." },
        { ko: "상금으로 선수를 강화하고 신규 선수를 영입해 라인업을 두껍게 만드세요.", en: "Reinvest winnings into upgrades and new recruits to deepen your roster." },
      ],
      achievementSlug: "31_cat_scratch",
    },
    {
      slug: "fishing",
      name: { ko: "낚시", en: "Fishing" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "소텐보리 강 (민물) · 도쿄 부두 (바다)", en: "Sotenbori river (freshwater) & Tokyo pier (saltwater)" },
      summary: {
        ko: "민물 15종·바다 18종 도감 완성이 컴플리션 조건. 어종마다 출현 위치가 정해져 있습니다.",
        en: "Completion wants the full log: 15 freshwater + 18 saltwater fish, each with set spawn spots.",
      },
      howTo: [
        { ko: "찌가 들어갈 때(반응이 올 때) 릴을 감고, 줄이 빨갛게 긴장되면 잠시 멈춰 줄이 끊기지 않게 하세요.", en: "Reel when the float dips; when the line glows red (tension), pause so it doesn't snap." },
        { ko: "대형 어종(상어·개복치 등)은 특정 위치에서만 걸리니 도감/영상의 위치를 참고하세요.", en: "Big fish (sharks, oarfish) only bite at specific spots — follow the log/video locations." },
      ],
      videos: [
        { title: { ko: "민물 15종 낚시 가이드 (Director's Cut)", en: "All 15 freshwater fish (Director's Cut)" }, url: YT("UGt3PXkmMDA") },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "mesuking",
      name: { ko: "메스킹 (곤충 카드 배틀)", en: "MesuKing (beetle card battle)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "소텐보리 (마지마)", en: "Sotenbori (Majima)" },
      summary: {
        ko: "가위바위보 + 스탯 싸움형 카드 배틀. 라이벌 NPC를 차례로 격파해야 합니다.",
        en: "A rock-paper-scissors-plus-stats card battle where you beat rival NPCs in sequence.",
      },
      howTo: [
        { ko: "STR > TECH > SPD > STR 삼각관계입니다. 라이벌마다 선호 타입이 고정이라, 한 번 지면 패턴을 외워 카운터 타입을 내세요.", en: "STR > TECH > SPD > STR. Each rival favors a fixed type — lose once, learn it, then counter-pick." },
        { ko: "기술(필살기) 카드는 게이지가 찼을 때 큰 데미지를 주니 접전 라운드에 아껴 쓰세요.", en: "Technique cards hit hardest with a full gauge — save them for close rounds." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "telephone-club",
      name: { ko: "텔레폰 클럽", en: "Telephone Club" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 1,
      location: { ko: "소텐보리 (마지마)", en: "Sotenbori (Majima)" },
      summary: {
        ko: "전화 데이트 미니게임. 상대의 말에 맞는 선택지를 골라 호감도를 올립니다.",
        en: "A phone-dating minigame: pick responses that match what the caller wants to raise affection.",
      },
      howTo: [
        { ko: "상대가 원하는 분위기(적극/소극)를 듣고 그에 맞는 선택지를 고르세요. 컴플리션은 1회 플레이면 카운트됩니다.", en: "Read whether she wants bold or gentle replies and match it — completion counts after one play." },
      ],
      achievementSlug: "28_what_a",
    },
  ],
};
