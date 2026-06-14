import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza Kiwami 3 (용과 같이 극3, 2025/2026 Dragon
// Engine remake of Yakuza 3 + the Dark Ties side story). The map spans Kamurocho
// and Downtown Ryukyu (Okinawa, home of the Morning Glory orphanage), so the
// minigame spread mirrors Yakuza 3's: golf, fishing, bowling, darts, pool,
// mahjong, koi-koi, shogi, batting, karaoke and the Club SEGA arcade. Difficulty
// is rated for the completion grind, not casual play. Only entries confirmed via
// release coverage and community location guides are listed here.
export const yakuzaKiwami3Minigames: MinigamesData = {
  appId: 3937550,
  intro: {
    ko: "극3는 Yakuza 3 기반이라 오키나와(류큐)의 모리닝글로리 고아원과 카무로초 두 지역에 미니게임이 흩어져 있습니다. 골프·낚시·볼링·다트·당구 같은 정통 종목은 거의 그대로 돌아왔고, 도박장과 클럽세가 아케이드도 건재합니다. 컴플리션을 노린다면 류큐와 카무로초 양쪽을 모두 돌아야 하니, 지역별 위치를 먼저 익혀두면 시간이 크게 절약됩니다.",
    en: "Kiwami 3 is built on Yakuza 3, so its minigames are split across two areas: the Morning Glory orphanage in Okinawa (Downtown Ryukyu) and Kamurocho. The classics — golf, fishing, bowling, darts, pool — are back largely intact, and the gambling hall and Club SEGA arcade are present too. For completion you'll need to travel between Ryukyu and Kamurocho, so learning where each game lives in each district saves a lot of time.",
  },
  minigames: [
    {
      slug: "golf",
      name: { ko: "골프 (Heaven's Golf)", en: "Golf (Heaven's Golf)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: {
        ko: "류큐 E Ryukyu Blvd 남쪽, 코인 락커 근처의 Heaven's Golf",
        en: "Heaven's Golf on the south side of E Ryukyu Blvd, near the coin lockers",
      },
      summary: {
        ko: "원작 Y3의 골프장 대신 류큐의 Heaven's Golf 센터에서 즐기는 현대식 골프. 「핀에 가깝게(Closest to the Pin)」와 「빙고 챌린지」 두 모드가 있으며 각 1,000엔입니다.",
        en: "Instead of Yakuza 3's original course, you play a modernized version at Ryukyu's Heaven's Golf center. There are two modes — Closest to the Pin and the Bingo Challenge — each costing 1,000 yen.",
      },
      howTo: [
        { ko: "「핀에 가깝게」는 한 샷으로 홀에 최대한 붙이는 방식으로, 10라운드 누적 점수가 최종 기록입니다. 바람 표시를 반드시 확인하고 파워와 방향을 보정하세요.", en: "Closest to the Pin scores each one-shot by proximity to the hole over 10 rounds — always read the wind indicator and adjust power and aim accordingly." },
        { ko: "빙고 챌린지는 거대한 빙고판에 공을 쳐서 숫자를 지우고 한 줄(대각선 포함)을 완성하면 빙고. 같은 거리의 칸을 노려 파워를 일정하게 유지하면 줄을 만들기 쉽습니다.", en: "In the Bingo Challenge you hit the ball into a giant bingo board to clear numbers; completing a line (diagonals count) scores a bingo — keep your power consistent and target a single row of squares." },
        { ko: "임팩트 게이지는 천천히 멈추는 연습이 핵심입니다. 풀파워보다 정확도가 점수에 더 크게 작용합니다.", en: "Practice stopping the impact gauge cleanly — accuracy matters more for your score than raw power." },
      ],
      videos: [
        { title: { ko: "극3 골프 플레이 (Chapter 3)", en: "Kiwami 3 golf gameplay (Chapter 3)" }, url: YT("d9LDJdjim8A") },
        { title: { ko: "Yakuza 3 리마스터 골프 미니게임 (참고용)", en: "Yakuza 3 Remaster golf minigame (reference)" }, url: YT("ht91uresg3k") },
      ],
    },
    {
      slug: "fishing",
      name: { ko: "낚시", en: "Fishing" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: {
        ko: "모리닝글로리 고아원 앞 해변 동쪽 끝의 낚싯대·양동이",
        en: "The harpoon and bucket on the far east side of the beach in front of Morning Glory",
      },
      summary: {
        ko: "고아원 앞 해변에서 즐기는 낚시. 낚싯대로 다양한 물고기와 쓰레기를 낚을 수 있으며, 모리닝글로리 미니게임들과 함께 손쉽게 접근됩니다.",
        en: "Fishing off the beach in front of the orphanage. You can reel in every type of fish (and trash) with the rod, and it sits right alongside the other Morning Glory minigames for easy access.",
      },
      howTo: [
        { ko: "찌가 흔들리고 입질이 오는 순간을 기다렸다가 타이밍에 맞춰 당기세요. 너무 일찍 당기면 놓칩니다.", en: "Wait for the bite — the moment the line tugs — then reel at the right time; jerking too early loses the fish." },
        { ko: "큰 물고기는 저항이 강하므로 릴 게이지/스태미나를 관리하며 끌어당기는 타이밍을 조절하세요.", en: "Bigger fish fight harder — manage the reel/tension so you don't snap the line, pulling only when the fish tires." },
        { ko: "도감·컴플리션 목적이라면 어종을 다양하게 낚는 것이 목표이니 여러 번 반복해 종류를 채우세요.", en: "For the catalog/completion goal you want variety, so fish repeatedly to fill out the species list." },
      ],
    },
    {
      slug: "bowling",
      name: { ko: "볼링 (Mach Bowl)", en: "Bowling (Mach Bowl)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: {
        ko: "카무로초 시어터 광장 남서쪽, Theater Alley 서쪽의 Mach Bowl",
        en: "Mach Bowl, west of Theater Alley and southwest of Theater Square in Kamurocho",
      },
      summary: {
        ko: "정통 볼링. 일반 게임(3·5·10프레임)과 스플릿 게임을 혼자 또는 동행 캐릭터와 즐길 수 있습니다. 컴플리션은 한 게임에서 200점 이상이 목표라 다소 까다롭습니다.",
        en: "Standard bowling — play a normal game (3, 5 or 10 frames) or a split game, solo or with a companion. Completion asks for a 200+ score in a single game, which makes it a bit demanding.",
      },
      howTo: [
        { ko: "200점을 노린다면 스트라이크 연속이 핵심입니다. 시작 위치를 살짝 오른쪽에 두고 약간 왼쪽으로 스핀을 주는 표준 포켓 샷을 익히세요.", en: "Hitting 200 needs strings of strikes — set up slightly right and put a touch of left spin on a standard pocket shot." },
        { ko: "방향 조준선을 1~2번 핀 사이(포켓)에 맞추고 파워 게이지를 일정하게 멈추는 연습을 반복하세요.", en: "Aim the line into the pocket between the 1 and 2 pins, and practice stopping the power gauge at a consistent spot." },
        { ko: "스플릿이 남으면 무리하지 말고 가장자리 핀을 확실히 쳐 점수 손실을 최소화하세요.", en: "If you leave a split, don't gamble — clear the makeable edge pin to limit the score loss." },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: {
        ko: "카무로초 E Millennium Tower St.의 Bantam Traditional Irish Pub (입구 좌측 다트판). 류큐에도 존재",
        en: "Bantam Traditional Irish Pub on E Millennium Tower St. in Kamurocho (dartboard to the left of the entrance); also available in Ryukyu",
      },
      summary: {
        ko: "01·크리켓·카운트업 룰을 초·중·상급 상대와 겨룹니다. 카무로초와 류큐 양쪽에서 플레이할 수 있습니다.",
        en: "Play 01, Cricket and Count Up against beginner, intermediate and advanced opponents, in both Kamurocho and Ryukyu.",
      },
      howTo: [
        { ko: "조준 레티클의 작은 중앙 원(고득점)에 맞추되, 흔들리는 레티클을 멈춘 뒤 옆의 정확도 게이지를 노란 구간에서 멈추는 것이 핵심입니다.", en: "Aim for the tiny central circle, but the real skill is stopping the wobbling reticle, then stopping the side accuracy gauge in the yellow zone for max precision." },
        { ko: "크리켓은 15~20과 불을 각 3마크로 「점령」해야 점수가 들어오니, 한 숫자에 집중해 빠르게 닫고 점수를 누적하세요.", en: "In Cricket you must 'capture' each of 15–20 and the Bull with 3 marks before scoring, so focus on closing one number at a time, then pile on points." },
        { ko: "컴플리션은 서로 다른 3개 룰을 플레이하고 총 5승(상대 중복 가능)이 목표이니, 약한 상대로 승수를 채우세요.", en: "Completion wants you to play all three rulesets and win 5 matches total (repeats allowed) — farm the easy opponent for the wins." },
      ],
    },
    {
      slug: "pool",
      name: { ko: "당구 (포켓)", en: "Pool / Billiards" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 3,
      location: {
        ko: "카무로초 북동부 Park Blvd, Purgatory 바로 남쪽의 당구 바",
        en: "The pool bar on Park Blvd in northeast Kamurocho, just south of Purgatory",
      },
      summary: {
        ko: "일반 포켓 당구와 「1-Shot Challenge」를 혼자 또는 동행 캐릭터와 즐깁니다. 정확한 조준과 파워 조절이 관건입니다.",
        en: "Play normal pool or the 1-Shot Challenge, solo or with a companion. Precise aim and power control are everything.",
      },
      howTo: [
        { ko: "조준 가이드 라인을 목표 공-포켓 직선에 맞춘 뒤, 큐볼이 어느 방향으로 굴러갈지(다음 공 위치)까지 고려해 파워를 조절하세요.", en: "Line the guide up so the target ball heads for the pocket, then control power with the cue ball's resulting position (your next shot) in mind." },
        { ko: "스핀(잉글리시)을 살짝 주면 큐볼 제어가 쉬워집니다. 초보 단계에서는 무리한 콤비네이션보다 확실한 한 개씩 처리가 안전합니다.", en: "A little spin (english) makes cue-ball control easier; early on, pot one clean ball at a time rather than risking combinations." },
        { ko: "1-Shot Challenge는 한 샷으로 최대한 많이 넣는 모드이니 공이 몰린 배치를 노려 연쇄로 떨어지게 조준하세요.", en: "The 1-Shot Challenge rewards sinking as many balls as possible in one shot — target clustered layouts so balls cascade in." },
      ],
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: {
        ko: "카무로초 Tenkaichi St. 동쪽 건물의 「Sexy Club Love Bunny」 내 Lullaby Mahjong (판돈 최대 50,000엔). 류큐에도 존재",
        en: "Lullaby Mahjong inside 'Sexy Club Love Bunny' on the east side of Tenkaichi St. in Kamurocho (stakes up to 50,000 yen); also in Ryukyu",
      },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 시리즈 최대 난관이지만, 한 가지 화료 패턴만 익히면 컴플리션은 충분히 넘깁니다.",
        en: "Standard Japanese riichi mahjong — the series' biggest wall if you don't know the rules, but learning one winning pattern is enough for completion.",
      },
      howTo: [
        { ko: "손패를 절대 공개(펑/치)하지 말고 닫은 채 유지하세요. 그래야 리치를 선언할 수 있습니다.", en: "Keep your hand fully closed (never call Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 「탄야오」를 노립니다. 4면자+1쌍 텐파이가 되면 리치 선언 → 역이 자동으로 붙어 화료됩니다.", en: "Chase Tanyao (only simples 2–8); when you're one tile from 4 sets + a pair, declare Riichi and a yaku attaches automatically." },
        { ko: "컴플리션은 큰 점수가 아니라 화료(승리) 자체가 목적이니 점수 욕심 없이 빠른 화료 위주로 진행하세요.", en: "Completion only needs wins, not big hands — prioritize fast wins over value." },
      ],
    },
    {
      slug: "koi-koi",
      name: { ko: "코이코이 (화투)", en: "Koi-Koi (Hanafuda)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: {
        ko: "Arcade Alley(남쪽을 바라보면 보이는) 도박장. 접수처 환전소에서 엔→나무 패로 환전 후 플레이",
        en: "The Gambling Hall in Arcade Alley (facing south); exchange yen for Wooden Tags at the Exchanger by reception, then play",
      },
      summary: {
        ko: "화투 카드 게임. 도박장에서 코이코이·오이초카부·시로·초한과 함께 초·중·상급으로 즐길 수 있습니다.",
        en: "A hanafuda card game. The Gambling Hall offers koi-koi alongside oicho-kabu, cee-lo and cho-han at Beginner, Intermediate and Expert levels.",
      },
      howTo: [
        { ko: "패에서 같은 달(月)의 카드를 짝지어 「역(야쿠)」을 완성하면 점수입니다. 손패와 바닥패의 짝을 잘 살피세요.", en: "Match cards of the same month from your hand to field cards to build yaku (scoring combos) — watch both your hand and the field for pairs." },
        { ko: "역이 완성되면 「코이코이」를 외쳐 점수를 키울지, 그만두고 확정할지 선택합니다. 안정적으로 가려면 작은 역도 바로 확정하세요.", en: "When you complete a yaku, choose to call 'Koi-Koi' to keep building or stop to bank it — bank small yaku immediately for safety." },
        { ko: "상대가 큰 역을 노리는 듯하면 무리하게 코이코이를 외치지 말고 확정해 점수를 지키세요.", en: "If the opponent looks close to a big yaku, don't push Koi-Koi — lock in your points." },
      ],
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: {
        ko: "Champion District 남쪽, E Taihei Blvd 북쪽의 작은 광장에 있는 쇼기 상대",
        en: "The shogi player in a small square south of the Champion District, just north of E Taihei Blvd",
      },
      summary: {
        ko: "일본 장기. 랭크 매치·챌린지 매치·퍼즐 쇼기를 즐길 수 있습니다. 잡은 말을 다시 놓는 「持ち駒」 규칙이 체스와 다른 핵심입니다.",
        en: "Japanese chess with Ranked Match, Challenge Match and Puzzle Shogi modes. The key twist vs. Western chess is that captured pieces can be dropped back onto the board.",
      },
      howTo: [
        { ko: "왕을 지키는 「囲い(가코이)」 진형을 먼저 갖추고 공격하세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king before attacking — Mino castle is the easiest starter." },
        { ko: "잡은 말은 즉시 재투입할 수 있으니, 적진 깊숙이 말을 떨어뜨려 압박하세요.", en: "Captured pieces can be dropped anywhere — parachute them deep into enemy territory to apply pressure." },
        { ko: "퍼즐 쇼기는 정해진 외통수를 찾는 모드라 패턴 학습에 좋습니다. 대국이 부담되면 퍼즐부터 익히세요.", en: "Puzzle Shogi tasks you with finding a forced mate — great for learning patterns, so start there if live games feel intimidating." },
      ],
    },
    {
      slug: "batting",
      name: { ko: "배팅 센터 (Yoshida Batting Center)", en: "Batting Cage (Yoshida Batting Center)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: {
        ko: "카무로초 북부 호텔 디스트릭트의 Yoshida Batting Center",
        en: "Yoshida Batting Center in the Hotel District on the north side of Kamurocho",
      },
      summary: {
        ko: "타격 미니게임. 챌린지 코스·홈런 코스·홈런 콤퍼티션을 즐길 수 있습니다.",
        en: "A batting minigame offering the Challenge Course, Home Run Course and Home Run Competition.",
      },
      howTo: [
        { ko: "공이 날아오는 타이밍에 맞춰 스윙하되, 타깃 존(빛나는 지점)에 배트를 맞추면 홈런 확률이 올라갑니다.", en: "Swing in time with the pitch — lining the bat up with the glowing target zone greatly increases home-run chances." },
        { ko: "초반 느린 공으로 타이밍 감을 잡은 뒤 빠른 코스에 도전하세요.", en: "Get your timing down on the slow pitches first, then move up to the faster courses." },
        { ko: "홈런 콤퍼티션은 연속 홈런이 목표이니 무리한 풀스윙보다 정확한 미트 타이밍에 집중하세요.", en: "The Home Run Competition rewards consecutive homers — focus on clean contact timing rather than over-swinging." },
      ],
    },
    {
      slug: "karaoke",
      name: { ko: "카라오케 (Karaokekan)", en: "Karaoke (Karaokekan)" },
      category: { ko: "음악·리듬", en: "Music / Rhythm" },
      difficulty: 2,
      location: {
        ko: "카무로초 Nakamichi St. 북동쪽의 Karaokekan",
        en: "Karaokekan in the northeast area of Nakamichi St. in Kamurocho",
      },
      summary: {
        ko: "리듬 노래방. 혼자 또는 친구와 함께 곡을 부를 수 있습니다. 화면 지시에 맞춰 버튼을 눌러 점수를 냅니다.",
        en: "A rhythm karaoke game — sing solo or with friends, hitting the on-screen prompts in time for points.",
      },
      howTo: [
        { ko: "노트가 판정선에 닿는 순간에 정확히 입력하세요. 박자보다 살짝 빠르거나 늦으면 「Good/Bad」로 떨어집니다.", en: "Input exactly as each note reaches the judgment line — slightly early or late drops you to Good/Bad." },
        { ko: "익숙한 곡으로 먼저 연습해 멜로디 리듬을 익히면 고득점이 쉬워집니다.", en: "Practice on a song you know so the melody's rhythm guides your timing for a high score." },
        { ko: "장음 노트는 끝까지 버튼을 유지해야 점수가 온전히 들어옵니다.", en: "Hold sustained notes all the way to the end to bank their full score." },
      ],
    },
    {
      slug: "club-sega",
      name: { ko: "클럽 세가 아케이드 (UFO캐처 등)", en: "Club SEGA Arcade (UFO Catcher & more)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: {
        ko: "시어터 광장의 Club SEGA (UFO캐처) 및 게임센터 — Emergency Call Ambulance, SlashOut!, 게임기어 Sonic 등",
        en: "Club SEGA in Theater Square (UFO Catcher) and arcades — Emergency Call Ambulance, SlashOut! and Game Gear Sonic",
      },
      summary: {
        ko: "클럽 세가 아케이드. UFO캐처로 세가 캐릭터 인형을 뽑고, Emergency Call Ambulance·SlashOut!·게임기어 Sonic 등 레트로 아케이드를 즐길 수 있습니다.",
        en: "The Club SEGA arcade: grab SEGA-character plushies in the UFO Catcher, and play retro cabinets like Emergency Call Ambulance, SlashOut! and Game Gear Sonic.",
      },
      howTo: [
        { ko: "UFO캐처는 집게를 인형의 무게중심 위에 정확히 정렬하고, 좌우→앞뒤 두 축을 따로 멈춰 위치를 맞추세요.", en: "For the UFO Catcher, align the claw over the plushie's center of gravity, stopping the left-right and forward-back axes separately." },
        { ko: "한 번에 못 뽑아도 인형이 출구 쪽으로 조금씩 밀리도록 위치를 옮기는 전략이 유효합니다.", en: "Even if one grab fails, nudging the plushie toward the chute bit by bit is a valid strategy." },
        { ko: "레트로 게임은 각각 별도 미니게임이므로, 컴플리션 항목이 있다면 한 번씩 플레이해 기록을 남기세요.", en: "Each retro cabinet is its own minigame — if it has a completion entry, play it at least once to register progress." },
      ],
      videos: [
        { title: { ko: "극3 & Dark Ties 아케이드 미니게임", en: "Kiwami 3 & Dark Ties arcade minigames" }, url: YT("dSpiCDgvtV4") },
      ],
    },
  ],
};
