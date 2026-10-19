import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <nav className="nav">
        <NavLink to="/" className="brand">
          <span className="brand-mark">N</span>
          <span className="brand-text">Equipo Nodos</span>
        </NavLink>

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
        </div>
      </nav>
    </header>
  );
}
