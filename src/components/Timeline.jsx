import { TIMELINE } from "../data/timeline";

function tagClass(tag) {
  if (tag === "Problema") return "timeline-tag problema";
  if (tag === "Cambio") return "timeline-tag cambio";
  if (tag === "Integración") return "timeline-tag integracion";
  return "timeline-tag decision";
}

export default function Timeline() {
  return (
    <ol className="timeline">
      {TIMELINE.map((entry, i) => (
        <li key={i} className="timeline-entry">
          <div className="timeline-date">{entry.date}</div>
          <h3 className="timeline-title">{entry.title}</h3>
          <p className="timeline-body">{entry.body}</p>
          <div className="timeline-tags">
            {entry.tags.map((t) => (
              <span key={t} className={tagClass(t)}>
                {t}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
