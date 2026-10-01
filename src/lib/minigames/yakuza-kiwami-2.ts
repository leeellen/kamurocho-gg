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
      location: { ko: "소텐보리 — 캬바쿠라 「포샤인」", en: "Four Shine, Sotenbori" },
      summary: {
        ko: "4장 후반 포샤인을 인수하는 이벤트로 튜토리얼이 열리고, 그랑프리 자체는 6장부터 참가할 수 있습니다. 프레시 → 파라다이스 → 이그제큐티브 → 밀리어네어 → 파이널 챔피언십 순으로 다섯 개 리그를 올라갑니다.",
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
      source: [
        { label: "ゲーム攻略マン — 龍が如く極2 新・水商売アイランド", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/nightlife-island/" },
        { label: "ゲーム攻略マン — 龍が如く極2 新・水商売アイランド リーグ攻略", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/nightlife-island/fresh-league.html" },
        { label: "ゲーム攻略マン — 龍が如く極2 キャストのデートイベント", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/nightlife-island/koyuki-event.html" },
      ],
      achievementSlug: "lexus2_cabaret_island_gp_all_clear",
      puzzleSets: [
        {
          title: { ko: "리그별 공략 — 챔피언십 조건·상대 매출·제휴 점포", en: "League by league — championship gate, rival take, tie-up shops" },
          note: { ko: "출처 1곳(ゲーム攻略マン). 지도는 리그별 제휴 점포 위치이며 번호가 아래 목록과 대응합니다. 상대 매출·피버 히트 패턴은 출처의 플레이 기록 기준입니다.", en: "One source (ゲーム攻略マン). The maps mark each league's tie-up shops; numbers match the lists. Rival takes and Fever Heat patterns are from the source's own runs." },
          puzzles: [
            { title: { ko: "프레시 리그", en: "Fresh League" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/fresh-league-shop.jpg", note: { ko: "4장 종반 포샤인 인수 이벤트로 튜토리얼을 한 번 치른 뒤 유키에게 말을 걸면 시작합니다. 리그전 최고 수익 100만 엔을 넘기면 챔피언십에 도전할 수 있는데, 상대 「히로시마 스위트 갓」이 140~150만 엔을 벌므로 리그전 매출이 150만 엔을 넘을 때까지 제휴 점포를 전부 사고 캐스트 레벨을 올리세요. 이기면 파라다이스 리그 승격, 트로피 「祝グランプリ優勝！」, 플래티넘 캐스트 「카나」 가입. 제휴 점포(지도 번호. 이름 비용·팬 수): 1. 寿司仕出し 銀介 7000円·45人 / 2. 団長そば 6500円·40人 / 3. le miel 1万円·50人 / 4. ごはん処 おっかあ 4500円·25人 / 5. HOTEL BALLON 3万円·90人 / 6. ミート今野 2000円·20人 / 7. BARサッカリン 1万円·30人 / 8. 蒼天レスリング 2万円·70人 / 9. BAR MOON RIVER 1万3000円·55人 / 10. ええやろ寿司 5800円·48人.", en: "Opens when you talk to Yuki after the Four Shine takeover tutorial late in Chapter 4. Beating a ¥1,000,000 best take in league play unlocks the championship, but rival Hiroshima Sweet God makes ¥1.4–1.5M — buy every tie-up shop and level your cast until league takes clear ¥1.5M. Winning promotes you to Paradise, pops the trophy 祝グランプリ優勝！ and adds platinum cast Kana. Tie-up shops (map no. name cost·fans): 1. 寿司仕出し 銀介 7000円·45人 / 2. 団長そば 6500円·40人 / 3. le miel 1万円·50人 / 4. ごはん処 おっかあ 4500円·25人 / 5. HOTEL BALLON 3万円·90人 / 6. ミート今野 2000円·20人 / 7. BARサッカリン 1万円·30人 / 8. 蒼天レスリング 2万円·70人 / 9. BAR MOON RIVER 1万3000円·55人 / 10. ええやろ寿司 5800円·48人." } },
            { title: { ko: "파라다이스 리그", en: "Paradise League" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/paradise-league-shop.jpg", note: { ko: "최고 수익 180만 엔에서 챔피언십이 열립니다. 상대 「오사카 헤븐즈 갓」은 255~270만 엔으로 초반 러시형이라 중반까지는 밀리지만, 영업 종료 시 석유왕 내점으로 30만 엔이 붙으므로 250만 엔쯤 벌면 이깁니다. 상대가 Lv.1 피버 히트로 캐스트 HP를 깎으면 Lv.2 피버 히트·포상·칭찬으로 HP 회복을 우선하세요. 리그전 목표 매출 250만 엔. 이기면 플래티넘 캐스트 「AIKA」 가입. 제휴 점포(지도 번호. 이름 비용·팬 수): 1. 中華料理 岩蜜飯店 1万9000円·55人 / 2. 和食 清 2万5000円·100人 / 3. LG WEST 3万2000円·75人 / 4. 大気軒 2万円·50人 / 5. お好み焼き春玉亭 3万2000円·85人 / 6. Turtle Hotel 7万9000円·250人 / 7. 古夢呂そば 1万8000円·65人 / 8. 串かつ 揚げちらかし 4万円·90人 / 9. SFT VILLAGE 8万4000円·230人 / 10. REVENGE BOOKS 6万円·200人.", en: "The championship opens at a ¥1.8M best take. Rival Osaka Heaven's God makes ¥2.55–2.7M and front-loads it, so you trail into the middle, but the oil-king visit at closing adds ¥300,000 — around ¥2.5M wins. When they fire a Lv.1 Fever Heat and drain your cast's HP, answer with a Lv.2 Fever Heat, rewards or praise to heal first. Target league take: ¥2.5M. Winning adds platinum cast AIKA. Tie-up shops (map no. name cost·fans): 1. 中華料理 岩蜜飯店 1万9000円·55人 / 2. 和食 清 2万5000円·100人 / 3. LG WEST 3万2000円·75人 / 4. 大気軒 2万円·50人 / 5. お好み焼き春玉亭 3万2000円·85人 / 6. Turtle Hotel 7万9000円·250人 / 7. 古夢呂そば 1万8000円·65人 / 8. 串かつ 揚げちらかし 4万円·90人 / 9. SFT VILLAGE 8万4000円·230人 / 10. REVENGE BOOKS 6万円·200人." } },
            { title: { ko: "이그제큐티브 리그", en: "Executive League" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/executive-league-shop.jpg", note: { ko: "고발 페널티로 출근 인원이 최대 6명으로 묶입니다(편성 화면에서 △로 빼기). 최고 수익 320만 엔에서 챔피언십이 열리고, 상대 「카무로초 갓퀸」은 420만 엔을 벌며 Lv.2 피버 히트를 한 번 써서 이쪽 손님 4석을 강제로 돌려보냅니다. 남은 40~30초쯤 Lv.2나 Lv.3 피버 히트로 역전을 노리세요 — 출처 흐름: 상대 Lv.2 → 손님 퇴장 → 새 손님 4석이 앉으면 이쪽 Lv.2 발동 → Lv.1이 차면 추가 발동. 리그전 목표 매출 420만 엔. 이기면 플래티넘 캐스트 「쇼코」 가입. 제휴 점포(지도 번호. 이름 비용·팬 수): 1. COFFEE 窟呂木 2万6000円·50人 / 2. 元祖ふらんすたこ焼き 1万9000円·60人 / 3. 酒旅 3万4000円·70人 / 4. BEYOND 12万円·300人 / 5. Pizzany 7万5000円·190人 / 6. みくに 6万8000円·90人 / 7. 華炎飯店 7万4000円·100人 / 8. 華麗なるスパイす 2万8000円·70人 / 9. 蒼天歌舞伎座 9万円·220人 / 10. ふぐ田 4万5000円·80人.", en: "A whistle-blower penalty caps you at six cast on shift (remove one with triangle on the roster). The championship opens at a ¥3.2M best take; rival Kamurocho God Queen makes ¥4.2M and fires one Lv.2 Fever Heat that sends four of your tables home. Aim to overtake with a Lv.2 or Lv.3 Fever Heat with 40–30 seconds left — the source's flow: their Lv.2 → tables leave → once four new tables sit, fire your Lv.2 → fire Lv.1 too if it fills. Target league take: ¥4.2M. Winning adds platinum cast Shoko. Tie-up shops (map no. name cost·fans): 1. COFFEE 窟呂木 2万6000円·50人 / 2. 元祖ふらんすたこ焼き 1万9000円·60人 / 3. 酒旅 3万4000円·70人 / 4. BEYOND 12万円·300人 / 5. Pizzany 7万5000円·190人 / 6. みくに 6万8000円·90人 / 7. 華炎飯店 7万4000円·100人 / 8. 華麗なるスパイす 2万8000円·70人 / 9. 蒼天歌舞伎座 9万円·220人 / 10. ふぐ田 4万5000円·80人." } },
            { title: { ko: "밀리어네어 리그", en: "Millionaire League" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/millionaire-league-shop.jpg", note: { ko: "인원 제한이 풀려 다시 8명으로 영업합니다. 챔피언십 조건(최고 수익 500만 엔)을 채운 뒤에는 메인 스토리를 6장까지 진행해야 다시 플레이할 수 있고, 이 리그부터 코유키가 빠집니다. 상대 「킨에이초 플래티넘 갓」은 680만 엔을 벌고 피버 히트를 Lv.1→Lv.2 시점에 두 번 써서 손님을 돌려보내므로(HP 감소는 없음), 이쪽은 Lv.2→Lv.1 순서로 쓰세요. 중반 Lv.2 이후부터 역전됩니다. 리그전 목표 매출 680만 엔. 이기면 코유키가 돌아오고 파이널 챔피언십이 열리며 플래티넘 캐스트 「유아」 가입. 제휴 점포(지도 번호. 이름 비용·팬 수): 1. ふぐ料理てっちん 9万円·80人 / 2. 泪坂酒場 8万5000円·85人 / 3. SUNRISE 13万円·90人 / 4. 黄金の八っつあん 4万9000円·65人 / 5. 蒼天美味街 25万円·220人 / 6. ホルモン焼き てつじ 12万円·100人 / 7. わかき本店 7万5000円·55人 / 8. 和菜松浦 5万9000円·40人 / 9. HUNGRY TOM 11万円·110人 / 10. 王冠堂書店 20万円·190人.", en: "The cap lifts and you are back to eight cast. Once the championship condition (¥5M best take) is met, the mode locks until the story reaches Chapter 6, and Koyuki is gone from this league on. Rival Kin'eicho Platinum God makes ¥6.8M and fires Fever Heat twice, at its Lv.1→Lv.2 points, sending tables home (no HP drain) — fire yours Lv.2 then Lv.1. You pull ahead from the mid-game Lv.2 onward. Target league take: ¥6.8M. Winning brings Koyuki back, opens the Final Championship and adds platinum cast Yua. Tie-up shops (map no. name cost·fans): 1. ふぐ料理てっちん 9万円·80人 / 2. 泪坂酒場 8万5000円·85人 / 3. SUNRISE 13万円·90人 / 4. 黄金の八っつあん 4万9000円·65人 / 5. 蒼天美味街 25万円·220人 / 6. ホルモン焼き てつじ 12万円·100人 / 7. わかき本店 7万5000円·55人 / 8. 和菜松浦 5万9000円·40人 / 9. HUNGRY TOM 11万円·110人 / 10. 王冠堂書店 20万円·190人." } },
            { title: { ko: "파이널 챔피언십", en: "Final Championship" }, note: { ko: "리그전 없이 바로 챔피언십을 고를 수 있습니다(리그전을 돌면 유아 이벤트 발생). 상대 「소텐보리 선샤인」은 740만 엔쯤 벌므로, 석유왕 보너스 포함 700만 엔 정도가 나오면 도전하세요. 상대 피버 히트는 항상 Lv.1→Lv.3→Lv.1→Lv.1 순서로 손님을 돌려보내고 캐스트 HP를 깎으니, 이쪽은 게이지가 차는 대로 Lv.1로 터뜨려 상대 게이지를 줄이고 「여자에게 포상 주기」로 HP를 회복하세요. 클리어하면 플래티넘 캐스트 「키라라」 가입과 트로피 「伝説の黒服」.", en: "You can pick the championship straight away (league play triggers Yua's events). Rival Sotenbori Sunshine makes about ¥7.4M, so challenge once you hit around ¥7M including the oil-king bonus. Their Fever Heat always goes Lv.1→Lv.3→Lv.1→Lv.1, sending tables home and draining HP — fire yours at Lv.1 as soon as it fills to whittle their gauge, and heal with rewards. Clearing adds platinum cast Kirara and the trophy 伝説の黒服." } },
          ],
        },
        {
          title: { ko: "카나 신인 환영회 선택지 (파라다이스 리그 개막)", en: "Kana's welcome party choices (Paradise League opening)" },
          note: { ko: "출처 1곳(ゲーム攻略マン). 제한 시간 5초지만 OPTIONS로 멈출 수 있습니다. 좋은 선택지를 고르면 마지막 경험치가 조금 늘어납니다. 2번과 10번은 무엇을 골라도 굿 초이스가 되지 않지만 경험치는 들어오며, 아래는 출처가 표시한 선택지입니다.", en: "One source (ゲーム攻略マン). There is a 5-second limit, but OPTIONS pauses it. Good picks add a little EXP at the end. Choices 2 and 10 never count as a good choice whatever you pick (EXP still accrues); below are the picks the source marks." },
          puzzles: [
            { title: { ko: "14개 선택지", en: "All 14 choices" }, note: { ko: "버튼과 대사(게임 표기 그대로): 1 〇：そうだな · 2 □：新人歓迎会だ · 3 〇：あぁ · 4 □：どうなんだ？ · 5 〇：分かるぜ · 6 ×：そんな事ねぇよ · 7 〇：分かるぜ · 8 □：なんだって？ · 9 〇：確かにな · 10 ×：すぐに俺を呼べ · 11 □：どうなんだ？ · 12 〇：なるほどな · 13 〇：そうだな · 14 △：これからも営業頑張ろうな！.", en: "Button and line (as shown in game): 1 〇：そうだな · 2 □：新人歓迎会だ · 3 〇：あぁ · 4 □：どうなんだ？ · 5 〇：分かるぜ · 6 ×：そんな事ねぇよ · 7 〇：分かるぜ · 8 □：なんだって？ · 9 〇：確かにな · 10 ×：すぐに俺を呼べ · 11 □：どうなんだ？ · 12 〇：なるほどな · 13 〇：そうだな · 14 △：これからも営業頑張ろうな！." } },
          ],
        },
        {
          title: { ko: "캐스트 데이트 이벤트 — 퍼펙트 선택지(◎)", en: "Cast date events — perfect picks (◎)" },
          note: { ko: "출처 1곳(ゲーム攻略マン). 캐스트 머리 위에 와인잔 말풍선이 뜨면 데이트가 열립니다. 캐스트마다 식사 2회와 상담 1회, 각 4문항이며 출처가 ◎로 표시한 선택지만 실었습니다(나머지는 〇 또는 -). 좋은 선택지일수록 얻는 경험치가 늘어나고, 이벤트 4회째에 서브스토리 No.69~74가 이어집니다. 선택지 문장은 게임 표기 그대로입니다.", en: "One source (ゲーム攻略マン). A wine-glass bubble over a cast member means a date is ready. Each has two dinners and one advice talk, four questions each; only the picks the source grades ◎ are listed (the others are 〇 or -). Better picks give more EXP, and the fourth event leads into substories No.69–74. Lines are as shown in game." },
          puzzles: [
            { title: { ko: "코유키(小雪) — 식사 1", en: "Koyuki (小雪) — Dinner 1" }, note: { ko: "◎ 선택지: 1 「それを自分の個性にしてしまう」 · 2 「本当にユキが好きなんだな」 · 3 「全ては小雪次第だ」 · 4 「今日は好きなだけ食え」", en: "◎ picks: 1 「それを自分の個性にしてしまう」 · 2 「本当にユキが好きなんだな」 · 3 「全ては小雪次第だ」 · 4 「今日は好きなだけ食え」" } },
            { title: { ko: "코유키(小雪) — 식사 2", en: "Koyuki (小雪) — Dinner 2" }, note: { ko: "◎ 선택지: 1 「それでもかまわない」 · 2 「男たちの見る目が無い」 · 3 「人間大事なのは中身だ」 · 4 「今も恋愛中だ」", en: "◎ picks: 1 「それでもかまわない」 · 2 「男たちの見る目が無い」 · 3 「人間大事なのは中身だ」 · 4 「今も恋愛中だ」" } },
            { title: { ko: "코유키(小雪) — 상담", en: "Koyuki (小雪) — Advice" }, note: { ko: "◎ 선택지: 1 「俺が犯人を探してやる」 · 2 「俺が守ってやる」 · 3 「みんなの寄せ書き」 · 4 「俺も同じ気持ちだ」", en: "◎ picks: 1 「俺が犯人を探してやる」 · 2 「俺が守ってやる」 · 3 「みんなの寄せ書き」 · 4 「俺も同じ気持ちだ」" } },
            { title: { ko: "카나(かな) — 식사 1", en: "Kana (かな) — Dinner 1" }, note: { ko: "◎ 선택지: 1 「大食いだったら負けねえぜ」 · 2 「かなり努力したんじゃないか？」 · 3 「真面目に努力を続ける」 · 4 「それは前の店の奴らが悪い」", en: "◎ picks: 1 「大食いだったら負けねえぜ」 · 2 「かなり努力したんじゃないか？」 · 3 「真面目に努力を続ける」 · 4 「それは前の店の奴らが悪い」" } },
            { title: { ko: "카나(かな) — 식사 2", en: "Kana (かな) — Dinner 2" }, note: { ko: "◎ 선택지: 1 「俺も一人カラオケは大好きだ」 · 2 「いっぱい食べる男じゃないか？」 · 3 「真面目っ娘なんてどうだ？」 · 4 「神味庵」", en: "◎ picks: 1 「俺も一人カラオケは大好きだ」 · 2 「いっぱい食べる男じゃないか？」 · 3 「真面目っ娘なんてどうだ？」 · 4 「神味庵」" } },
            { title: { ko: "카나(かな) — 상담", en: "Kana (かな) — Advice" }, note: { ko: "◎ 선택지: 1 「そいつに聞いてみればいい」 · 2 「立派に成長したな」 · 3 「超一流のキャバ嬢」 · 4 「俺も気持ちは同じだ」", en: "◎ picks: 1 「そいつに聞いてみればいい」 · 2 「立派に成長したな」 · 3 「超一流のキャバ嬢」 · 4 「俺も気持ちは同じだ」" } },
            { title: { ko: "AIKA(AIKA) — 식사 1", en: "AIKA (AIKA) — Dinner 1" }, note: { ko: "◎ 선택지: 1 「酒をガンガンもってこい！」 · 2 「今日は絶対酔い潰してやる！」 · 3 「自然体で働いてくれ」 · 4 「AIKAらしい答えだな」", en: "◎ picks: 1 「酒をガンガンもってこい！」 · 2 「今日は絶対酔い潰してやる！」 · 3 「自然体で働いてくれ」 · 4 「AIKAらしい答えだな」" } },
            { title: { ko: "AIKA(AIKA) — 식사 2", en: "AIKA (AIKA) — Dinner 2" }, note: { ko: "◎ 선택지: 1 「俺に惚れると火傷するぜ？」 · 2 「AIKAの好きにするといい」 · 3 「AIKAはAIKAだからな」 · 4 「黒ギャル大好きだぜ！」", en: "◎ picks: 1 「俺に惚れると火傷するぜ？」 · 2 「AIKAの好きにするといい」 · 3 「AIKAはAIKAだからな」 · 4 「黒ギャル大好きだぜ！」" } },
            { title: { ko: "AIKA(AIKA) — 상담", en: "AIKA (AIKA) — Advice" }, note: { ko: "◎ 선택지: 1 「素直に謝ろう」 · 2 「既に辞めたことがある」 · 3 「じゃあAIKAで発散させてもらう」 · 4 「まだキャバ嬢をやっている」", en: "◎ picks: 1 「素直に謝ろう」 · 2 「既に辞めたことがある」 · 3 「じゃあAIKAで発散させてもらう」 · 4 「まだキャバ嬢をやっている」" } },
            { title: { ko: "쇼코(しょう子) — 식사 1", en: "Shoko (しょう子) — Dinner 1" }, note: { ko: "◎ 선택지: 1 「環境にこだわりはない」 · 2 「自転車だな」 · 3 「漫画だな」 · 4 「ギャグ漫画が好きだ」", en: "◎ picks: 1 「環境にこだわりはない」 · 2 「自転車だな」 · 3 「漫画だな」 · 4 「ギャグ漫画が好きだ」" } },
            { title: { ko: "쇼코(しょう子) — 식사 2", en: "Shoko (しょう子) — Dinner 2" }, note: { ko: "◎ 선택지: 1 「プレゼントかな」 · 2 「迷走した経験も財産だ」 · 3 「家のリフォームと解く」 · 4 「トーンを貼るのは任せろ」", en: "◎ picks: 1 「プレゼントかな」 · 2 「迷走した経験も財産だ」 · 3 「家のリフォームと解く」 · 4 「トーンを貼るのは任せろ」" } },
            { title: { ko: "쇼코(しょう子) — 상담", en: "Shoko (しょう子) — Advice" }, note: { ko: "◎ 선택지: 1 「親友といつも遊んでいた」 · 2 「バーとかどうだ？」 · 3 「俺のことか」 · 4 「新人賞に応募したらどうだ？」", en: "◎ picks: 1 「親友といつも遊んでいた」 · 2 「バーとかどうだ？」 · 3 「俺のことか」 · 4 「新人賞に応募したらどうだ？」" } },
            { title: { ko: "유아(悠亜) — 식사 1", en: "Yua (悠亜) — Dinner 1" }, note: { ko: "◎ 선택지: 1 「ぜひ借りてみたい」 · 2 「キャバクラの方が合っていた」 · 3 「悠亜のステージイベントを入れよう」 · 4 「好きなアイドルがいた」", en: "◎ picks: 1 「ぜひ借りてみたい」 · 2 「キャバクラの方が合っていた」 · 3 「悠亜のステージイベントを入れよう」 · 4 「好きなアイドルがいた」" } },
            { title: { ko: "유아(悠亜) — 식사 2", en: "Yua (悠亜) — Dinner 2" }, note: { ko: "◎ 선택지: 1 「それだけ悠亜は愛されてるんだ」 · 2 「目の前に理想の男がいるぜ？」 · 3 「一緒に失敗を減らしていこう」 · 4 「ブリ」", en: "◎ picks: 1 「それだけ悠亜は愛されてるんだ」 · 2 「目の前に理想の男がいるぜ？」 · 3 「一緒に失敗を減らしていこう」 · 4 「ブリ」" } },
            { title: { ko: "유아(悠亜) — 상담", en: "Yua (悠亜) — Advice" }, note: { ko: "◎ 선택지: 1 「俺が守ってやる」 · 2 「その人達を裏切らないようにな」 · 3 「何もしなくてもいい」 · 4 「お客さんを大事にするところ」", en: "◎ picks: 1 「俺が守ってやる」 · 2 「その人達を裏切らないようにな」 · 3 「何もしなくてもいい」 · 4 「お客さんを大事にするところ」" } },
            { title: { ko: "키라라(キララ) — 식사 1", en: "Kirara (キララ) — Dinner 1" }, note: { ko: "◎ 선택지: 1 「キララから歩み寄る」 · 2 「キララはセキララ♥」 · 3 「競馬か？」 · 4 「大穴一筋だ」", en: "◎ picks: 1 「キララから歩み寄る」 · 2 「キララはセキララ♥」 · 3 「競馬か？」 · 4 「大穴一筋だ」" } },
            { title: { ko: "키라라(キララ) — 식사 2", en: "Kirara (キララ) — Dinner 2" }, note: { ko: "◎ 선택지: 1 「競馬だな」 · 2 「一緒に酒を飲みたい」 · 3 「カラオケデートに誘う」 · 4 「店を経営する」", en: "◎ picks: 1 「競馬だな」 · 2 「一緒に酒を飲みたい」 · 3 「カラオケデートに誘う」 · 4 「店を経営する」" } },
            { title: { ko: "키라라(キララ) — 상담", en: "Kirara (キララ) — Advice" }, note: { ko: "◎ 선택지: 1 「キララの足になる」 · 2 「自分を紹介する」 · 3 「キララも憧れられる存在だぜ」 · 4 「ユキに憧れていたんだな」", en: "◎ picks: 1 「キララの足になる」 · 2 「自分を紹介する」 · 3 「キララも憧れられる存在だぜ」 · 4 「ユキに憧れていたんだな」" } },
          ],
        },
      ],
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
        { ko: "종업원 레벨업에 드는 사장상은 레어도와 상관없이 Lv1→2 10장, 20, 30, 40, 50, 70, 90, 120, Lv9→10 150장(최대 Lv10)입니다. 사장상 벌이는 적습이 적어 2분 남짓에 끝나는 서브 미션 「真島建設・蒼天堀支部を守れ！」 그 2·그 3 반복이 효율적입니다.", en: "Levelling a worker costs the same President Awards at every rarity: 10, 20, 30, 40, 50, 70, 90, 120, then 150 for Lv9→10 (max 10). Farm them on sub-missions \"真島建設・蒼天堀支部を守れ！\" 2 and 3 — few waves, about two minutes each." },
        { ko: "비기 칸 추천: 古牧宗太郎(SR) 「真・俊足の極み」 — 설명은 이동 속도지만 실제로는 공격 속도도 빨라져 상시 투입감. 天山広吉 「真・猛攻撃の極み」(15초 공격력 5배)는 강적 등장 때 古牧와 세트로. 長州力 「革命戦士」(45초 공격 1.5배·방어 3배), 橋守の右京 「真・施設修復の極み」(전 시설 내구 30% 회복), 棚橋弘至 「愛してまーす！」(전원 HP 40% 회복)도 유용합니다.", en: "Secret-skill slot picks: 古牧宗太郎 (SR) — his speed skill also speeds up attacks despite the description, so keep him in always; 天山広吉 (5× attack for 15 s) for boss waves, paired with 古牧; 長州力 (1.5× attack, 3× defence for 45 s); 橋守の右京 (repairs every facility 30%); 棚橋弘至 (heals everyone 40%)." },
        { ko: "지원형으로는 로켓런처병(将軍·権田原組長·亜門丈)이 강합니다. 강완병 외에는 한 방에 쓰러뜨리므로 두 명쯤 키워 옆으로 나란히 세우면 무리를 빠르게 정리합니다.", en: "For support units, the rocket troopers (将軍, 権田原組長, 亜門丈) are excellent: they one-shot everything but the brutes, so raise two and line them up to mow down crowds." },
      ],
      videos: [
        { title: { ko: "클랜 크리에이터 100% 트로피 가이드", en: "Clan Creator 100% trophy guide" }, url: YT("eOFW4VIh1bU") },
        { title: { ko: "클랜 크리에이터 20만 점 돌파 (포어맨 트로피)", en: "Clan Creator 200,000+ points (Foreman trophy)" }, url: YT("Ct3utgkJPsA") },
      ],
      source: [
        { label: "ゲーム攻略マン — 龍が如く極2 新・クランクリエイター", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/clan-creator/" },
        { label: "ゲーム攻略マン — 龍が如く極2 新・クランクリエイター ミッション", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/clan-creator/missions.html" },
        { label: "ゲーム攻略マン — 龍が如く極2 新・クランクリエイター イベント", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/clan-creator/events.html" },
      ],
      achievementSlug: "lexus2_clan_creater_clear",
      puzzleSets: [
        {
          title: { ko: "미션별 공략 — 메인 16 + 서브 7", en: "Missions — 16 main + 7 sub" },
          note: { ko: "출처 1곳(ゲーム攻略マン). 그림은 각 미션의 적 진행 루트 번호 지도이고, 파 번호별로 출처가 적어 둔 강적·캐시·회복 아이템·바리케이드 정보를 옮겼습니다(강적 이름은 게임 표기 그대로). ", en: "One source (ゲーム攻略マン). Each map numbers the enemy routes; per-wave notes carry what the source records — bosses, cash, healing items, barricades (boss names as shown in game)." },
          puzzles: [
            { title: { ko: "1. 藤波の刺客 (★1)", en: "1. 藤波の刺客 (★1)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission01.jpg", note: { ko: "S랭크 사장상 70장 · 보수 60,000엔(2회째부터 30,000엔) · 강적 1명·적 331명 · 전 6파 · 카무로초 힐즈 공사 현장. 5파 회복 아이템 / 6파 강적 ホワイトエッジ白木, HP가 줄면 근성 업으로 회복.", en: "S rank: 70 President Awards · pay ¥60,000 (¥30,000 on repeats) · 1 boss, 331 enemies · 6 waves · Kamurocho Hills site. W5 healing item / W6 boss: ホワイトエッジ白木, heal with Guts Up when HP drops." } },
            { title: { ko: "2. 藤波軍団の総攻撃 (★1)", en: "2. 藤波軍団の総攻撃 (★1)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission01.jpg", note: { ko: "S랭크 사장상 80장 · 보수 100,000엔(2회째부터 50,000엔) · 강적 1명·적 470명 · 전 7파 · 카무로초 힐즈 공사 현장. 1파 적진 쪽에 종업원을 배치해 22초쯤 안에 처치해야 S랭크 / 3파 루트 2로 몰려오므로 비기 사용 권장 / 5파 폭탄병 / 7파 강적 バットマン矢代, 종업원보다 시설 파괴를 우선함.", en: "S rank: 80 President Awards · pay ¥100,000 (¥50,000 on repeats) · 1 boss, 470 enemies · 7 waves · Kamurocho Hills site. W1 station workers on the enemy side and clear it in ~22 s or no S rank / W3 swarms route 2 — use a secret skill / W5 bombers / W7 boss: バットマン矢代, goes for facilities over your workers." } },
            { title: { ko: "3. ドラゴン対決 (★2)", en: "3. ドラゴン対決 (★2)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission01.jpg", note: { ko: "S랭크 사장상 90장 · 보수 200,000엔(2회째부터 100,000엔) · 강적 4명·적 803명 · 전 8파 · 카무로초 힐즈 공사 현장. 1파 캐시 / 2파 캐시 / 4파 강적 ホワイトエッジ白木、バットマン矢代 / 5파 폭탄병 / 7파 강적 ホワイトエッジ白木 / 8파 캐시, 강적 藤波辰爾, 승리 후 藤波辰爾 입사.", en: "S rank: 90 President Awards · pay ¥200,000 (¥100,000 on repeats) · 4 bosses, 803 enemies · 8 waves · Kamurocho Hills site. W1 cash / W2 cash / W4 boss: ホワイトエッジ白木、バットマン矢代 / W5 bombers / W7 boss: ホワイトエッジ白木 / W8 cash, boss: 藤波辰爾, 藤波辰爾 joins after the win." } },
            { title: { ko: "4. 天龍の刺客 (★2)", en: "4. 天龍の刺客 (★2)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission02.jpg", note: { ko: "S랭크 사장상 90장 · 보수 150,000엔(2회째부터 80,000엔) · 강적 2명·적 898명 · 전 8파 · 카무로초 극장 앞 광장. 2파 회복 아이템 / 3파 캐시, 폭탄병 / 4파 회복 아이템, 강적 赤井兄弟・弟 / 5파 폭탄병 / 6파 회복 아이템 / 7파 캐시, 마지막에 폭탄병 / 8파 회복 아이템, 강적 赤井兄弟・兄.", en: "S rank: 90 President Awards · pay ¥150,000 (¥80,000 on repeats) · 2 bosses, 898 enemies · 8 waves · Theater Square, Kamurocho. W2 healing item / W3 cash, bombers / W4 healing item, boss: 赤井兄弟・弟 / W5 bombers / W6 healing item / W7 cash, bombers come last / W8 healing item, boss: 赤井兄弟・兄." } },
            { title: { ko: "5. 天龍軍の総攻撃 (★2)", en: "5. 天龍軍の総攻撃 (★2)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission05.jpg", note: { ko: "S랭크 사장상 100장 · 보수 200,000엔(2회째부터 100,000엔) · 강적 3명·적 1088명 · 전 10파 · 카무로초 극장 앞 광장. 1파 왼쪽에서 폭탄병 / 2파 오른쪽에서 폭탄병 / 5파 강적 紅 / 6파 왼쪽에서 습격, 로켓런처를 쓰는 적 있음 / 10파 강적 赤井兄弟.", en: "S rank: 100 President Awards · pay ¥200,000 (¥100,000 on repeats) · 3 bosses, 1088 enemies · 10 waves · Theater Square, Kamurocho. W1 bombers from the left / W2 bombers from the right / W5 boss: 紅 / W6 attack from the left, includes rocket-launcher enemies / W10 boss: 赤井兄弟." } },
            { title: { ko: "6. 引退の花道 (★3)", en: "6. 引退の花道 (★3)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission06.jpg", note: { ko: "S랭크 사장상 130장 · 보수 300,000엔(2회째부터 150,000엔) · 강적 2명·적 897명 · 전 12파 · 카무로초 극장 앞 광장. 5파 강적 紅 / 12파 강적 天龍源一郎, 승리 후 天龍源一郎 입사.", en: "S rank: 130 President Awards · pay ¥300,000 (¥150,000 on repeats) · 2 bosses, 897 enemies · 12 waves · Theater Square, Kamurocho. W5 boss: 紅 / W12 boss: 天龍源一郎, 天龍源一郎 joins after the win." } },
            { title: { ko: "7. 長州軍、襲来 (★3)", en: "7. 長州軍、襲来 (★3)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission07.jpg", note: { ko: "S랭크 사장상 110장 · 보수 250,000엔(2회째부터 120,000엔) · 강적 2명·적 960명 · 전 8파 · 카무로초 덴카이치 거리. 1파 캐시 / 6파 캐시 / 7파 강적 青田 / 8파 캐시·회복 아이템, 강적 ブルーZ, 지도 1번 쪽으로 다수 습격.", en: "S rank: 110 President Awards · pay ¥250,000 (¥120,000 on repeats) · 2 bosses, 960 enemies · 8 waves · Tenkaichi St., Kamurocho. W1 cash / W6 cash / W7 boss: 青田 / W8 cash + healing item, boss: ブルーZ, heavy push from map point 1." } },
            { title: { ko: "8. さらなる長州の刺客 (★3)", en: "8. さらなる長州の刺客 (★3)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission08.jpg", note: { ko: "S랭크 사장상 120장 · 보수 300,000엔(2회째부터 150,000엔) · 강적 2명·적 910명 · 전 10파 · 카무로초 덴카이치 거리. 3파 지도 1번에서 폭탄병·배트병 / 4파 로켓런처병 등장 / 5파 강적 ブルドッグ / 6파 캐시·회복 아이템 / 9파 캐시 / 10파 강적 ブルドッグ、ブルーZ.", en: "S rank: 120 President Awards · pay ¥300,000 (¥150,000 on repeats) · 2 bosses, 910 enemies · 10 waves · Tenkaichi St., Kamurocho. W3 bombers and bat troops from map point 1 / W4 rocket troopers arrive / W5 boss: ブルドッグ / W6 cash + healing item / W9 cash / W10 boss: ブルドッグ、ブルーZ." } },
            { title: { ko: "9. 革命戦士・長州力 (★4)", en: "9. 革命戦士・長州力 (★4)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission09.jpg", note: { ko: "S랭크 사장상 160장 · 보수 400,000엔(2회째부터 200,000엔) · 강적 2명·적 866명 · 전 10파 · 카무로초 덴카이치 거리. 3파 강적 長州力, 長州力는 공격력이 높음 / 5파 지도 1번에서 배트병 / 6파 회복 아이템, 강적 ブルーZ / 10파 강적 長州力, 승리 후 長州力 입사. 클리어 후 長州力 식사 이벤트 발생.", en: "S rank: 160 President Awards · pay ¥400,000 (¥200,000 on repeats) · 2 bosses, 866 enemies · 10 waves · Tenkaichi St., Kamurocho. W3 boss: 長州力, 長州力 hits hard / W5 bat troops from map point 1 / W6 healing item, boss: ブルーZ / W10 boss: 長州力, 長州力 joins after the win. Clearing it triggers the 長州力 dinner event." } },
            { title: { ko: "10. 武藤達の刺客 (★4)", en: "10. 武藤達の刺客 (★4)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission10.jpg", note: { ko: "S랭크 사장상 130장 · 보수 350,000엔(2회째부터 170,000엔) · 강적 4명·적 1433명 · 전 10파 · 카무로초 나카미치 거리. 7파 강적 ブルドッグ, 후반에 지도 1번 쪽 대량 습격 / 9파 강적 ホワイトエッジ白木 / 10파 강적 モロ佐藤、白崎.", en: "S rank: 130 President Awards · pay ¥350,000 (¥170,000 on repeats) · 4 bosses, 1433 enemies · 10 waves · Nakamichi St., Kamurocho. W7 boss: ブルドッグ, late heavy push from map point 1 / W9 boss: ホワイトエッジ白木 / W10 boss: モロ佐藤、白崎." } },
            { title: { ko: "11. 武藤不動産の本気 (★4)", en: "11. 武藤不動産の本気 (★4)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission11.jpg", note: { ko: "S랭크 사장상 140장 · 보수 400,000엔(2회째부터 200,000엔) · 강적 4명·적 749명 · 전 12파 · 카무로초 나카미치 거리. 1파 캐시 / 2파 캐시 / 3파 캐시 / 5파 강적 紅、赤井兄弟 / 6파 캐시 / 7파 캐시 / 8파 캐시 / 9파 시작 전 바리케이드 파괴, 캐시 / 10파 캐시 / 11파 캐시 / 12파 강적 S・ゴードン.", en: "S rank: 140 President Awards · pay ¥400,000 (¥200,000 on repeats) · 4 bosses, 749 enemies · 12 waves · Nakamichi St., Kamurocho. W1 cash / W2 cash / W3 cash / W5 boss: 紅、赤井兄弟 / W6 cash / W7 cash / W8 cash / W9 barricade breaks before it starts, cash / W10 cash / W11 cash / W12 boss: S・ゴードン." } },
            { title: { ko: "12. カリスマ達との決戦 (★5)", en: "12. カリスマ達との決戦 (★5)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission11.jpg", note: { ko: "S랭크 사장상 180장 · 보수 600,000엔(2회째부터 300,000엔) · 강적 2명·적 1160명 · 전 14파 · 카무로초 나카미치 거리. 6파 강적 蝶野正洋 / 7파 시작 전 바리케이드 파괴 / 10파 강적 武藤敬司 / 11파 시작 전 바리케이드 전부 파괴 / 14파 강적 蝶野正洋、武藤敬司, 승리 후 武藤敬司 입사.", en: "S rank: 180 President Awards · pay ¥600,000 (¥300,000 on repeats) · 2 bosses, 1160 enemies · 14 waves · Nakamichi St., Kamurocho. W6 boss: 蝶野正洋 / W7 barricade breaks before it starts / W10 boss: 武藤敬司 / W11 all barricades break before it starts / W14 boss: 蝶野正洋、武藤敬司, 武藤敬司 joins after the win." } },
            { title: { ko: "13. 蝶野の刺客 (★5)", en: "13. 蝶野の刺客 (★5)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission13.jpg", note: { ko: "S랭크 사장상 150장 · 보수 500,000엔(2회째부터 250,000엔) · 강적 4명·적 778명 · 전 10파 · 카무로초 극장 앞 광장. 4파 캐시 / 5파 시작하자마자 바리케이드 일부 소실, 강적 ブルーZ、蒼松、ブルドッグ / 6파 캐시 / 7파 회복 아이템 / 10파 강적 S・ゴードン.", en: "S rank: 150 President Awards · pay ¥500,000 (¥250,000 on repeats) · 4 bosses, 778 enemies · 10 waves · Theater Square, Kamurocho. W4 cash / W5 part of the barricade is gone at the start, boss: ブルーZ、蒼松、ブルドッグ / W6 cash / W7 healing item / W10 boss: S・ゴードン." } },
            { title: { ko: "14. カラーズ総攻撃！ (★5)", en: "14. カラーズ総攻撃！ (★5)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission14.jpg", note: { ko: "S랭크 사장상 160장 · 보수 600,000엔(2회째부터 300,000엔) · 강적 3명·적 1312명 · 전 12파 · 카무로초 힐즈 공사 현장. 4파 캐시 / 6파 강적 S・ゴードン、モロ佐藤, モロ佐藤는 시설 파괴 우선 / 12파 강적 MOGAMI.", en: "S rank: 160 President Awards · pay ¥600,000 (¥300,000 on repeats) · 3 bosses, 1312 enemies · 12 waves · Kamurocho Hills site. W4 cash / W6 boss: S・ゴードン、モロ佐藤, モロ佐藤 goes for facilities first / W12 boss: MOGAMI." } },
            { title: { ko: "15. 黒のカリスマ・蝶野正洋 (★6)", en: "15. 黒のカリスマ・蝶野正洋 (★6)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission15.jpg", note: { ko: "S랭크 사장상 200장 · 보수 1,000,000엔(2회째부터 500,000엔) · 강적 3명·적 1418명 · 전 14파 · 카무로초 나카미치 거리. 4파 지도 4번 쪽에 캐시 / 5파 시작하자마자 바리케이드 파괴, 강적 蝶野正洋 / 6파 회복 아이템·캐시 / 9파 캐시 / 12파 캐시 / 13파 강적 S・ゴードン、MOGAMI / 14파 강적 蝶野正洋, 승리 후 蝶野正洋 입사.", en: "S rank: 200 President Awards · pay ¥1,000,000 (¥500,000 on repeats) · 3 bosses, 1418 enemies · 14 waves · Nakamichi St., Kamurocho. W4 cash spawns on the map-point-4 side / W5 barricade breaks at the start, boss: 蝶野正洋 / W6 healing item + cash / W9 cash / W12 cash / W13 boss: S・ゴードン、MOGAMI / W14 boss: 蝶野正洋, 蝶野正洋 joins after the win." } },
            { title: { ko: "16. 真島建設、最後の戦い！ (★7)", en: "16. 真島建設、最後の戦い！ (★7)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/mission16.jpg", note: { ko: "S랭크 사장상 230장 · 보수 3,000,000엔(2회째부터 1,000,000엔) · 강적 6명·적 1923명 · 전 16파 · 카무로초 힐즈 공사 현장. 2파 회복 아이템 / 3파 왼쪽 바리케이드 파괴 / 4파 강적 ホワイトエッジ白木 / 5파 오른쪽 바리케이드 파괴, 캐시 / 8파 강적 赤井兄弟, 회복 아이템 / 11파 캐시, 바리케이드 파괴 / 12파 강적 ブルーZ / 14파 회복 아이템 / 16파 강적 モロ佐藤, 도중에 MOGAMI·S・ゴードン, 마지막에 鶴川慶一 등장, モロ佐藤는 원거리 사격으로 시설 파괴 우선.", en: "S rank: 230 President Awards · pay ¥3,000,000 (¥1,000,000 on repeats) · 6 bosses, 1923 enemies · 16 waves · Kamurocho Hills site. W2 healing item / W3 left barricade breaks / W4 boss: ホワイトエッジ白木 / W5 right barricade breaks, cash / W8 boss: 赤井兄弟, healing item / W11 cash, barricade breaks / W12 boss: ブルーZ / W14 healing item / W16 boss: モロ佐藤, MOGAMI and S・ゴードン mid-wave, 鶴川慶一 last, モロ佐藤 snipes facilities from range." } },
            { title: { ko: "서브 1. 真島建設・蒼天堀支部を守れ！ その1 (★4)", en: "Sub 1. 真島建設・蒼天堀支部を守れ！ その1 (★4)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/submission01.jpg", note: { ko: "S랭크 사장상 130장 · 보수 400,000엔(2회째부터 200,000엔) · 강적 4명·적 732명 · 전 5파 · 소텐보리 이와오 다리. 1파 오른쪽에 캐시 대량 / 2파 왼쪽에서 대량 습격 / 3파 강적 レッドマン, 왼쪽에서 대량 습격 / 4파 강적 バットマン矢代, 시설 파괴 우선, 오른쪽에서 대량 습격 / 5파 왼쪽에 캐시, 강적 ホワイトエッジ白木、白崎.", en: "S rank: 130 President Awards · pay ¥400,000 (¥200,000 on repeats) · 4 bosses, 732 enemies · 5 waves · Iwao Bridge, Sotenbori. W1 lots of cash on the right / W2 heavy push from the left / W3 boss: レッドマン, heavy push from the left / W4 boss: バットマン矢代, prioritises facilities, heavy push from the right / W5 cash on the left, boss: ホワイトエッジ白木、白崎." } },
            { title: { ko: "서브 2. 真島建設・蒼天堀支部を守れ！ その2 (★5)", en: "Sub 2. 真島建設・蒼天堀支部を守れ！ その2 (★5)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/submission02.jpg", note: { ko: "S랭크 사장상 150장 · 보수 800,000엔(2회째부터 400,000엔) · 강적 5명·적 588명 · 전 8파 · 소텐보리 쇼후쿠초. 4파 강적 赤井兄弟 / 5파 캐시 / 7파 캐시 / 8파 강적 紅、バットマン矢代、ホワイトエッジ白木.", en: "S rank: 150 President Awards · pay ¥800,000 (¥400,000 on repeats) · 5 bosses, 588 enemies · 8 waves · Shofukucho, Sotenbori. W4 boss: 赤井兄弟 / W5 cash / W7 cash / W8 boss: 紅、バットマン矢代、ホワイトエッジ白木." } },
            { title: { ko: "서브 3. 真島建設・蒼天堀支部を守れ！ その3 (★5)", en: "Sub 3. 真島建設・蒼天堀支部を守れ！ その3 (★5)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/submission03.jpg", note: { ko: "S랭크 사장상 170장 · 보수 1,000,000엔(2회째부터 600,000엔) · 강적 3명·적 428명 · 전 4파 · 소텐보리 거리. 1파 시작부터 캐시 / 2파 강적 赤井兄弟 / 3파 캐시, 강적 ホワイトエッジ白木 / 4파 캐시, 강적 赤井兄弟.", en: "S rank: 170 President Awards · pay ¥1,000,000 (¥600,000 on repeats) · 3 bosses, 428 enemies · 4 waves · Sotenbori St.. W1 cash from the start / W2 boss: 赤井兄弟 / W3 cash, boss: ホワイトエッジ白木 / W4 cash, boss: 赤井兄弟." } },
            { title: { ko: "서브 4. 真島建設・蒼天堀支部を守れ！ その4 (★6)", en: "Sub 4. 真島建設・蒼天堀支部を守れ！ その4 (★6)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/submission01.jpg", note: { ko: "S랭크 사장상 190장 · 보수 1,500,000엔(2회째부터 800,000엔) · 강적 4명·적 1138명 · 전 8파 · 소텐보리 이와오 다리. 1파 오른쪽에 캐시 대량 / 3파 강적 白崎、紅, 오른쪽에서 배트병 / 5파 왼쪽에 캐시 대량 / 8파 왼쪽에 長州力, 오른쪽에 藤波辰爾 등장.", en: "S rank: 190 President Awards · pay ¥1,500,000 (¥800,000 on repeats) · 4 bosses, 1138 enemies · 8 waves · Iwao Bridge, Sotenbori. W1 lots of cash on the right / W3 boss: 白崎、紅, bat troops from the right / W5 lots of cash on the left / W8 長州力 on the left, 藤波辰爾 on the right." } },
            { title: { ko: "서브 5. 真島建設・蒼天堀支部を守れ！ その5 (★6)", en: "Sub 5. 真島建設・蒼天堀支部を守れ！ その5 (★6)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/submission05.jpg", note: { ko: "S랭크 사장상 210장 · 보수 2,000,000엔(2회째부터 1,000,000엔) · 강적 6명·적 711명 · 전 8파 · 소텐보리 거리. 1파 캐시, 강적 レッドマン / 4파 강적 MOGAMI、赤井兄弟、モロ佐藤、ホワイトエッジ白木、ブルドッグ / 8파 강적 亜門次郎、亜門三吾.", en: "S rank: 210 President Awards · pay ¥2,000,000 (¥1,000,000 on repeats) · 6 bosses, 711 enemies · 8 waves · Sotenbori St.. W1 cash, boss: レッドマン / W4 boss: MOGAMI、赤井兄弟、モロ佐藤、ホワイトエッジ白木、ブルドッグ / W8 boss: 亜門次郎、亜門三吾." } },
            { title: { ko: "서브 6. 真島建設、試練の時！ (★7)", en: "Sub 6. 真島建設、試練の時！ (★7)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/submission01.jpg", note: { ko: "S랭크 사장상 230장 · 보수 3,000,000엔(2회째부터 1,500,000엔) · 강적 6명·적 1374명 · 전 10파 · 소텐보리 이와오 다리. 1파 오른쪽에 캐시, 강적 バク、並川 / 2파 강적 ゴウ、ひで爺, ゴウ는 배트병 / 3파 강적 樋口兄弟 / 4파 강적 風早、B・G・ホームズ, 風早는 폭탄병 / 5파 왼쪽에 캐시, 강적 美杉、武井 / 6파 강적 匠、不動、剛力、エンヤ, 匠는 권총병 / 7파 강적 将軍, 将軍은 로켓런처병 / 8파 강적 赤星、ドクター / 9파 강적 ジンヤ、エリック, ジンヤ는 권총병 / 10파 왼쪽에 캐시, 강적 平、ナオヤ、西田、マモル、甲斐, ナオヤ는 권총병, 西田는 HP가 많은 배트병. 강적이 시설을 노리기 쉬우니 棚橋弘至·橋守の右京로 회복하며 싸우면 안정적.", en: "S rank: 230 President Awards · pay ¥3,000,000 (¥1,500,000 on repeats) · 6 bosses, 1374 enemies · 10 waves · Iwao Bridge, Sotenbori. W1 cash on the right, boss: バク、並川 / W2 boss: ゴウ、ひで爺, ゴウ is a bat trooper / W3 boss: 樋口兄弟 / W4 boss: 風早、B・G・ホームズ, 風早 is a bomber / W5 cash on the left, boss: 美杉、武井 / W6 boss: 匠、不動、剛力、エンヤ, 匠 is a gunner / W7 boss: 将軍, 将軍 is a rocket trooper / W8 boss: 赤星、ドクター / W9 boss: ジンヤ、エリック, ジンヤ is a gunner / W10 cash on the left, boss: 平、ナオヤ、西田、マモル、甲斐, ナオヤ is a gunner, 西田 is a high-HP bat trooper. Bosses target facilities — heal with 棚橋弘至 and 橋守の右京 to keep it stable." } },
            { title: { ko: "서브 7. 真島建設、限界への挑戦！！ (★8)", en: "Sub 7. 真島建設、限界への挑戦！！ (★8)" }, image: "https://dswiipspwikips3-images.jp/yakuza-kiwami2/sub-mission07.jpg", note: { ko: "S랭크 사장상 280장 · 보수 5,000,000엔(2회째부터 2,500,000엔) · 강적 6명·적 2118명 · 전 17파 · 카무로초 힐즈 공사 현장. 1파 강적 白崎, 폭탄병이 바리케이드 너머로 공격 / 2파 왼쪽 바리케이드 파괴, 회복 아이템 / 3파 강적 赤井兄弟・兄、レッドマン×2, 다수의 권총병이 원거리 사격 / 4파 오른쪽 바리케이드 파괴 / 5파 캐시 / 6파 회복 아이템 / 8파 회복 아이템 / 11파 캐시, 강적 S・ゴードン、ブルース、MOGAMI, ブルース는 폭탄병, MOGAMI만 공격력이 높음 / 12파 회복 아이템, 강적 ホワイトエッジ白木、レッドマン、ブルーZ、白崎、紅 (중앙 부근에 몰려 등장) / 13파 강적 天龍源一郎、藤波辰爾 / 14파 강적 武藤敬司、蝶野正洋 / 15파 강적 長州力、S・ゴードン / 16파 강적 紅、鶴川慶一、ブルドッグ、S・ゴードン、ホワイトエッジ白木 / 17파 강적 武藤敬司、天龍源一郎、蝶野正洋、藤波辰爾、長州力.", en: "S rank: 280 President Awards · pay ¥5,000,000 (¥2,500,000 on repeats) · 6 bosses, 2118 enemies · 17 waves · Kamurocho Hills site. W1 boss: 白崎, bombers hit over the barricade / W2 left barricade breaks, healing item / W3 boss: 赤井兄弟・兄、レッドマン×2, mass gunners firing from range / W4 right barricade breaks / W5 cash / W6 healing item / W8 healing item / W11 cash, boss: S・ゴードン、ブルース、MOGAMI, ブルース is a bomber, MOGAMI alone hits hard / W12 healing item, boss: ホワイトエッジ白木、レッドマン、ブルーZ、白崎、紅 (bunched near the centre) / W13 boss: 天龍源一郎、藤波辰爾 / W14 boss: 武藤敬司、蝶野正洋 / W15 boss: 長州力、S・ゴードン / W16 boss: 紅、鶴川慶一、ブルドッグ、S・ゴードン、ホワイトエッジ白木 / W17 boss: 武藤敬司、天龍源一郎、蝶野正洋、藤波辰爾、長州力." } },
          ],
        },
        {
          title: { ko: "長州力·蝶野正洋 식사 이벤트 정답", en: "長州力 / 蝶野正洋 dinner events — correct picks" },
          note: { ko: "출처 1곳(ゲーム攻略マン). 제한 시간 5초지만 OPTIONS로 멈출 수 있습니다. 정답률에 따라 마지마 건설 사장상을 받으며, 전부 맞히면 長州力 30장·蝶野正洋 50장입니다. 선택지 문장은 게임 표기 그대로입니다.", en: "One source (ゲーム攻略マン). There is a 5-second limit, but OPTIONS pauses it. You get President Awards by accuracy — a perfect run pays 30 (長州力) and 50 (蝶野正洋). Lines are as shown in game." },
          puzzles: [
            { title: { ko: "長州力 식사 (미션 9 「革命戦士・長州力」 클리어 후)", en: "長州力 dinner (after mission 9)" }, note: { ko: "공사 현장 마지마 근처의 長州力에게 말을 걸면 시작. 난이도 「難しい」는 자막만 없어지고 보상은 같습니다. 회상으로 다시 봐도 30장을 받습니다. 정답: 1 〇：そうだな · 2 〇：ほう · 3 □：ん？ · 4 □：本場サーモンのマリネ 海の妖精仕立てキャビアを添えて · 5 ×：大切な人との素敵な思い出になりますように · 6 ×：そんな事ねぇよ · 7 〇：なるほどな · 8 □：なんだって？ · 9 □：どうなんだ？ · 10 △：俺が手本をみせてやろう.", en: "Talk to 長州力 near Majima at the site. \"Hard\" only drops the subtitles — same reward — and replaying it from recollection pays the 30 again. Picks: 1 〇：そうだな · 2 〇：ほう · 3 □：ん？ · 4 □：本場サーモンのマリネ 海の妖精仕立てキャビアを添えて · 5 ×：大切な人との素敵な思い出になりますように · 6 ×：そんな事ねぇよ · 7 〇：なるほどな · 8 □：なんだって？ · 9 □：どうなんだ？ · 10 △：俺が手本をみせてやろう." } },
            { title: { ko: "蝶野正洋 식사 (미션 16 「真島建設、最後の戦い！」 클리어 후)", en: "蝶野正洋 drinks (after mission 16)" }, note: { ko: "공사 현장 마지마 근처의 蝶野正洋에게 말을 걸면 시작. 회상으로 다시 보면 사장상은 없습니다. 정답: 1 □：そうなのか？ · 2 □：どうなんだ？ · 3 〇：ほう · 4 〇：そうだな · 5 □：幸せにするぜ · 6 □：どうなんだ？ · 7 〇：なるほどな · 8 〇：そうだな · 9 〇：世界中の人間を敵にしても お前を守るぜ · 10 〇：確かにな · 11 □：どうなんだ？ · 12 □：なに？ · 13 △：そんなことねぇよ！.", en: "Talk to 蝶野正洋 near Majima at the site. Replaying it from recollection pays nothing. Picks: 1 □：そうなのか？ · 2 □：どうなんだ？ · 3 〇：ほう · 4 〇：そうだな · 5 □：幸せにするぜ · 6 □：どうなんだ？ · 7 〇：なるほどな · 8 〇：そうだな · 9 〇：世界中の人間を敵にしても お前を守るぜ · 10 〇：確かにな · 11 □：どうなんだ？ · 12 □：なに？ · 13 △：そんなことねぇよ！." } },
          ],
        },
      ],
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
        { ko: "니어핀 경품(초급/중급/상급): 100~199pt タフネスZ/アイアン/タフネスZZ, 200~299pt 銅の皿/タウリナー＋/銀の皿, 300~399pt ハラヘールRX/魅力の書/筋肉の書, 400pt 「ゴルフスイングの奥義書」(배틀 스킬 「ゴルフスイング」 습득, 2회째부터 技巧の書)/ブラックシャフト/ゴールデンシャフト(2회째부터 スタミナンロイヤル). 컵인은 1구 최고 200pt입니다.", en: "Nearest-the-Pin prizes (beginner/intermediate/advanced): 100–199 pts タフネスZ / アイアン / タフネスZZ; 200–299 銅の皿 / タウリナー＋ / 銀の皿; 300–399 ハラヘールRX / 魅力の書 / 筋肉の書; 400 pts ゴルフスイングの奥義書 (teaches the Golf Swing battle skill; 技巧の書 on repeats) / ブラックシャフト / ゴールデンシャフト (スタミナンロイヤル on repeats). A hole-in-one is the 200-point maximum for one ball." },
        { ko: "빙고 경품: 1빙고 ハラヘールハーフ, 2 アイアン, 3 スタミナンXX, 4 銀の皿, 5 タフネスインフィニティ, 6 根性の書, 8빙고 「ゴルフスイングの極みの奥義書」(히트 액션 「ゴルフスイングの極み」 습득, 2회째부터 スタミナンロイヤル).", en: "Bingo prizes: 1 line ハラヘールハーフ, 2 アイアン, 3 スタミナンXX, 4 銀の皿, 5 タフネスインフィニティ, 6 根性の書, 8 lines ゴルフスイングの極みの奥義書 (teaches that Heat Action; スタミナンロイヤル on repeats)." },
        { ko: "빙고는 과녁을 맞힌 장수에 따라 바람이 정해진 값으로 바뀝니다 — 0장 무풍, 1장 좌하 1m, 2장 우하 2m, 3장 좌 4m(패널이 안쪽으로 이동), 4장 우상 5m, 5장 좌상 6m, 6장 상 8m(패널이 오른쪽으로 기욺), 7장 우 9m(왼쪽으로 기욺), 8장 우상 10m(오른쪽으로 기욺). 바람이 약한 초반에 가장 안쪽 과녁부터 맞혀 두면 후반에 앞쪽 과녁이 쉬워집니다.", en: "Bingo wind is fixed by how many targets you have hit: 0 calm, 1 down-left 1 m, 2 down-right 2 m, 3 left 4 m (panels move back), 4 up-right 5 m, 5 up-left 6 m, 6 up 8 m (panels tilt right), 7 right 9 m (tilt left), 8 up-right 10 m (tilt right). Take the farthest targets early while the wind is light; the near ones stay easy late." },
        { ko: "상급 코스 300pt는 서브스토리 No.58 「アルバトロス赤木のクラブ」 조건이기도 합니다. 공이 핀에 맞는 위치로 치면 컵인 연출이 나오며, 출처 영상이 상급 코스의 컵인 파워·위치를 보여 줍니다.", en: "300 pts on Advanced is also the condition for substory No.58 \"Albatross Akagi's Club\". Hitting the ball into the pin plays the cup-in; the source's video shows the power and aim for cup-ins on Advanced." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 ゴルフセンター", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/golf-center.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
      puzzleSets: [
        {
          title: { ko: "상급 코스 컵인 영상", en: "Advanced course cup-in video" },
          puzzles: [
            { title: { ko: "니어핀 상급 — 컵인 파워·위치", en: "Nearest-the-Pin Advanced — cup-in power and aim" }, video: "https://www.youtube.com/watch?v=FpVlXNLpNOo" },
            { title: { ko: "빙고 챌린지 플레이", en: "Bingo Challenge run" }, video: "https://www.youtube.com/watch?v=tzWxNuE5o_4" },
          ],
        },
      ],
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
      source: [
        { label: "ゲーム攻略マン — 龍が如く極2 バッティングセンター", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/batting-center.html" },
        { label: "darage.com — 龍が如く極2 バッティングセンター", url: "https://darage.com/guide/ryukiwami2/mini01.html" },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
      courses: [
        {
          title: { ko: "챌린지 코스 — 초급 1", en: "Challenge Course — Beginner 1" },
          pitches: [
            { pos: 5, type: "Straight", speed: "135" }, { pos: 3, type: "Straight", speed: "145" }, { pos: 7, type: "Straight", speed: "155" }, { pos: 1, type: "Straight", speed: "135" }, { pos: 9, type: "Straight", speed: "155" },
            { pos: 4, type: "Straight", speed: "155" }, { pos: 6, type: "Straight", speed: "145" }, { pos: 5, type: "Straight", speed: "155" }, { pos: 7, type: "Straight", speed: "135" }, { pos: 3, type: "Straight", speed: "155" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초급 2", en: "Challenge Course — Beginner 2" },
          pitches: [
            { pos: 3, type: "Curve", speed: "120" }, { pos: 4, type: "Curve", speed: "110" }, { pos: 9, type: "Straight", speed: "145" }, { pos: 1, type: "Curve", speed: "110" }, { pos: 6, type: "Curve", speed: "120" },
            { pos: 2, type: "Straight", speed: "135" }, { pos: 8, type: "Straight", speed: "145" }, { pos: 1, type: "Curve", speed: "110" }, { pos: 7, type: "Straight", speed: "145" }, { pos: 3, type: "Curve", speed: "110" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초급 3", en: "Challenge Course — Beginner 3" },
          pitches: [
            { pos: 3, type: "Curve", speed: "120" }, { pos: 1, type: "Sinker", speed: "110" }, { pos: 3, type: "Sinker", speed: "120" }, { pos: 6, type: "Curve", speed: "110" }, { pos: 4, type: "Curve", speed: "120" },
            { pos: 2, type: "Curve", speed: "110" }, { pos: 1, type: "Sinker", speed: "120" }, { pos: 3, type: "Curve", speed: "110" }, { pos: 1, type: "Sinker", speed: "120" }, { pos: 6, type: "Sinker", speed: "110" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 중급 1", en: "Challenge Course — Intermediate 1" },
          pitches: [
            { pos: 6, type: "Cutball", speed: "130" }, { pos: 2, type: "Split", speed: "145" }, { pos: 5, type: "One-seam", speed: "130" }, { pos: 3, type: "Cutball", speed: "120" }, { pos: 7, type: "Two-seam", speed: "140" },
            { pos: 1, type: "Split", speed: "135" }, { pos: 3, type: "One-seam", speed: "130" }, { pos: 1, type: "Split", speed: "125" }, { pos: 1, type: "Cutball", speed: "130" }, { pos: 6, type: "Two-seam", speed: "140" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 중급 2", en: "Challenge Course — Intermediate 2" },
          pitches: [
            { pos: 6, type: "Slider", speed: "125" }, { pos: 4, type: "Shoot", speed: "125" }, { pos: 2, type: "Straight", speed: "155" }, { pos: 2, type: "Fork", speed: "125" }, { pos: 5, type: "Slider", speed: "115" },
            { pos: 3, type: "Shoot", speed: "125" }, { pos: 1, type: "Fork", speed: "125" }, { pos: 9, type: "Shoot", speed: "115" }, { pos: 7, type: "Slider", speed: "125" }, { pos: 2, type: "Fork", speed: "125" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 중급 3", en: "Challenge Course — Intermediate 3" },
          pitches: [
            { pos: 5, type: "Straight", speed: "145" }, { pos: 2, type: "Changeup", speed: "100" }, { pos: 6, type: "Straight", speed: "145" }, { pos: 1, type: "Curve", speed: "120" }, { pos: 4, type: "Straight", speed: "145" },
            { pos: 3, type: "Sinker", speed: "120" }, { pos: 8, type: "Straight", speed: "145" }, { pos: 2, type: "Straight", speed: "145" }, { pos: 1, type: "Changeup", speed: "100" }, { pos: 6, type: "Curve", speed: "110" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 상급 1", en: "Challenge Course — Advanced 1" },
          pitches: [
            { pos: 6, type: "Slider", speed: "125" }, { pos: 6, type: "Cutball", speed: "130" }, { pos: 1, type: "Two-seam", speed: "130" }, { pos: 3, type: "Cutball", speed: "130" }, { pos: 7, type: "Shoot", speed: "135" },
            { pos: 9, type: "Slider", speed: "125" }, { pos: 3, type: "Cutball", speed: "140" }, { pos: 3, type: "Shoot", speed: "135" }, { pos: 4, type: "Two-seam", speed: "140" }, { pos: 1, type: "Slider", speed: "135" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 상급 2", en: "Challenge Course — Advanced 2" },
          pitches: [
            { pos: 6, type: "Fork", speed: "125" }, { pos: 7, type: "One-seam", speed: "130" }, { pos: 2, type: "Changeup", speed: "100" }, { pos: 1, type: "Split", speed: "135" }, { pos: 3, type: "Changeup", speed: "100" },
            { pos: 4, type: "Fork", speed: "125" }, { pos: 6, type: "Split", speed: "145" }, { pos: 2, type: "Changeup", speed: "110" }, { pos: 9, type: "One-seam", speed: "140" }, { pos: 1, type: "Fork", speed: "135" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 상급 3", en: "Challenge Course — Advanced 3" },
          pitches: [
            { pos: 3, type: "Curve", speed: "120" }, { pos: 7, type: "Two-seam", speed: "130" }, { pos: 3, type: "Sinker", speed: "120" }, { pos: 7, type: "One-seam", speed: "130" }, { pos: 4, type: "Curve", speed: "120" },
            { pos: 6, type: "Sinker", speed: "120" }, { pos: 1, type: "One-seam", speed: "140" }, { pos: 3, type: "Curve", speed: "130" }, { pos: 9, type: "Two-seam", speed: "140" }, { pos: 1, type: "Sinker", speed: "130" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초인급 1", en: "Challenge Course — Superhuman 1" },
          note: { ko: "가장 어려운 티어", en: "Hardest tier" },
          pitches: [
            { pos: 8, type: "Two-seam", speed: "140" }, { pos: 3, type: "Curve", speed: "110" }, { pos: 4, type: "American Dream", speed: "120" }, { pos: 2, type: "Split", speed: "145" }, { pos: 9, type: "Slider", speed: "135" },
            { pos: 2, type: "Changeup", speed: "90" }, { pos: 7, type: "Hop", speed: "160" }, { pos: 3, type: "Fork", speed: "125" }, { pos: 7, type: "Cutball", speed: "140" }, { pos: 3, type: "Sinker", speed: "110" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초인급 2", en: "Challenge Course — Superhuman 2" },
          pitches: [
            { pos: 1, type: "Curve", speed: "120" }, { pos: 3, type: "Linear Straight", speed: "170" }, { pos: 2, type: "Fork", speed: "135" }, { pos: 7, type: "Two-seam", speed: "140" }, { pos: 9, type: "Cutball", speed: "140" },
            { pos: 2, type: "Changeup", speed: "90" }, { pos: 6, type: "Hop", speed: "160" }, { pos: 4, type: "Slider", speed: "135" }, { pos: 7, type: "Linear Straight", speed: "170" }, { pos: 3, type: "Shoot", speed: "135" },
          ],
        },
        {
          title: { ko: "챌린지 코스 — 초인급 3", en: "Challenge Course — Superhuman 3" },
          note: {
            ko: "위치가 매판 랜덤 — 아래는 1구 착탄 지점 기준 상대 이동(구질·구속은 고정)",
            en: "Position randomizes each run — listed as movement relative to pitch 1's landing spot (type/speed still fixed)",
          },
          pitches: [
            { type: "American Dream (기준)", speed: "120" }, { type: "Fork · 아래로 0.5칸", speed: "135" }, { type: "Curve · 우하 1칸", speed: "110" }, { type: "Linear Straight · 기준과 동일", speed: "170" }, { type: "Sinker · 좌하 1칸", speed: "120" },
            { type: "Two-seam · 좌로 0.5칸", speed: "140" }, { type: "Slider · 우로 1칸", speed: "135" }, { type: "American Dream · 기준과 동일", speed: "120" }, { type: "Changeup · 아래로 1칸", speed: "90" }, { type: "American Dream · 기준과 동일", speed: "120" },
          ],
        },
      ],
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
        ko: "달성목록은 「무르기를 쓰지 않고 1승」 한 칸뿐이라, 규칙만 알면 의외로 빨리 끝납니다. 모드는 순위전과 시련 돌파(1~최종, 공략표에는 1~10) 두 가지이고, 즈메쇼기(외통 문제) 모드는 없습니다.",
        en: "Only one completion row — win a game without using takeback — so it is far shorter than it looks. The modes are the ranking league and the Trials (1 through \"Final\"; the guide's table lists 1–10); there is no tsume-shogi puzzle mode.",
      },
      howTo: [
        { ko: "달성목록 조건은 승리 자체가 아니라 「무르기 없이」입니다. 출처는 같은 시련 돌파를 반복해도 카운트되므로 시련 돌파로 채우는 것을 권합니다.", en: "The row is about not taking a move back, not about the opponent — the source recommends doing it in the Trials, since replaying the same Trial still counts." },
        { ko: "시련 돌파는 미리 짜인 국면에서 시작하는 CPU와의 한 판입니다. 아래 영상대로 두면 대개 CPU도 같은 수로 응하고, 다르게 두면 무르기(待った)로 몇 번 되돌려 보면 영상과 같은 수를 둘 때가 있습니다. 최종까지 클리어해도 별도 보상은 없습니다.", en: "A Trial is a full game against the CPU from a preset position. Follow the videos below and the CPU usually answers the same way; if it doesn't, take back a few times and it may fall in line. Clearing up to the final Trial gives nothing extra." },
        { ko: "케이마는 메인 스토리 11장 종반부터 들어갈 수 있고 1회 500엔, 노상 장기는 1회 100엔입니다. 케이마에서 번 포인트는 노상 장기에서도 씁니다.", en: "Keima opens late in Chapter 11 and costs ¥500 a game; street shogi costs ¥100. Points earned at Keima are spendable at the street boards too." },
        { ko: "승리 시 장기 포인트 = 무르기 미사용분(남은 횟수 × 50, 최대 150) + 초무르기 미사용 100 + 대전 포인트입니다. 순위전 대전 포인트는 10급 100점부터 장기왕 와타나베 3,000점까지이고, 와타나베를 이기면 무료로 둘 수 있습니다.", en: "A win pays shogi points = unused takebacks (50 each, up to 150) + 100 for never using super takeback + the match points. Ranking-league match points run from 100 (10-kyu) to 3,000 for Shogi King Watanabe, and beating him makes play free." },
        { ko: "노상 장기에서 「자신은 없다」를 고르면 「장기의 기본」(지시 어시스트)을 받습니다. 대국 중 △로 최선수를 볼 수 있습니다.", en: "Choosing \"Not confident\" at a street board gives you Shogi Basics (Move Assist), which shows a suggested move on triangle." },
        { ko: "장기 포인트는 환금 아이템으로 바꿉니다. 동 접시 10P, 은 접시 100P, 금 접시 1,000P, 플래티넘 접시 2,000P 순이라 포인트가 쌓이면 위쪽 경품이 훨씬 효율적입니다.", en: "Shogi points buy trade-in dishes — bronze 10P, silver 100P, gold 1,000P, platinum 2,000P — so bank points and take the higher tiers." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 将棋", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/syogi.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
      puzzleSets: [
        {
          title: { ko: "시련 돌파 1~10 — 공략 영상", en: "Trials 1–10 — walkthrough videos" },
          note: {
            ko: "ゲーム攻略マン이 시련마다 올린 영상이며, 수순을 글이나 그림으로 공개한 출처는 찾지 못했습니다. CPU와의 실전이라 상대가 영상과 다르게 둘 수 있으니 어긋나면 무르기(待った)로 다시 시도하세요.",
            en: "One video per Trial from ゲーム攻略マン; no source publishes the moves as text or diagrams. These are live games against the CPU, so it may deviate — retry with a takeback.",
          },
          puzzles: [
            { title: { ko: "시련 돌파 1 (100P)", en: "Trial 1 (100 pts)" }, video: YT("TGcZ1Wufbhw"), note: { ko: "왕과 비차를 움직여 상대 왕을 구석으로 몰면 이깁니다.", en: "Use your king and rook to drive the enemy king into a corner." } },
            { title: { ko: "시련 돌파 2 (200P)", en: "Trial 2 (200 pts)" }, video: YT("JYvMstsHtj4"), note: { ko: "비차로 보를 따내며 상대 왕을 구석으로 몰고, 보를 토킨(と金)으로 만들어 몰아붙입니다.", en: "Pick up pawns with the rook while herding the king to the corner, then promote a pawn to tokin to finish it." } },
            { title: { ko: "시련 돌파 3 (300P)", en: "Trial 3 (300 pts)" }, video: YT("blLXcg1kGzc"), note: { ko: "왕·금·은을 고르게 적진으로 올려 상대 왕을 끝으로 몹니다.", en: "Advance king, gold and silver evenly into enemy territory and pin the king to the edge." } },
            { title: { ko: "시련 돌파 4 (400P)", en: "Trial 4 (400 pts)" }, video: YT("XhJFEgKVQo4"), note: { ko: "먼저 상대 진영의 빈칸에 비차와 금을 넣으면 왕을 구석으로 몰아 외통시키기 쉽습니다.", en: "Start by dropping the rook and gold into the open squares of the enemy camp; the king then corners easily." } },
            { title: { ko: "시련 돌파 5 (500P)", en: "Trial 5 (500 pts)" }, video: YT("-JMLkfae51E"), note: { ko: "적이 왼쪽에서 밀고 올라오므로 이쪽은 오른쪽에서 말을 올리고, 왕이 몰리지 않게 피하면서 상대 왕을 왼쪽으로 몹니다.", en: "The enemy pushes up the left, so advance on the right, keep your king out of mate, and drive theirs to the left." } },
            { title: { ko: "시련 돌파 6 (600P)", en: "Trial 6 (600 pts)" }, video: YT("m-pEs2exc_w"), note: { ko: "왕·은·보를 고르게 적진으로 올려 상대 왕을 구석으로 몹니다.", en: "Advance king, silver and pawns evenly and corner the enemy king." } },
            { title: { ko: "시련 돌파 7 (700P)", en: "Trial 7 (700 pts)" }, video: YT("h2kcTAEpne4"), note: { ko: "보와 금을 오른쪽 위로 올려 상대 왕을 오른쪽 구석으로 몹니다.", en: "Push pawns and gold up the right and corner the king on the right." } },
            { title: { ko: "시련 돌파 8 (800P)", en: "Trial 8 (800 pts)" }, video: YT("87gD9orr3CE"), note: { ko: "먼저 각과 비차를 승격시키고 적진에 토킨을 배치한 뒤 왕을 왼쪽 구석으로 몹니다. 금·은 수비를 무너뜨리려면 버림말이 필요합니다.", en: "Promote bishop and rook first, plant tokin in the enemy camp, then push the king to the left corner — breaking the gold/silver guard takes a sacrifice." } },
            { title: { ko: "시련 돌파 9 (900P)", en: "Trial 9 (900 pts)" }, video: YT("u-8DhXztjhY"), note: { ko: "각을 버리고 비차를 적진에 넣어 비차와 금으로 빠르게 외통시킵니다.", en: "Sacrifice the bishop, get the rook into the enemy camp, and mate quickly with rook and gold." } },
            { title: { ko: "시련 돌파 10 (1000P)", en: "Trial 10 (1000 pts)" }, video: YT("SgeIzY-s37w"), note: { ko: "상대의 생각 시간이 길어져 한 수마다 오래 걸립니다. 보를 움직여 각·비차가 바로 적진에 들어가게 하고, 토킨과 빼앗은 금을 파고들게 해 왕을 구석으로 몹니다.", en: "The CPU thinks much longer per move. Open pawn lanes so bishop and rook enter at once, then sneak tokin and captured golds in to corner the king." } },
          ],
        },
      ],
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
        { ko: "GREAT·GOOD이 이어지면 콤보가 쌓이고, 20콤보를 넘기면 「초정열 모드」로 들어가 점수가 크게 오릅니다. 한 번이라도 MISS가 나면 콤보가 처음부터이므로, 90점은 콤보를 끊지 않는 데서 갈립니다.", en: "Consecutive GREAT/GOOD hits build a combo, and 20+ enters Super Passion mode where the score climbs fast. One MISS resets it, so the 90 line comes down to never breaking the chain." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 カラオケ", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/karaoke.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
      puzzleSets: [
        {
          title: { ko: "수록곡 8곡과 부르는 사람", en: "The 8 songs and who sings them" },
          note: { ko: "출처 1곳(ゲーム攻略マン). 키류가 직접 부르는 곡은 2곡뿐이고 나머지는 추임새(合いの手)입니다. 추임새 곡은 「無難に合いの手」로는 퍼펙트여도 90점까지만 나오므로 반드시 「情熱的に合いの手」를 고르세요. 곡명은 게임 표기 그대로입니다.", en: "One source (ゲーム攻略マン). Kiryu sings lead on only two songs; on the rest he does the call-and-response. In those, the safe option (無難に合いの手) caps at 90 even with a perfect run, so always pick the passionate one (情熱的に合いの手). Song titles as shown in game." },
          puzzles: [
            { title: { ko: "TONIGHT", en: "TONIGHT" }, note: { ko: "키류 보컬", en: "Kiryu on lead" } },
            { title: { ko: "絶望頂プライド", en: "絶望頂プライド" }, note: { ko: "키류 보컬", en: "Kiryu on lead" } },
            { title: { ko: "幸せならいいや", en: "幸せならいいや" }, note: { ko: "마지마 보컬 · 키류 추임새", en: "Majima on lead, Kiryu on calls" } },
            { title: { ko: "Like A Butterfly", en: "Like A Butterfly" }, note: { ko: "키라라·AIKA 보컬 · 키류 추임새", en: "Kirara or AIKA on lead, Kiryu on calls" } },
            { title: { ko: "×3シャイン", en: "×3シャイン" }, note: { ko: "유아·코유키 보컬 · 키류 추임새", en: "Yua or Koyuki on lead, Kiryu on calls" } },
            { title: { ko: "ring", en: "ring" }, note: { ko: "쇼코·카나·유키 보컬 · 키류 추임새", en: "Shoko, Kana or Yuki on lead, Kiryu on calls" } },
            { title: { ko: "オトメタル my life", en: "オトメタル my life" }, note: { ko: "하루카 보컬 · 키류 추임새", en: "Haruka on lead, Kiryu on calls" } },
            { title: { ko: "ユーロde×3シャイン", en: "ユーロde×3シャイン" }, note: { ko: "유키 보컬 · 키류 추임새", en: "Yuki on lead, Kiryu on calls" } },
          ],
        },
      ],
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
        { ko: "화살은 처음 「초급자의 화살」(C)이고, 자매를 이길 때마다 B → A → S로 좋아집니다. 손가락 세 개로 왼쪽 스틱을 집듯이 잡으면 흔들림이 줄어든다는 것이 출처의 팁입니다.", en: "You start with Beginner Darts (C) and each sister you beat upgrades you to B, A, then S. The source's tip: pinch the left stick with thumb, index and middle finger to steady the aim." },
      ],
      source: { label: "ゲーム攻略マン — 龍が如く極2 ダーツ", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/darts.html" },
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
      puzzleSets: [
        {
          title: { ko: "나스노 자매 대전 (라이벌 전원 격파)", en: "The Nasuno sisters (beat every rival)" },
          note: { ko: "출처 1곳(ゲーム攻略マン). 네 자매를 모두 이기면 「라이벌 전원 격파」 칸이 찹니다. 에리와 레미는 한 번 다트장을 떠났다가 돌아와야 배치됩니다. 출처 추천은 시간이 짧은 01의 301입니다.", en: "One source (ゲーム攻略マン). Beating all four sisters fills the beat-every-rival row. Eri and Remi only appear after you leave the darts spot and come back. The source recommends 01 at 301 — it is the shortest game." },
          puzzles: [
            { title: { ko: "那須野 舞子 (약)", en: "Maiko Nasuno (weak)" }, note: { ko: "처음부터 있음. 보상 「중급자의 화살」(B). 301에서 BULL×3 → BULL×3 → 1 (150 → 150 → 1)로 끝납니다.", en: "There from the start. Reward: Intermediate Darts (B). In 301, go BULL×3 → BULL×3 → 1 (150, 150, 1)." } },
            { title: { ko: "那須野 千晴 (중)", en: "Chiharu Nasuno (medium)" }, note: { ko: "처음부터 있음. 보상 「상급자의 화살」(A). 같은 BULL×3 → BULL×3 → 1 루트.", en: "There from the start. Reward: Advanced Darts (A). Same BULL×3 → BULL×3 → 1 route." } },
            { title: { ko: "那須野 絵里 (강)", en: "Eri Nasuno (strong)" }, note: { ko: "치하루를 이긴 뒤 등장. 보상 「달인의 화살」(S). 같은 루트로 이길 수 있습니다.", en: "Appears after Chiharu. Reward: Master Darts (S). The same route still wins." } },
            { title: { ko: "那須野 麗美 (최강)", en: "Remi Nasuno (strongest)" }, video: "https://www.youtube.com/watch?v=uiaHiGC8HRQ", note: { ko: "에리를 이긴 뒤 등장. 보상 방어구 「鬼子母神のお守り」. 실수 없이 해트트릭을 노려 와서 위 루트로는 집니다 — BULL로 150, 다음 라운드 151을 노려 남은 51에서 「17 트리플」을 맞히세요.", en: "Appears after Eri. Reward: the armour Kishimojin Charm. She goes for clean hat-tricks, so the route above loses — score 150, then go for 151 by hitting triple 17 when 51 is left." } },
          ],
        },
      ],
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 (버추어 파이터 2·전뇌전기 버추얼 온)", en: "Club SEGA (Virtua Fighter 2, Cyber Troopers Virtual-On)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 클럽 세가 중도 거리점·극장 앞 광장점 / 소텐보리 — 클럽 세가 소텐보리점", en: "Club SEGA Nakamichi St. and Theater Square (Kamurocho), Club SEGA Sotenbori" },
      summary: {
        ko: "아케이드 기판을 통째로 이식한 종목입니다. 달성목록은 승패와 무관하게 「전 캐릭터 선택 플레이」 한 칸씩입니다 — 버추어 파이터 2는 10명, 버추얼 온은 8기를 한 번씩 골라 대전을 시작하면 채워집니다.",
        en: "Two arcade boards emulated whole. The completion rows do not care about winning — each just wants every character selected and played once: 10 fighters in Virtua Fighter 2, 8 Virtuaroids in Virtual-On.",
      },
      howTo: [
        { ko: "이겨야 하는 게 아니라 캐릭터를 고르고 대전을 한 번 시작하면 그 칸이 채워집니다. 지든 이기든 상관없으니 10명·8기를 순서대로 한 판씩만 돌리세요.", en: "You do not need to win — selecting a character and starting one match fills that row, loss or not, so just cycle through all 10 (or 8) once each." },
        { ko: "버추얼 온은 좌우 스틱 조작이 패드에 매핑돼 있어 이동·대시가 익숙해지기 전까지 어색합니다. 옵션에서 조작 설명을 먼저 확인하세요.", en: "Virtual-On maps its twin-stick controls onto the pad, so movement and dashing feel wrong until you read the control screen in options." },
        { ko: "두 기판은 카무로초 두 지점과 소텐보리 지점에 모두 있습니다. 스토리 중 어느 도시에 있든 진행할 수 있으니 이동 김에 한 판씩 끼워 넣으세요.", en: "Both cabinets are in all three Club SEGA branches, so you can chip away at them in whichever city the story has you in." },
        { ko: "버추얼 온은 각 기체를 고르고 시작하자마자 중단해도 카운트됩니다. 8기를 차례로 골라 바로 빠져나오면 거의 플레이하지 않고 칸이 찹니다.", en: "Virtual-On counts a Virtuaroid even if you quit the instant the match starts — pick all eight in turn and bail each time." },
        { ko: "버추어 파이터 2는 지점마다 버전과 난이도가 다릅니다 — 나카미치 거리점은 2.0(이지·노멀), 극장 앞 광장점 2층은 2.0과 2.1(각 이지·노멀), 소텐보리점은 2.1(이지·노멀). 버추얼 온은 극장 앞점만 이지가 있고 나머지는 노멀입니다.", en: "Virtua Fighter 2 varies by branch: Nakamichi St. has 2.0 (Easy/Normal), Theater Square 2F has both 2.0 and 2.1 (Easy/Normal each), Sotenbori has 2.1 (Easy/Normal). Virtual-On has Easy only at Theater Square; the others are Normal." },
        { ko: "버추어 파이터 2를 혼자 이기려면 이지·노멀 기판에서 제프리의 힙 어택(L2)이 편합니다. 링아웃도 노릴 수 있고, 리온 이후로는 근거리 반격이 잦으니 힙 어택 뒤 십자키 뒤로 후방 회전해 거리를 벌리세요.", en: "To win Virtua Fighter 2 solo, use Jeffry's hip attack (L2) on an Easy/Normal cabinet — it even gets ring-outs. From Lion on, opponents punish up close, so roll back (d-pad back) after each hip attack to reopen the gap." },
        { ko: "버추어 파이터 2 비기: 캐릭터 선택 화면에서 ↓↓↑↑←←→→ 입력 시 엑스퍼트 모드, 코인을 넣기 전 P+K+G를 누른 채 스타트로 단위 인정 모드, ↑를 누른 채 ○로 캐릭터 색 변경.", en: "VF2 codes: ↓↓↑↑←←→→ on character select for Expert mode; hold P+K+G and press Start before inserting a coin for Rank mode; hold ↑ and press circle on a character for the alternate colour." },
      ],
      source: [
        { label: "ゲーム攻略マン — 龍が如く極2 プレイスポット", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/play-spot/" },
        { label: "ゲーム攻略マン — 龍が如く極2 バーチャファイター2", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/virtua-fighter2/" },
        { label: "ゲーム攻略マン — 龍が如く極2 電脳戦機バーチャロン", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/virtual-on/" },
      ],
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
        { ko: "기기별 경품(출처 지도 A~D — A 클럽 세가 나카미치 거리점, B 극장 앞점, C 요시다 배팅 센터, D 소텐보리점): アイアイ·ゴンゴン·ミーミー·ベイビー는 A·C·D, 文鳥のブンちゃん(白·ピンク)·ジャンボブンちゃん은 B·D, ちぃねこ 4종(あめしょ·あお·みけ·とら)은 B·C·D, ぺたわんこ 2종(ゴールデンレトリバー·フレンチブルドッグ)은 전 기기. ちぃねこ(赤)는 4장, ロボ部長·ロボ課長은 서브스토리 No.43 전용입니다.", en: "Prizes by machine (source map A–D: A Club SEGA Nakamichi St., B Theater Square, C Yoshida Batting Center, D Sotenbori): アイアイ, ゴンゴン, ミーミー and ベイビー in A, C, D; 文鳥のブンちゃん (white, pink) and ジャンボブンちゃん in B, D; the four ちぃねこ in B, C, D; both ぺたわんこ everywhere. ちぃねこ (red) is Chapter 4 only, ロボ部長/ロボ課長 only in substory No.43." },
        { ko: "이번 작품은 암 힘이 약해 가운데로 움켜쥐기가 어렵습니다. 경품을 한 번 옆으로 넘어뜨린 뒤 가운데로 잡거나, ジャンボブンちゃん처럼 큰 것은 발톱으로 긁어 배출구 쪽으로 옮기세요. 배치가 엉키면 점원에게 「UFOキャッチャーの中身を並べ直してもらう」를 부탁해 원위치로 돌릴 수 있습니다.", en: "The claw is weaker than in earlier games, so a clean centre grab rarely works: knock the prize on its side first, then grab it, or for big ones like ジャンボブンちゃん drag them toward the chute with the claw tips. If the pile gets messy, ask the attendant to rearrange it back to the start position." },
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
        { ko: "kamigame 기준 5장 이후 공원 앞 거리(한라이 북쪽)에 나타나는 남자에게 다가가면 이용할 수 있습니다. 아래 표의 조합은 버튼을 왼쪽부터 순서대로 누르는 입력이며, 조합이 틀리면 문장이 성립하지 않아 호감도가 오르지 않습니다.", en: "Per kamigame it opens from Chapter 5, via the man who appears on Park Blvd. north of Kanrai. The combinations below are the buttons pressed left to right; a wrong combination makes no sentence and the gauge does not move." },
      ],
      source: [
        { label: "ゲーム攻略マン — 龍が如く極2 グラビア撮影スタジオ", url: "https://dswiipspwikips3.jp/yakuza-kiwami2/gravure-photo-studio/" },
        { label: "神ゲー攻略 — 龍が如く極2 グラビア撮影スタジオ攻略", url: "https://kamigame.jp/%E9%BE%8D%E3%81%8C%E5%A6%82%E3%81%8F%E6%A5%B52/%E3%83%9F%E3%83%8B%E3%82%B2%E3%83%BC%E3%83%A0/%E3%82%B0%E3%83%A9%E3%83%93%E3%82%A2%E6%92%AE%E5%BD%B1%E3%82%B9%E3%82%BF%E3%82%B8%E3%82%AA%E6%94%BB%E7%95%A5.html" },
      ],
      achievementSlug: "lexus2_tasseimkokuroku_all_clear",
      puzzleSets: [
        {
          title: { ko: "아오야마 히카루(青山ひかる) — 코스별 선택지 조합", en: "Hikaru Aoyama (青山ひかる) — button combinations per course" },
          note: { ko: "출처 1곳(ゲーム攻略マン)의 버튼 조합표입니다. 회화마다 문장이 성립하는 조합 3개가 실려 있고, kamigame에 실린 문장 목록과 84회화 모두 같은 문장임을 확인했습니다(버튼 배치는 ゲーム攻略マン에만 있음). 회화 앞의 일본어는 아이돌의 대사 그대로입니다.", en: "Button combinations from one source (ゲーム攻略マン): three combinations per conversation that form a valid line. kamigame's list carries the same three lines for all 84 conversations (only ゲーム攻略マン gives the buttons). The Japanese before each set is the idol's line as shown in game." },
          puzzles: [
            { title: { ko: "사복 코스 1 (3,000엔)", en: "Casual Wear 1 (¥3,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「ひかるです はじめまして」 △△〇 / □□△ / 〇〇□ · ②「頑張りますので よろしくお願いします！」 〇□□ / △〇〇 / □△△ · ③「撮影し放題なんですよ お得だと思いません？」 △〇△ / □△□ / 〇□〇 · ④「これ 私服なんですよ 似合います？」 △□〇 / □△□ / 〇〇△ · ⑤「こんな感じでどうですか？」 △〇□ / □△〇 / 〇□△ · ⑥「もしかして変なこと考えてるでしょ？」 △□△ / □〇□ / 〇△〇 · ⑦「こういう感じってどうかな？」 △△□ / □□△ / 〇〇〇. 회상 해금: 회화2 〇□□ → 「反応1」, 회화4 △□〇 → 「反応2」, 회화6 △□△ → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「時間切れ」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「ひかるです はじめまして」 △△〇 / □□△ / 〇〇□ · ②「頑張りますので よろしくお願いします！」 〇□□ / △〇〇 / □△△ · ③「撮影し放題なんですよ お得だと思いません？」 △〇△ / □△□ / 〇□〇 · ④「これ 私服なんですよ 似合います？」 △□〇 / □△□ / 〇〇△ · ⑤「こんな感じでどうですか？」 △〇□ / □△〇 / 〇□△ · ⑥「もしかして変なこと考えてるでしょ？」 △□△ / □〇□ / 〇△〇 · ⑦「こういう感じってどうかな？」 △△□ / □□△ / 〇〇〇. Recollection unlocks: talk 2 〇□□ → \"反応1\", talk 4 △□〇 → \"反応2\", talk 6 △□△ → \"反応3\", press nothing and just watch → \"時間切れ\"." } },
            { title: { ko: "사복 코스 2 (3,000엔)", en: "Casual Wear 2 (¥3,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「ちゃんと覚えてますよ」 △△□ / □□△ / 〇〇〇 · ②「本当に覚えてるんだけどなぁ」 △□□ / □△〇 / 〇〇△ · ③「今回は色んなポーズで頑張っちゃおうかなぁって　どうかな？」 △△〇 / □□△ / 〇〇□ · ④「ちゃんと盛り上げてくれないとダメだからね」 □□〇 / △△□ / 〇〇△ · ⑤「リクエストがあれば言ってね？」 □□△ / △△□ / 〇〇〇 · ⑥「このポーズには自身があるんだ」 □〇〇 / △□□ / 〇△△ · ⑦「ちゃんと撮ってくれないと怒っちゃうからね？」 △△□ / □□△ / 〇〇〇. 회상 해금: 회화4 □□〇 → 「反応1」, 회화5 □□△ → 「反応2」, 회화6 □〇〇 → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「またね」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「ちゃんと覚えてますよ」 △△□ / □□△ / 〇〇〇 · ②「本当に覚えてるんだけどなぁ」 △□□ / □△〇 / 〇〇△ · ③「今回は色んなポーズで頑張っちゃおうかなぁって　どうかな？」 △△〇 / □□△ / 〇〇□ · ④「ちゃんと盛り上げてくれないとダメだからね」 □□〇 / △△□ / 〇〇△ · ⑤「リクエストがあれば言ってね？」 □□△ / △△□ / 〇〇〇 · ⑥「このポーズには自身があるんだ」 □〇〇 / △□□ / 〇△△ · ⑦「ちゃんと撮ってくれないと怒っちゃうからね？」 △△□ / □□△ / 〇〇〇. Recollection unlocks: talk 4 □□〇 → \"反応1\", talk 5 □□△ → \"反応2\", talk 6 □〇〇 → \"反応3\", press nothing and just watch → \"またね\"." } },
            { title: { ko: "치어 코스 (6,000엔)", en: "Cheerleader (¥6,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「今日はこの格好で撮影でーす」 △〇□ / 〇△〇 / □□△ · ②「しなくちゃいけない事があるんだった」 △□□ / □〇〇 / 〇△△ · ③「当てたらサービスしちゃいますよ？」 △△□ / □□〇 / 〇〇△ · ④「運動する前に　体をほぐさないとね」 □△△ / △〇〇 / 〇□□ · ⑤「だから……　出来ないんですけど」 △△〇 / □□△ / 〇〇□ · ⑥「撮影で手が離せないかー」 △□〇 / □〇△ / 〇△□ · ⑦「いっぱい撮っ手くださいね？　いくよー？」 △□〇 / □〇△ / 〇△□. 회상 해금: 회화1 〇△〇 → 「反応1」, 회화4 □△△ → 「反応2」, 회화1 △〇□ → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「時間だ」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「今日はこの格好で撮影でーす」 △〇□ / 〇△〇 / □□△ · ②「しなくちゃいけない事があるんだった」 △□□ / □〇〇 / 〇△△ · ③「当てたらサービスしちゃいますよ？」 △△□ / □□〇 / 〇〇△ · ④「運動する前に　体をほぐさないとね」 □△△ / △〇〇 / 〇□□ · ⑤「だから……　出来ないんですけど」 △△〇 / □□△ / 〇〇□ · ⑥「撮影で手が離せないかー」 △□〇 / □〇△ / 〇△□ · ⑦「いっぱい撮っ手くださいね？　いくよー？」 △□〇 / □〇△ / 〇△□. Recollection unlocks: talk 1 〇△〇 → \"反応1\", talk 4 □△△ → \"反応2\", talk 1 △〇□ → \"反応3\", press nothing and just watch → \"時間だ\"." } },
            { title: { ko: "메이드 코스 (6,000엔)", en: "Maid (¥6,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「本日はメイドでーす」 □□□ / △△〇 / 〇〇△ · ②「今日はいっぱい撮ってね」 △△□ / □〇〇 / △□△ · ③「もえもえキュン！」 △□□ / □△△ / 〇〇〇 · ④「他にはどんなポーズがいいかな？」 △□△ / □〇□ / 〇△〇 · ⑤「綺麗にお掃除しましょうねー」 △△〇 / □□□ / 〇〇△ · ⑥「感謝してくださいよー　ご主人様ー？」 〇△〇 / △□□ / □〇△ · ⑦「バッチリ撮影できましたかね？」 △〇□ / □□△ / 〇△〇. 회상 해금: 회화1 □□□ → 「反応1」, 회화3 △□□ → 「反応2」, 회화6 〇△〇 → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「ここまで」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「本日はメイドでーす」 □□□ / △△〇 / 〇〇△ · ②「今日はいっぱい撮ってね」 △△□ / □〇〇 / △□△ · ③「もえもえキュン！」 △□□ / □△△ / 〇〇〇 · ④「他にはどんなポーズがいいかな？」 △□△ / □〇□ / 〇△〇 · ⑤「綺麗にお掃除しましょうねー」 △△〇 / □□□ / 〇〇△ · ⑥「感謝してくださいよー　ご主人様ー？」 〇△〇 / △□□ / □〇△ · ⑦「バッチリ撮影できましたかね？」 △〇□ / □□△ / 〇△〇. Recollection unlocks: talk 1 □□□ → \"反応1\", talk 3 △□□ → \"反応2\", talk 6 〇△〇 → \"反応3\", press nothing and just watch → \"ここまで\"." } },
            { title: { ko: "스쿨 수영복 코스 (10,000엔)", en: "School Swimsuit (¥10,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「なんと今回はスクール水着でーす！」 △□□ / □△△ / 〇〇〇 · ②「お客さん的にはどうですか？」 △△〇 / □〇□ / 〇□△ · ③「じゃあ　たくさん撮ってくださいね？」 △□□ / □△△ / 〇〇〇 · ④「まずはこんなポーズでどうかな？」 □□△ / △△〇 / 〇〇□ · ⑤「ちょっと水着が苦しくなってきたかな」 △△□ / □□△ / 〇〇〇 · ⑥「恥ずかしくなってきちゃった」 □〇〇 / △△△ / 〇□□ · ⑦「ねぇ　もっと近寄ってもいいんだよ？」 △△〇 / □□△ / 〇〇□. 회상 해금: 회화6 □〇〇 → 「反応1」, 회화1 △□□ → 「反応2」, 회화4 □□△ → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「それじゃ」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「なんと今回はスクール水着でーす！」 △□□ / □△△ / 〇〇〇 · ②「お客さん的にはどうですか？」 △△〇 / □〇□ / 〇□△ · ③「じゃあ　たくさん撮ってくださいね？」 △□□ / □△△ / 〇〇〇 · ④「まずはこんなポーズでどうかな？」 □□△ / △△〇 / 〇〇□ · ⑤「ちょっと水着が苦しくなってきたかな」 △△□ / □□△ / 〇〇〇 · ⑥「恥ずかしくなってきちゃった」 □〇〇 / △△△ / 〇□□ · ⑦「ねぇ　もっと近寄ってもいいんだよ？」 △△〇 / □□△ / 〇〇□. Recollection unlocks: talk 6 □〇〇 → \"反応1\", talk 1 △□□ → \"反応2\", talk 4 □□△ → \"反応3\", press nothing and just watch → \"それじゃ\"." } },
            { title: { ko: "비키니 코스 (10,000엔)", en: "Bikini (¥10,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「今日は頑張ってビキニ着ちゃいましたぁ」 △△□ / □□〇 / 〇〇△ · ②「お客さんは特別ですよ」 △□□ / □△△ / 〇〇〇 · ③「私も頑張っちゃうから」 △〇〇 / □△△ / 〇□□ · ④「ちょっとキワドイものも　頑張っちゃおうかな？」 △△〇 / □□□ / 〇〇△ · ⑤「こんなポーズはどうかなぁ？」 △〇〇 / □△△ / 〇□□ · ⑥「それじゃあ……　こんなのはどお？」 △△△ / □□□ / 〇〇〇 · ⑦「それじゃあ……　いくよっ？」 △〇〇 / □□□ / 〇△△. 회상 해금: 회화2 △□□ → 「反応1」, 회화3 △〇〇 → 「反応2」, 회화5 △〇〇 → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「盛り上がり」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「今日は頑張ってビキニ着ちゃいましたぁ」 △△□ / □□〇 / 〇〇△ · ②「お客さんは特別ですよ」 △□□ / □△△ / 〇〇〇 · ③「私も頑張っちゃうから」 △〇〇 / □△△ / 〇□□ · ④「ちょっとキワドイものも　頑張っちゃおうかな？」 △△〇 / □□□ / 〇〇△ · ⑤「こんなポーズはどうかなぁ？」 △〇〇 / □△△ / 〇□□ · ⑥「それじゃあ……　こんなのはどお？」 △△△ / □□□ / 〇〇〇 · ⑦「それじゃあ……　いくよっ？」 △〇〇 / □□□ / 〇△△. Recollection unlocks: talk 2 △□□ → \"反応1\", talk 3 △〇〇 → \"反応2\", talk 5 △〇〇 → \"反応3\", press nothing and just watch → \"盛り上がり\"." } },
          ],
        },
        {
          title: { ko: "하시모토 리나(橋本梨菜) — 코스별 선택지 조합", en: "Rina Hashimoto (橋本梨菜) — button combinations per course" },
          note: { ko: "출처 1곳(ゲーム攻略マン)의 버튼 조합표입니다. 회화마다 문장이 성립하는 조합 3개가 실려 있고, kamigame에 실린 문장 목록과 84회화 모두 같은 문장임을 확인했습니다(버튼 배치는 ゲーム攻略マン에만 있음). 회화 앞의 일본어는 아이돌의 대사 그대로입니다.", en: "Button combinations from one source (ゲーム攻略マン): three combinations per conversation that form a valid line. kamigame's list carries the same three lines for all 84 conversations (only ゲーム攻略マン gives the buttons). The Japanese before each set is the idol's line as shown in game." },
          puzzles: [
            { title: { ko: "사복 코스 1 (3,000엔)", en: "Casual Wear 1 (¥3,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「今日はよろしくお願いします」 〇〇□ / △△△ / □□〇 · ②「今日はいっぱい撮って行ってくださいね」 △△△ / □〇□ / 〇□〇 · ③「気に入ったポーズがあれば言ってな」 △△〇 / □□□ / 〇〇△ · ④「最初はこんな感じでどうかな？」 □△△ / △〇〇 / 〇□□ · ⑤「それじゃあ　ちょっとサービスしちゃおっかな」 △△□ / □□△ / 〇〇〇 · ⑥「もー　まったく　男の人なんやから」 〇〇〇 / △□□ / □△△ · ⑦「それやったら聞くけど　もっと撮影したい？」 △□□ / □〇〇 / 〇△△. 회상 해금: 회화1 〇〇□ → 「反応1」, 회화4 □△△ → 「反応2」, 회화6 〇〇〇 → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「時間切れ」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「今日はよろしくお願いします」 〇〇□ / △△△ / □□〇 · ②「今日はいっぱい撮って行ってくださいね」 △△△ / □〇□ / 〇□〇 · ③「気に入ったポーズがあれば言ってな」 △△〇 / □□□ / 〇〇△ · ④「最初はこんな感じでどうかな？」 □△△ / △〇〇 / 〇□□ · ⑤「それじゃあ　ちょっとサービスしちゃおっかな」 △△□ / □□△ / 〇〇〇 · ⑥「もー　まったく　男の人なんやから」 〇〇〇 / △□□ / □△△ · ⑦「それやったら聞くけど　もっと撮影したい？」 △□□ / □〇〇 / 〇△△. Recollection unlocks: talk 1 〇〇□ → \"反応1\", talk 4 □△△ → \"反応2\", talk 6 〇〇〇 → \"反応3\", press nothing and just watch → \"時間切れ\"." } },
            { title: { ko: "사복 코스 2 (3,000엔)", en: "Casual Wear 2 (¥3,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「もしかしてグラビア撮影にハマっちゃったかな？」 △□□ / □△△ / 〇〇〇 · ②「ホントはこーんな感じの写真とか　撮りに来たんやろ？」 △△△ / □〇□ / 〇□〇 · ③「お客さん　大人っぽくて余裕ありそうやし順番にね？」 〇〇△ / △△□ / □□〇 · ④「もっと盛り上げて！」 △〇□ / □△〇 / 〇□△ · ⑤「じゃあ　どんなポーズ撮りたいかな？」 △□〇 / □〇△ / 〇△□ · ⑥「でも　聞いただけで撮影させてあげるとは言ってへんけどな」 △□□ / □△△ / 〇〇〇 · ⑦「お客さん撮りたかったポーズ……　こういうのやろ？」 □□□ / △〇△ / 〇△〇. 회상 해금: 회화4 △〇□ → 「反応1」, 회화7 □□□ → 「反応2」, 회화3 〇〇△ → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「疲れちゃった」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「もしかしてグラビア撮影にハマっちゃったかな？」 △□□ / □△△ / 〇〇〇 · ②「ホントはこーんな感じの写真とか　撮りに来たんやろ？」 △△△ / □〇□ / 〇□〇 · ③「お客さん　大人っぽくて余裕ありそうやし順番にね？」 〇〇△ / △△□ / □□〇 · ④「もっと盛り上げて！」 △〇□ / □△〇 / 〇□△ · ⑤「じゃあ　どんなポーズ撮りたいかな？」 △□〇 / □〇△ / 〇△□ · ⑥「でも　聞いただけで撮影させてあげるとは言ってへんけどな」 △□□ / □△△ / 〇〇〇 · ⑦「お客さん撮りたかったポーズ……　こういうのやろ？」 □□□ / △〇△ / 〇△〇. Recollection unlocks: talk 4 △〇□ → \"反応1\", talk 7 □□□ → \"反応2\", talk 3 〇〇△ → \"反応3\", press nothing and just watch → \"疲れちゃった\"." } },
            { title: { ko: "바니 코스 (6,000엔)", en: "Bunny (¥6,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「どう？　バニーガールやで？」 △〇〇 / □□□ / 〇△△ · ②「ちゃんと約束守ったんやから感謝してほしいな」 △〇〇 / □△□ / 〇□△ · ③「早く撮影したくなっちゃった？」 △〇〇 / □□□ / 〇△△ · ④「それじゃあ　いっぱい撮ってな」 □□△ / △△〇 / 〇〇□ · ⑤「似合ってるか気になるな」 △□〇 / □〇△ / 〇△□ · ⑥「じゃあ自信持っていろんなポーズしちゃおうかな」 △□□ / □△△ / 〇〇〇 · ⑦「もう　しょうがないなぁ」 △□△ / □〇〇 / 〇△□. 회상 해금: 회화3 △〇〇 → 「反応1」, 회화4 □□△ → 「反応2」, 회화1 △〇〇 → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「おしまい」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「どう？　バニーガールやで？」 △〇〇 / □□□ / 〇△△ · ②「ちゃんと約束守ったんやから感謝してほしいな」 △〇〇 / □△□ / 〇□△ · ③「早く撮影したくなっちゃった？」 △〇〇 / □□□ / 〇△△ · ④「それじゃあ　いっぱい撮ってな」 □□△ / △△〇 / 〇〇□ · ⑤「似合ってるか気になるな」 △□〇 / □〇△ / 〇△□ · ⑥「じゃあ自信持っていろんなポーズしちゃおうかな」 △□□ / □△△ / 〇〇〇 · ⑦「もう　しょうがないなぁ」 △□△ / □〇〇 / 〇△□. Recollection unlocks: talk 3 △〇〇 → \"反応1\", talk 4 □□△ → \"反応2\", talk 1 △〇〇 → \"反応3\", press nothing and just watch → \"おしまい\"." } },
            { title: { ko: "산타 코스 (6,000엔)", en: "Santa (¥6,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「今日はサンタの格好やで」 □□□ / △△△ / 〇〇〇 · ②「セクシーショット1枚　プレゼントなんてどお？」 △□△ / □△〇 / 〇〇□ · ③「ハイ　終了ー　ちゃんと撮れたかな？」 △□〇 / □〇△ / 〇△□ · ④「まだ我慢しててな？」 △〇□ / □△〇 / 〇□△ · ⑤「サンタなんて分からへんけど　どうかな？」 △□□ / □〇〇 / 〇△△ · ⑥「こんなサンタ　家に来てほしい？　気に入った？」 △△□ / □□△ / 〇〇〇 · ⑦「はい　ご褒美」 △□□ / □〇〇 / 〇△△. 회상 해금: 회화1 □□□ → 「反応1」, 회화5 △□□ → 「反応2」, 회화4 △〇□ → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「風邪引いちゃう」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「今日はサンタの格好やで」 □□□ / △△△ / 〇〇〇 · ②「セクシーショット1枚　プレゼントなんてどお？」 △□△ / □△〇 / 〇〇□ · ③「ハイ　終了ー　ちゃんと撮れたかな？」 △□〇 / □〇△ / 〇△□ · ④「まだ我慢しててな？」 △〇□ / □△〇 / 〇□△ · ⑤「サンタなんて分からへんけど　どうかな？」 △□□ / □〇〇 / 〇△△ · ⑥「こんなサンタ　家に来てほしい？　気に入った？」 △△□ / □□△ / 〇〇〇 · ⑦「はい　ご褒美」 △□□ / □〇〇 / 〇△△. Recollection unlocks: talk 1 □□□ → \"反応1\", talk 5 △□□ → \"反応2\", talk 4 △〇□ → \"反応3\", press nothing and just watch → \"風邪引いちゃう\"." } },
            { title: { ko: "비키니 코스 1 (10,000엔)", en: "Bikini 1 (¥10,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「お客さん　いつもありがとうございます！」 △〇△ / □△□ / 〇□〇 · ②「お客さんが通ってくれるから　特別に解禁やで」 △〇□ / □△〇 / 〇□△ · ③「この水着　可愛いし　いい感じやろ？」 △□〇 / □〇△ / 〇△□ · ④「まったく　これやからお客さんは」 △〇〇 / □△△ / 〇□□ · ⑤「撮影もさせてあげよっかな？」 △□□ / □〇〇 / 〇△△ · ⑥「それやったら　こんなポーズとかどう？」 △△〇 / □□△ / 〇〇□ · ⑦「やめちゃう？」 □□〇 / △△□ / 〇〇△. 회상 해금: 회화4 △〇〇 → 「反応1」, 회화2 △〇□ → 「反応2」, 회화7 □□〇 → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「過激すぎた？」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「お客さん　いつもありがとうございます！」 △〇△ / □△□ / 〇□〇 · ②「お客さんが通ってくれるから　特別に解禁やで」 △〇□ / □△〇 / 〇□△ · ③「この水着　可愛いし　いい感じやろ？」 △□〇 / □〇△ / 〇△□ · ④「まったく　これやからお客さんは」 △〇〇 / □△△ / 〇□□ · ⑤「撮影もさせてあげよっかな？」 △□□ / □〇〇 / 〇△△ · ⑥「それやったら　こんなポーズとかどう？」 △△〇 / □□△ / 〇〇□ · ⑦「やめちゃう？」 □□〇 / △△□ / 〇〇△. Recollection unlocks: talk 4 △〇〇 → \"反応1\", talk 2 △〇□ → \"反応2\", talk 7 □□〇 → \"反応3\", press nothing and just watch → \"過激すぎた？\"." } },
            { title: { ko: "비키니 코스 2 (10,000엔)", en: "Bikini 2 (¥10,000)" }, note: { ko: "회화별로 문장이 성립하는 조합(출처 표기 그대로): ①「今日は過激に　こんな感じのビキニやで！」 △〇□ / □△△ / 〇□〇 · ②「ちょっと攻めすぎたかな？」 □〇△ / △△□ / 〇□〇 · ③「じゃあ……　感想をどうぞ！」 △〇□ / □△△ / 〇□〇 · ④「こんなポーズ取ったら　お客さんどうなっちゃうんかな？」 〇□〇 / △△△ / □〇□ · ⑤「試してみていい？」 △〇〇 / □△□ / 〇□△ · ⑥「どう？　そそる？」 △□△ / □〇□ / 〇△〇 · ⑦「ホントの特別サービス　してあげよっか？」 △△〇 / □□△ / 〇〇□. 회상 해금: 회화4 〇□〇 → 「反応1」, 회화1 △〇□ → 「反応2」, 회화2 □〇△ → 「反応3」, 아무 버튼도 누르지 않고 지켜보기 → 「早すぎた？」.", en: "Combinations that form a valid line, per conversation (as the source lists them): ①「今日は過激に　こんな感じのビキニやで！」 △〇□ / □△△ / 〇□〇 · ②「ちょっと攻めすぎたかな？」 □〇△ / △△□ / 〇□〇 · ③「じゃあ……　感想をどうぞ！」 △〇□ / □△△ / 〇□〇 · ④「こんなポーズ取ったら　お客さんどうなっちゃうんかな？」 〇□〇 / △△△ / □〇□ · ⑤「試してみていい？」 △〇〇 / □△□ / 〇□△ · ⑥「どう？　そそる？」 △□△ / □〇□ / 〇△〇 · ⑦「ホントの特別サービス　してあげよっか？」 △△〇 / □□△ / 〇〇□. Recollection unlocks: talk 4 〇□〇 → \"反応1\", talk 1 △〇□ → \"反応2\", talk 2 □〇△ → \"反応3\", press nothing and just watch → \"早すぎた？\"." } },
          ],
        },
      ],
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
      puzzleSets: [
        {
          title: { ko: "비디오 15편 입수처", en: "Where to get all 15 videos" },
          note: { ko: "출처 ゲーム攻略マン. 웍스 카미야마는 서브스토리 No.24 클리어 후부터 팝니다. 제목은 게임 표기 그대로입니다.", en: "From ゲーム攻略マン. Kamiyama sells only after substory No.24. Titles as shown in game." },
          puzzles: [
            { title: { ko: "1. 彼女は小悪魔シスター", en: "1. 彼女は小悪魔シスター" }, note: { ko: "처음부터 보유", en: "in stock from the start" } },
            { title: { ko: "2. 魅惑のピンクステージ", en: "2. 魅惑のピンクステージ" }, note: { ko: "처음부터 보유", en: "in stock from the start" } },
            { title: { ko: "3. 未亡人 旦那がオオアリクイに殺されて", en: "3. 未亡人 旦那がオオアリクイに殺されて" }, note: { ko: "처음부터 보유", en: "in stock from the start" } },
            { title: { ko: "4. 新妻ラブラブ物語", en: "4. 新妻ラブラブ物語" }, note: { ko: "빔 2,800엔", en: "Beam, ¥2,800" } },
            { title: { ko: "5. バニーちゃんを捕まえろ", en: "5. バニーちゃんを捕まえろ" }, note: { ko: "빔 2,800엔", en: "Beam, ¥2,800" } },
            { title: { ko: "6. 極道物語", en: "6. 極道物語" }, note: { ko: "빔 2,800엔", en: "Beam, ¥2,800" } },
            { title: { ko: "7. 沈没船", en: "7. 沈没船" }, note: { ko: "빔 2,800엔", en: "Beam, ¥2,800" } },
            { title: { ko: "8. マスク＆リッパー", en: "8. マスク＆リッパー" }, note: { ko: "빔 2,800엔", en: "Beam, ¥2,800" } },
            { title: { ko: "9. ザ・ストーカー", en: "9. ザ・ストーカー" }, note: { ko: "빔 2,800엔", en: "Beam, ¥2,800" } },
            { title: { ko: "10. クレイジーバット", en: "10. クレイジーバット" }, note: { ko: "빔 2,800엔", en: "Beam, ¥2,800" } },
            { title: { ko: "11. スーパーカンフーマン", en: "11. スーパーカンフーマン" }, note: { ko: "웍스 카미야마 2,800엔 — 시청 시 톤파 스킬·히트 액션 해금", en: "Kamiyama, ¥2,800 — unlocks the tonfa skill and Heat Action" } },
            { title: { ko: "12. 驚愕！ フィリピンの秘法", en: "12. 驚愕！ フィリピンの秘法" }, note: { ko: "웍스 카미야마 2,800엔(8장 하야시 전 이후 입고) — 칼리 스틱 스킬·히트 액션 해금", en: "Kamiyama, ¥2,800 (stocked after the Chapter 8 Hayashi fight) — unlocks the Kali stick skill and Heat Action" } },
            { title: { ko: "13. 空手師範！ 瀬型四四朗", en: "13. 空手師範！ 瀬型四四朗" }, note: { ko: "웍스 카미야마 2,800엔", en: "Kamiyama, ¥2,800" } },
            { title: { ko: "14. 酔拳伝説！ シャンパンの極み！", en: "14. 酔拳伝説！ シャンパンの極み！" }, note: { ko: "웍스 카미야마 2,800엔", en: "Kamiyama, ¥2,800" } },
            { title: { ko: "15. 喧嘩指南！ 今日からこれで敵なし！", en: "15. 喧嘩指南！ 今日からこれで敵なし！" }, note: { ko: "웍스 카미야마 2,800엔", en: "Kamiyama, ¥2,800" } },
          ],
        },
      ],
    },
  ],
};

