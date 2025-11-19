'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FXConversionWidget from '@/components/fx-conversion-widget'
import RateLockingPanel from '@/components/rate-locking-panel'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'

export default function FXConversionPage() {
  const router = useRouter()
  const [conversionData, setConversionData] = useState({
    fromCurrency: 'USD',
    toCurrency: 'NGN',
    amount: '',
    lockedRate: null as number | null,
    showSuccess: false,
    convertedAmount: ''
  })

  const handleConversionSuccess = (amount: string) => {
    setConversionData({
      ...conversionData,
      showSuccess: true,
      convertedAmount: amount
    })
    
    // Redirect to dashboard after 3 seconds
    setTimeout(() => {
      router.push('/dashboard?conversionSuccess=true')
    }, 3000)
  }

  if (conversionData.showSuccess) {
    return (
      <div className="flex h-screen bg-background">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopNav />
          
          <main className="flex-1 overflow-auto flex items-center justify-center px-6">
            <div className="w-full max-w-md text-center">
              <div className="bg-white rounded-lg border border-border p-8 space-y-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">Conversion Successful!</h2>
                  <p className="text-foreground/70 mb-4">
                    {conversionData.convertedAmount} has been transferred to your NGN wallet.
                  </p>
                  <p className="text-sm text-foreground/70">
                    Redirecting to dashboard...
                  </p>
                </div>
                <button
                  onClick={() => router.push('/dashboard')}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium"
                >
                  View Dashboard
                </button>
              </div>
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
          <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-6 sm:space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-2">Convert Currency</h1>
              <p className="text-sm sm:text-base text-foreground/70">Lock in rates and convert your foreign donations instantly.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="lg:col-span-2 space-y-6">
                <FXConversionWidget 
                  conversionData={conversionData} 
                  setConversionData={setConversionData}
                  onConversionSuccess={handleConversionSuccess}
                />
              </div>
              <RateLockingPanel conversionData={conversionData} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
