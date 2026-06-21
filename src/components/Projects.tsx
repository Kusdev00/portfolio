"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const K = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-keyword)"}}>{c}</span>;
const F = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-fn)"}}>{c}</span>;
const V = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-var)"}}>{c}</span>;
const P = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-punct)"}}>{c}</span>;
const C = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-comment)", fontStyle:"italic"}}>{c}</span>;

const PROJECTS = [
  { file: "scrapepro.py", name: "ScrapePro", desc: "Professional web scraping CLI toolkit. Auto-detects page structure, CSS/XPath selectors, site crawling, change detection, export to JSON/CSV/XLSX/SQLite.", tags: ["Python","CLI","Scraping"], github: "https://github.com/Kusdev00/scrapepro" },
  { file: "ai_clipper.py", name: "AIClipper", desc: "Automated video clipping pipeline. Flask API, FFmpeg blur effects for 9:16, Kokoro TTS subtitles, concurrent job processing.", tags: ["Python","Flask","FFmpeg"], github: "https://github.com/Kusdev00/ai-clipper" },
  { file: "trend_engine.py", name: "TrendEngine", desc: "Viral story discovery. Reddit, Google Trends, News RSS. NLP entity extraction, velocity scoring, Streamlit dashboard.", tags: ["Python","NLP","Streamlit"], github: null },
  { file: "video_gen.py", name: "VideoGen", desc: "TikTok-ready video generation. Pillow text burning, TTS narration, ffmpeg subprocess. Windows-compatible.", tags: ["Python","FFmpeg","TTS"], github: null },
];

const box: React.CSSProperties = { maxWidth: 860, marginInline: "auto", paddingInline: 32 };

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="projects" style={{ paddingBlock: 112, ...box }} ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 14, color: "var(--syntax-comment)" }}>/* 03 — Projects */</div>
          <div style={{ marginTop: 12, height: 3, width: 48, borderRadius: 2, background: "var(--primary)" }} className="glow-blue" />
        </div>
      </motion.div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
        {PROJECTS.map((p, i) => (
          <motion.article key={p.name} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.08, duration: 0.35 }}
            className="glow-blue-hover" style={{ overflow: "hidden", borderRadius: 6, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", background: "var(--surface)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--surface-alt) 60%, transparent)" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
              <span style={{ marginLeft: 12, fontSize: 12, color: "var(--syntax-comment)" }}>{p.file}</span>
            </div>
            <div style={{ padding: 20 }}>
              <pre style={{ fontSize: 14, lineHeight: "28px", margin: 0, fontFamily: "inherit" }}>
                <K c="class" /> <F c={p.name} /><P c="(" /><V c="Project" /><P c="):" />
              </pre>
              <p style={{ marginTop: 12, paddingLeft: 16, fontSize: 14, lineHeight: 1.8, color: "var(--muted-foreground)" }}>
                <C c={`"""${p.desc}"""`} />
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20, paddingLeft: 16 }}>
                {p.tags.map((t) => (
                  <span key={t} style={{ borderRadius: 4, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", padding: "2px 8px", fontSize: 12, color: "var(--syntax-string)" }}>&quot;{t}&quot;</span>
                ))}
              </div>
              {p.github && <div style={{ marginTop: 20, paddingLeft: 16, fontSize: 12 }}><a href={p.github} target="_blank" rel="noreferrer" style={{ color: "var(--primary)" }}>.source()</a></div>}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
