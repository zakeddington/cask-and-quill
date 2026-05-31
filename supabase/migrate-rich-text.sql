-- Wrap plain-text rich-text fields in <p> tags for Pell editor compatibility.
-- Safe to run multiple times — the NOT LIKE '<%' guard skips already-migrated rows.

-- cask (text column)
UPDATE bottles
SET cask = '<p>' || cask || '</p>'
WHERE cask IS NOT NULL
  AND cask != ''
  AND cask NOT LIKE '<%';

-- tasting_notes.nose (inside jsonb)
UPDATE bottles
SET tasting_notes = jsonb_set(
  tasting_notes,
  '{nose}',
  to_jsonb('<p>' || (tasting_notes->>'nose') || '</p>')
)
WHERE tasting_notes->>'nose' IS NOT NULL
  AND tasting_notes->>'nose' != ''
  AND tasting_notes->>'nose' NOT LIKE '<%';

-- tasting_notes.palate (inside jsonb)
UPDATE bottles
SET tasting_notes = jsonb_set(
  tasting_notes,
  '{palate}',
  to_jsonb('<p>' || (tasting_notes->>'palate') || '</p>')
)
WHERE tasting_notes->>'palate' IS NOT NULL
  AND tasting_notes->>'palate' != ''
  AND tasting_notes->>'palate' NOT LIKE '<%';
