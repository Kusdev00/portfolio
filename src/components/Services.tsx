"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const K = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-keyword)"}}>{c}</span>;
const F = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-fn)"}}>{c}</span>;
const V = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-var)"}}>{c}</span>;
const P = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-punct)"}}>{c}</span>;
const C = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-comment)", fontStyle:"italic"}}>{c}</span>;

const box: React.CSSProperties = { maxWidth: 860, marginInline: "auto", paddingInline: 32 };

const SERVICES = [
  {
    file: "automation.py",
    name: "AutomationScript",
    title: "Automation & scripts",
    price: "from €60",
    delivery: "2–3 days",
    desc: "Repetitive work turned into a script: spreadsheet/CSV cleanup, report generation, file renaming, data conversion. You send a sample, I deliver a tested script with instructions.",
    includes: ["1 revision round", "run instructions + sample output", "runs locally or on a schedule"],
  },
  {
    file: "scraper.py",
    name: "WebScraper",
    title: "Custom web scraper",
    price: "from €80",
    delivery: "3–5 days",
    desc: "Structured data from any public website: product listings, posts, directories. Auto-detecting selectors, anti-fragile to layout changes, export to CSV/JSON/SQLite.",
    includes: ["change detection", "export in the format you need", "one site or a list of sites"],
  },
  {
    file: "app.py",
    name: "WebApp",
    title: "Small web app or site",
    price: "from €250",
    delivery: "1–2 weeks",
    desc: "A landing page, dashboard, or internal tool: forms, charts, dashboards (Streamlit/Flask/Next.js). Scoped up front so the price and deadline are fixed before I start.",
    includes: ["scoped before work starts", "deployed or handed over", "responsive + fast"],
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="services" style={{ paddingBlock: 112, ...box }} ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 14, color: "var(--syntax-comment)" }}>{"/* 05 — Services */"}</div>
          <div style={{ marginTop: 12, height: 3, width: 48, borderRadius: 2, background: "var(--primary)" }} className="glow-blue" />
        </div>
      </motion.div>

      <p style={{ fontSize: 14, color: "var(--muted-foreground)", marginTop: -24, marginBottom: 32, lineHeight: 1.8 }}>
        <C c={"// "} />Fixed scope, fixed price, fixed deadline — so you know exactly what you&apos;re buying before we start.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
        {SERVICES.map((s, i) => (
          <motion.article key={s.name} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.35 }}
            className="glow-blue-hover" style={{ overflow: "hidden", borderRadius: 6, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", background: "var(--surface)", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--surface-alt) 60%, transparent)" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
              <span style={{ marginLeft: 12, fontSize: 12, color: "var(--syntax-comment)" }}>{s.file}</span>
            </div>
            <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
                <pre style={{ fontSize: 14, lineHeight: "24px", margin: 0, fontFamily: "inherit" }}>
                  <K c="class" /> <F c={s.name} /><P c="(" /><V c="Service" /><P c="):" />
                </pre>
                <span style={{ fontSize: 14, fontWeight: 700, color: "var(--syntax-string)", whiteSpace: "nowrap" }}>{s.price}</span>
              </div>
              <div style={{ fontSize: 13, color: "var(--fg)" }}>{s.title}<span style={{ color: "var(--syntax-comment)" }}> · {s.delivery}</span></div>
              <p style={{ fontSize: 13, lineHeight: 1.75, color: "var(--muted-foreground)", margin: 0 }}>{s.desc}</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "4px 0 0", display: "grid", gap: 4 }}>
                {s.includes.map((inc) => (
                  <li key={inc} style={{ fontSize: 12.5, color: "var(--muted-foreground)" }}>
                    <span style={{ color: "var(--syntax-string)", marginRight: 8 }}>✓</span>{inc}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "auto", paddingTop: 12 }}>
                <a href="#contact" style={{ fontSize: 13, fontWeight: 700, color: "var(--primary)", textDecoration: "none" }}>
                  <C c={"// "} />get a quote →
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <div style={{ marginTop: 28, fontSize: 13, color: "var(--muted-foreground)" }}>
        <C c={"/* "} />Bigger project? Custom quote — describe it in the form below.<C c={" */"} />
      </div>
    </section>
  );
}
