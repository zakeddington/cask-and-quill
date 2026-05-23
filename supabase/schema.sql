-- ============================================================
-- 1. Create the bottles table
-- ============================================================
CREATE TABLE bottles (
	id           text PRIMARY KEY,
	fill         text,
	category     text,
	type         text,
	brand        text,
	bottle       text,
	age          text,
	abv          text,
	proof        text,
	cask         text,
	distillery   text,
	corp_owner   text,
	origin       text,
	char_level   text,
	mash_bill    jsonb,
	tasting_notes jsonb
);

-- ============================================================
-- 2. Enable Row Level Security
-- ============================================================
ALTER TABLE bottles ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- 3. Public read — anyone (logged out) can view the catalog
-- ============================================================
CREATE POLICY "public_read" ON bottles
	FOR SELECT USING (true);

-- ============================================================
-- 4. Authenticated write — only your logged-in session can edit
-- ============================================================
CREATE POLICY "auth_write" ON bottles
	FOR ALL USING (auth.role() = 'authenticated');
