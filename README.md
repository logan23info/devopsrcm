# DevOps Security Controls Matrix

A responsive (mobile + desktop) Technical Security Architect (TSA) & GRC Assurance / Advisory
reference tool covering DevOps, CI/CD, IaC, containerization, supply chain, access management,
backup/restore, and IT operations — **128 controls (8 per domain)** mapped to OWASP, MITRE
ATT&CK, CIS Benchmarks, and AWS best practices, with TOD / TOI / TOE assurance detail, control
ownership, risk rating, regulatory mapping, testing frequency, evidence artifacts, and an
illustrative RAG maturity rating per control.

Built with React + Vite + Tailwind CSS v4, light professional theme. Data-driven from a
single JSON file, so the control catalogue can be extended without touching UI code.

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # optional: serve the production build locally
```

## Deploy to Vercel (GitHub-connected)

1. **Push this project to a new GitHub repository.**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DevOps Security Controls Matrix"
   git branch -M main
   git remote add origin https://github.com/<your-username>/devops-security-controls-matrix.git
   git push -u origin main
   ```

2. **Import the repo in Vercel.**
   - Go to https://vercel.com/new
   - Select "Import Git Repository" and choose the repo you just pushed.
   - Framework preset: Vercel auto-detects **Vite** — no changes needed.
   - Build command: `npm run build` (default)
   - Output directory: `dist` (default)
   - Click **Deploy**.

3. Vercel will build and give you a live `*.vercel.app` URL. Every push to `main`
   redeploys automatically.

`vercel.json` is already included with a SPA rewrite rule so client-side tab
navigation works correctly on refresh/deep links.

## Project structure

```
src/
  data/controls.json       # the 48-control catalogue (single source of truth)
  lib/domains.js            # domain order + accent colors
  components/                # ControlCard, AssuranceTrail (TOD/TOI/TOE), Header, etc.
  pages/                     # MatrixView, DomainIndexView, MethodologyView
  App.jsx                    # tab state + routing between the three views
```

## Updating the control catalogue

Edit `src/data/controls.json`. Each entry follows this shape:

```json
{
  "domain": "CI/CD",
  "cid": "CICD-01",
  "objective": "...",
  "tsa": "...",
  "grc": "...",
  "owasp": "...",
  "mitre": "...",
  "cis": "...",
  "aws": "...",
  "automation": "...",
  "tod": "...",
  "toi": "...",
  "toe": "...",
  "advisory": "...",
  "assurance": "...",
  "shortDomain": "CI/CD",
  "icon": "pipeline",
  "owner": "DevOps / Release Engineering Lead",
  "risk": "High",
  "regulatory": "ISO 27001 A.8.25-A.8.28; NIST SSDF",
  "testingFrequency": "Continuous (automated control) — TOE sampled quarterly",
  "evidence": "Scan tool reports, pipeline run logs, remediation ticket records",
  "maturity": "Not yet assessed"
}
```

`risk` should be one of `Critical | High | Medium | Low` (each renders with a distinct
badge color). `maturity` is an illustrative RAG placeholder — replace `"Not yet assessed"`
with the actual finding (`Red` / `Amber` / `Green` plus commentary) during a real engagement.

If you add a new `domain` value, also add it to `DOMAIN_ORDER` and `DOMAIN_COLORS`
in `src/lib/domains.js`, and add an icon mapping in `src/components/DomainIcon.jsx`.

## Scope note

This is a reference control catalogue, not an exhaustive or certified control
library. Validate control wording, IDs, and framework mappings against your actual
architecture, risk appetite, and applicable regulatory obligations (e.g. DPDP Act,
RBI / SEBI guidelines, ISO 27001, NIST CSF / 800-53) before use in a live
assessment or audit engagement.
