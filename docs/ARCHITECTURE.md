# Architecture

Agency OS is a modular, tenant-aware Next.js application. It uses a **hybrid boundary**: React Server Components and Server Actions for authenticated product workflows; versioned REST route handlers for webhooks, integrations, public forms, and mobile/SaaS consumers. This keeps mutation code close to the UI without making external contracts implicit.

## Core decisions

- **Next.js App Router + React Server Components:** server-first rendering, streaming, metadata, and route-level code splitting.
- **PostgreSQL + Prisma:** relational integrity for finance, permissions, and delivery workflows. Every business entity is scoped by `Organization`; do not query tenant data without its `organizationId`.
- **Auth.js database sessions:** revocable, short-lived HTTP-only sessions; OAuth is optional per deployment. Roles compose permissions rather than encoding authorization in UI conditions.
- **Redis:** distributed rate limits, short-lived cache, and later queues. The in-memory limiter is development-only resilience, not a production substitute.
- **Cloudinary, Resend, Razorpay:** isolated provider clients in `src/services`, so they can be replaced without feature-layer rewrites.

## Request flow

`proxy.ts` handles coarse route protection → route/server-action validates input with Zod → authorization resolves permission → service executes transactional database work → audit/activity records are written → typed response or UI revalidation.

## Scale path

Start as a modular monolith. Extract worker processes (emails, media, billing retries), search, and public API only when load or deployment cadence requires it. Organization IDs, explicit API response types, service boundaries, and outbox-compatible audit records make that extraction low-risk.
