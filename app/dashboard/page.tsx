'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'
import AnalyticsCards from '@/components/dashboard/analytics-cards'
import ConversionChart from '@/components/dashboard/conversion-chart'
import RecentConversions from '@/components/dashboard/recent-conversions'

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="p-8 space-y-8">
            {/* Page Header */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your conversion overview.</p>
            </div>

            {/* Analytics Cards */}
            <AnalyticsCards />

            {/* Charts and Data */}
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ConversionChart />
              </div>
              
              <div className="space-y-4">
                <Card className="bg-accent/5 border-accent/20">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Compliance Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">All Verified</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4">Your organization and all conversions are audit-ready.</p>
                    <Button variant="outline" size="sm" className="w-full">
                      View Audit Trail
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button className="w-full justify-start" size="sm">
                        New Conversion
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
                        Download Report
                      </Button>
                      <Button variant="outline" className="w-full justify-start" size="sm">
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
