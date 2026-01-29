'use client'

import { useState } from 'react'
import ModePicker from './ModePicker'
import ToolsMenu from './ToolsMenu'
import AddMenu from './AddMenu'
import { quickActions, offlineQuickActions } from '@/lib/mockData'

interface InputAreaProps {
  onSend: (message: string) => void
  showSuggestions?: boolean
  onQuickAction?: (action: string) => void
  offlineMode?: boolean
}

export default function InputArea({ onSend, showSuggestions, onQuickAction, offlineMode = false }: InputAreaProps) {
  const [message, setMessage] = useState('')
  const [selectedMode, setSelectedMode] = useState('fast')

  const handleSubmit = () => {
    if (message.trim()) {
      onSend(message)
      setMessage('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="w-full max-w-[800px] mx-auto px-4 pb-4">
      {/* Input container */}
      <div className="bg-[#f0f4f9] rounded-[32px] border border-gray-200">
        {/* Text input */}
        <div className="px-6 pt-4 pb-2">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Gemini 3"
            rows={1}
            className="w-full bg-transparent text-[#1f1f1f] text-base placeholder-[#5f6368] resize-none outline-none min-h-[24px] max-h-[200px]"
            style={{ height: 'auto' }}
          />
        </div>

        {/* Bottom toolbar */}
        <div className="flex items-center justify-between px-3 pb-3">
          {/* Left tools - Add menu & Tools */}
          <div className="flex items-center gap-1">
            {/* Add menu */}
            <AddMenu offlineMode={offlineMode} />

            {/* Tools menu */}
            <ToolsMenu offlineMode={offlineMode} />
          </div>

          {/* Right tools - Mode picker, Mic, Send */}
          <div className="flex items-center gap-1">
            {/* Mode picker */}
            <ModePicker selectedMode={selectedMode} onModeChange={setSelectedMode} offlineMode={offlineMode} />

            {/* Microphone (when empty) / Send button (when has text) */}
            {message.trim() ? (
              <button
                onClick={handleSubmit}
                className="p-2 rounded-full bg-[#1a73e8] hover:bg-[#1557b0] transition-colors"
              >
                <span className="material-symbols-outlined text-xl text-white">
                  arrow_forward
                </span>
              </button>
            ) : (
              <div className="relative group/mic">
                <button
                  className={`p-2 rounded-full transition-colors ${
                    offlineMode
                      ? 'opacity-40 cursor-not-allowed'
                      : 'hover:bg-[#e8eaed] cursor-pointer'
                  }`}
                >
                  <span className="material-symbols-outlined text-[#5f6368] text-xl">mic</span>
                </button>

                {/* Offline tooltip */}
                {offlineMode && (
                  <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-[#3c4043] text-white text-xs rounded-lg whitespace-nowrap opacity-0 invisible group-hover/mic:opacity-100 group-hover/mic:visible transition-all duration-200 z-50">
                    Go online to access
                    <div className="absolute top-full right-4 border-4 border-transparent border-t-[#3c4043]"></div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick action suggestions */}
      {showSuggestions && (
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {(offlineMode ? offlineQuickActions : quickActions).map((action) => (
            <button
              key={action.id}
              onClick={() => onQuickAction?.(action.label)}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#f0f4f9] rounded-full hover:bg-[#e8eaed] transition-colors"
            >
              <span
                className="material-symbols-outlined text-lg"
                style={{ color: action.color }}
              >
                {action.icon}
              </span>
              <span className="text-sm text-[#1f1f1f]">{action.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Footer disclaimer */}
      <p className="text-center text-xs text-[#5f6368] mt-3">
        Gemini can make mistakes, so double-check it
      </p>
    </div>
  )
}
