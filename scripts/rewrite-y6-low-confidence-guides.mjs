import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing Supabase env vars.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

function storyGuide(locale) {
  if (locale === "ko") {
    return [
      "**지금 해야 할 일:**",
      "- 이 업적은 메인 스토리 진행 중 자동으로 해금되는 숨김 업적입니다.",
      "- 현재 세이브에서 메인 스토리를 계속 진행하면 별도 파밍 없이 자연스럽게 달성됩니다.",
      "- 서브 콘텐츠 정리보다 스토리 진도를 먼저 밀어도 됩니다.",
      "",
      "**주의할 점:**",
      "- 챕터 스킵이나 특수 조건은 필요 없습니다. 관련 장면이나 보스전이 끝나면 바로 뜹니다.",
    ].join("\n");
  }

  return [
    "**Do this next:**",
    "- This is a hidden story achievement that unlocks automatically as you progress the main story.",
    "- Keep advancing the current save and clear the related chapter or boss sequence normally.",
    "- No special routing or side-content setup is needed for this unlock.",
    "",
    "**Watch for:**",
    "- You do not need to grind for this one. It should pop as soon as the required story segment ends.",
  ].join("\n");
}

function template(locale, title, steps, watch = []) {
  const stepHeader = locale === "ko" ? "**지금 해야 할 일:**" : "**Do this next:**";
  const watchHeader = locale === "ko" ? "**주의할 점:**" : "**Watch for:**";
  const lines = [title, "", stepHeader, ...steps.map((step) => `- ${step}`)];
  if (watch.length > 0) {
    lines.push("", watchHeader, ...watch.map((line) => `- ${line}`));
  }
  return lines.join("\n");
}

function guideForAchievement(name, description, locale) {
  if (!description) return storyGuide(locale);

  const desc = description.trim();

  const countMatch = desc.match(/^Completed (\d+) substories\.$/i);
  if (countMatch) {
    const count = Number(countMatch[1]);
    return locale === "ko"
      ? template("ko", name, [
          `서브스토리를 총 ${count}개 완료하면 됩니다.`,
          "맵을 돌며 말풍선이나 이벤트 표시가 뜨는 NPC를 우선 처리하세요.",
          "메인 스토리를 일정 부분 밀어야 열리는 서브스토리도 있으니, 막히면 스토리를 조금 더 진행한 뒤 다시 확인하세요.",
        ], [
          "완료 수만 채우면 되므로 어려운 미니게임 연계 서브스토리는 나중으로 미뤄도 됩니다.",
        ])
      : template("en", name, [
          `Complete ${count} substories in total.`,
          "Prioritize NPC events that appear naturally while moving through the city.",
          "If the count stalls, push the main story forward a bit and revisit substory hotspots.",
        ], [
          "Only the total count matters here, so you can leave harder minigame-linked substories for later.",
        ]);
  }

  if (/^Completed all substories\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "모든 서브스토리를 끝내야 합니다.",
          "맵 이동 중 발생하는 일반 서브스토리부터 정리하고, 마지막에는 특정 미니게임이나 스토리 진행으로 해금되는 것들을 청소하세요.",
          "진행이 막히면 미완료 지역을 다시 돌고, 메인 스토리 후반 해금 요소가 남았는지 확인하세요.",
        ], [
          "한두 개는 스토리 진행이나 선행 서브스토리 완료가 필요할 수 있습니다.",
        ])
      : template("en", name, [
          "Clear every substory in the game.",
          "Finish the naturally available substories first, then clean up the ones gated behind minigames or story progress.",
          "If you are missing the final few, revisit each city and check for progression-locked events.",
        ], [
          "Some substories only appear after specific story beats or prerequisite side content.",
        ]);
  }

  const troubleMatch = desc.match(/^Completed (\d+) types of Trouble Missions\.$/i);
  if (troubleMatch) {
    const count = Number(troubleMatch[1]);
    return locale === "ko"
      ? template("ko", name, [
          `트러블 미션 종류를 ${count}개 완료하면 됩니다.`,
          "거리에서 시민 구조, 배달, 호위처럼 다른 유형의 요청을 골고루 처리하세요.",
          "같은 종류를 반복하기보다 새로운 유형을 우선적으로 채우는 편이 빠릅니다.",
        ], [
          "업적은 총 횟수보다 '서로 다른 종류'가 중요합니다.",
        ])
      : template("en", name, [
          `Complete ${count} different Trouble Mission types.`,
          "Work through a mix of street requests instead of repeating the same mission category.",
          "Prioritize new mission types whenever they appear around town.",
        ], [
          "This tracks unique mission types, not raw repeat clears.",
        ]);
  }

  const heatMatch = desc.match(/^Activated Extreme Heat Mode (\d+) times\.$/i);
  if (heatMatch) {
    const count = Number(heatMatch[1]);
    return locale === "ko"
      ? template("ko", name, [
          `익스트림 히트 모드를 총 ${count}번 발동하면 됩니다.`,
          "전투 중 히트 게이지를 채운 뒤 익스트림 히트 모드를 바로 켜고, 짧은 전투라도 반복해서 횟수를 누적하세요.",
          "잡몹 전투가 많은 구간이나 탐색 중 랜덤 전투에서 자연스럽게 채울 수 있습니다.",
        ], [
          "킬 수보다 '발동 횟수'가 중요하니, 짧은 전투에서도 아끼지 말고 바로 켜세요.",
        ])
      : template("en", name, [
          `Activate Extreme Heat Mode ${count} times in total.`,
          "Fill the Heat Gauge in regular street fights and trigger Extreme Heat as soon as it is available.",
          "Short encounters still count, so use the mode often instead of saving it.",
        ], [
          "This tracks activations, not kills during the mode.",
        ]);
  }

  const runMatch = desc.match(/^Ran away from (\d+) encounters successfully\.$/i);
  if (runMatch) {
    const count = Number(runMatch[1]);
    return locale === "ko"
      ? template("ko", name, [
          `전투에서 총 ${count}번 도주에 성공하면 됩니다.`,
          "길거리 전투에 들어간 뒤 곧바로 도주를 시도하고, 성공 판정이 뜨면 다시 다른 전투에서 반복하세요.",
          "강한 적보다 일반 잡몹 전투에서 처리하는 편이 빠릅니다.",
        ])
      : template("en", name, [
          `Successfully escape from ${count} encounters.`,
          "Enter regular street fights, then immediately run away and repeat the process.",
          "Standard random encounters are the fastest way to stack the requirement.",
        ]);
  }

  const skillsMatch = desc.match(/^Obtained (\d+) skills\.$/i);
  if (skillsMatch) {
    const count = Number(skillsMatch[1]);
    return locale === "ko"
      ? template("ko", name, [
          `스킬을 총 ${count}개 배우면 됩니다.`,
          "경험치를 모아 스킬 트리에서 값이 싼 기본 능력부터 먼저 열어 개수를 빠르게 채우세요.",
          "스토리 진행, 전투, 서브스토리 보상으로 자연스럽게 경험치가 들어오므로 중반 전후에 달성되는 경우가 많습니다.",
        ])
      : template("en", name, [
          `Unlock ${count} skills in total.`,
          "Spend experience on cheaper early skills first to raise the count quickly.",
          "Normal story and side-content progression usually gives enough experience by the mid game.",
        ]);
  }

  if (/^Obtained all skills\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "모든 스킬을 해금해야 합니다.",
          "메인 스토리와 서브 콘텐츠를 최대한 진행하면서 경험치를 꾸준히 모으고, 후반에는 남은 고가 스킬을 집중적으로 구매하세요.",
          "경험치가 부족하면 트러블 미션, 클랜 크리에이터, 서브스토리 쪽을 함께 정리하는 편이 효율적입니다.",
        ], [
          "최종 업적급에 가까운 클린업 항목이라 엔드게임 정리 단계에서 노리는 편이 좋습니다.",
        ])
      : template("en", name, [
          "Unlock every skill on the tree.",
          "Progress the story and major side systems first, then spend the late-game cleanup phase buying the expensive remaining skills.",
          "If experience is short, clean up Trouble Missions, substories, and Clan Creator content.",
        ], [
          "Treat this like an endgame cleanup objective rather than an early grind target.",
        ]);
  }

  const naturalStatMatch = desc.match(/^Raised (.+?) to a natural (\d+)\.$/i);
  if (naturalStatMatch) {
    const stat = naturalStatMatch[1];
    const value = Number(naturalStatMatch[2]);
    return locale === "ko"
      ? template("ko", name, [
          `${stat} 능력치를 자연 수치 ${value}까지 올리면 됩니다.`,
          "음식이나 임시 버프가 아니라 레벨업과 성장으로 오른 기본 수치여야 합니다.",
          "경험치를 모은 뒤 능력치 관련 성장 루트에 우선 투자하세요.",
        ], [
          "소모품 효과는 판정에 포함되지 않으므로 기본 수치가 목표값에 도달해야 합니다.",
        ])
      : template("en", name, [
          `Raise ${stat} to a natural ${value}.`,
          "This must be your permanent base stat, not a temporary food or item buff.",
          "Spend earned experience on the relevant growth path until the base value reaches the target.",
        ], [
          "Temporary boosts do not count toward the unlock.",
        ]);
  }

  const totalStatsMatch = desc.match(/^Raised all stats to a natural (\d+)\.$/i);
  if (totalStatsMatch) {
    const value = Number(totalStatsMatch[1]);
    return locale === "ko"
      ? template("ko", name, [
          `모든 기본 능력치를 자연 수치 ${value}까지 올려야 합니다.`,
          "경험치를 한 스탯에 몰지 말고, 체력·공격·방어·회피·히트 게이지를 골고루 투자하면서 맞추세요.",
          "후반 경험치 수급 콘텐츠와 클린업을 병행하면 부담이 줄어듭니다.",
        ], [
          "임시 버프는 제외되므로 능력치 창 기준 기본 수치를 확인하세요.",
        ])
      : template("en", name, [
          `Raise every base stat to a natural ${value}.`,
          "Distribute experience across health, attack, defense, evade, and heat instead of overinvesting in one category.",
          "Late-game cleanup content is usually the most efficient time to finish this.",
        ], [
          "Only permanent base stats count, not temporary boosts.",
        ]);
  }

  if (/^Defeated Amon on any difficulty\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "아몬을 쓰러뜨리면 됩니다.",
          "보통 모든 서브스토리나 관련 선행 콘텐츠를 정리한 뒤 최종 보스급 도전으로 열리는 경우가 많으니, 먼저 사이드 콘텐츠를 거의 끝낸 상태로 준비하세요.",
          "회복 아이템과 고급 장비를 충분히 챙기고 도전하는 편이 안전합니다.",
        ])
      : template("en", name, [
          "Defeat Amon.",
          "This is typically an endgame side-content unlock, so finish the major prerequisite substories and side objectives first.",
          "Go in with strong gear and a full stock of healing items.",
        ]);
  }

  const expMatch = desc.match(/^Obtained ([\d,]+) total experience points\.$/i);
  if (expMatch) {
    const count = expMatch[1];
    return locale === "ko"
      ? template("ko", name, [
          `누적 경험치 ${count}를 모으면 됩니다.`,
          "메인 스토리, 전투, 서브스토리, 트러블 미션을 병행하면 자연스럽게 쌓입니다.",
          "부족하면 클랜 크리에이터나 반복 전투 구간에서 추가 경험치를 파밍하세요.",
        ])
      : template("en", name, [
          `Earn ${count} total experience points.`,
          "Story progression, street fights, Trouble Missions, and substories all contribute naturally.",
          "If you are short, clean up Clan Creator or repeat efficient combat content for extra experience.",
        ]);
  }

  const completionListMatch = desc.match(/^Completed (\d+) items on the Completion List\.$/i);
  if (completionListMatch) {
    const count = Number(completionListMatch[1]);
    return locale === "ko"
      ? template("ko", name, [
          `컴플리트 리스트 항목을 ${count}개 채우면 됩니다.`,
          "음식, 전투, 미니게임, 수집 요소처럼 빠르게 끝낼 수 있는 쉬운 항목부터 넓게 손대세요.",
          "같은 분야만 파기보다 여러 탭에서 쉬운 항목을 모으는 편이 속도가 빠릅니다.",
        ])
      : template("en", name, [
          `Complete ${count} entries on the Completion List.`,
          "Pick off easy entries across multiple tabs such as food, combat, minigames, and basic exploration tasks.",
          "Breadth is faster than grinding one difficult category early on.",
        ]);
  }

  if (/^Assembled the Kiryu Clan\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "클랜 크리에이터를 해금하고 첫 멤버 구성을 마치면 됩니다.",
          "스토리를 진행해 관련 콘텐츠가 열린 뒤, 멤버를 모아 편성까지 완료하세요.",
          "이후 클랜 관련 업적의 출발점이므로 가능하면 초반에 열어두는 편이 좋습니다.",
        ])
      : template("en", name, [
          "Unlock Clan Creator and assemble the first Kiryu Clan lineup.",
          "Advance the story until the mode opens, then recruit and assign the initial members.",
          "This is the foundation for the rest of the Clan Creator achievements, so unlock it early if possible.",
        ]);
  }

  if (/^Reached level 3 in the Kiryu Clan\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "클랜 크리에이터 레벨을 3까지 올리면 됩니다.",
          "모드를 꾸준히 플레이하면서 전투를 승리로 끝내고, 보상으로 멤버와 성장 자원을 확보하세요.",
          "쉬운 미션을 반복해도 경험치가 쌓이므로 초반 레벨 구간은 금방 넘길 수 있습니다.",
        ])
      : template("en", name, [
          "Reach level 3 in Clan Creator.",
          "Play Clan Creator regularly, win missions, and use the rewards to keep progressing the mode.",
          "Early levels rise quickly even from easier missions, so this should come naturally with light grinding.",
        ]);
  }

  if (/^Raised the Kiryu Clan's influence to 10,000\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "클랜 영향력을 10,000까지 올리면 됩니다.",
          "클랜 전투를 반복해 승리 수와 성장치를 쌓고, 보상으로 전력을 강화하면서 영향력을 올리세요.",
          "승률이 안정적인 쉬운 미션을 반복하는 편이 꾸준합니다.",
        ])
      : template("en", name, [
          "Raise Kiryu Clan influence to 10,000.",
          "Repeat Clan Creator battles, keep winning consistently, and reinvest rewards into stronger teams.",
          "Stable easy missions are usually the most efficient path if your roster is still weak.",
        ]);
  }

  if (/^Maxed out a Kiryu Clan leader's stats\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "클랜 리더 한 명의 능력치를 끝까지 올리면 됩니다.",
          "자주 쓰는 핵심 리더를 정해서 강화 자원을 집중 투자하세요.",
          "성장이 분산되면 오래 걸리니 한 명을 먼저 완성하는 편이 낫습니다.",
        ])
      : template("en", name, [
          "Max out one Kiryu Clan leader's stats.",
          "Pick a leader you use often and funnel upgrade resources into that one character first.",
          "Do not spread upgrades too thin if you want this quickly.",
        ]);
  }

  if (/^Achieved 100 victories with the Kiryu Clan\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "클랜 크리에이터 전투에서 누적 100승을 달성하면 됩니다.",
          "빠르게 이길 수 있는 난도의 미션을 반복하며 승수를 쌓으세요.",
          "후반 강적전보다 짧고 안정적인 전투를 반복하는 편이 시간 대비 효율이 좋습니다.",
        ])
      : template("en", name, [
          "Earn 100 total victories in Clan Creator.",
          "Farm the fastest missions you can clear reliably and repeat them for the win count.",
          "Consistent shorter battles are better than struggling through harder endgame fights.",
        ]);
  }

  if (/^Completed the Clan Creator storyline\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "클랜 크리에이터 메인 스토리라인을 끝내면 됩니다.",
          "모드가 열리면 스토리 미션을 차례대로 밀고, 막히는 구간에서는 팀 전력을 먼저 보강하세요.",
          "일반 전투 반복으로 자원을 모은 뒤 스토리 미션에 다시 도전하면 수월합니다.",
        ])
      : template("en", name, [
          "Finish the Clan Creator storyline.",
          "Push the mode's story missions in order, and pause to strengthen your roster if progress stalls.",
          "Grinding regular Clan Creator battles for resources can make the story clears much easier.",
        ]);
  }

  if (/^Played every minigame\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "게임 내 모든 미니게임을 한 번씩 플레이하면 됩니다.",
          "클럽 세가, 다트, 노래방, 야구 등 방문 가능한 미니게임 장소를 한 바퀴 돌며 시작만 해도 되는 항목부터 빠르게 체크하세요.",
          "컴플리트 리스트와 같이 진행하면 중복 이동을 줄일 수 있습니다.",
        ])
      : template("en", name, [
          "Play every minigame at least once.",
          "Tour each available activity spot and launch every minigame, even if you do not fully clear it yet.",
          "This pairs well with Completion List cleanup so you do not revisit locations twice.",
        ]);
  }

  if (/^Experienced every RIZAP training\./i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "RIZAP 트레이닝을 전부 체험하면 됩니다.",
          "트레이닝 메뉴를 열어 남은 프로그램을 하나씩 확인하고, 미체험 항목을 모두 완료하세요.",
          "같은 훈련 반복보다 종류를 전부 보는 데 집중하세요.",
        ])
      : template("en", name, [
          "Experience every RIZAP training session.",
          "Open the training menu and clear each unique RIZAP session at least once.",
          "Focus on unseen sessions instead of repeating the same training type.",
        ]);
  }

  if (/^Defeated the Emperor Squid\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "황제 오징어를 쓰러뜨리면 됩니다.",
          "관련 해양 이벤트나 낚시/전투 콘텐츠가 열리면 장비와 회복 수단을 챙기고 도전하세요.",
          "일반 스토리보다는 사이드 콘텐츠 정리 단계에서 준비하고 가는 편이 안전합니다.",
        ])
      : template("en", name, [
          "Defeat the Emperor Squid.",
          "Enter the related sea-side event with proper gear and healing prepared.",
          "This is easier to clean up once your character is stronger rather than rushing it early.",
        ]);
  }

  if (/^Requested every hostess\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "클럽 샤인에서 모든 호스티스를 한 번씩 지명하면 됩니다.",
          "방문할 때마다 아직 보지 않은 호스티스를 우선 선택하고, 중복 지명은 마지막으로 미루세요.",
          "명단을 따로 적어두면 빠르게 정리할 수 있습니다.",
        ])
      : template("en", name, [
          "Request every hostess at Club Shine at least once.",
          "Prioritize hostesses you have not seen yet whenever you visit the club.",
          "Keeping a simple checklist helps prevent duplicate requests.",
        ]);
  }

  if (/^Chatted with both lovely Live Chat ladies\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "라이브 채팅 여성 두 명과 각각 한 번씩 대화를 완료하면 됩니다.",
          "라이브 채팅 콘텐츠를 열고, 한 명만 반복하지 말고 두 사람 모두를 확인하세요.",
          "한쪽만 보고 끝내면 카운트가 안 되니 명단을 바꿔서 진행하세요.",
        ])
      : template("en", name, [
          "Complete chats with both Live Chat girls.",
          "Enter the Live Chat activity and make sure you interact with both women, not just one repeatedly.",
          "Swap targets after the first chat so the second one also registers.",
        ]);
  }

  if (/^Played every Club SEGA game\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "클럽 세가 안의 모든 게임을 한 번씩 플레이하면 됩니다.",
          "각 기기에서 한 판씩만 시작해도 되는 항목부터 빠르게 체크하세요.",
          "이미 `모든 미니게임 플레이` 업적을 노리고 있다면 같은 동선에서 같이 정리하면 됩니다.",
        ])
      : template("en", name, [
          "Play every Club SEGA game at least once.",
          "Launch one round on each arcade machine to register the activity quickly.",
          "This is efficient to combine with the broader 'play every minigame' cleanup.",
        ]);
  }

  if (/^Rescued three stray cats\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "길고양이 세 마리를 구조하면 됩니다.",
          "탐색 중 고양이 이벤트를 발견하면 바로 상호작용하고, 놓친 지역은 다시 돌아보세요.",
          "도시를 천천히 걸어 다니면서 사이드 콘텐츠를 병행하면 자연스럽게 찾기 쉽습니다.",
        ])
      : template("en", name, [
          "Rescue three stray cats.",
          "Interact with cat events whenever you spot them while exploring town.",
          "Walking the city during side-content cleanup usually reveals these more naturally than fast travel.",
        ]);
  }

  if (/^Won a baseball game\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "야구 경기에서 한 번 승리하면 됩니다.",
          "배팅 센터가 아니라 실제 경기 모드를 시작해 승리까지 끝내세요.",
          "초반엔 난도가 낮은 설정이나 연습 후 도전하는 편이 편합니다.",
        ])
      : template("en", name, [
          "Win a baseball game.",
          "Start an actual baseball match, not just batting practice, and finish with a victory.",
          "If you struggle, practice first and choose the easier available setup before grinding harder challenges.",
        ]);
  }

  if (/^Experienced the trials of raising a baby\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "아기 돌보기 관련 이벤트를 진행하면 됩니다.",
          "스토리나 사이드 흐름에서 육아 파트가 시작되면 관련 상호작용을 끝까지 보고 진행하세요.",
          "놓치기 쉬운 파밍형 업적은 아니므로 해당 구간을 차분히 넘기면 됩니다.",
        ])
      : template("en", name, [
          "Progress through the baby-care sequence.",
          "When the relevant story or side segment begins, follow the parenting interactions through to completion.",
          "This is more about seeing the sequence through than about heavy grinding.",
        ]);
  }

  if (/^Pulled "Great Blessing" at the temple\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "절에서 오미쿠지 `대길`을 뽑으면 됩니다.",
          "운 요소가 있으므로 절을 여러 번 방문해 반복 시도하세요.",
          "필요한 비용이 크지 않다면 다른 도시 정리 중 들를 때마다 한 번씩 돌리는 편이 부담이 적습니다.",
        ], [
          "랜덤 요소라 몇 번 만에 뜰지 보장되지 않습니다.",
        ])
      : template("en", name, [
          "Pull a `Great Blessing` fortune at the temple.",
          "This is luck-based, so plan to retry the fortune draw multiple times if necessary.",
          "It is efficient to take a few attempts whenever you pass by the temple during other cleanup.",
        ], [
          "Because it is random, the unlock may take several tries.",
        ]);
  }

  if (/^Made a store employee angry at you\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "상점 직원이 화낼 정도로 문제 행동을 하면 됩니다.",
          "매장 안에서 금지 행동이나 방해가 되는 행동을 반복해 반응을 유도하세요.",
          "반응이 없으면 다른 상점으로 옮겨 다시 시도해 보세요.",
        ])
      : template("en", name, [
          "Trigger the annoyed reaction from a store employee.",
          "Repeat disruptive behavior inside a shop until the employee reacts.",
          "If one store does not register it, try another location and repeat the interaction.",
        ]);
  }

  if (/^Found a secret passage\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "숨겨진 통로를 한 번 발견하면 됩니다.",
          "탐색 중 골목, 건물 틈, 지형 뒤쪽처럼 수상한 지점을 직접 확인하세요.",
          "스토리 이동 경로 밖의 짧은 우회 루트를 의식적으로 훑어보면 찾기 쉽습니다.",
        ])
      : template("en", name, [
          "Find a secret passage.",
          "Inspect suspicious alleys, narrow paths, and off-route areas while exploring.",
          "This usually comes from deliberately checking side routes rather than following the main path directly.",
        ]);
  }

  if (/^Jumped from a dangerously high place\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "위험할 정도로 높은 곳에서 한 번 뛰어내리면 됩니다.",
          "고저차가 큰 이동 지점이나 스토리 중 높은 위치에 있을 때 직접 점프 가능한 구간을 찾으세요.",
          "체력이 부족하면 회복 수단을 챙기고 시도하는 편이 안전합니다.",
        ])
      : template("en", name, [
          "Jump from a very high place once.",
          "Look for a drop point with a clear height difference and manually trigger the jump.",
          "Bring healing if you are worried about the fall aftermath.",
        ]);
  }

  if (/^Activated five types of eatery combos\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "식당 콤보를 서로 다른 종류로 5번 발동하면 됩니다.",
          "음식점에서 세트 조합이나 연계 메뉴를 확인하고, 이미 본 콤보는 피하면서 새 조합을 채우세요.",
          "여러 식당을 돌며 쉬운 콤보부터 모으는 편이 빠릅니다.",
        ])
      : template("en", name, [
          "Trigger five different eatery combos.",
          "Check restaurant menu combinations and prioritize combos you have not activated yet.",
          "Working across multiple restaurants is usually faster than forcing one location.",
        ]);
  }

  if (/^Took a photo of Ono Michio-kun\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "오노 미치오군을 카메라로 찍으면 됩니다.",
          "관련 캐릭터가 보일 때 카메라를 꺼내 프레임 안에 넣고 사진을 찍으세요.",
          "거리에서 지나치지 않게 이벤트나 등장 위치를 발견하면 바로 촬영하는 편이 안전합니다.",
        ])
      : template("en", name, [
          "Take a photo of Ono Michio-kun.",
          "Pull out the camera when you spot him and make sure he is properly framed before shooting.",
          "Do it immediately when the opportunity appears so you do not miss the moment.",
        ]);
  }

  if (/^Engaged enemies while a drink's effect is active\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "버프 음료를 마신 뒤 효과가 켜진 상태로 전투에 들어가면 됩니다.",
          "음료 사용 직후 가까운 적과 바로 충돌해 전투를 시작하세요.",
          "효과 지속시간이 짧을 수 있으니 전투 거리가 가까운 적을 고르는 편이 좋습니다.",
        ])
      : template("en", name, [
          "Drink a buff item and enter combat while the effect is still active.",
          "Use the drink, then immediately start a nearby street fight.",
          "Pick an enemy group close to you so the buff timer does not expire before combat starts.",
        ]);
  }

  if (/^Walked 30 seconds in first-person mode\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "1인칭 시점으로 30초 정도 걸으면 됩니다.",
          "도심에서 1인칭 시점으로 전환한 뒤 전투에 들어가지 말고 30초 이상 계속 이동하세요.",
          "안전한 거리나 적이 적은 구역에서 하면 끊기지 않아 편합니다.",
        ])
      : template("en", name, [
          "Walk in first-person mode for about 30 seconds.",
          "Switch to first-person view and keep moving without triggering combat for half a minute.",
          "Use a quieter area so random encounters do not interrupt the count.",
        ]);
  }

  if (/^Got surrounded by enemies while trying to take a picture\.$/i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "카메라를 든 상태에서 적에게 포위당하면 됩니다.",
          "적이 많은 지역에서 카메라를 꺼낸 뒤 가까운 적을 일부러 끌어모으세요.",
          "정면만 보지 말고 여러 적이 접근하도록 잠시 움직임을 늦추면 쉽게 조건이 만들어집니다.",
        ])
      : template("en", name, [
          "Pull out the camera and let enemies surround you.",
          "Use a crowded hostile area, draw the camera, and deliberately wait for multiple enemies to close in.",
          "Do not rush away too soon or the surround state may not register.",
        ]);
  }

  if (/^Obtained all other achievements\./i.test(desc)) {
    return locale === "ko"
      ? template("ko", name, [
          "기본 게임의 다른 업적을 모두 해금하면 마지막에 자동으로 뜹니다.",
          "스토리, 서브스토리, 클랜 크리에이터, 미니게임, 컴플리트 리스트 정리를 전부 끝내세요.",
          "남은 업적은 희귀도 순이나 가이드 커버리지 순으로 하나씩 지우는 편이 편합니다.",
        ])
      : template("en", name, [
          "Unlock every other base-game achievement and this will pop automatically at the end.",
          "Finish the story, substories, Clan Creator, minigames, and cleanup requirements first.",
          "Clearing the rarest or least-complete categories first is usually the cleanest route.",
        ]);
  }

  return locale === "ko"
    ? template("ko", name, [
        "업적 설명에 맞는 조건을 먼저 충족하세요.",
        "스토리 진행, 사이드 콘텐츠, 미니게임 중 해당 조건이 연결된 활동을 반복하면 됩니다.",
        "현재 세이브에서 관련 활동을 마친 뒤 바로 해금 여부를 확인하세요.",
      ])
    : template("en", name, [
        "Start by fulfilling the exact condition described for the achievement.",
        "Repeat the related story, side-content, or minigame activity until the requirement is met.",
        "Check for the unlock immediately after the relevant action completes on the current save.",
      ]);
}

async function main() {
  const { data: achievements, error: achievementError } = await supabase
    .from("achievements")
    .select("id,api_name,display_name,description")
    .eq("app_id", 1388590);
  if (achievementError) throw new Error(achievementError.message);

  const ids = achievements.map((achievement) => achievement.id);
  const { data: guides, error: guideError } = await supabase
    .from("guides")
    .select("id,achievement_id,locale,confidence,source_url")
    .in("achievement_id", ids)
    .eq("is_active", true)
    .lt("confidence", 0.7);
  if (guideError) throw new Error(guideError.message);

  let updated = 0;

  for (const guide of guides ?? []) {
    const achievement = achievements.find((row) => row.id === guide.achievement_id);
    if (!achievement) continue;

    const content = guideForAchievement(
      guide.locale === "koreana" ? achievement.display_name : achievement.description || achievement.display_name,
      achievement.description,
      guide.locale === "koreana" ? "ko" : "en",
    );

    const { error: updateError } = await supabase
      .from("guides")
      .update({
        content,
        confidence: 0.72,
        updated_at: new Date().toISOString(),
      })
      .eq("id", guide.id);
    if (updateError) throw new Error(updateError.message);
    updated += 1;
    console.log(`updated ${guide.locale} ${achievement.display_name}`);
  }

  console.log(`done updated=${updated}`);
}

await main();
