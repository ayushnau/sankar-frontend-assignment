type IconName =
  | 'bolt'
  | 'globe'
  | 'graph'
  | 'shield'
  | 'plug'
  | 'route'
  | 'check'
  | 'menu'
  | 'close'
  | 'phone'
  | 'mail'
  | 'pin'
  | 'arrow'

type IconProps = {
  name: IconName
  className?: string
}

/**
 * Inline SVG registry. Keeping the paths in one place means no icon font or
 * third-party icon package has to be shipped, and every icon inherits the
 * surrounding text colour via `currentColor`.
 */
const PATHS: Record<IconName, React.ReactNode> = {
  bolt: <path d="M13 2 4.5 13H11l-1 9 8.5-11H12l1-9Z" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18" />
    </>
  ),
  graph: <path d="M4 19V5m0 14h16M8 15l3.5-4.5 3 3L20 7" />,
  shield: <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Zm-2.5 9 2 2 3.5-4" />,
  plug: <path d="M9 3v6m6-6v6M6 9h12v2a6 6 0 0 1-6 6 6 6 0 0 1-6-6V9Zm6 11v2" />,
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M6 8.5v4a3 3 0 0 0 3 3h3a3 3 0 0 1 3 3v0" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  phone: (
    <path d="M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2L21 15v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
}

export function Icon({ name, className = 'size-5' }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  )
}
