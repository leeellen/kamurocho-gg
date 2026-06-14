import type { MinigamesData } from "./types";

import { yakuza0Minigames } from "./yakuza-0";
import { yakuzaKiwamiMinigames } from "./yakuza-kiwami";
import { yakuzaKiwami2Minigames } from "./yakuza-kiwami-2";
import { yakuzaKiwami3Minigames } from "./yakuza-kiwami-3";
import { yakuza3Minigames } from "./yakuza-3";
import { yakuza4Minigames } from "./yakuza-4";
import { yakuza5Minigames } from "./yakuza-5";
import { yakuza6Minigames } from "./yakuza-6";
import { yakuzaLikeADragonMinigames } from "./yakuza-like-a-dragon";
import { likeADragonInfiniteWealthMinigames } from "./like-a-dragon-infinite-wealth";
import { likeADragonGaidenMinigames } from "./like-a-dragon-gaiden";
import { likeADragonIshinMinigames } from "./like-a-dragon-ishin";
import { likeADragonPirateMinigames } from "./like-a-dragon-pirate-yakuza-in-hawaii";
import { judgmentMinigames } from "./judgment";
import { lostJudgmentMinigames } from "./lost-judgment";

const dataset: MinigamesData[] = [
  yakuza0Minigames,
  yakuzaKiwamiMinigames,
  yakuzaKiwami2Minigames,
  yakuzaKiwami3Minigames,
  yakuza3Minigames,
  yakuza4Minigames,
  yakuza5Minigames,
  yakuza6Minigames,
  yakuzaLikeADragonMinigames,
  likeADragonInfiniteWealthMinigames,
  likeADragonGaidenMinigames,
  likeADragonIshinMinigames,
  likeADragonPirateMinigames,
  judgmentMinigames,
  lostJudgmentMinigames,
];

export const MINIGAMES_BY_APP = new Map(dataset.map((d) => [d.appId, d]));

export function getMinigames(appId: number): MinigamesData | null {
  return MINIGAMES_BY_APP.get(appId) ?? null;
}

export type { Minigame, MinigameVideo, MinigamesData } from "./types";
