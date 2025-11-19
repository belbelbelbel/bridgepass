'use client'

import { useState, useEffect, Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { X, CheckCircle2, Sparkles } from 'lucide-react'
import Link from 'next/link'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'
import AnalyticsCards from '@/components/dashboard/analytics-cards'
import ConversionChart from '@/components/dashboard/conversion-chart'
import RecentConversions from '@/components/dashboard/recent-conversions'
import { useSearchParams } from 'next/navigation'

function DashboardContent() {
  const searchParams = useSearchParams()
  const [showWelcome, setShowWelcome] = useState(false)

  useEffect(() => {
    // Show welcome message if coming from registration or first time
    const fromRegistration = searchParams.get('fromRegistration') === 'true'
    const welcomeDismissed = localStorage.getItem('dashboardWelcomeDismissed')
    
    if (fromRegistration || (!welcomeDismissed && !fromRegistration)) {
      setShowWelcome(true)
    }
  }, [searchParams])

  const dismissWelcome = () => {
    setShowWelcome(false)
    localStorage.setItem('dashboardWelcomeDismissed', 'true')
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
            {/* Welcome Banner */}
            {showWelcome && (
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-lg p-4 sm:p-6 relative">
                <button
                  onClick={dismissWelcome}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 text-foreground/50 hover:text-foreground transition-colors"
                  aria-label="Dismiss welcome message"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <div className="flex items-start gap-3 sm:gap-4 pr-8">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                      <span>Welcome to Naira Bridge!</span>
                    </h3>
                    <p className="text-sm sm:text-base text-foreground/70 mb-3">
                      {searchParams.get('fromRegistration') === 'true' 
                        ? "Your registration is being reviewed. You can explore the dashboard while we verify your organization details. We'll notify you once your account is fully activated."
                        : "Get started by converting your first donation, managing wallets, or exploring audit reports. Need help? Check out the quick actions below or contact support."}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link href="/support">
                        <Button size="sm" variant="outline" className="text-xs">
                          View Tutorial
                        </Button>
                      </Link>
                      <Link href="/support/tickets/new">
                        <Button size="sm" variant="ghost" className="text-xs">
                          Contact Support
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Page Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Dashboard</h1>
              <p className="text-sm sm:text-base text-muted-foreground">Welcome back! Here's your conversion overview.</p>
            </div>

            {/* Analytics Cards */}
            <AnalyticsCards />

            {/* Charts and Data */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <div className="lg:col-span-2">
                <ConversionChart />
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                <Card className="bg-accent/5 border-accent/20">
                  <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg">Compliance Status</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm font-medium">All Verified</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3 sm:mb-4">Your organization and all conversions are audit-ready.</p>
                    <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                      View Audit Trail
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-6">
                    <CardTitle className="text-base sm:text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-2">
                      <Button className="w-full justify-start text-xs sm:text-sm" size="sm">
                        New Conversion
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-xs sm:text-sm" size="sm">
                        Download Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start text-xs sm:text-sm" size="sm">
                        View Wallets
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Recent Conversions */}
            <RecentConversions />
          </div>
        </main>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <Suspense fallback={
      <div className="flex h-screen bg-background">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNav />
          <main className="flex-1 overflow-auto flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading...</p>
            </div>
          </main>
        </div>
      </div>
    }>
      <DashboardContent />
    </Suspense>
  )
}
