"use client";

const pillars = [
  {
    num: "01",
    title: "Economic Renewal",
    desc: "Rebuilding the middle class through strategic investment in domestic manufacturing, fair trade policy, and tax reform that works for working families — not just the wealthy.",
  },
  {
    num: "02",
    title: "Climate & Infrastructure",
    desc: "A 10-year national infrastructure plan that modernizes America's roads, bridges, and energy grid while creating millions of good-paying, union jobs.",
  },
  {
    num: "03",
    title: "Healthcare Sovereignty",
    desc: "Ensuring every American has access to affordable, quality healthcare. Negotiating prescription drug prices and expanding coverage without dismantling what works.",
  },
  {
    num: "04",
    title: "Education & Opportunity",
    desc: "From universal pre-K to affordable college and debt relief — investing in the next generation is the highest-return investment a nation can make.",
  },
];

export default function Vision() {
  return (
    <section id="vision" style={{
      padding: "120px 48px",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background text */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(120px, 20vw, 260px)",
        fontWeight: 700,
        color: "rgba(255,255,255,0.015)",
        whiteSpace: "nowrap",
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "-0.05em",
      }}>VISION</div>

      {/* Section header */}
      <div style={{ marginBottom: "80px" }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "24px",
        }}>
          <div style={{ width: "40px", height: "1px", background: "var(--accent)" }} />
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.35em",
            color: "var(--accent)",
            textTransform: "uppercase",
          }}>Platforma i politika</span>
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(42px, 5vw, 64px)",
          fontWeight: 300,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          maxWidth: "600px",
        }}>
          Polska wieś to tradycja, rozwój i fundament naszej gospodarki
        </h2>
      </div>

      {/* Pillars grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1px",
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}>
        {pillars.map((p, i) => (
          <div
            key={i}
            style={{
              background: "var(--bg)",
              padding: "56px",
              position: "relative",
              transition: "background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--surface)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
          >
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "80px",
              fontWeight: 600,
              color: "rgba(200,169,110,0.12)",
              lineHeight: 1,
              display: "block",
              marginBottom: "24px",
              letterSpacing: "-0.03em",
            }}>{p.num}</span>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "28px",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "16px",
              letterSpacing: "-0.01em",
            }}>{p.title}</h3>
            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
            }}>{p.desc}</p>

            {/* Corner accent */}
            <div style={{
              position: "absolute",
              bottom: "24px",
              right: "24px",
              width: "24px",
              height: "24px",
              borderRight: "1px solid var(--border-bright)",
              borderBottom: "1px solid var(--border-bright)",
            }} />
          </div>
        ))}
      </div>
    </section>
  );
}
