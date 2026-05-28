import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import "../globals.css";

export const metadata: Metadata = {
  title: "Bartosz Wojtkowiak na sołtysa",
  description: "Official campaign website for Marcus A. Vance, presidential candidate. Building a stronger, more united future for all Americans.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const accessCookie = cookieStore.get("access")?.value

  if (accessCookie !== "soltys91912") {
    redirect("/login");
  }

  return (
    <html lang="pl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
