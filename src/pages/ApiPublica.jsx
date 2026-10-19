import { useEffect, useState } from "react";
import StatusBox from "../components/StatusBox";
import ApiGrid from "../components/ApiGrid";

const ENDPOINT =
  "https://restcountries.com/v3.1/region/americas?fields=name,capital,population,flags,cca3";

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
        if (!cancelado) setData(json);
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
            <h2>Países de América desde REST Countries</h2>
            <p>
              Esta vista consume una API pública desde el navegador para mostrar
              la bandera, la capital y la población de cada país de la región.
            </p>
          </div>

          <div className="api-about">
            <div className="api-about-item">
              <strong>Datos</strong>
              <p>
                Por cada país: bandera (imagen), nombre común, capital y
                población formateada en español rioplatense (es-AR).
              </p>
            </div>
            <div className="api-about-item">
              <strong>Origen</strong>
              <p>
                REST Countries v3.1, endpoint público{" "}
                <code>/v3.1/region/americas</code> con campos acotados: no
                requiere API key ni credenciales, así que nada sensible queda
                expuesto en el cliente.
              </p>
            </div>
            <div className="api-about-item">
              <strong>Propósito</strong>
              <p>
                Ejemplificar el ciclo de vida asíncrono en React:{" "}
                <code>useEffect</code> + <code>fetch</code> con{" "}
                <code>try/catch/finally</code>, estados visibles de espera (
                <code>loading</code>) y de error (<code>error</code>), y
                tratamiento de fallos de red con reintento manual.
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
              <h3>La API no devolvió registros</h3>
              <p>No hay países para mostrar en este momento.</p>
              <button className="btn btn-ghost" type="button" onClick={reintentar}>
                Reintentar conexión
              </button>
            </div>
          )}

          {!loading && !error && data.length > 0 && (
            <>
              <p className="resource-count api-count">
                {data.length} países recibidos desde la API
              </p>
              <ApiGrid countries={data} />
            </>
          )}
        </div>
      </section>
    </main>
  );
}
