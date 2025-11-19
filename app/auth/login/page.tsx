'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (email && password) {
      router.push('/dashboard')
    } else {
      setError('Please enter valid credentials')
    }

    setIsLoading(false)
  }

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <span className="text-lg sm:text-xl font-bold text-primary-foreground">N</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">Naira Bridge</h1>
          <p className="text-sm sm:text-base text-foreground/70">Secure international payment platform</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg border border-border p-6 sm:p-8 space-y-5 sm:space-y-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-1">Welcome Back</h2>
            <p className="text-sm sm:text-base text-foreground/70">Sign in to your account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-foreground mb-1 sm:mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all pr-10 sm:pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/50 hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Eye className="w-4 h-4 sm:w-5 sm:h-5" />}
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
              <label className="flex items-center gap-2 text-xs sm:text-sm text-foreground/70">
                <input type="checkbox" className="rounded border-border w-3 h-3 sm:w-4 sm:h-4" />
                <span>Remember me</span>
              </label>
              <Link href="/auth/forgot-password" className="text-xs sm:text-sm text-primary hover:underline font-medium">
                Forgot Password?
              </Link>
            </div>

            {error && (
              <div className="p-2.5 sm:p-3 bg-destructive/10 border border-destructive/30 rounded-lg text-destructive text-xs sm:text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 py-2.5 sm:py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 disabled:opacity-50 transition-all font-medium text-sm sm:text-base"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              {!isLoading && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>

          <div className="pt-3 sm:pt-4 border-t border-border">
            <p className="text-center text-foreground/70 text-xs sm:text-sm">
              Don't have an account?{' '}
              <Link href="/auth/register" className="text-primary hover:underline font-medium">
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
