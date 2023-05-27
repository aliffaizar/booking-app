import React, { useEffect, Suspense, Fragment, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "@/components/partials/header";
import Sidebar from "@/components/partials/sidebar";
import Settings from "@/components/partials/settings";
import useWidth from "@/hooks/useWidth";
import useSidebar from "@/hooks/useSidebar";
import useContentWidth from "@/hooks/useContentWidth";
import useMenulayout from "@/hooks/useMenulayout";
import useMenuHidden from "@/hooks/useMenuHidden";
import Footer from "@/components/partials/footer";
import MobileMenu from "../components/partials/sidebar/MobileMenu";
import useMobileMenu from "@/hooks/useMobileMenu";
import MobileFooter from "@/components/partials/footer/MobileFooter";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Loading from "@/components/Loading";
const Layout = () => {
  const { width, breakpoints } = useWidth();
  const [collapsed] = useSidebar();
  const navigate = useNavigate();

  const switchHeaderClass = () => {
    if (menuType === "horizontal" || menuHidden) {
      return "ltr:ml-0 rtl:mr-0";
    } else if (collapsed) {
      return "ltr:ml-[72px] rtl:mr-[72px]";
    } else {
      return "ltr:ml-[248px] rtl:mr-[248px]";
    }
  };
  // content width
  const [contentWidth] = useContentWidth();
  const [menuType] = useMenulayout();
  const [menuHidden] = useMenuHidden();
  // mobile menu
  const [mobileMenu, setMobileMenu] = useMobileMenu();
  const nodeRef = useRef(null);

  return (
    <>
      <ToastContainer />
      <Header className={width > breakpoints.xl ? switchHeaderClass() : ""} />
      {menuType === "vertical" && width > breakpoints.xl && !menuHidden && (
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
          width > 1280 ? switchHeaderClass() : ""
        }`}
      >
        {/* md:min-h-screen will h-full*/}
        <div className="page-content  md:p-6 p-[15px] page-min-height  ">
          <div
            className={
              contentWidth === "boxed" ? "container mx-auto" : "container-fluid"
            }
          >
            <Suspense fallback={<Loading />}>{<Outlet />}</Suspense>
          </div>
        </div>
      </div>
      {width < breakpoints.md && <MobileFooter />}
      {width > breakpoints.md && (
        <Footer className={width > breakpoints.xl ? switchHeaderClass() : ""} />
      )}
    </>
  );
};

export default Layout;
