# Equipo Nodos — TP1 (versión React)

Migración a **Vite + React** del sitio original en HTML/CSS/JS vanilla.

🔗 Sitio original: [https://front-tp1.vercel.app/](https://front-tp1.vercel.app/)  
📁 Repo original: [https://github.com/odv144/front-tp1](https://github.com/odv144/front-tp1)

## Stack

- **Vite** + **React 19**
- **React Router DOM** (rutas: `/`, `/perfil/:id`, `/bitacora`)
- **CSS vanilla** (mismas variables de diseño, tema claro/oscuro y breakpoints)
- JavaScript puro (sin TypeScript)

## Estructura

```
src/
├── components/
│   ├── Header.jsx          # Nav + tema + menú móvil
│   ├── Footer.jsx
│   ├── NodeGraph.jsx       # Grafo SVG interactivo
│   ├── TeamCard.jsx
│   ├── TeamGrid.jsx
│   ├── SkillBar.jsx        # Barras de habilidad animadas
│   ├── FunFactButton.jsx
│   └── Timeline.jsx
├── data/
│   └── team.js             # Array TEAM (única fuente de verdad)
├── hooks/
│   └── useTheme.js         # Tema claro/oscuro + localStorage
├── pages/
│   ├── Home.jsx
│   ├── Profile.jsx
│   └── Bitacora.jsx
├── styles/
│   └── index.css
├── App.jsx
└── main.jsx
```

## Cómo correrlo

```bash
cd front-tp1-react
npm install
npm run dev
```

Abrí `http://localhost:5173`.

## Build y deploy en Vercel

```bash
npm run build
```

El proyecto ya incluye `vercel.json` con rewrites para SPA (React Router).

1. Subí el repo a GitHub.
2. En Vercel → New Project → importá el repo.
3. Framework Preset: **Vite**.
4. Deploy.

O con CLI:

```bash
npx vercel
```

## Funcionalidades migradas

- ✅ Grafo de nodos SVG interactivo (hover, focus, teclado, tooltip)
- ✅ Listado de equipo dinámico
- ✅ Perfiles dinámicos por `/perfil/:id`
- ✅ Barras de habilidad animadas
- ✅ Botón “Dato curioso”
- ✅ Tema claro/oscuro (persistente en `localStorage`)
- ✅ Menú móvil
- ✅ Bitácora / timeline
- ✅ Responsive (1200 / 900 / 400 px)
- ✅ Accesibilidad básica (ARIA, focus visible, teclado)

## Integrantes

| Nombre              | GitHub                                      |
|---------------------|---------------------------------------------|
| Omar Dario Virili   | https://github.com/odv144                   |
| Jairo Calla         | https://github.com/JNCallaGiron             |
| Cristian Suárez     | https://github.com/c-suarez                 |
| Cynthia Sotelo      | https://github.com/cynthia-sotelo           |
| Analía Fernandez    | https://github.com/Analia-Elizabeth-Fernandez |
