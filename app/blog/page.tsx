import { getBlogPosts } from '@/lib/blog'
import BlogCard from '@/components/BlogCard'

export default async function Blog() {
  const posts = getBlogPosts()

  return (
    <div className="min-h-screen py-20 bg-torchwood-dark-teal">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 text-white">Blog</h1>
        <p className="text-xl text-gray-200 text-center mb-12 max-w-3xl mx-auto">
          Latest articles and insights on sports club operations, admin efficiency, and growing your club.
        </p>
        
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-300 text-lg">No blog posts yet. Check back soon!</p>
            <p className="text-gray-400 text-sm mt-4">
              We&apos;ll be sharing tips, strategies, and stories from the front lines of club operations.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

