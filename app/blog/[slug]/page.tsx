// app/blog/[slug]/page.tsx
import { getBlogPostBySlug } from '@/lib/cosmic'
import { BlogPostWithAuthor } from '@/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Mail, Linkedin } from 'lucide-react'
import { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug) as BlogPostWithAuthor | null

  if (!post) {
    return {
      title: 'Post Not Found | MadeByShape Blog',
      description: 'The blog post you are looking for could not be found.',
    }
  }

  return {
    title: post.metadata?.seo_title || `${post.metadata?.post_title || post.title} | MadeByShape Blog`,
    description: post.metadata?.seo_description || post.metadata?.excerpt || `Read ${post.metadata?.post_title || post.title} on the MadeByShape blog`,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug) as BlogPostWithAuthor | null

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-white">
        <div className="container">
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-500 hover:text-primary-900 mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            {/* Meta info */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                {post.metadata?.reading_time && (
                  <div className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {post.metadata.reading_time}
                  </div>
                )}
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  {new Date(post.created_at).toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </div>
              
              {post.metadata?.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-100 text-accent-800">
                  {post.metadata.category.metadata?.category_name || post.metadata.category.title}
                </span>
              )}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-8 leading-tight">
              {post.metadata?.post_title || post.title}
            </h1>
            
            {post.metadata?.excerpt && (
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.metadata.excerpt}
              </p>
            )}
            
            {/* Author info */}
            {post.metadata?.author && (
              <div className="flex items-center p-6 bg-gray-50 rounded-lg mb-8">
                {post.metadata.author.metadata?.profile_photo && (
                  <img
                    src={`${post.metadata.author.metadata.profile_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={post.metadata.author.metadata?.full_name || post.metadata.author.title}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                )}
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-900">
                    {post.metadata.author.metadata?.full_name || post.metadata.author.title}
                  </h3>
                  {post.metadata.author.metadata?.job_title && (
                    <p className="text-gray-600 mb-2">
                      {post.metadata.author.metadata.job_title}
                    </p>
                  )}
                  {post.metadata.author.metadata?.bio && (
                    <p className="text-sm text-gray-600">
                      {post.metadata.author.metadata.bio}
                    </p>
                  )}
                </div>
                <div className="flex space-x-2">
                  {post.metadata.author.metadata?.email && (
                    <a
                      href={`mailto:${post.metadata.author.metadata.email}`}
                      className="text-gray-400 hover:text-accent-600 transition-colors duration-200"
                      aria-label="Email"
                    >
                      <Mail size={20} />
                    </a>
                  )}
                  {post.metadata.author.metadata?.linkedin && (
                    <a
                      href={post.metadata.author.metadata.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-accent-600 transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.metadata?.featured_image && (
        <section className="py-8 bg-white">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-soft">
                <img
                  src={`${post.metadata.featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                  alt={post.metadata?.post_title || post.title}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {post.metadata?.content && (
              <div
                className="prose prose-lg max-w-none prose-headings:text-primary-900 prose-p:text-gray-700 prose-a:text-accent-600 hover:prose-a:text-accent-500"
                dangerouslySetInnerHTML={{ __html: post.metadata.content }}
              />
            )}
          </div>
        </div>
      </section>

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