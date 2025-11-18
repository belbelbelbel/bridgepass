'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const offset = 80 // Account for sticky navbar height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
      setIsOpen(false) // Close mobile menu
    }
  }

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-foreground hidden sm:inline">Naira Bridge</span>
          </Link>
          <div className="hidden md:flex  items-center gap-8">
            <Link 
              href="#how-it-works" 
              onClick={(e) => handleSmoothScroll(e, '#how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              How it Works
            </Link>
            <Link 
              href="#features" 
              onClick={(e) => handleSmoothScroll(e, '#features')}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              Pricing
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Compliance
            </Link>
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">
                Register
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-2 pt-4">
              <Link href="#how-it-works" className="px-4 py-2 text-muted-foreground hover:text-foreground">
                How it Works
              </Link>
              <Link href="#features" className="px-4 py-2 text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link href="#pricing" className="px-4 py-2 text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <div className="px-4 pt-4 flex flex-col gap-2">
                <Link href="/login">
                  <Button variant="outline" className="w-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/register">
                  <Button className="w-full">
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
