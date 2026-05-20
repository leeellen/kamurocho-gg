import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const STEAM_API_KEY = process.env.STEAM_API_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing Supabase env vars.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const STOPWORDS = new Set([
  "the", "and", "for", "with", "this", "that", "you", "your", "from", "into", "have", "will",
  "then", "than", "just", "after", "before", "once", "while", "they", "them", "their", "about",
  "main", "story", "complete", "chapter", "achievement", "obtain", "get", "started", "through",
  "도전", "과제", "업적", "달성", "게임", "시작", "완료", "스토리", "챕터",
]);
const translationCache = new Map();
const GUIDE_LOCALES = ["english", "koreana"];
const CURATED_SEED_URLS = {
  3717330: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742"],
  3717340: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154"],
  1088710: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2512675103"],
  1105500: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402"],
  1105510: ["https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389"],
  1388590: ["https://steamcommunity.com/sharedfiles/filedetails/?id=3430885986"],
  1805480: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2938400399"],
  2058180: ["https://steamcommunity.com/sharedfiles/filedetails/?id=2863006915"],
  1235140: ["https://steamcommunity.com/sharedfiles/filedetails/?id=3673089977"],
  2375550: [
    "https://steamcommunity.com/sharedfiles/filedetails/?id=3085063886",
    "https://steamcommunity.com/sharedfiles/filedetails/?id=3549694940",
  ],
  2072450: ["https://steamcommunity.com/sharedfiles/filedetails/?id=3280073135"],
  3061810: ["https://steamcommunity.com/sharedfiles/filedetails/?id=3433394597"],
};
const MANUAL_GUIDE_OVERRIDES = {
  "2988580:24_Mr_Shakedown": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=2869817839",
    englishContent: [
      "Defeat Mr. Shakedown for the first time.",
      "",
      "**Do this next:**",
      "- You first encounter **Mr. Shakedown** during **Chapter 2**.",
      "- Do not worry about beating him immediately if your damage is low. You can back off, stock healing items, and challenge him again once you are ready.",
      "- Use Rush to bait his charges or Beast to punish long recovery windows, then finish the fight once his guard opens up.",
      "- The achievement unlocks the first time you fully defeat him.",
      "",
      "**Watch for:**",
      "- He hits extremely hard early on, so bring healing and avoid greedy combos.",
    ].join("\n"),
    koreanContent: [
      "상대를 보고 덤벼라",
      "",
      "**지금 해야 할 일:**",
      "- **삥쟁이(Mr. Shakedown)** 는 **챕터 2**부터 처음 조우합니다.",
      "- 초반 화력이 부족하면 바로 잡으려고 무리하지 말고, 회복 아이템을 챙긴 뒤 다시 도전해도 됩니다.",
      "- 러시 스타일로 돌진을 유도해 피하거나, 비스트 스타일로 큰 빈틈을 강하게 받아치면서 체력을 깎으세요.",
      "- 처음으로 완전히 쓰러뜨리는 순간 업적이 해금됩니다.",
      "",
      "**주의할 점:**",
      "- 초반에는 한 방 피해가 매우 크니 회복 아이템을 넉넉히 들고 가는 편이 안전합니다.",
    ].join("\n"),
  },
  "2988580:35_Rich_Taste": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3624319538",
    englishContent: [
      "Rich Taste",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This only happens during **Chapter 2** when Kiryu is helping the homeless men near the river.",
      "- When one of them asks for champagne, go to Don Quijote and buy **Gold Champagne** instead of the regular bottle.",
      "- Return and hand over the Gold Champagne to trigger the achievement immediately.",
      "",
      "**Watch for:**",
      "- If you give the wrong bottle or advance the story past this scene, the achievement is gone for that playthrough.",
    ].join("\n"),
    koreanContent: [
      "이왕이면 화끈하게",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 2**에서만 가능합니다. 키류가 강가의 노숙자들에게 술을 구해주는 장면까지 진행하세요.",
      "- 샴페인을 요구하는 인물이 나오면 돈키호테에서 일반 샴페인이 아니라 **골드 샴페인**을 사세요.",
      "- 다시 돌아가 골드 샴페인을 건네면 업적이 바로 해금됩니다.",
      "",
      "**주의할 점:**",
      "- 일반 샴페인을 주거나 이 장면을 넘겨버리면 그 회차에서는 다시 얻을 수 없습니다.",
    ].join("\n"),
  },
  "2988580:37_Smooth_Criminal": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3624319538",
    englishContent: [
      "Smooth Criminal",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This is a **Chapter 3** story-only achievement during Majima's scouting sequence before entering Odyssey.",
      "- Speak to the three useful information sources outside first: the man on Bishamon Bridge, the woman southeast of Le Marche, and the businessmen south of Odyssey.",
      "- Inside Odyssey, use first-person view and inspect all four correct tables on the far side of the room plus the nearby occupied table on the left.",
      "- If you gathered the right intel, the achievement unlocks shortly after the floor manager speaks in the next chapter.",
      "",
      "**Watch for:**",
      "- Miss any required clue or observation and the scene is over for the run.",
    ].join("\n"),
    koreanContent: [
      "전격 트레이트 성립",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 3**에서 오디세이 입장 전 마지마의 사전 조사 파트에서만 가능합니다.",
      "- 먼저 밖에서 단서가 되는 세 곳을 모두 확인하세요. 비샤몬 다리의 남자, 르 마르쉐 남동쪽의 여자, 오디세이 남쪽의 회사원들입니다.",
      "- 오디세이에 들어간 뒤 1인칭 시점으로 방 반대편의 목표 테이블들을 확인하고, 왼쪽 가까운 쪽의 착석 테이블도 조사하세요.",
      "- 필요한 단서를 모두 챙기면 다음 챕터 초반 진행 중 업적이 해금됩니다.",
      "",
      "**주의할 점:**",
      "- 단서 하나라도 놓치거나 조사 구간이 끝나면 그 회차에서는 다시 볼 수 없습니다.",
    ].join("\n"),
  },
  "2988580:39_Business_Etiquette": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3624319538",
    englishContent: [
      "Business Etiquette 101",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This is a **Chapter 5** meeting sequence with Oda at Cafe Alps.",
      "- When Oda tells you to choose a table, sit at the one **near the back**.",
      "- Pick the **nearest chair** at that table, order **nothing** when the waiter comes over, and pass the quick-time event once the client arrives.",
      "- Follow all of those choices in one go to impress Oda and secure the achievement.",
      "",
      "**Watch for:**",
      "- A single wrong etiquette choice fails the requirement and the story keeps moving.",
    ].join("\n"),
    koreanContent: [
      "엘리트 비즈니스맨",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 5**에서 오다와 함께 카페 알프스로 가는 접견 장면에서만 가능합니다.",
      "- 자리를 고를 때는 **안쪽 테이블**을 선택하세요.",
      "- 앉을 때는 그 테이블의 **가까운 의자**를 고르고, 웨이터가 오면 **아무것도 주문하지 마세요**.",
      "- 이후 거래처가 왔을 때 QTE까지 성공하면 오다를 만족시켜 업적이 해금됩니다.",
      "",
      "**주의할 점:**",
      "- 예절 선택지 하나라도 틀리면 실패하고 스토리는 그대로 진행됩니다.",
    ].join("\n"),
  },
  "1105500:ACHIEVEMENT_38": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293",
    englishContent: [
      "Possess 10,000,000 yen or more.",
      "",
      "**Do this next:**",
      "- Save this for Tanimura, because his casino grind overlaps cleanly with this trophy.",
      "- Clear money-heavy substories first, especially the ones that award expensive items or large cash payouts.",
      "- If you still need more, cash in casino winnings or sell high-value rewards until your carried money goes over 10,000,000 yen at one time.",
      "- The achievement pops from money currently on hand, so do not spend it until the unlock appears.",
      "",
      "**Watch for:**",
      "- Banked value, items in storage, and chips do not count until you convert them into cash you are carrying.",
    ].join("\n"),
    koreanContent: [
      "걸어다니는 은행",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 타니무라 파트에서 정리하는 편이 가장 편합니다. 카지노 관련 진행과 함께 처리할 수 있기 때문입니다.",
      "- 먼저 값비싼 보상 아이템이나 큰 현금 보상이 나오는 서브스토리를 끝내세요.",
      "- 금액이 부족하면 카지노 교환품이나 고가 아이템을 현금으로 바꿔서 소지금이 1,000만 엔을 넘도록 맞추세요.",
      "- 판정은 현재 들고 있는 현금 기준이라, 업적이 뜰 때까지 바로 쓰지 않는 편이 안전합니다.",
      "",
      "**주의할 점:**",
      "- 보관함 아이템, 칩, 환전 전 보상은 소지금으로 인정되지 않습니다.",
    ].join("\n"),
  },
  "1105500:ACHIEVEMENT_40": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293",
    englishContent: [
      "Knock over 100 people you pass by.",
      "",
      "**Do this next:**",
      "- Hold the sprint button and shoulder through dense pedestrian areas in Kamurocho.",
      "- Theater Square, Nakamichi Street, and the Millennium Tower approach are the fastest places to build the count.",
      "- Keep weaving through crowds instead of fighting; every civilian you bowl over adds to the total.",
      "- If it does not pop naturally during cleanup, run repeated loops through the busiest streets in Premium Adventure.",
      "",
      "**Watch for:**",
      "- You need actual pedestrian collisions, not enemy knockdowns from combat.",
    ].join("\n"),
    koreanContent: [
      "카무로 폭주왕",
      "",
      "**지금 해야 할 일:**",
      "- 카무로초의 보행자가 많은 거리에서 질주하면서 시민들과 계속 부딪히세요.",
      "- 시어터 스퀘어, 나카미치 거리, 밀레니엄 타워 주변처럼 사람이 많은 구간이 가장 빠릅니다.",
      "- 전투를 할 필요는 없고, 시민을 들이받아 넘어뜨린 횟수만 누적하면 됩니다.",
      "- 자연스럽게 안 뜨면 프리미엄 어드벤처에서 같은 구간을 몇 바퀴 반복하세요.",
      "",
      "**주의할 점:**",
      "- 전투 중 적을 쓰러뜨리는 건 카운트되지 않습니다. 반드시 길거리 시민과 충돌해야 합니다.",
    ].join("\n"),
  },
  "1105500:ACHIEVEMENT_45": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3411100293",
    englishContent: [
      "Pick up 20 pieces of trash around the city.",
      "",
      "**Do this next:**",
      "- Walk the streets and check for trash pickup prompts while exploring Kamurocho.",
      "- Grab every piece of litter you see during normal story travel instead of using taxis everywhere.",
      "- If you are still short, sweep alleys and side streets in Premium Adventure until the total reaches 20.",
      "- The unlock is cumulative, so you do not need to collect all 20 in one session.",
      "",
      "**Watch for:**",
      "- This is city trash pickup, not item collection from shops or enemies.",
    ].join("\n"),
    koreanContent: [
      "카무로의 에코 마스터",
      "",
      "**지금 해야 할 일:**",
      "- 카무로초를 돌아다니면서 쓰레기를 줍는 상호작용이 보이면 바로 처리하세요.",
      "- 스토리 진행 중 택시만 타지 말고 도보 이동을 섞으면 자연스럽게 개수를 채우기 쉽습니다.",
      "- 부족하면 프리미엄 어드벤처에서 골목과 뒷길을 다시 훑어 총 20개까지 맞추세요.",
      "- 누적형 업적이라 한 번에 다 모을 필요는 없습니다.",
      "",
      "**주의할 점:**",
      "- 상점 아이템이나 적 드롭이 아니라, 거리에서 직접 줍는 쓰레기만 카운트됩니다.",
    ].join("\n"),
  },
  "1105510:ACHIEVEMENT_20": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389",
    englishContent: [
      "Achieve 100% on your Completion List.",
      "",
      "**Do this next:**",
      "- Open the Completion List and clear every category on the same save file until the total reaches 100.00%.",
      "- Treat this as your final cleanup goal after substories, minigames, food, collectibles, training, and side jobs are all done.",
      "- Double-check city-specific tasks and Haruka/Shinada content, because those are the most common places people miss progress.",
      "- If the trophy does not pop instantly at 100%, leave the menu, move areas, or trigger another completion update so the game refreshes the total.",
      "",
      "**Watch for:**",
      "- Completion progress is stricter than just clearing the story or substories; every checklist tab has to be finished.",
    ].join("\n"),
    koreanContent: [
      "전당 입성 플레이어",
      "",
      "**지금 해야 할 일:**",
      "- 같은 세이브 파일에서 컴플리트 리스트 전 항목을 채워 총합 100.00%를 만드세요.",
      "- 이 업적은 사실상 최종 클린업 목표입니다. 서브스토리, 미니게임, 음식, 수집 요소, 수련, 전용 사이드 콘텐츠를 전부 끝낸 뒤 마무리하세요.",
      "- 특히 도시별 체크리스트와 하루카, 시나다 전용 콘텐츠를 빠뜨리기 쉽습니다. 마지막에 다시 훑는 편이 안전합니다.",
      "- 100%를 찍고 바로 안 뜨면 메뉴를 나왔다가 다시 열거나, 다른 완료 항목 하나를 갱신해 판정을 새로 받으세요.",
      "",
      "**주의할 점:**",
      "- 스토리 클리어나 서브스토리 완료만으로는 부족합니다. 컴플리트 리스트의 모든 탭을 채워야 합니다.",
    ].join("\n"),
  },
  "1105510:ACHIEVEMENT_44": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389",
    englishContent: [
      "Use a local PrintCircle frame in all cities.",
      "",
      "**Do this next:**",
      "- Visit every PrintCircle booth and choose the city-specific local frame once, then save the photo.",
      "- Kamurocho has two separate PrintCircle locations, and both count for this achievement.",
      "- The remaining cities each need one successful saved photo with their local-exclusive frame.",
      "- If you are cleaning this up late, go city by city and confirm the saved photo before moving on.",
      "",
      "**Watch for:**",
      "- This is not one frame total. You need every local booth, including both Kamurocho locations.",
    ].join("\n"),
    koreanContent: [
      "현지 프레이머",
      "",
      "**지금 해야 할 일:**",
      "- 각 도시의 프리서클 부스를 찾아 지역 한정 프레임으로 한 번씩 사진을 찍고 저장하세요.",
      "- 카무로초는 프리서클 위치가 두 군데라 두 곳 모두 별도로 처리해야 합니다.",
      "- 나머지 도시도 각 부스에서 지역 전용 프레임으로 저장 사진을 하나씩 남기면 됩니다.",
      "- 클린업 단계라면 도시를 하나씩 돌면서 저장 여부를 확인하고 넘어가세요.",
      "",
      "**주의할 점:**",
      "- 도시당 한 장이 아니라 모든 지역 부스를 처리해야 합니다. 카무로초 2곳을 빼먹기 쉽습니다.",
    ].join("\n"),
  },
  "1105510:ACHIEVEMENT_49": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3420184389",
    englishContent: [
      "Play a routine in Comedy Team.",
      "",
      "**Do this next:**",
      "- Progress Haruka's part until the Comedy Team content opens.",
      "- Start the Aspiring Comedians substory to unlock the first audition and enter the routine properly.",
      "- Finish one Comedy Team performance by answering the prompts with correct timing.",
      "- The achievement pops after you complete a routine, so you do not need to master the whole minigame for this specific unlock.",
      "",
      "**Watch for:**",
      "- This is tied to Haruka's content, not a citywide activity available to every protagonist.",
    ].join("\n"),
    koreanContent: [
      "만담 첫 도전",
      "",
      "**지금 해야 할 일:**",
      "- 하루카 파트를 진행해 코미디 팀 콘텐츠가 열릴 때까지 스토리를 진행하세요.",
      "- 먼저 `지망 개그 콤비` 계열 서브스토리를 시작해 첫 오디션을 해금해야 합니다.",
      "- 이후 코미디 팀 공연에서 한 번이라도 루틴을 끝까지 진행하면 업적이 뜹니다.",
      "- 이 업적 자체는 전체 만담 콘텐츠를 다 끝낼 필요 없이 첫 공연 성공만으로 충분합니다.",
      "",
      "**주의할 점:**",
      "- 하루카 전용 콘텐츠라 다른 주인공 파트에서는 진행할 수 없습니다.",
    ].join("\n"),
  },
  "1388590:OGFAC57": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3430885986",
    englishContent: [
      "Engaged enemies while a drink's effect is active.",
      "",
      "**Do this next:**",
      "- Buy or drink any consumable that grants a temporary effect and wait until the buff icon appears.",
      "- While the effect is still active, immediately start a random street fight.",
      "- The achievement should unlock as soon as the encounter begins under the drink buff.",
      "- If it does not pop, try again with a fresh drink and pick a nearby enemy group so the timer does not expire.",
      "",
      "**Watch for:**",
      "- The effect must still be active when combat starts, not after the fight is already underway.",
    ].join("\n"),
    koreanContent: [
      "Can of Whoop Ass",
      "",
      "**지금 해야 할 일:**",
      "- 일시 버프가 붙는 음료나 소모품을 사용하고, 화면에 효과 아이콘이 뜬 것을 확인하세요.",
      "- 효과가 남아 있는 상태에서 바로 근처 잡몹과 전투를 시작하세요.",
      "- 버프가 켜진 상태로 전투에 진입하면 바로 업적이 뜹니다.",
      "- 안 뜨면 새 음료를 마시고, 멀리 이동하지 말고 가장 가까운 적에게 바로 부딪히세요.",
      "",
      "**주의할 점:**",
      "- 효과가 켜진 뒤 전투가 시작되어야 합니다. 전투 도중 버프를 쓰는 건 판정이 불안정할 수 있습니다.",
    ].join("\n"),
  },
  "1388590:OGFAC50": {
    sourceUrl: "https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements",
    englishContent: [
      "Experienced the trials of raising a baby.",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This is tied to the Haruto care scenes that happen during the main story.",
      "- Whenever Haruto becomes cranky, complete the required soothing minigames instead of failing through them.",
      "- Keep clearing those baby-care prompts as they appear until the trophy unlocks.",
      "",
      "**Watch for:**",
      "- GameFAQs notes this is technically missable if you fail every single Haruto calming sequence for the whole playthrough.",
    ].join("\n"),
    koreanContent: [
      "육아의 시련을 겪었다.",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 스토리 진행 중 나오는 하루토 돌보기 장면과 연결되어 있습니다.",
      "- 하루토가 보채는 구간이 나오면 관련 육아 미니게임을 계속 성공시키면서 진행하세요.",
      "- 스토리 중 등장하는 돌보기 이벤트를 정상적으로 처리하면 업적이 해금됩니다.",
      "",
      "**주의할 점:**",
      "- GameFAQs 기준으로, 하루토를 달래는 이벤트를 회차 내내 전부 실패하면 놓칠 수 있는 업적입니다.",
    ].join("\n"),
  },
  "2058180:JUDGE_MAIN_STORY_01_HIDDEN": {
    sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
    englishContent: [
      "I'll Make it Double",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This is the first missable in **Chapter 2**.",
      "- When the story takes you into L'Amant and the hidden casino below it, double your chips from the opening amount before you leave.",
      "- If the unlock seems inconsistent, make a manual save first and retry the sequence until the trophy pops.",
      "",
      "**Watch for:**",
      "- PowerPyx lists this as a Chapter 2 missable. Once you leave that story setup behind, you need another playthrough.",
    ].join("\n"),
    koreanContent: [
      "I'll Make it Double",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 2**의 첫 missable입니다.",
      "- 스토리 진행으로 L'Amant와 그 아래 숨겨진 카지노에 들어가면, 나가기 전에 시작 칩을 두 배로 만드세요.",
      "- 판정이 불안정하면 수동 저장을 하나 남겨두고 같은 구간을 다시 시도하는 편이 안전합니다.",
      "",
      "**주의할 점:**",
      "- PowerPyx 기준 챕터 2 한정 업적입니다. 이 스토리 구간을 넘기면 다음 회차가 필요합니다.",
    ].join("\n"),
  },
  "2058180:JUDGE_MAIN_STORY_02_HIDDEN": {
    sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
    englishContent: [
      "Way Too Thorough!",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This missable is in **Chapter 5**.",
      "- During the Terasawa investigation scene, fully inspect the required clues before you finish the sequence.",
      "- If you are unsure, follow a chapter walkthrough for the complete investigation route and do not rush the prompt chain.",
      "",
      "**Watch for:**",
      "- PowerPyx lists this as a Chapter 5 missable tied to the one-time Terasawa investigation.",
    ].join("\n"),
    koreanContent: [
      "Way Too Thorough!",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 5**에 있습니다.",
      "- 테라사와 조사 장면에서 필요한 단서를 빠짐없이 전부 확인한 뒤 진행을 마무리하세요.",
      "- 확신이 없으면 해당 챕터 공략을 옆에 두고 조사 루트를 하나씩 따라가는 편이 안전합니다.",
      "",
      "**주의할 점:**",
      "- PowerPyx 기준 챕터 5 일회성 조사 파트 업적입니다.",
    ].join("\n"),
  },
  "2058180:JUDGE_MAIN_STORY_03_HIDDEN": {
    sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
    englishContent: [
      "The Art of Conversation",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This hidden missable appears in **Chapter 7**.",
      "- Follow the story conversation sequence carefully and choose the correct responses on the first try.",
      "- If you do not know the answers, use a chapter-specific walkthrough before advancing the scene.",
      "",
      "**Watch for:**",
      "- PowerPyx lists this as a Chapter 7 missable. Wrong choices force you into another playthrough.",
    ].join("\n"),
    koreanContent: [
      "The Art of Conversation",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 숨겨진 업적은 **챕터 7**에서 나옵니다.",
      "- 해당 대화 이벤트에서 정답 선택지를 첫 시도에 맞춰야 합니다.",
      "- 답이 헷갈리면 장면을 넘기기 전에 챕터별 공략을 같이 보는 편이 안전합니다.",
      "",
      "**주의할 점:**",
      "- PowerPyx 기준 챕터 7 missable입니다. 틀리면 다음 회차가 필요합니다.",
    ].join("\n"),
  },
  "2058180:JUDGE_MAIN_STORY_04_HIDDEN": {
    sourceUrl: "https://nightlygamingbinge.com/judgment-chapter-8s-correct-dialog-choices/",
    englishContent: [
      "Professional Password Presenter",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This missable is in **Chapter 8** during the hostess-related dialogue sequence.",
      "- Pick the correct conversation choices all the way through the scene on your first attempt.",
      "- If you want a safe route, use a Chapter 8 dialogue guide before locking in each answer.",
      "",
      "**Watch for:**",
      "- This scene does not repeat on the same playthrough, so incorrect answers cost the trophy.",
    ].join("\n"),
    koreanContent: [
      "Professional Password Presenter",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 8**의 호스티스 관련 대화 이벤트에서 얻습니다.",
      "- 장면 전체에서 정답 선택지를 첫 시도에 맞춰야 합니다.",
      "- 안전하게 가려면 챕터 8 정답 대화 공략을 같이 보고 하나씩 선택하세요.",
      "",
      "**주의할 점:**",
      "- 같은 회차에서 다시 반복되지 않는 장면이라 오답이면 놓치게 됩니다.",
    ].join("\n"),
  },
  "2058180:JUDGE_MAIN_STORY_05_HIDDEN": {
    sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
    englishContent: [
      "Hung Jury",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This hidden missable is in **Chapter 12**.",
      "- When the relevant courtroom choice sequence appears, follow the correct line of reasoning instead of guessing.",
      "- Keep a walkthrough open for the Chapter 12 choices if you are aiming to clear missables in one run.",
      "",
      "**Watch for:**",
      "- PowerPyx places this in Chapter 12 as a one-time missable tied to story choices.",
    ].join("\n"),
    koreanContent: [
      "Hung Jury",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 숨겨진 업적은 **챕터 12**에 있습니다.",
      "- 법정 선택지가 나오면 추측으로 넘기지 말고 정답 루트를 따라가세요.",
      "- 한 회차에 missable을 모두 챙기려면 챕터 12 선택지 공략을 같이 켜 두는 편이 안전합니다.",
      "",
      "**주의할 점:**",
      "- PowerPyx 기준 챕터 12 일회성 스토리 선택 업적입니다.",
    ].join("\n"),
  },
  "2058180:JUDGE_MAIN_STORY_06_HIDDEN": {
    sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
    englishContent: [
      "The Final Nail",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This missable is in **Chapter 13 / the Finale**.",
      "- During the final court case, present every piece of evidence correctly on the first try.",
      "- If you want to avoid replaying the ending, keep a finale choice guide open before each evidence selection.",
      "",
      "**Watch for:**",
      "- PowerPyx marks this as a finale missable. One wrong answer voids it for that run.",
    ].join("\n"),
    koreanContent: [
      "The Final Nail",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 13 / 최종장(Finale)** 에서 얻습니다.",
      "- 마지막 법정 파트에서 모든 증거 제시를 첫 시도에 정답으로 맞추세요.",
      "- 엔딩을 다시 보지 않으려면 증거 제시 직전에 피날레 선택지 공략을 함께 보는 편이 안전합니다.",
      "",
      "**주의할 점:**",
      "- PowerPyx 기준 최종장 missable입니다. 한 번이라도 틀리면 그 회차에서는 놓칩니다.",
    ].join("\n"),
  },
  "2058180:JUDGE_ALL_CATS_FOUND_IN_SEARCH_MODE": {
    sourceUrl: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/",
    englishContent: [
      "Found all the stray cats while in search mode during the main story.",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- Track every stray cat that appears during story-only search / investigation scenes.",
      "- Listen for the loud meowing cue, then inspect the cat before the scene ends.",
      "- Keep a stray-cat checklist from the start of the playthrough because the trophy spans the entire story.",
      "",
      "**Watch for:**",
      "- PowerPyx calls this highly missable. If you miss even one story cat, you are locked out for that playthrough.",
    ].join("\n"),
    koreanContent: [
      "메인 스토리의 탐색 모드에서 길고양이를 전부 발견했다.",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 메인 스토리 전용 탐색 / 조사 장면에 나오는 길고양이를 처음부터 전부 체크하세요.",
      "- 크게 들리는 울음소리를 단서로 삼아 장면이 끝나기 전에 고양이를 조사해야 합니다.",
      "- 이 업적은 게임 전체에 걸쳐 누적되므로 처음부터 길고양이 체크리스트를 같이 보는 편이 가장 안전합니다.",
      "",
      "**주의할 점:**",
      "- PowerPyx 기준 매우 놓치기 쉬운 업적입니다. 스토리 고양이 하나라도 놓치면 그 회차에서는 해금할 수 없습니다.",
    ].join("\n"),
  },
  "2988580:41_Best_Served": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3624319538",
    englishContent: [
      "Best Served Cold?",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This can only be done during **Chapter 7** when Majima buys takoyaki for Makoto.",
      "- Purchase the takoyaki from Magutako as usual, but do **not** head straight to the warehouse afterward.",
      "- Wait around for at least **15 real minutes** until Majima comments that the takoyaki has gone cold.",
      "- He will go buy another batch, and the achievement unlocks off that failure state.",
      "",
      "**Watch for:**",
      "- If you deliver the fresh takoyaki immediately, the chapter sequence advances and you miss the achievement.",
    ].join("\n"),
    koreanContent: [
      "식어도 맛있다",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 7**에서 마지마가 마코토에게 줄 타코야키를 사는 구간에서만 가능합니다.",
      "- 평소대로 마구타코에서 타코야키를 산 뒤, 바로 창고로 가지 마세요.",
      "- 주변에서 **실시간 15분 이상** 시간을 보내면 마지마가 타코야키가 식었다고 말합니다.",
      "- 다시 사러 가는 흐름으로 넘어가면 그 실패 조건으로 업적이 해금됩니다.",
      "",
      "**주의할 점:**",
      "- 바로 배달해버리면 이벤트가 진행되어 그 회차에서는 다시 얻을 수 없습니다.",
    ].join("\n"),
  },
  "2988580:43_It_Takes": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3624319538",
    englishContent: [
      "It Takes Two",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This is tied to the **Chapter 10** fight through Tojo HQ with Oda and Tachibana.",
      "- Watch for either ally to grab an enemy during the long battle sequence.",
      "- Stand next to the grabbed enemy and trigger the partner Heat Action.",
      "- Repeat that co-op Heat Action **three times** before the chapter battle segment ends.",
      "",
      "**Watch for:**",
      "- The achievement is locked to that story section, so save Heat and restart the fight if the opportunities go badly.",
    ].join("\n"),
    koreanContent: [
      "사원이 한마음 되어",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 10**에서 오다와 타치바나와 함께 도조 본부를 돌파하는 전투 구간 전용입니다.",
      "- 긴 전투 중 동료가 적을 붙잡는 순간을 기다리세요.",
      "- 붙잡힌 적 옆에서 협동 히트 액션을 발동하면 카운트됩니다.",
      "- 이 협동 히트 액션을 전투 구간이 끝나기 전에 **총 3번** 성공시키세요.",
      "",
      "**주의할 점:**",
      "- 해당 스토리 전투에서만 가능하므로 히트를 아껴두고, 꼬이면 죽어서 다시 하는 편이 안전합니다.",
    ].join("\n"),
  },
  "2988580:45_They_Wont": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3624319538",
    englishContent: [
      "They Won't Mind",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This is a **Chapter 12** missable inside the Benten Inn fight section.",
      "- On the second floor, look for the two safes hidden behind furniture before going upstairs to the boss encounter.",
      "- Smash both safes and collect the dropped money before you advance.",
      "- The achievement unlocks from looting those safes during that story invasion.",
      "",
      "**Watch for:**",
      "- Once you go up the final stairs, you cannot return downstairs to open them.",
    ].join("\n"),
    koreanContent: [
      "보물이 왕창!",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 12** 벤텐 여관 돌입 전투에서만 가능한 놓침 요소입니다.",
      "- 2층에서 보스가 있는 위층으로 올라가기 전에, 가구 뒤에 숨은 금고 2개를 찾으세요.",
      "- 두 금고를 모두 부수고 떨어지는 돈까지 회수하면 업적이 해금됩니다.",
      "",
      "**주의할 점:**",
      "- 마지막 계단을 올라가면 아래층으로 돌아올 수 없어서 그 회차에서는 놓치게 됩니다.",
    ].join("\n"),
  },
  "2988580:47_Big_Hair": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3624319538",
    englishContent: [
      "Big Hair in the Crosshairs",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This appears during the **Chapter 13** car chase as Kiryu.",
      "- Partway through the shooting sequence, a yakuza with a large afro appears on the right side in a following vehicle.",
      "- Use the slow-motion aim / Heat Eye immediately and take him out before his car drops away.",
      "- If you get him during that chase, the achievement unlocks on the spot.",
      "",
      "**Watch for:**",
      "- He is on screen briefly, so missing the target means replaying the chase section.",
    ].join("\n"),
    koreanContent: [
      "히트 스나이프",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 13** 키류의 카체이스 슈팅 구간에서 나옵니다.",
      "- 진행 도중 오른쪽 차량 쪽에 커다란 아프로를 한 야쿠자가 잠깐 등장합니다.",
      "- 바로 슬로모션 조준이나 히트 아이를 써서 그 적을 먼저 처치하세요.",
      "- 그 추격전 안에서 처리하면 업적이 즉시 해금됩니다.",
      "",
      "**주의할 점:**",
      "- 화면에 머무는 시간이 매우 짧아서 놓치면 해당 추격전을 다시 해야 합니다.",
    ].join("\n"),
  },
  "2988580:49_Hitting_The": {
    sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3624319538",
    englishContent: [
      "Hitting the Bottle",
      "",
      "///MISSABLE ACHIEVEMENT ALERT///",
      "",
      "**Do this next:**",
      "- This is in **Chapter 15** during Majima's fight with Nishikiyama inside Serena.",
      "- A quick-time event appears when Reina swings a wine bottle at Majima.",
      "- Intentionally **fail** that QTE and let the bottle hit you.",
      "- The achievement unlocks from taking the hit instead of dodging it.",
      "",
      "**Watch for:**",
      "- If you clear the QTE normally, the fight continues and the story moves on without another chance in that playthrough.",
    ].join("\n"),
    koreanContent: [
      "트러블 대처는 나의 특기",
      "",
      "놓치기 쉬운 업적입니다.",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 **챕터 15** 세레나에서 니시키야마와 싸우는 마지마 파트에서만 가능합니다.",
      "- 레이나가 와인병을 휘두를 때 QTE가 발생합니다.",
      "- 여기서는 일부러 **실패**해서 병에 맞아야 합니다.",
      "- 회피하지 않고 그대로 맞으면 업적이 해금됩니다.",
      "",
      "**주의할 점:**",
      "- QTE를 정상 성공하면 전투가 계속 진행되고 그 회차에서는 다시 기회가 없습니다.",
    ].join("\n"),
  },
};

function argValue(flag) {
  const index = process.argv.indexOf(flag);
  return index >= 0 ? process.argv[index + 1] : null;
}

function decodeHtml(text) {
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)));
}

function stripTags(html) {
  return decodeHtml(
    html
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/li>/gi, "\n")
      .replace(/<li[^>]*>/gi, "- ")
      .replace(/<\/(p|div|ul|ol|h1|h2|h3|h4)>/gi, "\n")
      .replace(/<div class="sharedFilePreviewYouTubeVideo[^>]*><\/div>/gi, "")
      .replace(/<a [^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, "$2")
      .replace(/<[^>]+>/g, "")
      .replace(/\r/g, "")
      .replace(/[ \t]+\n/g, "\n")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
  );
}

function normalize(text) {
  return decodeHtml(text)
    .toLowerCase()
    .replace(/[^a-z0-9가-힣\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  return normalize(text)
    .split(" ")
    .filter((token) => token.length >= 2 && !STOPWORDS.has(token));
}

function uniq(values) {
  return [...new Set(values)];
}

function extractGuideUrls(text) {
  return uniq(
    [...text.matchAll(/https:\/\/steamcommunity\.com\/sharedfiles\/filedetails\/\?id=\d+/g)].map((match) => match[0]),
  );
}

function pageSuitability(page, gameName) {
  const haystack = normalize(`${page.title} ${page.intro}`);
  const gameTokens = tokenize(gameName || "");
  let score = 0;
  const positiveTitle =
    /(100|achievement|complete guide|walkthrough|hidden achievement|story related|reference|guide)/i.test(page.title);
  const positiveIntro =
    /(achievement|completion list|100%|story related|side mission|hidden achievement|walkthrough|guide)/i.test(page.intro);
  const negativeTitle =
    /(steam profile|soundtrack|actual matters in japanese school now|bakamitai|русификатор|translation|localization|save file|ultimate saves|mod|trainer|cheat|reshade|fix)/i.test(page.title);
  const negativeIntro =
    /(steam profile|featured showcase|soundtrack|русификатор|translation|localization|save file|ultimate saves|mod|trainer|cheat|reshade|patch)/i.test(page.intro);

  if (negativeTitle || negativeIntro) return -999;
  if (!positiveTitle && !positiveIntro) return -999;

  if (positiveTitle) {
    score += 80;
  }
  if (positiveIntro) {
    score += 40;
  }
  for (const token of gameTokens) {
    if (haystack.includes(token)) score += 5;
  }

  return score;
}

function pagePreferenceScore(page, gameName) {
  const title = page.title ?? "";
  let score = 0;

  if (gameName && title.toLowerCase().includes(gameName.toLowerCase())) score += 30;
  if (/100%\s+achievement\s+guide/i.test(title)) score += 35;
  if (/achievement\s+guide|walkthrough|guide/i.test(title)) score += 18;
  if (/side activities tips/i.test(title)) score -= 10;
  if (/[А-Яа-яЁёІіЇїЄєҐґ]/.test(title)) score -= 35;
  if (/[一-龯ぁ-ゖァ-ヺ]/.test(title)) score -= 10;

  return score;
}

function preferPrimaryGuidePages(pages, gameName) {
  const hasStrongEnglishPage = pages.some((page) =>
    !/[А-Яа-яЁёІіЇїЄєҐґ]/.test(page.title ?? "") &&
    pageSuitability(page, gameName) >= 20 &&
    /100%\s+achievement\s+guide|achievement\s+guide/i.test(page.title ?? ""),
  );

  if (!hasStrongEnglishPage) return pages;

  return pages.filter((page) => {
    const title = page.title ?? "";
    if (/[А-Яа-яЁёІіЇїЄєҐґ]/.test(title)) return false;
    return /guide|tips|walkthrough/i.test(title) || pageSuitability(page, gameName) >= 20;
  });
}

function parseGuidePage(html, url) {
  const titleMatch = html.match(/<div class="workshopItemTitle">([\s\S]*?)<\/div>/i);
  const introMatch = html.match(/<div class="guideTopDescription" id="highlightContent">([\s\S]*?)<\/div>/i);
  const sectionMatches = [...html.matchAll(
    /<div class="subSection detailBox" id="[^"]+">[\s\S]*?<div class="subSectionTitle">\s*([\s\S]*?)\s*<\/div>\s*<div class="subSectionDesc">\s*([\s\S]*?)<div style="clear: both"><\/div>\s*<\/div>/gi,
  )];

  const sections = sectionMatches.map((match) => ({
    title: stripTags(match[1]),
    text: stripTags(match[2]),
    raw: match[2],
  }));

  return {
    url,
    title: titleMatch ? stripTags(titleMatch[1]) : url,
    intro: introMatch ? stripTags(introMatch[1]) : "",
    sections,
    links: uniq([
      ...extractGuideUrls(html),
      ...extractGuideUrls(introMatch?.[1] ?? ""),
      ...sections.flatMap((section) => extractGuideUrls(section.raw)),
    ]),
  };
}

async function fetchText(url) {
  for (let attempt = 0; attempt < 4; attempt += 1) {
    const res = await fetch(url, {
      headers: {
        "user-agent": "Mozilla/5.0 (compatible; KamurochoGuideBackfill/1.0)",
      },
    });
    if (res.ok) {
      await new Promise((resolve) => setTimeout(resolve, 700));
      return await res.text();
    }
    if (res.status !== 429 || attempt === 3) {
      throw new Error(`Fetch failed ${res.status}: ${url}`);
    }
    await new Promise((resolve) => setTimeout(resolve, 2500 * (attempt + 1)));
  }
  throw new Error(`Fetch failed: ${url}`);
}

async function getTopGuideUrls(appId, limit = 6) {
  if (!STEAM_API_KEY) return [];
  const params = new URLSearchParams({
    key: STEAM_API_KEY,
    query_type: "9",
    numperpage: String(limit),
    appid: String(appId),
    filetype: "10",
    return_vote_data: "true",
    return_short_description: "true",
    format: "json",
  });
  const url = `https://api.steampowered.com/IPublishedFileService/QueryFiles/v1/?${params.toString()}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const json = await res.json();
  const files = json?.response?.publishedfiledetails ?? [];
  return files
    .map((file) => file?.publishedfileid)
    .filter(Boolean)
    .map((id) => `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`);
}

async function collectCandidateGuides(appId, guideRows, gameName, seedUrls = []) {
  const urls = new Set();

  for (const row of guideRows) {
    if (row.source_url?.includes("steamcommunity.com/sharedfiles/filedetails")) urls.add(row.source_url);
    for (const url of extractGuideUrls(row.content ?? "")) urls.add(url);
  }

  for (const url of await getTopGuideUrls(appId, 6)) urls.add(url);
  for (const url of seedUrls) {
    if (url) urls.add(url);
  }

  const pages = [];
  const seen = new Set();
  const queue = [...urls].slice(0, 12);

  while (queue.length > 0 && pages.length < 12) {
    const url = queue.shift();
    if (!url || seen.has(url)) continue;
    seen.add(url);
    try {
      const html = await fetchText(url);
      const page = parseGuidePage(html, url);
      if (pageSuitability(page, gameName) >= 20) {
        pages.push(page);
      }

      const looksLikeReference =
        /reference/i.test(page.title) ||
        /link to the original/i.test(page.intro) ||
        /exactly the same/i.test(page.intro);

      if (looksLikeReference) {
        for (const linkedUrl of page.links) {
          if (!seen.has(linkedUrl) && queue.length < 20) queue.push(linkedUrl);
        }
      }
    } catch (error) {
      console.error("[guide-fetch]", url, error.message);
    }
  }

  return pages;
}

function scoreSection(section, achievement) {
  const sectionNorm = normalize(`${section.title} ${section.text}`);
  const titleNorm = normalize(achievement.display_name || achievement.api_name);
  const descNorm = normalize(achievement.description || "");
  const tokens = uniq([
    ...tokenize(achievement.api_name || ""),
    ...tokenize(achievement.display_name || ""),
    ...tokenize(achievement.description || ""),
    ...tokenize(achievement.nameKo || ""),
    ...tokenize(achievement.descKo || ""),
  ]);

  let score = 0;
  if (titleNorm && sectionNorm.includes(titleNorm)) score += 80;
  if (descNorm && descNorm.length > 12 && sectionNorm.includes(descNorm)) score += 50;

  for (const token of tokens) {
    if (normalize(section.title).includes(token)) score += 10;
    if (sectionNorm.includes(token)) score += 3;
  }

  if (/missable achievement alert/i.test(section.text)) score += 8;
  if (/you will be rewarded with|rewarded with/i.test(section.text)) score += 5;
  if (/choose |head to |complete |beat |talk to |observe |buy |visit /i.test(section.text)) score += 5;

  return score;
}

function splitSentences(text) {
  const protectedText = text
    .replace(/\bMr\./g, "Mr__DOT__")
    .replace(/\bMrs\./g, "Mrs__DOT__")
    .replace(/\bMs\./g, "Ms__DOT__")
    .replace(/\bDr\./g, "Dr__DOT__");

  return protectedText
    .replace(/\n+/g, "\n")
    .split(/\n|(?<=[.!?])\s+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function restoreProtectedDots(text) {
  return text.replace(/__DOT__/g, ".");
}

function sentenceRelevance(line, achievement) {
  const cleanLine = restoreProtectedDots(line);
  const lineNorm = normalize(cleanLine);
  const titleNorm = normalize(achievement.display_name || achievement.api_name);
  const descNorm = normalize(achievement.description || "");
  const tokens = uniq([
    ...tokenize(achievement.api_name || ""),
    ...tokenize(achievement.display_name || ""),
    ...tokenize(achievement.description || ""),
    ...tokenize(achievement.nameKo || ""),
    ...tokenize(achievement.descKo || ""),
  ]);

  let score = 0;
  if (titleNorm && lineNorm.includes(titleNorm)) score += 60;
  if (descNorm && descNorm.length > 12 && lineNorm.includes(descNorm)) score += 40;
  for (const token of tokens) {
    if (lineNorm.includes(token)) score += 8;
  }
  if (/choose |head to |complete |beat |talk to |observe |buy |visit |wait |play |unlock |go to /i.test(cleanLine)) {
    score += 5;
  }
  if (/rewarded with|achievement alert|missable/i.test(cleanLine)) score += 3;
  return score;
}

function storyChapterNumber(achievement) {
  const description = achievement.description || "";
  const chapter = description.match(/complete chapter\s*(\d{1,2})/i);
  if (chapter) return Number(chapter[1]);
  return null;
}

function isStoryClearAchievement(achievement) {
  return /스토리\s*클리어/.test(achievement.nameKo || "");
}

function chapterFromSectionTitle(title) {
  const chapter = (title || "").match(/chapter\s*(\d{1,2})/i);
  if (chapter) return Number(chapter[1]);
  return null;
}

function isFinalChapterAchievement(achievement) {
  return /complete the final chapter/i.test(achievement.description || "") || /finale/i.test(achievement.nameKo || "");
}

function isSubstoryCountAchievement(achievement) {
  return /complete\s+\d+\s+substories|complete all substories/i.test(achievement.description || "");
}

function buildStoryChapterGuideContent(achievement, page, chapter) {
  const route = chapter ? `**${page.title}** → **Chapter ${chapter}**` : `**${page.title}**`;
  return [
    achievement.description || achievement.display_name,
    "",
    "**Do this next:**",
    `- Follow ${route} and keep advancing the main story.`,
    "- This unlock is automatic once the chapter-end sequence finishes on the same save.",
    "- If you are doing a full completion run, use this chapter to wrap up open side objectives before moving on.",
  ].join("\n");
}

function buildFinalChapterGuideContent(achievement, page) {
  return [
    achievement.description || achievement.display_name,
    "",
    "**Do this next:**",
    `- Use **${page.title}** as your main route and continue through the finale.`,
    "- This achievement unlocks automatically when you clear the final chapter.",
    "- Finish any remaining cleanup before committing to the endgame if you are combining this with 100% routing.",
  ].join("\n");
}

function buildSubstoryGuideContent(achievement, page) {
  const description = achievement.description || achievement.display_name;
  const count = description.match(/complete\s+(\d+)\s+substories/i)?.[1] ?? null;
  return [
    description,
    "",
    "**Do this next:**",
    `- Use **${page.title}** as your substory checklist and keep clearing side stories on the same save.`,
    count
      ? `- Track progress until your cleared substory count reaches **${count}**.`
      : "- Keep going until every substory in the game is complete.",
    "- Work through available substories as they open, then finish the rest during free exploration or cleanup.",
  ].join("\n");
}

function buildGuideContent(achievement, page, section) {
  const sentences = splitSentences(section.text);
  const scoredLines = sentences
    .map((line, index) => ({ line: restoreProtectedDots(line), index, score: sentenceRelevance(line, achievement) }))
    .filter((entry) => entry.score >= 8)
    .sort((a, b) => (b.score - a.score) || (a.index - b.index))
    .slice(0, 6)
    .sort((a, b) => a.index - b.index)
    .map((entry) => entry.line);

  const steps = [];

  for (const line of scoredLines) {
    const cleaned = line.replace(/^- /, "").trim();
    if (cleaned && !steps.includes(cleaned)) steps.push(cleaned);
    if (steps.length >= 5) break;
  }

  if (steps.length === 0) {
    for (const line of sentences) {
      const cleaned = restoreProtectedDots(line).replace(/^- /, "").trim();
      if (cleaned.length >= 30 && !steps.includes(cleaned)) steps.push(cleaned);
      if (steps.length >= 4) break;
    }
  }

  const isLikelyMissable = /\bmissable\b|miss-able|놓치기 쉬운|lock out|point of no return/i.test(
    `${achievement.display_name || ""} ${achievement.description || ""} ${section.text}`,
  );
  const watchFor = isLikelyMissable
    ? sentences
        .map((line) => restoreProtectedDots(line))
        .filter((line) => sentenceRelevance(line, achievement) >= 12)
        .filter((line) => /\bmissable\b|miss-able|legend difficulty|premium adventure|point of no return|rewarded with/i.test(line))
    : [];

  const lines = [
    achievement.description || achievement.display_name,
    "",
    "**Do this next:**",
    ...steps.slice(0, 5).map((step) => `- ${step}`),
  ];

  if (watchFor.length > 0) {
    lines.push("", "**Watch for:**", ...watchFor.slice(0, 3).map((line) => `- ${line}`));
  }

  return lines.join("\n");
}

function isMetaAchievement(achievement) {
  const haystack = normalize(
    [
      achievement.api_name,
      achievement.display_name,
      achievement.description,
      achievement.nameKo,
      achievement.descKo,
    ]
      .filter(Boolean)
      .join(" "),
  );

  return (
    /platinum|unlock every other achievement|all other achievement|master detective|detective of legend|conquista final/.test(
      haystack,
    ) || (
      haystack.includes("모든 다른 업적") ||
      haystack.includes("모든 업적")
    )
  );
}

function buildMetaGuideContent(achievement, page) {
  const lines = [
    achievement.description || achievement.display_name,
    "",
    "**Do this next:**",
    `- Use **${page.title}** as the full completion checklist for this game.`,
    "- Clear the story, then finish side cases or substories, progression systems, and minigame tracks on the same save.",
    "- Finish side cases or substories, collection tracks, progression checklists, and all minigame-related trophies from the guide before cleanup.",
    "- Re-check the guide's endgame or 100% section once every other achievement is done to confirm the last unlock conditions.",
    "",
    "**Watch for:**",
    "- Meta achievements usually pop only after every other base-game achievement is registered on the same save/profile.",
  ];

  return lines.join("\n");
}

function parseSidecar(raw) {
  if (!raw || !raw.startsWith("{")) return {};
  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function translateText(text, target = "ko") {
  const cacheKey = `${target}:${text}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);

  const url =
    "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=" +
    target +
    "&dt=t&q=" +
    encodeURIComponent(text);
  const res = await fetch(url, {
    headers: { "user-agent": "Mozilla/5.0 (compatible; KamurochoGuideBackfill/1.0)" },
  });
  if (!res.ok) throw new Error(`Translate failed ${res.status}`);
  const payload = await res.json();
  const translated = (payload?.[0] ?? []).map((part) => part[0] ?? "").join("");
  translationCache.set(cacheKey, translated);
  await new Promise((resolve) => setTimeout(resolve, 250));
  return translated;
}

function isGenericKoreanAchievementName(nameKo, displayName, gameName) {
  const value = (nameKo ?? "").trim();
  if (!value) return true;
  if (/[A-Za-z]{4,}/.test(value)) return true;
  if (gameName && normalize(value) === normalize(gameName)) return true;
  if (
    displayName &&
    /^(프롤로그|에필로그|최종장|제\s*\d+\s*장|챕터\s*\d+).*(클리어|완료)$/.test(value) &&
    /[A-Za-z]/.test(displayName)
  ) {
    return true;
  }
  return false;
}

async function preferredKoreanAchievementName(achievement) {
  if (!isGenericKoreanAchievementName(achievement.nameKo, achievement.display_name, achievement.gameName)) {
    return achievement.nameKo;
  }
  if (achievement.display_name) {
    return await translateText(achievement.display_name, "ko");
  }
  return achievement.api_name;
}

async function localizeGuideContent(englishContent, achievement, locale) {
  if (locale === "english") return englishContent;
  if (locale === "koreana" && achievement.manualKoContent) return achievement.manualKoContent;

  const lines = englishContent.split("\n");
  const targetLang = "ko";
  const targetName = await preferredKoreanAchievementName(achievement);
  const localized = [];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (index === 0) {
      localized.push(targetName);
      continue;
    }
    if (!line.trim()) {
      localized.push("");
      continue;
    }

    let nextLine = line;

    nextLine = nextLine
      .replace("**Do this next:**", "**지금 해야 할 일:**")
      .replace("**Watch for:**", "**주의할 점:**")
      .replace("///MISSABLE ACHIEVEMENT ALERT///", "놓치기 쉬운 업적입니다.");

    if (nextLine.startsWith("- Use the route from ")) {
      nextLine = nextLine.replace(
        /^- Use the route from (.+)$/,
        "- 다음 공략 흐름을 기준으로 진행하세요: $1",
      );
      localized.push(nextLine);
      continue;
    }

    if (nextLine.startsWith("- Follow **")) {
      nextLine = nextLine.replace(
        /^- Follow (.+) and keep advancing the main story\.$/,
        "- $1를 따라 계속해서 메인 스토리를 진행하세요.",
      );
      localized.push(nextLine);
      continue;
    }

    if (nextLine === "- This unlock is automatic once the chapter-end sequence finishes on the same save.") {
      localized.push("- 같은 저장 파일에서 해당 챕터의 종료 이벤트를 보면 자동으로 해금됩니다.");
      continue;
    }

    if (nextLine === "- If you are doing a full completion run, use this chapter to wrap up open side objectives before moving on.") {
      localized.push("- 100% 진행 중이라면 다음으로 넘어가기 전에 이 챕터에서 열려 있는 사이드 요소를 먼저 정리하세요.");
      continue;
    }

    if (nextLine.startsWith("- Use **") && nextLine.endsWith("** as your main route and continue through the finale.")) {
      nextLine = nextLine.replace(
        /^- Use (.+) as your main route and continue through the finale\.$/,
        "- 메인 동선은 $1를 기준으로 따라가면서 그대로 엔딩까지 진행하세요.",
      );
      localized.push(nextLine);
      continue;
    }

    if (nextLine === "- This achievement unlocks automatically when you clear the final chapter.") {
      localized.push("- 최종장을 클리어하면 이 업적은 자동으로 해금됩니다.");
      continue;
    }

    if (nextLine === "- Finish any remaining cleanup before committing to the endgame if you are combining this with 100% routing.") {
      localized.push("- 100% 동선과 함께 진행 중이라면 엔드게임에 들어가기 전에 남은 정리 요소를 먼저 끝내세요.");
      continue;
    }

    if (nextLine.startsWith("- Use **") && nextLine.endsWith("** as your substory checklist and keep clearing side stories on the same save.")) {
      nextLine = nextLine.replace(
        /^- Use (.+) as your substory checklist and keep clearing side stories on the same save\.$/,
        "- $1를 서브스토리 체크리스트로 삼고 같은 저장 파일에서 계속 진행하세요.",
      );
      localized.push(nextLine);
      continue;
    }

    if (/^- Track progress until your cleared substory count reaches \*\*(\d+)\*\*\.$/.test(nextLine)) {
      nextLine = nextLine.replace(
        /^- Track progress until your cleared substory count reaches \*\*(\d+)\*\*\.$/,
        "- 클리어한 서브스토리 수가 **$1개**에 도달할 때까지 진행 상황을 체크하세요.",
      );
      localized.push(nextLine);
      continue;
    }

    if (nextLine === "- Keep going until every substory in the game is complete.") {
      localized.push("- 게임 내 모든 서브스토리를 끝낼 때까지 계속 진행하세요.");
      continue;
    }

    if (nextLine === "- Work through available substories as they open, then finish the rest during free exploration or cleanup.") {
      localized.push("- 열리는 서브스토리부터 차례대로 진행하고, 나머지는 자유 이동이나 후반 정리 구간에서 마무리하세요.");
      continue;
    }

    if (nextLine === "- Clear the story, then finish side cases or substories, progression systems, and minigame tracks on the same save.") {
      localized.push("- 먼저 스토리를 끝낸 뒤, 같은 저장 파일에서 서브스토리와 성장 요소, 미니게임 트랙을 차례대로 정리하세요.");
      continue;
    }

    if (
      nextLine.includes("**지금 해야 할 일:**") ||
      nextLine.includes("**주의할 점:**") ||
      nextLine.includes("놓치기 쉬운 업적입니다.")
    ) {
      localized.push(nextLine);
      continue;
    }

    const bulletPrefix = nextLine.startsWith("- ") ? "- " : "";
    const body = bulletPrefix ? nextLine.slice(2) : nextLine;
    const translated = await translateText(body, targetLang);
    localized.push(`${bulletPrefix}${translated}`);
  }

  return localized.join("\n");
}

function manualOverrideFor(appId, apiName) {
  return MANUAL_GUIDE_OVERRIDES[`${appId}:${apiName}`] ?? null;
}

async function main() {
  const onlyAppId = argValue("--app-id");
  const appIdsArg = argValue("--app-ids");
  const seedUrlsArg = argValue("--seed-urls");
  const minScore = Number(argValue("--min-score") ?? 60);
  const appIdSet = appIdsArg
    ? new Set(appIdsArg.split(",").map((value) => value.trim()).filter(Boolean))
    : null;
  const seedUrls = seedUrlsArg
    ? seedUrlsArg.split(",").map((value) => value.trim()).filter(Boolean)
    : [];

  let gameQuery = supabase.from("games").select("app_id,name").order("app_id", { ascending: true });
  if (onlyAppId) {
    gameQuery = gameQuery.eq("app_id", Number(onlyAppId));
  } else if (appIdSet) {
    gameQuery = gameQuery.in("app_id", [...appIdSet].map((value) => Number(value)));
  }
  const { data: scopedGames, error: gamesError } = await gameQuery;
  if (gamesError) throw new Error(gamesError.message);
  console.log(`[start] apps=${scopedGames?.length ?? 0}`);

  for (const gameRow of scopedGames ?? []) {
    const appId = Number(gameRow.app_id);
    const gameName = gameRow.name;
    console.log(`\n[app] ${appId} ${gameName ?? ""}`);

    const { data: achievements, error: achievementsError } = await supabase
      .from("achievements")
      .select("id, api_name, display_name, description, category")
      .eq("app_id", appId);
    if (achievementsError) throw new Error(achievementsError.message);
    if (!achievements?.length) {
      console.log("  no achievements");
      continue;
    }

    const achievementIds = achievements.map((item) => item.id);
    const { data: guideRows, error: guideRowsError } = await supabase
      .from("guides")
      .select("id, achievement_id, content, source_url, locale")
      .in("achievement_id", achievementIds)
      .eq("is_active", true);
    if (guideRowsError) throw new Error(guideRowsError.message);

    const extraSeeds = CURATED_SEED_URLS[appId] ?? [];
    const candidatePages = await collectCandidateGuides(appId, guideRows ?? [], gameName ?? "", [...extraSeeds, ...seedUrls]);
    const preferredPages = extraSeeds.length > 0
      ? candidatePages.filter((page) => extraSeeds.includes(page.url))
      : preferPrimaryGuidePages(candidatePages, gameName ?? "");
    console.log(`  candidate pages=${candidatePages.length} preferred=${preferredPages.length}`);
    if (preferredPages.length === 0) continue;

    let updated = 0;

    for (const achievement of achievements) {
      const sidecar = parseSidecar(achievement.category);
      const manualOverride = manualOverrideFor(appId, achievement.api_name);
      const enrichedAchievement = {
        ...achievement,
        nameKo: sidecar?.nameKo ?? "",
        descKo: sidecar?.descKo ?? "",
        manualKoContent: manualOverride?.koreanContent ?? null,
        gameName,
      };

      let best = null;
      if (!manualOverride) {
        for (const page of preferredPages) {
          const pageBonus = pagePreferenceScore(page, gameName ?? "");
          for (const section of page.sections) {
            const score = scoreSection(section, enrichedAchievement) + pageBonus;
            if (!best || score > best.score) best = { score, page, section };
          }
        }
      }

      const fallbackPage = preferredPages[0];
      const canUseMetaFallback =
        fallbackPage &&
        isMetaAchievement(enrichedAchievement) &&
        pageSuitability(fallbackPage, gameName ?? "") >= 20;
      const chapterNo = storyChapterNumber(enrichedAchievement) ?? (isStoryClearAchievement(enrichedAchievement) ? chapterFromSectionTitle(best?.section?.title ?? "") : null);
      const isFinalChapter = isFinalChapterAchievement(enrichedAchievement) || (isStoryClearAchievement(enrichedAchievement) && /finale/i.test(best?.section?.title ?? ""));
      const isSubstoryCount = isSubstoryCountAchievement(enrichedAchievement);

      if (!manualOverride && !chapterNo && !isFinalChapter && !isSubstoryCount && (!best || best.score < minScore) && !canUseMetaFallback) continue;

      const englishContent = manualOverride
        ? manualOverride.englishContent
        : chapterNo && fallbackPage
          ? buildStoryChapterGuideContent(enrichedAchievement, fallbackPage, chapterNo)
          : isFinalChapter && fallbackPage
            ? buildFinalChapterGuideContent(enrichedAchievement, fallbackPage)
            : isSubstoryCount && fallbackPage
              ? buildSubstoryGuideContent(enrichedAchievement, fallbackPage)
        : canUseMetaFallback && (!best || best.score < minScore)
          ? buildMetaGuideContent(enrichedAchievement, fallbackPage)
          : buildGuideContent(enrichedAchievement, best.page, best.section);
      const confidence = Number(
        Math.min(
          0.95,
          Math.max(
            0.65,
            manualOverride
              ? 0.84
              : chapterNo || isFinalChapter || isSubstoryCount
                ? 0.86
              : canUseMetaFallback && (!best || best.score < minScore)
                ? 0.72
                : best.score / 100,
          ),
        ).toFixed(2),
      );
      const sourcePage = manualOverride
        ? { url: manualOverride.sourceUrl, title: "Manual override" }
        : chapterNo || isFinalChapter || isSubstoryCount
          ? fallbackPage
        : canUseMetaFallback && (!best || best.score < minScore)
          ? fallbackPage
          : best.page;
      const targetGuides = (guideRows ?? []).filter((row) => row.achievement_id === achievement.id);
      const existingByLocale = new Map(
        targetGuides
          .filter((row) => row.locale)
          .map((row) => [row.locale, row]),
      );

      for (const locale of GUIDE_LOCALES) {
        const content = await localizeGuideContent(englishContent, enrichedAchievement, locale);
        const existing = existingByLocale.get(locale);

        if (existing?.id) {
          const { error: updateError } = await supabase
            .from("guides")
            .update({
              content,
              confidence,
              source_url: sourcePage.url,
              updated_at: new Date().toISOString(),
            })
            .eq("id", existing.id);
          if (updateError) {
            console.error("  update failed", achievement.display_name, locale, updateError.message);
          }
          continue;
        }

        const { error: insertError } = await supabase
          .from("guides")
          .insert({
            achievement_id: achievement.id,
            locale,
            content,
            confidence,
            source_type: "ai",
            source_url: sourcePage.url,
            is_active: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
        if (insertError) {
          console.error("  insert failed", achievement.display_name, locale, insertError.message);
        }
      }

      updated += 1;
      if (manualOverride) {
        console.log(`  updated ${achievement.display_name} <- MANUAL OVERRIDE`);
      } else if (chapterNo || isFinalChapter || isSubstoryCount) {
        console.log(`  updated ${achievement.display_name} <- TEMPLATE`);
      } else if (canUseMetaFallback && (!best || best.score < minScore)) {
        console.log(`  updated ${achievement.display_name} <- ${sourcePage.title} / META FALLBACK`);
      } else {
        console.log(`  updated ${achievement.display_name} <- ${best.page.title} / ${best.section.title} (${best.score})`);
      }
    }

    console.log(`  updated achievements=${updated}/${achievements.length}`);
  }
}

await main();
