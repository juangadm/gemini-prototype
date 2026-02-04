'use client'

import { useState, useRef, useEffect } from 'react'
import { TierType } from '@/lib/mockData'

interface TierDemoDropdownProps {
  onTriggerToast: (tier: TierType) => void
}

const tierOptions: { value: TierType; label: string }[] = [
  { value: 'plus', label: 'Plus' },
  { value: 'pro', label: 'Pro' },
  { value: 'ultra', label: 'Ultra' },
]

export default function TierDemoDropdown({ onTriggerToast }: TierDemoDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleTierSelect = (tier: TierType) => {
    onTriggerToast(tier)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1.5 bg-[#f0f4f9] rounded-lg hover:bg-[#e8eaed] transition-colors"
      >
        <span className="text-sm font-medium text-[#1f1f1f]">Trigger Toast</span>
        <span className="material-symbols-outlined text-[#5f6368] text-lg">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {isOpen && (
        <div
          className="absolute top-full right-0 mt-1 z-50 bg-white rounded-xl shadow-lg border border-[#e8eaed] py-1 min-w-[120px]"
          style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
        >
          {tierOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleTierSelect(option.value)}
              className="w-full px-4 py-2 text-left text-sm text-[#1f1f1f] hover:bg-[#f1f3f4] transition-colors"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
