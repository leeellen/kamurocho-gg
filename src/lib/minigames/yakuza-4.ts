import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Yakuza 4 Remastered. Rules, prize bands, locker numbers
// and the fish tables are taken from CyricZ's GameFAQs guide, cited on each
// entry.
export const yakuza4Minigames: MinigamesData = {
  appId: 1105500,
  intro: {
    ko: "Y4는 네 주인공이 각각 다른 콘텐츠를 담당해 미니게임 접근 시점이 갈립니다. 탁구·아로마테라피 마사지·파친코는 이 작품 특유의 종목이고, 박셀리오스는 2편을 세 번 돌려야 1편이 설치됩니다. 각 항목의 수치와 경품 구간은 출처의 표에서 확인한 것입니다.",
    en: "Yakuza 4 hands different content to each of its four protagonists, so when you can reach a minigame depends on who you are playing. Table tennis, the aromatherapy massage and pachinko are particular to this entry, and Boxcelios 1 only appears after three plays of the sequel. The numbers and prize bands below come from the tables in the linked guide.",
  },
  minigames: [
    {
      slug: "table-tennis",
      name: { ko: "탁구", en: "Table Tennis" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "카무로초 — 탁구장", en: "The table tennis hall, Kamurocho" },
      summary: {
        ko: "11점 선취로 이깁니다. 랠리로 이기려 하면 안 됩니다 — 가장 쉬운 난이도의 상대도 거의 실수하지 않습니다.",
        en: "First to 11. Do not try to win a rally — even the easiest opponent almost never misses.",
      },
      howTo: [
        { ko: "공이 상대에게 갈 때마다 L2를 계속 누르세요. 화면이 느려지며 상대의 가슴을 응시하고 히트 게이지가 찹니다. 이 게임의 점수는 사실상 여기서 나옵니다.", en: "Hold L2 every time the ball is heading away from you — the action slows, Kiryu stares at the opponent's chest, and Heat builds. That is where points actually come from." },
        { ko: "히트 게이지가 가득 차면 공이 올 때 △를 눌러 컷신 스매시를 씁니다. 대부분 그대로 득점입니다.", en: "With a full Heat bar, press triangle as the ball comes back for the cutscene smash, which usually takes the point outright." },
        { ko: "11점에 가까워지면 상대가 스매시를 받아내기 시작합니다. 보통 한 번은 받아내고 두 번째에 뚫리며, 하드에서는 한 랠리에 세 번까지 스매시해야 할 수 있습니다.", en: "As you near 11 the opponent starts returning smashes — usually the first one only, but on Hard you may need three in a rally." },
        { ko: "공이 올 때 번쩍이는 순간이 타격 타이밍입니다. 익숙해지기 전에는 L2를 계속 누르다 리턴을 놓치느니, 리턴을 확실히 하는 쪽을 우선하세요.", en: "The flash as the ball arrives is your timing cue — until that feels natural, prioritise returning the ball over holding L2." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Table Tennis (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/table-tennis" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
      achievementSlug: "achievement_33",
    },
    {
      slug: "club-sega-boxcelios-2",
      name: { ko: "클럽 세가 — 박셀리오스 2", en: "Club SEGA — Boxcelios 2" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "카무로초 — 클럽 세가", en: "Club SEGA, Kamurocho" },
      summary: {
        ko: "적의 빛나는 코어를 부수는 슈팅 게임입니다. 2편은 완전 3D 공간이고, 빠르게 처치하면 제한 시간이 되돌아옵니다.",
        en: "A shooter about destroying each enemy's glowing core. The sequel runs in full 3D and refunds time on a quick kill.",
      },
      howTo: [
        { ko: "코어를 노리고 짧게 끊어 쏘세요. 발사 버튼을 계속 누르면 이동 속도가 느려져 오히려 손해입니다.", en: "Aim at the core and fire in bursts — holding the button down slows the ship and costs you more time than it saves." },
        { ko: "빠르게 처치할수록 시간이 되돌아오므로, 안전하게 오래 쏘는 것보다 코어에 붙어 빨리 끝내는 편이 총 점수에 유리합니다.", en: "Fast kills give time back, so closing on the core and finishing quickly beats plinking safely from range." },
        { ko: "박셀리오스 2를 세 번 플레이하면 클럽 세가 점장이 말을 걸어 1편 기체를 설치해 줍니다. 1편을 하려면 먼저 2편을 세 번 돌리세요.", en: "Play Boxcelios 2 three times and the Club SEGA manager installs the original cabinets — that is the only way to unlock Boxcelios 1." },
      ],
      videos: [
        { title: { ko: "박셀리오스 2 아케이드 플레이", en: "Boxcelios 2 arcade playthrough" }, url: YT("lNYJbYKFtc4") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Boxcelios (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/boxcelios" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
      achievementSlug: "achievement_33",
    },
    {
      slug: "club-sega-boxcelios",
      name: { ko: "클럽 세가 — 박셀리오스 (1편)", en: "Club SEGA — Boxcelios (the original)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 4,
      location: { ko: "카무로초 — 클럽 세가 (박셀리오스 2를 3회 플레이 후 설치)", en: "Club SEGA, Kamurocho — installed after three plays of Boxcelios 2" },
      summary: {
        ko: "2편과 달리 기체가 오른쪽으로만 향하고, 빠른 처치로 시간이 되돌아오지 않습니다. 공간도 진짜 3D가 아닌 유사 2D입니다.",
        en: "Unlike the sequel the ship only faces right, quick kills do not refund time, and the space is pseudo-2D rather than true 3D.",
      },
      howTo: [
        { ko: "레이저는 경로에서 처음 닿는 부위에 명중합니다. 배경처럼 보이는 금속도 그대로 막으므로, 코어 앞에 아무것도 없는 각을 찾아야 합니다.", en: "The laser hits the first part of the enemy it passes, even the bits that look like background — you need a line with nothing in front of the core." },
        { ko: "적이 위아래로 흔들립니다. 배를 코어와 같은 높이에 맞추면 첫 발에 끝나므로, 흔들림을 읽고 코어가 올 자리로 미리 이동하세요.", en: "Enemies bob up and down; line the ship up level with the core and it dies in one shot, so move to where the core is about to be." },
        { ko: "시작 시 2초의 여유는 1편에도 있지만 그 이후로는 시간이 계속 줄기만 합니다. 2편보다 실수의 대가가 큽니다.", en: "You still get the two seconds at the start, but after that the clock only runs down — mistakes cost more than in the sequel." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Boxcelios (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/boxcelios" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
      achievementSlug: "achievement_33",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 5,
      location: { ko: "카무로초 — 마작 오키드 팰리스", en: "Orchid Palace mahjong parlour, Kamurocho" },
      summary: {
        ko: "일반 대국 외에 캐릭터별 토너먼트가 있습니다. 아키야마는 스자쿠 컵, 사에지마는 뱟코 컵처럼 네 주인공이 각각 자기 대회를 따로 올라갑니다.",
        en: "Beyond ordinary play there is a tournament per character — Akiyama has the Suzaku Cup, Saejima the Byakko Cup, and so on, each climbed separately.",
      },
      howTo: [
        { ko: "토너먼트 참가비 50,000엔은 최초 1회뿐이고 이후 무제한입니다. 1위는 2랭크 상승, 2위는 1랭크, 3위는 유지, 4위는 1랭크 하락입니다.", en: "The ¥50,000 entry is a one-off; after that you play as much as you like. First place climbs two ranks, second one, third holds, fourth drops one." },
        { ko: "판이 나쁘면 터치패드로 나가도 벌점이 전혀 없습니다. 랭크는 게임이 끝나야 갱신되므로, 크게 뒤졌으면 그냥 나가고 다시 시작하세요.", en: "Quitting a bad game costs nothing — rank only updates when a game finishes, so bail and restart when you fall behind." },
        { ko: "랭크 보상은 25위 이탈리안 콜로뉴, 20위 은 접시, 15위 럭키 브레이슬릿, 10위 캐비아 스킨 백, 5위 금 접시, 3위 스위스 워치, 1위 토너먼트 컵입니다. 컵은 에비스 전당포에서 500,000엔에 팔립니다.", en: "Rank prizes: 25 Italian Cologne, 20 Silver Plate, 15 Lucky Bracelet, 10 Caviar Skin Bag, 5 Gold Plate, 3 Swiss Watch, 1 the Tournament Cup — which Ebisu Pawn buys for ¥500,000." },
      ],
      videos: [
        { title: { ko: "칠대자(Seven Pairs) 트로피 가이드", en: "Seven Pairs trophy guide" }, url: YT("k2xeGI90xG8") },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Mahjong (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/mahjong" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "golf",
      name: { ko: "골프", en: "Golf" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "카무로초 — 골프 연습장", en: "The golf range, Kamurocho" },
      summary: {
        ko: "경기와 니어핀 콘테스트가 있습니다. 니어핀은 2번 홀에서만 치며, 클럽과 공을 따로 구해 성능을 바꿀 수 있습니다.",
        en: "A competition and a Near-Pin contest, the latter played entirely on Hole 2 — and you can find better clubs and balls to change the feel.",
      },
      howTo: [
        { ko: "2번 홀은 피칭 웨지 하나로 충분합니다. 바람이 등지면 풀파워로 치되 임팩트 지점을 아래로 내려 굴러가지 않게 하고, 맞바람이 셀 때만 파워를 줄이세요.", en: "Hole 2 only needs the pitching wedge — full power with the impact point lowered so it does not run on, and less than full only into a real headwind." },
        { ko: "니어핀 경품은 300점 9번 아이언, 400점 우든 드라이버, 550점 티타늄 드라이버, 750점 스위스 워치, 1,000점 앤티크 체인메일입니다.", en: "Near-Pin prizes come at 300 (9-Iron), 400 (Wooden Driver), 550 (Titanium Driver), 750 (Swiss Watch) and 1,000 (Antique Chain Mail)." },
        { ko: "클럽 세트는 코인로커에 있습니다. 레드 샤크(파워·임팩트↑, 컨트롤↓)는 지하 로커 J1, 블루 폭스(컨트롤·임팩트↑, 파워↓)는 H1, 티타늄 코어 볼(파워↑, 컨트롤↓)은 H5입니다. 골드 호크는 프리미엄 어드벤처에서 나오미의 관의 밥에게 받습니다.", en: "The club sets are in lockers: Red Shark (power and impact up, control down) in Underground J1, Blue Fox (control and impact up, power down) in H1, Titanium Core Ball (power up, control down) in H5. Gold Hawk comes from Bob at Naomi's Palace in Premium Adventure." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Golf (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/golf" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "fishing",
      name: { ko: "낚시", en: "Fishing" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "카무로초 — 부두 낚시터", en: "The pier fishing spot, Kamurocho" },
      summary: {
        ko: "어종은 18종이며 시간대와 거리로 갈립니다. 미끼 종류는 사거리만 맞으면 무엇이든 상관없습니다.",
        en: "Eighteen species, decided by time of day and cast distance. Bait type does not matter so long as the fish is inside its range.",
      },
      howTo: [
        { ko: "릴링은 R1을 누른 채 물고기가 헤엄치는 방향으로 스틱을 기울입니다. 텐션 미터가 가득 차거나 완전히 비면 실패이므로, 너무 오르면 L1을 누른 채 같은 방향으로 계속 당겨 빠르게 내리세요. R1을 놓아 내려도 됩니다.", en: "Hold R1 and pull the stick the way the fish is swimming. Keep the tension meter off both ends — if it climbs, hold L1 and keep pulling the same way, or just release R1, to drain it." },
        { ko: "먼 거리 대물은 시간대까지 맞아야 합니다. 실러캔스 140~150m(낮·석양), 참치 130~150m(아무 때), 청새치 120~150m(석양·밤), 산갈치 130~140m(석양·밤), 대게 100~150m입니다.", en: "The big catches need distance and time: Coelacanth 140-150 m (day/sunset), Tuna 130-150 m (any), Marlin 120-150 m (sunset/night), Giant Oarfish 130-140 m (sunset/night), Giant Crab 100-150 m." },
        { ko: "가까운 거리에도 어종이 있습니다. 새우 0~10m(밤), 붕장어 0~20m(석양), 광어 30~60m(석양), 문절망둑 30~60m(낮·밤), 백상아리 50~60m(낮)입니다.", en: "The close range has its own list: Prawn 0-10 m (night), Conger Eel 0-20 m (sunset), Flounder 30-60 m (sunset), Goby 30-60 m (day/night), Great White Shark 50-60 m (day)." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Fishing (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/fishing" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "aromatherapy-massage",
      name: { ko: "아로마테라피 마사지", en: "Aromatherapy Massage" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "카무로초 — 마사지 가게", en: "The massage parlour, Kamurocho" },
      summary: {
        ko: "오른쪽 미터의 바가 위끝이나 아래끝에 닿지 않게 유지하는 게임입니다. 코스는 네 가지이고 시간이 각각 다릅니다.",
        en: "Keep the bar on the right-hand meter off both ends. Four courses, each a different length.",
      },
      howTo: [
        { ko: "바가 분홍색으로 맥동하면 곧 올라가고, 파란색이면 곧 내려갑니다. 바 자체를 보고 반응하지 말고 이 맥동 색을 보고 미리 대응하세요.", en: "A pink pulse means the bar is about to rise, a blue pulse that it is about to fall — react to the pulse colour, not to the bar moving." },
        { ko: "코스 길이는 스탠더드 50초, 디럭스 90초, VIP 오일 90초, 슈퍼 VIP 약 105초입니다. 슈퍼 VIP의 목표 점수는 30,000점 정도로 알려져 있습니다.", en: "Course lengths are 50 seconds for Standard, 90 for Deluxe, 90 for VIP Oil and about 105 for Super VIP — the Super VIP target is understood to be around 30,000 points." },
        { ko: "바가 높을수록 점수가 빨리 오릅니다. 초반에는 위쪽에 붙여 벌고, 속도가 붙는 후반에는 가운데로 내려와 버티는 배분이 안전합니다.", en: "The higher the bar the faster you score, so ride high early and drift to the middle once it speeds up." },
        { ko: "슈퍼 VIP는 첫 파란 맥동이 예상과 반대로 바를 위로 강하게 밀어 올립니다. 첫 신호에서 방심하지 마세요.", en: "On Super VIP the very first blue pulse shoves the bar hard upward instead of down — do not trust it on the first signal." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Aromatherapy Massage (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/aromatherapy-massage" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "pachinko",
      name: { ko: "파친코", en: "Pachinko" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "카무로초 — 파친코 홀", en: "The pachinko parlour, Kamurocho" },
      summary: {
        ko: "기종은 버추어 파이터와 알라딘 데스티니 두 가지입니다. 사실상 이카사마 아이템 없이는 조건을 채우기 어렵습니다.",
        en: "Two machines, Virtua Fighter and Aladdin Destiny. Realistically the row needs a cheat item.",
      },
      howTo: [
        { ko: "이카사마 「일확천금 부적」은 첫 스핀을 무조건 잭팟으로 만듭니다. 잭팟이 이어지면 그대로 조건을 채울 수 있고, 실제로 다섯 번의 잭팟이면 충분했다는 보고가 있습니다.", en: "The Get-Rich-Quick Charm forces a jackpot on your very first spin, and a chain of jackpots from there is enough — five was reportedly all it took." },
        { ko: "버추어 파이터 기종이 더 다루기 쉽습니다. 연속으로 대전이 걸리면 리듬이 생겨 잭팟이 이어지기 쉽고, 알라딘 데스티니는 플레이어가 개입할 여지가 적습니다.", en: "The Virtua Fighter machine is the more controllable of the two — back-to-back fights build a rhythm, whereas Aladdin Destiny gives you little say." },
        { ko: "알라딘 데스티니에서 스핀이 4개까지 쌓이면 ○로 구슬 발사를 멈추세요. 그 이상 쌓인 스핀은 그냥 버려집니다.", en: "On Aladdin Destiny, stop the ball flow with circle once four spins are stocked — anything beyond that is simply wasted." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Pachinko (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/pachinko" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "hostess-maker",
      name: { ko: "호스티스 메이커", en: "Hostess Maker" },
      category: { ko: "경영 시뮬레이션", en: "Management sim" },
      difficulty: 4,
      location: { ko: "카무로초 — 캬바쿠라 에리제", en: "Club Elise, Kamurocho" },
      summary: {
        ko: "나나미·히요리·쿄코 세 명을 No.1으로 키우는 육성 콘텐츠입니다. 각각 별도의 공략 장이 있을 만큼 분량이 있습니다.",
        en: "Train Nanami, Hiyori and Kyoko to No.1 — each substantial enough to have its own chapter in the guide.",
      },
      howTo: [
        { ko: "세 명을 No.1으로 만들면 캬바쿠라 명함 컴플리션의 마지막 세 장이 열립니다. 명함 헌터를 노린다면 이쪽을 먼저 진행해야 합니다.", en: "Making all three No.1 is what unlocks the last three hostess cards — if you are after Card Hunter, this side has to come first." },
        { ko: "교육은 대화 선택지와 접객 지시로 이루어집니다. 손님의 요구를 읽고 그에 맞는 지시를 내리는 것이 핵심이며, 잘못된 지시는 호감도를 깎습니다.", en: "Training runs on conversation choices and instructions during service — read what the customer wants and answer to it; wrong calls cost affection." },
        { ko: "나나미는 타니무라, 히요리와 쿄코는 키류가 담당합니다. 담당 주인공이 아닌 상태로는 진행할 수 없습니다.", en: "Nanami belongs to Tanimura, Hiyori and Kyoko to Kiryu — you cannot progress a girl while playing the wrong character." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Hostess Maker (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/hostess-maker" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
      achievementSlug: "achievement_18",
    },
    {
      slug: "batting-center",
      name: { ko: "배팅 센터", en: "Batting Center" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "카무로초 — 요시다 배팅 센터", en: "Yoshida Batting Center, Kamurocho" },
      summary: {
        ko: "패널을 맞혀 점수를 내는 방식이며, 코스마다 구질과 구속이 고정돼 있습니다.",
        en: "You score by hitting panels, and each course runs a fixed pitch script.",
      },
      howTo: [
        { ko: "커서를 코스에 맞춘 뒤, 투구와 함께 줄어드는 커서가 공 크기와 겹치는 순간에 휘두르는 것이 정타입니다.", en: "Line the cursor up, then swing at the moment the shrinking cursor matches the ball — that is the sweet spot." },
        { ko: "구질별 구속대가 다릅니다. 패스트볼이 가장 빠르고 커브가 가장 느리므로, 커브에서 타이밍을 당기지 않는 것이 점수를 지키는 핵심입니다.", en: "Speeds differ by pitch — fastballs quickest, curves slowest — and not rushing the curves is what protects the score." },
        { ko: "상위 코스는 하위 코스에서 일정 점수를 내야 열립니다. 점수 구간마다 경품이 다르니 목표 경품이 있으면 필요한 점수를 미리 확인하세요.", en: "Higher courses unlock by scoring on the lower ones, and prizes are banded by score — check the band you need before grinding." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Batting Center (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/batting-center" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "bowling",
      name: { ko: "볼링", en: "Bowling" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 마하볼", en: "Mach Bowl, Kamurocho" },
      summary: {
        ko: "일반 게임과 스플릿 게임이 있습니다. 스트라이크를 안정적으로 내는 것이 모든 조건의 출발점입니다.",
        en: "A normal game and a Split Game — reliable strikes are the basis of every row.",
      },
      howTo: [
        { ko: "스트라이크는 1번 핀 옆의 포켓을 세게, 약간의 스핀과 함께 치는 것이 정석입니다. 스핀은 던지는 동안 왼쪽 스틱을 아주 살짝 기울이면 걸립니다.", en: "Strikes come from the pocket beside the head pin, hit hard with a little spin — a very slight left-stick nudge during the approach." },
        { ko: "공은 방향키 위아래로 고릅니다. 가벼운 공은 제어가 쉽고 무거운 공은 힘이 세니, 스트라이크를 노릴 때는 무거운 쪽이 유리합니다.", en: "Up and down pick the ball: light steers easier, heavy hits harder — take heavy when hunting strikes." },
        { ko: "스플릿 게임은 주어진 핀 조합을 한 번의 투구로 처리해야 합니다. 어려운 조합에 공을 낭비하지 말고 쉬운 것부터 지우세요.", en: "Split Game wants a given combination down in one throw — clear the easy ones first rather than burning balls on the hard splits." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Bowling (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/bowling" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "pool",
      name: { ko: "당구", en: "Pool" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 3,
      location: { ko: "카무로초 — 당구장", en: "The pool hall, Kamurocho" },
      summary: {
        ko: "나인볼 등 정규 게임 외에 특정 샷 종류가 컴플리션 대상입니다.",
        en: "Alongside nine-ball and the rest, specific shot types are what the list asks for.",
      },
      howTo: [
        { ko: "캐롬은 큐볼이 목적구를 맞힌 뒤 다른 공을 맞혀 그 공이 들어가는 샷, 콤비네이션은 목적구가 다른 공을 맞혀 그 공이 들어가는 샷입니다.", en: "A carom is cue to object ball then on to another ball which drops; a combination is the object ball doing the hitting." },
        { ko: "혼자 플레이로 나인볼을 골라 공을 원하는 배치로 밀어 두고, 큐볼을 일부러 포켓에 넣어 다음 샷 위치를 잡는 것이 가장 확실합니다.", en: "Play Alone on nine-ball, nudge the balls into shape, then scratch on purpose to place the cue ball where you want it." },
        { ko: "실전 대국에서 우연히 나오길 기다리면 시간만 갑니다. 셋업을 만들어 확정적으로 성공시키는 편이 훨씬 빠릅니다.", en: "Waiting for these to happen in a real match wastes time — building the setup and taking a guaranteed shot is far quicker." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Pool (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/pool" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가 / 바", en: "Club SEGA and bars, Kamurocho" },
      summary: {
        ko: "01·크리켓·카운트업 세 종목이 있고, 컴플리션은 해트트릭 등 특정 성과를 요구합니다.",
        en: "Three modes — 01, Cricket and Count-Up — with the list asking for feats such as hat-tricks.",
      },
      howTo: [
        { ko: "해트트릭은 한 라운드에 세 발 모두 BULL입니다. 혼자 01 게임을 고르면 라운드가 많아 반복해서 노릴 수 있습니다.", en: "A hat-trick is three bulls in a round; a solo 01 game gives the most rounds to keep trying." },
        { ko: "싱글은 그 구역 점수, 더블 2배, 트리플 3배이고 BULL은 50점입니다. 01에서는 트리플 20보다 BULL이 안정적입니다.", en: "Singles score the sector, doubles double, triples treble, bull is 50 — in 01 the bull is steadier than treble 20." },
        { ko: "크리켓은 한 구역을 세 번 맞혀 점유합니다. 더블은 2회, 트리플은 3회로 계산되므로 트리플 한 방이면 즉시 점유됩니다.", en: "Cricket claims a number on three hits, with doubles counting two and triples three — one triple claims it outright." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Darts (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/darts" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "shogi",
      name: { ko: "쇼기 (장기)", en: "Shogi" },
      category: { ko: "도박·보드", en: "Gambling / board" },
      difficulty: 3,
      location: { ko: "카무로초 — 노상 장기", en: "Street shogi, Kamurocho" },
      summary: {
        ko: "컴플리션은 「무르기를 쓰지 않고 승리」가 기준입니다.",
        en: "Completion is about winning without a take-back.",
      },
      howTo: [
        { ko: "가장 약한 상대를 고르고 무르기를 한 번도 쓰지 마세요. 한 번이라도 쓰면 그 판은 조건에서 제외됩니다.", en: "Pick the weakest opponent and never take a move back — one use disqualifies the game." },
        { ko: "규칙을 모르면 정해진 국면에서 최선수를 찾는 문제 형식으로 감을 잡는 편이 실전보다 빠릅니다.", en: "If shogi is new, the set-position problems teach it faster than full ranked games." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Shogi (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/shogi" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "karaoke",
      name: { ko: "카라오케", en: "Karaoke" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 2,
      location: { ko: "카무로초 — 가라오케관", en: "Karaoke bar, Kamurocho" },
      summary: {
        ko: "버튼 타이밍 리듬 게임입니다. 곡마다 부르는 사람이 다르고, 동행이 있으면 듀엣이 됩니다.",
        en: "A button-timing rhythm game. Who sings depends on the song, and bringing a companion turns it into a duet.",
      },
      howTo: [
        { ko: "노트가 라인에 닿는 순간이 아니라 커서에 겹치는 순간이 판정 기준입니다. 「Hold」는 끝까지 누르고 「Rapid」는 연타입니다.", en: "Judge on the note overlapping the cursor, not reaching the lane. Hold means hold to the end; Rapid means mash." },
        { ko: "추임새(백업) 곡에서는 「간단」과 「신나게」 중 「신나게」를 골라야 상위 점수가 나옵니다. 간단으로는 점수 상한이 모자랍니다.", en: "On backing songs pick Lively rather than Simple — Simple cannot reach the top scores." },
        { ko: "네 주인공이 각각 부를 수 있는 곡이 다릅니다. 캐릭터를 바꿀 때마다 곡 목록을 확인하세요.", en: "Each of the four protagonists has his own song list, so check the menu whenever you switch character." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: Karaoke (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/karaoke" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
    },
    {
      slug: "club-sega-ufo-catcher",
      name: { ko: "클럽 세가 — UFO 캐처", en: "Club SEGA — UFO Catcher" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 — 클럽 세가", en: "Club SEGA, Kamurocho" },
      summary: {
        ko: "크레인으로 경품을 뽑는 종목입니다. 컴플리션은 서로 다른 경품을 모으는 방식이라 같은 인형을 반복해 뽑아도 진행되지 않습니다.",
        en: "The crane game. Completion counts distinct prizes, so duplicates of the same plush do nothing.",
      },
      howTo: [
        { ko: "원하는 인형이 진열에 없으면 카운터 직원에게 재입고를 부탁하세요. 진열은 무작위로 갱신되므로 반복하면 결국 나옵니다.", en: "If the plush you need is not in the cabinet, ask the attendant to restock — the line-up is randomised and eventually comes round." },
        { ko: "잡는 방식은 모양에 따라 다릅니다. 발이나 귀 같은 가는 부분에 걸거나, 가장 넓은 부분을 감싸거나, 가장 높은 부분을 잡아 넘어지지 않게 하는 세 가지를 상황에 맞게 쓰세요.", en: "How you grab depends on shape: hook a thin part, wrap the widest part, or take it at its tallest so it cannot tip out." },
        { ko: "실패했을 때 인형이 어떻게 빠져나갔는지 보고 다음 시도에서 그 지점을 피하는 것이 가장 실용적인 개선법입니다.", en: "Watch how a prize slips out of the claw and avoid that grip next attempt — that is the practical way to improve." },
      ],
      source: [
        { label: "GameFAQs — Yakuza 4 Remastered: UFO Catcher (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/ufo-catcher" },
        { label: "GameFAQs — Yakuza 4 Remastered: Completion (CyricZ)", url: "https://gamefaqs.gamespot.com/ps4/239456-yakuza-4-remastered/faqs/78045/completion" },
      ],
      achievementSlug: "achievement_33",
    },
  ],
};

