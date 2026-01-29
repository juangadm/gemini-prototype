'use client'

import Link from 'next/link'
import GeminiLogo from './GeminiLogo'

interface HeaderProps {
  showProBadge?: boolean
  showOfflineBadge?: boolean
  conversationTitle?: string
  onMenuClick?: () => void
}

export default function Header({ showProBadge = true, showOfflineBadge = false, conversationTitle, onMenuClick }: HeaderProps) {
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

        {showOfflineBadge && (
          <div className="relative group ml-3">
            <div className="flex items-center gap-1.5 cursor-default">
              <span className="material-symbols-outlined text-[#5f6368] text-lg">cloud_off</span>
              <span className="text-sm text-[#5f6368]">Working offline</span>
            </div>

            {/* Hover tooltip */}
            <div className="absolute top-full left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {/* Green header */}
                <div className="bg-[#e6f4ea] px-4 py-3">
                  <span className="text-sm font-medium text-[#137333]">Gemini Nano active</span>
                </div>
                {/* Body */}
                <div className="px-4 py-3">
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    Looks like you're offline. Gemini Nano is running locally on your device — available to Google AI subscribers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

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
