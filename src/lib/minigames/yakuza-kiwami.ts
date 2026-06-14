import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza Kiwami. Difficulty is rated for the 100%
// completion list, not for casual play. Cross-referenced against community
// completion guides (GameFAQs / Steam / StrategyWiki) and video tutorials.
export const yakuzaKiwamiMinigames: MinigamesData = {
  appId: 3717330,
  intro: {
    ko: "Yakuza Kiwami는 카무로초 한 곳에 미니게임이 몰려 있어 컴플리션 도전이 비교적 집약적입니다. 「놀이를 제패한 남자(What a Player)」 트로피를 노린다면 아래 종목을 모두 한 번씩은 플레이해야 하며, 포켓 서킷·메스킹·마작은 별도의 전용 트로피와 빡빡한 조건이 있어 가장 악명 높습니다.",
    en: "Yakuza Kiwami packs all its minigames into a single Kamurocho, so the completion grind is fairly concentrated. For the 'What a Player' trophy you'll need to play every entry below at least once, and Pocket Circuit, MesuKing, and Mahjong have their own dedicated trophies with strict targets that make them the most notorious.",
  },
  minigames: [
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: { ko: "카무로초 마작장 (4가)", en: "Mahjong parlor, Kamurocho (Theater Square area)" },
      summary: {
        ko: "표준 일본 리치 마작. 컴플리션에 10회 화료·만관 5회·하네만 1회·리치 일발·일기통관 등 까다로운 조건이 붙어 시리즈 최대 난관 중 하나입니다.",
        en: "Standard Japanese riichi mahjong. Completion demands 10 wins, 5 Mangan, 1 Haneman, a Riichi Ippatsu, and a Full Straight — one of the series' biggest walls.",
      },
      howTo: [
        { ko: "손패를 펑/치로 공개하지 말고 닫은 채 유지해야 리치를 선언할 수 있고, 리치 일발·만관 조건도 닫은 손에서 나옵니다.", en: "Keep your hand fully closed (never call Pon/Chi) — you need that to declare Riichi, and Riichi Ippatsu / Mangan come from closed hands." },
        { ko: "기본은 2~8 숫자패만 모으는 「탄야오」, 일기통관 조건은 한 종류 1~9 연속을 노리면 됩니다.", en: "Default to Tanyao (only simples 2–8); for the Full Straight target, chase a 1–9 run in a single suit." },
        { ko: "리치 일발은 리치 선언 직후 한 바퀴 안에 화료하는 운 요소라, 텐파이를 빨리 만드는 게 확률을 올리는 유일한 방법입니다.", en: "Riichi Ippatsu means winning within one go-around of declaring — reaching tenpai fast is the only way to farm the luck for it." },
      ],
      videos: [
        { title: { ko: "마작 입문 가이드 (Yakuza)", en: "An amateur's guide to mahjong (Yakuza)" }, url: YT("UrYyaBMiIcw") },
        { title: { ko: "리치 일발 등 100% 마작 공략", en: "Mahjong 100% guide (Riichi Ippatsu, etc.)" }, url: YT("nhFoL6ZSI7k") },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: { ko: "카무로초 쇼기장", en: "Shogi parlor, Kamurocho" },
      summary: {
        ko: "일본 장기. 잡은 말을 다시 판에 놓는 「持ち駒」 규칙이 핵심입니다. 컴플리션은 무르기(待った) 없이 1승이면 됩니다.",
        en: "Japanese chess; the key twist is dropping captured pieces back onto the board. Completion just needs one win without taking a move back.",
      },
      howTo: [
        { ko: "왕을 감싸는 「囲い(가코이)」 진형을 먼저 짜고 공격하세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king before attacking — Mino castle is the easiest starter." },
        { ko: "잡은 말은 적진 깊숙이 떨어뜨려 압박할 수 있으니 적극 활용하세요.", en: "Drop captured pieces deep into enemy territory to apply pressure." },
        { ko: "무르기를 한 번도 쓰지 않아야 카운트되니, 한 수 한 수 신중히 두세요.", en: "The win only counts with zero take-backs, so think each move through." },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "koi-koi",
      name: { ko: "코이코이 (화투)", en: "Koi-Koi (hanafuda)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "카무로초 카지노/도박장", en: "Gambling den, Kamurocho" },
      summary: {
        ko: "화투 카드로 「역(야쿠)」을 만드는 2인 도박. 오이쵸카부·초항 등과 함께 도박 컴플리션 항목을 채웁니다.",
        en: "A two-player hanafuda game where you build scoring combos (yaku). Counts toward the gambling completion alongside Oicho-Kabu, Cho-Han, etc.",
      },
      howTo: [
        { ko: "역이 완성되면 「코이코이(계속)」 대신 「쇼부(중단)」로 점수를 확정하는 게 안전합니다. 욕심내면 상대에게 역전당합니다.", en: "When you complete a yaku, calling Shobu (stop) to bank points is safer than Koi-Koi (continue) — greed lets the opponent overtake you." },
        { ko: "「타네/탄자쿠/카스」 등 같은 종류 카드를 모아 작은 역이라도 빨리 완성하세요.", en: "Collect cards of the same type (tane / tanzaku / kasu) to lock in even small yaku quickly." },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "pool",
      name: { ko: "당구 (포켓)", en: "Pool / Billiards" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 3,
      location: { ko: "카무로초 당구장", en: "Pool hall, Kamurocho" },
      summary: {
        ko: "9볼 포켓 당구. 컴플리션에 「콤비네이션 샷」 등 특정 샷 조건이 있어 일반 승리만으로는 끝나지 않습니다.",
        en: "9-ball pool. Completion requires specific shots (like combination shots), so plain wins alone won't finish it.",
      },
      howTo: [
        { ko: "「고스트 볼」 원리: 포켓 정반대편 목적구 표면을 큐볼이 때리도록 조준선을 맞추세요.", en: "Ghost-ball rule: aim so the cue ball strikes the point on the object ball directly opposite the pocket." },
        { ko: "콤비네이션 샷(한 공으로 다른 공을 밀어 넣기)은 혼자 플레이에서 두 공을 포켓 일직선에 두고 연습하면 쉽게 나옵니다.", en: "Farm combination shots (one ball pushing another in) in solo play by lining two balls up toward a pocket." },
        { ko: "처음엔 회전을 끄고 풀파워보다 조준 정확도를 우선하세요.", en: "Leave spin off at first and value aim over power." },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "카무로초 바", en: "Bar, Kamurocho" },
      summary: {
        ko: "301과 카운트업 모드. 좌우로 흔들리는 조준점을 타이밍 맞춰 던지는 게임입니다.",
        en: "301 and Count-Up modes — time your throw as the reticle sways side to side.",
      },
      howTo: [
        { ko: "조준점이 목표(불스아이/트리플20)를 지나는 순간 릴리스하세요.", en: "Release the instant the reticle crosses your target (bullseye or triple-20)." },
        { ko: "301은 무리하게 트리플을 노리지 말고 안정적으로 점수를 정확히 0까지 깎으세요.", en: "In 301 don't force triples — bring your total to exactly zero with steady scoring." },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 1,
      location: { ko: "카무로초 볼링장", en: "Bowling alley, Kamurocho" },
      summary: {
        ko: "방향·파워·스핀만 맞추면 되는 가장 쉬운 미니게임 중 하나.",
        en: "One of the easiest minigames — just line up direction, power, and spin.",
      },
      howTo: [
        { ko: "핀이 아니라 레인의 화살표(스폿)를 기준으로 조준하면 스트라이크 확률이 올라갑니다.", en: "Aim at the lane arrows (spots), not the pins, for more consistent strikes." },
        { ko: "약간의 스핀을 줘 1-3번 핀 사이 「포켓」을 노리세요.", en: "Apply slight spin to hit the 1-3 'pocket'." },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "카무로초 배팅 센터", en: "Batting Center, Kamurocho" },
      summary: {
        ko: "날아오는 공을 타이밍 맞춰 치는 게임. 홈런 챌린지에서 연속 안타·홈런을 쳐야 하는 코스가 컴플리션 조건입니다.",
        en: "Time your swing at incoming pitches. The Home Run Challenge courses (consecutive hits / home runs) are the completion targets.",
      },
      howTo: [
        { ko: "공이 홈플레이트에 거의 닿는 순간에 스윙하세요. 빠른 코스일수록 더 늦게 휘둘러야 맞습니다.", en: "Swing just as the ball nearly reaches the plate — faster courses need a later swing." },
        { ko: "홈런 챌린지는 코스가 거의 정해진 패턴이라, 같은 타이밍을 반복 연습하면 풀콤보가 안정적으로 나옵니다.", en: "Home Run Challenge pitches follow a near-fixed pattern, so drilling the same timing yields a reliable full combo." },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "pocket-circuit",
      name: { ko: "포켓 서킷", en: "Pocket Circuit" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "카무로초 포켓 서킷 스타디움", en: "Pocket Circuit Stadium, Kamurocho" },
      summary: {
        ko: "미니카 튜닝 레이스. 운전보다 차 세팅이 승부를 가르며, 모든 컵 우승이 전용 트로피 조건입니다.",
        en: "A mini-car tuning racer — setup matters more than driving, and winning every cup is a dedicated trophy.",
      },
      howTo: [
        { ko: "직선이 긴 코스는 모터·기어비로 최고속을, 커브 많은 코스는 그립 타이어와 다운포스로 코스 이탈을 막으세요.", en: "Gear for top speed on straight tracks; add grip tires + downforce on curvy ones to stop flying off." },
        { ko: "부품이 무거우면 후반에 배터리가 떨어져 멈춥니다. 완주 가능한 무게로 균형을 맞추세요.", en: "Heavy parts drain the battery and stall you late — balance for a weight that finishes." },
        { ko: "막히는 컵은 영상의 추천 빌드를 그대로 따라가면 대부분 뚫립니다.", en: "Stuck on a cup? Copy a recommended build from the video and it usually clears." },
      ],
      videos: [
        { title: { ko: "포켓 서킷 비기너·아마추어 컵 가이드", en: "Pocket Circuit: Beginner & Amateur Cup guide" }, url: YT("UaVsn4YPCwI") },
        { title: { ko: "포켓 서킷 마스터 컵 가이드", en: "Pocket Circuit: Master Cup guide" }, url: YT("hQWruCJ9wpg") },
      ],
      achievementSlug: "21_the_dragon_of_pocket_circuit_reborn",
    },
    {
      slug: "mesuking",
      name: { ko: "메스킹 (곤충 카드 배틀)", en: "MesuKing (beetle card battle)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "카무로초 클럽 세가", en: "Club Sega, Kamurocho" },
      summary: {
        ko: "가위바위보 + 스탯 싸움형 카드 배틀. 카드 45장 이상 수집과 라이벌 격파가 전용 트로피 조건입니다.",
        en: "A rock-paper-scissors-plus-stats card battle; collecting 45+ cards and beating the rivals is a dedicated trophy.",
      },
      howTo: [
        { ko: "STR > TECH > SPD > STR 삼각관계입니다. 라이벌마다 선호 타입이 고정이라 패턴을 외워 카운터 타입을 내세요.", en: "STR > TECH > SPD > STR. Each rival favors a fixed type — learn it, then counter-pick." },
        { ko: "기술 카드는 게이지가 찼을 때 큰 데미지를 주니 접전 라운드에 아껴 쓰세요.", en: "Skill cards hit hardest with a full gauge — save them for close rounds." },
        { ko: "최종 보스(교수)전 전에 좋은 곤충·스킬 카드를 모아두면 「Last Resort」 같은 강력한 카드로 압도할 수 있습니다.", en: "Stock strong insect/skill cards before the final Professor fight — cards like 'Last Resort' help you dominate." },
      ],
      videos: [
        { title: { ko: "메스킹 100% 트로피 공략", en: "Throne of the MesuKing 100% guide" }, url: YT("L49pavvEl4g") },
      ],
      achievementSlug: "22_throne_of_the_mesuking",
    },
    {
      slug: "casino",
      name: { ko: "카지노", en: "Casino" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "카무로초 카지노 (회원제)", en: "Casino, Kamurocho (members only)" },
      summary: {
        ko: "블랙잭·바카라·룰렛·포커를 다루는 종합 카지노. 컴플리션은 각 게임을 일정 횟수 승리/플레이해야 합니다.",
        en: "A full casino with Blackjack, Baccarat, Roulette, and Poker. Completion requires wins/plays across each game.",
      },
      howTo: [
        { ko: "블랙잭은 기본 전략표(하드 16 이하 히트, 17 이상 스탠드)만 지켜도 승률이 가장 좋습니다.", en: "In Blackjack, just follow basic strategy (hit on hard 16 or less, stand on 17+) for the best odds." },
        { ko: "룰렛은 적/흑·홀/짝 같은 1:1 배당에 꾸준히 걸어 칩을 안정적으로 불리세요.", en: "In Roulette, stick to even-money bets (red/black, odd/even) to grind chips steadily." },
        { ko: "큰 밑천이 필요하면 승률 높은 블랙잭으로 칩을 모은 뒤 다른 게임의 횟수 조건을 채우세요.", en: "Build a bankroll on the high-odds Blackjack, then knock out the play-count targets on the other games." },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "ufo-catcher",
      name: { ko: "UFO 캐처 (인형뽑기)", en: "UFO Catcher (claw machine)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 클럽 세가", en: "Club Sega, Kamurocho" },
      summary: {
        ko: "크레인으로 경품을 집어 올리는 게임. 특정 경품을 뽑는 것이 컴플리션 항목에 포함됩니다.",
        en: "A crane game where you grab prizes; collecting specific prizes is part of completion.",
      },
      howTo: [
        { ko: "한 번에 들지 말고, 크레인 발톱으로 경품을 출구 쪽으로 조금씩 밀어 위치를 옮기는 게 핵심입니다.", en: "Don't try to lift in one go — nudge the prize toward the chute a little at a time with the claw." },
        { ko: "가로 위치를 먼저 정확히 맞춘 뒤 세로(깊이)를 조정하면 헛집기를 줄일 수 있습니다.", en: "Lock the horizontal position first, then adjust depth — it cuts down on misses." },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초 가라오케관", en: "Karaoke bar, Kamurocho" },
      summary: {
        ko: "타이밍 리듬게임. 「Baka Mitai」 등 명곡을 부르며, 전곡 일정 점수 이상이 컴플리션 조건입니다.",
        en: "A timing rhythm game with classics like 'Baka Mitai'; completion wants a target score on every track.",
      },
      howTo: [
        { ko: "노트가 판정 링에 정확히 겹치는 순간 입력하세요. 음악 박자보다 화면 표시를 믿는 게 정확합니다.", en: "Input exactly as the note overlaps the ring — trust the on-screen cue over the music's beat." },
        { ko: "느린 곡(발라드)이 타이밍이 여유로워 고득점을 노리기 쉽습니다.", en: "Slower ballads give more timing leeway and are easier for high scores." },
      ],
      achievementSlug: "23_what_a_player",
    },
  ],
};
