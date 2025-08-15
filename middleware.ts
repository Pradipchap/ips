// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { API_TOKEN_LOCAL_KEY } from "./constants/misc";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(API_TOKEN_LOCAL_KEY)?.value;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/login")) {
    return NextResponse.next();
  }

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    return NextResponse.redirect(loginUrl);
  }
  if (pathname === "/") {
    const usersManagement = new URL("/users", request.url);
    return NextResponse.redirect(usersManagement);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Authorization", `Token ${token}`);
  return NextResponse.next({
    request: {
      headers: requestHeaders
    }
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
};
