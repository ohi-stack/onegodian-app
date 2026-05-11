# OneGodian Digital Ecosystem — Current Foundation

Status: v1.0 foundation map  
Date: May 11, 2026  
Primary control plane: `app.OneGodian.com`

## Purpose

This document defines the current OneGodian digital ecosystem foundation. The ecosystem should not expand into additional subdomains until these seven properties are operational, clearly linked, mirrored inside `app.OneGodian.com`, documented, and production-stable.

## Seven-Property Foundation

| Property | Primary Role | Purpose |
| --- | --- | --- |
| `OneGodian.org` | Organization / public identity / institutional home | Public-facing mission, history, membership, records, educational orientation, and the best place for the “What is OneGodian?” explanation. |
| `OneGodian.com` | Store platform / commerce plugin | Products, digital downloads, merchandise, certificates, member purchases, and campaign collections such as `ONEGODIAN™ — Remember`. |
| `u.OneGodian.com` | E-learning / LMS plugin | OneGodian University, courses, lessons, learning paths, training certificates, and educational onboarding. |
| `galaxy.OneGodian.com` | Galaxy console / planet navigator / planet-store gateway | OneGodian Galaxy introduction, planet pages, planet stores, galaxy map, planet-specific lore, commerce, and navigation. |
| `capital.OneGodian.com` | Corporate finance / capital platform plugin | ONEGODIAN, LLC finance materials, funding pages, corporate finance documents, capital strategy, investor/contributor information, and financial dashboard expansion. |
| `OMOS.OneGodian.com` | OMOS protocol / specification / alignment system | OMOS documentation, OMOS-1.0 protocol, Alignment API, developer-facing specification, and human / AI / agent / humanoid alignment framework. Separate from commerce, LMS, galaxy, and capital. |
| `app.OneGodian.com` | Node app / command center / repository-connected control plane | Master dashboard, registry, tools, certificates, products, members, media, plugin bridge status, API health checks, and repository-connected development layer. |

## Clean Separation Rule

```text
OneGodian.org         = Organization
OneGodian.com         = Store
u.OneGodian.com       = Education
galaxy.OneGodian.com  = Galaxy / planets
capital.OneGodian.com = Corporate finance
OMOS.OneGodian.com    = Protocol / specification / alignment system
app.OneGodian.com     = Node control plane tying everything together
```

## Master Architecture

```text
                    app.OneGodian.com
              Node Control Plane + Repositories
                         │
 ┌───────────────────────┼────────────────────────┐
 │                       │                        │
OneGodian.org      OneGodian.com           u.OneGodian.com
Organization       Store Platform          LMS / Education
 │                       │                        │
galaxy.OneGodian.com  capital.OneGodian.com  OMOS.OneGodian.com
Galaxy / Planets      Corporate Finance      Protocol / Spec
```

## Required App Dashboard Cards

The `app.OneGodian.com` dashboard must mirror the seven-property foundation through system cards.

| Card | Target | Function |
| --- | --- | --- |
| Organization Card | `https://OneGodian.org` | Public identity and institutional home. |
| Store Card | `https://OneGodian.com` | Commerce, products, downloads, certificates, campaign collections. |
| University Card | `https://u.OneGodian.com` | LMS, learning paths, courses, training certificates. |
| Galaxy Card | `https://galaxy.OneGodian.com` | Galaxy map, planets, planet stores, lore, navigation. |
| Capital Card | `https://capital.OneGodian.com` | Corporate finance, funding, capital strategy, contributor/investor info. |
| OMOS Card | `https://OMOS.OneGodian.com` | Protocol, specification, alignment system, developer docs. |
| Repositories Card | GitHub organization / repo index | Repository status and development links. |
| Plugin Status Card | WordPress plugin bridges | Store, LMS, galaxy, capital, OMOS bridge status. |
| API Health Card | Node endpoints | `/api/health`, `/api/manifest`, `/api/tools`, `/api/stats`, and related runtime checks. |

## Production Priority

The current priority is not more subdomains. The priority is:

1. make each property operational;
2. make each property clearly linked;
3. mirror each property inside `app.OneGodian.com`;
4. document each property;
5. verify plugin bridges;
6. verify API health checks;
7. stabilize production deployment;
8. avoid expanding the domain map until the seven-property foundation is stable.

## Version Discipline

If a property, plugin bridge, card, endpoint, or dashboard module is not implemented, documented, repeatable, and testable, it should be marked as planned or draft, not operational.
