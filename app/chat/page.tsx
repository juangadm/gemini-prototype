'use client'

import { useState } from 'react'
import Header from '@/components/shared/Header'
import Sidebar from '@/components/chat/Sidebar'
import ChatArea from '@/components/chat/ChatArea'

export default function ChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <Header
        showProBadge={true}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Chat area */}
        <ChatArea />
      </div>
    </div>
  )
}
