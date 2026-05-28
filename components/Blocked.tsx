"use client";
export default function Blocked() {

  return (
    <section>
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

        <div style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            padding: "10px",
            zIndex: 1,
        }}>
            {/* <img src="/images/soltys.jpg" style={{
                display:"block",
                marginLeft:"auto",
                marginRight:"auto",
                height: "120px",
                marginBottom: "24px"
            }}/> */}

            <h1 style={{
                display: "block",
                marginBottom: "24px",
                textAlign: "center"
            }}>Strona zablokowana przez wychowawcę klasy 3TM</h1>

            <div style={{
                width: "min-content",
                transform: "translateX(-50%)",
                position: "relative",
                left: "50%"
            }}>

                <a href="https://instagram.com/soltys.zsp1/" target="_blank" style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--bg)",
                    background: "var(--accent)",
                    padding: "12px 24px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                    Instagram
                </a>
            </div>
        </div>

    </section>
  );
}
