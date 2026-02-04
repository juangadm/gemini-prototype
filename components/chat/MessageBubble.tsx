'use client'

import { Message, TierType } from '@/lib/mockData'
import GeminiLogo from '@/components/shared/GeminiLogo'
import InlineValueBanner from '@/components/work/InlineValueBanner'

interface MessageBubbleProps {
  message: Message
  bannerTier?: TierType
  bannerExtraGenerations?: number
}

export default function MessageBubble({ message, bannerTier = 'pro', bannerExtraGenerations = 1 }: MessageBubbleProps) {
  const isUser = message.role === 'user'

  return (
    <div className={`flex gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {/* Avatar for assistant */}
      {!isUser && (
        <div className="flex-shrink-0 mt-1">
          <GeminiLogo size="sm" />
        </div>
      )}

      {/* Message content */}
      <div className={`
        max-w-[700px]
        ${isUser ? 'bg-[#f0f4f9] rounded-3xl px-5 py-3' : ''}
      `}>
        <p className="text-[#1f1f1f] text-base leading-relaxed whitespace-pre-wrap">
          {message.content}
        </p>

        {/* Generated images */}
        {message.images && message.images.length > 0 && (
          <div className="mt-4 grid gap-3">
            {message.images.map((_, index) => (
              <div
                key={index}
                className="image-placeholder w-full max-w-[400px] aspect-square rounded-2xl overflow-hidden"
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <span className="material-symbols-outlined text-[#4285f4] text-5xl">
                    image
                  </span>
                  <span className="text-sm text-[#5f6368]">Generated image</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Assistant message actions */}
        {!isUser && (
          <div className="flex items-center gap-1 mt-4">
            <button className="p-2 rounded-full hover:bg-[#f0f4f9] transition-colors">
              <span className="material-symbols-outlined text-[#5f6368] text-xl">thumb_up</span>
            </button>
            <button className="p-2 rounded-full hover:bg-[#f0f4f9] transition-colors">
              <span className="material-symbols-outlined text-[#5f6368] text-xl">thumb_down</span>
            </button>
            <button className="p-2 rounded-full hover:bg-[#f0f4f9] transition-colors">
              <span className="material-symbols-outlined text-[#5f6368] text-xl">refresh</span>
            </button>
            <button className="p-2 rounded-full hover:bg-[#f0f4f9] transition-colors">
              <span className="material-symbols-outlined text-[#5f6368] text-xl">share</span>
            </button>
            <button className="p-2 rounded-full hover:bg-[#f0f4f9] transition-colors">
              <span className="material-symbols-outlined text-[#5f6368] text-xl">more_vert</span>
            </button>
          </div>
        )}

        {/* Inline value banner */}
        {message.showValueBanner && (
          <InlineValueBanner
            key={`${bannerTier}-${bannerExtraGenerations}`}
            tier={bannerTier}
            extraGenerations={bannerExtraGenerations}
          />
        )}
      </div>

      {/* Avatar for user */}
      {isUser && (
        <div className="flex-shrink-0 mt-1">
          <div className="w-8 h-8 rounded-full bg-[#8ab4f8] flex items-center justify-center text-white font-medium text-sm">
            J
          </div>
        </div>
      )}
    </div>
  )
}
