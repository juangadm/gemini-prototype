'use client'

import { useState } from 'react'
import { Message, quickActions, demoChats } from '@/lib/mockData'
import MessageBubble from './MessageBubble'
import InputArea from './InputArea'
import GeminiLogo from '@/components/shared/GeminiLogo'

interface ChatAreaProps {
  offlineMode?: boolean
  onImageGenerated?: () => void
  defaultInputValue?: string
  defaultSelectedTool?: string | null
}

const DEMO_PROMPT = 'Create a photorealistic image of a futuristic city skyline at sunset'
const DEMO_FOLLOWUP_PROMPT = 'Make it futuristic Paris'

export default function ChatArea({ offlineMode = false, onImageGenerated, defaultInputValue, defaultSelectedTool }: ChatAreaProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [showDemo, setShowDemo] = useState(false)
  const [selectedTool, setSelectedTool] = useState<string | null>(defaultSelectedTool ?? null)

  const handleSend = (content: string) => {
    // If sending the demo prompt, load demo conversation instead
    if (content === DEMO_PROMPT) {
      loadDemoChat()
      return
    }

    // Handle the Paris follow-up in demo mode
    if (content === DEMO_FOLLOWUP_PROMPT && showDemo) {
      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        content,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, userMessage])

      setTimeout(() => {
        const aiMessage: Message = {
          id: `ai-${Date.now()}`,
          role: 'assistant',
          content: 'Here\'s a photorealistic image of the Paris skyline at sunset:',
          images: ['/demo/futuristic-city.jpg'],
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, aiMessage])
        onImageGenerated?.()
      }, 1000)
      return
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simulate AI response
    setTimeout(() => {
      const hasImages = content.toLowerCase().includes('image')
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        content: hasImages
          ? 'Here\'s what I created for you:'
          : 'I\'d be happy to help you with that! Let me think about this...',
        images: hasImages ? ['/demo/generated.jpg'] : undefined,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])

      if (hasImages) {
        onImageGenerated?.()
      }
    }, 1000)
  }

  const handleQuickAction = (action: string) => {
    if (action === 'Create image') {
      // Load demo conversation directly for "Create image" action
      loadDemoChat()
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
    <div className="flex-1 flex flex-col min-h-0 bg-white">
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
            defaultValue={defaultInputValue || ''}
            selectedTool={selectedTool}
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
        // Chat mode - messages scroll, input fixed at bottom
        <>
          {/* Scrollable messages area with bottom padding for input */}
          <div className="flex-1 overflow-y-auto light-scrollbar min-h-0 pb-36">
            <div className="max-w-[800px] mx-auto px-4 py-8 space-y-8">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
            </div>
          </div>

          {/* Input area - fixed at bottom, uses flex-shrink-0 */}
          <div className="flex-shrink-0 bg-white border-t border-transparent">
            <InputArea
              key={showDemo ? 'demo' : 'chat'}
              onSend={handleSend}
              showSuggestions={false}
              onQuickAction={handleQuickAction}
              offlineMode={offlineMode}
              defaultValue={showDemo ? DEMO_FOLLOWUP_PROMPT : ''}
              selectedTool={showDemo ? 'create-images' : null}
            />
          </div>
        </>
      )}
    </div>
  )
}
