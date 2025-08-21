import Link from 'next/link'
import { Search, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 rounded-full mb-8">
          <Search className="w-10 h-10 text-primary-600" />
        </div>
        
        <h1 className="text-6xl font-bold text-primary-900 mb-4">
          404
        </h1>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center">
            <Home size={20} className="mr-2" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}