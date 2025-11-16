import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import { CheckCircle2, Clock } from 'lucide-react'

const conversions = [
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

export default function RecentConversions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Conversions</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="border-border">
              <TableHead>Date</TableHead>
              <TableHead>From</TableHead>
              <TableHead>To</TableHead>
              <TableHead>Rate</TableHead>
              <TableHead>Saved vs Bank</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {conversions.map((conversion) => (
              <TableRow key={conversion.id} className="border-border hover:bg-muted/50">
                <TableCell className="font-medium">{conversion.date}</TableCell>
                <TableCell>{conversion.from}</TableCell>
                <TableCell>{conversion.to}</TableCell>
                <TableCell className="font-mono text-sm">{conversion.rate}</TableCell>
                <TableCell className="font-medium text-green-600">{conversion.saved}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    {conversion.status === 'completed' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Completed
                        </Badge>
                      </>
                    ) : (
                      <>
                        <Clock className="w-4 h-4 text-yellow-600 animate-spin" />
                        <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                          Processing
                        </Badge>
                      </>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
