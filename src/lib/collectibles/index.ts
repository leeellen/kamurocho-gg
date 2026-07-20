import type { CollectiblesData } from "./types";

import { yakuza0 } from "./yakuza-0";
import { yakuzaKiwami } from "./yakuza-kiwami";
import { yakuzaKiwami2 } from "./yakuza-kiwami-2";
import { yakuzaKiwami3 } from "./yakuza-kiwami-3";
import { yakuza3 } from "./yakuza-3";
import { yakuza4 } from "./yakuza-4";
import { yakuza5 } from "./yakuza-5";
import { yakuza6 } from "./yakuza-6";
import { yakuzaGaiden } from "./like-a-dragon-gaiden";
import { yakuzaLikeADragon } from "./yakuza-like-a-dragon";
import { likeADragonInfiniteWealth } from "./like-a-dragon-infinite-wealth";
import { likeADragonPirate } from "./like-a-dragon-pirate-yakuza-in-hawaii";
import { likeADragonIshin } from "./like-a-dragon-ishin";
import { judgment } from "./judgment";
import { lostJudgment } from "./lost-judgment";

const dataset: CollectiblesData[] = [
  yakuza0,
  yakuzaKiwami,
  yakuzaKiwami2,
  yakuzaKiwami3,
  yakuza3,
  yakuza4,
  yakuza5,
  yakuza6,
  yakuzaGaiden,
  yakuzaLikeADragon,
  likeADragonInfiniteWealth,
  likeADragonPirate,
  likeADragonIshin,
  judgment,
  lostJudgment,
];

export const COLLECTIBLES_BY_APP = new Map(dataset.map((d) => [d.appId, d]));

export function getCollectibles(appId: number): CollectiblesData | null {
  return COLLECTIBLES_BY_APP.get(appId) ?? null;
}

export type {
  CollectibleCategory,
  CollectibleGroup,
  CollectibleItem,
  CollectibleStep,
  CollectiblesData,
} from "./types";
