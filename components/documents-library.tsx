'use client'

import { Download, Eye, FileText, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function DocumentsLibrary() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const documents = [
    {
      id: 1,
      name: 'FX Conversion Statement - November 2024',
      category: 'statements',
      type: 'PDF',
      size: '2.4 MB',
      date: '2024-11-17',
      description: 'Complete record of all FX conversions performed in November'
    },
    {
      id: 2,
      name: 'Payout Confirmation - November 17',
      category: 'payouts',
      type: 'PDF',
      size: '1.2 MB',
      date: '2024-11-17',
      description: 'Confirmation of NGN 77,512,500 payout to First Bank'
    },
    {
      id: 3,
      name: 'Annual FX Savings Report 2024',
      category: 'reports',
      type: 'PDF',
      size: '3.8 MB',
      date: '2024-11-01',
      description: 'Annual summary of FX savings achieved vs standard bank rates'
    },
    {
      id: 4,
      name: 'Transaction Ledger - Q4 2024',
      category: 'ledgers',
      type: 'PDF',
      size: '1.9 MB',
      date: '2024-11-01',
      description: 'Detailed ledger of all transactions in Q4 2024'
    },
    {
      id: 5,
      name: 'KYC Verification Report',
      category: 'kyc',
      type: 'PDF',
      size: '2.1 MB',
      date: '2024-11-10',
      description: 'Official KYC verification report with compliance details'
    },
    {
      id: 6,
      name: 'Payout Confirmation - November 14',
      category: 'payouts',
      type: 'PDF',
      size: '1.1 MB',
      date: '2024-11-14',
      description: 'Confirmation of NGN 116,268,750 payout to First Bank'
    },
    {
      id: 7,
      name: 'Audit Trail - October 2024',
      category: 'audit',
      type: 'PDF',
      size: '4.2 MB',
      date: '2024-11-01',
      description: 'Complete audit trail of all transactions in October'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Documents' },
    { id: 'statements', label: 'FX Statements' },
    { id: 'payouts', label: 'Payout Confirmations' },
    { id: 'reports', label: 'Reports' },
    { id: 'ledgers', label: 'Ledgers' },
    { id: 'kyc', label: 'KYC Documents' },
    { id: 'audit', label: 'Audit Trails' }
  ]

  const filtered = selectedCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory)

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-white border border-border text-foreground hover:border-primary'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Documents Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((doc) => (
          <div key={doc.id} className="bg-white rounded-lg border border-border p-6 hover:border-primary transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-background rounded-lg">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{doc.name}</h3>
                <p className="text-xs text-foreground/70 mb-2">{doc.description}</p>
                <div className="flex items-center gap-2 text-xs text-foreground/60">
                  <Calendar className="w-3 h-3" />
                  {new Date(doc.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </div>
              </div>
            </div>

            <div className="p-3 bg-background rounded-lg mb-4">
              <div className="flex items-center justify-between text-sm">
                <div>
                  <p className="text-foreground/70">{doc.type}</p>
                  <p className="text-foreground/50 text-xs">{doc.size}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 py-2 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors text-sm font-medium">
                <Eye className="w-4 h-4" />
                Preview
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Auto-Generated Documents Info */}
      <div className="p-6 bg-primary/5 border-2 border-primary/20 rounded-lg space-y-3">
        <h4 className="font-semibold text-foreground">Auto-Generated Compliance Documents</h4>
        <p className="text-sm text-foreground/70 mb-4">
          All documents are automatically generated and updated based on your transactions and account activity. These documents are retained for 7 years for audit compliance.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-xs font-semibold text-foreground mb-2">Available Reports:</p>
            <ul className="text-xs text-foreground/70 space-y-1">
              <li>• Monthly FX Conversion Statements</li>
              <li>• Payout Confirmations</li>
              <li>• Annual Savings Reports</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-foreground mb-2">Compliance Records:</p>
            <ul className="text-xs text-foreground/70 space-y-1">
              <li>• Transaction Ledgers</li>
              <li>• Audit Trails</li>
              <li>• KYC Documentation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
