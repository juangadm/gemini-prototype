'use client'

import { useState, useRef, useEffect } from 'react'
import { addMenuItems } from '@/lib/mockData'

interface AddMenuProps {
  onItemSelect?: (itemId: string) => void
  offlineMode?: boolean
}

// Items that require internet connection
const offlineDisabledItems = ['add-from-drive', 'notebooklm']

export default function AddMenu({ onItemSelect, offlineMode = false }: AddMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleItemClick = (itemId: string, isDisabled: boolean) => {
    if (isDisabled) return
    onItemSelect?.(itemId)
    setIsOpen(false)
  }

  // Sort items: available first, disabled last (only in offline mode)
  const sortedItems = offlineMode
    ? [...addMenuItems].sort((a, b) => {
        const aDisabled = offlineDisabledItems.includes(a.id)
        const bDisabled = offlineDisabledItems.includes(b.id)
        if (aDisabled && !bDisabled) return 1
        if (!aDisabled && bDisabled) return -1
        return 0
      })
    : addMenuItems

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-[#e8eaed] transition-colors"
      >
        <span className="material-symbols-outlined text-[#5f6368] text-xl">add</span>
      </button>

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-56 tools-menu p-2 z-50">
          <div className="space-y-0.5">
            {sortedItems.map((item) => {
              const isDisabled = offlineMode && offlineDisabledItems.includes(item.id)
              return (
                <div key={item.id} className="relative group/item">
                  <button
                    onClick={() => handleItemClick(item.id, isDisabled)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors text-left ${
                      isDisabled
                        ? 'opacity-40 cursor-not-allowed'
                        : 'hover:bg-[#f0f4f9] cursor-pointer'
                    }`}
                  >
                    <span className={`material-symbols-outlined text-xl w-6 text-center ${
                      isDisabled ? 'text-[#5f6368]' : 'text-[#5f6368]'
                    }`}>
                      {item.icon}
                    </span>
                    <span className={`text-sm ${isDisabled ? 'text-[#5f6368]' : 'text-[#1f1f1f]'}`}>
                      {item.name}
                    </span>
                  </button>

                  {/* Offline tooltip */}
                  {isDisabled && (
                    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-3 py-1.5 bg-[#3c4043] text-white text-xs rounded-lg whitespace-nowrap opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
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
