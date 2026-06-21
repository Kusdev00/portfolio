# Portfolio Design Prompt

Build a dark-themed, coding/terminal-inspired portfolio website for a 17-year-old Python developer named Markus from Estonia.

## Theme & Aesthetic

- **Dark mode** as the default (deep dark bg: #0a0e14, surface: #161b22)
- **Coding/terminal aesthetic** — monospace font, syntax-inspired text, subtle glow effects
- **Font**: JetBrains Mono (monospace throughout — headings AND body text)
- **Color accent**: Blue (#58a6ff) with green (#39d353) and purple (#bc8cff) as secondary
- **Light mode toggle** available (sun/moon icon in navbar)
- **Subtle glow effects** on card hover (blue glow border)
- **No images** — text-only project cards styled like code editor windows

## Structure & Sections

### Navbar
- Fixed, 56px tall, blur backdrop on scroll
- Left: `/* m@dev */` branding
- Center/right: nav links (About, Skills, Projects, Experience, Contact), theme toggle, GitHub icon
- Mobile: hamburger menu with slide-down panel

### Hero
- Top-compiled terminal messages: `// ✓ Compiling portfolio...` and `// ✓ Build successful. Deploying...`
- Main heading written as JavaScript code:
```
const developer = {
  name: "Markus",
  from: "Estonia",
  stack: ["Python", "Full-Stack"]
};
```
- Syntax highlighting: `const` in muted text, `developer` in blue, `{` and `}` in green, property names in muted, string values in orange, array values in purple
- Subtitle: "I build web apps, automation tools, and video processing pipelines. Available for freelance."
- Terminal prompt: `$ npm run hire-me` with blinking cursor
- Two CTA buttons: "View Projects" (primary blue) and "Get in Touch" (ghost/bordered)
- Social icons: GitHub, LinkedIn, Email
- Scroll-down arrow at bottom
- Generous top padding (160px) — don't cram content under navbar

### About
- Section comment: `/* 01 — About */` in mono, small
- Two-column text grid on desktop, single column on mobile
- Text about being 17yo Python dev from Estonia, AI-assisted workflow, freelance available ($20-35/hr)
- Alternating section background (slightly lighter, with border-top/bottom)

### Skills
- Section comment: `/* 02 — Skills */`
- 12 skills displayed as progress bars in a 2-column grid
- Each skill: name on left, percentage on right (mono font)
- Bar: 6px tall, gradient from blue to green, animated fill on scroll
- Skills: Python, Flask/APIs, FFmpeg/Video, JavaScript/TS, React/Next.js, HTML/CSS/Tailwind, Git/GitHub, REST APIs, NLP/Extraction, Streamlit/Dashboards, SQL/SQLite, Automation/Scripting
- Generous gaps between rows (32px)

### Projects
- Section comment: `/* 03 — Projects */`
- 4 project cards, each styled like a code editor window:
  - Header bar with traffic light dots (red/orange/green) + filename (e.g., `scrapepro.py`) + optional GitHub icon
  - Body with `class ProjectName:` in syntax colors, description text, and tech tags
- Tags: small pills with blue accent background
- 24px gap between cards
- Projects: ScrapePro (github.com/Kusdev00/scrapepro), AI Clipper (github.com/Kusdev00/ai-clipper), Trend Engine, Video Generator

### Experience
- Section comment: `/* 04 — Experience */`
- Timeline layout using FLEXBOX (no absolute positioning):
  - Left column: 32px wide, centered dot (10px, blue, glow) + vertical connector line
  - Right column: content with role name as `$ command-name` syntax, period in accent color, description, tags
- 40px gap between timeline items
- Same 4 entries as Projects (they're the same work)

### Contact
- Section comment: `/* 05 — Contact */`
- Social links (GitHub, LinkedIn, Email) as icon buttons with glow-border hover effect
- Form: Name/email row (2 columns), message textarea, submit button
- All inputs: dark surface background, border, rounded corners

### Footer
- Compact, muted text: `// © 2026 Markus · Built with Next.js & Tailwind`
- Back-to-top button (appears after scrolling 400px)

## Spacing Rules (CRITICAL — don't let things overlap)

- Section padding: 100px vertical (mobile) / 140px vertical (desktop)
- Container max-width: 860px, padding 32-48px
- Accent bar after section title: 48px margin-bottom
- Between stacked components: minimum 20px gap
- Between project cards: 24px gap
- Between experience items: 40px gap
- Form field gaps: 20px
- No negative margins
- No absolute positioning for layout (only for decorative elements like timeline dots)
- Body line-height: 1.8

## Color Tokens (CSS variables)

```
--bg: #0a0e14
--bg-alt: #0d1117
--surface: #161b22
--surface-elevated: #1c2128
--border: #30363d
--border-strong: #484f58
--text: #e6edf3
--text-secondary: #8b949e
--text-muted: #484f58
--accent: #58a6ff
--accent-hover: #388bfd
--accent-bg: rgba(56, 139, 253, 0.12)
--accent-glow: rgba(88, 166, 255, 0.15)
--green: #3fb950
--orange: #d29922
--purple: #bc8cff
--red: #f85149
--terminal-green: #39d353
--terminal-dim: #6e7681
```

## Responsive
- Breakpoint: 768px
- Mobile: single column for all grids, reduced padding (100px sections), hamburger nav
- Desktop: 2-column grids, full padding (140px sections)

## Tech Stack
- Next.js 15+ with static export (output: "export")
- Tailwind CSS 4
- Framer Motion for entrance animations (fadeInUp with stagger)
- Lucide React for icons
- TypeScript
