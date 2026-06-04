import type { CollectiblesData } from "./types";

export const lostJudgment: CollectiblesData = {
  appId: 2058190,
  categories: [
    {
      slug: "paint-search",
      title: { ko: "페인트 서치 — 다람쥐 그림 56곳", en: "Paint Search — 56 Squirrel Tags" },
      summary: {
        ko: "다이도지 본거지에서 페인트 서치를 해금한 뒤 카무로초 26곳 + 요코하마 이세자키 이진초 30곳의 다람쥐 그림을 모두 회수합니다. 가젯 4종(집음기·드론·전파 탐지기·탐정견)을 모두 해금한 뒤 진행하세요.",
        en: "After unlocking Paint Search at the Daidoji Hideout, collect all 26 squirrel tags in Kamurocho and 30 in Isezaki Ijincho. All four gadgets (mic, drone, radio detector, detective dog) are required.",
      },
      tips: [
        { ko: "보상은 도료·식기·이너·스킬 책·휘석 등 다양합니다. 의상·소품 컴플리트와 병행하면 효율적입니다.", en: "Rewards include paints, plates, inner wear, skill books, and gems. Combine with outfit/item cleanup." },
        { ko: "각 지역 지도에 다람쥐 그림 위치가 번호로 표시돼 있습니다. 카드 번호와 지도 번호가 일치합니다.", en: "Each region map marks squirrel-tag locations by number; map numbers match the card numbers." },
      ],
      source: {
        label: "gamewith.jp — Lost Judgment 페인트 서치",
        url: "https://gamewith.jp/lostjudgment/article/show/295108",
      },
      groups: [
    {
      title: { ko: "카무로초 — 다람쥐 그림과 보상", en: "Kamurocho — Squirrel Tags and Rewards" },
      mapImage: "https://img.gamewith.jp/img/original_b082d0d991fc19bf121502a93f228bb9.jpg",
      hotspots: {
        1: [25, 35], 2: [31.2, 33.9], 3: [35, 20.7], 4: [45.7, 19.3], 5: [87.8, 32.6],
        6: [83.3, 39.5], 7: [78.1, 43.9], 8: [71.5, 42.9], 9: [78.9, 53.7], 10: [86.7, 54.8],
        11: [75.4, 69.3], 12: [62.5, 86.5], 13: [53.7, 92.2], 14: [35, 95.3], 15: [25.6, 94.3],
        16: [39.5, 85.5], 17: [33.9, 75.7], 18: [42.1, 67.2], 19: [56.1, 63.2], 20: [65, 65.2],
        21: [50.6, 39], 22: [36, 42.9], 23: [28.3, 49.5], 24: [18.2, 46.4], 25: [40.1, 54.1], 26: [47.3, 56.4],
      },
      items: [
      {
        number: 1,
        location: { ko: "포포 시치후쿠 거리 서점", en: "POPPO Shichifuku St West" },
        image: "https://img.gamewith.jp/img/d7ab5b5061dce6348648206bcfb17975.jpg",
        reward: { ko: "양성 이너", en: "Trainee Inner Wear" },
        steps: [
        { body: { ko: "집음기로 편의점 오른쪽 건물의 「하지메 회계사무소」 간판 아래 다람쥐를 조사", en: "Use the directional mic on the squirrel under the Hajime Accounting sign on the building right of the convenience store" } },
        { body: { ko: "드론으로 「하지메 회계사무소」 간판 위 아이템을 획득", en: "Use the drone to grab the item above the Hajime Accounting sign" } },
        ],
      },
      {
        number: 2,
        location: { ko: "요시다 배팅 센터", en: "Yoshida Batting Center" },
        image: "https://img.gamewith.jp/img/b2a775620a5f0956a659cd709aaa3dee.jpg",
        reward: { ko: "구리 접시", en: "Copper Plate" },
        steps: [
        { body: { ko: "전파 탐지기로 왼쪽 길을 따라가 쓰레기통 뒤의 다람쥐를 조사", en: "Use the radio detector on the squirrel behind the trash bin down the left-hand path" } },
        { body: { ko: "집음기로 밖으로 나와 왼쪽 환기구를 조사해 아이템을 획득", en: "Step outside and use the directional mic on the left-side vent to get the item" } },
        ],
      },
      {
        number: 3,
        location: { ko: "호텔가", en: "Hotel District" },
        image: "https://img.gamewith.jp/img/cb17e1294fcbdf3b3d7f85483ec02a5d.jpg",
        reward: { ko: "EX 상승 벨트", en: "EX Boost Belt" },
        steps: [
        { body: { ko: "집음기로 골목에 들어가 환기구를 조사해 아이템을 획득", en: "Enter the side alley and use the directional mic on the vent to get the item" } },
        ],
      },
      {
        number: 4,
        location: { ko: "카무로초 힐즈 서쪽", en: "Kamurocho Hills West Side" },
        image: "https://img.gamewith.jp/img/8a1a1773100f5bf02c92a15ee8369e4b.jpg",
        reward: { ko: "큐티 도료", en: "Cutie Paint" },
        steps: [
        { body: { ko: "전파 탐지기로 HOTEL 「벨레시아」 벽의 다람쥐를 조사", en: "Use the radio detector on the squirrel on the wall of HOTEL Velescia" } },
        { body: { ko: "드론으로 다람쥐 바로 아래로 내려가 아이템을 획득", en: "Use the drone to descend right below the squirrel and grab the item" } },
        ],
      },
      {
        number: 5,
        location: { ko: "카무로초 힐즈 동쪽 (공원 앞 거리)", en: "Kamurocho Hills East Side (Park Blvd)" },
        image: "https://img.gamewith.jp/img/1196c7183bed5ef5de9cfb076d3e24f3.jpg",
        reward: { ko: "플래티넘 접시", en: "Platinum Plate" },
        steps: [
        { body: { ko: "집음기로 왼쪽 나무를 조사해 아이템을 획득", en: "Use the directional mic on the tree on the left to get the item" } },
        ],
      },
      {
        number: 6,
        location: { ko: "샤를 입구", en: "Charles Entrance" },
        image: "https://img.gamewith.jp/img/8a9c318f33e23034f37e1c62495a3deb.jpg",
        reward: { ko: "우디 팝 신인류의 블록깨기", en: "Woody Pop: New Type Block Breaker" },
        steps: [
        { body: { ko: "전파 탐지기로 샤를 옆 이자카야 「타이슈」의 등롱을 조사해 아이템을 획득", en: "Use the radio detector on the lantern of the izakaya Taishu next to Charles" } },
        ],
      },
      {
        number: 7,
        location: { ko: "시치후쿠 거리 주차장", en: "Shichifuku St Parking Lot" },
        image: "https://img.gamewith.jp/img/eaccea8884447bf208fc4ab57b870578.jpg",
        reward: { ko: "밀리터리 도료(녹색)", en: "Military Paint (Green)" },
        steps: [
        { body: { ko: "전파 탐지기로 입구 옆 간판 뒤의 다람쥐를 조사", en: "Use the radio detector on the squirrel behind the sign next to the entrance" } },
        { body: { ko: "드론으로 펜스 위의 아이템을 획득", en: "Use the drone to grab the item on top of the fence" } },
        ],
      },
      {
        number: 8,
        location: { ko: "라이크자카", en: "Kanrai" },
        image: "https://img.gamewith.jp/img/bc98ce10b9ffb5af9c5688d477d93592.jpg",
        reward: { ko: "네이처 도료", en: "Nature Paint" },
        steps: [
        { body: { ko: "집음기로 안쪽 좌식 자리를 조사해 아이템을 획득", en: "Use the directional mic on the back tatami room to get the item" } },
        ],
      },
      {
        number: 9,
        location: { ko: "센료 거리 북쪽의 오코노미야키 가게", en: "Okonomiyaki Shop North of Senryo Ave" },
        image: "https://img.gamewith.jp/img/081fa308b355ef9ca12ed9e54e1b377c.jpg",
        reward: { ko: "푸른 휘석", en: "Blue Gem" },
        steps: [
        { body: { ko: "집음기로 골목에 들어가 아이템을 획득", en: "Enter the alley and use the directional mic to get the item" } },
        ],
      },
      {
        number: 10,
        location: { ko: "챔피언 거리", en: "Champion District" },
        image: "https://img.gamewith.jp/img/ac74b1642528c487ab69290397ddd499.jpg",
        reward: { ko: "배틀 이너 SS", en: "Battle Inner SS" },
        steps: [
        { body: { ko: "집음기로 스낵 「슷톤쿄」 문패 위의 다람쥐를 조사", en: "Use the directional mic on the squirrel above the Suttonkyo snack bar's nameplate" } },
        { body: { ko: "전파 탐지기로 펍 「아텐시」 맞은편 계단의 다람쥐를 조사", en: "Use the radio detector on the squirrel on the stairs across from Pub Atenshi" } },
        { body: { ko: "탐정견으로 남쪽 사거리에서 아이템을 획득", en: "Use the detective dog at the southern intersection to grab the item" } },
        ],
      },
      {
        number: 11,
        location: { ko: "타이헤이 거리 동쪽의 에비텐고쿠", en: "Ebi Tengoku East of Taihei Blvd" },
        image: "https://img.gamewith.jp/img/05b08ac04337b660e208c0ed9dd9df53.jpg",
        reward: { ko: "배틀 서포트 SS", en: "Battle Support SS" },
        steps: [
        { body: { ko: "집음기로 골목에 들어서자마자 있는 사물함을 조사해 아이템을 획득", en: "Use the directional mic on the locker just inside the alley to get the item" } },
        ],
      },
      {
        number: 12,
        location: { ko: "야가미 탐정 사무소 동쪽", en: "East of Yagami Detective Agency" },
        image: "https://img.gamewith.jp/img/786668bfca9872324f68273c2f824dd6.jpg",
        reward: { ko: "체크 도료", en: "Check Paint" },
        steps: [
        { body: { ko: "집음기로 건물 2층의 다람쥐를 조사", en: "Use the directional mic on the squirrel on the 2nd floor of the building" } },
        { body: { ko: "드론으로 2층 다람쥐 바로 아래로 내려가 아이템을 획득", en: "Use the drone to descend right below the 2nd-floor squirrel and grab the item" } },
        ],
      },
      {
        number: 13,
        location: { ko: "에비스야 맞은편", en: "Across from Ebisuya" },
        image: "https://img.gamewith.jp/img/aa55cea8a79898c96b15678c1308f6ee.jpg",
        reward: { ko: "inharmonic", en: "inharmonic" },
        steps: [
        { body: { ko: "집음기로 나카미치 거리 앞 좁은 길에 있는 다람쥐를 조사", en: "Use the directional mic on the squirrel in the small lane just before Nakamichi St" } },
        { body: { ko: "탐정견으로 좁은 길을 북쪽으로 따라가 아이템을 획득", en: "Use the detective dog to follow the lane north and grab the item" } },
        ],
      },
      {
        number: 14,
        location: { ko: "쇼와 거리 서쪽 흡연 구역", en: "Showa St West Smoking Area" },
        image: "https://img.gamewith.jp/img/ff637febc5d800e7811b3f9c67539be4.jpg",
        reward: { ko: "노란 휘석", en: "Yellow Gem" },
        steps: [
        { body: { ko: "집음기로 「스시긴」 오른쪽에 쌓인 박스 아래를 조사해 아이템을 획득", en: "Use the directional mic under the stacked cases on the right side of Sushi Gin to get the item" } },
        ],
      },
      {
        number: 15,
        location: { ko: "텐카이치 거리 입구 맨홀", en: "Manhole at Tenkaichi St Entrance" },
        image: "https://img.gamewith.jp/img/ae34bebe28b0e6e2e433403c0e1cc75c.jpg",
        reward: { ko: "가드 셔츠 S", en: "Guard Shirt S" },
        steps: [
        { body: { ko: "탐정견으로 북쪽으로 진행해 아이템을 획득", en: "Use the detective dog to head north and grab the item" } },
        ],
      },
      {
        number: 16,
        location: { ko: "킷사 알프스", en: "Cafe Alps" },
        image: "https://img.gamewith.jp/img/9108434ff35673cd2bae650a979083f6.jpg",
        reward: { ko: "프리패스 교환권(2)", en: "Free Pass Voucher (2)" },
        steps: [
        { body: { ko: "※휴업으로 들어갈 수 없는 경우 사이드 케이스 「강도는 카페에 있다」 클리어 필요", en: "*If closed, you must clear the side case \"The Robber Is in the Cafe\" to enter" } },
        { body: { ko: "전파 탐지기로 가게 안쪽 비상구의 다람쥐를 조사", en: "Use the radio detector on the squirrel at the back emergency exit of the shop" } },
        { body: { ko: "집음기로 가게 밖 실외기 근처를 조사해 아이템을 획득", en: "Use the directional mic near the outdoor AC unit outside the shop to get the item" } },
        ],
      },
      {
        number: 17,
        location: { ko: "텐카이치 거리 뒤편 만화 카페", en: "Manga Cafe Behind Tenkaichi St" },
        image: "https://img.gamewith.jp/img/f1c02a9dedef2ca8b081bc10b9408cc9.jpg",
        reward: { ko: "초물욕 콘택트", en: "Super Greed Contacts" },
        steps: [
        { body: { ko: "탐정견으로 다이산 공원의 음수대에서 아이템을 획득", en: "Use the detective dog at the drinking fountain in Daisan Park to grab the item" } },
        ],
      },
      {
        number: 18,
        location: { ko: "타이헤이 거리 빌딩의 엘리베이터", en: "Elevator of a Taihei Blvd Building" },
        image: "https://img.gamewith.jp/img/c5d6927432a31ae219f23fcd95ee220a.jpg",
        reward: { ko: "드래곤 도료", en: "Dragon Paint" },
        steps: [
        { body: { ko: "집음기로 요시노야 방향으로 나아가 바로 있는 가로등을 조사해 아이템을 획득", en: "Use the directional mic on the street lamp just toward Yoshinoya to get the item" } },
        ],
      },
      {
        number: 19,
        location: { ko: "타이헤이 거리 밀레니엄 타워 앞", en: "In Front of Millennium Tower on Taihei Blvd" },
        image: "https://img.gamewith.jp/img/475017d4d2c47cfa10ae70dc841ff25f.jpg",
        reward: { ko: "모에 도료", en: "Moe Paint" },
        steps: [
        { body: { ko: "전파 탐지기로 근처의 안내판을 조사해 아이템을 획득", en: "Use the radio detector on the nearby info board to get the item" } },
        ],
      },
      {
        number: 20,
        location: { ko: "스시잔마이 옆 주차장", en: "Parking Lot Next to Sushi Zanmai" },
        image: "https://img.gamewith.jp/img/871b45c37bce74a770c242d272f11e2f.jpg",
        reward: { ko: "스킬 「스고로쿠 왕」 잠금 해제, 환상 스고로쿠 지남서 2021【진】", en: "Unlocks skill \"Sugoroku King\"; Fantasy Sugoroku Manual 2021 [True]" },
        steps: [
        { body: { ko: "탐정견으로 근처 가로등에서 아이템을 획득", en: "Use the detective dog at the nearby street lamp to grab the item" } },
        ],
      },
      {
        number: 21,
        location: { ko: "시치후쿠 거리 무료 안내소", en: "Shichifuku St Free Info Center" },
        image: "https://img.gamewith.jp/img/caf7c96d1c3fbeca577c1d43d8cf3e31.jpg",
        reward: { ko: "스킬 「EX·하마가에시」 잠금 해제, 쇼와 결투록·바람의 권", en: "Unlocks skill \"EX Hammer Return\"; Showa Dueling Records: Wind Volume" },
        steps: [
        { body: { ko: "전파 탐지기로 길 건너 식재의 오른쪽 끝을 조사해 아이템을 획득", en: "Use the radio detector on the right edge of the planter across the street to get the item" } },
        ],
      },
      {
        number: 22,
        location: { ko: "극장 앞 거리의 노란 간판 라멘 가게", en: "Ramen Shop with Yellow Sign on Theater Ave" },
        image: "https://img.gamewith.jp/img/45d11d31ec857b36d8d9876f39ce6caa.jpg",
        reward: { ko: "컬러풀 도료", en: "Colorful Paint" },
        steps: [
        { body: { ko: "탐정견으로 옆 햄버거 가게의 메뉴판에서 아이템을 획득", en: "Use the detective dog at the menu board of the burger shop next door to grab the item" } },
        ],
      },
      {
        number: 23,
        location: { ko: "극장 앞 광장", en: "Theater Square" },
        image: "https://img.gamewith.jp/img/a4d240660db2d2cb186b11d8a57d0eb4.jpg",
        reward: { ko: "밀리터리 도료(파랑)", en: "Military Paint (Blue)" },
        steps: [
        { body: { ko: "집음기로 SEGA 로고 마크를 조사해 아이템을 획득", en: "Use the directional mic on the SEGA logo to get the item" } },
        ],
      },
      {
        number: 24,
        location: { ko: "극장 북서쪽 윈도우 디스플레이", en: "Window Display Northwest of Theater" },
        image: "https://img.gamewith.jp/img/c4e077b1a0fc8722a5a8e5949743e99b.jpg",
        reward: { ko: "스킬 「선약 제작의 행운【배】」 잠금 해제, 선인은 이렇게 말했다", en: "Unlocks skill \"Elixir Crafting Luck [Double]\"; Thus Spoke the Sage" },
        steps: [
        { body: { ko: "전파 탐지기로 스마일 버거 옆에 매달린 등롱을 조사해 아이템을 획득", en: "Use the radio detector on the lantern hanging beside Smile Burger to get the item" } },
        ],
      },
      {
        number: 25,
        location: { ko: "카무로 시어터 옥상 정원", en: "Kamuro Theater Rooftop Garden" },
        image: "https://img.gamewith.jp/img/9aec9033852eb80b4aa905f3e2fac71c.jpg",
        reward: { ko: "【선약 레시피】 변전자재의 선약", en: "[Elixir Recipe] Elixir of Transformation" },
        steps: [
        { body: { ko: "전파 탐지기로 풀로 덮인 벽의 왼쪽 상단을 조사해 아이템을 획득", en: "Use the radio detector on the top-left of the grass-covered wall to get the item" } },
        ],
      },
      {
        number: 26,
        location: { ko: "카무로 시어터 지하", en: "Kamuro Theater Basement" },
        image: "https://img.gamewith.jp/img/ff59f8c8021a9427c0da1a6ba673c041.jpg",
        reward: { ko: "용의 눈동자", en: "Dragon's Eye" },
        steps: [
        { body: { ko: "전파 탐지기로 왼쪽으로 진행해 KOREL 광고 위에 나란히 있는 두 개의 ◯ 중 오른쪽을 조사해 아이템을 획득", en: "Head left and use the radio detector on the right of the two circles above the KOREL ad to get the item" } },
        ],
      },
      ],
    },
    {
      title: { ko: "이세자키 이진초 — 다람쥐 그림과 보상", en: "Isezaki Ijincho — Squirrel Tags and Rewards" },
      mapImage: "https://img.gamewith.jp/img/original_7e511106238cfad9066b2dbacaa4cf34.jpg",
      hotspots: {
        1: [12.4, 44.3], 2: [14.5, 26.9], 3: [17, 46], 4: [16.7, 58.5], 5: [21, 60],
        6: [22, 71.4], 7: [25, 82], 8: [29.4, 74], 9: [30.3, 81.7], 10: [46.3, 77.9],
        11: [46.6, 86.9], 12: [46.9, 76.2], 13: [54, 75.1], 14: [56.4, 66.2], 15: [45.2, 67.7],
        16: [46.5, 60.6], 17: [52.1, 57.7], 18: [53.5, 44.9], 19: [86.6, 33], 20: [91.5, 21.5],
        21: [93.9, 8.9], 22: [78.7, 10.3], 23: [68.7, 5.4], 24: [64.4, 18.2], 25: [61.3, 28.1],
        26: [48.4, 21.7], 27: [33, 30.9], 28: [39.6, 36.3], 29: [36.6, 45.6], 30: [28.5, 57],
      },
      items: [
      {
        number: 1,
        location: { ko: "세이료 고교 앞", en: "In Front of Seiryo High" },
        image: "https://img.gamewith.jp/img/d7ab5b5061dce6348648206bcfb17975.jpg",
        reward: { ko: "35000엔, SP2000, 행운 부르는 식사의 권유", en: "35,000 yen, 2000 SP, Lucky Meal Guide" },
        steps: [
        { body: { ko: "다람쥐를 조사", en: "Examine the squirrel" } },
        { body: { ko: "「귀를 기울이고 있다」를 선택", en: "Choose \"It seems to be listening\"" } },
        { body: { ko: "집음기로 벽의 램프를 조사", en: "Use the directional mic on the wall lamp" } },
        ],
      },
      {
        number: 2,
        location: { ko: "바샤미치 가도 서쪽", en: "Bashamichi Kaido West" },
        image: "https://img.gamewith.jp/img/b2a775620a5f0956a659cd709aaa3dee.jpg",
        reward: { ko: "버스트 부적", en: "Burst Charm" },
        steps: [
        { body: { ko: "탐정견으로 남쪽으로 진행해 아이템을 획득", en: "Use the detective dog to head south and grab the item" } },
        ],
      },
      {
        number: 3,
        location: { ko: "세이료 고교 교외", en: "Seiryo High Outskirts" },
        image: "https://img.gamewith.jp/img/cb17e1294fcbdf3b3d7f85483ec02a5d.jpg",
        reward: { ko: "스킬 「엣지 오브 데스【필사의 학】」 잠금 해제, 필사의 서", en: "Unlocks skill \"Edge of Death [Desperate Crane]\"; Book of Desperation" },
        steps: [
        { body: { ko: "집음기로 다리 기둥(다리를 지지하는 기둥)의 다람쥐를 조사", en: "Use the directional mic on the squirrel on the bridge pier" } },
        { body: { ko: "드론으로 다람쥐 바로 아래로 내려가 아이템을 획득", en: "Use the drone to descend right below the squirrel and grab the item" } },
        ],
      },
      {
        number: 4,
        location: { ko: "스낵 거리 공원", en: "Snack Alley Park" },
        image: "https://img.gamewith.jp/img/8a1a1773100f5bf02c92a15ee8369e4b.jpg",
        reward: { ko: "미라클 다트", en: "Miracle Darts" },
        steps: [
        { body: { ko: "집음기로 공원에 있는 나무 밑동을 조사해 아이템을 획득", en: "Use the directional mic at the base of the tree in the park to get the item" } },
        ],
      },
      {
        number: 5,
        location: { ko: "스낵 거리 이자카야 옆", en: "Next to the Izakaya in Snack Alley" },
        image: "https://img.gamewith.jp/img/1196c7183bed5ef5de9cfb076d3e24f3.jpg",
        reward: { ko: "붉은 휘석", en: "Red Gem" },
        steps: [
        { body: { ko: "집음기로 골목을 따라가 벽의 다람쥐를 조사", en: "Use the directional mic on the squirrel on the wall down the side alley" } },
        { body: { ko: "전파 탐지기로 골목을 더 따라가 핫슬 용품점 앞의 빨간 옷을 조사해 아이템을 획득", en: "Continue down the alley and use the radio detector on the red clothes outside Hustle Goods to get the item" } },
        ],
      },
      {
        number: 6,
        location: { ko: "스낵 거리 주차장", en: "Snack Alley Parking Lot" },
        image: "https://img.gamewith.jp/img/8a9c318f33e23034f37e1c62495a3deb.jpg",
        reward: { ko: "도그 푸드", en: "Dog Food" },
        steps: [
        { body: { ko: "전파 탐지기로 오른쪽 흰 건물 2층 벽의 다람쥐를 조사", en: "Use the radio detector on the squirrel on the 2nd-floor wall of the white building on the right" } },
        { body: { ko: "드론으로 다람쥐 바로 아래로 내려가 아이템을 획득", en: "Use the drone to descend right below the squirrel and grab the item" } },
        ],
      },
      {
        number: 7,
        location: { ko: "아침놀 거리", en: "Dawn Street" },
        image: "https://img.gamewith.jp/img/eaccea8884447bf208fc4ab57b870578.jpg",
        reward: { ko: "스킬 「비기·오보로나게」 잠금 해제, 비전·뱀류 가전서·2", en: "Unlocks skill \"Secret Art: Oboro Throw\"; Secret Snake-Style Manual: Volume 2" },
        steps: [
        { body: { ko: "전파 탐지기로 계단을 내려가 벽의 다람쥐를 조사", en: "Go down the stairs and use the radio detector on the squirrel on the wall" } },
        { body: { ko: "집음기로 다리의 돌출부에 있는 다람쥐를 조사", en: "Use the directional mic on the squirrel on the bridge's ledge" } },
        { body: { ko: "드론으로 가로등 위의 아이템을 획득", en: "Use the drone to grab the item on top of the street lamp" } },
        ],
      },
      {
        number: 8,
        location: { ko: "포포 츠루가메 가도점", en: "POPPO Tsurukame Kaido" },
        image: "https://img.gamewith.jp/img/bc98ce10b9ffb5af9c5688d477d93592.jpg",
        reward: { ko: "꽃무늬 도료", en: "Floral Paint" },
        steps: [
        { body: { ko: "전파 탐지기로 음료 진열대를 조사해 아이템을 획득", en: "Use the radio detector on the drinks shelf to get the item" } },
        ],
      },
      {
        number: 9,
        location: { ko: "오노데라 상점 앞 화장실", en: "Bathroom in Front of Onodera Store" },
        image: "https://img.gamewith.jp/img/081fa308b355ef9ca12ed9e54e1b377c.jpg",
        reward: { ko: "무지개색 휘석", en: "Rainbow Gem" },
        steps: [
        { body: { ko: "집음기로 공원 중앙 부근 파란 시트의 다람쥐를 조사", en: "Use the directional mic on the squirrel on the blue tarp near the center of the park" } },
        { body: { ko: "전파 탐지기로 공원 아래쪽에 3개 쌓인 타이어를 조사해 아이템을 획득", en: "Use the radio detector on the stack of three tires at the lower side of the park to get the item" } },
        ],
      },
      {
        number: 10,
        location: { ko: "중앙 거리 북쪽의 입체 주차장", en: "Multi-Story Lot North of Chuo St" },
        image: "https://img.gamewith.jp/img/ac74b1642528c487ab69290397ddd499.jpg",
        reward: { ko: "스트라이프 도료", en: "Stripe Paint" },
        steps: [
        { body: { ko: "집음기로 전신주의 다람쥐를 조사", en: "Use the directional mic on the squirrel on the utility pole" } },
        { body: { ko: "전파 탐지기로 전신주의 다람쥐를 조사", en: "Use the radio detector on the squirrel on the utility pole" } },
        { body: { ko: "드론으로 전신주 위 가로등의 아이템을 획득", en: "Use the drone to grab the item on the street lamp above the utility pole" } },
        ],
      },
      {
        number: 11,
        location: { ko: "중앙 거리 남쪽의 넓은 주차장", en: "Large Lot South of Chuo St" },
        image: "https://img.gamewith.jp/img/05b08ac04337b660e208c0ed9dd9df53.jpg",
        reward: { ko: "스킬 「EX·스에카라메」 잠금 해제, 쇼와 결투록·물의 권", en: "Unlocks skill \"EX Cane Lock\"; Showa Dueling Records: Water Volume" },
        steps: [
        { body: { ko: "탐정견으로 헬로워크 미사키(다람쥐 그림 바로 뒤) 한가운데 기둥까지 진행해 아이템을 획득", en: "Use the detective dog to advance to the middle pillar of Hello Work Misaki (directly behind the squirrel tag) and grab the item" } },
        ],
      },
      {
        number: 12,
        location: { ko: "요코하마 99과", en: "Yokohama 99th Division" },
        image: "https://img.gamewith.jp/img/786668bfca9872324f68273c2f824dd6.jpg",
        reward: { ko: "보등의 패", en: "Treasure Lantern Tile" },
        steps: [
        { body: { ko: "전파 탐지기로 근처 식재를 조사해 아이템을 획득", en: "Use the radio detector on the nearby planter to get the item" } },
        ],
      },
      {
        number: 13,
        location: { ko: "웰컴 약국", en: "Welcome Pharmacy" },
        image: "https://img.gamewith.jp/img/aa55cea8a79898c96b15678c1308f6ee.jpg",
        reward: { ko: "스킬 「발경」 잠금 해제, 되살아나는 발경", en: "Unlocks skill \"Fa Jin\"; Fa Jin Revived" },
        steps: [
        { body: { ko: "집음기로 가게 오른쪽 안쪽 진열대 왼쪽 아래 부근을 조사해 아이템을 획득", en: "Use the directional mic near the lower left of the right-rear shelf to get the item" } },
        ],
      },
      {
        number: 14,
        location: { ko: "이진 거리", en: "Ijin Street" },
        image: "https://img.gamewith.jp/img/ff637febc5d800e7811b3f9c67539be4.jpg",
        reward: { ko: "플레이패스", en: "Play Pass" },
        steps: [
        { body: { ko: "탐정견으로 이진 좁은길(왼쪽 길)로 들어가 바로 있는 계단 아래에서 아이템을 획득", en: "Use the detective dog at the foot of the stairs just inside the Ijin Lane (left path) to grab the item" } },
        ],
      },
      {
        number: 15,
        location: { ko: "햐쿠케이코지 주차장", en: "Hyakkei Lane Parking Lot" },
        image: "https://img.gamewith.jp/img/ae34bebe28b0e6e2e433403c0e1cc75c.jpg",
        reward: { ko: "엘레강트 도료", en: "Elegant Paint" },
        steps: [
        { body: { ko: "전파 탐지기로 햐쿠케이 거리 방향으로 진행해 「우미가메테이」 벽의 다람쥐를 조사", en: "Head toward Hyakkei St and use the radio detector on the squirrel on the wall of UMIGAME TEI" } },
        { body: { ko: "드론으로 다람쥐 바로 아래로 내려가 아이템을 획득", en: "Use the drone to descend right below the squirrel and grab the item" } },
        ],
      },
      {
        number: 16,
        location: { ko: "플라주", en: "Plage" },
        image: "https://img.gamewith.jp/img/9108434ff35673cd2bae650a979083f6.jpg",
        reward: { ko: "밀리터리 도료(갈색)", en: "Military Paint (Brown)" },
        steps: [
        { body: { ko: "전파 탐지기로 창가 소파의 흰 쿠션을 조사해 아이템을 획득", en: "Use the radio detector on the white cushion on the sofa by the window to get the item" } },
        ],
      },
      {
        number: 17,
        location: { ko: "벳테 키친의 공룡 입속", en: "Inside the Dinosaur's Mouth at Vette Kitchen" },
        image: "https://img.gamewith.jp/img/f1c02a9dedef2ca8b081bc10b9408cc9.jpg",
        reward: { ko: "스킬 「백사의 심득」 잠금 해제, 백사재 어록", en: "Unlocks skill \"White Snake Style\"; White Snake Sage's Sayings" },
        steps: [
        { body: { ko: "공룡 입속의 다람쥐 그림을 조사", en: "Examine the squirrel tag inside the dinosaur's mouth" } },
        { body: { ko: "집음기로 공룡의 꼬리를 조사해 아이템을 획득", en: "Use the directional mic on the dinosaur's tail to get the item" } },
        ],
      },
      {
        number: 18,
        location: { ko: "진나이 역 동쪽 벽", en: "East Wall of Jinnai Station" },
        image: "https://img.gamewith.jp/img/c5d6927432a31ae219f23fcd95ee220a.jpg",
        reward: { ko: "공방 서포터 1", en: "Offense/Defense Supporter 1" },
        steps: [
        { body: { ko: "집음기로 북쪽 큰 건물의 계단 오른쪽에 있는 다람쥐를 조사", en: "Use the directional mic on the squirrel to the right of the stairs of the large building north" } },
        { body: { ko: "전파 탐지기로 바로 오른쪽 게시판 왼쪽 상단의 다람쥐를 조사", en: "Use the radio detector on the squirrel at the upper left of the bulletin board just to the right" } },
        { body: { ko: "탐정견으로 담을 따라 동쪽으로 진행해 아이템을 획득", en: "Use the detective dog along the wall heading east to grab the item" } },
        ],
      },
      {
        number: 19,
        location: { ko: "차이나타운 공원 (하마키타 다이한텐 앞 광장)", en: "Chinatown Park (Plaza in Front of Hamakita Daihanten)" },
        image: "https://img.gamewith.jp/img/475017d4d2c47cfa10ae70dc841ff25f.jpg",
        reward: { ko: "그립 서포터", en: "Grip Supporter" },
        steps: [
        { body: { ko: "전파 탐지기로 입구 왼쪽 석상의 얼굴을 조사해 아이템을 획득", en: "Use the radio detector on the face of the statue on the left of the entrance to get the item" } },
        ],
      },
      {
        number: 20,
        location: { ko: "하마키타 공원 거리 오른쪽 아래의 건물", en: "Building at the Lower Right of Hamakita Park Ave" },
        image: "https://img.gamewith.jp/img/871b45c37bce74a770c242d272f11e2f.jpg",
        reward: { ko: "기합 셔츠 SSS", en: "Spirit Shirt SSS" },
        steps: [
        { body: { ko: "집음기로 입구 쪽에서, 분수에서 봤을 때 왼쪽 나무의 구멍을 조사해 아이템을 획득", en: "Use the directional mic on the hollow in the tree on the left side of the fountain from the entrance to get the item" } },
        ],
      },
      {
        number: 21,
        location: { ko: "하마키타 공원 동쪽 스테이지 물속", en: "In the Water at the East Stage of Hamakita Park" },
        image: "https://img.gamewith.jp/img/caf7c96d1c3fbeca577c1d43d8cf3e31.jpg",
        reward: { ko: "【선약 레시피】 윤활진의 선약", en: "[Elixir Recipe] Lubricant Field Elixir" },
        steps: [
        { body: { ko: "전파 탐지기로 왼쪽의 꽃을 조사해 아이템을 획득", en: "Use the radio detector on the flower on the left to get the item" } },
        ],
      },
      {
        number: 22,
        location: { ko: "하마키타 공원 중앙 부근의 나무", en: "Tree Near the Center of Hamakita Park" },
        image: "https://img.gamewith.jp/img/45d11d31ec857b36d8d9876f39ce6caa.jpg",
        reward: { ko: "【선약 레시피】 괴멸 투격의 선약", en: "[Elixir Recipe] Annihilation Strike Elixir" },
        steps: [
        { body: { ko: "탐정견으로 왼쪽 옆의 나무까지 진행해 아이템을 획득", en: "Use the detective dog to advance to the tree on the immediate left and grab the item" } },
        ],
      },
      {
        number: 23,
        location: { ko: "「킷사 와곤 하마」 앞 건물", en: "Building in Front of Cafe Wagon Hama" },
        image: "https://img.gamewith.jp/img/a4d240660db2d2cb186b11d8a57d0eb4.jpg",
        reward: { ko: "허그쿠움 베타", en: "Hugkoom Beta" },
        steps: [
        { body: { ko: "전파 탐지기로 건물 뒤편의 다람쥐를 조사", en: "Use the radio detector on the squirrel behind the building" } },
        { body: { ko: "드론으로 건물 지붕을 조사해 아이템을 획득\n※저녁이나 밤이 아이템을 찾기 쉬움", en: "Use the drone on the building's roof to get the item\n*Easier to spot the item in the evening or at night" } },
        ],
      },
      {
        number: 24,
        location: { ko: "「라 샤트 블랑슈」 앞", en: "In Front of la chatte blanche" },
        image: "https://img.gamewith.jp/img/c4e077b1a0fc8722a5a8e5949743e99b.jpg",
        reward: { ko: "레코드", en: "My Own Style (Record)" },
        steps: [
        { body: { ko: "전파 탐지기로 근처 나무의 구멍을 조사해 아이템을 획득", en: "Use the radio detector on the hollow in the nearby tree to get the item" } },
        ],
      },
      {
        number: 25,
        location: { ko: "다이코쿠텐 거리 신호 앞 바닥", en: "Ground in Front of Daikokuten St Traffic Light" },
        image: "https://img.gamewith.jp/img/9aec9033852eb80b4aa905f3e2fac71c.jpg",
        reward: { ko: "【선약 레시피】 강악력의 선약", en: "[Elixir Recipe] Iron Grip Elixir" },
        steps: [
        { body: { ko: "탐정견으로 횡단보도를 건너자마자 흙 위에서 아이템을 획득", en: "Use the detective dog on the patch of dirt right after crossing the crosswalk to grab the item" } },
        ],
      },
      {
        number: 26,
        location: { ko: "바샤미치 가도 동쪽 주차장", en: "Bashamichi Kaido East Parking Lot" },
        image: "https://img.gamewith.jp/img/ff59f8c8021a9427c0da1a6ba673c041.jpg",
        reward: { ko: "은 접시", en: "Silver Plate" },
        steps: [
        { body: { ko: "탐정견으로 오른쪽 문 앞까지 진행해 아이템을 획득", en: "Use the detective dog to advance to the gate on the right and grab the item" } },
        ],
      },
      {
        number: 27,
        location: { ko: "「르 누보 하마」 왼쪽 그림", en: "Painting Left of Le Nouveau hama" },
        image: "https://img.gamewith.jp/img/27d83c3b0f90b7ea933087ef98284981.jpg",
        reward: { ko: "EX-4", en: "EX-4" },
        steps: [
        { body: { ko: "전파 탐지기로 카운터 오른쪽 꽃을 조사해 아이템을 획득", en: "Use the radio detector on the flower right of the counter to get the item" } },
        ],
      },
      {
        number: 28,
        location: { ko: "베이사이드 거리 서쪽", en: "Bayside Street West" },
        image: "https://img.gamewith.jp/img/2c8be9dd84e6dd22cf9a24eca21f456c.jpg",
        reward: { ko: "【선약 레시피】 건간각의 선약", en: "[Elixir Recipe] Strong Legs Elixir" },
        steps: [
        { body: { ko: "집음기로 다람쥐 1과 같은 건물 3층의 다람쥐를 조사", en: "Use the directional mic on the squirrel on the 3rd floor of the same building as squirrel 1" } },
        { body: { ko: "드론으로 다람쥐 2의 한 칸 오른쪽 건물의 빨간 차양 위 아이템을 획득", en: "Use the drone to grab the item on the red awning of the building one over to the right of squirrel 2" } },
        ],
      },
      {
        number: 29,
        location: { ko: "진나이 역 서쪽 매표소 앞 기둥", en: "Pillar in Front of the Ticket Counter at Jinnai Station West" },
        image: "https://img.gamewith.jp/img/a2b9dc182483257e8a0770c8aae444f6.jpg",
        reward: { ko: "금 접시", en: "Gold Plate" },
        steps: [
        { body: { ko: "전파 탐지기로 중앙 기둥의 윗부분을 조사해 아이템을 획득", en: "Use the radio detector on the upper part of the central pillar to get the item" } },
        ],
      },
      {
        number: 30,
        location: { ko: "후쿠토쿠 공원 (라스트 픽처)", en: "Fukutoku Park (Last Picture)" },
        image: "https://img.gamewith.jp/img/b76d2b0e2a6c8cc151e27f0f2e881310.jpg",
        reward: { ko: "도토리", en: "Acorn" },
        steps: [
        { body: { ko: "여자아이(후타바)와 대화", en: "Talk to the girl (Futaba)" } },
        { body: { ko: "다람쥐 그림을 찾는다", en: "Find the squirrel tag" } },
        { body: { ko: "집음기로 오브젝트의 정상을 조사", en: "Use the directional mic on the top of the object" } },
        ],
      },
      ],
    },
      ],
    }
  ],
};
