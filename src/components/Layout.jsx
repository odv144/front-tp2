import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const alternarMenu = () => setMenuAbierto((valor) => !valor);
  const cerrarMenu = () => setMenuAbierto(false);

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
