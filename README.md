# Indiana Ball Hockey Association Website

Modern redesign of [indianaballhockey.com](https://www.indianaballhockey.com/) built with Next.js 15, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

Static export outputs to `out/` for Cloudflare Pages.

## Deployment

**Live preview:** https://indiana-ball-hockey.pages.dev

Full GitHub + Cloudflare + custom domain instructions: [`docs/deployment.md`](docs/deployment.md)

## Documentation

- [`docs/ibha-source-inventory.md`](docs/ibha-source-inventory.md) — Content and assets extracted from the original site
- [`docs/redesign-decisions.md`](docs/redesign-decisions.md) — Design system, team plans, and QA checklist

## Pages

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero, ball hockey intro, leagues, and CTAs |
| `/about` | Mission, history timeline, future vision |
| `/leagues` | Ellenberger & Rooftop league cards + comparison |
| `/contact` | Social-first contact and audience CTAs |
| `/store` | Official IBHA merch (links to Hagan Custom Sports) |
