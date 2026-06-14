import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza 3 Remastered (appId 1088710). Difficulty
// is rated for the completion-list / "Minigame Master" grind, not casual play.
// Cross-referenced against the CyricZ GameFAQs guide, community 100% guides, and
// verified YouTube walkthroughs.
export const yakuza3Minigames: MinigamesData = {
  appId: 1088710,
  intro: {
    ko: "Y3는 카무로초와 류큐(오키나와) 두 지역에 미니게임이 흩어져 있습니다. 「미니게임 마스터」와 컴플리션을 노린다면 골프(난요 컨트리클럽)·낚시(아침해변)·당구처럼 까다로운 종목까지 모두 정해진 조건을 채워야 합니다. 악명 높은 종목은 아래 영상을 함께 보면 훨씬 수월합니다.",
    en: "Yakuza 3 spreads its minigames across Kamurocho and the Ryukyu (Okinawa) district. For the 'Minigame Master' goal and the completion list you'll need to clear set targets in even the tricky entries — golf (Nanyo Country Club), fishing (Morning Glory Beach), and pool. The infamous ones go much smoother with the attached videos.",
  },
  minigames: [
    {
      slug: "golf",
      name: { ko: "골프 (난요 컨트리클럽)", en: "Golf (Nanyo Country Club)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 4,
      location: { ko: "류큐 모노레일역에서 가는 난요 컨트리클럽 (주간)", en: "Nanyo Country Club, via the Ryukyu monorail (daytime)" },
      summary: {
        ko: "컴페티션 모드에서 -5 스코어가 컴플리션 조건. 바람과 라이를 읽어 그린을 공략해야 합니다.",
        en: "Completion needs a -5 score in Competition Mode — you must read wind and lie to attack the greens.",
      },
      howTo: [
        { ko: "샷 전에 바람 방향·세기를 확인하고, 역풍이면 한두 클럽 길게, 순풍이면 짧게 잡으세요.", en: "Check wind direction and strength before each shot; club up into a headwind, club down with a tailwind." },
        { ko: "파워 게이지를 정확히 맞춘 뒤 임팩트 타이밍에서 한 번 더 멈춰 슬라이스/훅을 방지하세요.", en: "Set power precisely, then stop again at the impact marker to avoid a slice or hook." },
        { ko: "퍼팅은 그린 경사(그리드)를 보고 컵 위쪽을 살짝 노려 흘려 넣습니다.", en: "On the green, read the grid slope and aim slightly above the cup to let it curl in." },
        { ko: "우상단 바람 표시는 맵 기준이 아니라 그 순간 키류가 바라보는 방향 기준입니다. 어드레스를 틀면 바람 방향도 바뀌니 셋업 후 다시 확인하세요.", en: "The wind indicator in the top-right is relative to the direction Kiryu is currently facing, not the map — re-check it after you re-aim, since rotating your stance rotates the wind." },
        { ko: "그린을 오버하면 파 세이브가 거의 불가능합니다. 퍼터는 약하고 다른 클럽은 하프 파워로도 과하게 나가기 때문이니, 자신 없으면 한 클럽 짧게 잡아 무조건 그린 앞쪽에 떨어뜨리세요.", en: "Overshooting the green almost guarantees a bogey — the putter is underpowered while every other club overshoots even at half power, so when unsure club down and leave it short of the pin rather than long." },
      ],
      videos: [
        { title: { ko: "골프 컴플리션 (-5) 가이드", en: "Golf completion (-5) guide" }, url: YT("yJkxmEAlV2k") },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "fishing",
      name: { ko: "낚시 (아침해변)", en: "Fishing (Morning Glory Beach)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "류큐 아침해변 (모닝글로리)", en: "Morning Glory Beach, Ryukyu" },
      summary: {
        ko: "물고기·쓰레기 등 모든 종류를 한 번씩 낚는 것이 컴플리션 조건. 대형 참치(마구로)가 가장 까다롭습니다.",
        en: "Completion wants every catch type at least once — including trash. The giant tuna (maguro) is the toughest.",
      },
      howTo: [
        { ko: "텐션 미터가 너무 차거나 비지 않게 유지하세요. 빨갛게 차오르면 L1을 누른 채 물고기가 가는 방향으로 스틱을 당겨 풉니다.", en: "Keep the tension meter from filling or emptying — when it glows red, hold L1 and pull the stick the way the fish runs to bleed it off." },
        { ko: "참치는 적절한 미끼(어시장 미끼나 스마일버거 세트)가 필요하며 120~150m 거리대에서 걸립니다.", en: "Tuna needs proper bait (fish-market bait or a Smile Burger set) and bites at the 120–150m range." },
        { ko: "키류 정원 구석에서 지렁이 미끼가 무한 리스폰되니 미끼 보급용으로 활용하세요.", en: "A worm respawns endlessly in the corner of Kiryu's yard — farm it for free bait." },
        { ko: "참치 도전 전 오키나와 공설시장 생선가게에서 새우 미끼를 10개 이상 사두세요. 흰 트레이에 놓인 것은 모두 미끼로 쓸 수 있습니다.", en: "Before going for tuna, buy 10+ shrimp bait from the fishmonger in the Okinawa Public Market — anything sitting on a white tray can be used as bait." },
        { ko: "참치는 정확히 140~150m 거리대에서만 입질합니다. 그 거리에 보이는 물고기 위에 루어를 떨어뜨린 뒤, A가 뜨기 전까지 라인을 건드리지 말고 기다리세요. 끌어올리는 데만 3~5분이 걸리니 인내심이 필요합니다.", en: "Tuna only bite at the 140–150m band — drop the lure right on a fish there, don't touch the line until the A prompt appears, and expect a 3–5 minute fight to land it." },
      ],
      videos: [
        { title: { ko: "낚시 컴플리션 & 빅 튜나 가이드", en: "Fishing completion & Big Tuna guide" }, url: YT("mPdGiQMvyQs") },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "pool",
      name: { ko: "당구 (포켓)", en: "Pool" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 4,
      location: { ko: "류큐 아쿠아 스카이 등", en: "Aqua Sky lounge, Ryukyu" },
      summary: {
        ko: "나인볼·로테이션·에잇볼을 모든 상대(초·중·상·최상급)에게 이겨야 컴플리션. 리마스터 조준 감도가 까다로워 악명 높습니다.",
        en: "Completion needs wins in Nine-Ball, Rotation, and Eight-Ball against every opponent tier. The remaster's twitchy aiming is what makes it infamous.",
      },
      howTo: [
        { ko: "샷할 때 오른쪽 스틱을 좌우로 기울이지 말고 최대한 수직으로 당기세요. 조금만 비뚤어도 큐볼이 휩니다.", en: "Pull the right stick straight back, never sideways — even slight horizontal drift skews the cue ball." },
        { ko: "나인볼은 상대가 8·9번에서 실수하길 기다렸다가 마무리하는 전략도 유효합니다.", en: "In Nine-Ball it's valid to wait for the AI to miss on the 8 or 9, then clean up." },
        { ko: "처음엔 회전을 끄고 「고스트 볼」(포켓 반대편 표면 조준) 원리로 정확도부터 잡으세요.", en: "Turn spin off at first and use the ghost-ball rule (aim at the point opposite the pocket) to build accuracy." },
        { ko: "PC라면 스팀 컨트롤러 설정에서 오른쪽 스틱(조이스틱 무브)의 출력을 「Vertical Only(세로 전용)」로 바꾸세요. 악명 높은 좌우 미세 흔들림이 사라져 조준이 안정됩니다.", en: "On PC, open the Steam controller config and set the right stick (Joystick Move) output to 'Vertical Only' — this kills the infamous horizontal twitch and makes aiming stable." },
        { ko: "Y/△로 위에서 보는 시점으로 전환한 뒤, 목표구의 가장자리·큐볼의 가장자리·포켓이 일직선이 되도록 맞추세요. 화면에 실제 자나 종이를 대고 정렬하면 정확도가 크게 올라갑니다.", en: "Press Y/Triangle for the overhead view and line up the edge of the object ball, the edge of the cue ball, and the pocket into one straight line — holding a real ruler or paper edge against the screen makes this far more accurate." },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "카무로초·류큐 바", en: "Bars in Kamurocho & Ryukyu" },
      summary: {
        ko: "01·크리켓·카운트업 모드. 각 모드를 초·중·상급 상대에게 이기는 것이 컴플리션 조건입니다.",
        en: "01, Cricket, and Count Up modes — completion wants wins against beginner, intermediate, and advanced opponents.",
      },
      howTo: [
        { ko: "조준점이 흔들리며 목표(불·트리플20)를 지나는 순간 릴리스하세요.", en: "Release the instant the swaying reticle crosses your target (bull or triple-20)." },
        { ko: "01은 무리하게 트리플을 노리지 말고 안정적인 20점·불로 점수를 정확히 0까지 깎으세요.", en: "In 01 don't force triples — steady 20s and bulls that land you on exactly zero win it." },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 1,
      location: { ko: "카무로초 볼링장", en: "Bowling alley, Kamurocho" },
      summary: {
        ko: "한 게임에서 200점 이상이 컴플리션 조건. 가장 쉬운 종목 중 하나입니다.",
        en: "Completion is a 200+ score in one game — one of the easiest minigames.",
      },
      howTo: [
        { ko: "핀이 아니라 레인의 화살표(스폿)를 기준으로 조준하면 스트라이크가 안정적으로 나옵니다.", en: "Aim at the lane arrows (spots), not the pins, for consistent strikes." },
        { ko: "약간의 스핀을 줘 1-3번 핀 사이 「포켓」을 노리세요.", en: "Apply slight spin to hit the 1-3 'pocket'." },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "batting",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "카무로초·류큐 배팅 센터", en: "Batting centers in Kamurocho & Ryukyu" },
      summary: {
        ko: "Easy·Normal·Hard·Extra Hard 각 코스에서 1800점 이상이 컴플리션 조건입니다.",
        en: "Completion wants 1800+ points on each of the Easy, Normal, Hard, and Extra Hard courses.",
      },
      howTo: [
        { ko: "공이 홈플레이트에 닿기 직전 타이밍에 스윙하세요. 너무 빠르면 빗맞습니다.", en: "Swing just before the ball reaches the plate — too early and you foul it off." },
        { ko: "타깃 패널을 맞추면 보너스 점수가 크니, 풀스윙보다 정확한 타이밍과 타깃 조준을 우선하세요.", en: "Hitting the target panels gives big bonuses — value timing and aim over raw power." },
        { ko: "Ex-Hard는 코스의 공 20개가 매번 같은 순서로 나옵니다. 노말/하드에서 조준점을 기본 위치에 두고 화면 중앙에 포스트잇(스티커)을 붙여 영점을 잡은 뒤, Ex-Hard에서 그 스티커를 표적에 맞춰 치는 방식이 루리웹에서 검증된 공략입니다.", en: "On Ex-Hard the 20 pitches come in the same fixed order every run. A Ruliweb-tested method: in Normal/Hard zero your reticle by sticking a Post-it on the screen center, then on Ex-Hard just aim that sticker at the target panel — also save first, as the game can crash on a hit." },
        { ko: "구질은 직구는 화면 중앙, 커브는 좌측, 싱커는 우측에서 날아옵니다. 빠른 공은 일단 맞추기만 하면 홈런이 나오고, 느린 공은 공이 보이니 침착하게 보고 맞추세요.", en: "Pitch types read by origin: straight comes from center, curve from the left, sinker from the right. Just making contact with the fast pitches tends to give a homer; on slow pitches you can watch the ball and meet it calmly." },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: { ko: "카무로초·류큐 마작장", en: "Mahjong parlors in Kamurocho & Ryukyu" },
      summary: {
        ko: "한 판에서 50,000점이 컴플리션 조건. 단순한 화료가 아니라 큰 점수가 필요해 시리즈 최대 난관 중 하나입니다.",
        en: "Completion needs 50,000 points in a single match — not just a win but a big hand, making it one of the series' hardest entries.",
      },
      howTo: [
        { ko: "손패를 닫은 채 유지하고 리치를 노리세요. 멘젠 보너스와 우라도라로 점수가 크게 뜁니다.", en: "Keep your hand closed and aim for Riichi — the closed bonus plus ura-dora spikes your score." },
        { ko: "토이토이(올 트리플)·도라·삼원패(三元牌) 등 고점 역을 의식하면 50k에 빨리 도달합니다.", en: "Push high-value yaku like Toitoi (all triplets), dora, and dragon tiles to reach 50k fast." },
        { ko: "한 번에 안 되면 여러 판에 걸쳐 큰 화료를 노리되, 라운드 점수가 누적되는 룰을 활용하세요.", en: "If one hand won't do it, chase big wins across the match — scores accumulate over the rounds." },
        { ko: "룰 설정에서 「반장전(Half Game)」을 고르고, 喰い断(쿠이탄/오픈 탕야오)과 적도라(붉은 5)를 ON, 2한 묶음 같은 최소 한수 제한은 끄세요. 점수를 크게 띄우는 핵심은 적도라이므로 반드시 켭니다.", en: "In the rule settings pick a Half Game, turn Kuitan (open tanyao) and Red Dora ON, and don't bother with the 2-han minimum — red dora is the main thing that lets a single hand spike toward 50k." },
      ],
      videos: [
        { title: { ko: "마작 50,000점 컴플리션 가이드", en: "Mahjong 50,000-point completion guide" }, url: YT("Y9UWfbUe7cE") },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "koi-koi",
      name: { ko: "코이코이 (화투)", en: "Koi-Koi (hanafuda)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "카무로초·류큐 화투장", en: "Hanafuda parlors in Kamurocho & Ryukyu" },
      summary: {
        ko: "화투 코이코이. 누적 10,000 태그(점) 획득이 컴플리션 조건입니다.",
        en: "Hanafuda Koi-Koi — completion wants 10,000 cumulative tags (points) won.",
      },
      howTo: [
        { ko: "역(야쿠)이 완성되면 「코이코이」로 계속 갈지, 「쇼부」로 끝낼지 판단하세요. 안정적으로 점수를 쌓으려면 작은 역도 바로 굳히는 게 좋습니다.", en: "When a yaku forms, decide between Koi-Koi (keep going) and Shobu (cash out) — banking small yaku reliably accrues tags." },
        { ko: "광(光)·단자쿠(短冊) 같은 고배율 역을 노리되, 상대가 먼저 역을 만들면 위험하니 욕심을 조절하세요.", en: "Chase high-multiplier yaku (Bright, Ribbon) but don't get greedy if the AI is close to its own yaku." },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: { ko: "카무로초·류큐 쇼기장", en: "Shogi parlors in Kamurocho & Ryukyu" },
      summary: {
        ko: "일본 장기. 5승이 컴플리션 조건이며, 잡은 말을 다시 놓는 「持ち駒」 규칙이 핵심입니다.",
        en: "Japanese chess — completion needs 5 wins. The key mechanic is dropping captured pieces back onto the board.",
      },
      howTo: [
        { ko: "왕을 지키는 「囲い(가코이)」 진형을 먼저 갖추세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king first — Mino castle is the easiest starter." },
        { ko: "잡은 말은 즉시 재투입할 수 있으니, 적진 깊숙이 떨어뜨려 압박하세요.", en: "Drop captured pieces deep into enemy territory to apply pressure." },
        { ko: "막히면 가장 약한 상대를 골라 5승을 빠르게 채우세요.", en: "If stuck, farm your 5 wins against the weakest opponent." },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 3,
      location: { ko: "카무로초·류큐 가라오케관", en: "Karaoke bars in both districts" },
      summary: {
        ko: "타이밍 리듬게임. 모든 곡에서 900점 이상이 컴플리션 조건입니다.",
        en: "A timing rhythm game — completion wants a 900+ score on every song.",
      },
      howTo: [
        { ko: "노트가 판정 링에 정확히 겹치는 순간 입력하세요. 음악 박자보다 화면 표시를 믿는 게 정확합니다.", en: "Input exactly as the note overlaps the ring — trust the on-screen cue over the music's beat." },
        { ko: "길게 누르는 노트는 끝까지 유지해야 점수가 깎이지 않습니다.", en: "Hold the long notes to the very end or you'll lose points." },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "ufo-catcher",
      name: { ko: "UFO 캐처 (클럽 세가)", en: "UFO Catcher (Club SEGA)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 클럽 세가 (나카미치·극장가)", en: "Club SEGA, Kamurocho (Nakamichi & Theater Square)" },
      summary: {
        ko: "크레인 게임. 모든 경품을 한 번씩 획득하는 것이 컴플리션 조건입니다.",
        en: "Crane game — completion wants every possible prize collected at least once.",
      },
      howTo: [
        { ko: "500엔을 넣고 X로 크레인을 좌우 이동, 다시 눌러 안쪽으로 보낸 뒤 경품 무게중심 위에서 떨어뜨리세요.", en: "Insert 500 yen, move the crane sideways with X, then forward, and drop over the prize's center of mass." },
        { ko: "추라짱·유미바 등 특정 경품은 나카미치 클럽 세가에서만 나옵니다. 경품은 밖에 나갔다 오거나 점원과 대화해 리셋할 수 있습니다.", en: "Some prizes (Chura-chan, Yummy Bars) only appear at the Nakamichi arcade; reset prizes by leaving/re-entering or talking to the clerk." },
        { ko: "겹쳐 있는 작은 경품은 위쪽 것을 먼저 치워 숨은 경품을 노출시킨 뒤 잡으세요.", en: "For stacked small prizes, knock the top ones aside first to expose the hidden one." },
        { ko: "최대 난관인 검은 「실키 피요짱」은 극장가(시어터 스퀘어) 클럽 세가에서만, 그것도 비스듬히 기울어진 커다란 노란 피요짱 아래에 숨겨진 배치에서만 나옵니다. 그 배치가 나올 때까지 밖에 나갔다 오거나 점원에게 보충을 요청해 리셋하세요.", en: "The toughest prize, the black Silkie Piyo-chan, appears only at the Theater Square Club SEGA, and only in a layout where it hides beneath the big yellow Piyo-chan tilted at an angle — leave/re-enter or ask the clerk to restock until that configuration appears." },
        { ko: "「드림 머신(가챠)」에서 나온 경품은 UFO 캐처 컴플리션에 카운트되지 않습니다. 15종 전부를 반드시 크레인으로 직접 뽑아야 합니다.", en: "Prizes pulled from the Dream Machine (gacha) do NOT count toward UFO Catcher completion — all 15 must be won directly from the crane." },
      ],
      videos: [
        { title: { ko: "UFO 캐처 전 경품 가이드", en: "UFO Catcher all-prizes guide" }, url: YT("k3r16NkJnwE") },
      ],
      achievementSlug: "achievement_40",
    },
    {
      slug: "boxcelios",
      name: { ko: "복셀리오스 (Boxcelios)", en: "Boxcelios" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 클럽 세가 아케이드", en: "Club SEGA arcade, Kamurocho" },
      summary: {
        ko: "Y3 클럽 세가의 오리지널 종스크롤 슈팅 게임. 레벨 50 클리어가 컴플리션 조건입니다.",
        en: "An original vertical shooter in Club SEGA — completion requires clearing level 50.",
      },
      howTo: [
        { ko: "탄막을 피하며 적을 처치하는 슈팅입니다. 무리하게 정면 돌파하지 말고 화면 하단에서 좌우로 안전 지대를 찾으세요.", en: "Dodge the bullet patterns while shooting — don't barrel forward; weave along the bottom to find safe lanes." },
        { ko: "파워업 아이템을 챙겨 화력을 유지하고, 후반 레벨은 적 패턴을 외워 안정적으로 진행하세요.", en: "Grab power-ups to keep firepower up and memorize enemy patterns for the later levels." },
      ],
      achievementSlug: "achievement_40",
    },
  ],
};
