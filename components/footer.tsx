import Link from 'next/link'
import { DollarSign } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">N</span>
              </div>
              <span className="font-bold">Naira Bridge</span>
            </div>
            <p className="text-sm text-muted-foreground">Transparent currency conversion for NGOs</p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Features</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Pricing</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Security</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Compliance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">About</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Blog</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Careers</Link></li>
              <li><Link href="mailto:support@nairabridge.com" className="text-sm text-muted-foreground hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/support" className="text-sm text-muted-foreground hover:text-foreground">Help Center</Link></li>
              <li><Link href="/support/tickets/new" className="text-sm text-muted-foreground hover:text-foreground">Support</Link></li>
              <li><Link href="/support/chat" className="text-sm text-muted-foreground hover:text-foreground">Live Chat</Link></li>
              <li><Link href="#faq" className="text-sm text-muted-foreground hover:text-foreground">FAQ</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Privacy</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Terms</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Compliance</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-foreground">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Naira Bridge. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="#" className="text-muted-foreground hover:text-foreground">Twitter</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">GitHub</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
