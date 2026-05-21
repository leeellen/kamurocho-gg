import type { SubstoriesData, SubstoryItem } from "./types";

import { yakuza0Substories } from "./yakuza-0";
import { yakuzaKiwamiSubstories } from "./yakuza-kiwami";
import { yakuzaKiwami2Substories } from "./yakuza-kiwami-2";
import { yakuza3Substories } from "./yakuza-3";
import { yakuza4Substories } from "./yakuza-4";
import { yakuza5Substories } from "./yakuza-5";
import { yakuza6Substories } from "./yakuza-6";
import { yakuzaGaidenSubstories } from "./like-a-dragon-gaiden";
import { yakuzaLikeADragonSubstories } from "./yakuza-like-a-dragon";
import { likeADragonInfiniteWealthSubstories } from "./like-a-dragon-infinite-wealth";
import { likeADragonPirateSubstories } from "./like-a-dragon-pirate-yakuza-in-hawaii";
import { likeADragonIshinSubstories } from "./like-a-dragon-ishin";
import { judgmentSubstories } from "./judgment";
import { lostJudgmentSubstories } from "./lost-judgment";

const dataset: SubstoriesData[] = [
  yakuza0Substories,
  yakuzaKiwamiSubstories,
  yakuzaKiwami2Substories,
  yakuza3Substories,
  yakuza4Substories,
  yakuza5Substories,
  yakuza6Substories,
  yakuzaGaidenSubstories,
  yakuzaLikeADragonSubstories,
  likeADragonInfiniteWealthSubstories,
  likeADragonPirateSubstories,
  likeADragonIshinSubstories,
  judgmentSubstories,
  lostJudgmentSubstories,
];

export const SUBSTORIES_BY_APP = new Map(dataset.map((d) => [d.appId, d]));

export function getSubstories(appId: number): SubstoriesData | null {
  return SUBSTORIES_BY_APP.get(appId) ?? null;
}

/** Flatten chapter groups into one list sorted by in-game substory number. */
export function flattenSubstories(data: SubstoriesData): SubstoryItem[] {
  const indexed: { item: SubstoryItem; order: number }[] = [];
  let order = 0;
  for (const group of data.groups) {
    for (const item of group.items) {
      indexed.push({ item, order: order++ });
    }
  }
  return indexed
    .sort((a, b) => {
      if (a.item.number !== b.item.number) return a.item.number - b.item.number;
      return a.order - b.order;
    })
    .map(({ item }) => item);
}

export type {
  SubstoriesData,
  SubstoryChoice,
  SubstoryGroup,
  SubstoryItem,
  SubstoryStep,
} from "./types";
