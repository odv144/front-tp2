import Timeline from "../components/Timeline";
import Footer from "../components/Footer";

export default function Bitacora() {
  return (
    <>
      <main>
        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Proceso</span>
              <h2>Bitácora de desarrollo</h2>
              <p>
                Decisiones, obstáculos y cambios de rumbo durante el TP1, en orden
                cronológico. La idea es que se pueda reconstruir cómo trabajamos sin
                tener que buscar información dispersa en el repositorio.
              </p>
            </div>
            <Timeline />
          </div>
        </section>
      </main>
      <Footer showBack />
    </>
  );
}
