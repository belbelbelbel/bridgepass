'use client'

import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import OrgDetailsStep from './onboarding-steps/org-details-step'
import DocumentsStep from './onboarding-steps/documents-step'
import AuthorizedPersonsStep from './onboarding-steps/authorized-persons-step'
import ReviewStep from './onboarding-steps/review-step'

interface OnboardingFormProps {
  currentStep: number
  onStepComplete: (nextStep: number) => void
  totalSteps: number
}

export default function OnboardingForm({
  currentStep,
  onStepComplete,
  totalSteps
}: OnboardingFormProps) {
  const [formData, setFormData] = useState({
    orgName: '',
    cacCertificate: '',
    tin: '',
    boardResolution: '',
    authorizedPersons: [] as any[],
    documents: [] as any[]
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(false)

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch(step) {
      case 1:
        if (!formData.orgName.trim()) newErrors.orgName = 'Organization name is required'
        if (!formData.cacCertificate.trim()) newErrors.cacCertificate = 'CAC Certificate number is required'
        if (!formData.tin.trim()) newErrors.tin = 'TIN is required'
        break
      case 2:
        if (formData.documents.length === 0) newErrors.documents = 'At least one document is required'
        break
      case 3:
        if (formData.authorizedPersons.length === 0) newErrors.authorized = 'At least one authorized person is required'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNextStep = async () => {
    if (!validateStep(currentStep)) return

    if (currentStep === totalSteps) {
      setIsLoading(true)
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setIsLoading(false)
      onStepComplete(currentStep + 1)
    } else {
      onStepComplete(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      onStepComplete(currentStep - 1)
    }
  }

  return (
    <div className="space-y-8">
      {/* Step Content */}
      <div className="bg-white rounded-lg border border-border p-8 min-h-96">
        {currentStep === 1 && (
          <OrgDetailsStep 
            data={formData} 
            setData={setFormData}
            errors={errors}
          />
        )}
        {currentStep === 2 && (
          <DocumentsStep 
            data={formData} 
            setData={setFormData}
            errors={errors}
          />
        )}
        {currentStep === 3 && (
          <AuthorizedPersonsStep 
            data={formData} 
            setData={setFormData}
            errors={errors}
          />
        )}
        {currentStep === 4 && (
          <ReviewStep data={formData} />
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevStep}
          disabled={currentStep === 1}
          className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-background disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        <button
          onClick={handleNextStep}
          disabled={isLoading}
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all transform hover:scale-105"
        >
          {isLoading ? 'Processing...' : currentStep === totalSteps ? 'Submit Registration' : 'Next Step'}
          {!isLoading && <ArrowRight className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}
