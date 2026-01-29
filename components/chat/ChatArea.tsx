'use client'

import { useState } from 'react'
import { Message, quickActions, demoChats } from '@/lib/mockData'
import MessageBubble from './MessageBubble'
import InputArea from './InputArea'
import GeminiLogo from '@/components/shared/GeminiLogo'

export default function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([])
  const [showDemo, setShowDemo] = useState(false)

  const handleSend = (content: string) => {
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: content.toLowerCase().includes('image')
          ? 'Here\'s what I created for you:'
          : 'I\'d be happy to help you with that! Let me think about this...',
        images: content.toLowerCase().includes('image') ? ['/demo/generated.jpg'] : undefined,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1000)
  }

  const handleQuickAction = (action: string) => {
    if (action === 'Create image') {
      handleSend('Create a photorealistic image of a futuristic city skyline at sunset')
    } else if (action === 'Create video') {
      handleSend('Create a short video of a peaceful nature scene')
    } else if (action === 'Write anything') {
      handleSend('Help me write a compelling opening paragraph for a blog post about AI')
    } else if (action === 'Deep research') {
      handleSend('Research the latest developments in quantum computing')
    } else if (action === 'Guided learning') {
      handleSend('Teach me about machine learning fundamentals')
    }
  }

  const loadDemoChat = () => {
    if (demoChats[0]) {
      setMessages(demoChats[0].messages)
      setShowDemo(true)
    }
  }

  const isEmpty = messages.length === 0

  return (
    <div className="flex-1 flex flex-col h-full bg-white">
      {/* Messages area */}
      <div className="flex-1 overflow-y-auto light-scrollbar">
        {isEmpty ? (
          // Empty state
          <div className="h-full flex flex-col items-center justify-center px-4">
            {/* Gemini logo */}
            <div className="mb-8">
              <GeminiLogo size="xl" animated />
            </div>

            {/* Greeting */}
            <h1 className="text-4xl font-normal text-[#1f1f1f] mb-2">
              Hi Juan, Where should we start?
            </h1>

            {/* Quick actions */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-[600px]">
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action.label)}
                  className="flex items-center gap-2 px-4 py-3 bg-[#f0f4f9] rounded-full hover:bg-[#e8eaed] transition-colors gemini-chip"
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ color: action.color }}
                  >
                    {action.icon}
                  </span>
                  <span className="text-sm text-[#1f1f1f]">{action.label}</span>
                </button>
              ))}
            </div>

            {/* Demo button */}
            <button
              onClick={loadDemoChat}
              className="mt-8 text-sm text-[#1a73e8] hover:underline"
            >
              Load demo conversation
            </button>
          </div>
        ) : (
          // Messages list
          <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </div>
        )}
      </div>

      {/* Input area - fixed at bottom */}
      <InputArea onSend={handleSend} />
    </div>
  )
}
