import type { ReactNode } from 'react'

/**
 * The single horizontal rhythm for the page: one max width and one set of
 * responsive gutters, so no section invents its own padding.
 */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}
