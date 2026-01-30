'use client'

import { useEffect, useRef } from 'react'
import { DailyUsageStats, UsageStat } from '@/lib/mockData'

interface WorkStatsPopupProps {
  isOpen: boolean
  onClose: () => void
  stats: DailyUsageStats
}

function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="h-1.5 w-full bg-[#e8eaed] rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-300 ease-out"
        style={{
          width: `${Math.min(percentage, 100)}%`,
          background: 'linear-gradient(90deg, #4285f4 0%, #9c6fe5 50%, #d96570 100%)',
        }}
      />
    </div>
  )
}

function StatRow({ stat }: { stat: UsageStat }) {
  const remaining = stat.limit - stat.used
  const percentage = (stat.used / stat.limit) * 100

  return (
    <div className="space-y-1.5">
      <div className="text-sm text-[#1f1f1f]">
        {stat.used} {stat.valueLabel}
      </div>
      <ProgressBar percentage={percentage} />
      <div className="text-xs text-[#5f6368]">
        {remaining} remaining
      </div>
    </div>
  )
}

export default function WorkStatsPopup({ isOpen, onClose, stats }: WorkStatsPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const tierLabel = stats.tier.charAt(0).toUpperCase() + stats.tier.slice(1)

  return (
    <div
      ref={popupRef}
      className="absolute top-full left-0 mt-2 z-50 bg-white rounded-2xl shadow-lg border border-[#e8eaed] p-5 min-w-[280px]"
      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
    >
      {/* Header */}
      <div className="mb-5">
        <span className="text-sm font-medium text-[#1f1f1f]">Today's Progress</span>
      </div>

      {/* Stats */}
      <div className="space-y-4">
        <StatRow stat={stats.prompts} />
        <StatRow stat={stats.images} />
        <StatRow stat={stats.deepResearch} />
        <StatRow stat={stats.thinkingPrompts} />
      </div>

      {/* Divider */}
      <div className="border-t border-[#e8eaed] my-4" />

      {/* Footer */}
      <div className="space-y-2">
        <div className="text-xs text-[#5f6368]">
          Resets in {stats.resetTime}
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="text-[#5f6368]">You're on {tierLabel}</span>
          <span className="text-[#5f6368]">·</span>
          <button className="text-[#1a73e8] hover:underline">
            View all limits
          </button>
        </div>
      </div>
    </div>
  )
}
