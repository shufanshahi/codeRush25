import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-destructive">Access Denied</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          This platform is exclusively for university students. Please use your university email address to sign up.
        </p>
        <div className="space-x-4">
          <SignOutButton>
            <button className="rounded-md bg-destructive px-4 py-2 text-destructive-foreground hover:bg-destructive/90">
              Sign Out
            </button>
          </SignOutButton>
          <Link
            href="/"
            className="inline-block rounded-md border border-input bg-background px-4 py-2 hover:bg-accent hover:text-accent-foreground"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
} 