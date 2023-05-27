import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import Header from '@/components/partials/header'
import Sidebar from '@/components/partials/sidebar'
import Settings from '@/components/partials/settings'
import useWidth from '@/hooks/useWidth'
import useSidebar from '@/hooks/useSidebar'
import useContentWidth from '@/hooks/useContentWidth'
import useMenulayout from '@/hooks/useMenulayout'
import useMenuHidden from '@/hooks/useMenuHidden'
import Footer from '@/components/partials/footer'
import MobileMenu from '../components/partials/sidebar/MobileMenu'
import useMobileMenu from '@/hooks/useMobileMenu'
import MobileFooter from '@/components/partials/footer/MobileFooter'

import Loading from '@/components/Loading'
const Layout = () => {
  const [mobileMenu, setMobileMenu] = useMobileMenu()
  const { width, breakpoints } = useWidth()
  const [contentWidth] = useContentWidth()
  const [menuHidden] = useMenuHidden()
  const [menuType] = useMenulayout()
  const [collapsed] = useSidebar()

  const switchHeaderClass = () => {
    if (menuType === 'horizontal' || menuHidden) {
      return 'ltr:ml-0 rtl:mr-0'
    } else if (collapsed) {
      return 'ltr:ml-[72px] rtl:mr-[72px]'
    } else {
      return 'ltr:ml-[248px] rtl:mr-[248px]'
    }
  }

  return (
    <>
      <ToastContainer />
      <Header className={width > breakpoints.xl ? switchHeaderClass() : ''} />
      {menuType === 'vertical' && width > breakpoints.xl && !menuHidden && (
        <Sidebar />
      )}

      {width < breakpoints.xl && mobileMenu && <MobileMenu />}
      {/* mobile menu overlay*/}
      {width < breakpoints.xl && mobileMenu && (
        <div
          className="overlay bg-slate-900/50 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-[999]"
          onClick={() => setMobileMenu(false)}
        ></div>
      )}
      <Settings />
      <div
        className={`content-wrapper transition-all duration-150 ${
          width > 1280 ? switchHeaderClass() : ''
        }`}
      >
        {/* md:min-h-screen will h-full*/}
        <div className="page-content  md:p-6 p-[15px] page-min-height  ">
          <div
            className={
              contentWidth === 'boxed' ? 'container mx-auto' : 'container-fluid'
            }
          >
            <Suspense fallback={<Loading />}>{<Outlet />}</Suspense>
          </div>
        </div>
      </div>
      {width < breakpoints.md && <MobileFooter />}
      {width > breakpoints.md && (
        <Footer className={width > breakpoints.xl ? switchHeaderClass() : ''} />
      )}
    </>
  )
}

export default Layout
