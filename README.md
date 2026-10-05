# Runner Race Companion (Phase 1)

React + TypeScript + Vite PWA. Local-first (Dexie/IndexedDB), hosted on Cloudflare Pages.
Spec: see the Phase 1 spec document.

## Run
```
npm install
npm run dev      # local dev server
npm test         # unit tests (pace math)
npm run build    # type-check + production build (PWA)
```

## Structure
```
src/
  app/            AppShell (bottom tabs on phone, side nav on desktop)
  data/           types.ts (domain model), db.ts (Dexie tables)
  features/
    plan/         pace.ts, fueling.ts (+tests), PlanPage
    course/       gpx.ts, difficulty.ts, CoursePage
    logistics/    gearRules.ts, LogisticsPage
    results/      ResultsPage
    home/ settings/
  lib/            format.ts, planBundle.ts (export/import + share link)
  styles/         tokens.css, global.css
worker/           Cloudflare Worker stub (push subscribe + cron), deployed separately
```

## Next steps (maps to spec milestones)
- M1: add PWA icons in `public/`, CI to Cloudflare Pages
- M2: wire fueling schedule + persist plans to Dexie
- M3: map + POIs, family-spot ETA
- M4: weather (Open-Meteo via Worker), Web Push in `worker/`
- M5: results, result card, PR history, export/import + QR
