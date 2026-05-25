"use client";

const stats = [
  { value: "62%", label: "Poparcie szkoły" },
  { value: "38", label: "Wsie" },
  { value: "2.4M", label: "Woluntariuszy w kraju" },
  { value: "$180M", label: "Zebrane przez woluntariuszy" },
];

export default function StatsBar() {
  return (
    <section style={{
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      background: "var(--surface)",
      padding: "0 24px",
    }}>
      <style>{`
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        }
        @media (min-width: 640px) {
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
        }
        @media (min-width: 768px) {
          .stats-section { padding: 0 48px !important; }
        }
        .stat-item {
          padding: 28px 16px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        @media (min-width: 640px) {
          .stat-item { padding: 40px 24px; border-bottom: none; }
          .stat-item:last-child { border-right: none; }
        }
        .stat-item:nth-child(2n) { border-right: none; }
        @media (min-width: 640px) {
          .stat-item:nth-child(2n) { border-right: 1px solid var(--border); }
        }
        .stat-item:nth-child(3), .stat-item:nth-child(4) { border-bottom: none; }
      `}</style>
      <div className="stats-grid stats-section">
        {stats.map((s, i) => (
          <div key={i} className="stat-item" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(36px, 6vw, 52px)",
              fontWeight: 600,
              color: "var(--accent)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
            }}>{s.value}</span>
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "var(--text-muted)",
              textTransform: "uppercase",
            }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
