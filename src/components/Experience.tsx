"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const K = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-keyword)"}}>{c}</span>;
const F = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-fn)"}}>{c}</span>;
const P = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-punct)"}}>{c}</span>;
const C = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-comment)", fontStyle:"italic"}}>{c}</span>;

const TIMELINE = [
  { when: "2026", role: "scrapepro", org: "Web Scraping Toolkit", bullets: ["Built a professional CLI toolkit for web scraping with auto-detection.", "CSS/XPath selectors, site crawling, change detection, multi-format export."] },
  { when: "Jul 2026", role: "ai_clipper", org: "Video Processing Pipeline", bullets: ["Automated video clipping with Flask REST API and concurrent job queue.", "FFmpeg blur effects for 9:16, Kokoro TTS subtitles, .ass rendering."] },
  { when: "Jun 2026", role: "trend_engine", org: "Viral Story Discovery", bullets: ["Multi-source trend discovery from Reddit, Google Trends, News RSS.", "NLP entity extraction, controversy/velocity scoring, Streamlit dashboard."] },
  { when: "Jun 2026", role: "video_generator", org: "TikTok Automation", bullets: ["Pillow text burning, TTS narration, ffmpeg subprocess rendering.", "Windows-compatible pipeline avoiding MoviePy issues."] },
];

const box: React.CSSProperties = { maxWidth: 860, marginInline: "auto", paddingInline: 32 };

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="experience" style={{ paddingBlock: 112, ...box }} ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 14, color: "var(--syntax-comment)" }}>/* 04 — Experience */</div>
          <div style={{ marginTop: 12, height: 3, width: 48, borderRadius: 2, background: "var(--primary)" }} className="glow-blue" />
        </div>
      </motion.div>
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {TIMELINE.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.35 }}
            style={{ display: "flex", gap: 24 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 32, flexShrink: 0 }}>
              <div className="glow-blue" style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--primary)", flexShrink: 0 }} />
              {i < TIMELINE.length - 1 && <div style={{ width: 1, flex: 1, minHeight: 60, background: "var(--border)", marginTop: 8 }} />}
            </div>
            <div style={{ flex: 1, paddingBottom: 8, minWidth: 0 }}>
              <div style={{ fontSize: 12 }}><C c={`// ${item.when}`} /></div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--fg)", marginTop: 4 }}>
                <K c="def" /> <F c={item.role} /><P c="():" />
              </h3>
              <div style={{ fontSize: 14, color: "var(--muted-foreground)", marginTop: 4 }}>@ {item.org}</div>
              <ul style={{ marginTop: 12, paddingLeft: 0, listStyle: "none" }}>
                {item.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.8 }}>
                    <span style={{ color: "var(--primary)", marginRight: 8 }}>›</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
