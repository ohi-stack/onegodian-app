# University of OneGodian LMS Boundary

## Purpose

The OneGodian App provides the public/member-facing experience layer for University discovery, browsing, and routing. The production LMS authority remains `https://u.onegodian.org`.

## Canonical Domain Separation

- App experience: `https://app.onegodian.com/university`
- LMS authority: `https://u.onegodian.org`
- WordPress LMS plugin slug: `onegodian-university-lms`
- Public brand: University of OneGodian

## App Responsibilities

The App may provide:

- University overview
- School directory
- Course catalog preview
- Certificate pathway preview
- Public navigation into LMS course pages
- Student-facing status cards when a documented LMS API is available
- Marketing, orientation, and discovery content

## LMS Responsibilities

The App must route these functions to the LMS until an API bridge is fully operational and documented:

- Enrollment
- Checkout completion handling
- Lesson delivery
- Quizzes
- Assignments
- Progress tracking
- Certificate generation
- Certificate verification
- Live classes
- Instructor grading
- Admin analytics
- Tutor LMS migration

## Canonical LMS Routes

- `https://u.onegodian.org/courses`
- `https://u.onegodian.org/course/{slug}`
- `https://u.onegodian.org/lesson/{slug}`
- `https://u.onegodian.org/dashboard`
- `https://u.onegodian.org/my-certificates`
- `https://u.onegodian.org/live-classes`
- `https://u.onegodian.org/certificate-verify`
- `https://u.onegodian.org/login`
- `https://u.onegodian.org/register`
- `https://u.onegodian.org/pricing`

## Required Catalog Structure

The App should model University content around schools, courses, and certificate pathways.

Initial academic organization:

1. School of OneGodian Foundations
2. School of OneGodian Intelligence™
3. School of The OneGodian Algorithm™
4. School of Governance & Community Studies
5. School of Technology & Platforms
6. School of OneGodian Time™
7. School of Economics & Enterprise
8. School of Business & Commerce
9. School of Leadership
10. School of Onegodianosophy™ / OneGodian Studies

## First Launch Courses To Surface

- OGF-101 — Introduction to OneGodian™
- OGF-102 — The OneGodian Identity™
- OGF-103 — The OneGodian Journey™
- OHI-101 — Introduction to OHI™
- OHI-201 — Evolution of OHI™
- OGA-101 — The OneGodian Algorithm Overview™
- OGA-201 — Protocol Layer™
- OGA-301 — Experience Layer™
- OGT-101 — OneGodian Technology Ecosystem™
- OGTM-101 — Introduction to OneGodian Time™
- OGE-101 — Economic Sovereignty™
- OGL-101 — Principles of Leadership™

## Credential Accuracy Rule

The App must not describe proprietary certificates or internal degree pathways as accredited academic degrees, state-issued licenses, or regulated professional credentials unless that status is independently established and documented.

## Production Rule

If a LMS integration, API bridge, route, dashboard, enrollment state, certificate status, or course progress value is not operational, documented, repeatable, and deployable, the App must present it as planned, preview, or coming soon rather than active.
