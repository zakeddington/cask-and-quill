# Cask & Quill

A personal whiskey catalog and reference app — track your bottle collection, explore whiskey regions, and browse terminology.

## Features

- **Catalog**: Personal bottle collection with accordion detail view, search, category/fill filters, and sort
- **Regions**: Whiskey-producing regions and their legal frameworks
- **Lexicon**: Searchable whiskey terminology with alphabetical navigation
- **Admin CRUD**: Add, edit, and delete bottles (authenticated users only)
- **Auto-fill**: When adding a bottle, enter the brand and bottle name to auto-populate the remaining fields via Claude AI
- **Auth**: Supabase email/password login with persistent session
- **Mobile nav**: Responsive drawer menu with focus trap

## Tech Stack

- Vanilla HTML, CSS (cascade layers), and ES Modules — no framework or build step required to run
- [Supabase](https://supabase.com) for Postgres database, auth, and PostgREST API
- Supabase JS client vendored locally (`assets/scripts/vendor/supabase.js`) via esbuild
- [Anthropic Claude API](https://www.anthropic.com) (Haiku) for bottle detail auto-fill via a Supabase Edge Function

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

### Edge Functions (auto-fill)

The auto-fill feature runs on a Supabase Edge Function that proxies requests to the Claude API, keeping the API key server-side.

#### Prerequisites

Install the Supabase CLI:

```bash
brew install supabase/tap/supabase
```

#### Deploy the function (one-time)

```bash
supabase functions deploy enrich-bottle
```

#### Set the API key secret (one-time)

Get an API key from [console.anthropic.com](https://console.anthropic.com), then:

```bash
supabase secrets set ANTHROPIC_API_KEY=your-api-key
```

#### Disable JWT verification (one-time)

Supabase's built-in JWT verification blocks CORS preflight requests. The function handles auth in code, so the infrastructure-level check should be disabled:

1. Go to your Supabase dashboard → **Edge Functions** → `enrich-bottle`
2. Disable the **JWT Verification** toggle

This is also tracked in `supabase/config.toml` and applied automatically on redeploy.

---

### Running locally

Open any `index.html` in a local HTTP server (e.g. `npx http-server .` or the VS Code Live Server extension). No build step is needed beyond the vendor bundle.

---

## Deployment

The site auto-deploys to DreamHost on every push to `main` via the `.github/workflows/deploy.yml` workflow. It builds the vendor bundle, then rsyncs all files to the server over SSH.

### Setup (one-time)

#### 1. Generate a deploy SSH key

```bash
ssh-keygen -t ed25519 -C "github-actions-deploy" -f ~/.ssh/dreamhost_deploy
```

#### 2. Add the public key to DreamHost

```bash
cat ~/.ssh/dreamhost_deploy.pub | ssh your-username@your-server.dreamhost.com \
  "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

Verify it works without a password prompt:

```bash
ssh -i ~/.ssh/dreamhost_deploy your-username@your-server.dreamhost.com
```

#### 3. Add secrets to GitHub

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Value |
|---|---|
| `SSH_PRIVATE_KEY` | Full contents of `~/.ssh/dreamhost_deploy` (including the `-----BEGIN/END-----` lines) |
| `SSH_HOST` | DreamHost server hostname (e.g. `pdx1-shared-a1-23.dreamhost.com`) |
| `SSH_USERNAME` | Your DreamHost username |
| `DEPLOY_PATH` | Absolute path to the subdomain root on the server (e.g. `/home/username/sub.yourdomain.com`) |

Paste the private key exactly as output by `cat ~/.ssh/dreamhost_deploy` — newlines must be preserved.

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

If you get `sh: pg_dump: command not found` error make sure to install libpq first.

Then add it to your PATH (libpq intentionally doesn't symlink to avoid conflicts):

```bash
echo 'export PATH="/opt/homebrew/opt/libpq/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
```

After that, `source .env && npm run backup` should work. If you're on an Intel Mac, the path is `/usr/local/opt/libpq/bin` instead of `/opt/homebrew/opt/libpq/bin`.

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

---

### Google Sheets sync (redundant snapshot)

A Google Apps Script inside a dedicated spreadsheet fetches all bottles from the Supabase REST API and writes them as rows on a schedule. This provides a human-readable snapshot as a secondary backup alongside the `pg_dump` files.

> This is a snapshot sync, not a restorable archive. It reflects the current state of the table and is meant for quick reference, not database restoration.

#### Setup (one-time)

1. Create a new Google Sheet
2. Open **Extensions → Apps Script**
3. Name the project (click "Untitled project" top-left) and paste the script below
4. Fill in `SUPABASE_URL` and `SUPABASE_ANON_KEY` from `assets/scripts/supabase.js`
5. Click **Run** → grant permissions (click **Advanced → Go to [project name] (unsafe)** when prompted — this is expected for personal scripts)
6. Set a trigger: **Triggers (clock icon) → Add Trigger → `syncBottlesToSheet` → Time-driven → Week timer**

```javascript
function syncBottlesToSheet() {
  const SUPABASE_URL = 'https://your-project.supabase.co';
  const SUPABASE_ANON_KEY = 'your-anon-key';

  const response = UrlFetchApp.fetch(
    `${SUPABASE_URL}/rest/v1/bottles?select=*&order=id`,
    {
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    }
  );

  const bottles = JSON.parse(response.getContentText());
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  sheet.clearContents();

  if (bottles.length === 0) return;

  const headers = Object.keys(bottles[0]);
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

  const rows = bottles.map(b => headers.map(h => b[h] ?? ''));
  sheet.getRange(2, 1, rows.length, headers.length).setValues(rows);
}
```
