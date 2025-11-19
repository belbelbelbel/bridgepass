'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { month: 'Jan', usd: 45000, eur: 32000, gbp: 28000 },
  { month: 'Feb', usd: 52000, eur: 38000, gbp: 31000 },
  { month: 'Mar', usd: 48000, eur: 35000, gbp: 29000 },
  { month: 'Apr', usd: 61000, eur: 42000, gbp: 36000 },
  { month: 'May', usd: 55000, eur: 39000, gbp: 33000 },
  { month: 'Jun', usd: 68000, eur: 45000, gbp: 40000 }
]

export default function ConversionChart() {
  return (
    <Card>
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-base sm:text-lg">Conversion History</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 pt-0">
        <div className="w-full overflow-x-auto">
          <ResponsiveContainer width="100%" height={250} className="min-h-[250px] sm:min-h-[300px]">
            <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="month" 
                stroke="var(--color-muted-foreground)" 
                fontSize={12}
                tick={{ fill: 'var(--color-muted-foreground)' }}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)" 
                fontSize={12}
                tick={{ fill: 'var(--color-muted-foreground)' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-card)',
                  border: `1px solid var(--color-border)`,
                  borderRadius: '8px',
                  fontSize: '12px'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Bar dataKey="usd" fill="var(--color-primary)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="eur" fill="var(--color-accent)" radius={[8, 8, 0, 0]} />
              <Bar dataKey="gbp" fill="var(--color-secondary)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
