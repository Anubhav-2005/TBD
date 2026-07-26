import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import { db } from "@/database/client";

const providers = [];
if (process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET) {
  providers.push(
    Google({ clientId: process.env.AUTH_GOOGLE_ID, clientSecret: process.env.AUTH_GOOGLE_SECRET }),
  );
}

export const authConfig = {
  adapter: PrismaAdapter(db),
  providers,
  session: { strategy: "database", maxAge: 60 * 60 * 8, updateAge: 60 * 60 },
  trustHost: true,
  pages: { signIn: "/sign-in" },
  callbacks: {
    async session({ session, user }) {
      const [membership, dbUser] = await Promise.all([
        db.userRole.findFirst({
          where: { userId: user.id },
          include: { role: { include: { permissions: { include: { permission: true } } } } },
        }),
        db.user.findUniqueOrThrow({ where: { id: user.id }, select: { organizationId: true } }),
      ]);
      session.user.id = user.id;
      session.user.organizationId = dbUser.organizationId;
      session.user.permissions =
        membership?.role.permissions.map(({ permission }) => permission.key) ?? [];
      return session;
    },
  },
  cookies: {
    sessionToken: {
      name:
        process.env.NODE_ENV === "production"
          ? "__Secure-agency.session-token"
          : "agency.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
