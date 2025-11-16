export const mockConversionData = [
  { month: 'Jan', usd: 45000, eur: 32000, gbp: 28000 },
  { month: 'Feb', usd: 52000, eur: 38000, gbp: 31000 },
  { month: 'Mar', usd: 48000, eur: 35000, gbp: 29000 },
  { month: 'Apr', usd: 61000, eur: 42000, gbp: 36000 },
  { month: 'May', usd: 55000, eur: 39000, gbp: 33000 },
  { month: 'Jun', usd: 68000, eur: 45000, gbp: 40000 }
]

export const exchangeRates = {
  USD: { rate: 1620.50, bankRate: 1550, change: 0.8 },
  EUR: { rate: 1890.25, bankRate: 1800, change: 1.2 },
  GBP: { rate: 2050.75, bankRate: 1950, change: 0.5 },
  USDT: { rate: 1619.80, bankRate: 1548, change: 0.9 }
}

export const recentConversions = [
  {
    id: 1,
    date: '2025-01-15',
    from: 'USD 50,000',
    to: 'NGN 81,025,000',
    rate: '₦1,620.50',
    status: 'completed',
    saved: '₦2,450,000'
  },
  {
    id: 2,
    date: '2025-01-14',
    from: 'EUR 30,000',
    to: 'NGN 56,707,500',
    rate: '₦1,890.25',
    status: 'completed',
    saved: '₦1,890,000'
  },
  {
    id: 3,
    date: '2025-01-13',
    from: 'GBP 25,000',
    to: 'NGN 51,268,750',
    rate: '₦2,050.75',
    status: 'processing',
    saved: '₦1,537,500'
  },
  {
    id: 4,
    date: '2025-01-12',
    from: 'USDT 40,000',
    to: 'NGN 64,792,000',
    rate: '₦1,619.80',
    status: 'completed',
    saved: '₦1,919,760'
  }
]
