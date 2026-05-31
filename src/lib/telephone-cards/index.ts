import kamurochoData from "./yakuza-0-kamurocho.json";
import sotenboriData from "./yakuza-0-sotenbori.json";

export type TelephoneCard = {
  number: number;
  chapter: string;
  code: string;
  note: string;
};

export type TelephoneCardMap = {
  slug: string;
  city: "kamurocho" | "sotenbori";
  appId: number;
  gameSlug: string;
  title: string;
  titleEn: string;
  subtitleKo: string;
  subtitleEn: string;
  hintKo: string;
  hintEn: string;
  rewardKo: string;
  rewardEn: string;
  totalCount: number;
  cards: TelephoneCard[];
  hotspots: Record<string, [number, number]>;
  chapterColors: Record<string, string>;
  storageKey: string;
  mapImage: string;
  cardImageBase: string;
  hqImageBase: string;
};

export function cardImageUrl(map: TelephoneCardMap, n: number): string {
  return `${map.cardImageBase}/${String(n).padStart(2, "0")}.jpg`;
}

export function hqImageUrl(map: TelephoneCardMap, n: number): string {
  return `${map.hqImageBase}/${String(n).padStart(2, "0")}.jpg`;
}

const COMMON = {
  appId: 2988580,
  gameSlug: "yakuza-0",
  subtitleKo: "진행 상황은 브라우저에 자동 저장됩니다.",
  subtitleEn: "Progress is saved automatically in your browser.",
  hintKo: "지도의 붉은 점을 클릭하면 해당 카드 이미지가 크게 열립니다. 수집한 점에는 초록 체크가 표시됩니다.",
  hintEn: "Click a red dot on the map to view its card. Collected dots are marked with a green check.",
  rewardKo: "A~C 세트 완성 후 [카드 수집가]에게 말 걸면 500만 보상",
  rewardEn: "Complete A/B/C sets and speak to the Card Collector for ¥5,000,000.",
};

export const telephoneCardMaps: Record<string, TelephoneCardMap> = {
  kamurocho: {
    slug: "kamurocho",
    city: "kamurocho",
    ...COMMON,
    title: kamurochoData.title,
    titleEn: kamurochoData.titleEn,
    totalCount: kamurochoData.totalCount,
    cards: kamurochoData.cards,
    hotspots: kamurochoData.hotspots as unknown as Record<string, [number, number]>,
    chapterColors: kamurochoData.chapterColors,
    storageKey: "yakuza0_kamurocho_cards",
    mapImage: "/yakuza-0-telephone-cards/kamurocho/map.jpg",
    cardImageBase: "/yakuza-0-telephone-cards/kamurocho/cards",
    hqImageBase: "/yakuza-0-telephone-cards/kamurocho/hq",
  },
  sotenbori: {
    slug: "sotenbori",
    city: "sotenbori",
    ...COMMON,
    title: sotenboriData.title,
    titleEn: sotenboriData.titleEn,
    totalCount: sotenboriData.totalCount,
    cards: sotenboriData.cards,
    hotspots: sotenboriData.hotspots as unknown as Record<string, [number, number]>,
    chapterColors: sotenboriData.chapterColors,
    storageKey: "yakuza0_sotenbori_cards",
    mapImage: "/yakuza-0-telephone-cards/sotenbori/map.jpg",
    cardImageBase: "/yakuza-0-telephone-cards/sotenbori/cards",
    hqImageBase: "/yakuza-0-telephone-cards/sotenbori/hq",
  },
};

export function getTelephoneCardMap(
  gameSlug: string,
  city: string,
): TelephoneCardMap | null {
  if (gameSlug !== "yakuza-0") return null;
  return telephoneCardMaps[city] ?? null;
}
