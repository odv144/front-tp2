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
          viewBox="0 0 32 32"
          shapeRendering="crispEdges"
          aria-hidden="true"
          focusable="false"
        >
          <rect width="32" height="32" rx="4" fill="#0b0f12" />
          <g fill="#00ff66">
            <rect x="8" y="8" width="4" height="16" />
            <rect x="12" y="12" width="4" height="4" />
            <rect x="16" y="16" width="4" height="4" />
            <rect x="20" y="8" width="4" height="16" />
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
