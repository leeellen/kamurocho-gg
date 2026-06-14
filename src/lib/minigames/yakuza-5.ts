import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza 5 Remastered. Difficulty is rated for the
// completion-list / 100% grind, not for casual play. Yakuza 5 has the densest
// minigame spread in the series, split between character-exclusive activities
// (taxi, hunting, dance, idol, baseball) and the shared parlor/arcade lineup.
// Cross-referenced against community walkthroughs and video tutorials.
export const yakuza5Minigames: MinigamesData = {
  appId: 1105510,
  intro: {
    ko: "Y5는 시리즈 중 미니게임 밀도가 가장 높은 작품입니다. 다섯 명의 주인공이 저마다 전용 미니게임(키류 택시, 사에지마 사냥, 아키야마 댄스, 하루카 아이돌, 시나다 야구)을 가지고 있고, 거기에 마작·쇼기·낚시 같은 공통 종목까지 더해집니다. 컴플리트 리스트와 「Life is Entertainment」(모든 미니게임 1회 플레이)를 노린다면 아래 종목을 전부 한 번씩은 건드려야 합니다.",
    en: "Yakuza 5 has the densest minigame spread in the series. Each of the five protagonists gets an exclusive activity (Kiryu's taxi, Saejima's hunting, Akiyama's dance battles, Haruka's idol career, Shinada's baseball) on top of the shared parlor and arcade lineup. For the Completion List and 'Life is Entertainment' (play every minigame once) you'll need to touch each entry below at least once.",
  },
  minigames: [
    {
      slug: "taxi-driver",
      name: { ko: "택시 드라이버 (키류)", en: "Taxi Driver (Kiryu)" },
      category: { ko: "운전·레이스", en: "Driving / Racing" },
      difficulty: 4,
      location: { ko: "후쿠오카 나가스가이 (키류 파트)", en: "Nagasugai, Fukuoka (Kiryu's chapter)" },
      summary: {
        ko: "키류가 택시 기사로 일하는 전용 미니게임. 일반 운송, 대화 미션, 그리고 본격 드리프트 레이스 세 종류로 나뉩니다. 레이스 미션이 컴플리션의 진짜 벽입니다.",
        en: "Kiryu's exclusive cab-driving activity, split into delivery runs, conversation missions, and full-on drift races. The race missions are the real completion wall.",
      },
      howTo: [
        { ko: "운송 미션은 교통법규 준수와 승객 만족도가 핵심입니다. 급정거·과속·접촉을 피하고 부드럽게 운전하세요.", en: "Delivery runs grade you on obeying traffic rules and passenger comfort — drive smoothly, avoid hard braking, speeding, and collisions." },
        { ko: "레이스에서는 모든 큰 코너를 Circle 드리프트로 돌고, 파란 불꽃이 뜨면 가속 부스트가 터집니다.", en: "In races, drift every major corner with Circle — once blue sparks appear you get a speed boost." },
        { ko: "대화 미션은 승객의 대사에 맞춰 적절한 선택지를 고르는 것으로, 운전 실력과 무관하니 부담 없이 진행하세요.", en: "Conversation missions just need the right dialogue choices for each passenger, independent of driving skill — knock them out freely." },
      ],
      videos: [
        { title: { ko: "전 택시 미션 공략 (Yakuza 5 Remastered)", en: "All taxi missions (Yakuza 5 Remastered)" }, url: YT("uGiatoFRYHE") },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "hunting",
      name: { ko: "사냥 (사에지마)", en: "Hunting (Saejima)" },
      category: { ko: "생존·서바이벌", en: "Survival" },
      difficulty: 4,
      location: { ko: "츠루가의 설산 (사에지마 파트)", en: "The snowy mountains near Tsukimino (Saejima's chapter)" },
      summary: {
        ko: "사에지마가 눈보라 치는 설산에서 사냥과 생존을 병행하는 전용 미니게임. 1인칭 사격, 함정 설치, 추위·허기 관리가 결합된 「Hunter and Killer」 사이드 스토리입니다.",
        en: "Saejima's exclusive blizzard survival activity — the 'Hunter and Killer' side story combining first-person shooting, trap-setting, and managing cold and hunger.",
      },
      howTo: [
        { ko: "체온과 식량을 항상 주시하세요. 잡은 사냥감과 채집물을 상인에게 팔아 함정·수리 키트·식량을 보충합니다.", en: "Keep an eye on body heat and rations — sell game and foraged items to the trader for traps, repair kits, and food." },
        { ko: "큰 사냥감(곰)은 정면 승부보다 함정으로 유인하거나 약점을 노려 1인칭 사격으로 처리하세요.", en: "Big game (bears) are best lured into traps or downed with well-placed first-person shots at weak points rather than head-on." },
        { ko: "마지막에는 눈싸움 「Winter Combat」 미니게임도 별도로 존재하니 컴플리션을 위해 함께 챙기세요.", en: "There's also a separate snowball-fight 'Winter Combat' minigame at the end — grab it too for completion." },
      ],
      videos: [
        { title: { ko: "사에지마 설산 사냥·생존 (Yakuza 5 Remastered)", en: "Saejima blizzard hunting & survival (Yakuza 5 Remastered)" }, url: YT("2bm4qzusBRA") },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "dance-battle",
      name: { ko: "댄스 배틀 (아키야마)", en: "Dance Battle (Akiyama)" },
      category: { ko: "음악·리듬", en: "Music / Rhythm" },
      difficulty: 3,
      location: { ko: "소텐보리 클럽 (아키야마 파트, 「Dancin' Akiyama」)", en: "Sotenbori club (Akiyama's chapter, 'Dancin' Akiyama')" },
      summary: {
        ko: "아키야마가 댄서 Hide와 맞붙는 리듬 댄스 배틀. 화면에 뜨는 방향·버튼 큐를 정확한 타이밍에 입력해 점수를 겨룹니다.",
        en: "Akiyama's rhythm dance-off against the dancer Hide — hit the directional and button cues as they appear, on time, to outscore your rival.",
      },
      howTo: [
        { ko: "큐가 판정 라인에 정확히 닿는 순간 입력하세요. 너무 빠르거나 늦으면 콤보가 끊깁니다.", en: "Input each cue the instant it lands on the judgement line — too early or too late breaks your combo." },
        { ko: "롱 노트는 버튼을 끝까지 유지해야 만점을 받습니다. 손가락을 미리 떼지 마세요.", en: "Hold notes need the button held to the very end for full marks — don't release early." },
        { ko: "리듬 게임이 익숙하다면 별도 강화 없이도 클리어 가능합니다. 패턴을 외우면 훨씬 쉬워집니다.", en: "If you're used to rhythm games you can clear it without upgrades — memorizing the patterns makes it much easier." },
      ],
      videos: [
        { title: { ko: "아키야마 댄스 배틀 (Yakuza 5 Remastered)", en: "Akiyama dance battle (Yakuza 5 Remastered)" }, url: YT("BsVSQpsGGrk") },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "haruka-idol",
      name: { ko: "아이돌 (하루카)", en: "Idol (Haruka)" },
      category: { ko: "음악·리듬", en: "Music / Rhythm" },
      difficulty: 5,
      location: { ko: "오사카·소텐보리 (하루카 파트, 프린세스 리그)", en: "Osaka & Sotenbori (Haruka's chapter, Princess League)" },
      summary: {
        ko: "하루카가 아이돌을 목표로 댄스 레슨·댄스 배틀·프린세스 리그를 거치는 대규모 리듬 콘텐츠. Y5에서 가장 분량이 많고 고난도인 미니게임으로, 클라이맥스 히트 연출이 핵심입니다.",
        en: "Haruka's sprawling rhythm career — lessons, dance battles, and the Princess League on her road to idol stardom. It's the longest and hardest minigame in Y5, built around landing Climax Heat finishers.",
      },
      howTo: [
        { ko: "댄스 배틀은 큐가 올라오는 막대에 맞춰 정확한 방향+버튼을 입력하는 방식입니다. 정확도를 쌓아 클라이맥스 게이지를 채우세요.", en: "Dance battles ask for the correct direction + button on the rising bars — stack accuracy to fill the Climax Gauge." },
        { ko: "게이지가 차면 클라이맥스 히트를 발동해 큰 점수로 단번에 승부를 결정짓습니다. 발동 타이밍이 승패를 가릅니다.", en: "When the gauge is full, trigger Climax Heat for a huge score swing — timing the activation decides the match." },
        { ko: "리듬에 자신 없다면 Body 계열 능력치를 올려 Heart-X 무브를 확보하면 배틀을 빠르게 끝낼 수 있습니다.", en: "If your rhythm is shaky, raise Body stats to unlock Heart-X moves and end battles faster." },
        { ko: "프린세스 리그는 곡마다 패턴이 다르니 사전에 한 번 들어보고 까다로운 구간을 미리 파악하세요.", en: "Each Princess League song has its own pattern — preview the track once to scout the tricky sections." },
      ],
      achievementSlug: "achievement_37",
    },
    {
      slug: "baseball",
      name: { ko: "야구 배팅 (시나다)", en: "Baseball Batting (Shinada)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "나고야 키네이초 배팅 센터 (시나다 파트)", en: "Kineichou Batting Center, Nagoya (Shinada's chapter)" },
      summary: {
        ko: "전직 프로야구 선수 시나다의 배팅 미니게임. 일반 배팅 센터와 달리 인간 투수가 던지고, 꽃잎 모양 조준 시스템으로 타이밍과 코스를 맞춥니다. 홈런·비거리 챌린지가 컴플리션 목표입니다.",
        en: "Shinada (an ex-pro ballplayer) takes on a batting game where a human pitcher throws and a four-petal targeting reticle handles timing and placement. Home-run and total-distance challenges are the completion goals.",
      },
      howTo: [
        { ko: "조준 원이 갈색일 때 치면 80m 평타지만, 노란색으로 번쩍일 때까지 기다렸다 치면 100m 이상 대형 홈런이 나옵니다.", en: "Swinging on the brown circle gives a flat 80m, but waiting for it to flash yellow launches it 100m+." },
        { ko: "이가라시 코치에게 배우는 「Heat Eye」(L1)로 불릿타임을 발동하면 여유롭게 타이밍을 맞출 수 있습니다.", en: "Coach Igarashi's 'Heat Eye' (L1) triggers a bullet-time slowdown, giving you all the time you need to line up the swing." },
        { ko: "중급 이상 챌린지는 10구 합산 비거리를 요구하므로, 안전한 80m보다 노란색 홈런을 꾸준히 노리세요.", en: "Higher challenges grade combined distance over 10 pitches — favor yellow home runs over the safe 80m." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: { ko: "각 도시 마작장", en: "Mahjong parlors in each city" },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 시리즈 최대 난관이지만, 컴플리션은 화료(승리) 1회면 충분합니다.",
        en: "Standard Japanese riichi mahjong — the series' biggest wall if you don't know the rules, but completion only needs a single winning hand.",
      },
      howTo: [
        { ko: "손패를 절대 공개(펑/치)하지 말고 닫은 채로 유지하세요. 그래야 리치를 선언할 수 있습니다.", en: "Keep your hand fully closed (never call Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 「탄야오」를 노립니다. 텐파이가 되면 리치 선언으로 역이 자동으로 붙습니다.", en: "Chase Tanyao (only simples 2–8); declare Riichi at tenpai and a yaku attaches automatically." },
        { ko: "점수 욕심 내지 말고 빠른 화료 위주로 진행하세요.", en: "Don't chase value — prioritize fast wins." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: { ko: "쇼기장", en: "Shogi parlor" },
      summary: {
        ko: "일본 장기. 잡은 말을 다시 놓는 「持ち駒」 규칙이 체스와 다른 핵심입니다. 컴플리션은 1승이면 충분합니다.",
        en: "Japanese chess — the key twist versus Western chess is dropping captured pieces back onto the board. Completion needs just one win.",
      },
      howTo: [
        { ko: "왕을 지키는 「囲い(가코이)」 진형을 먼저 갖추세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king first — Mino castle is the easiest starter." },
        { ko: "잡은 말은 즉시 재투입할 수 있으니 적진 깊숙이 떨어뜨려 압박하세요.", en: "Drop captured pieces deep into enemy territory to apply pressure." },
        { ko: "어려우면 약한 상대를 골라 1승만 챙기세요.", en: "Pick a weak opponent and grab a single win if you're struggling." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "koi-koi",
      name: { ko: "코이코이 (화투)", en: "Koi-Koi (Hanafuda)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "카지노·도박장", en: "Casino / gambling halls" },
      summary: {
        ko: "화투 카드로 정해진 役(야쿠) 조합을 만들어 점수를 겨루는 게임. 규칙만 익히면 운 요소가 커서 부담이 적습니다.",
        en: "A hanafuda card game where you form scoring 'yaku' combinations. Once you learn the rules it's fairly luck-driven and low-pressure.",
      },
      howTo: [
        { ko: "패가 맞으면 「코이코이」를 외쳐 라운드를 이어 점수를 키울지, 바로 끝낼지 판단하세요.", en: "When you complete a yaku, decide whether to call 'Koi-Koi' to keep building or end the round to bank points." },
        { ko: "상대가 큰 役에 근접했다면 욕심 부리지 말고 작은 점수라도 즉시 확정하세요.", en: "If your opponent is close to a big yaku, don't get greedy — lock in even a small score." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "casino",
      name: { ko: "카지노 (블랙잭·룰렛·바카라 등)", en: "Casino (Blackjack, Roulette, Baccarat, etc.)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "카지노", en: "Casino" },
      summary: {
        ko: "블랙잭, 룰렛, 바카라, 포커 등 서양식 카지노 게임 모음. 기본 전략만 지키면 컴플리션은 어렵지 않습니다.",
        en: "A collection of Western casino games — blackjack, roulette, baccarat, poker. Basic strategy is enough for completion.",
      },
      howTo: [
        { ko: "블랙잭은 17 이상이면 스탠드, 11 이하면 무조건 히트 등 기본 전략표를 따르세요.", en: "In blackjack follow basic strategy — stand on 17+, always hit on 11 or less." },
        { ko: "룰렛은 적/흑 같은 1:1 베팅으로 칩을 안정적으로 불려 컴플리션 조건을 채우는 편이 안전합니다.", en: "In roulette, even-money bets (red/black) are the safe way to grind chips toward completion targets." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "pool",
      name: { ko: "당구 (포켓)", en: "Pool / Billiards" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 3,
      location: { ko: "바·오락 시설", en: "Bars & entertainment venues" },
      summary: {
        ko: "9볼 포켓 당구. 조준선과 파워 게이지로 공을 포켓에 넣습니다. 컴플리션 챌린지는 정확한 콤비네이션 샷을 요구합니다.",
        en: "9-ball pool — aim with the guideline and power gauge to sink balls. Completion challenges ask for precise combination shots.",
      },
      howTo: [
        { ko: "조준 보조선을 끝까지 활용해 수구의 진행 경로와 목적구의 분리 각을 미리 확인하세요.", en: "Use the full aiming guideline to preview the cue ball's path and the object ball's deflection angle." },
        { ko: "파워는 필요 이상으로 세게 치지 말고, 다음 샷의 수구 위치(포지셔닝)를 고려해 조절하세요.", en: "Don't overhit — control power with the next shot's cue-ball position in mind." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "바·오락 시설", en: "Bars & entertainment venues" },
      summary: {
        ko: "01 게임과 크리켓을 즐기는 다트 미니게임. 흔들리는 조준점을 멈춰 원하는 칸에 꽂습니다.",
        en: "Darts featuring 01 games and Cricket — steady the wavering reticle and land it in the segment you want.",
      },
      howTo: [
        { ko: "조준점이 흔들리는 폭이 가장 작아지는 순간에 던지세요. 호흡을 맞추듯 타이밍을 잡습니다.", en: "Throw at the moment the reticle's sway is smallest — time it like a held breath." },
        { ko: "01 게임은 정확히 0으로 떨어지도록 마지막 점수를 계산해 더블/트리플을 노리세요.", en: "In 01 games, plan the finish so you land exactly on zero — aim for the right double/triple." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "karaoke",
      name: { ko: "카라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / Rhythm" },
      difficulty: 2,
      location: { ko: "카라오케관", en: "Karaoke venues" },
      summary: {
        ko: "노트가 판정 라인에 닿을 때 맞는 버튼을 눌러 가창력을 평가받는 리듬 게임. 캐릭터별 명곡이 다수 수록되어 있습니다.",
        en: "A rhythm game where you press the matching button as notes reach the judgement line, scoring your performance. Each character has their own signature songs.",
      },
      howTo: [
        { ko: "노트가 라인에 정확히 닿는 순간 입력하세요. 화면 가사보다 노트 흐름에 집중하면 정확도가 올라갑니다.", en: "Hit each note exactly on the line — watch the note flow, not the lyrics, for better accuracy." },
        { ko: "롱 노트는 버튼을 끝까지 유지해야 만점입니다. 처음 도전하는 곡은 쉬운 난이도로 패턴을 익히세요.", en: "Hold notes until the very end for full marks, and learn new songs on the easy difficulty first." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드", en: "Club SEGA Arcade" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "클럽 세가 (각 도시)", en: "Club SEGA (each city)" },
      summary: {
        ko: "클럽 세가에서 즐기는 실제 세가 아케이드 게임 모음(태고노타츠진 등 리듬·UFO 캐처 포함). 일부 고득점 조건이 컴플리션에 포함됩니다.",
        en: "A lineup of real SEGA arcade games inside Club SEGA (including rhythm titles and the UFO Catcher crane). Some high-score targets count toward completion.",
      },
      howTo: [
        { ko: "UFO 캐처는 경품의 무게중심 아래로 집게를 정확히 정렬한 뒤 떨어뜨려야 성공률이 높습니다.", en: "For the UFO Catcher, line the claw directly over the prize's center of gravity before dropping." },
        { ko: "리듬 게임은 한 곡을 반복 플레이해 노트 패턴을 외우면 목표 점수에 빠르게 도달합니다.", en: "On the rhythm cabs, repeat one song to memorize the chart and hit the target score faster." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "fishing",
      name: { ko: "낚시 (강·바다)", en: "Fishing (River & Sea)" },
      category: { ko: "야외·자연", en: "Outdoor" },
      difficulty: 3,
      location: { ko: "강·바다 낚시터", en: "River & sea fishing spots" },
      summary: {
        ko: "강낚시와 바다낚시 두 종류가 있는 낚시 미니게임. 물고기가 물면 텐션을 관리하며 끌어올립니다. 희귀어·대물 포획이 컴플리션 목표입니다.",
        en: "Fishing comes in river and sea variants — manage line tension to reel in once a fish bites. Catching rare and big fish is the completion goal.",
      },
      howTo: [
        { ko: "물고기가 도망칠 때는 줄을 풀고, 잠잠해지면 감는 식으로 텐션 게이지가 한계를 넘지 않게 조절하세요.", en: "Give line when the fish runs and reel when it tires, keeping the tension gauge out of the danger zone." },
        { ko: "포인트와 미끼에 따라 잡히는 어종이 다릅니다. 컴플리션 목록의 희귀어는 전용 스폿에서 노리세요.", en: "Spot and bait determine the species — chase completion-list rarities at their dedicated locations." },
      ],
      achievementSlug: "achievement_42",
    },
    {
      slug: "tatsuya-noodles",
      name: { ko: "타츠야 라멘 (스낵·미니 알바)", en: "Tatsu-ya Noodles (snack stall)" },
      category: { ko: "음식·접객", en: "Food / Service" },
      difficulty: 2,
      location: { ko: "포장마차 「타츠야」", en: "Tatsu-ya street stall" },
      summary: {
        ko: "포장마차 라멘집에서 주문에 맞춰 면을 삶고 그릇을 내는 접객형 미니게임. 정확도와 속도가 평가됩니다.",
        en: "A service minigame at the Tatsu-ya ramen stall — cook noodles and serve bowls to match orders, graded on accuracy and speed.",
      },
      howTo: [
        { ko: "주문 내용을 정확히 확인하고 면 삶는 시간을 놓치지 마세요. 과조리/미조리는 감점입니다.", en: "Read each order carefully and don't overshoot the boil timer — over- or under-cooking loses points." },
        { ko: "여러 주문이 겹칠 때는 조리 타이밍을 분산해 동선을 효율적으로 관리하세요.", en: "When orders stack up, stagger your cook timers to keep the workflow efficient." },
      ],
      achievementSlug: "achievement_42",
    },
  ],
};
