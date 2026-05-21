"use client";

const endorsements = [
  {
    name: "Sen. Eleanor Marsh",
    role: "U.S. Senator, California",
    quote: "Marcus Vance is the leader this country needs. I've watched him forge unlikely coalitions for two decades. He delivers.",
  },
  {
    name: "Gov. James Whitfield",
    role: "Governor of Texas",
    quote: "We don't agree on everything — and that's exactly why I trust him. He listens. He compromises. He leads.",
  },
  {
    name: "Dr. Patricia Osei",
    role: "President, National Education Association",
    quote: "No candidate in a generation has shown a deeper commitment to our classrooms. Marcus Vance puts children first.",
  },
  {
    name: "Brig. Gen. (Ret.) Frank DiNapoli",
    role: "Former Joint Chiefs, U.S. Army",
    quote: "Strong at home, respected abroad. The kind of commander-in-chief our troops and our allies can count on.",
  },
];

export default function Endorsements() {
  return (
    <section id="endorsements" style={{
      padding: "120px 48px",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Section header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginBottom: "64px",
        flexWrap: "wrap",
        gap: "24px",
      }}>
        <div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "16px",
          }}>
            <div style={{ width: "40px", height: "1px", background: "var(--accent)" }} />
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "12px",
              letterSpacing: "0.35em",
              color: "var(--accent)",
              textTransform: "uppercase",
            }}>Who's With Us</span>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(40px, 4vw, 58px)",
            fontWeight: 300,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>Endorsed by leaders<br />across the spectrum.</h2>
        </div>

        <div style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "12px",
          letterSpacing: "0.2em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
        }}>
          400+ elected officials · 85 labor unions · 200+ civic organizations
        </div>
      </div>

      {/* Endorsements grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1px",
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}>
        {endorsements.map((e, i) => (
          <div key={i} style={{
            background: "var(--bg)",
            padding: "48px 52px",
            transition: "background 0.3s",
          }}
          onMouseEnter={e2 => (e2.currentTarget.style.background = "var(--surface)")}
          onMouseLeave={e2 => (e2.currentTarget.style.background = "var(--bg)")}
          >
            {/* Quote mark */}
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "80px",
              color: "var(--accent)",
              lineHeight: 0.6,
              marginBottom: "24px",
              opacity: 0.4,
            }}>"</div>

            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 400,
              fontStyle: "italic",
              color: "var(--text-primary)",
              lineHeight: 1.65,
              marginBottom: "28px",
            }}>{e.quote}</p>

            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "20px" }}>
              <div style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "15px",
                letterSpacing: "0.05em",
                color: "var(--text-primary)",
                marginBottom: "4px",
              }}>{e.name}</div>
              <div style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "13px",
                color: "var(--text-muted)",
              }}>{e.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
