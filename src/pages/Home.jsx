import { Link } from "react-router-dom";
import NodeGraph from "../components/NodeGraph";
import TeamGrid from "../components/TeamGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow">TP1 · Desarrollo de Sistemas Web</span>
              <h1 className="hero-title">
                Somos <span className="accent-word">Nodos</span>:
                <br />
                un equipo, conectado como una red.
              </h1>
              <p className="hero-lede">
                Cinco personas, cinco especialidades y un mismo objetivo: construir
                interfaces claras, accesibles y bien documentadas. Tocá cualquier nodo
                del grafo o elegí a alguien de la lista para conocer su perfil.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#equipo">
                  Ver al equipo
                </a>
                <Link className="btn btn-ghost" to="/bitacora">
                  Ver la bitácora del proyecto
                </Link>
              </div>
            </div>

            <div>
              <NodeGraph />
              <p className="graph-hint">
                ↳ pasá el mouse o navegá con Tab por los nodos
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="equipo">
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">El equipo</span>
              <h2>Cinco perfiles, un solo repositorio.</h2>
              <p>
                Cada tarjeta se genera dinámicamente desde un mismo array de datos: así
                evitamos repetir información y mantenemos todo consistente entre la
                portada y cada perfil.
              </p>
            </div>
            <TeamGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
