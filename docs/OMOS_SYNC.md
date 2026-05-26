# OMOS ↔ OneGodian App Sync

## Purpose

The OneGodian App is the public/member-facing experience layer.

OMOS.OneGodian.com is the runtime, protocol, and systems layer.

The app must consume OMOS runtime metadata safely without exposing internal operator tooling.

---

## Runtime Endpoints

### Health

GET https://omos.onegodian.com/health

Expected:

- status
- uptime
- version
- runtime identity

---

### Manifest

GET https://omos.onegodian.com/manifest

Expected:

- runtime id
- modules
- available tools
- routes
- supported integrations
- API versions

---

## Approved App Integration Areas

The app may:

- display runtime health
- display manifest metadata
- render public runtime docs
- connect to Belief Mapper Lite
- connect to OneGodian Time tools
- render ecosystem route maps
- display public protocol docs
- display system prompt references

The app must NOT:

- expose operator controls
- mutate runtime policy
- access internal execution queues
- expose deployment tooling
- expose kill-switch systems
- expose adapter administration
- expose audit mutation systems

---

## Runtime-Aware Dashboard Widgets

Recommended widgets:

- Runtime Health
- OMOS Version
- Manifest Status
- Active Public Tools
- OTS-V5 Clock
- QRV Verification Status
- Ecosystem Sync Status

---

## Environment Variables

NEXT_PUBLIC_OMOS_URL=https://omos.onegodian.com
NEXT_PUBLIC_OMOS_MANIFEST=https://omos.onegodian.com/manifest
NEXT_PUBLIC_OMOS_HEALTH=https://omos.onegodian.com/health
NEXT_PUBLIC_ONEGODIAN_ORG=https://onegodian.org
NEXT_PUBLIC_ONEGODIAN_COM=https://onegodian.com
NEXT_PUBLIC_QRV_NETWORK=https://qrv.network
NEXT_PUBLIC_QUANTUM_OHI=https://quantumohi.com

---

## Production Rule

Public/member features belong in the app.

Operator/governance controls belong in the Console.
