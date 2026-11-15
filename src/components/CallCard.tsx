import { Icon } from './Icon'

/** Heights of the animated waveform bars, in rem-ish Tailwind units. */
const BARS = [10, 18, 28, 20, 34, 24, 14, 26, 18, 30, 12, 22]

const TRANSCRIPT = [
  { speaker: 'caller' as const, text: 'Hi, my order was supposed to arrive yesterday.' },
  {
    speaker: 'agent' as const,
    text: 'I can check that. Is it the order ending 4471, placed on Tuesday?',
  },
  { speaker: 'caller' as const, text: 'हाँ, वही है.' },
  {
    speaker: 'agent' as const,
    text: 'मिल गया — यह आज शाम 6 बजे तक पहुँच जाएगा. क्या मैं आपको SMS भेज दूँ?',
  },
]

/**
 * The hero illustration: a mock "live call" panel. Built from markup and CSS
 * rather than an image so it stays sharp at any size, reflows on mobile, and
 * adds nothing to the page weight.
 */
export function CallCard() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/10 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-brand-50 text-brand-600">
              <Icon name="phone" />
            </span>
            <div>
              <p className="font-semibold">Support agent &middot; Nisha</p>
              <p className="text-sm text-muted">+91 80 4718 2200</p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold whitespace-nowrap text-emerald-700">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500" />
            Live 01:12
          </span>
        </div>

        <div
          aria-hidden="true"
          className="mt-5 flex h-16 items-center justify-center gap-1 rounded-xl bg-slate-50 px-4"
        >
          {BARS.map((height, index) => (
            <span
              key={index}
              className="animate-wave w-1.5 rounded-full bg-brand-500/80"
              style={{ height: `${height}px`, animationDelay: `${index * 90}ms` }}
            />
          ))}
        </div>

        <ul className="mt-5 space-y-3">
          {TRANSCRIPT.map((line, index) => (
            <li
              key={index}
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                line.speaker === 'agent'
                  ? 'ml-auto bg-brand-600 text-white'
                  : 'bg-slate-100 text-ink'
              }`}
            >
              {line.text}
            </li>
          ))}
        </ul>

        <p className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 text-xs text-muted">
          <span>Detected: Hindi &rarr; switched mid-call</span>
          <span>Latency 680 ms</span>
        </p>
      </div>
    </div>
  )
}
