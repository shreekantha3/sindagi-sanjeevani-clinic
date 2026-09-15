# TEST REPORT — Sanjeevani Clinic
> Date: 2026-09-10 | Tester: Senior Engg | Segment: Healthcare | Tier-2 (no phone in CSV)

## Build
- [x] `npm run build` PASS (vite 5.4.21, 4 modules, 0 warnings)
- dist sizes: 14.59 kB HTML / 12.39 kB CSS / 1.20 kB JS — well under perf budget (<200KB JS, <1.5MB total)
- dist base paths verified: `/sindagi-sanjeevani-clinic/assets/*` + favicon.svg copied

## Static checks (all PASS)
- [x] NO tel:/wa.me/+91 anywhere (grep CLEAN) — CSV phone empty, never invented
- [x] Directions/Maps CTAs only: nav, hero, visit, mobile floating button all → Google Maps URL
- [x] data-missing flag present (2× `data-missing="phone..."` — top notice banner + visit note)
- [x] JSON-LD MedicalClinic (no telephone key) + PostalAddress + AggregateRating 4.5
- [x] H1 names clinic + landmark, semantic sections, skip link, async fonts (media=print onload)
- [x] No lorem ipsum, no invented OP timings/doctor details (on-visit fallback; emergency → nearest hospital, no invented helpline)
- [x] aria-expanded on nav toggle, keyboard reachable CTAs, contrast-safe palette (pilot copy)

## Pending (requires preview + device lab before Deployed)
- [ ] Lighthouse CI mobile+desktop (target 90/95/95/95)
- [ ] Playwright 12-case E2E + axe (0 serious) + linkinator
- [ ] Screenshots 360/768/1440 attached to PR
- [ ] GitHub Pages deploy verify (200 + base path assets)

## Verdict: BUILT + STATIC QA PASS → ready for full QA + separate repo deploy

## Maps embed + README (2026-09-15)
- [x] Google Maps iframe embed added to #visit panel (lazy-loaded, `output=embed`, query fused from page's own Maps URL)
- [x] Per-site README.md added (live link, owner update guide)
