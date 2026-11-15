import { STEPS, USE_CASES } from '../data/content'
import { Container } from './Container'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="How it works"
              title="Three steps from prompt to a ringing phone"
              description="No infrastructure to provision and no model to fine-tune. Teams usually take their first live call on day one."
            />

            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="font-semibold">What teams point it at</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {USE_CASES.map((useCase) => (
                  <li
                    key={useCase}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-muted"
                  >
                    {useCase}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ordered list doubles as the visual timeline: the vertical rule is a
              left border on each item, so steps stay connected at any height. */}
          <ol className="relative space-y-8">
            {STEPS.map((step, index) => (
              <li key={step.title} className="relative flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 font-bold text-white">
                    {index + 1}
                  </span>
                  {index < STEPS.length - 1 && (
                    <span aria-hidden="true" className="mt-2 w-px grow bg-slate-300" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="text-lg font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xl font-bold tracking-tight">Want to hear one for yourself?</p>
            <p className="mt-1 text-slate-300">
              Book a 20-minute call and we&rsquo;ll let an agent run your own script.
            </p>
          </div>
          <a
            href="#demo"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-slate-100"
          >
            Request a demo
            <Icon name="arrow" className="size-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}
