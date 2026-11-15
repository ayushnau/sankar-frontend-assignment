import { STATS } from '../data/content'
import { Container } from './Container'
import { Icon } from './Icon'
import { CallCard } from './CallCard'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Decorative background wash. aria-hidden + pointer-events-none so it
          never intercepts clicks or reaches the accessibility tree. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-50 via-white to-white"
      >
        <div className="absolute -top-40 -right-32 size-[32rem] rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute -top-24 -left-40 size-[26rem] rounded-full bg-brand-100/60 blur-3xl" />
      </div>

      <Container className="py-16 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="animate-fade-up">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
              <span className="size-2 rounded-full bg-emerald-500" />
              Now answering calls in 20+ languages
            </p>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Voice agents your customers{' '}
              <span className="text-brand-600">don&rsquo;t hang up on</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Resona builds AI agents that pick up the phone, hold a real conversation, and finish
              the job &mdash; looking up an order, booking a slot, or handing over to a human when
              it matters. Launch your first agent this afternoon.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-700"
              >
                Request a demo
                <Icon name="arrow" className="size-4" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-semibold text-ink transition-colors hover:bg-slate-50"
              >
                See how it works
              </a>
            </div>

            <p className="mt-5 text-sm text-muted">
              14-day free trial &middot; No card required &middot; 200 free minutes
            </p>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <CallCard />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-slate-200 pt-10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl font-extrabold tracking-tight text-ink">
                  {stat.value}
                </span>
                <span className="mt-1 block text-sm text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
