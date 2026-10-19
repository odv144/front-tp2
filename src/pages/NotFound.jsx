import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Página no encontrada — Equipo Nodos";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="container notfound">
      <span className="eyebrow">Error 404</span>
      <h1 className="notfound-title">Acá no hay nada 🤔</h1>
      <p className="notfound-text">
        La ruta que intentás abrir no existe o todavía no fue construida. Volvé al
        inicio para seguir navegando el sitio del equipo.
      </p>
      <Link className="btn btn-primary" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}
