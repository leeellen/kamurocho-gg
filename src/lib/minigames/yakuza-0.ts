import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza 0. Completion metrics, thresholds and the
// per-minigame technique are taken from CyricZ's GameFAQs guide, cited on each
// entry. Note that the metrics are split per character where the game splits
// them (karaoke, telephone cards) and shared where it does not.
export const yakuza0Minigames: MinigamesData = {
  appId: 2988580,
  intro: {
    ko: "Y0는 시리즈에서 미니게임 밀도가 가장 높은 작품입니다. 컴플리션 항목은 캐릭터별로 갈리는 것(가라오케·텔레폰 카드)과 공유되는 것이 섞여 있으니, 캐릭터를 바꿀 때마다 컴플리트 리스트를 열어 남은 줄부터 확인하세요. 디스코 15줄과 판타지 존 10만 점이 가장 오래 걸립니다.",
    en: "Yakuza 0 has the densest minigame lineup in the series. Some metrics are per character (karaoke, telephone cards) and some are shared, so check the Completion List each time you swap. Disco's fifteen rows and Fantasy Zone's 100,000 points are the longest hauls.",
  },
  minigames: [
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 5,
      location: { ko: "카무로초·소텐보리 — 마작장", en: "Mahjong parlours in Kamurocho and Sotenbori" },
      summary: {
        ko: "컴플리션 조건은 여섯 줄입니다. 10회 화료, 만관 5회, 하네만 1회, 리치 일발 1회, 잇쓰(일기통관) 1회, 그리고 마작으로 누적 1,000만 엔.",
        en: "Six rows: go out ten times, five mangan, one haneman, one riichi ippatsu, one full straight, and ¥10 million banked at mahjong.",
      },
      howTo: [
        { ko: "리치 일발과 잇쓰가 실질적인 벽입니다. 나머지는 계속 치다 보면 자연히 차므로, 이 두 줄을 의식하고 손을 만드세요.", en: "Riichi ippatsu and the full straight are the two that do not just happen — build for them deliberately; the rest accumulate on their own." },
        { ko: "잇쓰는 한 색으로 123·456·789를 모으는 역입니다. 배패에 같은 색 숫자가 다섯 종류 이상 있을 때만 노리고, 치는 그 세 뭉치 중 하나를 완성할 때만 하세요. 다른 조합을 치면 역이 사라집니다.", en: "Full straight needs 123, 456 and 789 in one suit — only chase it when the deal already holds five or more numbers of a suit, and only chi to finish one of those three runs." },
        { ko: "누적 1,000만 엔은 고레이트 탁에서 돌리는 편이 압도적으로 빠릅니다. 화료 횟수 줄과 동시에 진행되므로 처음부터 고레이트로 가세요.", en: "The ¥10 million row goes far faster at a high-rate table, and it advances alongside the win-count rows, so start there." },
      ],
      videos: [
        { title: { ko: "마작 입문 가이드 (Yakuza 0)", en: "Mahjong for beginners (Yakuza 0)" }, url: YT("VwnEujAKE3A") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Mahjong (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/mahjong" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "카무로초 센료 거리 「쇼텐(将天)」(기류, 1판 500엔) / 소텐보리 분자에몬스지의 장기 아저씨(마지마, 무료)", en: "Shoten parlour on Senryo Avenue, Kamurocho (Kiryu, ¥500 a game); the shogi old man on Bunzaemon Street, Sotenbori (Majima, free)" },
      summary: {
        ko: "컴플리션은 「무르기 없이 승리」 1회·3회·5회 세 줄입니다. 실력보다 무르기를 쓰지 않는 것이 조건이고, 가장 쉬운 「시련 답파 1」을 다섯 번 이겨도 채워집니다.",
        en: "Three rows: win without a take-back once, three times, five times. The condition is the take-back, not the skill — five wins on the easiest Challenge, No. 1, clear all three.",
      },
      howTo: [
        { ko: "쇼텐에는 순위전과 「시련 답파(試練踏破, 영문판 Shogi Challenge)」 1~10·최종 11판이 있습니다. 시련 답파는 특수한 초기 배치에서 CPU와 끝까지 두는 대국이고, 정해진 수로 끝나는 쓰메쇼기(詰将棋) 모드는 이 작품에 없습니다.", en: "Shoten offers ranked games and the Shogi Challenges (試練踏破) — eleven of them, 1–10 plus a final. Each is a full game against the CPU from a special starting position; there is no tsume-shogi (fixed mate puzzle) mode in this game." },
        { ko: "절대 무르기를 쓰지 마세요. 한 번이라도 쓰면 그 판은 조건에서 제외됩니다. 시련 답파 1은 플레이어가 압도적으로 유리하고, 같은 순서로 두면 CPU도 매번 같은 수를 둡니다.", en: "Never take a move back — one use disqualifies that game. Challenge No. 1 is heavily in your favour, and the CPU answers the same moves the same way every time." },
        { ko: "승리 포인트는 대전 포인트 + 待った 남은 횟수×50(최대 150) + 超待った 미사용 시 100입니다. 경품은 금 접시 200pt(에비스야에서 10만 엔), 플래티넘 접시 1,600pt(100만 엔) 두 가지뿐입니다. 장기왕 와타나베를 이기면 대국료가 무료가 됩니다.", en: "A win pays the match points + 50 per unused take-back (up to 150) + 100 if you never used the super take-back. The only prizes are the gold plate at 200 points (¥100,000 at Ebisu Pawn) and the platinum plate at 1,600 (¥1,000,000). Beat the Shogi King, Watanabe, and games become free." },
        { ko: "마지마 편 장기 아저씨는 실력을 묻는 선택지로 강함이 정해지고, 이기면 보상을 줍니다. 「そんなに無い」(10급) 田舎流派の目録×5, 「ぼちぼちかな」(6급) 合成繊維×10, 「それなりにある」(2급) ぼろぼろの羽織×3, 「プロレベル」(3단) 気吸いの手袋.", en: "Majima's shogi old man sets his strength by how you rate yourself, and pays out on a win: 「そんなに無い」 (10-kyu) 田舎流派の目録 ×5, 「ぼちぼちかな」 (6-kyu) 合成繊維 ×10, 「それなりにある」 (2-kyu) ぼろぼろの羽織 ×3, 「プロレベル」 (3-dan) 気吸いの手袋." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Shogi (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/shogi" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
        { label: "ゲーム攻略マン — 龍が如く0 将棋", url: "https://dswiipspwikips3.jp/yakuza0/syogi.html" },
        { label: "ダラゲ！ — 龍が如く0 将棋（試練踏破1の勝ち方）", url: "https://darage.com/guide/ryuzero/mini11.html" },
        { label: "龍が如く0 最速攻略wiki — 将棋（試練踏破の配置表）", url: "https://spwiki.net/ryuzero/wikis/66.html" },
        { label: "神ゲー攻略 — 龍が如く0 将棋", url: "https://kamigame.jp/ryugagotoku0/page/280056321867304838.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "시련 답파(試練踏破) — 11판", en: "Shogi Challenges — all 11" },
          note: { ko: "시련 답파는 CPU와 끝까지 두는 대국이라 CPU가 다른 수를 둘 수 있습니다. 그때는 待った로 되돌리거나 다시 시작하세요(단, 무르기를 쓴 판은 컴플리션에 안 들어갑니다). 1번만 ダラゲ!에 글과 그림 순서가 있고, 2번부터 최종까지는 글이나 그림으로 된 정답을 찾지 못해 NinjaAssassin333의 판별 영상을 붙였습니다. 판별 초기 배치·선후수·대전 포인트는 最速攻略wiki 표 하나에만 있는 정보입니다(일부 공략은 「試練突破」로 적지만 같은 모드입니다).", en: "Challenges are full games against the CPU, so it can deviate — take back (待った) or restart, remembering that a game with a take-back does not count for completion. Only No. 1 has a written, diagrammed line (Darage); for Nos. 2 through the final no text or image answer exists anywhere, so NinjaAssassin333's per-challenge videos are attached. Each challenge's starting set-up, move order and match points come from a single source, the Saisoku Kouryaku wiki table. Some guides call the mode 試練突破; it is the same thing." },
          puzzles: [
            { title: { ko: "1번 (대전 100pt)", en: "No. 1 (100 pt)" }, image: "/yakuza-0-shogi/trial-1-step-1.webp", images: ["/yakuza-0-shogi/trial-1-step-2.webp", "/yakuza-0-shogi/trial-1-step-3.webp", "/yakuza-0-shogi/trial-1-step-4.webp", "/yakuza-0-shogi/trial-1-step-5.webp", "/yakuza-0-shogi/trial-1-step-6.webp"], note: { ko: "자기 평수 / 상대 왕·보, 후수. 글과 그림으로만 나온 순서입니다(기보 없음). 왼쪽에서 3번째 보를 한 칸 올려 각 길을 열고 → 각을 그림 위치까지 단번에 올려 용마로 승격 → 비차 앞 보를 두 칸 올리고 비차를 두 수에 걸쳐 그림 위치로 → CPU가 가운데 보를 올리면 비차로 잡고 → CPU 옥이 그림 위치로 오면 비차를 옥의 줄까지 옮겨 승격(장군) → 옥이 왼쪽 위 구석으로 가면 용마를 네 수에 걸쳐 옥의 오른쪽 아래로 붙이면 외통.", en: "You: full set / CPU: king and pawns; you move second. Prose and diagrams only, no kifu: push the third pawn from the left one square to open the bishop → run the bishop up to the marked square and promote → push the pawn in front of the rook twice and bring the rook to the marked square in two moves → when the CPU pushes its centre pawn, take it with the rook → when the king reaches the marked square, slide the rook to its row and promote (check) → once the king runs to the top-left corner, walk the promoted bishop in four moves to just below-right of it for mate." } },
            { title: { ko: "2번 (대전 200pt)", en: "No. 2 (200 pt)" }, note: { ko: "자기 평수(平手) / 상대 왕·비차·각·보, 후수.", en: "You: full set / CPU: king, rook, bishop, pawns; you move second." }, video: YT("KwMJ8Sevb8o") },
            { title: { ko: "3번 (대전 300pt)", en: "No. 3 (300 pt)" }, note: { ko: "자기 왕·은 / 상대 왕·금, 선수.", en: "You: king, silver / CPU: king, gold; you move first." }, video: YT("B2uhaKDeiYM") },
            { title: { ko: "4번 (대전 400pt)", en: "No. 4 (400 pt)" }, note: { ko: "자기 평수 / 상대 왕·보 + 지닌 말 비차·각·금2·은2, 후수.", en: "You: full set / CPU: king, pawns, with rook, bishop, 2 golds, 2 silvers in hand; you move second." }, video: YT("6NDcflB9l-I") },
            { title: { ko: "5번 (대전 500pt)", en: "No. 5 (500 pt)" }, note: { ko: "자기 평수(비차·각이 용왕·용마로 승격된 상태) / 상대 왕·と금·계마·향차.", en: "You: full set with rook and bishop already promoted / CPU: king, tokins, knights, lances." }, video: YT("bes3uDo-vgw") },
            { title: { ko: "6번 (대전 600pt)", en: "No. 6 (600 pt)" }, note: { ko: "자기 왕·보9 / 상대 왕·금2, 선수.", en: "You: king, 9 pawns / CPU: king, 2 golds; you move first." }, video: YT("9pe-UlYMKv4") },
            { title: { ko: "7번 (대전 700pt)", en: "No. 7 (700 pt)" }, note: { ko: "자기 왕 + 지닌 말 비차·각 / 상대 비차·각 없음 + 지닌 말 보5, 선수.", en: "You: king, with rook and bishop in hand / CPU: no rook or bishop, 5 pawns in hand; you move first." }, video: YT("3hE2PAZuNUM") },
            { title: { ko: "8번 (대전 800pt)", en: "No. 8 (800 pt)" }, note: { ko: "자기 왕 + 지닌 말 비차·각·보3 / 상대 왕·금4·은3·향차3·보2, 선수.", en: "You: king, with rook, bishop, 3 pawns in hand / CPU: king, 4 golds, 3 silvers, 3 lances, 2 pawns; you move first." }, video: YT("AXsGvPMNS1Q") },
            { title: { ko: "9번 (대전 900pt)", en: "No. 9 (900 pt)" }, note: { ko: "자기 비차·각·계마 없음(보 3개 이동) + 지닌 말 보3 / 상대 평수(보 1개 적음), 선수.", en: "You: no rook, bishop or knights (3 pawns moved), 3 pawns in hand / CPU: full set minus one pawn; you move first." }, video: YT("0kpt1c1MB9Q") },
            { title: { ko: "10번 (대전 1,000pt)", en: "No. 10 (1,000 pt)" }, note: { ko: "자기 비차·각·계마 없음(보 3개 이동) + 지닌 말 보3 / 상대 왕·각2·금2·은2·계마2·향차2·보5 + 지닌 말 비차, 선수.", en: "You: no rook, bishop or knights (3 pawns moved), 3 pawns in hand / CPU: king, 2 bishops, 2 golds, 2 silvers, 2 knights, 2 lances, 5 pawns, rook in hand; you move first." }, video: YT("DOpFp08Mdo4") },
            { title: { ko: "최종 (대전 2,000pt)", en: "Final (2,000 pt)" }, note: { ko: "자기 왕·비차·각·금·은·보9 / 상대 평수, 선수.", en: "You: king, rook, bishop, gold, silver, 9 pawns / CPU: full set; you move first." }, video: YT("-yEfqd-eRHY") },
          ],
        },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "billiards",
      name: { ko: "당구", en: "Pool" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 — 당구장", en: "Pool halls in Kamurocho and Sotenbori" },
      summary: {
        ko: "컴플리션은 콤비네이션 샷 3회, 캐롬 샷 3회, 그리고 당구로 누적 1,000만 엔입니다. 경기 승패 자체는 조건이 아닙니다.",
        en: "Three combination shots, three carom shots, and ¥10 million banked. Winning games is not itself a requirement.",
      },
      howTo: [
        { ko: "캐롬은 큐볼이 목적구를 맞힌 뒤 다시 다른 공을 맞혀 그 공이 들어가는 샷, 콤비네이션은 목적구가 다른 공을 맞혀 그 공이 들어가는 샷입니다.", en: "A carom is cue to object ball then on to another ball, which drops. A combination is the object ball doing the hitting." },
        { ko: "우연히 나오길 기다리지 말고 혼자 플레이로 나인볼을 골라 공을 원하는 배치로 밀어 두세요. 큐볼을 일부러 포켓에 넣으면(스크래치) 다음 샷에서 원하는 자리에 놓을 수 있습니다.", en: "Do not wait for these in a match — Play Alone on nine-ball, nudge the balls into shape, and scratch on purpose so you can place the cue ball where you want it." },
        { ko: "누적 1,000만 엔은 고액 판돈으로 승부를 걸어야 채워집니다. 샷 조건 두 줄을 먼저 끝내고, 금액은 판돈이 큰 상대로 따로 도세요.", en: "The ¥10 million needs real stakes, so clear the two shot rows first and then farm the money against a high-stakes opponent." },
      ],
      videos: [
        { title: { ko: "당구 캐롬·콤비네이션 샷 공략", en: "Billiards: carom & combination shots" }, url: YT("UOR-DbgucxQ") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Pool (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/pool" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },        { label: "ダラゲ！ — 龍が如く0 ビリヤード（賭け詰めビリヤード）", url: "https://darage.com/guide/ryuzero/mini01.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "내기 트릭 당구(賭け詰めビリヤード) 정답 조준 — 9스테이지", en: "Trick-shot betting pool (賭け詰めビリヤード) aim — all 9 stages" },
          note: { ko: "ダラゲ! 1곳의 자료이고, 그림은 출처의 PS4판 정답 조준 화면입니다(점선이 큐볼 경로). 흰 큐볼로 빨간 목적구를 지정 포켓에 한 번에 넣으면 성공이고, 검은 공(파울 볼)에 닿거나 다른 포켓에 넣으면 실패입니다. 노란 보조구는 맞혀도 넣어도 괜찮습니다. 한 판에 3스테이지, 도전 횟수 5번이며 EASY를 깨면 NORMAL, NORMAL을 깨면 HARD가 열립니다. 판돈은 EASY 50만 엔부터, HARD 2,000만 엔을 걸고 3스테이지까지 깨면 1억 2,600만 엔(재도전할 때마다 4회까지 감액)입니다. 큐볼이 비뚤게 나가면 오른쪽 스틱을 정확히 아래로 당겼다 놓았는지 확인하세요.", en: "Single source, Darage; images are its PS4 answer-aim screens (the dotted line is the cue path). Sink the red object ball in the marked pocket in one shot with the white cue ball; touching a black foul ball or using another pocket fails. The yellow helper ball can be hit or potted freely. Each play is 3 stages with 5 attempts; clearing EASY opens NORMAL, then HARD. Stakes start at ¥500,000 on EASY; ¥20 million on HARD through stage 3 pays ¥126 million (the payout shrinks on each retry, up to four times). If shots drift, check you are pulling the right stick straight down before releasing." },
          puzzles: [
            { title: { ko: "EASY 스테이지 1", en: "EASY stage 1" }, image: "/yakuza-0-billiards/trick-031.webp", note: { ko: "너무 세게 치면 검은 공에 맞을 수 있으니 약하게 칩니다.", en: "Hit softly — too hard and the cue ball can reach a black ball." } },
            { title: { ko: "EASY 스테이지 2", en: "EASY stage 2" }, image: "/yakuza-0-billiards/trick-032.webp", note: { ko: "벽처럼 놓인 돈다발 띠를 표식으로 삼고 약하게 칩니다.", en: "Use the banknote-band walls as your guide and hit softly." } },
            { title: { ko: "EASY 스테이지 3", en: "EASY stage 3" }, image: "/yakuza-0-billiards/trick-033.webp", note: { ko: "벽처럼 놓인 돈다발 띠를 표식으로 삼고 약하게 칩니다.", en: "Use the banknote-band walls as your guide and hit softly." } },
            { title: { ko: "NORMAL 스테이지 1", en: "NORMAL stage 1" }, image: "/yakuza-0-billiards/trick-034.webp", note: { ko: "당구대 나무 테두리의 흰 무늬를 표식으로 삼고, 최대보다 조금 약하게 칩니다.", en: "Use the white marks on the wooden rail as your guide; just under full power." } },
            { title: { ko: "NORMAL 스테이지 2", en: "NORMAL stage 2" }, image: "/yakuza-0-billiards/trick-035.webp", note: { ko: "투명한 이미지 볼과 점프대 위쪽 사이에 틈이 조금 있는 정도가 최적입니다. 공의 가장 아래를 최대 힘으로 칩니다.", en: "Best with a small gap between the ghost ball and the top of the ramp; strike the very bottom of the ball at full power." } },
            { title: { ko: "NORMAL 스테이지 3", en: "NORMAL stage 3" }, image: "/yakuza-0-billiards/trick-036.webp", note: { ko: "조정이 아주 까다로워 이미지 볼이 조금만 어긋나도 실패합니다. 힘 게이지의 흰 부분이 화면 아래에 겹칠 정도로 칩니다.", en: "Very fiddly — any drift of the ghost ball fails. Power until the white part of the gauge meets the bottom of the screen." } },
            { title: { ko: "HARD 스테이지 1", en: "HARD stage 1" }, image: "/yakuza-0-billiards/trick-037.webp", note: { ko: "최대보다 조금 약하게(갈색 부분이 조금 보일 정도) 칩니다.", en: "Just under full power (a little of the brown still showing)." } },
            { title: { ko: "HARD 스테이지 2", en: "HARD stage 2" }, image: "/yakuza-0-billiards/trick-038.webp", note: { ko: "조정이 아주 까다로워 이미지 볼이 조금만 어긋나도 실패합니다. 최대보다 조금 약하게 칩니다.", en: "Very fiddly — any drift of the ghost ball fails. Just under full power." } },
            { title: { ko: "HARD 스테이지 3", en: "HARD stage 3" }, image: "/yakuza-0-billiards/trick-039.webp", note: { ko: "아래쪽 가운데 포켓의 살짝 왼쪽을 겨누면 됩니다. 힘은 최대로.", en: "Aim just left of the bottom-middle pocket, full power." } },
          ],
        },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초·소텐보리 — 클럽 세가 / 바", en: "Club SEGA and bars in both cities" },
      summary: {
        ko: "컴플리션은 해트트릭 10회와 다트로 누적 1,000만 엔 두 줄입니다.",
        en: "Two rows: ten hat-tricks, and ¥10 million banked at darts.",
      },
      howTo: [
        { ko: "해트트릭은 한 라운드에 세 발 모두 BULL입니다. 901 게임을 혼자 고르면 20라운드 동안 BULL만 노릴 수 있어 가장 빠릅니다.", en: "A hat-trick is three bulls in one round; a solo 901 game gives you twenty rounds of nothing but bull attempts." },
        { ko: "던지기는 왼쪽 스틱으로 조준한 뒤 오른쪽 스틱을 아래로 당겼다 놓습니다. 끝까지가 아니라 절반쯤까지 천천히 당겼다가 빠르게 놓는 것이 정확합니다.", en: "Aim with the left stick, then pull the right stick down and release — pull slowly to about halfway, not to the edge, and release quickly." },
        { ko: "다트는 키류·마지마가 따로 모읍니다. 최상급 「百選練磨のダーツ」(명중·안정·파워 모두 높음)는 내기 다트 첫 상대에게 3연승하면 에비스야에서 1,000만 엔에 팔고, 「スナイパーダーツ」는 다트를 1번 하면 에비스야에 100만 엔으로 나옵니다. 「ノーマル」은 1판, 「カスタム」은 10판 하면 점원이 줍니다(중단해도 됨).", en: "Kiryu and Majima collect darts separately. The best, 「百選練磨のダーツ」 (high accuracy, stability and power), goes on sale at Ebisu Pawn for ¥10M after three straight wins over your first betting opponent; 「スナイパーダーツ」 appears there for ¥1M after one game. The staff hand you 「ノーマル」 after one game and 「カスタム」 after ten (quitting early counts)." },
        { ko: "BULL은 다트 끝을 BULL 중심에 맞추고 강도 「中~強」(오른쪽 스틱을 끝까지 당겼다 놓기)으로 던지면 고성능 다트로 거의 100% 들어갑니다. 바깥쪽을 노릴수록 안쪽으로 쏠리니, 11·6·3·20의 더블은 다트 끝을 바깥 원의 가장 왼쪽·오른쪽·아래·위 끝에 맞추고, 트리플은 트리플과 더블 사이쯤에서 미세 조정하세요(ダラゲ!).", en: "For the bull, put the dart tip on its centre and throw medium-to-hard (pull the right stick all the way down and release) — with a good dart that is nearly 100%. Throws drift toward the centre the further out you aim, so for the 11, 6, 3 and 20 doubles put the tip on the very left, right, bottom and top of the outer ring; for trebles start halfway between treble and double and fine-tune (Darage)." },
        { ko: "01은 301을 2라운드에 끝내면 상급자에게도 집니다 — 20 트리플 5발 후 1, 또는 BULL 5발 후 17 트리플(51). 그 밖의 상대는 BULL 6발 후 1로 3라운드면 됩니다. 크리켓은 첫 턴에 20 트리플 3발(120점)로 시작해, CPU가 딴 숫자를 내 턴에 닫으면서 높은 점수 순(20→19→18→17 트리플→BULL→16 트리플)으로 쌓으면 지지 않습니다.", en: "In 01, finishing 301 in two rounds beats even the top players — five treble 20s then a 1, or five bulls then treble 17 (51). Against anyone else, six bulls then a 1 does it in three rounds. In Cricket, open with three treble 20s (120), then close whatever the CPU scores on your turn while banking in order of value (treble 20 → 19 → 18 → 17 → bull → treble 16) and you will not lose." },
        { ko: "조준이 맞기 전에 당기지 마세요. 왼쪽 스틱을 고정해도 손이 미세하게 흔들리므로 조준이 맞은 순간에 당겨야 합니다.", en: "Do not pull back before the aim is set: the hand wavers even with the stick held still." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Darts (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/darts" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },        { label: "ダラゲ！ — 龍が如く0 ダーツ", url: "https://darage.com/guide/ryuzero/mini02.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "내기 다트 상대 — 4명", en: "Betting darts opponents — all 4" },
          note: { ko: "ダラゲ! 1곳의 자료입니다. 2전째부터는 술을 마신 상태라 일정 간격으로 시야가 흔들리지만, 화면이 정상으로 돌아올 때를 기다려 조준하면 문제없습니다. 누적 1,000만 엔은 두 번째 상대에게 3연승하면 한 번에 채워집니다.", en: "Single source, Darage. From the second game you are drunk and the view sways periodically — wait for it to settle before aiming. Three straight wins over either second opponent fill the ¥10 million row in one go." },
          puzzles: [
            { title: { ko: "藤枝 牧男 (키류)", en: "藤枝 牧男 (Kiryu)" }, note: { ko: "출현: 「ヴィンセント」에서 다트를 1번 하면 가게 안에 나타남 · 룰 301 · 판돈 10만→40만→100만 엔(3연승 시 150만 엔 이득).", en: "Appears after one game of darts at Vincent · rules 301 · stakes ¥100k → ¥400k → ¥1M (¥1.5M profit for three straight wins)." } },
            { title: { ko: "的場 歩 (키류)", en: "的場 歩 (Kiryu)" }, note: { ko: "출현: 藤枝에게 3연승 · 룰 크리켓 · 판돈 100만→400만→1,000만 엔(3연승 시 1,500만 엔 이득).", en: "Appears after beating 藤枝 three times running · rules Cricket · stakes ¥1M → ¥4M → ¥10M (¥15M profit for three straight wins)." } },
            { title: { ko: "川上 タケル (마지마)", en: "川上 タケル (Majima)" }, note: { ko: "출현: 「BAR ステイル」에서 다트를 1번 · 룰 카운트업 · 판돈 10만→40만→100만 엔(3연승 시 150만 엔 이득).", en: "Appears after one game at BAR Stale · rules Count-Up · stakes ¥100k → ¥400k → ¥1M (¥1.5M profit)." } },
            { title: { ko: "矢澤 康太 (마지마)", en: "矢澤 康太 (Majima)" }, note: { ko: "출현: 川上에게 3연승 · 룰 501 · 판돈 100만→400만→1,000만 엔(3연승 시 1,500만 엔 이득).", en: "Appears after beating 川上 three times running · rules 501 · stakes ¥1M → ¥4M → ¥10M (¥15M profit)." } },
          ],
        },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 마하볼 / 소텐보리 — 볼링장", en: "Mach Bowl (Kamurocho) and the Sotenbori lanes" },
      summary: {
        ko: "컴플리션은 스트라이크 10회와 스플릿 게임으로 누적 1,000만 엔입니다.",
        en: "Two rows: ten strikes, and ¥10 million banked in split games.",
      },
      howTo: [
        { ko: "스트라이크는 1번 핀 옆의 「포켓」을 세게, 약간의 스핀과 함께 치는 것이 정석입니다. 스핀은 던지는 동안 왼쪽 스틱을 아주 살짝 기울여 겁니다.", en: "Strikes come from hitting the pocket beside the head pin hard with a little spin — nudge the left stick very slightly during the approach." },
        { ko: "공 선택은 방향키 위아래입니다. 가벼운 공은 제어가 쉽고 무거운 공은 힘이 세니, 스트라이크를 노릴 때는 무거운 쪽이 유리합니다.", en: "Up and down pick the ball: light is easier to steer, heavy hits harder — take heavy when you are hunting strikes." },
        { ko: "스플릿 게임은 열 가지 핀 조합을 각각 한 번의 투구로 처리하는 방식이고 공은 3개뿐입니다. 금액 조건은 여기서 걸므로 조합이 쉬운 것부터 고르세요.", en: "Split Game gives ten pin combinations, each to be cleared in one throw, with a stock of three balls — the money row runs through here, so take the easy combinations first." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Bowling (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/bowling" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },        { label: "ダラゲ！ — 龍が如く0 ボウリング（スプリットゲーム）", url: "https://darage.com/guide/ryuzero/mini07.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "스플릿 게임 10종 투구 세팅", en: "Split Game — throw setup for all 10" },
          note: { ko: "ダラゲ! 1곳의 세팅입니다. 참가비 500만 엔, 전부 성공하면 상금 합계 2,400만 엔입니다. 누적 1,000만 엔 조건은 받은 상금만 세므로 적자가 나도 번 금액은 쌓입니다. 마지막 「トラピゾイド」(500만)를 안정적으로 깰 수 있으면 손해 볼 일이 없습니다. 위치는 방향키 한 번에 0.5칸 이동(왼쪽 끝 -3.5, 오른쪽 끝 +3.5)하며, 방향은 레인 가운데의 ▲ 표시를 기준으로 합니다. 첫 그림은 남은 핀(빨강) 배치, 둘째 그림이 화살표를 멈출 방향입니다. 스트라이크는 6파운드 · 초기 위치에서 왼쪽 2칸 · 거의 직진(안쪽 왼쪽에서 세 번째 ▲) · 힘 90 이상 · 회전 없음으로 냅니다.", en: "Single source, Darage. Entry costs ¥5 million and clearing every split pays ¥24 million in total. The ¥10 million row counts only winnings, so it fills even if you are net down. Once you can reliably clear the last one, Trapezoid (¥5 million), you cannot lose money. Each d-pad press shifts position 0.5 (far left −3.5, far right +3.5); direction is read off the ▲ marks mid-lane. The first image shows the standing pins (red), the second where to stop the direction arrow. For strikes: 6-lb ball, two presses left of start, nearly straight (third ▲ from the left at the far end), power 90+, no spin." },
          puzzles: [
            { title: { ko: "1. ベビースプリット", en: "1. ベビースプリット" }, image: "/yakuza-0-bowling/dss016.webp", images: ["/yakuza-0-bowling/mini026.webp"], note: { ko: "상금 100万엔. 공 6파운드 · 위치 -1.5(방향키 왼쪽 3번) · 방향은 두 번째 그림 · 힘 100 · 회전 0. 3번과 10번 핀 사이를 노립니다.", en: "Prize ¥1000,000. Ball 6 lb · position -1.5(d-pad left ×3) · direction as in the second image · power 100 · spin 0. Aim between pins 3 and 10." } },
            { title: { ko: "2. インザダーク", en: "2. インザダーク" }, image: "/yakuza-0-bowling/dss017.webp", images: ["/yakuza-0-bowling/mini028.webp"], note: { ko: "상금 100万엔. 공 16파운드 · 위치 0(초기 위치) · 방향은 두 번째 그림 · 힘 100 · 회전 0. 2번 핀에 공이 튕겨 8번을 놓칠 수 있으니 무거운 공을 최대 힘으로 던지세요.", en: "Prize ¥1000,000. Ball 16 lb · position 0(start position) · direction as in the second image · power 100 · spin 0. Pin 2 can deflect the ball off the 8, so throw a heavy ball at full power." } },
            { title: { ko: "3. ポイズンアイビー", en: "3. ポイズンアイビー" }, image: "/yakuza-0-bowling/dss018.webp", images: ["/yakuza-0-bowling/mini029.webp"], note: { ko: "상금 150万엔. 공 6파운드 · 위치 -2.5(방향키 왼쪽 5번) · 방향은 두 번째 그림 · 힘 100 · 회전 0. 3번과 6번 핀 사이쯤을 노립니다.", en: "Prize ¥1500,000. Ball 6 lb · position -2.5(d-pad left ×5) · direction as in the second image · power 100 · spin 0. Aim roughly between pins 3 and 6." } },
            { title: { ko: "4. バケット", en: "4. バケット" }, image: "/yakuza-0-bowling/dss019.webp", images: ["/yakuza-0-bowling/mini028.webp"], note: { ko: "상금 150万엔. 공 6파운드 · 위치 0(초기 위치) · 방향은 두 번째 그림 · 힘 100 · 회전 0. 2번 핀을 노립니다. 2번 「インザダーク」와 같은 방식이고, 2번 뒤에 4·5번이 있어 6파운드로도 성공률이 높습니다.", en: "Prize ¥1500,000. Ball 6 lb · position 0(start position) · direction as in the second image · power 100 · spin 0. Aim at pin 2 — same method as No. 2, and with pins 4 and 5 behind it the 6-lb ball works well." } },
            { title: { ko: "5. ピケットフェンス", en: "5. ピケットフェンス" }, image: "/yakuza-0-bowling/dss020.webp", images: ["/yakuza-0-bowling/mini027.webp"], note: { ko: "상금 200万엔. 공 6파운드 · 위치 +3.5(방향키 오른쪽 7번) · 방향은 두 번째 그림 · 힘 50 · 회전 0. 2번 핀을 노립니다.", en: "Prize ¥2000,000. Ball 6 lb · position +3.5(d-pad right ×7) · direction as in the second image · power 50 · spin 0. Aim at pin 2." } },
            { title: { ko: "6. クリスマスツリー", en: "6. クリスマスツリー" }, image: "/yakuza-0-bowling/dss021.webp", images: ["/yakuza-0-bowling/mini032.webp"], note: { ko: "상금 200万엔. 공 6파운드 · 위치 -2.5(방향키 왼쪽 5번) · 방향은 두 번째 그림 · 힘 60 · 회전 0. 3번 핀 오른쪽을 맞혀 3번을 왼쪽으로 튕겨 7번을 쓰러뜨립니다. 방향과 힘이 조금만 어긋나도 실패합니다.", en: "Prize ¥2000,000. Ball 6 lb · position -2.5(d-pad left ×5) · direction as in the second image · power 60 · spin 0. Clip the right of pin 3 so it flies left into the 7. Direction and power are unforgiving." } },
            { title: { ko: "7. ダイムストア", en: "7. ダイムストア" }, image: "/yakuza-0-bowling/dss022.webp", images: ["/yakuza-0-bowling/mini027.webp"], note: { ko: "상금 250万엔. 공 6파운드 · 위치 +3.5(방향키 오른쪽 7번) · 방향은 두 번째 그림 · 힘 50 · 회전 0. 5번 핀 왼쪽을 맞혀 5번을 오른쪽으로 튕겨 10번을 쓰러뜨립니다. 5번과 같은 세팅이지만 훨씬 까다롭습니다.", en: "Prize ¥2500,000. Ball 6 lb · position +3.5(d-pad right ×7) · direction as in the second image · power 50 · spin 0. Clip the left of pin 5 so it flies right into the 10 — No. 5's setup, but far less forgiving." } },
            { title: { ko: "8. ワッシャー", en: "8. ワッシャー" }, image: "/yakuza-0-bowling/dss023.webp", images: ["/yakuza-0-bowling/mini030.webp"], note: { ko: "상금 250万엔. 공 6파운드 · 위치 -3.5(방향키 왼쪽 7번) · 방향은 두 번째 그림 · 힘 30 · 회전 0. 1번 핀을 왼쪽으로 튕겨 2·4번을 쓰러뜨리고, 1번에 맞고 꺾인 공으로 10번을 쓰러뜨립니다. 아주 까다롭습니다.", en: "Prize ¥2500,000. Ball 6 lb · position -3.5(d-pad left ×7) · direction as in the second image · power 30 · spin 0. Knock pin 1 left into the 2 and 4, and let the deflected ball take the 10. Very unforgiving." } },
            { title: { ko: "9. トライアングル", en: "9. トライアングル" }, image: "/yakuza-0-bowling/dss024.webp", images: ["/yakuza-0-bowling/mini027.webp"], note: { ko: "상금 300万엔. 공 6파운드 · 위치 +3.5(방향키 오른쪽 7번) · 방향은 두 번째 그림 · 힘 50 · 회전 0. 1번 핀 왼쪽을 맞혀 1번을 오른쪽으로 튕겨 10번을 쓰러뜨립니다. 5번과 같은 세팅이지만 까다롭습니다.", en: "Prize ¥3000,000. Ball 6 lb · position +3.5(d-pad right ×7) · direction as in the second image · power 50 · spin 0. Clip the left of pin 1 so it flies right into the 10 — No. 5's setup, but fussier." } },
            { title: { ko: "10. トラピゾイド", en: "10. トラピゾイド" }, image: "/yakuza-0-bowling/dss025.webp", images: ["/yakuza-0-bowling/mini031.webp"], note: { ko: "상금 500万엔. 공 6파운드 · 위치 0(초기 위치) · 방향은 두 번째 그림 · 힘 10 이하 · 회전 0. 2번과 3번 사이를 노려 2번으로 7번, 3번으로 10번을 쓰러뜨립니다. 위치는 초기 위치, 방향은 정중앙(조금만 어긋나도 실패), 힘은 10 이하 — 세면 핀이 제대로 안 맞습니다.", en: "Prize ¥5000,000. Ball 6 lb · position 0(start position) · direction as in the second image · power 10 or less · spin 0. Aim between pins 2 and 3 so the 2 takes the 7 and the 3 takes the 10: start position, dead-centre direction (any miss fails), power 10 or less — more and the pins glance off." } },
          ],
        },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 2,
      location: { ko: "카무로초 — 요시다 배팅 센터 / 소텐보리 — 배팅 센터", en: "Yoshida Batting Center (Kamurocho) and the Sotenbori cage" },
      summary: {
        ko: "컴플리션은 배팅으로 누적 500만 엔 한 줄뿐입니다. 점수 랭크가 아니라 상금 누적이 조건입니다.",
        en: "One row: ¥5 million earned batting. It is prize money, not a score rank.",
      },
      howTo: [
        { ko: "상금은 랭크에 비례하므로 홈런 코스에서 높은 랭크를 반복해 내는 것이 가장 빠릅니다. 코스별 구질과 구속은 고정이라 타이밍을 한 번 익히면 그대로 재현됩니다.", en: "Payouts scale with rank, so repeat a high rank on the home-run course — the pitch script per course is fixed, so the timing you learn repeats." },
        { ko: "타격은 커서를 코스에 맞춘 뒤, 투구와 함께 줄어드는 커서가 공 크기와 겹치는 순간에 휘두르는 것이 정타 타이밍입니다.", en: "Line the cursor up, then swing at the moment the shrinking cursor matches the ball's size — that is the sweet spot." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Batting Center (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/batting-center" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
        { label: "kamigame.jp — 龍が如く0 バッティングセンター", url: "https://kamigame.jp/ryugagotoku0/page/282386205562151159.html" },
      ],
      achievementSlug: "28_what_a",
      courses: [
        {
          title: { ko: "이지", en: "Easy" },
          note: { ko: "위치는 자유 조준 — 구질·구속만 고정", en: "Free-aim — pitch type/speed fixed, landing spot is your choice" },
          pitches: [
            { type: "Straight", speed: "82–106" }, { type: "Curve", speed: "62–78" }, { type: "Sinker", speed: "70–81" }, { type: "Curve", speed: "65–71" }, { type: "Straight", speed: "118–125" },
            { type: "Curve", speed: "60–78" }, { type: "Curve", speed: "61–76" }, { type: "Straight", speed: "112–124" }, { type: "Straight", speed: "82–104" }, { type: "Sinker", speed: "73–78" },
            { type: "Curve", speed: "74–78" }, { type: "Straight", speed: "118–128" }, { type: "Curve", speed: "62–71" }, { type: "Straight", speed: "121–125" }, { type: "Straight", speed: "102–108" },
            { type: "Straight", speed: "114–127" }, { type: "Curve", speed: "66–76" }, { type: "Straight", speed: "85–86" }, { type: "Straight", speed: "118–120" }, { type: "Curve", speed: "63–76" },
          ],
        },
        {
          title: { ko: "노멀", en: "Normal" },
          note: { ko: "위치는 자유 조준 — 구질·구속만 고정", en: "Free-aim — pitch type/speed fixed, landing spot is your choice" },
          pitches: [
            { type: "Straight", speed: "118–122" }, { type: "Sinker", speed: "82–108" }, { type: "Curve", speed: "64–77" }, { type: "Straight", speed: "115–128" }, { type: "Straight", speed: "82–105" },
            { type: "Sinker", speed: "86–108" }, { type: "Straight", speed: "116–128" }, { type: "Curve", speed: "60–77" }, { type: "Straight", speed: "113–128" }, { type: "Sinker", speed: "83–108" },
            { type: "Curve", speed: "84–88" }, { type: "Straight", speed: "112–128" }, { type: "Curve", speed: "65–66" }, { type: "Sinker", speed: "83–106" }, { type: "Straight", speed: "113–128" },
            { type: "Curve", speed: "60–71" }, { type: "Straight", speed: "117–123" }, { type: "Straight", speed: "85–107" }, { type: "Sinker", speed: "84–107" }, { type: "Straight", speed: "132–145" },
          ],
        },
        {
          title: { ko: "하드", en: "Hard" },
          note: { ko: "위치는 자유 조준 — 구질·구속만 고정", en: "Free-aim — pitch type/speed fixed, landing spot is your choice" },
          pitches: [
            { type: "Straight", speed: "112–126" }, { type: "Sinker", speed: "83–108" }, { type: "Straight", speed: "86–108" }, { type: "Curve", speed: "80–88" }, { type: "Straight", speed: "111–128" },
            { type: "Sinker", speed: "85–108" }, { type: "Straight", speed: "112–127" }, { type: "Straight", speed: "80–100" }, { type: "Straight", speed: "112–127" }, { type: "Sinker", speed: "87–105" },
            { type: "Sinker", speed: "70–84" }, { type: "Straight", speed: "111–125" }, { type: "Straight", speed: "84–108" }, { type: "Curve", speed: "83–87" }, { type: "Straight", speed: "115–128" },
            { type: "Sinker", speed: "71–88" }, { type: "Straight", speed: "83–100" }, { type: "Straight", speed: "113–115" }, { type: "Curve", speed: "83–88" }, { type: "Straight", speed: "112–126" },
          ],
        },
        {
          title: { ko: "골드 러시", en: "Gold Rush" },
          note: { ko: "11구 중 1구라도 놓치면 그 판 상금 전액 소멸 — 위치는 이동 타겟 하나뿐", en: "One target only — miss any of the 11 pitches and the whole run's prize money is forfeit" },
          pitches: [
            { type: "Curve", speed: "60–66" }, { type: "Straight", speed: "151–158" }, { type: "Sinker", speed: "137–148" }, { type: "Sinker", speed: "68–75" }, { type: "Curve", speed: "107–112" },
            { type: "Straight", speed: "152–160" }, { type: "Curve (¥2,000,000 무지개 타겟)", speed: "107–112" }, { type: "Straight", speed: "152–160" }, { type: "Sinker", speed: "63–78" }, { type: "Straight", speed: "151–160" },
            { type: "Sinker", speed: "135–145" },
          ],
        },
        {
          title: { ko: "EX 골드 러시", en: "EX Gold Rush" },
          note: { ko: "11구, 최대 4,000만 엔 — 미스 시 전액 소멸", en: "11 pitches, up to ¥40,000,000 — miss any and it's all gone" },
          pitches: [
            { type: "Straight", speed: "136–145" }, { type: "Sinker", speed: "115–128" }, { type: "Straight", speed: "151–161" }, { type: "Curve", speed: "107–112" }, { type: "Sinker", speed: "132–148" },
            { type: "Curve", speed: "60–66" }, { type: "Sinker (¥15,000,000 무지개 타겟)", speed: "133–140" }, { type: "Curve", speed: "107–110" }, { type: "Straight", speed: "141–142" }, { type: "Sinker", speed: "132–145" },
            { type: "Curve", speed: "123–128" },
          ],
        },
      ],
    },
    {
      slug: "pocket-circuit",
      name: { ko: "포켓 서킷", en: "Pocket Circuit" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "카무로초 — 포켓 서킷 스타디움", en: "Pocket Circuit Stadium, Kamurocho" },
      summary: {
        ko: "부품 수집(타이어 5·10·20, 모터 5·10·15, 기어 5·10·20, 프레임 5·10·20), 10회 출전, 그리고 7개 대회 전 우승이 조건입니다.",
        en: "Collect parts (5/10/20 tires, 5/10/15 motors, 5/10/20 gears, 5/10/20 frames), race ten times, and win all seven events.",
      },
      howTo: [
        { ko: "우승해야 하는 대회는 입문 레이스, 리틀 레이서 컵, 루키 레이스, 프로암 레이스, 엑스퍼트 레이스, 챔피언 컵, 킹 오브 스피드 컵 일곱 개입니다.", en: "The seven to win are the Introductory Race, Little Racers' Cup, Rookies' Race, Pro-Am Race, Experts' Race, Champions' Cup and King of Speed Cup." },
        { ko: "부품은 레이스를 이길 때마다 상점 재고가 갱신되고 값이 점점 비싸집니다. 필요 없는 부품을 미리 사 두면 나중에 자금이 모자랍니다.", en: "Stock refreshes as you win races and gets pricier each time — buying parts you will not use leaves you short later." },
        { ko: "부품은 스타디움 안 부품 상점 외에도 여러 곳에서 구합니다. 서브스토리 「合言葉は……」를 끝내면 카무로 상점가의 수수께끼 점주(怪しい店)가 열리고(ハイトルクモーター改 등), 에비스야에서 DON-蜂를 사면 バンパープレート가 딸려 오며, 돈키호테와 드림 머신에서도 나옵니다.", en: "Parts come from more than the Stadium shop: finishing the substory 「合言葉は……」 opens the mystery shopkeeper in the Kamuro arcade (ハイトルクモーター改 and more), buying DON-蜂 at Ebisu Pawn includes a バンパープレート, and Don Quijote and the Dream Machines stock others." },
        { ko: "레이스 중 X(부스트)는 횟수 제한이 있고, 코스아웃할 것 같으면 A를 연타해 자세를 바로잡을 수 있습니다(기합 주입). 왼쪽 스틱을 오른쪽으로 기울이면 빨리 감기입니다.", en: "Boost (X) has limited uses; when the car is about to fly off, mash A to steady it. Tilt the left stick right to fast-forward the race." },
      ],
      videos: [
        { title: { ko: "포켓 서킷 우승 빌드·팁", en: "Pocket Circuit win & build tips" }, url: YT("mp-4G6Q-7gs") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Pocket Circuit (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/pocket-circuit" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
        { label: "ダラゲ！ — 龍が如く0 ポケットサーキット（カスタマイズ例・大会一覧）", url: "https://darage.com/guide/ryuzero/mini04.html" },
        { label: "神ゲー攻略 — 龍が如く0 ポケサーの攻略とパーツの入手方法", url: "https://kamigame.jp/ryugagotoku0/page/271690003556368649.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "대회별 추천 부품 조합 — 7대회 + 파이터 SP", en: "Recommended builds per race — 7 races + Fighter SP" },
          note: { ko: "ダラゲ!와 神ゲー攻略 두 곳이 대회마다 실제로 이긴 조합을 따로 실었습니다. 두 조합이 서로 달라도 둘 다 우승 기록이 있는 세팅이니, 가진 부품에 맞춰 고르세요. ダラゲ! 쪽 시간은 부스트 없이 낸 기록입니다. 부품 이름은 일본어판 표기 그대로이고, 괄호는 출처가 적은 입수처입니다. 코스 수치(거리·코스트·바퀴 수)는 ダラゲ!에서, 그림은 神ゲー攻略의 대회 선택 화면입니다. 각 대회 뒤에는 같은 코스를 쓰는 서브스토리가 열리고, 같은 조합으로 이길 수 있습니다.", en: "Darage and Kamigame each publish the build they actually won every race with. Where they differ, both are proven winners, so pick by the parts you own; Darage's times are without boost. Part names are the Japanese release's, and the brackets are where the source says to get them. Course stats (length, cost cap, laps) are Darage's; images are Kamigame's race-select screens. Each race unlocks a substory on the same course that the same build wins." },
          puzzles: [
            { title: { ko: "1. ポケサー入門大会 (입문 레이스)", en: "1. ポケサー入門大会 (Introductory Race)" }, image: "https://lh3.googleusercontent.com/Q6PoT93aaoeZs5kNUXz3BbIobX1VJ4mgg3B04c8f9n21vqcE6R_OjLWvKe-gwpd7gMs5K5-5YGSTXI_tJdBK0izhf3gFlXMiRIr7R_zRdf4", note: { ko: "코스: 총 90.2m · 코스트 제한 20 · 8바퀴 · 특수 구간 ブロックカーブ. ダラゲ! 조합(부스트 없이 0:38.541): スリックタイヤ / ミドルフィン / ハイトルクモーター改（神室商店街の謎の店主） / 中速ギア（パーツショップ） / ノーマルバッテリー. 神ゲー攻略 조합: バレルタイヤ / スピードフィン / スピードモーター / 中速ギア / ノーマルバッテリー. 스피드 쪽으로 맞추면 이기는 쉬운 대회입니다. 우승 후 상점에 새 부품이 들어오니 다시 들러 다음 대회용 부품을 사 두세요.", en: "Course: 90.2m · cost cap 20 · 8 laps · special zones ブロックカーブ. Darage build (no boost, 0:38.541): スリックタイヤ / ミドルフィン / ハイトルクモーター改（神室商店街の謎の店主） / 中速ギア（パーツショップ） / ノーマルバッテリー. Kamigame build: バレルタイヤ / スピードフィン / スピードモーター / 中速ギア / ノーマルバッテリー. An easy one — lean the build toward speed. New stock arrives after you win, so revisit the shop before the next race." } },
            { title: { ko: "2. わんぱくレーサー集合！ (리틀 레이서 컵)", en: "2. わんぱくレーサー集合！ (Little Racers' Cup)" }, image: "https://lh3.googleusercontent.com/BuwUAGPIdP-pJmeCyyBy779dee7co_CJC4c-LaxlWzB-DYkhKH7cVAA4Hq5CAl8mssm4DTsfzRWtvUmDr7CjvyPPMZIF-xAsopRqjQM1ESz0", note: { ko: "코스: 총 129.2m · 코스트 제한 20 · 8바퀴 · 특수 구간 ジャンプセクション、ジグザグセクション. ダラゲ! 조합(부스트 없이 0:55.105): スリックタイヤ / ミドルフィン / ハイトルクモーター改（神室商店街の謎の店主） / 中速ギア（パーツショップ） / ノーマルバッテリー. 神ゲー攻略 조합: スーパーバレルタイヤ / スーパーメタルフィン / スーパースピードモーター / スーパー中速ギア / ノーマルバッテリー. 점프대와 연속 코너가 있어 부스트를 쓰면 코스아웃하기 쉽습니다. 쓸 거라면 코너가 완만해지고 속도가 떨어지는 5바퀴째 이후, 점프대를 지난 직후에 쓰세요. 같은 코스의 서브스토리: 「恋路は難関コース」.", en: "Course: 129.2m · cost cap 20 · 8 laps · special zones ジャンプセクション、ジグザグセクション. Darage build (no boost, 0:55.105): スリックタイヤ / ミドルフィン / ハイトルクモーター改（神室商店街の謎の店主） / 中速ギア（パーツショップ） / ノーマルバッテリー. Kamigame build: スーパーバレルタイヤ / スーパーメタルフィン / スーパースピードモーター / スーパー中速ギア / ノーマルバッテリー. The jumps and back-to-back corners make boosting a course-out risk; if you boost, do it after the jump from lap 5 on, when the corners ease and speed drops. Same-course substory: 「恋路は難関コース」." } },
            { title: { ko: "3. 初心者公式大会 (루키 레이스)", en: "3. 初心者公式大会 (Rookies' Race)" }, image: "https://lh3.googleusercontent.com/CxU1RTcIqpCMH8L963D0YpRuAqlNFnYi22E8ep55Qp94O6Oqte0htyi_ZN8miJ1kSilN_PD0-3cPoBPZogOsk1YOspxkPNDq2HokbzXeAaEQ", note: { ko: "코스: 총 186.1m · 코스트 제한 25 · 12바퀴 · 특수 구간 ダイナミックカーブ、ジャンプセクション. ダラゲ! 조합(부스트 없이 2:18.267): スーパースポンジタイヤ（パーツショップ） / スーパーラバーフィン（パーツショップ） / ハイトルクモーター改 / スーパー中速ギア（パーツショップ） / ノーマルバッテリー / バンパープレート（えびすや 神室町店）. 神ゲー攻略 조합: スーパーバレルタイヤ / スーパーメタルフィン / スーパースピードモーター / スーパー中速ギア / タフネスバッテリー. 난이도가 크게 오릅니다. 12바퀴라 배터리 수명이 관건이고, 너무 빠른 부품은 코스아웃을 부르니 코스트를 다 채울 필요는 없습니다. 같은 코스의 서브스토리: 「ロマンチックあげちゃうよ」.", en: "Course: 186.1m · cost cap 25 · 12 laps · special zones ダイナミックカーブ、ジャンプセクション. Darage build (no boost, 2:18.267): スーパースポンジタイヤ（パーツショップ） / スーパーラバーフィン（パーツショップ） / ハイトルクモーター改 / スーパー中速ギア（パーツショップ） / ノーマルバッテリー / バンパープレート（えびすや 神室町店）. Kamigame build: スーパーバレルタイヤ / スーパーメタルフィン / スーパースピードモーター / スーパー中速ギア / タフネスバッテリー. A big step up. At 12 laps battery life matters, and over-fast parts fly off, so there is no need to spend the whole cost budget. Same-course substory: 「ロマンチックあげちゃうよ」." } },
            { title: { ko: "4. 中級者オープン大会 (프로암 레이스)", en: "4. 中級者オープン大会 (Pro-Am Race)" }, image: "https://lh3.googleusercontent.com/La62YOr3pxAtevJy7l3Z4qTnIAtfNYT281sUzitlwJnuGpWFDRjFYx3gA2-HIVMmoZ4ulL3Gj-o9GKb1islgopJeWVI6IlbFeE6uhmQ4sC0", note: { ko: "코스: 총 160.9m · 코스트 제한 30 · 8바퀴 · 특수 구간 ループチェンジ、ウォール. ダラゲ! 조합(부스트 없이 1:19.320): ハイパースポンジタイヤ（パーツショップ） / ハイパーラバーフィン（パーツショップ） / ハイトルクモーター改 / 神速ギア（パーツショップ） / ノーマルバッテリー. 神ゲー攻略 조합: スーパースパイクタイヤ / スーパーミドルフィン / ハイトルクモーター改 / 神速ギア / ノーマルバッテリー / サイドステー改-Ⅱ. 잔디 구간이 있어 神ゲー攻略은 스파이크 타이어를 필수로 봅니다. 언덕·루프 체인지·코스아웃 대책으로 서브스토리 「合言葉は……」로 여는 수상한 가게의 부품이 잘 맞습니다. 같은 코스의 서브스토리: 「変態男疑惑」.", en: "Course: 160.9m · cost cap 30 · 8 laps · special zones ループチェンジ、ウォール. Darage build (no boost, 1:19.320): ハイパースポンジタイヤ（パーツショップ） / ハイパーラバーフィン（パーツショップ） / ハイトルクモーター改 / 神速ギア（パーツショップ） / ノーマルバッテリー. Kamigame build: スーパースパイクタイヤ / スーパーミドルフィン / ハイトルクモーター改 / 神速ギア / ノーマルバッテリー / サイドステー改-Ⅱ. Kamigame calls spike tires mandatory for the grass section; the shady shop parts (opened by the substory 「合言葉は……」) suit the slopes, loop change and course-outs. Same-course substory: 「変態男疑惑」." } },
            { title: { ko: "5. 上級者チャレンジ大会 (엑스퍼트 레이스)", en: "5. 上級者チャレンジ大会 (Experts' Race)" }, image: "https://lh3.googleusercontent.com/ej644HGI43naUl2uWfyANK9jTVKg2rvCQGJ40Xb_e9tiUiFOKVXBxlX4HSAn5CC0KcAcwoxH9d1rnxpt1qGy4mLlDaUXpSR-mceR1ORraty4", note: { ko: "코스: 총 193.4m · 코스트 제한 30 · 8바퀴 · 특수 구간 ループチェンジ、ウォール. ダラゲ! 조합(부스트 없이 1:11.743): ウルトラローハイトタイヤ（パーツショップ） / ハイパーラバーフィン / ハイトルクモーター改 / スーパー神速ギア（パーツショップ） / ノーマルバッテリー / ミドルサスペンション（パーツショップ）. 神ゲー攻略 조합: ウルトラスリックタイヤ / ウルトラメタルフィン / ハイトルクモーター改 / 神速ギア / ノーマルバッテリー / ミドルサスペンション. 점프대와 벽 구간에서 코스아웃하기 쉬우니 부스트 없이도 이길 만큼 부품을 갖추세요. 점프대 대책으로 서스펜션이 필수입니다. 같은 코스의 서브스토리: 「強敵、あらわる」.", en: "Course: 193.4m · cost cap 30 · 8 laps · special zones ループチェンジ、ウォール. Darage build (no boost, 1:11.743): ウルトラローハイトタイヤ（パーツショップ） / ハイパーラバーフィン / ハイトルクモーター改 / スーパー神速ギア（パーツショップ） / ノーマルバッテリー / ミドルサスペンション（パーツショップ）. Kamigame build: ウルトラスリックタイヤ / ウルトラメタルフィン / ハイトルクモーター改 / 神速ギア / ノーマルバッテリー / ミドルサスペンション. Jumps and the wall section throw cars off, so build to win without boost — a suspension is mandatory for the jumps. Same-course substory: 「強敵、あらわる」." } },
            { title: { ko: "6. ポケサー免許皆伝！ (챔피언 컵)", en: "6. ポケサー免許皆伝！ (Champions' Cup)" }, image: "https://lh3.googleusercontent.com/n2OPfdR23ZdZa8EsrzM15V41Jhh0IXtWJCTY2n1KPM94Q1yLzBzZ7kgEg6HcFQpZxYDPyM-CjM00g-p3Asn4ZUOWBqNbI9sPHtRwJEzLXis", note: { ko: "코스: 총 201.2m · 코스트 제한 35 · 8바퀴 · 특수 구간 ループチェンジ、ダイナミックカーブ. ダラゲ! 조합(부스트 없이 1:24.172): ウルトラスパイクタイヤ（パーツショップ） / ウルトラミドルフィン（パーツショップ） / ハイトルクモーター改 / スーパー神速ギア / ノーマルバッテリー / ミドルサスペンション. 神ゲー攻略 조합: ウルトラスパイクタイヤ / ウルトラメタルフィン / ハイトルクモーター改 / ハイパー神速ギア / ノーマルバッテリー / ミドルサスペンション / バンパープレート. 언덕이 많아 파워가 중요한 코스입니다. 언덕은 ハイトルクモーター改, 잔디는 ウルトラスパイクタイヤ로 대비하세요. 같은 코스의 서브스토리 「博士と呼ばれた女」를 이기면 다음 대회에 쓰는 ヘビーサスペンション을 받습니다. 같은 코스의 서브스토리: 「博士と呼ばれた女」.", en: "Course: 201.2m · cost cap 35 · 8 laps · special zones ループチェンジ、ダイナミックカーブ. Darage build (no boost, 1:24.172): ウルトラスパイクタイヤ（パーツショップ） / ウルトラミドルフィン（パーツショップ） / ハイトルクモーター改 / スーパー神速ギア / ノーマルバッテリー / ミドルサスペンション. Kamigame build: ウルトラスパイクタイヤ / ウルトラメタルフィン / ハイトルクモーター改 / ハイパー神速ギア / ノーマルバッテリー / ミドルサスペンション / バンパープレート. Hilly, so power matters: ハイトルクモーター改 for the slopes, ウルトラスパイクタイヤ for the grass. Winning the same-course substory 「博士と呼ばれた女」 gives the ヘビーサスペンション the next race needs. Same-course substory: 「博士と呼ばれた女」." } },
            { title: { ko: "7. ポケサー最強王決定戦！ (킹 오브 스피드 컵)", en: "7. ポケサー最強王決定戦！ (King of Speed Cup)" }, image: "https://lh3.googleusercontent.com/VjALPFQifxetmXZ5M3S3l4pJV4M-lGBoPAkPb8K5WLZbG4jyD4HS7Q-JscdIxm0HOfcH7-k1y8dveBHvdxtGB80BvKeSvMWkvcUu_vTweg_z", note: { ko: "코스: 총 211.3m · 코스트 제한 40 · 12바퀴 · 특수 구간 ループチェンジ、ショートスロープ. ダラゲ! 조합(부스트 없이 1:34.784): 極・バレルタイヤ（パーツショップ） / 極・スピードフィン（パーツショップ） / 韋駄天モーター（パーツショップ） / ウルトラダッシュギア（パーツショップ） / ノーマルバッテリー / ヘビーサスペンション（サブストーリー41クリア）. 버튼 연타가 필요합니다. 다른 조합(부스트 없이 1:34.408): 極・バレルタイヤ / 極・スピードフィン / 韋駄天モーター / スーパー神速ギア / ノーマルバッテリー / ヘビーサスペンション / バンパープレート. 다른 조합(부스트 없이 1:31.838): 極・バレルタイヤ / 極・スピードフィン / 韋駄天モーター / 極・神速ギア（100万円のドリームマシン） / ノーマルバッテリー / ヘビーサスペンション / バンパープレート. 神ゲー攻略 조합: 極・バレルタイヤ / 極・メタルフィン / 韋駄天モーター / ウルトラ神速ギア / タフネスバッテリー / ヘビーサスペンション / バンパープレート. 코스와 상대 모두 가장 어렵습니다. 기계만으로 완주는 거의 불가능하니, 초록 레인 2·3바퀴째에 부스트를 쓰고 기합 주입(버튼 연타)으로 리타이어를 막으세요. 초록 레인 시작이 어려우면 재시작을 권합니다. 같은 코스의 서브스토리: 「最速の名を賭けて」.", en: "Course: 211.3m · cost cap 40 · 12 laps · special zones ループチェンジ、ショートスロープ. Darage build (no boost, 1:34.784): 極・バレルタイヤ（パーツショップ） / 極・スピードフィン（パーツショップ） / 韋駄天モーター（パーツショップ） / ウルトラダッシュギア（パーツショップ） / ノーマルバッテリー / ヘビーサスペンション（サブストーリー41クリア）. Needs button mashing. Alternative (no boost, 1:34.408): 極・バレルタイヤ / 極・スピードフィン / 韋駄天モーター / スーパー神速ギア / ノーマルバッテリー / ヘビーサスペンション / バンパープレート. Alternative (no boost, 1:31.838): 極・バレルタイヤ / 極・スピードフィン / 韋駄天モーター / 極・神速ギア（100万円のドリームマシン） / ノーマルバッテリー / ヘビーサスペンション / バンパープレート. Kamigame build: 極・バレルタイヤ / 極・メタルフィン / 韋駄天モーター / ウルトラ神速ギア / タフネスバッテリー / ヘビーサスペンション / バンパープレート. The hardest course and field. A clean run on the machine alone is near impossible: boost on laps 2 and 3 of the green lane and mash to keep it from retiring. Restart if the green-lane start looks bad. Same-course substory: 「最速の名を賭けて」." } },
            { title: { ko: "서브스토리 「キミこそポケサーファイター」 — ファイターSPコース", en: "Substory 「キミこそポケサーファイター」 — Fighter SP course" }, image: "https://lh3.googleusercontent.com/a8zOIXLc3gCUt3t5koq5o1NGcH0SHi_rr3IN3NCRoRKFajtCiOk2nNnma571XHeIybB85J8yo0hZvF1OzSTJvRJUFmkphcvV1YGEMTaIbf3o", note: { ko: "코스: 총 213.8m · 코스트 제한 45 · 4바퀴 · 특수 구간 ウォール、ジャンプセッション. 포켓 서킷 파이터와의 마지막 승부 전용 코스입니다. ダラゲ! 조합(부스트 없이 0:35.696, 버튼 연타가 필요할 수 있음): 極・スパイクタイヤ（パーツショップ） / 極・ラバーフィン（パーツショップ） / 韋駄天モーター（パーツショップ） / 極・ダッシュギア（パーツショップ） / ノーマルバッテリー / ヘビーサスペンション（サブストーリー41クリア） / バンパープレート. 다른 조합(부스트 없이 0:34.371): 極・スパイクタイヤ / 極・ラバーフィン / 韋駄天モーター / 極・ダッシュギア / 高速バッテリー / ヘビーサスペンション / バンパープレート. 다른 조합(부스트 없이 0:37.728): 極・スパイクタイヤ / 極・ラバーフィン / 韋駄天モーター / 極・ダッシュギア / タフネスバッテリー / ヘビーサスペンション / バンパープレート. 神ゲー攻略 조합: 極・スパイクタイヤ / 極・メタルフィン / ハイトルクモーター改 / ウルトラ神速ギア / 高速バッテリー / ヘビーサスペンション / バンパープレート. 쉽게 코스아웃하는 코스라 속도는 연타로 버틸 수 있는 선까지만 올리고, 모자란 만큼은 부스트로 메우세요.", en: "Course: 213.8m · cost cap 45 · 4 laps · special zones ウォール、ジャンプセッション. The course for the final race against the Pocket Circuit Fighter. Darage build (no boost, 0:35.696, may need mashing): 極・スパイクタイヤ（パーツショップ） / 極・ラバーフィン（パーツショップ） / 韋駄天モーター（パーツショップ） / 極・ダッシュギア（パーツショップ） / ノーマルバッテリー / ヘビーサスペンション（サブストーリー41クリア） / バンパープレート. Alternative (no boost, 0:34.371): 極・スパイクタイヤ / 極・ラバーフィン / 韋駄天モーター / 極・ダッシュギア / 高速バッテリー / ヘビーサスペンション / バンパープレート. Alternative (no boost, 0:37.728): 極・スパイクタイヤ / 極・ラバーフィン / 韋駄天モーター / 極・ダッシュギア / タフネスバッテリー / ヘビーサスペンション / バンパープレート. Kamigame build: 極・スパイクタイヤ / 極・メタルフィン / ハイトルクモーター改 / ウルトラ神速ギア / 高速バッテリー / ヘビーサスペンション / バンパープレート. It throws cars off easily — keep top speed to what mashing can hold and make up the rest with boost." } },
          ],
        },
      ],
      achievementSlug: "32_the_dragon",
    },
    {
      slug: "disco",
      name: { ko: "디스코", en: "Disco" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 3,
      location: { ko: "카무로초 시치후쿠 거리 마하라자(키류) / 소텐보리 쇼후쿠초 동쪽 마하라자(마지마)", en: "Maharaja on Shichifuku Street, Kamurocho (Kiryu); Maharaja in east Shofukucho, Sotenbori (Majima)" },
      summary: {
        ko: "다섯 곡을 각각 이지·노멀·하드 세 난이도로 클리어해야 합니다 — 총 15줄로 Y0 미니게임 중 가장 긴 조건입니다.",
        en: "Five songs at Easy, Normal and Hard each — fifteen rows, the longest set in the game.",
      },
      howTo: [
        { ko: "점수의 핵심은 패널을 누르기 전에 무대를 최대한 많이 밟는 것입니다. 스텝 수만큼 그 패널의 점수가 올라가지만, 패널을 놓치면 밟은 스텝은 전부 무효가 됩니다.", en: "Score comes from stepping around the floor before you hit the panel — more steps means more points for that panel, but miss the panel and every step counted for nothing." },
        { ko: "패널 입력 타이밍은 테두리가 패널 크기로 줄어드는 순간입니다. 보통 마디의 네 번째 박에 오지만 곡과 난이도에 따라 달라집니다.", en: "Hit the panel as the shrinking border matches it — usually the fourth beat of the bar, though it shifts by song and difficulty." },
        { ko: "피버 게이지가 차면 발동해 방향 입력 네 번을 정확한 타이밍에 넣습니다. 일반 패널보다 점수가 크므로 차는 즉시 쓰세요.", en: "When the Fever meter fills, trigger it and hit four directional inputs on time — it pays more than normal panels, so spend it as soon as it fills." },
        { ko: "무대 가장자리에 부딪히면 아바타가 튕겨 한 박자를 잃습니다. 스텝을 욕심내다 벽을 치는 것이 가장 흔한 실패 원인입니다.", en: "Bumping the edge of the floor costs you a beat — greedy stepping into the wall is the most common way runs fall apart." },
      ],
      videos: [
        { title: { ko: "미스 이소베 디스코 배틀 (풀콤보)", en: "Miss Isobe disco battle (full combo)" }, url: YT("XuhUb6pHCQA") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Disco (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/disco" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },        { label: "ダラゲ！ — 龍が如く0 ディスコ（HARD譜面）", url: "https://darage.com/guide/ryuzero/mini06.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "HARD 전곡 패널 순서 — 5곡", en: "HARD panel order — all 5 songs" },
          note: { ko: "ダラゲ! 1곳의 자료입니다(Director's Cut). 각 그림은 한 구간의 무대이고, 빨간 번호 순서대로 그 칸의 버튼을 누릅니다. 그림 아래 순서와 같습니다. 버튼은 Switch 표기입니다: A=오른쪽(PS ○), B=아래(PS ×), X=위(PS △), Y=왼쪽(PS □). Xbox 패드에서는 같은 위치라도 글자가 A↔B, X↔Y로 바뀝니다.", en: "Single source, Darage (Director's Cut). Each diagram is one section of the floor; press the buttons in the red numbered order, matching the sequence listed. Buttons use the Switch layout: A = right (PS circle), B = bottom (PS cross), X = top (PS triangle), Y = left (PS square). On an Xbox pad the same positions are labelled the other way round (A↔B, X↔Y)." },
          puzzles: [
            { title: { ko: "Friday Night (HARD)", en: "Friday Night (HARD)" }, image: "/yakuza-0-disco/d01_01.webp", images: ["/yakuza-0-disco/d01_02.webp", "/yakuza-0-disco/d01_03.webp", "/yakuza-0-disco/d01_04.webp", "/yakuza-0-disco/d01_05.webp", "/yakuza-0-disco/d01_06.webp", "/yakuza-0-disco/d01_07.webp", "/yakuza-0-disco/d01_08.webp", "/yakuza-0-disco/d01_09.webp", "/yakuza-0-disco/d01_10.webp", "/yakuza-0-disco/d01_11.webp"], note: { ko: "그림 11장, 그림마다 번호 순서대로 패널을 밟습니다. 입력 순서 — 1: B → Y → A → X → Y | 2: B → B → Y | 3: A → X → Y → B → A | 4: B → Y → A → X → Y / B → B | 5: Y → A → X → Y → B / A → X | 6: B → Y → A → X → Y → B | 7: B → Y → A → X | 8: Y → B → A | 9: B → Y → A → X → Y → B | 10: B → Y → A | 11: X → Y → B → A → X → Y", en: "11 diagrams; in each, take the panels in numbered order. Input order — 1: B → Y → A → X → Y | 2: B → B → Y | 3: A → X → Y → B → A | 4: B → Y → A → X → Y / B → B | 5: Y → A → X → Y → B / A → X | 6: B → Y → A → X → Y → B | 7: B → Y → A → X | 8: Y → B → A | 9: B → Y → A → X → Y → B | 10: B → Y → A | 11: X → Y → B → A → X → Y" } },
            { title: { ko: "Queen of the passion (HARD)", en: "Queen of the passion (HARD)" }, image: "/yakuza-0-disco/d02_01.webp", images: ["/yakuza-0-disco/d02_02.webp", "/yakuza-0-disco/d02_03.webp", "/yakuza-0-disco/d02_04.webp", "/yakuza-0-disco/d02_05.webp", "/yakuza-0-disco/d02_06.webp", "/yakuza-0-disco/d02_07.webp", "/yakuza-0-disco/d02_08.webp", "/yakuza-0-disco/d02_09.webp", "/yakuza-0-disco/d02_10.webp", "/yakuza-0-disco/d02_11.webp", "/yakuza-0-disco/d02_12.webp", "/yakuza-0-disco/d02_13.webp", "/yakuza-0-disco/d02_14.webp", "/yakuza-0-disco/d02_15.webp", "/yakuza-0-disco/d02_16.webp", "/yakuza-0-disco/d02_17.webp", "/yakuza-0-disco/d02_18.webp", "/yakuza-0-disco/d02_19.webp", "/yakuza-0-disco/d02_20.webp", "/yakuza-0-disco/d02_21.webp", "/yakuza-0-disco/d02_22.webp"], note: { ko: "그림 22장, 그림마다 번호 순서대로 패널을 밟습니다. 입력 순서 — 1: A → B → B | 2: Y → X → X | 3: A → B → B | 4: Y → X → X | 5: A → B → Y → X → X | 6: A → B → Y → X → X | 7: A → B → Y → X → X | 8: A → B → Y → X → X | 9: A → B → Y → Y → B / X → X | 10: A → B → Y → Y → B / X → X | 11: A → B → Y → Y → B / X → X | 12: A → B → Y → Y → B / X → A | 13: A → B → B | 14: Y → X → X | 15: A → B → B | 16: X → A → B → Y | 17: Y → B → X → X | 18: A → B → Y → Y → B / X → X | 19: A → B → Y → Y → B / X → X | 20: A → B → Y → Y → B | 21: X → X / A → B → Y → X → A | 22: B → X → X → X → X", en: "22 diagrams; in each, take the panels in numbered order. Input order — 1: A → B → B | 2: Y → X → X | 3: A → B → B | 4: Y → X → X | 5: A → B → Y → X → X | 6: A → B → Y → X → X | 7: A → B → Y → X → X | 8: A → B → Y → X → X | 9: A → B → Y → Y → B / X → X | 10: A → B → Y → Y → B / X → X | 11: A → B → Y → Y → B / X → X | 12: A → B → Y → Y → B / X → A | 13: A → B → B | 14: Y → X → X | 15: A → B → B | 16: X → A → B → Y | 17: Y → B → X → X | 18: A → B → Y → Y → B / X → X | 19: A → B → Y → Y → B / X → X | 20: A → B → Y → Y → B | 21: X → X / A → B → Y → X → A | 22: B → X → X → X → X" } },
            { title: { ko: "I'm gonna make her mine (HARD)", en: "I'm gonna make her mine (HARD)" }, image: "/yakuza-0-disco/d03_01.webp", images: ["/yakuza-0-disco/d03_02.webp", "/yakuza-0-disco/d03_03.webp", "/yakuza-0-disco/d03_04.webp", "/yakuza-0-disco/d03_05.webp", "/yakuza-0-disco/d03_06.webp", "/yakuza-0-disco/d03_07.webp", "/yakuza-0-disco/d03_08.webp", "/yakuza-0-disco/d03_09.webp", "/yakuza-0-disco/d03_10.webp", "/yakuza-0-disco/d03_11.webp", "/yakuza-0-disco/d03_12.webp", "/yakuza-0-disco/d03_13.webp", "/yakuza-0-disco/d03_14.webp", "/yakuza-0-disco/d03_15.webp", "/yakuza-0-disco/d03_16.webp", "/yakuza-0-disco/d03_17.webp", "/yakuza-0-disco/d03_18.webp", "/yakuza-0-disco/d03_19.webp", "/yakuza-0-disco/d03_20.webp"], note: { ko: "그림 20장, 그림마다 번호 순서대로 패널을 밟습니다. 입력 순서 — 1: A → B → Y / Y → X → A / A → B → Y | 2: Y → X → A / B → Y → X / X → A → B | 3: B → Y → X / X → A → B | 4: A → B → Y / Y → X → A / A → B → Y | 5: Y → X → A / B → X → Y | 6: B → X → A / B → X → Y | 7: B → X → A / Y → A → X | 8: Y → A → B / Y → A → X | 9: Y → A → B / X → Y → B → B | 10: X → A → B → B / X → Y → A → A | 11: X → B → A → A / X → Y → B → B | 12: X → A → B → B / X → Y → A → A | 13: X → B → A → A → A | 14: X → Y → Y → Y / A → B → Y → Y → Y | 15: X → A → Y → Y → Y | 16: A → B → Y → Y → Y | 17: X → A → Y → Y → Y | 18: A → B → Y → Y → Y | 19: X → A → Y → Y → Y | 20: B → X → Y → Y → Y → X", en: "20 diagrams; in each, take the panels in numbered order. Input order — 1: A → B → Y / Y → X → A / A → B → Y | 2: Y → X → A / B → Y → X / X → A → B | 3: B → Y → X / X → A → B | 4: A → B → Y / Y → X → A / A → B → Y | 5: Y → X → A / B → X → Y | 6: B → X → A / B → X → Y | 7: B → X → A / Y → A → X | 8: Y → A → B / Y → A → X | 9: Y → A → B / X → Y → B → B | 10: X → A → B → B / X → Y → A → A | 11: X → B → A → A / X → Y → B → B | 12: X → A → B → B / X → Y → A → A | 13: X → B → A → A → A | 14: X → Y → Y → Y / A → B → Y → Y → Y | 15: X → A → Y → Y → Y | 16: A → B → Y → Y → Y | 17: X → A → Y → Y → Y | 18: A → B → Y → Y → Y | 19: X → A → Y → Y → Y | 20: B → X → Y → Y → Y → X" } },
            { title: { ko: "I wanna take you home (HARD)", en: "I wanna take you home (HARD)" }, image: "/yakuza-0-disco/d04_01.webp", images: ["/yakuza-0-disco/d04_02.webp", "/yakuza-0-disco/d04_03.webp", "/yakuza-0-disco/d04_04.webp", "/yakuza-0-disco/d04_05.webp", "/yakuza-0-disco/d04_06.webp", "/yakuza-0-disco/d04_07.webp", "/yakuza-0-disco/d04_08.webp", "/yakuza-0-disco/d04_09.webp", "/yakuza-0-disco/d04_10.webp", "/yakuza-0-disco/d04_11.webp", "/yakuza-0-disco/d04_12.webp", "/yakuza-0-disco/d04_13.webp", "/yakuza-0-disco/d04_14.webp", "/yakuza-0-disco/d04_15.webp", "/yakuza-0-disco/d04_16.webp", "/yakuza-0-disco/d04_17.webp", "/yakuza-0-disco/d04_18.webp"], note: { ko: "그림 18장, 그림마다 번호 순서대로 패널을 밟습니다. 입력 순서 — 1: A → B → X → Y / A → A | 2: B → Y → X → A / A → B | 3: X → Y → A → A → B | 4: Y → X → A → A → B | 5: X → Y → A → A → B | 6: Y → X → A → A → B | 7: X → Y → X → A → B | 8: Y → X → Y → A → B | 9: X → Y → X → A → B | 10: Y → X → Y / X → Y → A | 11: Y → X → B / X → Y → A | 12: Y → X → B / X → Y → A | 13: Y → X / B → A → B → X | 14: Y → A → B → Y / X → X → X | 15: B → X → Y → B → A | 16: B → X → Y → A → A | 17: B → X → Y / A → Y → B → Y | 18: X → B → Y → A / X → X → X", en: "18 diagrams; in each, take the panels in numbered order. Input order — 1: A → B → X → Y / A → A | 2: B → Y → X → A / A → B | 3: X → Y → A → A → B | 4: Y → X → A → A → B | 5: X → Y → A → A → B | 6: Y → X → A → A → B | 7: X → Y → X → A → B | 8: Y → X → Y → A → B | 9: X → Y → X → A → B | 10: Y → X → Y / X → Y → A | 11: Y → X → B / X → Y → A | 12: Y → X → B / X → Y → A | 13: Y → X / B → A → B → X | 14: Y → A → B → Y / X → X → X | 15: B → X → Y → B → A | 16: B → X → Y → A → A | 17: B → X → Y / A → Y → B → Y | 18: X → B → Y → A / X → X → X" } },
            { title: { ko: "恋のディスコ・クイーン (HARD)", en: "恋のディスコ・クイーン (HARD)" }, image: "/yakuza-0-disco/d05_01.webp", images: ["/yakuza-0-disco/d05_02.webp", "/yakuza-0-disco/d05_03.webp", "/yakuza-0-disco/d05_04.webp", "/yakuza-0-disco/d05_05.webp", "/yakuza-0-disco/d05_06.webp", "/yakuza-0-disco/d05_07.webp", "/yakuza-0-disco/d05_08.webp", "/yakuza-0-disco/d05_09.webp", "/yakuza-0-disco/d05_10.webp", "/yakuza-0-disco/d05_11.webp", "/yakuza-0-disco/d05_12.webp", "/yakuza-0-disco/d05_13.webp", "/yakuza-0-disco/d05_14.webp", "/yakuza-0-disco/d05_15.webp", "/yakuza-0-disco/d05_16.webp", "/yakuza-0-disco/d05_17.webp", "/yakuza-0-disco/d05_18.webp"], note: { ko: "그림 18장, 그림마다 번호 순서대로 패널을 밟습니다. 입력 순서 — 1: A → B → A → B → Y | 2: A → B → A → B → Y | 3: A → B / A → B → B → Y → Y | 4: A → B / A → B → B → Y → Y | 5: A → B / A → B → B → Y → Y | 6: A → B | 7: A → B → B → Y → Y | 8: A → B | 9: A → B → B → Y → Y | 10: A → B → A → B / A → B | 11: A → B → A → B → A | 12: B → A → Y → A | 13: B → A → B → B / Y → Y | 14: A → A → B → B / Y → Y | 15: Y → A → B → A / B → B → Y → Y | 16: A → B → A / B → B → Y → Y | 17: A → B | 18: Y → X", en: "18 diagrams; in each, take the panels in numbered order. Input order — 1: A → B → A → B → Y | 2: A → B → A → B → Y | 3: A → B / A → B → B → Y → Y | 4: A → B / A → B → B → Y → Y | 5: A → B / A → B → B → Y → Y | 6: A → B | 7: A → B → B → Y → Y | 8: A → B | 9: A → B → B → Y → Y | 10: A → B → A → B / A → B | 11: A → B → A → B → A | 12: B → A → Y → A | 13: B → A → B → B / Y → Y | 14: A → A → B → B / Y → Y | 15: Y → A → B → A / B → B → Y → Y | 16: A → B → A / B → B → Y → Y | 17: A → B | 18: Y → X" } },
          ],
        },
      ],
      achievementSlug: "30_say_you",
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초 핑크 거리 북쪽 「ヒロイン」(키류) / 소텐보리 아시타바 공원 근처 「うた姫」(마지마)", en: "Heroine, north Pink Street, Kamurocho (Kiryu); Utahime near Ashitaba Park, Sotenbori (Majima)" },
      summary: {
        ko: "캐릭터별로 곡이 다릅니다. 키류는 다섯 곡(Judgement -심판-, 바보 같지, x3 SHINE, 실연의 인어, 사랑의 루주), 마지마는 네 곡(24시간 신데렐라, x3 SHINE, 실연의 인어, 사랑의 루주)에서 각각 90점 이상.",
        en: "The songs are per character: Kiryu needs 90+ on five (Judgement -Shinpan-, Bakamitai, x3 Shine, Heartbreak Mermaid, Rouge of Love) and Majima on four (24-hour Cinderella, x3 Shine, Heartbreak Mermaid, Rouge of Love).",
      },
      howTo: [
        { ko: "x3 SHINE·실연의 인어·사랑의 루주는 두 캐릭터가 각각 따로 90점을 내야 합니다. 키류로 냈다고 마지마 쪽이 채워지지 않습니다.", en: "x3 Shine, Heartbreak Mermaid and Rouge of Love each need 90+ from both characters — Kiryu's score does not fill Majima's row." },
        { ko: "노트가 라인에 닿는 순간이 아니라 커서에 겹치는 순간이 판정 기준입니다. 「Hold」는 끝까지 누르고 「Rapid」는 연타입니다.", en: "Judge on the note overlapping the cursor, not reaching the lane. Hold means hold to the end of the marker; Rapid means mash." },
        { ko: "마지마의 24시간 신데렐라는 난도가 높은 편입니다. 다른 곡으로 조작에 익숙해진 뒤 마지막에 도전하세요.", en: "Majima's 24-hour Cinderella is the harder one — leave it until the inputs feel natural." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Karaoke (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/karaoke" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },        { label: "ダラゲ！ — 龍が如く0 カラオケ（譜面）", url: "https://darage.com/guide/ryuzero/mini10.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "90점 대상 곡 악보 — 6곡", en: "Charts for the 90-point songs — 6" },
          note: { ko: "ダラゲ! 1곳의 자료입니다(Director's Cut). 연타(連打)는 빨간 칸, 길게 누르기(長押し)는 파란 칸입니다. 「無難に合いの手」로는 90점을 넘을 수 없어서, 合いの手 곡은 「イケイケで合いの手」 악보만 실었습니다. 장소는 키류가 카무로초 핑크 거리 북쪽 「ヒロイン」, 마지마가 소텐보리 아시타바 공원 근처 「うた姫」입니다. 버튼은 Switch 표기입니다: A=오른쪽(PS ○), B=아래(PS ×), X=위(PS △), Y=왼쪽(PS □). Xbox 패드에서는 같은 위치라도 글자가 A↔B, X↔Y로 바뀝니다.", en: "Single source, Darage (Director's Cut). Red bars are mash (連打), blue bars hold (長押し). The easy 「無難に合いの手」 mode caps below 90, so only the 「イケイケで合いの手」 charts are given for the duet songs. Kiryu sings at Heroine, north Pink Street, Kamurocho; Majima at Utahime near Ashitaba Park, Sotenbori. Buttons use the Switch layout: A = right (PS circle), B = bottom (PS cross), X = top (PS triangle), Y = left (PS square). On an Xbox pad the same positions are labelled the other way round (A↔B, X↔Y)." },
          puzzles: [
            { title: { ko: "JUDGEMENT -審判-（自分で歌う）", en: "JUDGEMENT -審判-（自分で歌う）" }, image: "/yakuza-0-karaoke/mini021.webp" },
            { title: { ko: "ばかみたい（自分で歌う）", en: "ばかみたい（自分で歌う）" }, image: "/yakuza-0-karaoke/mini022.webp" },
            { title: { ko: "24時間シンデレラ（自分で歌う）", en: "24時間シンデレラ（自分で歌う）" }, image: "/yakuza-0-karaoke/mini017.webp" },
            { title: { ko: "×3シャイン（イケイケで合いの手）", en: "×3シャイン（イケイケで合いの手）" }, image: "/yakuza-0-karaoke/mini018.webp", note: { ko: "키류와 마지마의 악보가 같습니다.", en: "Same chart for Kiryu and Majima." } },
            { title: { ko: "刹那の人魚姫（イケイケで合いの手）", en: "刹那の人魚姫（イケイケで合いの手）" }, image: "/yakuza-0-karaoke/mini019.webp", note: { ko: "키류와 마지마의 악보가 같습니다.", en: "Same chart for Kiryu and Majima." } },
            { title: { ko: "Rouge of Love（イケイケで合いの手）", en: "Rouge of Love（イケイケで合いの手）" }, image: "/yakuza-0-karaoke/mini020.webp", images: ["/yakuza-0-karaoke/mini020k.webp"], note: { ko: "첫 그림이 마지마, 두 번째가 키류입니다. 키류는 3번째 줄 처음에 A가 하나 더 있고(가사 없음), 대신 5번째 줄 처음의 A(가사 「そう安物よ」)가 없습니다.", en: "The first chart is Majima's, the second Kiryu's: Kiryu has one extra A at the start of line 3 (no lyric) and loses the A at the start of line 5 (lyric 「そう安物よ」)." } },
          ],
        },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드 (판타지 존·아웃런·스페이스 해리어·슈퍼 행온)", en: "Club SEGA arcade (Fantasy Zone, Out Run, Space Harrier, Super Hang-On)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "카무로초·소텐보리 — 클럽 세가", en: "Club SEGA in both cities" },
      summary: {
        ko: "스페이스 해리어 500만 점, 아웃런 500만 점, 판타지 존 10만 점, 슈퍼 행온 500만 점, 그리고 UFO 캐처 경품 5종·15종이 조건입니다.",
        en: "Five million points in Space Harrier, Out Run and Super Hang-On, 100,000 in Fantasy Zone, plus five and fifteen different UFO Catcher prizes.",
      },
      howTo: [
        { ko: "판타지 존이 가장 악명 높습니다. 10만 점은 스테이지를 빠르게 깨는 것보다 적을 계속 잡아 돈을 모으고 강화 아이템을 사서 오래 살아남는 쪽이 확실합니다.", en: "Fantasy Zone is the notorious one: 100,000 comes from staying alive and buying upgrades with the money you farm, not from rushing stages." },
        { ko: "아웃런과 슈퍼 행온의 500만 점은 완주 자체보다 타임 보너스가 큽니다. 코스를 외워 감속을 줄이는 것이 점수로 직결됩니다.", en: "Out Run and Super Hang-On pay their five million mostly in time bonus, so learning the course to avoid braking is what scores." },
        { ko: "UFO 캐처 경품 15종(ダラゲ!): 文鳥のブンちゃん(白·ピンク)·ジャンボブンちゃん / リスのマロン(青·赤)·ジャンボマロン / ウーパパ·ウーママ·ウーくん / エリマキトカゲ·キョン坊·キョンちゃん / オパオパフィギュア·カラカッパ·メガドライブぬいぐるみ. 기계 안은 이 「/」 묶음 다섯 가지 중 하나이거나, 9종이 섞인 여섯 번째 패턴입니다. 카무로초 「劇場前店」·소텐보리점 모두에서 전 경품이 나오고, 메가드라이브 인형은 먼저 뒤집은 뒤 다리를 잡으세요. 300엔에 3판입니다.", en: "The 15 UFO Catcher prizes (Darage): 文鳥のブンちゃん (white, pink), ジャンボブンちゃん / リスのマロン (blue, red), ジャンボマロン / ウーパパ, ウーママ, ウーくん / エリマキトカゲ, キョン坊, キョンちゃん / オパオパフィギュア, カラカッパ, メガドライブぬいぐるみ. A machine holds one of those five groups, or a sixth mixed set of nine. Both the Theater Square and Sotenbori branches stock every prize; flip the Mega Drive plush over first, then grab its legs. Three tries for ¥300." },
        { ko: "UFO 캐처는 같은 인형을 여러 번 뽑아도 카운트가 안 오릅니다. 서로 다른 경품 15종이 필요하므로, 안 나오는 인형이 있으면 카운터 직원에게 재입고를 부탁하세요.", en: "UFO Catcher counts distinct prizes only, so duplicates do nothing — ask the attendant to restock when the ones you need are not in the cabinet." },
      ],
      videos: [
        { title: { ko: "Fantasy Zone 공략 (Director's Cut)", en: "Fantasy Zone easy guide (Director's Cut)" }, url: YT("FFkdY2YqRXY") },
        { title: { ko: "Fantasy Zone 10만 점 달성 가이드", en: "Fantasy Zone 100,000 points guide" }, url: YT("3PoTCnwl65Q") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Fantasy Zone (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/fantasy-zone" },
        { label: "GameFAQs — Yakuza 0: UFO Catcher (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/ufo-catcher" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },        { label: "ダラゲ！ — 龍が如く0 UFOキャッチャー", url: "https://darage.com/guide/ryuzero/mini13.html" },
        { label: "ダラゲ！ — 龍が如く0 スペースハリアー", url: "https://darage.com/guide/ryuzero/mini16a.html" },
        { label: "ダラゲ！ — 龍が如く0 アウトラン", url: "https://darage.com/guide/ryuzero/mini16b.html" },
        { label: "ダラゲ！ — 龍が如く0 ファンタジーゾーン", url: "https://darage.com/guide/ryuzero/mini16c.html" },
        { label: "ダラゲ！ — 龍が如く0 スーパーハングオン", url: "https://darage.com/guide/ryuzero/mini16d.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "게임별 목표 점수 공략 — 4종", en: "Score-target routes per cabinet — all 4" },
          note: { ko: "ダラゲ! 1곳의 공략입니다(Director's Cut, 버튼은 Switch 표기 — ZR=오른쪽 트리거). 스테이지별 점수는 출처가 직접 기록한 대략치입니다.", en: "Single source, Darage (Director's Cut; buttons are Switch labels — ZR = right trigger). Per-stage scores are the source's own rough tallies." },
          puzzles: [
            { title: { ko: "스페이스 해리어 — 500만 점", en: "Space Harrier — 5,000,000" }, note: { ko: "연사(ZR)를 계속 누른 채 진행합니다. ステージ1은 나무·구름·풀이 전부 부서지고, 보스는 다가올 때 탄을 쏘니 피한 뒤 멀어질 때 본체를 칩니다(클리어 시 약 150만). ステージ2부터는 지상 장애물은 무시하고 공중에서 기둥과 탄 피하기에 집중합니다 — 돌기둥은 못 부숩니다. 보스는 계속 쏘니 원을 그리며 돌면서 가운데를 칩니다(약 300만). ステージ3은 버섯을 무시하고 공중에서 가는 기둥을 피합니다(약 480만, 잘 되면 이때 500만 돌파). ステージ4는 기둥과 수정 구슬 모두 못 부수니 피하기만 하세요 — 구슬은 바닥과 천장에 번갈아 나오므로 바닥에 나오면 공중으로, 천장에 나오면 바닥으로. 5번째는 실수가 없는 보너스 스테이지입니다.", en: "Hold rapid fire (ZR) throughout. Stage 1: trees, clouds and grass all break; the boss fires as it approaches, so dodge then hit it as it retreats (~1.5M at the clear). From stage 2, ignore ground obstacles and stay airborne dodging pillars and shots — stone pillars don't break; the boss fires constantly, so circle and hit the centre (~3M). Stage 3: ignore the mushrooms and weave the thin pillars in the air (~4.8M, often past 5M already). Stage 4: nothing breaks, just dodge — the crystal orbs alternate floor and ceiling, so go high when they're low and low when they're high. Stage 5 is a no-miss bonus stage." } },
            { title: { ko: "아웃런 — 500만 점", en: "Out Run — 5,000,000" }, image: "/yakuza-0-arcade/outrun-015.webp", images: ["/yakuza-0-arcade/outrun-016.webp"], note: { ko: "180km/h 무렵 LOW→HI로 기어를 바꾸면 290km/h까지 나옵니다. 각 스테이지 끝 갈림길에 따라 다음 스테이지가 바뀌고, 체크포인트를 지나면 남은 시간이 늘어납니다. 3스테이지 중간까지 가면 500만을 넘으므로 2스테이지를 넘기는 게 관건입니다. ダラゲ! 추천 루트는 첫 갈림길 오른쪽(지도 아래쪽 길) → 다음 갈림길 왼쪽입니다(두 번째 그림의 화살표). 못 돌 것 같으면 브레이크보다 먼저 액셀을 떼세요.", en: "Shift LOW → HI around 180 km/h to reach about 290. The fork at each stage's end picks the next stage, and checkpoints add time. Reaching mid-stage 3 passes 5M, so clearing stage 2 is the key. Darage's route: right at the first fork (the lower road on the map), then left at the next (arrows in the second image). If you can't make a corner, lift off the throttle before braking." } },
            { title: { ko: "판타지 존 — 10만 점", en: "Fantasy Zone — 100,000" }, note: { ko: "스테이지마다 기지 10개를 모두 부수면 보스가 나옵니다. 엔진은 가장 싼 BIG WINGS(100)로 충분합니다 — 너무 빠르면 오히려 피하기 어렵습니다. ステージ1은 무기 없이도 쉬우니 골드를 아끼고, 2·3은 7 WAY SHOT(5,000, 살 때마다 +4,000)을 사서 효과가 남아 있는 동안 기지를 최대한 부수세요. 보스 직전 상점에서 7 WAY SHOT을 사면 보스를 순식간에 잡습니다. ステージ1 보스는 입을 벌릴 때 입을, 2는 주위를 도는 구슬 전부를, 3은 왼쪽 레이저 발사기 9개를(첫 레이저는 바닥에 있으면 피함), 4는 위아래 촉수 22부위를 모두 빨갛게 만들면 격파입니다. 4는 기지가 전부 지상이라 바닥에 붙어 연사하며 밀고 가면 됩니다. 기지만 부숴도 4~5스테이지쯤에서 10만에 닿으며, 조금 모자라면 기지 하나를 남겨 두고 적을 잡아 점수를 채우세요(보스가 나오면 잡기 전까지 점수가 안 오릅니다). 위급용으로 SMART BOMB(화면의 적·탄 소거, 보스 탄은 못 지움)을 스테이지마다 하나 들고 가도 좋습니다.", en: "Destroying a stage's ten bases brings out the boss. The cheapest engine, BIG WINGS (100), is enough — faster makes dodging harder. Stage 1 is easy without weapons, so bank gold; for stages 2 and 3 buy 7 WAY SHOT (5,000, +4,000 per purchase) and wreck as many bases as you can while it lasts. Buying 7 WAY SHOT right before the boss melts it. Bosses: stage 1 — hit the mouth when it opens; 2 — destroy every orbiting ball; 3 — the nine laser emitters on its left (stay on the ground for the first laser); 4 — turn all 22 tentacle segments red. Stage 4's bases are all on the ground, so hug the floor firing. Bases alone reach 100,000 around stage 4–5; if you're just short, leave one base standing and farm enemies (score stops while the boss is out). Carry a SMART BOMB (clears enemies and bullets, not boss shots) per stage for emergencies." } },
            { title: { ko: "슈퍼 행온 — 500만 점", en: "Super Hang-On — 5,000,000" }, note: { ko: "BEGINNER 클래스(6스테이지)의 5스테이지까지 가면 500만을 넘습니다. 액셀은 계속 누르고, 280km/h 이상은 터보 스위치를 누르고 있어야 나옵니다(최대 324km/h). 터보는 직선에서만 쓰고 코너에서는 떼며, 그래도 못 돌 때만 액셀을 떼거나 브레이크를 씁니다.", en: "Reaching stage 5 of the BEGINNER class (6 stages) passes 5M. Keep the throttle down; above 280 km/h you need the turbo switch held (up to 324). Turbo on straights only, release it for corners, and lift or brake only if you still can't make the turn." } },
          ],
        },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "catfight",
      name: { ko: "캣 파이트", en: "Catfight Club" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "소텐보리 — 캣 파이트 클럽", en: "The Catfight Club, Sotenbori" },
      summary: {
        ko: "컴플리션은 캣 파이트로 누적 100만·1,000만·1억 엔 세 줄입니다. 직접 싸우는 게 아니라 선수에게 돈을 거는 도박입니다.",
        en: "Three rows: ¥1 million, ¥10 million and ¥100 million won at catfights. You bet on the fighters rather than fighting.",
      },
      howTo: [
        { ko: "가위바위보식 상성이 승부를 가릅니다. 상대의 약한 기술(별 1개)이 무엇인지 보고, 그 기술을 이기는 쪽만 계속 내면 최악의 경우에도 손해가 작습니다.", en: "It resolves like rock-paper-scissors: read which of the opponent's attacks is one-star, then keep throwing what beats it — worst case the loss is small." },
        { ko: "배당이 낮은 선수를 고르세요. 배당이 낮은 데는 이유가 있습니다. 제니퍼는 타격도 세서 무난하고, 모모코도 평이 좋습니다. 둘 중 그날 티커에서 상태가 좋은 쪽을 고르면 됩니다.", en: "Take the low-odds fighters — the odds are low for a reason. Jennifer hits hard and is a safe pick, Momoko has a good reputation; check the ticker and take whichever is having the better day." },
        { ko: "무승부에서 양쪽이 흰색이면 버튼을 연타하지 마세요. 연타로 상대가 이기면 색이 올라가 더 큰 피해를 입습니다. 그냥 지는 편이 낫습니다.", en: "On a tie where both are white, do not mash — if they win the mash-off their colour upgrades and hits harder. Take the tie loss." },
        { ko: "무지개 히트나 특수 기술이 발동했을 때만 ○를 연타하세요. 특수 기술은 한 대회 내내 한 번도 안 나오는 경우가 흔하므로 기대하고 배팅하면 안 됩니다.", en: "Only mash circle on a rainbow hit or when a special actually triggers — specials can sit out an entire tournament, so never bet expecting one." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Catfights (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/catfights" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },        { label: "ダラゲ！ — 龍が如く0 キャットファイト（選手データ）", url: "https://darage.com/guide/ryuzero/mini05.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "선수별 공격력·특수 능력 — 8명", en: "Fighter attack stats and specials — all 8" },
          note: { ko: "ダラゲ! 1곳의 표입니다. ★은 그 손을 냈을 때의 피해 기대치이고, 상대 선수는 기대치가 높은 손을 내는 경향이 있습니다. ダラゲ!의 PS4판 검증에서는 내 선수가 보(★4)에 강하면 상대가 계속 가위를 냈다고 합니다(관찰 기록). 근황 티커는 의욕·몸 상태·운이 무작위로 표시되며, 의욕이 좋으면 강한 기술(흰→파랑→초록→빨강→무지개)이, 운이 좋으면 특수 능력이 나오기 쉬운 것으로 보인다고 적었습니다. 누적 1억 엔은 배당이 가장 낮은 선수라도 9,999만 엔을 걸고 한 번 우승을 맞히면 끝나며, 빨리 끝내려면 제니퍼를 권합니다.", en: "Single source, Darage. Stars are each hand's expected damage, and opponents tend to throw their high-star hands. In Darage's PS4 tests, when their fighter was strongest at paper (★4), opponents kept throwing scissors (an observation, not a rule). The form ticker randomly reports mood, condition or luck; good mood seems to raise strong-move odds (white → blue → green → red → rainbow) and good luck the special's. The ¥100 million row clears with one winning ¥99.99 million bet even on the lowest-odds fighter — Jennifer for a quick finish." },
          puzzles: [
            { title: { ko: "ジェニファー", en: "ジェニファー" }, note: { ko: "공격력 — 바위(グー) ★5 · 가위(チョキ) ★5 · 보(パー) ★4. 특수 능력 「電光石火」: 시합 시작 직후 확률로 발동해 선제공격. 상태가 좋다는 소식: 知人とのポーカーで大勝ち（運〇） / 昨夜食べたステーキが絶品でご機嫌（やる気〇）.", en: "Attack — rock (グー) ★5 · scissors (チョキ) ★5 · paper (パー) ★4. Special 「電光石火」: may trigger right at the start for a first strike. Good-form news: 知人とのポーカーで大勝ち（運〇） / 昨夜食べたステーキが絶品でご機嫌（やる気〇）." } },
            { title: { ko: "南雲さゆり", en: "南雲さゆり" }, note: { ko: "공격력 — 바위(グー) ★5 · 가위(チョキ) ★1 · 보(パー) ★3. 특수 능력 「電光石火」: 시합 시작 직후 확률로 발동해 선제공격.", en: "Attack — rock (グー) ★5 · scissors (チョキ) ★1 · paper (パー) ★3. Special 「電光石火」: may trigger right at the start for a first strike." } },
            { title: { ko: "高城桃子", en: "高城桃子" }, note: { ko: "공격력 — 바위(グー) ★3 · 가위(チョキ) ★5 · 보(パー) ★4. 특수 능력 「自然治癒」: 시합 중 확률로 발동해 체력 회복.", en: "Attack — rock (グー) ★3 · scissors (チョキ) ★5 · paper (パー) ★4. Special 「自然治癒」: may trigger mid-match to restore health." } },
            { title: { ko: "上代結衣子", en: "上代結衣子" }, note: { ko: "공격력 — 바위(グー) ★3 · 가위(チョキ) ★4 · 보(パー) ★1. 특수 능력 「自然治癒」: 시합 중 확률로 발동해 체력 회복.", en: "Attack — rock (グー) ★3 · scissors (チョキ) ★4 · paper (パー) ★1. Special 「自然治癒」: may trigger mid-match to restore health." } },
            { title: { ko: "フランシスカ", en: "フランシスカ" }, note: { ko: "공격력 — 바위(グー) ★3 · 가위(チョキ) ★3 · 보(パー) ★4. 특수 능력 「難攻不落」: 빈사 시 확률로 발동해 체력을 회복하고 복귀.", en: "Attack — rock (グー) ★3 · scissors (チョキ) ★3 · paper (パー) ★4. Special 「難攻不落」: may trigger when nearly down, recovering to fight on." } },
            { title: { ko: "小野寺麗", en: "小野寺麗" }, note: { ko: "공격력 — 바위(グー) ★3 · 가위(チョキ) ★3 · 보(パー) ★1. 특수 능력 「難攻不落」: 빈사 시 확률로 발동해 체력을 회복하고 복귀.", en: "Attack — rock (グー) ★3 · scissors (チョキ) ★3 · paper (パー) ★1. Special 「難攻不落」: may trigger when nearly down, recovering to fight on." } },
            { title: { ko: "巽まりあ", en: "巽まりあ" }, note: { ko: "공격력 — 바위(グー) ★1 · 가위(チョキ) ★2 · 보(パー) ★4. 특수 능력 「一発逆転」: 빈사 시 확률로 발동해 한 방에 역전승.", en: "Attack — rock (グー) ★1 · scissors (チョキ) ★2 · paper (パー) ★4. Special 「一発逆転」: may trigger when nearly down for a one-hit comeback win." } },
            { title: { ko: "北見友里恵", en: "北見友里恵" }, note: { ko: "공격력 — 바위(グー) ★2 · 가위(チョキ) ★2 · 보(パー) ★4. 특수 능력 「一発逆転」: 빈사 시 확률로 발동해 한 방에 역전승.", en: "Attack — rock (グー) ★2 · scissors (チョキ) ★2 · paper (パー) ★4. Special 「一発逆転」: may trigger when nearly down for a one-hit comeback win." } },
          ],
        },
      ],
      achievementSlug: "31_cat_scratch",
    },
    {
      slug: "fishing",
      name: { ko: "낚시", en: "Fishing" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "카무로초 — 부두 / 소텐보리 — 강가", en: "Kamurocho Pier and the Sotenbori riverside" },
      summary: {
        ko: "컴플리션은 민물 5종·15종, 바다 5종·18종 수집입니다. 카무로초 부두가 바다, 소텐보리 강이 민물입니다.",
        en: "Collect 5 then 15 freshwater fish, and 5 then 18 saltwater. Kamurocho Pier is the saltwater spot, the Sotenbori river the freshwater one.",
      },
      howTo: [
        { ko: "어느 쪽에 서느냐로 나오는 어종이 갈립니다. 카무로초 부두는 좌측에서 뱅어·문절망둑·오징어·쏨뱅이·보리새우·거미게·복어·실러캔스·참치가, 우측에서 쥐치·가시복·문어·광어·붕장어·도미·백상아리·청새치·산갈치가 나옵니다.", en: "Which side you stand on decides the species. At Kamurocho Pier the left gives whitebait, goby, squid, scorpionfish, tiger prawn, spider crab, fugu, coelacanth and tuna; the right gives filefish, porcupinefish, octopus, flounder, conger eel, sea bream, great white, marlin and oarfish." },
        { ko: "소텐보리는 북쪽에서 붕어·잉어·뱀장어·아홀로틀·연어·비단잉어·유령잉어가, 남쪽에서 은어·가물치·아로와나·자라·배스·무지개송어·이토가 나옵니다. 가재는 양쪽 모두입니다.", en: "In Sotenbori the north bank gives crucian, koi carp, eel, axolotl, salmon, nishiki carp and ghost koi; the south gives sweetfish, snakehead, arowana, softshell turtle, black bass, rainbow trout and ito. Crayfish appear on either." },
        { ko: "그림자 모양으로 어종을 구분합니다. 가늘고 긴 것, 작지만 넓은 것, 덩어리, 아주 큰 것으로 나뉘므로 목표 어종의 그림자만 노리고 나머지는 흘려보내세요.", en: "Shadows tell you what is down there — long and thin, small but wide, blob, or very large — so cast only at the shape you still need." },
        { ko: "낚싯대는 에비스야에서 3,000만 엔에 파는 「超釣神」이 최강이라, ダラゲ!는 이것만 있으면 바다·강 어디서든 낚시가 수월하다고 봅니다. 그 밖에 初釣丸(처음 낚시할 때 지급), 海丸·大海王(키류 — 머니 아일랜드 「天宝寿司」 구입 / 서브스토리 53 「寿司吟の板前」 후 「寿司吟」 획득), 淡水丸·釣大河(마지마 — 수상장사 아일랜드 「ふぐ乃 堺」 구입 / 서브스토리 79 「神味庵の主人」 후 「神味庵」 획득)가 있습니다.", en: "The best rod is 「超釣神」, ¥30 million at Ebisu Pawn — Darage says it makes every fish easy in both spots. The others: 初釣丸 (given the first time you fish), 海丸 and 大海王 for Kiryu (buying 「天宝寿司」 in Real Estate Royale / winning 「寿司吟」 after substory 53), 淡水丸 and 釣大河 for Majima (buying 「ふぐ乃 堺」 in Cabaret Club Czar / winning 「神味庵」 after substory 79)." },
        { ko: "밑밥은 3분쯤 효과가 가고, 좋은 것일수록 희귀어가 잘 나옵니다. 撒き餌·高級撒き餌는 M스토어, 特選·究極撒き餌는 드림 머신에서 나오며, ダラゲ!는 高級撒き餌로 충분하다고 적었습니다. 이 작품은 시간대와 상관없이 밤에도 낮에도 전 어종이 나옵니다.", en: "Bait lasts about three minutes and better bait draws rarer fish. 撒き餌 and 高級撒き餌 come from M Store, 特選 and 究極撒き餌 from the Dream Machines; Darage found 高級撒き餌 enough. Time of day does not matter here — every species appears both night and day." },
        { ko: "그림자 유형별 어종(ダラゲ!): 보통형 — 뱅어 / 은어·잉어·은색 아로와나·배스·연어·무지개송어·비단잉어·이토·인면어. 마름모형 — 쥐치·가자미·참돔 / 붕어. 가늘고 긴 형 — 망둑·붕장어 / 가물치·뱀장어·아홀로틀. 둥근형 — 오징어·쑥감펭·가시복·보리새우·문어·외발게·자주복 / 가재·자라. 거대형 — 실러캔스·백상아리·청새치·참치. 특수형 — 산갈치. (각 유형에서 「/」 앞이 바다, 뒤가 민물)", en: "Fish by shadow type (Darage): normal — whitebait / sweetfish, carp, silver arowana, black bass, salmon, rainbow trout, nishiki koi, ito, human-face fish. Diamond — filefish, flounder, red snapper / crucian. Long and thin — goby, conger / snakehead, eel, axolotl. Round — squid, devil stinger, porcupinefish, tiger prawn, octopus, one-legged crab, tiger puffer / crayfish, softshell turtle. Huge — coelacanth, great white, marlin, tuna. Special — oarfish. (Sea species before the slash, river after.)" },
        { ko: "참치·산갈치·이토·유령잉어는 고급 미끼가 있어야 사실상 나옵니다. 산갈치는 위치가 나쁘면 낚이지 않기도 하므로, 나갔다 들어와 미끼를 다시 뿌리세요.", en: "Tuna, oarfish, ito and ghost koi effectively need Quality Bait, and the oarfish sometimes spawns in an uncatchable position — back out and throw fresh bait." },
      ],
      videos: [
        { title: { ko: "민물 15종 낚시 가이드", en: "All 15 freshwater fish" }, url: YT("UGt3PXkmMDA") },
        { title: { ko: "바다 18종 낚시 가이드 (카무로초 부두)", en: "All 18 saltwater fish (Kamurocho Pier)" }, url: YT("uUyIgaakqHk") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Fishing (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/fishing" },
        { label: "ダラゲ！ — 龍が如く0 海釣り、川釣り", url: "https://darage.com/guide/ryuzero/mini08.html" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "telephone-club",
      name: { ko: "텔레폰 클럽", en: "Telephone Club" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "카무로초 — 텔레폰 클럽", en: "The telephone club, Kamurocho" },
      summary: {
        ko: "컴플리션은 하루키·아야카·리쿠 세 명과 친해지는 세 줄입니다. 하루키는 서브스토리 #33, 아야카는 #32, 리쿠는 #31로 이어집니다.",
        en: "Three rows: befriend Haruki, Ayaka and Riku — which are substories #33, #32 and #31 respectively.",
      },
      howTo: [
        { ko: "상대를 구분할 단서는 비키니 색, QTE, 목소리뿐입니다. 대사나 질문 내용은 누구인지와 아무 상관이 없습니다.", en: "The only tells are the bikini colour, the QTE and the voice — the lines they say and the questions they ask correlate with nothing." },
        { ko: "파랑은 리쿠(성공), 하양은 아야카(성공), 초록은 하루키(성공)입니다. 같은 색의 나머지 두 명은 실패 상대이며 각각 다른 서브스토리로 이어집니다.", en: "Blue is Riku, white is Ayaka, green is Haruki — the successes. The other two women of each colour are the failures, and each leads to a different substory." },
        { ko: "세 명을 다 만난 뒤에는 해당 색이 나오면 그냥 끊어 시간을 아끼세요. 극장 앞 광장에 도착한 뒤의 선택지도 상대마다 정해져 있습니다 — 리쿠는 「横から様子を見る」→「正面から様子を見る」→「奥の女に声をかける」, 아야카는 「더 가까이 가서 본다」 후 「멀리 있는 여자」, 하루키는 「멀리 있는 여자」 후 나타나는 남자와 전투입니다.", en: "Once you have all three, hang up on those colours to save time. The choices at Theater Square are fixed too: Riku is 「横から様子を見る」 (watch from the side) → 「正面から様子を見る」 (watch from the front) → 「奥の女に声をかける」 (talk to the woman at the back), Ayaka is \"move in for a better look\" then \"talk to the further woman\", Haruki is \"talk to the farther woman\" then a fight with the man who shows up." },
        { ko: "성공하면 세 사람의 삐삐 번호를 받습니다. 다트·당구·볼링·디스코·가라오케에 불러낼 수 있지만 컴플리션과는 무관합니다.", en: "Success gets you their pager numbers, which let you call them to darts, pool, bowling, disco or karaoke — none of which affects completion." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Telephone Club (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/telephone-club" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },        { label: "ダラゲ！ — 龍が如く0 テレクラ（会話パートのパターン集）", url: "https://darage.com/guide/ryuzero/mini09.html" },
        { label: "ゲーム攻略マン — サブストーリー No.31～No.40", url: "https://dswiipspwikips3.jp/yakuza0/substory04.html" },
      ],
      puzzleSets: [
        {
          title: { ko: "대화 파트 정답 블록 — 29종", en: "Conversation answer blocks — all 29" },
          note: { ko: "ダラゲ! 1곳의 표입니다. 질문(또는 키류의 속마음 대사)이 뜨면 가타카나 블록 넷 중 정답을 쏩니다 — 오른쪽 스틱을 돌려 다이얼을 1까지 채운 뒤 그대로 기울인 채 왼쪽 스틱으로 겨누고 오른쪽 스틱을 놓습니다. 오답은 정답과 한두 글자만 다른 것이 많으니 주의하세요. 시간이 지나면 정답 블록이 노랗게 깜박이므로, 롱 코스(3,000엔·5분)로 들어가 기다리는 방법도 있습니다. 같은 속마음 대사(「褒めてみるか……？」 등)는 함께 뜨는 오답으로 구분하세요.", en: "Single source, Darage. When a question (or one of Kiryu's inner lines) appears, shoot the right katakana block of the four: spin the right stick until the dial reaches 1, keep it tilted, aim with the left stick, then release the right stick. Decoys often differ by a character or two. After a while the right block flashes yellow, so the Long course (¥3,000, 5 min) lets you simply wait. Inner lines that repeat (「褒めてみるか……？」 etc.) are told apart by the decoys shown with them." },
          puzzles: [
            { title: { ko: "1. どんな体形してるの？", en: "1. どんな体形してるの？" }, note: { ko: "정답: 「ガッチリ」 · 함께 뜨는 오답: カッチリ / ガッカリ / ギックリ", en: "Answer: 「ガッチリ」 · decoys shown with it: カッチリ / ガッカリ / ギックリ" } },
            { title: { ko: "2. 今おいくつなんですか？", en: "2. 今おいくつなんですか？" }, note: { ko: "정답: 「ハタチ」 · 함께 뜨는 오답: ハダシ / ハマチ / ヨンジュウロク", en: "Answer: 「ハタチ」 · decoys shown with it: ハダシ / ハマチ / ヨンジュウロク" } },
            { title: { ko: "3. どういう女の子が好きなんですか？", en: "3. どういう女の子が好きなんですか？" }, note: { ko: "정답: 「オマエダ」 · 함께 뜨는 오답: オヤマダ / オトコダ / オカアサン", en: "Answer: 「オマエダ」 · decoys shown with it: オヤマダ / オトコダ / オカアサン" } },
            { title: { ko: "4. 積極的な子はイヤですか？", en: "4. 積極的な子はイヤですか？" }, note: { ko: "정답: 「カンゲイダ」 · 함께 뜨는 오답: カンコウダ / カンガイブカイ / ガクゲイカイ", en: "Answer: 「カンゲイダ」 · decoys shown with it: カンコウダ / カンガイブカイ / ガクゲイカイ" } },
            { title: { ko: "5. どんなスポーツが好きなんですか？", en: "5. どんなスポーツが好きなんですか？" }, note: { ko: "정답: 「ヤキュウ」 · 함께 뜨는 오답: ヤギュウ / ヤキニク / ヤギジル", en: "Answer: 「ヤキュウ」 · decoys shown with it: ヤギュウ / ヤキニク / ヤギジル" } },
            { title: { ko: "6. どんなお仕事してるんですか？", en: "6. どんなお仕事してるんですか？" }, note: { ko: "정답: 「フドウサン」 · 함께 뜨는 오답: トウサン / クドウサン / ブドウサワー", en: "Answer: 「フドウサン」 · decoys shown with it: トウサン / クドウサン / ブドウサワー" } },
            { title: { ko: "7. テレクラで知り合った子と恋愛できますか？", en: "7. テレクラで知り合った子と恋愛できますか？" }, note: { ko: "정답: 「レンアイデキル」 · 함께 뜨는 오답: レンアイデキナイ / レンラクマデ / レンコンカタイ", en: "Answer: 「レンアイデキル」 · decoys shown with it: レンアイデキナイ / レンラクマデ / レンコンカタイ" } },
            { title: { ko: "8. 甘えてもいい～？", en: "8. 甘えてもいい～？" }, note: { ko: "정답: 「アマエテクレ」 · 함께 뜨는 오답: アマアマヤ / アマエテクレルナ / アマメノカレー", en: "Answer: 「アマエテクレ」 · decoys shown with it: アマアマヤ / アマエテクレルナ / アマメノカレー" } },
            { title: { ko: "9. もしかして、緊張してます？", en: "9. もしかして、緊張してます？" }, note: { ko: "정답: 「キンチョウシテル」 · 함께 뜨는 오답: ギンコウゴウトウ / カンチョウシテル / ギンギンシテル", en: "Answer: 「キンチョウシテル」 · decoys shown with it: ギンコウゴウトウ / カンチョウシテル / ギンギンシテル" } },
            { title: { ko: "10. どこに行こっか～？", en: "10. どこに行こっか～？" }, note: { ko: "정답: 「カラオケ」 · 함께 뜨는 오답: カンオケ / カラアゲ / ケイムショ", en: "Answer: 「カラオケ」 · decoys shown with it: カンオケ / カラアゲ / ケイムショ" } },
            { title: { ko: "11. 彼女からどう呼ばれたい？", en: "11. 彼女からどう呼ばれたい？" }, note: { ko: "정답: 「アダナダナ」 · 함께 뜨는 오답: アナコンダ / アンサンダナ / アザナダナ", en: "Answer: 「アダナダナ」 · decoys shown with it: アナコンダ / アンサンダナ / アザナダナ" } },
            { title: { ko: "12. 私のこと、どう思う？", en: "12. 私のこと、どう思う？" }, note: { ko: "정답: 「ウマガアウ」 · 함께 뜨는 오답: ウマミタイ / ウメヲアエタイ / ウマソウ", en: "Answer: 「ウマガアウ」 · decoys shown with it: ウマミタイ / ウメヲアエタイ / ウマソウ" } },
            { title: { ko: "13. エッチな子は……　イヤ？", en: "13. エッチな子は……　イヤ？" }, note: { ko: "정답: 「カンゲイダ」 · 함께 뜨는 오답: カンコウダ / ガクゲイカイ / カンガイブカイ", en: "Answer: 「カンゲイダ」 · decoys shown with it: カンコウダ / ガクゲイカイ / カンガイブカイ" } },
            { title: { ko: "14. もっとお話できたらなぁ……", en: "14. もっとお話できたらなぁ……" }, note: { ko: "정답: 「オレモハナシタイ」 · 함께 뜨는 오답: オレハモウイイ / オリオリオリオ～ / オレンジタベタイ", en: "Answer: 「オレモハナシタイ」 · decoys shown with it: オレハモウイイ / オリオリオリオ～ / オレンジタベタイ" } },
            { title: { ko: "15. （褒めてみるか……？）", en: "15. （褒めてみるか……？）" }, note: { ko: "정답: 「ハナシテテタノシイ」 · 함께 뜨는 오답: ハシタナイテ / ハデナイノシシ / ハナシガイシタイ", en: "Answer: 「ハナシテテタノシイ」 · decoys shown with it: ハシタナイテ / ハデナイノシシ / ハナシガイシタイ" } },
            { title: { ko: "16. （褒めてみるか……？）", en: "16. （褒めてみるか……？）" }, note: { ko: "정답: 「ソダチガイイナ」 · 함께 뜨는 오답: セチガライナ / スダチノトキダナ / ソダチザカリ", en: "Answer: 「ソダチガイイナ」 · decoys shown with it: セチガライナ / スダチノトキダナ / ソダチザカリ" } },
            { title: { ko: "17. （褒めてみるか……？）", en: "17. （褒めてみるか……？）" }, note: { ko: "정답: 「モテルダロ？」 · 함께 뜨는 오답: モテナイダロ？ / モチクウダロ？ / モテルホウダゾ", en: "Answer: 「モテルダロ？」 · decoys shown with it: モテナイダロ？ / モチクウダロ？ / モテルホウダゾ" } },
            { title: { ko: "18. （褒めてみるか……？）", en: "18. （褒めてみるか……？）" }, note: { ko: "정답: 「モットハナシタイ」 · 함께 뜨는 오답: モットモハズカシイ / モットーハナイ / モウキリタイ", en: "Answer: 「モットハナシタイ」 · decoys shown with it: モットモハズカシイ / モットーハナイ / モウキリタイ" } },
            { title: { ko: "19. （印象を褒めてみるか……？）", en: "19. （印象を褒めてみるか……？）" }, note: { ko: "정답: 「キガアウナ」 · 함께 뜨는 오답: キハタシカカ / キニクワナイナ / キガアワナイ", en: "Answer: 「キガアウナ」 · decoys shown with it: キハタシカカ / キニクワナイナ / キガアワナイ" } },
            { title: { ko: "20. （印象を褒めてみるか……？）", en: "20. （印象を褒めてみるか……？）" }, note: { ko: "정답: 「ハナシヤスイ」 · 함께 뜨는 오답: バナナヤスイ / ハヤシライス / ハナスコトナイ", en: "Answer: 「ハナシヤスイ」 · decoys shown with it: バナナヤスイ / ハヤシライス / ハナスコトナイ" } },
            { title: { ko: "21. （印象を褒めてみるか……？）", en: "21. （印象を褒めてみるか……？）" }, note: { ko: "정답: 「イヤサレルナ」 · 함께 뜨는 오답: ツカレルナ / イヤラシイナ / イカレテルナ", en: "Answer: 「イヤサレルナ」 · decoys shown with it: ツカレルナ / イヤラシイナ / イカレテルナ" } },
            { title: { ko: "22. （雰囲気を褒めてみるか……？）", en: "22. （雰囲気を褒めてみるか……？）" }, note: { ko: "정답: 「ヤサシソウ」 · 함께 뜨는 오답: ホウレンソウ / マサシクソウ / ヤラシソウ", en: "Answer: 「ヤサシソウ」 · decoys shown with it: ホウレンソウ / マサシクソウ / ヤラシソウ" } },
            { title: { ko: "23. （声を褒めてみるか……？）", en: "23. （声を褒めてみるか……？）" }, note: { ko: "정답: 「カワイイコエ」 · 함께 뜨는 오답: カワイイカオ / ガラガラコエ / コエガオトコ", en: "Answer: 「カワイイコエ」 · decoys shown with it: カワイイカオ / ガラガラコエ / コエガオトコ" } },
            { title: { ko: "24. （年齢に関して聞いてみるか……？）", en: "24. （年齢に関して聞いてみるか……？）" }, note: { ko: "정답: 「ワカソウダ」 · 함께 뜨는 오답: ワカゾウダ / ワケワカメ / ババアダナ", en: "Answer: 「ワカソウダ」 · decoys shown with it: ワカゾウダ / ワケワカメ / ババアダナ" } },
            { title: { ko: "25. （個人的なことを聞いてみるか……）", en: "25. （個人的なことを聞いてみるか……）" }, note: { ko: "정답: 「シゴトハナニ？」 · 함께 뜨는 오답: シゴノセカイアル？ / シゴトクレナイ？ / シゴクトウゼン", en: "Answer: 「シゴトハナニ？」 · decoys shown with it: シゴノセカイアル？ / シゴトクレナイ？ / シゴクトウゼン" } },
            { title: { ko: "26. （個人的なことを聞いてみるか……）", en: "26. （個人的なことを聞いてみるか……）" }, note: { ko: "정답: 「ハツキスノアイテハ」 · 함께 뜨는 오답: ハツイクガイイナ / ハツメイカノアイデア / ハズカシインダロ", en: "Answer: 「ハツキスノアイテハ」 · decoys shown with it: ハツイクガイイナ / ハツメイカノアイデア / ハズカシインダロ" } },
            { title: { ko: "27. （個人的なことを聞いてみるか……）", en: "27. （個人的なことを聞いてみるか……）" }, note: { ko: "정답: 「カラダニジシンアル？」 · 함께 뜨는 오답: カラテノタツジン？ / カナダニジシンアル？ / カラダニニンジンイイ？", en: "Answer: 「カラダニジシンアル？」 · decoys shown with it: カラテノタツジン？ / カナダニジシンアル？ / カラダニニンジンイイ？" } },
            { title: { ko: "28. （口説いてみるか……？）", en: "28. （口説いてみるか……？）" }, note: { ko: "정답: 「ウンメイヲカンジル」 · 함께 뜨는 오답: ウムヲイワサナイ / ウミノオヤガイコク / ウマイカスジル", en: "Answer: 「ウンメイヲカンジル」 · decoys shown with it: ウムヲイワサナイ / ウミノオヤガイコク / ウマイカスジル" } },
            { title: { ko: "29. （何か聞いてみるか……？）", en: "29. （何か聞いてみるか……？）" }, note: { ko: "정답: 「チャームポイント」 · 함께 뜨는 오답: クラムチャウダー / チャイムピンポン / チャンピオンベルト", en: "Answer: 「チャームポイント」 · decoys shown with it: クラムチャウダー / チャイムピンポン / チャンピオンベルト" } },
          ],
        },
      ],
      achievementSlug: "28_what_a",
    },
    {
      slug: "gambling",
      name: { ko: "도박장·카지노", en: "Gambling Hall & Casino" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "카무로초·소텐보리 — 도박장 및 카지노", en: "The gambling dens and casinos in both cities" },
      summary: {
        ko: "여덟 줄입니다 — 포커 1,000만, 블랙잭 500만, 바카라 1,000만, 룰렛 1,000만, 초한 100만, 주사위(치효) 100만, 코이코이 100만, 오이초카부 100만 엔.",
        en: "Eight rows: ¥10 million in poker, ¥5 million in blackjack, ¥10 million in baccarat and roulette each, and ¥1 million each in cho-han, cee-lo, koi-koi and oicho-kabu.",
      },
      howTo: [
        { ko: "금액이 크므로 이카사마 아이템을 먼저 구하는 편이 훨씬 빠릅니다. 블랙잭은 딜러를 연속 버스트시키는 부적, 초한은 다음 판을 짝수로 고정하는 아이템이 대표적입니다.", en: "The numbers are large, so pick up the cheat items first — the blackjack amulets bust the dealer for several hands, and cho-han has an item that forces the next roll even." },
        { ko: "블랙잭 베팅 상한은 연승으로 올라갑니다. 이겨서 상한을 먼저 올린 뒤 이카사마를 쓰는 편이 같은 아이템으로 몇 배를 법니다.", en: "Blackjack raises your cap on a win streak, so climb the cap first and spend the cheat afterwards — the same item then earns several times more." },
        { ko: "초한은 상한이 오르려면 한 번 자리를 떴다 돌아와야 반영됩니다. 몇 판 이겼다면 나갔다 들어오세요.", en: "Cho-han only applies its raised ceiling after you leave and come back, so step out once you have a few wins." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 0: Blackjack (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/blackjack" },
        { label: "GameFAQs — Yakuza 0: Cho-han (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/cho-han" },
        { label: "GameFAQs — Yakuza 0: Completion Metrics (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/816306-yakuza-0/faqs/74451/completion-metrics" },
      ],
      achievementSlug: "28_what_a",
    },
  ],
};

