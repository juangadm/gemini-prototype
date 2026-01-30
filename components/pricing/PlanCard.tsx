'use client'

import { PricingPlan, PricingFeature, GeminiAppSection } from '@/lib/mockData'

interface PlanCardProps {
  plan: PricingPlan
  showOfflineMode?: boolean
}

// Google G icon component
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

// Checkmark icon for badges and bullets
function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <span className={`material-symbols-outlined text-[#5f6368] ${className}`} style={{ fontSize: '18px' }}>
      check
    </span>
  )
}

// Gemini app section for FREE tier (with bullet list)
function GeminiAppBullets({ section }: { section: GeminiAppSection }) {
  return (
    <div className="mb-6">
      <h4 className="text-base font-bold text-black mb-1">{section.title}</h4>
      {section.subtitle && (
        <p className="text-base text-[#666] mb-3" style={{ lineHeight: '22.4px' }}>
          {section.subtitle}
        </p>
      )}
      {section.bullets && (
        <ul className="space-y-2">
          {section.bullets.map((bullet, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckIcon className="mt-0.5 flex-shrink-0" />
              <span className="text-base text-[#666]" style={{ lineHeight: '22.4px' }}>
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// Gemini app section for PAID tiers (with description paragraph)
function GeminiAppDescription({ section }: { section: GeminiAppSection }) {
  return (
    <div className="mb-6">
      <h4 className="text-base font-bold text-black mb-1">{section.title}</h4>
      {section.description && (
        <p className="text-base text-[#666]" style={{ lineHeight: '22.4px' }}>
          {section.description}
        </p>
      )}
    </div>
  )
}

// Feature block component
function FeatureBlock({ feature }: { feature: PricingFeature }) {
  return (
    <div className="mb-5">
      <h4 className="text-base font-bold text-black mb-1 flex items-center gap-2">
        {feature.hasGoogleIcon && <GoogleIcon />}
        {feature.title}
      </h4>
      <p className="text-base text-[#666]" style={{ lineHeight: '22.4px' }}>
        {feature.description}
      </p>
    </div>
  )
}

// "Everything in X and:" badge
function TierBadge({ previousTier }: { previousTier: string }) {
  return (
    <div className="mb-6 py-3 px-4 bg-[#e8f0fe] rounded-lg flex items-center gap-2">
      <CheckIcon />
      <span className="text-sm text-[#1f1f1f]">Everything in {previousTier} and:</span>
    </div>
  )
}

export default function PlanCard({ plan, showOfflineMode = false }: PlanCardProps) {
  const isFree = plan.price === 0
  const hasBullets = plan.geminiAppSection.bullets && plan.geminiAppSection.bullets.length > 0

  return (
    <div className="bg-white p-6 flex flex-col">
      {/* Plan name */}
      <h3 className="text-[32px] font-medium text-black mb-2" style={{ lineHeight: '1.2' }}>
        {plan.name}
      </h3>

      {/* Description */}
      <p className="text-base text-[#666] mb-6" style={{ lineHeight: '22.4px' }}>
        {plan.description}
      </p>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-[36px] font-medium text-black">
            ${plan.price === 0 ? '0' : plan.price.toFixed(2)}
          </span>
          <span className="text-lg text-[#666] ml-1">{plan.priceSubtext}</span>
        </div>
        {plan.promoText && (
          <p className="text-lg text-[#666] mt-1">{plan.promoText}</p>
        )}
      </div>

      {/* CTA buttons */}
      <div className="space-y-3 mb-6">
        {isFree ? (
          <button className="w-full py-3 px-6 bg-white text-black text-base font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            {plan.cta}
          </button>
        ) : (
          <button className="w-full py-3 px-6 bg-[#1a73e8] text-white text-base font-medium rounded-full hover:bg-[#1557b0] transition-colors">
            {plan.cta}
          </button>
        )}
        {plan.ctaSecondary && (
          <button className="w-full py-3 px-6 bg-white text-black text-base font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            {plan.ctaSecondary}
          </button>
        )}
      </div>

      {/* "Everything in X and:" badge for paid tiers */}
      {plan.previousTier && <TierBadge previousTier={plan.previousTier} />}

      {/* Gemini app section */}
      {hasBullets ? (
        <GeminiAppBullets section={plan.geminiAppSection} />
      ) : (
        <GeminiAppDescription section={plan.geminiAppSection} />
      )}

      {/* Offline mode line for paid plans */}
      {showOfflineMode && !isFree && (
        <div className="flex items-start gap-2 mb-6">
          <span className="material-symbols-outlined text-[#1a73e8] mt-0.5 flex-shrink-0" style={{ fontSize: '18px' }}>
            check
          </span>
          <span className="text-base text-[#666]" style={{ lineHeight: '22.4px' }}>
            Use Gemini offline
          </span>
        </div>
      )}

      {/* Feature blocks */}
      <div className="flex-1">
        {plan.features.map((feature, index) => (
          <FeatureBlock key={index} feature={feature} />
        ))}
      </div>

      {/* Footer text for paid tiers */}
      {plan.footerText && (
        <p className="text-sm text-[#666] mt-4 pt-4 border-t border-gray-200">
          {plan.footerText}
        </p>
      )}
    </div>
  )
}
