'use client'

import { Lock, Unlock, Clock, CheckCircle, AlertCircle } from 'lucide-react'

interface RateLockingPanelProps {
  conversionData: any
}

export default function RateLockingPanel({ conversionData }: RateLockingPanelProps) {
  const lockedRates = [
    {
      id: 1,
      currency: 'USD',
      rate: 1548.00,
      amount: 50000,
      lockedAt: '2 hours ago',
      expiresAt: '22 hours left',
      status: 'active'
    },
    {
      id: 2,
      currency: 'EUR',
      rate: 1675.50,
      amount: 25000,
      lockedAt: '1 day ago',
      expiresAt: '23 hours left',
      status: 'active'
    },
    {
      id: 3,
      currency: 'GBP',
      rate: 1945.75,
      amount: 15000,
      lockedAt: '3 days ago',
      expiresAt: 'Expired',
      status: 'expired'
    }
  ]

  return (
    <div className="bg-white rounded-lg border border-border p-6 space-y-6 h-fit sticky top-24">
      <div>
        <h3 className="text-xl font-bold text-primary mb-2 flex items-center gap-2">
          <Lock className="w-5 h-5" />
          Locked Rates
        </h3>
        <p className="text-sm text-foreground/70">Your protected exchange rates</p>
      </div>

      <div className="space-y-3">
        {lockedRates.map((locked) => (
          <div 
            key={locked.id} 
            className={`p-4 rounded-lg border transition-all ${
              locked.status === 'active'
                ? 'bg-primary/5 border-primary'
                : 'bg-foreground/5 border-border opacity-60'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2">
                  <p className="font-bold text-lg text-primary">{locked.currency}</p>
                  {locked.status === 'active' && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-700 rounded-full animate-pulse" />
                      Active
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground/70 mt-1">₦{locked.rate.toFixed(2)}</p>
              </div>
              <Lock className={`w-5 h-5 ${
                locked.status === 'active' ? 'text-primary' : 'text-foreground/30'
              }`} />
            </div>

            <div className="space-y-2 border-t border-primary/20 pt-3">
              <div className="flex justify-between text-xs">
                <span className="text-foreground/70">Amount</span>
                <span className="font-medium text-foreground">${locked.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-foreground/70">Locked {locked.lockedAt}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-medium">
                <Clock className="w-3 h-3" />
                <span className={locked.status === 'active' ? 'text-green-700' : 'text-destructive'}>
                  {locked.expiresAt}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Info */}
      <div className="space-y-3 border-t border-border pt-4">
        <div>
          <p className="text-xs font-semibold text-foreground mb-2">How Rate Locking Works</p>
          <ul className="space-y-1 text-xs text-foreground/70">
            <li className="flex gap-2">
              <span className="text-primary font-bold">1.</span>
              <span>Lock a rate when you receive a donation</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">2.</span>
              <span>Rate is guaranteed for 24 hours</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">3.</span>
              <span>Execute conversion within the window</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
