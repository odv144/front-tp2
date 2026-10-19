function nivelClass(nivel) {
  if (nivel === "Diario") return "badge-nivel nivel-diario";
  if (nivel === "Ocasional") return "badge-nivel nivel-ocasional";
  return "badge-nivel nivel-exploracion";
}

export default function ResourceCard({ recurso }) {
  return (
    <article className="card resource-card">
      <div className="resource-card-head">
        <span className="badge badge-categoria">{recurso.categoria}</span>
        <span className={nivelClass(recurso.nivelUso)}>{recurso.nivelUso}</span>
      </div>
      <h3>{recurso.nombre}</h3>
      <p className="resource-desc">{recurso.descripcion}</p>
      <a
        className="resource-link"
        href={recurso.url}
        target="_blank"
        rel="noreferrer"
      >
        Visitar sitio
        <span aria-hidden="true">↗</span>
      </a>
    </article>
  );
}
