import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";
import { Login, PRIVATE_USER_ROUTE, PUBLIC_ROUTE } from "./route";
import { AUTH_TOKEN } from "./service/axios/httpClient";
export default routing;

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const locale = nextUrl.pathname.split("/")[1];
  const token = cookies.get(AUTH_TOKEN)?.value;
  const isPublicRoute =
    PUBLIC_ROUTE.find((route) =>
      nextUrl.pathname.startsWith(`/${locale}/${route}`)
    ) ||
    !PRIVATE_USER_ROUTE.find((route) => nextUrl.pathname.includes(`${route}`));
  if (!isPublicRoute && !token) {
    return NextResponse.redirect(new URL(`/${locale}/${Login}`, nextUrl));
  }
  const isLogin = nextUrl.pathname.startsWith(`/${locale}/${Login}`);
  if (isLogin && token) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, nextUrl));
  }
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(vi|en)/:path*"],
};
