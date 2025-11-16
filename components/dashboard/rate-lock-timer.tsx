'use client'
import { useEffect, useState } from 'react'
import { Clock, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface RateLockTimerProps {
  expiresAt?: Date
}

export default function RateLockTimer({ expiresAt }: RateLockTimerProps) {
  const [timeLeft, setTimeLeft] = useState('29:45')
  const [isExpiring, setIsExpiring] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const target = expiresAt || new Date(now.getTime() + 30 * 60000)
      const diff = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000))

      const minutes = Math.floor(diff / 60)
      const seconds = diff % 60

      setTimeLeft(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
      setIsExpiring(minutes < 5)

      if (diff === 0) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [expiresAt])

  return (
    <div className={cn(
      'flex items-center gap-2 px-4 py-2 rounded-lg',
      isExpiring ? 'bg-yellow-50 border border-yellow-200' : 'bg-green-50 border border-green-200'
    )}>
      <Clock className={cn(
        'w-4 h-4',
        isExpiring ? 'text-yellow-600 animate-pulse' : 'text-green-600'
      )} />
      <span className={cn(
        'font-mono font-bold',
        isExpiring ? 'text-yellow-700' : 'text-green-700'
      )}>
        {timeLeft}
      </span>
      <span className={cn(
        'text-xs font-medium',
        isExpiring ? 'text-yellow-600' : 'text-green-600'
      )}>
        Rate Lock
      </span>
    </div>
  )
}
