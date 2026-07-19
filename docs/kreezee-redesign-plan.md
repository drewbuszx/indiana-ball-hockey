# Kreezee League Sites — Redesign Plan

## Data Strategy: Pull Live from Kreezee (No Mock Data)

Kreezee does not publish official API docs, but its own website uses internal REST endpoints that return live JSON. These work **without authentication** for public league data and allow `Access-Control-Allow-Origin: *`.

**Ellenberger `solutionId`:** `23179`  
**Active 2026 season ID:** `15246` (from `/api/leagues/23179/seasons`)

### Verified endpoints (Ellenberger)

| Data | Endpoint |
|------|----------|
| Seasons | `GET /api/leagues/23179/seasons` |
| Standings | `GET /api/leagues/23179/teams/stats?seasonId=15246&sortStatId=15&sortOrder=desc&page=1&pageSize=50` |
| Player leaders | `GET /api/leagues/23179/players/leaders?seasonId=15246` |
| Player stats | `GET /api/leagues/23179/players/stats?seasonId=15246&sortStatId=29&sortOrder=desc` |
| Schedule / scores | `GET /api/leagues/23179/matchs?startDate=YYYY-MM-DD&endDate=YYYY-MM-DD` |
| Game bar (recent/upcoming) | `GET /api/leagues/23179/matchs/bargame?maxGame=30&delayDay=30` |
| Teams | `GET /api/leagues/23179/teams` |
| Team detail | `GET /api/leagues/23179/teams/{teamId}` |
| Divisions | `GET /api/seasons/15246/divisions` |
| Match detail | `GET /api/leagues/23179/matchs/{matchId}` |

### Hockey stat type IDs (sportId 1)

| StatTypeId | Meaning |
|------------|---------|
| 5 | GP (games played) |
| 6 | W (wins) |
| 7 | L (losses) |
| 15 | PTS (points) |
| 16 | DIFF (goal differential) |
| 29 | Player points (PTS) |

### Example live standings (2026 EBHL)

| Team | GP | W | L | PTS |
|------|----|---|---|-----|
| The Hydra | 22 | 18 | 2 | 38 |
| Blizzard | 22 | 11 | 8 | 25 |
| Heist | 21 | 8 | 13 | 16 |
| Corn Kings | 21 | 5 | 15 | 11 |

### Implementation approach

```ts
// src/lib/kreezee/client.ts
const BASE = "https://www.kreezee.com/api";

export async function getStandings(solutionId: number, seasonId: number) {
  const res = await fetch(
    `${BASE}/leagues/${solutionId}/teams/stats?seasonId=${seasonId}&sortStatId=15&sortOrder=desc&pageSize=50`,
    { next: { revalidate: 300 } } // 5-min cache
  );
  return res.json();
}
```

- Fetch server-side in Next.js with `revalidate` (ISR) — scores update every few minutes without hammering Kreezee
- One shared `ibha-league-sites` project; swap `solutionId` + branding per league
- Rooftop uses same client with `solutionId: 23180`

### Risks

- **Undocumented API** — Kreezee could change endpoints without notice. Wrap in a thin client layer so only one file needs updating.
- **No official support** — if something breaks, contact Kreezee support or fall back to linking out to kreezee.com pages.
- **News** — may still need Kreezee page embed or RSS; news endpoints were not found in the public JS bundles.

---

## Recommendation: One Shared Project, Not One Per League

| Approach | Verdict |
|----------|---------|
| Separate repo per league (Ellenberger, Rooftop) | ❌ Duplicated work — same nav, widgets, table styles, game bar |
| Single multi-league sports project | ✅ One codebase, league config files for branding + IDs |
| Fold into IBHA marketing site | ❌ Different job — marketing vs live scores/stats/schedule |

**Use two sites total:**

1. **IBHA marketing site** (`indianaballhockey.com`) — already shipped. Converts visitors, tells the story, links out.
2. **League sports hub** — scores, schedule, standings, stats, rosters. Shared sports UI, per-league config.

Ellenberger is league #1. Rooftop plugs in later with the same template.

---

## Important Constraint: Kreezee Is Hosted

The Ellenberger page lives at:

`https://www.kreezee.com/hockey/league/ellenberger-ball-hockey-league/23179`

Kreezee does **not** expose a public API for building a fully custom frontend that auto-syncs live data. League data is managed inside their platform.

That means you have **two realistic paths**:

### Path A — Redesign Inside Kreezee (fastest, live data day one)

Use Kreezee's **Edit Website** tools on the league homepage (`/login` at end of URL when logged in as admin).

| Kreezee setting | IBHA target |
|-----------------|-------------|
| **Font and Colors → Background** | `#0a0e17` (arena) |
| **Font and Colors → Text** | `#ffffff` / `#b3b3b3` body |
| **Font and Colors → Hover / accent** | `#0d6ec4` (rink) |
| **Font and Colors → CTA buttons** | `#fc6619` (logo orange) |
| **Tables tab** | Dark header `#1a2234`, row hover `#111827`, accent borders `#2a3548` |
| **Menu & Navigation → Appearance** | Dark bar, uppercase labels, gold active state |
| **Settings → Game Bar** | Enable — live scores strip at top of every page |
| **Widgets** | Team Standings, News Carousel, Stats leaders, Sponsors |

**Homepage widget order (sports-first):**

1. Game Bar (enabled globally)
2. Latest results / upcoming games strip
3. Standings snapshot (top 4)
4. Stat leaders (PTS, G, A)
5. Latest news
6. Sponsor carousel

**What you can't fully control:** Kreezee side ads, platform chrome, deep layout changes.

### Path B — Custom Sports Frontend (full design control) ✅ Recommended

New repo: `ibha-league-sites` (sibling to IBHA marketing site).

```
/leagues/ellenberger          → league home (standings + leaders + news)
/leagues/ellenberger/scores
/leagues/ellenberger/schedule
/leagues/ellenberger/standings
/leagues/ellenberger/stats
/leagues/ellenberger/teams
```

**Data:** Pull live from Kreezee's internal REST API (see Data Strategy section above). No mock data.

Deploy to subdomain, e.g. `leagues.indianaballhockey.com`, with IBHA header linking back to main site.

---

## Design Direction: IBHA Vibe, Sports Layout

Same tokens as the marketing site, different information architecture.

### Shared brand tokens

| Token | Hex | Sports usage |
|-------|-----|--------------|
| arena | `#0a0e17` | Page background |
| arena-surface | `#111827` | Nav, game bar |
| arena-elevated | `#1a2234` | Cards, table headers |
| rink-400/500 | `#1a8ae8` / `#0d6ec4` | Links, live game indicator |
| gold | `#fc6619` | CTAs, division badges (logo orange) |

### Fonts

- **Syne** — league name, section headers, team names in tables
- **DM Sans** — stats, schedules, body copy

### Sports-specific patterns (not on marketing site)

| Component | Purpose |
|-----------|---------|
| **Game Bar** | Horizontal strip: final scores, live games, next up |
| **Standings table** | W-L-OTL-PTS, sortable, team logo column |
| **Stat leaders** | PTS / G / A tabs with player headshots |
| **Schedule list** | Date groups, home/away, rink, result or time |
| **Team grid** | Logo tiles linking to roster pages |
| **Division badge** | `5v5` rink blue vs `3v3` gold |

### Ellenberger config

```ts
{
  id: "ellenberger",
  slug: "ellenberger-ball-hockey-league",
  kreezeeId: "23179",
  name: "Ellenberger Ball Hockey League",
  shortName: "EBHL",
  format: "5v5",
  location: "Ellenberger Park, Irvington",
  logo: "/assets/ellenberger-logo.png",
  kreezeeUrl: "https://www.kreezee.com/hockey/league/ellenberger-ball-hockey-league/23179",
  teams: ["The Hydra", "Midwest Blizzard", "Indy Heist", "Heartland Corn Kings"],
  accent: "rink", // blue — vs rooftop gold
}
```

### Rooftop config (phase 2)

```ts
{
  id: "rooftop",
  kreezeeId: "23180",
  format: "3v3",
  accent: "gold",
  // ...
}
```

---

## Ellenberger — Immediate Kreezee Theme Checklist

Log into Kreezee website editor for league `23179` and apply:

- [ ] Replace tan star banner with dark arena background + Ellenberger logo (transparent PNG)
- [ ] Dark nav bar; active tab = gold underline (not solid black box)
- [ ] Enable Game Bar
- [ ] Restyle tables: dark headers, subtle row borders, no heavy drop shadows
- [ ] Reorder homepage: standings + leaders above news (sports site priority)
- [ ] Add IBHA footer link back to `indianaballhockey.com`
- [ ] Upload Ellenberger team logos to Teams section
- [ ] Favicon: IBHA or EBHL mark

### Kreezee editor entry points

| Task | Where in editor |
|------|-----------------|
| Colors / fonts | Edit Website → Font and Colors |
| Table styling | Edit Website → Tables |
| Nav styling | Edit Website → Menu & Navigation → Appearance |
| Game Bar | Edit Website → Settings |
| Widget layout | Edit Website → Add A Widget (on homepage) |
| Background / logo | Edit Website → Logo and Background |

Docs: [Kreezee Website Help](https://help.kreezee.com/en/category/website-wndro4/)

---

## Suggested Next Step

**If you have Kreezee admin access:** Start with Path A — theme Ellenberger in-platform this week. Fastest path to a cohesive IBHA look with real live data.

**If you want full custom UI:** Approve scaffolding `ibha-league-sites` as a new project. Ellenberger prototype first, Rooftop as second config — not a second repo.

---

## Linking Between Sites

| From | To | Label |
|------|-----|-------|
| IBHA marketing `/leagues` | Kreezee or custom hub | "View League Hub" |
| League hub header | `indianaballhockey.com` | IBHA logo / "Back to IBHA" |
| League hub | Kreezee registration | "Register on Kreezee" |
| IBHA contact | League hub | "Ellenberger scores & schedule" |
