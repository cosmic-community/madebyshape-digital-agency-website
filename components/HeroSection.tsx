import { HeroSectionProps } from '@/types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection({ page }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 text-white overflow-hidden">
      {/* Background Image */}
      {page.metadata?.hero_image && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${page.metadata.hero_image.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress`}
            alt="Hero background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-primary-900/50" />
        </div>
      )}

      {/* Content */}
      <div className="container relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {page.metadata?.hero_headline ? (
            <div
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: page.metadata.hero_headline }}
            />
          ) : (
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {page.metadata?.page_title || page.title}
            </h1>
          )}
          
          {page.metadata?.hero_subtext && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
              {page.metadata.hero_subtext}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/work" 
              className="btn-primary bg-white text-primary-900 hover:bg-gray-100 inline-flex items-center"
            >
              View Our Work
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              href="/contact" 
              className="btn-secondary text-white border-white hover:bg-white hover:text-primary-900 inline-flex items-center"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}