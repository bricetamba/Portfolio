import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Brice Tamba Prono — Pharmaceutical Brand Manager",
  description: "Pharmaceutical Brand Manager at Pfizer. Specialist in vaccines, rare diseases, omnichannel marketing and digital transformation.",
  authors: [{ name: "Brice Tamba Prono" }],
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
