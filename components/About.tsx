"use client";

const timeline = [
  { year: "1972", event: "Born in Columbus, Ohio to a steelworker father and schoolteacher mother." },
  { year: "1994", event: "Graduated top of his class, Yale Law School. Clerked for the Supreme Court." },
  { year: "2001", event: "Founded the Ohio Justice Project, providing legal aid to over 12,000 families." },
  { year: "2010", event: "Elected to U.S. Senate. Served 3 terms on the Foreign Relations Committee." },
  { year: "2018", event: "Led landmark bipartisan infrastructure legislation. The Vance-Kim Infrastructure Act." },
  { year: "2028", event: "Running for President of the United States." },
];

export default function About() {
  return (
    <section id="about" style={{
      padding: "120px 48px",
      background: "var(--surface)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "start",
    }}>
      {/* Left: Text */}
      <div>
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
          }}>The Candidate</span>
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(40px, 4vw, 58px)",
          fontWeight: 300,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "32px",
        }}>
          Born from the heartland. Built for this moment.
        </h2>

        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: 1.85,
          color: "var(--text-secondary)",
          marginBottom: "24px",
        }}>
          Marcus Vance grew up in Columbus, Ohio, in a household that understood both the promise and fragility of the American Dream. His father worked thirty years in a steel mill; his mother taught fourth grade for twenty-five. From them, he learned what government can and cannot do — and why it matters who's in charge.
        </p>

        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: 1.85,
          color: "var(--text-secondary)",
          marginBottom: "48px",
        }}>
          Three terms in the Senate taught him that progress is earned through coalition, not confrontation. He's authored landmark legislation, built bridges across the aisle, and never forgotten the people who sent him there.
        </p>

        {/* Quote */}
        <blockquote style={{
          borderLeft: "2px solid var(--accent)",
          paddingLeft: "28px",
          marginBottom: "0",
        }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "22px",
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--text-primary)",
            lineHeight: 1.6,
            marginBottom: "12px",
          }}>
            "I've never met an American who didn't want a better life for their children. That's the common ground we build from."
          </p>
          <cite style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.2em",
            color: "var(--text-muted)",
            textTransform: "uppercase",
            fontStyle: "normal",
          }}>— Marcus A. Vance</cite>
        </blockquote>
      </div>

      {/* Right: Timeline */}
      <div style={{ paddingTop: "80px" }}>
        <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "0",
          position: "relative",
        }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute",
            left: "52px",
            top: "8px",
            bottom: "8px",
            width: "1px",
            background: "linear-gradient(180deg, var(--accent), rgba(200,169,110,0.1))",
          }} />

          {timeline.map((t, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "104px 1fr",
              gap: "24px",
              paddingBottom: "36px",
              position: "relative",
            }}>
              {/* Year + dot */}
              <div style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-end",
                paddingRight: "16px",
                position: "relative",
              }}>
                <span style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.1em",
                  color: i === timeline.length - 1 ? "var(--accent)" : "var(--text-muted)",
                  fontWeight: i === timeline.length - 1 ? 600 : 400,
                  paddingTop: "2px",
                }}>{t.year}</span>
                {/* Dot */}
                <div style={{
                  position: "absolute",
                  right: "-5px",
                  top: "6px",
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: i === timeline.length - 1 ? "var(--accent)" : "var(--surface-2)",
                  border: `1px solid ${i === timeline.length - 1 ? "var(--accent)" : "var(--border-bright)"}`,
                  zIndex: 1,
                }} />
              </div>

              {/* Event text */}
              <p style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                fontSize: "15px",
                lineHeight: 1.7,
                color: i === timeline.length - 1 ? "var(--text-primary)" : "var(--text-secondary)",
                paddingTop: "2px",
              }}>{t.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
