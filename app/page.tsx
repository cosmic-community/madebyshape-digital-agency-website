import HeroSection from '@/components/HeroSection'
import ServicesShowcase from '@/components/ServicesShowcase'
import FeaturedWork from '@/components/FeaturedWork'
import TestimonialsSection from '@/components/TestimonialsSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MadeByShape - Digital Agency Manchester | Web Design & Branding',
  description: 'Award-winning web design agency in Manchester specialising in web design, branding, eCommerce, digital marketing and organic SEO since 2010.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Secondary Hero Section */}
      <section className="section-padding bg-gray-50 relative">
        <div className="container text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900">
              We make websites profitable<br />
              through <span className="text-gradient">SEO</span> & <span className="text-gradient">Copy</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Our websites don't just look beautiful — they work. Every site we build is optimized for search engines 
              and designed to convert visitors into customers.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="btn-primary">
                Explore our work
              </button>
              
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-accent-100 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-accent-800">AW</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent-100 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-accent-800">JS</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent-100 border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-accent-800">MK</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium">Hear from Andy</p>
                  <p className="text-xs text-gray-500">Co-Founder of Shape</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-200 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent-300 rounded-full opacity-30 animate-pulse-glow"></div>
      </section>
      
      <ServicesShowcase />
      <FeaturedWork />
      <TestimonialsSection />
    </div>
  )
}