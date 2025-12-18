'use client'

import Image from 'next/image'
import { useState } from 'react'

interface StockImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  quality?: number
}

/**
 * Component for displaying Unsplash stock images
 * Optimizes images automatically through Next.js Image component
 */
export default function StockImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  objectFit = 'cover',
  quality = 85,
}: StockImageProps) {
  const [error, setError] = useState(false)

  // If there's an error loading the image, show a placeholder
  if (error) {
    return (
      <div
        className={`bg-torchwood-secondary-teal/20 flex items-center justify-center ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
      >
        <span className="text-gray-400 text-sm">Image unavailable</span>
      </div>
    )
  }

  // If using fill, we need a container
  if (fill) {
    return (
      <div className={`relative ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-${objectFit}`}
          priority={priority}
          quality={quality}
          onError={() => setError(true)}
        />
      </div>
    )
  }

  // Regular image with dimensions
  if (!width || !height) {
    console.warn('StockImage: width and height are required when fill is false')
    return null
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      onError={() => setError(true)}
    />
  )
}

/**
 * Helper function to get Unsplash image URL with size parameters
 */
export function getUnsplashImageUrl(imageUrl: string, width?: number, height?: number): string {
  if (!imageUrl.includes('unsplash.com')) {
    return imageUrl
  }

  // Add size parameters to Unsplash URL for optimization
  const url = new URL(imageUrl)
  if (width) url.searchParams.set('w', width.toString())
  if (height) url.searchParams.set('h', height.toString())
  url.searchParams.set('fit', 'crop')
  url.searchParams.set('auto', 'format')

  return url.toString()
}

