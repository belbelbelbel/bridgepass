import { Bell, HelpCircle, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function TopNav() {
  return (
    <header className="border-b border-border bg-card px-8 py-4 flex items-center justify-between">
      <div>
        <h2 className="text-sm text-muted-foreground">Today</h2>
        <p className="text-xs text-muted-foreground mt-1">Last updated 2 minutes ago</p>
      </div>
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon">
          <HelpCircle className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5 text-muted-foreground" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5 text-muted-foreground" />
        </Button>
      </div>
    </header>
  )
}
