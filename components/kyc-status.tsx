'use client'

import { CheckCircle, Clock, AlertCircle, FileText } from 'lucide-react'

export default function KYCStatus() {
  const status = 'verified'
  const verifiedDate = '2024-11-10'

  const getStatusColor = () => {
    if (status === 'verified') return { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-900' }
    if (status === 'pending') return { bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-900' }
    return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-900' }
  }

  const getStatusIcon = () => {
    if (status === 'verified') return <CheckCircle className="w-12 h-12 text-green-600" />
    if (status === 'pending') return <Clock className="w-12 h-12 text-yellow-600" />
    return <AlertCircle className="w-12 h-12 text-destructive" />
  }

  const colors = getStatusColor()

  return (
    <div className={`${colors.bg} border-2 ${colors.border} rounded-lg p-6 space-y-4 h-fit sticky top-24`}>
      <div className="flex justify-center mb-4">
        {getStatusIcon()}
      </div>

      <div className="text-center">
        <p className={`font-bold text-lg ${colors.text} capitalize mb-2`}>
          {status === 'verified' ? 'Verification Complete' : status === 'pending' ? 'Verification Pending' : 'Verification Failed'}
        </p>
        {status === 'verified' && (
          <p className={`text-sm ${colors.text}`}>
            Verified on {new Date(verifiedDate).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        )}
      </div>

      {status === 'verified' && (
        <div className="space-y-3 border-t-2 border-current pt-4">
          <div className="flex items-start gap-2 text-sm">
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className={colors.text}>Organization verified</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className={colors.text}>Documents reviewed</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className={colors.text}>Bank account confirmed</span>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span className={colors.text}>Ready to receive donations</span>
          </div>
        </div>
      )}

      <div className={`${colors.text} text-xs p-3 bg-white bg-opacity-50 rounded border border-current border-opacity-30`}>
        <p className="font-semibold mb-1">Verification Valid For:</p>
        <p>12 months from verification date</p>
      </div>

      <button className="w-full py-3 bg-white text-primary rounded-lg hover:bg-background transition-colors font-semibold border border-current">
        View Full Report
      </button>
    </div>
  )
}
