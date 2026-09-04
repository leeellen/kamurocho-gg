import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza Kiwami 2. Rules, thresholds and completion-list
// rows are taken from ゲーム攻略マン's per-play-spot pages (cited on each
// entry) rather than written from memory; difficulty is rated for the
// completion grind, not for casual play.
export const yakuzaKiwami2Minigames: MinigamesData = {
  appId: 3717340,
  intro: {
    ko: "Yakuza Kiwami 2는 캐바레 클럽 그랑프리와 마지마 건설(클랜 크리에이터)이라는 두 개의 대형 사이드 콘텐츠를 중심으로 미니게임 밀도가 높은 작품입니다. 컴플리트 리스트와 「달성목록 100%」를 노린다면 아래 종목을 모두 한 번씩은 건드려야 합니다. 각 항목의 달성 조건과 수치는 출처 링크의 공략 페이지에서 확인한 것입니다.",
    en: "Yakuza Kiwami 2 is built around two massive side-modes — the Cabaret Club Grand Prix and Majima Construction — on top of a dense minigame lineup. For the Completion List and the 100% achievement you have to touch every entry below at least once. The conditions and numbers on each are taken from the guide pages linked on it.",
  },
  minigames: [
    {
      slug: "cabaret-club-grand-prix",
      name: { ko: "캐바레 클럽 그랑프리 (신·물장사 아일랜드)", en: "Cabaret Club Grand Prix" },
      category: { ko: "경영 시뮬레이션", en: "Management sim" },
      difficulty: 4,
      location: { ko: "소텐보리 — 캬바쿠라 「포시샤인」", en: "Four Shine, Sotenbori" },
      summary: {
        ko: "4장 후반 포시샤인을 인수하는 이벤트로 튜토리얼이 열리고, 그랑프리 자체는 6장부터 참가할 수 있습니다. 프레시 → 파라다이스 → 이그제큐티브 → 밀리어네어 → 파이널 챔피언십 순으로 다섯 개 리그를 올라갑니다.",
        en: "The tutorial fires late in Chapter 4 when Four Shine is taken over, but the Grand Prix itself only opens in Chapter 6. Five leagues in order: Fresh, Paradise, Executive, Millionaire, then the Final Championship.",
      },
      howTo: [
        { ko: "캐스트는 구인·메인 진행·서브스토리 세 경로로 늘립니다. 구인은 뽑을수록 비용이 단계적으로 오르고, 돈을 내고도 아무도 안 오는 경우가 있으니 자금에 여유가 있을 때만 돌리세요.", en: "Cast come from three places: recruiting, story progress, and substories. Recruiting costs more each time and can return nobody at all, so only spin it when you can afford a blank." },
        { ko: "드레스업은 플래티넘 캐스트에게만 열립니다. 머리·화장·드레스를 바꾸면 외모 수치가 오르고, 한 번 산 아이템은 이후 무료로 다시 선택할 수 있습니다.", en: "Dress-up is Platinum-cast only. Changing hair, make-up and dress raises their looks, and anything you have bought once can be re-selected for free." },
        { ko: "여섯 명의 데이트 이벤트는 서브스토리 No.69~74와 그대로 이어집니다(코유키·카나·AIKA·쇼코·유아·키라라). 캐바레 쪽만 밀면 서브스토리가 막히니 병행하세요.", en: "Six hostess date events are substories No.69-74 (Koyuki, Kana, AIKA, Shoko, Yua, Kirara), so pushing only the club side leaves those substories stuck." },
      ],
      videos: [
        { title: { ko: "캐바레 클럽 공략 팁", en: "Cabaret Club guide: tips & tricks" }, url: YT("-dBV_78Pw2Y") },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 新・水商売アイランド", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/nightlife-island/" },
      achievementSlug: "lexus2_cabaret_island_gp_all_clear",
    },
    {
      slug: "clan-creator",
      name: { ko: "마지마 건설 (신·클랜 크리에이터)", en: "Majima Construction (Clan Creator)" },
      category: { ko: "전략 시뮬레이션", en: "Strategy sim" },
      difficulty: 4,
      location: { ko: "카무로초 — 서공원 카무로초 힐즈 공사 현장", en: "Kamurocho Hills construction site, West Park" },
      summary: {
        ko: "카무로초 힐즈를 노리는 악덕 부동산으로부터 현장을 지키는 방어형 시뮬레이션입니다. 5장 후반에 습격 이벤트로 튜토리얼이 한 번 돌고, 이후 서공원 공사 현장의 마지마 고로에게 말을 걸면 언제든 플레이할 수 있습니다.",
        en: "A defence sim: hold the Kamurocho Hills site against a crooked developer. A raid late in Chapter 5 runs the tutorial once, after which Goro Majima at the West Park site lets you play whenever.",
      },
      howTo: [
        { ko: "미션을 클리어하면 「마지마 건설 사장상」이 나오고, 이걸 써서 종업원을 강화합니다. 강화 없이 진도만 빼면 후반 미션에서 벽을 만납니다.", en: "Clearing missions pays out Majima Construction President Awards, which is what upgrades your workers. Rushing missions without spending them walls you later." },
        { ko: "진행 중 나가슈 리키와 초노 마사히로의 대화 이벤트가 발생합니다. 여기서 올바른 선택지를 고르면 추가로 사장상을 받으므로 그냥 넘기지 마세요.", en: "Riki Choshu and Masahiro Chono turn up for conversation events as you progress; picking the right line there pays extra President Awards." },
        { ko: "상대 진영은 실존 프로레슬러들로 구성돼 있고, 부대 편성·종업원 강화·시설 강화 세 가지를 함께 올려야 미션 난도를 따라갑니다.", en: "The opposition are real-life pro wrestlers, and you need squad composition, worker upgrades and facility upgrades moving together to keep up with the mission curve." },
      ],
      videos: [
        { title: { ko: "클랜 크리에이터 100% 트로피 가이드", en: "Clan Creator 100% trophy guide" }, url: YT("eOFW4VIh1bU") },
        { title: { ko: "클랜 크리에이터 20만 점 돌파 (포어맨 트로피)", en: "Clan Creator 200,000+ points (Foreman trophy)" }, url: YT("Ct3utgkJPsA") },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 新・クランクリエイター", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/clan-creator/" },
      achievementSlug: "lexus2_clan_creater_clear",
    },
    {
      slug: "golf",
      name: { ko: "골프 (요코보리 골프 센터)", en: "Golf (Yokobori Golf Center)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "소텐보리 — 요코보리 골프 센터 (1플레이 1,000엔)", en: "Yokobori Golf Center, Sotenbori (¥1,000 a round)" },
      summary: {
        ko: "니어핀 챌린지와 빙고 챌린지 두 종목이 있습니다. 달성목록은 니어핀 초급·중급·상급에서 각각 합계 300pt 이상, 니어핀에서 컵인 1회, 빙고 3라인 — 총 다섯 칸입니다.",
        en: "Two events: Nearest-the-Pin and Bingo. Five completion-list rows — 300+ total points on Nearest-the-Pin at beginner, intermediate and advanced, one hole-in-one there, and a 3-line bingo.",
      },
      howTo: [
        { ko: "샷은 ○로 시작해 파워를 ○로 정하고, 마지막 임팩트 게이지에서 다시 ○를 누릅니다. 빨간 저스트 임팩트 구간에서 멈추면 똑바로 날아가고, 양옆 노란 구간은 각각 훅과 슬라이스가 됩니다.", en: "Press circle to start, circle again to set power, then circle on the impact gauge. Stopping in the red just-impact band sends it straight; the yellow bands either side hook it left or slice it right." },
        { ko: "임팩트 게이지에서 ○를 아예 안 누르면 헛스윙 처리됩니다. 반대로 파워를 정한 뒤라도 ×를 누르면 샷 자체를 취소할 수 있으니, 바람이 바뀌었으면 취소하고 다시 겨누세요.", en: "Missing the impact input entirely counts as a whiff, but cross cancels the shot even after power is locked — if the wind shifted, cancel and re-aim." },
        { ko: "빙고 챌린지는 9장의 패널을 쳐서 가로세로를 맞추는 방식이라, 니어핀처럼 컵을 노리는 게 아니라 패널 위치에 맞춰 파워를 조절하는 종목입니다.", en: "Bingo is a different skill: you are knocking out a 3x3 grid of panels to line them up, so you are matching power to a panel rather than aiming at a cup." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 ゴルフセンター", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/golf-center.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터 (요시다 배팅 센터)", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: { ko: "카무로초 — 요시다 배팅 센터 (1플레이 300엔)", en: "Yoshida Batting Center, Kamurocho (¥300 a round)" },
      summary: {
        ko: "홈런 코스와 챌린지 코스가 있습니다. 홈런 코스는 10구 중 7개 이상을 홈런으로 보내면 A랭크로 공략 처리되고, 챌린지 코스는 10구 안에 코스별 지정 점수를 넘겨야 합니다.",
        en: "Home Run and Challenge courses. Home Run wants 7 or more of the 10 balls out for an A rank; Challenge wants you to beat that course's target score within the same 10 balls.",
      },
      howTo: [
        { ko: "좌스틱(또는 터치패드 스와이프)으로 커서를 코스에 맞춥니다. 투구가 시작되면 커서가 점점 줄어드는데, 커서가 공 크기와 겹치는 순간 ○(또는 터치패드에서 손 떼기)로 휘두르는 게 정확한 타이밍입니다.", en: "Line the cursor up with the pitch using the left stick or a touchpad swipe. The cursor shrinks as the ball comes in — swing with circle, or by lifting off the touchpad, at the moment it matches the ball's size." },
        { ko: "챌린지 코스는 홈런을 노리는 게 아니라 시설 안에 설치된 패널을 맞히는 종목입니다. 맞힌 패널에 따라 안타·홈런 판정이 나오므로 점수판을 보고 노릴 패널을 정하세요.", en: "Challenge is not about distance: you are hitting the panels set up around the cage, and which panel you hit decides whether it scores as a hit or a homer." },
        { ko: "구속은 코스마다 정해져 있습니다. 초급 1은 135 → 145 → 155km/h 순으로 올라가는 스트레이트 위주라 타이밍만 익히면 재현할 수 있습니다.", en: "Pitch speeds are scripted per course — Beginner 1 opens with straights at 135, 145 and 155 km/h — so once you learn the timing the run repeats." },
      ],
      videos: [
        { title: { ko: "전 야구 챌린지 클리어 (홈런·챌린지 코스)", en: "All baseball challenges (home run / challenge courses)" }, url: YT("tzPHyCBmfE8") },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 バッティングセンター", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/batting-center.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 5,
      location: { ko: "카무로초 — 마작 라라바이 4F / 소텐보리 — 마작 리치로", en: "Mahjong Lullaby 4F (Kamurocho), Mahjong Reachro (Sotenbori)" },
      summary: {
        ko: "달성목록이 다섯 칸으로 가장 길게 잡아먹는 종목입니다. 전 탁·대회 1위, 론/쯔모로 5회·10회·30회 화료, 그리고 도박 마작 누적 10만 엔.",
        en: "Five completion rows and the longest grind here: first place at every table and tournament, winning a hand by ron or tsumo 5, 10 and 30 times, and ¥100,000 total from gambling mahjong.",
      },
      howTo: [
        { ko: "이카사마 아이템 「무소의 패」를 먼저 확보하세요. 잡거빌딩 3층 사무소 구석과 3층 복도 안쪽에 떨어져 있고, 서브스토리 No.31 「후루마키의 수행 4」 보상으로도 하나 받습니다.", en: "Get the Peerless Tile cheat item first: one lies in the corner of the third-floor office in the multi-tenant building, another at the end of that floor's corridor, and substory No.31 \"Komaki's Training 4\" hands you one." },
        { ko: "30회 화료가 사실상의 벽입니다. 점수를 키우기보다 싸게 빨리 화료하는 편이 카운트가 빨리 차므로, 역만을 노리지 말고 리치·탕야오 수준으로 계속 돌리세요.", en: "The 30-win row is the real wall. Cheap fast hands tick it faster than big ones, so keep to riichi and tanyao rather than chasing yakuman." },
        { ko: "누적 10만 엔은 고레이트 탁에서 몇 판만 이겨도 채워집니다. 화료 횟수를 채우는 김에 고레이트에서 돌리면 두 칸을 동시에 진행할 수 있습니다.", en: "The ¥100,000 row falls out of a handful of wins at a high-rate table, so grind the win-count rows there and both progress at once." },
      ],
      videos: [
        { title: { ko: "마작 입문 가이드 (Yakuza 시리즈)", en: "Mahjong for beginners (Yakuza)" }, url: YT("VwnEujAKE3A") },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 麻雀", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/majan.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 4,
      location: { ko: "카무로초 — 노상 장기 / 소텐보리 — 케이마, 노상 장기", en: "Street shogi (Kamurocho), Keima and street shogi (Sotenbori)" },
      summary: {
        ko: "달성목록은 「무르기를 쓰지 않고 1승」 한 칸뿐이라, 규칙만 알면 의외로 빨리 끝납니다. 그 외에 순위전과 시련 돌파 1~10이 별도 콘텐츠로 준비돼 있습니다.",
        en: "Only one completion row — win a game without using takeback — so it is far shorter than it looks. Beyond that there is a ranking league and ten Trial challenges.",
      },
      howTo: [
        { ko: "달성목록 조건은 승리 자체가 아니라 「무르기 없이」입니다. 가장 약한 상대를 골라 한 판만 무르기 없이 이기면 그 칸은 끝납니다.", en: "The row is about not taking a move back, not about the strength of the opponent — beat the weakest one once, cleanly, and it is done." },
        { ko: "장기 포인트는 환금 아이템으로 바꿉니다. 동 접시 10P, 은 접시 100P, 금 접시 1,000P, 플래티넘 접시 2,000P 순이라 포인트가 쌓이면 위쪽 경품이 훨씬 효율적입니다.", en: "Shogi points buy trade-in dishes — bronze 10P, silver 100P, gold 1,000P, platinum 2,000P — so bank points and take the higher tiers." },
        { ko: "규칙을 모른다면 시련 돌파부터 손대세요. 정해진 국면에서 최선수를 찾는 문제 형식이라 실전보다 배우기 쉽습니다.", en: "If you do not know the rules, start with the Trials: they are set positions asking for the best move, which teaches faster than a full game." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 将棋", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/syogi.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "gambling-hall",
      name: { ko: "도박장 (코이코이·오이초카부)", en: "Gambling Hall (Koi-Koi & Oicho-Kabu)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "카무로초 — 류구성 3F / 소텐보리 — 요츠데라 회관", en: "Dragon Palace 3F (Kamurocho), Yotsudera Hall (Sotenbori)" },
      summary: {
        ko: "달성목록은 코이코이 누적 1,000장, 오이초카부 누적 1,000장 두 칸입니다. 이카사마 아이템을 챙기면 사실상 작업이 됩니다.",
        en: "Two completion rows: 1,000 chips banked at koi-koi and 1,000 at oicho-kabu. With the cheat items in hand it stops being a gamble.",
      },
      howTo: [
        { ko: "코이코이용 이카사마는 「행운의 화투」입니다. 양쪽 도시 코인로커, 카페 테이블 밑, 호텔 입구 바닥에서 나오고, 하루카 신뢰도 랭크 B 보상으로도 받습니다.", en: "Koi-koi's cheat is the Lucky Hanafuda: coin lockers in both cities, under a cafe table, on the floor at a hotel entrance, and as the reward for Haruka trust rank B." },
        { ko: "오이초카부는 「아라시의 양갱」과 「도싯핀즈」 두 종류를 씁니다. 우에마츠구미 사무소 입구 바닥, 건물 2층 개인실 구석, 4층(옥상) 크리스마스 트리 근처, 킷사 알프스 뒤 쓰레기통 근처에 떨어져 있습니다.", en: "Oicho-kabu uses two: Arashi Yokan and Doshippins. They lie at the Uematsu Family office entrance, in the corner of a second-floor private room, near the rooftop Christmas tree on 4F, and by the bins behind Cafe Alps." },
        { ko: "1,000장은 「누적」이라 잃어도 다시 벌면 됩니다. 판돈을 크게 걸어 단번에 채우려다 밑천을 날리기보다, 이카사마를 켠 채 중간 판돈으로 도는 편이 빠릅니다.", en: "The 1,000 is cumulative winnings, not a balance, so losses do not undo it — steady mid-size bets with a cheat active beat swinging for it in one hand." },
      ],
      source: [
        { label: "ゲーム攻略マン — 龍が如く極2 こいこい", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/koikoi.html" },
        { label: "ゲーム攻略マン — 龍が如く極2 おいちょかぶ", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/oichokabu.html" },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "casino",
      name: { ko: "카지노 (블랙잭·포커)", en: "Casino (Blackjack & Poker)" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 2,
      location: { ko: "카무로초 — 사이노카와라, 류구성 2F / 소텐보리 — 요츠데라 회관", en: "Sai no Kawara and Dragon Palace 2F (Kamurocho), Yotsudera Hall (Sotenbori)" },
      summary: {
        ko: "블랙잭 누적 1,000장, 포커 누적 1,000장 두 칸입니다. 사이노카와라와 요츠데라 회관에는 고레이트 탁이 있어 회전이 훨씬 빠릅니다.",
        en: "Blackjack 1,000 chips and poker 1,000 chips. Sai no Kawara and Yotsudera Hall carry high-rate tables, which is where this goes quickest.",
      },
      howTo: [
        { ko: "블랙잭 이카사마는 「BJ의 부적」(원하는 카드를 부름)과 「버스트의 부적」(딜러를 버스트시킴) 두 개입니다. 전자는 하루카 신뢰도 랭크 S 보상이기도 합니다.", en: "Blackjack has two cheats — the BJ Amulet, which calls the card you want, and the Bust Amulet, which busts the dealer. The first is also the Haruka trust rank S reward." },
        { ko: "포커 이카사마 「로열 조커」는 하루카 신뢰도 랭크 SSS 보상입니다. 코인로커, 요츠바 침구원 2층 입구 옆 계단, 센료 거리 북쪽 건물 계단 위에서도 주울 수 있습니다.", en: "Poker's Royal Joker is the Haruka trust rank SSS reward, and also lies in the coin lockers, on the stairs beside the Yotsuba clinic's second-floor entrance, and up the stairs of a building on N Senryo Ave." },
        { ko: "류구성 2층은 저레이트 전용입니다. 1,000장을 노린다면 처음부터 사이노카와라나 요츠데라 회관의 고레이트 탁으로 가세요.", en: "Dragon Palace 2F is low-rate only — if you are going for the 1,000, start at the high-rate tables in Sai no Kawara or Yotsudera Hall." },
      ],
      source: [
        { label: "ゲーム攻略マン — 龍が如く極2 ブラックジャック", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/blackjack.html" },
        { label: "ゲーム攻略マン — 龍が如く極2 ポーカー", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/poker.html" },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초 — 카라오케관 (2곡 500엔) / 소텐보리 — 카라오케 스낵 (1,000엔 무제한)", en: "Karaoke-kan, Kamurocho (2 songs ¥500); Karaoke Snack, Sotenbori (¥1,000, unlimited)" },
      summary: {
        ko: "□·△·○·× 타이밍 입력 리듬 게임입니다. 달성목록은 90점 이상을 1곡·3곡·8곡에서 내는 세 칸입니다.",
        en: "A rhythm game on square, triangle, circle and cross. Three completion rows: score 90+ on one song, on three songs, and on eight songs.",
      },
      howTo: [
        { ko: "연습은 소텐보리 카라오케 스낵에서 하세요. 1,000엔에 가게를 나갈 때까지 무제한이라, 곡당 500엔이 드는 카무로초 카라오케관보다 훨씬 쌉니다.", en: "Practise at the Sotenbori Karaoke Snack: ¥1,000 buys unlimited songs until you leave, against ¥500 per two songs at Karaoke-kan." },
        { ko: "길게 누르는 구간과 연타 구간이 섞여 있습니다. 90점 라인은 이 구간에서 갈리므로, 노트가 라인에 닿는 순간이 아니라 커서에 겹치는 순간을 기준으로 잡으세요.", en: "Songs mix hold sections with mash sections, and the 90-point line is decided there. Time to the moment the note overlaps the cursor, not to when it reaches the lane." },
        { ko: "8곡 칸은 서로 다른 곡 여덟 개가 필요합니다. 익숙한 한 곡만 반복해도 첫 칸밖에 안 차니, 쉬운 곡부터 여덟 개를 돌리세요.", en: "The eight-song row needs eight different songs, so repeating one favourite only ever fills the first row." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 カラオケ", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/karaoke.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 클럽 세가 극장 앞 광장점 2F / 소텐보리 — DARTSLIVE (스테일)", en: "Club SEGA Theater Square 2F (Kamurocho), DARTSLIVE at Stijl (Sotenbori)" },
      summary: {
        ko: "1플레이 200엔. 01·CRICKET·COUNT UP 세 종목이 있고 달성목록은 다섯 칸입니다 — 전 룰 플레이, 라이벌 전원 격파, 대전 누적 10승, 해트트릭 3회, 해트트릭 5회.",
        en: "¥200 a play, three modes (01, Cricket, Count Up) and five completion rows: play every rule, beat every rival, win 10 matches, and land 3 then 5 hat-tricks.",
      },
      howTo: [
        { ko: "해트트릭은 한 라운드에서 세 발을 모두 BULL에 꽂는 것입니다. 5회 칸은 대전이 아니라 1인 플레이로도 카운트되므로, 라이벌을 기다리지 말고 혼자 돌리는 게 빠릅니다.", en: "A hat-trick is all three darts in the bull in one round. The 5-hat-trick row counts in single play, so grind it alone rather than waiting on rivals." },
        { ko: "던질 때 왼쪽에 파워 게이지가 계속 오르내립니다. 베스트 존에서 ○를 누르는 게 기본이고, 그래도 쓰는 화살의 성능에 따라 약간의 흔들림이 남습니다.", en: "A power gauge sweeps up and down on the left; press circle in the best zone. Even then the dart set you have equipped adds its own scatter." },
        { ko: "싱글 20점, 더블 40점, 트리플 60점, BULL과 더블 BULL은 모두 50점입니다. 01에서는 트리플 20보다 BULL이 안정적입니다.", en: "Single 20 scores 20, double 40, triple 60, and both bull rings score 50 — in 01 the bull is the steadier target than treble 20." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 ダーツ", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/darts.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 (버추어 파이터 2·전뇌전기 버추얼 온)", en: "Club SEGA (Virtua Fighter 2, Cyber Troopers Virtual-On)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 클럽 세가 중도 거리점·극장 앞 광장점 / 소텐보리 — 클럽 세가 소텐보리점", en: "Club SEGA Nakamichi St. and Theater Square (Kamurocho), Club SEGA Sotenbori" },
      summary: {
        ko: "아케이드 기판을 통째로 이식한 종목입니다. 두 게임 모두 원작 그대로라 조작이 미니게임 수준이 아니며, 달성목록은 플레이 자체보다 클리어를 요구합니다.",
        en: "Two arcade boards emulated whole. Both play like the originals rather than like minigames, and the completion rows want clears rather than attempts.",
      },
      howTo: [
        { ko: "버추어 파이터 2는 원작 아케이드판이라 CPU 난도가 그대로입니다. 한 캐릭터로 콤보 하나만 확실히 익혀 두는 편이 여러 기술을 섞는 것보다 안정적입니다.", en: "Virtua Fighter 2 is the arcade build with its original CPU difficulty — one reliable combo on one character beats trying to play it properly." },
        { ko: "버추얼 온은 좌우 스틱 조작이 패드에 매핑돼 있어 이동·대시가 익숙해지기 전까지 어색합니다. 옵션에서 조작 설명을 먼저 확인하세요.", en: "Virtual-On maps its twin-stick controls onto the pad, so movement and dashing feel wrong until you read the control screen in options." },
        { ko: "두 기판은 카무로초 두 지점과 소텐보리 지점에 모두 있습니다. 스토리 중 어느 도시에 있든 진행할 수 있으니 이동 김에 한 판씩 끼워 넣으세요.", en: "Both cabinets are in all three Club SEGA branches, so you can chip away at them in whichever city the story has you in." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 プレイスポット", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "ufo-catcher",
      name: { ko: "UFO 캐처 (인형 뽑기)", en: "UFO Catcher" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가 중도 거리점·극장 앞 광장점, 요시다 배팅 센터 / 소텐보리 — 클럽 세가", en: "Club SEGA Nakamichi St. and Theater Square plus the Yoshida Batting Center (Kamurocho), Club SEGA Sotenbori" },
      summary: {
        ko: "3플레이 500엔. 달성목록은 경품 1개·5개·10개 획득 세 칸이라, 같은 인형을 여러 번 뽑아도 카운트가 오릅니다.",
        en: "¥500 for three tries. Three completion rows — win 1, 5 and 10 prizes — and duplicates of the same plush all count.",
      },
      howTo: [
        { ko: "조작은 ○를 두 번 누르는 것뿐입니다. 첫 번째로 가로 라인, 두 번째로 안쪽 라인을 정하면 나머지는 자동이라, 실제로 조절할 수 있는 건 두 좌표뿐입니다.", en: "You press circle twice — once to set the horizontal line, once for the depth — and the rest is automatic, so those two coordinates are the whole game." },
        { ko: "플레이 횟수가 남아 있어도 ×로 중단할 수 있지만, 암이 움직이는 중에는 안 됩니다. 가로 이동 전이나 암이 배출구로 돌아올 때만 누를 수 있습니다.", en: "Cross bails out with tries left, but not while the arm is moving — only before the horizontal step, or as the arm returns to the chute." },
        { ko: "기기마다 경품 구성이 다릅니다. 특정 인형이 목표라면 네 대를 다 돌아보고 그 인형이 있는 대에서 뽑으세요.", en: "Each cabinet stocks a different set, so if you want a particular plush, check all four rather than feeding the nearest one." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 UFOキャッチャー", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/ufo-catcher.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "toylets",
      name: { ko: "토일레츠 (Toylets)", en: "Toylets" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가 극장 앞 광장점 화장실 / 소텐보리 — 클럽 세가 화장실", en: "Club SEGA restrooms — Theater Square (Kamurocho) and Sotenbori" },
      summary: {
        ko: "세가가 실제로 만들었던 소변기 설치형 게임기를 그대로 옮긴 종목입니다. 2장부터 클럽 세가 앞의 정장 차림 남자 마치다에게 말을 걸면 해금되고, 「코에서 우유」와 「북풍과 태양과 나」 두 게임 × 난이도 3단계 = 달성목록 여섯 칸입니다.",
        en: "A port of the urinal-mounted arcade unit SEGA really made. From Chapter 2, talk to Machida, the suited man outside Club SEGA, to unlock it. Two games at three difficulties each makes six completion rows.",
      },
      howTo: [
        { ko: "소변 Pt가 없으면 플레이 자체가 안 됩니다. 첫 플레이 뒤 마치다에게 다시 말을 걸면 귀중품 「토일레츠 센서」를 주는데, 이게 Pt를 수치로 보여 줍니다. 최대 3,000pt이고 500pt부터 플레이할 수 있습니다.", en: "You cannot play without enough Pt. Talk to Machida again after your first go and he hands over the Toylets Sensor, which shows the number: it caps at 3,000 and 500 is the minimum to play." },
        { ko: "Pt는 클럽 세가 안 자판기 음료로 채웁니다. 차 계열이 압도적으로 효율이 좋아서 진한 차·호지차(500ml)·이에몬 특차·흑우롱차가 각 1,200pt, 호지차(280ml)와 「오차」가 900pt입니다. 커피·탄산은 200~500pt에 그칩니다.", en: "Top Pt up from the vending machines inside Club SEGA. Teas are far and away the best — Koi-cha, 500 ml hojicha, Iyemon Tokucha and black oolong give 1,200 Pt each, 280 ml hojicha and plain tea 900 — while coffee and soft drinks give 200-500." },
        { ko: "「북풍과 태양과 나」는 3,000pt를 채운 뒤 시작해 R2를 계속 누르고만 있으면 세 난이도 모두 클리어됩니다. 보상은 난이도순으로 타우리너, 타우리너+, 살충제입니다.", en: "North Wind and Me clears at all three difficulties by starting at 3,000 Pt and simply holding R2. Rewards are Tauriner, Tauriner+ and Insecticide by difficulty." },
        { ko: "「코에서 우유」는 규칙을 알아야 이깁니다. 상대 게이지 색에 자기 세기를 맞추고(상대가 노랑이면 노랑까지 올리고, 초록으로 내리면 같이 내림), 그 상태로 각성 게이지를 상대보다 먼저 채운 다음 세기를 MAX로 올리면 승리합니다. L2가 약하게, R2가 강하게입니다.", en: "Milk From the Nose needs the trick: match your gauge colour to the opponent's — they go yellow, you go yellow; they drop to green, you drop — fill your awakening gauge before they do, then push the strength gauge to max. L2 weakens, R2 strengthens." },
        { ko: "「어려움」 난이도는 잔량이 빠듯해서 세기를 크게 흔들면 도중에 떨어집니다. 색을 맞출 때도 최소한으로만 조절하세요.", en: "On Hard you barely have the volume for it, so swinging the strength wildly runs you dry — match colours with the smallest inputs you can." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 トイレッツ", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/toylets.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "gravure-photo-shoot",
      name: { ko: "그라비아 촬영 스튜디오", en: "Gravure Photo Studio" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "카무로초 — 공원 앞 거리 잡거빌딩 2F", en: "Multi-tenant building 2F, Park Blvd., Kamurocho" },
      summary: {
        ko: "셔터 타이밍 게임이 아니라 대화 선택지 게임입니다. 제한 시간 안에 □·△·○로 단어를 골라 문장을 만들고, 조합이 맞으면 화면 좌상단 호감도 게이지가 오릅니다. 게이지를 가득 채우면 그 코스가 클리어되고 다음 코스가 열립니다.",
        en: "Not a shutter-timing game — a dialogue game. Inside a time limit you pick words with square, triangle and circle to build a sentence; the right combination fills the affection gauge in the top left, and filling it clears that course and unlocks the next.",
      },
      howTo: [
        { ko: "공원 앞 거리를 지나다 스튜디오 직원이 「초회는 홍보를 겸해 무료」라며 말을 걸어오는 이벤트로 해금됩니다. 달성목록은 아오야마 히카루 지명, 하시모토 리나 지명, 두 사람의 보상 영상 시청까지 네 칸입니다.", en: "A studio employee stops you on Park Blvd. offering a free first session; that unlocks it. Four completion rows: book Hikaru Aoyama, book Rina Hashimoto, and watch each of their reward videos." },
        { ko: "시간 제한이 부담되면 터치패드로 「중단」 메뉴를 열어 두세요. 메뉴가 열려 있는 동안 타이머가 멈추므로 선택지를 느긋하게 읽을 수 있습니다.", en: "If the timer rushes you, open the pause menu on the touchpad — the clock stops while it is open, so you can read the options properly." },
        { ko: "코스는 요금이 다릅니다. 사복 코스 1·2가 각 3,000엔, 치어 코스가 6,000엔 식으로 올라가고, 클리어할 때마다 다음 코스와 의상이 열립니다.", en: "Courses cost more as they go — the two casual-wear courses are ¥3,000 each, the cheerleader course ¥6,000 — and each clear opens the next course and outfit." },
        { ko: "회상 목록을 전부 채우려면 같은 코스를 여러 번 돌아야 합니다. 대화 중 특정 조합에서만 열리는 회상이 있고, 보상 영상은 마지막 코스를 클리어해야 볼 수 있습니다.", en: "Filling the recollection list means replaying courses: some entries only unlock on specific word combinations, and the reward video needs the final course cleared." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 グラビア撮影スタジオ", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/gravure-photo-studio/" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
    {
      slug: "private-videos",
      name: { ko: "개인실 비디오 (비디오 마니아)", en: "Private Video Booths" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "카무로초 — 퓨전 / 소텐보리 — 간다라 (2편에 1,000엔)", en: "Fusion (Kamurocho) and Gandhara (Sotenbori) — ¥1,000 for two videos" },
      summary: {
        ko: "비디오 15편을 한 번씩 보면 「비디오 마니아」가 발동합니다. 3편은 처음부터 보유하고 있고 나머지 12편은 빔과 웍스 카미야마에서 각 2,800엔에 삽니다.",
        en: "Watch all 15 videos once for Video Maniac. Three are in stock from the start; the other twelve are ¥2,800 each from Beam and from Kamiyama.",
      },
      howTo: [
        { ko: "웍스 카미야마는 서브스토리 No.24 「무기 비디오 상인」을 클리어해야 비디오를 팔기 시작합니다. 이걸 미루면 절반이 잠긴 채로 남습니다.", en: "Kamiyama only starts selling once substory No.24 \"Weapon Video Merchant\" is cleared, and half the list is locked behind him." },
        { ko: "두 편은 시청만으로 능력이 해금됩니다. 「슈퍼 쿵푸맨」이 톤파의 마음가짐과 톤파의 극, 「경악! 필리핀의 비법」이 칼리 스틱 쪽입니다. 해금될 뿐이라 실제 습득에는 별도 경험치가 듭니다.", en: "Two teach abilities: Super Kung Fu Man unlocks Tonfa Mastery and Essence of Tonfa, The Filipino Ace the Kali Stick pair. They only unlock — you still buy them with EXP." },
        { ko: "「경악! 필리핀의 비법」은 8장 밀레니엄 타워에서 하야시 히로시와 싸운 뒤에야 입고됩니다. 그 전에 웍스 카미야마를 다 털어도 이 한 편만 남습니다.", en: "The Filipino Ace is only stocked after the Hiroshi Hayashi fight in Millennium Tower in Chapter 8, so clearing out Kamiyama earlier still leaves that one." },
        { ko: "서브스토리 No.15 「우츠룬데스」와 No.16 「비밀의 물건」에서 보는 「더러운 비디오」·「수상한 비디오」는 달성목록 15편에 들어가지 않습니다.", en: "The Dirty Video and Suspicious Video seen during substories No.15 and No.16 do not count toward the 15." },
      ],
      source: [
        { label: "ゲーム攻略マン — 龍が如く極2 個室ビデオ屋", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/private-videos.html" },
        { label: "GameFAQs — Yakuza Kiwami 2 Video Shops (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/218734-yakuza-kiwami-2/faqs/76366/video-shops" },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
    },
  ],
};

