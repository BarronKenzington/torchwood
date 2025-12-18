import { NextRequest, NextResponse } from 'next/server'
import { getRandomUnsplashImage } from '@/lib/unsplash'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('query') || 'sports'

    const image = await getRandomUnsplashImage(query)

    return NextResponse.json(image)
  } catch (error) {
    console.error('Unsplash random image error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to get random image' },
      { status: 500 }
    )
  }
}

