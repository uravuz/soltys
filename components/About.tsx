"use client";

const timeline = [
  { year: "2001", event: "Atak na Światowe Centrum Handlu w Nowym Jorku." },
  { year: "2009", event: "Urodzony we wsi Oborniki." },
  { year: "2016", event: "Laureat konkursu plastycznego." },
  { year: "2021", event: "Ukończył szkołę podstawową nr 6 w Jarocinie." },
  { year: "2022", event: "Wsparł Izrael kwotą 890zł." },
  { year: "2026", event: "Sołtys szkoły ZSP1 w Jarocinie." },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "80px 24px", background: "var(--surface)" }}>
      <style>{`
        @media (min-width: 900px) {
          .about-section { padding: 120px 48px !important; display: grid !important; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; }
          .about-timeline { padding-top: 80px; }
        }
      `}</style>
      <div className="about-section" style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
        {/* Left: Text */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--accent)" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", letterSpacing: "0.35em", color: "var(--accent)", textTransform: "uppercase" }}>O kandydacie</span>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 5vw, 58px)",
            fontWeight: 300,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}>
            Urodzony aby wspierać lokalnych rolników.
          </h2>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "20px" }}>
            Bartosz Wojtkowiak to 16-letni, pracowity rolnik z sąsiedztwa, który startuje na sołtysa, by wnieść do wsi realne działanie zamiast obietnic. Choć na co dzień twardo stąpa po ziemi i naprawia sąsiadom traktory, jego wielką pasją jest Bliski Wschód – jako dumny zwolennik Izraela podziwia ten kraj za patriotyzm i nowoczesne technologie rolnicze, które chciałby przenieść na lokalny grunt.
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "16px", lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: "36px" }}>
            Bartek to prosty, szczery facet, który nie boi się głośno mówić, co myśli, a barwy Izraela traktuje jako symbol niezłomności i pracowitości.
          </p>
          <blockquote style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "24px" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontStyle: "italic", fontWeight: 300, color: "var(--text-primary)", lineHeight: 1.6, marginBottom: "12px" }}>
              "Nigdy nie spotkałem wsiura, który nie chciał lepszej przyszłości dla jego dzieci."
            </p>
            <cite style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase", fontStyle: "normal" }}>— Bartosz Wojtkowiak</cite>
          </blockquote>
        </div>

        {/* Right: Timeline */}
        <div className="about-timeline">
          <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
            <div style={{
              position: "absolute", left: "42px", top: "4px", bottom: "8px", width: "1px",
              background: "linear-gradient(180deg, var(--accent), rgba(200,169,110,0.1))",
            }} />
            {timeline.map((t, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "104px 1fr", gap: "24px", paddingBottom: "28px", position: "relative" }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-end", paddingRight: "16px", position: "relative" }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    color: i === timeline.length - 1 ? "var(--accent)" : "var(--text-muted)",
                    fontWeight: i === timeline.length - 1 ? 600 : 400,
                    paddingTop: "2px",
                  }}>{t.year}</span>
                  <div style={{
                    position: "absolute", right: "-5px", top: "6px",
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: i === timeline.length - 1 ? "var(--accent)" : "var(--surface-2)",
                    border: `1px solid ${i === timeline.length - 1 ? "var(--accent)" : "var(--border-bright)"}`,
                    zIndex: 1,
                  }} />
                </div>
                <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "15px", lineHeight: 1.7, color: i === timeline.length - 1 ? "var(--text-primary)" : "var(--text-secondary)", paddingTop: "2px" }}>{t.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
