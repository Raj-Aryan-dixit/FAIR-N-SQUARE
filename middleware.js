import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/groups(.*)",
  "/expenses(.*)",
  "/settlements(.*)",
  "/person(.*)",
  "/contact(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // If the user is not logged in and tries to access a protected route
  if (!userId && isProtectedRoute(req)) {
   const {redirectToSignIn} = await auth();
   return redirectToSignIn();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    /*
     * Match all routes except for:
     * - static files
     * - public files
     * - API routes
     */
    "/((?!_next|static|favicon.ico|logos|api).*)",
  ],
};
