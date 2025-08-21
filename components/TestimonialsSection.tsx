import { Testimonial } from '@/types'
import { Quote } from 'lucide-react'

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card p-8 lg:p-10 relative"
            >
              <Quote className="absolute top-6 left-6 text-accent-600 opacity-20" size={32} />
              
              {testimonial.metadata?.quote && (
                <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 mb-8 leading-relaxed relative z-10">
                  "{testimonial.metadata.quote}"
                </blockquote>
              )}
              
              <div className="flex items-center space-x-4">
                {testimonial.metadata?.client_photo && (
                  <img
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata?.client_name || 'Client'}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.metadata?.client_name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.metadata?.client_title && (
                      <span>{testimonial.metadata.client_title}</span>
                    )}
                    {testimonial.metadata?.client_title && testimonial.metadata?.company_name && (
                      <span>, </span>
                    )}
                    {testimonial.metadata?.company_name && (
                      <span>{testimonial.metadata.company_name}</span>
                    )}
                  </div>
                </div>
              </div>
              
              {testimonial.metadata?.company_logo && (
                <div className="mt-6">
                  <img
                    src={`${testimonial.metadata.company_logo.imgix_url}?w=200&h=60&fit=contain&auto=format,compress`}
                    alt={testimonial.metadata?.company_name || 'Company logo'}
                    className="h-8 w-auto opacity-60"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}