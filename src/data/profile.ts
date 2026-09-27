// ─────────────────────────────────────────────────────────────
// Profile & contact. Anything in [ADD ...] renders as a visible
// placeholder and is NOT linked. Run `npm run check:placeholders`
// before deploying to find what is left.
//
// Deliberately NOT published (it's on the private resume only):
// phone number, home address, date of birth, family and marital details.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Aishwarya Shalini Purohit',
  shortName: 'Aishwarya Purohit',
  initials: 'AP',
  title: 'Android Developer',
  location: 'Bengaluru, India',
  currentOrg: 'HCS',
  experienceLabel: '6+ years in Android',

  headline: 'Android developer across apps, the framework and in-car HMI.',
  supporting:
    'Six years of Android development in Java and Kotlin: automotive HMI, camera features in the Android framework with native C++, and secure, cloud-connected apps built on MVVM, Jetpack, Dagger and RxJava.',

  coreStack: ['Java', 'Kotlin', 'Android SDK', 'Jetpack', 'MVVM'],
  specialization: 'Automotive HMI, Android framework, app development',
  languages: 'English, Hindi, Odia',

  // Contact — the email is the one on her resume. Replace placeholders with real values.
  email: 'silvy1purohit@gmail.com',
  linkedin: '[ADD LINKEDIN URL]',
  github: '[ADD GITHUB URL]',

  // Put a public-safe resume (no phone / address / date of birth) at /public/resume.pdf.
  resumeHref: '/resume.pdf',

  siteUrl: '[ADD CANONICAL URL]',
}

export const summary = {
  lead:
    'Android developer with six years across three layers of the platform — roughly two years each in automotive HMI, the Android framework, and application development.',
  body: [
    'In the framework, I updated the camera app’s bokeh mode for Android 9 (Pie) and Android 11, fixed camera defects and worked on a native C++ library for mode enhancement. In automotive, I worked on car HMI development, skinning and bug fixing for PSA.',
    'On the app side, I work on secure networking with Retrofit and SSL pinning, cloud back ends on Firebase and Microsoft Azure, and role-based access. I designed the complete back end of a patient–doctor appointment app with multiple login levels.',
    'Before moving into industry I taught for three sessions as faculty at Government Polytechnic, Rengali, and I still train new joiners on my teams.',
  ],
}

export const about = {
  // Drafted from the resume — edit freely so it sounds like her.
  statement: [
    'I like working where an app meets the platform. Knowing how a broadcast is delivered or why a camera mode behaves differently on a new Android version makes me a better app developer — and building apps keeps framework work grounded in what people actually see.',
    'Teaching before I moved into industry taught me to explain things plainly, which I still use when onboarding new team members.',
  ],
  focusNow: ['Payment gateway integration for the United Utilities app', '[ADD WHAT YOU ARE LEARNING NOW]'],
}

export const contactCopy = {
  headline: 'Let’s build Android experiences people rely on.',
  text: 'Open to Android development roles across apps, framework and automotive. Based in Bengaluru.',
}
