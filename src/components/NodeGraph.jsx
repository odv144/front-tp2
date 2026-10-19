import { useMemo, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TEAM } from "../data/team";

const SIZE = 460;
const CENTER = SIZE / 2;
const HUB_RADIUS = 34;
const HALO_RADIUS = HUB_RADIUS + 16;
const ORBIT_RADIUS = SIZE / 2 - 56;
const NODE_RADIUS = 30;

function linkClass(activeId, memberId) {
  const classes = ["node-link"];
  if (activeId == null) return "node-link";
  classes.push(activeId === memberId ? "is-active" : "is-dim");
  return classes.join(" ");
}

export default function NodeGraph() {
  const navigate = useNavigate();
  const wrapRef = useRef(null);
  const [tooltip, setTooltip] = useState(null);
  const [activeId, setActiveId] = useState(null);

  const positions = useMemo(
    () =>
      TEAM.map((member, i) => {
        const angle = (i / TEAM.length) * Math.PI * 2 - Math.PI / 2;
        return {
          member,
          x: CENTER + ORBIT_RADIUS * Math.cos(angle),
          y: CENTER + ORBIT_RADIUS * Math.sin(angle),
        };
      }),
    []
  );

  const activeMember =
    positions.find((p) => p.member.id === activeId)?.member ?? null;

  const showTip = (p) => {
    setActiveId(p.member.id);
    if (!wrapRef.current) return;
    const wrapRect = wrapRef.current.getBoundingClientRect();
    const px = (p.x / SIZE) * wrapRect.width;
    const py = (p.y / SIZE) * wrapRect.height;
    setTooltip({
      name: p.member.name,
      role: p.member.role,
      left: px,
      top: py - 44,
    });
  };

  const hideTip = () => {
    setActiveId(null);
    setTooltip(null);
  };

  const goToProfile = (id) => {
    navigate(`/perfil/${id}`);
  };

  return (
    <div className="graph-panel">
      <div className="graph-wrap" ref={wrapRef}>
        <svg
          id="node-graph"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          role="group"
          aria-label="Red de integrantes del equipo Nodos"
          style={{ width: "100%", height: "100%", overflow: "visible" }}
        >
          {positions.map((p) => (
            <line
              key={`hub-${p.member.id}`}
              className={linkClass(activeId, p.member.id)}
              x1={CENTER}
              y1={CENTER}
              x2={p.x}
              y2={p.y}
              aria-hidden="true"
            />
          ))}

          {positions.map((p, i) => {
            const next = positions[(i + 1) % positions.length];
            const conectada =
              activeId === p.member.id || activeId === next.member.id;
            const meshClasses = ["node-link", "mesh"];
            if (activeId != null) {
              meshClasses.push(conectada ? "is-active" : "is-dim");
            }
            return (
              <line
                key={`mesh-${p.member.id}-${next.member.id}`}
                className={meshClasses.join(" ")}
                x1={p.x}
                y1={p.y}
                x2={next.x}
                y2={next.y}
                aria-hidden="true"
              />
            );
          })}

          <circle
            className="node-halo"
            cx={CENTER}
            cy={CENTER}
            r={HALO_RADIUS}
            aria-hidden="true"
          />

          <g className="node-hub" aria-hidden="true">
            <circle cx={CENTER} cy={CENTER} r={HUB_RADIUS} />
            <text
              x={CENTER}
              y={CENTER}
              textAnchor="middle"
              dominantBaseline="central"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                fontWeight: 700,
                fill: "var(--primary-ink)",
              }}
            >
              NODOS
            </text>
          </g>

          {positions.map((p) => (
            <g
              key={p.member.id}
              className={`node-dot ${activeId === p.member.id ? "is-active" : ""}`}
              tabIndex={0}
              role="link"
              aria-label={`Ver perfil de ${p.member.name}`}
              onClick={() => goToProfile(p.member.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  goToProfile(p.member.id);
                }
              }}
              onMouseEnter={() => showTip(p)}
              onMouseLeave={hideTip}
              onFocus={() => showTip(p)}
              onBlur={hideTip}
            >
              <title>{`Ver perfil de ${p.member.name}`}</title>
              <circle
                className="node-bg"
                cx={p.x}
                cy={p.y}
                r={NODE_RADIUS}
              />
              <text
                x={p.x}
                y={p.y}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  fontWeight: 700,
                  fill: "var(--text)",
                  pointerEvents: "none",
                }}
              >
                {p.member.initials}
              </text>
            </g>
          ))}
        </svg>

        {tooltip && (
          <div
            className="graph-tooltip is-visible"
            style={{
              left: tooltip.left,
              top: tooltip.top,
              transform: "translate(-50%, -8px)",
            }}
          >
            <strong>{tooltip.name}</strong>
            <span>{tooltip.role}</span>
          </div>
        )}
      </div>

      <p
        className={`graph-status ${activeMember ? "is-live" : ""}`}
        role="status"
        aria-live="polite"
      >
        {activeMember ? (
          <>
            <span className="graph-status-prompt">nodos@front:~$</span> ping -c 1
            @{activeMember.sysTag}{" "}
            <span className="graph-status-flag">
              [ESTADO: ENLACE ACTIVO - CLICK PARA VER PERFIL]
            </span>
          </>
        ) : (
          <>
            <span className="graph-status-hash">#</span> posa el mouse sobre un
            nodo o usa Tab para inspeccionar la red
          </>
        )}
      </p>
    </div>
  );
}
