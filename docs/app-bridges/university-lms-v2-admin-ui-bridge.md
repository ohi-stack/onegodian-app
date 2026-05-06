# University of OneGodian LMS v2.0.0 Build Contract

Plugin slug: `onegodian-university-lms`  
Brand: `University of OneGodian`  
Domain: `https://u.onegodian.org`  
Version target: `2.0.0`

## Objective

Upgrade the WordPress LMS plugin from an admin shell into a production LMS control panel with styled tabs, metric cards, tables, filters, forms, action buttons, front-end shortcodes, automatic required page generation, automatic version upgrade logic, and a OneGodian App Bridge.

## Admin UI Requirement

Do not ship empty admin pages. Every page must include a branded header, tabs where appropriate, action bar, real table or form structure, filters, empty state, primary action button, nonce-secured handlers, capability checks, escaped output, and responsive styling.

Create scoped admin CSS at `assets/admin/css/og-lms-admin.css`. All custom admin styling must be scoped under `.og-lms-admin`.

Create public CSS at `assets/public/css/og-lms-public.css` for course catalog cards, membership cards, certificate verification, student dashboard, lesson viewer, progress bars, buttons, logged-out notices, and empty states.

## Admin Menu

- Dashboard
- Courses
- Lessons
- Quizzes
- Assignments
- Students
- Enrollments
- Certificates
- Live Classes
- Reports
- App Bridge
- Settings
- Tools
- Production Checklist
- Documentation
- System Status

## Required Tabs

Dashboard: Overview, Activity, Revenue, Learning, System  
Courses: All Courses, Add Course, Categories, Pricing, WooCommerce Mapping  
Lessons: All Lessons, Lesson Builder, Drip Schedule, Completion Rules, Resources  
Quizzes: All Quizzes, Quiz Builder, Question Bank, Attempts, Grading  
Assignments: All Assignments, Submissions, Pending Grades, Rubrics, Settings  
Students: All Students, Student Profiles, Manual Enrollment, Membership Tiers, Activity Log  
Enrollments: Active, Completed, Expired, Cancelled, Refunded, Suspended  
Certificates: Issued Certificates, Templates, Verification, Auto-Issue Rules, Branding  
Live Classes: Upcoming, Past Classes, Providers, Attendance, Replays  
Reports: Revenue, Courses, Students, Memberships, Certificates, Refunds  
Settings: General, Branding, Courses, Payments, WooCommerce, Memberships, Emails, Certificates, Security, Advanced, System Status, App Bridge  
App Bridge: Overview, Connection, API Keys, Manifest, Endpoints, Next.js Env, Production Checklist

## App Bridge

Add route: `wp-admin/admin.php?page=og-lms-app-bridge`.

The App Bridge screen must include status cards, connection settings, API key generation, key rotation, key revocation, manifest preview, endpoint preview, environment variable panel, and production checklist.

REST namespace: `/wp-json/og-lms/v1`.

Required endpoints:

- `GET /health`
- `GET /ready`
- `GET /version`
- `GET /status`
- `GET /manifest`
- `GET /tools`
- `GET /stats`
- `GET /courses`
- `GET /students`
- `GET /enrollments`
- `POST /certificates/issue`
- `POST /pages/generate`

Bridge-protected endpoints must validate `X-OG-LMS-App-Key`. Compatibility alias `X-OMOS-App-Key` must also be accepted.

Do not expose secret payment keys from public REST output.

## Version Upgrade System

Main plugin constants:

```php
define( 'OG_LMS_VERSION', '2.0.0' );
define( 'OG_LMS_DB_VERSION', '2.0.0' );
define( 'OG_LMS_PLUGIN_SLUG', 'onegodian-university-lms' );
```

Stored options:

- `og_lms_version`
- `og_lms_db_version`
- `og_lms_last_upgrade`
- `og_lms_required_pages`
- `og_lms_upgrade_log`

Required class: `OG_LMS_Upgrade_Manager`.

Required methods: `maybe_upgrade`, `get_installed_version`, `is_newer_version`, `run_upgrade`, `run_migrations`, `update_required_options`, `generate_or_update_required_pages`, `write_upgrade_log`.

Hook upgrade manager on `admin_init`. A newer uploaded plugin ZIP must update the installed plugin without requiring deletion or reinstall.

## Activation

Use `register_activation_hook`. Activation must create or update database tables, register default options, generate required pages, register REST routes, flush rewrite rules, and save current plugin and DB versions.

## Required Page Generator

Required class: `OG_LMS_Page_Generator`.

Required methods: `generate_required_pages`, `generate_or_update_page`, `get_required_pages`, `find_existing_page_by_slug`, `update_existing_page_shortcode`, `store_page_ids`, `get_page_status`.

Required pages:

- Courses: slug `courses`, shortcode `[og_course_catalog]`
- Student Dashboard: slug `dashboard`, shortcode `[og_student_dashboard]`
- Membership: slug `membership`, shortcode `[og_lms_membership]`
- Certificate Verify: slug `certificate-verify`, shortcode `[og_certificate_verify]`
- Login: slug `login`, shortcode `[og_lms_login]`
- Register: slug `register`, shortcode `[og_lms_register]`
- Checkout: slug `checkout`, WooCommerce checkout if available

Rules: check by slug, avoid duplicates, preserve existing custom content, append missing shortcode, store page IDs in `og_lms_required_pages`, show page status in System Status, run on activation and version upgrade, require `manage_options` for manual generation, and use nonce protection.

Manual action: `admin_post_og_lms_generate_pages`. Button label: `Generate / Update Required LMS Pages`.

Add the button to Dashboard, Settings, App Bridge, System Status, and Production Checklist.

## Production Checklist

Route: `wp-admin/admin.php?page=og-lms-production-checklist`.

Checklist items must report Passed, Warning, or Failed for plugin version, database version, required tables, required pages, shortcodes, WooCommerce, WooCommerce checkout mapping, Stripe settings, App Bridge, App Bridge key, manifest endpoint, health endpoint, ready endpoint, status endpoint, tools endpoint, permalinks, admin CSS, and public CSS.

## Core LMS Screens

Dashboard must include metrics for total students, active enrollments, monthly revenue, Stripe status, WooCommerce orders, new signups, completion rate, and pending support/refunds.

Courses, Lessons, Quizzes, Assignments, Students, Enrollments, Certificates, Live Classes, Reports, and Settings must all render real working tables or forms with filters, actions, and empty states.

## Front-End Shortcodes

- `/courses` uses `[og_course_catalog]`
- `/course/{slug}` uses `[og_course id="123"]`
- `/lesson/{slug}` uses `[og_lesson id="123"]`
- `/dashboard` uses `[og_student_dashboard]`
- `/membership` uses `[og_lms_membership]`
- `/certificate-verify` uses `[og_certificate_verify]`
- `/login` uses `[og_lms_login]`
- `/register` uses `[og_lms_register]`

## Database Tables

Priority tables:

- `wp_og_enrollments`
- `wp_og_progress`
- `wp_og_quiz_attempts`
- `wp_og_assignment_submissions`
- `wp_og_certificates`
- `wp_og_payments`
- `wp_og_live_sessions`
- `wp_og_attendance`
- `wp_og_activity_log`

## Security

Use capability checks, nonces, sanitized input, escaped output, and prepared SQL. Never hardcode live payment secrets.

## Changelog

Add changelog entry for v2.0.0 documenting the full admin UI upgrade, App Bridge, REST endpoints, API key management, automatic version upgrade manager, page generation, production checklist, responsive admin CSS, responsive public CSS, and safer activation/update routines.

## Definition of Done

When the newest plugin ZIP is uploaded and activated, the plugin must recognize the new version, run upgrades, generate or update required pages without duplicates, preserve existing content, expose App Bridge endpoints, display styled admin tabs and tables, show production checklist results, and no longer appear as an empty shell.
