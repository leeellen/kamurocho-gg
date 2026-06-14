import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza: Like a Dragon (용과 같이 7). Difficulty is
// rated for the Completion List grind, not casual play. Cross-referenced against
// community guides (GameFAQs, Neoseeker, Samurai Gamers, Yakuza Wiki) and verified
// YouTube walkthroughs. Most minigames are based in Isezaki Ijincho, Yokohama.
export const yakuzaLikeADragonMinigames: MinigamesData = {
  appId: 1235140,
  intro: {
    ko: "Y7은 시리즈가 턴제 RPG로 전환된 작품으로, 무대인 요코하마 이세자키 이진초에 미니게임이 빼곡합니다. 드래곤 카트와 비즈니스 매니지먼트(이치반 흥업)는 컴플리션의 양대 난관이고, 스지몬 도감·명화 극장·캔 퀘스트는 분량이 많아 미리 손대 두는 편이 좋습니다. 챕터 진행으로만 해금되는 종목이 있으니 순서를 참고하세요.",
    en: "Yakuza: Like a Dragon reinvents the series as a turn-based RPG, packing its stage — Isezaki Ijincho, Yokohama — with minigames. Dragon Kart and Business Management (Ichiban Holdings) are the twin completion walls, while the Sujidex, the movie theater, and Can Quest are long grinds worth starting early. Several modes only unlock as the story advances, so mind the order.",
  },
  minigames: [
    {
      slug: "dragon-kart",
      name: { ko: "드래곤 카트", en: "Dragon Kart" },
      category: { ko: "레이싱", en: "Racing" },
      difficulty: 5,
      location: { ko: "이진초 하마키타 공원 북쪽 (후지사와에게 말 걸기, 챕터 4 해금)", en: "North of Hamakita Park, Ijincho (talk to Fujisawa, unlocks Chapter 4)" },
      summary: {
        ko: "무기를 쏘며 달리는 마리오 카트형 레이싱. 컴플리션은 4개 컵(비기너·인터미디어트·어드밴스드·드래곤)과 6개 라이벌 전을 모두 우승해야 하며, 마지막 두 라이벌은 챕터 15에서야 열립니다. 라이벌전 난이도가 시리즈 최상급이라 카트 풀강화가 사실상 필수입니다.",
        en: "A Mario Kart-style racer where you fire weapons while driving. Completion requires winning all 4 cups (Beginner, Intermediate, Advanced, Dragon) plus all 6 rival races; the final two rivals only open in Chapter 15. The rival fights are brutally tuned, so a fully upgraded kart is effectively mandatory.",
      },
      howTo: [
        { ko: "상금이 모이면 곧바로 카트를 구매·풀강화하세요. 라이벌전은 스펙 차이가 크게 작용해 무강화로는 거의 불가능합니다.", en: "Buy and fully upgrade a kart as soon as you can afford it — rival races hinge on raw stats and are near-impossible stock." },
        { ko: "드래곤 링(코스의 링)을 최대한 주워 모으세요. 최고 속도가 오르고 카트 내구도도 회복됩니다.", en: "Grab every Dragon Ring on the track — they raise top speed and repair your kart's durability." },
        { ko: "충돌과 피격으로 내구도가 깎이면 크래시해 시간을 잃습니다. 실드 아이템과 코너 라인을 안정적으로 가져가세요.", en: "Collisions and hits drain durability and cause a time-losing crash, so play corners cleanly and save Shield items." },
        { ko: "라이벌 진(Jin) 등은 풀강화 크림슨 파이어 같은 상위 카트로, 무기로 상대를 묶고 실수를 최소화하는 운영이 안정적입니다.", en: "For rivals like Jin, run a top kart such as a fully upgraded Crimson Fire, use weapons to disable them, and minimize mistakes." },
        { ko: "스타트 대시: 카운트다운 「2」가 사라지기 직전(애니메이션 중간 무렵)에 가속을 눌러 두면 출발과 동시에 부스트가 터져 선두로 치고 나갑니다.", en: "Boost start: hold accel right before the '2' in the countdown dissolves (about midway through its animation) to launch ahead of the pack." },
        { ko: "코너는 X 버튼 드리프트로 돌되, 바깥쪽에서 진입해 안쪽으로 파고드는 아웃-인 라인을 잡아야 속도 손실이 적습니다.", en: "Drift corners with the X button and take an outside-in line — enter wide and cut in to bleed the least speed." },
        { ko: "라이벌전은 가볍고 빠른 카트가, 다른 카트가 많은 컵(그랑프리)에서는 무겁고 강한 카트가 유리합니다. 종목에 맞춰 차종을 바꾸세요.", en: "Light, fast karts suit one-on-one rival races; heavier, sturdier karts fare better in cups crowded with other karts — swap accordingly." },
        { ko: "진의 와인딩 크로스는 좁고 급커브가 많아 그립·핸들링이 높은 (풀강화) 크림슨 파이어가 적합하며, 코스를 미리 한두 번 외워 두면 벽 충돌을 크게 줄일 수 있습니다.", en: "Jin's Winding Cross is narrow with sharp turns, so a high-grip, fully upgraded Crimson Fire fits best — run the course once or twice first to cut down wall hits." },
      ],
      videos: [
        { title: { ko: "드래곤 카트 전 라이벌 레이스", en: "Dragon Kart - All Rival Races" }, url: YT("HtdWqioCrko") },
        { title: { ko: "드래곤 컵 공략", en: "Dragon Cup walkthrough" }, url: YT("XbDKr_NOXsc") },
      ],
      achievementSlug: "yazawa_dragon_cart_all_claer",
    },
    {
      slug: "business-management",
      name: { ko: "비즈니스 매니지먼트 (이치반 흥업)", en: "Business Management (Ichiban Holdings)" },
      category: { ko: "매니지먼트", en: "Management" },
      difficulty: 5,
      location: { ko: "이진초 (이치반 과자점 인수, 챕터 5 해금)", en: "Ijincho (take over Ichiban Confections, unlocks Chapter 5)" },
      summary: {
        ko: "이치로가 망해가는 과자 회사를 인수해 직원·매장을 굴려 주가 랭킹 1위를 노리는 주식회사 경영 미니게임. 영업 페이즈에서 흐름을 관리하고 주주총회에서 야유꾼을 받아치며 회사를 키웁니다. 랭킹 1위는 강력한 소환 캐릭터 등 보상이 큽니다.",
        en: "Ichiban takes over a failing confectionery and runs employees and storefronts to climb to Rank 1 in the stock rankings. You manage the flow of the sales phase, then fend off hecklers in shareholder meetings to grow the company. Hitting Rank 1 unlocks big rewards, including a powerful summon.",
      },
      howTo: [
        { ko: "직원은 능력치와 매장 적성을 보고 배치하고, 수익을 직원·매장 강화에 재투자하며 매장 수를 늘리세요.", en: "Place employees by stats and store affinity, and reinvest profits into upgrading staff and stores while expanding your storefront count." },
        { ko: "영업 페이즈에서 상승 화살표 아이콘을 눌러 손님 흐름을 관리하고 트러블 아이콘은 빠르게 처리하세요.", en: "During the sales phase, tap the boost/up arrows to manage customer flow and clear trouble icons quickly." },
        { ko: "주주총회는 야유꾼 5명을 상대로 직원 카드를 내 논파하는 가위바위보형 배틀입니다. 속성 상성을 맞춰 게이지를 채우세요.", en: "Shareholder meetings are a rock-paper-scissors-style battle against five hecklers — match employee card affinities to fill the gauge and rebut them." },
        { ko: "랭킹 1위 달성 후 주주총회는 반복해 약 300만 엔을 벌 수 있는 안정적 수입원이 됩니다.", en: "After reaching Rank 1, shareholder meetings repeat for about 3 million yen a run, becoming a steady income source." },
        { ko: "리더는 상품·서비스·지명도 능력치가 모두 반영되지만 일반 멤버는 특정 능력치만 반영됩니다. 능력이 좋은 직원을 리더로 두고 나머지는 매장 특성에 맞춰 배치하세요.", en: "A store's leader applies all three stats (product, service, recognition) while members apply only specific ones — make your best employee the leader and slot the rest by store affinity." },
        { ko: "직급 승진은 인건비가 크게 뛰므로 초반(약 100위 전)에는 저비용 기본 사원으로 적자만 피하고, 투자금이 들어온 뒤 본점에 집중 투자·고급 직원을 고용하세요.", en: "Promotions spike labor costs, so until roughly Rank 100 run cheap basic staff to avoid losses, then pour investment into your flagship store and hire premium employees once funding arrives." },
        { ko: "영업 페이즈의 「광고 의뢰」는 무조건 받으세요. 매출이 몇 배로 뜁니다. 반면 투자 의뢰는 무시해도 무방합니다.", en: "Always accept 'advertising' requests during the sales phase — they multiply revenue several times over; investment requests can be safely ignored." },
        { ko: "경영 시작 직후 이치반 과자점 옆 서브스토리(야구 스타 관련 의뢰 포함)를 먼저 깨면 주주총회에서 초반 주주를 두 방에 제압하는 강력한 리더급 직원을 일찍 얻습니다.", en: "Clear the substory next to Ichiban Confections early (including the baseball-star quest) to recruit a strong leader-tier employee who can two-shot early investors in shareholder meetings." },
        { ko: "주주총회 상성: 빨간 말풍선엔 파란 직원, 파란 말풍선엔 초록 직원, 초록 말풍선엔 빨간 직원을 내면 WEAK이 떠 방패 3개를 한 번에 부숩니다. 시작 전 빨·파·초 직원을 1명씩 고르게 세팅하고, 발언 게이지가 가장 빨리 차는 주주부터 처리하세요.", en: "Shareholder affinity: counter a red bubble with a blue employee, blue with green, green with red — this triggers WEAK and shatters all three shields at once. Set up one red, one blue and one green employee before starting, and silence whichever heckler's gauge fills fastest first." },
      ],
      videos: [
        { title: { ko: "비즈니스 매니지먼트 랭킹 1위 공략", en: "Business Management Rank 1 guide" }, url: YT("FjyNRDHqsOA") },
        { title: { ko: "이치반 과자점 종합 가이드", en: "Ultimate Ichiban Confections guide" }, url: YT("FtGm2-YjliU") },
      ],
    },
    {
      slug: "sujimon",
      name: { ko: "스지몬 (스지 도감)", en: "Sujimon (Sujidex)" },
      category: { ko: "수집·도감", en: "Collection / Bestiary" },
      difficulty: 4,
      location: { ko: "이진초 전역 (적과 전투 중 스마트폰으로 촬영)", en: "Across Ijincho (snap enemies with your phone in battle)" },
      summary: {
        ko: "포켓몬 패러디 적 도감. 길거리 적을 전투 중 사진으로 찍어 「스지 도감」을 채웁니다. 일부 스지몬은 특정 시간대·장소·날씨에만 등장하거나 후반 챕터에서야 나타나 컴플리션에는 꽤 많은 시간이 듭니다.",
        en: "A Pokemon-parody bestiary: photograph street enemies during battle to fill the Sujidex. Some Sujimon only appear at certain times, places, or weather, or only in later chapters, so completion is a sizable time sink.",
      },
      howTo: [
        { ko: "전투에 들어가면 배틀 메뉴의 촬영 기능으로 미등록 적을 찍어 등록하세요. 한 번 찍으면 도감에 남습니다.", en: "In battle, use the photo option in the battle menu to capture unregistered enemies — one shot registers them permanently." },
        { ko: "야간·우천 한정이나 특정 구역에만 나오는 개체가 있으니, 시간대를 바꿔 가며 같은 지역을 다시 도세요.", en: "Some appear only at night, in rain, or in specific zones — revisit the same areas at different times of day to fill gaps." },
        { ko: "스토리가 진행될수록 상위 적이 등장하니 후반 챕터·고난도 던전(소텐보리 지하 등)에서 누락분을 채우세요.", en: "Tougher enemies appear as the story progresses — mop up missing entries in late chapters and high-level dungeons (e.g. the Sotenbori sewers)." },
      ],
      videos: [
        { title: { ko: "전 스지몬 위치 가이드 (스지 도감 완성)", en: "All Sujimon Locations - Sujidex Complete" }, url: YT("HbH7z66aldM") },
      ],
      achievementSlug: "yazawa_sujimon_b",
    },
    {
      slug: "vintage-film-theater",
      name: { ko: "명화 극장 (졸음 참기)", en: "Vintage Film Theater (stay awake)" },
      category: { ko: "리듬·반응", en: "Rhythm / Reaction" },
      difficulty: 3,
      location: { ko: "이진초 (서브스토리 「올드 시네마 파라디소」 클리어 후, 챕터 4~)", en: "Ijincho (after substory 'Old Cinema Paradiso', Chapter 4 onward)" },
      summary: {
        ko: "옛 영화를 보며 졸지 않고 버티는 반응형 미니게임. 화면에 나타나는 「렘 양(REM Ram)」을 해당 버튼으로 쫓아내며 졸음 게이지를 관리합니다. 총 10편의 영화를 모두 클리어해야 하며, 이전 편을 깨야 다음 편이 열립니다.",
        en: "A reaction minigame about not dozing off during old movies. Repel the REM Rams that pop up with the matching button to manage Ichiban's sleep gauge. There are 10 films total, each unlocking only after you clear the previous one.",
      },
      howTo: [
        { ko: "렘 양 위에 뜬 버튼을 눌러 쫓아내세요. 「RAPID」 표시가 붙으면 그 버튼을 5번 연타해야 사라집니다.", en: "Press the button shown over each REM Ram to repel it — if it reads 'RAPID', mash that button five times to clear it." },
        { ko: "알람 시계(Alarm Cock)는 쫓아내지 않으면 심벌즈로 졸음 게이지를 깎으니, 렘 양과 함께 우선 처리하세요.", en: "Alarm Cocks lower your gauge with their cymbals if ignored, so deal with them alongside the REM Rams." },
        { ko: "후반 영화는 동시 등장 수가 늘어 손이 바빠집니다. 화면을 넓게 보며 가까운 적부터 빠르게 끊으세요.", en: "Later films throw more at you at once — keep a wide view and clear the nearest threats first." },
      ],
      videos: [
        { title: { ko: "명화 극장 「Life of Sheep」 S랭크", en: "Vintage Film Theater - Life of Sheep (S-Rank)" }, url: YT("xvdshCazprk") },
      ],
      achievementSlug: "yazawa_meigaza_all_clear",
    },
    {
      slug: "can-quest",
      name: { ko: "캔 퀘스트 (빈 캔 줍기)", en: "Can Quest" },
      category: { ko: "알바·레이싱", en: "Part-time / Racing" },
      difficulty: 3,
      location: { ko: "이진초 (칸 씨의 자전거, 챕터 3 해금)", en: "Ijincho (Kan-san's bicycle, unlocks Chapter 3)" },
      summary: {
        ko: "특제 자전거로 거리의 빈 캔을 제한 시간 안에 최대한 주워 출발점으로 가져오는 알바 미니게임. 모은 캔으로 에코 포인트를 얻어 칸 씨에게서 아이템과 교환합니다. 라이벌과의 경쟁 코스도 있습니다.",
        en: "A part-time minigame where you ride a custom bike, scoop up as many street cans as possible before the timer runs out, and deliver them to the start. Cans become Eco Points to trade with Kan-san for items, and there are competitive courses against rivals.",
      },
      howTo: [
        { ko: "파란 에너지 보틀로 부스트를 충전하세요. 한 번에 하나만 보유 가능하니 미니맵을 보며 늘 하나는 들고 다니세요.", en: "Charge boost with the blue energy bottles — you can hold only one, so watch the minimap and always keep one in reserve." },
        { ko: "부스트 중에만 라이벌을 들이받아 캔을 떨굴 수 있으니, 라이벌 근처에서 부스트를 아껴 사용하세요.", en: "You can only smash rivals (and make them drop cans) while boosting, so save boost for when a rival is near." },
        { ko: "미니맵의 초록 별로 표시되는 「캔 걸」을 쫓으세요. 그녀가 떨구는 캔은 개당 5개로 효율이 높습니다.", en: "Chase the 'can girl' marked as a green star on the minimap — each can she drops is worth five." },
      ],
    },
    {
      slug: "niginigi",
      name: { ko: "주물주물 (니기니기)", en: "NigiNigi" },
      category: { ko: "수집·이벤트", en: "Collection / Event" },
      difficulty: 2,
      location: { ko: "이진초·소텐보리 거리 (희귀 등장 NPC 「니기니기 걸」)", en: "Streets of Ijincho and Sotenbori (rare 'Nigi-Nigi Girl' NPCs)" },
      summary: {
        ko: "드래곤 퀘스트의 「푸푸」를 패러디한 이벤트. 거리에 드물게 나타나는 「니기니기 걸」에게 50,000엔을 내면 코믹한 니기니기 연출과 함께 보상을 받습니다. 등장이 무작위·희귀해 모두 만나려면 시간이 걸립니다.",
        en: "A parody of Dragon Quest's 'Puff-Puff'. Pay 50,000 yen to a rarely-spawning 'Nigi-Nigi Girl' on the street for a comedic NigiNigi scene and a reward. Spawns are random and rare, so meeting them all takes time.",
      },
      howTo: [
        { ko: "「니기니기 걸」은 무작위로 거리에 나타나니, 이동·탐색 중 NPC를 눈여겨보고 보이면 바로 말을 거세요.", en: "Nigi-Nigi Girls spawn randomly on the street — keep an eye on NPCs while exploring and approach one the moment you spot it." },
        { ko: "1회당 50,000엔이 들므로 비즈니스 매니지먼트 등으로 자금을 넉넉히 확보한 뒤 진행하면 부담이 적습니다.", en: "Each costs 50,000 yen, so build up funds (e.g. via Business Management) before chasing these." },
      ],
      achievementSlug: "yazawa_niginigi_complete",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "이진초·소텐보리 마작장", en: "Mahjong parlors in Ijincho and Sotenbori" },
      summary: {
        ko: "일본식 리치 마작. 4인 한 판제로 진행되며, 시리즈 전통의 도박 미니게임입니다. 컴플리션·일부 보상 조건과 연계되니 역 만들기에 익숙해 두면 좋습니다.",
        en: "Japanese riichi mahjong, played in four-player hanchan rounds — a series staple gambling minigame. It ties into completion and some rewards, so it pays to get comfortable building yaku.",
      },
      howTo: [
        { ko: "리치·탕야오·핀후 등 기본 역부터 노려 안정적으로 화료하세요. 무리한 큰 역은 방총 위험이 큽니다.", en: "Aim for basic yaku (riichi, tanyao, pinfu) for steady wins — chasing big hands risks dealing in." },
        { ko: "룰 설명서를 미리 확인하면 점수 계산과 화료 조건을 빠르게 파악할 수 있습니다.", en: "Read the in-game rules sheet first to grasp scoring and winning conditions quickly." },
      ],
    },
    {
      slug: "shogi",
      name: { ko: "쇼기", en: "Shogi" },
      category: { ko: "보드게임", en: "Board game" },
      difficulty: 3,
      location: { ko: "이진초·소텐보리 (쇼기 가능 시설)", en: "Shogi venues in Ijincho and Sotenbori" },
      summary: {
        ko: "일본 장기. 잡은 말을 다시 놓는 「드롭」 룰이 특징인 시리즈 단골 보드게임입니다. CPU를 상대로 한 판제로 진행됩니다.",
        en: "Japanese chess, a recurring series board game defined by its 'drop' rule (returning captured pieces to the board). Played one match at a time against the CPU.",
      },
      howTo: [
        { ko: "잡은 말을 다시 놓는 드롭이 핵심입니다. 옥장군(왕)의 안전을 먼저 확보한 뒤 공격을 전개하세요.", en: "Drops are the heart of shogi — secure your king first, then build your attack." },
        { ko: "초반에는 비차·각행 등 큰 말의 길을 막히지 않게 전개해 주도권을 잡으세요.", en: "Early on, develop your major pieces (rook, bishop) along open lines to seize the initiative." },
      ],
    },
    {
      slug: "koi-koi",
      name: { ko: "코이코이 (하나후다)", en: "Koi-Koi (Hanafuda)" },
      category: { ko: "카드 게임", en: "Card game" },
      difficulty: 2,
      location: { ko: "이진초·소텐보리 (하나후다 가능 시설)", en: "Hanafuda venues in Ijincho and Sotenbori" },
      summary: {
        ko: "화투(하나후다)로 즐기는 코이코이. 패를 맞춰 「역」을 만들고, 계속할지(코이코이) 끝낼지를 판단해 점수를 겨룹니다. 규칙이 단순해 비교적 쉽게 접근할 수 있습니다.",
        en: "Koi-Koi played with hanafuda cards: match cards to form yaku, then decide whether to push on ('koi-koi') or cash out for points. Simple rules make it one of the friendlier gambling games.",
      },
      howTo: [
        { ko: "역이 완성되면 점수와 위험을 따져 「코이코이(계속)」 여부를 결정하세요. 욕심내면 상대에게 역을 내줄 수 있습니다.", en: "When you complete a yaku, weigh reward vs. risk before calling 'koi-koi' — pushing too far can hand the round to your opponent." },
        { ko: "광·단·씨 등 역별 구성 패를 외워 두면 한 수 앞을 보고 패를 모을 수 있습니다.", en: "Memorize which cards make each yaku (brights, ribbons, animals) so you can collect with a plan." },
      ],
    },
    {
      slug: "casino",
      name: { ko: "카지노", en: "Casino" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "이진초 카지노 (블랙잭·룰렛·바카라·포커 등)", en: "Ijincho casino (blackjack, roulette, baccarat, poker, etc.)" },
      summary: {
        ko: "칩을 사서 블랙잭·룰렛·바카라·포커 등을 즐기는 카지노. 딴 칩은 카운터에서 경품과 교환해 희귀 아이템을 얻을 수 있습니다.",
        en: "Buy chips and play blackjack, roulette, baccarat, poker and more. Trade winnings at the counter for prizes, including rare items.",
      },
      howTo: [
        { ko: "블랙잭은 하우스 엣지가 낮아 칩 불리기에 안정적입니다. 기본 전략(딜러 업카드 기준)을 따르세요.", en: "Blackjack has a low house edge and is the steadiest way to grow chips — follow basic strategy by the dealer's upcard." },
        { ko: "딴 칩은 카운터에서 경품으로 교환하세요. 일부 경품은 다른 곳에서 구하기 힘든 장비입니다.", en: "Cash chips into counter prizes — some are gear hard to obtain elsewhere." },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "이진초 (다트 가능 시설)", en: "Darts venue in Ijincho" },
      summary: {
        ko: "타이밍과 조준으로 점수를 겨루는 다트. 501·카운트업 등 모드가 있으며, 흔들리는 조준선을 멈춰 원하는 칸을 노립니다.",
        en: "Timing-and-aim darts with modes like 501 and Count-Up — steady the swaying reticle and release to hit the segment you want.",
      },
      howTo: [
        { ko: "조준선이 목표 위에 올 때 버튼을 떼세요. 흔들림이 작아지는 순간을 노리면 명중률이 오릅니다.", en: "Release when the reticle sits on your target — time it to the moment the sway is smallest." },
        { ko: "501에서는 마지막에 정확히 0을 맞춰야 하니, 남은 점수를 역산해 더블·트리플 칸을 노리세요.", en: "In 501 you must land exactly on zero, so plan backward and aim for the double/triple segments." },
      ],
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / Rhythm" },
      difficulty: 2,
      location: { ko: "이진초 가라오케 (술집·바)", en: "Ijincho karaoke" },
      summary: {
        ko: "시리즈 명물 리듬 미니게임. 흘러오는 노트를 박자에 맞춰 입력해 점수를 냅니다. Y7에서는 이치로의 「Machine Gun Kiss」 등 곡이 수록되어 있습니다.",
        en: "The series' signature rhythm minigame — hit the incoming notes on the beat for a high score. Y7 features tracks like Ichiban's 'Machine Gun Kiss'.",
      },
      howTo: [
        { ko: "노트가 판정 링에 겹치는 순간 입력하세요. 박자에 맞춘 정타가 콤보와 점수를 크게 끌어올립니다.", en: "Input exactly as the note overlaps the judgment ring — on-beat 'perfect' hits drive your combo and score." },
        { ko: "고난도 곡은 빠른 연타·동시 입력이 나오니, 먼저 쉬운 곡으로 노트 흐름에 익숙해지세요.", en: "Harder songs throw rapid and simultaneous inputs — warm up on easier tracks to learn the note flow first." },
      ],
    },
    {
      slug: "batting-center",
      name: { ko: "배팅센터", en: "Batting Center" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "이진초 배팅센터", en: "Ijincho batting center" },
      summary: {
        ko: "날아오는 공을 타이밍에 맞춰 치는 시리즈 단골 미니게임. 과제 코스에서 지정 타깃을 맞히거나 홈런을 모아 보상을 얻습니다.",
        en: "The classic batting minigame — time your swing to hit pitched balls. Challenge courses ask you to hit set targets or rack up home runs for rewards.",
      },
      howTo: [
        { ko: "공이 홈플레이트에 닿기 직전 타이밍에 스윙하세요. 코스 초반은 직구 위주라 박자를 잡기 쉽습니다.", en: "Swing just before the ball reaches the plate — early courses are mostly straight pitches, so the rhythm is easy to find." },
        { ko: "과제 코스에서는 빛나는 타깃 패널을 노려 맞히면 추가 점수와 보상이 들어옵니다.", en: "In challenge courses, aim for the glowing target panels for bonus points and rewards." },
      ],
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 (아케이드)", en: "Club SEGA Arcade" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "이진초 클럽 세가", en: "Club SEGA, Ijincho" },
      summary: {
        ko: "세가 아케이드 게임을 플레이할 수 있는 오락실. Y7에는 「버추어 파이터 2」「스페이스 해리어」 등 실제 세가 클래식과 UFO 캐처(크레인 게임)가 들어 있습니다.",
        en: "An arcade stocked with real SEGA classics — Virtua Fighter 2, Space Harrier and more — plus a UFO Catcher (crane game).",
      },
      howTo: [
        { ko: "UFO 캐처는 크레인을 경품 무게중심 위에 정렬해야 합니다. 가로·세로 축을 차분히 맞춰 집으세요.", en: "For the UFO Catcher, line the crane up over the prize's center of mass — set the horizontal and vertical axes carefully before grabbing." },
        { ko: "아케이드 클래식은 점수 보상이 붙은 종목이 있으니, 익숙한 타이틀부터 도전해 보상을 챙기세요.", en: "Some arcade classics give score-based rewards — start with the titles you know to bank them." },
      ],
    },
  ],
};
