import { PrismaClient, UserStatus } from "@prisma/client";

const prisma = new PrismaClient();

const permissions = [
  "organization:manage",
  "users:manage",
  "clients:read",
  "clients:write",
  "projects:read",
  "projects:write",
  "finance:read",
  "finance:write",
  "content:write",
  "support:manage",
];

async function main() {
  const organization = await prisma.organization.upsert({
    where: { slug: "tbd" },
    update: {},
    create: { name: "TBD — To Be Declared", slug: "tbd", timezone: "Asia/Kolkata" },
  });
  await prisma.$transaction(
    permissions.map((key) =>
      prisma.permission.upsert({ where: { key }, update: {}, create: { key } }),
    ),
  );
  const role = await prisma.role.upsert({
    where: { organizationId_name: { organizationId: organization.id, name: "Founder" } },
    update: {},
    create: {
      organizationId: organization.id,
      name: "Founder",
      isSystem: true,
      description: "Full workspace authority",
    },
  });
  const allPermissions = await prisma.permission.findMany({ where: { key: { in: permissions } } });
  await prisma.rolePermission.createMany({
    data: allPermissions.map((permission) => ({ roleId: role.id, permissionId: permission.id })),
    skipDuplicates: true,
  });
  const founder = await prisma.user.upsert({
    where: { email: "founder@tbd.studio" },
    update: { organizationId: organization.id, status: UserStatus.ACTIVE },
    create: {
      organizationId: organization.id,
      email: "founder@tbd.studio",
      name: "TBD Founder",
      status: UserStatus.ACTIVE,
    },
  });
  await prisma.userRole.createMany({
    data: [{ userId: founder.id, roleId: role.id }],
    skipDuplicates: true,
  });
  const meridian = await prisma.client.upsert({
    where: { id: "seed-client-meridian" },
    update: {},
    create: {
      id: "seed-client-meridian",
      organizationId: organization.id,
      name: "Meridian Group",
      email: "team@meridian.example",
      website: "https://meridian.example",
    },
  });
  await prisma.project.upsert({
    where: { organizationId_slug: { organizationId: organization.id, slug: "meridian-health" } },
    update: {},
    create: {
      organizationId: organization.id,
      clientId: meridian.id,
      name: "Meridian Health",
      slug: "meridian-health",
      description: "Healthcare platform redesign",
      status: "IN_PROGRESS",
      priority: "HIGH",
      budget: 720000,
      startDate: new Date("2026-06-01"),
      dueDate: new Date("2026-08-15"),
    },
  });
  await prisma.lead.upsert({
    where: { id: "seed-lead-aster" },
    update: {},
    create: {
      id: "seed-lead-aster",
      organizationId: organization.id,
      name: "Aster & Co.",
      email: "maya@aster.example",
      company: "Aster & Co.",
      source: "Referral",
      status: "PROPOSAL",
      value: 480000,
      notes: "Brand and website engagement",
    },
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error: unknown) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
