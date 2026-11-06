-- Add the image filename field to the bottles table.
-- Stores only the filename (e.g. "eagle-rare-10.jpg"); the path is set in CATALOG_IMAGE_PATH.
-- Safe to run multiple times.

ALTER TABLE bottles ADD COLUMN IF NOT EXISTS image text;
