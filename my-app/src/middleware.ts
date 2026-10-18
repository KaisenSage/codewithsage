import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/about(.*)",
  "/contact(.*)",
  "/portfolio(.*)",
  "/get-started(.*)",
  "/privacy-policy(.*)",
  "/signin(.*)",
  "/robots.txt",
  "/sitemap.xml",
]);

const clerkAuthMiddleware = clerkMiddleware(async (auth) => {
  await auth.protect();
});

export default function middleware(request: NextRequest, event: NextFetchEvent) {
  const { pathname, hostname, protocol } = request.nextUrl;
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";
  const isCanonicalHost = hostname === "www.codewithsage.com";
  const shouldRedirectToCanonicalHost =
    hostname === "codewithsage.com" ||
    (isCanonicalHost && protocol !== "https:");

  if (
    shouldRedirectToCanonicalHost ||
    pathname !== normalizedPathname
  ) {
    const url = request.nextUrl.clone();
    if (hostname === "codewithsage.com" || isCanonicalHost) {
      url.hostname = "www.codewithsage.com";
      url.protocol = "https:";
    }
    url.pathname = normalizedPathname;
    return NextResponse.redirect(url, 308);
  }

  if (isPublicRoute(request)) {
    return NextResponse.next();
  }

  return clerkAuthMiddleware(request, event);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};