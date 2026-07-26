# Agency operating system

The protected workspace is available beneath `/dashboard`; `/portal` is the client-facing counterpart. Both routes are guarded by Auth.js session protection in `src/proxy.ts`.

## Workspace modules

- **Overview:** founder KPIs, revenue trajectory, pipeline, meetings, tasks, and project health.
- **CRM and prospects:** opportunity management and compliant imported/public-source prospect research; no scraping is implemented.
- **Projects and tasks:** delivery portfolio and interactive kanban status tracking.
- **Invoices, files, messages, meetings, support:** operations records and dedicated collaboration surfaces.
- **Analytics, CMS, settings:** leadership reporting, content operations, and administrative control.
- **Client portal:** a separately routed, client-facing project, approval, file, and invoice experience.

Run `npm run db:seed` after migration to create the Arcture organization, founder account, role-permission grants, a client, project, and CRM lead. The seeded founder email is `founder@arcture.studio`; configure the Google OAuth provider with that account to use it for local sign-in.
