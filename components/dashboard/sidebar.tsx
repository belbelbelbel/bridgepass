'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, ArrowRightLeft, Wallet, FileText, Settings, LogOut, ChevronRight, HelpCircle } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function DashboardSidebar() {
  const pathname = usePathname()

  const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/dashboard/convert', label: 'Convert Now', icon: ArrowRightLeft },
    { href: '/dashboard/wallets', label: 'Wallets', icon: Wallet },
    { href: '/dashboard/reports', label: 'Audit Reports', icon: FileText },
    { href: '/dashboard/settings', label: 'Settings', icon: Settings }
  ]

  const supportItems = [
    { href: '/support', label: 'Help & Support', icon: HelpCircle }
  ]

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">N</span>
          </div>
          <div>
            <p className="font-bold text-foreground">Naira Bridge</p>
            <p className="text-xs text-muted-foreground">NGO Platform</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-auto">
        {menuItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <div
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-muted'
              )}
            >
              <item.icon className="w-4 h-4" />
              <span className="flex-1">{item.label}</span>
              {pathname === item.href && <ChevronRight className="w-4 h-4" />}
            </div>
          </Link>
        ))}

        {/* Support Section */}
        <div className="pt-4 mt-4 border-t border-border">
          {supportItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <div
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-sm font-medium',
                  pathname === item.href
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:bg-muted'
                )}
              >
                <item.icon className="w-4 h-4" />
                <span className="flex-1">{item.label}</span>
                {pathname === item.href && <ChevronRight className="w-4 h-4" />}
              </div>
            </Link>
          ))}
        </div>
      </nav>

      {/* User Profile */}
      <div className="border-t border-border p-4 space-y-3">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarFallback className="bg-accent text-accent-foreground">EB</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Education First</p>
            <p className="text-xs text-muted-foreground truncate">NGO Admin</p>
          </div>
        </div>
        <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors">
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>
    </aside>
  )
}
