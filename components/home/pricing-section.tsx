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
    <section id="pricing" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black">Transparent Pricing</h2>
          <p className="text-sm sm:text-base text-gray-600 px-4">No hidden fees. Only pay for what you use.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {plans.map((plan, idx) => (
            <Card
              key={idx}
              className={`p-6 sm:p-8 flex flex-col transition-all duration-300 relative ${
                plan.popular
                  ? 'ring-2 ring-accent lg:scale-105 bg-accent/5'
                  : 'hover:border-accent/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-accent text-accent-foreground px-3 sm:px-4 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{plan.name}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">{plan.description}</p>

              <div className="mb-6 sm:mb-8">
                <span className="text-2xl sm:text-3xl font-bold">{plan.price}</span>
                {plan.period && <span className="text-xs sm:text-sm text-muted-foreground">{plan.period}</span>}
              </div>

              <Button
                className="w-full mb-6 sm:mb-8 text-sm sm:text-base"
                variant={plan.popular ? 'default' : 'outline'}
              >
                Get Started
              </Button>

              <ul className="space-y-3 sm:space-y-4 flex-1">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm">{feature}</span>
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
