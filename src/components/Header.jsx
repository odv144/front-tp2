import { useTheme } from "../hooks/useTheme";

export default function Header({ menuAbierto = false, onToggleMenu }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <nav className="nav">
        <button
          className="mobile-toggle"
          type="button"
          aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuAbierto}
          aria-controls="sidebar-nav"
          onClick={onToggleMenu}
        >
          ☰
        </button>

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
