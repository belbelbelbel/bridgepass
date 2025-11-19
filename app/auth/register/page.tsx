'use client'

import { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react'
import OnboardingForm from '@/components/onboarding-form'
import Link from 'next/link'

function RegisterPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [currentStep, setCurrentStep] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const totalSteps = 4

  useEffect(() => {
    if (searchParams.get('success') === 'true') {
      setShowSuccess(true)
      const timer = setTimeout(() => {
        router.push('/dashboard?fromRegistration=true')
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [searchParams, router])

  const handleStepComplete = (nextStep: number) => {
    if (nextStep > totalSteps) {
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <h1 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">NGO Registration</h1>
          <p className="text-xs sm:text-sm text-foreground/70">Complete your KYC verification to start receiving donations</p>
        </div>
      </div>
      <div className="bg-white border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-6 lg:py-8">
          <div className="flex items-center justify-between gap-1 sm:gap-2">
            {Array.from({ length: totalSteps }).map((_, idx) => {
              const stepNum = idx + 1
              const isCompleted = stepNum < currentStep
              const isCurrent = stepNum === currentStep
              
              return (
                <div key={idx} className="flex items-center flex-1 min-w-0">
                  <div className={`
                    w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm
                    transition-all duration-300 flex-shrink-0
                    ${isCompleted 
                      ? 'bg-primary text-primary-foreground' 
                      : isCurrent 
                      ? 'bg-primary text-primary-foreground ring-2 sm:ring-4 ring-primary/20' 
                      : 'bg-gray-100 text-foreground'
                    }
                  `}>
                    {isCompleted ? <Check className="w-4 h-4 sm:w-5 sm:h-5" /> : stepNum}
                  </div>
                  {idx < totalSteps - 1 && (
                    <div className={`
                      flex-1 h-0.5 sm:h-1 mx-1 sm:mx-2 rounded-full transition-all duration-300
                      ${stepNum < currentStep ? 'bg-primary' : 'bg-border'}
                    `} />
                  )}
                </div>
              )
            })}
          </div>
          <p className="text-center text-foreground/70 mt-3 sm:mt-4 text-xs sm:text-sm">
            Step {currentStep} of {totalSteps}
          </p>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <OnboardingForm 
          currentStep={currentStep} 
          onStepComplete={handleStepComplete}
          totalSteps={totalSteps}
        />
      </div>
    </main>
  )
}

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading...</p>
        </div>
      </main>
    }>
      <RegisterPageContent />
    </Suspense>
  )
}
