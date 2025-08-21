import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MadeByShape - Web Design & Digital Agency in Manchester',
  description: 'Award-winning web design agency in Manchester specialising in web design, branding, eCommerce, digital marketing and organic SEO since 2010.',
  keywords: 'web design manchester, digital agency, branding, ecommerce, seo, digital marketing',
  authors: [{ name: 'MadeByShape' }],
  robots: 'index, follow',
  openGraph: {
    title: 'MadeByShape - Web Design & Digital Agency in Manchester',
    description: 'Award-winning web design agency in Manchester specialising in web design, branding, eCommerce, digital marketing and organic SEO since 2010.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}