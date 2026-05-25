# Cask & Quill

A personal whiskey catalog and reference app — track your bottle collection, explore whiskey regions, and browse terminology.

## Features

- **Catalog**: Personal bottle collection with accordion detail view, search, category/fill filters, and sort
- **Regions**: Whiskey-producing regions and their legal frameworks
- **Lexicon**: Searchable whiskey terminology with alphabetical navigation
- **Admin CRUD**: Add, edit, and delete bottles (authenticated users only)
- **Auth**: Supabase email/password login with persistent session
- **Mobile nav**: Responsive drawer menu with focus trap

## Tech Stack

- Vanilla HTML, CSS (cascade layers), and ES Modules — no framework or build step required to run
- [Supabase](https://supabase.com) for Postgres database, auth, and PostgREST API
- Supabase JS client vendored locally (`assets/scripts/vendor/supabase.js`) via esbuild

## Setup

### Prerequisites

- Node.js (for vendoring the Supabase client and running backups)
- A Supabase project with the bottles table and RLS policies configured

### Install and build vendor bundle

```bash
npm install
npm run build:vendor
```

`build:vendor` bundles `@supabase/supabase-js` into a single ESM file at `assets/scripts/vendor/supabase.js`. Re-run this after upgrading the Supabase package.

### Environment

Copy `.env.example` to `.env` and fill in your values:

```
export SUPABASE_URL=https://your-project.supabase.co
export SUPABASE_ANON_KEY=your-anon-key
export DATABASE_URL=postgresql://postgres.xxxx:password@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```

`.env` is gitignored. The `DATABASE_URL` is only needed for local backups.

### Running locally

Open any `index.html` in a local HTTP server (e.g. `npx http-server .` or the VS Code Live Server extension). No build step is needed beyond the vendor bundle.

---

## Database Backups

Supabase free plans do not include managed backups. The following two approaches cover manual local backups and automated weekly backups via GitHub Actions.

### Local backup (manual)

#### Prerequisites

Install the PostgreSQL 17 client tools via Homebrew:

```bash
brew install libpq
```

Add `libpq` to your PATH for the current session (or add permanently to your shell profile):

```bash
export PATH="/opt/homebrew/opt/libpq/bin:$PATH"
```

#### Configure `.env`

Your `.env` must use the Supabase **connection pooler** URL (not the direct host), and the password must be URL-encoded. Special characters like `!` must be encoded (`!` → `%21`).

Use the pooler URL from: Supabase → Project Settings → Database → Connection string → URI (Transaction mode, port 6543).

Example:
```
export DATABASE_URL=postgresql://postgres.xxxx:p%40ssw0rd%21@aws-0-us-east-1.pooler.supabase.com:6543/postgres
```

#### Run the backup

```bash
source .env && npm run backup
```

Dumps are saved to `backups/backup-YYYYMMDD-HHMMSS.dump` in custom format (`-Fc`). The `backups/` directory is gitignored.

#### Restore from a local dump

```bash
export PATH="/opt/homebrew/opt/libpq/bin:$PATH"
source .env
pg_restore --clean --no-owner -d "$DATABASE_URL" backups/backup-YYYYMMDD-HHMMSS.dump
```

---

### Automated backup via GitHub Actions

A workflow runs every Sunday at 3am UTC and uploads the dump as a GitHub Actions artifact (retained for 90 days). It can also be triggered manually at any time.

#### Setup: add the `DATABASE_URL` secret

1. Go to your GitHub repo → **Settings → Secrets and variables → Actions**
2. Click **New repository secret**
3. Name: `DATABASE_URL`
4. Value: paste the full connection string URL (the value only — do not include `DATABASE_URL=`)

Use the same pooler URL and URL-encoded password as described in the local backup section above.

#### Automatic schedule

The workflow runs on this cron schedule:

```
0 3 * * 0   # every Sunday at 3:00 AM UTC
```

No configuration needed — it runs automatically once the secret is set.

#### Manual trigger (workflow_dispatch)

To run the backup on demand:

1. Go to your GitHub repo → **Actions** tab
2. Select **Database Backup** from the left sidebar
3. Click **Run workflow** (top-right of the workflow runs table)
4. Click the green **Run workflow** button in the dropdown

#### Downloading a backup artifact

1. Go to **Actions → Database Backup**
2. Click on a completed workflow run
3. Scroll to the **Artifacts** section at the bottom
4. Click `db-backup-<run-id>` to download the `.zip` containing `backup.dump`

#### Restore from a downloaded artifact

Unzip the downloaded file, then:

```bash
export PATH="/opt/homebrew/opt/libpq/bin:$PATH"
export DATABASE_URL="postgresql://postgres.xxxx:password@aws-0-us-east-1.pooler.supabase.com:6543/postgres"
pg_restore --clean --no-owner -d "$DATABASE_URL" backup.dump
```
