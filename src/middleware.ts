import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === request.nextUrl.pathname.toLowerCase())
    return NextResponse.next();

  return NextResponse.redirect(
    new URL(request.nextUrl.origin + request.nextUrl.pathname.toLowerCase())
  );
}

export const config = {
  matcher: '/champions/:champion*',
};
