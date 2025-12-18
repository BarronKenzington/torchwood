'use client'

import { useState } from 'react'
import StockImage from './StockImage'

interface UnsplashImage {
  id: string
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  alt_description: string | null
  description: string | null
  width: number
  height: number
}

interface StockImageSearchProps {
  onSelect?: (image: UnsplashImage) => void
  initialQuery?: string
}

/**
 * Component for searching and selecting Unsplash images
 * Useful for admin panel or image selection UI
 */
export default function StockImageSearch({ onSelect, initialQuery = 'sports' }: StockImageSearchProps) {
  const [query, setQuery] = useState(initialQuery)
  const [images, setImages] = useState<UnsplashImage[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSearch = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/unsplash/search?query=${encodeURIComponent(query)}&per_page=20`)
      
      if (!response.ok) {
        throw new Error('Failed to search images')
      }

      const data = await response.json()
      setImages(data.results || [])
    } catch (err) {
      setError('Failed to load images. Make sure UNSPLASH_ACCESS_KEY is configured.')
      setImages([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for images..."
          className="flex-1 px-4 py-2 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-torchwood-accent-orange text-white font-bold py-2 px-6 rounded-lg transition duration-300 ease-in-out hover:bg-torchwood-primary-teal disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {images.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square cursor-pointer group hover:scale-105 transition-transform"
              onClick={() => onSelect?.(image)}
            >
              <StockImage
                src={image.urls.small}
                alt={image.alt_description || image.description || 'Stock image'}
                fill
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-semibold">
                  Select
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {!loading && images.length === 0 && query && (
        <p className="text-gray-400 text-center py-8">No images found. Try a different search term.</p>
      )}
    </div>
  )
}

