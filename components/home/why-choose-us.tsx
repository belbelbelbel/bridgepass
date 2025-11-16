import { TrendingUp, Shield, FileText, Clock, DollarSign, Globe } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: TrendingUp,
      title: 'Better Rates',
      description: 'Up to 40% better rates than traditional banks'
    },
    {
      icon: Clock,
      title: 'Instant Processing',
      description: 'Conversions processed within minutes, not days'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'SSL encryption and regulatory compliance'
    },
    {
      icon: FileText,
      title: 'Audit Reports',
      description: 'Downloadable audit trails and compliance reports'
    },
    {
      icon: DollarSign,
      title: 'Zero Hidden Fees',
      description: 'Transparent pricing with no surprise charges'
    },
    {
      icon: Globe,
      title: 'Multi-Currency',
      description: 'Support for USD, EUR, GBP, and stablecoins'
    }
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why NGOs Choose Naira Bridge</h2>
          <p className="text-lg text-muted-foreground">Everything you need for transparent, efficient foreign exchange</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-background border border-border rounded-xl hover:border-accent/50 hover:shadow-lg transition-all duration-300">
              <feature.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
