'use client'

interface PlanCardProps {
  name: string
  description: string
  price: number
  originalPrice?: number | null
  promoText?: string | null
  cta: string
  ctaSecondary?: string
  features: string[]
  isPopular?: boolean
  previousTier?: string
}

export default function PlanCard({
  name,
  description,
  price,
  originalPrice,
  promoText,
  cta,
  ctaSecondary,
  features,
  isPopular = false,
  previousTier,
}: PlanCardProps) {
  const isFree = price === 0

  return (
    <div className={`
      plan-card bg-white border border-gray-200 p-6 flex flex-col h-full relative
      ${isPopular ? 'ring-2 ring-[#1a73e8]' : ''}
    `}>
      {/* Popular badge */}
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 bg-[#1a73e8] text-white text-xs font-medium rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name */}
      <div className="mb-2">
        <h3 className="text-lg font-medium text-black">{name}</h3>
        <p className="text-sm text-[#666] mt-1">{description}</p>
      </div>

      {/* Price */}
      <div className="mb-4">
        {originalPrice && (
          <span className="text-sm text-[#666] line-through mr-2">
            ${originalPrice}/mo
          </span>
        )}
        <span className="text-2xl font-medium text-black">
          {price === 0 ? '$0' : `$${price}`}
        </span>
        <span className="text-sm text-[#666]"> / month</span>
        {promoText && (
          <div className="mt-1">
            <span className="text-sm text-[#1a73e8] font-medium">{promoText}</span>
          </div>
        )}
      </div>

      {/* CTA buttons */}
      <div className="space-y-2 mb-6">
        {isFree ? (
          <button className="w-full py-3 px-4 bg-white text-[#1f1f1f] text-sm font-medium rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            {cta}
          </button>
        ) : (
          <button className="w-full py-3 px-4 bg-[#1a73e8] text-white text-sm font-medium rounded-full hover:bg-[#1557b0] transition-colors">
            {cta}
          </button>
        )}
        {ctaSecondary && (
          <button className="w-full py-3 px-4 bg-white text-[#1a73e8] text-sm font-medium rounded-full border border-[#1a73e8] hover:bg-[#e8f0fe] transition-colors">
            {ctaSecondary}
          </button>
        )}
      </div>

      {/* Tier badge */}
      {previousTier && (
        <div className="mb-4 py-2 px-3 bg-[#e8f0fe] rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined text-[#1a73e8] text-lg">check_circle</span>
          <span className="text-xs text-[#1f1f1f]">Everything in {previousTier} and:</span>
        </div>
      )}

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="material-symbols-outlined text-[#1a73e8] text-lg flex-shrink-0 mt-0.5">
              check_circle
            </span>
            <span className="text-sm text-[#444]">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
