const ENTRIES = [
  {
    date: "Semana 1 · Organización",
    title: "Definimos roles y forma de trabajo",
    body: "Leímos la consigna en conjunto y repartimos responsabilidades: maquetado base, estilos y responsive, lógica de JavaScript, y redacción del README. Acordamos usar un canal de chat para avisos rápidos y una reunión semanal corta para destrabar dudas.",
    tags: ["Decisión"],
  },
  {
    date: "Semana 1 · Flujo de trabajo en Git",
    title: "Una rama por integrante, integradas en dev2",
    body: "Para que cada uno pudiera avanzar en paralelo sin pisarse, definimos que cada integrante trabaje en su propia rama y la vaya integrando a dev2, nuestra rama de desarrollo compartida, antes de que los cambios lleguen a main.",
    tags: ["Decisión"],
  },
  {
    date: "Semana 1 · Arquitectura de datos",
    title: "Un solo array de objetos para todo el equipo",
    body: "En vez de escribir el HTML de cada perfil a mano, decidimos centralizar toda la información personal en un array de datos. Esto evitó datos duplicados o desactualizados y nos permitió construir el perfil como una plantilla única que se completa según el id de la URL.",
    tags: ["Decisión"],
  },
  {
    date: "Semana 2 · Diseño",
    title: "El grafo de nodos como hilo conductor",
    body: 'Queríamos que el nombre "Nodos" no fuera solo un logo, sino parte real de la experiencia. Terminamos dibujando el equipo como un grafo interactivo en SVG: cada persona es un nodo conectado a un centro, y tocarlo lleva directo a su perfil. Nos costó calcular las posiciones en círculo con trigonometría, pero quedó reutilizable para cualquier cantidad de integrantes.',
    tags: ["Decisión"],
  },
  {
    date: "Semana 2 · Problema",
    title: "Los breakpoints rompían el grafo en mobile",
    body: "Al achicar la ventana a 400px, el SVG del grafo se deformaba y los textos de los nodos se superponían. Lo resolvimos usando viewBox con unidades relativas en vez de tamaños fijos en píxeles, y reduciendo el radio del grafo con media queries específicas en 900px y 400px.",
    tags: ["Problema"],
  },
  {
    date: "Semana 3 · Cambio",
    title: "De fotos personales a avatares con iniciales",
    body: "Al principio íbamos a usar fotos propias, pero para esta primera entrega preferimos generar avatares con las iniciales de cada integrante y un color distintivo tomado también del array de datos. Es más consistente visualmente y evita depender de imágenes pesadas.",
    tags: ["Cambio"],
  },
  {
    date: "Semana 3 · Accesibilidad",
    title: "El grafo tenía que funcionar también con teclado",
    body: "Nos dimos cuenta de que los nodos del SVG no eran alcanzables con Tab. Agregamos tabindex, roles ARIA y estados de foco visibles, y probamos toda la navegación sin mouse antes de dar la portada por terminada.",
    tags: ["Problema", "Cambio"],
  },
  {
    date: "Semana 4 · Cierre",
    title: "Revisión final y publicación",
    body: "Revisamos los tres breakpoints obligatorios en dispositivos reales, completamos el README con capturas y la explicación de cada función de JavaScript, y publicamos el sitio en Vercel antes de cargar el enlace del repositorio en la planilla única de entregas.",
    tags: ["Decisión"],
  },
];

function tagClass(tag) {
  if (tag === "Problema") return "timeline-tag problema";
  if (tag === "Cambio") return "timeline-tag cambio";
  return "timeline-tag decision";
}

export default function Timeline() {
  return (
    <ol className="timeline">
      {ENTRIES.map((entry, i) => (
        <li key={i} className="timeline-entry">
          <div className="timeline-date">{entry.date}</div>
          <h3 className="timeline-title">{entry.title}</h3>
          <p className="timeline-body">{entry.body}</p>
          <div className="timeline-tags">
            {entry.tags.map((t) => (
              <span key={t} className={tagClass(t)}>
                {t}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ol>
  );
}
