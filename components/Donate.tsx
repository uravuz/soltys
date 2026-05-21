"use client";
import { useState } from "react";

const amounts = [25, 50, 100, 250, 500];

export default function Donate() {
  const [selected, setSelected] = useState(50);
  const [custom, setCustom] = useState("");

  return (
    <section id="donate" style={{
      padding: "120px 48px",
      background: "var(--bg)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "80px",
      alignItems: "center",
    }}>
      {/* Left content */}
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
          }}>Fund the Future</span>
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(40px, 4vw, 58px)",
          fontWeight: 300,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "24px",
        }}>
          Every dollar is a vote cast before Election Day.
        </h2>

        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: 1.85,
          color: "var(--text-secondary)",
          marginBottom: "40px",
        }}>
          92% of our donations come from individuals giving $100 or less. This campaign belongs to the people — and it's funded by them.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {[
            { label: "$25 keeps the lights on at a field office for a day." },
            { label: "$100 trains a new volunteer coordinator." },
            { label: "$500 funds a week of digital outreach in a swing state." },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                marginTop: "7px",
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "14px",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: donation widget */}
      <div style={{
        background: "var(--surface)",
        border: "1px solid var(--border-bright)",
        padding: "48px",
      }}>
        <h3 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          letterSpacing: "0.2em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          marginBottom: "28px",
        }}>Select an Amount</h3>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px",
          marginBottom: "16px",
        }}>
          {amounts.map(amt => (
            <button
              key={amt}
              onClick={() => { setSelected(amt); setCustom(""); }}
              style={{
                background: selected === amt ? "var(--accent)" : "transparent",
                border: `1px solid ${selected === amt ? "var(--accent)" : "var(--border-bright)"}`,
                padding: "14px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                color: selected === amt ? "var(--bg)" : "var(--text-secondary)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={e => {
                if (selected !== amt) {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }
              }}
              onMouseLeave={e => {
                if (selected !== amt) {
                  e.currentTarget.style.borderColor = "var(--border-bright)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }
              }}
            >
              ${amt}
            </button>
          ))}
          <input
            type="number"
            placeholder="Other"
            value={custom}
            onChange={e => { setCustom(e.target.value); setSelected(0); }}
            style={{
              background: "transparent",
              border: "1px solid var(--border-bright)",
              padding: "14px",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              color: "var(--text-primary)",
              outline: "none",
              textAlign: "center",
            }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "42px",
            fontWeight: 600,
            color: "var(--accent)",
            textAlign: "center",
            marginBottom: "4px",
          }}>
            ${custom || selected}
          </div>
          <div style={{
            fontFamily: "'Barlow', sans-serif",
            fontSize: "12px",
            color: "var(--text-muted)",
            textAlign: "center",
          }}>one-time contribution</div>
        </div>

        <button style={{
          width: "100%",
          background: "var(--accent)",
          border: "none",
          padding: "18px",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 600,
          fontSize: "14px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "var(--bg)",
          cursor: "pointer",
          transition: "all 0.2s",
          marginBottom: "16px",
        }}
        onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-hover)"; }}
        onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; }}
        >
          Donate Now →
        </button>

        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontSize: "11px",
          color: "var(--text-muted)",
          textAlign: "center",
          lineHeight: 1.6,
        }}>
          Paid for by Vance for President, Inc. Contributions are not tax deductible. Max $3,300/person. FEC rules apply.
        </p>
      </div>
    </section>
  );
}
