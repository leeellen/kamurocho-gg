import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza 5 Remastered. Course targets, mission lists and
// the arcade rules are taken from CyricZ's GameFAQs guide, cited on each entry.
export const yakuza5Minigames: MinigamesData = {
  appId: 1105510,
  intro: {
    ko: "Y5는 다섯 주인공이 각각 대형 사이드 스토리를 하나씩 가지고 있어 미니게임 분량이 시리즈 최대급입니다. 택시·사냥·아이돌·야구는 그 자체로 하나의 모드이고, 그 밖에 에어 하키·닭 레이스·만담·건라인처럼 이 작품에만 있는 종목도 많습니다. 각 항목의 조건과 수치는 출처의 표에서 확인한 것입니다.",
    en: "Yakuza 5 gives each of its five protagonists a full side story, which makes it the biggest minigame lineup in the series. Taxi driving, hunting, the idol content and Shinada's batting are modes in their own right, and air hockey, chicken racing, the comedy duo and Gunrhein exist only here. Conditions and numbers below come from the linked guide.",
  },
  minigames: [
    {
      slug: "taxi-driver",
      name: { ko: "택시 드라이버 (키류)", en: "Taxi Driver (Kiryu)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "나가스가이 — 나가스 택시", en: "Nagasu Taxi, Nagasugai" },
      summary: {
        ko: "키류 편의 사이드 스토리입니다. 송영 미션과 레이스 미션 두 갈래로 나뉘고, 차량 커스터마이즈로 성능을 올릴 수 있습니다.",
        en: "Kiryu's side story, split between fare missions and races, with car customisation to raise performance.",
      },
      howTo: [
        { ko: "송영 미션은 승객의 요구(빨리·조용히·흔들지 말고)를 읽고 그에 맞춰 운전하는 평가제입니다. 급가속·급브레이크·접촉이 감점이므로 속도보다 매끄러움이 중요합니다.", en: "Fare missions grade you against what the passenger asks for — speed, quiet, a smooth ride — and penalise hard acceleration, braking and contact, so smoothness beats speed." },
        { ko: "레이스 미션은 반대로 순수 속도 싸움입니다. 커스터마이즈로 엔진과 타이어를 올려 두지 않으면 후반 상대를 따라잡을 수 없습니다.", en: "Races are the opposite — pure pace — and without engine and tyre upgrades the later rivals are simply faster than you." },
        { ko: "드리프트로 코너를 빠져나오면 부스트가 쌓입니다. 직선 진입 전에 부스트를 남겨 두는 배분이 랩타임을 가장 크게 줄입니다.", en: "Drifting out of corners banks boost, and saving it for the entry to a straight is what actually cuts lap time." },
      ],
      videos: [
        { title: { ko: "전 택시 미션 공략", en: "All taxi missions" }, url: YT("uGiatoFRYHE") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Taxi Driver (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/taxi-driver" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "hunting",
      name: { ko: "사냥 (사에지마)", en: "Hunter and Killer (Saejima)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "츠키미노 — 설산", en: "The snowfield above Tsukimino" },
      summary: {
        ko: "사에지마 편의 사이드 스토리입니다. 설산에서 사냥감을 잡되 체온과 허기를 관리해야 하는 생존 요소가 붙습니다.",
        en: "Saejima's side story: hunt on the mountain while managing body temperature and hunger.",
      },
      howTo: [
        { ko: "체온이 떨어지면 조준이 흔들리고 결국 쓰러집니다. 모닥불과 온천 지점을 미리 파악하고, 이동 경로를 그 사이로 잡으세요.", en: "Falling body temperature makes the aim wander and eventually drops you — learn where the fires and hot springs are and route between them." },
        { ko: "곰과 늑대 같은 대형 사냥감은 정면에서 쏘면 반격당합니다. 나무나 바위를 사이에 두고 측면에서 급소를 노리세요.", en: "Big game like bears and wolves counters a frontal shot — put a tree or rock between you and take the vital from the side." },
        { ko: "사냥한 고기는 그 자리에서 먹어 허기를 채울 수 있습니다. 무리해서 전부 들고 돌아가려다 쓰러지는 것보다 낫습니다.", en: "You can eat what you kill on the spot to refill hunger, which beats collapsing while hauling everything back." },
      ],
      videos: [
        { title: { ko: "사에지마 설산 사냥·생존", en: "Saejima blizzard hunting & survival" }, url: YT("2bm4qzusBRA") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Hunter and Killer (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/hunter-and-killer" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "dance-battle",
      name: { ko: "댄스 배틀 (아키야마)", en: "Dance Battle (Akiyama)" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 3,
      location: { ko: "소텐보리 — 클럽", en: "The club in Sotenbori" },
      summary: {
        ko: "리듬 입력으로 상대와 겨루는 종목입니다. 하루카의 아이돌 콘텐츠와 조작 체계를 공유합니다.",
        en: "A rhythm duel that shares its input system with Haruka's idol content.",
      },
      howTo: [
        { ko: "노트가 커서에 겹치는 순간이 판정 기준입니다. 라인에 닿는 순간에 누르면 계속 이르게 판정됩니다.", en: "The judge point is the note overlapping the cursor, not reaching the lane — timing to the lane reads as early." },
        { ko: "연속 성공으로 콤보를 유지해야 상대 게이지를 밀어냅니다. 어려운 구간에서 무리하게 다 치려다 콤보를 끊는 것보다, 확실한 노트만 쳐서 콤보를 잇는 편이 유리합니다.", en: "Pushing the opponent's gauge back needs an unbroken combo, so hitting only the notes you are sure of beats going for everything and dropping it." },
        { ko: "피버 구간에서 획득 점수가 크게 오릅니다. 그 구간만이라도 확실히 잡으면 앞선 실수를 만회할 수 있습니다.", en: "Fever sections pay far more, so nailing those alone can cover mistakes made earlier." },
      ],
      videos: [
        { title: { ko: "아키야마 댄스 배틀", en: "Akiyama dance battle" }, url: YT("BsVSQpsGGrk") },
      ],
      source: { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      achievementSlug: "achievement_42",
    },
    {
      slug: "haruka-idol",
      name: { ko: "아이돌 (하루카)", en: "The Road to Fame (Haruka)" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 4,
      location: { ko: "소텐보리 — 다이너스티 에이전시", en: "Dynasty agency, Sotenbori" },
      summary: {
        ko: "하루카 편 전체가 이 콘텐츠입니다. 레슨·일 의뢰·댄스 배틀로 인기를 올려 프린세스 리그를 올라갑니다.",
        en: "Haruka's entire part is this: lessons, job requests and dance battles, climbing the Princess League.",
      },
      howTo: [
        { ko: "레슨은 스탯을 올리고 일 의뢰는 인기를 올립니다. 한쪽만 밀면 리그 상대의 요구 스탯을 못 맞추므로 번갈아 진행하세요.", en: "Lessons raise stats and job requests raise popularity — pushing only one leaves you short of what the next league opponent demands, so alternate." },
        { ko: "일 의뢰에는 요구 스탯이 표시됩니다. 미달인 채로 받으면 실패하고 인기가 깎이므로, 스탯이 닿는 의뢰만 고르세요.", en: "Each job lists the stats it needs; taking one you cannot meet fails it and costs popularity, so only accept what you can clear." },
        { ko: "댄스 배틀은 조작보다 곡 파악이 큽니다. 같은 곡을 여러 번 만나므로 어려운 구간을 외워 두면 리그 후반이 훨씬 편해집니다.", en: "Dance battles reward knowing the song more than raw execution — you meet the same tracks repeatedly, so memorising the hard sections pays off late in the league." },
      ],
      videos: [
        { title: { ko: "프린세스 리그 결승 하루카 vs T-Set", en: "Princess League Finals — Haruka vs T-Set" }, url: YT("7RAFn90Uj6k") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: The Road to Fame (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/the-road-to-fame" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_37",
    },
    {
      slug: "baseball",
      name: { ko: "야구 배팅 (시나다)", en: "The Cost of a Swing (Shinada)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 4,
      location: { ko: "킨에이초 — 배팅 센터", en: "The batting center in Kineicho" },
      summary: {
        ko: "시나다 편의 사이드 스토리로, 배팅 센터의 특수 코스를 미션 형식으로 진행합니다. 최대 20개 미션이 준비돼 있고 일부만 통과해도 클리어 처리됩니다.",
        en: "Shinada's side story runs the batting center as a mission list — up to twenty of them, and you do not need all to pass.",
      },
      howTo: [
        { ko: "미션은 홈런, 사구 피하기, 파울 치기, 고속구 치기, 취한 상태로 치기 같은 조건이 섞여 나옵니다. 특수구 「팬티 플래시 #12」(중간에 사라지는 싱커성 속구), 「슈퍼 벤더 #6」(바깥으로 크게 휘는 커브), 「토마포크 #9」(높게 왔다 홈플레이트에서 떨어짐)도 지정됩니다.", en: "Missions mix home runs, dodging beanballs, hitting fouls, hitting high-speed pitches and batting drunk, plus named pitches: Panty Flash #12 (a sinking fastball that vanishes halfway), Super Bender #6 (a big curve outside) and Tomafork #9 (high, then dropping over the plate)." },
        { ko: "가장 까다로운 것이 「파울 치기」입니다. 잘 치게 될수록 오히려 어려워지는데, 투구 서클이 아직 분홍색일 때만 휘두르면 파울이 납니다. 갈색이나 노란색으로 바뀐 뒤 휘두르면 안타 이상이 나와 실패합니다.", en: "The awkward one is \"hit a foul\" — it gets harder as you get better. Swing only while the pitch circle is still pink; once it turns brown or yellow you will connect properly and fail the mission." },
        { ko: "사와다 코스는 4부가 끝나야 열립니다. 피날레에서 시나다를 다시 조작하게 되면 킨에이초로 돌아가세요. 20구에 800점이 목표이며 점수제라 홈런이 필요합니다.", en: "The Sawada Course only opens after Part 4 ends — go back to Kineicho once you control Shinada again in the Finale. It is 800 points from twenty pitches, scored, so it wants home runs." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Batting Center (Nagoya) (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/batting-center-nagoya" },
        { label: "GameFAQs — Yakuza 5 Remastered: The Cost of a Swing (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/the-cost-of-a-swing" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "air-hockey",
      name: { ko: "에어 하키", en: "Air Hockey" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: { ko: "온천 천국 (핫 스프링 헤븐)", en: "Hot Spring Heaven" },
      summary: {
        ko: "컴플리션은 세 난이도에서 모두 상대를 이기는 것입니다. 9점 선취로 승부가 납니다. 이전 작품의 탁구를 대체한 종목입니다.",
        en: "Completion is beating your opponent on all three difficulties, first to nine points. It replaces the table tennis of earlier games.",
      },
      howTo: [
        { ko: "퍽을 칠 때마다 히트 게이지가 오르지만, 응시(스테어) 버튼을 누르고 있으면 훨씬 빨리 찹니다. 대신 그동안 경기에서 눈을 떼게 되니 여유가 있을 때만 쓰세요.", en: "Heat builds as you strike the puck, and far faster while you hold the Stare button — but that takes your eyes off the game, so only do it when you have room." },
        { ko: "슬로 버튼을 누르면 화면이 느려져 각을 잡을 수 있습니다. 대신 히트 게이지를 소모하므로 스매시를 노린다면 아껴야 합니다.", en: "The Slow button gives you time to line a shot up but spends Heat, so save it if you are building toward a smash." },
        { ko: "히트 게이지가 가득 찼을 때 퍽이 오면 스매시 버튼을 누릅니다. 득점 확률이 매우 높지만, 상대가 받아내면 되받아치는 버튼 입력 시간이 아주 짧으니 손을 준비하고 있어야 합니다.", en: "With the gauge full, hit Smash as the puck comes to you — it usually scores, but if the opponent counters you get very little time to hit the return prompt." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Air Hockey (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/air-hockey" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "cochin-cup-classic",
      name: { ko: "코친 컵 클래식 (닭 레이스)", en: "Cochin Cup Classic" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "나가스가이 — 닭 레이스장", en: "The chicken racing track, Nagasugai" },
      summary: {
        ko: "닭을 육성해 클래스를 올라가는 콘텐츠입니다. 챔피언 클래스 우승이 클리어 조건이며, 세대를 거듭해 더 좋은 닭을 만들어야 합니다.",
        en: "Raise a chicken up the classes; winning the Champion Class clears it, and that means breeding through generations.",
      },
      howTo: [
        { ko: "챌린저 클래스에서 컨텐더 클래스로 올라가는 구간이 난도가 급격히 뜁니다. 보통 3세대 닭은 되어야 넘어갈 수 있습니다.", en: "The jump from Challenger Class to Contender Class is the steep one — you generally need a third-generation bird to clear it." },
        { ko: "뉴커머 컵을 이기면 닭을 넘겨주는 사람이 둘 나타납니다. 레이스 담당 우카이 근처의 남자는 공짜로 주지만 초기 닭과 큰 차이가 없습니다.", en: "Beating the Newcomer Cup brings out two men offering chickens. The one near Ukai gives his away free, but it is barely better than your starter." },
        { ko: "진짜 좋은 닭은 카미야마 웍스 앞의 가면 쓴 남자가 가지고 있습니다. 100,000엔을 부르지만 「아니오」를 두 번 고르면 10,000엔까지 깎입니다. 다릿심이 뛰어난 대신 스태미나가 낮으니 그쪽을 집중 훈련하세요.", en: "The good bird belongs to the masked man outside Kamiyama Works. He asks ¥100,000, but say no twice and he drops to ¥10,000 — great Leg Power, poor Stamina, so train that." },
        { ko: "컨디션·성격·칭호·스킬 같은 요소가 있지만, 결국 충분히 강한 닭을 만들면 챔피언 레이스는 인내심으로 넘어갑니다. 5세대까지 간 사례도 있습니다.", en: "Conditions, personalities, titles and skills all exist, but a strong enough bird wins the Champion races with patience — five generations is a realistic figure." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Cochin Cup Classic (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/cochin-cup-classic" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "comedy-team",
      name: { ko: "만담 (츳코미 장인)", en: "Comedy Team" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "소텐보리 — 만담 극장", en: "The comedy theater, Sotenbori" },
      summary: {
        ko: "보케의 대사에 맞춰 정해진 츳코미 버튼을 누르는 종목입니다. 오디션 세 번을 통과해야 하며, 웃음 미터에서 80점 이상이 합격선입니다.",
        en: "Answer the straight-man line to each set-up with the right button. Three auditions, and the Laugh-o-matic wants 80 or better.",
      },
      howTo: [
        { ko: "대사마다 정답 버튼이 고정돼 있습니다. 「그만해!」 계열은 ○, 「그건 그렇지」 계열은 △, 「뭔 소리야」 계열은 □처럼 반응의 성격에 따라 갈리므로, 대사를 읽고 성격을 맞추면 됩니다.", en: "Each line has a fixed answer, grouped by the kind of reaction — \"enough already\" lines take circle, agreement takes triangle, bafflement takes square — so read the set-up and match the tone." },
        { ko: "첫 번째 오디션에서 리듬을 잡으면 두 번째와 세 번째는 훨씬 쉽습니다. 대사 흐름이 비슷하므로 첫 판에서 감을 잡는 데 집중하세요.", en: "Once the rhythm clicks in the first audition, the second and third are much easier — the patter follows the same shape." },
        { ko: "세 오디션을 모두 통과하면 50,000엔을 받습니다.", en: "Clearing all three auditions pays ¥50,000." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Comedy Team (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/comedy-team" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "driving-range",
      name: { ko: "골프 연습장", en: "Driving Range" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "킨에이초 — 골프 연습장", en: "The driving range, Kineicho" },
      summary: {
        ko: "표적을 맞혀 점수를 내는 종목이며 코스가 넷입니다. 코스마다 표적 배치·바람·공 개수가 다릅니다.",
        en: "Hit targets for points across four courses, each with its own target layout, wind and ball count.",
      },
      howTo: [
        { ko: "비기너 코스는 표적 6개, 100점이 위쪽 가운데, 바람 없음, 공 10개입니다. 풀파워로 똑바로 열 번 치면 끝납니다.", en: "Beginner: six targets, the 100 top-centre, no wind, ten balls — full power, dead straight, ten times." },
        { ko: "인터미디어트는 100점이 아래쪽 가운데이고 약한 바람이 있습니다. 파워를 60% 정도로 맞추고 바람에 따라 0.5도씩만 보정하세요.", en: "Intermediate puts the 100 bottom-centre with a slight wind: about 60% power and a 0.5-degree adjustment either way." },
        { ko: "어드밴스드부터는 표적이 맞으면 뒤집히고 벽을 넘겨야 다시 돌아옵니다. 뒤쪽 벽을 노릴 거라면 10점 표적을 먼저 맞혀 착지 지점을 가늠하세요.", en: "From Advanced the targets flip when struck and only flip back if you clear the wall — hit the 10s first to gauge where the ball lands before going for the back wall." },
        { ko: "프로 코스는 100점 표적 15개에 강풍, 공 15개입니다. 벽을 노리기보다 지면의 홀을 이용해 한 지점을 정확히 반복해 치는 편이 현실적입니다.", en: "The Pro course is fifteen 100-point targets in heavy wind with fifteen balls — using the ground holes to hit one repeatable spot is more practical than working the wall." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Driving Range (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/driving-range" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "taiko-no-tatsujin",
      name: { ko: "태고의 달인", en: "Taiko no Tatsujin" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 3,
      location: { ko: "어느 클럽 세가든", en: "Any Club SEGA" },
      summary: {
        ko: "컴플리션은 세 곡을 두 난이도에서 모두 통과하는 것입니다. 한 번 플레이할 때 세 곡 중 두 곡을 고를 수 있습니다.",
        en: "Completion is passing all three songs on both difficulties. Each play lets you choose two of the three.",
      },
      howTo: [
        { ko: "빨간 마커는 북면을 치고, 파란 마커는 북 가장자리를 칩니다. 좌우 버튼이 각각 왼쪽·오른쪽에 대응합니다.", en: "Red markers are the drum head, blue markers the rim, with separate buttons for the left and right side of each." },
        { ko: "긴 마커는 끝날 때까지 계속 두드리고, 큰 마커는 양쪽을 동시에 칩니다. 이 두 가지를 놓치면 진행 바가 크게 밀립니다.", en: "Long markers mean keep drumming until they end, and large markers mean hit both sides at once — missing these is what stalls the progress bar." },
        { ko: "합격은 점수가 아니라 진행 바를 지정 지점 이상으로 밀어 올리는 것입니다. 후반 실수보다 전반 안정이 중요합니다.", en: "You pass by pushing the progress bar past the marked point rather than by score, so a steady first half matters more than a clean finish." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Taiko no Tatsujin (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/taiko-no-tatsujin" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "printcircle",
      name: { ko: "프린서클 (스티커 사진)", en: "PrintCircle" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "어느 클럽 세가든 / 츠키미노 — 노스 레인즈", en: "Any Club SEGA, plus North Lanes in Tsukimino" },
      summary: {
        ko: "컴플리션은 다섯 캐릭터를 각각 네 가지 포즈로 찍는 것입니다. 배경은 조건과 무관합니다.",
        en: "Completion is a photo of each of the five characters in all four poses. Backgrounds do not matter.",
      },
      howTo: [
        { ko: "카운트다운 중 네 개 버튼 중 하나를 눌러 포즈를 잡습니다. 포즈마다 「스위트 스팟」 타이밍이 다르고, 맞히면 사진에 반짝임이 붙습니다.", en: "You strike a pose with one of the four buttons during the countdown. Each pose has its own sweet spot, and hitting it fills the photo with sparkles." },
        { ko: "한 번 방문에 세 장을 찍으므로 잘하면 1회에 3포즈를 처리할 수 있습니다. 사진을 저장하지 않아도 카운트는 인정됩니다.", en: "A visit is three photos, so a good run banks three poses at once — and you do not have to save the picture for it to count." },
        { ko: "다섯 캐릭터 각각이 필요하므로, 그 캐릭터를 조작하는 파트에서 반드시 들러야 합니다. 츠키미노에는 클럽 세가가 없어 노스 레인즈에서 찍습니다.", en: "You need all five characters, so visit during each one's part — and Tsukimino has no Club SEGA, so use North Lanes there." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: PrintCircle (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/printcircle" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "gunrhein",
      name: { ko: "건라인 (Gunrhein)", en: "Gunrhein" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "어느 클럽 세가든", en: "Any Club SEGA" },
      summary: {
        ko: "기지를 지키는 방어형 슈팅입니다. 포대를 배치해 로봇 무리의 공격을 받아내는 것이 핵심입니다.",
        en: "A base-defence shooter where you place cannons to receive the incoming robot flocks.",
      },
      howTo: [
        { ko: "포대와 레이저는 일정 시간 적을 맞히지 못하면 사라집니다. 반대로 적을 계속 맞히는 동안에는 에너지가 줄지 않으므로, 항상 무언가를 맞히도록 배치하는 것이 요령입니다.", en: "Cannons and beams expire if they go too long without hitting anything, but lose no energy while they are hitting — so place them where they always have a target." },
        { ko: "포대의 빔이 서로 교차하면 방향이 꺾이며 위력이 두 배가 됩니다. 다만 교차 배치는 방어 범위를 좁히므로, 안쪽으로 모으기보다 부채꼴로 펼치는 편이 실전에서 낫습니다.", en: "Crossing two beams deflects them into a new direction at double strength, but it narrows your coverage — a fan spread defends better than pointing everything inward." },
        { ko: "플레이어가 포대 앞을 막고 있으면 뒤에 에너지가 쌓이고, 비켜나는 순간 강한 일격이 나갑니다.", en: "Standing in front of your own cannon builds energy behind you, which releases as a stronger shot the moment you move aside." },
        { ko: "기지 중앙으로 향하는 로봇 줄은 최우선으로 처리하세요. 측면 헥사곤은 몇 개 잃어도 되지만 중앙이 뚫리면 끝입니다.", en: "Prioritise any line of robots heading for the centre of the base — losing a few hexagons on the flanks is survivable, the centre is not." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Gunrhein (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/gunrhein" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터 (카무로초)", en: "Batting Center (Kamurocho)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "카무로초 — 요시다 배팅 센터", en: "Yoshida Batting Center, Kamurocho" },
      summary: {
        ko: "킨에이초의 시나다 전용 코스와 별개로, 카무로초에는 일반 배팅 센터가 있습니다.",
        en: "Separate from Shinada's course in Kineicho, Kamurocho keeps a standard batting cage.",
      },
      howTo: [
        { ko: "커서를 코스에 맞춘 뒤, 투구와 함께 줄어드는 커서가 공 크기와 겹치는 순간에 휘두르는 것이 정타 타이밍입니다.", en: "Line the cursor up, then swing as the shrinking cursor matches the ball's size." },
        { ko: "구질과 구속은 코스별로 고정입니다. 느린 커브에서 타이밍을 당기지 않는 것이 점수를 지키는 핵심입니다.", en: "Pitch scripts are fixed per course, and not rushing the slow curves is what protects the score." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Batting Center (Kamurocho) (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/batting-center-kamurocho" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 5,
      location: { ko: "소텐보리·카무로초 — 마작장", en: "Mahjong parlours in Sotenbori and Kamurocho" },
      summary: {
        ko: "컴플리션은 특정 역과 누적 점수를 요구합니다. 규칙을 모른다면 이 작품에서도 가장 시간이 걸리는 종목입니다.",
        en: "Particular hands plus a points total — as ever, the longest haul if you do not know the rules.",
      },
      howTo: [
        { ko: "점수를 크게 만들기보다 싸고 빠르게 화료하는 편이 조건을 빨리 채웁니다. 리치·탕야오 수준으로 계속 돌리세요.", en: "Cheap fast hands fill the rows faster than big ones — stick to riichi and tanyao." },
        { ko: "누적 점수는 고레이트 탁에서 도는 편이 압도적으로 빠르고, 화료 횟수 조건과 동시에 진행됩니다.", en: "The points row goes much faster at a high-rate table and advances alongside the win-count rows." },
        { ko: "역을 모르면 화료 자체가 안 됩니다. 리치·핑후·탕야오 세 가지만 익혀도 대부분의 조건은 소화됩니다.", en: "Without a yaku you cannot go out at all — riichi, pinfu and tanyao cover most of what is asked." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Mahjong (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/mahjong" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 — 노상 장기", en: "Street shogi in Kamurocho and Sotenbori" },
      summary: {
        ko: "컴플리션은 「무르기를 쓰지 않고 승리」가 기준입니다.",
        en: "Completion is winning without a take-back.",
      },
      howTo: [
        { ko: "가장 약한 상대를 고르고 무르기를 한 번도 쓰지 마세요. 한 번이라도 쓰면 그 판은 조건에서 제외됩니다.", en: "Pick the weakest opponent and never take a move back — one use disqualifies the game." },
        { ko: "규칙을 모르면 정해진 국면에서 최선수를 찾는 문제 형식으로 감을 잡는 편이 실전보다 빠릅니다.", en: "If shogi is new, the set-position problems teach it faster than ranked games." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Shogi (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/shogi" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "koi-koi",
      name: { ko: "도박장 (코이코이·오이초카부·초한 등)", en: "Gambling Hall (koi-koi, oicho-kabu, cho-han and more)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "카무로초·소텐보리 — 도박장", en: "The gambling dens in Kamurocho and Sotenbori" },
      summary: {
        ko: "코이코이·오이초카부·초한·치효가 대상입니다. 각각 누적 획득량이 조건이라 잃어도 진행이 되돌아가지 않습니다.",
        en: "Koi-koi, oicho-kabu, cho-han and cee-lo. Each row counts cumulative winnings, so losses do not undo progress.",
      },
      howTo: [
        { ko: "이카사마 아이템이 있는 종목은 그것부터 확보하세요. 도박이 아니라 작업으로 바뀝니다.", en: "Where a game has a cheat item, get it first — it turns the row into a chore rather than a gamble." },
        { ko: "코이코이는 역을 알면 「고이코이」 선언 타이밍이 전부입니다. 작은 역이라도 확정 점수를 챙기는 편이 누적에 유리합니다.", en: "In koi-koi the whole game is when to call — banking a small hand beats gambling it away when totals are what count." },
        { ko: "판돈을 크게 걸어 한 번에 끝내려다 밑천을 날리기보다, 중간 판돈으로 꾸준히 도는 편이 결과적으로 빠릅니다.", en: "Steady mid-size bets finish faster than swinging for it and losing the bankroll." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Koi-koi (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/koi-koi" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "casino",
      name: { ko: "카지노 (블랙잭·룰렛·바카라·포커)", en: "Casino (blackjack, roulette, baccarat, poker)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "소텐보리 — 카지노", en: "The casino in Sotenbori" },
      summary: {
        ko: "네 종목 모두 누적 획득량이 조건입니다. 베팅 상한이 연승으로 오르는 블랙잭이 가장 효율적인 출발점입니다.",
        en: "All four count cumulative winnings, and blackjack — whose cap rises on a streak — is the efficient place to start.",
      },
      howTo: [
        { ko: "블랙잭은 이길수록 베팅 상한이 올라가고 한 번 지면 초기화됩니다. 이카사마를 쓸 거라면 상한을 먼저 올린 뒤에 쓰세요.", en: "Blackjack raises your cap as you win and resets it on a loss, so climb the cap before spending a cheat item." },
        { ko: "룰렛과 바카라는 회전이 빠른 대신 변동이 큽니다. 자금이 적을 때는 블랙잭으로 밑천을 만든 뒤 옮기는 편이 안전합니다.", en: "Roulette and baccarat turn over fast but swing hard — build a bankroll at blackjack first if you are short." },
        { ko: "카지노 칩은 환전소에서 경품으로 바꿉니다. 조건이 「획득량」이므로 칩을 써 버려도 진행은 남습니다.", en: "Chips convert to prizes at the counter, and since the rows count winnings rather than balance, spending them does not undo progress." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Blackjack (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/blackjack" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "pool",
      name: { ko: "당구", en: "Pool" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 — 당구장", en: "Pool halls in Kamurocho and Sotenbori" },
      summary: {
        ko: "나인볼 등 정규 게임 외에 특정 샷 종류가 조건입니다.",
        en: "Alongside the standard games, particular shot types are what the list wants.",
      },
      howTo: [
        { ko: "캐롬은 큐볼이 목적구를 맞힌 뒤 다른 공을 맞혀 그 공이 들어가는 샷, 콤비네이션은 목적구가 다른 공을 맞혀 그 공이 들어가는 샷입니다.", en: "A carom is cue to object ball then on to another ball which drops; a combination is the object ball doing the hitting." },
        { ko: "혼자 플레이로 공을 원하는 배치로 밀어 두고, 큐볼을 일부러 포켓에 넣어 다음 샷 위치를 잡는 것이 가장 확실합니다.", en: "Play Alone, nudge the balls into shape, then scratch on purpose to place the cue ball where you want it." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Pool (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/pool" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초·소텐보리 — 클럽 세가 / 바", en: "Club SEGA and bars in both cities" },
      summary: {
        ko: "01·크리켓·카운트업 세 종목이 있고, 컴플리션은 해트트릭 등 특정 성과를 요구합니다.",
        en: "Three modes — 01, Cricket and Count-Up — with the list asking for feats such as hat-tricks.",
      },
      howTo: [
        { ko: "해트트릭은 한 라운드에 세 발 모두 BULL입니다. 혼자 01 게임을 고르면 라운드가 많아 반복해서 노릴 수 있습니다.", en: "A hat-trick is three bulls in a round, and a solo 01 game gives the most rounds to keep trying." },
        { ko: "싱글은 그 구역 점수, 더블 2배, 트리플 3배이고 BULL은 50점입니다. 01에서는 트리플 20보다 BULL이 안정적입니다.", en: "Singles score the sector, doubles double, triples treble, bull is 50 — in 01 the bull is steadier than treble 20." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Darts (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/darts" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "karaoke",
      name: { ko: "카라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "각 도시 — 가라오케", en: "Karaoke bars in each city" },
      summary: {
        ko: "버튼 타이밍 리듬 게임입니다. 다섯 주인공이 각각 부를 수 있는 곡이 다릅니다.",
        en: "A button-timing rhythm game, with a different song list for each of the five protagonists.",
      },
      howTo: [
        { ko: "노트가 라인에 닿는 순간이 아니라 커서에 겹치는 순간이 판정 기준입니다. 「Hold」는 끝까지 누르고 「Rapid」는 연타입니다.", en: "Judge on the note overlapping the cursor, not reaching the lane. Hold means hold to the end; Rapid means mash." },
        { ko: "캐릭터를 바꿀 때마다 곡 목록이 달라집니다. 각 파트에서 그 캐릭터의 곡을 처리해 두지 않으면 나중에 되돌아가기 번거롭습니다.", en: "The list changes with the character, so clear each one's songs during their own part rather than backtracking later." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Karaoke (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/karaoke" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 (버추어 파이터 2·UFO 캐처)", en: "Club SEGA (Virtua Fighter 2, UFO Catcher)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "각 도시 — 클럽 세가", en: "Club SEGA in each city" },
      summary: {
        ko: "버추어 파이터 2는 아케이드 원작 그대로이고, UFO 캐처는 서로 다른 경품을 모으는 방식입니다.",
        en: "Virtua Fighter 2 is the arcade board as-is; UFO Catcher counts distinct prizes.",
      },
      howTo: [
        { ko: "버추어 파이터 2는 CPU 난도가 원작 그대로입니다. 여러 기술을 섞기보다 한 캐릭터로 확실한 콤보 하나를 익히는 편이 안정적입니다.", en: "Virtua Fighter 2 keeps its arcade difficulty — one reliable combo on one character beats trying to play it properly." },
        { ko: "UFO 캐처는 같은 인형을 반복해 뽑아도 카운트가 오르지 않습니다. 필요한 경품이 진열에 없으면 직원에게 재입고를 부탁하세요.", en: "UFO Catcher counts distinct prizes only, so duplicates do nothing — ask the attendant to restock what you still need." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Virtua Fighter 2 (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/virtua-fighter-2" },
        { label: "GameFAQs — Yakuza 5 Remastered: UFO Catcher (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/ufo-catcher" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "fishing",
      name: { ko: "낚시 (강·바다)", en: "Fishing (River & Sea)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "나가스가이 — 강 / 츠키미노·소텐보리 — 바다", en: "The river at Nagasugai and the sea spots" },
      summary: {
        ko: "강낚시와 바다낚시가 별도 콘텐츠로 나뉘어 있고, 각각 어종 수집이 조건입니다.",
        en: "River and sea fishing are separate, each with its own species list to fill.",
      },
      howTo: [
        { ko: "릴링은 물고기가 헤엄치는 방향으로 스틱을 기울인 채 감는 것이 기본입니다. 텐션 미터가 가득 차거나 완전히 비면 놓치므로 그 사이를 유지하세요.", en: "Reel with the stick pulled the way the fish is swimming, and keep the tension meter off both ends or you lose it." },
        { ko: "거리와 시간대에 따라 나오는 어종이 갈립니다. 목표 어종이 있으면 그 사거리까지 정확히 던지고, 안 나오면 시간대를 바꿔 보세요.", en: "Species depend on cast distance and time of day — cast to the range you need, and change the time if nothing bites." },
        { ko: "대물은 고급 미끼가 있어야 사실상 나타납니다. 일반 미끼로 오래 버티기보다 미끼부터 갖추는 편이 빠릅니다.", en: "The big catches effectively need better bait, so buying it beats grinding with the basic stuff." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Fishing (River) (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/fishing-river" },
        { label: "GameFAQs — Yakuza 5 Remastered: Fishing (Sea) (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/fishing-sea" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "각 도시 — 볼링장", en: "Bowling alleys in each city" },
      summary: {
        ko: "일반 게임과 스플릿 게임이 있습니다. 스트라이크를 안정적으로 내는 것이 출발점입니다.",
        en: "A normal game and a Split Game, with reliable strikes as the basis.",
      },
      howTo: [
        { ko: "스트라이크는 1번 핀 옆의 포켓을 세게, 약간의 스핀과 함께 치는 것이 정석입니다. 스핀은 던지는 동안 왼쪽 스틱을 아주 살짝 기울이면 걸립니다.", en: "Strikes come from the pocket beside the head pin, hit hard with a slight spin from a small left-stick nudge." },
        { ko: "스플릿 게임은 주어진 핀 조합을 한 번의 투구로 처리해야 합니다. 쉬운 조합부터 지워 공을 아끼세요.", en: "Split Game wants a given combination down in one throw — clear the easy ones first to save balls." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 5 Remastered: Bowling (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/bowling" },
        { label: "GameFAQs — Yakuza 5 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239457-yakuza-5-remastered/faqs/78213/completion" },
      ],
      achievementSlug: "achievement_42",
    },
  ],
};

