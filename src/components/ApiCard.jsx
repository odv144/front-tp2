export default function ApiCard({ country }) {
  const capital = country.capital?.[0] ?? "—";
  const poblacion = new Intl.NumberFormat("es-AR").format(country.population);

  return (
    <article className="card api-card">
      <img
        className="api-flag"
        src={country.flags?.png ?? country.flags?.svg}
        alt={`Bandera de ${country.name.common}`}
        loading="lazy"
      />
      <div className="api-card-body">
        <h3>{country.name.common}</h3>
        <p className="api-meta">
          <span>Capital</span>
          {capital}
        </p>
        <p className="api-meta">
          <span>Población</span>
          {poblacion} hab.
        </p>
      </div>
    </article>
  );
}
