'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'
import RateLockTimer from '@/components/dashboard/rate-lock-timer'
import { ArrowRightLeft, CheckCircle2, TrendingUp, AlertCircle } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const exchangeRates = {
  USD: { rate: 1620.50, bankRate: 1550, change: 0.8 },
  EUR: { rate: 1890.25, bankRate: 1800, change: 1.2 },
  GBP: { rate: 2050.75, bankRate: 1950, change: 0.5 },
  USDT: { rate: 1619.80, bankRate: 1548, change: 0.9 }
}

export default function ConvertPage() {
  const [fromCurrency, setFromCurrency] = useState('USD')
  const [amount, setAmount] = useState('')
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const currentRate = exchangeRates[fromCurrency as keyof typeof exchangeRates]
  const ngnAmount = amount ? parseFloat(amount) * currentRate.rate : 0
  const bankAmount = amount ? parseFloat(amount) * currentRate.bankRate : 0
  const saved = ngnAmount - bankAmount

  const handleConvert = () => {
    setShowConfirmation(true)
  }

  const handleConfirm = () => {
    setShowConfirmation(false)
    setShowSuccess(true)
    setTimeout(() => {
      setShowSuccess(false)
      setAmount('')
    }, 3000)
  }

  if (showSuccess) {
    return (
      <div className="flex h-screen bg-background">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNav />
          <main className="flex-1 overflow-auto flex items-center justify-center">
            <div className="text-center animate-slide-in-up">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold mb-2">Conversion Successful!</h1>
              <p className="text-muted-foreground mb-8">
                ₦{ngnAmount.toLocaleString('en-NG', { maximumFractionDigits: 0 })} has been transferred to your NGN wallet.
              </p>
              <Button onClick={() => setShowSuccess(false)}>
                View Dashboard
              </Button>
            </div>
          </main>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="p-8 max-w-2xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Convert Currency</h1>
              <p className="text-muted-foreground">Lock in rates and convert your foreign donations instantly</p>
            </div>

            <Card className="animate-slide-in-up">
              <CardHeader>
                <CardTitle>Enter Conversion Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Currency Selector and Amount */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">From Currency</label>
                    <select
                      value={fromCurrency}
                      onChange={(e) => setFromCurrency(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-accent/50"
                    >
                      {Object.keys(exchangeRates).map(currency => (
                        <option key={currency} value={currency}>{currency}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Amount</label>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                </div>

                {/* Rate Information */}
                {amount && (
                  <div className="space-y-4 p-4 bg-accent/5 border border-accent/20 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Current Rate</span>
                      <span className="font-mono font-bold text-lg">₦{currentRate.rate.toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">You Receive (NGN)</span>
                      <span className="font-mono font-bold text-xl text-accent">
                        ₦{ngnAmount.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                      </span>
                    </div>

                    <div className="border-t border-accent/20 pt-4 flex justify-between items-center">
                      <span className="text-muted-foreground">Bank would give you</span>
                      <span className="font-mono text-sm text-muted-foreground line-through">
                        ₦{bankAmount.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                      </span>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded p-3 flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-green-900">
                          You save ₦{saved.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                        </p>
                        <p className="text-sm text-green-700">
                          {((saved / bankAmount) * 100).toFixed(1)}% better than banks
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Rate Lock Timer */}
                <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
                  <span className="text-sm font-medium">Rate Lock Expires In</span>
                  <RateLockTimer />
                </div>

                {/* Action Button */}
                <Button
                  onClick={handleConvert}
                  disabled={!amount || parseFloat(amount) <= 0}
                  className="w-full"
                  size="lg"
                >
                  <ArrowRightLeft className="w-4 h-4 mr-2" />
                  Proceed to Confirmation
                </Button>
              </CardContent>
            </Card>

            {/* Confirmation Modal */}
            {showConfirmation && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                <Card className="w-full max-w-md animate-slide-in-up">
                  <CardHeader>
                    <CardTitle>Confirm Conversion</CardTitle>
                    <CardDescription>Review details before proceeding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">From</span>
                        <span className="font-bold">{amount} {fromCurrency}</span>
                      </div>
                      <div className="flex justify-between text-lg">
                        <span className="text-muted-foreground">To</span>
                        <span className="font-bold text-accent">
                          ₦{ngnAmount.toLocaleString('en-NG', { maximumFractionDigits: 0 })}
                        </span>
                      </div>
                      <div className="border-t border-border pt-3 flex justify-between">
                        <span className="text-muted-foreground">Rate</span>
                        <span className="font-mono">1 {fromCurrency} = ₦{currentRate.rate.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded p-3 flex items-start gap-2">
                      <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-yellow-800">
                        Rate lock expires in 30 minutes. Confirm now to lock this rate.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setShowConfirmation(false)}
                      >
                        Cancel
                      </Button>
                      <Button
                        className="flex-1"
                        onClick={handleConfirm}
                      >
                        Confirm & Convert
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}
