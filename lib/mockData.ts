export interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  images?: string[]
  timestamp: Date
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

export const tools = [
  { id: 'deep-research', name: 'Deep Research', icon: 'travel_explore' },
  { id: 'create-videos', name: 'Create videos', icon: 'movie', badge: 'Veo 3.1' },
  { id: 'create-images', name: 'Create images', emoji: '🍌' },
  { id: 'canvas', name: 'Canvas', icon: 'note_stack_add' },
  { id: 'guided-learning', name: 'Guided Learning', icon: 'auto_stories' },
  { id: 'visual-layout', name: 'Visual layout', icon: 'team_dashboard', badge: 'Labs' },
]

export const modes = [
  { id: 'fast', name: 'Fast', description: 'Answers quickly', badge: 'New' },
  { id: 'thinking', name: 'Thinking', description: 'Solves complex problems', badge: 'New' },
  { id: 'pro', name: 'Pro', description: 'Thinks longer for advanced math & code', badge: 'New' },
]

export const pricingPlans = [
  {
    id: 'free',
    name: 'Free',
    description: 'Great for trying out Gemini',
    price: 0,
    originalPrice: null,
    promoText: null,
    cta: 'Get started',
    features: [
      'Access to Gemini 2.5 Flash',
      'Image generation with Imagen 3',
      'File and image uploads',
      'Gems for custom AI assistants',
      'Limited usage',
    ],
  },
  {
    id: 'ai-plus',
    name: 'AI Plus',
    description: 'More features for everyday use',
    price: 7.99,
    originalPrice: null,
    promoText: '$3.99/mo for 2 months',
    cta: 'Get AI Plus',
    features: [
      'Everything in Free and:',
      'Higher usage limits',
      'Priority access during peak times',
      'Gemini in Google Workspace',
    ],
  },
  {
    id: 'ai-pro',
    name: 'AI Pro',
    description: 'Best for professionals and creators',
    price: 19.99,
    originalPrice: null,
    promoText: 'Free for 1 month',
    cta: 'Get AI Pro',
    ctaSecondary: 'Free for students',
    features: [
      'Everything in AI Plus and:',
      'Access to Gemini 2.5 Pro',
      'Deep Research mode',
      'Veo 3.1 video generation',
      '2TB Google One storage',
      'Gemini in Gmail, Docs, Sheets',
    ],
  },
  {
    id: 'ai-ultra',
    name: 'AI Ultra',
    description: 'Maximum capabilities for power users',
    price: 249.99,
    originalPrice: null,
    promoText: '$124.99/mo for 3 months',
    cta: 'Get AI Ultra',
    features: [
      'Everything in AI Pro and:',
      'Highest usage limits',
      'Early access to new features',
      'Priority support',
      '30TB Google One storage',
      'NotebookLM Plus',
    ],
  },
]

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
