'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'
import { ArrowUp, ArrowDown, Eye, EyeOff, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'

export default function WalletsPage() {
  const [showBalances, setShowBalances] = useState(true)

  const wallets = [
    {
      currency: 'USD',
      flag: '🇺🇸',
      balance: 125500.50,
      converted: '203.55M NGN',
      rate: '₦1,620.50/USD'
    },
    {
      currency: 'EUR',
      flag: '🇪🇺',
      balance: 85200.75,
      converted: '161.30M NGN',
      rate: '₦1,890.25/EUR'
    },
    {
      currency: 'GBP',
      flag: '🇬🇧',
      balance: 42150.00,
      converted: '86.58M NGN',
      rate: '₦2,050.75/GBP'
    },
    {
      currency: 'NGN',
      flag: '🇳🇬',
      balance: 450750000,
      converted: 'Home Currency',
      rate: 'N/A'
    },
    {
      currency: 'USDT',
      flag: '💳',
      balance: 95000.00,
      converted: '153.89M NGN',
      rate: '₦1,619.80/USDT'
    }
  ]

  const recentTransactions = [
    {
      id: 1,
      date: '2025-01-15',
      type: 'conversion',
      from: 'USD 50,000',
      to: 'NGN 81,025,000',
      status: 'completed'
    },
    {
      id: 2,
      date: '2025-01-14',
      type: 'withdrawal',
      from: 'NGN 45,000,000',
      to: 'Bank Account',
      status: 'completed'
    },
    {
      id: 3,
      date: '2025-01-13',
      type: 'deposit',
      from: 'Bank Wire',
      to: 'EUR 30,000',
      status: 'completed'
    },
    {
      id: 4,
      date: '2025-01-12',
      type: 'conversion',
      from: 'GBP 25,000',
      to: 'NGN 51,268,750',
      status: 'completed'
    }
  ]

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold">Wallets</h1>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setShowBalances(!showBalances)}
                >
                  {showBalances ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </Button>
              </div>
              <p className="text-muted-foreground">Manage your multi-currency wallets and transactions</p>
            </div>

            {/* Wallet Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
              {wallets.map((wallet, idx) => (
                <Card key={idx} className="animate-slide-in-up hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <span className="text-2xl">{wallet.flag}</span>
                      <Badge variant="outline">{wallet.currency}</Badge>
                    </div>

                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Balance</p>
                      <p className="text-2xl font-bold mb-4">
                        {showBalances
                          ? `${wallet.balance.toLocaleString('en-NG', { maximumFractionDigits: 2 })} ${wallet.currency}`
                          : '•••••'
                        }
                      </p>

                      <p className="text-xs text-muted-foreground mb-3">{wallet.rate}</p>

                      {wallet.currency !== 'NGN' && (
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" className="flex-1">
                            <Plus className="w-3 h-3 mr-1" />
                            Add
                          </Button>
                          <Button size="sm" variant="outline" className="flex-1">
                            <ArrowUp className="w-3 h-3 mr-1" />
                            Send
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Recent Transactions */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-border">
                      <TableHead>Date</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>From</TableHead>
                      <TableHead>To</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id} className="border-border hover:bg-muted/50">
                        <TableCell className="font-medium">{transaction.date}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="capitalize">
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell>{transaction.from}</TableCell>
                        <TableCell>{transaction.to}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-100 text-green-800 border-green-200">
                            Completed
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
