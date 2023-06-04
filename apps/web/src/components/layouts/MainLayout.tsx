import { ReactNode } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div id="main-layout" className="text-gray-700">
      <Header />
      <hr className="h-px w-screen bg-slate-400 border-0"></hr>
      {children}
      <Footer />
    </div>
  )
}
