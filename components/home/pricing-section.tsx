import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      description: 'For small NGOs just getting started',
      price: 'Free',
      features: [
        'Up to 5 conversions/month',
        'Basic audit reports',
        'Email support',
        '1 user account',
        'Standard FX rates'
      ]
    },
    {
      name: 'Professional',
      description: 'For established NGOs with regular conversions',
      price: '₦50,000',
      period: '/month',
      popular: true,
      features: [
        'Unlimited conversions',
        'Advanced audit reports',
        'Priority support',
        'Up to 5 user accounts',
        'Better FX rates',
        'API access',
        'Donor sharing portal'
      ]
    },
    {
      name: 'Enterprise',
      description: 'For large NGOs with complex needs',
      price: 'Custom',
      features: [
        'Everything in Professional',
        'Dedicated account manager',
        'Custom integrations',
        'Unlimited users',
        'On-premise options',
        'Advanced compliance',
        'White-label solution'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Transparent Pricing</h2>
          <p className="text-base text-gray-600">No hidden fees. Only pay for what you use.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-8 flex flex-col transition-all duration-300 ${
                plan.popular
                  ? 'ring-2 ring-accent scale-105 bg-accent/5'
                  : 'hover:border-accent/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-8">
                <span className="text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-sm text-muted-foreground">{plan.period}</span>}
              </div>

              <Button
                className="w-full mb-8"
                variant={plan.popular ? 'default' : 'outline'}
              >
                Get Started
              </Button>

              <ul className="space-y-4 flex-1">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
