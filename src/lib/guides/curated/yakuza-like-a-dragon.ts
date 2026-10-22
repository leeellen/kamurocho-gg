import type { CuratedGuide } from "./index";

const Y7_APP_ID = 1235140;

const platinum: CuratedGuide = {
  "summary": {
    "ko": "모든 업적을 달성했다.",
    "en": "Obtained all achievements."
  },
  "steps": [
    {
      "ko": "다른 모든 업적을 달성하세요. 쿵더쿵섬과 야쿠몬 배틀은 8편의 콘텐츠입니다.",
      "en": "Unlock every other achievement. Dondoko Island and Sujimon battles belong to Infinite Wealth."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3673089977"
};

const dragonCartMaster: CuratedGuide = {
  "summary": {
    "ko": "드래곤 카트의 모든 컵과 라이벌 레이스를 제패했다",
    "en": "Beat all Dragon Kart cups and rival races."
  },
  "steps": [
    {
      "ko": "드래곤 카트의 모든 컵과 라이벌전을 완료하세요.",
      "en": "Complete every Dragon Kart cup and rival race."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3673089977"
};

const honkHonkHero: CuratedGuide = {
  "summary": {
    "ko": "주물주물을 해 주는 사람을 전원 발견했다",
    "en": "Found all the people who will give you a honk-honk."
  },
  "steps": [
    {
      "ko": "이진쵸·소텐보리·카무로쵸의 해당 인물 5명을 모두 찾으세요. 고정 장소에 항상 나타나는 것은 아닙니다.",
      "en": "Find all five NPCs across Ijincho, Sotenbori, and Kamurocho. They do not always appear at their fixed locations."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3673089977",
  "tips": []
};

const lv70: CuratedGuide = {
  "summary": {
    "ko": "카스가가 Lv.70 이상이 되었다",
    "en": "Reached level 70 with Kasuga."
  },
  "steps": [
    {
      "ko": "카스가의 캐릭터 레벨을 70까지 올리세요. 직업 랭크와 별개입니다.",
      "en": "Raise Kasuga's character level to 70, separately from job rank."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3673089977",
  "tips": []
};

const stayAwakeAllMovies: CuratedGuide = {
  "summary": {
    "ko": "명화 극장에서 모든 영화를 자지 않고 끝까지 봤다",
    "en": "Watched all the movies at the theater without falling asleep."
  },
  "steps": [
    {
      "ko": "명화 극장의 모든 영화를 졸지 않고 끝까지 보세요. 양은 막고 닭은 치지 마세요.",
      "en": "Finish every cinema film without falling asleep. Block the sheep and avoid hitting the roosters."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3673089977"
};

const sujimonMaster: CuratedGuide = {
  "summary": {
    "ko": "야쿠몬 도감에 200종류 이상의 야쿠몬을 등록했다",
    "en": "Registered over 200 Sujimon to the Sujidex."
  },
  "steps": [
    {
      "ko": "야쿠몬 도감에서 200종 등록 여부를 확인하세요. 250종을 요구하는 조건이 아닙니다.",
      "en": "Check for 200 registered Sujimon in the Sujidex. This achievement does not require 250."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=3673089977"
};

export const YAKUZA_LIKE_A_DRAGON_CURATED: Record<string, CuratedGuide> = {
  [`${Y7_APP_ID}:yazawa_platinum`]: platinum,
  [`${Y7_APP_ID}:yazawa_dragon_cart_all_claer`]: dragonCartMaster,
  [`${Y7_APP_ID}:yazawa_niginigi_complete`]: honkHonkHero,
  [`${Y7_APP_ID}:yazawa_kasuga_level_d`]: lv70,
  [`${Y7_APP_ID}:yazawa_meigaza_all_clear`]: stayAwakeAllMovies,
  [`${Y7_APP_ID}:yazawa_sujimon_b`]: sujimonMaster,
};
