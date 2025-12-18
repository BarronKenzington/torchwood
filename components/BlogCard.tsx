import Link from 'next/link'

interface BlogCardProps {
  post: {
    slug: string
    title: string
    date: string
    excerpt?: string
  }
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <article className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 border-2 border-torchwood-primary-teal/30 rounded-xl p-6 hover:border-torchwood-accent-orange hover:shadow-xl transition-all h-full flex flex-col">
        <h2 className="text-2xl font-semibold mb-2 text-white">{post.title}</h2>
        <p className="text-gray-400 text-sm mb-4">
          {new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
        {post.excerpt && (
          <p className="text-gray-200 flex-grow">{post.excerpt}</p>
        )}
        <span className="text-torchwood-accent-orange font-semibold mt-4 inline-block hover:text-torchwood-primary-teal transition">
          Read more →
        </span>
      </article>
    </Link>
  )
}

