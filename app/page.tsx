'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, DollarSign, TrendingUp, Shield, FileText, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import HowItWorks from '@/components/home/how-it-works'
import WhyChooseUs from '@/components/home/why-choose-us'
import Testimonials from '@/components/home/testimonials'
import FxRateTicker from '@/components/home/fx-rate-ticker'
import PricingSection from '@/components/home/pricing-section'
import FAQSection from '@/components/home/faq-section'
import CTASection from '@/components/home/cta-section'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8 hidden ">
        {/* Background gradient accent */}
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center animate-slide-in-up">
            <div className="inline-block mb-6 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full">
              <p className="text-sm font-medium text-accent">Trusted by 500+ NGOs across Africa</p>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-foreground">
              Convert NGO donations at the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent ml-3">
                best rates
              </span>
            </h1>

            <p className="text-xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto">
              Transparent currency conversion for foreign donations (USD, EUR, GBP, USDT) into Nigerian Naira with zero hidden fees. Full audit trails and donor transparency reports included.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link href="/auth/register">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Talk to Sales
              </Button>
            </div>

            {/* FX Rate Ticker */}
            
          </div>
        </div>
      </section>
      <section className="w-full h-[70vh] px-4 sm:px-6 lg:px-8 bg-white flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center justify-center space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            Secure International Payments for NGOs
          </h1>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Receive donations in multiple currencies, lock competitive FX rates, and convert to NGN with complete transparency. Built for trust, compliance, and simplicity.
          </p>
          <div className="pt-2">
            <Link 
              href="/auth/register" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Start Your NGO Registration
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <HowItWorks />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Security & Compliance */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Enterprise Security & Compliance</h2>
            <p className="text-base text-gray-600">Bank-level security with regulatory compliance</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'SSL & Encryption',
                description: 'End-to-end encryption for all transactions and sensitive data'
              },
              {
                icon: FileText,
                title: 'Audit Ready',
                description: 'Complete audit trails and compliance reports for your donors'
              },
              {
                icon: CheckCircle2,
                title: 'Verified Compliance',
                description: 'Full regulatory compliance with Nigerian and international standards'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-8 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors shadow-sm">
                <div className="w-14 h-14 bg-white border border-gray-200 rounded-lg flex items-center justify-center mb-6 shadow-sm">
                  <item.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-black">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />

      {/* Testimonials */}
      <Testimonials />

      <Footer />
    </div>
  )
}
