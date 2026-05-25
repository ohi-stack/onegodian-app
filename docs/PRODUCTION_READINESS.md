# OneGodian App Production Readiness Checklist

Repository: `ohi-stack/onegodian-app`  
Production domain: `https://app.onegodian.com`  
Purpose: public/member-facing experience layer for the OneGodian ecosystem.

## Production Standard

The OneGodian App is production-ready only when it is usable in three clear ways:

1. public-facing entry points,
2. logged-in/member-facing dashboard surfaces,
3. documented API/status endpoints.

The App must remain separate from command-console, privileged operator, workflow execution, deployment-control, adapter-admin, approval, kill-switch, and internal audit mutation functions. Those belong in the Console/control-plane layer, not this repository.

## Required User Routes

The following routes define the current production baseline:

- `/dashboard`
- `/ecosystem`
- `/registry`
- `/tools`
- `/members`
- `/certificates`
- `/products`
- `/media`
- `/settings`
- `/docs`

## Required API / Status Routes

The following API routes define the minimum operational contract:

- `/api/health` — confirms app availability and runtime status.
- `/api/manifest` — identifies app name, version, routes, and domain role.
- `/api/tools` — exposes public/member-safe tool metadata only.
- `/api/stats` — exposes public/member-safe aggregate stats only.

No endpoint in this repository may expose secrets, privileged execution controls, internal logs, command routing, deployment mutation, policy mutation, or private operator workflows.

## Deployment Gate

Before production deployment, confirm:

- [ ] App builds successfully with the documented package manager.
- [ ] Production environment variables are documented in `.env.example` or deployment docs.
- [ ] `/api/health` returns a deterministic JSON response.
- [ ] `/api/manifest` returns app identity, version, role, domain, and route map.
- [ ] Public pages render without requiring privileged credentials.
- [ ] Member/dashboard pages fail safely when auth is unavailable.
- [ ] All console-only functions are excluded from the app surface.
- [ ] Footer/legal text identifies ONEGODIAN, LLC as the commercial operator where applicable.
- [ ] No claims are made that the app is a governmental authority or replacement jurisdiction.
- [ ] Production domain is configured for `app.onegodian.com`.

## Institutional Positioning

Use this wording in product/deployment materials:

> The OneGodian App is the public and member-facing experience layer for the OneGodian digital ecosystem. It provides structured access to dashboards, ecosystem navigation, registries, tools, certificates, products, media, settings, documentation, and public-safe API/status endpoints. It is not the command console, operator control plane, or privileged execution environment.

## Versioning Rule

If a route, feature, or endpoint is not implemented, documented, testable, and repeatable, it should not be represented as production-ready in the current version.
