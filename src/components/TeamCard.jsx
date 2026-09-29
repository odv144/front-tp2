import { Link } from "react-router-dom";

export default function TeamCard({ member }) {
  return (
    <Link className="team-card" to={`/perfil/${member.id}`}>
      <div className="team-card-top">
        <div className="avatar" style={{ background: member.accent }}>
          {member.initials}
        </div>
        <div>
          <div className="team-card-name">{member.name}</div>
          <div className="team-card-role">{member.role}</div>
        </div>
      </div>
      <div className="team-card-meta">
        {member.city} · {member.age} años
      </div>
      <span className="team-card-link">Ver perfil completo</span>
    </Link>
  );
}
