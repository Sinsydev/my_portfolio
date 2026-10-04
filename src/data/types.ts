export type Project = {
  title: string
  category: string
  summary: string
  problem?: string
  approach?: string
  impact?: string
  stack: readonly string[]
  featured: boolean
  github?: string
  live?: string
  image?: string
  architecture?: readonly string[]
  engineeringHighlights?: readonly string[]
  technicalDetails?: readonly string[]
  challenges?: readonly string[]
  caseStudy?: boolean
}

export type Experience = {
  title: string
  summary: string
  highlights: readonly string[]
  stack?: readonly string[]
}

export type SkillGroup = {
  name: string
  skills: readonly string[]
}

export type Education = {
  qualification: string
  distinction?: string
  cgpa?: string
}