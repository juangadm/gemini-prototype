export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  images?: string[]
  timestamp: Date
  showValueBanner?: boolean
}

export interface Chat {
  id: string
  title: string
  messages: Message[]
  timestamp: Date
}

export interface MyStuffItem {
  id: string
  title: string
  thumbnail: string
  type: 'image' | 'document'
}

export interface Gem {
  id: string
  name: string
  icon: string
  color: string
}

export const demoChats: Chat[] = [
  {
    id: '1',
    title: 'Futuristic city image',
    messages: [
      {
        id: '1-1',
        role: 'user',
        content: 'Create a photorealistic image of a futuristic city skyline at sunset',
        timestamp: new Date('2024-01-15T10:30:00'),
      },
      {
        id: '1-2',
        role: 'assistant',
        content: 'Here\'s a photorealistic image of a futuristic city skyline at sunset:',
        images: ['/demo/futuristic-city.jpg'],
        timestamp: new Date('2024-01-15T10:30:30'),
      },
    ],
    timestamp: new Date('2024-01-15T10:30:00'),
  },
  {
    id: '2',
    title: 'Magical forest with glowing mushrooms',
    messages: [
      {
        id: '2-1',
        role: 'user',
        content: 'Generate an image of a magical forest with glowing mushrooms',
        timestamp: new Date('2024-01-14T15:20:00'),
      },
      {
        id: '2-2',
        role: 'assistant',
        content: 'Here\'s a magical forest scene with bioluminescent mushrooms:',
        images: ['/demo/magical-forest.jpg'],
        timestamp: new Date('2024-01-14T15:20:45'),
      },
    ],
    timestamp: new Date('2024-01-14T15:20:00'),
  },
]

export const myStuffItems: MyStuffItem[] = [
  { id: '1', title: 'Futuristic city', thumbnail: '/demo/thumb-city.jpg', type: 'image' },
  { id: '2', title: 'Magical forest', thumbnail: '/demo/thumb-forest.jpg', type: 'image' },
  { id: '3', title: 'Space station', thumbnail: '/demo/thumb-space.jpg', type: 'image' },
  { id: '4', title: 'Mountain landscape', thumbnail: '/demo/thumb-mountain.jpg', type: 'image' },
]

export const gems: Gem[] = [
  { id: '1', name: 'Learning coach', icon: 'school', color: '#4285f4' },
  { id: '2', name: 'Brainstormer', icon: 'lightbulb', color: '#fbbc04' },
  { id: '3', name: 'Career guide', icon: 'work', color: '#34a853' },
  { id: '4', name: 'Writing editor', icon: 'edit_note', color: '#ea4335' },
]

export const recentChats = [
  { id: '1', title: 'Futuristic city image', time: 'Yesterday' },
  { id: '2', title: 'Magical forest with glowing mushrooms', time: 'Yesterday' },
  { id: '3', title: 'Code review for React app', time: '2 days ago' },
  { id: '4', title: 'Travel itinerary for Japan', time: '3 days ago' },
  { id: '5', title: 'Resume feedback', time: 'Last week' },
]

export const quickActions = [
  { id: '1', label: 'Create image', icon: 'image', color: '#9b72cb' },
  { id: '2', label: 'Create video', icon: 'videocam', color: '#4285f4' },
  { id: '3', label: 'Write anything', icon: 'edit', color: '#34a853' },
  { id: '4', label: 'Deep research', icon: 'language', color: '#ea4335' },
  { id: '5', label: 'Guided learning', icon: 'school', color: '#fbbc04' },
]

export const offlineQuickActions = [
  { id: '1', label: 'Summarize content', icon: 'summarize', color: '#9b72cb' },
  { id: '2', label: 'Describe image', icon: 'image_search', color: '#4285f4' },
  { id: '3', label: 'Write anything', icon: 'edit', color: '#34a853' },
  { id: '4', label: 'Proofread document', icon: 'spellcheck', color: '#ea4335' },
]

export const tools = [
  { id: 'deep-research', name: 'Deep Research', icon: 'travel_explore' },
  { id: 'create-videos', name: 'Create videos', icon: 'movie', badge: 'Veo 3.1' },
  { id: 'create-images', name: 'Create images', emoji: '🍌' },
  { id: 'canvas', name: 'Canvas', icon: 'note_stack_add' },
  { id: 'guided-learning', name: 'Guided Learning', icon: 'auto_stories' },
  { id: 'visual-layout', name: 'Visual layout', icon: 'team_dashboard', badge: 'Labs' },
]

export const addMenuItems = [
  { id: 'upload-files', name: 'Upload files', icon: 'upload_file' },
  { id: 'add-from-drive', name: 'Add from Drive', icon: 'add_to_drive' },
  { id: 'photos', name: 'Photos', icon: 'photo_library' },
  { id: 'notebooklm', name: 'NotebookLM', icon: 'auto_stories' },
]

export const modes = [
  { id: 'fast', name: 'Fast', description: 'Answers quickly', badge: 'New' },
  { id: 'thinking', name: 'Thinking', description: 'Solves complex problems' },
  { id: 'pro', name: 'Pro', description: 'Thinks longer for advanced math & code' },
]

export interface PricingFeature {
  title: string
  description: string
  hasGoogleIcon?: boolean
}

export interface GeminiAppSection {
  title: string
  subtitle?: string
  description?: string
  bullets?: string[]
}

export interface PricingPlan {
  id: string
  name: string
  description: string
  price: number
  priceSubtext: string
  promoText: string | null
  cta: string
  ctaSecondary?: string | null
  previousTier: string | null
  geminiAppSection: GeminiAppSection
  features: PricingFeature[]
  footerText: string | null
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'Get everyday help from Google AI to tackle tasks at work, school or home.',
    price: 0,
    priceSubtext: '/ month with a Google Account',
    promoText: null,
    cta: 'Get started',
    ctaSecondary: null,
    previousTier: null,
    geminiAppSection: {
      title: 'Gemini app',
      subtitle: 'Your personal, proactive and powerful AI Assistant',
      bullets: [
        'Access to 3 Flash',
        'Varying access to 3 Pro',
        'Image generation and editing',
        'Deep Research',
        'Gemini Live',
        'Canvas',
        'Gems',
      ],
    },
    features: [
      { title: '100 monthly AI credits', description: 'Credits used for video generation across Flow and Whisk' },
      { title: 'Flow', description: 'Access to our AI filmmaking tool to create cinematic scenes and stories, including limited access to Veo 3.1' },
      { title: 'Whisk', description: 'Generate and animate images with Imagen 4 and Veo 3' },
      { title: 'NotebookLM', description: 'Research and writing assistant' },
      { title: 'Storage', description: '15 GB of total storage for Photos, Drive, and Gmail' },
    ],
    footerText: null,
  },
  {
    id: 'ai-plus',
    name: 'Google AI Plus',
    description: 'Get more access to new and powerful features to boost your productivity and creativity.',
    price: 7.99,
    priceSubtext: '/ month',
    promoText: '$3.99 / month for 2 months',
    cta: 'Get started',
    ctaSecondary: null,
    previousTier: 'Free',
    geminiAppSection: {
      title: 'Gemini app',
      description: 'Get enhanced access to our most intelligent model 3 Pro, Deep Research, image generation with Nano Banana Pro, as well as video creation features with limited access to Veo 3.1 Fast',
    },
    features: [
      { title: '200 monthly AI credits', description: 'Credits used for video generation across Flow and Whisk' },
      { title: 'Flow', description: 'More access in our AI filmmaking tool to create cinematic scenes and stories, including limited access to Veo 3.1' },
      { title: 'Whisk', description: 'More access to image-to-video creation with Veo 3' },
      { title: 'Google Search', description: 'More access to Gemini 3 Pro to unlock interactive simulations and tools to answer your most complex questions, and the latest experiments in Search Labs.', hasGoogleIcon: true },
      { title: 'NotebookLM', description: 'Research and writing assistant with more Audio Overviews, notebooks, and more' },
      { title: 'Gemini in Gmail, Vids, and more', description: 'Access Gemini directly in Google apps' },
      { title: 'Gemini in Chrome (early access)', description: 'Your personal assistant to browse the web' },
      { title: 'Storage', description: '200 GB of total storage for Photos, Drive, and Gmail' },
    ],
    footerText: 'Google AI Plus is available in more than 160 countries and territories',
  },
  {
    id: 'ai-pro',
    name: 'Google AI Pro',
    description: 'Get higher access to new and powerful features to boost your productivity and creativity.',
    price: 19.99,
    priceSubtext: '/ month',
    promoText: '$0 for one month',
    cta: 'Get started',
    ctaSecondary: 'Free for students',
    previousTier: 'Free',
    geminiAppSection: {
      title: 'Gemini app',
      description: 'Get higher access to our most intelligent model 3 Pro, Deep Research, and image generation with Nano Banana Pro, plus unlock video generation with Veo 3.1 Fast',
    },
    features: [
      { title: '1,000 monthly AI credits', description: 'Credits used for video generation across Flow and Whisk' },
      { title: 'Flow', description: 'Higher access in our AI filmmaking tool to create cinematic scenes and stories, including limited access to Veo 3.1' },
      { title: 'Whisk', description: 'Higher access to image-to-video creation with Veo 3' },
      { title: 'Google Search', description: 'Higher access to Gemini 3 Pro to unlock interactive simulations and tools to answer your most complex questions, plus Deep Search, agentic capabilities, and the latest experiments in Search Labs.', hasGoogleIcon: true },
      { title: 'Jules', description: 'Higher limits to our asynchronous coding agent for software developers' },
      { title: 'Gemini Code Assist and Gemini CLI', description: 'Higher daily request limits in Gemini CLI and Gemini Code Assist IDE extensions' },
      { title: 'Google Antigravity', description: 'Higher rate limits to agent model in Google Antigravity, our agentic development platform' },
      { title: 'NotebookLM', description: 'Research and writing assistant with 5x more Audio Overviews, notebooks, and more' },
      { title: 'Gemini in Gmail, Docs, Vids, and more', description: 'Access Gemini directly in Google apps' },
      { title: 'Google Home Premium (Standard plan)', description: '30 days of event history and Gemini features' },
      { title: 'Gemini in Chrome (early access)', description: 'Your personal assistant to browse the web' },
      { title: 'Storage', description: '2 TB of total storage for Photos, Drive, and Gmail' },
    ],
    footerText: 'Google AI Pro is available in more than 150 countries and territories',
  },
  {
    id: 'ai-ultra',
    name: 'Google AI Ultra',
    description: 'Unlock the highest level of access to the best of Google AI and exclusive features.',
    price: 249.99,
    priceSubtext: '/ month',
    promoText: '$124.99 / month for 3 months',
    cta: 'Get started',
    ctaSecondary: null,
    previousTier: 'Google AI Pro',
    geminiAppSection: {
      title: 'Gemini app',
      description: 'Highest limits to models and features including video generation with Veo 3.1, plus access to Deep Think and Gemini Agent (US only, English only)',
    },
    features: [
      { title: '25,000 monthly AI credits', description: 'Credits used for video generation across Flow and Whisk' },
      { title: 'Flow', description: 'Highest access in our AI filmmaking tool to create cinematic scenes and stories, including limited access to Veo 3.1' },
      { title: 'Whisk', description: 'Highest access for image-to-video creation with Veo 3' },
      { title: 'Google Search', description: 'Highest access to Gemini 3 Pro to unlock interactive simulations and tools to answer your most complex questions, plus Deep Search, agentic capabilities, and the latest experiments in Search Labs.', hasGoogleIcon: true },
      { title: 'Jules', description: 'Highest limits to our asynchronous coding agent for software developers' },
      { title: 'Gemini Code Assist and Gemini CLI', description: 'Highest daily request limits in Gemini CLI and Gemini Code Assist IDE extensions' },
      { title: 'Google Antigravity', description: 'Highest rate limits to agent model in Google Antigravity, our agentic development platform' },
      { title: 'NotebookLM', description: 'Highest limits and best model capabilities' },
      { title: 'Gemini in Gmail, Docs, Vids, and more', description: 'Highest limits to Gemini directly in Google apps' },
      { title: 'Google Home Premium (Advanced plan)', description: '24/7 video history, event descriptions, and more' },
      { title: 'Project Mariner (early access)', description: 'Streamline tasks with an agentic research prototype' },
      { title: 'YouTube Premium individual plan', description: 'YouTube ad-free, offline, and in the background' },
      { title: 'Storage', description: '30 TB of total storage for Photos, Drive, and Gmail' },
    ],
    footerText: 'Google AI Ultra is available in more than 140 countries',
  },
]

// Daily usage stats for Work Tooltip prototype
export interface UsageStat {
  used: number
  limit: number
  label: string
  valueLabel: string // positive framing label
}

export interface DailyUsageStats {
  tier: 'plus' | 'pro' | 'ultra'
  prompts: UsageStat
  images: UsageStat
  deepResearch: UsageStat
  thinkingPrompts: UsageStat
  resetTime: string
}

export const dailyUsageStats: DailyUsageStats = {
  tier: 'pro',
  prompts: {
    used: 12,
    limit: 100,
    label: 'Pro prompts',
    valueLabel: 'complex problems solved'
  },
  images: {
    used: 5,
    limit: 200,
    label: 'Images',
    valueLabel: 'images created'
  },
  deepResearch: {
    used: 1,
    limit: 20,
    label: 'Deep Research',
    valueLabel: 'deep research completed'
  },
  thinkingPrompts: {
    used: 24,
    limit: 300,
    label: 'Thinking',
    valueLabel: 'thinking sessions'
  },
  resetTime: '8h 23m',
}

export const tierLimits = {
  free: { images: 3, compareLabel: null },
  plus: { images: 50, compareLabel: 'free users' },
  pro: { images: 100, compareLabel: 'Plus users' },
  ultra: { images: 1000, compareLabel: 'Pro users' },
} as const

export type TierType = 'plus' | 'pro' | 'ultra'

export const faqItems = [
  {
    question: 'What\'s the difference between AI Pro and AI Ultra?',
    answer: 'AI Pro gives you access to Gemini 2.5 Pro, Deep Research, and video generation. AI Ultra includes everything in Pro plus the highest usage limits, early access to features, priority support, and 30TB of storage.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time. You\'ll continue to have access to your plan\'s features until the end of your billing period.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! AI Pro includes a 1-month free trial for new subscribers. You can try all Pro features without being charged.',
  },
  {
    question: 'What happens when I reach my usage limit?',
    answer: 'When you reach your usage limit, you\'ll need to wait until it resets or upgrade to a higher tier for more capacity. Free users have the most limited usage.',
  },
]
