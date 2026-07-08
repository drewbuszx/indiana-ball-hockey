# Deploy IBHA to GitHub + Cloudflare Pages

## What is already configured

- **Next.js static export** — `output: "export"` builds to the `out/` folder (Cloudflare Pages compatible)
- **Security/cache headers** — `public/_headers`
- **Node version** — `.nvmrc` set to `20`

## Part 1: Push to GitHub (you must authenticate once)

The GitHub CLI is not logged in on this machine. Run these in PowerShell from the project folder:

```powershell
cd C:\Users\Drew\Desktop\IBHA

# Log in to GitHub (opens browser)
gh auth login
# Choose: GitHub.com → HTTPS → Login with browser

# Create the repo and push (pick public or private)
gh repo create indiana-ball-hockey --source=. --remote=origin --push --description "Indiana Ball Hockey Association website"
```

If the repo name is taken, use another name:

```powershell
gh repo create ibha-website --source=. --remote=origin --push
```

**Manual alternative (no `gh`):**

1. Create a new repo at https://github.com/new (empty, no README)
2. Then run:

```powershell
cd C:\Users\Drew\Desktop\IBHA
git remote add origin https://github.com/YOUR_USERNAME/indiana-ball-hockey.git
git branch -M main
git push -u origin main
```

---

## Part 2: Connect Cloudflare Pages to GitHub

1. Open [Cloudflare Workers & Pages](https://dash.cloudflare.com/?to=/:account/workers-and-pages)
2. Click **Create application** → **Pages** tab
3. Click **Connect to Git**
4. Authorize GitHub if prompted, then select your `indiana-ball-hockey` repo
5. Use these **build settings**:

| Setting | Value |
|---------|-------|
| Production branch | `main` |
| Framework preset | `None` (or Next.js Static if available) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |
| Environment variable | `NODE_VERSION` = `20` |

6. Click **Save and Deploy**

Every push to `main` will auto-deploy.

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
