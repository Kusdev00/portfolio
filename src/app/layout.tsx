import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const mono = JetBrains_Mono({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Markus — Python Developer from Estonia",
  description: "17-year-old Python & full-stack developer from Estonia.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={mono.className} style={{ minHeight: "100vh", backgroundColor: "var(--bg)", color: "var(--fg)", margin: 0 }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
