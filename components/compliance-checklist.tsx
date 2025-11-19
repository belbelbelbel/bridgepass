'use client'

import { CheckCircle, AlertCircle, Clock } from 'lucide-react'

export default function ComplianceChecklist() {
  const checklist = [
    {
      title: 'Organization Registration',
      description: 'CAC Certificate and legal registration documents',
      status: 'completed',
      date: '2024-11-10'
    },
    {
      title: 'Tax Identification',
      description: 'TIN verification and tax compliance documents',
      status: 'completed',
      date: '2024-11-10'
    },
    {
      title: 'Board Resolution',
      description: 'Board authorization for international transactions',
      status: 'completed',
      date: '2024-11-10'
    },
    {
      title: 'Authorized Signatories',
      description: '3 authorized persons registered and verified',
      status: 'completed',
      date: '2024-11-10'
    },
    {
      title: 'Bank Account Verification',
      description: 'Primary NGN bank account confirmed and verified',
      status: 'completed',
      date: '2024-11-11'
    },
    {
      title: 'Beneficiary Verification',
      description: 'Confirm final beneficiaries of received funds',
      status: 'pending',
      date: null
    }
  ]

  const getIcon = (status: string) => {
    if (status === 'completed') return <CheckCircle className="w-6 h-6 text-green-600" />
    if (status === 'pending') return <Clock className="w-6 h-6 text-yellow-600" />
    return <AlertCircle className="w-6 h-6 text-destructive" />
  }

  const getStatusColor = (status: string) => {
    if (status === 'completed') return 'bg-green-50 border-green-200'
    if (status === 'pending') return 'bg-yellow-50 border-yellow-200'
    return 'bg-red-50 border-red-200'
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-primary mb-6">Compliance Checklist</h3>
      </div>

      <div className="space-y-4">
        {checklist.map((item, idx) => (
          <div key={idx} className={`p-6 rounded-lg border-2 ${getStatusColor(item.status)} transition-all hover:shadow-md`}>
            <div className="flex items-start gap-4">
              {getIcon(item.status)}
              <div className="flex-1">
                <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                <p className="text-sm text-foreground/70 mb-3">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    item.status === 'completed' 
                      ? 'bg-green-100 text-green-700'
                      : item.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-destructive/10 text-destructive'
                  }`}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </span>
                  {item.date && (
                    <span className="text-xs text-foreground/60">
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-lg space-y-3">
        <h4 className="font-semibold text-blue-900">Next Step Required</h4>
        <p className="text-sm text-blue-900">
          Please provide additional information about final beneficiaries of received donations. This helps us maintain compliance with international AML/KYC regulations.
        </p>
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Complete Beneficiary Information
        </button>
      </div>
    </div>
  )
}
