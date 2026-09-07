import type { MinigamesData } from "./types";

const YT = (id: string) => `https://www.youtube.com/watch?v=${id}`;

// Minigame guides for Lost Judgment. Unlock conditions (chapter plus the
// School Stories leadership stat and level), rules, controls and prize/mission
// data come from ゲーム攻略マン's per-play-spot and per-club pages, cited on
// each entry.
export const lostJudgmentMinigames: MinigamesData = {
  appId: 2058190,
  intro: {
    ko: "로스트 저지먼트는 카무로초와 이진초(요코하마) 양쪽을 무대로, 세이료 고교의 「유스 드라마(School Stories)」가 미니게임의 절반을 차지합니다. 유스 드라마는 야가미의 「지도력」 수치(팀워크·집중력·배짱·어필력)로 다음 드라마가 열리는 구조라, 한 부활동이 막히면 다른 부활동을 진행해 지도력을 올리는 것이 정해진 흐름입니다. 그 바깥으로 드론 레이스, VR 스고로쿠 「다이큐」, 클럽세가 아케이드, 도박장과 카지노, 다트가 있습니다.",
    en: "Lost Judgment runs across Kamurocho and Ijincho, and Seiryo High's School Stories make up half its minigames. Those unlock off Yagami's leadership stats — teamwork, focus, guts and appeal — so when one club stalls, the intended move is to push a different club until the stat catches up. Outside school there are drone races, the Dice & Cube VR board game, the Club SEGA cabinets, the gambling den and casino, and darts.",
  },
  minigames: [
    {
      slug: "school-stories",
      name: { ko: "유스 드라마 / 미스터리 연구회", en: "School Stories / the Mystery Research Club" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 4,
      location: { ko: "세이료 고교 서탑 1F — 미스터리 연구회 부실 (메인 케이스 2장)", en: "The Mystery Research Club room, West Tower 1F, Seiryo High — Main Case Chapter 2" },
      summary: {
        ko: "야가미가 세이료 고교 각 부활동의 외부 지도원으로 잠입하는 학원 드라마 미션군의 허브입니다. 2장에서 부장 아마사와 쿄코를 만나 폐부 위기를 막으며 시작되고, 이후 쿄코가 각 부활동 조사를 의뢰하는 형태로 이어집니다. 메인 케이스 진행에는 영향을 주지 않고, 사이드 케이스처럼 원하는 때에 진행할 수 있습니다.",
        en: "The hub for the school-drama missions, where Yagami infiltrates Seiryo High's clubs as an outside advisor. It starts in Chapter 2 by saving the Mystery Research Club from closure, after which its president Kyoko Amasawa assigns you the other clubs. None of it affects the Main Case — like Side Cases, you take it at your own pace.",
      },
      howTo: [
        { ko: "새 유스 드라마는 야가미의 「지도력」으로 열립니다. 지도력에는 팀워크·집중력·배짱·어필력 4종이 있고, 부활동마다 잘 오르는 항목이 다릅니다. 팀워크는 댄스부·로봇부, 집중력은 로봇부·e스포츠부·복싱·카지노·사진부, 배짱은 복싱·카지노·폭주족, 어필력은 댄스부·스케보 커뮤니티·폭주족·걸즈바입니다.", en: "New School Stories unlock off leadership: teamwork, focus, guts and appeal, each raised by different clubs. Teamwork comes from dance and robotics; focus from robotics, e-sports, boxing, the casino and photography; guts from boxing, the casino and the biker gang; appeal from dance, skateboarding, the biker gang and the girls' bar." },
        { ko: "진행이 멈추면 다른 유스 드라마를 밀어 지도력을 올리는 것이 정해진 해법입니다. 출처 사이트의 견해로는 해금 조건이 특정 지도력 레벨 단독이라기보다 전 유스 드라마의 진척(%) 합계와 본편 진척도가 함께 작용할 가능성이 높다고 합니다.", en: "When one stalls, push another — that's the intended loop. The guide's own reading is that the gate is probably the summed progress percentage across all School Stories plus main-story progress, rather than any single leadership level." },
        { ko: "다음에 무엇을 해야 하는지는 스마트폰의 「ToDo」 앱 유스 드라마 탭에서 확인합니다. 맵에서는 이벤트 발생 지점이 초록색 폴더 아이콘으로 표시됩니다.", en: "The phone's ToDo app has a School Stories tab telling you what's next, and event locations show on the map as green folder icons." },
        { ko: "유스 드라마를 끝까지 컴플리트하려면 메인 케이스 9장의 요코하마 츠쿠모과에서 스기우라와 합류하는 지점까지 진행해야 합니다. 그 전에는 아무리 지도력을 올려도 끝까지 갈 수 없습니다.", en: "Finishing every School Story requires the main case to reach Chapter 9, where you rejoin Sugiura at the Yokohama 99th; no amount of leadership grinding completes them before that." },
      ],
      source: { label: "ゲーム攻略マン — ユースドラマ攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/" },
      achievementSlug: "coyote_professor_clear",
    },
    {
      slug: "dance-club",
      name: { ko: "댄스부 (리듬)", en: "Dance club (rhythm)" },
      category: { ko: "음악·리듬", en: "Music / rhythm" },
      difficulty: 4,
      location: { ko: "세이료 고교 지하 1F 댄스부 연습장 (메인 케이스 2장)", en: "The dance studio, Seiryo High B1 — Main Case Chapter 2" },
      summary: {
        ko: "댄스 콘테스트 우승을 노리는 댄스부 「세이료 래빗츠」의 어드바이저를 맡습니다. 화면 위에서 떨어지는 아이콘에 맞춰 버튼을 누르는 리듬 게임으로, QUALITY 게이지가 CLEAR 라인을 넘으면 클리어입니다.",
        en: "You advise Seiryo Rabbits, the dance club chasing a contest win. It's a falling-note rhythm game: clear when the Quality gauge finishes above the clear line.",
      },
      howTo: [
        { ko: "□×△○를 타이밍에 맞춰 누르면 QUALITY 게이지가 오릅니다. 선으로 이어진 노트는 두 버튼 동시 누르기, 세로로 긴 노트는 길이만큼 길게 누르기입니다.", en: "Hit square, cross, triangle and circle on time to raise Quality. Notes joined by a line are two-button simultaneous presses; tall notes are holds for their full length." },
        { ko: "의상을 입으면 QUALITY 게이지가 오르기 쉬워집니다. 의상은 요코하마 스낵가의 「핫슬 양품점」에서 삽니다. 판정이 아슬아슬하다면 곡 실력보다 의상부터 챙기는 편이 빠릅니다.", en: "Costumes make the Quality gauge climb faster, and they're sold at the Hustle Clothing Store in Yokohama's snack district — when you're just short, buy one rather than re-grind the chart." },
        { ko: "레슨 시작 전에 야가미의 오리지널 안무 「EX 안무」를 설정할 수 있습니다. EX 안무는 스토리 진행이나 거리 탐색에서 얻는 「댄스 교본」을 읽어 습득하고, 댄스 중 십자키 ←·↓·→ 중 하나로 발동하면 종류별로 다른 유리한 효과가 붙습니다.", en: "Before a lesson you can equip an EX Routine — learned by reading Dance Manuals found in the story and around town — and trigger it mid-song with left, down or right on the d-pad for a per-routine advantage." },
        { ko: "댄스 후 리절트에서 악곡 레벨 게이지가 오르고, MAX가 되면 다음 대회로 넘어갑니다. 유스 드라마가 진행되지 않으면 레슨을 반복해 악곡 레벨을 올리세요.", en: "Results raise the song's level gauge, and maxing it advances you to the next competition — if the story won't move, repeat lessons to raise the song level." },
      ],
      videos: [
        { title: { ko: "댄스 풀콤보 (Girls) - 100% 트로피 가이드", en: "Dance Full Combo (Girls) - 100% Trophy Guide" }, url: YT("Xn2heH19LMo") },
        { title: { ko: "댄스부 사이드 스토리 풀 워크스루", en: "Dance Club side story full walkthrough" }, url: YT("FLkZUrHF-KU") },
      ],
      source: { label: "ゲーム攻略マン — ユースドラマ『ダンス部』攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/dance.html" },
      achievementSlug: "coyote_dance_clear",
    },
    {
      slug: "boxing-gym",
      name: { ko: "복싱 (토도로키 권투 짐)", en: "Boxing (Todoroki Boxing Gym)" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 4,
      location: { ko: "이진초 사쿠라가와도리 토도로키 권투 짐 — 3장, 지도력 「집중력 Lv.2」", en: "Todoroki Boxing Gym on Sakuragawa Street, Ijincho — Chapter 3, Focus Lv.2" },
      summary: {
        ko: "필드 전투와는 다른 전용 복싱 액션입니다. 스파링과 시합은 1라운드 3분·4라운드제이고, 무승부는 펀치 히트 수와 다운 수로 판정합니다.",
        en: "A dedicated boxing action mode, separate from field combat. Sparring and matches run four three-minute rounds, with draws decided on punches landed and knockdowns.",
      },
      howTo: [
        { ko: "체력은 화면 위쪽의 초록 게이지입니다. 비면 다운되고 1라운드에 3번 다운하면 시합 종료입니다. 다운 중에는 ×연타로 복귀할 수 있는데, 필요한 연타 횟수가 남은 스태미나에 따라 달라집니다. 체력은 인터벌에 회복됩니다.", en: "Health is the green bar up top; emptying it knocks you down, and three knockdowns in a round ends the fight. You get up by mashing cross, and how much mashing depends on your remaining stamina. Health refills between rounds." },
        { ko: "스태미나는 몸통 부근의 원형 게이지입니다. 다 떨어지면 연속 공격이 불가능해지고, 고갈 직전에 스트레이트나 훅을 맞으면 스태미나 절단이 나 한동안 움직일 수 없게 됩니다.", en: "Stamina is the circular gauge at your body. Empty it and you can't string attacks; take a straight or hook while nearly empty and you seize up entirely for a while." },
        { ko: "스태미나가 줄어드는 조건은 모든 공격(강할수록 소모 큼), 펀치 헛침(소모가 큼), 회피, 상대의 보디 공격 피격입니다. 회복은 아무것도 하지 않으면 서서히, 그리고 상대의 보디 공격을 가드하면 소폭 회복입니다.", en: "Stamina drains on every punch (harder punches cost more), on whiffs (expensive), on dodges, and when you take body shots. It regenerates slowly when idle, and blocking a body shot gives a small refund." },
        { ko: "좌스틱 상하로 머리와 보디를 나눠 칠 수 있습니다. 상대가 가드하지 않은 쪽을 노리는 것이 기본입니다. 펀치는 □ 잽(약하지만 빠르고 연발 가능), △ 스트레이트(강하고 느리며 2연발 가능), ○ 훅(강하고 가드를 무너뜨리는 큰 단발)이고 L1이 가드입니다.", en: "Push the left stick up or down to split head and body shots and aim wherever they aren't guarding. Square is a fast, weak, spammable jab; triangle a strong slow straight that chains twice; circle a big single hook that breaks guard; L1 blocks." },
      ],
      videos: [
        { title: { ko: "복싱 짐 - 3열 상대 전원 (vs 와키타)", en: "Boxing Gym - all 3rd-row opponents (vs Wakita)" }, url: YT("mq4PxEdNTYs") },
      ],
      source: { label: "ゲーム攻略マン — ユースドラマ『ボクシング』攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/boxing-gym.html" },
      achievementSlug: "coyote_boxing_claer",
    },
    {
      slug: "robotics-club",
      name: { ko: "로봇부 (진지 뺏기 로봇 배틀)", en: "Robotics club (territory robot battle)" },
      category: { ko: "기타", en: "Misc" },
      difficulty: 3,
      location: { ko: "세이료 고교 동탑 4F 시청각 준비실 (메인 케이스 3장)", en: "The AV prep room, East Tower 4F, Seiryo High — Main Case Chapter 3" },
      summary: {
        ko: "기업 주최 대회 「RE 로보 콘테스트」 우승을 노리는 로봇부에 잠입합니다. 미니게임은 진지 뺏기형 배틀 액션으로, 아군 파랑·적 빨강 진영으로 나뉘어 각 3대의 로봇으로 영역을 넓힙니다.",
        en: "You infiltrate the robotics club, which is chasing a win at the corporate-run RE Robot Contest. Its minigame is a territory battle: blue for you, red for them, three robots a side expanding their area.",
      },
      howTo: [
        { ko: "제한 시간까지 더 많은 영역을 점령한 팀이 승리하고, 이기면 전리품으로 소재를 얻습니다. 그 소재로 파츠를 개발해 다음 시합의 기체를 강화하는 구조입니다.", en: "Whoever holds more area when the clock runs out wins, and winning drops materials — which become the parts that make the next machine stronger." },
        { ko: "다른 학교와의 연습 시합에서 결장한 학생 대신 야가미가 조종을 대행해 성공시키면, 부장 오키테가와 도무에게 인정받으며 드라마가 진행됩니다.", en: "The story turns on Yagami subbing in for an absent student at a practice match against another school — win it and club president Domu Okitegawa starts taking him seriously." },
        { ko: "로봇부는 「팀워크」와 「집중력」이 잘 오르는 부활동입니다. 다른 유스 드라마가 이 두 지도력에서 막혀 있다면 여기부터 미세요.", en: "Robotics is one of the best clubs for raising both teamwork and focus, so run it when another School Story is gated on either." },
      ],
      source: { label: "ゲーム攻略マン — ユースドラマ『ロボット部』攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/robot.html" },
      achievementSlug: "coyote_robot_clear",
    },
    {
      slug: "biker-death-race",
      name: { ko: "폭주족 「메이드 인 헤븐」 (데스 레이스)", en: "Biker gang Made in Heaven (Death Race)" },
      category: { ko: "레이스", en: "Racing" },
      difficulty: 4,
      location: { ko: "이진초 — 3장, 지도력 「배짱 Lv.2」 / 바이크 개러지는 진나이 고가 앞 거리", en: "Ijincho — Chapter 3 at Guts Lv.2; the bike garage is on the street in front of the Jinnai overpass" },
      summary: {
        ko: "이진초 최대 폭주족 「메이드 인 헤븐」의 데스 레이스입니다. 방해와 폭행이 허용되는 위험 주행으로, 헤드보다 먼저 골인하면 승리입니다.",
        en: "The death races of Ijincho's biggest bike gang: deliberately dangerous runs where blocking and violence are legal, and you win by finishing ahead of the Head.",
      },
      howTo: [
        { ko: "레이스는 헤드가 앞서 나간 상태에서 시작합니다. 헤드가 있는 곳까지 가려면 태클과 부스트로 잡몹 바이커를 쓰러뜨리며 거리를 좁혀야 하고, 헤드는 각자 특징적인 방해를 걸어옵니다.", en: "The Head starts out in front. Closing the gap means tackling and boosting through the mob riders on the way, and each Head throws their own signature interference at you." },
        { ko: "조작은 좌스틱 ←/→ 좌우 이동, R2 액셀, L2 브레이크, 좌스틱 ←/→ + × 드리프트, 좌스틱 ↓ 윌리, ○ 부스트, 좌스틱 ←/→ + □ 태클입니다.", en: "Controls: left stick to move side to side, R2 accelerate, L2 brake, stick plus cross to drift, stick down for a wheelie, circle to boost, and stick plus square to tackle." },
        { ko: "초반 데스 레이스 튜토리얼에서 카나스기에게 이기면 아마사와의 연줄로 바이크 개러지를 쓸 수 있게 됩니다. 개러지에서는 커스터마이즈(업그레이드·컬러), 주행 연습(코스 확인), 데스 레이스, 차종 변경을 고를 수 있습니다.", en: "Beating Kanasugi in the tutorial race opens the bike garage through Amasawa's connections: customisation (upgrades and colour), practice runs to learn a course, the death races themselves, and swapping bikes." },
        { ko: "폭주족은 「배짱」과 「어필력」이 잘 오릅니다. 코스를 모르면 이길 수 없는 구간이 있으니 주행 연습을 먼저 돌리세요.", en: "The gang raises guts and appeal. Some stretches simply can't be won blind, so use the practice runs before a race that keeps beating you." },
      ],
      source: { label: "ゲーム攻略マン — ユースドラマ『暴走族』攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/biker-gang.html" },
      achievementSlug: "coyote_bike_claer",
    },
    {
      slug: "skateboarding",
      name: { ko: "스케보 커뮤니티", en: "Skateboarding community" },
      category: { ko: "스포츠", en: "Sports" },
      difficulty: 3,
      location: { ko: "이진초 스케이트보드 파크 — 3장, 지도력 「팀워크 Lv.3」", en: "The Ijincho skate park — Chapter 3, Teamwork Lv.3" },
      summary: {
        ko: "대립하는 스케보 그룹 「이진초 하운즈」와 「블루 킹」의 그래피티 분쟁에서 시작됩니다. 미니게임은 파크 미션으로, 제한 시간 안에 목표 스코어를 넘기면 클리어입니다.",
        en: "It opens on a graffiti turf war between the Ijincho Hounds and Blue King. The minigame is park missions: beat the target score inside the time limit.",
      },
      howTo: [
        { ko: "스코어는 트릭으로 벌고, 파크에 배치된 코인형 「스케보 포인트」를 주우며 트릭을 결정하는 것이 기본 흐름입니다.", en: "Score comes from tricks, and the loop is collecting the coin-shaped skate points scattered around the park while landing them." },
        { ko: "제한 시간 안에 「GREAT」 평가 이상의 트릭을 연속으로 결정하면 콤보가 발생합니다. 콤보는 화면 오른쪽에 표시되고 1콤보에 스코어 배율 ×110%가 붙으니, 개별 트릭의 크기보다 콤보를 끊지 않는 쪽이 총점에 유리합니다.", en: "Landing GREAT-or-better tricks back to back builds a combo, shown on the right, worth a 110% multiplier at one combo — so keeping the chain alive beats going for bigger individual tricks." },
        { ko: "스케보 커뮤니티의 경품 교환에서는 VR 스고로쿠용 「프리 패스 교환권【1】」을 받을 수 있습니다. 프리 패스 6종을 모으면 VR 스고로쿠를 무제한으로 플레이할 수 있으니 일찍 챙기세요.", en: "The community's prize exchange hands out Free Pass Voucher 1 for the VR board game — collect all six free passes and Dice & Cube becomes unlimited, so pick this one up early." },
      ],
      videos: [
        { title: { ko: "TownGo 스케이트보딩 미션 클리어", en: "TownGo skateboarding school mission completed" }, url: YT("Y3QmWwxZMeQ") },
      ],
      source: { label: "ゲーム攻略マン — ユースドラマ『スケボーコミュニティ』攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/skateboarding-community.html" },
      achievementSlug: "coyote_skate_board_last_race_1st",
    },
    {
      slug: "e-sports",
      name: { ko: "e스포츠부 (버추어 파이터 5)", en: "E-sports club (Virtua Fighter 5)" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "세이료 고교 실습동 4F 컴퓨터실 — 3장, 지도력 「어필력 Lv.2」", en: "The computer room, Practice Building 4F, Seiryo High — Chapter 3, Appeal Lv.2" },
      summary: {
        ko: "e스포츠부의 치트 의혹을 밝히는 유스 드라마로, 미니게임은 「버추어 파이터 5」 대전입니다. 부원 도키 마치오의 의뢰로 부장 산본마쓰 겐야의 결백을 조사합니다.",
        en: "A cheating scandal in the e-sports club, played out through Virtua Fighter 5 matches. Club member Machio Toki asks Yagami to clear president Genya Sanbonmatsu's name.",
      },
      howTo: [
        { ko: "난이도 자체가 낮아 적당히 해도 이기는 편이지만, 확실히 하고 싶다면 스모 선수 「타카아라시」가 쓰기 쉽습니다.", en: "The matches aren't hard, but if you want them over quickly the sumo character Taka-Arashi is the easy pick." },
        { ko: "타카아라시로는 △ 버튼을 계속 연타하기만 하면 츳파리 콤보가 자동으로 이어져 그냥 밀어붙이는 것만으로 이깁니다.", en: "With Taka-Arashi, just mash triangle — it chains the thrust combo on its own and simply bulldozes the opponent." },
        { ko: "적이 다운되면 일어나기 공격만 조심하세요. 가드하거나 거리를 벌려 두었다가, 상대가 일어난 뒤 다시 츳파리를 반복하면 됩니다.", en: "The only thing to watch is their wake-up attack: block it or stay out of range, then go back to mashing once they're up." },
        { ko: "TownGo의 유스 드라마 미션으로 후지와라(10Sp)·요시바(10Sp)·우오즈미(60Sp)·산본마쓰(150Sp) 격파와 2승·4승 달성이 걸려 있습니다.", en: "TownGo's school missions here are beating Fujiwara (10 Sp), Yoshiba (10), Uozumi (60) and Sanbonmatsu (150), plus reaching two and four wins." },
      ],
      source: { label: "ゲーム攻略マン — ユースドラマ『eスポーツ部』攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/e-sports.html" },
    },
    {
      slug: "girls-bar",
      name: { ko: "걸즈바 「Girl's Bite」", en: "Girls' bar (Girl's Bite)" },
      category: { ko: "술집·바", en: "Bar / hostess" },
      difficulty: 3,
      location: { ko: "이진초 걸즈바 「Girl's Bite」 — 4장, 비서 마스야마를 잡은 뒤", en: "Girl's Bite in Ijincho — Chapter 4, after catching secretary Masuyama" },
      summary: {
        ko: "프로페서의 정체를 아는 학생이 No.1 점원 모치즈키 S 에밀리에게 흘렸다는 정보를 좇아, 걸즈바에 잠입해 점원들과 친해지는 유스 드라마입니다. 입점 2,000엔, 드링크 주문 800엔이 듭니다.",
        en: "A student who claims to know the Professor's identity let it slip to Emily, the bar's number one — so Yagami works the room to get her talking. Entry is ¥2,000 and a drink ¥800.",
      },
      howTo: [
        { ko: "점원과 이야기하기 전에 먼저 드링크(칵테일)를 주문합니다. 야가미가 주문한 것을 접객 점원도 함께 마시므로, 각자의 취향에 맞는 칵테일을 골라야 합니다.", en: "You order a cocktail before talking, and whoever is serving you drinks it too — so order what she actually likes." },
        { ko: "칵테일 토크 타임에서는 화면에 「CHOICE」가 뜨면 제한 시간 안에 3종 중 올바른 워드 조합을 고릅니다. 1 → 2 → 3 순서로 △/□/×를 고르고, 잘못 골랐다면 ○로 되돌릴 수 있습니다. 맞히면 「고조도」가 오르고 일정 라인을 넘으면 우호도 게이지에 가산됩니다.", en: "During cocktail talk, a CHOICE prompt gives you a timer to build the right word combination from three options — pick with triangle, square and cross in order one, two, three, and circle undoes a wrong pick. Correct combinations raise her excitement, and past a threshold that converts into the friendship gauge." },
        { ko: "칵테일을 마시면 야가미의 취기가 오릅니다. 취기가 심하면 워드 선택 시 한자나 가타카나가 히라가나로 표시돼 난이도가 올라가고, 취기가 MAX가 되면 퇴점하게 됩니다. 오래 앉아 있으려면 스페셜 스킬 「주호 초단/이단/삼단」으로 강화하세요.", en: "Cocktails raise Yagami's drunkenness, which garbles the word choices — kanji and katakana render as hiragana — and forces you out at maximum. The Drinker skills raise that ceiling." },
        { ko: "우호도는 드링크 주문, 칵테일 토크 타임, 그리고 가게 안의 다트로 올립니다. 다트는 조사하면 점원을 지명해 함께 플레이할 수 있습니다. 우호도가 MAX가 되면 단골도(컴플리트)가 됩니다.", en: "Friendship rises from drinks, cocktail talk and the bar's dartboard, which you can examine to play with a chosen hostess. Maxing it marks her complete." },
        { ko: "에밀리에게 접근하려면 먼저 다른 점원의 단골이 되어 흥미를 끄는 흐름입니다. 가게 안의 모리 H 킨타로에게 말을 걸면 플레이 방법과 현재 우호도 등 각종 정보를 들을 수 있습니다.", en: "The route to Emily runs through becoming a regular for the others first. Mori, the self-styled evangelist propping up the bar, explains the rules and reads out your current standings." },
      ],
      source: { label: "ゲーム攻略マン — ユースドラマ『ガールズバー』攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/girls-bar.html" },
    },
    {
      slug: "photography-club",
      name: { ko: "사진부 (스쿠프 미션)", en: "Photography club (scoop missions)" },
      category: { ko: "촬영", en: "Photography" },
      difficulty: 3,
      location: { ko: "세이료 고교 3F 사진부 부실 — 3장, 지도력 「배짱 Lv.4」", en: "The photography club room, Seiryo High 3F — Chapter 3, Guts Lv.4" },
      summary: {
        ko: "「비행(非行)」을 주제로 사진을 찍는 사진부의 유스 드라마입니다. 비행 학생을 촬영해 본인에게 보여 줌으로써 스스로를 객관적으로 보게 하고 반성을 유도한다는 발상인데, 부장 도리베 메이가 지나치게 행동적이라 야가미가 동행하게 됩니다.",
        en: "The photography club shoots delinquency as its theme, on the theory that showing offenders pictures of themselves will make them reflect. Club president Mei Toribe is reckless enough about it that Yagami has to tag along.",
      },
      howTo: [
        { ko: "불량 학생을 촬영하려 하면 그대로 덤벼들기도 합니다. 촬영 자체가 전투로 이어지는 것을 전제로 움직이세요.", en: "Delinquents you photograph will often just swing at you — plan the shot expecting a fight to follow." },
        { ko: "사진부는 「집중력」이 잘 오르는 부활동입니다. 다만 발생 조건이 「배짱 Lv.4」라 복싱·카지노·폭주족으로 배짱을 먼저 올려 둬야 합니다.", en: "The club raises focus, but it needs Guts Lv.4 to appear — so run boxing, the casino or the biker gang first to get there." },
        { ko: "비행 학생을 좇다 보면 프로페서에 관한 정보가 나온다는 것이 이 드라마의 조사 목적입니다. TownGo에도 사진부 미션(사진부1은 30Sp 등)이 별도로 걸려 있습니다.", en: "The investigative point is that following the delinquents turns up leads on the Professor, and TownGo carries its own photography missions on top (the first is worth 30 Sp)." },
      ],
      source: { label: "ゲーム攻略マン — ユースドラマ『写真部』攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/photo.html" },
    },
    {
      slug: "casino",
      name: { ko: "비밀 카지노 (포커·블랙잭)", en: "The secret casino (poker & blackjack)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "이진초의 회원제 카지노 — 3장, 사이드 케이스 「떨어질 것 같은 남자」 클리어 후", en: "The members-only casino in Ijincho — Chapter 3, after the side case 'The Man on the Ledge'" },
      summary: {
        ko: "미성년 출입 불가에 회원증까지 필요한 이진초의 카지노에, 세이료 고교의 하야카와 코하쿠가 드나든다는 소문을 좇아 잠입하는 유스 드라마이자 플레이 스폿입니다. 포커와 블랙잭을 즐길 수 있습니다.",
        en: "A School Story and a play spot at once: Seiryo student Kohaku Hayakawa is rumoured to be getting into Ijincho's members-only casino, so Yagami goes in after him. Poker and blackjack are on the tables.",
      },
      howTo: [
        { ko: "플레이하려면 먼저 카지노 점원에게서 칩을 사야 합니다. 딴 칩은 같은 점원에게서 경품과 교환합니다.", en: "Buy chips from the attendant before you can play, and trade winnings back at the same counter." },
        { ko: "카지노의 경품 교환에는 VR 스고로쿠용 「프리 패스 교환권【3】」이 있습니다. 프리 패스 6종 중 하나이므로 반드시 챙기세요.", en: "The prize counter carries Free Pass Voucher 3 for the VR board game — one of the six, so don't skip it." },
        { ko: "블랙잭은 숫자 그대로, J·Q·K는 10, A는 1이지만 합계가 11을 넘지 않으면 11로 셉니다. 포커는 텍사스 홀덤이고 손패 2장과 공유패로 역을 만들며 라운드마다 걸거나 내려갑니다.", en: "Blackjack counts pips at face value, J/Q/K as ten and an ace as 1 or 11 while the total stays at or under 11. Poker is Texas Hold'em — two hole cards plus the board, betting or folding each round." },
        { ko: "카지노는 「집중력」과 「배짱」이 함께 오릅니다. 사진부(배짱 Lv.4)와 복싱(집중력 Lv.2)이 막혀 있을 때 여기를 돌면 두 쪽이 같이 풀립니다.", en: "The casino raises focus and guts together, so running it unblocks both photography (Guts Lv.4) and boxing (Focus Lv.2) at once." },
      ],
      source: [
        { label: "ゲーム攻略マン — ユースドラマ『カジノ』攻略", url: "https://dswiipspwikips3.jp/lost-judgment/youth-dram/casino.html" },
        { label: "ゲーム攻略マン — ブラックジャック攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/blackjack.html" },
        { label: "ゲーム攻略マン — ポーカー攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/poker.html" },
      ],
    },
    {
      slug: "drone-racing",
      name: { ko: "드론 레이스 (Dx 리그)", en: "Drone racing (Dx League)" },
      category: { ko: "레이스", en: "Racing" },
      difficulty: 4,
      location: { ko: "이진초 바샤 가도 서쪽 축구장 안", en: "Inside the football ground on west Basha Highway, Ijincho" },
      summary: {
        ko: "메인 케이스 3장까지 진행하면 사이드 케이스 「이진초 드론 레이스 개막!」이 발생하고, 이후 임의로 플레이할 수 있습니다. 최속을 가리는 「Dx 리그」를 제패하는 것이 목표이고, 10기의 드론과 경쟁합니다.",
        en: "Reaching Chapter 3 triggers the side case that opens the drone track, after which it's free play. The goal is conquering the Dx League, racing against ten other drones.",
      },
      howTo: [
        { ko: "조작은 좌스틱 전후진·좌우 이동, 우스틱 상승·하강·선회, L1 브레이크, L2 후방 확인, R1 터보, L3 시점 전환, 터치패드 리타이어·리스타트입니다.", en: "Left stick moves forward, back and sideways; right stick climbs, descends and turns; L1 brakes, L2 looks behind, R1 is turbo, L3 swaps the view, and the touchpad retires or restarts." },
        { ko: "터보는 얼마간 주행하면 화면 우하단 속도계 옆에 「TURBO」가 표시되고, 그때 R1으로 짧게 가속합니다. 상시 쓰는 것이 아니라 표시가 뜬 직후 직선에서 쓰는 자원입니다.", en: "Turbo isn't always available: fly a while and TURBO appears beside the speedometer at the bottom right, then R1 spends it on a short burst — save it for a straight." },
        { ko: "코스에는 부스트 포인트가 설치돼 있습니다. 파란 링을 정확히 통과하면 일정 시간 「부스트」, 오렌지 링을 통과하면 「토네이도 부스트」가 발동합니다. 링을 스치듯 지나가지 말고 중심으로 통과하세요.", en: "Boost gates line the course: fly cleanly through a blue ring for a timed boost, an orange one for a tornado boost. Thread the centre rather than clipping the edge." },
        { ko: "같은 회장의 드론 랩에서 파츠 개발을 합니다. 싱글 레이스와 테스트 비행도 고를 수 있으니, 파츠를 바꾼 뒤 테스트 비행으로 코스를 익히고 그랑프리에 들어가는 흐름이 안정적입니다.", en: "The drone lab at the same venue develops parts, and single races and test flights are selectable — swap parts, learn the course on a test flight, then enter the Grand Prix." },
      ],
      videos: [
        { title: { ko: "드론 레이싱 - 100% 트로피 가이드", en: "Drone Racing - 100% Trophy Guide" }, url: YT("j8Foq6Eri8c") },
        { title: { ko: "드론 레이싱 챔피언십 전 레이스·타임트라이얼 클리어", en: "Drone Racing Championships - all races & time trials" }, url: YT("4nHHGX9m1Go") },
      ],
      source: { label: "ゲーム攻略マン — ドローンレース攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/drone-race.html" },
      achievementSlug: "coyote_drone_league_all_clear",
    },
    {
      slug: "dice-and-cube",
      name: { ko: "VR 스고로쿠 「다이큐」", en: "Dice & Cube (VR board game)" },
      category: { ko: "보드게임", en: "Board game" },
      difficulty: 3,
      location: { ko: "이진초 우미네코도리 빌딩 지하 「VR 살롱 파라다이스」 (3장, 드론 레이스와 같은 사이드 케이스로 해금)", en: "VR Salon Paradise, in the basement of a building on Umineko Street, Ijincho — unlocked by the same Chapter 3 side case as the drone races" },
      summary: {
        ko: "주사위를 굴려 나온 눈만큼 이동하며 VR로 꾸며진 거리를 달리고, 이벤트를 처리하며 NPC와 경쟁하는 체감형 어트랙션입니다. 주로 돈벌이용 플레이 스폿입니다.",
        en: "Roll dice, move that many squares through a VR-dressed city, clear the events and beat the NPC racers. It's primarily a money-making spot.",
      },
      howTo: [
        { ko: "플레이에는 「플레이 패스」 아이템이 필요하고 1회마다 소모됩니다. 플레이 패스는 다른 플레이 스폿의 경품 교환 등에서 얻습니다.", en: "Each run costs a Play Pass item, obtained from other play spots' prize exchanges." },
        { ko: "「프리 패스」를 6종 모으면 플레이 패스 없이 무제한으로 플레이할 수 있습니다. 매번 패스를 소모하는 것은 번거로우니 일찍 6종을 모으는 편이 낫습니다.", en: "Collect all six Free Passes and it becomes unlimited — much less friction than feeding it a Play Pass every time, so get them early." },
        { ko: "프리 패스 교환권 6종의 입수처: 【1】 이진초 스케보 커뮤니티 경품 교환, 【2】 카무로초 페인트 서치, 【3】 이진초 유스 드라마 「카지노」의 카지노 경품 교환, 【4】 이진초 사이드 케이스 「캇파의 행방」 공략 보상, 【5】 이진초 「네코뮤니케이션」 공략 보상, 【6】 이진초 도박장 경품 교환입니다.", en: "Where the six vouchers come from: the Ijincho skate community's prize exchange, Kamurocho's paint search, the casino prize exchange from the casino School Story, the Ijincho side case about the kappa, the Ijincho cat-communication content, and the Ijincho gambling den's prize exchange." },
      ],
      videos: [
        { title: { ko: "Paradise VR (Dice & Cube) 가이드", en: "Paradise VR (Dice & Cube) guide" }, url: YT("FLkZUrHF-KU") },
      ],
      source: { label: "ゲーム攻略マン — VRすごろく：ダイキュー攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/vr-sugoroku.html" },
      achievementSlug: "coyote_all_daiq_stage_win",
    },
    {
      slug: "club-sega-arcade",
      name: { ko: "클럽 세가 아케이드", en: "Club SEGA arcade" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초 클럽세가 나카미치도리점·극장앞광장점 / 이진초 게임센터 사사키·클럽세가 중화가점", en: "Club SEGA on Nakamichi Street and at Theater Square in Kamurocho; Game Center Sasaki and Club SEGA Chinatown in Ijincho" },
      summary: {
        ko: "실제 세가 아케이드 타이틀을 플레이할 수 있고, 각 타이틀에는 TownGo의 숍 미션(하이스코어 달성)이 걸려 있습니다. 어느 게임센터에 어떤 기체가 있는지가 갈리므로 미션을 노린다면 위치를 먼저 확인하세요.",
        en: "Real SEGA arcade titles, each carrying a TownGo shop mission for a high score. Which cabinet sits in which arcade differs, so check the location before chasing a mission.",
      },
      howTo: [
        { ko: "「판타지 존」(1986)은 오파오파를 조작해 적을 쓰러뜨려 코인을 모으고 무기·엔진을 사서 강화하는 횡스크롤 슈팅입니다. 전 8스테이지이고 각 스테이지의 전선기지 10개를 전부 부수면 보스가 등장합니다. 남은 기지 수는 화면 아래 게이지의 빨간 칸으로 확인합니다. 클럽세가 나카미치도리점과 게임센터 사사키에 있고 하이스코어 미션은 100Sp입니다.", en: "Fantasy Zone (1986) is the Opa-Opa side-scroller where you shoot enemies for coins and buy weapons and engines. Eight rounds, each with ten bases to destroy before the boss appears, and the red cells on the bottom gauge show how many are left. It's at Club SEGA Nakamichi and Game Center Sasaki, and the high-score mission is worth 100 Sp." },
        { ko: "「스페이스 해리어」(1985)는 전 18스테이지의 의사 3D 슈팅입니다. 잡몹을 무리해서 부술 필요는 없고, 자기 캐논 탄으로 시야가 가려지는 구간도 있어 오히려 쏘지 않고 지나가는 편이 쉬운 곳도 있습니다. 클럽세가 극장앞광장점과 클럽세가 중화가점에 있고 미션은 100Sp입니다.", en: "Space Harrier (1985) runs eighteen stages of pseudo-3D shooting. You don't need to kill the small fry, and in places your own cannon fire blocks the view — some stretches are easier if you simply don't shoot. It's at Theater Square and Chinatown, mission worth 100 Sp." },
        { ko: "「슈퍼 행온」(1987)은 제한 시간 안에 체크포인트를 통과하는 바이크 레이스입니다. 코스는 비기너·주니어·시니어·엑스퍼트 순으로 어려워집니다. 클럽세가 극장앞광장점과 중화가점에 있고, 미션은 100Sp + 600만 점 이상 획득입니다.", en: "Super Hang-On (1987) is checkpoint bike racing across Beginner, Junior, Senior and Expert courses. It's at Theater Square and Chinatown, and the mission is 100 Sp plus scoring over six million." },
        { ko: "「아웃런」(1986)은 유럽을 달리는 레이스로 총 16통의 루트가 있습니다. STAGE 1~5에 각 2갈래의 분기가 있고, 체크포인트를 통과할 때마다 남은 Time이 60초쯤 가산됩니다. Time이 0이 될 때까지 달려 스코어를 버는 구조입니다. 조작은 ○/R2 액셀, □/R1 기어 체인지, ×/L2 브레이크입니다.", en: "OutRun (1986) has sixteen route permutations across five stages, each with a two-way branch, and every checkpoint adds roughly sixty seconds. You drive until the clock runs out. Circle or R2 accelerates, square or R1 shifts, cross or L2 brakes." },
      ],
      source: [
        { label: "ゲーム攻略マン — ファンタジーゾーン攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/fantasy-zone.html" },
        { label: "ゲーム攻略マン — スペースハリアー攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/space-harrier.html" },
        { label: "ゲーム攻略マン — スーパーハングオン攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/super-hang-on.html" },
        { label: "ゲーム攻略マン — アウトラン攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/outrun.html" },
      ],
      achievementSlug: "coyote_all_arcade_game_played",
    },
    {
      slug: "mahjong",
      name: { ko: "마작", en: "Mahjong" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "카무로초·이진초의 마작장", en: "The mahjong parlours in Kamurocho and Ijincho" },
      summary: {
        ko: "표준 4인 마작입니다. 국수 안에 가능한 한 강한 역을 완성하는 것이 목적입니다.",
        en: "Standard four-player mahjong: build the strongest hand you can inside the allotted rounds.",
      },
      howTo: [
        { ko: "리치는 □ 버튼으로 선언합니다. 순위 우마는 착순에 따라 붙습니다.", en: "Square declares riichi, and placement bonuses apply by finishing order." },
        { ko: "시작 전에 룰을 변경할 수 있습니다. 자신 없는 룰은 꺼 두고 시작하는 편이 낫습니다.", en: "Rules are adjustable before you sit down — turn off anything you're not comfortable with." },
      ],
      source: { label: "ゲーム攻略マン — 麻雀攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/majan.html" },
    },
    {
      slug: "shogi",
      name: { ko: "노상 장기", en: "Street shogi" },
      category: { ko: "보드게임", en: "Board game" },
      difficulty: 3,
      location: { ko: "카무로초·이진초의 노상 장기", en: "Street shogi in Kamurocho and Ijincho" },
      summary: {
        ko: "「순위전」·「시련 답파」·「쓰메쇼기」를 플레이할 수 있고, 이기면 장기 포인트를 받아 경품과 교환합니다.",
        en: "Ranking matches, Trial Run and tsume-shogi, paying Shogi Points for prizes.",
      },
      howTo: [
        { ko: "TownGo의 숍 미션에 「무르기를 쓰지 않고 이기기」 계열이 있습니다. 「대기 없음!」이 누적 1승 10Sp, 「속·대기 없음!」이 누적 3승 30Sp입니다. 평소에는 무르기를 써도 되지만, 이 미션을 노리는 판에서는 아예 쓰지 마세요.", en: "TownGo's shop missions include winning without using takebacks: one such win is worth 10 Sp and three is worth 30. Use takebacks freely otherwise, but not in a game you're counting toward those." },
        { ko: "쓰메쇼기는 정해진 수 안에 상대 옥을 잡는 문제이므로, 순위전보다 짧게 끝납니다. 포인트만 필요하다면 이쪽이 효율적입니다.", en: "Tsume-shogi problems finish far faster than ranking matches, so they're the efficient option when you only need points." },
      ],
      source: { label: "ゲーム攻略マン — 将棋攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/syogi.html" },
    },
    {
      slug: "gambling-hall",
      name: { ko: "도박장 (코이코이·오이초카부)", en: "Gambling den (koi-koi & oicho-kabu)" },
      category: { ko: "도박", en: "Gambling" },
      difficulty: 3,
      location: { ko: "이진초의 도박장", en: "The gambling den in Ijincho" },
      summary: {
        ko: "화투를 쓰는 코이코이와 오이초카부를 플레이할 수 있습니다. 경품 교환에 VR 스고로쿠용 「프리 패스 교환권【6】」이 있으므로 한 번은 반드시 들러야 합니다.",
        en: "Koi-koi and oicho-kabu on hanafuda. Its prize exchange holds Free Pass Voucher 6 for Dice & Cube, so it's a mandatory stop at least once.",
      },
      howTo: [
        { ko: "코이코이는 1대1 대전입니다. 선은 고른 패의 달이 빠른 쪽이고 이후로는 승자가 선을 잡습니다. 손패와 장에 같은 달의 패가 있으면 가져올 수 있고, 없으면 손패를 장에 놓습니다.", en: "Koi-koi is head to head. The earlier month deals first and the winner deals after that; match a month between hand and field to take the pair, otherwise place a card." },
        { ko: "역이 완성돼도 「코이코이한다」를 골라 더 강한 역을 노릴 수 있습니다. 약한 역으로 이기고 빠질지 강한 역을 노릴지가 승부의 갈림길입니다.", en: "A completed hand can still be pushed with a koi-koi call for something bigger — banking the small win or reaching further is the whole decision." },
        { ko: "오이초카부는 11·12월을 뺀 1~10월 40장을 씁니다. 받은 2~3장 합계의 끝자리를 9에 가깝게 만들어 친보다 9에 가까우면 승리입니다. 1월 패는 1, 5월 패는 5, 10월 패는 0으로 셉니다.", en: "Oicho-kabu uses the forty cards from months one to ten: get the last digit of your two or three cards closer to 9 than the dealer's. January counts as 1, May as 5, October as 0." },
      ],
      source: [
        { label: "ゲーム攻略マン — こいこい攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/koikoi.html" },
        { label: "ゲーム攻略マン — おいちょかぶ攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/oichokabu.html" },
      ],
    },
    {
      slug: "darts",
      name: { ko: "다트", en: "Darts" },
      category: { ko: "아케이드", en: "Arcade" },
      difficulty: 2,
      location: { ko: "카무로초·이진초의 바 등 다트 설치 매장", en: "The bars with dartboards in Kamurocho and Ijincho" },
      summary: {
        ko: "「01」·「CRICKET」·「COUNT UP」 3종을 즐길 수 있습니다. 걸즈바의 다트도 같은 규칙이고, 그쪽은 점원과 함께 던져 우호도를 올릴 수 있습니다.",
        en: "Three modes — 01, Cricket and Count Up. The girls' bar's board runs the same rules and doubles as a way to raise a hostess's friendship.",
      },
      howTo: [
        { ko: "싱글은 숫자 그대로, 더블은 2배, 트리플은 3배이고 BULL·더블 BULL은 모두 50점입니다. 던질 때 왼쪽의 파워 게이지가 상하로 움직이므로 베스트 존에서 눌러야 하고, 아무리 정확히 노려도 쓰는 화살에 따라 흔들림이 남습니다.", en: "Singles score face value, doubles double, triples triple, and both bulls are 50. A power gauge slides as you throw — press in the best zone — and the dart itself still adds wobble." },
        { ko: "01은 설정 점수를 정확히 0으로 만드는 종목입니다. 301/501/701/901 중 301이 가장 빠릅니다. 301이면 BULL·더블 BULL ×3을 두 라운드 맞히고 마지막에 1을 맞히면 끝나며, 중급까지는 이 방법으로 충분합니다. 상급도 실수 없이 조작하면 같은 방법으로 갈 수 있습니다.", en: "01 reduces a score to exactly zero — of 301/501/701/901, 301 is quickest. Two rounds of three bulls plus a final 1 finishes 301, which carries you through the intermediate opponents and, played cleanly, the advanced ones too." },
        { ko: "크리켓은 15~20과 BULL만 유효한 진지 뺏기입니다. 싱글 1마크·더블 2마크·트리플 3마크로 합계 3마크면 클로즈되고 색이 노랑에서 분홍으로 바뀝니다.", en: "Cricket only counts 15 through 20 and the bull: singles are one mark, doubles two, triples three, and three marks closes the number, turning it from yellow to pink." },
        { ko: "달성 목록의 「해트트릭 5회」(1라운드에 3발 모두 BULL)는 혼자서도 달성할 수 있습니다.", en: "The five-hat-trick entry — all three darts in the bull in one round — can be done in single player." },
      ],
      source: { label: "ゲーム攻略マン — ダーツ攻略", url: "https://dswiipspwikips3.jp/lost-judgment/playspots/darts.html" },
    },
  ],
};
