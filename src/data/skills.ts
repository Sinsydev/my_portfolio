import type { SkillGroup } from './types'

export const skillGroups = [
  {
    name: 'Product Engineering',
    skills: [
      'React',
      'TypeScript',
      'Reusable component architecture',
      'Responsive interfaces',
      'Product-focused UI',
    ],
  },
  {
    name: 'AI & Voice',
    skills: [
      'OpenAI API',
      'Twilio',
      'AI-assisted workflows',
      'Conversational product concepts',
      'Voice-enabled workflows',
    ],
  },
  {
    name: 'Real-Time Systems',
    skills: [
      'Firebase',
      'Firestore',
      'Authentication',
      'Live synchronization',
      'Real-time dashboards',
    ],
  },
  {
    name: 'APIs & Backend',
    skills: ['REST APIs', 'Node.js', 'Express.js', 'Firebase services', 'Postman'],
  },
  {
    name: 'Engineering Quality',
    skills: [
      'Performance optimization',
      'Accessibility',
      'Responsive design',
      'Maintainability',
      'Git / GitHub',
      'Docker',
      'CI / CD',
      'Testing',
    ],
  },
] satisfies readonly SkillGroup[]