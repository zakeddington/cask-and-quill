-- Add the barrel field to the bottles table.
-- Safe to run multiple times.

ALTER TABLE bottles ADD COLUMN IF NOT EXISTS barrel text;
