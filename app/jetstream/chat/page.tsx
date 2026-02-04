'use client'

import { useState, useEffect } from 'react'
import Sidebar from '@/components/chat/Sidebar'
import MainHeader from '@/components/chat/MainHeader'
import ChatArea from '@/components/chat/ChatArea'
import OfflineDiscoveryCard from '@/components/jetstream/OfflineDiscoveryCard'

export default function JetstreamChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [discoveryCardOpen, setDiscoveryCardOpen] = useState(false)

  // Auto-show discovery card on first visit (simulating offline detection)
  useEffect(() => {
    const hasSeenCard = localStorage.getItem('jetstream-discovery-seen')
    if (!hasSeenCard) {
      setDiscoveryCardOpen(true)
      localStorage.setItem('jetstream-discovery-seen', 'true')
    }
  }, [])

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
          showOfflineBadge={true}
          showWorkStats={false}
          subscriptionsUrl="/jetstream/subscriptions"
          onDiscoveryCardOpen={() => setDiscoveryCardOpen(true)}
        />
        <ChatArea offlineMode={true} />
      </div>

      {/* Offline Discovery Card Modal */}
      <OfflineDiscoveryCard
        isOpen={discoveryCardOpen}
        onClose={() => setDiscoveryCardOpen(false)}
      />
    </div>
  )
}
