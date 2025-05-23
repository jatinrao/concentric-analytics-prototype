// middleware.ts (in project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Return immediately without any logic that could fail
  return NextResponse.next();
}

// Optional: Start with a very limited matcher
export const config = {
  matcher: [
    // Start with a single test path
    '/test-middleware'
  ],
};