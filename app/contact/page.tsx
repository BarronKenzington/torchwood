'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    club: '',
    teams: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Using FormSubmit service - sends email directly to mac@torchwoodconsulting.com
      const response = await fetch('https://formsubmit.co/ajax/mac@torchwoodconsulting.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          club: formData.club,
          teams: formData.teams,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.club}`,
          _template: 'box'
        })
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        // Fallback to mailto if FormSubmit fails
        const mailtoLink = `mailto:mac@torchwoodconsulting.com?subject=New Contact Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AClub: ${formData.club}%0ATeams: ${formData.teams}%0AMessage: ${formData.message}`
        window.location.href = mailtoLink
        setSubmitted(true)
      }
    } catch (error) {
      // Fallback to mailto if there's an error
      const mailtoLink = `mailto:mac@torchwoodconsulting.com?subject=New Contact Form Submission&body=Name: ${formData.name}%0AEmail: ${formData.email}%0AClub: ${formData.club}%0ATeams: ${formData.teams}%0AMessage: ${formData.message}`
      window.location.href = mailtoLink
      setSubmitted(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen py-20 bg-torchwood-dark-teal">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Get Started Today
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Ready to turn operational chaos into clarity? Let&apos;s talk about how Torchwood Ops 
              can help your club focus on what matters most — athletes, coaches, and growth.
            </p>
          </div>

          {!submitted ? (
            <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-10 rounded-xl border border-torchwood-primary-teal/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
                    placeholder="john@yourclub.com"
                  />
                </div>

                <div>
                  <label htmlFor="club" className="block text-white font-semibold mb-2">
                    Club Name *
                  </label>
                  <input
                    type="text"
                    id="club"
                    name="club"
                    required
                    value={formData.club}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
                    placeholder="ABC Volleyball Club"
                  />
                </div>

                <div>
                  <label htmlFor="teams" className="block text-white font-semibold mb-2">
                    Number of Teams *
                  </label>
                  <select
                    id="teams"
                    name="teams"
                    required
                    value={formData.teams}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
                  >
                    <option value="">Select range</option>
                    <option value="1-5">1-5 teams</option>
                    <option value="6-10">6-10 teams</option>
                    <option value="11-20">11-20 teams</option>
                    <option value="21-35">21-35 teams</option>
                    <option value="36-50">36-50 teams</option>
                    <option value="50+">50+ teams</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Tell Us About Your Needs *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-torchwood-dark-teal border border-torchwood-primary-teal/30 text-white placeholder-gray-400 focus:outline-none focus:border-torchwood-accent-orange focus:ring-2 focus:ring-torchwood-accent-orange/50"
                    placeholder="What operational challenges are you facing? What would you like help with?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-torchwood-accent-orange text-white font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:bg-torchwood-primary-teal hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-10 rounded-xl border border-torchwood-primary-teal/30 text-center">
              <div className="text-5xl mb-4">✓</div>
              <h2 className="text-3xl font-bold mb-4 text-white">Thank You!</h2>
              <p className="text-xl text-gray-200 mb-6">
                We&apos;ve received your message and will get back to you within 24 hours.
              </p>
              <p className="text-gray-300">
                If you need immediate assistance, email us directly at{' '}
                <a href="mailto:mac@torchwoodconsulting.com" className="text-torchwood-accent-orange hover:underline">
                  mac@torchwoodconsulting.com
                </a>
              </p>
            </div>
          )}

          <div className="mt-12 bg-torchwood-dark-teal/50 p-8 rounded-xl border border-torchwood-primary-teal/30">
            <h2 className="text-2xl font-bold mb-4 text-torchwood-primary-teal text-center">
              Prefer to Talk Directly?
            </h2>
            <div className="text-center space-y-4">
              <p className="text-gray-200">
                <a href="mailto:mac@torchwoodconsulting.com" className="text-torchwood-accent-orange hover:underline text-lg font-semibold">
                  mac@torchwoodconsulting.com
                </a>
              </p>
              <p className="text-gray-300 text-sm">
                We typically respond within 24 hours, Monday through Friday.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">
              Not sure if Torchwood Ops is right for your club?
            </p>
            <a
              href="/services"
              className="text-torchwood-primary-teal hover:text-torchwood-accent-orange underline font-semibold"
            >
              View our service tiers →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

