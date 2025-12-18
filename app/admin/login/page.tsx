'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (data.success) {
        router.push('/admin')
        router.refresh()
      } else {
        setError(data.error || 'Invalid password')
      }
    } catch (err) {
      setError('Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-torchwood-dark-teal">
      <div className="max-w-md w-full px-4">
        <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-10 rounded-xl border border-torchwood-primary-teal/30">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">Admin Login</h1>
          <p className="text-gray-300 text-center mb-8">Access the blog management portal</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-white font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
                placeholder="Enter admin password"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-torchwood-accent-orange text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-torchwood-primary-teal hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

