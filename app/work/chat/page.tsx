'use client'

import { useState } from 'react'
import Sidebar from '@/components/chat/Sidebar'
import MainHeader from '@/components/chat/MainHeader'
import ChatArea from '@/components/chat/ChatArea'
import { TierType, tierLimits } from '@/lib/mockData'

export default function WorkChatPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [bannerTier, setBannerTier] = useState<TierType>('pro')
  const [imageCount, setImageCount] = useState(0)

  const handleTriggerToast = (tier: TierType) => {
    setBannerTier(tier)
  }

  const handleImageGenerated = () => {
    const newCount = imageCount + 1
    setImageCount(newCount)
  }

  // Extra generations shown in banner based on tier
  const tierExtraGenerations = {
    plus: 4,
    pro: 8,
    ultra: 12,
  }
  const extraGenerations = tierExtraGenerations[bannerTier]

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
          bannerTier={bannerTier}
          bannerExtraGenerations={extraGenerations}
        />
      </div>
    </div>
  )
}
