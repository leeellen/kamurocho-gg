# Collectible template & conventions

Map-based "go find and collect" collectibles (telephone cards, coin lockers,
photo rally, cats, etc.) all render through one shared UI:
`InteractiveChecklist` (`src/app/game/[id]/_components/interactive-checklist.tsx`).
Any new title's collectible category should be wired into this UI, not given
a bespoke component.

## Two adapter modes

`INTERACTIVE_CATEGORIES` in `collectibles-section.tsx` maps `appId → { slug → mode }`:

- `"category"` — reuses the category's own `CollectibleGroup[]`/`CollectibleItem[]`
  data (`types.ts`). Default choice for new titles. One tab per group.
- `"telephone"` — pulls from `src/lib/telephone-cards` (Yakuza 0 only, legacy
  format predating `CollectibleGroup`). Don't add new titles to this mode —
  it exists only because Yakuza 0's data predates the generic group shape.

To add a title: put its data in `src/lib/collectibles/<game>.ts` as a
`CollectibleCategory` with `groups`, register `{ slug: "category" }` under its
`appId` in `INTERACTIVE_CATEGORIES`. Nothing else to wire — `InteractiveChecklist`
gives you per-region tabs, localStorage progress, and the detail modal for free.

## Map rendering (`CollectibleGroup` fields)

- `mapImage` + `hotspots` (`number → [x%, y%]`): renders a clickable pin map.
  Clicking a pin opens that item's detail modal directly. Use when you have
  (or can derive) real per-item coordinates — see `collectible-map-template.md`
  (Claude memory) for how to get them (game8 API, pixel-detecting a
  pre-numbered map, or hand-authoring).
- `mapImage` with **no** `hotspots`: renders as a plain click-to-zoom map only
  (no pins). Use when you have one overview image but no per-item coordinates.
- Neither: no map section renders — the grid of item cards is the only view.
  This is correct, not a bug, when the source only gives per-item combined
  map+scene screenshots (see Photo Rally below) rather than one shared
  overview map.
- `bareMap: true` when `mapImage` has no printed numbers of its own (dots must
  be drawn); omit/false when the image already shows numbered pins.
- `legend`: translates in-image markers (Ⓐ/Ⓑ/Ⓒ etc.) into readable rows below
  the map.

## The rule that actually matters: every item must be enlargeable

**Every `CollectibleItem` that has an `image` gets a "자세히 보기"/"Details"
button that opens it full-size in a modal** (`interactive-checklist.tsx`,
the grid-card detail-button condition includes `|| item.image`). Small grid
thumbnails (`minmax(140px,...)`) are not readable on their own — if an item's
`image` is itself the primary source of location info (e.g. Photo Rally's
combined map+scene screenshot, or telephone cards' card art), the modal is
the only way to actually read it. Do not gate the detail button on `steps`/
`reward` alone — an image-only item still needs it. (Bug seen 2026-09-14:
Infinite Wealth's Photo Rally — 110 items, image-only, no steps/reward —
silently had no way to view the image large or a map, because the old
condition only checked `steps`/`reward`.)

## Per-item combined map+scene screenshots are a valid substitute for a hotspot map

When a guide site provides one image per item that already shows *both* the
mini-map location *and* the actual photo target (ゲーム攻略マン's Photo Rally
pages, game8's `popupImage`), that's the correct data shape — don't force a
separate `mapImage`/`hotspots` pair when no real overview-map source with
per-item coordinates exists. Wire it as `CollectibleItem.image` and rely on
the modal enlarge rule above to make it legible.

## Sourcing & hosting

- Prefer a source that gives per-item images over one that gives only a
  region overview map — per-item is more actionable.
- Self-host any hotlink candidate whose URL carries a signed/expiring param
  (e.g. `blog.kakaocdn.net ...&expires=<unix-ts>`) under
  `public/<game>-<feature>/`. Non-expiring plain URLs (gamewith-style,
  `dswiipspwikips3-images.jp`, game8) may be hotlinked directly.
- Match the *unfiltered* source list by position before dropping any
  imageless/substory-handled entries — filtering first shifts every later
  item's image by one.

## See also

Claude's private memory `collectible-map-template.md` has the deeper
mechanics (game8 JSON API + coordinate transform, pixel-detecting
pre-numbered maps, tistory URL expiry) that don't need to live in the repo
for humans but should stay loaded for future collectible work.
