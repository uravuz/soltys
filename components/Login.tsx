"use client";
import { useState } from "react";

export default function Login() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!code) {
        return; 
    }

    if (code == "soltys4029w") {
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1);

        document.cookie = `access=soltys91912; expires=${expires.toUTCString()}; path=/`;

        window.location.href = "/archiwum";
    } else {
        setError("1");
    }
  };

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
            }}>Wprowadź kod dostępu</h1>

            <div style={{
                width: "min(500px, 100%)",
                transform: "translateX(-50%)",
                position: "relative",
                left: "50%"
            }}>
                <input
                type="text"
                placeholder="kod dostępu"
                value={code}
                onChange={e => setCode(e.target.value)}
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

                <p style={{
                    display: error ? "block" : "none",
                    color: "#e05c5c",
                    margin: "8px 0 0",
                    fontSize: "13px",
                    fontFamily: "'Barlow', sans-serif",
                    letterSpacing: "0.03em",
                    minHeight: "18px",
                    transition: "opacity 0.2s",
                    width: "100%"
                }}>
                    Nieprawidłowy kod dostępu
                </p>

                <button
                    onClick={ handleSubmit }
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
                        marginTop: "12px"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-hover)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                    Przejdź dalej
                </button>
            </div>
        </div>

    </section>
  );
}
