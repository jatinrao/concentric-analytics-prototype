// middleware.ts (in project root)
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware running for:', request.url);
  
  try {
    // Your middleware logic here
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware error:', error);
    return NextResponse.next();
  }
}

// Optional: limit paths middleware runs on
export const config = {
  matcher: [
    '/orgA/:path*',
    // Add other paths as needed
  ],
};