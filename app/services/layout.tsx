import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description: 'Choose the right operations support tier for your club. Starter Ops Assistant ($300-$550/mo), Growth Ops Assistant ($800-$1,300/mo), or Director\'s Partner. Subscription-style service with on-demand admin support.',
  openGraph: {
    title: 'Services & Pricing | Torchwood Ops',
    description: 'Choose the right operations support tier for your club. Less than the cost of 1 part-time staffer.',
    url: 'https://torchwoodconsulting.com/services',
  },
  twitter: {
    title: 'Services & Pricing | Torchwood Ops',
    description: 'Choose the right operations support tier for your club.',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

