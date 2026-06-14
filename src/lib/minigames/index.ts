import type { MinigamesData } from "./types";

import { yakuza0Minigames } from "./yakuza-0";

const dataset: MinigamesData[] = [yakuza0Minigames];

export const MINIGAMES_BY_APP = new Map(dataset.map((d) => [d.appId, d]));

export function getMinigames(appId: number): MinigamesData | null {
  return MINIGAMES_BY_APP.get(appId) ?? null;
}

export type { Minigame, MinigameVideo, MinigamesData } from "./types";
