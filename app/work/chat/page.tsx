'use client'

import { useState } from 'react'
import Sidebar from '@/components/chat/Sidebar'
import MainHeader from '@/components/chat/MainHeader'
import ChatArea from '@/components/chat/ChatArea'
import ValueToast from '@/components/work/ValueToast'
import { TierType, tierLimits } from '@/lib/mockData'

export default function WorkChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [toastVisible, setToastVisible] = useState(false)
  const [toastTier, setToastTier] = useState<TierType>('pro')
  const [imageCount, setImageCount] = useState(0)

  const handleTriggerToast = (tier: TierType) => {
    setToastTier(tier)
    setToastVisible(true)
  }

  const handleImageGenerated = () => {
    const newCount = imageCount + 1
    setImageCount(newCount)
    // Show toast if user exceeds free tier limit (3 images)
    if (newCount > tierLimits.free.images) {
      setToastVisible(true)
    }
  }

  // Calculate extra generations beyond free tier
  const extraGenerations = Math.max(0, imageCount - tierLimits.free.images)

  return (
    <div className="h-screen flex bg-white">
      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
      />

      {/* Main content area */}
      <div className="flex-1 flex flex-col min-h-0">
        <MainHeader
          showProBadge={true}
          showWorkStats={true}
          onTriggerToast={handleTriggerToast}
        />
        <ChatArea
          onImageGenerated={handleImageGenerated}
          defaultInputValue="Create a photorealistic image of a futuristic city skyline at sunset"
          defaultSelectedTool="create-images"
        />
      </div>

      {/* Value Toast */}
      <ValueToast
        isVisible={toastVisible}
        onDismiss={() => setToastVisible(false)}
        tier={toastTier}
        extraGenerations={extraGenerations || 1}
      />
    </div>
  )
}
