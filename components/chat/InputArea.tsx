'use client'

import { useState } from 'react'
import ModePicker from './ModePicker'
import ToolsMenu from './ToolsMenu'

interface InputAreaProps {
  onSend: (message: string) => void
}

export default function InputArea({ onSend }: InputAreaProps) {
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
      <div className="bg-[#f0f4f9] rounded-[32px] overflow-hidden border border-gray-200">
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
          {/* Left tools */}
          <div className="flex items-center gap-1">
            {/* Add file button */}
            <button className="p-2 rounded-full hover:bg-[#e8eaed] transition-colors">
              <span className="material-symbols-outlined text-[#5f6368] text-xl">add</span>
            </button>

            {/* Tools menu */}
            <ToolsMenu />

            {/* Mode picker */}
            <ModePicker selectedMode={selectedMode} onModeChange={setSelectedMode} />
          </div>

          {/* Right tools */}
          <div className="flex items-center gap-1">
            {/* Microphone */}
            <button className="p-2 rounded-full hover:bg-[#e8eaed] transition-colors">
              <span className="material-symbols-outlined text-[#5f6368] text-xl">mic</span>
            </button>

            {/* Send button */}
            <button
              onClick={handleSubmit}
              disabled={!message.trim()}
              className={`
                p-2 rounded-full transition-colors
                ${message.trim()
                  ? 'bg-[#1a73e8] hover:bg-[#1557b0]'
                  : 'bg-[#dadce0] cursor-not-allowed'}
              `}
            >
              <span className={`
                material-symbols-outlined text-xl
                ${message.trim() ? 'text-white' : 'text-[#9aa0a6]'}
              `}>
                arrow_upward
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer disclaimer */}
      <p className="text-center text-xs text-[#5f6368] mt-3">
        Gemini can make mistakes, so double-check it
      </p>
    </div>
  )
}
