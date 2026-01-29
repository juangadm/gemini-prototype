'use client'

import Link from 'next/link'

interface DemoCardProps {
  number: string
  title: string
  subtitle?: string
  description: string
  status: 'ready' | 'in-progress'
  href?: string
}

export default function DemoCard({
  number,
  title,
  subtitle,
  description,
  status,
  href,
}: DemoCardProps) {
  const cardContent = (
    <>
      {/* Number */}
      <span className="text-sm font-medium text-[#5f6368] mb-4 block">
        {number}
      </span>

      {/* Title */}
      <h3 className="text-xl font-medium text-black mb-1">
        {title}
      </h3>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-sm text-[#5f6368] mb-3">
          {subtitle}
        </p>
      )}

      {/* Description */}
      <p className="text-sm text-[#5f6368] mb-6 flex-1">
        {description}
      </p>

      {/* Status/Link */}
      <div className="mt-auto">
        {status === 'ready' ? (
          <span className="inline-flex items-center text-[#1a73e8] text-sm font-medium group-hover:underline">
            View Demo
            <span className="material-symbols-outlined ml-1 text-lg">
              arrow_forward
            </span>
          </span>
        ) : (
          <span className="inline-flex items-center px-3 py-1 bg-[#f1f3f4] text-[#5f6368] text-xs font-medium rounded-full">
            In Progress
          </span>
        )}
      </div>
    </>
  )

  const cardClasses = `
    group flex flex-col p-6 bg-white border border-[#e8eaed] rounded-2xl
    min-h-[240px] transition-all duration-200
    ${status === 'ready' ? 'hover:border-[#1a73e8] hover:shadow-md cursor-pointer' : ''}
  `

  if (status === 'ready' && href) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    )
  }

  return (
    <div className={cardClasses}>
      {cardContent}
    </div>
  )
}
