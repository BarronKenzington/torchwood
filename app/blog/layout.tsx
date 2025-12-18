import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest articles and insights on sports club operations, admin efficiency, and growing your club. Tips, strategies, and stories from the front lines of club operations.',
  openGraph: {
    title: 'Blog | Torchwood Ops',
    description: 'Latest articles and insights on sports club operations, admin efficiency, and growing your club.',
    url: 'https://torchwoodconsulting.com/blog',
  },
  twitter: {
    title: 'Blog | Torchwood Ops',
    description: 'Latest articles and insights on sports club operations.',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

