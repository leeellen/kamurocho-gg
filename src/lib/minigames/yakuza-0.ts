import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Yakuza 0 (Director's Cut). Difficulty is rated
// for the completion-list / 100% grind, not for casual play. Cross-referenced
// against the curated achievement guides and community video tutorials.
export const yakuza0Minigames: MinigamesData = {
  appId: 2988580,
  intro: {
    ko: "Y0는 시리즈에서 미니게임 밀도가 가장 높은 작품 중 하나입니다. 컴플리트 리스트와 「놀이를 제패한 남자」 트로피를 노린다면 아래 종목을 모두 한 번씩은 건드려야 합니다. 악명 높은 종목(마작·당구·Fantasy Zone)은 영상까지 함께 보면 훨씬 수월합니다.",
    en: "Yakuza 0 has one of the densest minigame spreads in the series. For the Completion List and the 'What a Player' trophy you'll need to touch every entry below at least once. The notorious ones (mahjong, billiards, Fantasy Zone) go much smoother with the videos attached.",
  },
  minigames: [
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: { ko: "카무로초·소텐보리 마작장", en: "Mahjong parlors in Kamurocho & Sotenbori" },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 시리즈 최대 난관이지만, 한 가지 패턴만 알면 컴플리션은 충분히 넘깁니다.",
        en: "Standard Japanese riichi mahjong — the series' biggest wall if you don't know the rules, but one pattern is enough for completion.",
      },
      howTo: [
        { ko: "손패를 절대 공개(펑/치)하지 말고 닫은 채로 유지하세요. 그래야 리치를 선언할 수 있습니다.", en: "Keep your hand fully closed (never call Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 「탄야오」를 노립니다. 4면자+1쌍으로 텐파이가 되면 리치 선언 → 역이 자동으로 붙어 화료.", en: "Chase Tanyao (only simples 2–8). When you're one tile from 4 sets + a pair, declare Riichi — a yaku attaches automatically." },
        { ko: "컴플리션은 큰 점수가 아니라 화료(승리) 자체가 목적입니다. 점수 욕심 내지 말고 빠른 화료 위주로.", en: "Completion only needs wins, not big scores — prioritize fast hands over value." },
        { ko: "탄야오를 쓰려면 규칙 설정에서 「쿠이탄(食い断, 운 탕야오)」을 반드시 「사용」으로 켜세요. 끄면 펑/치한 탄야오가 역으로 인정되지 않아 화료가 안 됩니다.", en: "If you want to use Tanyao, turn the 'Kuitan (open Tanyao)' rule ON in settings — with it off, a Tanyao hand that used Pon/Chi won't count as a yaku and you can't win." },
        { ko: "게임 길이는 「동풍전(東風戰)」으로 설정하면 한 판이 짧아져 화료 한 번만 노리고 빠르게 끝낼 수 있습니다.", en: "Set the match length to 'East-only (Tonpuusen)' — games end much faster, so you can grab a single win and get out." },
        { ko: "닫은 손으로 리치 후 화료하면 멘젠쯔모/리치 역에 더해 우라도라까지 계산돼 점수가 크게 붙으니, 점수 트로피까지 노린다면 리치를 적극 선언하세요.", en: "Winning off a closed Riichi hand adds the Riichi yaku plus ura-dora on top, inflating your score — lean on Riichi if you also want the high-score targets." },
      ],
      videos: [
        { title: { ko: "마작 입문 가이드 (Yakuza 0)", en: "Mahjong for beginners (Yakuza 0)" }, url: YT("VwnEujAKE3A") },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: { ko: "소텐보리 쇼기장", en: "Sotenbori shogi parlor" },
      summary: {
        ko: "일본 장기. 잡은 말을 다시 놓을 수 있는 「持ち駒」 규칙이 체스와 다른 핵심입니다.",
        en: "Japanese chess — the key difference from Western chess is that captured pieces can be dropped back onto the board.",
      },
      howTo: [
        { ko: "왕을 지키는 「囲い(가코이)」 진형을 먼저 갖추고 공격하세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king before attacking — Mino castle is the easiest starter." },
        { ko: "잡은 말은 즉시 재투입할 수 있으니, 적진 깊숙이 말을 떨어뜨려 압박하세요.", en: "Captured pieces can be dropped anywhere — parachute them deep into enemy territory to apply pressure." },
        { ko: "컴플리션은 1승이면 충분합니다. 어려우면 약한 상대를 골라 도전하세요.", en: "Completion needs just one win — pick a weak opponent if you're struggling." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "billiards",
      name: { ko: "당구 (포켓·캐롬)", en: "Billiards / Pool" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 3,
      location: { ko: "소텐보리 바 등", en: "Bars in Sotenbori" },
      summary: {
        ko: "9볼 포켓과 캐롬(캐논)·콤비네이션 샷이 핵심. 컴플리션에 캐롬샷 3회·콤비네이션 3회 조건이 있어 악명 높습니다.",
        en: "9-ball pool plus carom (cannon) and combination shots. The 3-carom and 3-combination completion targets are what make it infamous.",
      },
      howTo: [
        { ko: "「고스트 볼」 원리: 목적구를 포켓에 넣으려면 포켓 정반대편 목적구 표면을 큐볼이 때리도록 조준선을 맞춥니다.", en: "Ghost-ball rule: to sink a ball, aim so the cue ball strikes the point on it directly opposite the pocket." },
        { ko: "캐롬(캐논)샷은 큐볼이 한 공을 맞고 다른 공으로 가는 샷입니다. 혼자 플레이로 두 공을 일직선에 두고 연습하면 쉽게 나옵니다.", en: "A carom is when the cue ball hits one ball then another — line two balls up in solo play to farm it easily." },
        { ko: "처음엔 회전(잉글리시)을 끄고 풀파워보다 조준 정확도를 우선하세요.", en: "Leave spin off at first and value aim over power." },
        { ko: "「혼자 플레이(Solo)」 9볼에서는 일부러 파울(스크래치)을 내 큐볼을 원하는 위치로 옮길 수 있습니다. 캐롬·콤비네이션 셋업을 만들 때까지 파울로 공 배치를 조정하세요.", en: "In Solo 9-ball you can deliberately foul (scratch) to place the cue ball where you want — keep fouling to rearrange the balls until your carom/combination setup is ready." },
        { ko: "캐롬은 큐볼이 목적구의 「가장자리(엣지)」를 얇게 때리도록 조준하면 큐볼이 옆으로 튕겨 두 번째 공에 닿습니다. 중간 파워+약간 낮게 치면 회전이 먹어 더 잘 나옵니다.", en: "For a carom, aim to clip the very edge of the target ball so the cue ball glances off into a second ball — mid power hit slightly low adds spin and lands it more reliably." },
        { ko: "콤비네이션은 두 목적구를 포켓 직선상에 일렬로 두고, 큐볼로 앞 공을 밀어 뒤 공이 들어가게 하는 게 가장 쉽습니다. 솔로에서 이 배치를 만들어 두고 한 번에 따세요.", en: "The easiest combination is to line two object balls straight toward a pocket and push the front one into the back one with the cue ball — build that layout in Solo and farm it in one shot." },
      ],
      videos: [
        { title: { ko: "당구 캐롬·콤비네이션 샷 공략", en: "Billiards: carom & combination shots" }, url: YT("UOR-DbgucxQ") },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "소텐보리 바", en: "Bars in Sotenbori" },
      summary: {
        ko: "301과 크리켓 모드. 레티클이 좌우로 흔들리는 걸 타이밍 맞춰 던지는 게임입니다.",
        en: "301 and Cricket modes — you time your throw as the reticle sways side to side.",
      },
      howTo: [
        { ko: "조준점이 목표(불스아이/트리플20)를 지나는 순간 릴리스합니다.", en: "Release the instant the reticle crosses your target (bullseye or triple-20)." },
        { ko: "301은 무리하게 트리플을 노리지 말고 안정적인 20점·불로 점수를 정확히 0까지 깎으세요.", en: "In 301 don't force triples — steady 20s and bulls that bring you to exactly zero win it." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 1,
      location: { ko: "마하라자 인근 볼링장", en: "Bowling alley near Maharaja" },
      summary: {
        ko: "방향과 파워, 스핀만 맞추면 되는 가장 쉬운 미니게임 중 하나.",
        en: "One of the easiest minigames — just line up direction, power, and spin.",
      },
      howTo: [
        { ko: "스폿(레인의 화살표)에 핀이 아니라 화살표를 기준으로 조준하면 스트라이크 확률이 올라갑니다.", en: "Aim at the lane arrows (spots), not the pins, for more consistent strikes." },
        { ko: "약간의 스핀을 줘 1-3번 핀 사이 「포켓」을 노리세요.", en: "Apply slight spin to hit the 1-3 'pocket'." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "pocket-circuit",
      name: { ko: "포켓 서킷", en: "Pocket Circuit" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "카무로초 포켓 서킷 스타디움 (키류)", en: "Pocket Circuit Stadium, Kamurocho (Kiryu)" },
      summary: {
        ko: "미니카 튜닝 레이스. 운전 실력보다 차 세팅이 승부를 가르며, 후반 컵은 빌드 없이는 거의 불가능합니다.",
        en: "A mini-car tuning racer — setup matters more than driving, and late cups are near-impossible without the right build.",
      },
      howTo: [
        { ko: "직선이 긴 코스는 모터·기어비로 최고속을, 커브 많은 코스는 그립 타이어+다운포스로 코스 이탈을 막으세요.", en: "Gear for top speed on straight tracks; add grip tires + downforce on curvy ones to stop flying off." },
        { ko: "부품이 무거우면 후반에 배터리(스태미나)가 떨어져 멈춥니다. 완주 가능한 무게로 균형을 맞추세요.", en: "Heavy parts drain the battery and stall you late — balance for a weight that finishes." },
        { ko: "막히는 컵은 영상의 추천 빌드를 그대로 따라가면 대부분 뚫립니다.", en: "Stuck on a cup? Copy a recommended build from the video and it usually clears." },
        { ko: "범용 안정 빌드: 모터는 무조건 최대 속도(위타천/하이토크 2.0), 기어는 「파워 기어」, 배터리는 「터프니스(고용량)」로 두면 과한 가속이 잡혀 코스 이탈이 줄고 대부분의 컵을 클리어할 수 있습니다.", en: "Reliable all-rounder: max-speed motor (Godspeed/High Torque 2.0), Power Gears, and a Toughness/High-Capacity battery tame the over-acceleration so the car stops flying off course — this clears most cups." },
        { ko: "코스 이탈이 잦으면 무게를 더하세요. 「헤비 서스펜션」(서브스토리 #41 보상)과 「범퍼/사이드 스태빌라이저」가 코스트 대비 안정성이 가장 좋은 부품입니다.", en: "If you keep flying off, add weight — Heavy Suspension (Substory #41 reward) plus a Bumper/Side Stabilizer give the best stability-per-cost of any parts." },
        { ko: "신기록이 아니라 「1등만 할 만큼」만 세팅하세요. 부품을 최소로 바꾸고 속도를 살짝 죽여 완주율을 높이는 편이 결국 빠릅니다.", en: "Tune just enough to place 1st, not for a record — swapping the fewest parts and slightly under-tuning speed for a clean finish is faster overall." },
      ],
      videos: [
        { title: { ko: "포켓 서킷 우승 빌드·팁", en: "Pocket Circuit win & build tips" }, url: YT("mp-4G6Q-7gs") },
      ],
      achievementSlug: "32_the_dragon",
    },
    {
      slug: "disco",
      name: { ko: "디스코", en: "Disco" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 3,
      location: { ko: "마하라자 디스코 (마지마)", en: "Maharaja disco (Majima)" },
      summary: {
        ko: "리듬게임. 프롬프트 타이밍을 맞춰 점수를 쌓고, 「코이노 디스코 퀸」 등 댄스 배틀에서 라이벌을 이겨야 합니다.",
        en: "A rhythm game — match the prompt timing to build score and beat dance-battle rivals like the Disco Queen.",
      },
      howTo: [
        { ko: "프롬프트가 판정선에 「닿기 직전」 살짝 빨리 누르는 느낌으로 입력하면 Perfect가 잘 나옵니다.", en: "Input slightly early, just before each prompt reaches the line, to land Perfects." },
        { ko: "「Friday Night」 곡이 가장 쉬워 감을 잡는 연습용으로 추천합니다.", en: "'Friday Night' is the easiest track — best for learning the timing." },
        { ko: "고득점이 필요한 미스 이소베 배틀은 풀콤보 영상을 보고 입력 패턴을 외우면 안정적입니다.", en: "For the high-score Miss Isobe battle, memorize the input pattern from a full-combo video." },
        { ko: "점수 핵심은 콤보가 아니라 「스텝」입니다. 노트 1개당 40점, 스텝은 개당 +10점(최대 9개=+90), 콤보 보너스는 6콤보 이후 겨우 +2점뿐. 노트를 놓치지 않으면서 프롬프트마다 스텝을 최대한 많이 밟으세요.", en: "Score comes from Steps, not combos: each note is 40 pts, each step +10 (up to 9 = +90), but combo bonus is only +2 after 6. Don't miss notes and squeeze in as many steps as possible before each prompt." },
        { ko: "스텝은 노트가 있는 칸을 밟아도 카운트되지 않고, 같은 칸을 두 번 밟아도 안 됩니다. 다른 칸으로 갔다가 돌아오는 식으로 칸을 바꿔야 +10점이 들어옵니다.", en: "Stepping on a note's own square (or the same square twice) gives no step bonus — you must move to a different square and back to register the +10." },
        { ko: "댄싱 피버는 곡당 3회, 발동마다 고정 800점을 즉시 줍니다. 노트가 빽빽한 구간만 피해서 3번 다 쓰세요.", en: "Dancing Fever can be used 3 times per song for a flat 800 pts each — use all three, just avoid triggering it over note-dense sections." },
        { ko: "미스 이소베의 점수는 RNG로 6,300~8,700점 사이를 오갑니다. 내 점수가 좋아도 그날 그녀가 「불붙으면」 질 수 있으니, 8,000점대가 안 나오면 재시도가 빠릅니다.", en: "Miss Isobe's score is RNG, swinging from ~6,300 to ~8,700 regardless of your play — if she's 'on fire' you can lose a great run, so just retry rather than grinding a single attempt." },
      ],
      videos: [
        { title: { ko: "미스 이소베 디스코 배틀 (풀콤보)", en: "Miss Isobe disco battle (full combo)" }, url: YT("XuhUb6pHCQA") },
      ],
      achievementSlug: "30_say_you",
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초·소텐보리 가라오케관", en: "Karaoke bars in both cities" },
      summary: {
        ko: "타이밍 리듬게임. 「Bakamitai」 등 시리즈 명곡을 부르며, 전곡 일정 점수 이상이 컴플리션 조건입니다.",
        en: "A timing rhythm game with series classics like 'Bakamitai'; completion wants a target score on every track.",
      },
      howTo: [
        { ko: "노트가 판정 링에 정확히 겹치는 순간 입력하세요. 음악 박자보다 화면 표시를 믿는 게 정확합니다.", en: "Input exactly as the note overlaps the ring — trust the on-screen cue over the music's beat." },
        { ko: "키류와 마지마의 곡 목록이 다르니 양쪽 모두 점검하세요.", en: "Kiryu and Majima have different song lists — check both." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드 (Fantasy Zone 등)", en: "Club Sega arcades (Fantasy Zone, etc.)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 클럽 세가", en: "Club Sega in both cities" },
      summary: {
        ko: "아웃런·스페이스 해리어·슈퍼 행온·Fantasy Zone 등 실제 SEGA 아케이드 이식작. Fantasy Zone이 고득점 기준 가장 까다롭습니다.",
        en: "Real SEGA arcade ports — OutRun, Space Harrier, Super Hang-On, Fantasy Zone. Fantasy Zone is the trickiest for a high score.",
      },
      howTo: [
        { ko: "Fantasy Zone은 돈 관리 게임입니다. 코인을 모아 풍선 상점에서 ① 엔진(스피드업) → ② 강화 무기(와이드 빔/레이저) → ③ 보스용 폭탄 순으로 투자하세요.", en: "Fantasy Zone is money-management: spend coins at the balloon shop on ① engines (speed), ② a strong weapon (Wide Beam/Laser), ③ bombs for bosses." },
        { ko: "각 스테이지의 기지 10개를 모두 부수면 보스가 등장합니다. 보스는 근접에서 더 큰 데미지를 줍니다.", en: "Destroy all 10 bases in a stage to summon the boss — it takes more damage up close." },
        { ko: "아웃런은 갈림길에서 난이도 낮은 쪽을 골라 체크포인트를 안정적으로 통과하세요.", en: "In OutRun, take the easier fork to reach checkpoints reliably." },
        { ko: "Fantasy Zone 10만 점 우선순위: 무기/폭탄은 시간·탄수 제한이 있고 죽으면 사라지지만 「엔진(스피드업)」은 죽기 전까지 영구 유지됩니다. 코인은 엔진과 여분 목숨(엑스트라 라이프)에 먼저 투자하세요.", en: "For 100k points, prioritize engines: weapons/bombs are time- or ammo-limited and lost on death, but engine (speed-up) upgrades persist until you die — spend coins on engines and an extra life first." },
        { ko: "발사 버튼을 「연타」하지 말고 꾹 눌러 두세요(래피드 파이어). 수동 연타보다 DPS가 훨씬 높아 기지와 보스를 빠르게 정리합니다.", en: "Hold the fire button down (rapid-fire) instead of mashing — its damage output is far higher than manual taps, clearing bases and bosses faster." },
        { ko: "보스 9개 포탑은 각 1,000점, 보스 처치 시 10,000점입니다. 한 스테이지에서 2만 점 이상 벌면 보통 5스테이지쯤 10만 점에 도달하니, 폭탄은 보스용으로 아끼세요.", en: "Each of the boss's 9 turrets is 1,000 pts and the kill is 10,000 — bank 20k+ per stage and you'll usually hit 100k by stage 5, so save bombs for bosses." },
      ],
      videos: [
        { title: { ko: "Fantasy Zone 공략 (Director's Cut)", en: "Fantasy Zone easy guide (Director's Cut)" }, url: YT("FFkdY2YqRXY") },
        { title: { ko: "Fantasy Zone 10만 점 달성 가이드", en: "Fantasy Zone 100,000 points guide" }, url: YT("3PoTCnwl65Q") },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "catfight",
      name: { ko: "캣 파이트", en: "Cat Fight" },
      category: { ko: "소텐보리", en: "Sotenbori" },
      difficulty: 2,
      location: { ko: "소텐보리 캣 파이트 클럽 (마지마)", en: "Cat Fight club, Sotenbori (Majima)" },
      summary: {
        ko: "여성 격투에 베팅하는 도박+육성 미니게임. 선수를 영입·강화해 토너먼트에서 우승해야 합니다.",
        en: "A betting-plus-management minigame: recruit and train fighters, then win tournaments.",
      },
      howTo: [
        { ko: "선수의 체급·기술·체력 밸런스를 보고 상대보다 우위인 선수를 출전시키세요.", en: "Field the fighter who out-stats the opponent in weight, technique, and stamina." },
        { ko: "상금으로 선수를 강화하고 신규 선수를 영입해 라인업을 두껍게 만드세요.", en: "Reinvest winnings into upgrades and new recruits to deepen your roster." },
        { ko: "공격은 무지개 > 빨강 > 초록 > 파랑 > 흰색 순으로 강합니다. 상대 아이콘 색을 보고 카운터를 고르세요. 흰색이면 상대가 약공을 쓰니 내 약한 기술로 받아치고, 빨강이면 내 최강기로 맞불을 놓습니다.", en: "Attack strength is Rainbow > Red > Green > Blue > White. Read the opponent's icon color and counter accordingly: on White they're using their weakest move (use your weak one), on Red answer with your strongest." },
        { ko: "상대는 「최고 별점 기술」을 낼 확률이 가장 높습니다. 상대의 5성 기술을 이기는 가위바위보를 매번 같은 것으로 내는 「고정픽」이 통하는 경우가 많습니다(예: 상대 록이 5성이면 계속 록).", en: "Opponents most often throw their highest-star move, so spamming the single counter to their 5-star attack often works (e.g. if their Rock is 5-star, keep picking Rock yourself)." },
        { ko: "비기면 연타 타이브레이크가 뜨는데, 오래 끌수록 승자 데미지가 커집니다. 체력이 충분하면 일부러 빨리 져 데미지를 최소화하는 게 이득일 때가 많습니다.", en: "On a tie you get a mash-off, and the longer it runs the more damage the winner deals — if your health is fine it's often better to throw it quickly to minimize the hit." },
        { ko: "스탯이 우월한 제니퍼·모모코를 영입하면 토너먼트 승률이 크게 오릅니다(배당은 낮아짐). 제니퍼는 공격 별점이 대부분 5성이라 데미지가 최고입니다.", en: "Recruiting Jennifer or Momoko (top stats) sharply raises tournament win rates at the cost of lower payouts — Jennifer's attacks are mostly 5-star for the best damage." },
      ],
      achievementSlug: "31_cat_scratch",
    },
    {
      slug: "fishing",
      name: { ko: "낚시", en: "Fishing" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "소텐보리 강 (민물) · 도쿄 부두 (바다)", en: "Sotenbori river (freshwater) & Tokyo pier (saltwater)" },
      summary: {
        ko: "민물 15종·바다 18종 도감 완성이 컴플리션 조건. 어종마다 출현 위치가 정해져 있습니다.",
        en: "Completion wants the full log: 15 freshwater + 18 saltwater fish, each with set spawn spots.",
      },
      howTo: [
        { ko: "찌가 들어갈 때(반응이 올 때) 릴을 감고, 줄이 빨갛게 긴장되면 잠시 멈춰 줄이 끊기지 않게 하세요.", en: "Reel when the float dips; when the line glows red (tension), pause so it doesn't snap." },
        { ko: "대형 어종(상어·개복치 등)은 특정 위치에서만 걸리니 도감/영상의 위치를 참고하세요.", en: "Big fish (sharks, oarfish) only bite at specific spots — follow the log/video locations." },
        { ko: "대물 3종(그레이트 화이트·말린·산갈치)은 모두 도쿄(카무로초) 부두의 「오른쪽」 자리에서 나옵니다. 왼쪽이 아니라 오른쪽에 자리 잡으세요.", en: "The three trophy fish (Great White, Marlin, Oarfish) all appear from the RIGHT spot of the Tokyo (Kamurocho) pier — fish the right side, not the left." },
        { ko: "산갈치·참치는 일반 미끼로는 안 걸립니다. M 스토어에서 「퀄리티 베이트(고급 미끼)」를 사서 장착해야 출현하니 미리 챙기세요.", en: "Oarfish and Tuna won't bite on normal bait — buy and equip 'Quality Bait' from the M Store first to make them appear." },
        { ko: "릴은 빨간 긴장선이 「전부」가 아니라 「일부만」 물에 잠긴 상태를 유지하도록 감으세요. 줄이 다 빨개지면 끊어집니다. 에비스 폰의 「최강 낚싯대」(3,000만 엔)가 있으면 대물이 훨씬 안정적입니다.", en: "Reel so only PART of the red tension line is submerged, not all of it — a fully red line snaps. The Peerless Pole from Ebisu Pawn (30M yen) makes big catches far more stable." },
      ],
      videos: [
        { title: { ko: "민물 15종 낚시 가이드 (Director's Cut)", en: "All 15 freshwater fish (Director's Cut)" }, url: YT("UGt3PXkmMDA") },
        { title: { ko: "바다 18종 낚시 가이드 (도쿄 부두)", en: "All 18 saltwater fish (Tokyo Pier)" }, url: YT("uUyIgaakqHk") },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "mesuking",
      name: { ko: "메스킹 (곤충 카드 배틀)", en: "MesuKing (beetle card battle)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "소텐보리 (마지마)", en: "Sotenbori (Majima)" },
      summary: {
        ko: "가위바위보 + 스탯 싸움형 카드 배틀. 라이벌 NPC를 차례로 격파해야 합니다.",
        en: "A rock-paper-scissors-plus-stats card battle where you beat rival NPCs in sequence.",
      },
      howTo: [
        { ko: "STR > TECH > SPD > STR 삼각관계입니다. 라이벌마다 선호 타입이 고정이라, 한 번 지면 패턴을 외워 카운터 타입을 내세요.", en: "STR > TECH > SPD > STR. Each rival favors a fixed type — lose once, learn it, then counter-pick." },
        { ko: "기술(필살기) 카드는 게이지가 찼을 때 큰 데미지를 주니 접전 라운드에 아껴 쓰세요.", en: "Technique cards hit hardest with a full gauge — save them for close rounds." },
        { ko: "「도발(Taunt)」 스킬 카드를 장착하면 상대가 나보다 먼저 패를 고르게 만들어, 항상 카운터 패를 낼 수 있습니다. 가장 강력한 셋업이니 우선 확보하세요.", en: "Equip the 'Taunt' skill card — it forces the opponent to pick their hand before you, so you can always counter-pick. It's the strongest setup, so grab it first." },
        { ko: "테크닉보다 「파워(공격력)」가 높은 곤충 카드를 주력으로 쓰세요. 이기는 판마다 들어가는 데미지가 커서 라운드를 빨리 끝낼 수 있습니다.", en: "Build around the highest-Power insect card rather than Technique — bigger damage per won hand ends rounds faster." },
        { ko: "라이벌마다 필살기가 특정 타입(가위/바위/보) 하나에 고정돼 있습니다. 한 판 져서 상대 필살기 타입을 파악한 뒤, 그 타입을 막는 패를 집중적으로 내세요.", en: "Each rival's special move is tied to one fixed type (rock/paper/scissors) — lose a round to identify it, then keep throwing the hand that beats that type." },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "telephone-club",
      name: { ko: "텔레폰 클럽", en: "Telephone Club" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 1,
      location: { ko: "소텐보리 (마지마)", en: "Sotenbori (Majima)" },
      summary: {
        ko: "전화 데이트 미니게임. 상대의 말에 맞는 선택지를 골라 호감도를 올립니다.",
        en: "A phone-dating minigame: pick responses that match what the caller wants to raise affection.",
      },
      howTo: [
        { ko: "상대가 원하는 분위기(적극/소극)를 듣고 그에 맞는 선택지를 고르세요. 컴플리션은 1회 플레이면 카운트됩니다.", en: "Read whether she wants bold or gentle replies and match it — completion counts after one play." },
      ],
      achievementSlug: "28_what_a",
    },
  ],
};
