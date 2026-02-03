import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Vercel Edge Middleware - Extract country from geolocation headers
  // Available headers: x-vercel-ip-country, x-vercel-ip-country-region, x-vercel-ip-timezone
  const country = request.headers.get("x-vercel-ip-country") || "IN"
  const region = request.headers.get("x-vercel-ip-country-region") || ""
  
  // [DEBUG] Log geolocation detection
  console.log("[MIDDLEWARE] 🌍 Geolocation Detection")
  console.log(`[MIDDLEWARE] Country Code: ${country}`)
  console.log(`[MIDDLEWARE] Region: ${region || "Not available"}`)
  console.log(`[MIDDLEWARE] Path: ${request.nextUrl.pathname}`)

  // Set cookie with country info for client-side access
  response.cookies.set("user-country", country, {
    maxAge: 60 * 60 * 24 * 7, // 7 days
    httpOnly: false, // Allow client-side access
    sameSite: "lax",
  })
  
  console.log(`[MIDDLEWARE] ✅ Cookie 'user-country' set to: ${country}`)

  response.cookies.set("user-region", region, {
    maxAge: 60 * 60 * 24 * 7,
    httpOnly: false,
    sameSite: "lax",
  })
  
  console.log(`[MIDDLEWARE] ✅ Cookie 'user-region' set to: ${region || "empty"}`)

  // Admin authentication check
  if (
    request.nextUrl.pathname === "/admin" ||
    (request.nextUrl.pathname.startsWith("/admin/") && !request.nextUrl.pathname.startsWith("/admin/login"))
  ) {
    const adminSession = request.cookies.get("admin-session")

    if (!adminSession || adminSession.value !== "authenticated") {
      return NextResponse.redirect(new URL("/admin/login", request.url))
    }
  }

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
