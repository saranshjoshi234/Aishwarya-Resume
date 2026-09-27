import type { ArchNode } from './types'

// Reference app architecture — the pattern, not any one client's codebase.

export const architectureCopy = {
  title: 'How I structure an Android app',
  intro:
    'The MVVM pattern I build apps on, from the screen down to the network and platform. Select any layer to see its job, the technology behind it and what I own there. Dependency injection, async work and security run across every layer.',
  railsLabel: 'Across every layer',
}

export const flow: ArchNode[] = [
  {
    id: 'ui',
    label: 'UI layer',
    tech: 'Activities, Fragments, XML layouts, custom notifications',
    purpose: 'What the user sees and touches.',
    responsibility: 'Keep screens thin: render state from the ViewModel and forward user actions.',
  },
  {
    id: 'viewmodel',
    label: 'ViewModel',
    tech: 'Jetpack ViewModel, RxJava',
    purpose: 'Holds screen state and survives configuration changes.',
    responsibility: 'Turn user actions into repository calls and expose results as observable state.',
  },
  {
    id: 'repository',
    label: 'Repository',
    tech: 'Kotlin / Java classes',
    purpose: 'Single source of truth for each kind of data.',
    responsibility: 'Decide whether data comes from the network, the local database or the cloud.',
  },
  {
    id: 'network',
    label: 'Network APIs',
    tech: 'Retrofit, SSL pinning',
    purpose: 'Talks to back-end services.',
    responsibility: 'Typed API clients over pinned TLS connections; debug traffic with Postman and Charles.',
  },
  {
    id: 'local',
    label: 'Local data',
    tech: 'SQL database',
    purpose: 'Keeps data on the device.',
    responsibility: 'Store what the app needs offline or across sessions.',
  },
  {
    id: 'cloud',
    label: 'Cloud services',
    tech: 'Firebase Auth, Firebase database, Firestore, Azure',
    purpose: 'Authentication, shared data and messaging.',
    responsibility: 'Sign-in, role-based privileges and cloud storage; SMS and MMS via TextLocal.',
  },
  {
    id: 'platform',
    label: 'Platform & native',
    tech: 'ContentProvider, BroadcastReceiver, C++ libraries',
    purpose: 'Data sharing with other apps and performance-critical code.',
    responsibility: 'Expose and consume data safely across apps; drop to native code where Java isn’t enough.',
  },
]

export const rails: (ArchNode & { side: 'left' | 'right' })[] = [
  {
    id: 'di',
    side: 'left',
    label: 'Dependency injection',
    tech: 'Dagger',
    purpose: 'Wires every layer together without hard-coded dependencies.',
    responsibility: 'Keep classes testable and swappable by injecting what they need.',
  },
  {
    id: 'async',
    side: 'right',
    label: 'Async & streams',
    tech: 'RxJava',
    purpose: 'Keeps network and database work off the main thread.',
    responsibility: 'Compose asynchronous calls and deliver results back to the UI safely.',
  },
  {
    id: 'security',
    side: 'right',
    label: 'Security',
    tech: 'SSL pinning, Firebase Authentication, role-based access',
    purpose: 'Protects users and their data at every layer.',
    responsibility: 'Pinned connections, authenticated users and least-privilege access by role.',
  },
]
