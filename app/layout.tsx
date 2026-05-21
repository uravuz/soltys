import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcus A. Vance for President | A New Direction",
  description: "Official campaign website for Marcus A. Vance, presidential candidate. Building a stronger, more united future for all Americans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
