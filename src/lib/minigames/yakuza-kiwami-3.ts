import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza Kiwami 3. Locations, prize thresholds and the
// per-minigame technique come from ゲームエイト's Kiwami 3 pages, cited on each
// entry.
export const yakuzaKiwami3Minigames: MinigamesData = {
  appId: 3937550,
  intro: {
    ko: "극3의 미니게임은 카무로초 11곳, 류큐가 8곳에 흩어져 있고, 여기에 아사가오 라이프의 여섯 종목과 게임 기어 12종이 더해집니다. 카지노·賭場·마작에는 이카사마 아이템이 있어 운 요소를 통째로 지울 수 있으니, 조건이 빡빡한 항목에 아껴 쓰세요. 각 항목의 위치와 수치는 출처 페이지에서 확인한 것입니다.",
    en: "Kiwami 3 spreads its minigames over eleven spots in Kamurocho and eight in Downtown Ryukyu, plus the six Asagao Life games and twelve Game Gear titles. The casino, gambling hall and mahjong all have cheat items that remove the luck entirely — save them for the demanding rows. Locations and numbers below come from the linked pages.",
  },
  minigames: [
    {
      slug: "golf",
      name: { ko: "골프 (헤븐즈 골프)", en: "Golf (Heaven's Golf)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "류큐가 — 헤븐즈 골프 (POPPO 류큐 거리 동점 오른편)", en: "Heaven's Golf, Downtown Ryukyu — the building right of POPPO E Ryukyu Blvd." },
      summary: {
        ko: "니어핀 챌린지와 빙고 챌린지가 있습니다. 샷은 파워와 임팩트 두 게이지를 정확한 지점에서 눌러야 똑바로 날아갑니다.",
        en: "Nearest-the-Pin and Bingo. A straight shot needs both the power and impact gauges stopped in the right place.",
      },
      howTo: [
        { ko: "치기 전에 R1을 눌러 낙하 예측 지점을 위에서 확인하세요. 중급 이후에는 장애물에 맞으면 그 자리에서 떨어지므로, 예측선이 장애물과 겹치지 않는지 먼저 봐야 합니다.", en: "Press R1 before each shot to see the predicted landing point from above — from Intermediate on, hitting an obstacle drops the ball right there, so check the line does not cross one." },
        { ko: "임팩트 게이지의 주황 구간은 공을 휘게 만듭니다. 실수 구간이 아니라 장애물을 피하는 용도이므로 중급 이후에 의도적으로 쓰세요.", en: "The orange band on the impact gauge curves the ball. It is not a miss — it is how you bend around obstacles from Intermediate on." },
        { ko: "니어핀은 1구 성공마다 +10점의 연속 성공 보너스가 붙어 최대 100점까지 추가됩니다. 컵보다 앞쪽(노란 원)에서 떨어뜨려 굴려 넣는 편이 붉은 원 안에 안정적으로 들어갑니다.", en: "Nearest-the-Pin adds a +10 streak bonus per successful ball, up to 100 extra. Landing short — in the yellow ring — and letting it roll gets you inside the red ring more reliably than aiming at the cup." },
        { ko: "빙고 챌린지는 ①한가운데 → ②모서리 → ③나머지 순으로 여는 것이 최적입니다. 가운데 칸은 4개 라인, 모서리는 3개, 나머지는 2개 라인에 걸리기 때문입니다.", en: "For Bingo, open the centre first, then the corners, then the rest — the centre square sits on four lines, a corner on three, the others on two." },
        { ko: "칸을 열수록 표적이 움직이기 시작합니다. 1차 레벨업에서는 표적이 움직이기 시작한 타이밍에 쳐서 맞추고, 2·3차 레벨업에서는 그보다 조금 더 이르게 쳐야 맞습니다.", en: "The targets start moving as you clear squares: at the first speed-up, fire as the target begins to move; at the second and third, fire slightly earlier than that." },
      ],
      videos: [
        { title: { ko: "극3 골프 플레이 (3장)", en: "Kiwami 3 golf gameplay (Chapter 3)" }, url: YT("d9LDJdjim8A") },
        { title: { ko: "극3 골프 빙고 챌린지 공략 (1400점)", en: "Kiwami 3 Bingo Challenge guide (1,400 pts)" }, url: YT("Fy0EXcZwAXo") },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 ゴルフ攻略", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/760024" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
    },
    {
      slug: "batting",
      name: { ko: "배팅 센터 (요시다 배팅 센터)", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "카무로초 — 요시다 배팅 센터", en: "Yoshida Batting Center, Kamurocho" },
      summary: {
        ko: "홈런 코스와 챌린지 코스가 있고, 벌어들인 포인트로 경품을 교환합니다. 코스별 구질은 고정입니다.",
        en: "Home Run and Challenge courses, with points traded for prizes. Each course runs a fixed pitch script.",
      },
      howTo: [
        { ko: "가장 먼저 교환할 것은 60포인트짜리 「안심 배트」입니다. 홈런이 훨씬 쉬워지므로, 이후 홈런 경쟁 모드로 나머지 경품 포인트를 버는 속도가 크게 달라집니다.", en: "Trade for the Anshin Bat at 60 points first — it makes home runs far easier, which is how you then farm the points for everything else." },
        { ko: "그 다음은 여기서만 나오는 것들입니다. 츳파리의 용 동료 「포케사 파이터」와 휴대 장비 「스트랩: 간판(킷사 알프스)」, 「대기 화면: SAKURARUNA」가 해당합니다.", en: "After that go for the exclusives: the Tuppari no Ryu ally Pokesa Fighter and the phone parts Strap: Cafe Alps Sign and Lock Screen: SAKURARUNA." },
        { ko: "츳파리의 용을 파고들 생각이라면 「특공복 뒷단추·극」도 교환하세요. 동료의 레벨 상한을 풀어 주는 아이템입니다.", en: "If you are pushing Tuppari no Ryu, also take the Tokkofuku Back Button (Kiwami) — it raises your allies' level cap." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 バッティングセンター", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/762058" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
        { label: "darage.com — 龍が如く極3 バッティングセンター", url: "https://darage.com/guide/ryukiwami3/mini01.html" },
      ],
      courses: [
        {
          title: { ko: "챌린지 코스 — 초급 1", en: "Challenge Course — Beginner 1" },
          note: { ko: "전 구질 스트레이트 계열", en: "All fastball-family pitches" },
          pitches: [
            { pos: 5, type: "Straight", speed: "135" }, { pos: 9, type: "Straight", speed: "135" }, { pos: 7, type: "Straight", speed: "135" }, { pos: 4, type: "Straight", speed: "145" }, { pos: 2, type: "Straight", speed: "135" },
            { pos: 1, type: "Straight", speed: "135" }, { pos: 8, type: "Straight", speed: "145" }, { pos: 3, type: "Straight", speed: "135" }, { pos: 8, type: "Straight", speed: "145" }, { pos: 7, type: "Straight", speed: "135" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초급 2", en: "Challenge Course — Beginner 2" },
          pitches: [
            { pos: 2, type: "Straight", speed: "145" }, { pos: 7, type: "Curve", speed: "110" }, { pos: 1, type: "Straight", speed: "145" }, { pos: 4, type: "Straight", speed: "145" }, { pos: 5, type: "Curve", speed: "110" },
            { pos: 8, type: "Straight", speed: "145" }, { pos: 9, type: "Straight", speed: "135" }, { pos: 6, type: "Curve", speed: "110" }, { pos: 3, type: "Curve", speed: "120" }, { pos: 4, type: "Straight", speed: "135" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초급 3", en: "Challenge Course — Beginner 3" },
          pitches: [
            { pos: 1, type: "Straight", speed: "145" }, { pos: 9, type: "Two-seam", speed: "120" }, { pos: 8, type: "Straight", speed: "135" }, { pos: 7, type: "Straight", speed: "145" }, { pos: 2, type: "Two-seam", speed: "130" },
            { pos: 5, type: "Straight", speed: "145" }, { pos: 7, type: "Straight", speed: "145" }, { pos: 3, type: "Straight", speed: "145" }, { pos: 4, type: "Two-seam", speed: "140" }, { pos: 6, type: "Straight", speed: "155" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 중급 1", en: "Challenge Course — Intermediate 1" },
          pitches: [
            { pos: 4, type: "One-seam", speed: "120" }, { pos: 2, type: "Straight", speed: "155" }, { pos: 7, type: "Cutball", speed: "120" }, { pos: 1, type: "Straight", speed: "145" }, { pos: 3, type: "One-seam", speed: "130" },
            { pos: 2, type: "Cutball", speed: "140" }, { pos: 9, type: "Straight", speed: "155" }, { pos: 6, type: "One-seam", speed: "140" }, { pos: 4, type: "Straight", speed: "155" }, { pos: 3, type: "Straight", speed: "145" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 중급 2", en: "Challenge Course — Intermediate 2" },
          pitches: [
            { pos: 2, type: "Straight", speed: "155" }, { pos: 6, type: "Shoot", speed: "115" }, { pos: 1, type: "Straight", speed: "145" }, { pos: 8, type: "Fork", speed: "115" }, { pos: 2, type: "Shoot", speed: "125" },
            { pos: 3, type: "Straight", speed: "145" }, { pos: 7, type: "Shoot", speed: "135" }, { pos: 9, type: "Straight", speed: "155" }, { pos: 5, type: "Fork", speed: "125" }, { pos: 7, type: "Straight", speed: "145" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 중급 3", en: "Challenge Course — Intermediate 3" },
          pitches: [
            { pos: 1, type: "Curve", speed: "120" }, { pos: 3, type: "Straight", speed: "165" }, { pos: 1, type: "Curve", speed: "130" }, { pos: 8, type: "Changeup", speed: "90" }, { pos: 3, type: "Straight", speed: "155" },
            { pos: 5, type: "Changeup", speed: "90" }, { pos: 7, type: "Changeup", speed: "100" }, { pos: 6, type: "Straight", speed: "155" }, { pos: 3, type: "Curve", speed: "120" }, { pos: 9, type: "Straight", speed: "155" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 상급 1", en: "Challenge Course — Advanced 1" },
          pitches: [
            { pos: 1, type: "Two-seam", speed: "120" }, { pos: 6, type: "Shoot", speed: "125" }, { pos: 9, type: "Straight", speed: "165" }, { pos: 4, type: "Slider", speed: "115" }, { pos: 1, type: "Shoot", speed: "125" },
            { pos: 5, type: "Two-seam", speed: "130" }, { pos: 3, type: "Straight", speed: "165" }, { pos: 6, type: "Cutball", speed: "130" }, { pos: 1, type: "Straight", speed: "165" }, { pos: 7, type: "Cutball", speed: "140" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 상급 2", en: "Challenge Course — Advanced 2" },
          pitches: [
            { pos: 9, type: "Split", speed: "125" }, { pos: 6, type: "One-seam", speed: "130" }, { pos: 8, type: "Changeup", speed: "100" }, { pos: 5, type: "Straight", speed: "165" }, { pos: 4, type: "Fork", speed: "135" },
            { pos: 5, type: "One-seam", speed: "140" }, { pos: 3, type: "Split", speed: "135" }, { pos: 1, type: "Changeup", speed: "110" }, { pos: 2, type: "One-seam", speed: "140" }, { pos: 7, type: "Straight", speed: "170" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 상급 3", en: "Challenge Course — Advanced 3" },
          pitches: [
            { pos: 3, type: "One-seam", speed: "140" }, { pos: 8, type: "Straight", speed: "165" }, { pos: 5, type: "Power Slider", speed: "145" }, { pos: 2, type: "Curve", speed: "130" }, { pos: 4, type: "Straight", speed: "165" },
            { pos: 2, type: "One-seam", speed: "140" }, { pos: 5, type: "Sinker", speed: "130" }, { pos: 8, type: "Curve", speed: "120" }, { pos: 3, type: "Straight", speed: "170" }, { pos: 9, type: "Sinker", speed: "120" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초인급 1", en: "Challenge Course — Superhuman 1" },
          note: { ko: "가장 어려운 티어, 최고 170km/h", en: "Hardest tier, up to 170 km/h" },
          pitches: [
            { pos: 4, type: "Fast Shoot", speed: "155" }, { pos: 5, type: "Straight", speed: "170" }, { pos: 2, type: "Changeup", speed: "90" }, { pos: 6, type: "Fast Slider", speed: "155" }, { pos: 5, type: "Straight", speed: "170" },
            { pos: 8, type: "Fast Hop", speed: "165" }, { pos: 1, type: "Changeup", speed: "110" }, { pos: 4, type: "Fast Shoot", speed: "155" }, { pos: 2, type: "Changeup", speed: "100" }, { pos: 2, type: "Straight", speed: "170" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초인급 2", en: "Challenge Course — Superhuman 2" },
          pitches: [
            { pos: 3, type: "Drop", speed: "120" }, { pos: 4, type: "Straight", speed: "165" }, { pos: 6, type: "Fast Slider", speed: "150" }, { pos: 3, type: "Power Slider", speed: "145" }, { pos: 2, type: "Changeup", speed: "100" },
            { pos: 7, type: "Straight", speed: "165" }, { pos: 6, type: "Fast Fork", speed: "150" }, { pos: 9, type: "Straight", speed: "165" }, { pos: 3, type: "Drop", speed: "120" }, { pos: 7, type: "Straight", speed: "170" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초인급 3", en: "Challenge Course — Superhuman 3" },
          note: { ko: "다스레이지(darage.com) 원본은 착탄 위치를 숫자로 라벨링하지 않음 — 이미지 픽셀 분석으로 좌표 추정, 단일 출처", en: "Source doesn't label positions numerically — inferred from marker-image pixel analysis, single-sourced" },
          pitches: [
            { pos: 4, type: "Straight", speed: "170" }, { pos: 6, type: "Fast Slider", speed: "160" }, { pos: 3, type: "Drop", speed: "120" }, { pos: 7, type: "Straight", speed: "170" }, { pos: 2, type: "Fast Fork", speed: "150" },
            { pos: 3, type: "Power Slider", speed: "145" }, { pos: 9, type: "Straight", speed: "170" }, { pos: 3, type: "Sinker", speed: "130" }, { pos: 2, type: "Drop", speed: "120" }, { pos: 8, type: "Straight", speed: "170" },
          ],
        },
      ],
    },
    {
      slug: "pricircle",
      name: { ko: "프리서클 (스티커 사진)", en: "PriCircle" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가 나카미치 거리점·극장 앞점 / 류큐가 — 하이사이관 앞", en: "Club SEGA Nakamichi St. and Theater Square (Kamurocho); outside Haisai-kan (Downtown Ryukyu)" },
      summary: {
        ko: "카운트다운에 맞춰 포즈를 잡는 촬영 미니게임입니다. 「극성」 보정을 1플레이에 한 번 쓸 수 있습니다.",
        en: "Strike a pose against the countdown. One \"max glam\" boost is available per play.",
      },
      howTo: [
        { ko: "3초 카운트다운 중 「2」 표시가 끝나기 직전에 버튼을 누르면 베스트 샷이 나오기 쉽습니다. 반대로 「2」가 뜬 순간에 누르면 너무 일러 실패 판정이 잦습니다.", en: "Press just as the \"2\" is about to disappear from the three-second countdown — pressing the instant it appears is too early and usually fails." },
        { ko: "「극성(極盛り)」은 프레임 전환 후 촬영 직전에 R2를 누르면 발동합니다. 1플레이에 한 번뿐이므로 승부할 프레임을 미리 정해 두세요.", en: "Max glam triggers by pressing R2 after the frame switches, just before the shot. One use per play, so decide in advance which frame it goes on." },
        { ko: "극성은 소안 효과와 보정이 최대로 들어가 평소의 험상궂은 인상과 전혀 다른 결과가 나옵니다. 본명 프레임에 쓰는 것이 정석입니다.", en: "It applies the full slimming and beautifying filter, which looks nothing like Kiryu's usual face — save it for the frame you actually care about." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 プリサークル攻略", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/758745" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
    },
    {
      slug: "asagao-life",
      name: { ko: "아사가오 라이프 (재봉·요리·숙제·곤충 채집·물고기 잡기·리버시)", en: "Asagao Life (sewing, kitchen, homework, bug catching, fishing, reversi)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "오키나와 — 아사가오", en: "Morning Glory orphanage, Okinawa" },
      summary: {
        ko: "아사가오 고아원에서 아이들과 지내며 여섯 가지 미니게임을 즐기는 콘텐츠입니다. 단련 목록(達成目録) 컴플리트를 노린다면 필수입니다.",
        en: "Life at the Morning Glory orphanage, wrapped around six minigames. It is mandatory if you want to complete the training list.",
      },
      howTo: [
        { ko: "재봉(미싱)은 천의 중심선을 벗어나지 않고 제한 시간 안에 골인하는 레이스입니다. 선을 크게 벗어나면 키류가 다치며 시간을 잃고 「아름다움」 평가도 깎입니다. 급커브에서는 과감히 감속하세요.", en: "Sewing is a race along the chalk line: stray too far and Kiryu hurts himself, losing time and beauty score. Slow down hard into sharp curves." },
        { ko: "재봉은 제한 시간 안에 골인하지 못하면 보상이 일률적으로 「낡은 천」 1장이 됩니다. 아름다움보다 남은 거리와 남은 시간을 먼저 보세요.", en: "Failing to reach the goal in time drops the reward to a single Rag regardless of how pretty the stitching was — watch distance and clock before beauty." },
        { ko: "곤충 채집 승부는 영양 드링크처럼 생긴 아이템이 승부를 가릅니다. 먹으면 일정 시간 고속 이동하며 채집할 수 있어 한 번에 대량 확보가 가능하니, 아이템이 뜨면 무조건 먼저 잡으러 가세요.", en: "In the bug-catching contest the energy-drink-looking item decides the match: it lets you sprint while netting, so grab it the moment it spawns, ahead of any bug." },
        { ko: "곤충은 □를 연타하지 말고 길게 눌러 충전한 뒤 놓는 「차지 휘두르기」로 잡습니다. 몸으로 부딪히기만 해도 획득 판정이 나므로, 이동 중에도 □를 계속 누르고 있는 것이 요령입니다. 금색 곤충은 3배 점수입니다.", en: "Do not mash square — hold to charge and release for the charged swing, which counts a catch on contact. Keep square held while moving, and prioritise the gold bugs, which are worth triple." },
        { ko: "숙제는 산수·영어·영단어·과학·사회·종합 여섯 과목의 문제입니다. 정답이 정해져 있으므로 답을 모르면 출처의 답안표를 보고 넘기세요.", en: "Homework covers maths, English, vocabulary, science, social studies and general knowledge, with fixed answers — check the answer table in the source if a question stumps you." },
        { ko: "아사가오 상점에서 산 펫의 「친밀도 올리기」도 단련 목록 항목입니다. 자금이 모이는 대로 펫을 일찍 사 두는 편이 좋습니다.", en: "Raising a pet's affection is itself a training-list row, so buy a pet from the Asagao shop as early as your funds allow." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 アサガオライフの遊び方", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/751256" },
        { label: "ゲームエイト — 龍が如く極3 さいほう(ミシン)", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/762305" },
        { label: "ゲームエイト — 龍が如く極3 むしとり勝負", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/762341" },
        { label: "ゲームエイト — 龍が如く極3 しゅくだいの答え一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/761596" },
        { label: "ゲームエイト — 龍が如く極3 鍛錬目録の一覧と達成条件", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/761436" },
      ],
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 4,
      location: { ko: "카무로초 — 마작 라라바이 (덴카이치 거리) / 류큐가 — 마작 캠프 (하츠마치 거리)", en: "Mahjong Rarabai on Tenkaichi St. (Kamurocho); Mahjong Camp on Hatsumachi St. (Downtown Ryukyu)" },
      summary: {
        ko: "운 요소가 큰 종목이지만 이카사마 아이템이 게임 밸런스를 통째로 무너뜨립니다.",
        en: "Luck-heavy, but the cheat items break it wide open.",
      },
      howTo: [
        { ko: "「보등의 패(宝燈の牌)」를 쓰면 배패가 순정구련보등 — 더블 역만 텐파이로 시작합니다. 거의 확실하게 한 명을 날리고 1위를 잡을 수 있습니다.", en: "The Hoto Tile deals you a Pure Nine Gates ready hand — a double yakuman — which reliably busts one opponent and takes first place." },
        { ko: "이카사마는 1회용입니다. 조건이 빡빡한 판(대회 1위 등)에 아껴 두고, 평범한 누적 조건은 맨손으로 도세요.", en: "Cheat items are single use, so save them for the demanding rows such as taking first in a tournament and grind the cumulative ones honestly." },
        { ko: "역을 모르면 화료 자체가 안 됩니다. 리치·핑후·탕야오 세 가지만 익혀도 대부분의 조건은 소화됩니다.", en: "Without a yaku you cannot go out at all — riichi, pinfu and tanyao cover most of what is asked." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 麻雀", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/761967" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "류큐가 — 공설시장 2층 / 카무로초 — 챔피언 거리 남동쪽", en: "2F of the public market (Downtown Ryukyu); southeast of Champion St. (Kamurocho)" },
      summary: {
        ko: "순위전·시련 답파(試練踏破)·쓰메쇼기 세 모드가 있습니다. 단련 목록 조건은 대국 횟수(1·3·5국)와 쓰메쇼기 클리어 수(2·5·7개)이며, 승패는 상관없습니다.",
        en: "Three modes — ranking matches, Trial (試練踏破) and tsume-shogi. The training rows count matches played (1/3/5) and tsume-shogi puzzles cleared (2/5/7); the result of the match doesn't matter.",
      },
      howTo: [
        { ko: "승패는 목록에 영향이 없으므로 상대는 아무나 골라 대국 수만 채우면 됩니다. 지더라도 카운트됩니다. 아래 시련 답파 其の一 수순이 대국을 가장 빨리 끝내는 방법입니다.", en: "Wins and losses don't affect the training rows, so pick any opponent and just rack up matches — a loss still counts. The Trial No. 1 line below is the quickest way to finish a match." },
        { ko: "쓰메쇼기는 전 10문제로 1~5번은 1수, 6~10번은 3수 외통입니다. 첫 클리어 보상은 1~5번 500pt, 6~9번 1,000pt, 10번 1,500pt입니다.", en: "There are ten tsume-shogi problems: mate in one for 1–5, mate in three for 6–10. First clears pay 500 pts (1–5), 1,000 pts (6–9) and 1,500 pts (10)." },
        { ko: "「무르기(待った)」를 「채용」하면 남은 횟수당 50pt(미사용 시 50×3=150pt), 「불채용」으로 두면 대국 종료 시 250pt를 받습니다. 무르기를 안 쓸 거라면 불채용이 100pt 더 많습니다.", en: "With takebacks set to \"use\", each unused one pays 50 pts (150 if you never take back); set to \"don't use\", you get a flat 250 pts — 100 more if you weren't going to take back anyway." },
        { ko: "아사가오 상점의 반상회 숍에서 「장기의 기본(将棋の基本)」(아사가오 통화 3만 엔)을 사 두면 순위전·시련 답파 중에 「지시 어시스트(指し手アシスト)」로 최선수를 볼 수 있습니다.", en: "Buying \"Shogi Basics\" (将棋の基本, 30,000 Asagao yen) from the Asagao shop's neighbourhood store lets you use Move Assist for the best move during ranking matches and Trials." },
        { ko: "주요 경품은 동료 「KAMIYAMA」 3,000pt, 휴대폰 스트랩 「장기말(왕장)」 1,800pt(공격력 상승), 「특공복 안단추·극」 3,000pt 등입니다.", en: "Key prizes: the KAMIYAMA ally for 3,000 pts, the Shogi Piece (King) phone strap for 1,800 pts (attack up), and the Tokkofuku Lining Button (Extreme) for 3,000 pts." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 将棋", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/761965" },
        { label: "ゲームエイト — 龍が如く3外伝 将棋", url: "https://game8.jp/ryu-ga-gotoku3-gaiden/762944" },
        { label: "神ゲー攻略 — 龍が如く極3 詰将棋の手順攻略", url: "https://kamigame.jp/%E9%BE%8D%E3%81%8C%E5%A6%82%E3%81%8F3/%E3%83%9F%E3%83%8B%E3%82%B2%E3%83%BC%E3%83%A0/%E5%B0%86%E6%A3%8B.html" },
        { label: "DARAGE — 龍が如く 極3 将棋", url: "https://darage.com/guide/ryukiwami3/mini08.html" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
      puzzleSets: [
        {
          title: { ko: "쓰메쇼기 정답 — 10문제", en: "Tsume-shogi answers — all 10" },
          note: {
            ko: "1~5번은 1수, 6~10번은 3수 외통입니다. 세 출처(game8·kamigame·DARAGE) 모두 기보가 아니라 말로 수를 설명하므로, 아래 수순은 그 설명을 옮긴 것입니다. 그림은 DARAGE의 좌표 도면으로, 둘 수를 화살표로 표시합니다(3수 문제의 두 번째 그림은 상대 응수 후 국면). 3외전(Dark Ties)도 game8 기준 같은 10문제입니다.",
            en: "Problems 1–5 are mate in one, 6–10 mate in three. All three sources (game8, kamigame, DARAGE) describe the moves in words rather than kifu, so the steps below paraphrase them. Diagrams are DARAGE's coordinate boards with the move drawn as an arrow (the second board on three-movers is after the opponent's reply). Per game8, Dark Ties uses the same ten problems.",
          },
          puzzles: [
            { title: { ko: "1번 (1수 외통)", en: "No. 1 (mate in 1)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t01_01.png", note: { ko: "금을 왼쪽 위로 올립니다 (金を左上へ).", en: "Move the gold diagonally up-left." } },
            { title: { ko: "2번 (1수 외통)", en: "No. 2 (mate in 1)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t02_01.png", note: { ko: "지닌 말의 은을 상대 계마 앞(적 왕의 오른쪽 아래)에 놓습니다.", en: "Drop the silver from hand in front of the opposing knight (below-right of the enemy king)." } },
            { title: { ko: "3번 (1수 외통)", en: "No. 3 (mate in 1)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t03_01.png", note: { ko: "비차를 왼쪽으로 2칸 옮기고 승격(成る)합니다.", en: "Move the rook two squares left and promote." } },
            { title: { ko: "4번 (1수 외통)", en: "No. 4 (mate in 1)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t04_01.png", note: { ko: "지닌 말의 각을 상대 은과 은 사이(적 왕의 왼쪽 위)에 놓습니다.", en: "Drop the bishop from hand between the two enemy silvers (above-left of the enemy king)." } },
            { title: { ko: "5번 (1수 외통)", en: "No. 5 (mate in 1)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t05_01.png", note: { ko: "각으로 대각선 2칸 앞의 상대 보를 잡고 승격(成る)합니다. 방향은 출처마다 다릅니다 — kamigame·DARAGE는 「오른쪽 아래」, game8 본문은 「왼쪽 아래」. 도면의 화살표를 따르세요.", en: "Take the enemy pawn two squares diagonally with the bishop and promote. Sources disagree on the direction — kamigame and DARAGE say down-right, game8's text says down-left; follow the arrow on the board." } },
            { title: { ko: "6번 (3수 외통)", en: "No. 6 (mate in 3)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t06_01.png", images: ["https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t06_02.png"], note: { ko: "① 왼쪽 계마를 오른쪽 위로 뛰되 승격하지 않음(成らない) → ② 남은 계마를 오른쪽 위로 뜁니다.", en: "① Jump the left knight up-right without promoting → ② jump the other knight up-right." } },
            { title: { ko: "7번 (3수 외통)", en: "No. 7 (mate in 3)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t07_01.png", images: ["https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t07_02.png"], note: { ko: "① 지닌 말의 계마를 상대 비차 앞에 놓기 → ② 보를 1칸 전진시키고 승격(成る).", en: "① Drop the knight from hand in front of the enemy rook → ② advance the pawn one square and promote." } },
            { title: { ko: "8번 (3수 외통)", en: "No. 8 (mate in 3)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t08_01.png", images: ["https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t08_02.png"], note: { ko: "① 지닌 말의 보를 상대 왕 앞에 놓기 → ② 금을 1칸 뒤로 물립니다.", en: "① Drop the pawn from hand in front of the enemy king → ② step the gold one square back." } },
            { title: { ko: "9번 (3수 외통)", en: "No. 9 (mate in 3)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t09_01.png", images: ["https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t09_02.png"], note: { ko: "① 왼쪽 위의 각으로 오른쪽 아래 2칸의 상대 계마를 잡고 승격(成る) → ② 지닌 말의 계마를 상대 보 앞(자기 각의 왼쪽)에 놓기.", en: "① With the top-left bishop, take the enemy knight two squares down-right and promote → ② drop the knight from hand in front of the enemy pawn (left of your bishop)." } },
            { title: { ko: "10번 (3수 외통)", en: "No. 10 (mate in 3)" }, image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t10_01.png", images: ["https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_t10_02.png"], note: { ko: "① 지닌 말의 금을 상대 왕의 왼쪽 아래에 놓기 → ② 각을 오른쪽 위로 3칸 옮기고 승격(成る).", en: "① Drop the gold from hand below-left of the enemy king → ② move the bishop three squares up-right and promote." } },
          ],
        },
        {
          title: { ko: "시련 답파(試練踏破) 其の一 — 대국 빨리 끝내기", en: "Trial (試練踏破) No. 1 — quickest finished match" },
          note: {
            ko: "DARAGE 단독 출처로, 단련 목록의 대국 횟수를 빨리 채우는 용도입니다. 시련 답파는 CPU와 두는 실전이라 상대가 수순과 다르게 둘 수 있으니, 어긋나면 무르기(待った)로 다시 시도하세요. 시련 답파의 전체 문제 수는 출처에 없습니다.",
            en: "Single source (DARAGE), meant for ticking the matches-played rows quickly. Trials are real games against the CPU, so it may deviate from this line — retry with a takeback if it does. The sources don't give how many Trials there are.",
          },
          puzzles: [
            {
              title: { ko: "其の一 (7단계)", en: "No. 1 (7 steps)" },
              image: "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_s01_01.png",
              images: ["https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_s01_02.png", "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_s01_03.png", "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_s01_04.png", "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_s01_05.png", "https://darage.com/guide/ryukiwami3/image/ryukwm3_mini08_s01_06.png"],
              note: {
                ko: "① 왼쪽에서 세 번째 보를 1칸 전진 → ② 비차 위의 보를 1칸씩 3칸 전진 → ③ 비차를 4칸 올려 상대 보를 잡기 → ④ 지닌 말의 보를 상대 각 아래에 놓기 → ⑤ 그 보로 상대 각을 잡고 승격 → ⑥ 지닌 말의 각을 자기 비차 왼쪽에 놓기 → ⑦ 비차를 2칸 올려 상대 은을 잡고 승격.",
                en: "① Advance the third pawn from the left one square → ② push the pawn above the rook up three squares, one at a time → ③ move the rook up four to take the enemy pawn → ④ drop the pawn from hand below the enemy bishop → ⑤ take the bishop with that pawn and promote → ⑥ drop the bishop from hand to the left of your rook → ⑦ move the rook up two to take the enemy silver and promote.",
              },
            },
          ],
        },
      ],
    },
    {
      slug: "bowling",
      name: { ko: "볼링 (마하볼)", en: "Bowling (Mach Bowl)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 북쪽 — 마하볼", en: "Mach Bowl, northern Kamurocho" },
      summary: {
        ko: "일반 게임과 스플릿 게임이 있습니다. 포인트로 경품을 교환합니다.",
        en: "A normal game and a Split Game, with points traded for prizes.",
      },
      howTo: [
        { ko: "스트라이크는 1번 핀 옆의 포켓을 세게, 약간의 스핀과 함께 치는 것이 정석입니다. 스핀은 던지는 동안 왼쪽 스틱을 아주 살짝 기울이면 걸립니다.", en: "Strikes come from the pocket beside the head pin, hit hard with a slight spin from a small left-stick nudge." },
        { ko: "스플릿 게임은 주어진 핀 조합을 한 번의 투구로 처리해야 합니다. 쉬운 조합부터 지워 공을 아끼세요.", en: "Split Game wants a given combination down in one throw — clear the easy ones first to save balls." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 ボウリング", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/762111" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 반탐 / 류큐가 — 바 아쿠아 스카이 (하츠마치 이나리 거리)", en: "Bantam (Kamurocho); Bar Aqua Sky on Hatsumachi Inari St. (Downtown Ryukyu)" },
      summary: {
        ko: "01·크리켓·카운트업 세 종목입니다. 포인트로 경품을 교환합니다.",
        en: "The usual three modes — 01, Cricket and Count-Up — with points traded for prizes.",
      },
      howTo: [
        { ko: "싱글은 그 구역 점수, 더블 2배, 트리플 3배이고 BULL은 50점입니다. 01에서는 트리플 20보다 BULL이 안정적입니다.", en: "Singles score the sector, doubles double, triples treble, bull is 50 — in 01 the bull is steadier than treble 20." },
        { ko: "단련 목록은 「3가지 룰로 플레이」·「누적 2승」·「누적 5승」 세 항목입니다. 01만 반복하면 룰 조건이 안 채워지니 크리켓·카운트업도 한 번씩은 돌리세요.", en: "The training rows are: play all 3 rule types, win 2 cumulative, win 5 cumulative. Grinding 01 alone won't clear the rule-variety row, so run Cricket and Count-Up at least once each too." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 ダーツ", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/759301" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
    },
    {
      slug: "pool",
      name: { ko: "당구", en: "Pool" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 키스 샷 (공원 앞 거리) / 류큐가 — 바 아쿠아 스카이 (하츠마치 이나리 거리)", en: "Kiss Shot on Park Front St. (Kamurocho); Bar Aqua Sky on Hatsumachi Inari St. (Downtown Ryukyu)" },
      summary: {
        ko: "나인볼·로테이션·에이트볼·요츠다마 같은 정규 게임 외에, 지정된 빨간 공을 한 번에 포켓시키는 「원 샷 챌린지」(EASY~EX-HARD)가 따로 있습니다.",
        en: "Alongside the standard games (Nine-Ball, Rotation, Eight-Ball, Four-Ball) there's a separate One-Shot Challenge mode (Easy through EX-Hard) where you sink a marked red ball in a single shot.",
      },
      howTo: [
        { ko: "캐롬은 큐볼이 목적구를 맞힌 뒤 다른 공을 맞혀 그 공이 들어가는 샷, 콤비네이션은 목적구가 다른 공을 맞혀 그 공이 들어가는 샷입니다.", en: "A carom is cue to object ball then on to another ball which drops; a combination is the object ball doing the hitting." },
        { ko: "혼자 플레이로 공을 원하는 배치로 밀어 두고, 큐볼을 일부러 포켓에 넣어 다음 샷 위치를 잡는 것이 가장 확실합니다.", en: "Play Alone, nudge the balls into shape, then scratch on purpose to place the cue ball where you want it." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 ビリヤード", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/758679" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
    },
    {
      slug: "karaoke",
      name: { ko: "카라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초·류큐가 — 카라오케칸", en: "Karaoke-kan branches in Kamurocho and Downtown Ryukyu" },
      summary: {
        ko: "버튼 타이밍 리듬 게임입니다. 서브스토리와도 얽혀 있습니다.",
        en: "A button-timing rhythm game that also feeds into substories.",
      },
      howTo: [
        { ko: "노트가 라인에 닿는 순간이 아니라 커서에 겹치는 순간이 판정 기준입니다. 「Hold」는 끝까지 누르고 「Rapid」는 연타입니다.", en: "Judge on the note overlapping the cursor, not reaching the lane. Hold means hold to the end; Rapid means mash." },
        { ko: "서브스토리 No.18 「악코 씨에게 맡겨라! 도쿄 편」에서는 「바보 같지(악코 씨)」를 부른 뒤 아무 곡이나 한 곡 더 불러야 진행됩니다.", en: "Substory No.18 needs Akko-san's version of \"Baka Mitai\" and then any second song before it will move on." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 カラオケ", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/758580" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
    },
    {
      slug: "casino",
      name: { ko: "카지노 (포커·블랙잭·바카라·룰렛)", en: "Casino (poker, blackjack, baccarat, roulette)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "카무로초 — 사이노카와라 / 류큐가 — 아케이드 뒷골목", en: "Sai no Kawara (Kamurocho); Arcade Backside Road (Downtown Ryukyu)" },
      summary: {
        ko: "네 종목이 있고 칩으로 경품을 교환합니다. 이카사마 아이템이 존재합니다.",
        en: "Four games, chips traded for prizes, and cheat items exist here too.",
      },
      howTo: [
        { ko: "운이 크게 작용하는 종목이므로 이카사마 아이템을 먼저 확보하세요. 1회용이지만 밸런스를 무너뜨릴 만큼 강력합니다.", en: "These swing on luck, so collect the cheat items first — single use, but strong enough to break the game." },
        { ko: "블랙잭은 연승으로 베팅 상한이 오르는 구조입니다. 이카사마를 쓸 거라면 상한을 먼저 올린 뒤에 쓰는 편이 수익이 몇 배 커집니다.", en: "Blackjack raises the bet cap on a streak, so climb the cap before spending a cheat item and the same item earns several times more." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 カジノのミニゲームと場所", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/762096" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
    },
    {
      slug: "gambling-hall",
      name: { ko: "도박장 (코이코이·오이초카부·친치로린·초한)", en: "Gambling Hall (koi-koi, oicho-kabu, cee-lo, cho-han)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "카무로초 북쪽 — 류구성 (서브스토리 「용궁을 되찾아라」 클리어 후) / 류큐가 남쪽", en: "Dragon Palace in northern Kamurocho, unlocked by the substory \"Retake the Dragon Palace\"; plus southern Downtown Ryukyu" },
      summary: {
        ko: "네 종목이 있고, 카무로초 쪽 도박장은 서브스토리 No.19를 클리어해야 열립니다.",
        en: "Four games, and the Kamurocho den only opens after substory No.19.",
      },
      howTo: [
        { ko: "카무로초의 류구성은 서브스토리 「용궁을 되찾아라」 클리어가 해금 조건입니다. 그 전에는 류큐가 쪽 도박장만 이용할 수 있습니다.", en: "Kamurocho's Dragon Palace unlocks with the substory \"Retake the Dragon Palace\" — before that, only the Ryukyu den is open." },
        { ko: "여기서 얻는 포인트로 교환하는 경품 중에는 츳파리의 용 동료와 휴대 장비처럼 다른 곳에서 못 구하는 것이 있습니다.", en: "The prize counter carries Tuppari no Ryu allies and phone parts you cannot get anywhere else." },
        { ko: "코이코이는 역을 알면 「고이코이」 선언 타이밍이 전부입니다. 작은 역이라도 확정 점수를 챙기는 편이 누적에 유리합니다.", en: "In koi-koi the whole game is when to call — banking a small hand beats gambling it away when totals are what count." },
      ],
      source: [
        { label: "ゲームエイト — 龍が如く極3 賭場のミニゲームと交換おすすめ景品", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/762318" },
        { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
      ],
    },
    {
      slug: "club-sega",
      name: { ko: "게임 센터 (아케이드 명작 + UFO 캐처)", en: "Arcade (classic cabinets + UFO Catcher)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 클럽 세가 나카미치 거리점(일부 기종) · 극장 앞점(전 기종)", en: "Club SEGA Nakamichi St. (partial line-up) and Theater Square (full line-up), Kamurocho" },
      summary: {
        ko: "모터 레이드, 구급차, 슬래시 아웃, 버추어 파이터 2/2.1, 파이팅 바이퍼즈를 통째로 플레이할 수 있고 UFO 캐처도 여기 있습니다.",
        en: "Motor Raid, Emergency Call Ambulance, Slashout, Virtua Fighter 2/2.1 and Fighting Vipers are all playable in full, and the UFO Catcher is here too.",
      },
      howTo: [
        { ko: "기판은 원작 난도 그대로입니다. 여러 기술을 익히려 하기보다 한 캐릭터·한 패턴으로 안정적으로 넘기는 편이 빠릅니다.", en: "The boards keep their arcade difficulty — one character and one reliable pattern beats trying to play them properly." },
        { ko: "UFO 캐처는 서로 다른 경품을 모으는 방식이라 같은 인형을 반복해 뽑아도 진행되지 않습니다. 필요한 경품이 없으면 다른 지점을 확인하세요.", en: "The UFO Catcher counts distinct prizes, so duplicates do nothing — check the other branch if what you need is not stocked." },
      ],
      videos: [
        { title: { ko: "극3 & Dark Ties 아케이드 미니게임", en: "Kiwami 3 & Dark Ties arcade minigames" }, url: YT("dSpiCDgvtV4") },
      ],
      source: { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
    },
    {
      slug: "game-gear",
      name: { ko: "게임 기어 (휴대용 12종)", en: "Game Gear (twelve handheld titles)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "아사가오 및 소지품 — 게임 기어 본체", en: "The Game Gear you carry, playable at Morning Glory and elsewhere" },
      summary: {
        ko: "입수한 게임 기어 소프트를 언제든 플레이할 수 있습니다. 콜럼스, 팩맨, 소닉&테일즈, G-LOC AIR BATTLE, 우디 팝, GG 시노비, 매피, 갤러가 91, 뿌요뿌요, 베어 너클, 판타지 존 Gear, 소닉 드리프트 12종입니다.",
        en: "Any Game Gear cartridge you have found can be played anywhere: Columns, Pac-Man, Sonic & Tails, G-LOC Air Battle, Woody Pop, The GG Shinobi, Mappy, Galaga '91, Puyo Puyo, Streets of Rage, Fantasy Zone Gear and Sonic Drift.",
      },
      howTo: [
        { ko: "소프트는 거리에서 줍거나 상점·경품으로 얻습니다. 단련 목록에 소프트 수집 항목이 있으므로, 상점 재고와 경품 목록을 한 번씩 훑어보세요.", en: "Cartridges are found around town or bought and traded for — the training list tracks how many you own, so sweep the shops and prize counters." },
        { ko: "휴대용이라 로딩 없이 어디서든 켤 수 있습니다. 이동 중 대기 시간에 돌리면 단련 목록의 플레이 횟수 항목을 자연스럽게 채울 수 있습니다.", en: "It plays anywhere with no load, so running it during downtime quietly fills the play-count rows." },
      ],
      source: { label: "ゲームエイト — 龍が如く極3 ミニゲーム(プレイスポット)一覧", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/750600" },
    },
  ],
};

