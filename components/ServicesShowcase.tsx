import { ServicesShowcaseProps, Service } from '@/types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServicesShowcase({ services }: ServicesShowcaseProps) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we take your business to the next level through strategic design and digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service) => (
            <Link key={service.id} href={`/services/${service.slug}`} className="group">
              <div className="card p-8 text-center hover:shadow-soft transition-all duration-300 h-full flex flex-col">
                {service.metadata?.featured_image && (
                  <div className="mb-6 overflow-hidden rounded-lg">
                    <img
                      src={`${service.metadata.featured_image.imgix_url}?w=400&h=250&fit=crop&auto=format,compress`}
                      alt={service.metadata?.service_name || service.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors duration-200">
                    {service.metadata?.service_name || service.title}
                  </h3>
                  
                  {service.metadata?.short_description && (
                    <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                      {service.metadata.short_description}
                    </p>
                  )}
                  
                  <div className="flex items-center justify-center text-accent-600 hover:text-accent-500 font-medium group-hover:translate-x-1 transition-all duration-200 mt-auto">
                    Learn More
                    <ArrowRight size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}