/**
 * All page copy lives here, separate from the components that render it.
 * Sections map 1:1 to nav links, so the header and the scroll-spy hook can
 * both derive from NAV_LINKS instead of repeating a hard-coded list.
 */

export type NavLink = { id: string; label: string }

export const NAV_LINKS: NavLink[] = [
  { id: 'features', label: 'Features' },
  { id: 'how-it-works', label: 'How it works' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'demo', label: 'Contact' },
]

export const BRAND = {
  name: 'Resona',
  tagline: 'AI voice agents for real conversations',
  email: 'hello@resona.ai',
  phone: '+91 80 4718 2200',
  address: 'Indiranagar, Bengaluru 560038',
}

export type Feature = {
  title: string
  description: string
  /** Key into the Icon component's registry. */
  icon: 'bolt' | 'globe' | 'graph' | 'shield' | 'plug' | 'route'
}

export const FEATURES: Feature[] = [
  {
    icon: 'bolt',
    title: 'Sub-second responses',
    description:
      'Streaming speech-to-text, LLM and text-to-speech run as one pipeline, so the agent answers in about 700 ms — fast enough that callers stop noticing it is software.',
  },
  {
    icon: 'globe',
    title: '20+ languages, mid-call',
    description:
      'Language detection switches the agent the moment a caller does, including code-mixed Hindi-English. No separate agent per language, no menu to press 2.',
  },
  {
    icon: 'route',
    title: 'Visual flow builder',
    description:
      'Drag conversation states onto a canvas and describe the transitions in plain English. A routing model picks the branch at runtime — no decision trees to maintain.',
  },
  {
    icon: 'plug',
    title: 'Tools and transfers',
    description:
      'Agents call your APIs mid-conversation to look up an order or book a slot, and hand off to a human the second a caller asks for one.',
  },
  {
    icon: 'graph',
    title: 'Transcripts and analytics',
    description:
      'Every call ships with a transcript, a recording, latency and cost breakdowns, and a webhook so your own systems stay in sync.',
  },
  {
    icon: 'shield',
    title: 'Compliant by default',
    description:
      'SOC 2 Type II, DPDP-ready data residency in India, redaction of card and Aadhaar numbers before anything is written to storage.',
  },
]

export type Step = { title: string; description: string }

export const STEPS: Step[] = [
  {
    title: 'Describe the agent',
    description:
      'Write the prompt in plain language, pick a voice, and map the conversation states on the canvas. Most teams have a working draft inside an hour.',
  },
  {
    title: 'Connect a number',
    description:
      'Buy a number from us or bring your own SIP trunk. Point an inbound number at the agent, or trigger outbound calls through the API in a single POST.',
  },
  {
    title: 'Watch it answer',
    description:
      'Calls stream into the dashboard live. Read the transcript, listen to the recording, and tweak the prompt — changes go out without a redeploy.',
  },
]

export type Plan = {
  name: string
  price: string
  cadence: string
  blurb: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export const PLANS: Plan[] = [
  {
    name: 'Starter',
    price: '₹7,500',
    cadence: '/month',
    blurb: 'For the first agent in production and the pilot that proves it works.',
    features: [
      '1,500 call minutes included',
      'Up to 3 concurrent calls',
      '5 voice agents',
      'Transcripts, recordings and webhooks',
      'Email support',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Growth',
    price: '₹32,000',
    cadence: '/month',
    blurb: 'For support and sales teams running calls every day, at volume.',
    features: [
      '10,000 call minutes included',
      'Up to 25 concurrent calls',
      'Unlimited voice agents',
      'Visual flow builder and API tools',
      'Warm transfer to human agents',
      'Priority support, 4-hour response',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    blurb: 'For regulated teams that need their own region, trunk and paperwork.',
    features: [
      'Volume pricing on minutes',
      'Unlimited concurrency',
      'Dedicated region and BYO SIP trunk',
      'SSO, audit logs, custom DPA',
      'Named solutions engineer',
    ],
    cta: 'Talk to sales',
  },
]

export const STATS = [
  { value: '~700 ms', label: 'median response time' },
  { value: '20+', label: 'languages supported' },
  { value: '4.2 M', label: 'calls handled monthly' },
  { value: '99.95%', label: 'platform uptime' },
]

export const USE_CASES = [
  'Order and delivery status',
  'Loan collections reminders',
  'Lead qualification',
  'Appointment booking',
  'Post-service feedback',
  'KYC document follow-ups',
]
