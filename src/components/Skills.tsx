"use client";
import { useEffect, useRef, useState } from "react";

const SKILLS = [
  { name: "Python", level: 92 }, { name: "Flask / FastAPI", level: 85 },
  { name: "FFmpeg / Video", level: 80 }, { name: "JavaScript / TypeScript", level: 72 },
  { name: "React / Next.js", level: 68 }, { name: "HTML / CSS / Tailwind", level: 82 },
  { name: "Git / GitHub", level: 85 }, { name: "REST APIs", level: 80 },
  { name: "NLP / Extraction", level: 70 }, { name: "Streamlit / Dashboards", level: 75 },
  { name: "SQL / SQLite", level: 65 }, { name: "Automation / Scripting", level: 90 },
];

const box: React.CSSProperties = { maxWidth: 860, marginInline: "auto", paddingInline: 32 };
const K = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-comment)", fontStyle:"italic"}}>{c}</span>;

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const o = new IntersectionObserver((e) => e.forEach((x) => x.isIntersecting && setVis(true)), { threshold: 0.15 });
    o.observe(ref.current); return () => o.disconnect();
  }, []);

  return (
    <section id="skills" style={{ paddingBlock: 112, ...box }} ref={ref}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 14, color: "var(--syntax-comment)" }}>/* 02 — Skills */</div>
        <div style={{ marginTop: 12, height: 3, width: 48, borderRadius: 2, background: "var(--primary)" }} className="glow-blue" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "28px 40px" }}>
        {SKILLS.map((s) => (
          <div key={s.name}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 14 }}>
              <span style={{ color: "var(--fg)" }}>{s.name}</span>
              <K c={`${s.level}%`} />
            </div>
            <div style={{ height: 8, borderRadius: 4, overflow: "hidden", background: "var(--surface-alt)" }}>
              <div style={{
                height: "100%", borderRadius: 4, width: vis ? `${s.level}%` : "0%",
                background: `linear-gradient(90deg, color-mix(in oklab, var(--primary) 60%, transparent), var(--primary))`,
                boxShadow: `0 0 12px color-mix(in oklab, var(--primary) 50%, transparent)`,
                transition: "width 1.2s ease-out",
              }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
