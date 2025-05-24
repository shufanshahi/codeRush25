import { SignedIn,SignedOut,SignInButton,SignOutButton } from '@clerk/nextjs'
import React from 'react'
import { Navbar } from "@/components/ui/navbar"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, MessageSquare, Shield, Users } from "lucide-react"

const HomePage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            The Student-Driven Marketplace
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Buy, sell, and exchange with trusted university peers. A secure platform designed exclusively for students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2 bg-primary text-white hover:bg-primary/90">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose StudentMarket?</h2>
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

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Join?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Start buying, selling, and connecting with fellow students today.
          </p>
          <Button size="lg" className="gap-2 bg-primary text-white hover:bg-primary/90">
            Create Account <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}

export default HomePage