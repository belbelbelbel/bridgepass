import { Star } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Chioma Adeyemi',
      role: 'Director, Education for All Nigeria',
      content: 'BridgePass reduced our currency conversion costs by 35%. The audit reports have made our donors incredibly happy.',
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Trusted by Leading NGOs</h2>
          <p className="text-lg text-muted-foreground">See what organizations are saying about their experience</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="p-8 bg-card border border-border rounded-xl">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-accent text-accent-foreground text-sm">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
