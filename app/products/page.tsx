import Link from 'next/link'

export default function Products() {
  const resources = [
    {
      name: "Tryout Coordination",
      price: "$300–$500/event",
      description: "Full-service tryout management including registration, scheduling, communication, and logistics. Perfect for clubs running seasonal tryouts.",
      idealFor: "Clubs running seasonal tryouts"
    },
    {
      name: "Uniform Coordination",
      price: "$250/project",
      description: "Complete uniform ordering, sizing, vendor management, and delivery coordination. Takes the headache out of uniform season.",
      idealFor: "Uniform ordering season"
    },
    {
      name: "Website or Form Rebuild",
      price: "$250–$500 one-time",
      description: "Custom form creation or website updates to streamline operations. Build registration forms, contact forms, or update your club website.",
      idealFor: "Outdated forms or website"
    },
    {
      name: "Free Operations Health Check",
      price: "Free",
      description: "A comprehensive review of your club's operations to identify bottlenecks, inefficiencies, and opportunities for improvement. No commitment required.",
      idealFor: "Any club director"
    }
  ]

  return (
    <div className="min-h-screen py-20 bg-torchwood-dark-teal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Resources & Add-Ons
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Standalone services and resources to help your club operations run smoother.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-torchwood-secondary-teal/20 to-torchwood-primary-teal/20 rounded-xl p-8 border-2 border-torchwood-primary-teal/30 hover:border-torchwood-accent-orange transition-all"
            >
              <h2 className="text-2xl font-bold mb-3 text-white">{resource.name}</h2>
              <p className="text-torchwood-accent-orange font-semibold mb-4 text-lg">
                {resource.price}
              </p>
              <p className="text-gray-200 mb-4 leading-relaxed">
                {resource.description}
              </p>
              <p className="text-gray-400 text-sm italic mb-6">
                Ideal for: {resource.idealFor}
              </p>
              {resource.price === "Free" ? (
                <Link
                  href="/contact"
                  className="block text-center bg-torchwood-primary-teal text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out hover:bg-torchwood-accent-orange"
                >
                  Request Health Check
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="block text-center bg-torchwood-accent-orange text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out hover:bg-torchwood-primary-teal"
                >
                  Learn More
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-torchwood-secondary-teal/30 to-torchwood-primary-teal/30 rounded-xl p-12 text-center border border-torchwood-primary-teal/30 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Need Something Custom?
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            We can create custom solutions for your club&apos;s unique needs. 
            From seasonal projects to ongoing support, we&apos;ve got you covered.
          </p>
          <Link
            href="/contact"
            className="bg-torchwood-accent-orange text-white font-bold py-4 px-10 rounded-full text-lg transition duration-300 ease-in-out hover:bg-torchwood-primary-teal hover:scale-105 inline-block"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  )
}
