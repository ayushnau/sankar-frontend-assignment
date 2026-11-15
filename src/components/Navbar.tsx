import { useEffect, useState } from 'react'
import { BRAND, NAV_LINKS } from '../data/content'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Container } from './Container'
import { Icon } from './Icon'

/** Computed once at module scope so the hook's effect doesn't re-run each render. */
const SECTION_IDS = NAV_LINKS.map((link) => link.id)

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  // Drop a border and a shadow onto the header once the page has moved, so it
  // reads as floating above the content rather than part of the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu if the viewport grows past the breakpoint where the
  // full nav reappears — otherwise the panel stays mounted but invisible.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const onChange = () => mq.matches && setMenuOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 bg-white/85 backdrop-blur-md transition-shadow ${
        scrolled ? 'border-b border-slate-200 shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between gap-4" aria-label="Main">
          <a href="#top" className="flex items-center gap-2.5 font-extrabold tracking-tight">
            <span
              aria-hidden="true"
              className="grid size-9 place-items-center rounded-xl bg-brand-600 text-white"
            >
              <Icon name="bolt" className="size-5" />
            </span>
            <span className="text-lg">{BRAND.name}</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeId === link.id
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-muted hover:text-ink'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#demo"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-muted transition-colors hover:text-ink"
            >
              Sign in
            </a>
            <a
              href="#demo"
              className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Get started
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid size-10 place-items-center rounded-lg border border-slate-200 text-ink md:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </nav>
      </Container>

      {menuOpen && (
        <div id="mobile-menu" className="border-t border-slate-200 bg-white md:hidden">
          <Container className="py-3">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg px-2 py-3 font-medium text-muted hover:bg-slate-50 hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="mt-2 mb-2 block rounded-lg bg-brand-600 px-4 py-3 text-center font-semibold text-white"
            >
              Get started
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}
