import type { Experience } from './types'

export const experience = [
  {
    title: 'PropertyPulse AI',
    summary: 'AI-powered receptionist workflow connecting voice communication to lead capture and appointment-related workflows.',
    highlights: [
      'React and TypeScript frontend',
      'Firebase Authentication and Firestore',
      'OpenAI API and Twilio integrations',
      'Reusable frontend architecture',
      'Real-time dashboards',
    ],
    stack: ['React', 'TypeScript', 'Firebase', 'OpenAI API', 'Twilio'],
  },
  {
    title: 'Katsina State Security & Incident Reporting System',
    summary: 'Real-time incident reporting with authenticated access, Firestore synchronization, and dashboards.',
    highlights: [
      'React and TypeScript UI',
      'Firebase Authentication and Firestore',
      'Real-time incident synchronization',
      'Responsive, reusable frontend components',
      'Scalability, reliability, and performance focus',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Firebase', 'Firestore'],
  },
  {
    title: 'KSITM Virtual Learning & Collaboration Platform',
    summary: 'Refactored a legacy React codebase, improving responsive behavior, frontend performance, and maintainability.',
    highlights: [
      'Legacy React refactoring',
      'Reusable components',
      'Responsive interfaces',
      'Frontend performance',
      'Maintainability',
      'Supported over 1,500 active users',
    ],
    stack: ['React'],
  },
  {
    title: 'KT Almadina Motors',
    summary: 'Vehicle marketplace focused on search, filtering, and vehicle discovery.',
    highlights: ['Responsive React interface', 'Vehicle search and filtering'],
    stack: ['React'],
  },
  {
    title: 'Agile Engineering',
    summary: 'Technical services project focused on page-load optimization and asset delivery.',
    highlights: ['Page-load optimization', 'Asset delivery'],
  },
] satisfies readonly Experience[]