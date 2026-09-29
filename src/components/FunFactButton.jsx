import { useState } from "react";

export default function FunFactButton({ facts }) {
  const [index, setIndex] = useState(0);

  if (!facts || facts.length === 0) return null;

  const next = () => {
    setIndex((i) => (i + 1) % facts.length);
  };

  return (
    <div className="factcard">
      <p className="eyebrow">Dato curioso</p>
      <p id="fact-text" aria-live="polite" style={{ marginTop: 8 }}>
        {facts[index]}
      </p>
      <button className="btn btn-ghost" type="button" onClick={next}>
        🔀 Otro dato
      </button>
    </div>
  );
}
