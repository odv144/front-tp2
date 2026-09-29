import { Link } from "react-router-dom";

export default function Footer({ showBack = false }) {
  return (
    <footer className="site-footer">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          width: "100%",
        }}
      >
        <span>Equipo Nodos · TP1 Front End · 2026</span>
        {showBack ? (
          <Link to="/">← Volver a la portada</Link>
        ) : (
          <span>Hecho con React + Vite</span>
        )}
      </div>
    </footer>
  );
}
