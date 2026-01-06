'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Services() {
  const [activeTab, setActiveTab] = useState('growth')

  const tiers = [
    {
      id: 'sprint',
      name: "Club Ops Sprint",
      hours: "5 hours (one-time)",
      price: "Free",
      idealFor: "Clubs wanting to try before committing",
      deliverables: [
        "30-min kickoff to identify your #1 bottleneck",
        "5 hours of deep work in your tech stack",
        "Wrap-up meeting with solution handoff",
        "30-day roadmap for your club"
      ],
      popular: false,
      isSprint: true
    },
    {
      id: 'starter',
      name: "Starter Ops Assistant",
      hours: "10 hours/month",
      price: "$300–$550/mo",
      idealFor: "Small clubs or new directors",
      deliverables: [
        "Admin help (10 hours/month)",
        "Standard templates (forms, emails, rosters)",
        "Basic scheduling support",
        "Email management",
        "Registration form setup"
      ],
      popular: false
    },
    {
      id: 'growth',
      name: "Growth Ops Assistant",
      hours: "20 hours/month",
      price: "$800–$1,300/mo",
      idealFor: "8–20 team clubs",
      deliverables: [
        "Admin help (20 hours/month)",
        "Project management",
        "Enhanced communications",
        "Roster & registration management",
        "Travel logistics support",
        "Vendor coordination",
        "Staff support (certifications, payroll)"
      ],
      popular: true
    },
    {
      id: 'director',
      name: "Director's Partner",
      hours: "30+ hours/month",
      price: "Contact for Pricing",
      idealFor: "Multi-location or 20+ team clubs",
      deliverables: [
        "Full ops management (30+ hours/month)",
        "Seasonal planning",
        "Complete administrative support",
        "Strategic operations guidance",
        "Custom system documentation",
        "Priority support",
        "Dedicated ops manager experience"
      ],
      popular: false
    }
  ]

  const activeTier = tiers.find(tier => tier.id === activeTab) || tiers[1]

  return (
    <div className="min-h-screen py-20 bg-torchwood-dark-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Torchwood Ops Assistant
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-4">
            Subscription-style service that gives youth sports directors on-demand admin 
            and operations support — powered by people who actually understand how clubs work.
          </p>
          <p className="text-lg text-torchwood-primary-teal font-semibold">
            Less than the cost of 1 part-time staffer. More reliable than a VA who doesn&apos;t understand sports.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-torchwood-dark-teal/50 rounded-xl p-2 border border-torchwood-primary-teal/30 flex flex-col sm:flex-row gap-2">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setActiveTab(tier.id)}
                aria-pressed={activeTab === tier.id}
                className={`flex-1 py-4 px-6 rounded-lg font-bold transition-all duration-300 cursor-pointer relative z-10 ${
                  activeTab === tier.id
                    ? tier.popular
                      ? 'bg-torchwood-accent-orange text-white shadow-lg scale-105'
                      : 'bg-torchwood-primary-teal text-white shadow-lg scale-105'
                    : 'bg-transparent text-gray-300 hover:text-white hover:bg-torchwood-secondary-teal/20 active:scale-95'
                }`}
              >
                <div className="text-lg font-bold">{tier.name}</div>
                <div className="text-sm mt-1 opacity-90">{tier.price}</div>
                {tier.popular && activeTab === tier.id && (
                  <div className="text-xs mt-1 font-normal opacity-90">MOST POPULAR</div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Tier Display */}
        <div className="max-w-4xl mx-auto mb-20">
          <div
            className={`bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 rounded-xl p-10 border-2 transition-all ${
              activeTier.popular
                ? 'border-torchwood-accent-orange shadow-2xl'
                : 'border-torchwood-primary-teal/30'
            }`}
          >
            {activeTier.popular && (
              <div className="bg-torchwood-accent-orange text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-6">
                MOST POPULAR
              </div>
            )}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h2 className="text-4xl font-bold mb-2 text-white">{activeTier.name}</h2>
                <p className="text-torchwood-primary-teal font-semibold text-lg mb-2">{activeTier.hours}</p>
                <p className="text-gray-300 italic">{activeTier.idealFor}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-right">
                  {activeTier.price === "Contact for Pricing" ? (
                    <span className="text-2xl font-bold text-torchwood-accent-orange">Contact for Pricing</span>
                  ) : activeTier.price === "Free" ? (
                    <span className="text-5xl font-bold text-torchwood-accent-orange">Free</span>
                  ) : (
                    <>
                      <span className="text-5xl font-bold text-white">{activeTier.price.split('–')[0]}</span>
                      <span className="text-gray-300 text-2xl">–{activeTier.price.split('–')[1]}</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {activeTier.isSprint ? (
              <>
                <div className="text-center mb-6">
                  <span className="inline-block bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-full text-sm border-2 border-blue-200">
                    LIMITED: 3 SPOTS PER MONTH
                  </span>
                </div>
                <div className="border-t border-torchwood-primary-teal/30 pt-6 mb-8">
                  <h3 className="text-xl font-bold mb-6 text-torchwood-primary-teal text-center">How It Works:</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-torchwood-dark-teal/50 p-6 rounded-xl border border-torchwood-primary-teal/30 text-center">
                      <div className="text-4xl mb-3">⏱️</div>
                      <h4 className="text-lg font-bold mb-2 text-torchwood-accent-orange">The Kickoff</h4>
                      <p className="text-gray-200 text-sm">
                        A 30-min deep dive to identify your #1 bottleneck (registration, rosters, or travel).
                      </p>
                    </div>
                    <div className="bg-torchwood-dark-teal/50 p-6 rounded-xl border border-torchwood-primary-teal/30 text-center">
                      <div className="text-4xl mb-3">⚙️</div>
                      <h4 className="text-lg font-bold mb-2 text-torchwood-accent-orange">The Deep Work</h4>
                      <p className="text-gray-200 text-sm">
                        I spend 5 hours inside your tech stack (PlayMetrics, TeamSnap, etc.) building the solution.
                      </p>
                    </div>
                    <div className="bg-torchwood-dark-teal/50 p-6 rounded-xl border border-torchwood-primary-teal/30 text-center">
                      <div className="text-4xl mb-3">🗺️</div>
                      <h4 className="text-lg font-bold mb-2 text-torchwood-accent-orange">The Roadmap</h4>
                      <p className="text-gray-200 text-sm">
                        A wrap-up meeting where I hand over the keys and a 30-day plan for your club.
                      </p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://forms.gle/txk6CwuWxdMjbY686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out bg-torchwood-accent-orange text-white hover:bg-torchwood-primary-teal hover:scale-105"
                >
                  Apply for a Free Ops Sprint
                </a>
                <p className="text-gray-400 text-center mt-4 text-sm">
                  (No credit card required. I only work with clubs where I know I can move the needle.)
                </p>
              </>
            ) : (
              <>
                <div className="border-t border-torchwood-primary-teal/30 pt-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-torchwood-primary-teal">What&apos;s Included:</h3>
                  <ul className="space-y-3 text-gray-200">
                    {activeTier.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-torchwood-accent-orange mr-3 text-xl">✓</span>
                        <span className="text-lg">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`block text-center font-bold py-4 px-8 rounded-full text-lg transition duration-300 ease-in-out ${
                    activeTier.popular
                      ? 'bg-torchwood-accent-orange text-white hover:bg-torchwood-primary-teal hover:scale-105'
                      : 'bg-torchwood-primary-teal text-white hover:bg-torchwood-accent-orange hover:scale-105'
                  }`}
                >
                  Get Started with {activeTier.name}
                </Link>
              </>
            )}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-torchwood-secondary-teal/30 to-torchwood-primary-teal/30 rounded-xl p-12 text-center border border-torchwood-primary-teal/30 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Not Sure Which Tier Is Right?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss your club&apos;s specific needs. 
            We&apos;ll help you find the perfect fit.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out hover:bg-white hover:text-torchwood-dark-teal"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
