'use client'

import { useState } from 'react'
import PricingHeader from '@/components/pricing/PricingHeader'
import PlanCard from '@/components/pricing/PlanCard'
import FeatureRow from '@/components/pricing/FeatureRow'
import GeminiLogo from '@/components/shared/GeminiLogo'
import { pricingPlans, faqItems } from '@/lib/mockData'

export default function WorkSubscriptionsPage() {
  const [selectedTab, setSelectedTab] = useState<'learn' | 'create' | 'work' | 'code'>('learn')
  const [selectedBenefitTab, setSelectedBenefitTab] = useState<'pro' | 'ultra'>('pro')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const tabContent = {
    learn: {
      title: 'Learn anything faster',
      description: 'Get step-by-step explanations, study guides, and practice problems for any subject. Gemini adapts to your learning style.',
    },
    create: {
      title: 'Create stunning visuals',
      description: 'Generate images, videos, and presentations with AI. From concept art to professional graphics, bring your ideas to life.',
    },
    work: {
      title: 'Work smarter, not harder',
      description: 'Draft emails, summarize documents, and analyze data in seconds. Gemini integrates seamlessly with Google Workspace.',
    },
    code: {
      title: 'Code with confidence',
      description: 'Write, debug, and explain code in any language. Get intelligent suggestions and learn best practices as you build.',
    },
  }

  const benefitFeatures = {
    pro: [
      { icon: 'auto_awesome', title: 'Whisk Animate', description: 'Create animated images from your photos', color: '#9b72cb' },
      { icon: 'mail', title: 'Gemini in Gmail', description: 'Draft, reply, and summarize emails with AI', color: '#ea4335' },
      { icon: 'cloud', title: '2TB Storage', description: 'Google One cloud storage included', color: '#4285f4' },
      { icon: 'auto_stories', title: 'NotebookLM', description: 'AI-powered research and note-taking', color: '#34a853' },
    ],
    ultra: [
      { icon: 'auto_awesome', title: 'Whisk Animate Pro', description: 'Advanced animation with more styles', color: '#9b72cb' },
      { icon: 'mail', title: 'Gemini Everywhere', description: 'Full AI integration across all Google apps', color: '#ea4335' },
      { icon: 'cloud', title: '30TB Storage', description: 'Maximum Google One storage', color: '#4285f4' },
      { icon: 'auto_stories', title: 'NotebookLM Plus', description: 'Extended features for power researchers', color: '#34a853' },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <PricingHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Animated logo */}
          <div className="flex justify-center mb-8">
            <GeminiLogo size="xl" animated />
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-7xl lg:text-[88px] font-medium text-black leading-tight mb-6">
            Get more out of{' '}
            <span className="gemini-gradient">Gemini</span>
          </h1>

          {/* CTA */}
          <button className="px-8 py-4 bg-[#1a73e8] text-white text-lg font-medium rounded-full hover:bg-[#1557b0] transition-colors">
            Upgrade
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {pricingPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Learn, Create, Work, Code Tabs */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-full p-1">
              {(['learn', 'create', 'work', 'code'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`
                    px-6 py-2.5 rounded-full text-sm font-medium transition-colors
                    ${selectedTab === tab
                      ? 'bg-[#1a73e8] text-white'
                      : 'text-[#666] hover:text-black'}
                  `}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content */}
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-medium text-black mb-4">
              {tabContent[selectedTab].title}
            </h2>
            <p className="text-lg text-[#666] max-w-2xl mx-auto">
              {tabContent[selectedTab].description}
            </p>
          </div>

          {/* Visual placeholder */}
          <div className="mt-12 aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <span className="material-symbols-outlined text-6xl text-[#666] mb-4">
                {selectedTab === 'learn' ? 'school' :
                 selectedTab === 'create' ? 'palette' :
                 selectedTab === 'work' ? 'work' : 'code'}
              </span>
              <p className="text-[#666]">Interactive demo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pro/Ultra Benefits */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-medium text-black text-center mb-4">
            Google AI {selectedBenefitTab === 'pro' ? 'Pro' : 'Ultra'} Benefits
          </h2>
          <p className="text-lg text-[#666] text-center mb-12">
            Unlock powerful features designed for {selectedBenefitTab === 'pro' ? 'professionals' : 'power users'}
          </p>

          {/* Tab toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
              <button
                onClick={() => setSelectedBenefitTab('pro')}
                className={`
                  px-8 py-3 rounded-full text-sm font-medium transition-colors
                  ${selectedBenefitTab === 'pro'
                    ? 'bg-[#1a73e8] text-white'
                    : 'text-[#666] hover:text-black'}
                `}
              >
                AI Pro
              </button>
              <button
                onClick={() => setSelectedBenefitTab('ultra')}
                className={`
                  px-8 py-3 rounded-full text-sm font-medium transition-colors
                  ${selectedBenefitTab === 'ultra'
                    ? 'bg-[#1a73e8] text-white'
                    : 'text-[#666] hover:text-black'}
                `}
              >
                AI Ultra
              </button>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefitFeatures[selectedBenefitTab].map((feature, index) => (
              <FeatureRow
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={feature.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <GeminiLogo size="lg" animated />
          <h2 className="text-3xl md:text-4xl font-medium text-white mt-6 mb-4">
            Get started with a one-month free trial of Google AI Pro
          </h2>
          <p className="text-lg text-[#9aa0a6] mb-8">
            Experience the full power of Gemini 2.5 Pro, Deep Research, and more.
          </p>
          <button className="px-8 py-4 bg-white text-black text-lg font-medium rounded-full hover:bg-gray-100 transition-colors">
            Start free trial
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-medium text-black text-center mb-12">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-base font-medium text-black">{item.question}</span>
                  <span className="material-symbols-outlined text-[#666]">
                    {expandedFaq === index ? 'expand_less' : 'expand_more'}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-5 pb-5">
                    <p className="text-[#666]">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          {/* Footnotes */}
          <div className="text-xs text-[#666] space-y-2 mb-8">
            <p>1. Pricing and availability may vary by region.</p>
            <p>2. Free trial available for new subscribers only.</p>
            <p>3. Storage is shared across Google One services.</p>
          </div>

          {/* Footer links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#666]">
            <a href="#" className="hover:text-black transition-colors">Privacy</a>
            <a href="#" className="hover:text-black transition-colors">Terms</a>
            <a href="#" className="hover:text-black transition-colors">Help</a>
            <a href="#" className="hover:text-black transition-colors">Send feedback</a>
          </div>

          <p className="text-xs text-[#999] mt-6">
            © 2024 Google LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
