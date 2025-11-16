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
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((card, idx) => (
        <Card key={idx} className="animate-slide-in-up">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {card.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-2xl font-bold text-foreground">{card.value}</p>
                <p className={`text-xs font-medium mt-2 ${card.positive ? 'text-green-600' : 'text-red-600'}`}>
                  {card.change}
                </p>
              </div>
              {card.icon && (
                <card.icon className={`w-6 h-6 ${card.positive ? 'text-green-600' : 'text-red-600'}`} />
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
