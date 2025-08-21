import { HeroSectionProps } from '@/types'
import Link from 'next/link'

export default function HeroSection({ page }: HeroSectionProps) {
  const heroImage = page.metadata?.hero_image?.imgix_url
  const heroHeadline = page.metadata?.hero_headline || '<h1>Welcome to Our Agency</h1>'
  const heroSubtext = page.metadata?.hero_subtext || 'We create amazing digital experiences.'

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${heroImage}?w=1920&h=1080&fit=crop&auto=format,compress`}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary-900/70"></div>
        </div>
      )}
      
      {/* Content */}
      <div className={`relative z-10 w-full ${!heroImage ? 'bg-gradient-to-br from-primary-900 to-primary-600' : ''}`}>
        <div className="container section-padding text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: heroHeadline }}
              />
              
              <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
                {heroSubtext}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
                  Start a Project
                </Link>
                <Link href="/work" className="btn-secondary border-white text-white hover:bg-white hover:text-primary-900">
                  View Our Work
                </Link>
              </div>
            </div>
            
            {!heroImage && (
              <div className="hidden lg:block">
                <div className="aspect-square bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Award-Winning Agency</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}