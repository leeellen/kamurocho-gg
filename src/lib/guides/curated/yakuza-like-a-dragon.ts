import type { CuratedGuide } from "./index";

const Y7_APP_ID = 1235140;

// Yakuza: Like a Dragon (Y7) 플래티넘. Steam api_name: yazawa_platinum.
const platinum: CuratedGuide = {
  summary: {
    ko:
      "Yakuza: Like a Dragon (이치반 1편) 플래티넘 — 다른 62개 업적 전부 해금 시 자동 발동. Y7은 영구 미서블이 0이라 Premium Adventure에서 자유롭게 정리 가능. 핵심 게이트는 ①「잡 마스터」 전 직업 마스터 ②「인연」 전 동료 최대치 ③「용감한 카트 마스터」 + 「혼다이 마스터」 카트 + 라이벌 레이스 ④돈도코·스지몬 ⑤EX-HARD 클리어 ⑥아몬 격파.",
    en:
      "Y7 platinum auto-pops at full unlock. Zero permanent missables — everything is reachable in Premium Adventure. Gates: ① Job Master (all jobs) ② Bonds maxed for every party member ③ Honk-Honk Hero / Pop the Cork (kart trophies) ④ Dondoko + Sujimon ⑤ EX-HARD ⑥ Amon.",
  },
  steps: [
    {
      ko:
        "1) 메인 스토리와 병행해 자격증 학교(서브스토리 10) + 직업 시스템을 일찍 해금. 직업 마스터는 시간이 가장 많이 드는 그라인드라 5장쯤부터 적극 진행.",
      en:
        "1) Open Qualifications School (Sub 10) and the job system early — Job Master is the biggest grind, so start by Ch.5.",
    },
    {
      ko:
        "2) 동료 인연 — 모든 파티 멤버와의 본드 드라마/카페 잡담을 본드 게이지 MAX까지. 본드 5 이상에서 신규 본드 드라마가 풀리는 점에 주의.",
      en:
        "2) Bonds — push every party member to MAX. New bond dramas unlock past Bond 5, so don't stop early.",
    },
    {
      ko:
        "3) 카트 미니게임(드래곤 카트) — 15장 이후 풀리는 마지막 두 라이벌 레이스를 우승해 「혼다이 마스터」 + 「용감한 카트 마스터」 완성.",
      en:
        "3) Dragon Kart — the final two rivals only unlock in Ch.15. Win them for both kart trophies.",
    },
    {
      ko:
        "4) 컴플리션 라인 — 「딜리버리 헬프 모든 메뉴」 + 「스지몬 도감 250종」 + 「로맨스 공방 전 의상」 + 「혼다이 카트 풀」. 사무실 모드(이치반 컨피던스)도 100% 도달.",
      en:
        "4) Completion lines — Delivery Help menu, Sujimon Dex 250, Romance Workshop outfits, Honda Kart full, Ichiban Confections 100 %.",
    },
    {
      ko:
        "5) 엔딩 후 진정한 최종장(True Final Millennium Tower) 클리어 + 아몬 격파. Premium Adventure에서 잔여 100%·자격증 마무리.",
      en:
        "5) Post-credits: clear the True Final Millennium Tower + Amon, then mop up the last 100 % bits.",
    },
    {
      ko:
        "6) 새 회차 EX-HARD 직주행으로 「궁극을 잇는 자」 트로피 마감.",
      en:
        "6) Fresh save on EX-HARD for the difficulty trophy.",
    },
  ],
  tips: [
    {
      ko:
        "직업 마스터는 직업당 약 1~2시간 그라인드라 누적 50시간 이상이 일반. Premium Adventure에서 EXP 부스트 장비(스지몬 부스트 등)를 활용하면 시간을 크게 줄일 수 있습니다.",
      en:
        "Job Master is ~1~2 hr per job — easily 50+ hr total. EXP-boost gear (Sujimon buffs) cuts this dramatically.",
    },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3025881850",
  sourceLabel: { ko: "Steam Community — Yakuza: Like a Dragon Achievement Guide", en: "Steam Community — Yakuza: Like a Dragon Achievement Guide" },
};

// 「드래곤 카트 마스터」 — 모든 컵 + 라이벌 레이스. Steam: yazawa_dragon_cart_all_claer.
const dragonCartMaster: CuratedGuide = {
  summary: { ko: "용과 같이 7의 드래곤 카트 미니게임에서 모든 일반 컵 + 라이벌 레이스를 우승해야 발동. 15장 이후 풀리는 마지막 두 라이벌 레이스가 최대 게이트.", en: "Win every Dragon Kart cup + rival race. The final two rival races only unlock in Ch.15, so the trophy can't close before then." },
  steps: [
    { ko: "1) 4~5장쯤 드래곤 카트 해금 → 일반 컵 7~8개 차례로 우승. 부품 강화로 SPD/GRIP/HANDLING 밸런스 셋업.", en: "1) Unlock Dragon Kart in Ch.4~5; win 7~8 standard cups by tuning SPD/GRIP/HANDLING." },
    { ko: "2) 15장 진입 후 마지막 두 라이벌 레이스 해금. 풀 강화 부품으로 도전.", en: "2) After Ch.15, the final two rival races open — bring fully-upgraded parts." },
    { ko: "3) 모든 컵 + 라이벌 우승 시 트로피 발동.", en: "3) Trophy fires when every cup + rival is cleared." },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3025881850",
  sourceLabel: { ko: "Steam Community — Yakuza: Like a Dragon Achievement Guide", en: "Steam Community — Yakuza: Like a Dragon Achievement Guide" },
};

// 「주물주물 마스터」 — 모든 「주물주물」 NPC 발견. Steam: yazawa_niginigi_complete.
const honkHonkHero: CuratedGuide = {
  summary: { ko: "이세자키 이진초에서 「주물주물(허벅지·머리 주물 요청)」 NPC를 모두 찾아 응답하면 발동. NPC는 도시 곳곳에 흩어져 있으며 시간대 조건도 있음. 장 진행도에 따라 새 NPC가 추가됩니다.", en: "Find and respond to every 'Honk-Honk' NPC across Ijincho. They're scattered, some are time-gated, and new ones unlock per chapter." },
  steps: [
    { ko: "1) 거리에서 「주물주물」 마커가 보이면 모두 말 걸기. 시간대(낮/밤) 조건이 있는 NPC도 있어 두 시간대 모두 둘러봐야 합니다.", en: "1) Talk to every Honk-Honk marker — some only spawn at day or night." },
    { ko: "2) 5장·8·12·15에서 새 NPC가 추가되므로 메인 진행마다 재방문.", en: "2) New NPCs unlock at Ch.5/8/12/15 — sweep after each beat." },
    { ko: "3) 모든 NPC 발견 시 컴플리트 리스트 카운트 + 트로피 발동.", en: "3) Full coverage fires the trophy." },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3025881850",
  sourceLabel: { ko: "Steam Community — Yakuza: Like a Dragon Achievement Guide", en: "Steam Community — Yakuza: Like a Dragon Achievement Guide" },
};

// 「전설의 용」 — Lv.70. Steam: yazawa_kasuga_level_d.
const lv70: CuratedGuide = {
  summary: { ko: "카스가 이치반의 메인 직업 레벨이 Lv.70 이상에 도달하면 발동. 진정한 최종 던전(쓰루기시마 던전)에서 적의 레벨이 50~70이라 자연스럽게 도달 가능하지만, 메인 스토리만으로는 Lv.50~55에서 멈추므로 Premium Adventure 그라인드 필요.", en: "Push Kasuga's job level to 70+. The True Final Dungeon (Kongo) carries you there naturally; main-story alone caps around 50~55, so post-credits grinding is needed." },
  steps: [
    { ko: "1) 메인 스토리 엔딩 후 「쓰루기시마 던전」(진정한 최종 던전) 해금 → 적 레벨 50~70 구간에서 그라인드.", en: "1) Post-credits, push into the True Final Dungeon — enemies sit at Lv.50~70." },
    { ko: "2) EXP 부스트 장비(스지몬·로맨스 공방) 활용 → Lv.70 도달 시 트로피 발동.", en: "2) Stack EXP buffs (Sujimon, Romance Workshop). Hitting Lv.70 fires it." },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3025881850",
  sourceLabel: { ko: "Steam Community — Yakuza: Like a Dragon Achievement Guide", en: "Steam Community — Yakuza: Like a Dragon Achievement Guide" },
};

// 「영화관에서 자지 않는 남자」 — 모든 영화 졸지 않고 시청. Steam: yazawa_meigaza_all_clear.
const stayAwakeAllMovies: CuratedGuide = {
  summary: { ko: "이진초 명화 극장(영화관) 미니게임에서 모든 영화를 졸지 않고 끝까지 시청하면 발동. 영화 도중 「졸음」 게이지가 차오를 때 정확히 R1/△ 등 표시되는 버튼을 눌러 깨우는 리듬 미니게임.", en: "Watch every Meiga-Za film without dozing off. A rhythm minigame: hit the prompt button each time the drowsiness gauge fills." },
  steps: [
    { ko: "1) 6~7장쯤 명화 극장 해금. 한 편씩 영화 선택 → 졸음 프롬프트가 뜰 때 정확히 입력.", en: "1) Unlock Meiga-Za in Ch.6~7. Pick a film and hit each prompt." },
    { ko: "2) 영화 종류에 따라 프롬프트 빈도·난이도 차이. 어려운 영화는 마지막에 도전.", en: "2) Prompt density varies by film — save the hard ones for last." },
    { ko: "3) 모든 영화 「졸지 않음」 카운트 시 트로피 발동.", en: "3) Trophy fires when every film is cleared without dozing." },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3025881850",
  sourceLabel: { ko: "Steam Community — Yakuza: Like a Dragon Achievement Guide", en: "Steam Community — Yakuza: Like a Dragon Achievement Guide" },
};

// 「네가 바로! 야쿠몬 마스터」 — 스지몬 도감 완성. Steam: yazawa_sujimon_b.
const sujimonMaster: CuratedGuide = {
  summary: { ko: "스지몬(이진초 길거리 적 도감) 250종 등록 시 발동. 적을 격파하면 자동 등록되며, 일부 희귀 스지몬은 특정 장·시간대에만 출현. Premium Adventure에서도 추가 등록 가능.", en: "Register 250 Sujimon entries by defeating them. Some rare ones only spawn at specific chapters/times of day. Premium Adventure adds more." },
  steps: [
    { ko: "1) 4장 이후 스지몬 도감 앱 해금. 거리에서 마주치는 모든 적을 격파해 자동 등록.", en: "1) Unlock Sujidex in Ch.4 and beat every street mob — auto-registers." },
    { ko: "2) 후반 장에 강한 스지몬 출현. EXP·자금이 안정된 12장 이후 적극 사냥.", en: "2) Tougher Sujimon spawn late — focus from Ch.12 onward." },
    { ko: "3) 250종 등록 시 트로피 발동. Premium Adventure에서 마지막 변종 마무리.", en: "3) 250 entries fires the trophy; finish leftovers in Premium Adventure." },
  ],
  sourceUrl: "https://steamcommunity.com/sharedfiles/filedetails/?id=3025881850",
  sourceLabel: { ko: "Steam Community — Yakuza: Like a Dragon Achievement Guide", en: "Steam Community — Yakuza: Like a Dragon Achievement Guide" },
};

export const YAKUZA_LIKE_A_DRAGON_CURATED: Record<string, CuratedGuide> = {
  [`${Y7_APP_ID}:yazawa_platinum`]: platinum,
  [`${Y7_APP_ID}:yazawa_dragon_cart_all_claer`]: dragonCartMaster,
  [`${Y7_APP_ID}:yazawa_niginigi_complete`]: honkHonkHero,
  [`${Y7_APP_ID}:yazawa_kasuga_level_d`]: lv70,
  [`${Y7_APP_ID}:yazawa_meigaza_all_clear`]: stayAwakeAllMovies,
  [`${Y7_APP_ID}:yazawa_sujimon_b`]: sujimonMaster,
};
