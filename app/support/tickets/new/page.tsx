'use client'

import { useState } from 'react'
import { ArrowLeft, Send, Paperclip, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import Link from 'next/link'
import DashboardSidebar from '@/components/dashboard/sidebar'
import TopNav from '@/components/dashboard/top-nav'

const ticketCategories = [
  { value: 'technical', label: 'Technical Issue' },
  { value: 'billing', label: 'Billing & Payments' },
  { value: 'account', label: 'Account Management' },
  { value: 'conversion', label: 'Currency Conversion' },
  { value: 'compliance', label: 'Compliance & Verification' },
  { value: 'api', label: 'API & Integration' },
  { value: 'feature', label: 'Feature Request' },
  { value: 'other', label: 'Other' }
]

const priorityLevels = [
  { value: 'low', label: 'Low', description: 'General inquiry or non-urgent' },
  { value: 'normal', label: 'Normal', description: 'Standard support request' },
  { value: 'high', label: 'High', description: 'Impact on operations' },
  { value: 'urgent', label: 'Urgent', description: 'Critical issue requiring immediate attention' }
]

export default function NewTicketPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    subject: '',
    category: '',
    priority: 'normal',
    description: '',
    attachments: [] as File[]
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    // Validation
    const newErrors: Record<string, string> = {}
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.category) newErrors.category = 'Category is required'
    if (!formData.description.trim()) newErrors.description = 'Description is required'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))

    // Here you would submit to your backend
    // await fetch('/api/support/tickets', { method: 'POST', body: JSON.stringify(formData) })

    setIsSubmitting(false)
    
    // Redirect to success page or show success message
    alert('Ticket submitted successfully! Ticket ID: #' + Math.floor(Math.random() * 10000))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData({ ...formData, attachments: [...formData.attachments, ...files] })
  }

  const removeAttachment = (index: number) => {
    setFormData({
      ...formData,
      attachments: formData.attachments.filter((_, i) => i !== index)
    })
  }

  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopNav />
        
        <main className="flex-1 overflow-auto">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Link href="/support" className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground mb-4 sm:mb-6">
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          Back to Support
        </Link>

        <Card>
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl">Submit a Support Ticket</CardTitle>
            <CardDescription className="text-xs sm:text-sm">
              Describe your issue and our team will get back to you as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Subject */}
              <div>
                <Label htmlFor="subject" className="text-xs sm:text-sm">Subject *</Label>
                <Input
                  id="subject"
                  placeholder="Brief description of your issue"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className={`text-sm sm:text-base ${errors.subject ? 'border-destructive' : ''}`}
                />
                {errors.subject && (
                  <p className="text-xs sm:text-sm text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Category and Priority */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <Label htmlFor="category" className="text-xs sm:text-sm">Category *</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger id="category" className={`text-sm sm:text-base ${errors.category ? 'border-destructive' : ''}`}>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {ticketCategories.map((cat) => (
                        <SelectItem key={cat.value} value={cat.value}>
                          {cat.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-xs sm:text-sm text-destructive mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                      <span>{errors.category}</span>
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="priority" className="text-xs sm:text-sm">Priority</Label>
                  <Select
                    value={formData.priority}
                    onValueChange={(value) => setFormData({ ...formData, priority: value })}
                  >
                    <SelectTrigger id="priority" className="text-sm sm:text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {priorityLevels.map((priority) => (
                        <SelectItem key={priority.value} value={priority.value}>
                          <div>
                            <div className="font-medium text-sm">{priority.label}</div>
                            <div className="text-xs text-muted-foreground">{priority.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description" className="text-xs sm:text-sm">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed information about your issue. Include any error messages, steps to reproduce, or relevant context."
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className={`text-sm sm:text-base ${errors.description ? 'border-destructive' : ''}`}
                />
                {errors.description && (
                  <p className="text-xs sm:text-sm text-destructive mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span>{errors.description}</span>
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  The more details you provide, the faster we can help you
                </p>
              </div>

              {/* Attachments */}
              <div>
                <Label htmlFor="attachments" className="text-xs sm:text-sm">Attachments (Optional)</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-4 sm:p-6">
                  <input
                    type="file"
                    id="attachments"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="attachments"
                    className="flex flex-col items-center justify-center cursor-pointer"
                  >
                    <Paperclip className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground mb-2" />
                    <span className="text-xs sm:text-sm font-medium text-foreground mb-1 text-center">
                      Click to upload or drag and drop
                    </span>
                    <span className="text-xs text-muted-foreground text-center">
                      PDF, PNG, JPG up to 10MB each
                    </span>
                  </label>
                </div>

                {formData.attachments.length > 0 && (
                  <div className="mt-3 sm:mt-4 space-y-2">
                    {formData.attachments.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between gap-2 p-2 sm:p-3 bg-muted rounded-lg"
                      >
                        <span className="text-xs sm:text-sm truncate flex-1 min-w-0">{file.name}</span>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeAttachment(index)}
                          className="text-xs sm:text-sm flex-shrink-0"
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-3 sm:pt-4 border-t border-border">
                <p className="text-xs sm:text-sm text-muted-foreground">
                  We typically respond within 24 hours during business days
                </p>
                <Button type="submit" disabled={isSubmitting} size="sm" className="w-full sm:w-auto text-xs sm:text-sm">
                  {isSubmitting ? (
                    <>Submitting...</>
                  ) : (
                    <>
                      <Send className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Submit Ticket
                    </>
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Helpful Tips */}
        <Card className="mt-4 sm:mt-6 bg-muted/30">
          <CardContent className="p-4 sm:p-6">
            <h3 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Tips for faster resolution:</h3>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span>Include specific error messages or screenshots if applicable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span>Mention when the issue started and what you were doing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span>Provide your organization name and relevant account details</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary flex-shrink-0">•</span>
                <span>Check our knowledge base first - your question might already be answered</span>
              </li>
            </ul>
          </CardContent>
        </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

