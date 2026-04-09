import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Koydo — CAT Prep",
  description: "MBA admissions prep — VARC, DILR, QA practice questions and mock tests powered by Koydo.",
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
