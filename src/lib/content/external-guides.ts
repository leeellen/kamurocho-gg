// Authoritative external achievement/trophy guides per game, used by the
// hidden "Empty Lot" hub (/empty-lot). These are the same canonical sources
// the curated walkthroughs cross-reference, surfaced in one place. Steam
// Community guides and PowerPyx trophy roadmaps only — no save files.

export type ExternalGuideKind = "steam" | "powerpyx";

export type ExternalGuideLink = {
  kind: ExternalGuideKind;
  url: string;
};

// Keyed by the curated game slug (see content/games.ts).
export const EXTERNAL_GUIDES: Record<string, ExternalGuideLink[]> = {
  "yakuza-0": [
    { kind: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2869817839" },
  ],
  "yakuza-kiwami": [
    { kind: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2891553742" },
  ],
  "yakuza-kiwami-2": [
    { kind: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2941248154" },
  ],
  "yakuza-3": [
    { kind: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2938400399" },
  ],
  "yakuza-4": [
    { kind: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2863006915" },
  ],
  "yakuza-5": [
    { kind: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2803923402" },
  ],
  "yakuza-6": [
    { kind: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3010598685" },
  ],
  "yakuza-like-a-dragon": [
    { kind: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3025881850" },
  ],
  "like-a-dragon-infinite-wealth": [
    { kind: "powerpyx", url: "https://www.powerpyx.com/like-a-dragon-infinite-wealth-trophy-guide-roadmap/" },
  ],
  "like-a-dragon-gaiden": [
    { kind: "powerpyx", url: "https://www.powerpyx.com/like-a-dragon-gaiden-trophy-guide-roadmap/" },
  ],
  "like-a-dragon-ishin": [
    { kind: "powerpyx", url: "https://www.powerpyx.com/like-a-dragon-ishin-trophy-guide-roadmap/" },
  ],
  "like-a-dragon-pirate-yakuza-in-hawaii": [
    { kind: "powerpyx", url: "https://www.powerpyx.com/like-a-dragon-pirate-yakuza-in-hawaii-trophy-guide-roadmap/" },
  ],
  "judgment": [
    { kind: "powerpyx", url: "https://www.powerpyx.com/judgment-judge-eyes-trophy-guide-roadmap/" },
  ],
  "lost-judgment": [
    { kind: "powerpyx", url: "https://www.powerpyx.com/lost-judgment-trophy-guide-roadmap/" },
  ],
};

export type SaveFileSource = "steam" | "nexus";

export type SaveFile = {
  source: SaveFileSource;
  url: string;
};

// Curated direct links to community 100% / game-clear save files per game.
// Steam Community guides are preferred (same ecosystem as the achievement
// links); Nexus Mods is used where the cleanest full-100% save lives there.
// These are community-hosted, single-player save files — kamurocho.gg hosts
// nothing itself, it only points to the existing public pages.
export const SAVE_FILES: Record<string, SaveFile> = {
  "yakuza-0": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3458411706" },
  "yakuza-kiwami": { source: "nexus", url: "https://www.nexusmods.com/yakuzakiwami/mods/72" },
  "yakuza-kiwami-2": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3176844084" },
  "yakuza-3": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2379715518" },
  "yakuza-4": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2389968624" },
  "yakuza-5": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2408950501" },
  "yakuza-6": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3486501762" },
  "yakuza-like-a-dragon": { source: "nexus", url: "https://www.nexusmods.com/yakuzalikeadragon/mods/300" },
  "like-a-dragon-infinite-wealth": { source: "nexus", url: "https://www.nexusmods.com/likeadragoninfinitewealth/mods/452" },
  "like-a-dragon-gaiden": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=3076926005" },
  "like-a-dragon-ishin": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2934909648" },
  "like-a-dragon-pirate-yakuza-in-hawaii": { source: "nexus", url: "https://www.nexusmods.com/likeadragonpirateyakuzainhawaii/mods/180" },
  "judgment": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2864943075" },
  "lost-judgment": { source: "steam", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=2872921349" },
};
