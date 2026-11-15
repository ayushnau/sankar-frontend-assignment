import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view and returns its id, so the header
 * can highlight the matching nav link.
 *
 * Uses IntersectionObserver rather than a scroll listener: the browser does the
 * work off the main thread, so there is nothing to throttle and no layout
 * thrash from reading offsets on every frame.
 *
 * `rootMargin` shrinks the viewport to a horizontal band roughly a third of the
 * way down the screen; a section counts as active once its content crosses that
 * band, which matches what a reader perceives as "the section I'm looking at".
 */
export function useScrollSpy(sectionIds: string[], offset = 80) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) setActiveId(visible[0].target.id)
      },
      { rootMargin: `-${offset}px 0px -65% 0px`, threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds, offset])

  return activeId
}
