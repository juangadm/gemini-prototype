'use client'

import Link from 'next/link'
import GeminiLogo from './GeminiLogo'

interface HeaderProps {
  showProBadge?: boolean
  conversationTitle?: string
  onMenuClick?: () => void
}

export default function Header({ showProBadge = true, conversationTitle, onMenuClick }: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
      {/* Left section */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-[#5f6368]">menu</span>
        </button>

        <Link href="/" className="flex items-center gap-2">
          <GeminiLogo size="sm" />
          <span className="text-xl font-normal text-[#1f1f1f]">Gemini</span>
        </Link>

        {conversationTitle && (
          <div className="flex items-center gap-1 ml-2">
            <span className="text-sm text-[#5f6368]">/</span>
            <button className="flex items-center gap-1 px-2 py-1 rounded-lg hover:bg-gray-100 transition-colors">
              <span className="text-sm text-[#5f6368] max-w-[200px] truncate">
                {conversationTitle}
              </span>
              <span className="material-symbols-outlined text-[#5f6368] text-base">
                expand_more
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        {showProBadge && (
          <Link
            href="/subscriptions"
            className="flex items-center gap-1 px-3 py-1.5 bg-[#f0f4f9] rounded-lg hover:bg-[#e8eaed] transition-colors"
          >
            <span className="text-sm font-medium text-[#1f1f1f]">PRO</span>
          </Link>
        )}

        <button className="w-8 h-8 rounded-full bg-[#8ab4f8] flex items-center justify-center text-white font-medium text-sm">
          J
        </button>
      </div>
    </header>
  )
}
