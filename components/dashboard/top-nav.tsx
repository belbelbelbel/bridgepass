'use client'

import Link from 'next/link'
import { Bell, HelpCircle, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function TopNav() {
  // In a real app, this would come from a state/context or API
  const unreadCount = 4 // Mock unread count

  return (
    <header className="border-b border-border bg-card px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
      <div className="min-w-0">
        <h2 className="text-xs sm:text-sm text-muted-foreground">Today</h2>
        <p className="text-xs text-muted-foreground mt-1 hidden sm:block">Last updated 2 minutes ago</p>
      </div>
      
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="/support">
          <Button variant="ghost" size="icon" title="Help & Support">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
          </Button>
        </Link>
        <Link href="/dashboard/notifications">
          <Button variant="ghost" size="icon" title="Notifications" className="relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            {unreadCount > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 text-white text-xs border-0"
              >
                {unreadCount > 9 ? '9+' : unreadCount}
              </Badge>
            )}
          </Button>
        </Link>
        <Link href="/dashboard/settings">
          <Button variant="ghost" size="icon" title="Settings">
            <Settings className="w-5 h-5 text-muted-foreground" />
          </Button>
        </Link>
      </div>
    </header>
  )
}
