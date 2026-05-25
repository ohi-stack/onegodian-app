# Onegodian App Integration Checklist

## Immediate objective

Make `app.onegodian.com` the operating dashboard that can see every active OneGodian domain, plugin, node, product surface, and sync state.

## Control plane tasks

- [ ] Load `data/ecosystem-manifest.json` into the app runtime.
- [ ] Expose `/api/manifest` from the manifest.
- [ ] Expose `/api/health` with build, environment, and uptime status.
- [ ] Create `/ecosystem` route to render every domain in the manifest.
- [ ] Create `/registry` route for systems, plugins, products, certificates, and page records.
- [ ] Create `/tools` route for operator tools and adapters.
- [ ] Create `/settings` route for API keys, sync URLs, plugin endpoints, and environment status.

## Domain sync tasks

- [ ] Pull OMOS node status and route manifest from `omos.onegodian.com`.
- [ ] Pull Capital node and plugin status from `capital.onegodian.com`.
- [ ] Pull WordPress plugin status from `onegodian.org`.
- [ ] Pull WooCommerce/product status from `onegodian.com`.
- [ ] Pull LMS/course status from `u.onegodian.com`.
- [ ] Pull Galaxy route and registry status from `galaxy.onegodian.com`.
- [ ] Pull QuantumOHI platform plugin status from `quantumohi.com`.

## Capital consolidation tasks

- [ ] Treat Zolfi as a Capital module.
- [ ] Treat Instryx as a Capital module.
- [ ] Add ODC smart contract page/module to Capital.
- [ ] Add Disclosure Center status to Capital.
- [ ] Display all Capital modules inside app dashboard.

## WordPress plugin tasks

- [ ] Standardize plugin admin screens: App Bridge, Dashboard, Settings, API Keys, Submissions, Tools, Status, Production Checklist, Documentation.
- [ ] Standardize public shortcode/block output for landing pages.
- [ ] Standardize `/wp-json/onegodian/v1/status` endpoint.
- [ ] Standardize `/wp-json/onegodian/v1/manifest` endpoint.

## Production stability tests

- [ ] App can list all domains.
- [ ] App can show online/offline/unknown state.
- [ ] App can show pages and modules per domain.
- [ ] App can distinguish node domains from WordPress plugin domains.
- [ ] App can display Capital modules: ODC, Zolfi, Instryx, Disclosure Center.
- [ ] App can show which domains are commerce, education, institutional, technology, or command surfaces.
