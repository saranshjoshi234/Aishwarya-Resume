import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { stackLayers } from '../../data/experience'
import { profile } from '../../data/profile'
import { ContactLink } from '../ui/ContactLink'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcons'

export function Hero() {
  const glance = [
    { term: 'Role', value: profile.title },
    { term: 'Based in', value: profile.location },
    { term: 'Experience', value: profile.experienceLabel },
    { term: 'Core stack', value: profile.coreStack.join(', ') },
    { term: 'Specialises in', value: profile.specialization },
    { term: 'Currently at', value: profile.currentOrg },
  ]

  return (
    <section id="home" aria-labelledby="hero-title" className="relative">
      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 pb-14 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <div className="lg:col-span-7">
          <p className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9375rem] text-muted">
            <span className="font-medium text-ink">{profile.name}</span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={15} aria-hidden />
              {profile.location}
            </span>
            <span>{profile.experienceLabel}</span>
          </p>

          <h1
            id="hero-title"
            className="mt-6 max-w-[20ch] text-[2.125rem] font-medium leading-[1.1] sm:text-[2.75rem] lg:text-[3.125rem]"
          >
            {profile.headline}
          </h1>

          <p className="mt-6 max-w-[58ch] text-[1.0625rem] leading-relaxed text-muted sm:text-lg">{profile.supporting}</p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 font-medium text-accent-ink hover:opacity-90"
            >
              View experience
              <ArrowRight size={17} aria-hidden />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-rule bg-surface px-5 py-3 font-medium hover:border-ink/40"
            >
              Explore projects
            </a>
            <a
              href={profile.resumeHref}
              download
              className="inline-flex items-center gap-2 rounded-md px-3 py-3 font-medium text-accent underline-offset-4 hover:underline"
            >
              <Download size={17} aria-hidden />
              Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.9375rem]">
            <ContactLink kind="url" value={profile.linkedin} label="LinkedIn" icon={<LinkedinIcon size={17} />} />
            <ContactLink kind="url" value={profile.github} label="GitHub" icon={<GithubIcon size={17} />} />
            <ContactLink kind="email" value={profile.email} label="Email" icon={<Mail size={17} aria-hidden />} />
          </div>
        </div>

        <StackMap />
      </div>

      <div className="border-y border-rule bg-surface">
        <dl className="mx-auto grid max-w-[1120px] grid-cols-2 gap-x-6 gap-y-5 px-5 py-6 sm:grid-cols-3 sm:px-8 lg:grid-cols-6">
          {glance.map((g) => (
            <div key={g.term} className="min-w-0">
              <dt className="text-[0.8125rem] text-muted">{g.term}</dt>
              <dd className="mt-1 text-[0.9375rem] font-medium leading-snug">{g.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

/** The Android stack, with the layers her work touches — the site's signature element. */
function StackMap() {
  return (
    <figure className="lg:col-span-5 lg:pl-4" aria-labelledby="stack-caption">
      <figcaption id="stack-caption" className="mb-4 text-[0.9375rem]">
        <span className="font-medium">Where I’ve worked in the Android stack</span>
      </figcaption>
      <ol className="flex flex-col gap-2">
        {stackLayers.map((l, i) => (
          <li
            key={l.layer}
            className={`lineage-node rounded-lg border px-4 py-3 ${
              l.worked ? (i === 0 ? 'border-accent/50 bg-accent-soft' : 'border-rule bg-surface') : 'border-dashed border-rule bg-transparent'
            }`}
            style={{ animationDelay: `${i * 90}ms`, marginLeft: `${i * 10}px` }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className={`font-medium ${l.worked ? (i === 0 ? 'text-accent' : '') : 'text-muted'}`}>{l.layer}</span>
              {l.worked && (
                <span aria-hidden className={`h-2 w-2 shrink-0 rounded-full ${i === 0 ? 'bg-accent' : 'bg-ink/70'}`} />
              )}
            </div>
            <div className="mt-0.5 text-[0.8125rem] leading-snug text-muted">{l.work}</div>
            {!l.worked && <span className="sr-only">(not part of my work)</span>}
          </li>
        ))}
      </ol>
    </figure>
  )
}
