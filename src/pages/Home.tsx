import { About } from '../components/About/About'
import { AppsCode } from '../components/AppsCode/AppsCode'
import { Architecture } from '../components/Architecture/Architecture'
import { Contact } from '../components/Contact/Contact'
import { Education } from '../components/Education/Education'
import { Engineering } from '../components/Engineering/Engineering'
import { Experience } from '../components/Experience/Experience'
import { Hero } from '../components/Hero/Hero'
import { Impact } from '../components/Impact/Impact'
import { Leadership } from '../components/Leadership/Leadership'
import { Projects } from '../components/Projects/Projects'
import { Skills } from '../components/Skills/Skills'

// Recruiter facts first, then evidence, then depth for technical reviewers.
export function Home() {
  return (
    <>
      <Hero />
      <Impact />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <AppsCode />
      <Architecture />
      <Engineering />
      <Leadership />
      <Education />
      <Contact />
    </>
  )
}
