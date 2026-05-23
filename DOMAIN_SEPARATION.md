# OneGodian Domain Separation Policy

## Purpose

The OneGodian ecosystem uses strict domain separation to preserve clarity, compliance, operational security, auditability, and institutional readability.

## Domain Roles

### onegodian.org

Identity, education, philosophy, public explanation, chronology, archives, and institutional narrative.

### onegodian.com

Commerce, products, services, transactions, monetization, and payments.

### app.onegodian.com

Public and member-facing application layer.

Purpose:
- dashboards
- registry viewing
- tools
- products
- certificates
- ecosystem access
- media
- settings
- member interaction

### console.onegodian.com

Internal command/control plane.

Purpose:
- ACC
- agents
- workflows
- OCP
- OEG
- adapters
- approvals
- audit
- logs
- policies
- execution governance
- operational controls

## Structural Rule

App = experience.
Console = control.

The App must not contain privileged internal control-plane features.

The Console must not be treated as a public-facing member application.

## Security Rules

- Console requires authenticated operator access.
- Console should not be indexed.
- Privileged actions must pass through authorization.
- Decision records must be logged.
- Public APIs exposed through the App must remain public-safe.
