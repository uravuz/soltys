"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Obietnice", link: "vision" },
    { name: "O", link: "about" },
    { name: "Rekomendacje", link: "endorsements" },
    { name: "Dołącz do nas", link: "join-us" },
  ];

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "14px 24px" : "20px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled || menuOpen ? "rgba(10,10,11,0.97)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.4s ease",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "2px" }}>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(14px, 4vw, 20px)",
          letterSpacing: "0.15em",
          color: "var(--text-primary)",
          textTransform: "uppercase",
        }}>Bartosz Wojtkowiak</span>
        <span style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 400,
          fontSize: "10px",
          letterSpacing: "0.3em",
          color: "var(--accent)",
          textTransform: "uppercase",
        }}>Na Sołtysa · 2026</span>
      </a>

      {/* Desktop nav */}
      <div style={{ display: "flex", alignItems: "center", gap: "40px" }} className="desktop-nav">
        {links.map((link) => (
          <a
            key={link.link}
            href={`#${link.link}`}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 500,
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--text-secondary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#donate"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--bg)",
            background: "var(--accent)",
            padding: "10px 22px",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
          onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
        >
          Wspomóż
        </a>
      </div>

      {/* Hamburger button */}
      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px",
          display: "none",
          flexDirection: "column",
          gap: "5px",
        }}
        aria-label="Menu"
      >
        {[0, 1, 2].map(i => (
          <span key={i} style={{
            display: "block",
            width: "24px",
            height: "1px",
            background: menuOpen && i === 1 ? "transparent" : "var(--text-primary)",
            transform: menuOpen
              ? i === 0 ? "rotate(45deg) translate(4px, 4px)"
              : i === 2 ? "rotate(-45deg) translate(4px, -4px)"
              : "none"
              : "none",
            transition: "all 0.3s ease",
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10,10,11,0.98)",
            borderBottom: "1px solid var(--border)",
            padding: "24px",
            display: "none",
            flexDirection: "column",
            gap: "0",
          }}
        >
          {links.map((link) => (
            <a
              key={link.link}
              href={`#${link.link}`}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 500,
                fontSize: "16px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid var(--border)",
                display: "block",
              }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#donate"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--bg)",
              background: "var(--accent)",
              padding: "16px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "16px",
              display: "block",
            }}
          >
            Wspomóż
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          .mobile-menu { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
