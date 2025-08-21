import { FeaturedWorkProps, Project, Service } from '@/types'
import Link from 'next/link'
import { ArrowRight, Calendar } from 'lucide-react'

export default function FeaturedWork({ projects }: FeaturedWorkProps) {
  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-900 mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take a look at our projects and see how we help businesses grow
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project: Project) => (
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
                          {project.metadata.services_used.slice(0, 2).map((service: Service) => (
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
                    
                    <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-200">
                      {project.metadata?.client_name || project.title}
                    </h3>
                    
                    <h4 className="text-lg text-gray-600 mb-4">
                      {project.metadata?.project_name}
                    </h4>
                    
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

        <div className="text-center mt-12">
          <Link href="/work" className="btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}