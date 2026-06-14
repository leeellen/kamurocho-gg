import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza Kiwami 2. Difficulty is rated for the
// completion-list / 100% grind, not for casual play. Cross-referenced against
// community walkthroughs (GameFAQs, Neoseeker) and video tutorials.
export const yakuzaKiwami2Minigames: MinigamesData = {
  appId: 3717340,
  intro: {
    ko: "Yakuza Kiwami 2는 캐바레 클럽 그랑프리와 마지마 건설(클랜 크리에이터)이라는 두 개의 대형 사이드 콘텐츠를 중심으로 미니게임 밀도가 높은 작품입니다. 컴플리트 리스트와 「달성목록 100%」를 노린다면 아래 종목을 모두 한 번씩은 건드려야 합니다. 악명 높은 종목(캐바레 그랑프리·클랜 크리에이터·마작)은 영상까지 함께 보면 훨씬 수월합니다.",
    en: "Yakuza Kiwami 2 is built around two massive side-modes — the Cabaret Club Grand Prix and Majima Construction (Clan Creator) — on top of a dense minigame lineup. For the Completion List and 100% Achievement Log you'll need to touch every entry below at least once. The notorious ones (Cabaret GP, Clan Creator, mahjong) go much smoother with the videos attached.",
  },
  minigames: [
    {
      slug: "cabaret-club-grand-prix",
      name: { ko: "캐바레 클럽 그랑프리 (Four Shine)", en: "Cabaret Club Grand Prix (Four Shine)" },
      category: { ko: "경영", en: "Management" },
      difficulty: 4,
      location: { ko: "소텐보리 클럽 Four Shine (4챕터 이후)", en: "Club Four Shine, Sotenbori (after Chapter 4)" },
      summary: {
        ko: "캐바레 클럽 경영 미니게임. 호스티스를 배치해 손님을 접대하고, 리그를 차례로 제패해 그랑프리 우승을 노립니다. 이 게임 최대 규모의 사이드 스토리이자 최고의 돈벌이 수단입니다.",
        en: "The cabaret club management mode. Place hostesses to serve customers, climb league after league, and win the Grand Prix. It's the game's biggest side story and best money-maker.",
      },
      howTo: [
        { ko: "교대(셔터) 중에는 핑크색으로 달아오른(분위기 MAX) 손님을 우선 보세요. 손님 머리 위 요청 아이콘이 뜨면 「샤우트」로 호스티스를 불러 응대하면 매출이 크게 오릅니다.", en: "During a shift, prioritize 'fever' (max-mood, pink) customers and answer request icons fast — Shout the right hostess over to spike sales." },
        { ko: "호스티스는 브론즈<실버<골드<플래티넘 등급입니다. 리그가 올라갈수록 골드·플래티넘 위주로 라인업을 짜되, 손님 타입(취향)에 맞는 호스티스를 매칭하세요.", en: "Hostesses rank Bronze < Silver < Gold < Platinum — lean on Golds/Platinums in higher leagues and match each hostess to the customer's preferred type." },
        { ko: "소텐보리를 돌아다니며 「파트너 숍」을 사두면 손님 유입이 늘어 랭킹전이 훨씬 쉬워집니다.", en: "Buy Partner Shops around Sotenbori to pull in more patrons and make ranking matches far easier." },
        { ko: "랭킹전은 단 하루의 최고 매출(경비 제외)로 순위가 정해집니다. 한 번의 완벽한 셔터에 집중하세요.", en: "Ranking is decided by your single best night's net earnings — focus on one flawless shift." },
        { ko: "호스티스가 보내는 「도움 요청 손동작」을 외워두세요. 두 손 원=재떨이, 한 손 원=레이디스 글라스, L자=손님 글라스, 비트는 동작=물수건, 샤카 사인=얼음통, 양손 펴기=메뉴. 정답을 내면 추가 주문이 들어오고 호스티스 HP·손님 기분이 동시에 회복됩니다.", en: "Memorize the hostess request gestures: both-hands circle = ashtray, one-hand circle = ladies' glass, L-shape = guest glass, twisting = towel, shaka = ice bucket, open flat hands = menu. A correct answer adds an order and restores both hostess HP and customer mood." },
        { ko: "피버 게이지는 1단계가 차는 순간 바로 R1로 발동하지 말고, 시간이 빠듯할 때 전략적으로 터뜨리세요. 3단계까지 채워 발동하면 컷신과 함께 모든 테이블의 매출·만족도가 폭발합니다.", en: "Don't auto-pop the Fever gauge at level 1 — save it for when time is tight, or charge to level 3 so the cutscene boosts sales and mood across every table at once." },
        { ko: "부유한 손님(리치·타이쿤)일수록 취향이 까다로워 외모·성격이 정확히 맞아야 합니다. 플래티넘 호스티스는 헤어+드레스만 맞춰도 2개 스탯이 S랭크가 되니, 외형보다 스탯을 우선해 메이크오버하고 큐트/펀/엘레강스/섹시를 골고루 갖춘 라인업을 만드세요. 레벨 10·20·30에 열리는 디너 데이트로 추가 경험치를 벌 수 있습니다.", en: "Rich/Tycoon customers demand an exact look-and-personality match. Platinum hostesses hit two S-rank stats from hairstyle + dress alone, so prioritize stats over looks in makeovers and build a roster that covers Cute/Funny/Elegant/Sexy. Dinner dates unlock at levels 10/20/30 for bonus XP." },
        { ko: "스카우트 비용은 시도할수록 비싸집니다. 스카우트 전 세이브 후, 브론즈가 나오면 리로드하는 세이브 스컴이 정석입니다. 고유 호스티스(코유키=올라운더, 에츠코·여교장=펀 S, 유리코·유카 등)는 서브스토리로 더 싸게 확보하세요.", en: "Scouting costs climb each attempt — save before scouting and reload on Bronze pulls (the standard save-scum). Grab unique hostesses (Koyuki = all-rounder, Etsuko / the Headmistress = S Funny, Yuriko, Yuka, etc.) cheaply via substories instead." },
      ],
      videos: [
        { title: { ko: "캐바레 클럽 공략 팁", en: "Cabaret Club guide: tips & tricks" }, url: YT("-dBV_78Pw2Y") },
      ],
      achievementSlug: "lexus2_cabaret_island_gp_all_clear",
    },
    {
      slug: "clan-creator",
      name: { ko: "마지마 건설 (클랜 크리에이터)", en: "Majima Construction (Clan Creator)" },
      category: { ko: "전략", en: "Strategy" },
      difficulty: 4,
      location: { ko: "소텐보리 마지마 건설 사무소", en: "Majima Construction office, Sotenbori" },
      summary: {
        ko: "타워 디펜스형 실시간 전략 모드. 직원(유닛)을 영입·육성해 적의 침입으로부터 본부를 방어합니다. 컴플리션을 위해선 본편 미션과 고득점 모두 필요합니다.",
        en: "A tower-defense style real-time strategy mode. Recruit and train employees to defend your HQ from waves of invaders; completion needs both the story missions and a high score.",
      },
      howTo: [
        { ko: "직원은 밸런스·공격·방어·원거리(프로텍션) 4타입입니다. 좁은 길목엔 방어형으로 막고, 원거리형으로 뒤에서 화력을 보태는 조합이 기본입니다.", en: "Employees come in Balanced, Attack, Defense, and ranged Protection types — wall chokepoints with Defense units and add fire from Protection units behind them." },
        { ko: "체력이 절반 이하로 떨어진 직원에겐 즉시 「스피릿(기력)」을 써서 회복시키세요. 초반에 유닛을 잃으면 전선이 무너집니다.", en: "Spend Spirits to heal any employee that drops below half HP — losing a unit early collapses your line." },
        { ko: "콜로세움·서브스토리·길거리 보스에서 강한 직원을 적극 영입해 로스터를 두껍게 만드세요.", en: "Recruit strong employees from the Coliseum, substories, and street bosses to deepen your roster." },
        { ko: "원거리(프로텍션) 유닛을 최소 2명 데려가세요. 특히 「닥터」는 유탄 발사기로 광역 딜을 넣으면서 힐 스킬까지 있어 1순위 추천입니다.", en: "Bring at least two ranged (Protection) units — the Doctor is the top pick, dealing AoE with a grenade launcher while also having a heal skill." },
        { ko: "유닛을 넓게 펼치지 말고 길목(초크 포인트)에 뭉쳐 막으세요. 적은 어차피 그 길로 와야 하므로 방어선을 뚫고 새는 일이 줄어듭니다.", en: "Don't over-stretch — cluster on chokepoints. Enemies are funneled through them anyway, so far fewer slip past your line." },
        { ko: "전체 파티에 적용되는 버프 스킬을 우선하세요. 리키 초슈의 「피끓는 힘(Surging Power)」은 45초간 전군 공격 1.5배·방어 3배를 겁니다. 힘든 후반 웨이브에선 팀을 2~3개 그룹으로 나눠 L1·R1 핫스위치로 특정 지점에 빠르게 몰아넣으세요.", en: "Prioritize party-wide buff skills — Riki Choshu's Surging Power gives all allies 1.5x attack and 3x defense for 45s. On tough late waves, split your team into 2-3 groups and use L1/R1 hot-swap to rush units to one spot fast." },
        { ko: "고득점은 남은 시설 내구도·격파 속도·절약한 자금·키와미 기술 사용 빈도로 계산됩니다. 스피릿(기력)은 5회 제한이니 초반엔 아끼고, 미션 후반엔 1/3만 닳아도 과감히 회복·버프에 쓰세요.", en: "High scores reward leftover facility durability, kill speed, cash saved, and Kiwami-move usage. Spirits are capped at five per battle — hoard them early, but spend freely on heals/buffs late even at a third HP lost." },
      ],
      videos: [
        { title: { ko: "클랜 크리에이터 100% 트로피 가이드", en: "Clan Creator 100% trophy guide" }, url: YT("eOFW4VIh1bU") },
        { title: { ko: "클랜 크리에이터 20만 점 돌파 (포어맨 트로피)", en: "Clan Creator 200,000+ points (Foreman trophy)" }, url: YT("Ct3utgkJPsA") },
      ],
      achievementSlug: "lexus2_clan_creater_clear",
    },
    {
      slug: "golf",
      name: { ko: "골프 (요코보리 골프 센터)", en: "Golf (Yokobori Golf Center)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "소텐보리 요코보리 골프 센터", en: "Yokobori Golf Center, Sotenbori" },
      summary: {
        ko: "드라이빙 레인지형 골프. 일반 모드 외에 9개 패널을 노리는 「빙고 챌린지」가 있으며, 하루카의 의뢰로 8빙고를 요구해 컴플리션의 까다로운 부분입니다.",
        en: "A driving-range golf game. Besides standard mode there's a 'Bingo Challenge' targeting 9 panels — Haruka asks for 8 bingos, the tricky completion bit.",
      },
      howTo: [
        { ko: "왼쪽 스틱으로 방향을, 파워 미터를 두 번 눌러(시작→정지) 비거리를 정합니다. 패널까지의 야드(거리) 표시를 보고 파워를 정확히 맞추세요.", en: "Aim with the left stick, then press twice (start → stop) on the power meter to set distance — match the yardage shown to the panel." },
        { ko: "빙고는 가로·세로·대각선 한 줄을 완성할 때마다 카운트됩니다. 공 10개로 9패널을 노리되, 한 줄을 완성하는 순서로 패널을 공략하세요.", en: "A bingo counts per completed row/column/diagonal — with 10 balls for 9 panels, sink panels in an order that completes lines." },
        { ko: "바람이 없으니 같은 파워는 항상 같은 거리입니다. 한 번 거리감을 잡으면 그대로 반복하세요.", en: "There's no wind, so identical power always flies the same distance — lock in a feel and repeat it." },
        { ko: "야드 표시는 좌측 파워 미터로 조절합니다. 버튼으로 미터를 시작시키면 게이지가 올라가고, 원하는 파워에서 한 번 더 눌러 멈추세요. 패널 야드와 미터를 1:1로 맞추는 게 핵심입니다.", en: "Set distance on the left-side power meter: press once to start it climbing, press again at the desired power. The trick is matching the panel yardage to the meter 1:1." },
        { ko: "2025년 리마스터판은 야드 마커가 25야드에서 20야드 간격으로 바뀌었으니, 구 가이드의 거리값을 그대로 쓰지 말고 환산해서 적용하세요.", en: "The 2025 re-release changed yardage markers from every 25 yds to every 20 yds — don't copy old guides' distances verbatim, convert them first." },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: { ko: "소텐보리 배팅 센터", en: "Batting Center, Sotenbori" },
      summary: {
        ko: "타이밍에 맞춰 배트를 휘두르는 야구 미니게임. 일반 코스 외에 홈런 타깃을 모두 맞히는 챌린지가 컴플리션 조건입니다.",
        en: "A timing-based batting game. Beyond the normal course, a home-run target challenge is the completion requirement.",
      },
      howTo: [
        { ko: "공이 홈플레이트에 도달하기 직전, 스윙 모션을 고려해 살짝 빨리 휘두르세요.", en: "Swing slightly early to account for the animation, just before the ball reaches the plate." },
        { ko: "홈런 챌린지는 화면의 타깃 방향(좌·중·우)에 맞춰 타이밍을 미세 조정해야 합니다. 직구 코스에서 연습 후 도전하세요.", en: "For the home-run challenge, nudge your timing toward the on-screen target zone — practice on the straight-pitch course first." },
        { ko: "홈런 경연은 3x3 격자에서 노란 커서를 좌스틱으로 움직여 빨간 착지 예측 커서에 맞추는 방식입니다. 세트 1~8은 투구 패턴이 고정이고 10세트 이후 패턴이 반복되니 외워두면 무한정 점수를 벌 수 있습니다(컴플리션 3,150점).", en: "In the home-run contest you steer a yellow cursor on a 3x3 grid onto the red landing-prediction cursor with the left stick. Pitch sets 1-8 are fixed and the pattern repeats after set 10, so memorizing them farms points indefinitely (3,150 pts for completion)." },
        { ko: "아이템 교환소의 「세레네 배트」를 쓰면 점수가 0.7배(1000→750)로 줄지만 홈런 판정 윈도가 훨씬 넓어져 가장 빠른 파밍 수단입니다. PC라면 마우스를 낮은 DPI(400~800)로 조준하면 패드보다 정확합니다.", en: "The Serene Bat from the Item Exchange cuts points to 0.7x (1000→750) but vastly widens the home-run hit window, making it the fastest farm. On PC, aiming with a mouse at low DPI (400-800) beats a controller." },
      ],
      videos: [
        { title: { ko: "전 야구 챌린지 클리어 (홈런·챌린지 코스)", en: "All baseball challenges (home run / challenge courses)" }, url: YT("tzPHyCBmfE8") },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: { ko: "소텐보리 마작장", en: "Mahjong parlor, Sotenbori" },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 시리즈 최대 난관이지만, 한 가지 패턴만 알면 컴플리션은 충분히 넘깁니다.",
        en: "Standard Japanese riichi mahjong — the series' biggest wall if you don't know the rules, but one pattern is enough for completion.",
      },
      howTo: [
        { ko: "손패를 절대 공개(펑/치)하지 말고 닫은 채로 유지하세요. 그래야 리치를 선언할 수 있습니다.", en: "Keep your hand fully closed (never call Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 「탄야오」를 노립니다. 4면자+1쌍으로 텐파이가 되면 리치 선언 → 역이 자동으로 붙어 화료.", en: "Chase Tanyao (only simples 2–8). When you're one tile from 4 sets + a pair, declare Riichi — a yaku attaches automatically." },
        { ko: "컴플리션은 큰 점수가 아니라 화료(승리) 자체가 목적입니다. 점수 욕심 내지 말고 빠른 화료 위주로.", en: "Completion only needs wins, not big scores — prioritize fast hands over value." },
        { ko: "규칙 설정에서 「반장(Half Game)」으로 게임을 짧게 잡고, 쿠이탄(먹은 탄야오 인정)·아카도라(적도라)를 켜고, 2판 묶음(2-han 최소)은 끄세요. 펑/치로도 탄야오가 인정돼 화료가 훨씬 빨라집니다.", en: "In the rules, set Half Game to keep it short, turn ON Kuitan (open Tanyao) and Red Dora, and turn OFF the 2-han minimum — open Tanyao becomes legal, so you win much faster." },
      ],
      videos: [
        { title: { ko: "마작 입문 가이드 (Yakuza 시리즈)", en: "Mahjong for beginners (Yakuza)" }, url: YT("VwnEujAKE3A") },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: { ko: "소텐보리 쇼기장", en: "Shogi parlor, Sotenbori" },
      summary: {
        ko: "일본 장기. 잡은 말을 다시 놓을 수 있는 「持ち駒」 규칙이 체스와 다른 핵심입니다.",
        en: "Japanese chess — the key difference from Western chess is that captured pieces can be dropped back onto the board.",
      },
      howTo: [
        { ko: "왕을 지키는 「囲い(가코이)」 진형을 먼저 갖추고 공격하세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king before attacking — Mino castle is the easiest starter." },
        { ko: "잡은 말은 즉시 재투입할 수 있으니, 적진 깊숙이 말을 떨어뜨려 압박하세요.", en: "Captured pieces can be dropped anywhere — parachute them deep into enemy territory to apply pressure." },
        { ko: "컴플리션은 1승이면 충분합니다. 어려우면 약한 상대를 골라 도전하세요.", en: "Completion needs just one win — pick a weak opponent if you're struggling." },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "gambling-hall",
      name: { ko: "도박장 (코이코이·오이초카부)", en: "Gambling Hall (Koi-Koi & Oicho-Kabu)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "소텐보리 도박장", en: "Gambling hall, Sotenbori" },
      summary: {
        ko: "전통 일본 도박. 화투를 쓰는 「코이코이」와 카드 끗수 싸움 「오이초카부」를 즐길 수 있습니다.",
        en: "Traditional Japanese gambling: hanafuda-based Koi-Koi and the digit-summing card game Oicho-Kabu.",
      },
      howTo: [
        { ko: "코이코이는 「역(야쿠)」이 완성되면 멈추거나(승부) 계속할지(코이코이) 선택합니다. 작은 역이라도 일찍 확정하면 안정적으로 이깁니다.", en: "In Koi-Koi, once you form a yaku choose to stop (collect) or push (Koi-Koi) — banking small yaku early wins consistently." },
        { ko: "오이초카부는 두~세 장 합의 끝자리가 9에 가까울수록 강합니다(가부=9). 합이 두 자리면 끝자리만 셉니다.", en: "In Oicho-Kabu the last digit of your card sum near 9 wins (Kabu = 9) — only the ones digit counts." },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "casino",
      name: { ko: "카지노 (블랙잭·포커 등)", en: "Casino (Blackjack, Poker, etc.)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "소텐보리 카지노", en: "Casino, Sotenbori" },
      summary: {
        ko: "서양식 카지노. 블랙잭·포커·룰렛 등을 즐기며 칩을 모읍니다. 일부 종목 플레이가 컴플리션에 포함됩니다.",
        en: "A Western-style casino with blackjack, poker, roulette and more for chips — playing the games counts toward completion.",
      },
      howTo: [
        { ko: "블랙잭은 17 이상이면 스테이가 기본 전략입니다. 딜러의 오픈 카드가 약할 때(6 이하)만 더 공격적으로.", en: "In blackjack, stand on 17+ as a baseline; only push when the dealer's up-card is weak (6 or lower)." },
        { ko: "포커는 무리한 블러프보다 좋은 패가 들어왔을 때만 베팅을 키우세요. 컴플리션은 큰 승리보다 플레이 자체가 목적입니다.", en: "In poker, raise only on strong hands rather than bluffing — completion cares about playing, not big wins." },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
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
        { ko: "방향키 입력 구간은 한 박자 먼저 손을 준비해두면 미스가 줄어듭니다.", en: "Pre-position your hand a beat ahead for the directional sections to cut misses." },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 (버추어 파이터 2·버추얼 온)", en: "Club SEGA (Virtua Fighter 2, Virtual-On)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 클럽 세가", en: "Club SEGA in both cities" },
      summary: {
        ko: "실제 SEGA 아케이드 이식작. 「버추어 파이터 2」와 「전뇌전기 버추얼 온」을 플레이할 수 있으며, 두 작품 모두 완주가 컴플리션에 포함됩니다.",
        en: "Real SEGA arcade ports — fully playable Virtua Fighter 2 and Cyber Troopers Virtual-On, both counting toward completion when cleared.",
      },
      howTo: [
        { ko: "버추어 파이터 2는 가드(블록)와 던지기·기상기를 섞는 기본 3선택을 익히세요. 한 캐릭터의 주력기 2~3개만 외워도 CPU는 충분히 잡습니다.", en: "In Virtua Fighter 2, learn the guard/throw/rising-attack rock-paper-scissors — two or three go-to moves on one character beats the CPU." },
        { ko: "버추얼 온은 좌우로 계속 이동(대시)하며 록온 사격하세요. 멈춰 서면 적탄에 맞기 쉽습니다.", en: "In Virtual-On, keep dashing side to side while firing lock-on shots — standing still gets you hit." },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "ufo-catcher",
      name: { ko: "UFO 캐처 (인형 뽑기)", en: "UFO Catcher (claw machine)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초·소텐보리 클럽 세가", en: "Club SEGA in both cities" },
      summary: {
        ko: "크레인 게임. 경품(인형)을 집어 출구 구멍으로 떨어뜨리면 됩니다. 일부 경품 획득이 컴플리션에 포함됩니다.",
        en: "A crane game — grab a prize and drop it into the chute. Winning certain prizes counts toward completion.",
      },
      howTo: [
        { ko: "두 번(가로→세로) 위치를 조정해 집게가 경품의 무게중심 바로 위에 오게 하세요.", en: "Set both axes (horizontal then depth) so the claw lands right over the prize's center of mass." },
        { ko: "한 번에 못 뽑아도 경품이 출구 쪽으로 조금씩 움직이도록 밀어내는 식으로 여러 번 시도하세요.", en: "If one grab fails, nudge the prize toward the chute a bit each attempt rather than going for a clean lift." },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "toylets",
      name: { ko: "토일레츠 (Toylets)", en: "Toylets" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 1,
      location: { ko: "클럽 세가 남자 화장실 (소변기)", en: "Club SEGA men's restroom (urinal games)" },
      summary: {
        ko: "소변기에 설치된 실제 SEGA 게임 「Toylets」 패러디. 압력 센서로 즐기는 짧은 미니게임 몇 종이 들어 있습니다.",
        en: "A parody of SEGA's real urinal-mounted 'Toylets' — a few short pressure-sensor minigames in the restroom.",
      },
      howTo: [
        { ko: "게임마다 목표(세기 유지/방향 조절)가 다르니 시작 전 안내를 읽으세요. 컴플리션은 플레이만으로 카운트됩니다.", en: "Each game has its own goal (hold strength / steer) — read the prompt; completion counts on play alone." },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "gravure-photo-shoot",
      name: { ko: "그라비아 촬영회", en: "Gravure Photo Shoot" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "소텐보리 (서브스토리 연계)", en: "Sotenbori (via substory)" },
      summary: {
        ko: "모델을 촬영하는 미니게임. 모델의 포즈·표정 변화에 맞춰 좋은 순간을 포착해 점수를 올립니다.",
        en: "A photo-shoot minigame: capture the model at the right moment as her pose and expression shift to score.",
      },
      howTo: [
        { ko: "모델이 가장 좋은 포즈/표정을 잡는 순간(하트·반응 표시)에 셔터를 누르세요. 지시(요청 포즈)에 맞으면 추가 점수가 붙습니다.", en: "Shoot at the peak pose/expression (heart or reaction cue) — matching the requested pose adds bonus points." },
        { ko: "초점·구도가 흔들리는 동안 무리하게 찍지 말고, 안정된 순간을 기다렸다가 촬영하세요.", en: "Don't fire while framing is shaky — wait for the steady beat, then shoot." },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
  ],
};
