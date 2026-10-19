import ResourceCard from "./ResourceCard";

export default function ResourceGrid({ recursos }) {
  return (
    <div className="resource-grid">
      {recursos.map((recurso) => (
        <ResourceCard key={recurso.id} recurso={recurso} />
      ))}
    </div>
  );
}
