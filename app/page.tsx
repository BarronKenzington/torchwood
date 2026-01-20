import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-torchwood-dark-teal via-torchwood-secondary-teal to-torchwood-primary-teal text-white pt-12 md:pt-16 pb-24 md:pb-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            A Club Operations Manager,
            <br />
            <span className="text-torchwood-accent-orange">Without the Full-Time Salary</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-200 leading-relaxed">
            We take care of the operational chaos — scheduling, emails, forms, and logistics — 
            so you can focus on athletes, coaches, and growth.
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-white font-bold">
            We are a club director&apos;s secret weapon, not just a virtual assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn-primary text-lg px-10 py-4"
            >
              Get Started Today
            </Link>
            <Link 
              href="/services" 
              className="btn-secondary text-lg px-10 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-torchwood-dark-teal"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-torchwood-dark-teal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            What You&apos;re Actually Getting
          </h2>
          <p className="text-xl text-center mb-16 text-gray-300 max-w-3xl mx-auto">
            You&apos;re not buying admin tasks. You&apos;re buying time, sanity, and structure.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-8 rounded-xl border border-torchwood-primary-teal/30 hover:border-torchwood-accent-orange transition-all text-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-3xl font-bold mb-4 text-torchwood-primary-teal">Time</h3>
              <p className="text-gray-200 text-lg">
                Get hours back every week. Stop juggling calendars, emails, and forms. 
                Focus on what actually grows your club.
              </p>
            </div>
            <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-8 rounded-xl border border-torchwood-primary-teal/30 hover:border-torchwood-accent-orange transition-all text-center">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-3xl font-bold mb-4 text-torchwood-primary-teal">Sanity</h3>
              <p className="text-gray-200 text-lg">
                Reduce the mental load. Stop worrying about what you&apos;re forgetting. 
                Sleep better knowing operations are handled.
              </p>
            </div>
            <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-8 rounded-xl border border-torchwood-primary-teal/30 hover:border-torchwood-accent-orange transition-all text-center">
              <div className="text-5xl mb-4">📋</div>
              <h3 className="text-3xl font-bold mb-4 text-torchwood-primary-teal">Structure</h3>
              <p className="text-gray-200 text-lg">
                Systems that scale. Processes that work. Documentation that actually helps. 
                Build an operation that runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-torchwood-dark-teal to-torchwood-secondary-teal">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
            The Torchwood Ops Assistant Model
          </h2>
          <p className="text-lg text-center mb-16 text-gray-300 italic max-w-3xl mx-auto">
            Less than the cost of 1 part-time staffer. More reliable than a virtual assistant who doesn&apos;t understand sports operations.
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-torchwood-dark-teal/50 p-8 rounded-xl border border-torchwood-primary-teal/30">
                <h3 className="text-2xl font-bold mb-4 text-torchwood-accent-orange">Scheduling & Communication</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Manage practice and travel calendars</li>
                  <li>• Send staff reminders</li>
                  <li>• Update cancellations</li>
                  <li>• Coordinate team communications</li>
                </ul>
              </div>
              <div className="bg-torchwood-dark-teal/50 p-8 rounded-xl border border-torchwood-primary-teal/30">
                <h3 className="text-2xl font-bold mb-4 text-torchwood-accent-orange">Registration & Rosters</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Build and maintain registration forms</li>
                  <li>• Manage PlayMetrics/TeamSnap data</li>
                  <li>• Cross-check payments</li>
                  <li>• Handle roster updates</li>
                </ul>
              </div>
              <div className="bg-torchwood-dark-teal/50 p-8 rounded-xl border border-torchwood-primary-teal/30">
                <h3 className="text-2xl font-bold mb-4 text-torchwood-accent-orange">Uniforms & Vendors</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Coordinate with apparel suppliers</li>
                  <li>• Track sizes and delivery</li>
                  <li>• Manage vendor relationships</li>
                  <li>• Handle inventory logistics</li>
                </ul>
              </div>
              <div className="bg-torchwood-dark-teal/50 p-8 rounded-xl border border-torchwood-primary-teal/30">
                <h3 className="text-2xl font-bold mb-4 text-torchwood-accent-orange">Travel Logistics</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Compile hotel blocks</li>
                  <li>• Manage tournament registrations</li>
                  <li>• Confirm rosters</li>
                  <li>• Coordinate team travel</li>
                </ul>
              </div>
              <div className="bg-torchwood-dark-teal/50 p-8 rounded-xl border border-torchwood-primary-teal/30">
                <h3 className="text-2xl font-bold mb-4 text-torchwood-accent-orange">Staff Support</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Track certifications</li>
                  <li>• Manage payroll hours</li>
                  <li>• Handle onboarding checklists</li>
                  <li>• Support HR operations</li>
                </ul>
              </div>
              <div className="bg-torchwood-dark-teal/50 p-8 rounded-xl border border-torchwood-primary-teal/30">
                <h3 className="text-2xl font-bold mb-4 text-torchwood-accent-orange">Director&apos;s Desk</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Email triage and management</li>
                  <li>• Calendar alignment</li>
                  <li>• Reports and documentation</li>
                  <li>• System maintenance</li>
                </ul>
              </div>
              <div className="bg-torchwood-dark-teal/50 p-8 rounded-xl border border-torchwood-primary-teal/30">
                <h3 className="text-2xl font-bold mb-4 text-torchwood-accent-orange">Website Management</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Manage registrations and website updates</li>
                  <li>• Support for SportsEngine, PlayMetrics, TeamSnap, and League Apps</li>
                  <li>• Keep club information current and accurate</li>
                  <li>• Handle platform-specific configurations</li>
                </ul>
              </div>
              <div className="bg-torchwood-dark-teal/50 p-8 rounded-xl border border-torchwood-primary-teal/30">
                <h3 className="text-2xl font-bold mb-4 text-torchwood-accent-orange">Project-Based Work</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>• Need help with just one project?</li>
                  <li>• Not ready for monthly assistance?</li>
                  <li>• We offer one-off project support</li>
                  <li>• Reach out to discuss your needs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me / Credibility Section */}
      <section className="py-20 bg-torchwood-dark-teal">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Who You&apos;re Actually Working With
            </h2>
            <div className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 p-10 rounded-xl border border-torchwood-primary-teal/30 mb-8">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                <div className="flex-shrink-0">
                  <Image
                    src="/media/Torchwood+Consulting+(40+x+40+px)+(800+x+800+px).png"
                    alt="Mac - Founder of Torchwood Ops"
                    width={256}
                    height={256}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-torchwood-accent-orange shadow-lg"
                    priority
                  />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-xl text-gray-200 leading-relaxed">
                    I&apos;m not a generic virtual assistant or a call center operator. I&apos;m Mac—the founder who built 
                    Meraki Volleyball from <span className="text-torchwood-accent-orange font-bold">2 teams to 15 teams</span>, 
                    managed a <span className="text-torchwood-accent-orange font-bold">30-person staff</span>, and led the club 
                    through acquisition by League One Volleyball. I&apos;ve lived every challenge you&apos;re facing.
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8 text-left">
                <div className="bg-torchwood-dark-teal/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-torchwood-accent-orange">Built a Club from Scratch</h3>
                  <p className="text-gray-200">
                    Founded Meraki Volleyball in 2017 and scaled it from 25 athletes to <span className="text-torchwood-primary-teal font-semibold">250+ athletes</span>. 
                    Grew revenue from <span className="text-torchwood-primary-teal font-semibold">$42K to $250K+</span> while building 
                    sustainable operations systems that actually worked.
                  </p>
                </div>
                <div className="bg-torchwood-dark-teal/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-torchwood-accent-orange">Operations That Scale</h3>
                  <p className="text-gray-200">
                    Built digital operations systems from the ground up—QuickBooks, CRM, scheduling tools, coach onboarding, 
                    and evaluation systems. I don&apos;t just execute—I build systems that scale.
                  </p>
                </div>
                <div className="bg-torchwood-dark-teal/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-torchwood-accent-orange">10+ Years Coaching Experience</h3>
                  <p className="text-gray-200">
                    <span className="text-torchwood-primary-teal font-semibold">AVCA Thirty Under 30 Award</span> winner with 
                    <span className="text-torchwood-primary-teal font-semibold"> 10+ years</span> of coaching experience, including 
                    <span className="text-torchwood-primary-teal font-semibold"> college coaching</span>. I understand the coaching side 
                    AND the operations side—giving me unique insight into what directors and coaches actually need.
                  </p>
                </div>
                <div className="bg-torchwood-dark-teal/50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-torchwood-accent-orange">You Work Directly With Me</h3>
                  <p className="text-gray-200">
                    No middlemen, no account managers, no handoffs. When you work with Torchwood Ops, you work directly 
                    with someone who&apos;s built what you&apos;re trying to build—and knows how to help you scale it.
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-torchwood-primary-teal/30">
                <p className="text-lg text-gray-200">
                  <span className="text-torchwood-accent-orange font-bold">BS in Kinesiology</span> from University of New Hampshire • 
                  <span className="text-torchwood-accent-orange font-bold"> Professional Scrum Master</span> • 
                  <span className="text-torchwood-accent-orange font-bold"> 8+ years</span> building and scaling sports organizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Club Ops Sprint Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Limited Availability Badge */}
          <div className="text-center mb-6">
            <span className="inline-block bg-blue-50 text-blue-700 font-bold px-4 py-2 rounded-full text-sm md:text-base border-2 border-blue-200">
              LIMITED: 3 SPOTS PER MONTH
            </span>
          </div>

          {/* Heading & Sub-heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-torchwood-dark-teal">
            Reclaim Your Sanity. One Week. One Major Win.
          </h2>
          <p className="text-xl text-center mb-16 text-gray-700 max-w-3xl mx-auto">
            Stop drowning in the admin grind. Let me handle 5 hours of your toughest operational tasks this week - no long-term commitment required.
          </p>

          {/* Three-Column Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="text-5xl mb-4">⏱️</div>
              <h3 className="text-2xl font-bold mb-4 text-torchwood-dark-teal">The Kickoff</h3>
              <p className="text-gray-700 text-lg">
                A 30-min deep dive to identify your #1 bottleneck (registration, rosters, or travel).
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-2xl font-bold mb-4 text-torchwood-dark-teal">The Deep Work</h3>
              <p className="text-gray-700 text-lg">
                I spend 5 hours inside your tech stack (PlayMetrics, TeamSnap, etc.) building the solution.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-center">
              <div className="text-5xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold mb-4 text-torchwood-dark-teal">The Roadmap</h3>
              <p className="text-gray-700 text-lg">
                A wrap-up meeting where I hand over the keys and a 30-day plan for your club.
              </p>
            </div>
          </div>

          {/* Call to Action Button */}
          <div className="text-center">
            <a
              href="https://forms.gle/txk6CwuWxdMjbY686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-torchwood-accent-orange text-white font-bold py-5 px-12 rounded-full text-xl transition duration-300 ease-in-out hover:bg-torchwood-primary-teal hover:scale-105 shadow-lg"
            >
              Apply for a Free Ops Sprint
            </a>
            <p className="text-gray-600 mt-6 text-sm md:text-base">
              (No credit card required. I only work with clubs where I know I can move the needle.)
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-torchwood-accent-orange via-torchwood-primary-teal to-torchwood-secondary-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Get Your Time, Sanity, and Structure Back?
          </h2>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto text-gray-100">
            Stop drowning in admin. Start focusing on growth.
          </p>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-gray-200">
            Ready to start right away? Or want to try a low-commitment Ops Sprint first?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href="/contact" 
              className="bg-white text-torchwood-dark-teal font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out hover:bg-gray-100 hover:scale-105 shadow-lg"
            >
              Get Started — Free Consultation
            </Link>
            <Link 
              href="/services" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out hover:bg-white hover:text-torchwood-dark-teal shadow-lg"
            >
              View Our Services
            </Link>
          </div>
          <div className="pt-6 border-t border-white/20">
            <p className="text-gray-200 mb-4 text-lg">
              Or try a low-commitment <span className="font-semibold">Ops Sprint</span> first:
            </p>
            <a
              href="https://forms.gle/txk6CwuWxdMjbY686"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white/10 border-2 border-white text-white font-bold py-3 px-8 rounded-full text-base transition duration-300 ease-in-out hover:bg-white hover:text-torchwood-dark-teal shadow-lg"
            >
              Apply for Ops Sprint
            </a>
          </div>
          <p className="text-gray-200 mt-8 text-sm">
            No commitment required. Just a conversation about your needs.
          </p>
        </div>
      </section>
    </div>
  )
}
