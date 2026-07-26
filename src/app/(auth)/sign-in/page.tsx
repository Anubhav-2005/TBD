import { auth, signIn } from "@/auth";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

export default async function SignInPage() {
  const session = await auth();
  if (session?.user) redirect("/dashboard");
  const enabled = Boolean(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET);
  return (
    <main className="grid-background flex min-h-screen items-center justify-center p-6">
      <section className="surface-glass w-full max-w-md rounded-2xl p-8">
        <p className="text-primary text-sm font-medium">Agency OS</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight">Sign in to your workspace</h1>
        <p className="text-muted-foreground mt-2 text-sm leading-6">
          Access is provisioned by an organization administrator.
        </p>
        <form
          className="mt-8"
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <Button className="w-full" type="submit" disabled={!enabled}>
            Continue with Google
          </Button>
        </form>
        {!enabled && (
          <p className="text-muted-foreground mt-4 text-xs">
            Google OAuth has not been configured for this environment.
          </p>
        )}
      </section>
    </main>
  );
}
