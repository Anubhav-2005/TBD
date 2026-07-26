# Agency OS

Production foundation for a premium digital agency platform. This repository deliberately contains no marketing pages: it establishes the secure, modular operating system that future public-site, client portal, and internal modules will share.

## Stack

Next.js App Router, React, TypeScript, Tailwind CSS v4, shadcn/ui conventions, Framer Motion, GSAP, Lenis, React Three Fiber/Three.js, Prisma/PostgreSQL, Auth.js, Redis, Cloudinary, Resend, Razorpay, Zod, React Hook Form, Zustand, TanStack Query, Docker, and GitHub Actions.

`Helmet` is deliberately replaced by native Next.js security headers; it is an Express middleware and is not the correct integration point in App Router. See [Security](docs/SECURITY.md).

## Quick start

```bash
cp .env.example .env
docker compose up -d postgres redis
npm install
npm run db:migrate
npm run db:seed
npm run dev
```

Use Node 24+ and npm 10+. Configure `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` to enable Google sign-in. The first organization and role assignments are intentionally deployment-specific and should be created by a privileged onboarding script or controlled admin flow—not automatically from a public endpoint.

## Commands

| Command                                    | Purpose                                     |
| ------------------------------------------ | ------------------------------------------- |
| `npm run dev`                              | Turbopack development server                |
| `npm run build`                            | Generate Prisma client and production build |
| `npm run lint` / `npm run typecheck`       | Static quality checks                       |
| `npm test` / `npm run test:e2e`            | Unit and browser tests                      |
| `npm run db:migrate` / `npm run db:deploy` | Local / production migrations               |

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Database and folder map](docs/FOUNDATION_MAP.md)
- [Design system](docs/DESIGN_SYSTEM.md)
- [Security](docs/SECURITY.md)
- [Development guide](docs/DEVELOPMENT.md)
- [Deployment and recovery](docs/DEPLOYMENT.md)
- [Agency operating system](docs/OPERATIONS.md)

# TBD
