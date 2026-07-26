export const PERMISSIONS = {
  organizationManage: "organization:manage",
  usersManage: "users:manage",
  clientsRead: "clients:read",
  clientsWrite: "clients:write",
  projectsRead: "projects:read",
  projectsWrite: "projects:write",
  financeRead: "finance:read",
  financeWrite: "finance:write",
  contentWrite: "content:write",
  supportManage: "support:manage",
} as const;

export type Permission = (typeof PERMISSIONS)[keyof typeof PERMISSIONS];

export const SYSTEM_ROLE_PERMISSIONS: Record<string, Permission[]> = {
  Founder: Object.values(PERMISSIONS),
  Admin: Object.values(PERMISSIONS),
  Manager: [
    PERMISSIONS.clientsRead,
    PERMISSIONS.clientsWrite,
    PERMISSIONS.projectsRead,
    PERMISSIONS.projectsWrite,
    PERMISSIONS.financeRead,
    PERMISSIONS.supportManage,
  ],
  Employee: [PERMISSIONS.clientsRead, PERMISSIONS.projectsRead, PERMISSIONS.projectsWrite],
  Client: [PERMISSIONS.projectsRead],
  Guest: [],
};
