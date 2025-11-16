'use client'

import { useEffect, useState } from 'react'
import { TrendingUp } from 'lucide-react'

export default function FxRateTicker() {
  const [rates, setRates] = useState([
    { pair: 'USD/NGN', rate: 1620.50, change: 0.8 },
    { pair: 'EUR/NGN', rate: 1890.25, change: 1.2 },
    { pair: 'GBP/NGN', rate: 2050.75, change: 0.5 },
    { pair: 'USDT/NGN', rate: 1619.80, change: 0.9 }
  ])

  return (
    <div className="mt-12 p-6 bg-card border border-border rounded-xl inline-block max-w-3xl">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-accent animate-pulse-gentle" />
        <p className="text-sm font-medium text-muted-foreground">Live Rates - Updated Every Minute</p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {rates.map((rate) => (
          <div key={rate.pair} className="text-center">
            <p className="text-xs text-muted-foreground font-medium">{rate.pair}</p>
            <p className="text-lg font-bold text-foreground">₦{rate.rate.toFixed(2)}</p>
            <p className="text-xs text-green-600 font-medium">+{rate.change}%</p>
          </div>
        ))}
      </div>
    </div>
  )
}
