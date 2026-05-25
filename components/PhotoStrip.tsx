"use client";
import Image from "next/image";

const photos = [
  { src: "/images/strip-1.jpg", alt: "Campaign event in Iowa" },
  { src: "/images/strip-2.jpg", alt: "Meeting with union workers" },
  { src: "/images/strip-3.jpg", alt: "Town hall in Georgia" },
  { src: "/images/strip-4.jpg", alt: "Voter registration drive" },
  { src: "/images/strip-5.jpg", alt: "Debate preparation" },
];

export default function PhotoStrip() {
  return (
    <div style={{ overflow: "hidden", background: "var(--border)" }}>
      <style>{`
        .photo-strip {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
          height: 200px;
        }
        .photo-strip > div:nth-child(n+4) { display: none; }
        @media (min-width: 640px) {
          .photo-strip { grid-template-columns: repeat(5, 1fr); height: 280px; }
          .photo-strip > div:nth-child(n+4) { display: block; }
        }
      `}</style>
      <div className="photo-strip">
        {photos.map((photo, i) => (
          <div key={i} style={{ position: "relative", overflow: "hidden" }}
            onMouseEnter={e => {
              const img = e.currentTarget.querySelector("img") as HTMLElement;
              if (img) img.style.transform = "scale(1.08)";
              const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement;
              if (overlay) overlay.style.opacity = "0";
            }}
            onMouseLeave={e => {
              const img = e.currentTarget.querySelector("img") as HTMLElement;
              if (img) img.style.transform = "scale(1)";
              const overlay = e.currentTarget.querySelector(".overlay") as HTMLElement;
              if (overlay) overlay.style.opacity = "1";
            }}
          >
            <Image src={photo.src} alt={photo.alt} fill style={{ objectFit: "cover", filter: "grayscale(30%) brightness(0.75)", transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }} />
            <div className="overlay" style={{ position: "absolute", inset: 0, background: "rgba(10,10,11,0.25)", transition: "opacity 0.4s ease" }} />
          </div>
        ))}
      </div>
    </div>
  );
}
