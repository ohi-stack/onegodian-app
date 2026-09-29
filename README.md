# onegodian-app

The central public/member-facing Next.js application for the OneGodian ecosystem.

Production domain: https://app.onegodian.com

## Purpose

This repository is for the OneGodian App experience layer. It provides identity-facing and member-facing application routes, including dashboards, University schools and courses, ecosystem navigation, registry viewing, products, certificates, tools, media, settings, documentation, and public reflection experiences.

## Domain Separation Rule

App = experience.
Console = control.

The OneGodian App must not contain internal command-console features, privileged operator tools, ACC execution controls, OCP policy mutation, OEG execution routing, adapter administration, approval queues, kill-switch controls, or internal audit/log mutation tools.

Internal command/control functions belong under the separate OneGodian Console surface at:

https://console.onegodian.com

## Allowed App Areas

- /dashboard
- /university
- /ecosystem
- /registry
- /tools
- /members
- /certificates
- /products
- /media
- /learning
- /settings
- /docs
- /belief-mapper
- /api/health
- /api/manifest
- /api/tools
- /api/stats

## Belief Mapper Experience

The OneGodian ecosystem currently has two distinct Mapper surfaces that must not be conflated.

### Public App Lite Mapper

- App route: `/belief-mapper`
- Status: v0.2 prototype / pre-production
- Purpose: short, privacy-first educational reflection aligned to the OneGodian Experience Layer
- Lite flow: 5 tap-only questions
- Results: Explorer / Aligned / Strong Alignment
- Identity assignment: disabled
- Membership creation: disabled
- Account requirement: none
- Raw belief-answer persistence: disabled by design for the Lite prototype

Canonical Lite scoring/protocol documentation is maintained in `ohi-stack/onegodian-protocol/mapper`, with API-backed evaluation owned by `ohi-stack/onegodian-api` where implemented.

### OneGodian Members Full Mapper

The WordPress OneGodian Members v2.2.0 plugin adds a separate authenticated member reflection surface:

- WordPress route: `/belief-mapper/`
- Seven administrator-configurable question slots, empty by default
- Private, consent-gated member responses
- Self-selected journey stages: Seeker / Believer / OneGodian / Elder
- No automatic identity-stage assignment from answers, scores, XP, badges, streaks, or activity
- Raw answers excluded from ordinary member summary sync and public BuddyPress surfaces

The seven configurable Members question slots are an implementation surface and must not be treated as canonical question wording unless approved separately. The OneGodian Protocol Full Mapper describes seven conceptual mapping dimensions; those dimensions and the WordPress question configuration are related but not automatically identical.

## University of OneGodian App Module

The `/university` experience is the app-native catalog and routing gateway for University of OneGodian schools, courses, foundational pathways, and certificate information.

Canonical LMS authority:

- University LMS: https://u.onegodian.org
- App route: /university
- Current catalog: 8 schools and 60 structured courses
- App responsibility: discovery, browsing, and routing
- LMS responsibility: enrollment, lessons, quizzes, assignments, progress, payments, and certificate issuance

Detailed implementation boundary:

- `docs/university-lms-boundary.md`

The app must not represent proprietary certificates or internal degree pathways as accredited academic degrees, state-issued licenses, or regulated professional credentials unless that status is independently established and documented.

## OneGodian Members Plugin Sync

Current synchronized WordPress plugin target:

- Plugin: OneGodian Members
- Slug: `onegodian-members`
- Version: `2.2.0`
- Package: `onegodian-members-v2.2.0-production.zip`
- Canonical source repository: `ohi-stack/onegodian-platform-plugin`
- Canonical source branch: `main`
- App route: `/members`
- App config: `src/config/onegodian-members-plugin.ts`
- WordPress member dashboard: `https://onegodian.org/member-dashboard/`
- WordPress community directory: `https://onegodian.org/members/`
- WooCommerce source of truth: `https://onegodian.org`
- Status: production candidate; WordPress staging/live deployment verification remains separate

### Members v2.2.0 surfaces

- `/member-dashboard/`
- `/member-profile/`
- `/onegodian-ally/`
- `/belief-mapper/`
- `/onegodian-journey/`
- `/onegodian-time/`
- `/onegodian-date-converter/`

### Members v2.2.0 REST surfaces

- `GET /wp-json/onegodian/v1/members/me`
- `GET|POST|DELETE /wp-json/onegodian/v1/members/belief-mapper`
- `GET /wp-json/onegodian/v1/time/current`
- `GET /wp-json/onegodian/v1/time/convert?date=YYYY-MM-DD`

The App may consume public/member-safe summaries when a production bridge is explicitly implemented and tested. Login, checkout, WooCommerce orders, membership recognition, raw Mapper responses, and protected WordPress pages remain controlled by the WordPress/WooCommerce Members runtime until that bridge is proven operational.

## Restricted Console-Only Areas

Do not place these inside the OneGodian App:

- ACC
- agent administration
- OCP authorization controls
- OEG execution routing
- workflow administration
- policy editing
- approvals
- audit mutation
- internal logs
- adapters
- deployment controls
- kill-switch controls

## Current Standard

If a feature is public-facing or member-facing, it may live in the App.
If a feature is operator-facing, privileged, administrative, or execution-governing, it belongs in the Console.

## Production Rule

If it is not fully operational, documented, repeatable, and deployable, it is not active in the current version.
