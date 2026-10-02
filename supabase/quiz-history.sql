-- ============================================================
-- Quiz history table
-- One row per finished quiz, owned by the signed-in user.
-- Safe to run multiple times.
-- ============================================================
CREATE TABLE IF NOT EXISTS quiz_history (
	user_id      uuid NOT NULL DEFAULT auth.uid() REFERENCES auth.users (id) ON DELETE CASCADE,
	id           text NOT NULL,
	version      int NOT NULL,
	config       jsonb NOT NULL,
	score        int NOT NULL,
	total        int NOT NULL,
	asked        text[] NOT NULL,
	missed       text[] NOT NULL,
	started_at   timestamptz,
	completed_at timestamptz NOT NULL,
	PRIMARY KEY (user_id, id)
);

CREATE INDEX IF NOT EXISTS quiz_history_user_completed_idx
	ON quiz_history (user_id, completed_at DESC);

-- ============================================================
-- Row Level Security: each user can only see and change their own history
-- ============================================================
ALTER TABLE quiz_history ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "own_rows" ON quiz_history;
CREATE POLICY "own_rows" ON quiz_history
	FOR ALL TO authenticated
	USING (auth.uid() = user_id)
	WITH CHECK (auth.uid() = user_id);
