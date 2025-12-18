import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-torchwood-dark-teal">
      <div className="text-center px-4 max-w-2xl mx-auto">
        <div className="text-8xl md:text-9xl font-bold text-torchwood-accent-orange mb-4">
          404
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          This Page Got Lost in Uniform Orders
        </h2>
        <p className="text-xl text-gray-300 mb-4">
          The page you&apos;re looking for is probably somewhere between sizing charts, vendor quotes, 
          and delivery confirmations.
        </p>
        <p className="text-lg text-gray-400 mb-8 italic">
          We&apos;re great at organizing uniforms, but apparently not so great at keeping track of web pages. 
          Our apologies—this one must have gotten mixed up with the bulk order spreadsheets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-block">
            Return to Home Court
          </Link>
          <Link href="/contact" className="btn-secondary inline-block">
            Report Missing Page
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          Don&apos;t worry—we&apos;re better at organizing club operations than finding lost web pages. 
          Let&apos;s get you back on track.
        </p>
      </div>
    </div>
  )
}

