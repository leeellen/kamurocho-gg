import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Lost Judgment (로스트 저지먼트), the sequel to the
// Yagami detective spin-off. The map covers Kamurocho and Isezaki Ijincho
// (Yokohama), with a large block of "School Stories" minigames based at Seiryo
// High in Yokohama (dance, boxing, robotics, biker death race, skateboarding,
// VR, photography). Outside school there are drone races, the Dice & Cube VR
// sugoroku at Paradise VR, the Club SEGA arcade, the secret casino and the
// gambling hall (mahjong, shogi, koi-koi, oicho-kabu), and darts. Difficulty is
// rated for the completion / 100% grind, not casual play. Only entries confirmed
// via community location/trophy guides are listed.
export const lostJudgmentMinigames: MinigamesData = {
  appId: 2058190,
  intro: {
    ko: "로스트 저지먼트는 카무로초와 요코하마(이세자키 이진초)를 무대로, 정통 종목에 더해 세이료 고교의 「청춘 드라마(School Stories)」 미니게임이 대거 추가된 작품입니다. 댄스·복싱·로보틱스·바이크 데스레이스·스케이트보드·VR·사진 같은 동아리 활동이 핵심이고, 그 밖에 드론 레이스, Paradise VR의 보드게임 「Dice & Cube」, 클럽세가 아케이드, 비밀 카지노와 도박장(마작·쇼기·코이코이·오이초카부), 다트가 있습니다. 컴플리션을 노린다면 청춘 드라마와 댄스의 리듬·전투가 가장 큰 난관이니 먼저 위치와 패턴을 익혀두세요.",
    en: "Lost Judgment is set across Kamurocho and Yokohama (Isezaki Ijincho), and on top of the usual side activities it adds a huge block of Seiryo High 'School Stories' minigames — dance, boxing, robotics, a biker death race, skateboarding, VR and photography. Beyond school there are drone races, the 'Dice & Cube' board game at Paradise VR, the Club SEGA arcade, a secret casino and a gambling hall (mahjong, shogi, koi-koi, oicho-kabu), plus darts. For completion the School Stories rhythm/combat content is the biggest wall, so learn the locations and patterns first.",
  },
  minigames: [
    {
      slug: "school-stories",
      name: { ko: "청춘 드라마 (School Stories)", en: "School Stories" },
      category: { ko: "스토리·종합", en: "Story / Hub" },
      difficulty: 5,
      location: {
        ko: "요코하마 세이료 고교 — 잠입 수사 사이드 케이스로 동아리(댄스·복싱·로보틱스·바이크·스케이트·사진·VR·e스포츠)에 접근",
        en: "Seiryo High in Yokohama — accessed through the undercover investigation side case, which opens up the school clubs (dance, boxing, robotics, biker, skate, photography, VR, eSports)",
      },
      summary: {
        ko: "잠입 수사를 통해 세이료 고교의 여러 동아리를 부활/조사하는 거대한 메인 사이드 콘텐츠. 각 동아리가 별도의 미니게임이며, 전부 클리어해야 100% 컴플리션이 됩니다. 본작 컴플리션의 핵심이자 최대 난관입니다.",
        en: "A massive side-content hub where, while investigating undercover, you revive and probe Seiryo High's various clubs. Each club is its own minigame, and clearing them all is required for 100% completion — the centerpiece and biggest grind of the game.",
      },
      howTo: [
        { ko: "동아리는 순차적으로 잠금 해제됩니다. 댄스·로보틱스를 먼저 진행해 다른 동아리의 해금 조건(Focus 등 능력치 레벨)을 충족하세요.", en: "Clubs unlock in sequence — progress Dance and Robotics first to meet the stat requirements (e.g. Focus level) that gate the other clubs." },
        { ko: "각 동아리 미니게임은 독립적이니, 자신 있는 종목부터 끝내고 리듬/전투가 약하면 난이도를 낮춰 진행하세요.", en: "Each club minigame is independent — clear the ones you're confident in first, and drop the difficulty for the rhythm/combat clubs if those aren't your strength." },
        { ko: "동아리 진행으로 얻는 교재(Textbook)와 보상이 야가미의 스킬·능력치에도 도움이 되니 메인과 병행하는 것이 효율적입니다.", en: "Textbooks and rewards from club progress also feed Yagami's skills and stats, so it's efficient to advance them alongside the main story." },
      ],
    },
    {
      slug: "dance-club",
      name: { ko: "댄스부 (리듬)", en: "Dance Club (Rhythm)" },
      category: { ko: "음악·리듬", en: "Music / Rhythm" },
      difficulty: 5,
      location: {
        ko: "세이료 고교 지하의 댄스부실 (청춘 드라마 「댄스부」)",
        en: "The Dance Club Room in the Seiryo High basement (the 'Dance Club' School Story)",
      },
      summary: {
        ko: "흘러나오는 음악에 맞춰 화면 지시 버튼을 입력하는 리듬 미니게임. 콤보를 이어 고득점을 노립니다. 100% 트로피는 풀콤보를 요구해 본작에서 손꼽히는 고난도입니다.",
        en: "A rhythm minigame where you hit on-screen button prompts in time with the music, chaining combos for a high score. The 100% trophy demands a Full Combo, making it one of the game's hardest activities.",
      },
      howTo: [
        { ko: "노트가 판정선에 닿는 순간 정확히 입력하세요. 스토리 클리어 자체는 쉬운 난이도로도 가능하니, 풀콤보는 곡을 외운 뒤 도전하세요.", en: "Input exactly as each note reaches the judgment line — clearing the story is fine on Easy, so save Full Combo attempts until you've memorized the chart." },
        { ko: "동시 입력(여러 버튼)과 슬라이드 노트가 까다로우니, 손가락 배치를 미리 정해두고 화면 전체를 보는 시야를 유지하세요.", en: "Simultaneous (multi-button) and slide notes are the tricky parts — pre-plan your finger placement and keep your eyes on the whole lane." },
        { ko: "풀콤보 트로피는 남녀 캐릭터(예: 코토코) 모두 도전 대상이 될 수 있으니, 가장 쉬운 곡으로 먼저 풀콤보 감각을 익히세요.", en: "The Full Combo trophy can target both the boys' and girls' charts, so grind your Full Combo feel on the easiest song first." },
        { ko: "단순 클리어만 노린다면 「Freestyle A」 EX 솔로를 장착하세요. 노트를 놓쳐도 그루브(QUALITY) 게이지가 더 빨리 차서 곡을 끝까지 버티기 쉽습니다.", en: "If you only need to clear a song, equip the 'Freestyle A' EX Solo — the Groove (QUALITY) gauge fills faster even when you miss notes, making songs much easier to survive." },
        { ko: "반대로 고득점·퍼펙트를 노릴 때는 「Freestyle C」 EX 솔로를 쓰세요. Good 판정을 Perfect로 변환하고 게이지 길이도 늘려줍니다.", en: "When chasing high scores or perfects, use the 'Freestyle C' EX Solo instead — it converts Good hits to Perfect and lengthens the gauge." },
        { ko: "곡 도중 발동하는 EX 안무 구간은 판정이 느슨하고 게이지를 많이 채워주니, 이 구간에서 게이지를 확보해 두면 어려운 노트 밀집 구간을 넘기기 쉽습니다.", en: "The EX choreography sections that trigger mid-song have looser timing and grant lots of gauge — bank gauge there to ride through the dense, hard sections." },
      ],
      videos: [
        { title: { ko: "댄스 풀콤보 (Girls) - 100% 트로피 가이드", en: "Dance Full Combo (Girls) - 100% Trophy Guide" }, url: YT("Xn2heH19LMo") },
        { title: { ko: "댄스부 사이드 스토리 풀 워크스루", en: "Dance Club side story full walkthrough" }, url: YT("FLkZUrHF-KU") },
      ],
    },
    {
      slug: "boxing-gym",
      name: { ko: "복싱 (Todoroki Boxing Gym)", en: "Boxing (Todoroki Boxing Gym)" },
      category: { ko: "전투·스포츠", en: "Combat / Sports" },
      difficulty: 4,
      location: {
        ko: "선라이즈 브리지 근처의 Todoroki Boxing Gym (청춘 드라마 「복싱」). Focus Lv.2 이후 해금",
        en: "Todoroki Boxing Gym near Sunrise Bridge (the 'Boxing Gym' School Story); unlocks after Focus Lv. 2",
      },
      summary: {
        ko: "3D 격투에 가까운 복싱 스파링 미니게임. 페이스 버튼별로 다른 펀치를 쓰고, 하이/로우 가드와 풋워크로 상대의 체력을 깎습니다. 여러 복서를 순서대로 이겨야 합니다.",
        en: "A boxing sparring minigame that plays like a 3D fighter — each face button throws a different punch, and you block high/low and move to whittle down opponents' health, beating a ladder of boxers in turn.",
      },
      howTo: [
        { ko: "스태미나 게이지가 있어 펀치를 난사할 수 없습니다. 가드로 상대 공격을 흘린 뒤 빈틈에 콤비네이션을 넣는 카운터 위주로 싸우세요.", en: "A stamina gauge stops you from spamming punches — block to ride out the opponent's attacks, then counter into combinations in the openings." },
        { ko: "상대의 가드 높이를 보고 보디(로우)와 헤드(하이)를 섞어 가드를 무너뜨리세요.", en: "Watch the opponent's guard height and mix body (low) and head (high) shots to break it down." },
        { ko: "후반 상대(예: 와키타)는 패턴이 강해지니, 한 번에 다 이기려 말고 회피와 스태미나 관리를 우선하세요.", en: "Later opponents (e.g. Wakita) hit harder — don't rush; prioritize dodging and stamina management over trading blows." },
        { ko: "상대 몸이 붉게 빛나면 어퍼컷 신호입니다. 가드로 막지 말고 반드시 회피한 뒤 빈틈에 반격하세요.", en: "When the opponent's body glows red it's the tell for an uppercut — don't try to block it, dodge and then counter into the opening." },
        { ko: "기본기는 「가드 후 카운터」와 「회피 후 카운터」 두 가지입니다. 미키모토처럼 패턴이 불규칙한 상대는 가드보다 회피를 기본으로 두세요.", en: "The two core tactics are guard-then-counter and dodge-then-counter; against erratic boxers like Mikimoto, default to dodging rather than blocking." },
        { ko: "상대 콤보가 끝나는 순간이 최대 반격 타이밍입니다. 스태미나를 완전히 소진시키면 EX Piercing Straight 같은 강타로 마무리하기 좋습니다.", en: "The moment an opponent's combo ends is your best counter window — fully drain their stamina, then finish with a heavy like the EX Piercing Straight." },
      ],
      videos: [
        { title: { ko: "복싱 짐 - 3열 상대 전원 (vs 와키타)", en: "Boxing Gym - all 3rd-row opponents (vs Wakita)" }, url: YT("mq4PxEdNTYs") },
      ],
    },
    {
      slug: "robotics-club",
      name: { ko: "로보틱스부 (로봇 배틀)", en: "Robotics Club (Robot Battle)" },
      category: { ko: "전략·전투", en: "Strategy / Combat" },
      difficulty: 4,
      location: {
        ko: "세이료 고교 로보틱스부실 (청춘 드라마 「로보틱스부」)",
        en: "The Seiryo High Robotics Club room (the 'Robotics Club' School Story)",
      },
      summary: {
        ko: "직접 조립/강화한 로봇으로 다른 팀과 스크리미지(대전)를 벌이는 미니게임. 진행할수록 부품과 능력이 강해져 후반에는 거의 무패가 됩니다. 청춘 드라마 중 가장 손이 많이 가는 종목입니다.",
        en: "A minigame where you battle other teams in scrimmages using a robot you build and upgrade. As you progress, parts and abilities escalate until you're winning nearly every fight. It's the most involved of the School Stories.",
      },
      howTo: [
        { ko: "배틀 보상으로 얻은 부품으로 로봇을 꾸준히 강화하세요. 무기·장갑·이동의 균형을 맞추면 안정적으로 이깁니다.", en: "Keep upgrading your robot with parts won from battles — balancing weapons, armor and mobility gives consistent wins." },
        { ko: "상대 로봇의 약점(원거리/근접)에 맞춰 빌드를 바꾸세요. 초반엔 무리하지 말고 능력치를 먼저 키우는 것이 안전합니다.", en: "Adjust your build to each opponent's weakness (ranged vs melee); early on, grow your stats before pushing hard." },
        { ko: "조작은 실시간이니, 거리 유지와 공격 타이밍이 핵심입니다. 강해진 후반 빌드로 초반 상대를 재대전하면 부품 파밍이 쉽습니다.", en: "Control is real-time, so spacing and attack timing matter — refighting early opponents with a late-game build makes part farming easy." },
        { ko: "시간 종료 후 영역 비교로도 이기지만, 가장 빠른 승리는 적 거점 점령입니다. 블록을 깔아 최단 경로로 적 베이스까지 길을 내고 점령하세요.", en: "You can win on territory when time runs out, but the fastest win is capturing the enemy base — lay blocks to carve the shortest path to their base and seize it." },
        { ko: "주력기 Deus에 XF 섀시+최고 배터리+Balanced Motor H, 무기는 추가 탄약 모듈을 단 Eagle Sniper, 그리고 피격률을 낮추는 Stealth Chip을 추천합니다. 좋은 배터리는 코스트 상한을 올려 더 좋은 부품을 달 수 있게 합니다.", en: "For your main Deus, run an XF chassis + top battery + Balanced Motor H, an Eagle Sniper with an extra-ammo module, and a Stealth Chip to reduce how often you're targeted — a better battery raises the cost limit so you can fit stronger parts." },
        { ko: "AI 헬퍼 중 하나를 MB 섀시+Speed Motor 빌드의 블록 수집 전담으로 돌리고(이동속도 강화 칩), 본체는 저격으로 적을 제거하면 거점 싸움이 안정됩니다.", en: "Dedicate one AI helper to block-collecting on an MB chassis + Speed Motor build (move-speed chip) while you snipe enemies down with the main unit — this stabilizes the base fight." },
      ],
    },
    {
      slug: "biker-death-race",
      name: { ko: "바이크 데스레이스 (Biker Gang)", en: "Biker Death Race" },
      category: { ko: "레이싱", en: "Racing" },
      difficulty: 4,
      location: {
        ko: "청춘 드라마 「바이크(폭주족)」 조사 — 바이크 레이스 이벤트",
        en: "The 'Biker Gang' School Story investigation — its motorcycle race events",
      },
      summary: {
        ko: "폭주족 조사에서 즐기는 바이크 레이스. 총 12개의 레이스가 있으며 뒤로 갈수록 난이도가 가팔라집니다. 코너링과 부스트 관리가 승부처입니다.",
        en: "A motorcycle racing minigame within the biker gang investigation. There are 12 races total, each tougher than the last, decided by cornering and boost management.",
      },
      howTo: [
        { ko: "코너 직전에 감속하고 인코스를 파고들어 라인을 짧게 가져가세요. 무리한 풀스로틀 코너링은 충돌로 이어집니다.", en: "Brake just before corners and cut the inside line to keep your path short — full-throttle cornering leads to crashes." },
        { ko: "부스트는 직선 구간에서 몰아 쓰고, 다른 라이더와의 접촉/공방으로 순위를 빼앗으세요.", en: "Save boost for straights, and use contact/clashes with rival riders to steal positions." },
        { ko: "후반 레이스는 코스를 외우는 것이 필수입니다. 어려운 레이스는 먼저 완주로 코스를 익힌 뒤 기록을 노리세요.", en: "Later races require memorizing the course — run the hard ones once just to learn the track, then chase the result." },
        { ko: "부스트 게이지는 자동으로 천천히 차지만, 직선에서 윌리(앞바퀴 들기)를 하거나 커브에서 드리프트(좌/우 기울인 채 입력)하면 훨씬 빨리 찹니다. 윌리는 반드시 직선에서만 하세요.", en: "The boost meter fills slowly on its own, but pops up much faster if you wheelie on straights or drift through curves (lean left/right while inputting) — only ever wheelie on straightaways." },
        { ko: "초반은 부스트나 들이받기(램)로 상대 졸개들을 먼저 처리하세요. 부스트 타이밍과 각도를 잘 맞추면 두세 명을 한꺼번에 날릴 수 있습니다.", en: "Early on, clear the rival crew first with boosts or rams — time and angle a boost well and you can wipe out two or three riders at once." },
        { ko: "최종전 요령: 마지막 상대 뒤에 붙어 윌리·드리프트로 부스트를 최대치(개조 시 최대 3개)까지 채운 뒤, 결승선 수백 미터 전부터 부스트를 연타해 추월하세요. 바이크 개조는 부스트 보유량을 늘려주니 돈을 투자할 가치가 있습니다.", en: "Final-race trick: tuck in behind the last opponent, build boost to max (up to 3 stocks once upgraded) with wheelies/drifts, then spam boost in the last few hundred meters to blow past — bike upgrades raise your boost stock, so they're worth the money." },
      ],
    },
    {
      slug: "skateboarding",
      name: { ko: "스케이트보드 (TownGo)", en: "Skateboarding (TownGo)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: {
        ko: "TownGo 앱을 통한 시내 이동/스케이트 파크 (청춘 드라마 「스케이트」). 요코하마 각지의 파크 및 레이스",
        en: "City traversal and skate parks via the TownGo app (the 'Skaters' School Story) — parks and races around Yokohama",
      },
      summary: {
        ko: "스케이트보드로 시내를 이동하며 램프에서 트릭을 성공시켜 점수를 얻는 미니게임. 각 파크에 점수 목표와 TownGo 어워드용 2차 목표가 있고, 스케이트 레이스도 있습니다.",
        en: "Skate around the city, landing tricks off ramps to score. Each park has a clear goal plus a tougher secondary goal for the TownGo award, and there are skate races too.",
      },
      howTo: [
        { ko: "램프에 진입할 때 타이밍에 맞춰 점프하고, 공중에서 버튼을 연타해 트릭을 성사·착지하세요. 높은 콤보일수록 점수가 큽니다.", en: "Hit jump in time as you reach the ramp, then mash the button in the air to land the trick — higher combos score far more." },
        { ko: "TownGo 2차 목표는 짧은 시간에 트릭을 빠르고 연달아 성공해야 하므로, 램프가 몰린 구역에서 콤보를 끊지 말고 이어가세요.", en: "The TownGo secondary goal needs fast, back-to-back tricks in a short window, so chain combos through ramp-dense areas without dropping them." },
        { ko: "착지 타이밍을 놓치면 콤보가 끊깁니다. 무리한 고난도 트릭보다 확실히 착지 가능한 트릭을 반복하는 편이 점수 안정적입니다.", en: "Missing the landing timing breaks the combo — repeating tricks you can reliably land scores more steadily than overreaching." },
        { ko: "트릭 사이사이 코인을 모두 주워 콤보를 10배까지 올리면 은코인 대신 점수가 큰 금코인이 생성됩니다. 점수가 안 나올 땐 두 램프(파이프)를 왕복하며 콤보를 끊지 않는 것이 가장 빠릅니다.", en: "Grab every coin between tricks to push the combo to 10x — the game then spawns gold coins worth far more than silver ones; if you're stuck, just ride back and forth between two ramps/pipes to keep the combo alive." },
        { ko: "레일이 있는 파크에서는 지나갈 때 레일에 올라타면 배수가 더 오릅니다. 보드는 가속이 높은 것을 골라 램프까지 빠르게 속도를 붙이세요.", en: "In parks with rails, grinding them as you pass bumps the multiplier higher — pick a high-acceleration board so you reach ramp speed fast." },
        { ko: "스케이트 레이스는 초반에 앞서 나가 모든 점프대를 밟아 부스트를 유지하고, 레일 그라인드와 픽업으로 가속을 계속 채우세요.", en: "In skate races, get ahead early and hit every jump to keep boosting, topping up speed with rail grinds and pickups along the way." },
      ],
      videos: [
        { title: { ko: "TownGo 스케이트보딩 미션 클리어", en: "TownGo skateboarding school mission completed" }, url: YT("Y3QmWwxZMeQ") },
      ],
    },
    {
      slug: "drone-racing",
      name: { ko: "드론 레이스", en: "Drone Racing" },
      category: { ko: "레이싱", en: "Racing" },
      difficulty: 4,
      location: {
        ko: "이진초 북서쪽 모서리 축구장의 드론 레이스 부스 (배팅 센터 옆)",
        en: "The Drone Race booth on the soccer field in the northwest corner of Ijincho, next to the batting center",
      },
      summary: {
        ko: "조립한 드론으로 코스를 비행하는 레이스. 싱글 레이스와 여러 코스를 연달아 도는 그랑프리가 있으며, 전 리그/타임트라이얼 제패가 컴플리션 과제입니다.",
        en: "Race a drone you've built through aerial courses, in Single Races and a multi-course Grand Prix. Clearing all leagues and time trials is the completion task.",
      },
      howTo: [
        { ko: "부품으로 드론의 속도·가속·내구를 강화하세요. 상위 리그는 강화 없이 정면 돌파가 어렵습니다.", en: "Upgrade your drone's speed, acceleration and durability with parts — higher leagues are very hard without investment." },
        { ko: "링/게이트를 정확히 통과하면 부스트가 차오릅니다. 코너에서 미리 감속해 라인을 유지하고 직선에서 부스트를 터뜨리세요.", en: "Passing through rings/gates cleanly builds boost — ease off before corners to hold your line, then dump boost on the straights." },
        { ko: "타임트라이얼은 충돌이 곧 기록 손실이니, 안전한 라인을 먼저 완성한 뒤 점차 라인을 공격적으로 다듬으세요.", en: "In time trials every collision costs your record, so nail a safe line first, then sharpen it aggressively." },
        { ko: "추천 빌드: 250 코스트 한도에 맞춰 S-ONE Adamant 프레임(색상 무관)에 MTG 모터, Low-Cost Turbo, 속도 25로 최고치인 S-ONE: S3 프로펠러 조합. 코스 대부분이 내구를 거의 요구하지 않으니 속도에 몰아주세요.", en: "Recommended build: within the 250-cost limit, run an S-ONE Adamant Frame (any color) with the MTG Motor, the Low-Cost Turbo, and the S-ONE: S3 Propeller (best speed stat at 25) — almost no course needs durability, so dump everything into speed." },
        { ko: "Detective Essentials Pack(DLC)을 보유하면 코스트 부담 없이 최상위 부품을 다 달 수 있는 Sky Spider 프레임을 자동 지급받습니다.", en: "If you own the Detective Essentials Pack DLC you automatically get the Sky Spider frame, which has the capacity to fit all top-tier parts without worrying about the cost limit." },
        { ko: "그랑프리는 여러 코스를 2랩씩 도는 장기전이니, 각 레이스가 끝날 때마다 빠져나와 세이브하세요. 다음 레이스에서 실패해도 갓 통과한 레이스를 다시 뛸 필요가 없습니다.", en: "Grand Prix runs several courses at two laps each, so quit out and save after every race — if you fail a later race you won't have to re-run the ones you already cleared." },
      ],
      videos: [
        { title: { ko: "드론 레이싱 - 100% 트로피 가이드", en: "Drone Racing - 100% Trophy Guide" }, url: YT("j8Foq6Eri8c") },
        { title: { ko: "드론 레이싱 챔피언십 전 레이스·타임트라이얼 클리어", en: "Drone Racing Championships - all races & time trials" }, url: YT("4nHHGX9m1Go") },
      ],
      achievementSlug: "coyote_drone_league_all_clear",
    },
    {
      slug: "dice-and-cube",
      name: { ko: "Dice & Cube (VR 스고로쿠)", en: "Dice & Cube (VR Sugoroku)" },
      category: { ko: "보드", en: "Board" },
      difficulty: 3,
      location: {
        ko: "Paradise VR (사이드 케이스로 챕터 3 이후 해금). 화폐는 Play Pass",
        en: "Paradise VR (unlocked via a side case from Chapter 3 on); the only currency accepted is the Play Pass",
      },
      summary: {
        ko: "플레이어 자신이 말(駒)이 되는 스고로쿠(보드게임). 주사위를 굴려 칸을 이동하며 선물·배틀·드론·파쿠르·자물쇠따기 등 칸별 이벤트를 처리하고 먼저 골에 도달하면 승리. 강한 라이벌을 이기면 스킬을 영구 습득합니다.",
        en: "A sugoroku board game where you yourself are the piece. Roll a die to move, resolve each space's event (gift, battle, drone, parkour, lockpicking), and win by reaching the goal first. Beating strong rivals permanently teaches you their skills.",
      },
      howTo: [
        { ko: "이동은 방향을 고를 수 있으니, 빨강(스타 감소/배틀) 칸을 피하고 파랑(선물/스타 증가) 칸을 밟도록 경로를 계산하세요.", en: "You choose your direction, so plan your path to step on blue (gift/star-plus) spaces and avoid red (star-minus/battle) ones." },
        { ko: "노란 칸의 미니게임(드론·파쿠르·자물쇠따기)은 짧은 액션이니 침착하게 처리하면 스타와 아이템을 얻습니다.", en: "Yellow-space minigames (drone, parkour, lockpicking) are short action bits — handle them calmly for stars and items." },
        { ko: "낮은 코스에서도 회당 수십만 엔, 고난도 코스는 수백만 엔을 벌 수 있어 돈벌이로도 우수합니다. 라이벌 격파로 스킬을 모으면 이후 진행이 쉬워집니다.", en: "Even low courses net hundreds of thousands of yen per run (millions on hard courses), so it's great for money — collecting rival skills makes later runs easier." },
        { ko: "낮은 코스 1회당 대략 25만~45만 엔, 긴 고난도 코스는 운이 좋으면 한 판에 수백만 엔까지 들어옵니다. 코스는 숏→미들→롱(스탠다드/챌린지) 순으로 순차 해금됩니다.", en: "Expect roughly 250,000–450,000 yen per run on low courses, and up to millions on a lucky long/hard run — courses unlock in order: Short → Middle → Long (Standard/Challenge rules)." },
        { ko: "입장에 필요한 Play Pass는 식당에서 Lucky Bonus 아이템을 사면 얻을 수 있습니다. Lucky Gourmand·Bottomless Stomach 스킬을 미리 찍어두면 확률이 올라가고, 분실물 반환 보상으로도 받을 수 있습니다.", en: "The Play Passes you need to enter come from buying Lucky Bonus items at restaurants — take the Lucky Gourmand and Bottomless Stomach skills first to improve the odds, and returning Lost Items can also reward Passes." },
        { ko: "VR 애슬레틱 칸은 제한 시간 안에 높이 오를수록 보상이 커집니다. 골인을 먼저 못 하면 라이벌이 들어오는 순간 게임 오버이니, 라이벌과의 거리 우선으로 경로를 짜세요.", en: "On VR Athletic spaces, climbing higher within the time limit pays more; and since rivals reaching the goal first ends the run, plan your route to stay ahead of them above all." },
      ],
      videos: [
        { title: { ko: "Paradise VR (Dice & Cube) 가이드", en: "Paradise VR (Dice & Cube) guide" }, url: YT("FLkZUrHF-KU") },
      ],
      achievementSlug: "coyote_all_daiq_stage_win",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드", en: "Club SEGA Arcade" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: {
        ko: "카무로초·이진초의 클럽 세가 (및 야가미 사무소의 마스터 시스템). Sonic the Fighters, Motor Raid, Fighting Vipers, Space Harrier, Fantasy Zone, Super Hang-On, Virtua Fighter 5 등",
        en: "Club SEGA in Kamurocho and Ijincho (plus Master System games in Yagami's office) — Sonic the Fighters, Motor Raid, Fighting Vipers, Space Harrier, Fantasy Zone, Super Hang-On, Virtua Fighter 5 and more",
      },
      summary: {
        ko: "클럽 세가에서 즐기는 클래식 세가 아케이드 모음. 1980~90년대 명작 아케이드와 마스터 시스템 게임을 플레이할 수 있고, 모든 아케이드 게임을 한 번씩 플레이하는 것이 컴플리션 과제입니다.",
        en: "A collection of classic SEGA arcade titles in Club SEGA. You can play 1980s–90s arcade hits and Master System games, and playing every arcade game at least once is a completion task.",
      },
      howTo: [
        { ko: "컴플리션은 각 게임을 「플레이」하는 것이 목표이니, 고득점이 아니라 모든 캐비닛을 한 번씩 가동해 기록을 남기세요.", en: "Completion only wants you to 'play' each game, so it's about running every cabinet once for the record — not high scores." },
        { ko: "Sonic the Fighters·Fighting Vipers·Virtua Fighter 5는 격투 게임이라 CPU전 한 판이면 충분합니다.", en: "Sonic the Fighters, Fighting Vipers and Virtua Fighter 5 are fighters — a single CPU match each is enough." },
        { ko: "야가미 사무소의 마스터 시스템 게임은 서양판/일본판 전환이 가능하니, 별도 항목이 있으면 둘 다 확인하세요.", en: "The Master System games in Yagami's office can switch between Western and Japanese versions — check both if they're tracked separately." },
      ],
      achievementSlug: "coyote_all_arcade_game_played",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: {
        ko: "요코하마 — 코리아타운 사쿠라 레인 지하의 Citron Mahjong(하급), 차이나타운 북쪽 택시 승강장 근처의 Vista Mahjong(상급)",
        en: "Yokohama — Citron Mahjong (lower tier) in the basement on Sakura Lane in Koreatown, and Vista Mahjong (top tier) near the taxi stand in north Chinatown",
      },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 시리즈 최대 난관이지만, 한 가지 화료 패턴만 익히면 컴플리션은 넘길 수 있습니다.",
        en: "Standard Japanese riichi mahjong — the series' biggest wall if you don't know the rules, but learning one winning pattern is enough for completion.",
      },
      howTo: [
        { ko: "손패를 닫은 채(펑/치 금지) 유지해야 리치를 선언할 수 있습니다.", en: "Keep your hand fully closed (never call Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 「탄야오」를 노립니다. 4면자+1쌍 텐파이가 되면 리치 → 역이 자동으로 붙어 화료됩니다.", en: "Chase Tanyao (only simples 2–8); when you're one tile from 4 sets + a pair, declare Riichi and a yaku attaches automatically." },
        { ko: "컴플리션은 승리 자체가 목적이니 점수 욕심 없이 빠른 화료 위주로 진행하세요.", en: "Completion only needs wins, not big hands — prioritize fast wins over value." },
      ],
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: {
        ko: "요코하마 노숙자 캠프 근처의 Open Air Shogi (현지인들이 두는 야외 쇼기)",
        en: "Open Air Shogi near the Homeless Camp in Yokohama, where the locals play",
      },
      summary: {
        ko: "일본 장기. 잡은 말을 다시 판에 놓는 「持ち駒」 규칙이 체스와 다른 핵심입니다.",
        en: "Japanese chess; the key twist vs. Western chess is that captured pieces can be dropped back onto the board.",
      },
      howTo: [
        { ko: "왕을 지키는 「囲い(가코이)」 진형을 먼저 갖추세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king first — Mino castle is the easiest starter." },
        { ko: "잡은 말은 즉시 재투입할 수 있으니 적진 깊숙이 떨어뜨려 압박하세요.", en: "Captured pieces can be dropped anywhere — parachute them deep into enemy territory to apply pressure." },
        { ko: "컴플리션은 승리가 목적이니, 무리한 공세보다 안전한 진형으로 실수를 줄이는 편이 낫습니다.", en: "Completion just needs wins, so a safe formation that limits mistakes beats over-aggressive attacks." },
      ],
    },
    {
      slug: "gambling-hall",
      name: { ko: "도박장 (코이코이·오이초카부)", en: "Gambling Hall (Koi-Koi & Oicho-Kabu)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: {
        ko: "요코하마 환락가 남동쪽 뒷골목의 비밀 도박장 (입구 코드 7120). 코이코이·오이초카부",
        en: "The secret Gambling Hall in a back alley in the southeast of Yokohama's Red Light District (door code 7120) — koi-koi and oicho-kabu",
      },
      summary: {
        ko: "화투 기반의 코이코이와 오이초카부를 즐기는 비밀 도박장. 입장 코드(7120)를 알아야 들어갈 수 있습니다.",
        en: "A secret gambling den for hanafuda-based koi-koi and oicho-kabu. You need the door code (7120) to get in.",
      },
      howTo: [
        { ko: "코이코이: 같은 달(月)의 카드를 짝지어 「역(야쿠)」을 완성하면 점수입니다. 작은 역도 바로 확정해 안정적으로 가세요.", en: "Koi-Koi: match same-month cards to build yaku (scoring combos); bank even small yaku immediately for safety." },
        { ko: "역이 완성되면 「코이코이」로 점수를 키울지 멈출지 선택합니다. 상대가 큰 역을 노리면 무리하지 말고 확정하세요.", en: "When you complete a yaku, choose to call 'Koi-Koi' to keep building or stop — if the opponent looks close to a big yaku, lock your points in." },
        { ko: "오이초카부: 카드 합의 끝자리가 9에 가까울수록 강합니다. 카지노/도박 치트 아이템을 쓰면 컴플리션이 한결 쉬워집니다.", en: "Oicho-kabu: the closer your cards' total last digit is to 9, the stronger — gambling cheat items make the completion grind much easier." },
      ],
    },
    {
      slug: "casino",
      name: { ko: "비밀 카지노 (포커·블랙잭)", en: "Secret Casino (Poker & Blackjack)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: {
        ko: "차이나타운 서쪽 끝 화장실 안의 비밀 카지노 (「카지노」 청춘 드라마로 해금). 포커·블랙잭",
        en: "The secret Casino inside the restrooms at the west end of Chinatown (unlocked via the Casino School Story) — poker and blackjack",
      },
      summary: {
        ko: "포커와 블랙잭을 즐기는 비밀 카지노. 청춘 드라마(카지노) 진행으로 접근할 수 있습니다.",
        en: "A secret casino offering poker and blackjack, accessible by progressing the Casino School Story.",
      },
      howTo: [
        { ko: "블랙잭은 17 이상에서 멈추는 기본 전략을 지키고, 딜러의 오픈 카드가 약할 때만 무리하세요.", en: "In blackjack, follow basic strategy — stand on 17+, and only push when the dealer's up-card is weak." },
        { ko: "포커는 무리한 블러프보다 좋은 패에 베팅을 집중하세요. 칩 환전 보상이 컴플리션·아이템 교환에 쓰입니다.", en: "In poker, concentrate your bets on strong hands rather than over-bluffing; chip rewards feed completion and item exchange." },
        { ko: "도박 치트 아이템을 활용하면 큰 칩을 안정적으로 모을 수 있습니다.", en: "Gambling cheat items let you bank big chip totals reliably." },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: {
        ko: "요코하마 진나이 역 근처의 바 The Bee (다트판)",
        en: "The Bee, a bar near Jinnai Station in Yokohama, with a dartboard",
      },
      summary: {
        ko: "01·크리켓·카운트업 등의 다트를 즐기는 바 미니게임. 조준 정확도와 게이지 타이밍이 점수를 좌우합니다.",
        en: "A bar darts minigame with rules like 01, Cricket and Count Up, where aim accuracy and gauge timing decide your score.",
      },
      howTo: [
        { ko: "흔들리는 조준 레티클을 중앙(고득점)에 멈춘 뒤, 정확도 게이지를 노란 구간에서 멈추는 것이 핵심입니다.", en: "Stop the wobbling reticle on the center (high score), then stop the accuracy gauge in the yellow zone." },
        { ko: "크리켓은 15~20과 불을 각 3마크로 「점령」해야 점수가 들어오니 한 숫자에 집중해 빠르게 닫으세요.", en: "In Cricket you must 'capture' each of 15–20 and the Bull with 3 marks — focus on closing one number at a time." },
        { ko: "카운트업은 순수 점수 합산이라 연습에 좋습니다. 약한 상대로 승수를 채워 컴플리션을 진행하세요.", en: "Count Up is pure point totals and good for practice — farm easy opponents for the wins toward completion." },
      ],
    },
  ],
};
