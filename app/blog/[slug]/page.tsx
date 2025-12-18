import { getBlogPosts, getPostBySlug } from '@/lib/blog'
import { notFound } from 'next/navigation'
import { remark } from 'remark'
import html from 'remark-html'
import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on Torchwood Ops blog`,
    openGraph: {
      title: post.title,
      description: post.excerpt || `Read ${post.title} on Torchwood Ops blog`,
      type: 'article',
      publishedTime: post.date,
      url: `https://torchwoodconsulting.com/blog/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || `Read ${post.title} on Torchwood Ops blog`,
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  
  if (!post) {
    notFound()
  }

  const processedContent = await remark()
    .use(html)
    .process(post.content)
  const contentHtml = processedContent.toString()

  return (
    <article className="min-h-screen py-20 bg-torchwood-dark-teal">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link 
          href="/blog" 
          className="inline-flex items-center text-torchwood-primary-teal hover:text-torchwood-accent-orange mb-8 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{post.title}</h1>
        <p className="text-gray-400 mb-8">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        <div 
          className="prose prose-lg max-w-none prose-invert"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        
        <div className="mt-12 pt-8 border-t border-torchwood-primary-teal/30">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-torchwood-primary-teal hover:text-torchwood-accent-orange transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Posts
          </Link>
        </div>
      </div>
    </article>
  )
}

