import { NavLink } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Inicio", end: true },
  { to: "/recursos", label: "Recursos" },
  { to: "/api-publica", label: "API Externa" },
  { to: "/arbol", label: "Árbol de Componentes" },
  { to: "/bitacora", label: "Bitácora" },
];

export default function Sidebar({ abierto = false, onNavigate }) {
  return (
    <aside className={`sidebar ${abierto ? "open" : ""}`}>
      <div className="sidebar-brand">
        <span className="brand-mark">N</span>
        <span className="sidebar-title">
          Nodos <span className="sidebar-subtitle">· Front End</span>
        </span>
      </div>

      <nav className="sidebar-nav" id="sidebar-nav" aria-label="Navegación principal">
        {LINKS.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} onClick={onNavigate}>
            {label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
