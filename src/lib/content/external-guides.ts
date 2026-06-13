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
