import { TestimonialsSectionProps, Testimonial } from '@/types'
import { Quote } from 'lucide-react'

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (!testimonials || testimonials.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-primary-900 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Don't just take our word for it - here's what our clients have to say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: Testimonial) => (
            <div key={testimonial.id} className="card bg-white/10 backdrop-blur-sm p-8 text-center">
              <Quote size={40} className="text-accent-400 mx-auto mb-6" />
              
              {testimonial.metadata?.quote && (
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">
                  "{testimonial.metadata.quote}"
                </p>
              )}
              
              <div className="flex flex-col items-center">
                {testimonial.metadata?.client_photo && (
                  <img
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata?.client_name || 'Client photo'}
                    className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-white/20"
                  />
                )}
                
                <div>
                  {testimonial.metadata?.client_name && (
                    <p className="font-semibold text-white mb-1">
                      {testimonial.metadata.client_name}
                    </p>
                  )}
                  
                  {testimonial.metadata?.client_title && testimonial.metadata?.company_name && (
                    <p className="text-gray-300 text-sm">
                      {testimonial.metadata.client_title} at {testimonial.metadata.company_name}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}