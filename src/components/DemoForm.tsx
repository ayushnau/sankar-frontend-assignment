import { useRef, useState, type FormEvent } from 'react'
import { BRAND } from '../data/content'
import {
  EMPTY_DEMO_FORM,
  validateDemoForm,
  type DemoFormErrors,
  type DemoFormValues,
} from '../lib/validateDemoForm'
import { Container } from './Container'
import { Field } from './Field'
import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'

const VOLUMES = [
  'Under 1,000 calls / month',
  '1,000 – 10,000 calls / month',
  '10,000 – 100,000 calls / month',
  'Over 100,000 calls / month',
]

const CONTACT_DETAILS = [
  { icon: 'mail' as const, label: 'Email', value: BRAND.email, href: `mailto:${BRAND.email}` },
  {
    icon: 'phone' as const,
    label: 'Phone',
    value: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
  },
  { icon: 'pin' as const, label: 'Office', value: BRAND.address },
]

export function DemoForm() {
  const [values, setValues] = useState<DemoFormValues>(EMPTY_DEMO_FORM)
  const [errors, setErrors] = useState<DemoFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [pending, setPending] = useState(false)
  const statusRef = useRef<HTMLDivElement>(null)

  function update(field: keyof DemoFormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))

    // Clear a field's error as soon as the user edits it. Re-validating the
    // whole form on every keystroke would flag fields they haven't reached yet.
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validateDemoForm(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      // Move focus to the first invalid control so keyboard and screen-reader
      // users land on the problem instead of hunting for it.
      const firstInvalid = Object.keys(nextErrors)[0]
      document.getElementById(firstInvalid)?.focus()
      return
    }

    // No backend in this assignment — the short delay stands in for a network
    // round trip so the pending state is visible rather than instantaneous.
    setPending(true)
    await new Promise((resolve) => setTimeout(resolve, 700))
    setPending(false)
    setSubmitted(true)
  }

  function reset() {
    setValues(EMPTY_DEMO_FORM)
    setErrors({})
    setSubmitted(false)
  }

  return (
    <section id="demo" className="scroll-mt-20 bg-slate-50 py-20 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Book a demo"
              description="Tell us what you'd want an agent to handle. We'll build a working version of it and walk you through the call on a 20-minute screen share."
            />

            <ul className="mt-10 space-y-5">
              {CONTACT_DETAILS.map((detail) => (
                <li key={detail.label} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-slate-200 bg-white text-brand-600">
                    <Icon name={detail.icon} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-muted">{detail.label}</p>
                    {detail.href ? (
                      <a href={detail.href} className="font-medium hover:text-brand-700">
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-medium">{detail.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* aria-live so the success message is announced when it replaces the
              form, not just rendered silently. */}
          <div ref={statusRef} aria-live="polite">
            {submitted ? (
              <div className="animate-fade-up rounded-2xl border border-emerald-200 bg-white p-8 text-center sm:p-12">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-600">
                  <Icon name="check" className="size-7" />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold tracking-tight">
                  Thanks, {values.name.trim().split(' ')[0]} — you&rsquo;re on the list
                </h3>
                <p className="mx-auto mt-3 max-w-md leading-relaxed text-muted">
                  We&rsquo;ve sent a confirmation to{' '}
                  <span className="font-semibold text-ink">{values.email.trim()}</span>. A solutions
                  engineer will reach out within one working day to book the call.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-7 rounded-xl border border-slate-300 px-5 py-3 font-semibold transition-colors hover:bg-slate-50"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                noValidate
                onSubmit={handleSubmit}
                className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full name" error={errors.name}>
                    {(props) => (
                      <input
                        {...props}
                        type="text"
                        autoComplete="name"
                        placeholder="Ananya Rao"
                        value={values.name}
                        onChange={(event) => update('name', event.target.value)}
                      />
                    )}
                  </Field>

                  <Field id="email" label="Work email" error={errors.email}>
                    {(props) => (
                      <input
                        {...props}
                        type="email"
                        autoComplete="email"
                        placeholder="ananya@company.com"
                        value={values.email}
                        onChange={(event) => update('email', event.target.value)}
                      />
                    )}
                  </Field>

                  <Field id="company" label="Company" error={errors.company}>
                    {(props) => (
                      <input
                        {...props}
                        type="text"
                        autoComplete="organization"
                        placeholder="Northwind Logistics"
                        value={values.company}
                        onChange={(event) => update('company', event.target.value)}
                      />
                    )}
                  </Field>

                  <Field id="volume" label="Monthly call volume" error={errors.volume}>
                    {(props) => (
                      <select
                        {...props}
                        value={values.volume}
                        onChange={(event) => update('volume', event.target.value)}
                        className={`${props.className} ${values.volume ? '' : 'text-slate-400'}`}
                      >
                        <option value="">Select a range</option>
                        {VOLUMES.map((volume) => (
                          <option key={volume} value={volume} className="text-ink">
                            {volume}
                          </option>
                        ))}
                      </select>
                    )}
                  </Field>

                  <div className="sm:col-span-2">
                    <Field id="message" label="What should the agent handle?" error={errors.message} optional>
                      {(props) => (
                        <textarea
                          {...props}
                          rows={4}
                          placeholder="Chasing delivery updates for about 400 orders a day, in Hindi and English."
                          value={values.message}
                          onChange={(event) => update('message', event.target.value)}
                          className={`${props.className} resize-y`}
                        />
                      )}
                    </Field>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {pending ? 'Sending…' : 'Request a demo'}
                  {!pending && <Icon name="arrow" className="size-4" />}
                </button>

                <p className="mt-4 text-center text-sm text-muted">
                  No sales sequence. We reply once, from a real person.
                </p>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
