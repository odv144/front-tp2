const ARBOL = [
  {
    nombre: "App",
    archivo: "src/App.jsx",
    tipo: "Layout",
    nota: "Punto de entrada de la SPA; lo monta main.jsx dentro de <StrictMode>.",
    hijos: [
      {
        nombre: "BrowserRouter",
        archivo: "react-router-dom",
        tipo: "Estado",
        nota: "Guarda la ruta actual. Los rewrites de vercel.json permiten recargar (F5) en cualquier URL.",
        hijos: [
          {
            nombre: "Layout",
            archivo: "src/components/Layout.jsx",
            tipo: "Layout",
            nota: "Esqueleto compartido por todas las rutas anidadas.",
            hijos: [
              {
                nombre: "Header",
                archivo: "src/components/Header.jsx",
                tipo: "Componente UI",
                nota: "Marca del sitio + toggle de tema (useTheme). Sin menú: la navegación vive en el Sidebar.",
                hijos: [],
              },
              {
                nombre: "Sidebar",
                archivo: "src/components/Sidebar.jsx",
                tipo: "Componente UI",
                nota: "Identidad 'Nodos · Front End', 5 NavLink con clase .active y estado isOpen para el menú móvil (.mobile-toggle).",
                hijos: [],
              },
              {
                nombre: ".app-main (div)",
                archivo: "contenedor principal",
                tipo: "Layout",
                nota: "Área derecha del grid: vista activa + pie.",
                hijos: [
                  {
                    nombre: "Outlet",
                    archivo: "react-router-dom",
                    tipo: "Estado",
                    nota: "Monta el hijo de la ruta activa definida en App.jsx.",
                    hijos: [
                      {
                        nombre: "Home",
                        archivo: "src/pages/Home.jsx",
                        tipo: "Página",
                        nota: "Ruta index '/'.",
                        hijos: [
                          {
                            nombre: "Hero",
                            archivo: "sección JSX en Home",
                            tipo: "Componente UI",
                            nota: "Título, propuesta del equipo y CTAs.",
                            hijos: [],
                          },
                          {
                            nombre: "NodeGraph",
                            archivo: "src/components/NodeGraph.jsx",
                            tipo: "Componente UI",
                            nota: "Grafo SVG interactivo con tooltip y navegación por teclado.",
                            hijos: [],
                          },
                          {
                            nombre: "TeamGrid",
                            archivo: "src/components/TeamGrid.jsx",
                            tipo: "Componente UI",
                            nota: "Recorre TEAM y renderiza una tarjeta por integrante.",
                            hijos: [
                              {
                                nombre: "TeamCard ×5",
                                archivo: "src/components/TeamCard.jsx",
                                tipo: "Componente UI",
                                nota: "Recibe member por props y enlaza a /perfil/:id.",
                                hijos: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        nombre: "Profile",
                        archivo: "src/pages/Profile.jsx",
                        tipo: "Página",
                        nota: "Ruta /perfil/:id; resuelve el integrante con useParams + TEAM.find.",
                        hijos: [
                          {
                            nombre: "SkillBar",
                            archivo: "src/components/SkillBar.jsx",
                            tipo: "Componente UI",
                            nota: "Props name y level; anima el ancho con useState + useEffect.",
                            hijos: [],
                          },
                          {
                            nombre: "FunFactButton",
                            archivo: "src/components/FunFactButton.jsx",
                            tipo: "Componente UI",
                            nota: "Prop facts; rota el índice con useState.",
                            hijos: [],
                          },
                        ],
                      },
                      {
                        nombre: "Recursos",
                        archivo: "src/pages/Recursos.jsx",
                        tipo: "Página",
                        nota: "Ruta /recursos; lee recursos.json y filtra con useMemo.",
                        hijos: [
                          {
                            nombre: "Filtros",
                            archivo: "JSX en Recursos.jsx",
                            tipo: "Estado",
                            nota: "busqueda + categoria (useState), contador y estado vacío.",
                            hijos: [],
                          },
                          {
                            nombre: "ResourceGrid",
                            archivo: "src/components/ResourceGrid.jsx",
                            tipo: "Componente UI",
                            nota: "Prop recursos (listado ya filtrado).",
                            hijos: [
                              {
                                nombre: "ResourceCard",
                                archivo: "src/components/ResourceCard.jsx",
                                tipo: "Componente UI",
                                nota: "Prop recurso; badge de categoría y nivel + enlace externo.",
                                hijos: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        nombre: "ApiPublica",
                        archivo: "src/pages/ApiPublica.jsx",
                        tipo: "Página",
                        nota: "Ruta /api-publica; useEffect + fetch a Open Library con try/catch/finally.",
                        hijos: [
                          {
                            nombre: "Bloque explicativo",
                            archivo: "JSX en ApiPublica.jsx",
                            tipo: "Componente UI",
                            nota: "Explica datos, origen y propósito de la integración.",
                            hijos: [],
                          },
                          {
                            nombre: "StatusBox",
                            archivo: "src/components/StatusBox.jsx",
                            tipo: "Estado",
                            nota: "loading (skeleton + spinner) y error (banner + Reintentar conexión).",
                            hijos: [],
                          },
                          {
                            nombre: "ApiGrid",
                            archivo: "src/components/ApiGrid.jsx",
                            tipo: "Componente UI",
                            nota: "Prop obras (respuesta de data.works ya normalizada).",
                            hijos: [
                              {
                                nombre: "ApiCard",
                                archivo: "src/components/ApiCard.jsx",
                                tipo: "Componente UI",
                                nota: "Prop obra; portada (o placeholder), título, autor y año de edición.",
                                hijos: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        nombre: "Bitacora",
                        archivo: "src/pages/Bitacora.jsx",
                        tipo: "Página",
                        nota: "Ruta /bitacora.",
                        hijos: [
                          {
                            nombre: "Timeline",
                            archivo: "src/components/Timeline.jsx",
                            tipo: "Componente UI",
                            nota: "Recorre el array TIMELINE de src/data/timeline.js.",
                            hijos: [
                              {
                                nombre: "TimelineEntry",
                                archivo: "src/components/TimelineEntry.jsx",
                                tipo: "Componente UI",
                                nota: "Prop entry; fecha, título, cuerpo y tags.",
                                hijos: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        nombre: "NotFound",
                        archivo: "src/pages/NotFound.jsx",
                        tipo: "Página",
                        nota: "Ruta comodín path='*' (404).",
                        hijos: [],
                      },
                    ],
                  },
                  {
                    nombre: "Footer",
                    archivo: "src/components/Footer.jsx",
                    tipo: "Componente UI",
                    nota: "Pie global, sin props.",
                    hijos: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const TIPOS = ["Layout", "Página", "Componente UI", "Estado"];

function badgeClass(tipo) {
  if (tipo === "Layout") return "badge tree-badge badge-layout";
  if (tipo === "Página") return "badge tree-badge badge-pagina";
  if (tipo === "Estado") return "badge tree-badge badge-estado";
  return "badge tree-badge badge-componente";
}

function TreeNode({ node }) {
  return (
    <li className="tree-node">
      <div className="tree-card">
        <span className={badgeClass(node.tipo)}>{node.tipo}</span>
        <span className="tree-name">{node.nombre}</span>
        <code className="tree-path">{node.archivo}</code>
        <p className="tree-note">{node.nota}</p>
      </div>

      {node.hijos.length > 0 && (
        <ul className="tree-children">
          {node.hijos.map((hijo) => (
            <TreeNode key={hijo.nombre} node={hijo} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Arbol() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Arquitectura</span>
            <h2>Árbol de renderizado</h2>
            <p>
              Esquema del árbol de componentes de la aplicación tal como está
              implementada: se lee de arriba hacia abajo y cada nivel corresponde
              a un nodo real del código, con la ruta del archivo donde vive.
            </p>
          </div>

          <div className="tree-legend">
            {TIPOS.map((tipo) => (
              <span key={tipo} className={badgeClass(tipo)}>
                {tipo}
              </span>
            ))}
          </div>

          <ul className="tree">
            {ARBOL.map((nodo) => (
              <TreeNode key={nodo.nombre} node={nodo} />
            ))}
          </ul>

          <div className="card tree-explain">
            <h3>🔄 Cómo fluyen los datos y las props</h3>
            <ul className="tree-explain-list">
              <li>
                <strong>Fuente única:</strong> los datos viven en{" "}
                <code>src/data/team.js</code>, <code>recursos.json</code> y{" "}
                <code>timeline.js</code>. Las páginas los importan y bajan
                fragmentos por props: <code>TeamGrid → TeamCard</code>,{" "}
                <code>ResourceGrid → ResourceCard</code>,{" "}
                <code>ApiGrid → ApiCard</code>,{" "}
                <code>Timeline → TimelineEntry</code>.
              </li>
              <li>
                <strong>Estado local:</strong> cada componente que necesita
                reaccionar a la interacción guarda su estado con{" "}
                <code>useState</code> (<code>isOpen</code> en Sidebar,{" "}
                <code>busqueda</code>/<code>categoria</code> en Recursos,{" "}
                <code>data</code>/<code>loading</code>/<code>error</code> en
                ApiPublica). No hay estado global.
              </li>
              <li>
                <strong>Ciclo asíncrono:</strong> solo ApiPublica consume red; el
                resultado se transforma en props para <code>ApiGrid</code> y{" "}
                <code>ApiCard</code> una vez resuelto el <code>fetch</code>.
              </li>
              <li>
                <strong>Rutas:</strong> el Layout no recibe props:{" "}
                <code>Outlet</code> decide qué vista montar según la URL y el
                Sidebar marca la ruta activa leyendo el router con{" "}
                <code>NavLink</code>.
              </li>
              <li>
                <strong>Tema:</strong> <code>useTheme</code> vive en el Header y
                propaga el modo claro/oscuro escribiendo <code>data-theme</code>{" "}
                en <code>&lt;html&gt;</code>, por lo que llega a todos los
                componentes sin necesidad de props.
              </li>
            </ul>
          </div>

          <p className="tree-caption">
            Este diagrama se dibuja con el componente recursivo{" "}
            <code>TreeNode</code>, definido al inicio de este mismo archivo.
          </p>
        </div>
      </section>
    </main>
  );
}
