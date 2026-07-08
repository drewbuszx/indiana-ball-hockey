# Deploy IBHA to GitHub + Cloudflare Pages

## What is already configured

- **Next.js static export** — `output: "export"` builds to the `out/` folder (Cloudflare Pages compatible)
- **Security/cache headers** — `public/_headers`
- **Node version** — `.nvmrc` set to `20`

## Part 1: Push to GitHub

**Status:** Code is on GitHub at https://github.com/drewbuszx/indiana-ball-hockey

If you need to push updates from your machine:

```powershell
cd C:\Users\Drew\Desktop\IBHA
git add -A
git commit -m "Your message"
git push
```

---

## Part 2: Connect Cloudflare Pages to GitHub

### Why you may not see "Connect to Git"

The live site (`indiana-ball-hockey.pages.dev`) was deployed with **Wrangler direct upload**, not Git. That creates a **Direct Upload** project. The "Connect to Git" button is **not** inside an existing project's Settings — it only appears when **creating a new project**.

You have two options:

### Option A — Create a new Git-connected project (Cloudflare UI)

1. Open [Cloudflare Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages)
2. Click **Create application** (top right) — **not** your existing project
3. Select the **Pages** tab
4. Click **Connect to Git**
5. If GitHub is not listed, click **+ Add account** → authorize **Cloudflare Workers & Pages**
6. On GitHub, grant the app access to `drewbuszx` and the `indiana-ball-hockey` repo
7. Select `drewbuszx/indiana-ball-hockey`
8. Project name: `indiana-ball-hockey-git` (or any name — see note below)
9. Build settings:

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Environment variable | `NODE_VERSION` = `20` |

10. Click **Save and Deploy**

**Note:** If the name `indiana-ball-hockey` is already taken by the Wrangler project, use a different project name, then move your custom domain to the new project and delete the old one.

### Option B — GitHub Actions auto-deploy (recommended)

This repo includes `.github/workflows/deploy.yml`. It deploys to your existing Wrangler project on every push to `main` — no Cloudflare Git UI required.

**One-time setup:**

1. In Cloudflare: **My Profile** → **API Tokens** → **Create Token** → use the **Edit Cloudflare Workers** template (includes Pages)
2. Copy your **Account ID** from the Workers & Pages overview page (right sidebar)
3. In GitHub: https://github.com/drewbuszx/indiana-ball-hockey/settings/secrets/actions
4. Add repository secrets:
   - `CLOUDFLARE_API_TOKEN` — the token from step 1
   - `CLOUDFLARE_ACCOUNT_ID` — your account ID from step 2
5. Push any commit to `main`, or run the workflow manually under **Actions** → **Deploy to Cloudflare Pages** → **Run workflow**

After that, every `git push` to `main` auto-deploys.

---

## Part 3: Custom domain (indianaballhockey.com)

1. In your Pages project → **Custom domains** → **Set up a custom domain**
2. Enter `www.indianaballhockey.com` (and optionally `indianaballhockey.com`)
3. If the domain is already on Cloudflare DNS, records are added automatically
4. If DNS is elsewhere, add the CNAME Cloudflare shows you
5. Enable **Full (strict)** SSL once the certificate is active

**Tip:** Redirect bare `indianaballhockey.com` → `www` in Cloudflare **Rules** or DNS if you only attach one hostname.

---

## CLI deploy (without GitHub)

For a one-off deploy from your machine:

```powershell
npm run build
npx wrangler pages deploy out --project-name=indiana-ball-hockey
```

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Build fails on Cloudflare | Confirm `NODE_VERSION=20` env var |
| 404 on routes | Output directory must be `out`, not `.next` |
| Images broken | Static export uses `images.unoptimized: true` (already set) |
| Git push rejected | `git pull origin main --rebase` then push again |
