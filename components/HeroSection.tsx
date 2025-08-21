import { getHomePage, getFeaturedTestimonials } from '@/lib/cosmic'
import { Page, Testimonial } from '@/types'
import Link from 'next/link'
import { ArrowRight, Star, Play, CheckCircle } from 'lucide-react'

export default async function HeroSection() {
  const homePage = await getHomePage() as Page | null
  const testimonials = await getFeaturedTestimonials() as Testimonial[]

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="shape-blob w-96 h-96 bg-accent-500 top-20 -left-20 animate-pulse-glow"></div>
        <div className="shape-blob w-64 h-64 bg-accent-400 bottom-32 right-20 animate-float"></div>
        <div className="shape-blob w-48 h-48 bg-accent-600 top-1/2 left-1/3 animate-pulse-glow"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-accent-400 font-medium text-sm">
                <CheckCircle size={16} />
                <span>Hiya, we're Shape 👋</span>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {homePage?.metadata?.hero_headline ? (
                  <span dangerouslySetInnerHTML={{ __html: homePage.metadata.hero_headline }} />
                ) : (
                  <>
                    A web design and<br />
                    branding agency<br />
                    in Manchester
                  </>
                )}
              </h1>
              
              <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                {homePage?.metadata?.hero_subtext || 
                "An award winning agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/work" className="btn-primary">
                View our work
                <ArrowRight size={18} className="ml-2" />
              </Link>
              
              <Link href="/about" className="btn-outline text-white border-white hover:bg-white hover:text-primary-900">
                Meet the team
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>

            {/* Stats or badges */}
            <div className="flex items-center space-x-8 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">14+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">200+</div>
                <div className="text-sm text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent-400 fill-current" />
                  ))}
                </div>
                <div className="text-sm text-gray-300 mt-1">Client Rating</div>
              </div>
            </div>
          </div>

          {/* Right side - Visual Content */}
          <div className="relative">
            {/* Main content card */}
            <div className="overlay-card text-center">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-accent-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Play size={24} className="text-white ml-1" />
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Watch our story
                  </h3>
                  <p className="text-gray-300">
                    Discover how we help businesses grow through creative design and digital solutions.
                  </p>
                </div>

                <button className="btn-primary w-full">
                  Get in touch
                </button>
              </div>
            </div>

            {/* Floating testimonial card */}
            {testimonials.length > 0 && (
              <div className="absolute -bottom-8 -left-8 glass-effect p-6 max-w-sm animate-float">
                <div className="flex items-start space-x-4">
                  {testimonials[0].metadata?.client_photo && (
                    <img
                      src={`${testimonials[0].metadata.client_photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                      alt={testimonials[0].metadata?.client_name || ''}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="text-accent-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-white font-medium leading-relaxed">
                      "{testimonials[0].metadata?.quote}"
                    </p>
                    <div className="mt-2">
                      <p className="text-xs text-gray-300 font-medium">
                        {testimonials[0].metadata?.client_name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {testimonials[0].metadata?.client_title} at {testimonials[0].metadata?.company_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary content overlay */}
            <div className="absolute -top-8 -right-8 glass-effect px-6 py-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-sm font-medium">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve transition */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-50 transform rotate-180">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 C600,20 600,20 1200,120 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  )
}