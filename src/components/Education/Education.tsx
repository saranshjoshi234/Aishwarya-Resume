import { GraduationCap } from 'lucide-react'
import { education, training } from '../../data/experience'
import { profile } from '../../data/profile'
import { Section } from '../ui/Section'

export function Education() {
  return (
    <Section id="education" title="Education & training" tone="sunken">
      <div className="grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-start gap-3">
            <GraduationCap size={22} aria-hidden className="mt-0.5 shrink-0 text-accent" />
            <div>
              <h3 className="font-medium">{education.degree}</h3>
              <p className="mt-1 text-[0.9375rem] text-muted">{education.school}</p>
              <p className="mt-1 text-[0.9375rem] text-muted">
                {education.period}, {education.grade}
              </p>
            </div>
          </div>
          <p className="mt-8 text-[0.9375rem]">
            <span className="text-muted">Languages: </span>
            {profile.languages}
          </p>
        </div>
        <dl className="border-t border-rule lg:col-span-7">
          {training.map((t) => (
            <div key={t.name} className="border-b border-rule py-4">
              <dt className="font-medium">{t.name}</dt>
              <dd className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{t.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
