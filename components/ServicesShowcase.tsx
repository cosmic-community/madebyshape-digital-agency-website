import { Service } from '@/types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServicesShowcaseProps {
  services: Service[]
}

export default function ServicesShowcase({ services }: ServicesShowcaseProps) {
  if (!services || services.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            How we take your business to the next level
          </p>
          <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
            We are a digital marketing agency with expertise, and we're on a mission to help you take the next step in your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="card p-8 text-center group hover:shadow-soft transition-all duration-300"
            >
              {service.metadata?.featured_image && (
                <div className="mb-6 overflow-hidden rounded-lg">
                  <img
                    src={`${service.metadata.featured_image.imgix_url}?w=400&h=250&fit=crop&auto=format,compress`}
                    alt={service.metadata?.service_name || service.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-primary-900 mb-4">
                {service.metadata?.service_name || service.title}
              </h3>
              
              {service.metadata?.short_description && (
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.metadata.short_description}
                </p>
              )}
              
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-accent-600 hover:text-accent-500 font-medium group-hover:translate-x-1 transition-all duration-200"
              >
                Learn More
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}