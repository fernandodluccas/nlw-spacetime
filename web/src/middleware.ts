import { Cookie } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";

const signInUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`;

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token) {
    return NextResponse.redirect(signInUrl,{
        headers: {
            'Set-Cookie': `redirectTo=${request.url}; Path=/; max-age=60; HttpOnly;`,
        }
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/memories/:path*",
};
