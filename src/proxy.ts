import { auth } from "@/auth";

export default auth((request) => {
  const isDashboard = request.nextUrl.pathname.startsWith("/dashboard");
  if (isDashboard && !request.auth) {
    return Response.redirect(new URL("/sign-in", request.nextUrl.origin));
  }
});

export const config = { matcher: ["/dashboard/:path*", "/portal/:path*"] };
