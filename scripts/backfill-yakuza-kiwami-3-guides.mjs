// One-off manual backfill for Yakuza Kiwami 3 & Dark Ties (app_id 3937550).
// All 62 achievements had guide rows pointing at the generic Steam guide-hub
// URL with empty content (inserted by backfill-guides.mjs as a placeholder).
// Content below is hand-written from PowerPyx + Gamer Social Club trophy
// guides (both confirm 0 missable trophies for this title).
//
// Usage: node --env-file=.env.local scripts/backfill-yakuza-kiwami-3-guides.mjs

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_URL || !SUPABASE_KEY) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.");
}

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const APP_ID = 3937550;
const SOURCE_URL = "https://www.powerpyx.com/yakuza-kiwami-3-dark-ties-trophy-guide-roadmap/";
const CONFIDENCE = 0.88;

// Keyed by api_name (_0.._61). en/ko follow the site's existing house style:
// first line = achievement text, blank line, **Do this next:** bullets,
// optional **Watch for:**.
const CONTENT = {
  _0: {
    en: [
      "Obtained all achievements.",
      "",
      "**Do this next:**",
      "- This is the platinum/meta achievement — it pops after every other achievement in Kiwami 3 & Dark Ties is unlocked on the same save.",
      "- Clear the Kiwami 3 main story, then the Dark Ties epilogue, and mop up the Bad Boy Dragon, Morning Glory, Kanda Damage Control, and Survival/Brawler Hell tracks in Premium Adventure.",
      "- There are 0 missable trophies in this game — anything you skip during the story can still be finished afterward in Premium Adventure.",
    ].join("\n"),
    ko: [
      "모든 도전 과제를 달성했다",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 나머지 업적 61개를 모두 같은 세이브에서 달성해야 뜨는 최종 업적입니다.",
      "- 극3 메인 스토리와 Dark Ties 에필로그를 끝낸 뒤, 반항아의 용·나팔꽃·칸다 대미지 컨트롤·서바이벌/브롤러 헬 콘텐츠를 프리미엄 어드벤처에서 마무리하세요.",
      "- 이 게임엔 놓치는 업적이 없습니다. 스토리 중 못 챙긴 요소는 클리어 후 프리미엄 어드벤처에서 전부 처리할 수 있습니다.",
    ].join("\n"),
  },
  _1: { title: "New Beginnings", ko: "작별과 여정" },
  _2: { title: "The Ryudo Encounter", ko: "만남" },
  _3: { title: "Power Struggle", ko: "권력 내습" },
  _4: { title: "The Man in the Sketch", ko: "그림 속의 남자" },
  _5: { title: "The Curtain Rises", ko: "전투의 서막" },
  _6: { title: "Gameplan", ko: "협력자" },
  _7: { title: "Goro Majima", ko: "마지마 고로" },
  _8: { title: "Conspirators", ko: "그림을 그리는 남자" },
  _9: { title: "The Plot", ko: "모략" },
  _10: { title: "Unfinished Business", ko: "남자의 결착" },
  _11: { title: "Crisis", ko: "위기" },
  _12: { title: "The End of Ambition", ko: "야망의 끝" },
  _13: { title: "Hunger", ko: "갈망" },
  _14: { title: "Complicity", ko: "공범" },
  _15: { title: "The Kirin's Ambition", ko: "기린이 꾼 꿈" },
  _16: {
    en: [
      "Completed the main story of Yakuza Kiwami 3 and Dark Ties.",
      "",
      "**Do this next:**",
      "- Clear the Kiwami 3 main story chapters through to the credits.",
      "- Then start and finish the Dark Ties epilogue campaign from the same save/main menu.",
      "- The achievement unlocks once both story campaigns have rolled credits.",
    ].join("\n"),
    ko: [
      "용과 같이 극3, 용과 같이3 외전의 메인 스토리를 모두 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 극3 메인 스토리를 챕터 순서대로 끝까지 클리어해 엔딩 크레딧을 보세요.",
      "- 같은 세이브에서 Dark Ties 외전 스토리도 이어서 끝까지 클리어하세요.",
      "- 두 스토리 모두 엔딩을 본 시점에 업적이 해금됩니다.",
    ].join("\n"),
  },
  _17: {
    en: [
      "Obtained 20 abilities for Kiryu.",
      "",
      "**Do this next:**",
      "- Open Kiryu's ability menu and spend Cash / Training Points on stat upgrades and special abilities.",
      "- Side content (substories, minigames, Reapers) hands you enough Cash and TP that you rarely need to grind extra for this.",
      "- 92 abilities exist in total for Kiryu, so 20 comes quickly during normal progression.",
    ].join("\n"),
    ko: [
      "키류의 능력 강화로 능력을 20개 이상 습득했다",
      "",
      "**지금 해야 할 일:**",
      "- 키류의 능력 강화 메뉴에서 캐시와 단련 포인트로 스탯/필살 능력을 구매하세요.",
      "- 서브 스토리, 미니게임, 리벤저스 처치 등 사이드 콘텐츠만 진행해도 캐시와 TP가 충분히 모입니다.",
      "- 키류 능력은 총 92개라 정상적으로 진행하면 20개는 금방 채워집니다.",
    ].join("\n"),
  },
  _18: {
    en: [
      "Obtained 40 abilities for Kiryu.",
      "",
      "**Do this next:**",
      "- Same ability menu as Fledgling Dragon — keep spending Cash / Training Points as you earn them from story and side content.",
      "- Prioritize cheaper stat upgrades first, then special abilities once Training Points build up.",
    ].join("\n"),
    ko: [
      "키류의 능력 강화로 능력을 40개 이상 습득했다",
      "",
      "**지금 해야 할 일:**",
      "- 신출내기 용과 같은 능력 강화 메뉴에서 계속 캐시와 단련 포인트를 소모해 능력을 구매하세요.",
      "- 저렴한 스탯 강화부터 채우고, 단련 포인트가 쌓이면 필살 능력을 이어서 습득하세요.",
    ].join("\n"),
  },
  _19: {
    en: [
      "Obtained 60 abilities for Kiryu.",
      "",
      "**Do this next:**",
      "- Keep clearing side content — substories, minigames, Coliseum, Reapers — for Cash and Training Points, then dump it all into Kiryu's ability menu.",
      "- 60 of 92 total abilities is a full completionist pass but doesn't require pure grinding if you're doing the other side achievements anyway.",
    ].join("\n"),
    ko: [
      "키류의 능력 강화로 능력을 60개 이상 습득했다",
      "",
      "**지금 해야 할 일:**",
      "- 서브 스토리, 미니게임, 투기장, 리벤저스 처치 등으로 캐시와 단련 포인트를 계속 모아 능력 강화에 투자하세요.",
      "- 전체 92개 중 60개라 다른 사이드 업적들을 같이 챙기면 순수 노가다 없이도 채워집니다.",
    ].join("\n"),
  },
  _20: {
    en: [
      "Raised Kiryu's Training Rank to Beginner.",
      "",
      "**Do this next:**",
      "- Training Rank opens up once the Bad Boy Dragon storyline is introduced in Chapter 2.",
      "- Take the promotion exam at the Chura Bar in Ryukyu — you can't use items during the exam fight, so heal up beforehand.",
      "- Beginner requires 1,500 Training Points; keep clearing side content and challenge the exam once you have enough.",
    ].join("\n"),
    ko: [
      "키류의 단련 랭크가 「초급」 이상이 되었다",
      "",
      "**지금 해야 할 일:**",
      "- 단련 랭크는 챕터 2에서 반항아의 용 스토리가 시작되면 열립니다.",
      "- 류큐의 츄라 바에서 승급 시험을 보세요. 시험 중에는 아이템을 쓸 수 없으니 미리 체력을 채워두세요.",
      "- 초급은 단련 포인트 1,500이 필요합니다. 포인트가 쌓이면 시험에 도전하세요.",
    ].join("\n"),
  },
  _21: {
    en: [
      "Raised Kiryu's Training Rank to Advanced.",
      "",
      "**Do this next:**",
      "- Keep clearing side content for Training Points, then retake the promotion exam at the Chura Bar once you hit 4,000 TP.",
      "- No items allowed during the exam fight — heal before you start it.",
    ].join("\n"),
    ko: [
      "키류의 단련 랭크가 「상급」 이상이 되었다",
      "",
      "**지금 해야 할 일:**",
      "- 단련 포인트 4,000을 모은 뒤 츄라 바에서 다시 승급 시험을 보세요.",
      "- 시험 중 아이템 사용이 불가하니 도전 전에 체력을 채워두세요.",
    ].join("\n"),
  },
  _22: {
    en: [
      "Raised Kiryu's Training Rank to Assistant Instructor.",
      "",
      "**Do this next:**",
      "- Requires 10,000 Training Points — keep stacking TP from substories, minigames, and Reapers.",
      "- Take the exam at the Chura Bar in Ryukyu once you qualify; items are disabled during the fight.",
    ].join("\n"),
    ko: [
      "키류의 단련 랭크가 「사범 대리」 이상이 되었다",
      "",
      "**지금 해야 할 일:**",
      "- 단련 포인트 10,000이 필요합니다. 서브 스토리, 미니게임, 리벤저스 처치로 계속 TP를 모으세요.",
      "- 조건을 채우면 류큐 츄라 바에서 시험을 보세요. 전투 중 아이템은 사용할 수 없습니다.",
    ].join("\n"),
  },
  _23: {
    en: [
      "Raised Kiryu's Training Rank to Master.",
      "",
      "**Do this next:**",
      "- The final rank requires 20,000 Training Points total.",
      "- Clear as much side content as you can (substories, minigames, Coliseum, Reapers) to reach it, then take the last promotion exam at the Chura Bar.",
    ].join("\n"),
    ko: [
      "키류의 단련 랭크가 「면허개전」이 되었다",
      "",
      "**지금 해야 할 일:**",
      "- 최종 랭크는 단련 포인트 20,000이 필요합니다.",
      "- 서브 스토리, 미니게임, 투기장, 리벤저스 처치 등 사이드 콘텐츠를 최대한 클리어해 포인트를 모은 뒤 츄라 바에서 마지막 승급 시험을 보세요.",
    ].join("\n"),
  },
  _24: {
    en: [
      "Took out 10 enemies with a Dragon Finisher.",
      "",
      "**Do this next:**",
      "- Fill Kiryu's Dragon Boost gauge and get it down to 25% or less remaining, then land the finishing blow — that counts as a Dragon Finisher.",
      "- It one-shots most regular enemies, so farming random street fights or Survival Hell mobs works well.",
    ].join("\n"),
    ko: [
      "드래곤 피니시로 적을 10명 이상 쓰러뜨렸다",
      "",
      "**지금 해야 할 일:**",
      "- 키류의 드래곤 부스트 게이지를 채운 뒤 25% 이하로 남았을 때 마무리 타격을 넣으면 드래곤 피니시로 인정됩니다.",
      "- 일반 잡몹은 대부분 한 방에 처리되므로 길거리 시비나 서바이벌 헬 잡몹을 상대로 반복하면 빠르게 채울 수 있습니다.",
    ].join("\n"),
  },
  _25: {
    en: [
      "Completed the Okinawa segment of Bad Boy Dragon.",
      "",
      "**Do this next:**",
      "- Bad Boy Dragon kicks off automatically during Chapter 2 when Kiryu forms the Haisai Girls to fight the Tokyo Night Terrors.",
      "- Play through the Okinawa storyline missions — recruiting members and beating down rival gangs — until that arc wraps up before the story moves back to Kamurocho.",
    ].join("\n"),
    ko: [
      "반항아의 용 오키나와 편 스토리를 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 반항아의 용은 챕터 2에서 키류가 하이사이 걸스를 결성해 도쿄 나이트 테러스와 맞서면서 자동으로 시작됩니다.",
      "- 오키나와 편 미션을 진행하며 멤버를 모으고 라이벌 팀을 제압해 해당 스토리 아크를 끝까지 클리어하세요.",
    ].join("\n"),
  },
  _26: {
    en: [
      "Completed Bad Boy Dragon.",
      "",
      "**Do this next:**",
      "- After the Okinawa segment wraps up, the storyline continues in Kamurocho against the Tokyo Night Terrors' leadership.",
      "- Keep leveling the Haisai Girls and clearing the story missions through to the Final Showdown to finish Bad Boy Dragon entirely.",
    ].join("\n"),
    ko: [
      "반항아의 용 모든 스토리를 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 오키나와 편이 끝나면 카무로초에서 도쿄 나이트 테러스 수뇌부와의 스토리가 이어집니다.",
      "- 하이사이 걸스를 계속 성장시키며 최종 결전까지 미션을 클리어해 반항아의 용을 완전히 끝내세요.",
    ].join("\n"),
  },
  _27: {
    en: [
      "Raised the Haisai Girls' Infamy Rank to 4.",
      "",
      "**Do this next:**",
      "- Infamy Rank rises as your squad members level up and you buy Baddie Shop upgrades and weapons.",
      "- Recruiting new members and clearing Bad Boy Dragon missions naturally pushes Infamy past Rank 4.",
    ].join("\n"),
    ko: [
      "하이사이 걸스의 전설 랭크가 4 이상이 되었다",
      "",
      "**지금 해야 할 일:**",
      "- 전설 랭크는 팀원 레벨을 올리고 배디 샵에서 강화·무기를 구매할수록 오릅니다.",
      "- 새 멤버를 영입하고 반항아의 용 미션을 진행하면 자연스럽게 랭크 4를 넘습니다.",
    ].join("\n"),
  },
  _28: {
    en: [
      "Raised the Haisai Girls' Infamy Rank to 8.",
      "",
      "**Do this next:**",
      "- Keep recruiting members, leveling the squad, and buying Baddie Shop weapons/upgrades to push Infamy further.",
      "- If it's slow going, buy Rally Tickets with Haisai Points (available post-story) to boost rank quickly.",
    ].join("\n"),
    ko: [
      "하이사이 걸스의 전설 랭크가 8 이상이 되었다",
      "",
      "**지금 해야 할 일:**",
      "- 멤버 영입, 팀 레벨업, 배디 샵 무기·강화 구매를 계속 진행해 전설 랭크를 더 올리세요.",
      "- 속도가 더디면 스토리 클리어 후 하이사이 포인트로 총회 티켓을 구매해 랭크를 빠르게 올릴 수 있습니다.",
    ].join("\n"),
  },
  _29: {
    en: [
      "Raised the Haisai Girls to the max Infamy Rank.",
      "",
      "**Do this next:**",
      "- Push Infamy to its cap by fully leveling squad members and buying every Baddie Shop weapon and upgrade.",
      "- If you're short after the story, buy Rally Tickets with Haisai Points and hold rallies — this is the fastest way to close the gap.",
    ].join("\n"),
    ko: [
      "하이사이 걸스의 전설 랭크가 최대가 되었다",
      "",
      "**지금 해야 할 일:**",
      "- 팀원 레벨을 최대로 올리고 배디 샵의 모든 무기·강화를 구매해 전설 랭크를 최대치까지 끌어올리세요.",
      "- 스토리 후에도 부족하면 하이사이 포인트로 총회 티켓을 사서 총회를 여는 방법이 가장 빠르게 랭크를 채웁니다.",
    ].join("\n"),
  },
  _30: {
    en: [
      "Enhanced your bike and Baddie Uniform to max level.",
      "",
      "**Do this next:**",
      "- Open the Baddies Shop (available once the Bad Boy Dragon storyline is underway) and upgrade both the bike and the Baddie Uniform.",
      "- Each has 3 upgrade tiers costing 6,000 / 30,000 / 90,000 yen — max both categories out.",
    ].join("\n"),
    ko: [
      "오토바이와 특공복을 최대까지 강화했다",
      "",
      "**지금 해야 할 일:**",
      "- 반항아의 용 스토리가 진행되면 열리는 배디 샵에서 오토바이와 특공복을 강화하세요.",
      "- 두 항목 모두 6,000 / 30,000 / 90,000엔짜리 3단계 강화가 있으니 전부 최대로 만드세요.",
    ].join("\n"),
  },
  _31: {
    en: [
      "Recruited over 50 people to your gang and held a rally.",
      "",
      "**Do this next:**",
      "- Recruit gang members from map icons, substory rewards, and minigame exchanges — there are 79 available, and you only need 50+.",
      "- Once past 50, get a Rally Ticket (from mission bonus objectives, or Haisai Points post-story) and talk to Dokuzawa to hold a rally.",
      "- The achievement needs both the recruit count AND an actual held rally.",
    ].join("\n"),
    ko: [
      "팀 멤버를 50명 이상 모아 대규모 총회를 했다",
      "",
      "**지금 해야 할 일:**",
      "- 맵 아이콘, 서브 스토리 보상, 미니게임 교환 등으로 멤버를 영입하세요. 전체 79명 중 50명 이상만 채우면 됩니다.",
      "- 50명을 넘기면 총회 티켓(미션 보너스 목표 또는 스토리 후 하이사이 포인트로 획득)을 구해 도쿠자와에게 말을 걸어 총회를 여세요.",
      "- 인원수 충족과 실제 총회 개최가 둘 다 필요합니다.",
    ].join("\n"),
  },
  _32: {
    en: [
      "Conquered 5 Coliseum tournaments.",
      "",
      "**Do this next:**",
      "- The Coliseum opens up in Kamurocho from Chapter 8 onward, after Majima's Chapter 7 challenge.",
      "- Clear any 5 of the 9 total tournaments — you don't need all of them for this achievement (only for the Amon fight later).",
    ].join("\n"),
    ko: [
      "투기장의 대회를 5개 이상 제패했다",
      "",
      "**지금 해야 할 일:**",
      "- 투기장은 챕터 7 마지마 도전 이후, 챕터 8부터 카무로초에서 열립니다.",
      "- 전체 9개 대회 중 원하는 5개만 클리어하면 됩니다. 9개 전부는 나중에 아몬전에서만 필요합니다.",
    ].join("\n"),
  },
  _33: {
    en: [
      "Took down 20 Reapers.",
      "",
      "**Do this next:**",
      "- Reapers are marked mini-boss enemies that start appearing on the map from Chapter 1, with more unlocking around Chapter 4 and Chapter 7 (36 total across both cities).",
      "- Defeat any 20 of them — they also drop good money, so they're worth fighting anyway.",
    ].join("\n"),
    ko: [
      "보복자를 20명 이상 격파했다",
      "",
      "**지금 해야 할 일:**",
      "- 리벤저스(보복자)는 챕터 1부터 맵에 표시되는 강한 잡몹으로, 챕터 4와 챕터 7 즈음 추가로 더 풀립니다 (양 도시 합쳐 총 36명).",
      "- 그중 20명만 처치하면 됩니다. 돈도 많이 주니 어차피 잡아두면 좋습니다.",
    ].join("\n"),
  },
  _34: {
    en: [
      "Defying Fate",
      "",
      "**Do this next:**",
      "- This covers defeating both optional Amon-tier bosses: **Jo Amon** (Kiryu's Premium Adventure, substory #31) and **Amon Riders** (Bad Boy Dragon's true final fight).",
      "- Jo Amon requires all 30 other Kiryu substories done, all 36 Reapers defeated, and all 9 Coliseum tournaments won. It's a long fight — bring healing items and lean on Ryukyu style; parry his gunfire back at him.",
      "- Amon Riders requires the main story finished and every optional Turf War / Total Annihilation gang battle won at least once. Level your squad to 40+ (use Buttons to raise the cap to 50) and focus down regular enemies first so your squad can help against the bosses.",
    ].join("\n"),
    ko: [
      "악연을 뛰어넘어",
      "",
      "**지금 해야 할 일:**",
      "- 이 업적은 두 아몬급 보스를 모두 격파해야 합니다: 키류의 프리미엄 어드벤처 서브 스토리 #31 **조 아몬**, 그리고 반항아의 용 진 최종전 **아몬 라이더스**.",
      "- 조 아몬은 나머지 서브 스토리 30개 클리어, 리벤저스 36명 전원 격파, 투기장 9개 대회 전 우승이 선행 조건입니다. 장기전이니 회복 아이템을 챙기고 류큐 스타일을 활용하며, 총격은 패링으로 되돌려주세요.",
      "- 아몬 라이더스는 메인 스토리 클리어와 모든 세력전/총력전 승리(1회 이상)가 필요합니다. 팀원을 40레벨 이상(버튼 아이템으로 상한을 50까지 올릴 수 있음)으로 키우고, 잡몹부터 정리해 팀원이 보스에 집중할 수 있게 만드세요.",
    ].join("\n"),
  },
  _35: {
    en: [
      "Obtained 50 types of clothing items.",
      "",
      "**Do this next:**",
      "- Clothing drops from shops in both Kamurocho and Ryukyu, minigame prize exchanges, and substory rewards — roughly 200 items exist in total.",
      "- Just keep shopping and clearing side content normally; 50 out of 200 comes without dedicated farming.",
    ].join("\n"),
    ko: [
      "50종류 이상의 코디네이트 아이템을 획득했다",
      "",
      "**지금 해야 할 일:**",
      "- 옷은 카무로초와 류큐 양쪽 상점, 미니게임 교환 상품, 서브 스토리 보상으로 얻을 수 있습니다. 전체 약 200종류입니다.",
      "- 평소처럼 쇼핑하고 사이드 콘텐츠를 진행하면 별도로 노가다하지 않아도 50개는 자연스럽게 모입니다.",
    ].join("\n"),
  },
  _36: {
    en: [
      "Made Dragon Champloo.",
      "",
      "**Do this next:**",
      "- The Morning Glory orphanage cooking content opens up around Chapter 3.",
      "- Reach Daddy Rank 2 with the kids, gather the basic ingredients (garden, fishing, shops), then cook with Haruka in the kitchen to make Dragon Champloo.",
    ].join("\n"),
    ko: [
      "「드래곤 참프루」를 만들었다",
      "",
      "**지금 해야 할 일:**",
      "- 나팔꽃 고아원 요리 콘텐츠는 챕터 3 즈음 열립니다.",
      "- 아이들과의 아빠 랭크를 2까지 올리고 텃밭·낚시·상점에서 기본 재료를 모은 뒤, 하루카와 함께 주방에서 요리해 드래곤 참프루를 만드세요.",
    ].join("\n"),
  },
  _37: {
    en: [
      "Made Dragon Sushi.",
      "",
      "**Do this next:**",
      "- Raise Daddy Rank to 4, then gather fish ingredients — get bait from requests or exploration, or just buy it at the Neighbourhood shop.",
      "- Cook with Haruka once you have Daddy Rank 4 and the fish ingredients to make Dragon Sushi.",
    ].join("\n"),
    ko: [
      "「드래곤 초밥」을 만들었다",
      "",
      "**지금 해야 할 일:**",
      "- 아빠 랭크를 4까지 올리고 생선 재료를 모으세요. 미끼는 의뢰나 탐색으로 얻거나 인근 상점에서 구매할 수 있습니다.",
      "- 아빠 랭크 4와 생선 재료가 준비되면 하루카와 함께 요리해 드래곤 초밥을 만드세요.",
    ].join("\n"),
  },
  _38: {
    en: [
      "Completed the Morning Glory story.",
      "",
      "**Do this next:**",
      "- Keep raising Daddy Rank up to 6 and leveling your garden plots to Level 5 for strawberries.",
      "- Cook the fifth and final dish, Haruka's Surprise Party dish, to wrap up the entire Morning Glory storyline.",
    ].join("\n"),
    ko: [
      "나팔꽃 스토리를 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 아빠 랭크를 6까지 올리고 텃밭을 레벨 5까지 키워 딸기를 준비하세요.",
      "- 다섯 번째이자 마지막 요리인 하루카의 서프라이즈 파티 요리를 완성하면 나팔꽃 스토리 전체가 끝납니다.",
    ].join("\n"),
  },
  _39: {
    en: [
      "Completed four of the Morning Glory kids' substories.",
      "",
      "**Do this next:**",
      "- Each of the 8 Morning Glory kids has their own relationship substory line, maxing out at 1500 bond points.",
      "- Earn bond points through main story progress, minigames with each kid, and gifting food, then let any 4 kids' final bond scenes play out.",
    ].join("\n"),
    ko: [
      "나팔꽃 아이들과의 유대 서브 스토리를 4명분 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 나팔꽃 아이 8명 각각 유대 랭크 서브 스토리가 있으며 최대 1500포인트까지 오릅니다.",
      "- 메인 스토리 진행, 아이별 미니게임, 음식 선물로 유대 포인트를 올려 4명의 마지막 유대 장면을 보면 됩니다.",
    ].join("\n"),
  },
  _40: {
    en: [
      "Completed eight of the Morning Glory kids' substories.",
      "",
      "**Do this next:**",
      "- Same system as Fatherly Advice — keep raising bond points with the remaining kids until all 8 have reached their final bond scene.",
      "- Mix story progress, minigames, and food gifts across all the kids so no one falls behind.",
    ].join("\n"),
    ko: [
      "나팔꽃 아이들과의 유대 서브 스토리를 8명분 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 마주 보는 남자와 같은 시스템입니다. 남은 아이들의 유대 포인트를 계속 올려 8명 전원 마지막 유대 장면까지 보세요.",
      "- 스토리 진행, 미니게임, 음식 선물을 골고루 활용해 특정 아이가 뒤처지지 않게 관리하세요.",
    ].join("\n"),
  },
  _41: {
    en: [
      "Experienced the LaLaLa Mobile commercial.",
      "",
      "**Do this next:**",
      "- Build up LaLaLa Friends and buy some cosmetic items from LaLaLa Mobile stores.",
      "- Once enough progress is made, you'll get a notification to visit a LaLaLa Mobile storefront and watch the commercial shoot.",
    ].join("\n"),
    ko: [
      "LaLaLa 모바일 창구에서 휴대폰 광고 체험을 했다",
      "",
      "**지금 해야 할 일:**",
      "- LaLaLa 프렌즈를 늘리고 LaLaLa 모바일 매장에서 코스메틱 아이템을 구매하세요.",
      "- 진행도가 일정 수준을 넘으면 LaLaLa 모바일 매장을 방문해 광고 촬영 이벤트를 볼 수 있습니다.",
    ].join("\n"),
  },
  _42: {
    en: [
      "Made 30 LaLaLa Friends with Kiryu.",
      "",
      "**Do this next:**",
      "- After getting the scanning phone early in Chapter 1, hold L2/LT to bring up the phone and aim at NPCs with a LaLaLa Friend icon, then interact with R2/RT.",
      "- Just walk around Kamurocho scanning people you pass — 30 out of the 100 possible friends comes naturally with normal exploration.",
    ].join("\n"),
    ko: [
      "키류로 러브 프렌드를 30명 만들었다",
      "",
      "**지금 해야 할 일:**",
      "- 챕터 1 초반 스캔 기능이 있는 휴대폰을 얻은 뒤, L2/LT로 휴대폰을 켜고 LaLaLa 프렌드 아이콘이 있는 NPC를 조준해 R2/RT로 교류하세요.",
      "- 카무로초를 돌아다니며 스쳐 지나가는 사람들을 스캔하면 전체 100명 중 30명은 평소 탐색만으로도 자연스럽게 채워집니다.",
    ].join("\n"),
  },
  _43: {
    en: [
      "Spun the prize wheel 100 times as Kiryu.",
      "",
      "**Do this next:**",
      "- The Downtown Raffle unlocks via substory #10 in Chapter 2 — Kamurocho and Ryukyu each run their own raffle with separate ticket pools and prizes.",
      "- Buy raffle tickets with spending in shops, then spin 1 or 10 at a time at the raffle booth near Theater Square (or the Ryukyu equivalent) until you hit 100 total spins.",
    ].join("\n"),
    ko: [
      "키류로 추첨을 100회 뽑았다",
      "",
      "**지금 해야 할 일:**",
      "- 다운타운 추첨은 챕터 2 서브 스토리 #10으로 열립니다. 카무로초와 류큐가 각각 별도의 티켓과 상품 풀을 가집니다.",
      "- 상점에서 소비하면 추첨 티켓을 얻을 수 있습니다. 시어터 스퀘어 인근(또는 류큐 쪽) 추첨소에서 1회 또는 10회씩 뽑아 총 100회를 채우세요.",
    ].join("\n"),
  },
  _44: {
    en: [
      "Completed 10 substories as Kiryu.",
      "",
      "**Do this next:**",
      "- Substories are flagged on the map with speech-bubble icons as they open up during the story.",
      "- Clear any 10 of Kiryu's 31 total substories — they're worth doing anyway for Cash, items, and ability points.",
    ].join("\n"),
    ko: [
      "키류로 10개 이상의 서브 스토리를 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 서브 스토리는 진행에 따라 맵에 말풍선 아이콘으로 표시됩니다.",
      "- 키류의 전체 서브 스토리 31개 중 10개만 클리어하면 됩니다. 캐시·아이템·능력 포인트 보상도 있어 어차피 할 만한 콘텐츠입니다.",
    ].join("\n"),
  },
  _45: {
    en: [
      "Completed 20 substories as Kiryu.",
      "",
      "**Do this next:**",
      "- Keep clearing Kiryu's substories as they appear on the map — 20 of the 31 total is required.",
      "- Note that Jo Amon (for the Defying Fate achievement) needs all 30 non-Reaper substories, so clearing them all now saves a separate cleanup pass later.",
    ].join("\n"),
    ko: [
      "키류로 20개 이상의 서브 스토리를 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 맵에 뜨는 키류의 서브 스토리를 계속 클리어하세요. 전체 31개 중 20개가 필요합니다.",
      "- 참고로 조 아몬전(악연을 뛰어넘어 업적)은 서브 스토리 30개 완료가 조건이라, 지금 다 끝내두면 나중에 따로 정리할 필요가 없습니다.",
    ].join("\n"),
  },
  _46: {
    en: [
      "Played 10 different minigames as Kiryu.",
      "",
      "**Do this next:**",
      "- Check Training List → Entertainment to see which minigame types you've already played.",
      "- You can just start a minigame and quit right away — it still counts, so no need to finish any of them.",
    ].join("\n"),
    ko: [
      "키류로 10종류 이상의 플레이 스팟에서 놀았다",
      "",
      "**지금 해야 할 일:**",
      "- 단련 목록 → 엔터테인먼트에서 이미 플레이한 미니게임 종류를 확인할 수 있습니다.",
      "- 미니게임을 시작만 하고 바로 종료해도 카운트되므로 끝까지 플레이할 필요는 없습니다.",
    ].join("\n"),
  },
  _47: {
    en: [
      "Took 10 Print Club photos as Kiryu.",
      "",
      "**Do this next:**",
      "- Print Club booths are in Okinawa (in front of the ice cream shop and on the market's upper floor).",
      "- Each session takes 3 photos and lets you save one — complete 10 full sessions (solo or with characters) to hit the count.",
    ].join("\n"),
    ko: [
      "키류로 10장 이상의 프리 서클을 찍었다",
      "",
      "**지금 해야 할 일:**",
      "- 프리 서클 부스는 오키나와의 아이스크림 가게 앞과 시장 위층에 있습니다.",
      "- 한 세션당 3장을 찍고 그중 1장을 저장할 수 있습니다. 혼자 또는 동료와 함께 세션을 10번 완료하면 조건을 채웁니다.",
    ].join("\n"),
  },
  _48: {
    en: [
      "Recruited Akko-san to the Haisai Girls.",
      "",
      "**Do this next:**",
      "- Complete substory #17 in Okinawa (available around mid-Chapter 4).",
      "- Then complete substory #18 back in Kamurocho once the gang has relocated (around Chapter 6) — eat a meal with Akko-san, sing karaoke together, and beat down the goons that show up to finish recruiting her.",
    ].join("\n"),
    ko: [
      "앗코 씨가 하이사이 걸스에 가입했다",
      "",
      "**지금 해야 할 일:**",
      "- 오키나와의 서브 스토리 #17을 클리어하세요 (챕터 4 중반쯽 진행 가능).",
      "- 이후 팀이 이전하는 챕터 6 즈음 카무로초에서 서브 스토리 #18을 진행해, 앗코 씨와 식사하고 노래방에서 함께 부르고 등장하는 불량배를 처리하면 영입이 완료됩니다.",
    ].join("\n"),
  },
  _49: {
    en: [
      "Obtained 20 abilities for Mine.",
      "",
      "**Do this next:**",
      "- Mine's abilities all cost Cash (no Training Points involved). Kanda Damage Control missions are the most efficient way to earn income for this.",
      "- Buy any 20 stat or special ability upgrades from Mine's ability menu.",
    ].join("\n"),
    ko: [
      "미네의 능력 강화로 능력을 20개 이상 습득했다",
      "",
      "**지금 해야 할 일:**",
      "- 미네의 능력은 전부 캐시로만 구매합니다(단련 포인트 없음). 칸다 대미지 컨트롤 미션이 수입을 얻기에 가장 효율적입니다.",
      "- 미네의 능력 메뉴에서 스탯이든 필살 능력이든 20개만 구매하면 됩니다.",
    ].join("\n"),
  },
  _50: {
    en: [
      "Obtained 40 abilities for Mine.",
      "",
      "**Do this next:**",
      "- Keep earning Cash from Kanda Damage Control and other side content, then spend it in Mine's ability menu.",
      "- 61 total abilities exist for Mine, so 40 is a heavier but doable completion pass — prioritize damage upgrades since they help with Survival Hell and Brawler Hell too.",
    ].join("\n"),
    ko: [
      "미네의 능력 강화로 능력을 40개 이상 습득했다",
      "",
      "**지금 해야 할 일:**",
      "- 칸다 대미지 컨트롤과 사이드 콘텐츠로 캐시를 계속 모아 미네의 능력 메뉴에 투자하세요.",
      "- 미네 능력은 전체 61개라 40개는 다소 무겁지만 충분히 가능한 목표입니다. 대미지 강화는 서바이벌/브롤러 헬에도 도움되니 우선 투자하세요.",
    ].join("\n"),
  },
  _51: {
    en: [
      "Took out 50 enemies with Dark Awakening.",
      "",
      "**Do this next:**",
      "- Dark Awakening is Mine's version of Dragon Boost — activate it by holding R2/RT once her heart meters are full.",
      "- Target enemy groups so each activation nets multiple kills (3-4 knockdowns per use is normal), and use Survival Hell for efficient farming.",
    ].join("\n"),
    ko: [
      "어둠의 각성으로 적을 50명 이상 쓰러뜨렸다",
      "",
      "**지금 해야 할 일:**",
      "- 어둠의 각성은 미네판 드래곤 부스트입니다. 하트 게이지가 가득 차면 R2/RT를 눌러 발동하세요.",
      "- 여러 명이 모인 적 그룹을 노리면 한 번 발동에 3~4명씩 쓰러뜨릴 수 있습니다. 서바이벌 헬에서 반복하면 효율적으로 채울 수 있습니다.",
    ].join("\n"),
  },
  _52: {
    en: [
      "Used Mine's special abilities 50 times.",
      "",
      "**Do this next:**",
      "- Special actions are the jump-attack moves — hold the action button (Circle/B) to leap at an enemy, then follow up with a kick or throw.",
      "- You can also track this via Kanda Damage Control → Damage Control Challenge → Battle, where a specific challenge tracks 50 special-action hits. Survival Hell fights are a good place to farm repetitions.",
    ].join("\n"),
    ko: [
      "미네의 특수 액션을 50회 이상 발동했다",
      "",
      "**지금 해야 할 일:**",
      "- 특수 액션은 점프 공격 계열입니다. 액션 버튼(B/원)을 눌러 적에게 뛰어든 뒤 킥이나 던지기로 이어가세요.",
      "- 칸다 대미지 컨트롤 → 대미지 컨트롤 챌린지 → 배틀에서 특수 액션 50회 명중 챌린지로도 진행도를 확인할 수 있습니다. 서바이벌 헬에서 반복하면 빠르게 채울 수 있습니다.",
    ].join("\n"),
  },
  _53: {
    en: [
      "Increased Karma to \"Kinda Trashy\" in Kanda Damage Control.",
      "",
      "**Do this next:**",
      "- This rank is tied to early Kanda Damage Control story tasks unlocked in Chapter 2 — it's essentially unmissable if you play through Mine's opening content.",
      "- Complete the initial image-improvement tasks (brawls, fetch quests, minigame objectives) as they come up.",
    ].join("\n"),
    ko: [
      "칸다의 카리스마 랭크가 Rank.3 「굳이 따지자면 폐급」 이상이 되었다",
      "",
      "**지금 해야 할 일:**",
      "- 이 랭크는 챕터 2에서 열리는 초반 칸다 대미지 컨트롤 스토리 과제와 연동되어, 미네 초반 콘텐츠만 진행해도 자연스럽게 달성됩니다.",
      "- 등장하는 초기 이미지 개선 과제(전투, 심부름, 미니게임 목표)를 그대로 진행하세요.",
    ].join("\n"),
  },
  _54: {
    en: [
      "Increased Karma to \"Kinda Godlike\" in Kanda Damage Control.",
      "",
      "**Do this next:**",
      "- Keep completing Kanda Damage Control tasks beyond the story-required ones, or lean into street fights and Hell's Arena fights, which you'll be doing anyway for other achievements.",
      "- Karma builds steadily from combat and image-improvement objectives, so this comes with general side-content progress.",
    ].join("\n"),
    ko: [
      "칸다의 카리스마 랭크가 Rank.8 「굳이 따지자면 신급」 이상이 되었다",
      "",
      "**지금 해야 할 일:**",
      "- 스토리 필수 과제 외의 칸다 대미지 컨트롤 과제를 추가로 클리어하거나, 어차피 다른 업적을 위해 진행할 길거리 전투와 헬스 아레나 전투에 집중하세요.",
      "- 카리스마는 전투와 이미지 개선 과제로 꾸준히 쌓이므로 사이드 콘텐츠를 진행하는 김에 자연스럽게 채워집니다.",
    ].join("\n"),
  },
  _55: {
    en: [
      "Viewed all Bro Time moments with Kanda.",
      "",
      "**Do this next:**",
      "- Bro Time cutscenes unlock every few Karma rank increases, with the final ones appearing around Karma Rank 10 (Demigod; max rank is 15).",
      "- Keep pushing Karma through Kanda Damage Control tasks and Good Deeds — the last Bro Time scene plays automatically once the rank requirement is met.",
    ].join("\n"),
    ko: [
      "칸다와의 유대 드라마를 모두 봤다",
      "",
      "**지금 해야 할 일:**",
      "- 브로 타임 이벤트는 카리스마 랭크가 몇 단계씩 오를 때마다 열리며, 마지막 이벤트는 대략 랭크 10(반신) 즈음 나옵니다 (최대 랭크는 15).",
      "- 칸다 대미지 컨트롤 과제와 선행 퀘스트로 카리스마를 계속 올리면 조건을 채우는 순간 마지막 브로 타임이 자동으로 재생됩니다.",
    ].join("\n"),
  },
  _56: {
    en: [
      "Did 7 Good Deeds.",
      "",
      "**Do this next:**",
      "- Good Deeds are Mine-exclusive substory-like requests that unlock starting at Karma Rank 2, with more opening up through Rank 5.",
      "- Check the request menu — some are only available at night (change the time of day at the Nishikiyama Family Office). You can accept several at once and don't need to finish them one at a time.",
      "- The final Good Deed auto-completes after clearing all Survival Hell stages.",
    ].join("\n"),
    ko: [
      "선행 퀘스트를 7개 이상 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 선행 퀘스트는 미네 전용 서브 스토리성 의뢰로, 카리스마 랭크 2부터 열리고 랭크 5까지 계속 추가됩니다.",
      "- 의뢰 메뉴를 확인하세요. 일부는 밤에만 뜨니 니시키야마 파밀리 사무소에서 시간을 바꿔가며 확인하세요. 여러 개를 동시에 수락해도 되고 순서대로 끝낼 필요는 없습니다.",
      "- 마지막 선행 퀘스트는 서바이벌 헬 전 스테이지를 클리어하면 자동으로 완료됩니다.",
    ].join("\n"),
  },
  _57: {
    en: [
      "Cleared 3 stages of Survival Hell.",
      "",
      "**Do this next:**",
      "- Survival Hell unlocks around Chapter 2 through Hell's Arena — it's a roguelite gauntlet with fixed (non-random) layouts.",
      "- Pick up item upgrades during a run; they stay permanent once you clear that run, so a full clean run through the early stages banks upgrades for later.",
      "- Clear any 3 stages — if you're defeated, you lose that run's rewards, so don't be afraid to reset and retry.",
    ].join("\n"),
    ko: [
      "서바이벌 헬을 3스테이지 이상 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 서바이벌 헬은 챕터 2 즈음 헬스 아레나에서 열리는 로그라이트 던전으로, 구성은 고정되어 있고 랜덤 요소가 없습니다.",
      "- 진행 중 얻는 아이템 강화는 해당 런을 클리어하면 영구적으로 남으므로, 초반 스테이지를 꼼꼼히 클리어해 강화를 미리 확보해두면 좋습니다.",
      "- 3스테이지만 클리어하면 됩니다. 도중에 패배하면 그 런의 보상을 잃으니 부담 없이 다시 시도하세요.",
    ].join("\n"),
  },
  _58: {
    en: [
      "Cleared all stages of Survival Hell.",
      "",
      "**Do this next:**",
      "- Keep pushing through Survival Hell's later stages — the layouts stay fixed each attempt, so learning enemy placements pays off on repeat tries.",
      "- Watch the timer on stages 4-5, since unavoidable damage kicks in there; if you need to bail, you can exit between stages on the final dungeon.",
      "- The final stage's boss combines all the previous stage bosses, so go in with every item upgrade you've collected.",
    ].join("\n"),
    ko: [
      "서바이벌 헬의 모든 스테이지를 클리어했다",
      "",
      "**지금 해야 할 일:**",
      "- 서바이벌 헬 후반 스테이지까지 계속 진행하세요. 구성이 매번 고정되어 있어 적 배치를 외우면 재도전이 훨씬 수월합니다.",
      "- 4~5스테이지는 피할 수 없는 대미지 구간이 있으니 타이머를 주의하세요. 필요하면 마지막 던전에서는 스테이지 사이에 나갈 수도 있습니다.",
      "- 마지막 스테이지 보스는 이전 스테이지 보스들이 합쳐진 형태라, 지금까지 모은 아이템 강화를 전부 챙기고 도전하세요.",
    ].join("\n"),
  },
  _59: {
    en: [
      "Conquered 5 types of Brawler Hell tournaments.",
      "",
      "**Do this next:**",
      "- Brawler Hell (Hell Fight) is available at Hell's Arena — talk to the person standing to the right of the Survival Hell reception desk.",
      "- It works just like Kiryu's Coliseum tournaments. Clear any 5 of the tournament types to unlock this.",
    ].join("\n"),
    ko: [
      "헬 파이트로 5종류 이상의 대회를 제패했다",
      "",
      "**지금 해야 할 일:**",
      "- 브롤러 헬(헬 파이트)은 헬스 아레나에서 서바이벌 헬 접수처 오른쪽에 있는 NPC에게 말을 걸면 이용할 수 있습니다.",
      "- 키류의 투기장과 같은 방식으로 동작합니다. 5종류의 대회만 클리어하면 됩니다.",
    ].join("\n"),
  },
  _60: {
    en: [
      "Played 5 different minigames as Mine.",
      "",
      "**Do this next:**",
      "- Once Mine's free roam opens up, check the SEGA arcade for quick minigame options (photo booth, UFO catcher, retro game selection).",
      "- Add karaoke and the Game Gear cabinet at headquarters to round out 5 different types — you can quit right after starting each one, no need to finish them.",
    ].join("\n"),
    ko: [
      "미네로 5종류 이상의 플레이 스팟에서 놀았다",
      "",
      "**지금 해야 할 일:**",
      "- 미네의 자유 이동이 열리면 SEGA 아케이드에서 빠르게 즐길 수 있는 미니게임(포토 부스, UFO 캐처, 레트로 게임)을 확인하세요.",
      "- 노래방과 본부의 게임기어까지 더하면 5종류를 쉽게 채울 수 있습니다. 시작만 하고 바로 종료해도 카운트됩니다.",
    ].join("\n"),
  },
  _61: {
    en: [
      "Sang \"Baka Mitai\" as Mine.",
      "",
      "**Do this next:**",
      "- Head to the Karaokekan on Nakamichi St. once it's available after Chapter 1.",
      "- \"Baka Mitai\" is the only song option available while playing as Mine — pick it and sing it to completion.",
    ].join("\n"),
    ko: [
      "미네로 「바보 같아」를 1회 이상 불렀다",
      "",
      "**지금 해야 할 일:**",
      "- 챕터 1 이후 이용 가능해지는 나카미치 거리의 카라오케칸으로 가세요.",
      "- 미네로 플레이할 때는 「바보 같아(Baka Mitai)」만 선곡 가능합니다. 선택해서 끝까지 불러보세요.",
    ].join("\n"),
  },
};

function storyContent(apiName, title, ko) {
  return {
    en: [
      title,
      "",
      "**Do this next:**",
      "- This is a main-story achievement — it unlocks automatically the first time you reach this point in the story on the same save.",
      "- Just keep advancing the Kiwami 3 main story chapters; no side action is required.",
    ].join("\n"),
    ko: [
      ko,
      "",
      "**지금 해야 할 일:**",
      "- 메인 스토리 진행 업적으로, 같은 세이브에서 해당 지점까지 스토리를 진행하면 자동으로 해금됩니다.",
      "- 극3 메인 스토리 챕터를 계속 진행하기만 하면 됩니다. 별도의 사이드 액션은 필요하지 않습니다.",
    ].join("\n"),
  };
}

async function main() {
  const { data: achievements, error } = await supabase
    .from("achievements")
    .select("id,api_name")
    .eq("app_id", APP_ID);
  if (error) throw new Error(error.message);
  if (!achievements?.length) throw new Error(`no achievements for app_id ${APP_ID}`);

  const byApiName = new Map(achievements.map((a) => [a.api_name, a.id]));

  let updated = 0;
  for (const [apiName, entry] of Object.entries(CONTENT)) {
    const id = byApiName.get(apiName);
    if (!id) {
      console.warn(`[skip] no achievement row for ${apiName}`);
      continue;
    }
    const resolved = entry.title ? storyContent(apiName, entry.title, entry.ko) : entry;

    for (const [locale, content] of [["english", resolved.en], ["koreana", resolved.ko]]) {
      const { error: updateError } = await supabase
        .from("guides")
        .update({
          content,
          source_url: SOURCE_URL,
          confidence: CONFIDENCE,
          source_type: "manual",
          is_active: true,
          updated_at: new Date().toISOString(),
        })
        .eq("achievement_id", id)
        .eq("locale", locale);
      if (updateError) {
        console.error(`[fail] ${apiName} ${locale}:`, updateError.message);
        continue;
      }
    }
    updated += 1;
    console.log(`[ok] ${apiName}`);
  }

  console.log(`\nUpdated ${updated}/${Object.keys(CONTENT).length} achievements (x2 locales).`);
}

await main();
