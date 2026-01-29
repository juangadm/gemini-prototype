import GeminiLogo from '@/components/shared/GeminiLogo'
import DemoCard from '@/components/home/DemoCard'

const demos = [
  {
    number: '01',
    title: 'BIG',
    subtitle: '(Project Oasis)',
    description: 'Offline nano model for paid subscribers — premium feature differentiation',
    status: 'ready' as const,
    href: '/oasis/chat',
  },
  {
    number: '02',
    title: 'Pricing Optimization',
    description: 'Anchor on daily vs monthly pricing to improve conversion',
    status: 'ready' as const,
    href: '/daily/chat',
  },
  {
    number: '03',
    title: 'Gemini \'Work\' Tooltip',
    description: 'Show session progress/work done in a tooltip',
    status: 'ready' as const,
    href: '/work/chat',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Gemini Logo */}
          <div className="flex justify-center mb-8">
            <GeminiLogo size="lg" animated />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-medium text-black mb-4">
            Gemini Monetization Prototypes
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[#5f6368] mb-6 max-w-2xl mx-auto">
            Small interventions to improve subscription conversion &amp; retention
          </p>

          {/* Author */}
          <div className="space-y-1">
            <p className="text-base font-medium text-black">
              Juan Gabriel Delgado Montes
            </p>
            <p className="text-sm text-[#5f6368]">
              DeepMind Product Interview
            </p>
          </div>
        </div>
      </header>

      {/* Demo Cards */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {demos.map((demo) => (
              <DemoCard
                key={demo.number}
                number={demo.number}
                title={demo.title}
                subtitle={demo.subtitle}
                description={demo.description}
                status={demo.status}
                href={demo.href}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#5f6368]">
            Built for DeepMind Product Lead Interview
          </p>
        </div>
      </footer>
    </div>
  )
}
