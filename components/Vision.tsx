"use client";

const pillars = [
  {
    num: "01",
    title: "Turnieje",
    desc: "Wprowadzę wiele turniejów z różnych dyscyplin takich jak Madżong.",
    image: "mahjong.jpg"
  },
  {
    num: "02",
    title: "Renowacja szkoły",
    desc: "Przeprowadzę remont zewnętrznego miejsca spotkań uczniów zwane również \"Palarnią\" przy pomocy technikum budowlanego.",
    image: "palarnia.jpg"
  },
  {
    num: "03",
    title: "Zajęcia dodatkowe",
    desc: "Zorganizuję więcej zajęc pozalekcyjnych, na przykład zajęcia dodatkowe z chemii, gdzie uczniowie będą mogli nabyć umiejętności fermentacji oraz destylacji.",
    image: "bimber.jpg"
  },
  {
    num: "04",
    title: "Współpraca międzynarodowa",
    desc: "Umocnię wsółpracę narodową z każdym krajem, będę wspierał finansowo kraje, które najbardziej tego potrzebują, głównie Izrael.",
    image: "israel.jpg"
  },
];

export default function Vision() {
  return (
    <section id="vision" style={{
      padding: "120px 48px",
      background: "var(--bg)",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background text */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(120px, 20vw, 260px)",
        fontWeight: 700,
        color: "rgba(255,255,255,0.015)",
        whiteSpace: "nowrap",
        userSelect: "none",
        pointerEvents: "none",
        letterSpacing: "-0.05em",
      }}>VISION</div>

      {/* Section header */}
      <div style={{ marginBottom: "80px" }}>
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
          }}>Obietnice wyborcze</span>
        </div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(42px, 5vw, 64px)",
          fontWeight: 300,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          maxWidth: "600px",
        }}>
          Polska wieś to tradycja, rozwój i fundament naszej gospodarki
        </h2>
      </div>

      {/* Pillars grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "1px",
        background: "var(--border)",
        border: "1px solid var(--border)",
      }}>
        {pillars.map((p, i) => (
          <div
            key={i}
            style={{
              background: "var(--bg)",
              padding: "56px",
              position: "relative",
              transition: "background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--surface)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--bg)")}
          >

            <img
              src = {"images/" + p.image}
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                display: "block",
                marginBottom: "32px",
                background: "var(--border)",
              }}
            />


            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "80px",
              fontWeight: 600,
              color: "rgba(200,169,110,0.12)",
              lineHeight: 1,
              display: "block",
              marginBottom: "24px",
              letterSpacing: "-0.03em",
            }}>{p.num}</span>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "28px",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "16px",
              letterSpacing: "-0.01em",
            }}>{p.title}</h3>
            <p style={{
              fontFamily: "'Barlow', sans-serif",
              fontWeight: 300,
              fontSize: "15px",
              lineHeight: 1.75,
              color: "var(--text-secondary)",
            }}>{p.desc}</p>

            {/* Corner accent */}
            <div style={{
              position: "absolute",
              bottom: "24px",
              right: "24px",
              width: "24px",
              height: "24px",
              borderRight: "1px solid var(--border-bright)",
              borderBottom: "1px solid var(--border-bright)",
            }} />
          </div>
        ))}
      </div>
    </section>
  );
}
