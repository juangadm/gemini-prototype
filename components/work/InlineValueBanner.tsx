'use client'

import { tierLimits, TierType } from '@/lib/mockData'

interface InlineValueBannerProps {
  tier: TierType
  extraGenerations: number
}

function GeminiSparkle() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="animate-sparkle-pulse"
    >
      <defs>
        <linearGradient id="inlineBannerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285f4" />
          <stop offset="50%" stopColor="#9c6fe5" />
          <stop offset="100%" stopColor="#d96570" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
        fill="url(#inlineBannerGradient)"
      />
      <path
        d="M18 14L18.75 16.25L21 17L18.75 17.75L18 20L17.25 17.75L15 17L17.25 16.25L18 14Z"
        fill="url(#inlineBannerGradient)"
        opacity="0.7"
      />
      <path
        d="M6 14L6.5 15.5L8 16L6.5 16.5L6 18L5.5 16.5L4 16L5.5 15.5L6 14Z"
        fill="url(#inlineBannerGradient)"
        opacity="0.5"
      />
    </svg>
  )
}

export default function InlineValueBanner({
  tier,
  extraGenerations,
}: InlineValueBannerProps) {
  const tierConfig = tierLimits[tier]
  const tierLabel = tier.charAt(0).toUpperCase() + tier.slice(1)

  return (
    <div className="mt-4 bg-white rounded-2xl border border-[#e8eaed] p-4 flex items-start gap-3 max-w-[700px]">
      <div className="flex-shrink-0 mt-0.5">
        <GeminiSparkle />
      </div>

      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-[#1f1f1f] mb-1">
          Keep creating.
        </div>
        <div className="text-sm text-[#5f6368] leading-relaxed">
          You've generated {extraGenerations} more images beyond what {tierConfig.compareLabel} get. That's Gemini AI {tierLabel}.
        </div>
      </div>
    </div>
  )
}
