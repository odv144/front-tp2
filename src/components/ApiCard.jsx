import { useState } from "react";

function iniciales(titulo) {
  return titulo.trim().slice(0, 3).toUpperCase();
}

export default function ApiCard({ obra }) {
  const [portadaOk, setPortadaOk] = useState(Boolean(obra.portada));

  return (
    <article className="card api-card">
      {portadaOk ? (
        <img
          className="api-cover"
          src={obra.portada}
          alt={`Portada de ${obra.titulo}`}
          loading="lazy"
          onError={() => setPortadaOk(false)}
        />
      ) : (
        <div className="api-cover api-cover-placeholder" aria-hidden="true">
          <span>{iniciales(obra.titulo)}</span>
        </div>
      )}

      <div className="api-card-body">
        <h3>{obra.titulo}</h3>
        <p className="api-meta">
          <span>Autor</span>
          {obra.autor}
        </p>
        <p className="api-meta">
          <span>Año</span>
          {obra.anio}
        </p>
      </div>
    </article>
  );
}
