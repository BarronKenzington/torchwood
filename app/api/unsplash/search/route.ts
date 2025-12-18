import { NextRequest, NextResponse } from 'next/server'
import { searchUnsplashImages } from '@/lib/unsplash'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query') || 'sports'
    const page = parseInt(searchParams.get('page') || '1')
    const perPage = parseInt(searchParams.get('per_page') || '20')

    const results = await searchUnsplashImages(query, page, perPage)

    return NextResponse.json(results)
  } catch (error) {
    console.error('Unsplash search error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to search images' },
      { status: 500 }
    )
  }
}

