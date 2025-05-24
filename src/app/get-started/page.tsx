import { SignedIn, SignedOut, RedirectToSignUp } from '@clerk/nextjs'
import { BookOpen, MessageSquare, Shield, Users } from "lucide-react"

export default function GetStartedPage() {
  return (
    <>
      <SignedOut>
        <RedirectToSignUp />
      </SignedOut>
      <SignedIn>
        <main className="min-h-screen bg-white flex flex-col items-center justify-center">
          <section className="py-16 bg-gray-800 w-full">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-white">Platform Features</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="bg-white/90 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Verified Students</h3>
                  <p className="text-gray-700">
                    Only verified university students can join, ensuring a safe and trusted community.
                  </p>
                </div>
                <div className="bg-white/90 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Listings</h3>
                  <p className="text-gray-700">
                    List items and services with flexible pricing options and university-specific visibility.
                  </p>
                </div>
                <div className="bg-white/90 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Real-Time Chat</h3>
                  <p className="text-gray-700">
                    Communicate directly with buyers and sellers through our secure messaging system.
                  </p>
                </div>
                <div className="bg-white/90 p-6 rounded-lg shadow-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Community Driven</h3>
                  <p className="text-gray-700">
                    Student moderators ensure platform integrity and maintain a positive environment.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </SignedIn>
    </>
  )
} 