// Shared content types. Edit the data files, not the components.

/** How a skill or capability is evidenced. Keeps "used in production" separate from "learning". */
export type Evidence = 'production' | 'hands-on' | 'learning'

export interface Link {
  label: string
  href: string
}

export interface Role {
  company: string
  title: string
  period: string
  location?: string
  current?: boolean
  /** One line on scope/team. */
  scope?: string
  /** What the role covered. */
  responsibilities: string[]
  /** Specific, verifiable outcomes. Leave empty rather than inventing. */
  achievements: string[]
  technologies: string[]
  /** 'detailed' roles get the full treatment in the timeline. */
  depth: 'detailed' | 'compact'
}

export interface ProjectFact {
  value: string
  label: string
}

/** One numbered section of a case study. Provide exactly one of text / list / flow / chips. */
export interface CaseSection {
  title: string
  text?: string
  list?: string[]
  /** Ordered steps, rendered as a small flow diagram. */
  flow?: string[]
  chips?: string[]
}

export interface ProjectFact {
  value: string
  label: string
}

export interface CaseStudy {
  businessProblem: string
  technicalChallenge: string
  /** Ordered flow, rendered as a small diagram. */
  architecture: string[]
  engineeringApproach: string[]
  technologyStack: string[]
  dataQualityStrategy: string[]
  automation: string[]
  businessImpact: string[]
  lessonsLearned: string[]
  futureImprovements: string[]
}

export interface Project {
  id: string
  title: string
  domain: string
  summary: string
  /** Short problem / approach / impact trio shown on the card. */
  problem: string
  approach: string
  impact: string
  facts: ProjectFact[]
  stack: string[]
  caseStudy: CaseSection[]
}

export interface SkillGroup {
  name: string
  blurb: string
  items: { name: string; evidence?: Evidence }[]
}

export interface ArchNode {
  id: string
  label: string
  tech: string
  purpose: string
  responsibility: string
  /** Draw as "not part of my work" / optional. */
  muted?: boolean
}
