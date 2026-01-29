'use client'

import { useState, useRef, useEffect } from 'react'
import { modes } from '@/lib/mockData'

interface ModePickerProps {
  selectedMode: string
  onModeChange: (mode: string) => void
  offlineMode?: boolean
}

// Modes that require internet connection
const offlineDisabledModes = ['thinking', 'pro']

export default function ModePicker({ selectedMode, onModeChange, offlineMode = false }: ModePickerProps) {
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

  const handleModeClick = (modeId: string, isDisabled: boolean) => {
    if (isDisabled) return
    onModeChange(modeId)
    setIsOpen(false)
  }

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
          {/* Model name label */}
          <div className="px-3 py-2">
            <span className="text-sm text-[#5f6368]">{offlineMode ? 'Gemini Nano' : 'Gemini 3'}</span>
          </div>

          <div className="space-y-1">
            {modes.map((mode) => {
              const isDisabled = offlineMode && offlineDisabledModes.includes(mode.id)
              return (
                <div key={mode.id} className="relative group/mode">
                  <button
                    onClick={() => handleModeClick(mode.id, isDisabled)}
                    className={`
                      w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left
                      transition-colors
                      ${isDisabled
                        ? 'opacity-40 cursor-not-allowed'
                        : selectedMode === mode.id
                          ? 'bg-[#e8f0fe]'
                          : 'hover:bg-[#f0f4f9] cursor-pointer'
                      }
                    `}
                  >
                    {/* Mode info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm font-medium ${isDisabled ? 'text-[#5f6368]' : 'text-[#1f1f1f]'}`}>
                          {mode.name}
                        </span>
                        {mode.badge && !isDisabled && (
                          <span className="px-1.5 py-0.5 text-[10px] font-medium text-[#1a73e8] bg-[#e8f0fe] rounded">
                            {mode.badge}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-[#5f6368]">{mode.description}</span>
                    </div>

                    {/* Checkmark for selected */}
                    {selectedMode === mode.id && !isDisabled && (
                      <span className="material-symbols-outlined text-[#1a73e8] text-xl">check</span>
                    )}
                  </button>

                  {/* Offline tooltip */}
                  {isDisabled && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 bg-[#3c4043] text-white text-xs rounded-lg whitespace-nowrap opacity-0 invisible group-hover/mode:opacity-100 group-hover/mode:visible transition-all duration-200 z-50">
                      Go online to access
                      <div className="absolute top-1/2 right-full -translate-y-1/2 border-4 border-transparent border-r-[#3c4043]"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
