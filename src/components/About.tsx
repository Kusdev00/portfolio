"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const box: React.CSSProperties = { maxWidth: 860, marginInline: "auto", paddingInline: 32 };

function Label({ n, title }: { n: string; title: string }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ fontSize: 14, color: "var(--syntax-comment)" }}>/* {n} — {title} */</div>
      <div style={{ marginTop: 12, height: 3, width: 48, borderRadius: 2, background: "var(--primary)" }} className="glow-blue" />
    </div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section id="about" style={{ paddingBlock: 112, ...box }} ref={ref}>
      <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }}>
        <Label n="01" title="About" />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1, duration: 0.4 }}
        style={{ display: "grid", gap: 40, gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", fontSize: 15, lineHeight: 1.85, color: "var(--muted-foreground)" }}>
        <p>I&apos;m <strong style={{ color: "var(--fg)" }}>Markus</strong>, a 17-year-old developer from Estonia. I build tools, automations, and full-stack apps. From video processing pipelines to web scraping toolkits, I ship working software.</p>
        <p>I work with an AI-assisted workflow — fast delivery without sacrificing quality. Available for freelance from quick scripts to full web apps. Rate: <span style={{ color: "var(--syntax-string)" }}>$20-35/hr</span>.</p>
      </motion.div>
    </section>
  );
}
