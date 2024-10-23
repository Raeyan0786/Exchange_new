import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

type Middleware = (request: NextRequest) => NextResponse

export const WHITE_LIST_URL = [
  '/signup',
  '/about-us',
  '/admin-forgot-password',
  '/admin-reset-password',
  '/token-expired',
]

const LOGIN_SIGNUP_URL = ['/login']

const redirectIfAuthenticated: Middleware = (request) => {
  const authSession = request.cookies.get('token')?.value

  if (authSession) {
    const response = NextResponse.redirect(
      new URL('/', request.url),
    )
    return response
  }

  return NextResponse.next()
}

const authenticated: Middleware = (request) => {
  const authSession = request.cookies?.get('token')?.value

  const redirectUrl =
    request.nextUrl.pathname + '?' + request.nextUrl.searchParams.toString()

  if (!authSession) {
    const response = NextResponse.redirect(new URL('/login', request.url))
    return response
  }

  return NextResponse.next()
}

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  

  if (WHITE_LIST_URL.includes(pathname)) {
    return NextResponse.next()
  }

  if (LOGIN_SIGNUP_URL.includes(pathname)) {
    return redirectIfAuthenticated(request)
  } else {
    return authenticated(request)
  }
}

export const config = {
  matcher: '/((?!api|static|_next).*)',
}
