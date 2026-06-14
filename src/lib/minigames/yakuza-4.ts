import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza 4 Remastered (appId 1105500). Difficulty
// is rated for the completion / trophy grind, not for casual play. Cross-checked
// against community achievement guides and the in-game completion list. Note:
// Yakuza 4's Club SEGA only houses UFO Catcher, Boxcelios and Boxcelios 2 — the
// retro cabinets (OutRun, Space Harrier, Fantasy Zone, Virtua Fighter, etc.)
// are NOT in this entry, and AnswerxAnswer was cut from the Western release.
export const yakuza4Minigames: MinigamesData = {
  appId: 1105500,
  intro: {
    ko: "Y4는 네 명의 주인공이 카무로초를 무대로 각자의 미니게임에 참여합니다. 컴플리트 리스트와 트로피를 노린다면 클럽세가 종목과 호스티스 메이커, 그리고 도박·바 게임을 한 번씩은 건드려야 합니다. 호스티스 메이커의 의상 수집은 한 번 끝나면 되돌릴 수 없으니 미리 챙기세요.",
    en: "Yakuza 4 spreads its minigames across its four protagonists in Kamurocho. For the Completion List and trophies you'll need to touch the Club SEGA games, Hostess Maker, and the gambling/bar games at least once. Hostess Maker's outfit collection is permanently missable, so grab everything before you finish it.",
  },
  minigames: [
    {
      slug: "club-sega-ufo-catcher",
      name: { ko: "클럽세가 - UFO 캐처", en: "Club SEGA - UFO Catcher" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "씨어터 스퀘어 / 나카미치 거리 클럽세가", en: "Club SEGA in Theater Square / Nakamichi Street" },
      summary: {
        ko: "크레인으로 경품 인형을 집어 배출구로 옮기는 고전 UFO 캐처. 컴플리션에는 한 번씩 플레이만 하면 되지만, 「Welcome to SEGA」 트로피의 일부입니다.",
        en: "The classic crane game — grab a prize plush and drag it to the chute. Completion only needs a play, but it counts toward the 'Welcome to SEGA' trophy.",
      },
      howTo: [
        { ko: "크레인은 가로(앞뒤)와 세로(좌우)를 두 번에 나눠 조준합니다. 인형의 무게중심 바로 위가 아니라, 배출구 쪽으로 밀거나 끌 수 있는 지점을 노리세요.", en: "Aim the crane in two steps (depth, then sideways). Target a spot you can nudge or drag toward the chute, not just the plush's center of mass." },
        { ko: "한 번에 들어 올리기보다 인형을 조금씩 배출구로 밀어 넣는 전략이 더 안정적입니다.", en: "Inching the plush toward the chute over several grabs is more reliable than trying to lift it cleanly in one go." },
        { ko: "컴플리션 목적이라면 가장 싼 부스에서 한 번만 잡아도 충분합니다.", en: "For completion, a single successful grab at the cheapest booth is enough." },
      ],
      achievementSlug: "achievement_33",
    },
    {
      slug: "club-sega-boxcelios-2",
      name: { ko: "클럽세가 - 박셀리오스 2", en: "Club SEGA - Boxcelios 2" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "씨어터 스퀘어 클럽세가", en: "Club SEGA in Theater Square" },
      summary: {
        ko: "무적 레이저 함선을 조종해 적을 최대한 빠르게 격파하는 슈팅 아케이드. 박셀리오스 2를 세 번 플레이하고 매니저와 친해지면 원작 박셀리오스가 해금됩니다.",
        en: "A shooter where you pilot an invincible laser ship and destroy enemies as fast as possible. Playing Boxcelios 2 three times and befriending the manager unlocks the original Boxcelios.",
      },
      howTo: [
        { ko: "함선은 피격되지 않으니 죽음 걱정 없이 적 밀집 구역으로 파고들어 레이저로 쓸어담으세요.", en: "The ship can't be hit, so dive straight into enemy clusters and sweep them with the laser fearlessly." },
        { ko: "점수보다 클리어 속도가 핵심입니다. 적이 화면에 나타나는 즉시 조준해 격파 시간을 줄이세요.", en: "Clear speed matters more than score — lock onto enemies the instant they appear to cut your kill time." },
        { ko: "박셀리오스 2를 먼저 3회 플레이해야 매니저가 원작 박셀리오스를 설치해 줍니다. 트로피에는 둘 다 필요합니다.", en: "Play Boxcelios 2 three times first so the manager installs the original — the trophy needs both cabinets." },
      ],
      videos: [
        { title: { ko: "Yakuza 4 박셀리오스 2 아케이드 플레이", en: "Yakuza 4 Boxcelios 2 arcade playthrough" }, url: YT("lNYJbYKFtc4") },
      ],
      achievementSlug: "achievement_33",
    },
    {
      slug: "club-sega-boxcelios",
      name: { ko: "클럽세가 - 박셀리오스", en: "Club SEGA - Boxcelios" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "씨어터 스퀘어 클럽세가 (해금 필요)", en: "Club SEGA in Theater Square (must be unlocked)" },
      summary: {
        ko: "박셀리오스 2의 원작 버전. 매니저와 친해진 뒤에야 설치되며, 50레벨 도달이 별도 도전 과제입니다.",
        en: "The original version of Boxcelios, installed only after befriending the manager. Reaching Level 50 is a separate challenge.",
      },
      howTo: [
        { ko: "박셀리오스 2를 3회 플레이해 매니저와 친해진 뒤 다시 방문하면 캐비닛이 추가됩니다.", en: "Play Boxcelios 2 three times to befriend the manager, then return — the cabinet will be added." },
        { ko: "조작은 2와 동일합니다. 무적 함선으로 적을 빠르게 정리하는 데 집중하세요.", en: "Controls match Boxcelios 2 — focus on clearing enemies quickly with the invincible ship." },
        { ko: "컴플리션은 한 번 플레이로 충분하지만, 50레벨 트로피를 노린다면 장시간 플레이를 각오하세요.", en: "One play covers completion, but the Level 50 trophy demands a long grind." },
      ],
      achievementSlug: "achievement_33",
    },
    {
      slug: "hostess-maker",
      name: { ko: "호스티스 메이커", en: "Hostess Maker" },
      category: { ko: "육성·경영", en: "Training / Management" },
      difficulty: 5,
      location: { ko: "아키야마 챕터 - 카무로초 캬바레 클럽", en: "Akiyama's chapter - Kamurocho cabaret clubs" },
      summary: {
        ko: "아키야마가 호스티스를 No.1 캬바걸로 키우는 육성 미니게임. 손님 응대 중 외모·지성·매력을 S랭크로 올리고 나츠메를 이겨야 합니다. 23종 의상 컬렉션은 게임 종료 후 영구 미스 가능이라 가장 까다롭습니다.",
        en: "Akiyama trains hostesses into No.1 cabaret girls. You must raise Looks, Smarts and Charisma to S-rank during shifts and beat Natsume. The 23-outfit collection becomes permanently missable once the minigame ends, making it the trickiest entry.",
      },
      howTo: [
        { ko: "각 시프트는 손님 응대 4구간과 휴식 3구간으로 나뉩니다. 휴식 때 손님 취향에 맞춰 의상을 갈아입히고 능력치를 훈련하세요.", en: "Each shift has 4 service segments and 3 breaks — use breaks to change outfits to match guest tastes and train stats." },
        { ko: "한 시프트 안에서도 손님마다 선호 의상이 달라 3종 의상을 번갈아 입혀야 No.1에 도달할 수 있습니다.", en: "Different guests prefer different outfits even within one shift; rotate three outfits to hit No.1." },
        { ko: "「Fashionista」 트로피를 위해 No.1 달성 전에 드레스업 메뉴에서 23종 의상을 각 1벌씩 반드시 구매하세요. 마지막 호스티스를 No.1로 만들면 메뉴가 닫힙니다.", en: "For Fashionista, buy one of each of the 23 outfit types from the Dress-Up menu BEFORE finishing — the menu closes once the last hostess hits No.1." },
        { ko: "첫 호스티스가 가장 어렵습니다. 한 명을 끝내면 나머지는 훨씬 수월하니 의상 수집을 먼저 끝내두세요.", en: "The first hostess is hardest; later ones are far easier, so finish outfit collecting early." },
      ],
      achievementSlug: "achievement_18",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: { ko: "카무로초 마작장", en: "Mahjong parlor in Kamurocho" },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 시리즈 최대 난관이지만, 한 가지 패턴만 익히면 컴플리션은 넘깁니다. 「칠대자(7쌍)」 화료 같은 별도 트로피 조건도 있습니다.",
        en: "Standard Japanese riichi mahjong — the series' biggest wall if you don't know the rules, but one pattern is enough for completion. There's also a trophy for winning with Seven Pairs.",
      },
      howTo: [
        { ko: "손패를 절대 공개(펑/치)하지 말고 닫은 채로 유지해 리치를 선언할 수 있게 하세요.", en: "Keep your hand fully closed (never call Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 「탄야오」를 노립니다. 텐파이가 되면 리치 선언 → 역이 자동으로 붙어 화료합니다.", en: "Chase Tanyao (only simples 2–8); once you're one tile away, declare Riichi and a yaku attaches automatically." },
        { ko: "칠대자 트로피를 노린다면 서로 다른 7쌍을 닫은 채로 완성하세요.", en: "For the Seven Pairs trophy, complete seven distinct closed pairs." },
      ],
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: { ko: "카무로초 쇼기장", en: "Shogi parlor in Kamurocho" },
      summary: {
        ko: "일본 장기. 잡은 말을 다시 놓는 「持ち駒(모치고마)」 규칙이 체스와 다른 핵심입니다.",
        en: "Japanese chess — the key difference from Western chess is that captured pieces can be dropped back onto the board.",
      },
      howTo: [
        { ko: "왕을 지키는 「囲い(가코이)」 진형을 먼저 갖춘 뒤 공격하세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king before attacking — Mino castle is the easiest starter." },
        { ko: "잡은 말은 즉시 재투입할 수 있으니 적진 깊숙이 떨어뜨려 압박하세요.", en: "Captured pieces can be dropped anywhere — parachute them deep into enemy territory." },
        { ko: "컴플리션은 1승이면 충분합니다. 어려우면 약한 상대를 고르세요.", en: "Completion needs just one win — pick a weak opponent if you're struggling." },
      ],
    },
    {
      slug: "pool",
      name: { ko: "당구 (포켓)", en: "Pool / Billiards" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 3,
      location: { ko: "카무로초 당구장·바", en: "Billiard halls / bars in Kamurocho" },
      summary: {
        ko: "9볼 포켓을 기반으로 한 당구. 조준선과 파워 게이지를 활용해 공을 포켓에 넣습니다.",
        en: "Pool based on 9-ball — use the aim line and power gauge to sink balls into pockets.",
      },
      howTo: [
        { ko: "조준선을 충분히 보여주는 카메라로 맞춘 뒤, 목적구가 포켓 방향으로 굴러갈 각도를 계산하세요.", en: "Line up with the camera that shows the full aim line, then calculate the angle that sends the object ball toward the pocket." },
        { ko: "파워는 거리에 맞춰 조절하고, 흰 공의 다음 위치(포지셔닝)까지 염두에 두면 연속 득점이 쉽습니다.", en: "Match power to distance and plan the cue ball's next position for easier runs." },
        { ko: "잉글리시(회전)를 살짝 주면 흰 공의 진행 방향을 미세 조정할 수 있습니다.", en: "A touch of English (spin) fine-tunes where the cue ball travels." },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "카무로초 바", en: "Bars in Kamurocho" },
      summary: {
        ko: "501·카운트업 등 표준 다트. 조준 후 흔들리는 커서를 멈추는 타이밍이 핵심입니다.",
        en: "Standard darts (501, Count-Up, etc.). The key is timing your throw as the wobbling cursor settles.",
      },
      howTo: [
        { ko: "조준 커서가 흔들리는 폭의 중심에서 던지면 명중률이 올라갑니다. 트리플 20을 노려 점수를 빠르게 쌓으세요.", en: "Throw when the wobbling cursor is centered; aim for triple-20 to rack up points fast." },
        { ko: "501에서는 막판에 정확히 0으로 맞춰야 하므로, 남은 점수를 더블로 끝낼 수 있게 미리 계산하세요.", en: "In 501 you must hit exactly zero, so plan to finish on a double." },
        { ko: "조작에 익숙해지면 카운트업으로 고득점을 노려 완성 조건을 채우세요.", en: "Once comfortable, chase a high Count-Up score to meet completion targets." },
      ],
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: { ko: "카무로초 메스킹 볼링장", en: "Mach Bowl, Kamurocho" },
      summary: {
        ko: "표준 10핀 볼링. 시작 위치와 회전(훅)을 조절해 스트라이크를 노립니다.",
        en: "Standard ten-pin bowling — adjust your start position and spin (hook) to bowl strikes.",
      },
      howTo: [
        { ko: "공을 약간 측면에서 시작해 훅을 걸면 1번 핀과 3번(또는 2번) 핀 사이 「포켓」을 정확히 노릴 수 있습니다.", en: "Start slightly to one side and apply hook to hit the 'pocket' between the 1 and 3 (or 1 and 2) pins." },
        { ko: "파워는 강하게 유지하되, 방향과 회전 조합을 일정하게 반복하면 스트라이크가 안정적으로 나옵니다.", en: "Keep power high and repeat a consistent direction-plus-spin combo for reliable strikes." },
        { ko: "스플릿이 남으면 욕심내지 말고 한쪽 핀이라도 확실히 처리하세요.", en: "If you leave a split, don't gamble — clear at least one side cleanly." },
      ],
    },
    {
      slug: "karaoke",
      name: { ko: "카라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / Rhythm" },
      difficulty: 2,
      location: { ko: "카무로초 카라오케관", en: "Karaoke box in Kamurocho" },
      summary: {
        ko: "리듬에 맞춰 버튼을 누르는 노래방. 곡마다 가창을 완료하고 일정 점수를 넘으면 컴플리션과 관련 조건이 채워집니다.",
        en: "A rhythm karaoke minigame — clear each song and pass a score threshold to satisfy completion goals.",
      },
      howTo: [
        { ko: "노트가 판정선에 닿는 순간에 맞춰 정확히 입력하세요. 박자를 놓치면 점수가 크게 깎입니다.", en: "Hit each note exactly as it reaches the judgment line — missing the beat costs a lot of points." },
        { ko: "쉬운 곡으로 조작 감각을 먼저 익힌 뒤 고난도 곡으로 고득점을 노리세요.", en: "Practice timing on easy songs first, then push for high scores on harder tracks." },
        { ko: "서브스토리 조건을 채우면 동료를 초대해 함께 부를 수 있습니다.", en: "Completing certain substories lets you invite companions to sing along." },
      ],
    },
    {
      slug: "table-tennis",
      name: { ko: "탁구", en: "Table Tennis" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: { ko: "카무로초", en: "Kamurocho" },
      summary: {
        ko: "랠리를 주고받는 탁구. 타이밍과 방향 조작으로 상대의 빈 곳을 노립니다.",
        en: "A back-and-forth table tennis match — use timing and aim to exploit your opponent's open side.",
      },
      howTo: [
        { ko: "공이 넘어올 때 좌우로 방향을 틀어 상대가 닿기 어려운 코너로 보내세요.", en: "Angle returns into the corners the opponent can't reach easily." },
        { ko: "강한 스매시는 타이밍이 맞으면 한 방에 득점하지만, 빗나가면 실점하니 찬스에만 쓰세요.", en: "A well-timed smash can win the point outright, but only use it on clear chances or you'll fault." },
        { ko: "무리하게 공격하기보다 랠리를 길게 끌어 상대 실수를 유도하는 편이 안전합니다.", en: "Dragging out rallies to force opponent errors is safer than over-attacking." },
      ],
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "카무로초 배팅 센터", en: "Batting center in Kamurocho" },
      summary: {
        ko: "날아오는 공을 타이밍에 맞춰 치는 배팅 게임. 홈런 챌린지와 연속 안타 조건이 완성에 관여합니다.",
        en: "Time your swing to hit pitches — home-run challenges and consecutive-hit targets feed into completion.",
      },
      howTo: [
        { ko: "공이 홈플레이트에 도달하기 직전에 스윙하세요. 너무 일찍 휘두르면 헛스윙·파울이 됩니다.", en: "Swing just before the ball reaches the plate — swinging too early causes whiffs and fouls." },
        { ko: "홈런 챌린지에서는 가운데로 빠르게 오는 공을 노려 정타로 담장을 넘기세요.", en: "In the home-run challenge, target fast pitches down the middle for clean over-the-fence hits." },
        { ko: "구속이 빨라질수록 타이밍을 살짝 앞당겨야 하니 코스를 보고 미리 준비하세요.", en: "As pitch speed rises, start your swing slightly earlier and read the pitch location in advance." },
      ],
    },
  ],
};
