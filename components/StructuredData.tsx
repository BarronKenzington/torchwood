export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Torchwood Ops',
    alternateName: 'Torchwood Consulting',
    url: 'https://torchwoodconsulting.com',
    logo: 'https://torchwoodconsulting.com/logos/2.svg',
    description: 'A club operations manager, without the full-time salary. We take care of operational chaos — scheduling, emails, forms, and logistics — so you can focus on athletes, coaches, and growth.',
    founder: {
      '@type': 'Person',
      name: 'Mac',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'mac@torchwoodconsulting.com',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://www.instagram.com/torchwood_ops/',
      'https://www.linkedin.com/in/barronmac/',
    ],
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Sports Club Operations Administrative Assistant',
    provider: {
      '@type': 'Organization',
      name: 'Torchwood Ops',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    description: 'On-demand admin and operations support for youth sports clubs. We handle scheduling, emails, forms, registration, travel logistics, and more.',
    offers: [
      {
        '@type': 'Offer',
        name: 'Starter Ops Assistant',
        price: '300',
        priceCurrency: 'USD',
        description: '10 hours/month of admin help, standard templates, basic scheduling support',
      },
      {
        '@type': 'Offer',
        name: 'Growth Ops Assistant',
        price: '800',
        priceCurrency: 'USD',
        description: '20 hours/month of admin help, project management, enhanced communications',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}

