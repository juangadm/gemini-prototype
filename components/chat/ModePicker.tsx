'use client'

import { useState, useRef, useEffect } from 'react'
import { modes } from '@/lib/mockData'

interface ModePickerProps {
  selectedMode: string
  onModeChange: (mode: string) => void
}

export default function ModePicker({ selectedMode, onModeChange }: ModePickerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentMode = modes.find(m => m.id === selectedMode) || modes[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-[#e8eaed] transition-colors"
      >
        <span className="text-sm text-[#5f6368]">{currentMode.name}</span>
        <span className="material-symbols-outlined text-[#5f6368] text-lg">
          {isOpen ? 'expand_less' : 'expand_more'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-72 mode-picker-dropdown p-2 z-50">
          <div className="space-y-1">
            {modes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => {
                  onModeChange(mode.id)
                  setIsOpen(false)
                }}
                className={`
                  w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left
                  transition-colors
                  ${selectedMode === mode.id ? 'bg-[#e8f0fe]' : 'hover:bg-[#f0f4f9]'}
                `}
              >
                {/* Mode info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-[#1f1f1f]">{mode.name}</span>
                    {mode.badge && (
                      <span className="px-1.5 py-0.5 text-[10px] font-medium text-[#1a73e8] bg-[#e8f0fe] rounded">
                        {mode.badge}
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-[#5f6368]">{mode.description}</span>
                </div>

                {/* Checkmark for selected */}
                {selectedMode === mode.id && (
                  <span className="material-symbols-outlined text-[#1a73e8] text-xl">check</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
