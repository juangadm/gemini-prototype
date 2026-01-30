'use client'

import { useState } from 'react'
import Sidebar from '@/components/chat/Sidebar'
import MainHeader from '@/components/chat/MainHeader'
import ChatArea from '@/components/chat/ChatArea'

export default function WorkChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="h-screen flex bg-white">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <MainHeader
          showProBadge={true}
          showWorkStats={true}
        />
        <ChatArea />
      </div>
    </div>
  )
}
