import { getHomePage, getFeaturedProjects, getFeaturedServices, getFeaturedTestimonials } from '@/lib/cosmic'
import { Page, Project, Service, Testimonial } from '@/types'
import HeroSection from '@/components/HeroSection'
import ServicesShowcase from '@/components/ServicesShowcase'
import FeaturedWork from '@/components/FeaturedWork'
import TestimonialsSection from '@/components/TestimonialsSection'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const page = await getHomePage() as Page | null
  
  if (!page) {
    return {
      title: 'MadeByShape - Web Design & Digital Agency',
      description: 'Award-winning web design agency specialising in web design, branding, and digital marketing.',
    }
  }

  return {
    title: page.metadata?.seo_title || page.metadata?.page_title || 'MadeByShape - Web Design & Digital Agency',
    description: page.metadata?.seo_description || 'Award-winning web design agency specialising in web design, branding, and digital marketing.',
  }
}

export default async function HomePage() {
  const [page, featuredProjects, featuredServices, featuredTestimonials] = await Promise.all([
    getHomePage() as Promise<Page | null>,
    getFeaturedProjects() as Promise<Project[]>,
    getFeaturedServices() as Promise<Service[]>,
    getFeaturedTestimonials() as Promise<Testimonial[]>,
  ])

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to MadeByShape</h1>
          <p className="text-gray-600">Your digital agency website</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <HeroSection page={page} />
      
      {/* Services Showcase */}
      <ServicesShowcase services={featuredServices} />
      
      {/* Featured Work */}
      <FeaturedWork projects={featuredProjects} />
      
      {/* Testimonials */}
      <TestimonialsSection testimonials={featuredTestimonials} />
    </>
  )
}