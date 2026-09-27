import type { Role } from './types'

// From the latest resume. The resume lists focus areas and projects but not employers or dates
// for each, so those are placeholders — confirm the order too (most recent first).

export const experience: Role[] = [
  {
    company: '[ADD COMPANY]',
    title: 'Android Developer, Automotive HMI',
    period: '[ADD DATES] (about 2 years)',
    depth: 'detailed',
    scope: 'In-vehicle HMI on Android for PSA.',
    responsibilities: [
      'Developed car HMI features on Android.',
      'Worked on HMI skinning — theming the Android UI for the vehicle.',
      'Fixed defects in HMI and Android framework code.',
    ],
    achievements: [],
    technologies: ['Android', 'Android framework', 'Automotive HMI', 'Java'],
  },
  {
    company: '[ADD COMPANY]',
    title: 'Android Developer, Framework & Camera',
    period: '[ADD DATES] (about 2 years)',
    depth: 'detailed',
    scope: 'Camera app and framework features across Android versions.',
    responsibilities: [
      'Updated the bokeh (background blur) mode of the camera app for Android 9 (P) and Android 11 (R).',
      'Fixed bugs across camera updates.',
      'Used ContentProvider and BroadcastReceiver for data exchange within and between apps.',
    ],
    achievements: ['Worked on a native C++ library for camera mode enhancement (name under NDA).'],
    technologies: ['Java', 'C++', 'Android framework', 'ContentProvider', 'BroadcastReceiver'],
  },
  {
    company: '[ADD COMPANY]',
    title: 'Android Application Developer',
    period: '[ADD DATES] (about 2 years)',
    depth: 'detailed',
    scope: 'Consumer and enterprise Android apps, from UI to back end.',
    responsibilities: [
      'Feature updates for the United Utilities app in Java, with API calls through Retrofit secured by SSL pinning.',
      'Payment gateway integration for the United Utilities app (in progress).',
      'Built features for the Eternal Light AG church app: live video and audio, notifications and daily quotes.',
    ],
    achievements: [
      'Designed the complete back end of a patient–doctor appointment app: multi-level logins and privileges, Firebase authentication and a Microsoft Azure cloud database.',
      'Created two complete Android applications.',
      'Trained new joiners.',
    ],
    technologies: ['Java', 'Kotlin', 'Retrofit', 'SSL pinning', 'Firebase', 'Cloud Firestore', 'Microsoft Azure', 'MVVM', 'Dagger', 'RxJava'],
  },
  {
    company: '[ADD COMPANY]',
    title: 'Intern, Java & Android development',
    period: '5 months, [ADD DATES]',
    depth: 'compact',
    responsibilities: ['Java and Android development. [ADD 1 HIGHLIGHT]'],
    achievements: [],
    technologies: [],
  },
  {
    company: 'Government Polytechnic, Rengali, Sambalpur',
    title: 'Faculty',
    period: 'Jan 2015 – Apr 2016',
    depth: 'compact',
    responsibilities: ['Taught across three academic sessions. [ADD SUBJECTS TAUGHT]'],
    achievements: [],
    technologies: [],
  },
]

/** Hero graphic: where in the Android stack her work sits. */
export const stackLayers: { layer: string; work: string; worked: boolean }[] = [
  { layer: 'Apps', work: 'United Utilities, healthcare appointments, Eternal Light AG', worked: true },
  { layer: 'Automotive HMI', work: 'Car HMI, skinning and fixes for PSA', worked: true },
  { layer: 'Android framework', work: 'Camera bokeh mode on Android 9 and 11', worked: true },
  { layer: 'Native libraries (C++)', work: 'Camera mode-enhancement library', worked: true },
  { layer: 'HAL & kernel', work: 'Not part of my work so far', worked: false },
]

export const education = {
  degree: 'B.Tech, Electronics and Communication Engineering',
  school: 'Vikash College of Engineering for Women, Bargarh (Biju Patnaik University of Technology)',
  period: '2014',
  grade: 'CGPA 8.24 / 10',
}

export const training: { name: string; detail: string }[] = [
  {
    name: 'BSNL training',
    detail: 'Digital transmission, mobile communication and data communication — Regional Telecommunication Training Centre, Vanivihar, Bhubaneswar.',
  },
  {
    name: 'Seminar: Data security in wireless data transmission',
    detail: 'How systems manage, protect and distribute sensitive information sent over wireless links.',
  },
  {
    name: 'Academic project: Digital visitor counter',
    detail: 'A circuit that counts the number of visitors in a room.',
  },
]
