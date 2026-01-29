'use client'

import { useState, useRef, useEffect } from 'react'
import { tools } from '@/lib/mockData'

interface ToolsMenuProps {
  onToolSelect?: (toolId: string) => void
  offlineMode?: boolean
}

export default function ToolsMenu({ onToolSelect, offlineMode = false }: ToolsMenuProps) {
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

  const handleToolClick = (toolId: string) => {
    onToolSelect?.(toolId)
    setIsOpen(false)
  }

  return (
    <div className="relative group" ref={menuRef}>
      <button
        onClick={() => !offlineMode && setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-colors ${
          offlineMode
            ? 'opacity-40 cursor-not-allowed'
            : 'hover:bg-[#e8eaed] cursor-pointer'
        }`}
      >
        <span className="material-symbols-outlined text-[#5f6368] text-xl">page_info</span>
        <span className="text-sm text-[#5f6368]">Tools</span>
      </button>

      {/* Offline tooltip */}
      {offlineMode && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-[#3c4043] text-white text-xs rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
          Go online to access
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#3c4043]"></div>
        </div>
      )}

      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-64 tools-menu p-2 z-50">
          <div className="space-y-0.5">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleToolClick(tool.id)}
                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-[#f0f4f9] transition-colors text-left"
              >
                {/* Icon or emoji */}
                {tool.emoji ? (
                  <span className="text-xl w-6 text-center">{tool.emoji}</span>
                ) : (
                  <span className="material-symbols-outlined text-[#5f6368] text-xl w-6 text-center">
                    {tool.icon}
                  </span>
                )}

                {/* Tool name and badge */}
                <div className="flex-1 flex items-center gap-2">
                  <span className="text-sm text-[#1f1f1f]">{tool.name}</span>
                  {tool.badge && (
                    <span className={`
                      px-1.5 py-0.5 text-[10px] font-medium rounded
                      ${tool.badge === 'Labs'
                        ? 'text-[#ea8600] bg-[#fef7e0]'
                        : 'text-[#5f6368] bg-[#f0f4f9]'}
                    `}>
                      {tool.badge}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
