// app/services/[slug]/page.tsx
import { getServiceBySlug } from '@/lib/cosmic'
import { Service } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, CheckCircle } from 'lucide-react'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = await getServiceBySlug(slug) as Service | null

  if (!service) {
    return {
      title: 'Service Not Found | MadeByShape',
      description: 'The service you are looking for could not be found.',
    }
  }

  return {
    title: `${service.metadata?.service_name || service.title} | MadeByShape Services`,
    description: service.metadata?.short_description || `Learn about our ${service.metadata?.service_name || service.title} services`,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = await getServiceBySlug(slug) as Service | null

  if (!service) {
    notFound()
  }

  // Mock benefits for demonstration
  const benefits = [
    'Professional, custom design',
    'Mobile-first approach',
    'SEO optimization included',
    'Ongoing support and maintenance',
    'Fast turnaround times',
    'Competitive pricing',
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-600 text-white">
        <div className="container">
          <Link
            href="/services"
            className="inline-flex items-center text-gray-200 hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.metadata?.service_name || service.title}
            </h1>
            
            {service.metadata?.short_description && (
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {service.metadata.short_description}
              </p>
            )}
            
            {service.metadata?.service_category && (
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white">
                {service.metadata.service_category.value}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {service.metadata?.featured_image && (
        <section className="py-8 bg-white">
          <div className="container">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-soft">
              <img
                src={`${service.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={service.metadata?.service_name || service.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Service Description */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {service.metadata?.full_description && (
              <div
                className="prose prose-lg max-w-none mb-12"
                dangerouslySetInnerHTML={{ __html: service.metadata.full_description }}
              />
            )}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              What You Get
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white text-center">
        <div className="container">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Get Started?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.metadata?.service_name || service.title} service can help your business grow.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}