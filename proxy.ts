import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { LEGACY_REDIRECTS } from "@/lib/legacy-redirects"

function redirect(location: string) {
  return new NextResponse(null, {
    status: 301,
    headers: { Location: location },
  })
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const legacy = LEGACY_REDIRECTS[pathname]

  if (legacy) {
    return redirect(new URL(legacy, request.url).href)
  }

  if (pathname.length > 1 && pathname.endsWith("/")) {
    const stripped = pathname.replace(/\/+$/, "") || "/"
    return redirect(new URL(`${stripped}${search}`, request.url).href)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\..*).*)"],
}
