# DESIGN.md

> Dark coding-themed portfolio. Terminal aesthetic with syntax-inspired typography. Clean, spacious, no overlap.

## 1. Visual Theme

**Style**: Dark Terminal / Code Editor
**Keywords**: dark, terminal, monospace, spacious, precise, glowing, minimal
**Tone**: Developer-first — NOT corporate, NOT flashy, NOT decorative
**Feel**: Like opening a well-organized codebase in your favorite editor — dark theme, green comments, blue accents, everything in its place.

**Interaction Tier**: L1 — subtle entrance animations, glow-on-hover
**Dependencies**: CSS only + Framer Motion for entrance animations

## 2. Color Palette

```css
:root {
  --bg: #0a0e14;           /* Deep dark background */
  --bg-alt: #0d1117;        /* Slightly lighter for alternating sections */
  --surface: #161b22;       /* Card backgrounds */
  --surface-elevated: #1c2128; /* Card headers */
  --border: #30363d;        /* Default borders */
  --border-strong: #484f58; /* Hover borders */
  --border-glow: rgba(88, 166, 255, 0.25);

  --text: #e6edf3;          /* Primary text */
  --text-secondary: #8b949e; /* Body text */
  --text-muted: #484f58;    /* Timestamps, labels */

  --accent: #58a6ff;        /* Blue — links, active states */
  --accent-hover: #388bfd;
  --accent-bg: rgba(56, 139, 253, 0.12);
  --accent-glow: rgba(88, 166, 255, 0.15);

  --green: #3fb950;         /* Green — success, comments */
  --green-bg: rgba(63, 185, 80, 0.12);
  --orange: #d29922;        /* Orange — strings, highlights */
  --purple: #bc8cff;        /* Purple — keywords */
  --red: #f85149;           /* Red — errors, close button */

  --terminal-green: #39d353; /* Terminal prompt green */
  --terminal-dim: #6e7681;   /* Dim terminal text */
}
```

## 3. Typography

**Font**: JetBrains Mono (monospace — coding aesthetic)
**Fallback**: SF Mono, Fira Code, Cascadia Code, ui-monospace

| Role | Size | Weight | Color |
|------|------|--------|-------|
| Hero H1 | clamp(2rem, 4.5vw, 3.25rem) | 700 | Mixed (syntax) |
| Section H2 | 24px | 700 | var(--text) |
| H3 | 14-15px | 600 | var(--text) |
| Body | 13px | 400 | var(--text-secondary) |
| Label | 11px | 500 | var(--text-muted) |
| Mono | 11-12px | 400 | var(--terminal-dim) |

## 4. Layout

**Container**: max-width 900px, centered, 24px padding
**Section padding**: 72px mobile / 96px desktop
**Section-alt**: var(--bg-alt) background + top/bottom borders
**Component gap**: 16-24px between stacked items
**Card padding**: 20px body, 10-12px header

## 5. Components

### Section Header
```
/* Section N */     ← 11px mono comment in accent color
Section Title       ← 24px bold
━━ gradient bar     ← 40px wide, accent→green gradient
```

### Code Block Cards (Projects)
- Traffic light dots (red/orange/green) in header
- Filename in dim mono: `project-name.py`
- `class ProjectName:` syntax in body
- Tags with accent-bg

### Timeline (Experience)
- Left-aligned vertical line (1px, border color)
- Animated fill line (accent color)
- Dot marker (9px, accent, glow shadow)
- Content in pl-6 to avoid overlap
- `$ command-name` format for role names
- `[YYYY.MM]` format for dates

### Glow Border (hover effect)
```css
border: 1px solid var(--border);
transition: border-color 0.2s, box-shadow 0.2s;
hover: border-color: var(--border-glow);
       box-shadow: 0 0 20px var(--accent-glow);
```

## 6. Spacing Rules (strict — no overlap)

- Every section: `padding: 72px 0` (mobile) / `96px 0` (desktop)
- Container: `max-width: 900px`, `padding: 0 24px`
- Between components: minimum 16px gap
- Between sections: 0 (sections handle own padding)
- Timeline content: `padding-left: 24px` (pl-6) minimum
- No negative margins
- No absolute positioning that overlaps content

## 7. Do's and Don'ts

### Do
- Use monospace font everywhere
- Keep generous padding (72-96px sections, 24px container)
- Use syntax-inspired formatting ($ commands, class names, comments)
- Alternate section backgrounds with borders
- Use glow-border hover effect on interactive cards

### Don't
- ❌ Overlap any elements (timeline, cards, sections)
- ❌ Use more than 3 colors per component
- ❌ Use sans-serif fonts
- ❌ Use images in project cards
- ❌ Use gradient text (except the accent bar)
- ❌ Make sections shorter than 72px padding
- ❌ Use absolute positioning for layout
