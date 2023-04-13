import { ReactNode } from 'react'
import Header from '../header/Header'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className='text-gray-700'>
      <Header />
      {children}
    </div>
  )
}
