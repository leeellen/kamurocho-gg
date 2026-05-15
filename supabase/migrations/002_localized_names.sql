-- Add Korean localized columns. `name`/`display_name`/`description` remain canonical (English).
ALTER TABLE games
  ADD COLUMN IF NOT EXISTS name_ko text,
  ADD COLUMN IF NOT EXISTS header_url text,
  ADD COLUMN IF NOT EXISTS capsule_url text;

ALTER TABLE achievements
  ADD COLUMN IF NOT EXISTS display_name_ko text,
  ADD COLUMN IF NOT EXISTS description_ko text;
