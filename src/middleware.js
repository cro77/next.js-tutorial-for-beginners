import NextAuth from 'next-auth';

import { autentKonfig } from './lib/auth.config';

export default NextAuth(autentKonfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"]
};