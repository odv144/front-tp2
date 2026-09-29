import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { TEAM } from "../data/team";
import SkillBar from "../components/SkillBar";
import FunFactButton from "../components/FunFactButton";
import Footer from "../components/Footer";

export default function Profile() {
  const { id } = useParams();
  const member = TEAM.find((m) => m.id === Number(id));

  useEffect(() => {
    if (member) {
      document.title = `${member.name} — Equipo Nodos`;
    } else {
      document.title = "Perfil no encontrado — Equipo Nodos";
    }
  }, [member]);

  if (!member) {
    return (
      <>
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
        <Footer showBack />
      </>
    );
  }

  return (
    <>
      <main className="container" style={{ paddingBottom: 60 }}>
        <Link className="back-link" to="/">
          ← Volver al equipo
        </Link>

        <div className="profile-hero">
          <div
            className="avatar-lg"
            style={{ background: member.accent }}
          >
            {member.initials}
          </div>
          <div>
            <h1 className="profile-name">{member.name}</h1>
            <p className="profile-role">{member.role}</p>
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
      <Footer showBack />
    </>
  );
}
