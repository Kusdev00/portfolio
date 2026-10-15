"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const C = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-comment)", fontStyle:"italic"}}>{c}</span>;

const box: React.CSSProperties = { maxWidth: 860, marginInline: "auto", paddingInline: 32 };

const CASES = [
  {
    id: "01",
    file: "scrapepro_case.md",
    title: "ScrapePro — extracting data that changes shape",
    problem: "Scraping breaks whenever a site's layout shifts, and every new site usually means rewriting selectors by hand.",
    approach: "Built a CLI toolkit that auto-detects page structure, supports CSS/XPath selectors, crawls sites, and re-checks pages for changes — so one tool covers many sites instead of one script per site.",
    result: "Exports to 4 formats (JSON, CSV, XLSX, SQLite), change detection flags updated pages, no per-site code required for standard layouts.",
    stack: ["Python", "CLI", "CSS/XPath", "SQLite"],
    link: { label: "github.com/Kusdev00/scrapepro", href: "https://github.com/Kusdev00/scrapepro" },
  },
  {
    id: "02",
    file: "aiclipper_case.md",
    title: "AIClipper — turning long videos into vertical clips",
    problem: "Cutting long videos into 9:16 shorts is slow manual work: crop, blur, subtitles, render — repeated for every clip.",
    approach: "Designed a Flask REST API with a concurrent job queue: clients submit a video, workers run FFmpeg blur effects for 9:16 output and generate subtitles with Kokoro TTS, rendering automatically.",
    result: "One submission produces a finished vertical clip with burned-in subtitles — no manual editing steps, jobs processed in parallel instead of one at a time.",
    stack: ["Python", "Flask REST API", "FFmpeg", "Kokoro TTS"],
    link: null,
  },
];

export default function CaseStudies() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="work" style={{ paddingBlock: 112, ...box }} ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 14, color: "var(--syntax-comment)" }}>{"/* 04 — Case Studies */"}</div>
          <div style={{ marginTop: 12, height: 3, width: 48, borderRadius: 2, background: "var(--primary)" }} className="glow-blue" />
        </div>
      </motion.div>

      <div style={{ display: "grid", gap: 24 }}>
        {CASES.map((cs, i) => (
          <motion.article key={cs.id} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.35 }}
            className="glow-blue-hover" style={{ borderRadius: 6, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", background: "var(--surface)", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--surface-alt) 60%, transparent)" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
              <span style={{ marginLeft: 12, fontSize: 12, color: "var(--syntax-comment)" }}>{cs.file}</span>
            </div>
            <div style={{ padding: 24, display: "grid", gap: 16 }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--fg)", margin: 0 }}>{cs.title}</h3>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 12, color: "var(--syntax-fn)", marginBottom: 6 }}><C c={"// "} />problem</div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: "var(--muted-foreground)", margin: 0 }}>{cs.problem}</p>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "var(--syntax-keyword)", marginBottom: 6 }}><C c={"// "} />approach</div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: "var(--muted-foreground)", margin: 0 }}>{cs.approach}</p>
                </div>
                <div>
                  <div style={{ fontSize: 12, color: "var(--syntax-string)", marginBottom: 6 }}><C c={"// "} />result</div>
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: "var(--muted-foreground)", margin: 0 }}>{cs.result}</p>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 }}>
                {cs.stack.map((t) => (
                  <span key={t} style={{ borderRadius: 4, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", padding: "2px 8px", fontSize: 12, color: "var(--syntax-string)" }}>&quot;{t}&quot;</span>
                ))}
                <span style={{ marginLeft: "auto", fontSize: 13 }}>
                  {cs.link ? (
                    <a href={cs.link.href} target="_blank" rel="noreferrer" style={{ color: "var(--primary)", textDecoration: "none" }}>.source()</a>
                  ) : (
                    <C c={"// source available on request — ask via the form"} />
                  )}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
