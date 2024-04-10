import { authMiddleware } from '@clerk/nextjs'
import createMiddleware from 'next-intl/middleware'

const intlMiddleware = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en',
})

export default authMiddleware({
  beforeAuth(request) {
    return intlMiddleware(request)
  },

  // Ensure that locale-specific sign in pages are public
  publicRoutes: ['/:locale', '/:locale/sign-in'],
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(de|en)/:path*'],
}
