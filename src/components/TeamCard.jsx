import { Link } from "react-router-dom";

export default function TeamCard({ member }) {
  return (
    <Link className="team-card" to={`/perfil/${member.id}`}>
      <div className="team-card-top">
        <pre
          className="avatar-ascii"
          role="img"
          aria-label={`Avatar ASCII de ${member.name}`}
        >
          {member.asciiArt}
        </pre>
        <div>
          <div className="team-card-name">{member.name}</div>
          <div className="team-card-role">{member.role}</div>
        </div>
      </div>
      <span className="sys-tag">{member.sysTag}</span>
      <div className="team-card-meta">
        {member.city} · {member.age} años
      </div>
      <span className="team-card-link">Ver perfil completo</span>
    </Link>
  );
}
