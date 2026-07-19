# IBHA Redesign — Design & Build Decisions

## Virtual Team Plans (Pre-Build)

### 1. Creative Director
**Concept:** "Arena After Dark" — premium dark sports identity with lit-rink energy, IBHA navy/gold brand, editorial type, glass stat cards, rink-line graphics.

### 2. Innovative Mastermind
Hero stat pills, leagues comparison table, alternating timeline, grain texture, staggered mobile nav. No generic gradient blobs.

### 3. Product Strategist
Convert visitors to Kreezee registration; educate on ball hockey; attract sponsors; quick paths for returning players.

### 4. UX Architect
Five pages: Home (full landing), About, Leagues, Contact, Store.

### 5. Content Strategist
Rewritten copy from source inventory. Headlines: "Hockey Without The Ice", "All the Hockey. None of the Barriers."

### 6. Asset Curator
Five assets in `/public/assets/`. Documented in `ibha-source-inventory.md`.

### 7. Frontend Architect
Next.js 15, TypeScript, Tailwind. Reusable components in `src/components/`. Content in `src/lib/content.ts`.

### 8. Accessibility & Performance Lead
Semantic HTML, skip link, focus rings, next/image, metadata/OG, WCAG-minded contrast.

### 9. QA & Ship Readiness
See QA checklist below.

### 10. Motivator
Rejected brochure layout, tiny hero, old Squarespace structure.

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| arena | #0a0e17 | Primary background |
| rink-400/500 | #1a8ae8 / #0d6ec4 | Accents |
| gold | #fc6619 | CTAs, badges (logo orange) |

## Typography

- **Display:** Syne — athletic headlines
- **Body:** DM Sans — readable prose

## QA Checklist

| Check | Status |
|-------|--------|
| Home, About, Leagues, Contact, Store | Built |
| Mobile / tablet / desktop responsive | Yes |
| Kreezee, store, social links | Configured |
| Local images with alt text | Yes |
| Build passes | ✅ `npm run build` successful |
| Lint | ✅ No linter errors |
| Skip link, focus states, semantic HTML | Yes |
