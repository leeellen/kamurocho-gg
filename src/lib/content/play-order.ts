import { CURATED_GAMES } from "./games";
import type { PlayOrderEntry } from "./types";

const CHRONOLOGICAL_REASONS: Record<string, { ko: string; en: string }> = {
  "like-a-dragon-ishin": {
    ko: "막부 말기(1867) 토사·교토 무대의 역사 외전. 본편과 동떨어진 시점이라 마지막에 끼워도 무방합니다.",
    en: "A Bakumatsu-era (1867) historical spin-off set in Tosa and Kyoto — wholly separate from the main timeline.",
  },
  "yakuza-0": {
    ko: "1988년 버블 경제 절정기의 카무로초·소텐보리. 키류와 마지마 모두의 출발점.",
    en: "1988 at the peak of Japan's bubble economy — the origin story for both Kiryu and Majima.",
  },
  "yakuza-kiwami": {
    ko: "1995년 도지마 사건 → 2005년 출소까지. 원작 1편의 리메이크라 0편 직후 흐름이 가장 매끄럽습니다.",
    en: "1995 (the Dojima incident) through Kiryu's 2005 release — the Yakuza 1 remake that immediately follows 0.",
  },
  "yakuza-kiwami-2": {
    ko: "2006년 도쿄·오사카. 키류가 토조회 4대 회장이 되는 직후 사건과 류지 고다와의 대결.",
    en: "2006 in Tokyo and Osaka — Kiryu just after stepping down as Tojo Clan chairman, facing Ryuji Goda.",
  },
  "yakuza-3": {
    ko: "2009년 오키나와 모리닝글로리 고아원과 카무로초의 토지 분쟁.",
    en: "2009 — Kiryu running the Morning Glory orphanage in Okinawa alongside the Kamurocho land dispute.",
  },
  "yakuza-4": {
    ko: "2010년 카무로초. 아키야마·사에지마·타니무라·키류 4인 시점이 교차하는 한 주.",
    en: "2010 in Kamurocho — Akiyama, Saejima, Tanimura, and Kiryu's stories converge over a single week.",
  },
  "yakuza-5": {
    ko: "2012년 5도시(나가스가이·소텐보리·츠키미노·킨에이초·카무로초)를 오가는 키류·사에지마·아키야마·하루카·시나다 5인 사가.",
    en: "2012 across five cities — the longest entry, weaving together five protagonists' arcs.",
  },
  "yakuza-6": {
    ko: "2016년 카무로초·오노미치 츠루기시마. 키류 사가의 마무리.",
    en: "2016 in Kamurocho and Onomichi — the capstone of Kiryu's mainline arc.",
  },
  "judgment": {
    ko: "2018년 카무로초. 변호사 출신 탐정 야가미 타카유미의 데뷔작.",
    en: "2018 in Kamurocho — the debut of ex-lawyer-turned-detective Takayuki Yagami.",
  },
  "yakuza-like-a-dragon": {
    ko: "2019년, 키류 사가 종료 직후 시점. 이치반의 18년 복역 이후 요코하마 이세자키 이진초에서 시작.",
    en: "Late 2019 — just after Kiryu's saga ends. Ichiban's 18-year sentence concludes and he lands in Yokohama's Ijincho.",
  },
  "lost-judgment": {
    ko: "2021년 카무로초·이세자키 이진초. 청춘 드라마와 학원 폭력 사건이 얽히는 후속작.",
    en: "2021 across Kamurocho and Ijincho — the sequel that interlocks School Stories with a violence-and-bullying case.",
  },
  "like-a-dragon-gaiden": {
    ko: "2023년, 키류의 공백기 외전. 야쿠자 6편 이후부터 8편 직전까지의 \"이름을 지운\" 시기.",
    en: "2023 — a side story bridging the 2016 fallout of Yakuza 6 to the lead-up to Infinite Wealth.",
  },
  "like-a-dragon-infinite-wealth": {
    ko: "2024년 호놀룰루·요코하마. 이치반과 키류가 함께 움직이는 대형 후속작.",
    en: "2024 across Honolulu and Yokohama — Ichiban and Kiryu share the lead for the first time.",
  },
  "like-a-dragon-pirate-yakuza-in-hawaii": {
    ko: "2025년 하와이·매들랜티스. 마지마가 기억을 잃고 해적 선장이 되는 8편 외전.",
    en: "2025 in Hawaii and Madlantis — Majima loses his memory and becomes a pirate captain in this 8-line spin-off.",
  },
};

export const PLAY_ORDER: Record<"new" | "chronological", PlayOrderEntry[]> = {
  new: [
    {
      slug: "yakuza-0",
      recommended: true,
      reason: {
        ko: "프리퀄이자 인물 관계 설명이 가장 자연스럽습니다.",
        en: "The prequel and still the cleanest point to learn the cast and tone.",
      },
    },
    {
      slug: "yakuza-kiwami",
      recommended: true,
      reason: {
        ko: "0편에서 쌓인 감정을 바로 이어받는 리메이크입니다.",
        en: "The best immediate follow-up because it pays off 0's setup directly.",
      },
    },
    {
      slug: "yakuza-kiwami-2",
      recommended: true,
      reason: {
        ko: "구식 리마스터 구간에 들어가기 전 템포가 좋습니다.",
        en: "A strong modern stop before the older remasters begin to show their age.",
      },
    },
    {
      slug: "yakuza-3",
      recommended: false,
      reason: {
        ko: "전투 감각이 낡았지만 이후 서사 이해에 중요합니다.",
        en: "A dated combat feel, but story context here matters later.",
      },
    },
    {
      slug: "yakuza-4",
      recommended: false,
      reason: {
        ko: "멀티 주인공 구성이 본격화됩니다.",
        en: "This is where the multi-lead structure fully arrives.",
      },
    },
    {
      slug: "yakuza-5",
      recommended: true,
      reason: {
        ko: "분량은 길지만 키류 사가의 정서적 정점입니다.",
        en: "Huge, but the emotional peak of the Kiryu arc.",
      },
    },
    {
      slug: "yakuza-6",
      recommended: true,
      reason: {
        ko: "키류 사가를 정리하는 마무리입니다.",
        en: "The capstone that closes Kiryu's mainline saga.",
      },
    },
    {
      slug: "yakuza-like-a-dragon",
      recommended: true,
      reason: {
        ko: "새 주인공 체제와 RPG 시스템이 완전히 시작됩니다.",
        en: "The clean start of Ichiban's era and the RPG-style structure.",
      },
    },
    {
      slug: "like-a-dragon-gaiden",
      recommended: true,
      reason: {
        ko: "7편 이후에 보면 키류 쪽 공백기가 가장 자연스럽게 이어집니다.",
        en: "It lands best after Like a Dragon, when Kiryu's side of the timeline can pay off cleanly.",
      },
    },
    {
      slug: "like-a-dragon-infinite-wealth",
      recommended: true,
      reason: {
        ko: "7편과 외전을 본 뒤 들어가면 이치반과 키류 양쪽 흐름이 가장 잘 맞물립니다.",
        en: "It lands best once both Like a Dragon and Gaiden have set up Ichiban and Kiryu's sides.",
      },
    },
    {
      slug: "like-a-dragon-pirate-yakuza-in-hawaii",
      recommended: false,
      reason: {
        ko: "8편 이후에 보는 편이 하와이와 마지마 쪽 후속 맥락을 읽기 쉽습니다.",
        en: "Best played after Infinite Wealth, once the Hawaii setup and Majima follow-up context are in place.",
      },
    },
    {
      slug: "like-a-dragon-ishin",
      recommended: false,
      reason: {
        ko: "본편과 독립된 역사 외전이라 메인 사가와 별개로 끼워 넣어도 됩니다.",
        en: "A standalone historical spinoff, so it can be slotted in separately from the main saga.",
      },
    },
    {
      slug: "judgment",
      recommended: true,
      reason: {
        ko: "메인 라인과 별도로 즐기기 좋은 탐정 축의 입문점입니다.",
        en: "The best entry point for the detective-side spin-off line.",
      },
    },
    {
      slug: "lost-judgment",
      recommended: true,
      reason: {
        ko: "전작 이해 후 들어가면 훨씬 정교하게 읽히는 후속작입니다.",
        en: "A much richer sequel once the first Judgment's cast and systems are familiar.",
      },
    },
  ],
  chronological: CURATED_GAMES
    .slice()
    .sort((a, b) => a.year - b.year)
    .map((game) => ({
      slug: game.slug,
      recommended: game.arc !== "kiryu" || game.slug !== "yakuza-3",
      reason: CHRONOLOGICAL_REASONS[game.slug] ?? {
        ko: `스토리 시점이 ${game.year}년인 작품입니다.`,
        en: `Set in ${game.year} within the in-universe timeline.`,
      },
    })),
};
