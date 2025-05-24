'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ALLOWED_EMAIL_DOMAINS = [
  'iut-dhaka.edu',
  'du.ac.bd',
  // Add more university domains as needed
];

export default function UniversityEmailCheck() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      const email = user.primaryEmailAddress?.emailAddress;
      if (email) {
        const emailDomain = email.split('@')[1];
        if (!ALLOWED_EMAIL_DOMAINS.includes(emailDomain)) {
          router.push('/unauthorized');
        }
      }
    }
  }, [isLoaded, user, router]);

  return null;
} 