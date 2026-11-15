import { BRAND, NAV_LINKS } from '../data/content'
import { Container } from './Container'
import { Icon } from './Icon'

/** Read once at module load — calling Date() during render is impure. */
const CURRENT_YEAR = new Date().getFullYear()

const FOOTER_COLUMNS = [
  { heading: 'Product', links: ['Voice agents', 'Flow builder', 'Phone numbers', 'Analytics'] },
  { heading: 'Company', links: ['About', 'Careers', 'Blog', 'Status'] },
  { heading: 'Legal', links: ['Privacy', 'Terms', 'Security', 'DPA'] },
]

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-extrabold tracking-tight">
              <span
                aria-hidden="true"
                className="grid size-9 place-items-center rounded-xl bg-brand-600 text-white"
              >
                <Icon name="bolt" className="size-5" />
              </span>
              <span className="text-lg">{BRAND.name}</span>
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-muted">{BRAND.tagline}.</p>
            <p className="mt-4 text-sm text-muted">{BRAND.address}</p>
            <a
              href={`mailto:${BRAND.email}`}
              className="mt-1 block text-sm font-medium text-brand-700 hover:underline"
            >
              {BRAND.email}
            </a>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="text-sm font-bold tracking-wide uppercase">{column.heading}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#top" className="text-muted transition-colors hover:text-ink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            &copy; {CURRENT_YEAR} {BRAND.name} Technologies. Demo project built for the
            Sankar Group front-end assignment.
          </p>
          <ul className="flex flex-wrap gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
