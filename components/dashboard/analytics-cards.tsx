import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowUpRight, TrendingDown } from 'lucide-react'

export default function AnalyticsCards() {
  const cards = [
    {
      title: 'Total Inflows',
      value: '₦45,250,000',
      change: '+12.5%',
      positive: true,
      icon: ArrowUpRight
    },
    {
      title: 'Average FX Rate Saved',
      value: '3.2%',
      change: '+0.8%',
      positive: true,
      icon: TrendingDown
    },
    {
      title: 'Time Saved',
      value: '124 hours',
      change: '+18% vs banks',
      positive: true,
      icon: null
    },
    {
      title: 'Conversions This Month',
      value: '24',
      change: 'On track',
      positive: true,
      icon: null
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
      {cards.map((card, idx) => (
        <Card key={idx} className="animate-slide-in-up">
          <CardHeader className="pb-2 sm:pb-3 p-4 sm:p-6">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-foreground">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <div className="flex items-end justify-between">
              <div className="min-w-0 flex-1">
                <p className="text-xl sm:text-2xl font-bold text-foreground truncate">{card.value}</p>
                <p className={`text-xs font-medium mt-1 sm:mt-2 ${card.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {card.change}
                </p>
              </div>
              {card.icon && (
                <card.icon className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 ml-2 ${card.positive ? 'text-green-600' : 'text-red-600'}`} />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
