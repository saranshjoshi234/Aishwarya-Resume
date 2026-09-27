import { useRef, useState, type KeyboardEvent } from 'react'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { deepDives, engineeringCopy, principles } from '../../data/engineering'
import { Section } from '../ui/Section'

const capitalize = (t: string) => t.charAt(0).toUpperCase() + t.slice(1)

export function Engineering() {
  return (
    <Section id="engineering" title={engineeringCopy.title} intro={<p>{engineeringCopy.intro}</p>}>
      <ul className="grid border-t border-rule md:grid-cols-2">
        {principles.map((p, i) => (
          <li
            key={p.name}
            className={`border-b border-rule py-6 md:pr-10 ${i % 2 === 1 ? 'md:border-l md:pl-10 md:pr-0' : ''}`}
          >
            <h3 className="font-medium">{p.name}</h3>
            <p className="mt-1 text-[0.9687rem]">{p.summary}</p>
            <p className="mt-2 text-[0.9063rem] leading-relaxed text-muted">{capitalize(p.points.join(', '))}</p>
          </li>
        ))}
      </ul>
      <DeepDives />
    </Section>
  )
}

function DeepDives() {
  const [tab, setTab] = useState(deepDives[0].id)
  const refs = useRef<(HTMLButtonElement | null)[]>([])
  const current = deepDives.find((d) => d.id === tab) ?? deepDives[0]

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir && e.key !== 'Home' && e.key !== 'End') return
    e.preventDefault()
    const n = deepDives.length
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : (i + dir + n) % n
    setTab(deepDives[next].id)
    refs.current[next]?.focus()
  }

  return (
    <div className="mt-16">
      <h3 className="text-[1.375rem] font-medium">In practice</h3>
      <div role="tablist" aria-label="Engineering deep dives" className="mt-5 flex gap-1 overflow-x-auto border-b border-rule">
        {deepDives.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el
            }}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => onKey(e, i)}
            className={`-mb-px whitespace-nowrap border-b-2 px-4 py-3 font-medium ${
              tab === t.id ? 'border-accent text-accent' : 'border-transparent text-muted hover:text-ink'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`} tabIndex={0} className="fade-in pt-8" key={current.id}>
        <p className="max-w-[64ch] text-muted">{current.intro}</p>
        {current.flow && (
          <ol className="mt-6 flex flex-col items-stretch gap-1.5 sm:flex-row sm:flex-wrap sm:items-center" aria-label="Flow">
            {current.flow.map((t, i, arr) => (
              <li key={t} className="flex flex-col items-center gap-1.5 sm:flex-row">
                <span className="w-full rounded-md border border-rule bg-surface px-3 py-2 text-center text-[0.9063rem] sm:w-auto">
                  {t}
                </span>
                {i < arr.length - 1 && (
                  <>
                    <ArrowDown aria-hidden size={14} className="text-muted sm:hidden" />
                    <ArrowRight aria-hidden size={14} className="hidden text-muted sm:block" />
                  </>
                )}
              </li>
            ))}
          </ol>
        )}
        <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((c) => (
            <div key={c.name}>
              <dt className="font-medium">{c.name}</dt>
              <dd className="mt-1 text-[0.9687rem] leading-relaxed text-muted">{c.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
