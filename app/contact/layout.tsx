import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get started with Torchwood Ops today. Book a free consultation to discuss your club\'s operational needs. We help youth sports directors focus on athletes, coaches, and growth.',
  openGraph: {
    title: 'Contact Us | Torchwood Ops',
    description: 'Get started with Torchwood Ops today. Book a free consultation to discuss your club\'s operational needs.',
    url: 'https://torchwoodconsulting.com/contact',
  },
  twitter: {
    title: 'Contact Us | Torchwood Ops',
    description: 'Get started with Torchwood Ops today. Book a free consultation.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

