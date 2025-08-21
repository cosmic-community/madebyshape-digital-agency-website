import { getFeaturedServices } from '@/lib/cosmic'
import { Service } from '@/types'
import Link from 'next/link'
import { ArrowRight, Zap, Shield, Target, Rocket } from 'lucide-react'

const iconMap = {
  design: Target,
  development: Rocket,
  marketing: Zap,
  branding: Shield,
}

export default async function ServicesShowcase() {
  const services = await getFeaturedServices() as Service[]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-800 text-sm font-medium mb-6">
            <Zap size={16} className="mr-2" />
            Our Expertise
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            How we take your business<br />
            to the next level
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are a digital marketing agency with expertise, and we're on a mission to help you 
            take the next step in your business.
          </p>
        </div>

        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const category = service.metadata?.service_category?.key || 'design'
              const IconComponent = iconMap[category as keyof typeof iconMap] || Target
              
              return (
                <div key={service.id} className="group">
                  <div className="card p-8 hover:shadow-soft transition-all duration-300 h-full relative overflow-hidden">
                    {/* Card background decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-50 to-transparent opacity-50 rounded-bl-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center group-hover:bg-accent-200 transition-colors duration-300">
                          <IconComponent size={24} className="text-accent-600" />
                        </div>
                        
                        {service.metadata?.service_category && (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                            {service.metadata.service_category.value}
                          </span>
                        )}
                      </div>
                      
                      <h3 className="text-2xl font-bold text-primary-900 mb-4 group-hover:text-accent-600 transition-colors duration-200">
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
                        Learn more
                        <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Zap size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600">Services will appear here once they are added to your Cosmic bucket.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-4">
            <Link
              href="/services"
              className="btn-primary"
            >
              View All Services
              <ArrowRight size={18} className="ml-2" />
            </Link>
            
            <Link
              href="/contact"
              className="btn-secondary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}