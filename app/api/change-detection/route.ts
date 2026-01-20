import { NextResponse } from 'next/server'

const DEFAULT_BASE_URL = 'http://localhost:5000/api/v1'

function getBaseUrl() {
  const baseUrl = process.env.CHANGEDETECTION_BASE_URL || DEFAULT_BASE_URL
  return baseUrl.replace(/\/$/, '')
}

function getApiKey() {
  return process.env.CHANGEDETECTION_API_KEY || ''
}

function buildHeaders() {
  const apiKey = getApiKey()
  return {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
    'api-key': apiKey,
  }
}

export async function GET() {
  try {
    const apiKey = getApiKey()
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server not configured' },
        { status: 500 }
      )
    }

    const response = await fetch(`${getBaseUrl()}/watch`, {
      method: 'GET',
      headers: buildHeaders(),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch watch list' },
        { status: 502 }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch watch list' },
      { status: 502 }
    )
  }
}

export async function POST(request: Request) {
  try {
    const apiKey = getApiKey()
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Server not configured' },
        { status: 500 }
      )
    }

    const { url } = await request.json()
    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Invalid url' }, { status: 400 })
    }

    const response = await fetch(`${getBaseUrl()}/watch`, {
      method: 'POST',
      headers: buildHeaders(),
      body: JSON.stringify({ url }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to create watch' },
        { status: 502 }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create watch' },
      { status: 502 }
    )
  }
}
