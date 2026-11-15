import { FEATURES } from '../data/content'
import { Container } from './Container'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-slate-200 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything a phone line needs, minus the phone system"
          description="Resona handles the speech, the reasoning and the telephony as one product, so you configure an agent instead of stitching four vendors together."
        />

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl hover:shadow-slate-900/5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <Icon name={feature.icon} className="size-5.5" />
              </span>
              <h3 className="mt-5 text-lg font-bold tracking-tight">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
