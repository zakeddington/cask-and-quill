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

-- ============================================================
-- 5. Global settings (key/value store for app-wide content)
-- ============================================================
CREATE TABLE global_settings (
	key        text PRIMARY KEY,
	value      text NOT NULL DEFAULT '',
	updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE global_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "public_read" ON global_settings
	FOR SELECT USING (true);

CREATE POLICY "auth_write" ON global_settings
	FOR ALL USING (auth.role() = 'authenticated');
