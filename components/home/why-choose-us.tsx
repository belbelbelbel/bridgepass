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
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Why NGOs Choose Naira Bridge</h2>
          <p className="text-base text-gray-600">Everything you need for transparent, efficient foreign exchange</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors shadow-sm">
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                <feature.icon className="w-7 h-7 text-black" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
