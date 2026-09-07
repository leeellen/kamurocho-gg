import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza: Like a Dragon. Unlock chapters, rules and prize
// bands come from ゲーム攻略マン's per-play-spot pages, cited on each entry.
export const yakuzaLikeADragonMinigames: MinigamesData = {
  appId: 1235140,
  intro: {
    ko: "Y7의 미니게임은 챕터로 해금이 갈립니다. 캔 줍기는 3장, 드래곤 카트는 4장(서브스토리 No.40)부터 열리고, 비즈니스 매니지먼트와 스지몬 도감은 본편과 병행해야 하는 대형 콘텐츠입니다. 각 항목의 해금 조건과 규칙은 출처 페이지에서 확인한 것입니다.",
    en: "Like a Dragon gates its minigames by chapter: can collecting opens in Chapter 3, Dragon Kart in Chapter 4 via substory No.40, and Business Management and the Sujidex are long-running content you push alongside the story. Unlock conditions and rules below come from the linked pages.",
  },
  minigames: [
    {
      slug: "dragon-kart",
      name: { ko: "드래곤 카트", en: "Dragon Kart" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "이진초 — 하마키타 공원 구역 (4장부터)", en: "Hamakita Park, Isezaki Ijincho — from Chapter 4" },
      summary: {
        ko: "거리를 카트로 달리는 레이스입니다. 4장에서 서브스토리 No.40으로 시작되고, 이후 후지사와(포케사 파이터)에게 말을 걸어 그랑프리 코스를 고릅니다. 한 컵에 3코스씩이며 코스는 총 12개입니다.",
        en: "A kart race through the streets. It starts as substory No.40 in Chapter 4, after which Fujisawa — the Pocket Circuit Fighter — runs the Grand Prix. Three courses per cup, twelve in all.",
      },
      howTo: [
        { ko: "코스의 아이템 박스(어태셔 케이스)에서 최대 2종까지 무기를 얻고 ○로 사용합니다. 라이벌이 먼저 가져가는 경우도 있으니 라인을 뺏기지 않는 것도 중요합니다.", en: "Item boxes — the attaché cases — give up to two weapons at a time, fired with circle. Rivals grab them too, so the racing line matters as much as the item." },
        { ko: "링을 모으면 가속 성능이 오르고 카트 내구도 게이지가 회복됩니다. 공격받아 내구도가 0이 되면 크래시로 조작 불능이 되므로, 링을 지나치지 말고 주워 가며 달리는 편이 결과적으로 빠릅니다.", en: "Rings raise acceleration and repair the kart's durability gauge. Losing all durability crashes you into a helpless animation, so collecting rings on the way round is faster than ignoring them." },
        { ko: "모은 링은 경품과 교환합니다. 레이스에서 이기는 것 자체보다 링 수급이 목적인 주회도 유효합니다.", en: "Rings also buy prizes, so a lap run purely for ring collection is a legitimate use of the mode." },
      ],
      videos: [
        { title: { ko: "드래곤 카트 전 라이벌 레이스", en: "Dragon Kart — all rival races" }, url: YT("HtdWqioCrko") },
        { title: { ko: "드래곤 컵 공략", en: "Dragon Cup walkthrough" }, url: YT("XbDKr_NOXsc") },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 ドラゴンカート", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/dragon-kart.html" },
    },
    {
      slug: "can-quest",
      name: { ko: "서바이벌 캔 줍기", en: "Survival Can Quest" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "이진초 — 직업안정소 거리 (3장부터)", en: "The job-centre district, Isezaki Ijincho — from Chapter 3" },
      summary: {
        ko: "리어카 자전거로 빈 캔을 모아 출발 지점으로 돌아오는 돈벌이 미니게임입니다. 3장 진행 후 칸 씨에게 말을 걸면 플레이할 수 있고, 모은 pts로 재료·아이템 구입과 환금이 가능합니다.",
        en: "Collect cans on a cart bike and bring them back to the start. It opens in Chapter 3 by talking to Kan-san, and the points buy materials and convert to cash at his shop.",
      },
      howTo: [
        { ko: "캔이 무더기로 쌓인 지점이 있습니다. 맵에서 위치를 보고 무더기를 지나가는 경로를 짜면 효율이 크게 달라집니다.", en: "Some spots hold whole piles of cans — read the map and route through the piles rather than picking singles." },
        { ko: "벽이나 가스통에 부딪히면 모은 캔을 떨어뜨립니다. 파란 쓰레기 수거차와 충돌하면 대량으로 회수당하므로, 난이도마다 다른 수거차의 순회 경로를 맵으로 확인하며 피하세요.", en: "Hitting a wall or a gas cylinder drops cans, and colliding with the blue collection truck takes a large batch — its route differs by difficulty, so watch it on the map." },
        { ko: "영양 드링크를 주우면 △로 부스트를 씁니다. 부스트 중에 라이벌 노숙자에게 부딪히면 반대로 상대의 캔을 빼앗을 수 있습니다.", en: "The energy drink lets you boost with triangle, and ramming a rival while boosting takes their cans instead of losing yours." },
        { ko: "가끔 쓰레기봉투를 진 소녀가 나타나 이동하며 캔을 대량으로 흘립니다. 맵의 ☆ 아이콘이 그 위치이므로 보이면 쫓아가세요.", en: "A girl carrying a rubbish bag occasionally appears and scatters cans as she walks — the star icon on the map is her, and she is worth chasing." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 サバイバル缶拾い", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/survival-picked-up-empty-cans.html" },
    },
    {
      slug: "vintage-film-theater",
      name: { ko: "명화 극장 (졸음 참기)", en: "Vintage Film Theater" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "이진초 — 한텐코지 구역 영화관 「우미네코자」", en: "Umineko-za cinema, Hantenkoji, Isezaki Ijincho" },
      summary: {
        ko: "옛 영화 10편을 상영하는 극장입니다. 티켓은 1인 1,000엔이고 동료와 함께 보면 인연도 깊어집니다. 상영 중 나타나는 「수마(睡魔)」를 버튼 입력으로 쫓아내는 반사신경 게임입니다.",
        en: "Ten old films, ¥1,000 a ticket, and watching with a party member deepens bonds. During the film you fend off the sheep-faced Sleep Demons with button inputs.",
      },
      howTo: [
        { ko: "화면 좌우에 수마가 나타나면 표시된 방향키나 버튼을 빠르게 누릅니다. 수마가 없는 쪽 버튼을 누르면 오히려 체력 게이지가 줄어드니 화면을 보고 반응해야 합니다.", en: "Press the button shown as each demon appears on the left or right — pressing a button where there is no demon costs you gauge instead." },
        { ko: "「연타」로 표시된 수마는 5회 이상 눌러야 쓰러집니다. 한 번만 눌러서는 넘어가지 않습니다.", en: "A demon marked for rapid input needs five or more presses; one will not do it." },
        { ko: "닭 머리 캐릭터는 그냥 두면 체력 게이지를 회복해 줍니다. 반사적으로 버튼을 누르면 쫓아내 버리므로 손을 대지 마세요.", en: "The chicken-headed character restores your gauge if you leave it alone — reflexively hitting the button shoos it away." },
        { ko: "「러시」 상태에서는 평소보다 졸음을 많이 날리는 금색 수마가 등장합니다. 이때는 금색을 우선 처리하세요.", en: "During a Rush the gold demons appear and hit much harder — deal with those first." },
      ],
      videos: [
        { title: { ko: "명화 극장 「Life of Sheep」 S랭크", en: "Vintage Film Theater — Life of Sheep (S rank)" }, url: YT("xvdshCazprk") },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 名画座", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/movie-theater.html" },
    },
    {
      slug: "business-management",
      name: { ko: "비즈니스 매니지먼트 (이치반 흥업)", en: "Business Management" },
      category: { ko: "경영 시뮬레이션", en: "Management sim" },
      difficulty: 4,
      location: { ko: "이진초 — 이치반 흥업", en: "Ichiban Holdings, Isezaki Ijincho" },
      summary: {
        ko: "회사를 경영해 주주총회를 이겨 나가는 대형 사이드 모드입니다. 사원 배치와 사업 확장, 주주총회 전투가 축입니다.",
        en: "A full management mode: run the company, expand, and win the shareholder meetings.",
      },
      howTo: [
        { ko: "사원은 능력치뿐 아니라 상성이 있습니다. 매장에 맞는 인재를 배치하는 것이 매출에 직접 반영되므로, 능력치가 높다고 아무 데나 넣으면 손해입니다.", en: "Staff have affinities as well as stats, and matching them to the right store is what actually moves revenue — high stats in the wrong place are wasted." },
        { ko: "주주총회는 별도의 전투입니다. 지지율을 미리 올려 두고 유리한 주주를 배치해야 하므로, 경영 페이즈에서 준비를 끝내 놓고 들어가야 합니다.", en: "The shareholder meeting is its own battle: you go in with approval already raised and the right shareholders placed, so the prep happens in the management phase." },
        { ko: "랭크가 오를수록 요구 매출이 급격히 커집니다. 사업 확장은 자금 여유를 두고 단계적으로 하세요.", en: "Required revenue climbs steeply with each rank, so expand in steps with cash in reserve." },
      ],
      videos: [
        { title: { ko: "비즈니스 매니지먼트 랭킹 1위 공략", en: "Business Management rank 1 guide" }, url: YT("FjyNRDHqsOA") },
        { title: { ko: "이치반 과자점 종합 가이드", en: "Ultimate Ichiban Confections guide" }, url: YT("FtGm2-YjliU") },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 事業を始める", url: "https://dswiipspwikips3.jp/yakuza7/company-management/start-business.html" },
    },
    {
      slug: "sujimon",
      name: { ko: "스지몬 (스지 도감)", en: "Sujimon (the Sujidex)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "이진초·소텐보리·카무로초 전역", en: "All three cities" },
      summary: {
        ko: "거리의 적을 스지몬으로 등록해 도감을 채우는 수집 요소입니다. 도감을 채우면 스지 배틀과 보상이 열립니다.",
        en: "Register street enemies into the Sujidex. Filling it opens Suji battles and rewards.",
      },
      howTo: [
        { ko: "등록은 그 적과 싸워 이기면 자동으로 됩니다. 특정 조건에서만 나오는 개체가 있으므로 시간대·구역·챕터를 바꿔 가며 돌아야 합니다.", en: "Beating an enemy registers it automatically, but some only spawn under particular conditions, so sweep by time of day, district and chapter." },
        { ko: "레어 개체는 챕터가 지나면 나오지 않는 경우가 있습니다. 도감을 노린다면 각 챕터에서 그 지역의 적을 한 번씩 훑고 넘어가세요.", en: "Some rare entries stop appearing once a chapter passes, so clear each district's roster before moving the story on." },
        { ko: "스지몬 정보는 도감에서 약점과 출현 지역을 확인할 수 있습니다. 남은 항목을 찾을 때는 도감의 미등록 슬롯을 먼저 보세요.", en: "The dex itself lists weaknesses and spawn areas — check the empty slots first when hunting the last few." },
      ],
      videos: [
        { title: { ko: "전 스지몬 위치 가이드", en: "All Sujimon locations" }, url: YT("HbH7z66aldM") },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 スジモン図鑑", url: "https://dswiipspwikips3.jp/yakuza7/cheats-data/sujimon.html" },
    },
    {
      slug: "niginigi",
      name: { ko: "주물주물 (니기니기)", en: "Can-Squeeze (Niginigi)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "이진초 — 유흥가", en: "The nightlife district, Isezaki Ijincho" },
      summary: {
        ko: "버튼 입력으로 진행하는 짧은 성인 취향 미니게임입니다. 인연 이벤트와 연결되어 있습니다.",
        en: "A short adult-humour minigame driven by button inputs, tied into the bond events.",
      },
      howTo: [
        { ko: "화면에 표시되는 버튼과 리듬에 맞춰 입력하는 방식입니다. 정확도보다 지시대로 끝까지 따라가는 것이 조건입니다.", en: "Follow the prompts in rhythm — the requirement is finishing as instructed rather than any accuracy target." },
        { ko: "플레이 자체가 컴플리트 항목이므로 한 번 돌리면 됩니다. 반복 보상은 없습니다.", en: "The completion row counts the play itself, so one run is enough — there is no repeat reward." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 にぎにぎ", url: "https://dswiipspwikips3.jp/yakuza7/cheats-data/niginig-daughter.html" },
    },
    {
      slug: "golf",
      name: { ko: "골프 센터", en: "Golf Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "이진초 — HEAVEN'S GOLF / 소텐보리 — 요코보리 골프 센터 (1플레이 1,000엔)", en: "HEAVEN'S GOLF in Ijincho and Yokobori Golf Center in Sotenbori — ¥1,000 a round" },
      summary: {
        ko: "니어핀 챌린지와 빙고 챌린지가 있습니다. 두 시설의 코스와 경품 교환 내용은 같으므로 어느 쪽에서 해도 상관없습니다.",
        en: "Nearest-the-Pin and Bingo. Both venues run the same courses and prize list, so either works.",
      },
      howTo: [
        { ko: "니어핀 경품은 코스와 포인트 구간으로 갈립니다. 초급 100~199pt는 이에몬 특차, 중급 같은 구간은 터프니스 라이트, 상급은 마쿠노우치 도시락처럼 코스가 올라갈수록 보상이 좋아집니다.", en: "Nearest-the-Pin prizes are banded by course and points: 100-199 gives Iyemon Tokucha on Beginner, Toughness Light on Intermediate and a Makunouchi Bento on Advanced." },
        { ko: "빙고 챌린지는 9장의 패널을 쳐서 가로세로를 맞추는 방식입니다. 니어핀처럼 컵을 노리는 것이 아니라 패널 위치에 맞춰 파워를 조절하는 종목입니다.", en: "Bingo is a 3x3 panel grid rather than a cup — you are matching power to a panel position." },
        { ko: "바람의 방향과 세기가 낙하 지점을 크게 바꿉니다. 화면의 바람 표시를 먼저 보고 파워와 방향을 정하세요.", en: "Wind direction and strength move the landing point a long way, so read the indicator before setting power and aim." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 ゴルフセンター", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/golf-center.html" },
    },
    {
      slug: "pachislot",
      name: { ko: "파치슬로", en: "Pachislot" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "이진초 — PIA / 카무로초 — 에스파스 니타쿠·마루한", en: "PIA in Ijincho, Espace Nittaku and Maruhan in Kamurocho" },
      summary: {
        ko: "실제 기종 4대를 그대로 이식했습니다. 파치슬로 창천의 권 붕우, 어나더 갓 하데스, 미리언 갓, 파치슬로 맹수왕이며 뒤 두 대는 무료 DLC로 배포됩니다.",
        en: "Four real machines ported whole: Sōten no Ken Hōyū, Another God Hades, Million God and Mōjūō — the last two arriving as free DLC.",
      },
      howTo: [
        { ko: "이 작품의 파치슬로 대는 가게마다 설정이 다르고, 가게를 나가도 설정이 초기화되지 않습니다. 시간대가 바뀌는 특정 타이밍에만 설정이 바뀌므로 좋은 대를 찾으면 계속 앉아 있어도 됩니다.", en: "Each parlour sets its machines differently, and unlike earlier games the setting does not reset when you leave — it only changes at certain times of day, so a good machine stays good." },
        { ko: "아이템을 써서 대의 설정을 직접 바꿀 수도 있습니다. 메달을 대량으로 벌어야 한다면 설정을 올려 두고 돌리는 편이 확실합니다.", en: "Items can raise a machine's setting outright, which is the reliable way to farm medals." },
        { ko: "메달은 경품과 교환합니다. 비싼 경품일수록 요구 매수가 크므로, 목표 경품의 매수를 먼저 확인하고 필요한 만큼만 돌리세요.", en: "Medals buy prizes, and the expensive ones want a lot — check the price before deciding how long to sit there." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 パチスロ", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/pachislot.html" },
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "이진초·카무로초 — 배팅 센터", en: "Batting centers in Ijincho and Kamurocho" },
      summary: {
        ko: "패널을 맞혀 점수를 내는 방식이며 코스마다 구질이 고정입니다.",
        en: "Panel-hitting for points, with a fixed pitch script per course.",
      },
      howTo: [
        { ko: "커서를 코스에 맞춘 뒤, 투구와 함께 줄어드는 커서가 공 크기와 겹치는 순간에 휘두르는 것이 정타입니다.", en: "Line the cursor up, then swing as the shrinking cursor matches the ball's size." },
        { ko: "구질별 구속대가 다릅니다. 느린 커브에서 타이밍을 당기지 않는 것이 점수를 지키는 핵심입니다.", en: "Speeds differ by pitch type, and not rushing the slow curves is what protects the score." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 バッティングセンター", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/batting-center.html" },
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "이진초·카무로초 — 바", en: "Bars in Ijincho and Kamurocho" },
      summary: {
        ko: "01·크리켓·카운트업 세 종목입니다.",
        en: "The usual three modes: 01, Cricket and Count-Up.",
      },
      howTo: [
        { ko: "싱글은 그 구역 점수, 더블 2배, 트리플 3배이고 BULL은 50점입니다. 01에서는 트리플 20보다 BULL이 안정적입니다.", en: "Singles score the sector, doubles double, triples treble, bull is 50 — in 01 the bull is steadier than treble 20." },
        { ko: "크리켓은 한 구역을 세 번 맞혀 점유합니다. 더블은 2회, 트리플은 3회로 계산되므로 트리플 한 방이면 즉시 점유됩니다.", en: "Cricket claims a number on three hits, with doubles worth two and triples three — one triple claims it outright." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 ダーツ", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/darts.html" },
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "이진초·카무로초 — 가라오케", en: "Karaoke in Ijincho and Kamurocho" },
      summary: {
        ko: "버튼 타이밍 리듬 게임입니다. 동료와 함께 부르면 인연도가 오릅니다.",
        en: "A button-timing rhythm game, and singing with a party member raises bonds.",
      },
      howTo: [
        { ko: "노트가 라인에 닿는 순간이 아니라 커서에 겹치는 순간이 판정 기준입니다. 「Hold」는 끝까지 누르고 「Rapid」는 연타입니다.", en: "Judge on the note overlapping the cursor, not reaching the lane. Hold means hold to the end; Rapid means mash." },
        { ko: "인연도를 올릴 목적이라면 점수보다 동행이 중요합니다. 아직 인연이 낮은 동료를 데려가세요.", en: "If bonds are the point, who you bring matters more than the score — take whoever is furthest behind." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 カラオケ", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/karaoke.html" },
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 4,
      location: { ko: "이진초·카무로초 — 마작장", en: "Mahjong parlours in Ijincho and Kamurocho" },
      summary: {
        ko: "컴플리트 항목은 화료와 누적 점수입니다. 규칙을 모르면 이 작품에서도 가장 오래 걸립니다.",
        en: "Wins and a points total, and still the longest entry if the rules are new to you.",
      },
      howTo: [
        { ko: "점수를 크게 만들기보다 싸고 빠르게 화료하는 편이 조건을 빨리 채웁니다. 리치·탕야오 수준으로 계속 돌리세요.", en: "Cheap fast hands fill the rows faster than big ones — stick to riichi and tanyao." },
        { ko: "누적 점수는 고레이트 탁에서 도는 편이 빠르고, 화료 횟수 조건과 동시에 진행됩니다.", en: "The points row goes faster at a high-rate table and advances alongside the win-count row." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 麻雀", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/majan.html" },
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "이진초·카무로초 — 노상 장기", en: "Street shogi in Ijincho and Kamurocho" },
      summary: {
        ko: "컴플리트 항목은 승리 관련입니다.",
        en: "The rows are about winning.",
      },
      howTo: [
        { ko: "가장 약한 상대부터 붙고, 무르기 사용 여부가 조건인 항목이 있으니 주의하세요.", en: "Start with the weakest opponent and watch the take-back — some rows depend on it." },
        { ko: "규칙을 모르면 정해진 국면에서 최선수를 찾는 문제 형식으로 감을 잡는 편이 실전보다 빠릅니다.", en: "If shogi is new, the set-position problems teach it faster than full games." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 将棋", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/syogi.html" },
    },
    {
      slug: "koi-koi",
      name: { ko: "도박장 (코이코이·오이초카부)", en: "Gambling Hall (koi-koi, oicho-kabu)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "이진초·카무로초 — 도박장", en: "Gambling dens in Ijincho and Kamurocho" },
      summary: {
        ko: "코이코이와 오이초카부가 있으며 누적 획득량이 조건입니다.",
        en: "Koi-koi and oicho-kabu, counted by cumulative winnings.",
      },
      howTo: [
        { ko: "코이코이는 역을 알면 「고이코이」 선언 타이밍이 전부입니다. 작은 역이라도 확정 점수를 챙기는 편이 누적에 유리합니다.", en: "In koi-koi the whole game is when to call — banking a small hand beats gambling it away when totals count." },
        { ko: "누적이 조건이므로 잃어도 진행이 되돌아가지 않습니다. 중간 판돈으로 꾸준히 도는 편이 결과적으로 빠릅니다.", en: "Losses do not undo a cumulative row, so steady mid-size bets finish faster than swinging for it." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 こいこい", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/koikoi.html" },
    },
    {
      slug: "casino",
      name: { ko: "카지노 (블랙잭·포커 등)", en: "Casino (blackjack, poker and more)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "이진초·카무로초 — 카지노", en: "Casinos in Ijincho and Kamurocho" },
      summary: {
        ko: "칩을 벌어 경품과 교환합니다. 블랙잭이 회전과 기대값 양쪽에서 가장 안정적입니다.",
        en: "Earn chips and trade them for prizes; blackjack is the steadiest for both pace and expectation.",
      },
      howTo: [
        { ko: "블랙잭은 연승으로 베팅 상한이 오르고 한 번 지면 초기화됩니다. 상한을 먼저 올린 뒤 큰 판을 거는 순서가 효율적입니다.", en: "Blackjack raises its cap on a streak and resets it on a loss, so climb first and bet big afterwards." },
        { ko: "칩을 다 써도 조건이 「획득량」이면 진행은 남습니다. 경품 교환을 미룰 필요는 없습니다.", en: "Where a row counts winnings rather than balance, spending the chips does not undo it — no need to hoard." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く7 ブラックジャック", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/blackjack.html" },
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 (판타지 존·아웃런·스페이스 해리어·슈퍼 행온·UFO 캐처)", en: "Club SEGA (Fantasy Zone, Out Run, Space Harrier, Super Hang-On, UFO Catcher)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "이진초·카무로초 — 클럽 세가", en: "Club SEGA in Ijincho and Kamurocho" },
      summary: {
        ko: "아케이드 기판 4종과 UFO 캐처가 있습니다. 기판은 원작 난도 그대로입니다.",
        en: "Four arcade boards and the UFO Catcher, the boards at their original difficulty.",
      },
      howTo: [
        { ko: "판타지 존은 스테이지를 빠르게 깨는 것보다 적을 계속 잡아 돈을 모으고 강화 아이템을 사서 오래 살아남는 쪽이 점수가 큽니다.", en: "Fantasy Zone scores better by farming enemies for money and buying upgrades to survive longer than by rushing stages." },
        { ko: "아웃런과 슈퍼 행온은 타임 보너스가 점수의 대부분입니다. 코스를 외워 감속을 줄이는 것이 그대로 점수가 됩니다.", en: "Out Run and Super Hang-On pay mostly in time bonus, so learning the course to avoid braking is the score." },
        { ko: "UFO 캐처는 서로 다른 경품을 모으는 방식이라 같은 인형을 반복해 뽑아도 진행되지 않습니다.", en: "The UFO Catcher counts distinct prizes, so duplicates do nothing." },
      ],
      source: [
        { label: "ゲーム攻略マン — 龍が如く7 ファンタジーゾーン", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/fantasy-zone.html" },
        { label: "ゲーム攻略マン — 龍が如く7 UFOキャッチャー", url: "https://dswiipspwikips3.jp/yakuza7/play-spots/ufo-catcher.html" },
      ],
    },
  ],
};

