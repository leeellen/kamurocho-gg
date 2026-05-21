import type { CollectiblesData } from "./types";

export const yakuza3: CollectiblesData = {
  appId: 1088710,
  categories: [
    {
      slug: "morning-glory",
      title: { ko: "자원봉사 + 에코 마스터 — 나팔꽃 해변 청소", en: "Morning Glory Beach Cleanup" },
      summary: {
        ko: "고아원 「모닝글로리」 앞 나팔꽃 해변에서 쓰레기 5개를 주우면 「자원봉사」, 30개를 주우면 「에코 마스터」 업적 발동. 쓰레기는 시간이 지나면 재출현하므로 다른 사이드 콘텐츠와 병행하면 됩니다.",
        en: "Pick up 5 pieces of beach trash in front of Morning Glory for 'Volunteer', and 30 for 'Master Environmentalist'. Trash respawns over time — combine with other side content.",
      },
    },
    {
      slug: "underground-arena",
      title: { ko: "전설의 챔피언 — 투기장 전 토너먼트 우승", en: "Underground Coliseum Champion" },
      summary: {
        ko: "카무로초 지하 투기장의 모든 토너먼트에서 우승하면 「전설의 챔피언」 업적 발동. 클리어 후 모드의 「궁극 투기」를 전부 플레이하면 「궁극의 챌린저」도 함께 트리거됩니다.",
        en: "Win every Underground Coliseum tournament for 'Legendary Champion'. Clearing the post-game 'Ultimate Challenge' set unlocks 'Ultimate Challenger'.",
      },
    },
    {
      slug: "coin-lockers",
      title: { ko: "열쇠의 방랑자 — 양 도시 10개 로커 개방", en: "Wanderer of Keys — 10 Lockers" },
      summary: {
        ko: "카무로초 + 류큐 거리의 물품 보관함을 누적 10개 이상 열면 「열쇠의 방랑자」 업적 발동. 열쇠는 거리 곳곳에 흩어져 있습니다.",
        en: "Open at least 10 lockers across Kamurocho + Ryukyu Street for 'Wanderer of Keys'. Keys are scattered around town.",
      },
    },
    {
      slug: "substories",
      title: { ko: "서브스토리 31편 컴플리트", en: "All 31 Substories" },
      summary: {
        ko: "용과 같이 3 (극3 리마스터)의 서브스토리 31편 전부 정리했습니다. 오키나와 류큐 거리·아사가오 + 카무로초 양 도시에서 발생하며, 일부는 챕터 진행이 트리거입니다.",
        en: "All 31 Yakuza 3 substories. Triggered across Ryukyu Street/Asagao in Okinawa and Kamurocho — many gated by chapter beats.",
      },
      tips: [
        { ko: "4번대 「때려보슈 in 오키나와」 3부작은 100,000엔 누적 보상이라 후반 자금원으로 좋습니다.", en: "The three-part \"Punch-Me Shop\" arc rewards 100,000 yen total — a solid late-game money tap." },
        { ko: "12~14 서브스토리는 모닝글로리 아이들/하루카와의 신뢰도를 함께 올려두면 풀립니다.", en: "Substories 12-14 also feed Haruka and orphanage trust progression." },
      ],
      source: { label: "game8.jp — 龍が如く極3 サブストーリー", url: "https://game8.jp/ryu-ga-gotoku-kiwami3/751658" },
      items: [
        { number: 1, title: { ko: "빨간 계열로 La La La", en: "Red Theme LaLaLa" }, location: { ko: "챕터 1, 카무로초", en: "Ch.1 Kamurocho" }, body: { ko: "휴대폰 커스터마이즈 + 모바일 액세서리", en: "Phone customization + accessories" } },
        { number: 2, title: { ko: "사랑의 큐피드", en: "Cupid of Love" }, location: { ko: "챕터 2, 류큐 거리", en: "Ch.2 Ryukyu St." }, body: { ko: "스토리 진행 트리거", en: "Story-triggered" } },
        { number: 3, title: { ko: "어서옵쇼! 오키나와 소바입니다!", en: "Welcome! It's Okinawa Soba!" }, location: { ko: "챕터 2, 공설 시장", en: "Ch.2 Public Market" }, body: { ko: "스태미나 아이템 + 10,000엔", en: "Stamina item + 10,000 yen" } },
        { number: 4, title: { ko: "때려보슈 in 오키나와", en: "Punch-Me Shop in Okinawa" }, location: { ko: "챕터 2, 아사가오", en: "Ch.2 Asagao" }, body: { ko: "격투 챌린지 — 후속 퀘스트 해금", en: "Fighting challenge — unlocks sequel" } },
        { number: 5, title: { ko: "때려보슈 in 오키나와 리턴즈", en: "Punch-Me Shop in Okinawa Returns" }, location: { ko: "챕터 2, 아사가오", en: "Ch.2 Asagao" }, body: { ko: "#4 클리어 필요 · 50,000엔", en: "Requires #4 · 50,000 yen" } },
        { number: 6, title: { ko: "때려보슈 in 오키나와 엔드게임", en: "Punch-Me Shop in Okinawa Endgame" }, location: { ko: "챕터 2, 아사가오", en: "Ch.2 Asagao" }, body: { ko: "#4·#5 클리어 필요 · 100,000엔", en: "Requires #4·#5 · 100,000 yen" } },
        { number: 7, title: { ko: "부딪치는 사나이들", en: "The Bumping Men" }, location: { ko: "챕터 2, 류큐 거리", en: "Ch.2 Ryukyu St." }, body: { ko: "충돌 사건 — 후속 해금", en: "Collision arc — unlocks sequel" } },
        { number: 8, title: { ko: "부딪치는 사나이들의 역습", en: "Strike Back" }, location: { ko: "챕터 2, 류큐 거리", en: "Ch.2 Ryukyu St." }, body: { ko: "#7 클리어 필요 · 액세서리 보상", en: "Requires #7 · accessory reward" } },
        { number: 9, title: { ko: "부딪치는 사나이들의 여정", en: "The Journey" }, location: { ko: "챕터 2, 류큐 거리", en: "Ch.2 Ryukyu St." }, body: { ko: "#7·#8 클리어 필요 · 동료 테라시마 영입", en: "Requires #7·#8 · recruits Terashima" } },
        { number: 10, title: { ko: "복이 왔다?", en: "Has Fortune Arrived?" }, location: { ko: "챕터 2, 류큐 아케이드", en: "Ch.2 Ryukyu Arcade" }, body: { ko: "운세·복권 메커닉", en: "Fortune / lottery" } },
        { number: 11, title: { ko: "꿈의 차세대 머신", en: "Dream Next-Gen Machine" }, location: { ko: "챕터 2, 류큐 거리", en: "Ch.2 Ryukyu St." }, body: { ko: "차량 보상 · 스토리 진행", en: "Vehicle reward · story progression" } },
        { number: 12, title: { ko: "목숨을 소중히", en: "Cherish Life" }, location: { ko: "챕터 3, 류큐 다리", en: "Ch.3 Ryukyu Bridge" }, body: { ko: "소심한 여성 동료 영입", en: "Recruits timid female ally" } },
        { number: 13, title: { ko: "사랑해야 할 것들", en: "Those We Must Love" }, location: { ko: "챕터 3, 류큐 거리", en: "Ch.3 Ryukyu St." }, body: { ko: "동료 레이코 영입", en: "Recruits Reiko" } },
        { number: 14, title: { ko: "동경의 도쿄", en: "Tokyo, My Longing" }, location: { ko: "챕터 3, 류큐 거리", en: "Ch.3 Ryukyu St." }, body: { ko: "어린 동료 하루카 영입", en: "Recruits young Haruka" } },
        { number: 15, title: { ko: "어른은 괴로워", en: "It's Tough Being an Adult" }, location: { ko: "챕터 4, 아사가오", en: "Ch.4 Asagao" }, body: { ko: "성인 시나리오 — 후속 해금", en: "Adult arc — unlocks sequel" } },
        { number: 16, title: { ko: "힘내라 어른들", en: "Hang in There, Grown-Ups" }, location: { ko: "챕터 4, 아사가오", en: "Ch.4 Asagao" }, body: { ko: "#15 클리어 필요", en: "Requires #15" } },
        { number: 17, title: { ko: "부탁해요 앗코 씨! 오키나와 편", en: "Please, Akko-san! Okinawa" }, location: { ko: "챕터 4 낮, 류큐 거리", en: "Ch.4 day, Ryukyu St." }, body: { ko: "스트랩·배경화면 다수", en: "Straps + wallpapers" } },
        { number: 18, title: { ko: "부탁해요 앗코 씨! 도쿄 편", en: "Please, Akko-san! Tokyo" }, location: { ko: "챕터 6, 카무로초", en: "Ch.6 Kamurocho" }, body: { ko: "츠빠리 클리어 후 동료 앗코 영입", en: "Recruits Akko after Tsuppari clear" } },
        { number: 19, title: { ko: "류구죠를 되찾아라", en: "Retake Ryugujo" }, location: { ko: "챕터 4, 카무로초", en: "Ch.4 Kamurocho" }, body: { ko: "도박 시설 해금", en: "Unlocks gambling facility" } },
        { number: 20, title: { ko: "정보화 사회에 오신 것을 환영합니다", en: "Welcome to the Info Society" }, location: { ko: "챕터 4, 카무로초", en: "Ch.4 Kamurocho" }, body: { ko: "정보 사회 스토리", en: "Information arc" } },
        { number: 21, title: { ko: "고민하는 신입사원", en: "The Troubled New Employee" }, location: { ko: "챕터 4, 카무로초", en: "Ch.4 Kamurocho" }, body: { ko: "기업 시나리오", en: "Corporate arc" } },
        { number: 22, title: { ko: "빨간 풍선", en: "Red Balloon" }, location: { ko: "챕터 9 낮, 카무로초", en: "Ch.9 day, Kamurocho" }, body: { ko: "어린이 공원 스토리", en: "Children's park arc" } },
        { number: 23, title: { ko: "그 아이의 행방", en: "Whereabouts of That Child" }, location: { ko: "챕터 4, 카무로초", en: "Ch.4 Kamurocho" }, body: { ko: "미아 미스터리 — 회복 아이템", en: "Missing-child mystery — recovery item" } },
        { number: 24, title: { ko: "주머니 속에는", en: "Inside the Pocket" }, location: { ko: "챕터 4, 카무로초", en: "Ch.4 Kamurocho" }, body: { ko: "극장가 시나리오", en: "Theater District arc" } },
        { number: 25, title: { ko: "화성 파이터 어게인", en: "Mars Fighter Again" }, location: { ko: "챕터 4, 카무로초", en: "Ch.4 Kamurocho" }, body: { ko: "액션 엔터테인먼트", en: "Action entertainment" } },
        { number: 26, title: { ko: "양아치와 라멘", en: "The Punk and Ramen" }, location: { ko: "챕터 4, 카무로초", en: "Ch.4 Kamurocho" }, body: { ko: "동료 마사히코 영입", en: "Recruits Masahiko" } },
        { number: 27, title: { ko: "한류 스타 코스프레", en: "Hallyu Star Cosplay" }, location: { ko: "챕터 4, 카무로초", en: "Ch.4 Kamurocho" }, body: { ko: "동료 토요미·키요미 영입", en: "Recruits Toyomi + Kiyomi" } },
        { number: 28, title: { ko: "그래도 인생은 계속된다", en: "Still, Life Goes On" }, location: { ko: "챕터 4, 카무로초", en: "Ch.4 Kamurocho" }, body: { ko: "점쟁이 동료 영입", en: "Recruits fortune teller" } },
        { number: 29, title: { ko: "사랑과 긍지", en: "Love and Pride" }, location: { ko: "챕터 6 밤, 카무로초", en: "Ch.6 night, Kamurocho" }, body: { ko: "호스트 클럽 동료 영입", en: "Recruits club host" } },
        { number: 30, title: { ko: "스타더스트 데뷔", en: "Stardust Debut" }, location: { ko: "챕터 6, 카무로초", en: "Ch.6 Kamurocho" }, body: { ko: "엔터테인먼트 동료 2명 영입", en: "Recruits 2 entertainment allies" } },
        { number: 31, title: { ko: "숙적과의 결전", en: "Showdown with the Rival" }, location: { ko: "챕터 12 엔딩 후, 카무로초", en: "Post-Ch.12, Kamurocho" }, body: { ko: "아레나 피날레 퀘스트", en: "Arena finale" } },
      ],
    },
    {
      slug: "minigame-master",
      title: { ko: "미니 게임 마스터 — 컴플리트 리스트 전 항목", en: "Minigame Master — Every Minigame" },
      summary: {
        ko: "골프·낚시·다트·당구·마작·화투·UFO 캐처·카라오케 등 컴플리트 리스트의 미니게임 항목을 한 번씩 체크해 「미니 게임 마스터」 업적을 잠금 해제합니다.",
        en: "Tick every minigame on the Completion List — golf, fishing, darts, billiards, mahjong, koi-koi, claw machine, karaoke — to unlock 'Minigame Master'.",
      },
    },
    {
      slug: "marathon",
      title: { ko: "마라톤 러너 — 누적 42.195km", en: "Marathon Runner — 42.195 km" },
      summary: {
        ko: "오키나와 외국인 맥과의 서브스토리 진행 후, 누적 달린 거리가 42.195km(마라톤 풀코스)에 도달하면 「마라톤 러너」 업적 발동.",
        en: "After Mack's blog-related substory, accumulate 42.195 km of running to unlock 'Marathon Runner'.",
      },
    },
  ],
};
