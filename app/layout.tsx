import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://torchwoodconsulting.com'),
  title: {
    default: 'Torchwood Ops - Sports Club Operations Administrative Assistant',
    template: '%s | Torchwood Ops',
  },
  description: 'A club operations manager, without the full-time salary. We take care of operational chaos — scheduling, emails, forms, and logistics — so you can focus on athletes, coaches, and growth.',
  keywords: [
    'sports club operations',
    'youth sports administration',
    'volleyball club management',
    'club operations assistant',
    'sports club administrative support',
    'virtual assistant for sports clubs',
    'club director support',
    'sports operations management',
  ],
  authors: [{ name: 'Mac', url: 'https://torchwoodconsulting.com' }],
  creator: 'Torchwood Ops',
  publisher: 'Torchwood Ops',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://torchwoodconsulting.com',
    siteName: 'Torchwood Ops',
    title: 'Torchwood Ops - Sports Club Operations Administrative Assistant',
    description: 'A club operations manager, without the full-time salary. We take care of operational chaos — scheduling, emails, forms, and logistics — so you can focus on athletes, coaches, and growth.',
    images: [
      {
        url: '/logos/2.svg',
        width: 1200,
        height: 630,
        alt: 'Torchwood Ops Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Torchwood Ops - Sports Club Operations Administrative Assistant',
    description: 'A club operations manager, without the full-time salary. We take care of operational chaos — scheduling, emails, forms, and logistics — so you can focus on athletes, coaches, and growth.',
    images: ['/logos/2.svg'],
    creator: '@torchwoodops',
  },
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
  verification: {
    // Add Google Search Console verification when available
    // google: 'your-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <StructuredData />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

