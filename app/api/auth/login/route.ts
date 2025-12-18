import { NextResponse } from 'next/server'

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'changeme123'

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password === ADMIN_PASSWORD) {
      // In production, use a proper session/token system
      // For now, we'll use a simple approach
      const response = NextResponse.json({ success: true })
      
      // Set a simple cookie (in production, use httpOnly, secure cookies)
      const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL === '1'
      response.cookies.set('admin-auth', 'authenticated', {
        maxAge: 60 * 60 * 24 * 7, // 7 days
        httpOnly: true,
        secure: isProduction, // Required for HTTPS in production
        sameSite: 'lax',
      })

      return response
    }

    return NextResponse.json(
      { success: false, error: 'Invalid password' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    )
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('admin-auth')
  return response
}

