'use client'

import { useInView } from 'react-intersection-observer'
import { UserCheck, ArrowRightLeft, Lock } from 'lucide-react'

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const steps = [
    {
      number: '1',
      title: 'Connect Your Account',
      description: 'Link your NGO and verify your organization details',
      icon: UserCheck
    },
    {
      number: '2',
      title: 'Submit Conversion',
      description: 'Enter the amount in USD, EUR, GBP, or USDT',
      icon: ArrowRightLeft
    },
    {
      number: '3',
      title: 'Lock Rate & Convert',
      description: 'Lock in the rate for 30 minutes and complete the conversion',
      icon: Lock
    }
  ]

  return (
    <section id="how-it-works" className="py-24  px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">How It Works</h2>
          <p className="text-base text-gray-600">Three simple steps to convert and track your foreign donations</p>
        </div>

        <div className={`relative grid md:grid-cols-3 gap-12 lg:gap-16 ${inView ? 'opacity-100' : 'opacity-0'} transition-opacity duration-700`}>
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0 border-t-2 border-dashed border-gray-300 transform -translate-y-1/2">
            <div className="absolute left-1/3 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-400"></div>
            <div className="absolute left-2/3 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gray-400"></div>
          </div>

          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col">
              {/* Icon Card */}
              <div className="mb-8 flex flex-row items-center justify-between">
                <div className="w-24 h-24 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm mb-4">
                  <step.icon className="w-12 h-12 text-black" />
                </div>
                <div className="text-2xl font-bold text-black w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full">
                  {step.number}
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow flex-1">
                <h3 className="text-lg font-bold text-black mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
