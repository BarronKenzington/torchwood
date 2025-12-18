'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function NewBlogPost() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    date: new Date().toISOString().split('T')[0],
    excerpt: '',
    content: '',
  })
  const router = useRouter()

  useEffect(() => {
    checkAuth()
  }, [])

  useEffect(() => {
    // Auto-generate slug from title
    if (formData.title && !formData.slug) {
      const slug = formData.title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }, [formData.title])

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-'),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/admin')
      } else {
        alert(data.error || 'Failed to create post')
      }
    } catch (error) {
      alert('Failed to create post. Please check the console for details.')
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  if (authenticated === null) {
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
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">New Blog Post</h1>
          <Link
            href="/admin"
            className="text-torchwood-primary-teal hover:text-torchwood-accent-orange"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-10 rounded-xl border border-torchwood-primary-teal/30 space-y-6">
          <div>
            <label htmlFor="title" className="block text-white font-semibold mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
              placeholder="Enter post title"
              required
            />
          </div>

          <div>
            <label htmlFor="slug" className="block text-white font-semibold mb-2">
              URL Slug *
            </label>
            <input
              type="text"
              id="slug"
              value={formData.slug}
              onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
              placeholder="url-slug"
              required
            />
            <p className="text-gray-400 text-sm mt-1">Will be used in URL: /blog/{formData.slug || 'your-slug'}</p>
          </div>

          <div>
            <label htmlFor="date" className="block text-white font-semibold mb-2">
              Date *
            </label>
            <input
              type="date"
              id="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
              required
            />
          </div>

          <div>
            <label htmlFor="excerpt" className="block text-white font-semibold mb-2">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData(prev => ({ ...prev, excerpt: e.target.value }))}
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
              placeholder="Brief description for preview cards and SEO"
            />
          </div>

          <div>
            <label htmlFor="content" className="block text-white font-semibold mb-2">
              Content (Markdown) *
            </label>
            <textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData(prev => ({ ...prev, content: e.target.value }))}
              rows={20}
              className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 font-mono text-sm focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
              placeholder="# Your Post Title

Write your blog post content here using Markdown..."
              required
            />
            <p className="text-gray-400 text-sm mt-1">Supports Markdown formatting</p>
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-torchwood-accent-orange text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-torchwood-primary-teal hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Publishing...' : 'Publish Post'}
            </button>
            <Link
              href="/admin"
              className="bg-torchwood-dark-teal border-2 border-white text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-white hover:text-torchwood-dark-teal"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

