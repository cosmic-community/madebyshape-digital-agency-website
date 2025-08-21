import { getHomePage, getFeaturedProjects, getFeaturedServices, getFeaturedTestimonials } from '@/lib/cosmic'
import { Page, Project, Service, Testimonial } from '@/types'
import HeroSection from '@/components/HeroSection'
import ServicesShowcase from '@/components/ServicesShowcase'
import FeaturedWork from '@/components/FeaturedWork'
import TestimonialsSection from '@/components/TestimonialsSection'

export default async function HomePage() {
  const [page, projects, services, testimonials] = await Promise.all([
    getHomePage(),
    getFeaturedProjects(),
    getFeaturedServices(), 
    getFeaturedTestimonials()
  ])

  // Type the data properly
  const pageData = page as Page | null
  const projectData = projects as Project[]
  const serviceData = services as Service[]
  const testimonialData = testimonials as Testimonial[]

  // If no page data is found, provide fallback data
  const defaultPage: Page = {
    id: 'default',
    slug: 'home',
    title: 'Home',
    content: '',
    type: 'pages',
    metadata: {
      page_title: 'Home',
      hero_headline: '<h1>A web design and<br>branding agency<br>in Manchester</h1>',
      hero_subtext: 'An award winning agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards.',
    },
    created_at: new Date().toISOString(),
    modified_at: new Date().toISOString(),
  }

  return (
    <div className="min-h-screen">
      <HeroSection page={pageData || defaultPage} />
      <ServicesShowcase services={serviceData} />
      <FeaturedWork projects={projectData} />
      <TestimonialsSection testimonials={testimonialData} />
    </div>
  )
}