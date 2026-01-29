'use client'

interface GeminiLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
}

export default function GeminiLogo({ size = 'md', animated = false }: GeminiLogoProps) {
  const sizeMap = {
    sm: 24,
    md: 32,
    lg: 48,
    xl: 80,
  }

  const pixelSize = sizeMap[size]

  return (
    <svg
      width={pixelSize}
      height={pixelSize}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={animated ? 'gemini-sparkle' : ''}
    >
      <path
        d="M14 0C14 7.732 7.732 14 0 14C7.732 14 14 20.268 14 28C14 20.268 20.268 14 28 14C20.268 14 14 7.732 14 0Z"
        fill="url(#gemini-gradient)"
      />
      <defs>
        <linearGradient
          id="gemini-gradient"
          x1="0"
          y1="0"
          x2="28"
          y2="28"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4285F4" />
          <stop offset="0.5" stopColor="#9B72CB" />
          <stop offset="1" stopColor="#D96570" />
        </linearGradient>
      </defs>
    </svg>
  )
}
