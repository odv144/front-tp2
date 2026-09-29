import { useEffect, useState } from "react";

export default function SkillBar({ name, level }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Pequeño delay para que se vea la animación
    const id = requestAnimationFrame(() => {
      setWidth(level);
    });
    return () => cancelAnimationFrame(id);
  }, [level]);

  return (
    <div className="skill-row">
      <div className="skill-label">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-track">
        <div className="skill-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
