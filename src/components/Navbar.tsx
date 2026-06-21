"use client";
import { useEffect, useState } from "react";

function GithubIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.42.36.79 1.07.79 2.17v3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>);
}
function SunIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5" /></svg>);
}
function MoonIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" /></svg>);
}

const navLinks = [["About","#about"],["Skills","#skills"],["Projects","#projects"],["Experience","#experience"],["Contact","#contact"]];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light"|"dark">("dark");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, height: 56, zIndex: 50,
      borderBottom: "1px solid color-mix(in oklab, var(--border) 60%, transparent)",
      backdropFilter: "blur(16px)",
      backgroundColor: scrolled ? "color-mix(in oklab, var(--bg) 75%, transparent)" : "transparent",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: 860, marginInline: "auto", paddingInline: 32, height: "100%" }}>
        <a href="#" style={{ fontSize: 14, fontWeight: 700, color: "var(--fg)", textDecoration: "none" }}>
          <span style={{ color: "var(--syntax-comment)" }}>{"/* "}</span>m@dev<span style={{ color: "var(--syntax-comment)" }}>{" */"}</span>
        </a>
        <nav style={{ display: "flex", gap: 28, fontSize: 12 }}>
          {navLinks.map(([label, href]) => (
            <a key={href} href={href} style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>
              <span style={{ color: "var(--syntax-comment)" }}>{"// "}</span>{label.toLowerCase()}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => {
            const next = theme === "dark" ? "light" : "dark";
            setTheme(next);
            document.documentElement.style.setProperty("--bg", next === "dark" ? "#0f1720" : "#f8fafc");
            document.documentElement.style.setProperty("--fg", next === "dark" ? "#e2e8f0" : "#0f171f");
            document.documentElement.style.setProperty("--surface", next === "dark" ? "#1a2535" : "#f2f6f8");
            document.documentElement.style.setProperty("--surface-alt", next === "dark" ? "#243044" : "#e7ecf0");
            document.documentElement.style.setProperty("--border", next === "dark" ? "#334155" : "#d2d8dd");
            document.documentElement.style.setProperty("--muted-foreground", next === "dark" ? "#8899aa" : "#5b646f");
          }} style={{ width: 36, height: 36, display: "grid", placeItems: "center", border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", borderRadius: 6, background: "transparent", color: "var(--muted-foreground)", cursor: "pointer" }}>
            {theme === "dark" ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
          </button>
          <a href="https://github.com/Kusdev00" target="_blank" rel="noreferrer" style={{ width: 36, height: 36, display: "grid", placeItems: "center", border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", borderRadius: 6, color: "var(--muted-foreground)", textDecoration: "none" }}>
            <GithubIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
