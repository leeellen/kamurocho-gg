import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Like a Dragon: Infinite Wealth (Yakuza 8).
// Difficulty is rated for the Completion List / trophy grind, not casual play.
// Cross-referenced against community guides (GameFAQs, Game8, Gamer Guides,
// Neoseeker, TheGamer) and verified YouTube walkthroughs. Most substantial
// minigames are set in Honolulu (Hawaii), with the gambling/arcade staples
// also returning in Isezaki Ijincho.
export const likeADragonInfiniteWealthMinigames: MinigamesData = {
  appId: 2072450,
  intro: {
    ko: "용과 같이 8(Infinite Wealth)은 무대가 하와이 호놀룰루로 옮겨가면서 돈도코 섬(동물의 숲형 섬 경영)·크레이지 딜리버리(크레이지택시형 배달)·스지몬 배틀(포켓몬형) 같은 대형 미니게임이 컴플리션의 핵심이 됩니다. 가라오케·다트·마작·카지노 같은 시리즈 단골도 그대로 돌아왔습니다. 일부는 챕터 진행으로만 해금되니 순서를 참고하고, 장기 그라인드 종목은 영상까지 같이 보면 훨씬 수월합니다.",
    en: "Infinite Wealth moves the action to Honolulu, Hawaii, where big-ticket minigames — Dondoko Island (an Animal Crossing-style island sim), Crazy Delivery (a Crazy Taxi-style bike courier), and Sujimon battles (a Pokemon homage) — anchor the Completion List. Series staples like karaoke, darts, mahjong, and the casino return as well. Some only unlock as the story advances, so mind the order, and the long grinds go much smoother with the videos attached.",
  },
  minigames: [
    {
      slug: "dondoko-island",
      name: { ko: "돈도코 섬", en: "Dondoko Island" },
      category: { ko: "경영·시뮬레이션", en: "Management / sim" },
      difficulty: 5,
      location: { ko: "돈도코 섬 (챕터 5에서 본편으로 해금)", en: "Dondoko Island (unlocks via the main story in Chapter 5)" },
      summary: {
        ko: "이치반이 망가진 리조트 섬을 인수해 청소·자원 채집·DIY 가구 제작으로 손님을 모으고 리조트 랭크를 올리는 동물의 숲형 섬 경영 미니게임. 만족도·인기도를 채우고 해적까지 격파해 5스타 리조트를 만드는 것이 목표로, 컴플리션에서 가장 긴 그라인드 중 하나입니다.",
        en: "Ichiban takes over a run-down resort island and cleans it up, gathers resources, and crafts DIY furniture to attract guests and raise his Resort Rank — an Animal Crossing-style island sim. The goal is a 5-star resort by maxing Satisfaction and Popularity and beating the pirates, one of the longest grinds for completion.",
      },
      howTo: [
        { ko: "DIY 가구는 카스가의 집과 마타요시 가게 사이 제작대에서 만듭니다. 가구마다 4가지 테마 중 하나가 붙으니, 손님 취향에 맞춰 네 테마를 골고루 배치해 만족도를 올리세요.", en: "Craft DIY furniture at the bench between Kasuga's house and Matayoshi's store. Each item belongs to one of four themes — build across all four to match guest preferences and raise Satisfaction." },
        { ko: "빌더 레벨은 가구를 만들어야만 오릅니다(최대 50). 새 레시피와 더 좋은 스탯이 풀리니 자원이 남으면 무조건 만들며 레벨을 굴리세요.", en: "Your Builder Level only rises by crafting (cap 50), unlocking better recipes and stats — so craft whenever you have spare resources to keep leveling." },
        { ko: "금·플래티넘·다이아 광석 가구는 만족도가 높습니다. 광석은 한정적이니 고가치 레시피에 우선 투자하세요.", en: "Gold, platinum, and diamond ore furniture grants high Satisfaction — ore is limited, so spend it on the high-value recipes first." },
        { ko: "랭크 상승마다 최소 만족도·인기도와 추가 미션(구역 정리, 후반엔 해적 격퇴)이 필요합니다. 5스타 최종전은 드레드 파이럿 후크전입니다.", en: "Each rank-up needs minimum Satisfaction and Popularity plus extra missions (clearing areas, later beating pirates); the final 5-star fight is against Dread Pirate Hook." },
      ],
      videos: [
        { title: { ko: "돈도코 섬 5스타 리조트 단계별 가이드", en: "Dondoko Island 5-star resort step-by-step guide" }, url: YT("bcK_HfHrIoI") },
        { title: { ko: "돈도코 섬 5스타 달성 방법", en: "How to get 5 stars on Dondoko Island" }, url: YT("u9C4fFeTvBw") },
      ],
      achievementSlug: "resort_diy",
    },
    {
      slug: "crazy-delivery",
      name: { ko: "크레이지 딜리버리 (크레이지 이츠)", en: "Crazy Delivery (Crazy Eats)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "알로하 스트리트 (호놀룰루) — 찰리에게 '딜리버리' 선택", en: "Aloha Street, Honolulu — talk to Charlie and choose 'Deliver'" },
      summary: {
        ko: "로드 자전거를 타고 시내를 누비며 햄버거·피자·스시를 주워 손님에게 배달하는 크레이지 택시형 미니게임. 화려한 트릭으로 팁을 올리고 제한 시간 안에 최대 매출을 노립니다. 전 코스 S랭크가 트로피/컴플리션 목표입니다.",
        en: "A Crazy Taxi-style minigame where you ride a road bike around town, scooping up burgers, pizza, and sushi to deliver to customers. Pull off flashy tricks to boost tips and rack up the highest sales before the timer runs out. S-ranking every course is the trophy/completion goal.",
      },
      howTo: [
        { ko: "배달 전에 트릭을 3번 먼저 넣으면 팁이 크게 오릅니다. 트릭 모디파이어로 점프 후 좌스틱 방향으로 회전(앞/뒤 플립, 좌/우 스핀)을 넣으세요.", en: "Land three tricks before a delivery to spike the tip — use the trick modifier to hop, then the left stick to rotate (front/back flips up/down, side spins left/right)." },
        { ko: "트릭 콤보는 최대 3단(Cool! → Genius! → Extreme!)입니다. 무리하지 말고 3단만 안정적으로 채우세요.", en: "Trick combos cap at three tiers (Cool! to Genius! to Extreme!) — don't overreach, just land the three reliably." },
        { ko: "트릭으로 부스트를 모았다 발동하면 가속+점수 배율 최대+주변 음식 자동 흡입+무적이 됩니다. 음식이 몰린 구간에서 터뜨리세요.", en: "Tricks fill a boost — pop it for speed, a maxed multiplier, auto-vacuuming nearby food, and invincibility; save it for food-dense stretches." },
        { ko: "스프링 패드는 공짜 점수에 시간까지 멈춰 주니 보일 때마다 밟고, 미니맵으로 다음 음식·손님 위치를 미리 계획하세요.", en: "Spring pads are free points and stop the clock — hit every one, and use the minimap to plan your next food pickups and customers." },
      ],
      videos: [
        { title: { ko: "크레이지 딜리버리 전 코스 S랭크", en: "Crazy Delivery all courses (S Rank)" }, url: YT("Yte99_EPEWY") },
        { title: { ko: "크레이지 딜리버리 100% 가이드", en: "Crazy Delivery 100% guide" }, url: YT("hNb3yKjHkTk") },
      ],
      achievementSlug: "delivery_clear",
    },
    {
      slug: "sujimon-battle",
      name: { ko: "스지몬 배틀 / 스지몬 리그", en: "Sujimon Battle / Sujimon League" },
      category: { ko: "수집·배틀", en: "Collection / battle" },
      difficulty: 5,
      location: { ko: "스지몬 본부 (호놀룰루) 및 하와이 전역의 야생 스지몬", en: "Sujimon HQ (Honolulu) and wild Sujimon across Hawaii" },
      summary: {
        ko: "거리의 잡몹(스지)을 포획·육성해 타입 상성으로 싸우는 포켓몬 오마주. 스지몬 트레이너 랭크를 올리며 포켓몬의 사천왕에 해당하는 '디스크릿 포(Discreet Four)'와 최종 보스 King을 격파하는 것이 리그의 목표입니다. 도감 컴플리션은 장기 그라인드입니다.",
        en: "A Pokemon homage where you capture and raise street thugs (Suji) and battle using type matchups. Rank up as a Sujimon Trainer to challenge the 'Discreet Four' (the Elite Four equivalent) and final boss King. Filling out the Sujidex is a long grind.",
      },
      howTo: [
        { ko: "타입은 블레이즈·프로스트·네이처·라이트·섀도우. 상성표를 외워 한 타입으로 몰지 말고 팀을 다양하게 구성하세요.", en: "Types are Blaze, Frost, Nature, Light, and Shadow — learn the chart and diversify your team rather than stacking one type." },
        { ko: "디스크릿 포의 첫 상대 Jack은 트레이너 랭크 10에 도전 가능합니다. 도전 전에 가챠 스탠드와 본부의 스지몬 스폿에서 팀을 조정하세요.", en: "Jack, the first of the Discreet Four, opens at Trainer Rank 10 — adjust your team at the gacha stands and HQ Sujimon spots before challenging." },
        { ko: "디스크릿 포 전투는 거절하면 세이브 기회가 생깁니다. 부담되면 한 명씩 끊어 준비하며 진행하세요.", en: "You can decline a Discreet Four fight to get a save opportunity — tackle them one at a time and prep between bouts." },
      ],
      videos: [
        { title: { ko: "디스크릿 포 Jack 공략 (스지몬 리그)", en: "Discreet Four: Jack walkthrough (Sujimon League)" }, url: YT("Q58IzDmujDU") },
      ],
    },
    {
      slug: "sicko-snap",
      name: { ko: "시코 스냅", en: "Sicko Snap" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "하와이 트롤리 정류장 (서브스토리 8 '시코를 찍어라!' 완료 후 해금)", en: "Hawaii trolley stops (unlocks after Substory 8, 'Snap Those Sickos!')" },
      summary: {
        ko: "온레일로 이동하며 가면을 쓴 변태('파피용')를 카메라로 찍는 포켓몬 스냅 오마주. 마우스/스틱으로 조준해 고득점 사진을 찍어 코스별 S랭크를 노립니다.",
        en: "A Pokemon Snap homage: ride an on-rails course and photograph mask-wearing perverts ('Papillons') with your camera. Aim for high-scoring shots and S-rank each course.",
      },
      howTo: [
        { ko: "파피용은 화이트(50점, 고정)·레드(150점, 빠르게 이동)·블루(250점, 잠깐 출몰)·골든(최고 희귀)으로 나뉩니다. 점수 높은 개체를 우선 노리세요.", en: "Papillons come in White (50 pts, stationary), Red (150, fast-moving), Blue (250, brief appearances), and the rarest Gold — prioritize the high-value ones." },
        { ko: "피사체를 화면 중앙에 두고 줌인하면 점수가 높습니다. 빨강·금색 개체는 특히 점수가 크니 놓치지 마세요.", en: "Keep the subject centered and zoom in for more points — red and gold ones are worth the most, so don't miss them." },
        { ko: "골든 파피용은 '오노 미치오' 포즈를 취합니다. 팔이 'N' 모양을 만드는 순간 찍으면 보너스 점수를 받습니다.", en: "The Gold Papillon strikes an 'Ono Michio' pose — snap it the instant his arms form the 'N' shape for bonus points." },
      ],
      videos: [
        { title: { ko: "시코 스냅 전 코스 S랭크", en: "Sicko Snap all courses (S Rank)" }, url: YT("VsbuhUSovcA") },
        { title: { ko: "시코 스냅 전 30마리 S랭크 (이지)", en: "Sicko Snap all 30 sickos, S rank (Easy)" }, url: YT("B1Lq4w6n_eQ") },
      ],
    },
    {
      slug: "miss-match",
      name: { ko: "미스 매치 (데이팅 앱)", en: "Miss Match (dating app)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "크림 앤 베리 (와이키키) — 챕터 3 '미스 매치' 서브스토리 후 해금", en: "Cream and Berry (Waikiki) — unlocks after the Chapter 3 'Miss Match' substory" },
      summary: {
        ko: "이치반이 데이팅 앱으로 여성과 매칭해 대화·데이트로 호감도를 채우는 연애 시뮬레이션 미니게임. 챕터 3에서 아로하 링크 해금 후 마치코 씨를 만나는 서브스토리로 풀립니다.",
        en: "A dating-sim minigame where Ichiban uses a dating app to match with women, then chats and dates to fill their affection meter. It opens after the Aloha Links unlock in Chapter 3 via the substory where you meet Machiko-san.",
      },
      howTo: [
        { ko: "상대마다 정답이 정해져 있고 질문은 매번 같습니다. 취향·취미가 대화에 단서로 나오니 그에 맞춰 답하세요.", en: "Each match has fixed correct answers and the questions repeat — listen for hints about their type and hobbies and answer to match." },
        { ko: "매칭 검색에는 매번 돈이 듭니다. 자신의 랭크(브론즈~플래티넘)에 맞는 요금제를 골라야 상위 랭크 상대와도 매칭됩니다.", en: "Each search costs money — pick a plan that matches your rank (Bronze to Platinum) so you can match with higher-rank users." },
        { ko: "프로필을 상대 취향에 맞춰 꾸미면 매치 미터가 잘 오릅니다. 막히면 치트시트로 정답을 미리 외우세요.", en: "Tailor your profile to the target's tastes to raise the Match Meter; for stubborn dates, memorize the answers from a cheat sheet." },
      ],
      videos: [
        { title: { ko: "미스 매치 100% 가이드", en: "Miss Match 100% guide" }, url: YT("umiHBD0bRvo") },
      ],
    },
    {
      slug: "alo-happy-tours",
      name: { ko: "알로 해피 투어 (직업 해금)", en: "Alo-Happy Tours (job unlocks)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "알로 해피 투어 사무소 (호놀룰루·이세자키 이진초)", en: "Alo-Happy Tours offices (Honolulu & Isezaki Ijincho)" },
      summary: {
        ko: "파이어 댄싱·서핑·요가 등 8가지 관광 투어를 즐기면 '계시(revelation)' 연출과 함께 새 직업이 해금되는 미니게임. 챕터 5에 호놀룰루 사무소가 열리며, 투어마다 비용과 특정 성격 스탯 요구치가 있습니다.",
        en: "A minigame where taking eight tourism tours (fire dancing, surfing, yoga, and more) unlocks new jobs via a 'revelation' sequence. The Honolulu office opens in Chapter 5; each tour costs money and needs certain personality-stat levels.",
      },
      howTo: [
        { ko: "투어마다 특정 성격 스탯 요구치가 있습니다. 음식·서브스토리로 성격 스탯을 미리 올려 두면 비싼 직업도 빨리 해금됩니다.", en: "Each tour needs minimum personality stats — raise them in advance via food and substories to unlock the pricier jobs sooner." },
        { ko: "고급 직업일수록 비용이 큽니다. 돈도코 섬·아르바이트로 자금을 모아 8개 투어를 모두 해금하세요.", en: "Higher-tier jobs cost more — bankroll all eight tours with Dondoko Island and part-time work to unlock the lot." },
        { ko: "8개 직업을 전부 풀면 '궁극의 알로 해피 액티비티'(서브스토리 48)가 열립니다. 컴플리션을 노린다면 전부 해금하세요.", en: "Unlocking all eight jobs opens 'The Ultimate Alo-Happy Activity' (Substory 48) — unlock them all if you're going for completion." },
      ],
      videos: [
        { title: { ko: "알로 해피 투어 전 직업 해금 (4K)", en: "All Alo-Happy Tours / job revelations (4K)" }, url: YT("F7-51Ni7s1k") },
      ],
    },
    {
      slug: "casino",
      name: { ko: "카지노 (블랙잭·룰렛·바카라 등)", en: "Casino (blackjack, roulette, baccarat, etc.)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "블랙 히비스커스 (하와이, 챕터 7 해금) 및 이진초 차이나타운 카지노", en: "Black Hibiscus (Hawaii, unlocks Chapter 7) and the Ijincho Chinatown casino" },
      summary: {
        ko: "블랙잭·룰렛·바카라·포커 등 정통 카지노 게임을 칩으로 즐기는 도박장. 칩을 상품으로 교환하는 컴플리션 보상이 있어 대량의 칩을 모으는 게 목표입니다. 베팅은 저·고·VIP 스테이크로 나뉩니다.",
        en: "A casino floor with classic table games — blackjack, roulette, baccarat, poker — played with chips. Completion rewards come from trading chips for prizes, so the goal is amassing a big chip stack. Betting splits into low, high, and VIP stakes.",
      },
      howTo: [
        { ko: "블랙잭은 21에 가깝게 만들되 넘기지 않는 게 핵심입니다. 딜러 업카드가 7 이상이면 17까지, 6 이하면 안전하게 멈추는 베이식 전략을 따르세요.", en: "In blackjack, get close to 21 without busting — follow basic strategy: hit toward 17 if the dealer shows 7+, stand safe if they show 6 or less." },
        { ko: "칩 효율이 가장 좋은 건 블랙잭/바카라입니다. 룰렛은 운에 크게 좌우되니 칩 파밍은 테이블 게임 위주로 가세요.", en: "Blackjack and baccarat give the best chip efficiency; roulette is far swingier, so farm chips at the table games." },
        { ko: "안정적으로 불어나면 VIP 스테이크로 옮겨 단위 베팅을 키우면 칩 수집 속도가 빨라집니다.", en: "Once you're up consistently, move to VIP stakes to raise your unit bets and speed up chip collection." },
      ],
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "Revolve 바 (호놀룰루)·Survive 바 (이세자키 이진초)", en: "Revolve Bar (Honolulu) & Survive Bar (Isezaki Ijincho)" },
      summary: {
        ko: "노트를 판정 타이밍에 맞춰 입력하는 리듬게임. 다수의 신곡과 시리즈 명곡이 수록되어 있으며, 전곡 일정 점수 이상이 컴플리션 조건입니다.",
        en: "A timing rhythm game with a fresh batch of songs plus series classics. Hitting a target score on every track is the completion condition.",
      },
      howTo: [
        { ko: "노트가 판정 링에 정확히 겹치는 순간 입력하세요. 음악 박자보다 화면 표시를 믿는 게 정확합니다.", en: "Input exactly as the note overlaps the judgment ring — trust the on-screen cue over the music's beat." },
        { ko: "막히는 곡은 풀콤보 영상으로 입력 패턴을 외우면 고득점이 안정적입니다.", en: "For stubborn songs, memorize the pattern from a full-combo video for a steady high score." },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트 (Darts Live)", en: "Darts (Darts Live)" },
      category: { ko: "술집·바", en: "Bar games" },
      difficulty: 2,
      location: { ko: "하와이·이진초의 바", en: "Bars in Hawaii & Ijincho" },
      summary: {
        ko: "01(301 등)과 카운트업/센터 카운트업 모드가 있는 다트 게임. 흔들리는 조준 레티클을 타이밍 맞춰 던집니다.",
        en: "Darts with 01 modes (e.g. 301) and Count-Up / Center Count-Up. Time your throw as the swaying reticle crosses the target.",
      },
      howTo: [
        { ko: "조준점이 목표(불스아이/트리플20)를 지나는 순간 릴리스합니다.", en: "Release the instant the reticle crosses your target (bullseye or triple-20)." },
        { ko: "01은 무리하게 트리플을 노리지 말고 안정적인 20점·불로 정확히 0까지 깎으세요.", en: "In 01 don't force triples — steady 20s and bulls that bring you to exactly zero win it." },
      ],
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 4,
      location: { ko: "마작장 (이세자키 이진초)", en: "Mahjong parlors (Isezaki Ijincho)" },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 까다롭지만 한 가지 패턴만 알면 컴플리션은 충분히 넘깁니다. 토너먼트 입상 시 현금 보상도 있습니다.",
        en: "Standard Japanese riichi mahjong — tricky if you don't know the rules, but one pattern is enough for completion, with cash rewards for placing in tournaments.",
      },
      howTo: [
        { ko: "손패를 닫은 채(펑/치 금지) 유지해 리치를 선언할 수 있게 하세요.", en: "Keep your hand fully closed (never call Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 '탄야오'를 노립니다. 텐파이가 되면 리치 선언 → 역이 자동으로 붙어 화료.", en: "Chase Tanyao (only simples 2-8); declare Riichi at tenpai and a yaku attaches automatically." },
        { ko: "컴플리션은 큰 점수가 아니라 화료 자체가 목적이니 빠른 화료 위주로 가세요.", en: "Completion only needs wins, not big scores — prioritize fast hands." },
      ],
    },
    {
      slug: "arcade",
      name: { ko: "아케이드 (스파이크아웃·버추어 파이터 3 등)", en: "Arcade (SpikeOut, Virtua Fighter 3, etc.)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "게임센터 (하와이·이세자키 이진초)", en: "Arcades (Hawaii & Isezaki Ijincho)" },
      summary: {
        ko: "스파이크아웃·버추어 파이터 3·세가 배스 피싱 같은 레트로 세가 이식작을 즐길 수 있는 게임센터. UFO 캐처(인형뽑기)도 함께 있습니다.",
        en: "An arcade with retro SEGA ports like SpikeOut, Virtua Fighter 3, and Sega Bass Fishing, plus UFO Catcher claw machines.",
      },
      howTo: [
        { ko: "스파이크아웃은 벨트스크롤 액션입니다. 잡기·날리기로 적을 한데 모아 군중을 정리하세요.", en: "SpikeOut is a beat-'em-up — grab and throw to bunch enemies together and clear crowds." },
        { ko: "UFO 캐처는 발톱이 경품을 조금이라도 출구 쪽으로 미는 위치를 노려 여러 번 시도하세요.", en: "For UFO Catcher, aim where the claw nudges the prize toward the chute and retry — patience pays." },
      ],
    },
  ],
};
