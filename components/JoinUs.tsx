"use client";
import { useState } from "react";

export default function JoinUs() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [zip, setZip] = useState("");

  const handleSubmit = () => {
    if (email && zip) setSubmitted(true);
  };

  return (
    <section id="join-us" style={{ padding: "80px 24px", background: "var(--surface)", position: "relative", overflow: "hidden" }}>
      <style>{`
        @media (min-width: 768px) {
          .joinus-section { padding: 120px 48px !important; }
          .joinus-inputs { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
      <div style={{ position: "absolute", top: "-60px", right: "-60px", width: "300px", height: "300px", borderRadius: "50%", border: "1px solid var(--border)", opacity: 0.4 }} />

      <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", marginBottom: "20px" }}>
          <div style={{ width: "40px", height: "1px", background: "var(--accent)" }} />
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "12px", letterSpacing: "0.35em", color: "var(--accent)", textTransform: "uppercase" }}>Zaangażuj się</span>
          <div style={{ width: "40px", height: "1px", background: "var(--accent)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(40px, 8vw, 76px)",
          fontWeight: 300,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
          marginBottom: "20px",
        }}>
          Historia nie dzieje się<br />
          <em style={{ fontStyle: "italic" }}>bez ciebie.</em>
        </h2>

        <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 300, fontSize: "16px", lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: "40px", maxWidth: "520px", margin: "0 auto 40px" }}>
          Dołącz do milionów Polaków budujących kampanię, która zdefiniuje to pokolenie. Zarejestruj się jako wolontariusz, przekaż darowiznę lub po prostu bądź na bieżąco.
        </p>

        {submitted ? (
          <div style={{ background: "var(--accent-dim)", border: "1px solid var(--accent)", padding: "40px", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center" }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 600, color: "var(--accent)" }}>You're in.</span>
            <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: "15px", color: "var(--text-secondary)" }}>Wkrótce się z Tobą skontaktujemy. Dziękujemy za wsparcie.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div className="joinus-inputs" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "12px" }}>
              <input
                type="email"
                placeholder="Twój adress e-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{ background: "var(--surface-2)", border: "1px solid var(--border-bright)", padding: "16px 20px", fontFamily: "'Barlow', sans-serif", fontSize: "15px", color: "var(--text-primary)", outline: "none", width: "100%", transition: "border-color 0.2s" }}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border-bright)")}
              />
              <input
                type="text"
                placeholder="Kod pocztowy"
                value={zip}
                onChange={e => setZip(e.target.value)}
                style={{ background: "var(--surface-2)", border: "1px solid var(--border-bright)", padding: "16px 20px", fontFamily: "'Barlow', sans-serif", fontSize: "15px", color: "var(--text-primary)", outline: "none", width: "100%", transition: "border-color 0.2s" }}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border-bright)")}
              />
            </div>
            <button
              onClick={handleSubmit}
              style={{ background: "var(--accent)", border: "none", padding: "18px 48px", fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: "14px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--bg)", cursor: "pointer", transition: "all 0.2s", width: "100%" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Dołącz do ruchu
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
