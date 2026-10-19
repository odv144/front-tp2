# Equipo Nodos · TP2 React

Desarrollo de Sistemas Web · Front End · IFTS 29 · 2026

**[Repositorio en GitHub](https://github.com/odv144/front-tp2)** · **[Deploy en Vercel](https://front-tp2-omega.vercel.app/)**

---

## Índice de Contenidos

1. [Propuesta y Arquitectura de la Aplicación](#propuesta-y-arquitectura-de-la-aplicación)
2. [Equipo y Responsabilidades en el TP2 (Criterio 3)](#equipo-y-responsabilidades-en-el-tp2-criterio-3)
3. [Avatares y Arte ASCII Nativo](#avatares-y-arte-ascii-nativo)
4. [Declaración de Uso de Asistencia con Inteligencia Artificial (Criterio 15)](#declaración-de-uso-de-asistencia-con-inteligencia-artificial-criterio-15)
5. [Instalación y Ejecución Local](#instalación-y-ejecución-local)

---

## Propuesta y Arquitectura de la Aplicación

### Identidad visual

La interfaz adopta una estética **retro inspirada en terminales UNIX/Linux**: tema **oscuro por defecto** (consola de carbón `#0b0f12`), tipografía monoespaciada para títulos y etiquetas de sistema, y acentos de **fósforo verde** (`#00ff66`) y **ámbar** (`#ffb000`). Los encabezados de cada módulo se presentan como comandos de consola (`ls -la /equipo`, `cat /recursos`, `tail -f /bitacora.log`) con cursor titilante, y el tema claro ofrece una variante de papel retro persistida en `localStorage`. Todo el sistema se apoya en tokens CSS (`--bg`, `--surface`, `--primary`, `--accent`, radios 3–6 px y sombras pixeladas de 2 px).

### Módulos y rutas

| # | Ruta | Módulo | Descripción |
| :--- | :--- | :--- | :--- |
| 1 | `/` (Inicio) | Hero + `NodeGraph` + `TeamGrid` | Presentación del equipo, grafo SVG interactivo con aristas reactivas, halo pulsante y telemetría tipo `ping` al inspeccionar nodos, más la cuadrícula de integrantes. |
| 2 | `/perfil/:id` | `Profile` | Vista dinámica de cada miembro: bio, datos, barras de habilidades segmentadas (`SkillBar`) y microinteracción de dato curioso rotativo (`FunFactButton`). |
| 3 | `/recursos` | `Recursos` | Catálogo local de **29 registros técnicos** con buscador en tiempo real y filtrado simultáneo por categoría, ambos optimizados con `useMemo`. |
| 4 | `/api-publica` | `ApiPublica` | Consumo asíncrono de la API abierta de **Open Library** (obras de programación/JavaScript) con renderizado condicional de estados: `loading` con skeleton, `error` con retry y fallbacks de portada. |
| 5 | `/arbol` | `Arbol` | Visualizador jerárquico del árbol de componentes, sincronizado 1:1 con la estructura real de archivos y el flujo de datos del DOM. |
| 6 | `/bitacora` | `Bitacora` | Registro cronológico de **14 hitos** que documentan los problemas encontrados, las alternativas evaluadas y las decisiones tomadas a lo largo del TP. |
| 7 | `*` | `NotFound` | Manejo de rutas inexistentes con navegación de retorno al inicio. |

**Stack:** Vite 8 · React 19 · React Router 7 · CSS vanilla con tokens y temas · JavaScript puro (sin TypeScript) · oxlint.

### Navegación y UX

- **`Layout`** envuelve todas las rutas anidadas con `Sidebar` + `Header` + `Outlet` + `Footer`.
- **`Sidebar` persistente** de alto completo (sticky, 100 vh) con el isotipo del equipo y la navegación principal; bajo 768 px se convierte en un drawer deslizante controlado por hamburguesa y backdrop.
- **`ScrollRestoration` automático**: en cada cambio de ruta, `useLayoutEffect` restablece el scroll del `window`, de `.app-main` y de `.sidebar` a la posición `0`, de modo que toda transición arranca arriba de todo.

---

## Equipo y Responsabilidades en el TP2 (Criterio 3)

| Integrante | Rol | GitHub | Responsabilidades |
| :--- | :--- | :--- | :--- |
| Omar Dario Virili | `sysadmin` | [@odv144](https://github.com/odv144) | Configuración base de Vite/Vercel, estructura de rutas y bitácora técnica. |
| Cristian Suárez | `kernel-dev` | [@c-suarez](https://github.com/c-suarez) | Layout con Sidebar persistente, microinteracciones del grafo y diseño de tokens CLI. |
| Jairo Calla | `net-daemon` | [@JNCallaGiron](https://github.com/JNCallaGiron) | Consumo de la API de Open Library, manejo de estados asíncronos y skeletons. |
| Cynthia Sotelo | `sec-ops` | [@cynthia-sotelo](https://github.com/cynthia-sotelo) | Dataset local de 29 recursos, búsqueda reactiva y filtros con `useMemo`. |
| Analia Fernandez | `root` | [@Analia-Elizabeth-Fernandez](https://github.com/Analia-Elizabeth-Fernandez) | Modelado del árbol de componentes, auditoría de accesibilidad y documentación. |

---

## Avatares y Arte ASCII Nativo

Para garantizar **independencia de APIs externas, rendimiento óptimo y neutralidad**, cada perfil cuenta con un emblema de sistema en **arte ASCII nativo** embebido directamente en el código fuente (`asciiArt` dentro de `src/data/team.js`). Los bloques se renderizan como elementos `<pre>` con `role="img"` y etiqueta accesible, sin solicitudes de red ni dependencias de servicios de terceros. Cada emblema refleja la identidad técnica de su integrante: un servidor rack, un CPU/kernel, un nodo de red, un candado de seguridad y una shell root.

---

## Declaración de Uso de Asistencia con Inteligencia Artificial (Criterio 15)

| Integrante | Rol | Herramienta / Entorno | Modelo específico | Tareas puntuales asistidas |
| :--- | :--- | :--- | :--- | :--- |
| Cristian Suárez | kernel-dev | OpenCode CLI + Terminal | Claude 3.7 Sonnet | Refactorización de layout a Sidebar persistente, microinteracciones SVG en el grafo y diseño de tokens CLI. |
| Omar Dario Virili | sysadmin | GitHub Copilot en VS Code | GPT-4o | Configuración de Vite/Vercel, scaffolding de rutas y estructura cronológica de la bitácora. |
| Jairo Calla | net-daemon | ChatGPT Web | GPT-4o | Lógica de consumo asíncrono para Open Library, manejo de skeletons y reintentos. |
| Cynthia Sotelo | sec-ops | Claude Web | Claude 3.5 Sonnet | Normalización del dataset local de 29 recursos y optimización de filtros con `useMemo`. |
| Analia Fernandez | root | Gemini Web | Gemini 2.5 Flash | Mapeo jerárquico del árbol de componentes (`Arbol.jsx`), contraste WCAG y documentación. |

---

## Instalación y Ejecución Local

```bash
# 1. Clonar e instalar dependencias
git clone https://github.com/odv144/front-tp2.git
cd front-tp2
npm install

# 2. Desarrollo (http://localhost:5173)
npm run dev

# 3. Lint (oxlint, sin advertencias)
npm run lint

# 4. Build de producción (dist/)
npm run build
```

El deploy en Vercel está preparado mediante `vercel.json` con rewrites para SPA, de modo que cualquier ruta profunda (`/perfil/1`, `/recursos`, etc.) resuelve correctamente al recargar.
