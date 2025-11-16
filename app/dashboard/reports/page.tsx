'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'
import { Download, Filter, Share2, FileText, BarChart3 } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function ReportsPage() {
  const [dateRange, setDateRange] = useState('month')

  const auditLogs = [
    {
      id: 1,
      date: '2025-01-15',
      time: '14:32:00',
      action: 'Conversion',
      details: 'USD 50,000 → NGN 81,025,000',
      user: 'admin@ngo.org',
      status: 'Success',
      rate: '₦1,620.50'
    },
    {
      id: 2,
      date: '2025-01-14',
      time: '10:15:30',
      action: 'Report Generated',
      details: 'Monthly Audit Report',
      user: 'finance@ngo.org',
      status: 'Success',
      rate: 'N/A'
    },
    {
      id: 3,
      date: '2025-01-13',
      time: '16:45:12',
      action: 'User Access',
      details: 'Dashboard Login',
      user: 'director@ngo.org',
      status: 'Success',
      rate: 'N/A'
    },
    {
      id: 4,
      date: '2025-01-12',
      time: '09:20:45',
      action: 'Conversion',
      details: 'EUR 30,000 → NGN 56,707,500',
      user: 'admin@ngo.org',
      status: 'Success',
      rate: '₦1,890.25'
    },
    {
      id: 5,
      date: '2025-01-11',
      time: '13:10:22',
      action: 'Report Downloaded',
      details: 'Compliance Report - PDF',
      user: 'compliance@ngo.org',
      status: 'Success',
      rate: 'N/A'
    }
  ]

  const reports = [
    {
      name: 'Monthly Audit Report - January 2025',
      generated: '2025-01-15',
      size: '2.4 MB',
      conversions: 24,
      totalVolume: '₦450,250,000'
    },
    {
      name: 'Monthly Audit Report - December 2024',
      generated: '2024-12-31',
      size: '2.1 MB',
      conversions: 21,
      totalVolume: '₦385,150,000'
    },
    {
      name: 'Quarterly Compliance Report Q4 2024',
      generated: '2024-12-31',
      size: '5.8 MB',
      conversions: 62,
      totalVolume: '₦1,125,500,000'
    }
  ]

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="p-8 space-y-8">
            {/* Header */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Audit Reports & Compliance</h1>
              <p className="text-muted-foreground">Download detailed conversion logs and compliance reports for donor transparency</p>
            </div>

            {/* Generate Report Section */}
            <Card className="bg-accent/5 border-accent/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Generate Custom Report
                </CardTitle>
                <CardDescription>Create a new audit report for a specific date range</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Date Range</label>
                    <select
                      value={dateRange}
                      onChange={(e) => setDateRange(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background"
                    >
                      <option value="week">This Week</option>
                      <option value="month">This Month</option>
                      <option value="quarter">This Quarter</option>
                      <option value="year">This Year</option>
                      <option value="custom">Custom Range</option>
                    </select>
                  </div>

                  <div className="flex-1">
                    <label className="block text-sm font-medium mb-2">Format</label>
                    <select className="w-full px-4 py-2 border border-border rounded-lg bg-background">
                      <option value="pdf">PDF Report</option>
                      <option value="csv">CSV Export</option>
                      <option value="excel">Excel Workbook</option>
                    </select>
                  </div>

                  <div className="flex items-end">
                    <Button className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Generate Report
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>Recent Reports</span>
                  <Filter className="w-4 h-4 text-muted-foreground" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {reports.map((report, idx) => (
                    <div
                      key={idx}
                      className="p-4 border border-border rounded-lg hover:border-accent/50 hover:bg-muted/30 transition-all"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-start gap-3 flex-1">
                          <FileText className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <div>
                            <h3 className="font-semibold">{report.name}</h3>
                            <p className="text-xs text-muted-foreground">
                              Generated {report.generated} • {report.size}
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline">{report.conversions} conversions</Badge>
                      </div>

                      <div className="flex items-center justify-between pl-8">
                        <div className="text-sm">
                          <span className="text-muted-foreground">Total Volume: </span>
                          <span className="font-semibold">{report.totalVolume}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-1" />
                            Download
                          </Button>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-1" />
                            Share
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Audit Log */}
            <Card>
              <CardHeader>
                <CardTitle>Complete Audit Log</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead>Details</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Rate/Info</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {auditLogs.map((log) => (
                      <TableRow key={log.id} className="border-border hover:bg-muted/50">
                        <TableCell className="font-mono text-xs">
                          {log.date} {log.time}
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{log.action}</Badge>
                        </TableCell>
                        <TableCell className="font-medium">{log.details}</TableCell>
                        <TableCell className="text-sm">{log.user}</TableCell>
                        <TableCell className="font-mono text-xs">{log.rate}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            {log.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
