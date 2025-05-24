import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import UniversityEmailCheck from '@/components/UniversityEmailCheck';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Student Marketplace',
  description: 'A secure marketplace exclusively for university students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <UniversityEmailCheck />
          <main className="min-h-screen bg-background">
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
