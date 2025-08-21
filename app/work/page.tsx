import { getProjects } from '@/lib/cosmic'
import { Project } from '@/types'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Work | MadeByShape - Digital Agency Portfolio',
  description: 'Explore our portfolio of web design, branding, and digital marketing projects. See how we help businesses grow through creative solutions.',
}

export default async function WorkPage() {
  const projects = await getProjects() as Project[]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-600 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Work
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Take a look at our projects and see how we help businesses grow through creative design and digital solutions.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group">
                  <Link href={`/work/${project.slug}`}>
                    <div className="card overflow-hidden hover:shadow-soft transition-all duration-300">
                      {project.metadata?.featured_image && (
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                          <img
                            src={`${project.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                            alt={project.metadata?.project_name || project.title}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          {project.metadata?.services_used && project.metadata.services_used.length > 0 && (
                            <div className="flex items-center space-x-2">
                              {project.metadata.services_used.slice(0, 2).map((service) => (
                                <span
                                  key={service.id}
                                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800"
                                >
                                  {service.metadata?.service_name || service.title}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          {project.metadata?.project_year && (
                            <div className="flex items-center text-gray-500 text-sm">
                              <Calendar size={16} className="mr-1" />
                              {project.metadata.project_year}
                            </div>
                          )}
                        </div>
                        
                        <h2 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-200">
                          {project.metadata?.client_name || project.title}
                        </h2>
                        
                        <h3 className="text-lg text-gray-600 mb-4">
                          {project.metadata?.project_name}
                        </h3>
                        
                        {project.metadata?.project_description && (
                          <p className="text-gray-600 mb-6 leading-relaxed">
                            {project.metadata.project_description}
                          </p>
                        )}
                        
                        <div className="flex items-center text-accent-600 hover:text-accent-500 font-medium group-hover:translate-x-1 transition-all duration-200">
                          View Case Study
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
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No projects found</h2>
              <p className="text-gray-600">Projects will appear here once they are added to your Cosmic bucket.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}