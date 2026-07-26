import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: { path: "prisma/migrations" },
  // Prisma 7 reads the migration URL while building. A production deployment
  // does not need a live database merely to compile the public website.
  datasource: {
    url: process.env.DATABASE_URL ?? "postgresql://build:build@localhost:5432/build",
  },
});
