import { getServices } from '@/lib/cosmic'
import { Service } from '@/types'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Services | MadeByShape - Web Design & Digital Marketing',
  description: 'Explore our comprehensive range of services including web design, branding, SEO, and digital marketing solutions to grow your business.',
}

export default async function ServicesPage() {
  const services = await getServices() as Service[]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-600 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We offer a comprehensive range of services to help your business grow and succeed in the digital world.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <div key={service.id} className="group">
                  <Link href={`/services/${service.slug}`}>
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
                        <h2 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors duration-200">
                          {service.metadata?.service_name || service.title}
                        </h2>
                        
                        {service.metadata?.short_description && (
                          <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                            {service.metadata.short_description}
                          </p>
                        )}
                        
                        {service.metadata?.service_category && (
                          <div className="mb-6">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-100 text-accent-800">
                              {service.metadata.service_category.value}
                            </span>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-center text-accent-600 hover:text-accent-500 font-medium group-hover:translate-x-1 transition-all duration-200">
                          Learn More
                          <ArrowRight size={16} className="ml-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No services found</h2>
              <p className="text-gray-600">Services will appear here once they are added to your Cosmic bucket.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white text-center">
        <div className="container">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help your business grow and succeed.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}