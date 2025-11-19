import { Star } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Chioma Adeyemi',
      role: 'Director, Education for All Nigeria',
      content: 'Naira Bridge reduced our currency conversion costs by 35%. The audit reports have made our donors incredibly happy.',
      rating: 5,
      initials: 'CA'
    },
    {
      name: 'Dr. Samuel Okafor',
      role: 'CEO, Health Without Borders',
      content: 'The transparency and speed of conversions is unmatched. What used to take a week now happens in minutes.',
      rating: 5,
      initials: 'SO'
    },
    {
      name: 'Zainab Musa',
      role: 'Finance Manager, Community Development Initiative',
      content: 'The compliance features are exactly what our international donors need. Highly recommended!',
      rating: 5,
      initials: 'ZM'
    }
  ]

  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-black">Trusted by Leading NGOs</h2>
          <p className="text-sm sm:text-base text-gray-600 px-4">See what organizations are saying about their experience</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-6 sm:p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="flex gap-1 mb-4 sm:mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-gray-700 mb-4 sm:mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-2 sm:gap-3">
                <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                  <AvatarFallback className="bg-gray-100 text-gray-700 text-xs sm:text-sm font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                  <p className="font-semibold text-xs sm:text-sm text-black truncate">{testimonial.name}</p>
                  <p className="text-xs text-gray-600 truncate">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
