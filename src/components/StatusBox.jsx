function SkeletonCard() {
  return (
    <div className="api-card skeleton-card" aria-hidden="true">
      <span className="skeleton-flag" />
      <span className="skeleton-line" />
      <span className="skeleton-line short" />
    </div>
  );
}

export default function StatusBox({ estado, mensaje, onRetry }) {
  if (estado === "loading") {
    return (
      <>
        <div className="state-loading" role="status" aria-live="polite">
          <span className="spinner" aria-hidden="true" />
          <p>{mensaje}</p>
        </div>
        <div className="api-grid skeleton-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      </>
    );
  }

  if (estado === "error") {
    return (
      <div className="state-error" role="alert">
        <div>
          <h3>No pudimos obtener los datos</h3>
          <p>{mensaje}</p>
        </div>
        <button className="btn btn-primary" type="button" onClick={onRetry}>
          Reintentar conexión
        </button>
      </div>
    );
  }

  return null;
}
