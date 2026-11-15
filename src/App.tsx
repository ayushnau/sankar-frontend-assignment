import { DemoForm } from './components/DemoForm'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Navbar } from './components/Navbar'
import { Pricing } from './components/Pricing'

/**
 * The page is a flat list of sections in document order. Each section owns its
 * own anchor id and vertical padding, so App stays a table of contents and
 * sections can be reordered without touching their internals.
 */
export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2 focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <DemoForm />
      </main>

      <Footer />
    </>
  )
}
