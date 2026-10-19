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
        <svg
          className="brand-mark"
          viewBox="0 0 16 16"
          shapeRendering="crispEdges"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="16" height="16" rx="2" fill="#161b22" />
          <g fill="#00ff66">
            <rect x="4" y="4" width="2" height="8" />
            <rect x="6" y="6" width="2" height="2" />
            <rect x="8" y="8" width="2" height="2" />
            <rect x="10" y="4" width="2" height="8" />
          </g>
        </svg>
        <span className="sidebar-title">
          Nodos <span className="sidebar-subtitle">· Front End Team</span>
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
