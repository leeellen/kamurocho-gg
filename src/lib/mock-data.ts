export type Difficulty = "common" | "uncommon" | "rare" | "legendary";
export type Confidence = "verified" | "unverified";

export type Tip = {
  author: string;
  body: string;
  votes: number;
};

export type VideoGuide = {
  title: string;
  duration: string;
  source: string;
};

export type GuideReference = {
  label: string;
  url: string;
};

export type Achievement = {
  slug: string;
  name: string;
  description: string;
  difficulty: Difficulty;
  rarity: number;
  estimatedTime: string;
  unlocked: boolean;
  unlockedAt?: string;
  playtimeHint?: string;
  iconUrl?: string | null;
  iconGrayUrl?: string | null;
  guide: {
    confidence: Confidence;
    content: string[];
    source: string;
    license: string;
  };
  guideSummary?: string;
  guideStatsLine?: string;
  guideSteps?: string[];
  guideTips?: string[];
  guideReferences?: GuideReference[];
  tips: Tip[];
  videos: VideoGuide[];
};

export type Game = {
  appId: number;
  slug: string;
  name: string;
  completion: number;
  completedAchievements: number;
  totalAchievements: number;
  playtime: string;
  lastPlayed: string;
  state: "Active" | "Returning" | "Finished";
  accent: "secondary" | "primary" | "tertiary";
  coverClass: string;
  heroClass: string;
  tagline: string;
  achievements: Achievement[];
  imgIconUrl?: string | null;
  headerUrl?: string | null;
  capsuleUrl?: string | null;
};

export const libraryGames: Game[] = [
  {
    appId: 1245620,
    slug: "elden-ring",
    name: "Elden Ring",
    completion: 67,
    completedAchievements: 42,
    totalAchievements: 62,
    playtime: "184h 12m",
    lastPlayed: "2h ago",
    state: "Active",
    accent: "secondary",
    coverClass: "cover-elden",
    heroClass: "cover-hero",
    tagline: "Continue the journey through the Lands Between.",
    achievements: [
      {
        slug: "elden-lord",
        name: "Elden Lord",
        description:
          'Reached the "Elden Lord" ending. Transformed the world through the power of the Great Rune.',
        difficulty: "legendary",
        rarity: 2.4,
        estimatedTime: "120h",
        unlocked: true,
        unlockedAt: "Jan 12, 2024",
        guide: {
          confidence: "verified",
          content: [
            "Finish the main questline without locking yourself into the Frenzied Flame ending.",
            "Keep a backup save before the final choice if you plan to collect multiple ending achievements.",
            "This path is mostly story-driven, but it benefits from clearing Leyndell and Farum Azula in a single run.",
          ],
          source: "Elden Ring Wiki (Fandom)",
          license: "CC BY-SA 3.0",
        },
        tips: [
          {
            author: "RuneArchivist",
            body: "Back up before the final boss so you can branch into other endings after reload.",
            votes: 118,
          },
        ],
        videos: [
          { title: "All Elden Ring endings in one route", duration: "14:10", source: "YouTube" },
        ],
      },
      {
        slug: "godrick-the-grafted",
        name: "Godrick the Grafted",
        description: "Defeated the shardbearer Godrick the Grafted at Stormveil Castle.",
        difficulty: "common",
        rarity: 68.2,
        estimatedTime: "12h",
        unlocked: true,
        unlockedAt: "Feb 28, 2023",
        guide: {
          confidence: "verified",
          content: [
            "Clear Stormveil methodically and unlock the side grace near the lift before committing to the boss attempt.",
            "Bleed weapons and spirit summons make the second phase much safer while you learn his axe and wind-up timings.",
          ],
          source: "Elden Ring Wiki (Fandom)",
          license: "CC BY-SA 3.0",
        },
        tips: [
          {
            author: "Curator_01",
            body: "Stay mid-range and punish after the rolling slam.",
            votes: 62,
          },
        ],
        videos: [{ title: "Fast Godrick strategy", duration: "6:44", source: "YouTube" }],
      },
      {
        slug: "shardbearer-malenia",
        name: "Shardbearer Malenia",
        description: "Defeat Malenia, Blade of Miquella in the Haligtree.",
        difficulty: "rare",
        rarity: 18.5,
        estimatedTime: "Est. 8h",
        unlocked: false,
        guide: {
          confidence: "verified",
          content: [
            "Reach Elphael through the Consecrated Snowfield and clear the Haligtree route first so attempts are quick.",
            "Bring frost or bleed damage and learn to disengage from Waterfowl Dance instead of trying to out-trade it.",
            "Defensive talismans and a summon that survives phase one are more valuable than raw damage output.",
          ],
          source: "Elden Ring Wiki (Fandom)",
          license: "CC BY-SA 3.0",
        },
        tips: [
          {
            author: "HaligtreeCartographer",
            body: "Freeze pots can interrupt Waterfowl if you are ready for it.",
            votes: 233,
          },
          {
            author: "BladeHunter",
            body: "Do not panic-roll backwards in phase two; roll through the clone rush instead.",
            votes: 144,
          },
        ],
        videos: [
          { title: "Malenia solo consistency guide", duration: "18:04", source: "YouTube" },
          { title: "Malenia cheese and safe setups", duration: "9:12", source: "YouTube" },
        ],
      },
      {
        slug: "lichdragon-fortissax",
        name: "Lichdragon Fortissax",
        description: "Defeat the Lichdragon Fortissax within the Deeproot Depths.",
        difficulty: "uncommon",
        rarity: 32.1,
        estimatedTime: "Est. 4h",
        unlocked: false,
        guide: {
          confidence: "unverified",
          content: [
            "Advance Fia's questline through Deeproot Depths until the dream arena unlocks.",
            "Lightning resistance matters more than bleed, and staying under the dragon reduces the danger from aerial arcs.",
          ],
          source: "Unlokd AI verification queue",
          license: "Original",
        },
        tips: [
          {
            author: "DeathbedDreamer",
            body: "Carry boltdrake talismans and stay aggressive after the red lightning windup.",
            votes: 88,
          },
        ],
        videos: [
          { title: "Fortissax quest path from Deeproot", duration: "10:08", source: "YouTube" },
        ],
      },
    ],
  },
  {
    appId: 1091500,
    slug: "cyberpunk-2077",
    name: "Cyberpunk 2077",
    completion: 46,
    completedAchievements: 21,
    totalAchievements: 45,
    playtime: "52h 40m",
    lastPlayed: "Yesterday",
    state: "Returning",
    accent: "primary",
    coverClass: "cover-cyberpunk",
    heroClass: "cover-cyberpunk",
    tagline: "Night City is back in rotation this week.",
    achievements: [],
  },
  {
    appId: 367520,
    slug: "hollow-knight",
    name: "Hollow Knight",
    completion: 100,
    completedAchievements: 63,
    totalAchievements: 63,
    playtime: "94h 05m",
    lastPlayed: "Mar 12, 2024",
    state: "Finished",
    accent: "tertiary",
    coverClass: "cover-hollowknight",
    heroClass: "cover-hollowknight",
    tagline: "A completed masterpiece in the vault.",
    achievements: [],
  },
  {
    appId: 244210,
    slug: "assetto-corsa",
    name: "Assetto Corsa",
    completion: 14,
    completedAchievements: 12,
    totalAchievements: 88,
    playtime: "12h 15m",
    lastPlayed: "3 days ago",
    state: "Returning",
    accent: "secondary",
    coverClass: "cover-assetto",
    heroClass: "cover-assetto",
    tagline: "Bench project for short high-focus sessions.",
    achievements: [],
  },
];

export const trendingAchievements = [
  {
    title: "Cyberpunk 2077",
    subtitle: "Hunt for the Phantom Liberty secret ending achievements.",
    badge: "Live Event",
    footer: "12% global completion",
    className: "cover-cyberpunk",
  },
  {
    title: "Silksong Radiants",
    subtitle: "Pharloom awaits the masters.",
    badge: "Spotlight",
    footer: "Preview tracking",
    className: "cover-hollowknight",
  },
  {
    title: "Titan Slayer",
    subtitle: "Legendary",
    badge: "Achievement",
    footer: "0.4% unlocked",
    className: "cover-hero",
  },
  {
    title: "Shadow Lord",
    subtitle: "Rare",
    badge: "Achievement",
    footer: "1.2% unlocked",
    className: "cover-elden",
  },
];

export const matchingTitles = [
  { name: "Starfield", subtitle: "Action RPG • Bethesda", total: "98/100", className: "cover-assetto" },
  { name: "Bloodborne", subtitle: "Action • FromSoftware", total: "45/50", className: "cover-hero" },
  { name: "Wipeout 2097", subtitle: "Racing • Sony", total: "12/32", className: "cover-cyberpunk" },
];

export const searchAchievements = [
  {
    name: "Electric Dreams",
    detail: "Complete the mainframe hack without being detected.",
    rarity: "0.4%",
    accent: "secondary",
  },
  {
    name: "King Slayer",
    detail: "Defeat the God of Chaos on Nightmare difficulty.",
    rarity: "1.2%",
    accent: "tertiary",
  },
  {
    name: "Platinum Soul",
    detail: "Obtain all other trophies in the game.",
    rarity: "5.8%",
    accent: "primary",
  },
  {
    name: "Veteran 2024",
    detail: "Play for over 500 hours during the calendar year.",
    rarity: "22%",
    accent: "muted",
  },
];

export const hallOfFame = [
  {
    rank: "01",
    title: "Golden God",
    game: "The Binding of Isaac: Repentance",
    rarity: "0.12%",
    label: "Legendary",
  },
  {
    rank: "02",
    title: "The Pantheon of Hallownest",
    game: "Hollow Knight",
    rarity: "0.85%",
    label: "Legendary",
  },
  {
    rank: "03",
    title: "Slayer of Demon Souls",
    game: "Demon's Souls",
    rarity: "1.2%",
    label: "Mythic",
  },
  {
    rank: "04",
    title: "Supreme Helper Minion!",
    game: "Terraria",
    rarity: "2.4%",
    label: "Mythic",
  },
  {
    rank: "05",
    title: "The Real End",
    game: "Cyberpunk 2077",
    rarity: "3.1%",
    label: "Rare",
  },
];

export function findGameBySlug(slug: string) {
  return libraryGames.find((game) => game.slug === slug);
}

export function findAchievement(gameSlug: string, achievementSlug: string) {
  return findGameBySlug(gameSlug)?.achievements.find(
    (achievement) => achievement.slug === achievementSlug,
  );
}
