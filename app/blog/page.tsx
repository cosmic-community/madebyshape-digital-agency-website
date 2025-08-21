import { getBlogPosts } from '@/lib/cosmic'
import { BlogPostWithAuthor } from '@/types'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | MadeByShape - Digital Agency Insights & News',
  description: 'Read the latest insights, tips, and news from our digital agency blog. Stay updated with industry trends and best practices.',
}

export default async function BlogPage() {
  const posts = await getBlogPosts() as BlogPostWithAuthor[]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-600 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Blog
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            The latest from our design studio. Industry insights, company updates, and thoughts from the team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article key={post.id} className="group">
                  <Link href={`/blog/${post.slug}`}>
                    <div className="card overflow-hidden hover:shadow-soft transition-all duration-300 h-full flex flex-col">
                      {post.metadata?.featured_image && (
                        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                          <img
                            src={`${post.metadata.featured_image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                            alt={post.metadata?.post_title || post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="p-6 flex-1 flex flex-col">
                        {/* Meta info */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
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
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                          </div>
                          
                          {post.metadata?.category && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-100 text-accent-800">
                              {post.metadata.category.metadata?.category_name || post.metadata.category.title}
                            </span>
                          )}
                        </div>
                        
                        <h2 className="text-xl font-bold text-primary-900 mb-3 group-hover:text-accent-600 transition-colors duration-200 flex-1">
                          {post.metadata?.post_title || post.title}
                        </h2>
                        
                        {post.metadata?.excerpt && (
                          <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                            {post.metadata.excerpt}
                          </p>
                        )}
                        
                        {/* Author info */}
                        {post.metadata?.author && (
                          <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                            {post.metadata.author.metadata?.profile_photo && (
                              <img
                                src={`${post.metadata.author.metadata.profile_photo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                                alt={post.metadata.author.metadata?.full_name || post.metadata.author.title}
                                className="w-8 h-8 rounded-full object-cover mr-3"
                              />
                            )}
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                {post.metadata.author.metadata?.full_name || post.metadata.author.title}
                              </p>
                              {post.metadata.author.metadata?.job_title && (
                                <p className="text-xs text-gray-500">
                                  {post.metadata.author.metadata.job_title}
                                </p>
                              )}
                            </div>
                            <ArrowRight size={16} className="text-accent-600 group-hover:translate-x-1 transition-transform duration-200" />
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">No blog posts found</h2>
              <p className="text-gray-600">Blog posts will appear here once they are added to your Cosmic bucket.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}