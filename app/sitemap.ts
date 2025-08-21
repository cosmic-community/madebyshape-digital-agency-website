import { MetadataRoute } from 'next'
import { getProjects, getBlogPosts, getServices } from '@/lib/cosmic'
import { Project, BlogPost, Service } from '@/types'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://madebyshape.co.uk'

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]

  try {
    // Dynamic project pages
    const projects = await getProjects() as Project[]
    const projectPages: MetadataRoute.Sitemap = projects.map((project: Project) => ({
      url: `${baseUrl}/work/${project.slug}`,
      lastModified: new Date(project.modified_at),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    // Dynamic blog post pages
    const posts = await getBlogPosts() as BlogPost[]
    const blogPages: MetadataRoute.Sitemap = posts.map((post: BlogPost) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.modified_at),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))

    // Dynamic service pages
    const services = await getServices() as Service[]
    const servicePages: MetadataRoute.Sitemap = services.map((service: Service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: new Date(service.modified_at),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))

    return [...staticPages, ...projectPages, ...blogPages, ...servicePages]
  } catch (error) {
    console.error('Error generating sitemap:', error)
    // Return static pages if dynamic content fails
    return staticPages
  }
}