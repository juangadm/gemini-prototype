'use client'

interface FeatureRowProps {
  icon: string
  title: string
  description: string
  color?: string
}

export default function FeatureRow({ icon, title, description, color = '#4285f4' }: FeatureRowProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
        style={{ backgroundColor: `${color}15` }}
      >
        <span className="material-symbols-outlined" style={{ color }}>
          {icon}
        </span>
      </div>
      <div>
        <h4 className="text-sm font-medium text-black mb-1">{title}</h4>
        <p className="text-sm text-[#666]">{description}</p>
      </div>
    </div>
  )
}
