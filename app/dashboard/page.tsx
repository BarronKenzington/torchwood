'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

type RawWatch = {
  url?: string
  title?: string
  uuid?: string
  id?: string
  last_changed?: string | number
  last_changed_timestamp?: number
  last_changed_display?: string
  last_changed_human?: string
  has_unviewed?: boolean
}

type WatchCard = {
  id: string
  url: string
  status: 'Changed' | 'No Change'
  lastChanged: string
}

function normalizeWatches(data: unknown): WatchCard[] {
  const list = Array.isArray(data)
    ? data
    : (data as { watch?: RawWatch[]; watches?: RawWatch[] })?.watch ||
      (data as { watch?: RawWatch[]; watches?: RawWatch[] })?.watches ||
      []

  if (!Array.isArray(list)) {
    return []
  }

  return list.map((item) => {
    const status =
      item?.has_unviewed ||
      item?.last_changed ||
      item?.last_changed_timestamp
        ? 'Changed'
        : 'No Change'

    const lastChanged =
      item?.last_changed_display ||
      item?.last_changed_human ||
      formatDate(item?.last_changed_timestamp ?? item?.last_changed)

    const url = item?.url || item?.title || 'Unknown'
    const id = item?.uuid || item?.id || url

    return {
      id,
      url,
      status,
      lastChanged,
    }
  })
}

function formatDate(value: string | number | undefined) {
  if (value === undefined || value === null) {
    return 'Unknown'
  }

  if (typeof value === 'string') {
    const parsed = Date.parse(value)
    if (!Number.isNaN(parsed)) {
      return new Date(parsed).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
      })
    }

    const asNumber = Number(value)
    if (Number.isNaN(asNumber)) {
      return 'Unknown'
    }
    return formatDate(asNumber)
  }

  const millis = value > 1_000_000_000_000 ? value : value * 1000
  return new Date(millis).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

export default function DashboardPage() {
  const router = useRouter()
  const [authChecked, setAuthChecked] = useState(false)
  const [authenticated, setAuthenticated] = useState(false)
  const [watches, setWatches] = useState<WatchCard[]>([])
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    let active = true

    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check')
        if (!response.ok) {
          router.push('/admin/login')
          return
        }

        if (active) {
          setAuthenticated(true)
        }
      } catch {
        router.push('/admin/login')
      } finally {
        if (active) {
          setAuthChecked(true)
        }
      }
    }

    checkAuth()

    return () => {
      active = false
    }
  }, [router])

  const getWatchList = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await fetch('/api/change-detection')
      if (!response.ok) {
        setError('Unable to load watch list.')
        return
      }
      const data = await response.json()
      setWatches(normalizeWatches(data))
    } catch {
      setError('Unable to load watch list.')
    } finally {
      setLoading(false)
    }
  }

  const addWatch = async (nextUrl: string) => {
    setSubmitting(true)
    setError('')
    try {
      const response = await fetch('/api/change-detection', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: nextUrl }),
      })

      if (!response.ok) {
        setError('Unable to create watch.')
        return false
      }

      return true
    } catch {
      setError('Unable to create watch.')
      return false
    } finally {
      setSubmitting(false)
    }
  }

  useEffect(() => {
    if (authenticated) {
      getWatchList()
    }
  }, [authenticated])

  const hasWatches = useMemo(() => watches.length > 0, [watches.length])

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const trimmed = url.trim()
    if (!trimmed) {
      setError('Please enter a URL to track.')
      return
    }

    const ok = await addWatch(trimmed)
    if (ok) {
      setUrl('')
      getWatchList()
    }
  }

  if (!authChecked) {
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
      <div className="container mx-auto px-4 space-y-10">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Monitoring Dashboard
            </h1>
            <p className="text-gray-300 mt-2">
              Track changes across client websites from one place.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-8 rounded-xl border border-torchwood-primary-teal/30">
          <h2 className="text-2xl font-bold text-white mb-6">New Watcher</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="url"
              placeholder="https://example.com"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
              required
            />
            <button
              type="submit"
              disabled={submitting}
              className="self-start bg-torchwood-accent-orange text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-torchwood-primary-teal hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? 'Tracking...' : 'Track'}
            </button>
          </form>
        </div>

        <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-8 rounded-xl border border-torchwood-primary-teal/30">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Status</h2>
            <button
              onClick={getWatchList}
              className="text-sm text-torchwood-primary-teal hover:text-torchwood-accent-orange transition"
            >
              Refresh
            </button>
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {loading ? (
            <p className="text-gray-300">Loading watches...</p>
          ) : hasWatches ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {watches.map((watch) => (
                <div
                  key={watch.id}
                  className="bg-torchwood-dark-teal/50 p-6 rounded-lg border border-torchwood-primary-teal/30 space-y-4"
                >
                  <p className="text-white font-semibold break-all">
                    {watch.url}
                  </p>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        watch.status === 'Changed'
                          ? 'bg-yellow-400/20 text-yellow-200 border border-yellow-400/40'
                          : 'bg-green-400/20 text-green-200 border border-green-400/40'
                      }`}
                    >
                      {watch.status}
                    </span>
                    <span className="text-gray-300 text-sm">
                      Last changed: {watch.lastChanged}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-300">
              No watches yet. Add your first URL above.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
