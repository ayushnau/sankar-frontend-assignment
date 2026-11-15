import { useState } from 'react'
import { PLANS } from '../data/content'
import { Container } from './Container'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

/** Two months free when billed yearly — i.e. pay for 10. */
const YEARLY_MULTIPLIER = 10

/**
 * Prices are authored as display strings ("₹7,500"), so the yearly figure is
 * derived by pulling the digits back out rather than storing two prices per
 * plan. Non-numeric prices like "Custom" pass through untouched.
 */
function formatPrice(price: string, yearly: boolean) {
  if (!yearly) return price

  const amount = Number(price.replace(/[^0-9]/g, ''))
  if (!amount) return price

  return `₹${(amount * YEARLY_MULTIPLIER).toLocaleString('en-IN')}`
}

export function Pricing() {
  const [yearly, setYearly] = useState(false)

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-slate-200 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Pay for the minutes you use"
          description="Every plan includes transcripts, recordings and webhooks. Extra minutes bill at ₹4.50/min, and you can cancel from the dashboard."
        />

        <div className="mt-8 flex items-center justify-center gap-3">
          <span className={yearly ? 'text-muted' : 'font-semibold text-ink'}>Monthly</span>
          <button
            type="button"
            role="switch"
            aria-checked={yearly}
            aria-label="Bill yearly"
            onClick={() => setYearly((on) => !on)}
            className={`relative h-7 w-13 rounded-full transition-colors ${
              yearly ? 'bg-brand-600' : 'bg-slate-300'
            }`}
          >
            <span
              className={`absolute top-1 size-5 rounded-full bg-white shadow transition-transform ${
                yearly ? 'translate-x-7' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={yearly ? 'font-semibold text-ink' : 'text-muted'}>
            Yearly
            <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              2 months free
            </span>
          </span>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                plan.highlighted
                  ? 'border-brand-600 bg-white shadow-2xl shadow-brand-600/10 lg:-mt-4 lg:pb-10'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-7 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold tracking-wide text-white uppercase">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-bold tracking-tight">{plan.name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-relaxed text-muted">{plan.blurb}</p>

              <p className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight">
                  {formatPrice(plan.price, yearly)}
                </span>
                {plan.cadence && (
                  <span className="text-muted">{yearly ? '/year' : plan.cadence}</span>
                )}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`mt-8 block rounded-xl px-5 py-3 text-center font-semibold transition-colors ${
                  plan.highlighted
                    ? 'bg-brand-600 text-white hover:bg-brand-700'
                    : 'border border-slate-300 text-ink hover:bg-slate-50'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
