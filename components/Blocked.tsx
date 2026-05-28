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
            <h1 style={{
                display: "block",
                marginBottom: "24px",
                textAlign: "center"
            }}>Strona została zablokowana przez wychowawcę klasy 3TM</h1>

            <div style={{
                width: "fit-content",
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
                    marginRight: "12px"
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    <svg fill="currentColor" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
                    </svg>
                    Instagram
                </a>

                <a href="/login" style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    background: "none",
                    padding: "12px 24px",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.2s",
                    border: "1px solid var(--text-secondary)",
                    boxSizing: "border-box"
                }}
                onMouseEnter={e => {
                    e.currentTarget.style.background = "var(--border)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.border = "1px solid var(--text-primary)";
                    e.currentTarget.style.color = "var(--text-primary)";
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.background = "none";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.border = "1px solid var(--text-secondary)";
                    e.currentTarget.style.color = "var(--text-secondary)";
                }}>
                    <svg fill="currentColor" height="24px" viewBox="0 -890 820 820" width="24px">
                        <path d="m480-256.16 146.15-146.15L584-444.46l-74 74v-178h-60v178l-74-74-42.15 42.15L480-256.16ZM200-643.85v431.54q0 5.39 3.46 8.85t8.85 3.46h535.38q5.39 0 8.85-3.46t3.46-8.85v-431.54H200ZM215.39-140q-29.93 0-52.66-22.73Q140-185.46 140-215.39v-464.38q0-12.84 4.12-24.5 4.11-11.65 12.34-21.5l56.16-67.92q9.84-12.85 24.61-19.58Q252-820 268.46-820h422.31q16.46 0 31.42 6.73T747-793.69L803.54-725q8.23 9.85 12.34 21.69 4.12 11.85 4.12 24.7v463.22q0 29.93-22.73 52.66Q774.54-140 744.61-140H215.39Zm.23-563.84H744l-43.62-51.93q-1.92-1.92-4.42-3.08-2.5-1.15-5.19-1.15H268.85q-2.69 0-5.2 1.15-2.5 1.16-4.42 3.08l-43.61 51.93ZM480-421.92Z"/>
                    </svg>
                    Archiwum
                </a>
            </div>
        </div>

    </section>
  );
}
