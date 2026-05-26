import type { CollectiblesData } from "./types";

export const yakuzaGaiden: CollectiblesData = {
  appId: 2375550,
  categories: [
    {
      slug: "castle-rank",
      title: { ko: "캐슬 랭크 — 실버 → 골드 → 플래티넘 랭커", en: "Castle Rank — Silver / Gold / Platinum Ranker" },
      summary: {
        ko: "캐슬에서 등급 승격으로 「실버 랭커」 → 「골드 랭커」 → 「플래티넘 랭커」 업적이 차례로 트리거됩니다. 콜로세움 매치 라인은 별도 카테고리에서 상세 안내.",
        en: "Castle promotions unlock 'Silver Ranker' → 'Gold Ranker' → 'Platinum Ranker' in order. Coliseum match progression is detailed in its own category.",
      },
    },
    {
      slug: "coliseum-tiers",
      title: { ko: "지옥의 수호자 → 후원자 → 챔피언", en: "Hell's Guardian → Patron → Champion" },
      summary: {
        ko: "실버 랭크 이하 투기 전 클리어 시 「지옥의 수호자」, 골드 랭크 이하 「지옥의 후원자」, 플래티넘 랭크 이하 「지옥의 챔피언」 업적 발동.",
        en: "Clear every match up to Silver for 'Hell's Guardian', Gold for 'Hell's Patron', Platinum for 'Hell's Champion'.",
      },
    },
    {
      slug: "akame-missions",
      title: { ko: "아카메 네트워크 — 의뢰 미션 / 외근 미션 / 유대", en: "Akame Network — Requests / Patrols / Bond" },
      summary: {
        ko: "「의뢰 미션 5/10/15」 + 「외근 미션 10/30/50」 단계별 업적 + 「아카메와의 유대」(유대 드라마 전부 시청) + 「나만의 여가수」(아카메와 가라오케 듀엣) 라인 전부.",
        en: "Tiered achievements: Akame Requests 5/10/15 + Patrols (Stroll'n'Patrol) 10/30/50. Also 'Bond with Akame' (full bond drama) and 'My Own Songstress' (karaoke duet).",
      },
    },
    {
      slug: "gadgets",
      title: { ko: "가젯 4종 + 「얼티밋 히터」 + 「얼티밋 카운터」", en: "Four Gadgets + Ultimate Heat / Counter" },
      summary: {
        ko: "「나는 거미 남자」(스파이더 50) + 「나는 양봉업자」(호넷 100) + 「나와 반딧불이와 불꽃놀이」(파이어플라이 50) + 「나는 뱀 조련사」(서펜트 50) 가젯 4종 + 「얼티밋 히터」(얼티밋 히트 30회) + 「카운터야말로 싸움의 꽃」(얼티밋 카운터 5회) 6종 누적.",
        en: "Four gadgets — Spider Man (Spider 50), Beekeeper (Hornet 100), Firefly Fireworks (Firefly 50), Snake Charmer (Serpent 50) — plus 'Ultimate Heater' (30 Ultimate Heats) and 'Counter is the Flower of Combat' (5 Ultimate Counters).",
      },
    },
    {
      slug: "joryu-bonds",
      title: { ko: "죠류회 — 영입 + 육성 라인", en: "Joryu Clan — Recruitment + Training" },
      summary: {
        ko: "「웰컴! 죠류회」(10명) → 「약진! 죠류회」(20명) → 「최강! 죠류회」(30명) 영입 라인 + 「육성 완료!」(1명 LV+유대 MAX) → 「육성에 통달한 남자」(5명) → 「육성 귀신」(10명) 단계별 업적.",
        en: "Recruitment: 'Welcome to Joryu Clan' (10) → 'Joryu Surge' (20) → 'Strongest Joryu' (30). Training: 'Training Done' (1 LV+bond MAX) → 'Training Master' (5) → 'Training Demon' (10).",
      },
    },
    {
      slug: "outfits",
      title: { ko: "패션 라인 — 「패션 초보자」 → 「중급자」 → 「패셔너블 보스」", en: "Fashion Ladder — Novice → Mid → Boss" },
      summary: {
        ko: "코디네이트 아이템 15종 「패션 초보자」 → 30종 「패션 중급자」 → 50종 「패셔너블 보스」 단계별 업적 트리거. 캐슬 카바레 + 콜로세움 보상으로 자연스럽게 누적.",
        en: "Outfit collection tiers: 15 'Fashion Novice' → 30 'Fashion Mid-tier' → 50 'Fashionable Boss'. Castle Cabaret + Coliseum rewards drive progress.",
      },
    },
    {
      slug: "cabarets",
      title: { ko: "캐슬 카바레 + 클럽 헤븐리 + 클럽 캐슬", en: "Cabaret Clubs — Heavenly + Castle" },
      summary: {
        ko: "「천국의 귀빈」(클럽 헤븐리 모든 캬바걸 클리어) + 「캐슬 귀빈」(클럽 캐슬 모든 캬바걸 클리어) + 「캐슬 갬블러」(캐슬 도박장+카지노 플레이) 카바레/갬블 라인 전부.",
        en: "'Heavenly VIP' (clear every Club Heavenly hostess) + 'Castle VIP' (clear every Club Castle hostess) + 'Castle Gambler' (play at the Castle gambling hall + casino).",
      },
    },
    {
      slug: "fighter-fans",
      title: { ko: "파이터 팬 수 — 1,000 → 30,000", en: "Fighter Fans — 1K → 30K" },
      summary: {
        ko: "콜로세움 활동으로 팬 수 누적 1,000명 「신입 파이터」 → 3,000명 「중견 파이터」 → 10,000명 「인기 파이터」 → 30,000명 「레전드 파이터」 단계별 업적.",
        en: "Coliseum fan tiers: 1,000 'Rookie Fighter' → 3,000 'Mid-Career Fighter' → 10,000 'Popular Fighter' → 30,000 'Legendary Fighter'.",
      },
    },
    {
      slug: "minigames-extra",
      title: { ko: "기타 미니게임 — 1샷 챌린지 + SEGA 마스터 시스템 + 코인로커", en: "Minigame Side — Pool / SMS / Coin Locker" },
      summary: {
        ko: "「피타고라스 죠류」(1샷 챌린지 NORMAL 클리어) + 「레트로 게이머」(마스터 시스템 5종) + 「게임 센터에 눌어붙은 남자」(게임 센터 6종) + 「잠김」(코인로커 30아이템) 등.",
        en: "Minigame side achievements: 'Pythagoras Joryu' (1-shot Challenge Normal) + 'Retro Gamer' (5 SMS games) + 'Stuck at the Arcade' (6 Game Center games) + 'Locked' (30 items from coin lockers).",
      },
    },
  {
    slug: "castle-coliseum-detail",
    title: { ko: "캐슬 콜로세움 — 4단계 + 사천왕 + 전체 매치 일람", en: "Castle Coliseum — Tiers + Four Kings + Full Match List" },
    summary: { ko: "캐슬에서 등급(실버→골드→플래티넘)을 승급하며 매치를 클리어합니다. 사천왕 4인 + 최종 보스(아몬급)가 메인 보상 라인입니다. 가젯 풀파워 + 회복 아이템 충분히 준비 후 도전하세요.", en: "Climb the Coliseum from Silver → Gold → Platinum tiers, then face the Four Kings + a hidden final boss. Bring fully upgraded gadgets and stocked healing items." },
    tips: [
        { ko: "사천왕 진행은 1→2→3→4 순서이고 장·캐슬 등급 조건이 게이트입니다. 미리 캐슬 등급을 끌어올려 두세요.", en: "Four Kings unlock 1→2→3→4 with chapter + Castle rank gates. Push Castle rank early." },
        { ko: "플래티넘 매치는 캐슬 플래티넘 등급 승급 후에만 열립니다. 등급 업 미션을 우선 처리하세요.", en: "Platinum matches require Platinum Castle rank. Prioritize the promotion missions first." },
    ],
    source: { label: "gamewith.jp — Lost Judgment / Gaiden 캐슬 콜로세움", url: "https://gamewith.jp/lostjudgment/" },
    groups: [
    {
      title: { ko: "캐슬 등급별 매치", en: "Castle Tier Matches" },
      items: [
      {
        number: 1,
        title: { ko: "실버 등급 매치 전부 클리어", en: "Clear All Silver Matches" },
        location: { ko: "캐슬 콜로세움 — 실버 라인업", en: "Castle Coliseum — Silver Lineup" },
        body: { ko: "실버 매치 전부 클리어로 컴플리트 리스트 한 줄. 솔로/태그 매치 혼합.", en: "Clear every Silver match for a Completion List entry. Mix of solo + tag battles." },
      },
      {
        number: 2,
        title: { ko: "골드 등급 매치 전부 클리어", en: "Clear All Gold Matches" },
        location: { ko: "캐슬 콜로세움 — 골드 라인업", en: "Castle Coliseum — Gold Lineup" },
        body: { ko: "실버 클리어 후 골드 라인업이 풀립니다. 드링크 링크 1회 트리거가 끼어 있습니다.", en: "Gold opens after Silver clear. The first Drink Link event triggers here." },
      },
      {
        number: 3,
        title: { ko: "플래티넘 등급 매치 전부 클리어", en: "Clear All Platinum Matches" },
        location: { ko: "캐슬 콜로세움 — 플래티넘 라인업", en: "Castle Coliseum — Platinum Lineup" },
        body: { ko: "캐슬 플래티넘 승급 후 해금. 약 10~12개 매치, 일부는 가젯 강화 필수.", en: "Unlocks after Platinum promotion. ~10-12 matches, several require fully upgraded gadgets." },
        reward: { ko: "지옥의 챔피언 업적 + 캐슬 카바레 추가 이벤트", en: "Hell's Champion achievement + extra Castle Cabaret events" },
      },
      ],
    },
    {
      title: { ko: "사천왕", en: "The Four Kings" },
      items: [
      {
        number: 4,
        title: { ko: "댄 브로디 (사천왕 1)", en: "Dan Brody (King 1)" },
        location: { ko: "캐슬 콜로세움", en: "Castle Coliseum" },
        body: { ko: "사천왕 진행선 첫 매치. 캐슬 골드 승급 + 장 조건 이후 해금.", en: "First King fight. Unlocks after Castle Gold promotion + chapter gate." },
      },
      {
        number: 5,
        title: { ko: "쿠니미쓰 사메지마 (사천왕 2)", en: "Kunimitsu Samejima (King 2)" },
        location: { ko: "캐슬 콜로세움", en: "Castle Coliseum" },
        body: { ko: "댄 브로디 격파 후. 펜싱 패턴 + 회피 카운터 중심.", en: "After Dan Brody. Fencing pattern + evasion counters." },
      },
      {
        number: 6,
        title: { ko: "사천왕 3", en: "JUSTICE (King 3)" },
        location: { ko: "캐슬 콜로세움", en: "Castle Coliseum" },
        body: { ko: "사천왕 중 최난도로 알려진 매치. 헤비 갑옷 + 광역 공격. 가젯 풀파워 필수.", en: "Notoriously the hardest King — heavy armor + AoE attacks. Bring fully upgraded gadgets." },
      },
      {
        number: 7,
        title: { ko: "최종 사천왕 (히든 보스)", en: "Final King (Hidden Boss)" },
        location: { ko: "캐슬 콜로세움", en: "Castle Coliseum" },
        body: { ko: "JUSTICE 격파 후 풀리는 최종 매치. 회복 아이템 풀 충전 + 슬러거/복서 스타일 혼합 권장.", en: "Final match after JUSTICE. Stock healing items and rotate Slugger/Boxer styles." },
        reward: { ko: "사천왕 풀 클리어 업적 + 최강의 칭호", en: "Four Kings achievement + Strongest title" },
      },
      ],
    },
    ],
  },
  ],
};
