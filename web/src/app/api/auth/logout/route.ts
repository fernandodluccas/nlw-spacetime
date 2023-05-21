import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'
import { URL } from 'url'

export async function GET(request: NextRequest) {
 
  const redirectUrl = new URL('/', request.url)


  return NextResponse.redirect(redirectUrl, {
    headers: {
      'Set-Cookie': `token=; Path=/; max-age=0;`,
    },
  })
}
