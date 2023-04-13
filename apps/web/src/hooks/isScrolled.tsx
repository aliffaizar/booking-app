'use client'

import { RefObject, useEffect } from 'react'

export function useIsScrolled(ref: RefObject<HTMLElement>, offset: number) {
  useEffect(() => {
    const element = ref?.current
    const handleScroll = () => {
      if (window.scrollY > offset) {
        element?.classList.add('scrolled-header')
      } else {
        element?.classList.remove('scrolled-header')
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [ref, offset])
}
