import Link from 'next/link'
import { DollarSign } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-primary-foreground font-bold text-sm">N</span>
              </div>
              <span className="font-bold text-sm sm:text-base">Naira Bridge</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">Transparent currency conversion for NGOs</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Security</Link></li>
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Compliance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="mailto:support@nairabridge.com" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Resources</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/support" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Help Center</Link></li>
              <li><Link href="/support/tickets/new" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Support</Link></li>
              <li><Link href="/support/chat" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Live Chat</Link></li>
              <li><Link href="#faq" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Privacy</Link></li>
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Compliance</Link></li>
              <li><Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">© 2025 Naira Bridge. All rights reserved.</p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">Twitter</Link>
              <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">LinkedIn</Link>
              <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-foreground">GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
