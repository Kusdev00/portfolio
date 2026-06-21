"use client";
import { type FormEvent, useState } from "react";

function GithubIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.74 1.27 3.41.97.11-.76.41-1.27.74-1.56-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.7 5.39-5.27 5.68.42.36.79 1.07.79 2.17v3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>);
}
function MailIcon({ className }: { className?: string }) {
  return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 7 9-7" /></svg>);
}

const C = ({ c }: { c: React.ReactNode }) => <span style={{color:"var(--syntax-comment)", fontStyle:"italic"}}>{c}</span>;
const box: React.CSSProperties = { maxWidth: 860, marginInline: "auto", paddingInline: 32 };
const inputStyle: React.CSSProperties = {
  width: "100%", borderRadius: 6, border: "1px solid var(--border)", padding: "10px 12px",
  fontSize: 14, outline: "none", background: "var(--bg)", color: "var(--fg)",
  fontFamily: "inherit",
};

export default function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" style={{ paddingBlock: 112, ...box }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 14, color: "var(--syntax-comment)" }}>/* 05 — Contact */</div>
        <div style={{ marginTop: 12, height: 3, width: 48, borderRadius: 2, background: "var(--primary)" }} className="glow-blue" />
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 40 }}>
        {[
          { href: "https://github.com/Kusdev00", label: "github", I: GithubIcon },
          { href: "mailto:Markus.Ojala@proton.me", label: "email", I: MailIcon },
        ].map(({ href, label, I }) => (
          <a key={label} href={href} className="glow-blue-hover"
            style={{ display: "flex", alignItems: "center", gap: 8, borderRadius: 6, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", padding: "8px 16px", fontSize: 14, color: "var(--muted-foreground)", textDecoration: "none" }}>
            <I className="h-4 w-4" /><span>.{label}()</span>
          </a>
        ))}
      </div>

      <form onSubmit={onSubmit} style={{ borderRadius: 6, border: "1px solid color-mix(in oklab, var(--border) 70%, transparent)", padding: 24, background: "var(--surface)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20 }}>
          <label>
            <span style={{ display: "block", marginBottom: 8, fontSize: 12 }}><C c="// name" /></span>
            <input required placeholder="Ada Lovelace" style={inputStyle} />
          </label>
          <label>
            <span style={{ display: "block", marginBottom: 8, fontSize: 12 }}><C c="// email" /></span>
            <input required type="email" placeholder="ada@compute.dev" style={inputStyle} />
          </label>
        </div>
        <label style={{ display: "block", marginTop: 20 }}>
          <span style={{ display: "block", marginBottom: 8, fontSize: 12 }}><C c="// message" /></span>
          <textarea required rows={5} placeholder="say hi 👋" style={{ ...inputStyle, resize: "vertical" }} />
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 24 }}>
          <button type="submit" className="glow-blue-hover" style={{
            borderRadius: 6, border: "1px solid var(--primary)", padding: "10px 20px",
            fontSize: 14, fontWeight: 700, color: "var(--primary)", cursor: "pointer",
            background: "color-mix(in oklab, var(--primary) 10%, transparent)",
          }}>send_message()</button>
          {sent && <span style={{ fontSize: 12, color: "var(--syntax-string)" }}><C c="// " />✓ message queued</span>}
        </div>
      </form>
    </section>
  );
}
