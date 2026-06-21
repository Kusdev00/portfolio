"use client";
import { motion } from "framer-motion";
function GithubIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.42.36.79 1.07.79 2.17v3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>);
}
function LinkedinIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-4V9Z" /></svg>);
}
function MailIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 7 9-7" /></svg>);
}
const K = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-keyword)"}}>{c}</span>;
const S = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-string)"}}>{c}</span>;
const F = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-fn)"}}>{c}</span>;
const V = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-var)"}}>{c}</span>;
const C = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-comment)", fontStyle:"italic"}}>{c}</span>;
const P = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-punct)"}}>{c}</span>;

const box: React.CSSProperties = {
  maxWidth: 860, marginInline: "auto", paddingInline: 32,
};

export default function Hero() {
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden", paddingTop: 160, paddingBottom: 112, ...box }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.6 }} className="grid-bg" />
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", opacity: 0.8 }} className="crt-glow" />

      <div style={{ position: "relative" }}>
        <div style={{ fontSize: 13, lineHeight: "28px", color: "var(--syntax-comment)", marginBottom: 40 }}>
          <div>// ✓ Compiling portfolio...</div>
          <div>// ✓ Loaded modules: react, motion, coffee</div>
          <div>// ✓ Ready in 0.42s</div>
        </div>

        <pre style={{ whiteSpace: "pre-wrap", wordBreak: "break-word", fontSize: "clamp(1.05rem,2.2vw,1.4rem)", lineHeight: 1.85, margin: 0, marginTop: 40, fontFamily: "inherit" }}>
          <K c="const" /> <V c="developer" /> <P c="=" /> <P c="{" />
          {"\n  "}<F c="name" /><P c=":" /> <S c={'"Markus"'} /><P c="," />
          {"\n  "}<F c="from" /><P c=":" /> <S c={'"Estonia"'} /><P c="," />
          {"\n  "}<F c="age" /><P c=":" /> <span style={{color:"var(--syntax-number)"}}>17</span><P c="," />
          {"\n  "}<F c="stack" /><P c=":" /> <P c="[" /><S c={'"Python"'} /><P c=", " /><S c={'"Full-Stack"'} /><P c="]" /><P c="," />
          {"\n"}<P c="}" /><P c=";" />
        </pre>

        <div className="glow-blue-hover" style={{
          marginTop: 40, borderRadius: 6, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)",
          padding: 20, fontSize: 14, fontFamily: "inherit",
          background: "var(--surface)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--syntax-comment)" }}>
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
            <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
            <span style={{ marginLeft: 12 }}>~/markus/portfolio</span>
          </div>
          <div style={{ marginTop: 16 }}>
            <S c="$" /> <span style={{ color: "var(--fg)" }}>npm run hire-me</span>
            <span className="cursor-blink" />
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 40 }}>
          <a href="#projects" className="glow-blue-hover" style={{
            border: "1px solid var(--primary)", borderRadius: 6, padding: "10px 20px",
            fontSize: 14, fontWeight: 700, color: "var(--primary)", textDecoration: "none",
            background: "color-mix(in oklab, var(--primary) 10%, transparent)",
          }}>./view_projects.sh</a>
          <a href="#contact" style={{
            border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", borderRadius: 6,
            padding: "10px 20px", fontSize: 14, fontWeight: 700, color: "var(--fg)", textDecoration: "none",
          }}>
            <C c="// " />contact me
          </a>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 40, color: "var(--muted-foreground)" }}>
          <a href="https://github.com/Kusdev00" target="_blank" rel="noreferrer"><GithubIcon className="h-5 w-5" /></a>
          <a href="#"><LinkedinIcon className="h-5 w-5" /></a>
          <a href="mailto:your@email.com"><MailIcon className="h-5 w-5" /></a>
        </div>
      </div>
    </section>
  );
}
