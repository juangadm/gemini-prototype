'use client'

import { useState } from 'react'
import Link from 'next/link'
import WorkStatsPopup from '@/components/work/WorkStatsPopup'
import TierDemoDropdown from '@/components/work/TierDemoDropdown'
import { dailyUsageStats, TierType } from '@/lib/mockData'

interface MainHeaderProps {
  showProBadge?: boolean
  showOfflineBadge?: boolean
  showWorkStats?: boolean
  subscriptionsUrl?: string
  onDiscoveryCardOpen?: () => void
  onTriggerToast?: (tier: TierType) => void
}

export default function MainHeader({
  showProBadge = true,
  showOfflineBadge = false,
  showWorkStats = false,
  subscriptionsUrl = '/subscriptions',
  onDiscoveryCardOpen,
  onTriggerToast,
}: MainHeaderProps) {
  const [workStatsOpen, setWorkStatsOpen] = useState(false)

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white">
      {/* Left section */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-normal text-[#1f1f1f]">Gemini</span>
        </Link>

        {/* Work Stats Dot - 6px gradient dot with pulse animation */}
        {showWorkStats && (
          <div className="relative group">
            <button
              onClick={() => setWorkStatsOpen(!workStatsOpen)}
              className="ml-1 flex items-center justify-center w-[14px] h-[14px] cursor-pointer"
              aria-label="View today's progress"
            >
              <span
                className="w-[8px] h-[8px] rounded-full transition-transform duration-150 group-hover:scale-[1.3] animate-pulse-subtle"
                style={{
                  background: 'linear-gradient(135deg, #4285f4, #9c6fe5)',
                }}
              />
            </button>
            {/* Hover tooltip - only show when popup is closed */}
            {!workStatsOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 bg-[#202124] text-white text-xs rounded whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none">
                Today's progress
              </div>
            )}
            <WorkStatsPopup
              isOpen={workStatsOpen}
              onClose={() => setWorkStatsOpen(false)}
              stats={dailyUsageStats}
            />
          </div>
        )}

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
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        {/* Demo button to open discovery card */}
        {onDiscoveryCardOpen && (
          <button
            onClick={onDiscoveryCardOpen}
            className="flex items-center gap-1 px-3 py-1.5 bg-[#e6f4ea] rounded-lg hover:bg-[#ceead6] transition-colors"
            title="Open offline mode info"
          >
            <span className="material-symbols-outlined text-[#137333] text-lg">info</span>
            <span className="text-sm font-medium text-[#137333]">Offline</span>
          </button>
        )}

        {/* Tier Demo Dropdown for triggering value toast */}
        {showWorkStats && onTriggerToast && (
          <TierDemoDropdown onTriggerToast={onTriggerToast} />
        )}

        {showProBadge && (
          <Link
            href={subscriptionsUrl}
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
