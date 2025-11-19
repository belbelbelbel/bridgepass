'use client'

import { useState, useRef } from 'react'
import { AlertCircle, Upload, FileIcon, X } from 'lucide-react'

interface OrgDetailsStepProps {
  data: any
  setData: (data: any) => void
  errors: Record<string, string>
}

export default function OrgDetailsStep({
  data,
  setData,
  errors
}: OrgDetailsStepProps) {
  const [boardResolutionFile, setBoardResolutionFile] = useState<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleChange = (field: string, value: string) => {
    setData({ ...data, [field]: value })
  }

  const handleBoardResolutionUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setBoardResolutionFile({
        name: file.name,
        size: file.size,
        type: file.type,
        file: file
      })
      setData({ ...data, boardResolution: file.name })
    }
  }

  const removeBoardResolutionFile = () => {
    setBoardResolutionFile(null)
    setData({ ...data, boardResolution: '' })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">Organization Details</h2>
        <p className="text-xs sm:text-sm text-foreground/70">Tell us about your NGO</p>
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
          Organization Name *
        </label>
        <input
          type="text"
          placeholder="Enter your NGO's registered name"
          value={data.orgName}
          onChange={(e) => handleChange('orgName', e.target.value)}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
            errors.orgName ? 'border-destructive' : 'border-border'
          }`}
        />
        {errors.orgName && (
          <div className="flex items-center gap-2 mt-1 sm:mt-2 text-destructive text-xs sm:text-sm">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>{errors.orgName}</span>
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
          CAC Certificate Number *
        </label>
        <input
          type="text"
          placeholder="e.g., RC123456789"
          value={data.cacCertificate}
          onChange={(e) => handleChange('cacCertificate', e.target.value)}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
            errors.cacCertificate ? 'border-destructive' : 'border-border'
          }`}
        />
        {errors.cacCertificate && (
          <div className="flex items-center gap-2 mt-1 sm:mt-2 text-destructive text-xs sm:text-sm">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>{errors.cacCertificate}</span>
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
          Tax Identification Number (TIN) *
        </label>
        <input
          type="text"
          placeholder="Enter your TIN"
          value={data.tin}
          onChange={(e) => handleChange('tin', e.target.value)}
          className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all ${
            errors.tin ? 'border-destructive' : 'border-border'
          }`}
        />
        {errors.tin && (
          <div className="flex items-center gap-2 mt-1 sm:mt-2 text-destructive text-xs sm:text-sm">
            <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>{errors.tin}</span>
          </div>
        )}
      </div>

      <div>
        <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">
          Board Resolution File (Optional)
        </label>
        <div className="space-y-2 sm:space-y-3">
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-dashed border-border rounded-lg hover:border-primary/50 hover:bg-background/50 transition-all"
          >
            <Upload className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">Click to upload board resolution</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={handleBoardResolutionUpload}
            className="hidden"
          />
          <p className="text-xs text-foreground/70">Supports PDF, JPG, PNG (Max 10MB)</p>
          
          {boardResolutionFile && (
            <div className="flex items-center justify-between p-2 sm:p-3 bg-background rounded-lg border border-border">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <FileIcon className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium truncate">{boardResolutionFile.name}</p>
                  <p className="text-xs text-foreground/70">{formatSize(boardResolutionFile.size)}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={removeBoardResolutionFile}
                className="p-1 sm:p-1.5 hover:bg-destructive/10 rounded transition-colors flex-shrink-0"
              >
                <X className="w-3 h-3 sm:w-4 sm:h-4 text-destructive" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
