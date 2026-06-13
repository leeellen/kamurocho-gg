import { CURATED_GAMES } from "./games";
import type { PlayOrderEntry, ReferenceTitle } from "./types";

export const REFERENCE_TITLES: ReferenceTitle[] = [
  {
    slug: "yakuza-1",
    title: { ko: "용과 같이", en: "Yakuza" },
    originalTitle: "Ryu ga Gotoku",
    year: 2005,
    releaseInfo: {
      ko: "PS2 · 2005(일본) / 2006(서구)",
      en: "PS2 · 2005 (Japan) / 2006 (West)",
    },
    lead: { ko: "키류 카즈마", en: "Kazuma Kiryu" },
    placement: {
      ko: "극 1과 같은 사건",
      en: "Same story slot as Kiwami",
    },
    availability: {
      ko: "PS2 전용. 현대 기기 이식이나 Steam 업적은 없습니다. 같은 이야기를 지금 즐기려면 「용과 같이 극」을 플레이하세요.",
      en: "PS2 only — no modern port or Steam achievements. Play Yakuza Kiwami for the same story today.",
    },
    note: {
      ko: "시리즈의 시작점인 PS2 원작 1편. 극 1로 리메이크됐습니다.",
      en: "The PS2 original that started the series, later remade as Kiwami.",
    },
    overview: [
      {
        ko: "시리즈 전체의 출발점입니다. 도지마의 용 키류 카즈마가 형제 니시키야마의 죄를 대신 뒤집어쓰고 10년 복역한 뒤, 100억 엔과 소녀 하루카를 둘러싼 사건에 휘말리는 카무로초 누아르 드라마.",
        en: "The starting point of the whole series. Kazuma Kiryu takes the fall for his sworn brother Nishikiyama, serves ten years, and walks back into a Kamurocho noir built around ten billion yen and a girl named Haruka.",
      },
      {
        ko: "서구판은 할리우드 배우를 기용한 영어 더빙으로 출시됐는데, 이후 시리즈가 일본어 음성+자막 노선을 굳히면서 이 영어 더빙은 원작만의 독특한 유물로 남았습니다.",
        en: "The Western release shipped with a Hollywood-cast English dub. The series later committed to Japanese audio with subtitles, leaving that dub as a quirk unique to the original.",
      },
    ],
    whyItMatters: {
      ko: "키류·니시키·유미의 삼각 관계와 토조회의 권력 구도 등 시리즈의 핵심 토대가 모두 여기서 세워집니다. 극 1은 이 골격을 0편 이후 연출로 다듬은 리메이크입니다.",
      en: "Kiryu, Nishiki, and Yumi's triangle and the Tojo Clan power structure — the series' foundations — are all laid here. Kiwami is the remake that re-stages this skeleton with post-Yakuza 0 polish.",
    },
    modernRoute: {
      ko: "지금 플레이한다면 → 용과 같이 극 (Steam 추적 대상)",
      en: "To play it today → Yakuza Kiwami (tracked on Steam)",
    },
  },
  {
    slug: "yakuza-2",
    title: { ko: "용과 같이 2", en: "Yakuza 2" },
    originalTitle: "Ryu ga Gotoku 2",
    year: 2006,
    releaseInfo: {
      ko: "PS2 · 2006(일본) / 2008(서구)",
      en: "PS2 · 2006 (Japan) / 2008 (West)",
    },
    lead: { ko: "키류 카즈마", en: "Kazuma Kiryu" },
    placement: {
      ko: "극 2와 같은 사건",
      en: "Same story slot as Kiwami 2",
    },
    availability: {
      ko: "PS2 전용. 현대 이식·Steam 업적 없음. 같은 이야기는 드래곤 엔진 리메이크 「용과 같이 극2」로 즐길 수 있습니다.",
      en: "PS2 only — no modern port or Steam achievements. The Dragon Engine remake Yakuza Kiwami 2 covers the same story.",
    },
    note: {
      ko: "사야마·류지 고다·오사카가 등장하는 PS2 원작 2편. 극 2로 리메이크됐습니다.",
      en: "The PS2 original that introduces Sayama, Ryuji Goda, and Osaka — later remade as Kiwami 2.",
    },
    overview: [
      {
        ko: "다수의 팬이 시리즈 최고작으로 꼽는 작품입니다. 카무로초와 소텐보리(오사카)를 오가며 토조회와 오미 연합의 전면 충돌, 그리고 「용과 용」으로 불리는 키류 vs 류지 고다의 대결을 그립니다.",
        en: "Widely cited as a fan-favorite peak. It moves between Kamurocho and Sotenbori (Osaka) for an all-out Tojo–Omi war and the 'Dragon vs. Dragon' clash between Kiryu and Ryuji Goda.",
      },
      {
        ko: "형사 사야마 카오루가 합류해 시리즈에서 드물게 비중 있는 동행 히로인 라인을 형성하고, 류지 고다는 이후 데드 소울즈 등에도 재등장하는 인기 캐릭터로 자리잡았습니다.",
        en: "Detective Kaoru Sayama joins as a rare, substantial companion-heroine, and Ryuji Goda became popular enough to return in later titles like Dead Souls.",
      },
    ],
    whyItMatters: {
      ko: "오사카 무대, 라이벌 「용」 구도, 광역 항쟁 서사 등 이후 시리즈가 반복해 쓰는 공식이 정립된 작품입니다.",
      en: "It established formulas the series reuses for years: the Osaka setting, a rival 'Dragon,' and sprawling clan-war storytelling.",
    },
    modernRoute: {
      ko: "지금 플레이한다면 → 용과 같이 극2 (Steam 추적 대상)",
      en: "To play it today → Yakuza Kiwami 2 (tracked on Steam)",
    },
  },
  {
    slug: "kurohyou",
    title: { ko: "쿠로효: 용과 같이 신장", en: "Kurohyou: Ryu ga Gotoku Shinsho" },
    originalTitle: "Kurohyo: Ryu ga Gotoku Shinsho",
    year: 2010,
    releaseInfo: {
      ko: "PSP · 2010 (일본 전용)",
      en: "PSP · 2010 (Japan only)",
    },
    lead: { ko: "우쿄 타츠야", en: "Tatsuya Ukyo" },
    placement: {
      ko: "4편 전후의 PSP 외전",
      en: "PSP spin-off around the Yakuza 4 era",
    },
    availability: {
      ko: "PSP 전용·일본 미발매 지역 한정(서구 미발매). 공식 영문화·이식·Steam 업적 모두 없습니다.",
      en: "PSP only and Japan-only (never localized). No official translation, port, or Steam achievements.",
    },
    note: {
      ko: "카무로초를 신규 주인공 시점으로 그린 일본 한정 휴대용 외전.",
      en: "A Japan-only handheld spin-off that views Kamurocho through a brand-new lead.",
    },
    overview: [
      {
        ko: "키류가 아닌 신규 주인공 우쿄 타츠야를 내세운 휴대용 외전입니다. 무대는 카무로초를 본뜬 「카무로」이며, 길거리 싸움꾼이 지하 격투의 세계로 빠져드는 청춘 누아르를 그립니다.",
        en: "A handheld spin-off led by a new protagonist, Tatsuya Ukyo, rather than Kiryu. Set in a Kamurocho stand-in, it tells a coming-of-age noir about a street brawler pulled into the underground fighting world.",
      },
      {
        ko: "전투는 실제 종합격투기를 모티프로 한 시스템이며, 컷신 일부에 실사 영상(라이브 액션)을 사용한 점이 특징입니다. 외전 성격상 본편 정사와는 느슨하게만 연결됩니다.",
        en: "Combat is modeled on real mixed martial arts, and some cutscenes use live-action footage. As a spin-off, it only loosely ties into the mainline canon.",
      },
    ],
    whyItMatters: {
      ko: "RGG가 「키류 없이도 카무로초 드라마가 성립하는가」를 시험한 초기 사례로, 훗날 저지먼트·이치반 등 새 주인공 노선의 먼 선조 격입니다.",
      en: "An early test of whether a Kamurocho drama could work without Kiryu — a distant ancestor of the later new-protagonist lines like Judgment and Ichiban's saga.",
    },
  },
  {
    slug: "kurohyou-2",
    title: { ko: "쿠로효 2: 용과 같이 아수라편", en: "Kurohyou 2: Ryu ga Gotoku Ashura Hen" },
    originalTitle: "Kurohyo 2: Ryu ga Gotoku Ashura-hen",
    year: 2012,
    releaseInfo: {
      ko: "PSP · 2012 (일본 전용)",
      en: "PSP · 2012 (Japan only)",
    },
    lead: { ko: "우쿄 타츠야", en: "Tatsuya Ukyo" },
    placement: {
      ko: "5편 전후의 PSP 외전",
      en: "PSP spin-off around the Yakuza 5 era",
    },
    availability: {
      ko: "PSP 전용·일본 한정. 공식 영문화·이식·Steam 업적 없음.",
      en: "PSP only and Japan-only. No official translation, port, or Steam achievements.",
    },
    note: {
      ko: "쿠로효 후속작. 더 큰 항쟁 서사로 우쿄의 이야기를 잇습니다.",
      en: "The Kurohyou sequel, continuing Ukyo's story with a larger clan-war arc.",
    },
    overview: [
      {
        ko: "전작의 우쿄 타츠야가 돌아오는 PSP 외전 2편입니다. 전작보다 규모가 커진 항쟁 서사와 강화된 격투 시스템을 선보이며, 시리즈 휴대용 라인의 정점이자 종착점이 되었습니다.",
        en: "A PSP sequel that brings back Tatsuya Ukyo. It scales up the clan-war story and refines the fighting system, standing as both the peak and the end of the series' handheld line.",
      },
      {
        ko: "이후 RGG의 휴대용 전용 신작은 사실상 끊겼기 때문에, 두 편의 쿠로효는 RGG가 본격적으로 콘솔·PC 중심으로 이동하기 전의 독특한 분기로 기억됩니다.",
        en: "RGG effectively stopped making handheld-exclusive entries afterward, so the two Kurohyou games are remembered as a distinct branch before the studio went console- and PC-first.",
      },
    ],
    whyItMatters: {
      ko: "휴대용 스핀오프 실험의 마무리이자, 정사 본편 바깥에서 카무로초 세계관을 확장하던 시기를 대표하는 작품입니다.",
      en: "The close of RGG's handheld-spin-off experiment and a marker of the era when the studio expanded the Kamurocho universe outside the mainline canon.",
    },
  },
  {
    slug: "kenzan",
    title: { ko: "용과 같이 켄잔!", en: "Ryu ga Gotoku Kenzan!" },
    originalTitle: "Ryu ga Gotoku Kenzan!",
    year: 1605,
    releaseInfo: {
      ko: "PS3 · 2008 (일본 전용)",
      en: "PS3 · 2008 (Japan only)",
    },
    lead: { ko: "미야모토 무사시 (키류 외형)", en: "Miyamoto Musashi (Kiryu's likeness)" },
    placement: {
      ko: "독립 역사 외전 (에도 시대)",
      en: "Standalone historical spin-off (Edo era)",
    },
    availability: {
      ko: "PS3 전용·일본 한정. 공식 영문화·이식·Steam 업적 없음. 콘셉트의 정신적 후계작이 「용과 같이 유신!」입니다.",
      en: "PS3 only and Japan-only. No official translation, port, or Steam achievements. Its spiritual successor is Like a Dragon: Ishin!.",
    },
    note: {
      ko: "시리즈 최초의 역사 외전. 검호 미야모토 무사시를 키류 외형으로 그립니다.",
      en: "The series' first historical spin-off, casting swordsman Miyamoto Musashi in Kiryu's likeness.",
    },
    overview: [
      {
        ko: "RGG 최초의 역사 외전으로, 에도 시대 초기를 배경으로 전설의 검호 미야모토 무사시의 이야기를 키류 카즈마의 외형으로 재해석합니다. 시리즈 단골 배우들이 역사 인물로 분하는 구성도 이때 처음 등장했습니다.",
        en: "RGG's first historical spin-off, reimagining the legend of swordsman Miyamoto Musashi — wearing Kazuma Kiryu's face — in the early Edo period. It introduced the recurring trick of casting series regulars as historical figures.",
      },
      {
        ko: "검술 중심의 전투, 거리 산책과 미니게임이 어우러진 구조는 훗날 「용과 같이 유신!」으로 거의 그대로 계승됩니다. 유신을 즐겼다면 그 원형이 바로 켄잔입니다.",
        en: "Its katana-focused combat blended with town-strolling and minigames carries over almost wholesale into Like a Dragon: Ishin!. If you enjoyed Ishin, Kenzan is its prototype.",
      },
    ],
    whyItMatters: {
      ko: "「현대 야쿠자 드라마」 공식을 시대극에 이식할 수 있음을 증명한 작품으로, 유신!이라는 정식 글로벌 출시작의 직접적 뿌리입니다.",
      en: "It proved the modern-yakuza formula could transplant into a period setting — the direct root of Ishin!, which finally gave the concept a global release.",
    },
    modernRoute: {
      ko: "비슷한 경험 → 용과 같이 유신! 극 (Steam 추적 대상)",
      en: "For a similar experience → Like a Dragon: Ishin! (tracked on Steam)",
    },
  },
  {
    slug: "dead-souls",
    title: { ko: "용과 같이 OF THE END", en: "Yakuza: Dead Souls" },
    originalTitle: "Ryu ga Gotoku: Of the End",
    year: 2011,
    releaseInfo: {
      ko: "PS3 · 2011(일본) / 2012(서구)",
      en: "PS3 · 2011 (Japan) / 2012 (West)",
    },
    lead: { ko: "아키야마 / 마지마 / 류지 고다 / 키류", en: "Akiyama / Majima / Ryuji Goda / Kiryu" },
    placement: {
      ko: "비정사 좀비 외전",
      en: "Non-canon zombie spin-off",
    },
    availability: {
      ko: "PS3 전용. 현대 이식·Steam 업적 없음. 정사 흐름과 분리된 실험작이라 본편 진행에는 필수가 아닙니다.",
      en: "PS3 only — no modern port or Steam achievements. A non-canon experiment, so it's not required for the mainline story.",
    },
    note: {
      ko: "카무로초가 좀비로 뒤덮이는 비정사 3인칭 슈터 외전.",
      en: "A non-canon third-person shooter where a zombie outbreak overruns Kamurocho.",
    },
    overview: [
      {
        ko: "카무로초에 좀비 사태가 터진다는 비정사 설정의 실험작으로, 시리즈 처음이자 (사실상) 마지막으로 총기 중심의 3인칭 슈터 전투를 전면에 내세웠습니다. 아키야마·마지마·류지 고다·키류 4인을 번갈아 조작합니다.",
        en: "A non-canon experiment in which a zombie outbreak hits Kamurocho, putting gun-focused third-person shooting front and center for the first (and essentially only) time. You alternate among Akiyama, Majima, Ryuji Goda, and Kiryu.",
      },
      {
        ko: "전투 완성도에 대한 평가는 갈렸지만, 시리즈가 한 번쯤 장르 실험을 감행했다는 점에서 팬들에게 호기심의 대상으로 남아 있습니다.",
        en: "Reception to its combat was mixed, but it endures as a curiosity — proof that the series was willing to gamble on a genre experiment at least once.",
      },
    ],
    whyItMatters: {
      ko: "정사에 영향을 주지 않는 「만약」 외전이지만, RGG가 본편 캐릭터로 장르를 통째로 바꿔보는 실험을 했던 유일한 사례로 시리즈 색인에서 빠질 수 없는 항목입니다.",
      en: "A 'what-if' spin-off with no canon impact, but the only time RGG swapped genres wholesale using mainline characters — too notable to leave out of a full-series index.",
    },
  },
];

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
  "yakuza-kiwami-3": {
    ko: "2009년 오키나와·카무로초. 용과 같이3의 드래곤 엔진 리메이크 + 외전 「Dark Ties」 동봉.",
    en: "2009 in Okinawa and Kamurocho — the Dragon Engine remake of Yakuza 3, bundled with the Dark Ties side scenario.",
  },
  "yakuza-3": {
    ko: "2009년 오키나와 모리닝글로리 고아원과 카무로초의 토지 분쟁 (리마스터판).",
    en: "2009 — Kiryu running the Morning Glory orphanage in Okinawa alongside the Kamurocho land dispute (remaster).",
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
      slug: "yakuza-kiwami-3",
      recommended: true,
      reason: {
        ko: "용과 같이3의 드래곤 엔진 리메이크. 신규 외전 Dark Ties도 같이 풀려 키류 라인 정주행을 가장 매끄럽게 잇습니다.",
        en: "Dragon Engine remake of Yakuza 3 — bundles the new Dark Ties scenario, the smoothest way to keep the Kiryu line going after Kiwami 2.",
      },
    },
    {
      slug: "yakuza-3",
      recommended: false,
      reason: {
        ko: "구판 리마스터. 극3가 있다면 그쪽으로 진행하는 편이 자연스럽습니다.",
        en: "Older remaster — Kiwami 3 supersedes it for first-time play.",
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
