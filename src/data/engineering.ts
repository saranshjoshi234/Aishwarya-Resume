// "How I build Android apps" plus three deep-dive tabs.

export const engineeringCopy = {
  title: 'How I build Android apps',
  intro: 'The principles behind my work, then how they show up in the three areas I know best.',
}

export const principles: { name: string; summary: string; points: string[] }[] = [
  {
    name: 'Secure by default',
    summary: 'User data is protected before a feature is called done.',
    points: ['SSL pinning', 'authenticated access with Firebase', 'privilege levels by role', 'privacy-preserving code'],
  },
  {
    name: 'Clean architecture',
    summary: 'Code the next developer can read, change and reuse.',
    points: ['MVVM', 'dependency injection with Dagger', 'reusable components', 'object-oriented design'],
  },
  {
    name: 'Works on every device',
    summary: 'Android is many devices and many versions, not one phone.',
    points: ['behaviour across Android versions', 'device differences', 'framework-level fixes when the app layer can’t help'],
  },
  {
    name: 'Debugging to the root cause',
    summary: 'Find why it broke, not just where.',
    points: ['defect tracing', 'network inspection with Charles and Postman', 'framework and native debugging'],
  },
  {
    name: 'Right layer for the job',
    summary: 'Java or Kotlin for features, native C++ where performance demands it.',
    points: ['native libraries', 'ContentProvider and BroadcastReceiver for cross-app data'],
  },
  {
    name: 'Team delivery',
    summary: 'Good software is a team sport.',
    points: ['Agile delivery', 'Git and GitHub', 'full SDLC', 'training new joiners'],
  },
]

export const deepDives: { id: string; label: string; intro: string; flow?: string[]; items: { name: string; detail: string }[] }[] = [
  {
    id: 'security',
    label: 'Networking & security',
    intro: 'How app data travels, and how it stays protected.',
    flow: ['App', 'Retrofit client', 'Pinned TLS', 'API'],
    items: [
      { name: 'Retrofit', detail: 'Typed API clients so requests and responses are checked at compile time.' },
      { name: 'SSL pinning', detail: 'The app trusts only the expected server certificate, blocking interception.' },
      { name: 'Authentication', detail: 'Firebase credentials for sign-in, with privileges assigned per login level.' },
      { name: 'Payments', detail: 'Payment gateway integration for the United Utilities app — in progress.' },
      { name: 'API debugging', detail: 'Postman to exercise APIs; Charles Proxy to inspect real app traffic.' },
    ],
  },
  {
    id: 'framework',
    label: 'Framework & IPC',
    intro: 'Working below the app layer.',
    items: [
      { name: 'ContentProvider', detail: 'Shares structured data with other apps through a controlled interface.' },
      { name: 'BroadcastReceiver', detail: 'Reacts to system and app events for communication within and between apps.' },
      { name: 'Native C++', detail: 'Camera mode enhancement implemented in a native library.' },
      { name: 'Version changes', detail: 'Camera features carried across Android 9 (P) and Android 11 (R).' },
    ],
  },
  {
    id: 'hmi',
    label: 'Automotive HMI',
    intro: 'Android in the car.',
    items: [
      { name: 'HMI development', detail: 'Building the in-car interface on Android for PSA.' },
      { name: 'Skinning', detail: 'Theming the Android UI to the vehicle’s visual design.' },
      { name: 'Framework fixes', detail: 'Resolving defects in Android framework code behind the HMI.' },
    ],
  },
]
