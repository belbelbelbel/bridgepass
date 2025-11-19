'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { LayoutDashboard, ArrowRightLeft, Wallet, FileText, Settings, LogOut, ChevronRight, HelpCircle, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function DashboardSidebar() {
  const pathname = usePathname()
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/convert', label: 'Convert Now', icon: ArrowRightLeft },
    { href: '/dashboard/wallets', label: 'Wallets', icon: Wallet },
    // { href: '/dashboard/reports', label: 'Audit Reports', icon: FileText },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings },
    { href: '/dashboard/compliance', label: 'Compliance', icon: FileText }
  ]

  const supportItems = [
    { href: '/support', label: 'Help & Support', icon: HelpCircle }
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-card border border-border rounded-lg shadow-lg"
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside className={cn(
        "fixed lg:static inset-y-0 left-0 w-64 border-r border-border bg-card flex flex-col z-40 transform transition-transform duration-300 ease-in-out",
        isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
      {/* Logo */}
      <div className="p-4 sm:p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-sm sm:text-base">N</span>
          </div>
          <div className="min-w-0">
            <p className="font-bold text-foreground text-sm sm:text-base truncate">Naira Bridge</p>
            <p className="text-xs text-muted-foreground hidden sm:block">NGO Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 sm:p-4 space-y-1 sm:space-y-2 overflow-auto">
        {menuItems.map((item) => (
          <Link 
            key={item.href} 
            href={item.href}
            onClick={() => setIsMobileOpen(false)}
          >
            <div
              className={cn(
                'flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm font-medium',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted'
              )}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1 truncate">{item.label}</span>
              {pathname === item.href && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
            </div>
          </Link>
        ))}

        {/* Support Section */}
        <div className="pt-3 sm:pt-4 mt-3 sm:mt-4 border-t border-border">
          {supportItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              onClick={() => setIsMobileOpen(false)}
            >
              <div
                className={cn(
                  'flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg transition-colors text-sm font-medium',
                  pathname === item.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted'
                )}
              >
                <item.icon className="w-4 h-4 flex-shrink-0" />
                <span className="flex-1 truncate">{item.label}</span>
                {pathname === item.href && <ChevronRight className="w-4 h-4 flex-shrink-0" />}
              </div>
            </Link>
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="border-t border-border p-3 sm:p-4 space-y-2 sm:space-y-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
            <AvatarFallback className="bg-accent text-accent-foreground text-xs sm:text-sm">EB</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-xs sm:text-sm font-medium truncate">Education First</p>
            <p className="text-xs text-muted-foreground truncate hidden sm:block">NGO Admin</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors">
          <LogOut className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
    </>
  )
}
