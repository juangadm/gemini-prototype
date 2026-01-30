'use client'

import Link from 'next/link'

interface DemoCardProps {
  number: string
  title: string
  subtitle?: string
  description: string
  status: 'ready' | 'in-progress'
  href?: string
  docsUrl?: string
  docsLabel?: string
}

export default function DemoCard({
  number,
  title,
  subtitle,
  description,
  status,
  href,
  docsUrl,
  docsLabel,
}: DemoCardProps) {
  const cardClasses = `
    group flex flex-col p-6 bg-white border border-[#e8eaed] rounded-2xl
    min-h-[240px] transition-all duration-200
    ${status === 'ready' && !docsUrl ? 'hover:border-[#1a73e8] hover:shadow-md cursor-pointer' : ''}
    ${status === 'ready' && docsUrl ? 'hover:border-[#1a73e8] hover:shadow-md' : ''}
  `

  const cardBody = (
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
    </>
  )

  // If there's a docsUrl, render card as div with separate links
  if (docsUrl) {
    return (
      <div className={cardClasses}>
        {cardBody}

        {/* Status/Link row */}
        <div className="mt-auto flex items-center justify-between">
          {status === 'ready' && href ? (
            <Link
              href={href}
              className="group/link inline-flex items-center text-[#1a73e8] text-sm font-medium"
            >
              View Demo
              <span className="inline-block ml-1 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-200">
                →
              </span>
            </Link>
          ) : (
            <span className="inline-flex items-center px-3 py-1 bg-[#f1f3f4] text-[#5f6368] text-xs font-medium rounded-full">
              In Progress
            </span>
          )}

          {/* Google Docs chip */}
          <a
            href={docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#e8f0fe] hover:bg-[#d2e3fc] text-[#1a73e8] text-xs font-medium rounded-full transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4285F4">
              <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
            </svg>
            {docsLabel || 'View Doc'}
          </a>
        </div>
      </div>
    )
  }

  // No docsUrl - wrap entire card in Link if ready
  const cardContent = (
    <>
      {cardBody}

      {/* Status/Link row */}
      <div className="mt-auto">
        {status === 'ready' ? (
          <span className="inline-flex items-center text-[#1a73e8] text-sm font-medium">
            View Demo
            <span className="inline-block ml-1 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
              →
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
