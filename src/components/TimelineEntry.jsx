function tagClass(tag) {
  if (tag === "Problema") return "timeline-tag problema";
  if (tag === "Cambio") return "timeline-tag cambio";
  if (tag === "Integración") return "timeline-tag integracion";
  if (tag === "Diseño") return "timeline-tag diseno";
  return "timeline-tag decision";
}

export default function TimelineEntry({ entry }) {
  return (
    <li className="timeline-entry">
      <div className="timeline-date">{entry.date}</div>
      <h3 className="timeline-title">{entry.title}</h3>
      <p className="timeline-body">{entry.body}</p>
      <div className="timeline-tags">
        {entry.tags.map((tag) => (
          <span key={tag} className={tagClass(tag)}>
            {tag}
          </span>
        ))}
      </div>
    </li>
  );
}
