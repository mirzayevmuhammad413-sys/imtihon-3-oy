import { Outlet, useLocation } from "react-router-dom";
import Header from './header/Header'
import Footer from './footer/Footer'

export default function SiteFrame() {
  const { pathname } = useLocation();
  const authPage = pathname === "/login" || pathname === "/signup";
  return (
    <>
      {!authPage && <Header />}
      <div className="page-shell">
        <Outlet />
      </div>
      {!authPage && <Footer />}
    </>
  );
}
