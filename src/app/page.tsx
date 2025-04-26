import Image from 'next/image'
import { MapIcon, ClockIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-secondary/90" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <div className="mb-8 relative w-48 h-48 mx-auto">
            <Image
              src="/logo.webp"
              alt="NaviTransit Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-white">
            Smart Transportation Monitoring
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Real-time vehicle tracking and intelligent route planning across multiple cities
          </p>
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<MapIcon className="w-12 h-12" />}
              title="Real-time Tracking"
              description="Monitor vehicle locations and arrival times across three different cities in real-time"
            />
            <FeatureCard
              icon={<ClockIcon className="w-12 h-12" />}
              title="Smart Route Planning"
              description="Optimize your journey with intelligent route suggestions and real-time updates"
            />
            <FeatureCard
              icon={<ShieldCheckIcon className="w-12 h-12" />}
              title="Secure Infrastructure"
              description="Enterprise-grade security with VPN support and multi-factor authentication"
            />
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="p-6 rounded-xl bg-primary hover:bg-primary/80 transition-colors duration-200">
      <div className="text-accent mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
} 