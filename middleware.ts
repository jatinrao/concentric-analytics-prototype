import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Just log without modifying the request
  console.log('Accessing:', request.nextUrl.pathname);
  return NextResponse.next();
}

// Start with minimal matcher
export const config = {
  matcher: [],  // Empty for now to confirm routing works without middleware
};