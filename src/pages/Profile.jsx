import { useParams, Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { TEAM } from "../data/team";
import SkillBar from "../components/SkillBar";
import FunFactButton from "../components/FunFactButton";

export default function Profile() {
  const { id } = useParams();
  const member = TEAM.find((m) => m.id === Number(id));
  const originalTitle = useRef(document.title);

  useEffect(() => {
    if (member) {
      document.title = `${member.name} — Equipo Nodos`;
    } else {
      document.title = "Perfil no encontrado — Equipo Nodos";
    }
    return () => {
      document.title = originalTitle.current;
    };
  }, [member, originalTitle]);

  if (!member) {
    return (
      <main className="container" style={{ paddingBottom: 60 }}>
        <div className="card" style={{ textAlign: "center", marginTop: 40 }}>
          <h3>No encontramos a esta persona 🤔</h3>
          <p className="profile-bio">
            Puede que el enlace esté roto. Volvé a la portada para ver el listado
            completo del equipo.
          </p>
          <Link
            className="btn btn-primary"
            style={{ marginTop: 16 }}
            to="/"
          >
            Volver al equipo
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="container" style={{ paddingBottom: 60 }}>
      <div className="profile-back">
        <Link className="back-link" to="/">
          ← cd .. (volver al equipo)
        </Link>
      </div>

      <p className="eyebrow">whoami</p>

      <div className="profile-hero">
        <pre
          className="avatar-ascii avatar-ascii-lg"
          role="img"
          aria-label={`Avatar ASCII de ${member.name}`}
        >
          {member.asciiArt}
        </pre>
        <div>
          <h1 className="profile-name">{member.name}</h1>
          <p className="profile-role">{member.role}</p>
          <span className="sys-tag">{member.sysTag}</span>
          <div className="profile-meta">
            <span>📍 {member.city}</span>
            <span>🎂 {member.age} años</span>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub ↗
            </a>
          </div>
          <p className="profile-bio">{member.bio}</p>
        </div>
      </div>

      <div className="profile-grid">
        <div className="card">
          <h3>🛠️ Habilidades</h3>
          {member.skills.map((s) => (
            <SkillBar key={s.name} name={s.name} level={s.level} />
          ))}
          <FunFactButton facts={member.funFacts} />
        </div>

        <div className="card">
          <h3>⭐ Preferencias</h3>
          <p className="fav-subtitle">Películas favoritas</p>
          <div className="tag-list">
            {member.movies.map((m) => (
              <span key={m} className="tag">
                🎬 {m}
              </span>
            ))}
          </div>
          <p className="fav-subtitle">Discos favoritos</p>
          <div className="tag-list">
            {member.albums.map((a) => (
              <span key={a} className="tag">
                🎵 {a}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
