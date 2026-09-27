import type { Project } from './types'

// Featured work, taken from the resume. Outcomes that the resume doesn't state are placeholders.

export const projects: Project[] = [
  {
    id: 'psa-hmi',
    title: 'Automotive HMI for PSA',
    domain: 'Automotive, Android framework',
    summary: 'Android-based in-car HMI work for PSA: feature development, skinning and bug fixing down into the Android framework.',
    problem: 'In-car screens have to match the vehicle’s look and stay reliable on an automotive Android build.',
    approach: 'HMI feature development, UI skinning and framework-level defect fixing.',
    impact: '[ADD OUTCOME]',
    facts: [
      { value: '~2 yrs', label: 'in automotive HMI' },
      { value: '[ADD METRIC]', label: 'e.g. features or defects delivered' },
    ],
    stack: ['Android', 'Android framework', 'Java'],
    caseStudy: [
      {
        title: 'Context',
        text: 'Car HMI development on Android for PSA, covering the screens and interactions drivers use in the vehicle.',
      },
      {
        title: 'What I worked on',
        list: [
          'HMI feature development.',
          'Skinning: theming the Android UI for the vehicle.',
          'Bug fixing across HMI and Android framework code.',
        ],
      },
      { title: 'Technology', chips: ['Android', 'Android framework', 'Java', '[ADD TOOLS]'] },
      { title: 'Outcome', list: ['[ADD OUTCOME]'] },
    ],
  },
  {
    id: 'bokeh-camera',
    title: 'Bokeh mode camera',
    domain: 'Android framework, Camera, Native C++',
    summary: 'Feature updates to the camera app’s bokeh (background blur) mode for Android 9 and Android 11, with work in a native C++ library.',
    problem: 'A camera feature had to behave consistently across two major Android versions.',
    approach: 'Java feature updates, native C++ for mode enhancement, and camera bug fixing.',
    impact: 'Bokeh mode updated for Android 9 (P) and Android 11 (R).',
    facts: [
      { value: '2', label: 'Android versions (9 and 11)' },
      { value: 'C++', label: 'native mode-enhancement library' },
    ],
    stack: ['Java', 'C++', 'Android framework', 'ContentProvider', 'BroadcastReceiver'],
    caseStudy: [
      {
        title: 'Context',
        text: 'The camera app’s bokeh mode needed feature updates for Android P and Android R, alongside bug fixes from camera updates.',
      },
      {
        title: 'Challenge',
        text: 'Behaviour had to stay consistent across two platform versions, and part of the mode enhancement lived in native code rather than the Java layer.',
      },
      {
        title: 'How it fits together (simplified)',
        flow: ['Camera app (Java)', 'Bokeh mode logic', 'Native library (C++)', 'Processed image'],
      },
      {
        title: 'What I worked on',
        list: [
          'Feature updates to bokeh mode for Android 9 and 11.',
          'Bug fixing on camera updates.',
          'Work on a native C++ library for mode enhancement (name under NDA).',
          'ContentProvider and BroadcastReceiver for data exchange within and between apps.',
        ],
      },
      { title: 'Technology', chips: ['Java', 'C++', 'Android framework', 'ContentProvider', 'BroadcastReceiver'] },
      { title: 'Outcome', list: ['[ADD OUTCOME]'] },
    ],
  },
  {
    id: 'united-utilities',
    title: 'United Utilities app',
    domain: 'Utilities, Secure networking, Payments',
    summary: 'Feature updates for the United Utilities Android app, with pinned, secure API calls and an in-progress payment gateway integration.',
    problem: 'An app handling customer and payment data needs its network traffic protected end to end.',
    approach: 'Retrofit for API calls with SSL certificate pinning; payment gateway integration under way.',
    impact: '[ADD OUTCOME]',
    facts: [
      { value: 'SSL', label: 'certificate pinning on API calls' },
      { value: 'In progress', label: 'payment gateway integration' },
    ],
    stack: ['Java', 'Retrofit', 'SSL pinning', 'REST APIs'],
    caseStudy: [
      { title: 'Context', text: 'Feature updates for the United Utilities Android app.' },
      {
        title: 'How it fits together',
        flow: ['App screens', 'Retrofit client', 'Pinned TLS connection', 'United Utilities APIs'],
      },
      {
        title: 'What I worked on',
        list: [
          'Feature updates in Java.',
          'API calls through Retrofit, secured with SSL pinning.',
          'Payment gateway integration (in progress).',
        ],
      },
      {
        title: 'Security',
        text: 'SSL pinning makes the app trust only the expected server certificate, so traffic can’t be read or altered through an intercepting proxy or a rogue certificate.',
      },
      { title: 'Technology', chips: ['Java', 'Retrofit', 'SSL pinning', 'Postman', 'Charles Proxy'] },
      { title: 'Outcome', list: ['[ADD OUTCOME]'] },
    ],
  },
  {
    id: 'healthcare',
    title: 'Patient & doctor appointment app',
    domain: 'Healthcare, Back end, Access control',
    summary: 'Designed the complete back end of a healthcare appointment app with multiple login levels, Firebase authentication and a Microsoft Azure cloud database.',
    problem: 'Different users need different levels of access to the same appointment data.',
    approach: 'Multi-level login with privilege levels, Firebase authentication and Azure cloud storage.',
    impact: 'Full back end designed and built. [ADD OUTCOME]',
    facts: [
      { value: 'Multi-level', label: 'logins and privileges' },
      { value: 'Azure', label: 'cloud database' },
    ],
    stack: ['Java', 'Firebase Authentication', 'Microsoft Azure', 'TextLocal'],
    caseStudy: [
      {
        title: 'Context',
        text: 'An Android app for booking and managing patient–doctor appointments. I designed its entire back end.',
      },
      {
        title: 'How it fits together',
        flow: ['Android app (XML UI)', 'Firebase Authentication', 'Privilege levels', 'Azure cloud database', 'SMS & MMS via TextLocal'],
      },
      {
        title: 'What I built',
        list: [
          'Multiple login levels, each with its own privileges.',
          'Authentication with Firebase credentials.',
          'All data stored in a Microsoft Azure cloud database.',
          'SMS and MMS notifications through TextLocal.',
          'ContentProvider and BroadcastReceiver for data exchange within and between apps.',
        ],
      },
      { title: 'Technology', chips: ['Java', 'Firebase Authentication', 'Microsoft Azure', 'TextLocal', 'ContentProvider', 'BroadcastReceiver'] },
      { title: 'Outcome', list: ['[ADD OUTCOME, e.g. users, clinics or Play Store link]'] },
    ],
  },
  {
    id: 'eternal-light',
    title: 'Eternal Light AG church app',
    domain: 'Community, Media, Notifications',
    summary: 'A live, continuously updated church app with live video and audio, hourly updates, notifications and daily quotes.',
    problem: 'A community wanted services, news and daily content in one place, delivered as it happens.',
    approach: 'Live media, custom notifications and Firebase-backed content in Java and Kotlin.',
    impact: 'Live and maintained ("living project"). [ADD OUTCOME]',
    facts: [
      { value: 'Live', label: 'video and audio' },
      { value: 'Hourly', label: 'content updates' },
    ],
    stack: ['Java', 'Kotlin', 'Firebase', 'Cloud Firestore', 'TextLocal'],
    caseStudy: [
      {
        title: 'Context',
        text: 'An app for Eternal Light AG church with live video and audio, and church information updated every hour.',
      },
      {
        title: 'What I built',
        list: [
          'Live video and audio features.',
          'Notifications on every update, using custom notifications.',
          'A home screen with a new quote each day.',
          'Photo gallery backed by Firebase database and Cloud Firestore.',
          'SMS and MMS through TextLocal.',
        ],
      },
      { title: 'Technology', chips: ['Java', 'Kotlin', 'Firebase', 'Cloud Firestore', 'TextLocal', 'XML layouts'] },
      { title: 'Outcome', list: ['[ADD OUTCOME, e.g. Play Store link or number of users]'] },
    ],
  },
]
