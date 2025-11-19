import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-200">
      <div className="max-w-4xl mx-auto text-center text-white px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Ready to transform your NGO's finances?
        </h2>
        <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-10">
          Join 500+ NGOs already converting donations smarter and faster. Start your first conversion today.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href="/auth/register" className="w-full sm:w-auto">
            <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto">
              Get Started Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-900 w-full sm:w-auto">
            Schedule Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
