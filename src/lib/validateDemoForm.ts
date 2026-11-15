export type DemoFormValues = {
  name: string
  email: string
  company: string
  volume: string
  message: string
}

export type DemoFormErrors = Partial<Record<keyof DemoFormValues, string>>

export const EMPTY_DEMO_FORM: DemoFormValues = {
  name: '',
  email: '',
  company: '',
  volume: '',
  message: '',
}

/**
 * Deliberately permissive: one @, something either side, a dot in the domain.
 * Stricter regexes reject valid addresses far more often than they catch typos,
 * and the only authority on an address is whether mail to it is delivered.
 */
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * Pure validation, kept out of the component so the rules can be read (and
 * tested) on their own. Returns one message per invalid field; an empty object
 * means the form is submittable.
 */
export function validateDemoForm(values: DemoFormValues): DemoFormErrors {
  const errors: DemoFormErrors = {}

  const name = values.name.trim()
  if (!name) errors.name = 'Please tell us your name.'
  else if (name.length < 2) errors.name = 'That looks too short — please enter your full name.'

  const email = values.email.trim()
  if (!email) errors.email = 'We need an email to send the invite to.'
  else if (!EMAIL_PATTERN.test(email)) errors.email = 'That doesn’t look like a valid email address.'

  if (!values.company.trim()) errors.company = 'Please tell us where you work.'

  if (!values.volume) errors.volume = 'Pick the range closest to your call volume.'

  const message = values.message.trim()
  if (message && message.length < 10) {
    errors.message = 'Add a little more detail, or leave this blank.'
  }

  return errors
}
