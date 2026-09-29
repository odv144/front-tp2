import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav">
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-mark">N</span>
          <span className="brand-text">Equipo Nodos</span>
        </NavLink>

        <ul className={`nav-links ${menuOpen ? "is-open" : ""}`}>
          <li>
            <NavLink to="/" end onClick={closeMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/#equipo" onClick={closeMenu}>
              Equipo
            </NavLink>
          </li>
          <li>
            <NavLink to="/bitacora" onClick={closeMenu}>
              Bitácora
            </NavLink>
          </li>
        </ul>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <button
            className="nav-toggle-mobile"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            ☰
          </button>
        </div>
      </nav>
    </header>
  );
}
