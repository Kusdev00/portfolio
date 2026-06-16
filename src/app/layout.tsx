import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "[Your Name] | Python Developer",
  description:
    "Python developer specializing in web applications, automation, and backend systems. Based in Estonia. Available for freelance projects.",
  keywords: [
    "Python developer",
    "freelance",
    "web development",
    "automation",
    "Flask",
    "API",
  ],
  authors: [{ name: "[Your Name]" }],
  openGraph: {
    title: "[Your Name] | Python Developer",
    description:
      "Python developer specializing in web applications, automation, and backend systems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "[Your Name] | Python Developer",
    description:
      "Python developer specializing in web applications, automation, and backend systems.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Navbar />
        <ThemeToggle />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
