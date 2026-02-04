'use client'

import { useEffect, useState } from 'react'

interface OfflineDiscoveryCardProps {
  isOpen: boolean
  onClose: () => void
  onLearnMore?: () => void
}

export default function OfflineDiscoveryCard({ isOpen, onClose, onLearnMore }: OfflineDiscoveryCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsVisible(false)
    setTimeout(onClose, 150)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
      onClick={handleClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative flex flex-col
          transition-all duration-150
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
        style={{
          maxWidth: '512px',
          minWidth: '280px',
          width: '100%',
          maxHeight: '740px',
          backgroundColor: 'rgb(240, 244, 249)',
          color: 'rgb(31, 31, 31)',
          borderRadius: '28px',
          overflow: 'hidden',
          boxShadow: '0 24px 48px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Content area */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            padding: '20px 20px 0 20px',
            boxSizing: 'border-box',
          }}
        >
          {/* Headline */}
          <div
            style={{
              fontFamily: '"Google Sans Flex", "Google Sans", "Helvetica Neue", sans-serif',
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: '28px',
              width: '100%',
            }}
          >
            Gemini works offline
          </div>

          {/* Illustration area */}
          <div
            style={{
              width: '100%',
              borderRadius: '28px',
              overflow: 'hidden',
              backgroundColor: 'rgb(230, 244, 234)',
              aspectRatio: '16 / 9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-4">
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '48px', color: '#137333' }}
                >
                  flight
                </span>
                <span
                  className="material-symbols-outlined"
                  style={{ fontSize: '48px', color: '#137333' }}
                >
                  cloud_off
                </span>
              </div>
              <span
                style={{
                  fontFamily: '"Google Sans Flex", "Google Sans", "Helvetica Neue", sans-serif',
                  fontSize: '14px',
                  color: '#137333',
                }}
              >
                Powered by Gemini Nano
              </span>
            </div>
          </div>

          {/* Body text */}
          <div
            style={{
              fontFamily: '"Google Sans Flex", "Google Sans", "Helvetica Neue", sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '20px',
              width: '100%',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <p>
                You&apos;re offline, but Gemini has you covered. Get quick answers,
                summarize content, and draft messages — no connection needed.
              </p>
              <p style={{ color: 'rgb(95, 99, 104)' }}>
                Available with Google AI Plus and above.
              </p>
            </div>
          </div>
        </div>

        {/* Button bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '24px',
            backgroundColor: 'rgb(240, 244, 249)',
            gap: '8px',
          }}
        >
          {onLearnMore && (
            <button
              onClick={onLearnMore}
              style={{
                height: '40px',
                padding: '10px 12px',
                fontFamily: '"Google Sans Flex", "Google Sans Text", "Google Sans", sans-serif',
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgb(11, 87, 208)',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '100px',
                cursor: 'pointer',
              }}
              className="hover:bg-blue-50 transition-colors"
            >
              Learn more
            </button>
          )}
          <button
            onClick={handleClose}
            style={{
              height: '40px',
              padding: '10px 24px',
              fontFamily: '"Google Sans Flex", "Google Sans Text", "Google Sans", sans-serif',
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgb(255, 255, 255)',
              backgroundColor: 'rgb(11, 87, 208)',
              border: 'none',
              borderRadius: '100px',
              cursor: 'pointer',
            }}
            className="hover:bg-[#1557b0] transition-colors"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  )
}
