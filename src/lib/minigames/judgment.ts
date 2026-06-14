import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Judgment (Judge Eyes). Difficulty is rated for
// the Completion List / KamuroGO grind, not casual play. Cross-referenced
// against community guides (GameFAQs, gamepressure, PowerPyx, Neoseeker) and
// video tutorials. Yagami plays these around Kamurocho between case work.
export const judgmentMinigames: MinigamesData = {
  appId: 2058180,
  intro: {
    ko: "탐정 야가미 타쿠야의 무대는 카무로초 한 곳이지만, 드론 레이스·VR 보드게임·마작·쇼기·카지노·클럽 세가 아케이드 등 미니게임의 밀도는 야쿠자 시리즈 못지않습니다. 컴플리션 체크리스트(KamuroGO)와 친구 이벤트가 얽혀 있어 일부는 챕터 진행·친구 해금이 선행 조건입니다. 악명 높은 종목은 영상까지 함께 보면 훨씬 수월합니다.",
    en: "Detective Takayuki Yagami works a single city — Kamurocho — but its minigame density rivals the mainline Yakuza games: drone racing, a VR board game, mahjong, shogi, casino tables, and Club SEGA arcade cabinets. The Completion checklist (KamuroGO) and the Friend Events are intertwined, so some unlock only via chapter progress or befriending the right NPC. The tougher entries go far smoother with the videos attached.",
  },
  minigames: [
    {
      slug: "drone-racing",
      name: { ko: "드론 레이스 (카무로초 드론 리그)", en: "Drone Racing (Kamurocho Drone League)" },
      category: { ko: "레이스", en: "Racing" },
      difficulty: 4,
      location: { ko: "밀레니엄 타워 지하 아트리움의 드론 리그 본부 (챕터 2 해금)", en: "Drone League HQ in the Millennium Tower basement atrium (unlocks Chapter 2)" },
      summary: {
        ko: "야가미가 직접 조립·개조한 드론으로 카무로초 코스를 고속 질주하는 레이스. D~챔피언 리그와 타임 어택이 있으며, 컴플리션을 위해서는 챔피언 리그 전 코스 1위와 타임 어택 클리어가 필요합니다.",
        en: "Yagami builds and tunes a drone to scream through Kamurocho courses. Spans D-League up to the Champion League plus Time Trials; completion demands 1st place across the Champion League and clearing the Time Attacks.",
      },
      howTo: [
        { ko: "드론 랩에서 돈과 소재로 부품을 강화하세요. 특히 '퀵스타터(스타트 대시)'와 가속·최고속 파츠에 우선 투자하면 순위가 크게 오릅니다.", en: "Upgrade parts at the Drone Lab with cash and materials — prioritize the Quickstarter (boost start) plus acceleration and top-speed parts to climb the standings fast." },
        { ko: "코스를 외워 코너 직전에 감속하고 아이템 링·부스터 게이트를 빠짐없이 통과하세요. 라인이 곧 기록입니다.", en: "Learn each course, brake just before corners, and never miss boost gates or item rings — your racing line is your time." },
        { ko: "후반 리그는 부품 풀강이 사실상 전제 조건입니다. 사이드 케이스·일감으로 소재를 모은 뒤 챔피언 리그에 도전하세요.", en: "Late leagues effectively require maxed parts — farm materials via side cases and gigs before tackling the Champion League." },
        { ko: "그랑프리는 레이스 사이에 중단·저장이 됩니다. 한 코스라도 지면 곧바로 세이브를 로드해 그 코스만 다시 달리세요. 챔피언 리그를 확실히 뚫는 가장 현실적인 방법입니다.", en: "The Grand Prix lets you suspend and save between races — if you lose even one course, reload and redo just that course. It's the most reliable way to clear the Champion League." },
        { ko: "최강 프레임 SMZ:神輿(미코시)는 속도는 빠르지만 내구도가 50뿐이라 충돌 많은 좁은 코스에선 드론이 파괴됩니다. 챔피언 리그의 협소·장애물 코스에서는 내구도 200짜리 S-ONE:金剛(금강) 프레임으로 바꿔 다세요.", en: "The top-speed SMZ Mikoshi/Chariot frame has only 50 durability and gets wrecked on narrow, collision-heavy tracks. Swap to the S-ONE Adamant/Kongo frame (200 durability) for the tight Champion League courses." },
        { ko: "재료를 길에서 줍지 말고 돈으로 사세요. 파라다이스 VR의 주사위&큐브로 돈을 벌어 에비스 전당포·드래곤스 팰리스·라망에서 재료를 한꺼번에 구매하면 부품 100%가 훨씬 빠릅니다.", en: "Don't scavenge material pickups — buy them. Grind cash with Dice & Cube at Paradise VR and bulk-buy materials from Ebisu Pawn, Dragon Palace, and L'Amant to finish the parts collection far faster." },
      ],
      videos: [
        { title: { ko: "챔피언 리그 전 코스 1위 (드론 챔피언 트로피)", en: "Champion League all courses 1st (Drone Champion trophy)" }, url: YT("riIxpwAFNWo") },
        { title: { ko: "드론 레이스 타임 트라이얼 100% 가이드", en: "Time Trial Drone Racing 100% guide" }, url: YT("PZ2DZgyFRBM") },
      ],
    },
    {
      slug: "paradise-vr",
      name: { ko: "파라다이스 VR (VR 보드게임 '주사위와 큐브')", en: "Paradise VR (VR board game 'Dice & Cube')" },
      category: { ko: "보드게임", en: "Board Game" },
      difficulty: 3,
      location: { ko: "파라다이스 VR (서브스토리 'VR 주사위 한 쌍'으로 해금)", en: "Paradise VR (unlocked via the substory 'A VR Pair of Dice')" },
      summary: {
        ko: "VR 게임센터에서 즐기는 스고로쿠형 보드게임. 주사위를 굴려 칸을 이동하며 이벤트를 처리하고, 라이벌보다 먼저 골인하면 막대한 보상을 받습니다. 잘하면 한 판에 수십만~수백만 엔을 벌 수 있어 자금줄로도 좋습니다.",
        en: "A sugoroku-style board game in a VR arcade: roll dice, move across spaces resolving each event, and beat your rival to the goal for big payouts. A strong run nets hundreds of thousands to millions of yen, making it a great money source.",
      },
      howTo: [
        { ko: "도착 시 남은 주사위와 모은 아이템으로 점수가 매겨집니다. 무작정 골로 직진하기보다 이벤트 칸을 들러 아이템을 챙기되 주사위 소진을 경계하세요.", en: "Your score is based on leftover dice and items collected on arrival — detour to event spaces for items, but watch you don't run out of dice." },
        { ko: "스탠더드 룰은 주사위가 떨어져도 모은 아이템을 유지하지만, 챌린지 룰은 골인하지 못하면 전부 잃습니다. 욕심은 룰에 맞춰 조절하세요.", en: "Standard rules let you keep items even if you run out of dice; Challenge rules give you nothing unless you reach the goal — gauge your greed to the ruleset." },
        { ko: "이동 방향을 자유롭게 정할 수 있으니, 라이벌을 견제하는 칸이나 보너스 칸으로 동선을 설계하세요.", en: "You choose your movement direction freely, so route toward bonus spaces or tiles that hamper your rival." },
        { ko: "돈벌이가 목적이라면 SP 12,000짜리 '주사위 속도 느리게' 스킬을 최우선으로 사세요. 주사위가 느려져 원하는 눈(특히 5→6→2)을 골라 멈추기가 훨씬 쉬워집니다.", en: "If you're farming money, buy the SP 12,000 'slow the dice' skill first — slower dice make it far easier to stop on the number you want (especially the 5 → 6 → 2 sequence)." },
        { ko: "주사위를 5→6→2 순으로 멈추면 황금 고양이(킹 코로냥) 찬스가 발동해 보너스 턴으로 약 40만 엔을 벌고, 전투에서 황금 오라 적을 잡으면 추가 발동돼 한 판 160만 엔까지 갑니다. 초반엔 전투·주사위 칸만 밟아 주사위를 불린 뒤 이 찬스를 노리세요.", en: "Stopping the dice on 5 → 6 → 2 triggers the King Kor-nyan (golden cat) bonus — ~400,000 yen in bonus turns, and beating gold-aura enemies in battle re-triggers it, up to ~1.6 million per run. Open by hitting only battle/dice tiles to grow your dice pool, then chase the golden cat." },
        { ko: "한 판 수익 편차가 크니(같은 코스에서 90만~200만 엔) 코스 진입 전 세이브하고, 황금 고양이를 못 뽑거나 결과가 나쁘면 로드해서 다시 도세요. 잘 돌리면 1시간에 1,000만 엔 이상도 가능합니다.", en: "Payout variance is huge (the same course can give 900k or 2M), so save before entering and reload on a bad run or a missed golden cat — optimized, you can clear 10M+ yen per hour." },
      ],
      videos: [
        { title: { ko: "파라다이스 VR 100% 트로피 가이드", en: "Paradise VR 100% trophy guide" }, url: YT("pzMDaDmGxWI") },
        { title: { ko: "주사위와 큐브 미들 코스 해금 방법", en: "How to unlock the Dice & Cube Middle Course" }, url: YT("ZtkOX2rQoMY") },
        { title: { ko: "VR 쌍륙 플레이 (저지 아이즈: 사신의 유언)", en: "VR sugoroku gameplay (Judge Eyes)" }, url: YT("kJ9JGoctyVQ") },
      ],
    },
    {
      slug: "batting-center",
      name: { ko: "요시다 배팅센터", en: "Yoshida Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "호텔 거리 북쪽의 요시다 배팅센터", en: "Yoshida Batting Center in the north Hotel District" },
      summary: {
        ko: "홈런 코스와 챌린지 코스로 나뉜 정통 배팅 미니게임. 컴플리션을 위해서는 두 코스의 전 단계(악명 높은 홈런 헬 코스 포함)를 클리어해야 합니다.",
        en: "A classic batting minigame split into Home Run and Challenge courses. Completion requires clearing every stage of both — including the notorious Home Run Hell course.",
      },
      howTo: [
        { ko: "타석의 3x3 그리드에서 노란 커서를 빨간 공 표시 위치에 맞추고 타이밍을 맞추면 매번 홈런이 나옵니다. 위치 정렬이 핵심입니다.", en: "Move the yellow cursor onto the red ball marker in the 3x3 grid and time your swing — matched position plus timing yields a home run every time." },
        { ko: "구질마다 속도가 다릅니다. 직구는 거의 즉시 스윙, 체인지업은 한 박자 기다린 뒤 스윙하세요.", en: "Each pitch has a different speed — swing almost instantly on fastballs, wait a beat on change-ups." },
        { ko: "배팅 글러브(3,000엔)와 골든 배트(30,000엔)를 사면 판정이 후해져 어려운 코스가 훨씬 수월해집니다.", en: "Buy the Batting Gloves (3,000 yen) and Golden Bat (30,000 yen) to widen the timing window and ease the hard courses." },
      ],
      videos: [
        { title: { ko: "배팅센터 홈런·챌린지 전 코스 클리어 가이드", en: "Batting Center HomeRun & Challenge all-courses clear guide" }, url: YT("E3dJF9_8ZUg") },
        { title: { ko: "배팅센터 전 홈런 코스", en: "Batting Center all home run courses" }, url: YT("yRlPp8CpUfo") },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: { ko: "이스트 밀레니엄 타워 거리의 바 '밴텀', 시어터 광장 클럽 세가", en: "Bantam bar on East Millennium Tower St. and Club SEGA in Theater Square" },
      summary: {
        ko: "01·크리켓·카운트업 룰을 즐기는 다트 미니게임. 핫 트릭(불스아이 3연속), 톤80, 쓰리 인 어 베드 같은 까다로운 도전 과제가 컴플리션과 연계됩니다.",
        en: "Darts with 01, Cricket, and Count-Up rules. Fiddly feats like Hat Trick (three bullseyes), Ton 80, and Three in a Bed tie into completion.",
      },
      howTo: [
        { ko: "왼쪽 스틱으로 조준한 뒤, 파워 게이지의 가운데 진한 분홍 구간에서 던지면 정확히 명중합니다.", en: "Aim with the Left Stick, then release in the dark-pink center band of the power meter for a dead-on throw." },
        { ko: "좋은 다트를 살수록 진한 분홍 구간이 넓어지고 게이지가 느려져 명중이 쉬워집니다. 장비부터 갖추세요.", en: "Better darts widen the on-target band and slow the meter, so kit out before chasing feats." },
        { ko: "핫 트릭은 인/아웃 불 무관하게 3개 모두 불스아이에 꽂으면 됩니다. 톤80은 한 라운드에 트리플 20을 세 번 노리세요.", en: "Hat Trick just needs all three darts in the bull (inner or outer); Ton 80 needs three triple-20s in one round." },
      ],
      videos: [
        { title: { ko: "다트 튜토리얼: 매번 불스아이 명중하는 법", en: "Darts tutorial: how to hit the bullseye every time" }, url: YT("PmVKd7EYGY8") },
      ],
    },
    {
      slug: "mahjong",
      name: { ko: "마작 (와레메 마작 포함)", en: "Mahjong (incl. Wareme Mahjong)" },
      category: { ko: "테이블 게임", en: "Table Game" },
      difficulty: 4,
      location: { ko: "센료 거리 모던 마작, 텐카이치 거리 동쪽 자장가 마작, 나카미치 골목 타치바나 마작(와레메)", en: "Modern Mahjong on Senryo Ave., Lullaby Mahjong east of Tenkaichi St., Tachibana Mahjong (Wareme) on Nakamichi Alley" },
      summary: {
        ko: "일본식 마작 미니게임. 풀 게임(동남전, 최소 8국)과 하프 게임(동풍전, 최소 4국)을 즐길 수 있고, 타치바나 마작에서는 와레메 룰로 점수 변동이 커집니다. 룰을 모르면 컴플리션 난이도가 확 올라갑니다.",
        en: "Japanese mahjong. Play a Full Game (East-South, min. 8 hands) or Half Game (East-only, min. 4 hands); Tachibana Mahjong adds the high-variance Wareme rule. Completion spikes in difficulty if you don't know the rules.",
      },
      howTo: [
        { ko: "쿠이탄(따짐 가능)과 적도라 룰을 켜면 손쉬운 멘젠/오픈 핸드로도 점수를 쌓기 쉬워집니다. 빠른 화료 위주로 운영하세요.", en: "Turning on Kuitan (open tanyao) and Red Dora makes it easier to score off simple or open hands — play for fast, frequent wins." },
        { ko: "치트 아이템 '구련보등 패(Nine Gates Tile)'를 오노데라 상점에서 10,000 SP에 사면 패산을 조작해 안정적으로 이길 수 있습니다.", en: "Buy the Nine Gates Tile cheat item from Onodera's Wares for 10,000 SP to rig the wall and win reliably." },
        { ko: "와레메는 분할 자리에 걸린 플레이어의 점수 증감이 2배가 됩니다. 자신이 와레메일 땐 방총을 피하고, 상대가 와레메일 땐 적극적으로 노리세요.", en: "In Wareme the split-tile player's wins and losses double — play safe when you're on the split, and press hard when an opponent is." },
        { ko: "'리치 잇파츠로 화료' 과제가 막힐 땐, 구련보등 패로 리치를 선언한 뒤 일부러 숫자패 하나를 버리세요. 순정 구련보등(역만)이 깨지면서 잇파츠로 화료해 조건이 충족됩니다.", en: "Stuck on the 'win by Riichi Ippatsu' objective? Declare Riichi with the Nine Gates tile, then deliberately discard a numbered tile — this breaks the pure Nine Gates yakuman so you instead win by Ippatsu, satisfying the requirement." },
        { ko: "여러 마작장을 한 번에 정리하려면 나인 게이츠 치트 패를 2개(총 20,000 SP) 사두세요. 테이블마다 SP를 다시 모을 필요 없이 즉시 화료로 끝낼 수 있습니다.", en: "To sweep multiple mahjong parlors in one sitting, buy two Nine Gates tiles (20,000 SP total) so you have an instant win ready per table without re-grinding SP." },
      ],
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (츠메 쇼기 퍼즐 포함)", en: "Shogi (incl. Tsume Shogi puzzles)" },
      category: { ko: "테이블 게임", en: "Table Game" },
      difficulty: 4,
      location: { ko: "아오조라 쇼기 (특정 이벤트 클리어 후 츠메 쇼기 해금)", en: "Aozora Shogi (Tsume Shogi puzzles unlock after clearing specific events)" },
      summary: {
        ko: "일본식 장기 미니게임. 잡은 말을 다시 놓을 수 있고 진영 끝에서 말이 승격합니다. 일반 대국과 함께 정해진 수 안에 외통을 만드는 츠메 쇼기(쇼기 퍼즐)가 컴플리션에 포함됩니다.",
        en: "Japanese chess: captured pieces can be dropped back onto the board and pieces promote in the far ranks. Alongside live matches, the Tsume Shogi (mate-in-N puzzles) count toward completion.",
      },
      howTo: [
        { ko: "친구 오노데라(챕터 5)를 해금하면 적은 SP로 '쇼기의 기본(다음 한 수 가이드)' 치트 아이템을 살 수 있습니다. 대국이 훨씬 쉬워집니다.", en: "Once you befriend Onodera (Chapter 5) you can buy 'The Basics of Shogi' cheat for a little SP — it suggests your next best move and makes matches far easier." },
        { ko: "잡은 말의 재투입이 승부를 가릅니다. 적 옥장 주변에 말을 떨궈 외통을 노리세요.", en: "Re-dropping captured pieces decides games — drop pieces near the enemy king to force checkmate." },
        { ko: "츠메 쇼기는 정답 수가 정해져 있어 막히면 공략을 참고하는 편이 빠릅니다. 외통 패턴을 외워 두면 응용이 쉽습니다.", en: "Tsume puzzles have fixed solution lengths — consult a guide when stuck, and memorizing mate patterns makes later puzzles easy." },
        { ko: "치트책 '쇼기의 기본'은 오노데라(30,000 SP)보다 에비스 전당포에서 사는 편이 훨씬 쌉니다. 사용해도 소모되지 않으니 매 수마다 트라이앵글로 최선수를 무한히 받아 쓰세요.", en: "Buy 'The Basics of Shogi' cheat from Ebisu Pawn rather than Onodera (30,000 SP) — far cheaper, and it's never consumed, so press Triangle every turn for an endless stream of best-move hints." },
        { ko: "이 힌트 치트는 츠메 쇼기 퍼즐 안에서도 작동합니다. 퍼즐은 정해진 해답 수순이 있으므로 파란색으로 표시되는 추천수를 그대로 따라가면 풀립니다.", en: "The hint cheat also works inside the Tsume Shogi puzzles — since each puzzle has a fixed solution, just follow the blue-highlighted recommended moves to solve it." },
      ],
    },
    {
      slug: "casino",
      name: { ko: "카지노 (블랙잭·포커·코이코이·오이초카부)", en: "Casino (Blackjack, Poker, Koi-Koi, Oicho-Kabu)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "서양식 카지노 L'Amant(챕터 2 해금), 드래곤 팰리스(서양식+동양식 도박장)", en: "L'Amant Western casino (unlocks Chapter 2) and Dragon Palace (Western + Eastern halls)" },
      summary: {
        ko: "L'Amant에서 블랙잭과 포커를, 드래곤 팰리스에서 코이코이와 오이초카부까지 즐기는 종합 도박 미니게임. 칩을 100엔에 사서 컴플리션 목표인 30,000칩까지 불려야 합니다.",
        en: "A full gambling suite: Blackjack and Poker at L'Amant, Koi-Koi and Oicho-Kabu at Dragon Palace. Buy chips at 100 yen each and build up to the 30,000-chip completion target.",
      },
      howTo: [
        { ko: "오이초카부는 9에 가까운 수를 노리는 단순 게임이라 칩 불리기에 가장 효율적입니다. 자신 있을 때 크게 베팅하세요.", en: "Oicho-Kabu (get close to 9) is the simplest, most efficient way to farm chips — bet big when confident." },
        { ko: "포커는 강한 핸드 확신이 설 때만 레이즈하고, 블랙잭은 카드 합 17 이상에서 멈추는 기본 전략을 지키세요.", en: "In Poker only raise on a strong made hand; in Blackjack follow basic strategy and stand on hard 17+." },
        { ko: "도박용 치트 아이템(예: 마킹 카드류)을 미리 사 두면 컴플리션 칩 그라인드가 훨씬 빨라집니다.", en: "Pick up the gambling cheat items beforehand to speed the chip grind to completion." },
        { ko: "블랙잭이 칩 모으기 최고속입니다. 풀배팅으로 세이브-로드를 반복하다가, 첫 카드가 10 이상이면 더블다운(2배)으로 한 판에 두 배를 노리세요.", en: "Blackjack is the fastest chip farm — full-bet and save/load until you win, then double-down whenever your first card is 10+ to net double a round." },
        { ko: "포커가 어렵다면 '로열 조커 카드' 치트를 베팅 단계에서 트라이앵글로 사용하세요. 다음에 깔리는 턴/리버 카드가 내 패에 유리하게 바뀝니다. 플롭 전엔 쓰지 말고 스트레이트·플러시가 한 장 모자랄 때 아끼세요.", en: "If poker is hard, use the 'Royal Joker Card' cheat with Triangle during the betting phase to force the next turn/river card to favor your hand — don't waste it pre-flop; save it for when you're one card short of a straight or flush." },
      ],
    },
    {
      slug: "fighting-vipers",
      name: { ko: "파이팅 바이퍼스 (클럽 세가 아케이드)", en: "Fighting Vipers (Club SEGA arcade)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "나카미치 거리 클럽 세가", en: "Club SEGA on Nakamichi St." },
      summary: {
        ko: "1995년작 세가 3D 대전 격투 「파이팅 바이퍼스」를 원본 그대로 플레이. 컴플리션은 싱글 플레이에서 7번째 캐릭터(라젤)까지 격파하면 됩니다. 아머가 깨지는 시스템이 특징입니다.",
        en: "SEGA's 1995 3D fighter Fighting Vipers, emulated faithfully. Completion just requires beating the first seven characters (up to Raxel) in single-player. Its signature gimmick is breakable armor.",
      },
      howTo: [
        { ko: "VF2 엔진 기반이라 펀치·킥·잡기 3버튼 구성입니다. 펀치+잡기로 던지기를 쓰며, 벽으로 둘러싸인 링을 활용해 압박하세요.", en: "Built on the VF2 engine — Punch, Kick, Grab; Punch+Grab throws. Use the walled-in arenas to pressure opponents." },
        { ko: "강타로 적의 아머를 부수면 데미지가 크게 늘어납니다. 상·하단 아머를 모두 깨면 마무리가 쉬워집니다.", en: "Heavy hits shatter enemy armor and ramp up damage — break both upper and lower armor to close out rounds." },
        { ko: "라젤 전까지만 이기면 되니, 한 캐릭터로 콤보·던지기 한두 개만 익혀 CPU를 빠르게 압살하세요.", en: "You only need to reach Raxel, so learn one or two combos and a throw on a single character and rush the CPU down." },
        { ko: "CPU 잡기 판정이 워낙 좋아 가까이 가면 이쪽 잡기는 씹히고 먼저 잡힙니다. 시작하자마자 백대시·백점프로 구석까지 간 뒤 앉아 약손(짠손)만 반복하면 거리를 유지하며 높은 확률로 이깁니다.", en: "The CPU's grab hitbox is brutal — get close and it eats your throw and grabs you first. Back-dash or back-jump into the corner at the start and just spam crouching light punch to keep distance and win at a high rate." },
        { ko: "'Insert Coin' 화면에서 D패드 위 + 옵션을 동시에 눌러 코인을 넣으면 매 라운드 상대가 랜덤으로 나옵니다. 쉬운 1~2라운드만 반복하며 필요한 캐릭터(반·토키오·라젤·산맨·픽키·그레이스·허니)가 나올 때까지 돌리세요.", en: "At the 'Insert Coin' screen, press D-pad Up + Options together to insert the coin and randomize each round's opponent — then farm the easy rounds 1-2 until the characters you need (Bahn, Tokio, Raxel, Sanman, Picky, Grace, Honey) show up." },
      ],
      videos: [
        { title: { ko: "클럽 세가: 파이팅 바이퍼스 등 아케이드 플레이 (2019)", en: "Club SEGA: Fighting Vipers and other arcade games (2019)" }, url: YT("IoikCU-EWVs") },
        { title: { ko: "파이팅 바이퍼스 (허니) 플레이", en: "Fighting Vipers (Honey) gameplay" }, url: YT("cNe9ZxKTOHw") },
        { title: { ko: "클럽 세가: 파이팅 바이퍼스 플레이", en: "Club SEGA: Fighting Vipers playthrough" }, url: YT("8aj9iK9x06Y") },
      ],
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드 (스페이스 해리어·판타지 존·VF5 FS·뿌요뿌요·모터 레이드)", en: "Club SEGA Arcade (Space Harrier, Fantasy Zone, VF5 FS, Puyo Puyo, Motor Raid)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "나카미치 거리 클럽 세가 및 시어터 광장 클럽 세가", en: "Club SEGA on Nakamichi St. and Club SEGA at Theater Square" },
      summary: {
        ko: "카무로초 두 곳의 클럽 세가에 들어찬 세가 클래식 아케이드 모음. 나카미치점에는 판타지 존·뿌요뿌요·VF5 FS 등이, 시어터 광장점에는 스페이스 해리어·모터 레이드 등이 있습니다. 각 캐비닛 플레이가 컴플리션 항목입니다.",
        en: "A spread of SEGA classics across Kamurocho's two Club SEGAs: Fantasy Zone, Puyo Puyo, and VF5 FS on Nakamichi St.; Space Harrier and Motor Raid at Theater Square. Playing each cabinet is a completion item.",
      },
      howTo: [
        { ko: "스페이스 해리어·판타지 존은 패턴 슈팅이라 적 등장 위치를 외우면 안정적으로 진행됩니다.", en: "Space Harrier and Fantasy Zone are pattern shooters — memorize enemy spawns to progress reliably." },
        { ko: "뿌요뿌요는 같은 색 4개 연결로 연쇄를 노리고, 모터 레이드는 코너 인코스를 파고들며 부스트를 아껴 두세요.", en: "In Puyo Puyo chain by linking four same-color blobs; in Motor Raid hug inside lines on corners and bank your boost." },
        { ko: "VF5 FS는 본격 격투지만 컴플리션엔 가볍게 즐기는 수준이면 충분합니다. 한 캐릭터의 기본 콤보만 익히세요.", en: "VF5 FS is a deep fighter, but casual play is enough for completion — just learn one character's bread-and-butter combo." },
        { ko: "스페이스 해리어는 점수가 스테이지 끝 보스에서 가장 크게 들어옵니다. 죽지 않고 장애물만 피하며 두 번째 보스까지만 잡으면 요구 점수가 사실상 확정됩니다.", en: "In Space Harrier the biggest points come from each stage's end boss — just survive and dodge, and clearing the second boss basically locks in the required score." },
        { ko: "모터 레이드는 위험 구간만 빼고 부스트를 상시 쓰고 급커브에서만 감속하면 점수가 잘 나옵니다. 3개 레이스를 타임아웃 없이 완주하는 게 목표입니다.", en: "In Motor Raid hold boost constantly except in danger zones and only ease off for sharp curves — the goal is finishing all three races without timing out." },
        { ko: "뿌요뿌요가 가장 까다롭습니다(긴 연승 필요). 오른쪽 세 열을 끝까지 채워 둔 뒤 네 번째 열 바닥부터 지워나가며 연쇄를 만드세요.", en: "Puyo Puyo is the toughest cabinet (needs a long win streak) — fill the rightmost three columns to the top, then clear from the bottom of the fourth column to build chains." },
      ],
      videos: [
        { title: { ko: "클럽 세가: 판타지 존·뿌요뿌요·VF5 등 아케이드 (2019)", en: "Club SEGA: Fantasy Zone, Puyo Puyo, VF5 and more (2019)" }, url: YT("IoikCU-EWVs") },
      ],
    },
    {
      slug: "friend-events",
      name: { ko: "친구 이벤트 (프렌드 시스템)", en: "Friend Events (Friend System)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "카무로초 전역 (챕터 1에서 츠쿠모를 첫 친구로 등록하며 시작)", en: "Across Kamurocho (begins in Chapter 1 by registering Tsukumo as your first friend)" },
      summary: {
        ko: "카무로초 주민들과 친해지는 야가미만의 사교 시스템. 각 친구의 우정 게이지를 100%까지 채우면 도시 평판이 올라 사이드 케이스 수주가 가능해집니다. 친구 수가 많아 컴플리션 비중이 큽니다.",
        en: "Yagami's social system of befriending Kamurocho's residents. Filling each friend's meter to 100% raises City Reputation, which gates Side Cases. With so many friends, it's a heavy chunk of completion.",
      },
      howTo: [
        { ko: "가게 주인·점원 친구는 그 가게에서 물건을 사거나 식사하는 것만으로 이벤트가 트리거됩니다. 동선상 가게를 부지런히 이용하세요.", en: "Shopkeeper and staff friends trigger events just by buying from or dining at their store — patronize shops as you pass through." },
        { ko: "'밑 빠진 위(Bottomless Stomach)' 스킬(5,000 SP)을 사면 배가 불러도 먹을 수 있어 식사형 친구 이벤트를 빠르게 끝낼 수 있습니다.", en: "Buy the Bottomless Stomach skill (5,000 SP) to eat even when full and blitz the meal-based friend events." },
        { ko: "친구 이벤트의 선택지는 오답이어도 게이지에 불이익이 없으니 부담 없이 진행하세요. 일부는 본편·다른 친구 해금이 선행 조건입니다.", en: "Dialogue choices in friend events never penalize the meter, so answer freely; note some friends gate behind story progress or other friends." },
      ],
    },
  ],
};
