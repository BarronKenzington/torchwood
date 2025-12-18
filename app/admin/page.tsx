'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt?: string
}

export default function AdminDashboard() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    loadPosts()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/check')
      if (response.ok) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
        router.push('/admin/login')
      }
    } catch {
      setAuthenticated(false)
      router.push('/admin/login')
    }
  }

  const loadPosts = async () => {
    try {
      const response = await fetch('/api/blog')
      if (response.ok) {
        const data = await response.json()
        setPosts(data)
      }
    } catch (error) {
      console.error('Failed to load posts:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    await fetch('/api/auth/login', { method: 'DELETE' })
    router.push('/admin/login')
  }

  const handleDelete = async (slug: string) => {
    if (!confirm(`Are you sure you want to delete "${slug}"?`)) {
      return
    }

    try {
      const response = await fetch(`/api/blog?slug=${slug}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        loadPosts()
      } else {
        alert('Failed to delete post')
      }
    } catch (error) {
      alert('Failed to delete post')
    }
  }

  if (authenticated === null || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-torchwood-dark-teal">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!authenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-torchwood-dark-teal py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Link
              href="/admin/blog/new"
              className="bg-torchwood-accent-orange text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out hover:bg-torchwood-primary-teal hover:scale-105"
            >
              New Post
            </Link>
            <button
              onClick={handleLogout}
              className="bg-torchwood-dark-teal border-2 border-white text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-torchwood-dark-teal"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-8 rounded-xl border border-torchwood-primary-teal/30">
          <h2 className="text-2xl font-bold text-white mb-6">Blog Posts</h2>
          
          {posts.length === 0 ? (
            <p className="text-gray-300">No blog posts yet. Create your first post!</p>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.slug}
                  className="bg-torchwood-dark-teal/50 p-6 rounded-lg border border-torchwood-primary-teal/30 flex justify-between items-start"
                >
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    {post.excerpt && (
                      <p className="text-gray-300 text-sm">{post.excerpt}</p>
                    )}
                    <p className="text-torchwood-primary-teal text-sm mt-2">/{post.slug}</p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Link
                      href={`/admin/blog/${post.slug}/edit`}
                      className="bg-torchwood-primary-teal text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-torchwood-secondary-teal"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(post.slug)}
                      className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

