function GithubIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.42.36.79 1.07.79 2.17v3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>);
}

const C = ({ c }: { c: React.ReactNode }) => <span style={{ color: "var(--syntax-comment)", fontStyle: "italic" }}>{c}</span>;
const box: React.CSSProperties = { maxWidth: 860, marginInline: "auto", paddingInline: 32 };

const MY_EMAIL = "Markus.Ojala@proton.me";

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBlock: 112, ...box }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 14, color: "var(--syntax-comment)" }}>{"/* 06 — Contact */"}</div>
        <div style={{ marginTop: 12, height: 3, width: 48, borderRadius: 2, background: "var(--primary)" }} className="glow-blue" />
      </div>

      <div style={{ fontSize: 14, color: "var(--muted-foreground)", marginTop: -24, marginBottom: 32, lineHeight: 1.8 }}>
        <C c={"// "} />Fastest way to reach me — I read every message and reply within 24h.
      </div>

      <div className="glow-blue-hover" style={{ borderRadius: 6, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", background: "var(--surface)", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 16px", borderBottom: "1px solid color-mix(in oklab, var(--border) 60%, transparent)", background: "color-mix(in oklab, var(--surface-alt) 60%, transparent)" }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f56" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ffbd2e" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#27c93f" }} />
          <span style={{ marginLeft: 12, fontSize: 12, color: "var(--syntax-comment)" }}>contact.sh</span>
        </div>
        <div style={{ padding: 24 }}>
          <div style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: 10 }}>
            <span style={{ color: "var(--syntax-string)" }}>$</span> echo $EMAIL
          </div>
          <a href={`mailto:${MY_EMAIL}`} style={{
            fontSize: "clamp(1.05rem, 2.4vw, 1.45rem)", fontWeight: 700,
            color: "var(--primary)", textDecoration: "none", wordBreak: "break-word",
          }}>
            {MY_EMAIL}
          </a>
          <div style={{ marginTop: 14, fontSize: 13, color: "var(--syntax-comment)" }}>
            <C c={"// "} />describe the task, deadline and budget — I&apos;ll quote back
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 32 }}>
        <a href="https://github.com/Kusdev00" target="_blank" rel="noreferrer" className="glow-blue-hover"
          style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 6, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", padding: "8px 16px", fontSize: 14, color: "var(--muted-foreground)", textDecoration: "none" }}>
          <GithubIcon className="h-4 w-4" /><span>.github()</span>
        </a>
        <a href="https://kusdev00.github.io/portfolio/" target="_blank" rel="noreferrer" className="glow-blue-hover"
          style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 6, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", padding: "8px 16px", fontSize: 14, color: "var(--muted-foreground)", textDecoration: "none" }}>
          <span>.portfolio()</span>
        </a>
      </div>
    </section>
  );
}
