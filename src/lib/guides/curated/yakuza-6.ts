import type { CuratedGuide } from "./index";

const YAKUZA_6_APP_ID = 1388590;

const dandlingDragon: CuratedGuide = {
  "summary": {
    "ko": "Experienced the trials of raising a baby.",
    "en": "Experienced the trials of raising a baby."
  },
  "steps": [
    {
      "ko": "3장 본편의 하루토를 달래는 장면을 진행하세요. 연속 성공이나 만족도 최대를 별도로 요구하는 업적은 아닙니다.",
      "en": "Progress the Chapter 3 story scene in which Kiryu soothes Haruto. No separate perfect streak or maximum satisfaction is required."
    }
  ],
  "tips": [],
  "sourceUrl": "https://gamefaqs.gamespot.com/boards/181153-yakuza-6-the-song-of-life/76543831"
};

const platinum: CuratedGuide = {
  "summary": {
    "ko": "Obtained all other achievements. ",
    "en": "Obtained all other achievements. "
  },
  "steps": [
    {
      "ko": "다른 모든 업적을 달성하세요.",
      "en": "Unlock every other achievement."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2937314217"
};

const legendY6: CuratedGuide = {
  "summary": {
    "ko": "Completed the game on LEGEND difficulty.",
    "en": "Completed the game on LEGEND difficulty."
  },
  "steps": [
    {
      "ko": "클리어 후 Legend 난이도에서 최종 보스를 쓰러뜨리세요.",
      "en": "After clearing the story, defeat the final boss on Legend difficulty."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2937314217",
  "tips": []
};

const allMinigamesY6: CuratedGuide = {
  "summary": {
    "ko": "Played every minigame.",
    "en": "Played every minigame."
  },
  "steps": [
    {
      "ko": "완료 목록의 플레이 여부를 확인하세요. 당구·볼링은 6편의 플레이 스폿에 포함되지 않습니다.",
      "en": "Check the Completion List's played activities. Pool and bowling are not play spots in Yakuza 6."
    }
  ],
  "tips": [],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2937314217"
};

const allSubsY6: CuratedGuide = {
  "summary": {
    "ko": "Completed all substories.",
    "en": "Completed all substories."
  },
  "steps": [
    {
      "ko": "서브스토리 51개를 모두 완료하세요.",
      "en": "Complete all 51 substories."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2937314217",
  "tips": []
};

const liveChatStar: CuratedGuide = {
  "summary": {
    "ko": "Requested every hostess.",
    "en": "Requested every hostess."
  },
  "steps": [
    {
      "ko": "카무로쵸 Club Shine에서 캬바걸 5명을 각각 지명하세요. 라이브 채팅과는 별개의 콘텐츠입니다.",
      "en": "Request each of the five hostesses at Club Shine in Kamurocho. This is separate from Live Chat."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2937314217",
  "tips": []
};

const amonY6: CuratedGuide = {
  "summary": {
    "ko": "Defeated Amon on any difficulty.",
    "en": "Defeated Amon on any difficulty."
  },
  "steps": [
    {
      "ko": "서브스토리 51번 아몬전을 클리어하세요. 전제 조건은 24번과 50번 서브스토리입니다.",
      "en": "Complete substory 51's Amon fight. Its prerequisites are substories 24 and 50."
    }
  ],
  "sourceUrl": "https://steamcommunity.com/sharedfiles/filedetails/?id=2937314217",
  "tips": []
};

export const YAKUZA_6_CURATED: Record<string, CuratedGuide> = {
  [`${YAKUZA_6_APP_ID}:ogfac01`]: platinum,
  [`${YAKUZA_6_APP_ID}:ogfac10`]: legendY6,
  [`${YAKUZA_6_APP_ID}:ogfac13`]: allSubsY6,
  [`${YAKUZA_6_APP_ID}:ogfac28`]: amonY6,
  [`${YAKUZA_6_APP_ID}:ogfac41`]: allMinigamesY6,
  [`${YAKUZA_6_APP_ID}:ogfac45`]: liveChatStar,
  [`${YAKUZA_6_APP_ID}:ogfac50`]: dandlingDragon,
  "1388590:ogfac02": {
    "summary": {
      "ko": "스토리를 진행해 카무로쵸에 처음 도착합니다.",
      "en": "Arrive in Kamurocho for the first time during the story."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements"
  },
  "1388590:ogfac03": {
    "summary": {
      "ko": "제2장을 완료합니다.",
      "en": "Complete Chapter 2."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements"
  },
  "1388590:ogfac04": {
    "summary": {
      "ko": "제4장을 완료합니다.",
      "en": "Complete Chapter 4."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements"
  },
  "1388590:ogfac05": {
    "summary": {
      "ko": "제6장을 완료합니다.",
      "en": "Complete Chapter 6."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements"
  },
  "1388590:ogfac06": {
    "summary": {
      "ko": "제8장을 완료합니다.",
      "en": "Complete Chapter 8."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements"
  },
  "1388590:ogfac07": {
    "summary": {
      "ko": "제10장을 완료합니다.",
      "en": "Complete Chapter 10."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements"
  },
  "1388590:ogfac08": {
    "summary": {
      "ko": "제12장을 완료합니다.",
      "en": "Complete Chapter 12."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements"
  },
  "1388590:ogfac09": {
    "summary": {
      "ko": "제13장을 완료합니다.",
      "en": "Complete Chapter 13."
    },
    "steps": [],
    "tips": [],
    "missable": false,
    "sourceUrl": "https://gamefaqs.gamespot.com/ps4/181153-yakuza-6-the-song-of-life/faqs/75786/trophies-achievements"
  },
};
