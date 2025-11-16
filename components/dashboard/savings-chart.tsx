'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts'

const savingsData = [
  { week: 'Week 1', saved: 450000 },
  { week: 'Week 2', saved: 820000 },
  { week: 'Week 3', saved: 1200000 },
  { week: 'Week 4', saved: 1650000 },
  { week: 'Week 5', saved: 2100000 },
  { week: 'Week 6', saved: 2450000 }
]

export default function SavingsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cumulative Savings vs Bank Rates</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={savingsData}>
            <defs>
              <linearGradient id="colorSaved" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="week" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: `1px solid var(--color-border)`,
                borderRadius: '8px'
              }}
              formatter={(value) => `₦${(value / 1000000).toFixed(2)}M`}
            />
            <Area
              type="monotone"
              dataKey="saved"
              stroke="var(--color-accent)"
              fillOpacity={1}
              fill="url(#colorSaved)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
