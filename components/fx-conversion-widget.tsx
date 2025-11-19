'use client'

import { useState } from 'react'
import { ArrowRightLeft, TrendingUp, Lock, AlertCircle, Clock } from 'lucide-react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import RateLockTimer from '@/components/dashboard/rate-lock-timer'

interface FXConversionWidgetProps {
  conversionData: any
  setConversionData: (data: any) => void
  onConversionSuccess?: (amount: string) => void
}

export default function FXConversionWidget({
  conversionData,
  setConversionData,
  onConversionSuccess
}: FXConversionWidgetProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [rateLockExpiresAt, setRateLockExpiresAt] = useState<Date | null>(null)
  const [rates, setRates] = useState({
    USD: 1620.50,
    EUR: 1750.25,
    GBP: 2030.75
  })

  // Calculate bank rate (4.5% less than our rate)
  const bankRate = (rate: number) => rate * 0.955

  // Mock live rates that update
  const getRate = (from: string, to: string) => {
    if (from === 'USD' && to === 'NGN') return rates.USD
    if (from === 'EUR' && to === 'NGN') return rates.EUR
    if (from === 'GBP' && to === 'NGN') return rates.GBP
    return 1
  }

  const currentRate = getRate(conversionData.fromCurrency, conversionData.toCurrency)
  const rateToUse = conversionData.lockedRate || currentRate
  const convertedAmount = conversionData.amount 
    ? (parseFloat(conversionData.amount) * rateToUse).toLocaleString('en-US', { maximumFractionDigits: 2 })
    : '0.00'
  
  const bankConvertedAmount = conversionData.amount
    ? (parseFloat(conversionData.amount) * bankRate(currentRate)).toLocaleString('en-US', { maximumFractionDigits: 2 })
    : '0.00'
  
  const savingsAmount = conversionData.amount
    ? ((parseFloat(conversionData.amount) * rateToUse) - (parseFloat(conversionData.amount) * bankRate(currentRate))).toLocaleString('en-US', { maximumFractionDigits: 2 })
    : '0.00'
  
  const savingsPercentage = 4.5

  const handleSwap = () => {
    if (conversionData.toCurrency === 'NGN') return
    setConversionData({
      ...conversionData,
      fromCurrency: conversionData.toCurrency,
      toCurrency: conversionData.fromCurrency
    })
  }

  const handleLockRate = () => {
    setIsLoading(true)
    setTimeout(() => {
      const expiresAt = new Date(Date.now() + 30 * 60 * 1000) // 30 minutes
      setRateLockExpiresAt(expiresAt)
      setConversionData({
        ...conversionData,
        lockedRate: currentRate
      })
      setIsLoading(false)
    }, 500)
  }

  const handleProceedToConfirmation = () => {
    if (!conversionData.amount) return
    setShowConfirmModal(true)
  }

  const handleConfirmConversion = () => {
    setIsLoading(true)
    setShowConfirmModal(false)
    
    setTimeout(() => {
      setIsLoading(false)
      if (onConversionSuccess) {
        onConversionSuccess(`₦${convertedAmount.replace(/,/g, '')}`)
      }
    }, 1000)
  }

  return (
    <>
      <div className="bg-white rounded-lg border border-border p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-primary mb-2">Enter Conversion Details</h2>
        </div>

        {/* Amount Input */}
        <div className="space-y-3 sm:space-y-4">
          <label className="block text-sm font-medium text-foreground">From Currency</label>
          <div className="flex gap-3 sm:gap-4">
            <div className="flex-1 relative">
              <input
                type="number"
                placeholder="0.00"
                value={conversionData.amount}
                onChange={(e) => setConversionData({ ...conversionData, amount: e.target.value })}
                className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-base sm:text-lg"
              />
              <select
                value={conversionData.fromCurrency}
                onChange={(e) => setConversionData({ ...conversionData, fromCurrency: e.target.value })}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background border-l border-border px-2 py-1 focus:outline-none text-foreground font-medium text-sm sm:text-base"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>

            <button
              onClick={handleSwap}
              disabled={conversionData.toCurrency !== 'NGN'}
              className="p-3 sm:p-4 border border-border rounded-lg hover:bg-background disabled:opacity-50 transition-colors flex-shrink-0"
            >
              <ArrowRightLeft className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </button>

            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="0.00"
                value={convertedAmount}
                readOnly
                className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-border rounded-lg bg-background text-base sm:text-lg text-foreground font-medium"
              />
              <div className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-foreground font-medium text-sm sm:text-base">
                NGN
              </div>
            </div>
          </div>
        </div>

        {/* Green Background Section with Rate Info */}
        {conversionData.amount && (
          <div className="bg-teal-50 rounded-lg p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* Rate Display */}
            <div className="space-y-3 sm:space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">Current Rate</p>
                <p className="text-lg sm:text-xl font-bold text-black">₦{rateToUse.toFixed(2)}</p>
              </div>

              <div className="space-y-2">
                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">You Receive (NGN)</p>
                  <p className="text-xl sm:text-2xl font-bold text-green-600">₦{convertedAmount}</p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm text-gray-600 mb-1">Bank would give you</p>
                  <p className="text-lg sm:text-xl font-medium text-gray-500 line-through">₦{bankConvertedAmount}</p>
                </div>
              </div>

              {/* Savings Box */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 sm:p-4">
                <div className="flex items-start gap-2 sm:gap-3">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-base sm:text-lg font-bold text-green-700">You save ₦{savingsAmount}</p>
                    <p className="text-xs sm:text-sm text-green-600 mt-1">{savingsPercentage}% better than banks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Rate Lock Timer */}
        {rateLockExpiresAt && (
          <div className="flex items-center justify-between p-3 sm:p-4 bg-white border border-border rounded-lg">
            <span className="text-sm sm:text-base font-medium text-foreground">Rate Lock Expires In</span>
            <RateLockTimer expiresAt={rateLockExpiresAt} />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <button
            onClick={handleLockRate}
            disabled={!conversionData.amount || isLoading || conversionData.lockedRate}
            className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 border border-primary text-primary rounded-lg hover:bg-primary/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-sm sm:text-base"
          >
            <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
            {conversionData.lockedRate ? 'Rate Locked' : 'Lock This Rate'}
          </button>

          <button
            onClick={handleProceedToConfirmation}
            disabled={!conversionData.amount || isLoading}
            className="flex-1 flex items-center justify-center gap-2 py-3 sm:py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all font-semibold text-sm sm:text-base"
          >
            <ArrowRightLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            {isLoading ? 'Processing...' : 'Proceed to Confirmation'}
          </button>
        </div>

        {/* Info Box */}
        <div className="p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg flex gap-2 sm:gap-3">
          <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-blue-900">
            <p className="font-semibold mb-1">Pro Tip: Lock Rates for Protection</p>
            <p>Locking a rate guarantees that exchange rate for 30 minutes. Perfect for large donations when you want to protect against currency fluctuations.</p>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      <Dialog open={showConfirmModal} onOpenChange={setShowConfirmModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl">Confirm Conversion</DialogTitle>
            <DialogDescription className="text-sm">
              Review details before proceeding.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">From</span>
                <span className="text-base sm:text-lg font-semibold text-green-600">
                  {parseFloat(conversionData.amount || '0').toLocaleString()} {conversionData.fromCurrency}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">To</span>
                <span className="text-base sm:text-lg font-semibold text-green-600">
                  ₦{convertedAmount}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Rate</span>
                <span className="text-sm sm:text-base font-medium">
                  1 {conversionData.fromCurrency} = ₦{rateToUse.toFixed(2)}
                </span>
              </div>
            </div>

            {rateLockExpiresAt && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
                <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-yellow-800">
                  Rate lock expires in 30 minutes. Confirm now to lock this rate.
                </p>
              </div>
            )}
          </div>

          <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
            <Button
              variant="outline"
              onClick={() => setShowConfirmModal(false)}
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              Cancel
            </Button>
            <Button
              onClick={handleConfirmConversion}
              disabled={isLoading}
              className="w-full sm:w-auto text-sm sm:text-base"
            >
              {isLoading ? 'Converting...' : 'Confirm & Convert'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
