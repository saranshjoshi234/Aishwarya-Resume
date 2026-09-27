import type { SkillGroup } from './types'

// No proficiency bars. `evidence: 'hands-on'` marks work in progress.

export const skillGroups: SkillGroup[] = [
  { name: 'Languages', blurb: 'What the code is written in.', items: [{ name: 'Java' }, { name: 'Kotlin' }, { name: 'C++ (native)' }, { name: 'SQL' }] },
  {
    name: 'Android',
    blurb: 'App architecture and platform APIs.',
    items: [
      { name: 'Android SDK' },
      { name: 'Jetpack' },
      { name: 'MVVM' },
      { name: 'Dagger' },
      { name: 'RxJava' },
      { name: 'ContentProvider' },
      { name: 'BroadcastReceiver' },
      { name: 'Custom notifications' },
      { name: 'XML layouts' },
    ],
  },
  {
    name: 'Platform & automotive',
    blurb: 'Below the app layer.',
    items: [{ name: 'Android framework' }, { name: 'Automotive HMI' }, { name: 'HMI skinning' }, { name: 'Camera features' }, { name: 'Native C++ libraries' }],
  },
  {
    name: 'Networking & security',
    blurb: 'Getting data in and out safely.',
    items: [
      { name: 'Retrofit' },
      { name: 'SSL pinning' },
      { name: 'REST APIs' },
      { name: 'Payment gateway integration', evidence: 'hands-on' },
      { name: 'Postman' },
      { name: 'Charles Proxy' },
    ],
  },
  {
    name: 'Back end & cloud',
    blurb: 'Services the apps run on.',
    items: [
      { name: 'Firebase Authentication' },
      { name: 'Firebase database' },
      { name: 'Cloud Firestore' },
      { name: 'Microsoft Azure database' },
      { name: 'JDBC' },
      { name: 'TextLocal SMS/MMS' },
    ],
  },
  {
    name: 'Tools & process',
    blurb: 'How the work gets done.',
    items: [{ name: 'Android Studio' }, { name: 'Git & GitHub' }, { name: 'Eclipse' }, { name: 'WebStorm' }, { name: 'Agile' }, { name: 'SDLC' }],
  },
]

export const evidenceLabel = {
  production: 'Delivered',
  'hands-on': 'In progress',
  learning: 'Learning',
} as const
