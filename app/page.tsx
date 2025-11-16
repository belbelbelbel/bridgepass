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
      <section className="relative overflow-hidden pt-20 pb-32 px-4 sm:px-6 lg:px-8">
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
              <Link href="/dashboard">
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
            <FxRateTicker />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Security & Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Enterprise Security & Compliance</h2>
            <p className="text-lg text-muted-foreground">Bank-level security with regulatory compliance</p>
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
              <div key={idx} className="p-6 border border-border rounded-xl bg-background hover:border-accent/50 transition-colors">
                <item.icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
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
