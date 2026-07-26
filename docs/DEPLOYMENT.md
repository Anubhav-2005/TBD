# Deployment, recovery, and operations

Deploy the app to Vercel for edge/CDN delivery or use the included standalone Docker image on any container platform. PostgreSQL and Redis are managed services in production; never deploy the Compose data volumes as production storage.

Before a release: set production secrets, run `npm run db:deploy`, run CI, verify `/api/health` from a trusted monitor, and configure provider webhook signatures. Database migrations are forward-only, reviewed, and executed separately from application rollout.

Back up PostgreSQL with daily encrypted snapshots and point-in-time recovery; retain at least 35 days. Test restoration quarterly against an isolated database. Redis is disposable for cache/rate-limit data. Cloudinary is the source of media bytes; database media metadata is included in PostgreSQL recovery. Record RPO/RTO and incident ownership in the runbook before accepting client production data.
