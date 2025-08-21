import { TestimonialsSectionProps } from '@/types'
import { Quote } from 'lucide-react'

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  if (testimonials.length === 0) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="container text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600">Testimonials will appear here once they are added to your Cosmic bucket.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-8">
              <div className="flex items-start mb-6">
                <Quote className="text-accent-600 flex-shrink-0 mr-4" size={32} />
                <blockquote className="text-lg text-gray-700 leading-relaxed">
                  "{testimonial.metadata?.quote}"
                </blockquote>
              </div>
              
              <div className="flex items-center">
                {testimonial.metadata?.client_photo && (
                  <img
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata?.client_name || 'Client'}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <cite className="font-semibold text-primary-900 not-italic">
                    {testimonial.metadata?.client_name}
                  </cite>
                  {testimonial.metadata?.client_title && testimonial.metadata?.company_name && (
                    <p className="text-gray-600 text-sm">
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