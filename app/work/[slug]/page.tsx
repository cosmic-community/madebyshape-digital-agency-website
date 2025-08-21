// app/work/[slug]/page.tsx
import { getProjectBySlug } from '@/lib/cosmic'
import { Project } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ExternalLink, Calendar } from 'lucide-react'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug) as Project | null

  if (!project) {
    return {
      title: 'Project Not Found | MadeByShape',
      description: 'The project you are looking for could not be found.',
    }
  }

  return {
    title: `${project.metadata?.client_name || project.title} | MadeByShape Portfolio`,
    description: project.metadata?.project_description || `View our case study for ${project.metadata?.client_name || project.title}`,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = await getProjectBySlug(slug) as Project | null

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-600 text-white">
        <div className="container">
          <Link
            href="/work"
            className="inline-flex items-center text-gray-200 hover:text-white mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Work
          </Link>
          
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {project.metadata?.client_name || project.title}
            </h1>
            
            {project.metadata?.project_name && (
              <h2 className="text-2xl md:text-3xl text-gray-200 mb-6">
                {project.metadata.project_name}
              </h2>
            )}
            
            {project.metadata?.project_description && (
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                {project.metadata.project_description}
              </p>
            )}
            
            <div className="flex flex-wrap items-center gap-6">
              {project.metadata?.project_year && (
                <div className="flex items-center text-gray-200">
                  <Calendar size={20} className="mr-2" />
                  {project.metadata.project_year}
                </div>
              )}
              
              {project.metadata?.client_website && (
                <a
                  href={project.metadata.client_website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-200 hover:text-white transition-colors duration-200"
                >
                  <ExternalLink size={20} className="mr-2" />
                  Visit Website
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {project.metadata?.featured_image && (
        <section className="py-8 bg-white">
          <div className="container">
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-soft">
              <img
                src={`${project.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={project.metadata?.project_name || project.title}
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Services Used */}
      {project.metadata?.services_used && project.metadata.services_used.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container">
            <h3 className="text-2xl font-bold text-primary-900 mb-8 text-center">
              Services Used
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.metadata.services_used.map((service) => (
                <div key={service.id} className="card p-6 text-center">
                  <h4 className="font-semibold text-lg text-primary-900 mb-2">
                    {service.metadata?.service_name || service.title}
                  </h4>
                  {service.metadata?.short_description && (
                    <p className="text-gray-600 text-sm">
                      {service.metadata.short_description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Content */}
      {project.metadata?.case_study_content && (
        <section className="section-padding bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-primary-900 mb-8">
                Case Study
              </h3>
              
              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: project.metadata.case_study_content }}
              />
            </div>
          </div>
        </section>
      )}

      {/* Project Gallery */}
      {project.metadata?.project_gallery && project.metadata.project_gallery.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container">
            <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Project Gallery
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.metadata.project_gallery.map((image, index) => (
                <div key={index} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-soft">
                  <img
                    src={`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                    alt={`${project.metadata?.project_name || project.title} gallery image ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white text-center">
        <div className="container">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h3>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your next project.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-900 hover:bg-gray-100">
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  )
}