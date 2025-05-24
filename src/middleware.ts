import { clerkMiddleware } from '@clerk/nextjs/server';

// List of allowed university email domains
const ALLOWED_EMAIL_DOMAINS = [
  'iut-dhaka.edu',
  'du.ac.bd',
  // Add more university domains as needed
];

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};