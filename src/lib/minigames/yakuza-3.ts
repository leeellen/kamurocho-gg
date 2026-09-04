import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza 3 Remastered. Targets, prize bands and the
// pitch/score tables are taken from CyricZ's GameFAQs guide, cited on each
// entry.
export const yakuza3Minigames: MinigamesData = {
  appId: 1088710,
  intro: {
    ko: "Y3는 카무로초와 류큐(오키나와)에 미니게임이 나뉘어 있습니다. 오키나와 쪽 골프·낚시·아로마 마사지는 이 작품에만 있는 종목이고, 배팅 센터 엑스트라 하드처럼 조준 커서가 사라지는 변형도 있습니다. 각 항목의 목표 점수와 경품 구간은 출처의 표에서 확인한 것입니다.",
    en: "Yakuza 3 splits its minigames between Kamurocho and Downtown Ryukyu. Golf, fishing and the aroma massage are unique to this entry, and the batting center's Extra Hard course even takes the aiming cursor away. Target scores and prize bands below come from the tables in the linked guide.",
  },
  minigames: [
    {
      slug: "golf",
      name: { ko: "골프 (난요 컨트리클럽)", en: "Golf (Nanyo Country Club)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "류큐 — 난요 컨트리클럽", en: "Nanyo Country Club, Downtown Ryukyu" },
      summary: {
        ko: "9홀 경기와 니어핀 콘테스트 두 가지가 있습니다. 경기는 순위에 따라 1위 100,000엔, 2위 50,000엔, 3위 20,000엔을 받습니다.",
        en: "A nine-hole competition and a Near-Pin contest. Placing pays ¥100,000 for first, ¥50,000 for second and ¥20,000 for third.",
      },
      howTo: [
        { ko: "니어핀 콘테스트는 2번 홀에서만 20구를 칩니다. 점수는 다크그린 30, 라이트그린 50, 노랑 70, 주황 100, 빨강 150, 홀인 300점입니다.", en: "The Near-Pin contest is twenty balls, all on Hole 2. Scoring runs 30 for the dark green ring, 50 light green, 70 yellow, 100 orange, 150 red and 300 in the hole." },
        { ko: "2번 홀은 피칭 웨지 하나로 충분합니다. 바람이 등지면 풀파워로 치되 임팩트 지점을 아래로 내려 굴러가지 않게 하고, 맞바람이 세면 그때만 파워를 줄이세요.", en: "Hole 2 only needs the pitching wedge: full power with the impact point lowered so it does not roll on, and less than full power only when the wind is against you." },
        { ko: "니어핀 경품은 300점 타우리너, 400점 스태미난 로열, 550점 우든 드라이버, 750점 블랙 샤프트, 1,000점 시사 벨트입니다. 우든 드라이버는 여기서만 얻을 수 있습니다.", en: "Near-Pin prizes come at 300 (Tauriner), 400 (Staminan Royale), 550 (Wooden Driver), 750 (Black Shaft) and 1,000 (Shisa Belt) — the Wooden Driver is available nowhere else." },
      ],
      videos: [
        { title: { ko: "골프 컴플리션 (-5) 가이드", en: "Golf completion (-5) guide" }, url: YT("yJkxmEAlV2k") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Golf (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/golf" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "fishing",
      name: { ko: "낚시 (아침해변)", en: "Fishing (Morning Glory Beach)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "류큐 — 아침해변 낚시터", en: "The fishing spot at Morning Glory Beach" },
      summary: {
        ko: "어종은 여덟 종이며, 시간대는 참고일 뿐 사실상 아무 때나 낚을 수 있습니다. 미끼도 사거리만 맞으면 종류를 가리지 않습니다.",
        en: "Eight species. The listed times are a nudge rather than a rule, and any bait works so long as the fish is inside its range.",
      },
      howTo: [
        { ko: "릴링은 R1을 누른 채 물고기가 헤엄치는 방향으로 스틱을 기울이는 것이 안전합니다. 텐션 미터가 가득 차거나 완전히 비면 실패하므로, 너무 올라가면 L1을 누른 채 같은 방향으로 계속 당겨 빠르게 내리세요.", en: "The safe way to reel is holding R1 and pulling the stick the way the fish is swimming. Keep the tension meter off both ends — if it climbs, hold L1 and keep pulling the same way to drain it fast." },
        { ko: "거리별로 나오는 어종이 다릅니다. 참치는 100~150m, 이라부차는 50~120m, 미바이는 50~100m(낮), 구루쿤은 30~100m, 아바사는 0~50m(석양), 소라는 0~30m(밤)입니다.", en: "Distance decides the catch: Maguro at 100-150 m, Irabucha 50-120, Mibai 50-100 (day), Gurukun 30-100, Abasa 0-50 (sunset) and Green Turban 0-30 (night)." },
        { ko: "참치는 무는 순간의 X 입력 창이 매우 짧습니다. 100m 이상 멀리 던진 뒤 손을 버튼에 올려 두고 기다리세요. 판매가 100,000엔으로 가장 비쌉니다.", en: "The Maguro gives a very short window to press X on the bite, so cast past 100 m with your finger already on the button — it sells for ¥100,000, the best on the beach." },
      ],
      videos: [
        { title: { ko: "낚시 컴플리션 & 참치 가이드", en: "Fishing completion & tuna guide" }, url: YT("mPdGiQMvyQs") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Fishing (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/fishing" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "batting",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "카무로초 — 요시다 배팅 센터", en: "Yoshida Batting Center, Kamurocho" },
      summary: {
        ko: "코스별로 3×3 패널을 맞혀 점수를 냅니다. 엑스트라 하드 코스는 하드 코스에서 1,100점을 내야 열립니다.",
        en: "You score by hitting a 3x3 panel grid. The Extra Hard course only unlocks after 1,100 points on Hard.",
      },
      howTo: [
        { ko: "엑스트라 하드는 패널이 전부 떨어져 있어 한 번에 하나만 맞힐 수 있고, 조준 커서가 아예 보이지 않습니다. 노릴 패널을 키류의 눈높이, 화면 오른쪽 끝과 키류의 중간쯤에 두는 것이 기준입니다.", en: "On Extra Hard the panels are all separated so you can only hit one at a time, and the aiming cursor is hidden — line the panel up at Kiryu's eye level, about halfway between him and the right edge." },
        { ko: "구질과 구속은 고정입니다. 엑스트라 하드는 1구 패스트볼 160km/h로 시작해 2구 커브 70km/h, 3구 싱커 120km/h 순으로 이어지며 20구가 매번 같습니다.", en: "The pitch script is fixed — Extra Hard opens 160 km/h fastball, 70 km/h curve, 120 km/h sinker, and runs the same twenty every time." },
        { ko: "경품은 점수대로 갈립니다. 엑스트라 하드는 1,100점 도시락, 1,300점 터프니스 ZZ, 1,600점 물푸레나무 조각, 1,800점 이상에서 블루 배트의 영광입니다.", en: "Prizes are banded: on Extra Hard, 1,100 gives a Bento Lunch, 1,300 Toughness ZZ, 1,600 a Chunk of Wood (Ash) and 1,800+ Blue Bat's Glory." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Batting Center (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/batting-center" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초 — 가라오케관", en: "Karaoke bar, Kamurocho" },
      summary: {
        ko: "컴플리션 기준은 곡당 900점입니다. 여섯 곡 중 두 곡만 혼자 부를 수 있고 나머지는 동행이 부릅니다.",
        en: "The pass mark is 900 a song. Only two of the six are yours to sing; the rest belong to whoever you bring.",
      },
      howTo: [
        { ko: "곡과 담당은 「나를 바꾸고 싶어」 하루카, 「카무로초 자장가」 키류, 「당신의 손길은 어디로」 카나, 「슈팅 스타」 나오·란코·레이미, 「새터데이 나이트 러버」 미카·미유·유이, 「서머 메모리즈」 사야·린·시오리입니다.", en: "The songs and who sings them: I Wanna Change Myself (Haruka), Kamurocho Lullaby (Kiryu), Where Has Your Touch Gone? (Kana), Shooting Star (Nao, Ranko, Reimi), Saturday Night Lover (Mika, Miyu, Yui), Summer Memories (Saya, Rin, Shiori)." },
        { ko: "호스티스를 데려가려면 최소한 그 호스티스의 서브스토리를 끝내야 초대 선택지가 뜹니다. 하루카는 신뢰도 진행으로 동행합니다.", en: "To bring a hostess you must at least finish her substory before the invite prompt appears; Haruka comes along through her trust progression." },
        { ko: "추임새(백업) 곡에서는 「간단」과 「신나게」 중 반드시 「신나게」를 골라야 900점에 닿습니다. 동행 없이 혼자 골라도 기계가 대신 부르지만 점수는 나옵니다.", en: "On backing songs you have to pick Lively rather than Simple to reach 900. You can still select them alone — the machine sings and you clap — and it still scores." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Karaoke (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/karaoke" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "ufo-catcher",
      name: { ko: "UFO 캐처 (클럽 세가)", en: "UFO Catcher" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 클럽 세가 나카미치 거리점·극장 앞점", en: "Club SEGA Nakamichi St. and Theater Square, Kamurocho" },
      summary: {
        ko: "경품은 25종입니다. 작은 인형(피요짱·키티캣·베어리베어 각 4색), 야미바 3종, 츄라짱, 그리고 큰 인형(빅 피요짱·팻캣 4색·비기베어 4색)으로 나뉩니다.",
        en: "Twenty-five prizes: the small Piyo-chans, Kitty Kats and Beary Bears in four colours each, three Yummy Bars, Chura-chan, and the large Big Piyo-chan, Fat Cats and Biggy Bears.",
      },
      howTo: [
        { ko: "지점마다 재고가 다릅니다. 야미바는 나카미치 거리점에서만 확인된 경품이므로, 안 보이면 다른 지점으로 옮기거나 직원에게 재입고를 부탁하세요.", en: "Stock differs by branch — the Yummy Bars have only been seen at Nakamichi St. — so move branches or ask the attendant to restock." },
        { ko: "가장 찾기 어려운 것은 검은 「실키 피요짱」입니다. 극장 앞 광장점에서 작은 피요 무더기 위에 큰 피요가 얹힌 배치가 나올 때까지 재입고를 반복한 뒤, 위쪽 인형들을 먼저 치워야 집을 수 있습니다.", en: "The black Silkie Piyo-chan is the hardest: keep restocking the Theater Square machine until you get a pile of small Piyos with a big one on top, then clear the others off before you can reach it." },
      ],
      videos: [
        { title: { ko: "UFO 캐처 전 경품 가이드", en: "UFO Catcher all-prizes guide" }, url: YT("k3r16NkJnwE") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: UFO Catcher (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/ufo-catcher" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "boxcelios",
      name: { ko: "복셀리오스 (Boxcelios)", en: "Boxcelios" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "카무로초 — 클럽 세가", en: "Club SEGA, Kamurocho" },
      summary: {
        ko: "위아래로만 움직이며 검은 레이저를 쏘는 슈팅 게임입니다. 적의 빛나는 코어를 최대한 빨리 부수는 것이 목표입니다.",
        en: "A shooter where the ship moves up and down and fires a black laser. The goal is to destroy each enemy's glowing core as fast as possible.",
      },
      howTo: [
        { ko: "이 게임에는 사실상 3D 공간이 없습니다. 레이저는 지나가는 경로에서 처음 닿는 부위에 명중하므로, 배경처럼 보이는 금속도 그대로 막습니다. 코어 앞에 아무것도 없는 각을 찾아야 합니다.", en: "There is no real 3D space here: the laser hits the first part of the enemy it passes, even the bits that look like background — so you need a line where nothing sits in front of the core." },
        { ko: "적이 위아래로 흔들리므로 배를 코어와 같은 높이에 맞추면 첫 발에 끝납니다. 흔들림을 읽고 코어가 올라올 자리로 미리 이동하세요.", en: "The enemies bob up and down; line your ship up level with the core and it dies in one shot, so move to where the core is about to be." },
        { ko: "발사 버튼을 계속 누르고 있으면 이동 속도가 느려집니다. 코어 근처로 빠르게 붙어 짧게 쏘는 편이 효율적입니다.", en: "Holding the fire button slows the ship down — it is faster to move close to the core and fire in short bursts." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Boxcelios (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/boxcelios" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "aroma-massage",
      name: { ko: "아로마 마사지", en: "Aroma Massage" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "류큐 — 아로마 마사지 가게", en: "The aroma massage parlour, Downtown Ryukyu" },
      summary: {
        ko: "화면 오른쪽 미터의 바가 위끝이나 아래끝에 닿지 않게 유지하는 게임입니다. 코스는 두 가지이고 각각 시간과 목표 점수가 다릅니다.",
        en: "Keep the bar on the right-hand meter away from both the top and the bottom. Two courses, each with its own time limit and target.",
      },
      howTo: [
        { ko: "스탠더드 마사지는 50초에 20,000점, 오일 마사지+귀 청소는 90초에 30,000점이 클리어 조건입니다.", en: "The Standard Massage runs 50 seconds and wants 20,000 points; the Oil Massage and Ear Cleaning runs 90 seconds and wants 30,000." },
        { ko: "바가 높을수록 점수가 빨리 오릅니다. 다만 위끝에 닿으면 실패이므로, 초반에는 위쪽에 붙여 점수를 벌고 후반부에는 가운데로 내려와 안전하게 버티는 배분이 좋습니다.", en: "The higher the bar, the faster the score climbs — but touching the top fails you, so ride high early and drift back to the middle once the session speeds up." },
        { ko: "「부웅」 하는 소리가 나면 바의 방향이 바뀌거나 한쪽으로 가속합니다. 그 신호를 듣고 미리 반대 입력을 준비하세요. 마지막에는 좌우 스틱을 돌려 마무리합니다.", en: "A soft boing means the bar is about to change direction or speed up — react to the sound rather than the bar. The session ends with a spin of both sticks." },
        { ko: "최고 랭크는 「고요한 용(Serene Dragon)」입니다. 조작이 매우 민감하니 과보정하지 말고 짧게 끊어 입력하세요.", en: "Top rank is Serene Dragon. The controls are twitchy, so tap rather than over-correct." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Aroma Massage (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/aroma-massage" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "pool",
      name: { ko: "당구", en: "Pool" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 당구장", en: "The pool hall, Kamurocho" },
      summary: {
        ko: "나인볼과 로테이션 등 정규 게임 외에 퍼즐 형식이 있습니다. 컴플리션은 특정 샷 종류를 채우는 방식입니다.",
        en: "Nine-ball and rotation alongside a puzzle format. Completion is about landing particular shot types.",
      },
      howTo: [
        { ko: "캐롬은 큐볼이 목적구를 맞힌 뒤 다른 공을 맞혀 그 공이 들어가는 샷, 콤비네이션은 목적구가 다른 공을 맞혀 그 공이 들어가는 샷입니다. 둘을 구분해서 노려야 카운트가 오릅니다.", en: "A carom is cue to object ball then on to another ball which drops; a combination is the object ball doing the hitting. They count separately." },
        { ko: "혼자 플레이로 나인볼을 골라 공을 원하는 배치로 밀어 두고, 큐볼을 일부러 포켓에 넣어(스크래치) 다음 샷의 시작 위치를 잡는 것이 가장 확실한 셋업입니다.", en: "Play Alone on nine-ball, nudge the balls into the shape you want, then scratch on purpose so the next shot starts where you like." },
        { ko: "당구대에는 큐볼을 놓을 수 있는 범위가 있습니다. 스크래치 후 배치할 때 각도가 나오는 지점까지 최대한 밀어 두면 성공률이 크게 오릅니다.", en: "After a scratch you get a placement zone for the cue ball — push it as far as the zone allows toward the angle you need." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Pool (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/pool" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가 / 바", en: "Club SEGA and bars, Kamurocho" },
      summary: {
        ko: "01·크리켓·카운트업 세 종목이 있습니다. 컴플리션은 해트트릭 등 특정 성과를 요구합니다.",
        en: "Three modes — 01, Cricket and Count-Up — and completion asks for specific feats such as hat-tricks.",
      },
      howTo: [
        { ko: "해트트릭은 한 라운드에 세 발 모두 BULL입니다. 혼자 01 게임을 고르면 라운드 수가 많아 BULL만 반복해서 노릴 수 있습니다.", en: "A hat-trick is three bulls in one round; a solo 01 game gives you the most rounds to keep trying." },
        { ko: "싱글은 그 구역 점수, 더블은 2배, 트리플은 3배이고 BULL은 50점입니다. 01에서는 트리플 20보다 BULL이 안정적입니다.", en: "Singles score the sector, doubles double it, triples treble it and the bull is 50 — in 01 the bull is steadier than treble 20." },
        { ko: "크리켓은 한 구역을 세 번 맞혀야 점유합니다. 더블은 2회, 트리플은 3회로 계산되므로 트리플 한 방이면 즉시 점유됩니다.", en: "Cricket claims a number after three hits, and doubles count as two and triples as three — so one triple claims it outright." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Darts (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/darts" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 마하볼", en: "Mach Bowl, Kamurocho" },
      summary: {
        ko: "일반 게임과 스플릿 게임이 있습니다. 스트라이크 관련 조건이 컴플리션의 핵심입니다.",
        en: "A normal game and a Split Game. The strike-related rows are the core of completion.",
      },
      howTo: [
        { ko: "스트라이크는 1번 핀 옆의 「포켓」을 세게, 약간의 스핀과 함께 치는 것이 정석입니다. 스핀은 던지는 동안 왼쪽 스틱을 아주 살짝 기울이면 걸립니다.", en: "Strikes come from the pocket beside the head pin, hit hard with a little spin — nudge the left stick very slightly during the approach." },
        { ko: "공은 방향키 위아래로 고릅니다. 가벼운 공은 제어가 쉽고 무거운 공은 힘이 세니, 스트라이크를 노릴 때는 무거운 공이 유리합니다.", en: "Up and down choose the ball: light is easier to steer, heavy carries more power — take heavy when hunting strikes." },
        { ko: "스플릿 게임은 남은 핀 조합을 한 번의 투구로 처리하는 형식입니다. 어려운 조합을 먼저 잡으려다 공을 다 쓰지 말고 쉬운 것부터 지우세요.", en: "Split Game asks you to clear a given pin combination in one throw — take the easy ones first rather than burning balls on the hard splits." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Bowling (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/bowling" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 5,
      location: { ko: "카무로초 — 마작장", en: "The mahjong parlour, Kamurocho" },
      summary: {
        ko: "컴플리션은 특정 역과 누적 점수를 요구합니다. 규칙을 모른다면 시리즈에서 가장 시간이 걸리는 종목입니다.",
        en: "Completion asks for particular hands and a points total — the longest haul in the game if you do not know the rules.",
      },
      howTo: [
        { ko: "점수를 크게 만드는 것보다 싸고 빠르게 화료하는 편이 조건을 빨리 채웁니다. 리치·탕야오 수준으로 계속 돌리세요.", en: "Cheap fast hands fill the rows faster than big ones — keep to riichi and tanyao rather than chasing value." },
        { ko: "누적 점수 조건은 고레이트 탁에서 도는 편이 압도적으로 빠릅니다. 화료 횟수와 동시에 진행되므로 처음부터 고레이트를 고르세요.", en: "The points row goes much faster at a high-rate table, and it runs alongside the win-count rows." },
        { ko: "역을 모르면 화료 자체가 안 됩니다. 최소한 리치·핑후·탕야오 세 가지만 익혀도 대부분의 조건은 소화됩니다.", en: "Without a yaku you cannot go out at all — learning just riichi, pinfu and tanyao covers most of what the list asks." },
      ],
      videos: [
        { title: { ko: "마작 컴플리션 가이드", en: "Mahjong completion guide" }, url: YT("Y9UWfbUe7cE") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Mahjong (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/mahjong" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "카무로초 — 노상 장기", en: "Street shogi, Kamurocho" },
      summary: {
        ko: "컴플리션은 「무르기를 쓰지 않고 승리」가 기준입니다. 실력보다 무르기를 참는 것이 조건입니다.",
        en: "Completion is about winning without a take-back — the condition is restraint, not skill.",
      },
      howTo: [
        { ko: "가장 약한 상대를 고르고 무르기를 한 번도 쓰지 마세요. 한 번이라도 쓰면 그 판은 조건에서 제외됩니다.", en: "Pick the weakest opponent and never take a move back — one use disqualifies the game." },
        { ko: "규칙을 모르면 정해진 국면에서 최선수를 찾는 문제 형식으로 감을 잡는 편이 실전보다 빠릅니다.", en: "If shogi is new to you, the set-position problems teach it faster than full games against a ranked opponent." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Shogi (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/shogi" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "koi-koi",
      name: { ko: "도박장 (코이코이·오이초카부·초한 등)", en: "Gambling Hall (koi-koi, oicho-kabu, cho-han and more)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "카무로초·류큐 — 도박장", en: "The gambling dens in Kamurocho and Downtown Ryukyu" },
      summary: {
        ko: "코이코이·오이초카부·초한·치효 외에 카지노 종목(블랙잭·포커·룰렛)까지 컴플리션 대상입니다.",
        en: "Koi-koi, oicho-kabu, cho-han and cee-lo, plus the casino games — blackjack, poker and roulette — all appear on the list.",
      },
      howTo: [
        { ko: "각 종목은 누적 획득량이 조건이므로 잃어도 되돌아가지 않습니다. 판돈을 크게 걸어 한 번에 끝내려다 밑천을 날리기보다 중간 판돈으로 꾸준히 도세요.", en: "Each row counts cumulative winnings, so losses do not undo progress — steady mid-size bets beat swinging for it." },
        { ko: "이카사마 아이템이 있는 종목은 그것부터 확보하세요. 도박이 아니라 작업으로 바뀝니다.", en: "Where a game has a cheat item, get it first — it turns the row from gambling into a chore." },
        { ko: "코이코이는 역을 알면 「고이코이」 선언 타이밍이 전부입니다. 작은 역이라도 확정 점수를 챙기는 편이 누적에는 유리합니다.", en: "In koi-koi the whole game is when to call — banking a small hand beats gambling it away when the row counts totals." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 3 Remastered: Koi-koi (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/koi-koi" },
        { label: "GameFAQs — Yakuza 3 Remastered: Cho-han (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/cho-han" },
        { label: "GameFAQs — Yakuza 3 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239455-yakuza-3-remastered/faqs/77723/completion" },
      ],
      achievementSlug: "achievement_40",
    },
  ],
};

