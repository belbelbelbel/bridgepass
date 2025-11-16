'use client'

import { useInView } from 'react-intersection-observer'
import { ArrowRight, Upload, Zap, CheckCircle2 } from 'lucide-react'

export default function HowItWorks() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const steps = [
    {
      number: '1',
      title: 'Connect Your Account',
      description: 'Link your NGO and verify your organization details',
      icon: Upload
    },
    {
      number: '2',
      title: 'Submit Conversion',
      description: 'Enter the amount in USD, EUR, GBP, or USDT',
      icon: Zap
    },
    {
      number: '3',
      title: 'Lock Rate & Convert',
      description: 'Lock in the rate for 30 minutes and complete the conversion',
      icon: CheckCircle2
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Three simple steps to convert and track your foreign donations</p>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 ${inView ? 'animate-slide-in-up' : 'opacity-0'}`}>
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="absolute -top-8 left-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                {step.number}
              </div>

              <div className="pt-8 px-6 py-8 border border-border rounded-xl bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
                <step.icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4 text-accent">
                  <ArrowRight className="w-6 h-6" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
