import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import '@/styles/globals.css'

import { cn } from '@/lib/utils'

import Footer from '@/components/footer'
import Header from '@/components/header'
import Providers from '@/components/providers'

import { site } from '@/config/site'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s ${site.titleTemplate}`,
  },
  description: site.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    title: site.name,
    card: 'summary_large_image',
    site: '@tszhong0411',
    creator: '@tszhong0411',
  },
  keywords: site.keywords,
  themeColor: '#000',
  creator: 'tszhong0411',
  openGraph: {
    url: `${site.url}`,
    type: 'website',
    title: site.title,
    siteName: site.title,
    description: site.description,
    locale: 'en-US',
    images: [
      {
        url: 'https://honghong.me/images/projects/todo/cover.png',
        width: 1200,
        height: 630,
        alt: site.description,
        type: 'image/png',
      },
    ],
  },
  icons: {
    icon: '/favicon/favicon.svg',
    shortcut: '/favicon/favicon.svg',
    apple: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [...site.favicons],
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const RootLayout = (props: RootLayoutProps) => {
  const { children } = props

  return (
    <html lang='en-US' className={cn(inter.variable, 'dark scroll-smooth')}>
      <body className='font-default'>
        <Providers>
          <Header />
          <main className='relative mx-auto min-h-[calc(100vh-64px-56px)] max-w-4xl px-8 py-24'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
