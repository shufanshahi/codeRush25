import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="text-xl font-bold">
            Student Marketplace
          </Link>
          <nav className="flex items-center gap-4">
            <SignedIn>
              <Link href="/dashboard" className="hover:text-primary">
                Dashboard
              </Link>
              <Link href="/listings" className="hover:text-primary">
                Browse Listings
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode="modal">
                <button className="rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-4xl font-bold">
            Welcome to Student Marketplace
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            A secure platform exclusively for university students to buy, sell, and exchange items and services.
          </p>
          <SignedOut>
            <SignUpButton mode="modal">
              <button className="rounded-md bg-primary px-6 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90">
                Get Started
              </button>
            </SignUpButton>
          </SignedOut>
        </section>
      </main>
    </div>
  );
}