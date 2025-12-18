// Unsplash API utility functions

export interface UnsplashImage {
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
  user: {
    name: string
    username: string
  }
}

export interface UnsplashSearchResponse {
  total: number
  total_pages: number
  results: UnsplashImage[]
}

/**
 * Search for images on Unsplash
 */
export async function searchUnsplashImages(
  query: string,
  page: number = 1,
  perPage: number = 20
): Promise<UnsplashSearchResponse> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY

  if (!accessKey) {
    throw new Error('UNSPLASH_ACCESS_KEY is not configured')
  }

  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&page=${page}&per_page=${perPage}`
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Client-ID ${accessKey}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Get a random image based on a query
 */
export async function getRandomUnsplashImage(query: string): Promise<UnsplashImage> {
  const accessKey = process.env.UNSPLASH_ACCESS_KEY

  if (!accessKey) {
    throw new Error('UNSPLASH_ACCESS_KEY is not configured')
  }

  const url = `https://api.unsplash.com/photos/random?query=${encodeURIComponent(query)}&orientation=landscape`
  
  const response = await fetch(url, {
    headers: {
      'Authorization': `Client-ID ${accessKey}`,
    },
  })

  if (!response.ok) {
    throw new Error(`Unsplash API error: ${response.statusText}`)
  }

  return response.json()
}

/**
 * Get curated images for common sports club themes
 */
export const SPORTS_THEMES = {
  volleyball: 'volleyball team',
  coaching: 'youth sports coaching',
  teamwork: 'teamwork sports',
  athletes: 'youth athletes',
  sports: 'youth sports',
  administration: 'office administration',
  organization: 'organization planning',
} as const

export type SportsTheme = keyof typeof SPORTS_THEMES

