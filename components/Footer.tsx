"use client";

const footerLinks = {
  Kampania: ["Wizja", "Problemy", "Wydarzenia", "Prasa"],
  "Nawiąż": ["Wspomóż", "Merch", "Zagłosuj"],
  Prawne: ["Polityka prywatności", "Warunki korzystania", "Dostępność"],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", padding: "60px 24px 32px" }}>
      <style>{`
        @media (min-width: 768px) {
          .footer-section { padding: 80px 48px 40px !important; }
          .footer-brand { grid-column: auto !important; }
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr 1fr !important;
            gap: 64px !important;
          }
        }
      `}</style>
      <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "48px" }}>
        {/* Brand — full width on mobile, first column on desktop */}
        <div className="footer-brand" style={{ gridColumn: "1 / -1" }}>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "20px", letterSpacing: "0.2em", color: "var(--text-primary)", textTransform: "uppercase", marginBottom: "4px" }}>Bartosz Wojtkowiak</div>
          <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", letterSpacing: "0.35em", color: "var(--accent)", textTransform: "uppercase", marginBottom: "20px" }}>Na sołtysa · 2026</div>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "14px", lineHeight: 1.75, color: "var(--text-muted)", maxWidth: "280px" }}>
            Budujemy silniejszą i bardziej zjednoczoną wieś – społeczność po społeczności.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "24px" }}>
            {["X", "IG", "FB", "YT"].map(s => (
              <div key={s} style={{ width: "36px", height: "36px", border: "1px solid var(--border-bright)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "11px", letterSpacing: "0.1em", color: "var(--text-muted)", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-bright)"; e.currentTarget.style.color = "var(--text-muted)"; }}
              >{s}</div>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "11px", letterSpacing: "0.25em", color: "var(--text-muted)", textTransform: "uppercase", marginBottom: "16px" }}>{heading}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {links.map(link => (
                <a key={link} href="#" style={{ fontFamily: "'Barlow', sans-serif", fontSize: "14px", color: "var(--text-secondary)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >{link}</a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "24px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
        <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "12px", color: "var(--text-muted)" }}>
          © 2026 Bartosz Wojtkowiak na sołtysa. Wszelkie prawa zastrzeżone.
        </span>
        <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "16px", fontStyle: "italic", color: "var(--text-muted)", letterSpacing: "0.02em" }}>
          Nowy kierunek dla Polskiej wsi.
        </span>
      </div>
    </footer>
  );
}