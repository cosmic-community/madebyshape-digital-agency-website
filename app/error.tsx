'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-8">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Oops! Something went wrong
        </h1>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          We're sorry, but something unexpected happened. Please try again or go back to the homepage.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary inline-flex items-center"
          >
            <RefreshCcw size={20} className="mr-2" />
            Try Again
          </button>
          
          <Link href="/" className="btn-secondary inline-flex items-center">
            <Home size={20} className="mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}