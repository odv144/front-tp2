import { useState } from "react";
import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/recursos", label: "Recursos" },
  { to: "/api-publica", label: "API Externa" },
  { to: "/arbol", label: "Árbol de Componentes" },
  { to: "/bitacora", label: "Bitácora" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-brand">
        <span className="brand-mark">N</span>
        <span className="sidebar-title">
          Nodos <span className="sidebar-subtitle">· Front End</span>
        </span>
        <button
          className="mobile-toggle"
          type="button"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="sidebar-nav"
          onClick={() => setIsOpen((o) => !o)}
        >
          ☰
        </button>
      </div>

      <nav className="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">
        {LINKS.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} onClick={closeMenu}>
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
