import { ArrowUpRight, Smartphone } from 'lucide-react'
import { appLinks, repositories } from '../../data/apps'
import { isPlaceholder } from '../../lib/content'
import { GithubIcon } from '../ui/BrandIcons'
import { Placeholder } from '../ui/Placeholder'
import { Section } from '../ui/Section'

type Item = { name: string; description: string; href: string }

function LinkRow({ item }: { item: Item }) {
  const hasLink = !isPlaceholder(item.href)
  return (
    <li className={`rounded-lg border p-4 ${hasLink ? 'border-rule bg-surface' : 'border-dashed border-rule'}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        {hasLink ? (
          <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium hover:underline">
            {item.name}
            <ArrowUpRight size={15} aria-hidden />
          </a>
        ) : isPlaceholder(item.name) ? (
          <Placeholder text={item.name} />
        ) : (
          <span className="font-medium">{item.name}</span>
        )}
        {!hasLink && !isPlaceholder(item.name) && item.href && <Placeholder text={item.href} />}
      </div>
      <p className="mt-1.5 text-[0.9375rem] text-muted">{item.description}</p>
    </li>
  )
}

export function AppsCode() {
  return (
    <Section id="apps" title="Apps & code" intro={<p>Where to see the work. Links appear once they’re public.</p>}>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="flex items-center gap-2 font-medium">
            <Smartphone size={18} aria-hidden />
            On Google Play
          </h3>
          <ul className="mt-4 space-y-3">
            {appLinks.map((a) => (
              <LinkRow key={a.name} item={a} />
            ))}
          </ul>
        </div>
        <div>
          <h3 className="flex items-center gap-2 font-medium">
            <GithubIcon size={18} />
            Code samples
          </h3>
          <ul className="mt-4 space-y-3">
            {repositories.map((r, i) => (
              <LinkRow key={i} item={r} />
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
