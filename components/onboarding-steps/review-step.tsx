'use client'

import { CheckCircle } from 'lucide-react'

interface ReviewStepProps {
  data: any
}

export default function ReviewStep({ data }: ReviewStepProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">Review Your Information</h2>
        <p className="text-xs sm:text-sm text-foreground/70">Please verify all details before submitting</p>
      </div>

      {/* Organization Details */}
      <div className="p-4 sm:p-6 bg-background rounded-lg border border-border space-y-3 sm:space-y-4">
        <h3 className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-2">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          Organization Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
          <div>
            <p className="text-foreground/70 mb-1">Organization Name</p>
            <p className="font-medium text-foreground break-words">{data.orgName}</p>
          </div>
          <div>
            <p className="text-foreground/70 mb-1">CAC Certificate</p>
            <p className="font-medium text-foreground break-words">{data.cacCertificate}</p>
          </div>
          <div>
            <p className="text-foreground/70 mb-1">TIN</p>
            <p className="font-medium text-foreground break-words">{data.tin}</p>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="p-4 sm:p-6 bg-background rounded-lg border border-border space-y-3 sm:space-y-4">
        <h3 className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-2">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          Documents ({data.documents.length})
        </h3>
        <div className="space-y-1 sm:space-y-2">
          {data.documents.map((doc: any) => (
            <div key={doc.id} className="text-xs sm:text-sm text-foreground/70 truncate">
              • {doc.name}
            </div>
          ))}
        </div>
      </div>

      {/* Authorized Persons */}
      <div className="p-4 sm:p-6 bg-background rounded-lg border border-border space-y-3 sm:space-y-4">
        <h3 className="text-sm sm:text-base font-semibold text-foreground flex items-center gap-2">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          Authorized Persons ({data.authorizedPersons.length})
        </h3>
        <div className="space-y-2 sm:space-y-3">
          {data.authorizedPersons.map((person: any) => (
            <div key={person.id} className="text-xs sm:text-sm">
              <p className="font-medium text-foreground truncate">{person.fullName}</p>
              <p className="text-foreground/70 truncate">{person.position}</p>
              <p className="text-foreground/70 truncate">{person.email}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-3 sm:p-4 bg-primary/10 border border-primary/30 rounded-lg">
        <p className="text-xs sm:text-sm text-foreground leading-relaxed">
          By submitting this form, you confirm that all information is accurate and complete. Our compliance team will review your registration within 24-48 hours.
        </p>
      </div>
    </div>
  )
}
