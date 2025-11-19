'use client'

import { useState, useRef } from 'react'
import { Upload, X, FileIcon, AlertCircle, Image } from 'lucide-react'

interface DocumentsStepProps {
  data: any
  setData: (data: any) => void
  errors: Record<string, string>
}

export default function DocumentsStep({
  data,
  setData,
  errors
}: DocumentsStepProps) {
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      addDocuments(files)
    }
  }

  const addDocuments = (files: File[]) => {
    const newDocs = files.map((file, idx) => {
      let preview = null
      // Create preview URL for images
      if (file.type.startsWith('image/')) {
        preview = URL.createObjectURL(file)
      }
      return {
        id: Date.now() + idx,
        name: file.name,
        size: file.size,
        type: file.type,
        file: file, // Store actual file object
        preview: preview // Store preview URL for images
      }
    })
    setData({
      ...data,
      documents: [...data.documents, ...newDocs]
    })
  }

  const removeDocument = (id: number) => {
    // Clean up preview URLs when removing documents
    const doc = data.documents.find((d: any) => d.id === id)
    if (doc?.preview) {
      URL.revokeObjectURL(doc.preview)
    }
    setData({
      ...data,
      documents: data.documents.filter((doc: any) => doc.id !== id)
    })
  }

  const formatSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1 sm:mb-2">Required Documents</h2>
        <p className="text-xs sm:text-sm text-foreground/70">Upload CAC certificate, board resolution, and any supporting documents</p>
      </div>

      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={handleUploadClick}
        className={`border-2 border-dashed rounded-lg p-6 sm:p-8 lg:p-12 text-center cursor-pointer transition-all ${
          dragActive
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50 hover:bg-background/50'
        }`}
      >
        <Upload className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${dragActive ? 'text-primary' : 'text-foreground/50'}`} />
        <p className="text-sm sm:text-base font-medium text-foreground mb-1">Drag files here or click to upload</p>
        <p className="text-xs sm:text-sm text-foreground/70">Supports PDF, JPG, PNG (Max 10MB each)</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.gif,.webp"
          onChange={(e) => e.target.files && addDocuments(Array.from(e.target.files))}
          className="hidden"
        />
      </div>

      {errors.documents && (
        <div className="flex items-center gap-2 p-3 sm:p-4 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-xs sm:text-sm">
          <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
          <span>{errors.documents}</span>
        </div>
      )}

      {data.documents.length > 0 && (
        <div>
          <h3 className="text-sm sm:text-base font-medium text-foreground mb-2 sm:mb-3">Uploaded Documents ({data.documents.length})</h3>
          <div className="space-y-2">
            {data.documents.map((doc: any) => (
              <div key={doc.id} className="flex items-center justify-between p-3 sm:p-4 bg-background rounded-lg border border-border hover:border-primary/30 transition-all">
                <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                  {doc.preview ? (
                    <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-background border border-border overflow-hidden">
                      <img 
                        src={doc.preview || "/placeholder.svg"} 
                        alt={doc.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <FileIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm font-medium text-foreground truncate">{doc.name}</p>
                    <p className="text-xs text-foreground/70">{formatSize(doc.size)}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeDocument(doc.id)}
                  className="p-1.5 sm:p-2 hover:bg-destructive/10 rounded-lg transition-colors flex-shrink-0 ml-2"
                  aria-label="Remove document"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-destructive" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
