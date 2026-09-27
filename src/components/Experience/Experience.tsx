import { experience } from '../../data/experience'
import type { Role } from '../../data/types'
import { Chip } from '../ui/Evidence'
import { Text } from '../ui/Placeholder'
import { Section } from '../ui/Section'

export function Experience() {
  const detailed = experience.filter((r) => r.depth === 'detailed')
  const compact = experience.filter((r) => r.depth === 'compact')

  return (
    <Section
      id="experience"
      title="Experience"
      intro={<p>Six years across three layers of Android, after a start in teaching.</p>}
    >
      <ol className="relative">
        {detailed.map((r) => (
          <DetailedRole key={r.title} role={r} />
        ))}
        <li className="relative grid gap-3 pb-2 md:grid-cols-[11rem_1fr] md:gap-10">
          <TimelineRail size="sm" />
          <div className="hidden text-[0.9375rem] text-muted md:block md:pt-1">Earlier</div>
          <div className="pl-8 md:pl-10">
            <h3 className="font-medium">Internship & teaching</h3>
            <ul className="mt-3 divide-y divide-rule border-y border-rule">
              {compact.map((r) => (
                <li key={r.title} className="grid gap-1 py-3.5 sm:grid-cols-[1fr_auto] sm:gap-6">
                  <div>
                    <span className="font-medium">{r.title}</span>
                    <span className="text-muted">
                      , <Text>{r.company}</Text>
                    </span>
                    <div className="mt-1 text-[0.9375rem] text-muted">
                      {r.responsibilities.map((x) => (
                        <Text key={x}>{x}</Text>
                      ))}
                    </div>
                  </div>
                  <div className="text-[0.9375rem] text-muted sm:text-right">
                    <Text>{r.period}</Text>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ol>

    </Section>
  )
}

function TimelineRail({ size, current }: { size: 'lg' | 'sm'; current?: boolean }) {
  const dot =
    size === 'lg'
      ? 'left-0 top-1.5 h-[15px] w-[15px] md:left-[calc(13.5rem-7px)]'
      : 'left-[3px] top-2.5 h-[9px] w-[9px] md:left-[calc(13.5rem-4px)]'
  const fill = current ? 'bg-accent ring-4 ring-accent-soft' : size === 'lg' ? 'bg-ink' : 'bg-muted'
  return (
    <>
      <span aria-hidden className="absolute bottom-0 left-[7px] top-2 w-px bg-rule md:left-[13.5rem]" />
      <span aria-hidden className={`absolute rounded-full ${dot} ${fill}`} />
    </>
  )
}

function DetailedRole({ role: r }: { role: Role }) {
  return (
    <li className="relative grid gap-3 pb-14 md:grid-cols-[11rem_1fr] md:gap-10">
      <TimelineRail size="lg" current={r.current} />
      <div className="pl-8 text-[0.9375rem] text-muted md:pl-0 md:pt-0.5">
        <Text>{r.period}</Text>
        {r.location && <div>{r.location}</div>}
      </div>
      <article className="pl-8 md:pl-10">
        <h3 className="text-xl font-medium sm:text-[1.375rem]">
          {r.title}
          <span className="text-muted">
            , <Text>{r.company}</Text>
          </span>
        </h3>
        {r.scope && <p className="mt-2 max-w-[66ch] text-muted">{r.scope}</p>}

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          <div>
            <h4 className="text-[0.9375rem] font-medium">What I worked on</h4>
            <ul className="mt-3 space-y-2.5 text-[0.9687rem] leading-relaxed">
              {r.responsibilities.map((x) => (
                <li key={x} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-muted" />
                  <span>
                    <Text>{x}</Text>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {r.achievements.length > 0 && (
            <div className="rounded-lg border border-rule bg-surface p-5">
              <h4 className="text-[0.9375rem] font-medium">Selected achievements</h4>
              <ul className="mt-3 space-y-2.5 text-[0.9687rem] leading-relaxed">
                {r.achievements.map((x) => (
                  <li key={x} className="flex gap-3">
                    <span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>
                      <Text>{x}</Text>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
          {r.technologies.map((t) => (
            <li key={t}>
              <Chip>{t}</Chip>
            </li>
          ))}
        </ul>
      </article>
    </li>
  )
}
