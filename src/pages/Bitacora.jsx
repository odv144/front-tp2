import Timeline from "../components/Timeline";

export default function Bitacora() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">tail -f /bitacora.log</span>
            <h2>Bitácora de desarrollo</h2>
            <p>
              Decisiones, obstáculos y cambios de rumbo del equipo, en orden
              cronológico: desde la entrega del TP1 hasta el avance continuo
              hacia el TP2 con React. La idea es que se pueda reconstruir cómo
              trabajamos sin tener que buscar información dispersa en el
              repositorio.
            </p>
          </div>
          <Timeline />
        </div>
      </section>
    </main>
  );
}
