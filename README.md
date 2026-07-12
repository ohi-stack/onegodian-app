# onegodian-app

The central public/member-facing Next.js application for the OneGodian ecosystem.

Production domain: https://app.onegodian.com

## Purpose

This repository is for the OneGodian App experience layer. It provides identity-facing and member-facing application routes, including dashboards, ecosystem navigation, registry viewing, products, certificates, tools, media, settings, and documentation.

## Domain Separation Rule

App = experience.
Console = control.

The OneGodian App must not contain internal command-console features, privileged operator tools, ACC execution controls, OCP policy mutation, OEG execution routing, adapter administration, approval queues, kill-switch controls, or internal audit/log mutation tools.

Internal command/control functions belong under the separate OneGodian Console surface at:

https://console.onegodian.com

## Allowed App Areas

- /dashboard
- /ecosystem
- /registry
- /tools
- /members
- /certificates
- /products
- /media
- /settings
- /docs
- /api/health
- /api/manifest
- /api/tools
- /api/stats

## OneGodian Members Plugin Sync

Current synced WordPress plugin target:

- Plugin: OneGodian Members
- Slug: onegodian-members
- Version: 2.0.5
- Package: onegodian-members-v2.0.5-production-full-ui-brand-upgrade.zip
- App route: /members
- Config: src/config/onegodian-members-plugin.ts
- WordPress dashboard: https://onegodian.org/members/
- WooCommerce source of truth: https://onegodian.org

The app member route is an experience gateway. Login, checkout, WooCommerce orders, membership recognition, and protected WordPress pages remain controlled by WordPress/WooCommerce until a future production API bridge is fully operational and documented.

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
