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
    <section id="join-us" style={{
      padding: "120px 48px",
      background: "var(--surface)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative element */}
      <div style={{
        position: "absolute",
        top: "-60px",
        right: "-60px",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        border: "1px solid var(--border)",
        opacity: 0.4,
      }} />
      <div style={{
        position: "absolute",
        top: "-20px",
        right: "-20px",
        width: "240px",
        height: "240px",
        borderRadius: "50%",
        border: "1px solid var(--border-bright)",
        opacity: 0.3,
      }} />

      <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
          }}>Get Involved</span>
          <div style={{ width: "40px", height: "1px", background: "var(--accent)" }} />
        </div>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(48px, 6vw, 76px)",
          fontWeight: 300,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.05,
          marginBottom: "24px",
        }}>
          History doesn't happen<br />
          <em style={{ fontStyle: "italic" }}>without you.</em>
        </h2>

        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: "17px",
          lineHeight: 1.75,
          color: "var(--text-secondary)",
          marginBottom: "56px",
          maxWidth: "520px",
          margin: "0 auto 56px",
        }}>
          Join millions of Americans building the campaign that will define this generation. Sign up to volunteer, donate, or simply stay informed.
        </p>

        {submitted ? (
          <div style={{
            background: "var(--accent-dim)",
            border: "1px solid var(--accent)",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            alignItems: "center",
          }}>
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "32px",
              fontWeight: 600,
              color: "var(--accent)",
            }}>You're in.</span>
            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "15px",
              color: "var(--text-secondary)",
            }}>We'll be in touch soon. Thank you for standing with us.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-bright)",
                  padding: "16px 20px",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "15px",
                  color: "var(--text-primary)",
                  outline: "none",
                  width: "100%",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border-bright)")}
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={zip}
                onChange={e => setZip(e.target.value)}
                style={{
                  background: "var(--surface-2)",
                  border: "1px solid var(--border-bright)",
                  padding: "16px 20px",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "15px",
                  color: "var(--text-primary)",
                  outline: "none",
                  width: "100%",
                  transition: "border-color 0.2s",
                }}
                onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                onBlur={e => (e.target.style.borderColor = "var(--border-bright)")}
              />
            </div>
            <button
              onClick={handleSubmit}
              style={{
                background: "var(--accent)",
                border: "none",
                padding: "18px 48px",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--bg)",
                cursor: "pointer",
                transition: "all 0.2s",
                width: "100%",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--accent-hover)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Join the Movement
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
