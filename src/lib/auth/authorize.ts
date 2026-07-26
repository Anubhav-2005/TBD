import { auth } from "@/auth";
import type { Permission } from "@/lib/auth/permissions";

export async function requireSession() {
  const session = await auth();
  if (!session?.user?.id) throw new AuthorizationError("UNAUTHENTICATED");
  return session;
}

export async function requirePermission(permission: Permission) {
  const session = await requireSession();
  if (!session.user.permissions.includes(permission)) throw new AuthorizationError("FORBIDDEN");
  return session;
}

export class AuthorizationError extends Error {
  constructor(public readonly code: "UNAUTHENTICATED" | "FORBIDDEN") {
    super(code);
  }
}
