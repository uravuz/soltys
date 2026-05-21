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
      padding: "0 48px",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{
          padding: "40px 0",
          borderRight: i < 3 ? "1px solid var(--border)" : "none",
          paddingRight: "40px",
          paddingLeft: i > 0 ? "40px" : 0,
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "52px",
            fontWeight: 600,
            color: "var(--accent)",
            lineHeight: 1,
            letterSpacing: "-0.02em",
          }}>{s.value}</span>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.2em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
          }}>{s.label}</span>
        </div>
      ))}
    </section>
  );
}
