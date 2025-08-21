import { Page } from '@/types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroSectionProps {
  page: Page | null
}

export default function HeroSection({ page }: HeroSectionProps) {
  // Fallback content if no page data is available
  const defaultHeadline = "<h1>A web design and<br>branding agency<br>in Manchester</h1>"
  const defaultSubtext = "An award winning agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards."
  const defaultImage = {
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000&auto=format,compress",
    imgix_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000&auto=format,compress"
  }

  const heroHeadline = page?.metadata?.hero_headline || defaultHeadline
  const heroSubtext = page?.metadata?.hero_subtext || defaultSubtext
  const heroImage = page?.metadata?.hero_image || defaultImage

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={`${heroImage.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress`}
          alt="Hero background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-600/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container py-20">
        <div className="max-w-4xl">
          <div 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight"
            dangerouslySetInnerHTML={{ __html: heroHeadline }}
          />
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
            {heroSubtext}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="btn-primary bg-white text-primary-900 hover:bg-gray-100 inline-flex items-center justify-center"
            >
              Start a Project
              <ArrowRight size={20} className="ml-2" />
            </Link>
            
            <Link 
              href="/work" 
              className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900 inline-flex items-center justify-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}