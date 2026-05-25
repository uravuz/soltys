"use client";

const endorsements = [
  { name: "Karol Nawrocki", role: "Prezydent Rzeczpospolitej Polski", quote: "Bartosz to złoty człowiek, który zawsze bezinteresownie pomoże przy maszynach, dlatego ma mój głos." },
  { name: "Donald Tusk", role: "Premier polskiego rządu", quote: "To niezwykle kulturalny i pomocny chłopak, który potrafi słuchać ludzi, więc będzie świetnym sołtysem." },
  { name: "Binjamin Netanjahu", role: "Premier Izraela", quote: "Głosuję na Bartosza, bo to swój chłop z nowoczesnymi pomysłami, który naprawdę ruszy naszą wieś do przodu." },
  { name: "Jeffrey Epstein", role: "Amerykański finansista", quote: "Znam go od dziecka i wiem, że ma serce po właściwej stronie – to jedyny słuszny wybór dla naszej społeczności." },
];

export default function Endorsements() {
  return (
    <section id="endorsements" style={{ padding: "80px 24px", background: "var(--bg)", position: "relative", overflow: "hidden" }}>
      <style>{`
        @media (min-width: 768px) {
          .endorsements-section { padding: 120px 48px !important; }
          .endorsements-header { flex-direction: row !important; align-items: flex-end !important; }
          .endorsements-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      <div className="endorsements-header" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", marginBottom: "48px", gap: "20px" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "1px", background: "var(--accent)" }} />
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", letterSpacing: "0.35em", color: "var(--accent)", textTransform: "uppercase" }}>Kto jest z nami</span>
          </div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(36px, 6vw, 58px)",
            fontWeight: 300,
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
          }}>Wspierany przez przywódców<br />z całego świata.</h2>
        </div>
        <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", letterSpacing: "0.2em", color: "var(--text-muted)", textTransform: "uppercase" }}>
          400+ dzieci przedszkolnych · 85 organizacji · 200+ organów państwowych
        </div>
      </div>

      <div className="endorsements-grid" style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gap: "1px",
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}>
        {endorsements.map((e, i) => (
          <div key={i} style={{
            background: "var(--bg)",
            padding: "36px 28px",
            transition: "background 0.3s",
          }}
          onMouseEnter={e2 => (e2.currentTarget.style.background = "var(--surface)")}
          onMouseLeave={e2 => (e2.currentTarget.style.background = "var(--bg)")}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "64px", color: "var(--accent)", lineHeight: 0.6, marginBottom: "20px", opacity: 0.4 }}>"</div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 400, fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.65, marginBottom: "24px" }}>{e.quote}</p>
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "16px" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "15px", letterSpacing: "0.05em", color: "var(--text-primary)", marginBottom: "4px" }}>{e.name}</div>
              <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: "13px", color: "var(--text-muted)" }}>{e.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
