# MadeByShape Digital Agency Website

![App Preview](https://imgix.cosmicjs.com/6e480d50-7e4e-11f0-8dcc-651091f6a7c0-photo-1460925895917-afdab827c52f-1755753574275.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A sophisticated digital agency website built with Next.js 15 and Cosmic CMS, featuring a modern design system inspired by MadeByShape. The platform showcases agency services, project portfolio, team members, and company insights through a dynamic content management system.

## ✨ Features

- **🎨 Modern Agency Design** - Clean, professional interface with compelling visual hierarchy
- **📱 Fully Responsive** - Optimized experience across all devices and screen sizes
- **💼 Portfolio Showcase** - Dynamic project gallery with detailed case studies
- **👥 Team Profiles** - Comprehensive team member information and bios
- **🛠️ Services Display** - Detailed service offerings with rich descriptions
- **📝 Blog Platform** - Content marketing system with author attribution
- **💬 Client Testimonials** - Social proof integration with client feedback
- **🔍 SEO Optimized** - Built-in metadata management and search optimization
- **⚡ Performance Focused** - Fast loading times with modern optimization techniques
- **🎯 Content Management** - Easy content updates through Cosmic CMS

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](http://localhost:3040/projects/new?clone_bucket=68a6ab7f7beb2711fec443a0&clone_repository=68a6ae007beb2711fec443c6)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "External Web Content (https://madebyshape.co.uk) - HTML: [Full website HTML content with navigation, hero sections, project showcases, team information, services, testimonials, and blog content as provided in the context]"

### Code Generation Prompt

> Clone the https://madebyshape.co.uk site

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless content management
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Comprehensive icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. **Clone and install dependencies:**
```bash
git clone <repository-url>
cd madebyshape-agency-website
bun install
```

2. **Set up environment variables:**
```bash
# The environment variables will be automatically configured when you deploy
# No manual setup required - the deployment process handles this
```

3. **Run the development server:**
```bash
bun run dev
```

4. **Open your browser:**
Navigate to `http://localhost:3000`

## 📚 Cosmic SDK Examples

### Fetching All Projects
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all projects with service relationships
const projects = await cosmic.objects
  .find({ type: 'projects' })
  .depth(1)
```

### Getting Blog Posts by Category
```typescript
// Get blog posts with author and category data
const posts = await cosmic.objects
  .find({ 
    type: 'blog-posts',
    'metadata.category': categoryId 
  })
  .depth(1)
  .props(['title', 'slug', 'metadata'])
```

### Fetching Team Members
```typescript
// Get team members with profile photos
const teamMembers = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['title', 'slug', 'metadata'])
```

## 🌐 Cosmic CMS Integration

This application integrates with the following Cosmic object types:

- **Projects** - Portfolio showcase with client work and case studies
- **Services** - Agency service offerings and capabilities  
- **Team Members** - Staff profiles, bios, and contact information
- **Blog Posts** - Content marketing articles and insights
- **Testimonials** - Client feedback and success stories
- **Pages** - Dynamic page content with flexible sections
- **Categories** - Content organization and filtering

All content is dynamically fetched from your Cosmic bucket with full relationship support using the depth parameter for connected content like authors, categories, and services.

## 🚀 Deployment Options

### Deploy to Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Environment Variables
The following environment variables will be automatically configured during deployment:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket identifier
- `COSMIC_READ_KEY` - Read access key for your bucket  
- `COSMIC_WRITE_KEY` - Write access key (if needed for forms)

## 📖 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Cosmic Documentation](https://www.cosmicjs.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

<!-- README_END -->