"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/marketplace",
    label: "Marketplace",
  },
  {
    href: "/services",
    label: "Services",
  },
  {
    href: "/about",
    label: "About",
  },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 w-full z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              StudentMarket
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="text-sm font-medium text-gray-900 transition-colors hover:text-primary"
              >
                {route.label}
              </Link>
            ))}
            <Button className="bg-primary text-white hover:bg-primary/90">Sign In</Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-900" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {routes.map((route) => (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="text-sm font-medium text-gray-900 transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  ))}
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">Sign In</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  )
} 