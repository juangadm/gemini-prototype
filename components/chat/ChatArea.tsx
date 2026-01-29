'use client'

import { useState } from 'react'
import { Message, quickActions, demoChats } from '@/lib/mockData'
import MessageBubble from './MessageBubble'
import InputArea from './InputArea'
import GeminiLogo from '@/components/shared/GeminiLogo'

interface ChatAreaProps {
  offlineMode?: boolean
}

export default function ChatArea({ offlineMode = false }: ChatAreaProps) {
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
      {isEmpty ? (
        // Empty state - centered layout
        <div className="flex-1 flex flex-col items-center justify-center px-4">
          {/* Gemini logo */}
          <div className="mb-8">
            <GeminiLogo size="xl" animated />
          </div>

          {/* Greeting */}
          <h1 className="text-4xl font-normal text-[#1f1f1f] mb-8">
            Hi Juan, Where should we start?
          </h1>

          {/* Input area - centered */}
          <InputArea
            onSend={handleSend}
            showSuggestions={true}
            onQuickAction={handleQuickAction}
            offlineMode={offlineMode}
          />

          {/* Demo button */}
          <button
            onClick={loadDemoChat}
            className="mt-6 text-sm text-[#1a73e8] hover:underline"
          >
            Load demo conversation
          </button>
        </div>
      ) : (
        // Chat mode - messages with input at bottom
        <>
          <div className="flex-1 overflow-y-auto light-scrollbar">
            <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </div>
          </div>

          {/* Input area - fixed at bottom */}
          <InputArea
            onSend={handleSend}
            showSuggestions={false}
            onQuickAction={handleQuickAction}
            offlineMode={offlineMode}
          />
        </>
      )}
    </div>
  )
}
