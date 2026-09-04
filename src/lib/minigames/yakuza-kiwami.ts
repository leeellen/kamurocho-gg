import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza Kiwami. Completion-list rows, thresholds and the
// cheat-item locker numbers are taken from CyricZ's GameFAQs guide, cited on
// each entry, rather than written from memory.
export const yakuzaKiwamiMinigames: MinigamesData = {
  appId: 3717330,
  intro: {
    ko: "Yakuza Kiwami는 카무로초 한 곳에 미니게임이 몰려 있어 컴플리션이 비교적 집약적입니다. 「놀이를 제패한 남자」 트로피는 아래 종목을 모두 건드려야 하고, 포켓 서킷·메스킹은 전용 트로피가 따로 있습니다. 도박 계열은 코인로커에서 나오는 이카사마 아이템을 먼저 챙기면 난이도가 통째로 사라집니다.",
    en: "Yakuza Kiwami keeps every minigame inside one Kamurocho, so the grind is concentrated. 'What a Player' wants a go at all of them, and Pocket Circuit and MesuKing carry their own trophies. The gambling rows stop being gambling once you have collected the cheat items out of the coin lockers.",
  },
  minigames: [
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 5,
      location: { ko: "카무로초 — 마작 라라바이", en: "Mahjong Jansou, Kamurocho" },
      summary: {
        ko: "컴플리션 조건이 여섯 줄로 가장 깁니다. 10회 화료, 만관 5회, 하네만 1회, 리치 일발 1회, 잇쓰(일기통관) 1회, 그리고 누적 100,000점봉.",
        en: "Six completion rows, the longest set here: go out 10 times, five mangan, one haneman, one riichi ippatsu, one full straight, and 100,000 sticks banked.",
      },
      howTo: [
        { ko: "이카사마 「행운의 패」는 코인로커 I2에 있습니다. 국사무쌍이 통째로 배패되므로 하네만과 점수 조건을 한 번에 해결할 수 있습니다.", en: "The Lucky Tile cheat sits in Locker I2. It deals you Thirteen Orphans outright, which clears the haneman row and a big chunk of the points at once." },
        { ko: "다만 「행운의 패」로는 리치 일발을 못 만듭니다. 국사무쌍 같은 역만은 일발을 비롯한 다른 판정을 덮어쓰기 때문에, 리치 일발 줄은 평범한 손으로 따로 노려야 합니다.", en: "It cannot do riichi ippatsu, though — a yakuman like Thirteen Orphans overrides ippatsu and other minor yaku, so that row needs an ordinary hand." },
        { ko: "잇쓰는 한 색으로 123·456·789를 모으는 역입니다. 배패에 같은 색 숫자가 다섯 종류 이상 있을 때만 노리고, 치는 세 뭉치 중 하나를 완성할 때만 쓰세요. 다른 조합을 치면 역이 사라집니다.", en: "Full straight wants 123, 456 and 789 in one suit. Only chase it when the deal already has five or more numbers of a suit, and only chi to complete one of those three runs — any other chi kills the yaku." },
        { ko: "장비까지 노린다면 랭킹 매치가 있습니다. 참가비 50,000엔은 최초 1회뿐이고 이후 무료이며, 1위는 2랭크·2위는 1랭크 상승, 4위는 1랭크 하락입니다. 판이 나쁘면 중단해도 벌점이 없습니다.", en: "For the gear, Ranking Match costs a one-off ¥50,000 buy-in and is free afterwards: first place moves you up two ranks, second one, fourth drops you one — and quitting a bad game costs nothing." },
        { ko: "랭킹 보상은 25위 터프니스 인피니티, 20위 스태미난 스파크, 15위 사롱, 10위 쌍절 중국도, 5위 두목의 목도리, 3위 연꽃회 청룡도, 1위 드래곤 드라이버입니다.", en: "Rank rewards: 25 Toughness Infinity, 20 Staminan Spark, 15 Sarong, 10 Double Chinese Broadswords, 5 Head Honcho Scarf, 3 Lotus Clan Broadsword, 1 Dragon Driver." },
      ],
      videos: [
        { title: { ko: "마작 입문 가이드 (Yakuza)", en: "An amateur's guide to mahjong (Yakuza)" }, url: YT("UrYyaBMiIcw") },
        { title: { ko: "리치 일발 등 100% 마작 공략", en: "Mahjong 100% guide (Riichi Ippatsu, etc.)" }, url: YT("nhFoL6ZSI7k") },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Mahjong (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/mahjong" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "카무로초 — 노상 장기", en: "Street shogi, Kamurocho" },
      summary: {
        ko: "컴플리션은 「무르기 없이 승리」 1회·3회·5회 세 줄뿐입니다. 규칙을 몰라도 코인로커 J3의 아이템 하나로 전부 끝낼 수 있습니다.",
        en: "Three rows: win without a take-back once, three times, five times. You do not need to know shogi — one item from Locker J3 covers all three.",
      },
      howTo: [
        { ko: "코인로커 J3의 「투료의 말(Give-Up Piece)」을 대국 중 아무 때나 쓰면 상대가 즉시 투료합니다. 무르기를 안 쓴 승리로 잡히므로 세 줄을 이걸로 채울 수 있습니다.", en: "The Give-Up Piece in Locker J3 makes the opponent resign instantly whenever you use it, and it counts as a win with no take-back — so it clears all three rows." },
        { ko: "장기 포인트를 모을 거라면 순위전보다 「장기 챌린지」가 훨씬 빠릅니다. 정해진 국면에서 정답 수를 두는 형식이라 한 판이 짧습니다.", en: "If you are farming shogi points, the Shogi Challenges are far faster than ranked games — set positions with a correct answer, over in moments." },
        { ko: "10장 무렵부터 경품에 「드래곤 슬레이어」가 추가되는데 100,000포인트가 필요합니다. 챌린지 9까지가 합계 1,150포인트라 80회 이상 반복해야 하고, 100% 컴플리션에는 필요 없는 무기입니다.", en: "From about Chapter 10 the prize list adds the Dragon Slayer at 100,000 points. Challenge 9 pays 1,150 a run, so that is 80-plus repeats — and it is not needed for 100% completion." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Shogi (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/shogi" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "gambling-hall",
      name: { ko: "도박장 (초한·주사위·코이코이·오이초카부)", en: "Gambling Hall (cho-han, cee-lo, koi-koi, oicho-kabu)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "카무로초 — 지하 연옥 도박장", en: "The gambling den in Underground Purgatory" },
      summary: {
        ko: "네 종목 각각 누적 10,000점 획득이 조건입니다. 이카사마 아이템을 먼저 챙기면 도박이 아니라 작업이 됩니다.",
        en: "Each of the four wants 10,000 banked. Pick the cheat items up first and it stops being gambling.",
      },
      howTo: [
        { ko: "초한 이카사마는 코인로커 E4의 「짝수 고로의 염주」와 F3의 「기울어진 담배」입니다. 염주는 다음 한 판만 반드시 짝수로 만들고, 담배는 다른 손님들의 베팅을 한쪽으로 몰아 줍니다.", en: "Cho-han uses Even Goro's Beads (Locker E4) and the Lopsided Cigarette (Locker F3). The beads force the very next roll even; the cigarette skews the other punters' bets to one side." },
        { ko: "초한은 처음에 최대 100장까지만 걸 수 있고, 이기면 상한이 단계적으로 1,000장까지 오릅니다. 다만 상한이 오르려면 한 번 나갔다 들어와야 반영되니, 5연승쯤 하면 자리를 뜼다 돌아오세요.", en: "Cho-han starts capped at 100 tags and the ceiling climbs to 1,000 as you win — but it only updates when you leave and come back, so step out every five wins or so." },
        { ko: "염주는 딜러와 직접 붙는 판(친 승부)에서 베팅 상한이 올라간 뒤에 쓰는 게 가장 이득입니다. 상한 100장에서 쓰면 아깝습니다.", en: "Save the beads for a direct bet against the house after the ceiling has risen — spending one at a 100-tag cap wastes it." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Cho-han (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/cho-han" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "casino",
      name: { ko: "카지노 (블랙잭·포커·바카라·룰렛)", en: "Casino (blackjack, poker, baccarat, roulette)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "카무로초 — 지하 연옥 카지노", en: "The casino in Underground Purgatory" },
      summary: {
        ko: "컴플리션 조건은 포커 누적 20,000, 블랙잭 50,000, 바카라 20,000, 룰렛 50,000입니다. 블랙잭 이카사마 두 개면 나머지 자금까지 한 번에 벌립니다.",
        en: "Rows are 20,000 in poker, 50,000 in blackjack, 20,000 in baccarat and 50,000 in roulette. Two blackjack cheats bankroll the rest of them.",
      },
      howTo: [
        { ko: "블랙잭 이카사마는 코인로커 G3의 「블랙잭의 부적」과 G4의 「버스트의 부적」입니다. 고레이트 탁에 칩 1,000장 이상을 들고 앉아 먼저 버스트의 부적을 쓰면 딜러가 5판 연속 버스트합니다.", en: "The Blackjack Amulet is in Locker G3 and the Bust Amulet in G4. Sit at high stakes with 1,000+ chips and use the Bust Amulet first: the dealer busts five hands in a row." },
        { ko: "버스트의 부적은 딜러가 두 장으로 17 이상이면 더 뽑지 않아 무효가 됩니다. 그래도 5판이면 베팅 상한이 10,000까지 올라가므로, 그때 블랙잭의 부적을 써서 5연속 블랙잭을 받으면 칩이 넘칩니다.", en: "It fizzles when the dealer stands on 17 from two cards, but five wins still pushes the bet ceiling to 10,000 — then the Blackjack Amulet gives five blackjacks in a row and the chips pile up." },
        { ko: "블랙잭 베팅 상한은 연승에 따라 오릅니다. 1승이면 저레이트 300·고레이트 3,000, 2연승이면 500·5,000, 3연승부터 1,000·10,000이며 한 번 지면 초기화됩니다.", en: "Blackjack raises your cap on a streak: one win allows 300 low or 3,000 high, two wins 500 or 5,000, three or more 1,000 or 10,000 — and one loss resets it." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Blackjack (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/blackjack" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "pool",
      name: { ko: "당구", en: "Pool" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가 등 당구장", en: "The pool hall in Kamurocho" },
      summary: {
        ko: "컴플리션은 콤비네이션 샷 3회와 캐롬 샷 3회뿐입니다. 경기에서 이길 필요도, 퍼즐 풀을 건드릴 필요도 없습니다.",
        en: "Completion is three combination shots and three carom shots. You never have to win a game, and Puzzle Pool is not required at all.",
      },
      howTo: [
        { ko: "캐롬은 큐볼이 목적구를 맞힌 뒤 다시 다른 공을 맞혀 그 공이 들어가는 샷이고, 콤비네이션은 목적구가 다른 공을 맞혀 그 공이 들어가는 샷입니다. 이 둘을 각각 3회씩입니다.", en: "A carom is cue -> object ball -> another ball, and that other ball drops. A combination is cue -> object ball -> another ball, where the object ball did the hitting. Three of each." },
        { ko: "실전에서 우연히 나오길 기다리지 말고 「혼자 플레이」로 나인볼을 고르세요. 공을 마음대로 밀어 배치를 만들고, 큐볼을 일부러 포켓에 넣어 스크래치를 내면 원하는 자리에 큐볼을 놓을 수 있습니다.", en: "Do not wait for these in a match: choose Play Alone and Nine-ball, nudge the balls into the shape you want, then scratch on purpose to place the cue ball wherever you like." },
        { ko: "퍼즐 풀은 검은 공을 맞히면 실패이고 노란 공은 도움용입니다. 컴플리션과 무관하니 시간이 없다면 건너뛰어도 됩니다.", en: "In Puzzle Pool touching a black ball fails the puzzle and the yellow balls are optional help — none of it counts for completion, so skip it if you are short on time." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Pool (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/pool" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가", en: "Club SEGA, Kamurocho" },
      summary: {
        ko: "컴플리션은 해트트릭 10회 하나뿐입니다. 해트트릭은 한 라운드에 세 발을 모두 BULL에 넣는 것입니다.",
        en: "One row: ten hat-tricks. A hat-trick is all three darts in the bull in a single round.",
      },
      howTo: [
        { ko: "901 게임을 혼자 골라 두면 시간 제한 없이 20라운드를 BULL만 노릴 수 있습니다. 대전을 기다리는 것보다 훨씬 빠릅니다.", en: "Start a 901 game alone: that is twenty rounds of aiming at nothing but the bull, at your own pace." },
        { ko: "던지기는 왼쪽 스틱으로 조준 → 오른쪽 스틱을 아래로 당김 → 놓기입니다. 가장자리까지가 아니라 절반쯤까지만 천천히 당겼다가 빠르게 놓는 것이 정확합니다.", en: "Aim with the left stick, pull the right stick down, release to throw. Pull slowly to about halfway rather than to the edge, then release quickly — that lands on target." },
        { ko: "조준을 끝내기 전에 당기지 마세요. 왼쪽 스틱을 가만히 둬도 손이 미세하게 흔들리므로, 조준이 맞은 순간에 당겨야 합니다.", en: "Do not pull back before you are on target: the hand wavers even with the stick still, so commit at the moment the aim is right." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Darts (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/darts" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 마하볼", en: "Mach Bowl, Kamurocho" },
      summary: {
        ko: "컴플리션은 스트라이크 10회와 스플릿 게임 누적 5프레임입니다. 일반 게임보다 스플릿 게임 쪽이 조건이 까다롭습니다.",
        en: "Two rows: ten strikes, and five frames cleared across Split Games. The split side is the harder half.",
      },
      howTo: [
        { ko: "스트라이크는 1번 핀 바로 옆의 「포켓」을 노려야 합니다. 공을 세게 넣으면서 약간의 스핀을 주면 확률이 크게 올라갑니다.", en: "Strikes come from the pocket — just beside the head pin. Hit it hard with a little spin and the odds jump." },
        { ko: "조작은 방향키 위아래로 공 선택(가벼운 공은 제어가 쉽고 무거운 공은 힘이 셉니다), 좌우로 서는 위치 선택, ×로 방향 결정, ×로 파워 결정, 마지막에 던지는 동안 왼쪽 스틱을 살짝 기울여 스핀을 겁니다. 스핀은 매우 민감하니 조금만 움직이세요.", en: "Up/down picks the ball (light is controllable, heavy has power), left/right your stance, cross sets direction then power, and a gentle left-stick nudge during the approach adds spin — it is very sensitive, so barely move it." },
        { ko: "스플릿 게임은 열 가지 핀 조합 중에서 골라 한 번의 투구로 그 조합을 모두 쓰러뜨리는 방식입니다. 공은 3개뿐이고 실패할 때마다 하나씩 줄어듭니다.", en: "Split Game gives ten pin combinations; each must go down in a single throw. You have a stock of three balls and every miss costs one." },
        { ko: "스플릿 게임 보상은 전부 포켓 서킷 부품입니다. 3프레임에서 선샤인 데칼, 5프레임에서 엑스트라 스피드 프레임, 7프레임에서 울트라 소프트 타이어가 나옵니다.", en: "Split Game prizes are all Pocket Circuit parts: three frames gives the Sunshine Decal, five the Extra Speed Frame, seven the Ultra Soft Tires." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Bowling (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/bowling" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "카무로초 — 요시다 배팅 센터", en: "Yoshida Batting Center, Kamurocho" },
      summary: {
        ko: "컴플리션은 다섯 줄입니다. 투 패널 녹아웃 10회, 그리고 이지·노멀·하드·엑스트라 하드 각 코스에서 1,600점 이상.",
        en: "Five rows: ten Two-Panel Knock-outs, and 1,600 points on each of Easy, Normal, Hard and Extra Hard.",
      },
      howTo: [
        { ko: "1,600점은 A랭크 라인입니다. 각 난이도의 랭크 보상은 B(1,200점)·A(1,600점)·S(1,800점)로 나뉘고, 엑스트라 하드 S에서 터프니스 인피니티가 나옵니다.", en: "1,600 is the A-rank line. Each course pays out at B (1,200), A (1,600) and S (1,800) — Extra Hard at S gives Toughness Infinity." },
        { ko: "구질과 구속은 코스별로 완전히 고정입니다. 하드와 엑스트라 하드는 20구 배열이 사실상 같으므로, 하드에서 익힌 타이밍이 그대로 통합니다.", en: "Pitch types and speeds are fixed per course, and Hard and Extra Hard use effectively the same twenty-pitch script — the timing you learn on Hard carries straight over." },
        { ko: "스트레이트는 110~130km/h, 커브는 60~100km/h, 싱커는 70~110km/h대로 갈립니다. 느린 커브에서 타이밍을 당기지 않는 것이 점수를 지키는 핵심입니다.", en: "Straights sit at 110-130 km/h, curves at 60-100 and sinkers at 70-110 — not rushing the slow curves is what protects the score." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Batting Center (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/batting-center" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 3,
      location: { ko: "카무로초 — 가라오케관", en: "Karaoke bar, Kamurocho" },
      summary: {
        ko: "여섯 곡 각각 900점 이상이 조건입니다. 세 곡은 직접 부르고 세 곡은 추임새(인터젝션)로 참여합니다.",
        en: "Six songs, 900 or more on each. Three you sing yourself; three you back up with interjections.",
      },
      howTo: [
        { ko: "추임새 곡에서는 「간단」과 「신나게」 중에서 고르는데, 900점을 넘기려면 반드시 「신나게」를 골라야 합니다. 간단으로는 점수 상한이 모자랍니다.", en: "Interjection songs offer Simple or Lively — you have to take Lively, because Simple cannot reach 900." },
        { ko: "부르는 곡은 TONIGHT, 이지 사쿠라 2000, 바보 같지 -Sorrow-이고, 추임새 곡은 오토메탈 MY LIFE(하루카), Moment de la Petite Sirene(유이), EURO de x3 SHINE(리나)입니다.", en: "The three you sing are TONIGHT, Iji Sakura 2000 and Bakamitai -Sorrow-; the three you interject on are Otometal MY LIFE (Haruka), Moment de la Petite Sirene (Yui) and EURO de x3 SHINE (Rina)." },
        { ko: "오토메탈 MY LIFE는 하루카가 동행해야만 선택할 수 있습니다. 나머지 두 곡도 각각 유이·리나를 데려가야 하므로, 캬바쿠라 쪽을 어느 정도 진행해 두어야 합니다.", en: "Otometal MY LIFE only appears with Haruka along, and the other two need Yui and Rina — so the cabaret side has to be underway first." },
        { ko: "부르는 곡은 가사에, 추임새는 박자에 맞춰 옵니다. 「Hold」는 끝까지 누르고 「Rapid」는 연타입니다.", en: "Sung parts follow the lyrics, interjections follow the beat. Hold means hold to the end of the marker; Rapid means mash." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Karaoke (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/karaoke" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "ufo-catcher",
      name: { ko: "UFO 캐처 (인형 뽑기)", en: "UFO Catcher" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가 (1플레이 300엔)", en: "Club SEGA, Kamurocho (¥300 a play)" },
      summary: {
        ko: "컴플리션은 서로 다른 경품 5종과 15종 획득입니다. 인형은 전부 16종이며 어느 지점에서도 전부 뽑을 수 있습니다.",
        en: "Two rows: five and fifteen different prizes. There are sixteen plushes in total and every one can turn up at any location.",
      },
      howTo: [
        { ko: "원하는 인형이 안 보이면 카운터 직원에게 말을 걸어 기기를 다시 채워 달라고 하세요. 진열은 무작위로 바뀌므로 반복하면 결국 나옵니다.", en: "If the plush you need is not in the machine, ask the attendant to restock — the line-up is randomised, so it eventually turns up." },
        { ko: "잡는 방식은 인형 모양에 따라 다릅니다. 발이나 귀처럼 가는 부분에 걸거나, 가장 넓은 부분을 통째로 감싸거나, 가장 높은 부분을 잡아 넘어지지 않게 하는 세 가지를 상황에 맞게 씁니다.", en: "How you grab depends on the shape: hook a thin part like a foot or ear, wrap the widest part for a solid hold, or take it at its tallest point so it does not tip out." },
        { ko: "가장 찾기 어려운 건 「점보 밤톨이」와 「점보 분짱」입니다. 다른 인형보다 눈에 띄게 크므로 진열대에서 크기를 비교해 찾으세요.", en: "The hardest to find are the Jumbo Chestnut and Jumbo Bunchan — they are visibly larger than the rest, so compare sizes in the cabinet." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: UFO Catcher (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/ufo-catcher" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "photo-booth",
      name: { ko: "스티커 사진 (포토 부스)", en: "Photo Booth" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가 어디든", en: "Any Club SEGA in Kamurocho" },
      summary: {
        ko: "컴플리션은 「퍼펙트 샷 10회」 한 줄입니다. 단순해 보이지만 타이밍이 꽤 빡빡합니다.",
        en: "One row: ten perfect shots. It looks trivial and the timing is not.",
      },
      howTo: [
        { ko: "요금을 넣고 배경 세 장을 고른 뒤(배경은 컴플리션과 무관), 카운트다운 중 사진 아래에 표시되는 타이밍에 맞춰 버튼을 눌러 포즈를 잡습니다. 정확히 맞으면 사진에 반짝임이 붙고 그게 퍼펙트 샷입니다.", en: "Pay, pick three backgrounds (which do not matter), then hit a button on the timing marker under the picture as the countdown runs. Nail it and the shot fills with sparkles — that is a perfect shot." },
        { ko: "한 번 방문에 세 장을 찍으므로 잘하면 1회 방문에 3카운트가 오릅니다. 사진을 저장하지 않아도 카운트는 인정됩니다.", en: "A visit is three photos, so a good run banks three at once — and you do not have to save the photo for it to count." },
        { ko: "혼자 가도 되고, 캬바쿠라 데이트나 프리미엄 어드벤처의 하루카와 함께 가도 됩니다. 동행이 있어도 조건은 같습니다.", en: "You can go alone, on a cabaret date, or with Haruka in Premium Adventure — the requirement is the same either way." },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Photo Booth (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/photo-booth" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "23_what_a_player",
    },
    {
      slug: "pocket-circuit",
      name: { ko: "포켓 서킷", en: "Pocket Circuit" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "카무로초 — 포켓 서킷 스타디움", en: "Pocket Circuit Stadium, Kamurocho" },
      summary: {
        ko: "컴플리션은 부품 수집(타이어 5·10·20, 모터 5·10·15, 기어 5·10·20, 프레임 5·10·20)과 10회 출전, 그리고 14개 대회 전 우승입니다.",
        en: "Collect parts (5/10/20 tires, 5/10/15 motors, 5/10/20 gears, 5/10/20 frames), race ten times, and win all fourteen events.",
      },
      howTo: [
        { ko: "부품은 첫 번째·세 번째·네 번째·여섯 번째·마지막 레이스를 마칠 때마다 상점 재고가 갱신됩니다. 뒤로 갈수록 값이 크게 오르니 필요 없는 부품을 미리 사 두지 마세요.", en: "New parts appear in the shop after the first, third, fourth, sixth and final races, and get sharply more expensive each time — do not stock up on parts you will not use." },
        { ko: "스타디움에서 못 사는 부품이 있습니다. 일부는 거리의 상점에, 일부는 다른 미니게임 보상으로 나옵니다 — 볼링 스플릿 게임의 선샤인 데칼·엑스트라 스피드 프레임·울트라 소프트 타이어가 대표적입니다.", en: "Some parts are not sold at the Stadium: a few come from shops around town, others from other minigames — the Sunshine Decal, Extra Speed Frame and Ultra Soft Tires all come out of Split Bowling." },
        { ko: "대회별 추천 세팅은 kouryakutsushin.com이 정리한 것을 CyricZ 가이드가 표로 옮겨 두었습니다. 예를 들어 첫 도전 레이스는 슬림 타이어·스피드 프레임·스피드 모터·밸런스 기어·고속 배터리 조합입니다.", en: "Per-race builds were worked out by kouryakutsushin.com and tabulated in CyricZ's guide — the Introductory Race, for instance, is Slim tires, Speed frame, Speed motor, Balanced gears and a High Speed battery." },
        { ko: "챔피언 컵만은 부스트 타이밍이 중요합니다. 시계가 37초에 닿기 직전에 부스트를 써야 합니다.", en: "The Champion Cup is the one that needs a timed boost — use it just before the clock hits 37 seconds." },
      ],
      videos: [
        { title: { ko: "포켓 서킷 비기너·아마추어 컵 가이드", en: "Pocket Circuit: Beginner & Amateur Cup guide" }, url: YT("UaVsn4YPCwI") },
        { title: { ko: "포켓 서킷 마스터 컵 가이드", en: "Pocket Circuit: Master Cup guide" }, url: YT("hQWruCJ9wpg") },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: Pocket Circuit (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/pocket-circuit" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "21_the_dragon_of_pocket_circuit_reborn",
    },
    {
      slug: "mesuking",
      name: { ko: "메스킹 (곤충 카드 배틀)", en: "MesuKing" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 클럽 세가 나카미치 거리점", en: "Club SEGA Nakamichi St., Kamurocho" },
      summary: {
        ko: "컴플리션은 카드 5장·20장·45장 수집입니다. 카드는 상점 구매, 거리에서 줍기, 서브스토리 보상 세 경로로 모입니다.",
        en: "Rows at 5, 20 and 45 cards. They come from shops, from the ground around town, and from substories.",
      },
      howTo: [
        { ko: "시작은 클럽 세가 나카미치 거리점의 흰 가운을 입은 소년(교수)에게 말을 거는 것입니다. 옴니 초크와 보디 슬램 두 장을 여기서 받습니다.", en: "Start by talking to the boy in the lab coat at Club SEGA Nakamichi St. — he hands you Omni Choke and Body Slam to begin." },
        { ko: "에비스 전당포와 연옥 무기점에서 10,000엔짜리 카드를 팝니다. 슈퍼 엘보 드롭·슈퍼 레그 스플리터는 전당포, 슈퍼 파일드라이버·카운터 힐·슈퍼 더블 드롭·미스틱 힐은 연옥 쪽입니다.", en: "Ebisu Pawn and the Purgatory weapon shop each sell cards at ¥10,000 — Super Elbow Drop and Super Leg Splitter at the pawn shop; Super Piledriver, Counter Heal, Super Double Drop and Mystic Heal in Purgatory." },
        { ko: "서브스토리 보상 카드가 여섯 장입니다. No.71 자이언트 스윙, No.72 피니시 타임, No.73 슈퍼 로메로 스페셜, No.75 라스트 리조트, No.77 타이 브레이커가 여기 해당합니다.", en: "Six cards come from substories — No.71 Giant Swing, No.72 Finish Time, No.73 Super Romero Special, No.75 Last Resort and No.77 Tie Breaker among them." },
        { ko: "나머지는 거리에 떨어져 있습니다. 호텔가 세이브 포인트 북서쪽 자판기 앞, 킷사 알프스 안쪽 테이블 뒤, 마하볼 입구의 볼링핀 뒤, 타이헤이 거리 서쪽 끝, 텐카이치 거리 POPPO 북쪽 트럭 앞 등이 대표적입니다.", en: "The rest lie around town: in front of the vending machines northwest of the Hotel District save point, behind the front tables in Cafe Alps, behind the pin at the Mach Bowl entrance, the far west end of Taihei Blvd., and by the flatbed truck north of the Tenkaichi St. POPPO." },
      ],
      videos: [
        { title: { ko: "메스킹 100% 트로피 공략", en: "Throne of the MesuKing 100% guide" }, url: YT("L49pavvEl4g") },
      ],
      source: [
        { label: "GameFAQs — Yakuza Kiwami: MesuKing (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/mesuking" },
        { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      ],
      achievementSlug: "22_throne_of_the_mesuking",
    },
    {
      slug: "cabaret-club",
      name: { ko: "캬바쿠라 (유이·리나)", en: "Cabaret Clubs (Yui & Rina)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "카무로초 — 캬바쿠라", en: "The cabaret clubs of Kamurocho" },
      summary: {
        ko: "컴플리션은 유이의 서브스토리와 리나의 서브스토리를 각각 끝내는 두 줄입니다. 대화 선택지로 호감도를 올려 진행합니다.",
        en: "Two rows: finish Yui's substory and Rina's substory. You raise each hostess by picking the right conversation options.",
      },
      howTo: [
        { ko: "두 사람은 가라오케 컴플리션과도 엮여 있습니다. Moment de la Petite Sirene은 유이, EURO de x3 SHINE은 리나를 동반해야 부를 수 있으므로 캬바쿠라를 먼저 진행해 두는 편이 효율적입니다.", en: "They also gate two karaoke rows — Moment de la Petite Sirene needs Yui along and EURO de x3 SHINE needs Rina — so it pays to push the club side first." },
        { ko: "서브스토리는 지명 → 대화 → 애프터(데이트) 순으로 진행됩니다. 데이트 장소에서 포토 부스에 들르면 퍼펙트 샷 카운트도 같이 올릴 수 있습니다.", en: "Each substory runs request, conversation, then an after-hours date — and taking that date to the photo booth banks perfect shots at the same time." },
      ],
      source: { label: "GameFAQs — Yakuza Kiwami: Completion List (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/181171-yakuza-kiwami/faqs/75194/completion-list" },
      achievementSlug: "23_what_a_player",
    },
  ],
};

