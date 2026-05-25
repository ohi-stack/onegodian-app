# OneGodian Ecosystem Sync Map

Production target: `app.onegodian.com`

## Role

The OneGodian App is the public/member-facing experience hub. It should synchronize with OMOS and the WordPress/plugin properties without becoming the operator console or privileged command plane.

## Primary Domains

| Domain | System Role | Repo / Source | Integration Mode |
|---|---|---|---|
| `app.onegodian.com` | App hub / member dashboard / ecosystem navigator | `ohi-stack/onegodian-app` + `ohi-stack/onegodian-app-deploy` | Next.js app + manifest APIs |
| `omos.onegodian.com` | OMOS node / protocol explanation / operating-system layer | `ohi-stack/omos-site` | Node/static site + public APIs |
| `onegodian.org` | civil, cultural, educational, public-facing human context | `ohi-stack/onegodian-org` + WordPress plugins | WP content + plugin bridge |
| `onegodian.com` | commerce, products, memberships, downloads | WordPress/WooCommerce plugins | WP plugin + WooCommerce/Stripe |
| `u.onegodian.com` | learning/LMS property | WP learning plugin | LMS plugin integration |
| `galaxy.onegodian.com` | galaxy/planet navigator and visual ecosystem | `ohi-stack/onegodian-galaxy` | plugin + visual app surface |
| `capital.onegodian.com` | capital, finance, disclosure, Zolfi/Instryx integration | `ohi-stack/onegodian-capital-web`, `ohi-stack/onegodian-capital-plugin`, `ohi-stack/zolfi-platform`, `ohi-stack/instryx-financial-interface` | node + WP plugin + disclosure center |
| `quantumohi.com` | QuantumOHI platform positioning and systems services | platform plugin repo when available / WP plugin target | WP platform plugin + service pages |

## Sync Contract

Every production-facing node should expose:

- `/api/health`
- `/api/manifest`
- `/api/stats` where safe
- `/docs` or public documentation route

The App should consume public-safe manifests from each property and display them in `/ecosystem` and `/dashboard`.

## Manifest Fields

```json
{
  "name": "service-name",
  "domain": "example.onegodian.com",
  "role": "public description",
  "status": "operational|development|maintenance",
  "version": "0.1.0",
  "routes": [],
  "integrations": [],
  "lastUpdated": "ISO-8601"
}
```

## Security Boundary

The App must not sync or expose:

- deployment tokens,
- internal logs,
- privileged operator controls,
- ACC command execution,
- policy mutation,
- kill-switch controls,
- adapter administration,
- private financial records,
- investor non-public information,
- member personal data.

## Page Sync Targets

### `/ecosystem`
Shows all OneGodian properties and their operational roles.

### `/registry`
Shows public-safe registry, certificate, protocol, and verification links.

### `/tools`
Shows tools available to public or authenticated members only.

### `/products`
Links to commerce products on OneGodian.com and capital/disclosure products where appropriate.

### `/docs`
Links to protocol, OMOS, OTS, QRV, capital disclosure, plugin documentation, and app documentation.

## Production Rule

If a domain, plugin, node, or route is not implemented, documented, testable, and repeatable, mark it as `development` in the manifest. Do not represent it as production-ready.
