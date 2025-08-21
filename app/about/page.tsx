import { getTeamMembers } from '@/lib/cosmic'
import { TeamMember } from '@/types'
import { Mail, Linkedin } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | MadeByShape - Award-Winning Digital Agency',
  description: 'Learn about MadeByShape, an award-winning web design and digital agency in Manchester. Meet our team and discover our story.',
}

export default async function AboutPage() {
  const teamMembers = await getTeamMembers() as TeamMember[]

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-900 to-primary-600 text-white">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About MadeByShape
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            An award-winning agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
              Who are we?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-6">
                An independent web design and branding agency in Manchester set up in 2010 who care, build relationships, have industry experience, and win awards.
              </p>
              <p className="mb-6">
                Born in 2010, MadeByShape is an Award-Winning Web Design Agency based in Manchester specialising in Web Design, Branding, eCommerce, Digital Marketing and Organic SEO.
              </p>
              <p className="mb-6">
                Our content management system of choice is Craft CMS rather than WordPress, allowing you to manage your website pages, content and SEO easily. We're proud to be a verified Craft CMS and Craft Commerce professional partner.
              </p>
              <p>
                We build Shopify projects every week, a super intuitive eCommerce platform for clients to take their business to the next level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              What drives us every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">C</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Care</h3>
              <p className="text-gray-600">We genuinely care about our clients' success and put their needs first.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">R</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Relationships</h3>
              <p className="text-gray-600">Building lasting partnerships based on trust and mutual respect.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Experience</h3>
              <p className="text-gray-600">Over a decade of industry expertise and proven results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Awards</h3>
              <p className="text-gray-600">Recognition for our outstanding work and innovative solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Putting faces to names
            </p>
          </div>

          {teamMembers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="text-center card p-8">
                  {member.metadata?.profile_photo && (
                    <img
                      src={`${member.metadata.profile_photo.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                      alt={member.metadata?.full_name || member.title}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                  )}
                  
                  <h3 className="text-xl font-bold text-primary-900 mb-2">
                    {member.metadata?.full_name || member.title}
                  </h3>
                  
                  <p className="text-accent-600 font-medium mb-4">
                    {member.metadata?.job_title}
                  </p>
                  
                  {member.metadata?.co_founder && (
                    <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-accent-100 text-accent-800 mb-4">
                      Co-Founder
                    </div>
                  )}
                  
                  {member.metadata?.bio && (
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {member.metadata.bio}
                    </p>
                  )}
                  
                  {member.metadata?.years_at_company && (
                    <p className="text-gray-500 text-sm mb-4">
                      {member.metadata.years_at_company} years at Shape
                    </p>
                  )}
                  
                  <div className="flex justify-center space-x-3">
                    {member.metadata?.email && (
                      <a
                        href={`mailto:${member.metadata.email}`}
                        className="text-gray-400 hover:text-accent-600 transition-colors duration-200"
                        aria-label="Email"
                      >
                        <Mail size={20} />
                      </a>
                    )}
                    {member.metadata?.linkedin && (
                      <a
                        href={member.metadata.linkedin}
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
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No team members found</h3>
              <p className="text-gray-600">Team member profiles will appear here once they are added to your Cosmic bucket.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}