'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function FAQSection() {
  const [openId, setOpenId] = useState(0)

  const faqs = [
    {
      question: 'How long does a conversion take?',
      answer: 'Most conversions are completed within 5-15 minutes. Your funds are transferred to your NGN wallet immediately after the rate lock confirmation.'
    },
    {
      question: 'What currencies do you support?',
      answer: 'We support USD, EUR, GBP, and USDT. Additional currencies can be added upon request for enterprise clients.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes. We use bank-level SSL encryption, regular security audits, and comply with international data protection standards. All conversions are encrypted end-to-end.'
    },
    {
      question: 'Can I get audit reports for donors?',
      answer: 'Absolutely. You can download detailed audit trails, PDF/CSV reports, and share secure links with your donors. This is included in all plans.'
    },
    {
      question: 'What happens if I need support?',
      answer: 'Professional and Enterprise plans include priority email and phone support. Starter plans have access to our help center and community forum.'
    },
    {
      question: 'Do you have API access?',
      answer: 'Yes! Professional and Enterprise plans include API access for automated conversions and reporting. Contact sales for integration details.'
    }
  ]

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Frequently Asked Questions</h2>
          <p className="text-base text-gray-600">Everything you need to know about Naira Bridge</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <button
                onClick={() => setOpenId(openId === idx ? -1 : idx)}
                className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors text-left"
              >
                <span className="font-semibold text-black">{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-gray-600 transition-transform',
                    openId === idx && 'transform rotate-180'
                  )}
                />
              </button>

              {openId === idx && (
                <div className="px-6 pb-6 pt-0 border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
