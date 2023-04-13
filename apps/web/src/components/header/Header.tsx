import { useIsScrolled } from '@/hooks/isScrolled'
import Link from 'next/link'
import { useRef } from 'react'

export default function Header() {
  const headerRef = useRef<HTMLElement>(null)
  useIsScrolled(headerRef, 64)
  return (
    <header ref={headerRef} className='header'>
      <div className='flex items-center justify-between h-16'>
        <Link href='/' className='brand-logo'>
          Booking App
        </Link>
        <nav>
          <Link href='/'>Home </Link>
        </nav>
      </div>
    </header>
  )
}
