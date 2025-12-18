'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import Link from 'next/link'

export default function EditBlogPost() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    date: '',
    excerpt: '',
    content: '',
  })
  const router = useRouter()
  const params = useParams()
  const slug = params.slug as string

  useEffect(() => {
    checkAuth()
    loadPost()
  }, [slug])

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

  const loadPost = async () => {
    try {
      const response = await fetch(`/api/blog/${slug}`)
      if (response.ok) {
        const data = await response.json()
        setFormData({
          title: data.title,
          slug: data.slug,
          date: data.date,
          excerpt: data.excerpt || '',
          content: data.content,
        })
      } else {
        alert('Post not found')
        router.push('/admin')
      }
    } catch (error) {
      alert('Failed to load post')
      router.push('/admin')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          slug: formData.slug || slug,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        router.push('/admin')
      } else {
        alert(data.error || 'Failed to update post')
      }
    } catch (error) {
      alert('Failed to update post')
    } finally {
      setSaving(false)
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
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Edit Blog Post</h1>
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
              required
            />
            <p className="text-gray-400 text-sm mt-1">Changing slug will create a new URL</p>
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
              required
            />
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={saving}
              className="bg-torchwood-accent-orange text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-torchwood-primary-teal hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? 'Saving...' : 'Save Changes'}
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

