// middleware.ts (in your root directory)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // If accessing root, redirect to default tenant/locale
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/orgA/en-US', request.url));
  }

  // If accessing just tenant without locale, redirect to default locale
  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length === 1) {
    const tenant = pathSegments[0];
    return NextResponse.redirect(new URL(`/${tenant}/en-US`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|manifest.json).*)',
  ],
};