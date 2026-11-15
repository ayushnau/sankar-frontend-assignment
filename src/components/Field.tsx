import type { ReactNode } from 'react'

/**
 * Wraps one form control with its label and error message, and wires the ARIA
 * relationships (`aria-invalid`, `aria-describedby`) that screen readers need
 * to announce the error alongside the field.
 */
export function Field({
  id,
  label,
  error,
  optional,
  children,
}: {
  id: string
  label: string
  error?: string
  optional?: boolean
  children: (props: {
    id: string
    'aria-invalid': boolean
    'aria-describedby'?: string
    className: string
  }) => ReactNode
}) {
  const errorId = `${id}-error`

  const className = `w-full rounded-xl border bg-white px-4 py-3 text-ink transition-colors placeholder:text-slate-400 ${
    error
      ? 'border-red-400 focus:border-red-500'
      : 'border-slate-300 hover:border-slate-400 focus:border-brand-600'
  }`

  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
        {optional && <span className="ml-1 font-normal text-slate-400">(optional)</span>}
      </label>

      {children({
        id,
        'aria-invalid': Boolean(error),
        'aria-describedby': error ? errorId : undefined,
        className,
      })}

      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  )
}
