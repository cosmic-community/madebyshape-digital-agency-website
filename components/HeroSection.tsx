import { Page } from '@/types'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface HeroSectionProps {
  page: Page
}

export default function HeroSection({ page }: HeroSectionProps) {
  const heroImage = page.metadata?.hero_image?.imgix_url
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${heroImage}?w=1920&h=1080&fit=crop&auto=format,compress`}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 to-primary-900/40" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {page.metadata?.hero_headline && (
            <div 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in"
              dangerouslySetInnerHTML={{ __html: page.metadata.hero_headline }}
            />
          )}
          
          {page.metadata?.hero_subtext && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up">
              {page.metadata.hero_subtext}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link href="/work" className="btn-primary text-lg px-8 py-4">
              View Our Work
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-8 py-4 bg-transparent border-white text-white hover:bg-white hover:text-primary-900">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}