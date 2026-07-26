# Development and contribution

## Local start

1. Copy `.env.example` to `.env` and generate `AUTH_SECRET` with `openssl rand -base64 32`.
2. Start dependencies with `docker compose up -d postgres redis`.
3. Run `npm install`, `npm run db:migrate`, `npm run db:seed`, then `npm run dev`.

## Quality gate

Run `npm run format:check && npm run lint && npm run typecheck && npm test`. CI runs the same checks plus Prisma validation. Husky invokes lint-staged for staged files after `npm install`.

## Conventions

- Files and folders: kebab-case; React components: PascalCase; functions/variables: camelCase; database models: PascalCase.
- Keep feature-specific UI, queries, schemas, and services within `src/features/<feature>`; promote only true cross-cutting code to `src/components`, `src/lib`, or `src/services`.
- Validate at every external boundary. Use `organizationId` in every tenant query and check permissions before data access.
- Prefer Server Components. A `"use client"` boundary must be as low as possible.
- Never use `any`, bypass Zod, or put secrets in `NEXT_PUBLIC_*` variables.
