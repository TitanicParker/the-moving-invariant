# The Moving Invariant

**What survives when expression changes?**

A public research laboratory on the invariance of completed intelligibility across language, representation, history and machine mediation.

## Source lineage
- Persistence — mature Constraint Grammar: https://github.com/TitanicParker/persistence
- Ten-Year-Old — structureacy, Goldmine, Pixels corpus and transfer: https://github.com/TitanicParker/ten-year-old
- The First Opening — historical/methodological lineage where relevant: https://github.com/TitanicParker/The-first-opening

## Previous achievement
The mature grammar proposes six Transformation Patterns × three Completion Topologies × three Persistence Modes = 54 coordinate positions. The dimensions constrain one completion-event simultaneously; the coordinate is not three detachable features.

## The new fuse
The project moves from **What are the forms?** to **What survives when the form is carried through transformation?** The immediate triangulation is stacking, translation and creolization-as-carrying-pressure, extended by theorem→sentence and human↔machine representation tests.

## Three founding experiments
1. Surface divergence / structural recurrence.
2. Coordinate preservation under translation.
3. Context-carried vs linguistically carried intelligibility.

Machine round trips and coordinate-boundary tests are also seeded as complete protocols.

## Universality operating rule
Proceed under the strongest architecture currently earned. A genuine challenge must produce a missing primitive, axis failure or irreducible completed-unit remainder. “There could always be more” is not itself evidence. See `docs/UNIVERSALITY.md`.

## Current research state
- 5 experiments proposed
- 7 future experiment placeholders
- 0 running
- 0 completed
- 0 observed results
- 0 primitive challenges
- 1 small, clearly provenanced Pixels corpus sample
- translation demo schema only; no fabricated multilingual result

## Run locally
```bash
npm install
npm run validate
npm run dev
```

## Build
```bash
npm run check
```

In restricted environments without package-network access, `npm run build:offline` generates a dependency-free static verification snapshot. GitHub Actions runs the real Astro build.

## Add an experiment
Add the research page, then add a unique machine-readable record to `data/experiments.json`. If the experiment yields data, write results separately to `data/results.json` with evidence label and provenance. Never upgrade a protocol or interpretation into `OBSERVED`.

## Deploy GitHub Pages
Push to `main`; `.github/workflows/deploy-pages.yml` installs dependencies, validates data, builds Astro, uploads the static artifact and deploys Pages.
