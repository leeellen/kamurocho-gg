# Ralph: interactive map template across all titles

Task: apply InteractiveChecklist template to map-based "go find & collect" collectibles
for ALL titles. Self-collect map images + item info from guide sites (curl raw HTML →
`data-original` lazy URLs). Remove paint-search YouTube videos (DONE).

## Mechanism (how to add a title)
1. Category needs enumerated location items (`groups`/`items` with `number`+`location`).
   If missing, collect from the guide `source` URL: `curl -sL -A Mozilla <url>` → grep
   `data-original=` near relevant `alt=`. gamewith/game8 lazy-load images.
2. Add region `mapImage` (annotated overview map from guide) to the group(s).
3. Register `{ appId: { slug: "category" } }` in `INTERACTIVE_CATEGORIES`
   (`src/app/game/[id]/_components/collectibles-section.tsx`).
4. `npx next build` must pass. Verify DOM via playwright (screenshot tool captures
   hero only in this env — use browser_evaluate probes).

## Status
- [x] paint-search (Lost Judgment 2058190) — interactive + 2 region maps + videos removed
- [x] telephone-cards (Yakuza 0 2988580) — interactive hotspot map (pre-existing)
- [x] stray-cats (Yakuza 6 1388590) — interactive (2 tabs 9+10, progress, reward via detail). Source riroa is text-only → no map/images available.
- [x] friend-events (Judgment 2058180) — interactive (50 cards, condition via detail modal). No overview map on gamewith. Adapter now surfaces `body` into modal steps.
- [ ] real-estate-royale (Yakuza 0) — has 56 items + mapImage already; register (business sim, lower priority)
- [x] coin-lockers (Yakuza 3 1088710) — DONE: 100 lockers (카무로초 50 + 류큐 50), both translated (id·street title, 📍 key location, reward), 2 region tabs + 2 city maps (game8 12204421 / 12305980), interactive. DOM-verified.
- [x] lockers (Yakuza 4 1105500) — DONE: 100 lockers (지상 50 + 지하·옥상 50), 2 NUMBERED maps (key1/key2.gif), 2 tabs, interactive. DOM-verified (maps load 648×460 / 660×402).
- [x] coin-lockers (Kiwami 2 3717340) — DONE: 100 (카무로초 50 + 소텐보리 50), 2 NUMBERED maps, 2 tabs, interactive. DOM-verified.
- [x] coin-lockers (Yakuza Kiwami 3717330) — ADDED new category: 50 Kamurocho lockers + NUMBERED map (dswiipspwikips3 map-coin-locker-key.jpg) + interactive. DOM-verified (658w).
- [ ] NEXT candidates (add coin-lockers category where game has them + guide): Yakuza 6 (1388590, dswiipspwikips3 yakuza-6?), Yakuza 0 (2988580, has lockers besides telephone cards), Yakuza 5 (1105510, multi-city — heavy). Y5 existing scavenger/viewpoints/purikura are NOT enumerable numbered-map collectibles — skip.
  Note: dswiipspwikips3 rate-limits (429) under rapid requests — space out curls.

## DECISION (user): DEPTH — transcribe empty categories. One category/iteration.
## Strategy notes
- Modal now shows `location` separately (📍) — items with BOTH title+location no longer
  hide the key location. Adapter maps `body`→steps. game8 .webp/original renders in <img>.
- Only paint-search + telephone have true NUMBERED overview maps. Others use the guide's
  general city map for orientation (game8 城/街 map) — still useful context.
- Remaining empty map-based: 琉球街 lockers (y3), Yakuza 4 lockers, Kiwami 2 coin-lockers,
  Yakuza 5 viewpoints/scavenger/purikura. Each: find game8/gamewith guide → curl → parse
  table → translate → generate → splice → register.
- [ ] lockers (Yakuza 4 1105500) — 0 items; collect
- [ ] coin-lockers (Kiwami 2 3717340) — 0 items; collect
- [ ] viewpoints / scavenger / purikura-frames (Yakuza 5 1105510) — 0 items; collect
- [ ] (evaluate remaining: judgment photo-rumors, y5 others, etc.)

## Notes
- Only yakuza-0 telephone has authored hotspot pin coordinates. Others use static
  annotated map (numbered) + numbered grid checklist — complete without pin coords.
- gamewith image URLs are `.jpg`; CDN serves avif via content-negotiation.

## Map UX pass (post-loop)
- All maps capped `max-w-[540px]` + centered (was full-width → huge/blurry upscale; now downscale = sharp).
- Hotspot-overlay map switched to plain <img> (supports external gamewith hosts).
- paint-search: TRUE clickable pins (Y0-style) — Kamurocho 26 + Yokohama 30 hotspots authored in lost-judgment.ts (CollectibleGroup.hotspots). Pin click → item modal (image/steps/reward).
- Coin-locker maps (y3/y4/kiwami/kiwami2/y5): kept static (their A1-J5 labels too dense/low-res to transcribe 50 positions reliably — mismatched pins worse than none) BUT added click-to-zoom LIGHTBOX (fullscreen, object-contain, Esc/click closes) for readability + interaction. Numbers on map ↔ card numbers.
- To upgrade a coin-locker map to real pins later: read its A1-J5 positions, add `hotspots` (item# = (letterIndex)*5+digit) to that group in the data file.

## CRITICAL: collectibles are under a TAB (수집요소)
The game page is tab-based (업적/Missable/수집요소). Collectibles render only when the
수집요소 tab is ACTIVE. Earlier DOM probes ran against the INACTIVE tab → all elements
0-size → false "works/broken" reads. To verify: click [role=tab] "수집 요소" with a REAL
event (playwright browser_click, not evaluate .click()), then screenshot the section.
Element screenshots only work with the tab active + details open.

## Clickable map pins (paint-search style) — coverage
Method: grayscale/clean map + colored labels → detect colored/red label centroids
(saturation or red mask) in a window around a visually-read approx coord → snap. Verify by
overlaying visible pins and screenshotting.
- [x] paint-search (LJ): 26+30 pins (red-circle centroid)
- [x] Yakuza 5 (1105510): 48 (Kamu, D3/F1 absent on map) + 50 (Soten, G4 absent) — saturation snap
- [x] Kiwami 2 (3717340): 50 + 50 — red snap, verified aligned
- [x] Kiwami (3717330): 47 (C1/I3/J5 are substory rewards, no map marker) — red snap
- [ ] Yakuza 4 (1105500): key1/key2.gif have markers but TINY (readable only at 4x per
  quadrant); pins deferred — kept static numbered map + lightbox. Doable via 4x-quadrant
  approx + red snap if needed.
- Yakuza 3: no clean overview map exists (game8 = header photos); grid only, no map.
