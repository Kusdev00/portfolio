"use client";
import { useEffect, useState } from "react";

const C = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-comment)", fontStyle:"italic"}}>{c}</span>;

export default function Footer() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <footer style={{ borderTop: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", paddingBlock: 40 }}>
      <div style={{ maxWidth: 860, marginInline: "auto", paddingInline: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 12 }}><C c={`// © ${new Date().getFullYear()} Markus`} /></div>
        {show && <a href="#top" style={{ fontSize: 12, color: "var(--muted-foreground)", textDecoration: "none" }}>↑ back_to_top()</a>}
      </div>
    </footer>
  );
}
