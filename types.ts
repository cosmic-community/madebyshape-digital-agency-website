// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
  status?: string;
  published_at?: string;
}

// Project interface
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name?: string;
    client_name?: string;
    project_description?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    project_gallery?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
    project_year?: number;
    client_website?: string;
    case_study_content?: string;
    featured_project?: boolean;
  };
}

// Service interface
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    short_description?: string;
    full_description?: string;
    service_icon?: {
      url: string;
      imgix_url: string;
    };
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    service_category?: {
      key: string;
      value: string;
    };
    featured_service?: boolean;
  };
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    job_title?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    bio?: string;
    email?: string;
    linkedin?: string;
    twitter?: string;
    years_at_company?: number;
    co_founder?: boolean;
  };
}

// Blog Post interface
export interface BlogPost extends CosmicObject {
  type: 'blog-posts';
  metadata: {
    post_title?: string;
    content?: string;
    excerpt?: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    category?: Category;
    reading_time?: string;
    author?: TeamMember;
    seo_title?: string;
    seo_description?: string;
  };
}

// Category interface
export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    category_name?: string;
    description?: string;
    category_type?: {
      key: string;
      value: string;
    };
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    client_title?: string;
    company_name?: string;
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    related_project?: Project;
    featured_testimonial?: boolean;
  };
}

// Page interface
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    page_title?: string;
    hero_headline?: string;
    hero_subtext?: string;
    hero_image?: {
      url: string;
      imgix_url: string;
    };
    content_sections?: Array<{
      type: string;
      title?: string;
      subtitle?: string;
      description?: string;
    }>;
    seo_title?: string;
    seo_description?: string;
  };
}

// Component Props Interfaces
export interface HeroSectionProps {
  page: Page;
}

export interface ServicesShowcaseProps {
  services: Service[];
}

export interface FeaturedWorkProps {
  projects: Project[];
}

export interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

// API response interface
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}

export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isBlogPost(obj: CosmicObject): obj is BlogPost {
  return obj.type === 'blog-posts';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}

export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}

// Utility types
export type ProjectWithServices = Project & {
  metadata: Project['metadata'] & {
    services_used: Service[];
  };
};

export type BlogPostWithAuthor = BlogPost & {
  metadata: BlogPost['metadata'] & {
    author: TeamMember;
    category: Category;
  };
};