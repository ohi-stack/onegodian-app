# OneGodian App Ecosystem Sync Plan

Status: Planning scaffold. This document defines the integration target for app.OneGodian.com and the connected OneGodian ecosystem nodes.

## Primary Control Plane

**Repository:** `ohi-stack/onegodian-app`  
**Target domain:** `app.OneGodian.com`  
**Role:** Central command center and repository-connected control plane.

The app should mirror and monitor the current seven-property OneGodian Digital Ecosystem foundation:

1. `OneGodian.org` — organization, public identity, institutional home.
2. `OneGodian.com` — store platform, commerce plugin, products, certificates, digital downloads.
3. `u.OneGodian.com` — e-learning / LMS plugin.
4. `galaxy.OneGodian.com` — galaxy console, planet navigator, planet-store gateway.
5. `capital.OneGodian.com` — corporate finance/capital platform, node and WordPress plugin.
6. `OMOS.OneGodian.com` — dedicated OMOS protocol/specification/alignment system.
7. `QuantumOHI.com` — Quantum-OHI platform plugin and service layer.

## Required App Layers

Every OneGodian app, plugin, module, and bridge must include the following ten layers:

1. Public App
2. Dashboard
3. Admin
4. API / Bridge
5. Data
6. Security
7. UI / UX
8. Documentation
9. Compliance
10. Deployment

## Required Core Routes

The app should expose or link the following routes:

- `/dashboard`
- `/ecosystem`
- `/registry`
- `/tools`
- `/members`
- `/certificates`
- `/products`
- `/media`
- `/settings`
- `/admin`
- `/api/health`
- `/api/manifest`
- `/api/tools`
- `/api/stats`

## Integration Targets

| Node | Type | Required Integration |
|---|---|---|
| OMOS.OneGodian.com | Node/specification site | Manifest sync, docs mirror, health status, tools registry |
| OneGodian.org | WordPress plugins | Plugin status, institutional pages, public identity links |
| OneGodian.com | WordPress commerce plugins | Store/products/certificates/digital downloads status |
| u.OneGodian.com | LMS plugin | Courses, lessons, enrollment links, learning dashboard |
| galaxy.OneGodian.com | Plugin + console | Planet navigator, galaxy routes, media/product gateway |
| capital.OneGodian.com | Node + plugin | Capital dashboard, disclosures, Zolfi + Instryx integration |
| QuantumOHI.com | Platform plugin | OHI/QOHI service modules, protocol links, platform status |

## Manifest Contract

Each node should expose a stable manifest, either as a JSON file or endpoint:

```json
{
  "name": "OneGodian Node Name",
  "domain": "example.OneGodian.com",
  "type": "node|plugin|platform|commerce|lms",
  "version": "0.1.0",
  "status": "planning|development|staging|production",
  "routes": [],
  "api": {
    "health": "/api/health",
    "manifest": "/api/manifest"
  },
  "dependencies": [],
  "owner": "ONEGODIAN, LLC",
  "authority_note": "Sovereign governance language belongs only to INO. ONEGODIAN, LLC is a private commercial, software, education, and IP entity."
}
```

## Production Definition

A node does not exist in the current production version until it is:

- fully operational;
- documented;
- repeatable;
- accessible through its expected route/domain;
- verified by a health check or smoke test.

## Immediate Next Build Tasks

1. Add `/api/manifest` and `/api/health` to `onegodian-app`.
2. Add ecosystem registry data source for all nodes.
3. Add dashboard cards for each ecosystem node.
4. Add smoke tests for route availability and manifest shape.
5. Connect OMOS node manifest first.
6. Connect capital node manifest second, including Zolfi and Instryx links.
7. Add WordPress plugin manifest adapter standard for all plugin repositories.
