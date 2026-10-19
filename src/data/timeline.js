/**
 * Fuente única de verdad de la bitácora del equipo.
 * Timeline.jsx solo renderiza este array.
 */

export const TIMELINE = [
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
    date: "Semana 4 · Cierre del TP1",
    title: "Revisión final y publicación",
    body: "Revisamos los tres breakpoints obligatorios en dispositivos reales, completamos el README con capturas y la explicación de cada función de JavaScript, y publicamos el sitio en Vercel antes de cargar el enlace del repositorio en la planilla única de entregas.",
    tags: ["Decisión"],
  },
  {
    date: "Semana 5 · Arquitectura (TP2)",
    title: "Migración a Layout con Sidebar compartida",
    body: "Para la migración a React reemplazamos el header único por un Layout con una Sidebar persistente que concentra la identidad del equipo, la navegación y el resaltado de la ruta activa. Depuramos el Header dejándolo solo con la marca y el toggle de tema para evitar menús y hamburguesas duplicados en móvil, y el Footer pasó a ser global dentro del Layout.",
    tags: ["Decisión"],
  },
  {
    date: "Semana 5 · Integración (TP2)",
    title: "Dataset local de recursos con filtrado combinado",
    body: "Incorporamos un dataset JSON con los recursos técnicos del equipo y la vista de Recursos, con búsqueda por texto libre y filtro por categoría que se aplican al mismo tiempo. Las categorías únicas se derivan de los propios datos y el listado se recalcula con useMemo solo cuando cambian los filtros; además incluye contador de resultados y estado vacío.",
    tags: ["Integración"],
  },
];
