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
    <section id="features" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black">Why NGOs Choose Naira Bridge</h2>
          <p className="text-sm sm:text-base text-gray-600 px-4">Everything you need for transparent, efficient foreign exchange</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors shadow-sm">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-4 sm:mb-6 shadow-sm">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-black">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
