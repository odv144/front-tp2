export default function Footer() {
  return (
    <footer className="site-footer">
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "10px",
          width: "100%",
        }}
      >
        <span>Equipo Nodos · TP1 Front End · 2026</span>
        <span>Hecho con React + Vite</span>
      </div>
    </footer>
  );
}
