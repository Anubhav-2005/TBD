# Security baseline

- Zod validates all untrusted payloads; Prisma parameterization prevents SQL injection.
- Non-idempotent route handlers call `assertSameOrigin` through `protectApi` for CSRF mitigation. Auth.js OAuth state handling covers provider flows.
- Session cookies are HTTP-only, `SameSite=Lax`, secure in production, and server-resolved; permissions are never trusted from the client.
- CSP, HSTS, framing, MIME, referrer, and permissions headers are configured in `next.config.ts`. `helmet` is intentionally not installed: it targets Express/Connect middleware and duplicates or conflicts with Next.js response-header control.
- Redis-backed rate limiting protects public and API endpoints; production requires Redis. Keys must not contain raw personal data.
- Uploads must use Cloudinary signed uploads, MIME allowlists, byte limits, normalized filenames, and a post-upload audit entry. Do not proxy large files through server actions.
- Logs redact credentials. Store only hashable/minimal IP data in audit records. Secrets stay in the deployment secret store—not source, browser variables, or database settings.
- Add SAST, dependency scanning, backup restore drills, and webhook signature verification before enabling the relevant integrations.
