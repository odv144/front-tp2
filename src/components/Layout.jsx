import { useState, useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const { pathname } = useLocation();

  const alternarMenu = () => setMenuAbierto((valor) => !valor);
  const cerrarMenu = () => setMenuAbierto(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.querySelector(".app-main").scrollTop = 0;
    document.querySelector(".sidebar").scrollTop = 0;
  }, [pathname]);

  return (
    <div className="app-layout">
      <Sidebar abierto={menuAbierto} onNavigate={cerrarMenu} />

      <div className="app-main">
        <Header menuAbierto={menuAbierto} onToggleMenu={alternarMenu} />
        <Outlet />
        <Footer />
      </div>

      {menuAbierto && (
        <button
          className="sidebar-backdrop"
          type="button"
          aria-label="Cerrar menú"
          onClick={cerrarMenu}
        />
      )}
    </div>
  );
}
