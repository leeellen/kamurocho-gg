import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza 6. Recruit conditions, can preferences, exercise
// inputs and the conversation grading come from 光る原人's per-minigame pages,
// cited on each entry.
export const yakuza6Minigames: MinigamesData = {
  appId: 1388590,
  intro: {
    ko: "Y6는 클랜 크리에이터와 동네 야구라는 두 대형 모드에 더해, 고양이 모으기·RIZAP·작살 낚시처럼 이 작품에만 있는 종목이 붙습니다. 고양이 19마리는 출현 자체가 랜덤이라 초반부터 조금씩 처리하지 않으면 후반에 시간을 크게 잡아먹습니다. 각 항목의 조건과 수치는 출처 페이지에서 확인한 것입니다.",
    en: "Yakuza 6 pairs two big modes — Clan Creator and sandlot baseball — with entries that exist only here: the cat search, RIZAP and spearfishing. The nineteen cats spawn at random, so leaving them until late turns the hunt into dead time. Conditions and numbers below come from the linked pages.",
  },
  minigames: [
    {
      slug: "baseball-management",
      name: { ko: "동네 야구 (세토우치 워리어즈)", en: "Sandlot Baseball (Setouchi Warriors)" },
      category: { ko: "경영 시뮬레이션", en: "Management sim" },
      difficulty: 4,
      location: { ko: "오노미치 — 야구장", en: "The ballpark, Onomichi" },
      summary: {
        ko: "서브스토리 No.34로 열리고 No.35를 클리어하면 팀원 스카우트가 가능해집니다. 진가이 선더즈 2군 → 1군 → 레전즈 → 카나미사와 고저스 순으로 상대가 강해집니다.",
        en: "Unlocked by substory No.34, with scouting opening after No.35. Opponents escalate from the Jingai Thunders' second string to their first, then the Legends and Kanamisawa Gorgeous.",
      },
      howTo: [
        { ko: "사실상의 공략법은 팀메이트 레벨 올리기입니다. 전원 MAX여도 컨디션에 따라 지는 경기가 있으므로, 반복 도전을 전제로 이길 수 있는 경기에서 경험치와 티켓을 벌어 두세요.", en: "The real strategy is levelling your team. Even a maxed roster loses on a bad day, so farm experience and tickets in the matches you can win and expect to retry." },
        { ko: "서브스토리 클리어만 목표라면 잠수 어업 서브스토리로 합류하는 골초프 한 명이면 충분합니다. 반대로 카나미사와 고저스의 핸디 매치까지 이길 생각이라면 스카우트 가능한 인원을 거의 다 모아야 합니다.", en: "If you only want the substories, Golchov — who joins through the free-diving substory — is enough on his own. Beating Kanamisawa Gorgeous's handicap match instead means recruiting almost everyone." },
        { ko: "카무로초에서는 배팅 센터에서 두 명을 영입합니다. 요시다 나오야(포수)는 서브스토리 No.19, 고리 씨(3루수)는 No.20 클리어가 조건입니다.", en: "Kamurocho gives you two, both at the batting center: catcher Naoya Yoshida from substory No.19 and third baseman Gori-san from No.20." },
        { ko: "오노미치 쪽은 조건이 제각각입니다. 마에타니 토모카즈는 류난 신사의 남자에게 100만 엔을 건네야 하고, 카세는 서브스토리 No.25 클리어 후 아케이드 거리 와가시야 와후쿠 앞에서 합류합니다.", en: "The Onomichi recruits each have their own hook: Tomokazu Maetani costs ¥1,000,000 handed to the man at Ryunan Shrine, and Kase joins outside the Wafuku confectioner in the arcade after substory No.25." },
      ],
      videos: [
        { title: { ko: "야구 서브스토리 가이드 (영입 치트시트)", en: "Baseball substory guide (recruit cheat sheet)" }, url: YT("N3RYb3XbF3w") },
        { title: { ko: "세토우치 워리어즈 팀 운영 가이드", en: "Setouchi Warriors team management" }, url: YT("SyRHN87e0ro") },
      ],
      source: [
        { label: "光る原人 — 龍が如く6 草野球・瀬戸内ウォーリアーズの育成攻略", url: "https://www.hikarugennjinn.com/entry/yakuza6-baseball" },
        { label: "光る原人 — 龍が如く6 サブストーリー一覧", url: "https://www.hikarugennjinn.com/entry/yakuza6-sub_story" },
      ],
      achievementSlug: "ogfac41",
    },
    {
      slug: "clan-creator",
      name: { ko: "클랜 크리에이터 (키류회)", en: "Clan Creator (the Kiryu Clan)" },
      category: { ko: "전략 시뮬레이션", en: "Strategy sim" },
      difficulty: 4,
      location: { ko: "카무로초 — 클랜 크리에이터", en: "Clan Creator, Kamurocho" },
      summary: {
        ko: "부하를 모아 실시간 전투로 상대 조직을 무너뜨리는 모드입니다. JUSTIS를 쓰러뜨리기까지는 전초전이고, 아몬이 나오는 스테이지부터 난도가 급격히 오릅니다.",
        en: "Recruit a crew and fight real-time battles against rival gangs. Everything up to JUSTIS is the warm-up; the difficulty spikes hard once the Amon stages appear.",
      },
      howTo: [
        { ko: "아몬 스테이지부터는 레벨로 밀어붙이는 방식이 통하지 않습니다. 부대 편성과 스킬 발동 타이밍을 짜는 전략적 운용으로 바꿔야 합니다.", en: "From the Amon stages onward you cannot simply out-level the fight — it has to be played with squad composition and skill timing." },
        { ko: "스카우트 가능한 조장은 거리 곳곳에 서 있습니다. 타모츠는 진가이 센터가이의 나기 약국 앞, 야스는 국도 2호선 모레노 뒤, 츠치하시는 중화소바 쥬만고쿠 옆 공간, 타노우에는 묘지 앞 거리에 있습니다.", en: "Recruitable captains stand around town: Tamotsu outside Nagi Pharmacy in Jingai Center-gai, Yasu behind Moreno on Route 2, Tsuchihashi in the space beside Chuka Soba Jumangoku, Tanoue on the road by the cemetery." },
        { ko: "일부 조장은 특정 서브스토리를 끝내야 나타납니다. 츠치하시와 타노우에는 「6광인·야노 토루!」, 노가미와 사무라이는 「6광인·나이토 테츠야!」 클리어가 조건입니다.", en: "Some only appear after a substory: Tsuchihashi and Tanoue need \"Six Lunatics: Toru Yano\", Nogami and Samurai need \"Six Lunatics: Tetsuya Naito\"." },
        { ko: "클랜 크리에이터는 돈벌이 수단으로도 우수합니다. 미션 보상이 크므로 자금이 필요할 때 여기를 도는 것이 효율적입니다.", en: "It is also one of the better money makers in the game — mission payouts are large enough to be worth farming when you need cash." },
      ],
      videos: [
        { title: { ko: "클랜 크리에이터 입문 + 코드", en: "Clan Creator beginner's guide + codes" }, url: YT("scO7zV5BObE") },
        { title: { ko: "클랜 미션 01: 대 JUSTIS 전투", en: "Clan Mission 01: Battle Against JUSTIS" }, url: YT("H5TYsqQ5Ro4") },
      ],
      source: { label: "光る原人 — 龍が如く6 クランクリエイター・桐生会の育成攻略", url: "https://www.hikarugennjinn.com/entry/yakuza6-clan_creator" },
      achievementSlug: "ogfac41",
    },
    {
      slug: "cat-cafe",
      name: { ko: "고양이 모으기 (냐냐 차방)", en: "Cat Search (Nyan Nyan Cafe)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "카무로초 — 센료 거리 앞 건물 3층 「cat cafe nyan nyan 차방」", en: "cat cafe nyan nyan, third floor of the building before Senryo Ave." },
      summary: {
        ko: "서브스토리 No.21로 열립니다. 트로피는 3마리만 스카우트해도 나오지만, 달성목록을 채우려면 19마리를 전부 데려와야 합니다.",
        en: "Opens with substory No.21. The trophy only needs three cats, but the completion list wants all nineteen.",
      },
      howTo: [
        { ko: "한 고양이는 정해진 세 곳 중 한 군데에 랜덤으로 나타나고, 나타나지 않는 경우도 있습니다. 한 번 발견하면 먹이를 세 번까지만 줄 수 있으므로, 그 세 번에 게이지를 채우지 못하면 다시 찾아다녀야 합니다.", en: "Each cat spawns at one of three fixed spots, at random, and sometimes not at all. Once found you get only three feeds, and failing to fill the gauge in those three means hunting for it again." },
        { ko: "먹이는 7종이며 편의점에서 일부, 돈키호테에서 6종, 네코카페에서 전 종류를 살 수 있습니다. 고양이마다 호오가 있으니 좋아하는 캔을 알고 가면 훨씬 빨리 친해집니다.", en: "There are seven cans: convenience stores carry some, Don Quijote six, and the cat cafe all of them. Each cat has likes and dislikes, so knowing its favourite makes it far quicker." },
        { ko: "네코카페 전용 「극상 참치 볼살 골드」는 모든 고양이가 좋아합니다. 값이 자릿수부터 다르지만, 좋아하는 캔이 없는 고양이나 게이지가 유난히 안 오르는 카무로초 아동공원 부근의 빅토리아에게는 이쪽이 확실합니다.", en: "The cafe-only Premium Tuna Cheek Gold is loved by every cat. It costs an order of magnitude more, but for cats with no favourite — and for Victoria near the Kamurocho children's park, whose gauge barely moves — it is the reliable option." },
        { ko: "물어야 할 것은 계획성입니다. 이야기 후반에 몰아서 하려 하면 출현 대기 시간 때문에 스트레스가 큽니다. 초반부터 지나갈 때마다 조금씩 처리하세요.", en: "Do it as you go. Saving it for late in the story turns it into a spawn-waiting grind; picking cats up whenever you pass their area is far less painful." },
      ],
      videos: [
        { title: { ko: "고양이 19마리 전체 위치", en: "All 19 cat locations" }, url: YT("rj4zm6CKqF4") },
      ],
      source: { label: "光る原人 — 龍が如く6 cat cafe nyan nyan 茶房のネコ集め", url: "https://www.hikarugennjinn.com/entry/yakuza6-cat_cafe" },
    },
    {
      slug: "rizap",
      name: { ko: "RIZAP (헬스 트레이닝)", en: "RIZAP" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 2,
      location: { ko: "카무로초 — RIZAP 카무로초점 (구 볼링장 자리)", en: "RIZAP Kamurocho, where the bowling alley used to be" },
      summary: {
        ko: "트레이닝 6종 중 2종을 골라 하고, 이후 트레이너가 메일로 지정하는 식사를 하는 순환입니다. 트레이닝 자체는 무료입니다.",
        en: "Pick two of six exercises, then eat whatever the trainer emails you about. The training itself costs nothing.",
      },
      howTo: [
        { ko: "6종은 벤치프레스(제한 시간 내 R1·L1 연타), 스쿼트(내려오는 아이콘을 빨강에서 누르면 GREAT·초록이면 GOOD), 데드리프트(○ 연타), 스쿼트 점프(줄어드는 원에 맞춰 해당 버튼), 랫풀다운(게이지가 빨강에 닿을 때 L1+R1 동시), 시티드 로우(R1을 누르고 있다 빨강에서 떼기)입니다.", en: "The six are bench press (mash R1 and L1 against the clock), squats (icons fall — red is GREAT, green is GOOD), deadlift (mash circle), squat jumps (press the shown button as the ring shrinks), lat pulldown (L1 and R1 together when the gauge reaches red) and seated row (hold R1, release in the red)." },
        { ko: "식사 지시는 품명을 직접 알려 주지 않고 퀴즈 형식으로 옵니다. 카무로초의 어느 가게에서 무엇을 파는지 모르면 헤매게 되므로, 메일 문구를 먼저 읽고 해당 가게를 특정한 뒤 이동하세요.", en: "The meal instruction arrives as a riddle rather than a dish name, so read the mail, work out which Kamurocho restaurant it points at, and go there directly." },
        { ko: "트레이닝으로 얻는 경험치는 미미합니다. 트로피와 달성목록만 노린다면 필요한 만큼만 하고 넘어가는 편이 시간을 아낍니다.", en: "The experience it pays is negligible — if you are only after the trophy and the completion row, do the minimum and move on." },
      ],
      videos: [
        { title: { ko: "RIZAP 짐 전 종목 S랭크", en: "RIZAP gym all exercises, all S ranks" }, url: YT("7UxJkmrj_ps") },
      ],
      source: { label: "光る原人 — 龍が如く6 RIZAP 神室町店", url: "https://www.hikarugennjinn.com/entry/yakuza6-rizap" },
    },
    {
      slug: "cabaret-shine",
      name: { ko: "캬바쿠라 샤인", en: "Cabaret Club Shine" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "카무로초 — 핑크 거리 캬바쿠라 SHINE", en: "Club Shine on Pink St., Kamurocho" },
      summary: {
        ko: "캬바걸을 지명해 대화와 드링크로 호감도를 올립니다. 선택지의 평가는 ✖(변화 없음)·△(미증)·〇(증가)·◎(대폭 증가) 네 단계로 갈립니다.",
        en: "Request a hostess and raise her with drinks and conversation. Options grade as no change, slight, good and excellent.",
      },
      howTo: [
        { ko: "드링크에도 등급이 있습니다. 물은 아무 효과가 없고 오렌지주스는 미증, 카시스오렌지와 생맥주는 증가, 하쿠슈 12년은 대폭 증가입니다. 돈이 있다면 위스키 쪽이 압도적으로 효율적입니다.", en: "Drinks are graded too: water does nothing, orange juice is slight, cassis orange and draft beer are good, and Hakushu 12-year is excellent — worth the money if you have it." },
        { ko: "랭크업 시에 나오는 3지선다는 무엇을 골라도 평가에 영향이 없습니다. 대사만 바뀌므로 여기서 고민할 필요는 없습니다.", en: "The three-way choice that appears on a rank-up does not affect the score — only the dialogue changes — so there is nothing to weigh there." },
        { ko: "프로필을 채우는 질문과 호감도를 올리는 대화는 별개입니다. 프로필 항목은 평가가 낮아도 물어 둬야 나중에 대화 선택지가 늘어납니다.", en: "Profile questions and affection-raising talk are different things: ask the profile ones even when they score low, because they open up later conversation options." },
      ],
      source: { label: "光る原人 — 龍が如く6 キャバクラ シャイン攻略", url: "https://www.hikarugennjinn.com/entry/yakuza6-shine" },
    },
    {
      slug: "snack-new-gaudi",
      name: { ko: "스낵 뉴 가우디 (대화 미니게임)", en: "Snack New Gaudi conversations" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "오노미치 — Snack New Gaudi", en: "Snack New Gaudi, Onomichi" },
      summary: {
        ko: "단골 손님과의 대화에서 합격점을 내야 친구도가 올라가고, 그래야 서브스토리 No.41~No.46이 진행됩니다. 되감기가 안 되고 실패하면 처음부터입니다.",
        en: "You need a pass mark in the bar conversations to raise each regular's friendship, which is what gates substories No.41 to No.46. There is no fast-forward and a failure restarts the whole thing.",
      },
      howTo: [
        { ko: "선택지는 대사의 성격에 맞춰 고릅니다. 맞장구는 〇, 되묻기는 □, 부정은 ✖ 계열로 갈리는데, 이 게임에서는 부정 선택지가 거의 항상 감점입니다.", en: "Match the option to the tone: agreement, asking back, or disagreement. Disagreement almost always costs you points here." },
        { ko: "하타케야마·아키요시·겐·안도·카네코·마마 여섯 명의 친구도를 각각 3까지 올려야 하고, 그때마다 대화 이벤트를 한 번씩 통과해야 합니다.", en: "Six regulars — Hatakeyama, Akiyoshi, Gen, Ando, Kaneko and Mama — each need friendship 3, and each step means passing another conversation." },
        { ko: "실패해도 다시 도전할 수 있지만 대화 전체를 처음부터 다시 들어야 합니다. 정답 조합을 미리 확인해 두는 편이 시간을 크게 아낍니다.", en: "You can retry, but you sit through the entire conversation again — checking the answers in advance saves a lot of time." },
      ],
      source: { label: "光る原人 — 龍が如く6 スナック ガウディでの会話のベストな回答", url: "https://www.hikarugennjinn.com/entry/yakuza6-snak_new_gaudi" },
    },
    {
      slug: "spearfishing",
      name: { ko: "작살 낚시 (맨몸 잠수 어업)", en: "Spearfishing" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "오노미치 — 항구", en: "The harbour, Onomichi" },
      summary: {
        ko: "산소를 관리하며 물고기를 작살로 잡는 종목입니다. 코스는 난이도별로 나뉘고, 각 코스 마지막에 대형 개체가 나옵니다.",
        en: "Spear fish while watching your oxygen. Courses are split by difficulty, each ending with a large target.",
      },
      howTo: [
        { ko: "산소가 곧 제한 시간입니다. 도중의 잡어를 욕심내다 마지막 대형 개체를 잡을 산소가 남지 않는 것이 가장 흔한 실패입니다.", en: "Oxygen is the timer, and the usual way runs fail is spending it on small fish and arriving at the big one with nothing left." },
        { ko: "작살총은 서브스토리 보상으로 상위 기종이 나옵니다. 중급 「침몰 래버린스」의 딜리셔스 옥토퍼스는 서브스토리 No.48, 상급 「해저 드래곤 홀」의 블러디 샤크는 No.49와 연결됩니다.", en: "Better spearguns come from substories: the Delicious Octopus at the end of the intermediate Sunken Labyrinth is substory No.48, and the Bloody Shark on the advanced Undersea Dragon Hole is No.49." },
        { ko: "대형 개체는 정면에서 쏘면 튕깁니다. 옆이나 뒤로 돌아 급소를 노리고, 반격 모션이 나오면 먼저 거리를 벌리세요.", en: "Shots bounce off the big targets from the front — circle to the side or behind for the vital, and back off the moment the counter animation starts." },
      ],
      videos: [
        { title: { ko: "작살 낚시 전 스테이지 (노 대미지)", en: "Spearfishing all stages (no damage)" }, url: YT("1c5EuQ2O8WY") },
        { title: { ko: "전 작살총 입수 가이드", en: "All spearguns guide" }, url: YT("NxWp0WBnPp0") },
      ],
      source: [
        { label: "光る原人 — 龍が如く6 サブストーリー一覧", url: "https://www.hikarugennjinn.com/entry/yakuza6-sub_story" },
        { label: "光る原人 — 龍が如く6 トロフィーコンプリート", url: "https://www.hikarugennjinn.com/entry/yakuza6-trophy" },
      ],
    },
    {
      slug: "live-chat",
      name: { ko: "라이브 챗", en: "Live Chat" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 1,
      location: { ko: "카무로초 — 넷카페 mantai", en: "the mantai net cafe, Kamurocho" },
      summary: {
        ko: "서브스토리 No.22로 열리는 짧은 콘텐츠입니다. 화면 속 상대의 요청에 반응하는 방식이며 달성목록 한 칸을 차지합니다.",
        en: "A short mode unlocked by substory No.22 — respond to the person on screen; it fills one completion row.",
      },
      howTo: [
        { ko: "서브스토리 No.22 「라이브 챗의 유혹」을 먼저 끝내야 넷카페에서 이용할 수 있습니다.", en: "You have to finish substory No.22 first before the net cafe will let you use it." },
        { ko: "달성목록은 플레이 자체로 채워집니다. 성과를 요구하지 않으므로 한 번 돌리고 넘어가면 됩니다.", en: "The completion row counts the play itself rather than any result, so one session is enough." },
      ],
      source: { label: "光る原人 — 龍が如く6 サブストーリー一覧", url: "https://www.hikarugennjinn.com/entry/yakuza6-sub_story" },
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가 / 바 「반탐」", en: "Club SEGA and the bar Bantam, Kamurocho" },
      summary: {
        ko: "01·크리켓·카운트업 세 종목이 있습니다. 달성목록은 플레이와 특정 성과를 요구합니다.",
        en: "Three modes — 01, Cricket and Count-Up — with the list asking for plays and a few specific feats.",
      },
      howTo: [
        { ko: "싱글은 그 구역 점수, 더블 2배, 트리플 3배이고 BULL은 50점입니다. 01에서는 트리플 20보다 BULL이 안정적입니다.", en: "Singles score the sector, doubles double, triples treble, bull is 50 — in 01 the bull is steadier than treble 20." },
        { ko: "해트트릭(한 라운드 3발 모두 BULL)을 노린다면 혼자 01 게임을 고르세요. 라운드가 많아 반복해서 시도할 수 있습니다.", en: "For hat-tricks — three bulls in one round — play 01 alone, which gives the most rounds to keep trying." },
      ],
      source: { label: "光る原人 — 龍が如く6 トロフィーコンプリート", url: "https://www.hikarugennjinn.com/entry/yakuza6-trophy" },
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 4,
      location: { ko: "카무로초 — 마작장", en: "The mahjong parlour, Kamurocho" },
      summary: {
        ko: "달성목록은 화료 횟수와 누적 점수를 요구합니다. 규칙을 모르면 이 작품에서도 가장 오래 걸립니다.",
        en: "The list wants a number of wins and a points total — still the longest entry if you do not know the rules.",
      },
      howTo: [
        { ko: "점수를 크게 만들기보다 싸고 빠르게 화료하는 편이 조건을 빨리 채웁니다. 리치·탕야오 수준으로 계속 돌리세요.", en: "Cheap fast hands fill the rows faster than big ones — stick to riichi and tanyao." },
        { ko: "누적 점수는 고레이트 탁에서 도는 편이 빠르고, 화료 횟수 조건과 동시에 진행됩니다.", en: "The points row goes faster at a high-rate table and advances alongside the win-count row." },
      ],
      source: { label: "光る原人 — 龍が如く6 トロフィーコンプリート", url: "https://www.hikarugennjinn.com/entry/yakuza6-trophy" },
    },
    {
      slug: "karaoke",
      name: { ko: "가라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초 — 가라오케 / 오노미치 — 스낵", en: "Karaoke in Kamurocho and the snack bar in Onomichi" },
      summary: {
        ko: "버튼 타이밍 리듬 게임입니다. 서브스토리와도 얽혀 있어 「미치오의 가요 쇼」에서는 지정 곡을 불러야 합니다.",
        en: "A button-timing rhythm game, and it feeds into the substories — \"Michio's Song Show\" asks for a specific track.",
      },
      howTo: [
        { ko: "노트가 라인에 닿는 순간이 아니라 커서에 겹치는 순간이 판정 기준입니다. 「Hold」는 끝까지 누르고 「Rapid」는 연타입니다.", en: "Judge on the note overlapping the cursor, not reaching the lane. Hold means hold to the end; Rapid means mash." },
        { ko: "서브스토리 No.30에서는 「오늘은 다이아몬드」를 부르게 되는데 점수는 조건에 들어가지 않습니다. 대충 불러도 클리어됩니다.", en: "Substory No.30 has you sing \"Today is a Diamond\" and the score does not matter there — a sloppy run still clears it." },
      ],
      source: [
        { label: "光る原人 — 龍が如く6 サブストーリー一覧", url: "https://www.hikarugennjinn.com/entry/yakuza6-sub_story" },
        { label: "光る原人 — 龍が如く6 トロフィーコンプリート", url: "https://www.hikarugennjinn.com/entry/yakuza6-trophy" },
      ],
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드 (버추어 파이터 5·뿌요뿌요 등)", en: "Club SEGA arcade (Virtua Fighter 5, Puyo Puyo and more)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 클럽 세가", en: "Club SEGA, Kamurocho" },
      summary: {
        ko: "아케이드 기판을 그대로 이식한 종목들입니다. 달성목록은 각 기판을 한 번씩 플레이하는 것이 기본이고 일부는 성과를 요구합니다.",
        en: "Arcade boards ported whole. The list mostly wants a play on each, with a few asking for results.",
      },
      howTo: [
        { ko: "기판은 원작 난도 그대로입니다. 여러 기술을 익히려 하기보다 한 캐릭터·한 패턴으로 안정적으로 넘기는 편이 빠릅니다.", en: "The boards keep their arcade difficulty — one character and one reliable pattern beats trying to play them properly." },
        { ko: "UFO 캐처도 같은 클럽 세가에 있습니다. 서로 다른 경품을 모으는 방식이라 같은 인형을 반복해 뽑아도 카운트가 오르지 않습니다.", en: "The UFO Catcher shares the arcade, and it counts distinct prizes — duplicates of the same plush do nothing." },
      ],
      source: { label: "光る原人 — 龍が如く6 トロフィーコンプリート", url: "https://www.hikarugennjinn.com/entry/yakuza6-trophy" },
    },
  ],
};

