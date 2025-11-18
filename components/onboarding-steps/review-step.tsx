'use client'

import { CheckCircle } from 'lucide-react'

interface ReviewStepProps {
  data: any
}

export default function ReviewStep({ data }: ReviewStepProps) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-2">Review Your Information</h2>
        <p className="text-foreground/70">Please verify all details before submitting</p>
      </div>

      {/* Organization Details */}
      <div className="p-6 bg-background rounded-lg border border-border space-y-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Organization Details
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-foreground/70">Organization Name</p>
            <p className="font-medium text-foreground">{data.orgName}</p>
          </div>
          <div>
            <p className="text-foreground/70">CAC Certificate</p>
            <p className="font-medium text-foreground">{data.cacCertificate}</p>
          </div>
          <div>
            <p className="text-foreground/70">TIN</p>
            <p className="font-medium text-foreground">{data.tin}</p>
          </div>
        </div>
      </div>

      {/* Documents */}
      <div className="p-6 bg-background rounded-lg border border-border space-y-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Documents ({data.documents.length})
        </h3>
        <div className="space-y-2">
          {data.documents.map((doc: any) => (
            <div key={doc.id} className="text-sm text-foreground/70">
              • {doc.name}
            </div>
          ))}
        </div>
      </div>

      {/* Authorized Persons */}
      <div className="p-6 bg-background rounded-lg border border-border space-y-4">
        <h3 className="font-semibold text-foreground flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-primary" />
          Authorized Persons ({data.authorizedPersons.length})
        </h3>
        <div className="space-y-3">
          {data.authorizedPersons.map((person: any) => (
            <div key={person.id} className="text-sm">
              <p className="font-medium text-foreground">{person.fullName}</p>
              <p className="text-foreground/70">{person.position}</p>
              <p className="text-foreground/70">{person.email}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
        <p className="text-sm text-foreground">
          By submitting this form, you confirm that all information is accurate and complete. Our compliance team will review your registration within 24-48 hours.
        </p>
      </div>
    </div>
  )
}
