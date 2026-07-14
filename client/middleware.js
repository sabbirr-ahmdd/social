import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const refreshToken = request.cookies.get("refreshToken");

  const isLoggedIn = !!refreshToken;

  if (isLoggedIn && (
    pathname.startsWith("/auth/login") || 
    pathname.startsWith("/auth/register")
  )) {
    return NextResponse.redirect(new URL("/main/feed", request.url));
  }

  if(!isLoggedIn && pathname.startsWith("/main")) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/:path*", "/main/:path*"],
}