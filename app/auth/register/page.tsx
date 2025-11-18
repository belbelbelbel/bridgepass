'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react'
import OnboardingForm from '@/components/onboarding-form'
import Link from 'next/link'

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const totalSteps = 4

  useEffect(() => {
    // Check if coming from successful registration
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true)
      // Auto-redirect after 3 seconds
      const timer = setTimeout(() => {
        router.push('/dashboard?fromRegistration=true')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [searchParams, router])

  const handleStepComplete = (nextStep: number) => {
    if (nextStep > totalSteps) {
      // Show success message before redirecting
      router.push('/auth/register?success=true')
    } else {
      setCurrentStep(nextStep)
    }
  }

  if (showSuccess) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="bg-white rounded-lg border border-border p-8 space-y-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-2">Registration Successful!</h2>
              <p className="text-foreground/70 mb-4">
                Your NGO registration has been submitted successfully. Our compliance team will review your application within 24-48 hours.
              </p>
              <p className="text-sm text-foreground/70">
                Redirecting to dashboard...
              </p>
            </div>
            <Link href="/dashboard?fromRegistration=true">
              <button className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-medium">
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="bg-white border-b border-border sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <h1 className="text-2xl font-bold text-primary mb-2">NGO Registration</h1>
          <p className="text-foreground/70">Complete your KYC verification to start receiving donations</p>
        </div>
      </div>
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            {Array.from({ length: totalSteps }).map((_, idx) => {
              const stepNum = idx + 1
              const isCompleted = stepNum < currentStep
              const isCurrent = stepNum === currentStep
              
              return (
                <div key={idx} className="flex items-center flex-1">
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-semibold
                    transition-all duration-300
                    ${isCompleted 
                      ? 'bg-primary text-primary-foreground' 
                      : isCurrent 
                      ? 'bg-primary text-primary-foreground ring-4 ring-primary/20' 
                      : 'bg-secondary text-foreground'
                    }
                  `}>
                    {isCompleted ? <Check className="w-5 h-5" /> : stepNum}
                  </div>
                  {idx < totalSteps - 1 && (
                    <div className={`
                      flex-1 h-1 mx-2 rounded-full transition-all duration-300
                      ${stepNum < currentStep ? 'bg-primary' : 'bg-border'}
                    `} />
                  )}
                </div>
              )
            })}
          </div>
          <p className="text-center text-foreground/70 mt-4 text-sm">
            Step {currentStep} of {totalSteps}
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <OnboardingForm 
          currentStep={currentStep} 
          onStepComplete={handleStepComplete}
          totalSteps={totalSteps}
        />
      </div>
    </main>
  )
}
