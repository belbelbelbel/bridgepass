'use client'

import { useState } from 'react'
import { Download, FileText, Filter, Calendar, Share2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'
import KYCStatus from '@/components/kyc-status'
import DocumentsLibrary from '@/components/documents-library'
import ComplianceChecklist from '@/components/compliance-checklist'

export default function CompliancePage() {
  const [dateRange, setDateRange] = useState({ start: '', end: '' })

  const auditReports = [
    {
      id: 1,
      period: 'January 2025',
      transactions: 156,
      volume: '$125,450.00',
      savings: '$18,750.00',
      status: 'completed',
      date: '2025-01-31'
    },
    {
      id: 2,
      period: 'December 2024',
      transactions: 143,
      volume: '$98,320.50',
      savings: '$14,250.00',
      status: 'completed',
      date: '2024-12-31'
    },
    {
      id: 3,
      period: 'November 2024',
      transactions: 128,
      volume: '$76,850.25',
      savings: '$11,580.00',
      status: 'completed',
      date: '2024-11-30'
    },
  ]

  const fxRateLogs = [
    { date: '2025-01-17', rate: 1520.50, volume: '$5,000', source: 'Manual lock', status: 'locked' },
    { date: '2025-01-16', rate: 1518.25, volume: '$3,500', source: 'Automated', status: 'completed' },
    { date: '2025-01-15', rate: 1525.00, volume: '$2,500', source: 'Manual lock', status: 'locked' },
    { date: '2025-01-14', rate: 1522.75, volume: '$8,000', source: 'Automated', status: 'completed' },
  ]

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
            {/* Header */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">Compliance & Audit Reports</h1>
              <p className="text-sm sm:text-base text-muted-foreground">Download compliance documents and audit reports for transparency</p>
            </div>

            <Tabs defaultValue="status" className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 mb-4 sm:mb-6">
                <TabsTrigger value="status" className="text-xs sm:text-sm">KYC Status</TabsTrigger>
                <TabsTrigger value="audit" className="text-xs sm:text-sm">Audit Reports</TabsTrigger>
                <TabsTrigger value="fx" className="text-xs sm:text-sm">FX Rates</TabsTrigger>
                <TabsTrigger value="documents" className="text-xs sm:text-sm">Documents</TabsTrigger>
              </TabsList>

              {/* KYC Status Tab */}
              <TabsContent value="status" className="mt-4 sm:mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                  <div className="lg:col-span-2">
                    <ComplianceChecklist />
                  </div>
                  <div>
                    <KYCStatus />
                  </div>
                </div>
              </TabsContent>

              {/* Audit Reports Tab */}
              <TabsContent value="audit" className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-foreground">Monthly Audit Reports</h2>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Download detailed reports for each month</p>
                      </div>
                      <div className="flex gap-2 w-full sm:w-auto">
                        <Button size="sm" variant="outline" className="flex-1 sm:flex-none text-xs sm:text-sm">
                          <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Filter
                        </Button>
                        <Button size="sm" className="flex-1 sm:flex-none text-xs sm:text-sm">
                          <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Export All
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      {auditReports.map((report) => (
                        <div key={report.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                            <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm sm:text-base font-medium text-foreground truncate">{report.period} Audit Report</p>
                              <div className="flex flex-wrap gap-2 sm:gap-4 mt-1 text-xs text-muted-foreground">
                                <span>{report.transactions} transactions</span>
                                <span>Volume: {report.volume}</span>
                                <span className="text-green-600">Saved: {report.savings}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 w-full sm:w-auto">
                            <Button size="sm" variant="outline" className="flex-1 sm:flex-none text-xs">PDF</Button>
                            <Button size="sm" variant="outline" className="flex-1 sm:flex-none text-xs">CSV</Button>
                            <Button size="sm" className="flex-1 sm:flex-none text-xs">
                              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Donor Share Section */}
                <Card className="bg-accent/5 border-accent/20">
                  <CardContent className="p-4 sm:p-6">
                    <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4 flex items-center gap-2">
                      <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                      Share with Donors
                    </h2>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Generate shareable compliance reports for donor transparency</p>
                    <Button size="sm" className="text-xs sm:text-sm">
                      <Share2 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Generate Donor Report
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* FX Rates Tab */}
              <TabsContent value="fx" className="mt-4 sm:mt-6 space-y-4 sm:space-y-6">
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold text-foreground">FX Rate Logs</h2>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Historical FX rates and conversion records</p>
                      </div>
                      <Button size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                        <Download className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Export
                      </Button>
                    </div>

                    {/* Date Range Filter */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                      <div>
                        <label className="text-xs sm:text-sm font-medium text-foreground">From</label>
                        <Input 
                          type="date" 
                          value={dateRange.start} 
                          onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })} 
                          className="mt-1 sm:mt-2 text-xs sm:text-sm" 
                        />
                      </div>
                      <div>
                        <label className="text-xs sm:text-sm font-medium text-foreground">To</label>
                        <Input 
                          type="date" 
                          value={dateRange.end} 
                          onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })} 
                          className="mt-1 sm:mt-2 text-xs sm:text-sm" 
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      {fxRateLogs.map((log, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 p-3 sm:p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                            <div className="p-2 sm:p-3 bg-primary/10 rounded-lg flex-shrink-0">
                              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm sm:text-base font-medium text-foreground">{log.date}</p>
                              <div className="flex flex-wrap gap-2 sm:gap-4 mt-1 text-xs text-muted-foreground">
                                <span>Rate: ₦{log.rate.toFixed(2)}</span>
                                <span>Volume: {log.volume}</span>
                                <span>{log.source}</span>
                              </div>
                            </div>
                          </div>
                          <div className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${
                            log.status === 'locked' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'
                          }`}>
                            {log.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Documents Tab */}
              <TabsContent value="documents" className="mt-4 sm:mt-6">
                <DocumentsLibrary />
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}
