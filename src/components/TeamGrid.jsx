import { TEAM } from "../data/team";
import TeamCard from "./TeamCard";

export default function TeamGrid() {
  return (
    <div className="team-grid" id="team-grid">
      {TEAM.map((member) => (
        <TeamCard key={member.id} member={member} />
      ))}
    </div>
  );
}
