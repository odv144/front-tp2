export default function ApiPublica() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">API Externa</span>
            <h2>Datos desde una API pública</h2>
            <p>
              Esta sección todavía es un placeholder declarado en el router. Acá
              se va a consumir una API pública desde el cliente con sus estados de
              carga y de error.
            </p>
          </div>
          <div className="card stub-card">
            <h3>🚧 En construcción</h3>
            <p className="stub-text">
              Falta implementar el fetch, el <code>loading</code> y el{" "}
              <code>error</code>. La ruta ya está dada de alta en{" "}
              <code>App.jsx</code>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
