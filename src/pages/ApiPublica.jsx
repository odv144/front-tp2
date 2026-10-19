import { useEffect, useState } from "react";
import StatusBox from "../components/StatusBox";
import ApiGrid from "../components/ApiGrid";

const ENDPOINT = "https://openlibrary.org/subjects/javascript.json?limit=12";

function normalizarObra(work) {
  return {
    id: work.key,
    titulo: work.title,
    autor: work.authors?.[0]?.name || "Autor no especificado",
    anio: work.first_publish_year || "S/D",
    portada: work.cover_id
      ? `https://covers.openlibrary.org/b/id/${work.cover_id}-M.jpg`
      : null,
  };
}

export default function ApiPublica() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    let cancelado = false;

    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const respuesta = await fetch(ENDPOINT);
        if (!respuesta.ok) {
          throw new Error(`La API respondió con el estado ${respuesta.status}.`);
        }
        const json = await respuesta.json();
        const obras = Array.isArray(json.works)
          ? json.works.map(normalizarObra)
          : [];
        if (!cancelado) setData(obras);
      } catch (problema) {
        if (!cancelado) {
          setData([]);
          setError(
            problema instanceof Error
              ? problema.message
              : "No se pudo conectar con la API (error de red)."
          );
        }
      } finally {
        if (!cancelado) setLoading(false);
      }
    }

    fetchData();

    return () => {
      cancelado = true;
    };
  }, [intento]);

  const reintentar = () => setIntento((valor) => valor + 1);

  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">API Externa</span>
            <h2>Obras de JavaScript desde Open Library</h2>
            <p>
              Esta vista consume una API pública desde el navegador para mostrar
              una colección de libros sobre desarrollo web y JavaScript: título,
              autor, año de edición y portada.
            </p>
          </div>

          <div className="api-about">
            <div className="api-about-item">
              <strong>Datos</strong>
              <p>
                Colección de obras bibliográficas sobre desarrollo web y
                JavaScript: título, autor, año de edición y portada.
              </p>
            </div>
            <div className="api-about-item">
              <strong>Origen</strong>
              <p>
                Open Library API (Internet Archive), endpoint abierto{" "}
                <code>/subjects/javascript.json</code> sin necesidad de tokens
                privados ni credenciales, así que nada sensible queda expuesto
                en el cliente.
              </p>
            </div>
            <div className="api-about-item">
              <strong>Propósito</strong>
              <p>
                Demostrar peticiones asíncronas en cliente con{" "}
                <code>fetch</code> y <code>useEffect</code>, y renderizado
                condicional de estados: <code>loading</code> con skeleton,{" "}
                <code>error</code> controlado y reintento manual.
              </p>
            </div>
          </div>

          {loading && (
            <StatusBox
              estado="loading"
              mensaje="Cargando datos desde la API externa..."
            />
          )}

          {!loading && error && (
            <StatusBox
              estado="error"
              mensaje={error}
              onRetry={reintentar}
            />
          )}

          {!loading && !error && data.length === 0 && (
            <div className="empty-state">
              <h3>La API no devolvió obras</h3>
              <p>No hay títulos para mostrar en este momento.</p>
              <button className="btn btn-ghost" type="button" onClick={reintentar}>
                Reintentar conexión
              </button>
            </div>
          )}

          {!loading && !error && data.length > 0 && (
            <>
              <p className="resource-count api-count">
                {data.length} obras recibidas desde la API
              </p>
              <ApiGrid obras={data} />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
