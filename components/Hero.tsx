"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.transform = "scaleX(1)";
    }, 600);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background gradient mesh */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 60% 30%, rgba(200,169,110,0.07) 0%, transparent 70%),
          radial-gradient(ellipse 50% 80% at 10% 80%, rgba(200,169,110,0.04) 0%, transparent 60%),
          linear-gradient(180deg, #0a0a0b 0%, #0d0d10 100%)
        `,
        zIndex: 0,
      }} />

      {/* Vertical rule lines */}
      {[15, 35, 65, 85].map((pos, i) => (
        <div key={i} style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: `${pos}%`,
          width: "1px",
          background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent)",
          zIndex: 0,
        }} />
      ))}

      {/* Year badge top right */}
      <div style={{
        position: "absolute",
        top: "120px",
        right: "48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        gap: "6px",
        zIndex: 2,
        opacity: 0,
        animation: "fadeIn 1s ease 1.2s forwards",
      }}>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.3em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
        }}>Wybory na sołtysa</span>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "72px",
          fontWeight: 300,
          color: "rgba(255,255,255,0.04)",
          lineHeight: 1,
        }}>2026</span>
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
        {/* Eyebrow */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "32px",
          opacity: 0,
          animation: "fadeUp 0.8s ease 0.2s forwards",
        }}>
          <div style={{ width: "40px", height: "1px", background: "var(--accent)" }} />
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            letterSpacing: "0.35em",
            color: "var(--accent)",
            textTransform: "uppercase",
          }}>Kampania 2026</span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(64px, 9vw, 120px)",
          fontWeight: 300,
          lineHeight: 0.9,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: "12px",
          opacity: 0,
          animation: "fadeUp 0.9s ease 0.35s forwards",
        }}>
          Bartosz
        </h1>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(64px, 9vw, 120px)",
          fontWeight: 700,
          fontStyle: "italic",
          lineHeight: 0.9,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: "48px",
          opacity: 0,
          animation: "fadeUp 0.9s ease 0.45s forwards",
        }}>
          Wojtkowiak
        </h1>

        {/* Tagline */}
        <p style={{
          fontFamily: "'Barlow', sans-serif",
          fontWeight: 300,
          fontSize: "18px",
          lineHeight: 1.7,
          color: "var(--text-secondary)",
          maxWidth: "480px",
          marginBottom: "56px",
          opacity: 0,
          animation: "fadeUp 0.9s ease 0.6s forwards",
        }}>
          Nowoczesne rolnictwo, godne życie na wsi i pewna przyszłość dla młodych
        </p>

        {/* CTA row */}
        <div style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          flexWrap: "wrap",
          opacity: 0,
          animation: "fadeUp 0.9s ease 0.75s forwards",
        }}>
          <a href="#vision" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--bg)",
            background: "var(--accent)",
            padding: "16px 36px",
            textDecoration: "none",
            display: "inline-block",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "var(--accent-hover)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "var(--accent)";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            Obietnice Wyborcze
          </a>
          <a href="#join-us" style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-primary)",
            border: "1px solid var(--border-bright)",
            padding: "15px 36px",
            textDecoration: "none",
            display: "inline-block",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = "var(--border-bright)";
            e.currentTarget.style.transform = "translateY(0)";
          }}>
            Zaangażuj się
          </a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "48px",
        right: "48px",
        height: "1px",
        background: "linear-gradient(90deg, var(--accent), transparent)",
        zIndex: 2,
        transformOrigin: "left",
        transform: "scaleX(0)",
        transition: "transform 1.2s cubic-bezier(0.76, 0, 0.24, 1) 0.8s",
        ref: lineRef,
      } as React.CSSProperties}
        ref={lineRef}
      />

      {/* Scroll indicator */}
      <div style={{
        position: "absolute",
        bottom: "40px",
        right: "48px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        zIndex: 2,
        opacity: 0,
        animation: "fadeIn 1s ease 1.5s forwards",
      }}>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.25em",
          color: "var(--text-muted)",
          textTransform: "uppercase",
          writingMode: "vertical-rl",
        }}>Scroll</span>
        <div style={{ width: "1px", height: "48px", background: "linear-gradient(180deg, var(--text-muted), transparent)" }} />
      </div>
    </section>
  );
}
