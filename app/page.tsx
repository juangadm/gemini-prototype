import GeminiLogo from '@/components/shared/GeminiLogo'
import DemoCard from '@/components/home/DemoCard'

const demos = [
  {
    number: '01',
    title: 'Project Jetstream',
    description: 'Gemini Nano for offline mode, available for subscribers. Keep users productive on planes, metros, and roadtrips — with 0 marginal cost to Google.',
    status: 'ready' as const,
    href: '/jetstream/chat',
    docsUrl: 'https://docs.google.com/document/d/1qlMCzGdfNN8ZOTXV9CV3lf_WVsPIv0W4PBjMqh_06Bg/edit?tab=t.0',
    docsLabel: 'Jetstream Spec',
  },
  {
    number: '02',
    title: 'Paid Reinforcement',
    description: 'Subtle, tasteful reminders showing users the extra value they\'re getting — right where they\'re already engaged',
    status: 'ready' as const,
    href: '/work/chat',
  },
  {
    number: '03',
    title: 'Pricing Optimization',
    description: 'Anchor on daily vs monthly pricing to improve conversion on upgrade models and subscriptions page',
    status: 'in-progress' as const,
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
            Gemini Monetization
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-[#5f6368] mb-6 max-w-2xl mx-auto">
            Working prototypes to improve paid subscription and retention for Gemini App
          </p>

          {/* Author */}
          <div className="space-y-2">
            <p className="text-base font-medium text-black">
              Juan Gabriel Delgado Montes
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://juangabriel.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1a73e8] hover:underline"
              >
                Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/juangadm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#1a73e8] hover:underline"
              >
                LinkedIn
              </a>
            </div>
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
                description={demo.description}
                status={demo.status}
                href={demo.href}
                docsUrl={demo.docsUrl}
                docsLabel={demo.docsLabel}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 mt-auto">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#5f6368]">
            Created for DeepMind team
          </p>
        </div>
      </footer>
    </div>
  )
}
