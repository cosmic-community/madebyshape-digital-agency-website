import { getFeaturedProjects } from '@/lib/cosmic'
import { Project } from '@/types'
import Link from 'next/link'
import { ArrowRight, Eye, Calendar, ExternalLink } from 'lucide-react'

export default async function FeaturedWork() {
  const projects = await getFeaturedProjects() as Project[]

  return (
    <section className="section-padding bg-gray-50 relative">
      {/* Curved top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-white">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C600,100 600,100 1200,0 L1200,120 L0,120 Z" fill="currentColor"></path>
        </svg>
      </div>

      <div className="container relative z-10 pt-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-100 text-accent-800 text-sm font-medium mb-6">
            <Eye size={16} className="mr-2" />
            Our Work
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Take a look at our projects
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're proud of the work we create with our clients. Here are some recent projects 
            that showcase our expertise and creativity.
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.slice(0, 4).map((project, index) => (
              <div key={project.id} className="group">
                <Link href={`/work/${project.slug}`}>
                  <div className="card overflow-hidden hover:shadow-soft transition-all duration-300 transform group-hover:-translate-y-2">
                    {project.metadata?.featured_image && (
                      <div className="relative overflow-hidden">
                        <img
                          src={`${project.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                          alt={project.metadata?.project_name || project.title}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-primary-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-center text-white">
                            <div className="w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center mx-auto mb-4">
                              <ArrowRight size={24} />
                            </div>
                            <p className="font-medium">View Case Study</p>
                          </div>
                        </div>
                        
                        {/* Project type badge */}
                        {project.metadata?.services_used && project.metadata.services_used.length > 0 && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 text-primary-900">
                              {project.metadata.services_used[0].metadata?.service_name || project.metadata.services_used[0].title}
                            </span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-primary-900 group-hover:text-accent-600 transition-colors duration-200">
                          {project.metadata?.client_name || project.title}
                        </h3>
                        
                        {project.metadata?.project_year && (
                          <div className="flex items-center text-gray-500 text-sm">
                            <Calendar size={16} className="mr-1" />
                            {project.metadata.project_year}
                          </div>
                        )}
                      </div>
                      
                      <h4 className="text-lg text-gray-600 mb-4">
                        {project.metadata?.project_name}
                      </h4>
                      
                      {project.metadata?.project_description && (
                        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                          {project.metadata.project_description}
                        </p>
                      )}
                      
                      {/* Services badges */}
                      {project.metadata?.services_used && project.metadata.services_used.length > 1 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.metadata.services_used.slice(0, 3).map((service) => (
                            <span
                              key={service.id}
                              className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800"
                            >
                              {service.metadata?.service_name || service.title}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-accent-600 hover:text-accent-500 font-medium group-hover:translate-x-1 transition-all duration-200">
                          View Case Study
                          <ArrowRight size={16} className="ml-1" />
                        </div>
                        
                        {project.metadata?.client_website && (
                          <a
                            href={project.metadata.client_website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-600">Projects will appear here once they are added to your Cosmic bucket.</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/work"
            className="btn-primary"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}