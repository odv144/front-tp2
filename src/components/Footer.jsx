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
        <span>$ echo &quot;Equipo Nodos · TP2 Front End · 2026&quot;</span>
        <span>exit 0 · React + Vite</span>
      </div>
    </footer>
  );
}
