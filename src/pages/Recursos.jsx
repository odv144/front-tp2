import { useMemo, useState } from "react";
import recursos from "../data/recursos.json";
import ResourceGrid from "../components/ResourceGrid";

export default function Recursos() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  const categorias = useMemo(
    () => ["Todas", ...new Set(recursos.map((recurso) => recurso.categoria))],
    []
  );

  const resultados = useMemo(() => {
    const termino = busqueda.trim().toLowerCase();
    return recursos.filter((recurso) => {
      const porCategoria =
        categoria === "Todas" || recurso.categoria === categoria;
      const porTexto =
        termino === "" ||
        recurso.nombre.toLowerCase().includes(termino) ||
        recurso.descripcion.toLowerCase().includes(termino);
      return porCategoria && porTexto;
    });
  }, [busqueda, categoria]);

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
  };

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">cat /recursos</span>
            <h2>Stack y herramientas del equipo</h2>
            <p>
              {recursos.length} recursos del ecosistema frontend, estilos, testing
              y devops que usamos a diario o estamos explorando. Buscá por nombre
              o descripción y filtrá por categoría: el listado se actualiza al
              instante.
            </p>
          </div>

          <div className="resource-filters">
            <div className="field field-grow">
              <label className="field-label" htmlFor="busqueda-recursos">
                Búsqueda libre
              </label>
              <input
                id="busqueda-recursos"
                className="resource-search"
                type="search"
                placeholder="Ej: react, linter, despliegue…"
                value={busqueda}
                onChange={(event) => setBusqueda(event.target.value)}
              />
            </div>

            <div className="field">
              <label className="field-label" htmlFor="categoria-recursos">
                Categoría
              </label>
              <select
                id="categoria-recursos"
                className="resource-select"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
              >
                {categorias.map((opcion) => (
                  <option key={opcion} value={opcion}>
                    {opcion}
                  </option>
                ))}
              </select>
            </div>

            <p className="resource-count" role="status" aria-live="polite">
              Mostrando {resultados.length} de {recursos.length} recursos
            </p>
          </div>

          {resultados.length === 0 ? (
            <div className="empty-state">
              <h3>No se encontraron recursos que coincidan</h3>
              <p>
                Probá con otro término de búsqueda o volvé a seleccionar todas
                las categorías.
              </p>
              <button className="btn btn-ghost" type="button" onClick={limpiarFiltros}>
                Limpiar filtros
              </button>
            </div>
          ) : (
            <ResourceGrid recursos={resultados} />
          )}
        </div>
      </section>
    </main>
  );
}
