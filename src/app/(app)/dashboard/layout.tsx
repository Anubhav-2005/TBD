import { WorkspaceShell } from "@/components/operations/workspace-shell";
import { requireSession } from "@/lib/auth/authorize";
export const dynamic = "force-dynamic";
export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await requireSession();
  return <WorkspaceShell userName={session.user.name}>{children}</WorkspaceShell>;
}
