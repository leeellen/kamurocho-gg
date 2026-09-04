import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza 0. Completion metrics, thresholds and the
// per-minigame technique are taken from CyricZ's GameFAQs guide, cited on each
// entry. Note that the metrics are split per character where the game splits
// them (karaoke, telephone cards) and shared where it does not.
export const yakuza0Minigames: MinigamesData = {
  appId: 2988580,
  intro: {
    ko: "Y0는 시리즈에서 미니게임 밀도가 가장 높은 작품입니다. 컴플리션 항목은 캐릭터별로 갈리는 것(가라오케·텔레폰 카드)과 공유되는 것이 섞여 있으니, 캐릭터를 바꿀 때마다 컴플리트 리스트를 열어 남은 줄부터 확인하세요. 디스코 15줄과 판타지 존 10만 점이 가장 오래 걸립니다.",
    en: "Yakuza 0 has the densest minigame lineup in the series. Some metrics are per character (karaoke, telephone cards) and some are shared, so check the Completion List each time you swap. Disco's fifteen rows and Fantasy Zone's 100,000 points are the longest hauls.",
  },
  minigames: [
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 5,
      location: { ko: "카무로초·소텐보리 — 마작장", en: "Mahjong parlours in Kamurocho and Sotenbori" },
      summary: {
        ko: "컴플리션 조건은 여섯 줄입니다. 10회 화료, 만관 5회, 하네만 1회, 리치 일발 1회, 잇쓰(일기통관) 1회, 그리고 마작으로 누적 1,000만 엔.",
        en: "Six rows: go out ten times, five mangan, one haneman, one riichi ippatsu, one full straight, and ¥10 million banked at mahjong.",
      },
      howTo: [
        { ko: "리치 일발과 잇쓰가 실질적인 벽입니다. 나머지는 계속 치다 보면 자연히 차므로, 이 두 줄을 의식하고 손을 만드세요.", en: "Riichi ippatsu and the full straight are the two that do not just happen — build for them deliberately; the rest accumulate on their own." },
        { ko: "잇쓰는 한 색으로 123·456·789를 모으는 역입니다. 배패에 같은 색 숫자가 다섯 종류 이상 있을 때만 노리고, 치는 그 세 뭉치 중 하나를 완성할 때만 하세요. 다른 조합을 치면 역이 사라집니다.", en: "Full straight needs 123, 456 and 789 in one suit — only chase it when the deal already holds five or more numbers of a suit, and only chi to finish one of those three runs." },
        { ko: "누적 1,000만 엔은 고레이트 탁에서 돌리는 편이 압도적으로 빠릅니다. 화료 횟수 줄과 동시에 진행되므로 처음부터 고레이트로 가세요.", en: "The ¥10 million row goes far faster at a high-rate table, and it advances alongside the win-count rows, so start there." },
      ],
      videos: [
        { title: { ko: "마작 입문 가이드 (Yakuza 0)", en: "Mahjong for beginners (Yakuza 0)" }, url: YT("VwnEujAKE3A") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Mahjong (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/mahjong" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 — 노상 장기", en: "Street shogi in Kamurocho and Sotenbori" },
      summary: {
        ko: "컴플리션은 「무르기 없이 승리」 1회·3회·5회 세 줄입니다. 실력보다 무르기를 쓰지 않는 것이 조건입니다.",
        en: "Three rows: win without a take-back once, three times, five times. The condition is the take-back, not the skill.",
      },
      howTo: [
        { ko: "가장 약한 상대를 고르고, 절대 무르기를 쓰지 마세요. 한 번이라도 쓰면 그 판은 조건에서 제외됩니다.", en: "Pick the weakest opponent and never take a move back — one use disqualifies that game." },
        { ko: "규칙을 모른다면 장기 챌린지(정해진 국면에서 최선수 찾기)로 감을 잡는 편이 실전보다 빠릅니다.", en: "If you do not know shogi, the challenges — set positions with one correct answer — teach it faster than full games." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Shogi (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/shogi" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "billiards",
      name: { ko: "당구", en: "Pool" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 — 당구장", en: "Pool halls in Kamurocho and Sotenbori" },
      summary: {
        ko: "컴플리션은 콤비네이션 샷 3회, 캐롬 샷 3회, 그리고 당구로 누적 1,000만 엔입니다. 경기 승패 자체는 조건이 아닙니다.",
        en: "Three combination shots, three carom shots, and ¥10 million banked. Winning games is not itself a requirement.",
      },
      howTo: [
        { ko: "캐롬은 큐볼이 목적구를 맞힌 뒤 다시 다른 공을 맞혀 그 공이 들어가는 샷, 콤비네이션은 목적구가 다른 공을 맞혀 그 공이 들어가는 샷입니다.", en: "A carom is cue to object ball then on to another ball, which drops. A combination is the object ball doing the hitting." },
        { ko: "우연히 나오길 기다리지 말고 혼자 플레이로 나인볼을 골라 공을 원하는 배치로 밀어 두세요. 큐볼을 일부러 포켓에 넣으면(스크래치) 다음 샷에서 원하는 자리에 놓을 수 있습니다.", en: "Do not wait for these in a match — Play Alone on nine-ball, nudge the balls into shape, and scratch on purpose so you can place the cue ball where you want it." },
        { ko: "누적 1,000만 엔은 고액 판돈으로 승부를 걸어야 채워집니다. 샷 조건 두 줄을 먼저 끝내고, 금액은 판돈이 큰 상대로 따로 도세요.", en: "The ¥10 million needs real stakes, so clear the two shot rows first and then farm the money against a high-stakes opponent." },
      ],
      videos: [
        { title: { ko: "당구 캐롬·콤비네이션 샷 공략", en: "Billiards: carom & combination shots" }, url: YT("UOR-DbgucxQ") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Pool (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/pool" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초·소텐보리 — 클럽 세가 / 바", en: "Club SEGA and bars in both cities" },
      summary: {
        ko: "컴플리션은 해트트릭 10회와 다트로 누적 1,000만 엔 두 줄입니다.",
        en: "Two rows: ten hat-tricks, and ¥10 million banked at darts.",
      },
      howTo: [
        { ko: "해트트릭은 한 라운드에 세 발 모두 BULL입니다. 901 게임을 혼자 고르면 20라운드 동안 BULL만 노릴 수 있어 가장 빠릅니다.", en: "A hat-trick is three bulls in one round; a solo 901 game gives you twenty rounds of nothing but bull attempts." },
        { ko: "던지기는 왼쪽 스틱으로 조준한 뒤 오른쪽 스틱을 아래로 당겼다 놓습니다. 끝까지가 아니라 절반쯤까지 천천히 당겼다가 빠르게 놓는 것이 정확합니다.", en: "Aim with the left stick, then pull the right stick down and release — pull slowly to about halfway, not to the edge, and release quickly." },
        { ko: "조준이 맞기 전에 당기지 마세요. 왼쪽 스틱을 고정해도 손이 미세하게 흔들리므로 조준이 맞은 순간에 당겨야 합니다.", en: "Do not pull back before the aim is set: the hand wavers even with the stick held still." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Darts (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/darts" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 마하볼 / 소텐보리 — 볼링장", en: "Mach Bowl (Kamurocho) and the Sotenbori lanes" },
      summary: {
        ko: "컴플리션은 스트라이크 10회와 스플릿 게임으로 누적 1,000만 엔입니다.",
        en: "Two rows: ten strikes, and ¥10 million banked in split games.",
      },
      howTo: [
        { ko: "스트라이크는 1번 핀 옆의 「포켓」을 세게, 약간의 스핀과 함께 치는 것이 정석입니다. 스핀은 던지는 동안 왼쪽 스틱을 아주 살짝 기울여 겁니다.", en: "Strikes come from hitting the pocket beside the head pin hard with a little spin — nudge the left stick very slightly during the approach." },
        { ko: "공 선택은 방향키 위아래입니다. 가벼운 공은 제어가 쉽고 무거운 공은 힘이 세니, 스트라이크를 노릴 때는 무거운 쪽이 유리합니다.", en: "Up and down pick the ball: light is easier to steer, heavy hits harder — take heavy when you are hunting strikes." },
        { ko: "스플릿 게임은 열 가지 핀 조합을 각각 한 번의 투구로 처리하는 방식이고 공은 3개뿐입니다. 금액 조건은 여기서 걸므로 조합이 쉬운 것부터 고르세요.", en: "Split Game gives ten pin combinations, each to be cleared in one throw, with a stock of three balls — the money row runs through here, so take the easy combinations first." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Bowling (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/bowling" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: { ko: "카무로초 — 요시다 배팅 센터 / 소텐보리 — 배팅 센터", en: "Yoshida Batting Center (Kamurocho) and the Sotenbori cage" },
      summary: {
        ko: "컴플리션은 배팅으로 누적 500만 엔 한 줄뿐입니다. 점수 랭크가 아니라 상금 누적이 조건입니다.",
        en: "One row: ¥5 million earned batting. It is prize money, not a score rank.",
      },
      howTo: [
        { ko: "상금은 랭크에 비례하므로 홈런 코스에서 높은 랭크를 반복해 내는 것이 가장 빠릅니다. 코스별 구질과 구속은 고정이라 타이밍을 한 번 익히면 그대로 재현됩니다.", en: "Payouts scale with rank, so repeat a high rank on the home-run course — the pitch script per course is fixed, so the timing you learn repeats." },
        { ko: "타격은 커서를 코스에 맞춘 뒤, 투구와 함께 줄어드는 커서가 공 크기와 겹치는 순간에 휘두르는 것이 정타 타이밍입니다.", en: "Line the cursor up, then swing at the moment the shrinking cursor matches the ball's size — that is the sweet spot." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Batting Center (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/batting-center" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "pocket-circuit",
      name: { ko: "포켓 서킷", en: "Pocket Circuit" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "카무로초 — 포켓 서킷 스타디움", en: "Pocket Circuit Stadium, Kamurocho" },
      summary: {
        ko: "부품 수집(타이어 5·10·20, 모터 5·10·15, 기어 5·10·20, 프레임 5·10·20), 10회 출전, 그리고 7개 대회 전 우승이 조건입니다.",
        en: "Collect parts (5/10/20 tires, 5/10/15 motors, 5/10/20 gears, 5/10/20 frames), race ten times, and win all seven events.",
      },
      howTo: [
        { ko: "우승해야 하는 대회는 입문 레이스, 리틀 레이서 컵, 루키 레이스, 프로암 레이스, 엑스퍼트 레이스, 챔피언 컵, 킹 오브 스피드 컵 일곱 개입니다.", en: "The seven to win are the Introductory Race, Little Racers' Cup, Rookies' Race, Pro-Am Race, Experts' Race, Champions' Cup and King of Speed Cup." },
        { ko: "부품은 레이스를 이길 때마다 상점 재고가 갱신되고 값이 점점 비싸집니다. 필요 없는 부품을 미리 사 두면 나중에 자금이 모자랍니다.", en: "Stock refreshes as you win races and gets pricier each time — buying parts you will not use leaves you short later." },
        { ko: "코스마다 최적 조합이 다릅니다. 직선이 긴 코스는 스피드 모터와 슬림 타이어, 코너가 많은 코스는 밸런스 기어와 그립 좋은 타이어 쪽으로 바꿔 가며 맞추세요.", en: "Each track wants a different build — speed motor and slim tires for long straights, balanced gears and grippier tires where the corners pile up." },
      ],
      videos: [
        { title: { ko: "포켓 서킷 우승 빌드·팁", en: "Pocket Circuit win & build tips" }, url: YT("mp-4G6Q-7gs") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Pocket Circuit (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/pocket-circuit" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "32_the_dragon",
    },
    {
      slug: "disco",
      name: { ko: "디스코", en: "Disco" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 3,
      location: { ko: "소텐보리 — 마하라자", en: "Maharaja, Sotenbori" },
      summary: {
        ko: "다섯 곡을 각각 이지·미디엄·하드 세 난이도로 클리어해야 합니다 — 총 15줄로 Y0 미니게임 중 가장 긴 조건입니다.",
        en: "Five songs at Easy, Medium and Hard each — fifteen rows, the longest set in the game.",
      },
      howTo: [
        { ko: "점수의 핵심은 패널을 누르기 전에 무대를 최대한 많이 밟는 것입니다. 스텝 수만큼 그 패널의 점수가 올라가지만, 패널을 놓치면 밟은 스텝은 전부 무효가 됩니다.", en: "Score comes from stepping around the floor before you hit the panel — more steps means more points for that panel, but miss the panel and every step counted for nothing." },
        { ko: "패널 입력 타이밍은 테두리가 패널 크기로 줄어드는 순간입니다. 보통 마디의 네 번째 박에 오지만 곡과 난이도에 따라 달라집니다.", en: "Hit the panel as the shrinking border matches it — usually the fourth beat of the bar, though it shifts by song and difficulty." },
        { ko: "피버 게이지가 차면 발동해 방향 입력 네 번을 정확한 타이밍에 넣습니다. 일반 패널보다 점수가 크므로 차는 즉시 쓰세요.", en: "When the Fever meter fills, trigger it and hit four directional inputs on time — it pays more than normal panels, so spend it as soon as it fills." },
        { ko: "무대 가장자리에 부딪히면 아바타가 튕겨 한 박자를 잃습니다. 스텝을 욕심내다 벽을 치는 것이 가장 흔한 실패 원인입니다.", en: "Bumping the edge of the floor costs you a beat — greedy stepping into the wall is the most common way runs fall apart." },
      ],
      videos: [
        { title: { ko: "미스 이소베 디스코 배틀 (풀콤보)", en: "Miss Isobe disco battle (full combo)" }, url: YT("XuhUb6pHCQA") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Disco (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/disco" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "30_say_you",
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초·소텐보리 — 가라오케", en: "Karaoke bars in both cities" },
      summary: {
        ko: "캐릭터별로 곡이 다릅니다. 키류는 다섯 곡(Judgement -심판-, 바보 같지, x3 SHINE, 실연의 인어, 사랑의 루주), 마지마는 네 곡(24시간 신데렐라, x3 SHINE, 실연의 인어, 사랑의 루주)에서 각각 90점 이상.",
        en: "The songs are per character: Kiryu needs 90+ on five (Judgement -Shinpan-, Bakamitai, x3 Shine, Heartbreak Mermaid, Rouge of Love) and Majima on four (24-hour Cinderella, x3 Shine, Heartbreak Mermaid, Rouge of Love).",
      },
      howTo: [
        { ko: "x3 SHINE·실연의 인어·사랑의 루주는 두 캐릭터가 각각 따로 90점을 내야 합니다. 키류로 냈다고 마지마 쪽이 채워지지 않습니다.", en: "x3 Shine, Heartbreak Mermaid and Rouge of Love each need 90+ from both characters — Kiryu's score does not fill Majima's row." },
        { ko: "노트가 라인에 닿는 순간이 아니라 커서에 겹치는 순간이 판정 기준입니다. 「Hold」는 끝까지 누르고 「Rapid」는 연타입니다.", en: "Judge on the note overlapping the cursor, not reaching the lane. Hold means hold to the end of the marker; Rapid means mash." },
        { ko: "마지마의 24시간 신데렐라는 난도가 높은 편입니다. 다른 곡으로 조작에 익숙해진 뒤 마지막에 도전하세요.", en: "Majima's 24-hour Cinderella is the harder one — leave it until the inputs feel natural." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Karaoke (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/karaoke" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드 (판타지 존·아웃런·스페이스 해리어·슈퍼 행온)", en: "Club SEGA arcade (Fantasy Zone, Out Run, Space Harrier, Super Hang-On)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "카무로초·소텐보리 — 클럽 세가", en: "Club SEGA in both cities" },
      summary: {
        ko: "스페이스 해리어 500만 점, 아웃런 500만 점, 판타지 존 10만 점, 슈퍼 행온 500만 점, 그리고 UFO 캐처 경품 5종·15종이 조건입니다.",
        en: "Five million points in Space Harrier, Out Run and Super Hang-On, 100,000 in Fantasy Zone, plus five and fifteen different UFO Catcher prizes.",
      },
      howTo: [
        { ko: "판타지 존이 가장 악명 높습니다. 10만 점은 스테이지를 빠르게 깨는 것보다 적을 계속 잡아 돈을 모으고 강화 아이템을 사서 오래 살아남는 쪽이 확실합니다.", en: "Fantasy Zone is the notorious one: 100,000 comes from staying alive and buying upgrades with the money you farm, not from rushing stages." },
        { ko: "아웃런과 슈퍼 행온의 500만 점은 완주 자체보다 타임 보너스가 큽니다. 코스를 외워 감속을 줄이는 것이 점수로 직결됩니다.", en: "Out Run and Super Hang-On pay their five million mostly in time bonus, so learning the course to avoid braking is what scores." },
        { ko: "UFO 캐처는 같은 인형을 여러 번 뽑아도 카운트가 안 오릅니다. 서로 다른 경품 15종이 필요하므로, 안 나오는 인형이 있으면 카운터 직원에게 재입고를 부탁하세요.", en: "UFO Catcher counts distinct prizes only, so duplicates do nothing — ask the attendant to restock when the ones you need are not in the cabinet." },
      ],
      videos: [
        { title: { ko: "Fantasy Zone 공략 (Director's Cut)", en: "Fantasy Zone easy guide (Director's Cut)" }, url: YT("FFkdY2YqRXY") },
        { title: { ko: "Fantasy Zone 10만 점 달성 가이드", en: "Fantasy Zone 100,000 points guide" }, url: YT("3PoTCnwl65Q") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Fantasy Zone (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/fantasy-zone" },
        { label: "GameFAQs — Yakuza 0: UFO Catcher (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/ufo-catcher" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "catfight",
      name: { ko: "캣 파이트", en: "Catfight Club" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "소텐보리 — 캣 파이트 클럽", en: "The Catfight Club, Sotenbori" },
      summary: {
        ko: "컴플리션은 캣 파이트로 누적 100만·1,000만·1억 엔 세 줄입니다. 직접 싸우는 게 아니라 선수에게 돈을 거는 도박입니다.",
        en: "Three rows: ¥1 million, ¥10 million and ¥100 million won at catfights. You bet on the fighters rather than fighting.",
      },
      howTo: [
        { ko: "가위바위보식 상성이 승부를 가릅니다. 상대의 약한 기술(별 1개)이 무엇인지 보고, 그 기술을 이기는 쪽만 계속 내면 최악의 경우에도 손해가 작습니다.", en: "It resolves like rock-paper-scissors: read which of the opponent's attacks is one-star, then keep throwing what beats it — worst case the loss is small." },
        { ko: "배당이 낮은 선수를 고르세요. 배당이 낮은 데는 이유가 있습니다. 제니퍼는 타격도 세서 무난하고, 모모코도 평이 좋습니다. 둘 중 그날 티커에서 상태가 좋은 쪽을 고르면 됩니다.", en: "Take the low-odds fighters — the odds are low for a reason. Jennifer hits hard and is a safe pick, Momoko has a good reputation; check the ticker and take whichever is having the better day." },
        { ko: "무승부에서 양쪽이 흰색이면 버튼을 연타하지 마세요. 연타로 상대가 이기면 색이 올라가 더 큰 피해를 입습니다. 그냥 지는 편이 낫습니다.", en: "On a tie where both are white, do not mash — if they win the mash-off their colour upgrades and hits harder. Take the tie loss." },
        { ko: "무지개 히트나 특수 기술이 발동했을 때만 ○를 연타하세요. 특수 기술은 한 대회 내내 한 번도 안 나오는 경우가 흔하므로 기대하고 배팅하면 안 됩니다.", en: "Only mash circle on a rainbow hit or when a special actually triggers — specials can sit out an entire tournament, so never bet expecting one." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Catfights (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/catfights" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "31_cat_scratch",
    },
    {
      slug: "fishing",
      name: { ko: "낚시", en: "Fishing" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "카무로초 — 부두 / 소텐보리 — 강가", en: "Kamurocho Pier and the Sotenbori riverside" },
      summary: {
        ko: "컴플리션은 민물 5종·15종, 바다 5종·18종 수집입니다. 카무로초 부두가 바다, 소텐보리 강이 민물입니다.",
        en: "Collect 5 then 15 freshwater fish, and 5 then 18 saltwater. Kamurocho Pier is the saltwater spot, the Sotenbori river the freshwater one.",
      },
      howTo: [
        { ko: "어느 쪽에 서느냐로 나오는 어종이 갈립니다. 카무로초 부두는 좌측에서 뱅어·문절망둑·오징어·쏨뱅이·보리새우·거미게·복어·실러캔스·참치가, 우측에서 쥐치·가시복·문어·광어·붕장어·도미·백상아리·청새치·산갈치가 나옵니다.", en: "Which side you stand on decides the species. At Kamurocho Pier the left gives whitebait, goby, squid, scorpionfish, tiger prawn, spider crab, fugu, coelacanth and tuna; the right gives filefish, porcupinefish, octopus, flounder, conger eel, sea bream, great white, marlin and oarfish." },
        { ko: "소텐보리는 북쪽에서 붕어·잉어·뱀장어·아홀로틀·연어·비단잉어·유령잉어가, 남쪽에서 은어·가물치·아로와나·자라·배스·무지개송어·이토가 나옵니다. 가재는 양쪽 모두입니다.", en: "In Sotenbori the north bank gives crucian, koi carp, eel, axolotl, salmon, nishiki carp and ghost koi; the south gives sweetfish, snakehead, arowana, softshell turtle, black bass, rainbow trout and ito. Crayfish appear on either." },
        { ko: "그림자 모양으로 어종을 구분합니다. 가늘고 긴 것, 작지만 넓은 것, 덩어리, 아주 큰 것으로 나뉘므로 목표 어종의 그림자만 노리고 나머지는 흘려보내세요.", en: "Shadows tell you what is down there — long and thin, small but wide, blob, or very large — so cast only at the shape you still need." },
        { ko: "참치·산갈치·이토·유령잉어는 고급 미끼가 있어야 사실상 나옵니다. 산갈치는 위치가 나쁘면 낚이지 않기도 하므로, 나갔다 들어와 미끼를 다시 뿌리세요.", en: "Tuna, oarfish, ito and ghost koi effectively need Quality Bait, and the oarfish sometimes spawns in an uncatchable position — back out and throw fresh bait." },
      ],
      videos: [
        { title: { ko: "민물 15종 낚시 가이드", en: "All 15 freshwater fish" }, url: YT("UGt3PXkmMDA") },
        { title: { ko: "바다 18종 낚시 가이드 (카무로초 부두)", en: "All 18 saltwater fish (Kamurocho Pier)" }, url: YT("uUyIgaakqHk") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Fishing (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/fishing" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "telephone-club",
      name: { ko: "텔레폰 클럽", en: "Telephone Club" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "카무로초 — 텔레폰 클럽", en: "The telephone club, Kamurocho" },
      summary: {
        ko: "컴플리션은 하루키·아야카·리쿠 세 명과 친해지는 세 줄입니다. 세 사람은 각각 서브스토리 #31·#32·#33으로 이어집니다.",
        en: "Three rows: befriend Haruki, Ayaka and Riku — which are substories #33, #32 and #31 respectively.",
      },
      howTo: [
        { ko: "상대를 구분할 단서는 비키니 색, QTE, 목소리뿐입니다. 대사나 질문 내용은 누구인지와 아무 상관이 없습니다.", en: "The only tells are the bikini colour, the QTE and the voice — the lines they say and the questions they ask correlate with nothing." },
        { ko: "파랑은 리쿠(성공), 하양은 아야카(성공), 초록은 하루키(성공)입니다. 같은 색의 나머지 두 명은 실패 상대이며 각각 다른 서브스토리로 이어집니다.", en: "Blue is Riku, white is Ayaka, green is Haruki — the successes. The other two women of each colour are the failures, and each leads to a different substory." },
        { ko: "세 명을 다 만난 뒤에는 해당 색이 나오면 그냥 끊어 시간을 아끼세요. 극장 앞 광장에 도착한 뒤의 선택지도 상대마다 정해져 있습니다 — 리쿠는 「앞의 여자에게 말을 건다」, 아야카는 「더 가까이 가서 본다」 후 「멀리 있는 여자」, 하루키는 「멀리 있는 여자」 후 나타나는 남자와 전투입니다.", en: "Once you have all three, hang up on those colours to save time. The choices at Theater Square are fixed too: Riku is \"talk to the girl in front\", Ayaka is \"move in for a better look\" then \"talk to the further woman\", Haruki is \"talk to the farther woman\" then a fight with the man who shows up." },
        { ko: "성공하면 세 사람의 삐삐 번호를 받습니다. 다트·당구·볼링·디스코·가라오케에 불러낼 수 있지만 컴플리션과는 무관합니다.", en: "Success gets you their pager numbers, which let you call them to darts, pool, bowling, disco or karaoke — none of which affects completion." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Telephone Club (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/telephone-club" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "gambling",
      name: { ko: "도박장·카지노", en: "Gambling Hall & Casino" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 — 도박장 및 카지노", en: "The gambling dens and casinos in both cities" },
      summary: {
        ko: "여덟 줄입니다 — 포커 1,000만, 블랙잭 500만, 바카라 1,000만, 룰렛 1,000만, 초한 100만, 주사위(치효) 100만, 코이코이 100만, 오이초카부 100만 엔.",
        en: "Eight rows: ¥10 million in poker, ¥5 million in blackjack, ¥10 million in baccarat and roulette each, and ¥1 million each in cho-han, cee-lo, koi-koi and oicho-kabu.",
      },
      howTo: [
        { ko: "금액이 크므로 이카사마 아이템을 먼저 구하는 편이 훨씬 빠릅니다. 블랙잭은 딜러를 연속 버스트시키는 부적, 초한은 다음 판을 짝수로 고정하는 아이템이 대표적입니다.", en: "The numbers are large, so pick up the cheat items first — the blackjack amulets bust the dealer for several hands, and cho-han has an item that forces the next roll even." },
        { ko: "블랙잭 베팅 상한은 연승으로 올라갑니다. 이겨서 상한을 먼저 올린 뒤 이카사마를 쓰는 편이 같은 아이템으로 몇 배를 법니다.", en: "Blackjack raises your cap on a win streak, so climb the cap first and spend the cheat afterwards — the same item then earns several times more." },
        { ko: "초한은 상한이 오르려면 한 번 자리를 떴다 돌아와야 반영됩니다. 몇 판 이겼다면 나갔다 들어오세요.", en: "Cho-han only applies its raised ceiling after you leave and come back, so step out once you have a few wins." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Blackjack (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/blackjack" },
        { label: "GameFAQs — Yakuza 0: Cho-han (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/cho-han" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
  ],
};

