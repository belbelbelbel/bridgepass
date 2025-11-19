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
      <CardHeader className="p-4 sm:p-6">
        <CardTitle className="text-base sm:text-lg">Recent Conversions</CardTitle>
      </CardHeader>
      <CardContent className="p-0 sm:p-6">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-xs sm:text-sm">Date</TableHead>
                <TableHead className="text-xs sm:text-sm">From</TableHead>
                <TableHead className="text-xs sm:text-sm hidden sm:table-cell">To</TableHead>
                <TableHead className="text-xs sm:text-sm hidden md:table-cell">Rate</TableHead>
                <TableHead className="text-xs sm:text-sm hidden lg:table-cell">Saved</TableHead>
                <TableHead className="text-xs sm:text-sm">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conversions.map((conversion) => (
                <TableRow key={conversion.id} className="border-border hover:bg-muted/50">
                  <TableCell className="font-medium text-xs sm:text-sm">{conversion.date}</TableCell>
                  <TableCell className="text-xs sm:text-sm">{conversion.from}</TableCell>
                  <TableCell className="text-xs sm:text-sm hidden sm:table-cell">{conversion.to}</TableCell>
                  <TableCell className="font-mono text-xs sm:text-sm hidden md:table-cell">{conversion.rate}</TableCell>
                  <TableCell className="font-medium text-green-600 text-xs sm:text-sm hidden lg:table-cell">{conversion.saved}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 sm:gap-2">
                      {conversion.status === 'completed' ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 flex-shrink-0" />
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 text-xs">
                            <span className="hidden sm:inline">Completed</span>
                            <span className="sm:hidden">Done</span>
                          </Badge>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-600 animate-spin flex-shrink-0" />
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 text-xs">
                            <span className="hidden sm:inline">Processing</span>
                            <span className="sm:hidden">Proc</span>
                          </Badge>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}
