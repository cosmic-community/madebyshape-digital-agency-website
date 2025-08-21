import { getFeaturedTestimonials } from '@/lib/cosmic'
import { Testimonial } from '@/types'
import { Star, Quote, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default async function TestimonialsSection() {
  const testimonials = await getFeaturedTestimonials() as Testimonial[]

  return (
    <section className="section-padding bg-primary-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="shape-blob w-96 h-96 bg-accent-500/20 top-20 right-20 animate-pulse-glow"></div>
        <div className="shape-blob w-64 h-64 bg-accent-400/20 bottom-32 left-20 animate-float"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-accent-400 text-sm font-medium mb-6">
            <Star size={16} className="mr-2" />
            What Our Clients Say
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by amazing businesses
          </h2>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're proud to work with incredible clients who trust us to deliver exceptional results 
            for their digital projects.
          </p>
        </div>

        {testimonials.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="group">
                <div className="glass-effect p-8 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center mb-6">
                    <Quote size={20} className="text-accent-400" />
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-accent-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  {testimonial.metadata?.quote && (
                    <blockquote className="text-lg text-white mb-8 leading-relaxed flex-1">
                      "{testimonial.metadata.quote}"
                    </blockquote>
                  )}
                  
                  {/* Client info */}
                  <div className="flex items-center space-x-4">
                    {testimonial.metadata?.client_photo && (
                      <img
                        src={`${testimonial.metadata.client_photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                        alt={testimonial.metadata?.client_name || ''}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                      />
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">
                        {testimonial.metadata?.client_name}
                      </h4>
                      <p className="text-gray-300 text-sm">
                        {testimonial.metadata?.client_title && testimonial.metadata.client_title}{' '}
                        {testimonial.metadata?.company_name && `at ${testimonial.metadata.company_name}`}
                      </p>
                    </div>
                    {testimonial.metadata?.company_logo && (
                      <img
                        src={`${testimonial.metadata.company_logo.imgix_url}?w=60&h=60&fit=max&auto=format,compress`}
                        alt={testimonial.metadata?.company_name || ''}
                        className="w-8 h-8 object-contain opacity-70"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Quote size={32} className="text-white/60" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">No testimonials found</h3>
            <p className="text-gray-300">Testimonials will appear here once they are added to your Cosmic bucket.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Ready to start your project?
            </h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch to discuss your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
                Start a Project
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link href="/work" className="btn-outline text-white border-white hover:bg-white hover:text-primary-900">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}