'use client'

import { useState } from 'react'
import Link from 'next/link'
import { gems, recentChats, myStuffItems } from '@/lib/mockData'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [gemsExpanded, setGemsExpanded] = useState(true)
  const [chatsExpanded, setChatsExpanded] = useState(true)

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-[280px] bg-[#f8f9fa] z-50
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:relative lg:z-auto
          flex flex-col border-r border-gray-200
          light-scrollbar overflow-y-auto
        `}
      >
        {/* Top section */}
        <div className="p-3 space-y-1">
          {/* Search */}
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-[#e8eaed] transition-colors text-left">
            <span className="material-symbols-outlined text-[#5f6368]">search</span>
            <span className="text-[#5f6368] text-sm">Search</span>
          </button>

          {/* New chat */}
          <div className="flex items-center gap-2">
            <button className="flex-1 flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-[#e8eaed] transition-colors text-left">
              <span className="material-symbols-outlined text-[#5f6368]">add</span>
              <span className="text-[#5f6368] text-sm">New chat</span>
            </button>
            <button
              className="p-2 rounded-full hover:bg-[#e8eaed] transition-colors"
              title="Temporary chat"
            >
              <span className="material-symbols-outlined text-[#5f6368] text-xl">timer</span>
            </button>
          </div>
        </div>

        {/* My Stuff section */}
        <div className="px-3 py-2">
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-xs font-medium text-[#5f6368] uppercase tracking-wider">
              My Stuff
            </span>
            <button className="p-1 rounded hover:bg-[#e8eaed]">
              <span className="material-symbols-outlined text-[#5f6368] text-lg">more_horiz</span>
            </button>
          </div>
          <div className="flex gap-2 px-3 overflow-x-auto pb-2">
            {myStuffItems.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#e8f0fe] to-[#f3e8fd] flex-shrink-0 flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[#4285f4] text-xl">image</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gems section */}
        <div className="px-3 py-2">
          <button
            onClick={() => setGemsExpanded(!gemsExpanded)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#e8eaed] transition-colors"
          >
            <span className="text-xs font-medium text-[#5f6368] uppercase tracking-wider">
              Gems
            </span>
            <span className="material-symbols-outlined text-[#5f6368] text-lg">
              {gemsExpanded ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          {gemsExpanded && (
            <div className="mt-1 space-y-0.5">
              {gems.map((gem) => (
                <button
                  key={gem.id}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e8eaed] transition-colors text-left"
                >
                  <span
                    className="material-symbols-outlined text-xl"
                    style={{ color: gem.color }}
                  >
                    {gem.icon}
                  </span>
                  <span className="text-sm text-[#1f1f1f]">{gem.name}</span>
                </button>
              ))}
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e8eaed] transition-colors text-left">
                <span className="material-symbols-outlined text-xl text-[#5f6368]">add</span>
                <span className="text-sm text-[#5f6368]">New Gem</span>
              </button>
            </div>
          )}
        </div>

        {/* Chats section */}
        <div className="px-3 py-2 flex-1">
          <button
            onClick={() => setChatsExpanded(!chatsExpanded)}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#e8eaed] transition-colors"
          >
            <span className="text-xs font-medium text-[#5f6368] uppercase tracking-wider">
              Chats
            </span>
            <span className="material-symbols-outlined text-[#5f6368] text-lg">
              {chatsExpanded ? 'expand_less' : 'expand_more'}
            </span>
          </button>
          {chatsExpanded && (
            <div className="mt-1 space-y-0.5">
              {recentChats.map((chat) => (
                <button
                  key={chat.id}
                  className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#e8eaed] transition-colors text-left group"
                >
                  <span className="text-sm text-[#1f1f1f] truncate flex-1">{chat.title}</span>
                  <span className="material-symbols-outlined text-[#5f6368] text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    more_vert
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom section */}
        <div className="p-3 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-full hover:bg-[#e8eaed] transition-colors text-left">
            <span className="material-symbols-outlined text-[#5f6368]">settings</span>
            <span className="text-[#5f6368] text-sm">Settings & help</span>
          </button>
        </div>
      </aside>
    </>
  )
}
