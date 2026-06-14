import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Detailed minigame guides for Like a Dragon: Ishin! (龍が如く 維新! 極).
// Bakumatsu-era spin-off set in Kyo (Kyoto). Difficulty is rated for the
// completion notebook / "The Man Who Does It All"-style grind, not casual play.
// Cross-referenced against community guides and video walkthroughs.
export const likeADragonIshinMinigames: MinigamesData = {
  appId: 1805480,
  intro: {
    ko: "막부 말기 교토를 무대로 한 외전. 컴플리션 노트와 「모든 플레이 스팟 제패」를 노린다면 아래 종목을 한 번씩은 모두 건드려야 합니다. 대부분 한 번만 플레이하면 인정되지만, 어나더 라이프·도박·부채춤은 깊이가 있어 영상까지 함께 보면 훨씬 수월합니다. 플레이 스팟 아이콘(보라색)은 대부분 3장 이후 라쿠나이·라쿠가이에서 열립니다.",
    en: "A Bakumatsu-era spin-off set in Kyo (Kyoto). For the completion notebook and the 'play every spot' goal, you'll need to touch every entry below at least once. Most only require a single play to register, but Another Life, the gambling tables, and Buyo Dancing have real depth — the attached videos make them far smoother. Play-spot icons (purple) mostly open up in Rakunai/Rakugai from Chapter 3 onward.",
  },
  minigames: [
    {
      slug: "another-life",
      name: { ko: "어나더 라이프", en: "Another Life" },
      category: { ko: "생활 시뮬", en: "Life Sim" },
      difficulty: 4,
      location: { ko: "후시미 외곽 료마의 별장", en: "Ryoma's villa outside Fushimi" },
      summary: {
        ko: "료마가 하루카의 빚을 갚기 위해 별장에서 농사·요리·낚시·교역을 하는 종합 생활 시뮬. 시리즈의 카무로초 별장/유스타시아의 후신격으로, Ishin 미니게임의 핵심입니다.",
        en: "A full life sim where Ryoma works a country villa — farming, cooking, fishing, and trading — to pay off Haruka's family debt. It's the heart of Ishin's minigame spread, the spiritual successor to the series' apartment/management modes.",
      },
      howTo: [
        { ko: "3~4장에 해금됩니다. 먼저 텃밭에서 다이콘·오이·당근 같은 빠른 작물을 돌려 안정적인 수입원을 만드세요.", en: "Unlocks around Chapter 3–4. Start by cycling fast crops (daikon, cucumber, carrot) in the garden for a steady income base." },
        { ko: "신사에서 미덕(Virtue)을 소비해 밭 크기·재배 속도·수확량을 키우면 후반 효율이 급상승합니다.", en: "Spend Virtue at the shrine to expand the plot and improve growth speed/yield — late-game efficiency snowballs." },
        { ko: "요리는 손질·불 조절·국물 붓기·생선 굽기 리듬 게임의 묶음입니다. 퍼펙트를 노리면 음식 품질과 하루카 호감도가 올라갑니다.", en: "Cooking is a bundle of rhythm games (chopping, fire-stoking, pouring stock, grilling). Perfect timing raises meal quality and Haruka's affection." },
        { ko: "집 안 책장에서 교역 주문을 받아 작물·요리·생선을 비싸게 팔아 빚을 갚으며 진행하세요.", en: "Use the bookcase indoors to take trading orders — sell produce, meals, and fish at a premium to pay down the debt." },
        { ko: "최고 수익 작물은 인삼(고려인삼)입니다. 미덕 1만을 들여 해금하면 고급 주문 1건당 약 4만 5천 몬을 받으니, 밭이 커진 뒤 인삼 칸을 2칸 정도 상시 확보하세요. (고급 주문은 보통 인삼 1개만 요구)", en: "Ginseng is the single most profitable crop: it costs 10,000 Virtue to unlock, but high-end orders pay ~45,000 mon each, and those orders usually need only one ginseng — once your plot is large, keep about two squares dedicated to it." },
        { ko: "그냥 파는 것보다 「교역 주문」을 채우는 쪽이 훨씬 비쌉니다. 같은 재료라도 주문으로 넘기면 수익과 미덕을 함께 얻으니 항상 주문 우선으로 처리하세요.", en: "Filling a trade order pays far more than selling the same item directly — orders also grant Virtue, so always route surplus into orders first." },
        { ko: "요리 리듬 게임은 랜덤이 아니라 패턴이 고정되어 있습니다. 한 번 외워두면 매번 퍼펙트가 가능하고, 전 과정 퍼펙트 시 효과가 2배인 「프리미엄」 요리가 나옵니다.", en: "The cooking rhythm games are not randomized — the timing is fixed, so once you memorize a recipe you can nail it every time; a flawless run yields a 'Premium' dish with doubled effects." },
        { ko: "업그레이드 우선순위는 초반 밭 확장 1~2단계를 최우선으로, 빠른 작물(다이콘 등)로 미덕을 모으세요. 비료는 빠른 작물에 낭비하지 말고 성장이 느린 작물에만 쓰는 게 효율적입니다.", en: "Upgrade priority: rush the first two Farm Expansion levels while grinding Virtue with fast crops (daikon, etc.). Don't waste fertilizer on fast crops — save it for slow-growing ones." },
      ],
      videos: [
        { title: { ko: "어나더 라이프 농사 가이드", en: "Another Life farming guide" }, url: YT("5BCSwtPpgHQ") },
      ],
    },
    {
      slug: "buyo-dancing",
      name: { ko: "부채춤 (부요)", en: "Buyo Dancing" },
      category: { ko: "음악·리듬", en: "Music / Rhythm" },
      difficulty: 3,
      location: { ko: "라쿠나이 니치부자 극장", en: "Nichibuza theater, Rakunai" },
      summary: {
        ko: "Ishin 전용 리듬 미니게임. 노래방과 비슷하게 화면 가이드에 맞춰 버튼을 타이밍에 누릅니다. 막부 말기 분위기의 일본 전통 무용이 테마입니다.",
        en: "An Ishin-exclusive rhythm game themed on traditional Japanese dance. Like karaoke, you time button presses to an on-screen guide.",
      },
      howTo: [
        { ko: "3장 이후 라쿠나이 북동쪽 큰 보라색 건물 남쪽으로 가면 「니치부자의 새 팬」 서브스토리로 해금됩니다.", en: "From Chapter 3, approach the south side of the large purple building in NE Rakunai to trigger the 'Nichibuza's Newest Fan' substory that unlocks it." },
        { ko: "흰 막대가 원 끝에 닿는 순간 해당 방향/버튼을 누르세요. 「Beautiful」 판정이 최고 등급입니다.", en: "Press the matching direction/button the instant the white bar reaches the end of the circle — 'Beautiful' is the top grade." },
        { ko: "비기너는 4버튼이지만 상위 난이도는 8버튼으로 늘어나니, 컴플리션만 노린다면 쉬운 곡부터 클리어하세요.", en: "Beginner uses 4 buttons; higher difficulties double to 8. For completion only, clear the easy songs first." },
        { ko: "곡의 기본 리듬은 「탄-탄-타타탄」입니다. 버튼 입력도 대부분 이 박자를 따라가니, 멜로디를 흥얼거리며 박자를 몸에 익히면 「Beautiful」 판정이 훨씬 쉬워집니다.", en: "The songs follow a 'tan-tan ta-ta-tan' rhythm and the prompts mostly track that beat — hum the melody to internalize the timing and 'Beautiful' grades come far more easily." },
        { ko: "히트 게이지를 가득 채우면 「공(gong)」 소리와 함께 「쇼스토퍼」 버튼이 떠 큰 점수를 얻습니다.", en: "Filling the Heat gauge triggers a 'gong' and a Showstopper prompt for a big point burst." },
        { ko: "스틱으로 부채를 끝까지 옮기는 EX 부채춤은 4000점을 주지만, 콤보가 끊겼거나 콤보가 15 미만일 때만 쓰세요. 콤보가 길면 그냥 노트를 치는 편이 점수가 더 높습니다.", en: "The EX fan dance (move the fan to the end with the stick) is worth 4,000 points, but only use it when your combo is broken or under 15 — with a long combo, just hitting notes normally scores more." },
      ],
      videos: [
        { title: { ko: "부채춤 플레이 가이드", en: "Buyo Dancing gameplay guide" }, url: YT("EBlH8xF75oE") },
        { title: { ko: "부채춤 미니게임 영상", en: "Buyo Dancing mini-game" }, url: YT("piJMr8shFoU") },
        { title: { ko: "전 곡 100% 퍼펙트 (게이샤 난이도)", en: "100% Perfect on every song (Geisha difficulty)" }, url: YT("Fl0bmzOTUvU") },
      ],
    },
    {
      slug: "singing",
      name: { ko: "노래 (노래 주점)", en: "Singing" },
      category: { ko: "음악·리듬", en: "Music / Rhythm" },
      difficulty: 2,
      location: { ko: "라쿠나이의 노래 주점", en: "Singing bars in Rakunai" },
      summary: {
        ko: "시리즈 노래방의 막부 말기판. 화면 가이드에 맞춰 4버튼 리듬으로 노래합니다. 캐주얼하게 즐기기 좋고 컴플리션도 쉬운 편입니다.",
        en: "A Bakumatsu-flavored take on series karaoke — sing along with a 4-button rhythm guide. Casual and easy to clear for completion.",
      },
      howTo: [
        { ko: "타깃이 가이드 링에 정확히 겹칠 때 버튼을 눌러야 「Perfect」 판정이 납니다.", en: "Hit the button when the marker overlaps the guide ring exactly for a 'Perfect' grade." },
        { ko: "컴플리션은 한 곡 완주로 충분합니다. 점수 욕심보다 노트를 놓치지 않는 데 집중하세요.", en: "Completion only needs you to finish one song — focus on not missing notes rather than chasing score." },
      ],
    },
    {
      slug: "cee-lo",
      name: { ko: "친치로린 (주사위)", en: "Cee-lo (Cho-Han dice)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "라쿠가이 도박장", en: "Gambling den, Rakugai" },
      summary: {
        ko: "주사위 3개를 밥공기에 던져 나오는 족보로 승부하는 길거리 도박. 운 요소가 크지만 규칙이 단순해 한 판이면 인정됩니다.",
        en: "A street dice game where three dice are thrown into a bowl and scored by combinations. Heavily luck-based but simple — one round registers it.",
      },
      howTo: [
        { ko: "같은 눈 3개(트리플)나 4-5-6은 즉시 승리, 1-2-3은 즉시 패배입니다.", en: "A triple or 4-5-6 is an instant win; 1-2-3 is an instant loss." },
        { ko: "두 눈이 같고 나머지 하나가 「출목」이 되며, 그 숫자가 높을수록 유리합니다.", en: "When two dice match, the odd one out is your 'point' — the higher it is, the better." },
      ],
    },
    {
      slug: "koi-koi",
      name: { ko: "코이코이 (화투)", en: "Koi-Koi (Hanafuda)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "라쿠가이 도박장", en: "Gambling den, Rakugai" },
      summary: {
        ko: "화투(하나후다) 카드로 족보(야쿠)를 만드는 2인 게임. 규칙을 익히면 안정적으로 이길 수 있습니다.",
        en: "A two-player hanafuda card game where you build scoring combinations (yaku). Reliable wins once you learn the rules.",
      },
      howTo: [
        { ko: "손패와 밭의 패를 월(月)이 같은 것끼리 맞춰 가져옵니다. 같은 달 카드를 짝지어 수집하세요.", en: "Match a card from your hand to a field card of the same month to capture both — collect by month." },
        { ko: "야쿠가 완성되면 「코이코이(계속)」로 점수를 키우거나 「쇼부(승부)」로 즉시 정산할 수 있습니다. 컴플리션은 욕심 부리지 말고 작은 야쿠에서 쇼부하세요.", en: "When a yaku forms, choose 'Koi-Koi' to keep going for more or 'Shobu' to cash in. For completion, take the small yaku and call Shobu." },
      ],
    },
    {
      slug: "oicho-kabu",
      name: { ko: "오이쵸카부", en: "Oicho-Kabu" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "라쿠가이 도박장", en: "Gambling den, Rakugai" },
      summary: {
        ko: "카드 합의 끝자리를 9에 가깝게 만드는 일본식 바카라 계열 도박. 규칙이 단순해 빠르게 인정됩니다.",
        en: "A baccarat-like Japanese card game where you aim for a hand total whose last digit is closest to 9. Simple and quick to register.",
      },
      howTo: [
        { ko: "패 합계의 일의 자리만 점수가 됩니다(예: 15 → 5). 9가 「카부」로 최고점입니다.", en: "Only the ones digit of your total counts (e.g. 15 → 5). A 9 ('Kabu') is the best score." },
        { ko: "합이 낮으면 한 장 더 받을지 결정하세요. 6~7 정도면 멈추는 게 무난합니다.", en: "Decide whether to draw a third card on a low total — standing on a 6 or 7 is usually safe." },
      ],
    },
    {
      slug: "poker",
      name: { ko: "포커", en: "Poker" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 2,
      location: { ko: "라쿠가이 도박장", en: "Gambling den, Rakugai" },
      summary: {
        ko: "표준 5카드 드로 포커. 서양 도박이지만 도박장에서 즐길 수 있으며, 한 판이면 컴플리션에 인정됩니다.",
        en: "Standard five-card draw poker, available at the gambling den. A single hand registers it for completion.",
      },
      howTo: [
        { ko: "쓸 만한 패(페어 이상)는 남기고 나머지를 교환해 족보를 노립니다.", en: "Keep anything usable (a pair or better) and swap the rest to chase a stronger hand." },
        { ko: "컴플리션은 승패와 무관하니, 한 라운드만 끝까지 진행하면 됩니다.", en: "Completion ignores win/loss — just play one round through to the end." },
      ],
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 5,
      location: { ko: "라쿠나이 마작장", en: "Mahjong parlor, Rakunai" },
      summary: {
        ko: "표준 일본 리치 마작. 규칙을 모르면 시리즈 최대 난관이지만, 한 패턴만 알면 컴플리션은 넘깁니다.",
        en: "Standard Japanese riichi mahjong — the series' biggest wall if you don't know the rules, but one pattern is enough for completion.",
      },
      howTo: [
        { ko: "손패를 닫은 채(펑/치 없이) 유지해야 리치를 선언할 수 있습니다.", en: "Keep your hand fully closed (no Pon/Chi) so you can declare Riichi." },
        { ko: "2~8 숫자패만 모으는 「탄야오」를 노리세요. 텐파이가 되면 리치 선언으로 역이 붙습니다.", en: "Chase Tanyao (simples 2–8). When you're one tile from a complete hand, declare Riichi to attach a yaku." },
        { ko: "컴플리션은 큰 점수가 아니라 화료(승리) 자체가 목적입니다. 빠른 화료 위주로 진행하세요.", en: "Completion only needs a win, not a big score — prioritize fast hands." },
        { ko: "규칙 설정에서 「쿠이탄(먹은 탄야오 인정)」과 「적 도라」를 켜고 「2판 縛り(2판 묶음)」는 끄세요. 펑·치로 탄야오를 빠르게 완성할 수 있어 화료가 훨씬 쉬워집니다.", en: "In the rules, turn on Kuitan (open Tanyao allowed) and Red Dora, and disable the 2-han minimum — this lets you Pon/Chi your way to a fast open Tanyao, making a win much easier." },
        { ko: "시간 단축을 위해 「반장(半荘)」 대신 「동풍전(東風戦, Half Game/East-only)」으로 짧게 돌리는 것을 추천합니다.", en: "Play the shorter East-only (Half Game) format rather than a full hanchan to keep matches from dragging." },
      ],
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "보드", en: "Board" },
      difficulty: 4,
      location: { ko: "라쿠나이 쇼기장", en: "Shogi parlor, Rakunai" },
      summary: {
        ko: "일본 장기. 잡은 말을 다시 놓는 「持ち駒(모치고마)」 규칙이 체스와 다른 핵심입니다.",
        en: "Japanese chess — the key twist from Western chess is dropping captured pieces back onto the board.",
      },
      howTo: [
        { ko: "왕을 지키는 「囲い(가코이)」 진형을 먼저 갖추세요. 미노가코이가 입문용으로 무난합니다.", en: "Build a castle (gakoi) around your king first — Mino castle is the easiest starter." },
        { ko: "잡은 말은 즉시 재투입할 수 있으니 적진 깊숙이 떨어뜨려 압박하세요.", en: "Drop captured pieces deep into enemy territory to apply pressure." },
        { ko: "컴플리션은 1승이면 충분합니다. 어려우면 약한 상대를 고르세요.", en: "Completion needs just one win — pick a weaker opponent if you're struggling." },
      ],
    },
    {
      slug: "chicken-racing",
      name: { ko: "치킨 레이싱 (병아리 경주)", en: "Chicken Racing" },
      category: { ko: "도박·베팅", en: "Gambling / Betting" },
      difficulty: 2,
      location: { ko: "라쿠가이", en: "Rakugai" },
      summary: {
        ko: "어느 닭이 빠를지 골라 돈을 거는 베팅 미니게임. 후반 자금벌이로도 유명하며, 한 번만 베팅하면 컴플리션에 인정됩니다.",
        en: "A betting mini-game where you wager on which chicken is fastest. A well-known money farm later on; a single bet registers it for completion.",
      },
      howTo: [
        { ko: "3장 이후 라쿠가이에서 이용할 수 있습니다. 각 닭의 능력치와 배당을 보고 베팅하세요.", en: "Available in Rakugai from Chapter 3. Check each chicken's stats and odds before wagering." },
        { ko: "배당이 낮은(인기) 닭이 안정적이며, 자금벌이를 노린다면 능력치 높은 닭에 꾸준히 거세요.", en: "Low-odds (favorite) chickens are safer; for grinding money, bet consistently on the high-stat birds." },
        { ko: "닭 선택 시 ①컨디션(화살표가 위면 최상), ②최근 성적(세 자리 숫자 = 직전 순위들), ③거리 적성(L/M/S)이 이번 레이스 거리와 맞는지를 보세요. 컨디션이 회복된 강한 닭이 가장 안전합니다.", en: "When picking a bird, check (1) Condition (an up arrow = peak), (2) Past Results (the three-digit number = its recent finishing places), and (3) distance aptitude (L/M/S) matching this race's length — a strong bird that has recovered to good condition is the safest pick." },
        { ko: "확실한 자금벌이: 건물 밖에서 세이브 → 강한 닭 하나를 1착으로 고정해 그 닭이 1등인 모든 엑잭타(연승식) 조합에 300으로 베팅 → 성공하면 세이브, 실패하면 리로드. 1500표를 도박장에서 플래티넘 접시로 교환해 에비스 전당포에 팔면 약 3료 7500몬이 됩니다.", en: "Reliable money farm: save outside the arena, lock one strong bird as 1st place, bet 300 on every Exacta combination with that bird winning, then save on a win and reload on a loss. Exchange 1,500 tags at the Gambling Den for a Platinum Plate and sell it to the Ebisu pawnbroker for ~3 ryo 7,500 mon." },
      ],
      videos: [
        { title: { ko: "치킨 레이싱 가이드", en: "Chicken Racing guide" }, url: YT("04DO5If8D-w") },
      ],
    },
    {
      slug: "fishing",
      name: { ko: "낚시", en: "Fishing" },
      category: { ko: "아웃도어", en: "Outdoors" },
      difficulty: 2,
      location: { ko: "어나더 라이프 별장 인근 등", en: "Near the Another Life villa and other spots" },
      summary: {
        ko: "물고기 그림자 경로에 미끼를 두고 입질을 유도하는 간소화된 낚시. 어나더 라이프 교역용 재료를 모으기에도 좋습니다.",
        en: "A simplified fishing minigame: place your lure in the fish's path to draw a bite. Also a good source of ingredients for Another Life trading.",
      },
      howTo: [
        { ko: "물고기 그림자가 미끼와 교차할 때 미끼가 멈춰 있어야 관심을 끕니다.", en: "Keep the lure still so it's stationary when the fish's silhouette crosses it to attract attention." },
        { ko: "입질 후 정해진 타이밍에 당겨 챔질하세요. 큰 물고기는 줄 텐션을 관리하며 끌어올립니다.", en: "Hook on the prompt after a bite, then reel in larger fish while managing line tension." },
      ],
    },
  ],
};
