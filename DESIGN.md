# Portfolio Alan DESIGN.md

Last updated: 2026-06-28 23:54 CDT

This file gives coding agents a stable visual source of truth for Alan's public
portfolio. It should help future UI changes stay credible, public-safe, and
consistent. It does not replace `AGENTS.md` or confidentiality rules.

## Product Feeling

The portfolio should feel like a senior engineer's applied-AI and data-systems
body of work: clear, grounded, technically serious, and approachable. It should
not feel like a generic startup landing page or a flashy AI demo gallery.

The page should help a recruiter, hiring manager, or technical reviewer quickly
understand:

- Alan builds practical systems around data, operations, and AI;
- public project claims are bounded and evidence-aware;
- case studies are visual enough to understand without exposing private
  implementation details;
- the strongest current narrative is backend/data systems plus evaluation,
  privacy/risk gates, and human-centered AI systems.

## Visual Identity

Primary palette:

- Page background: `#f6f8fb`
- Text: `#172033`
- Heading dark: `#132238`
- Muted text: `#475467`, `#526173`, `#66768a`
- Primary teal: `#0f766e`
- Deep teal: `#1f6f5f`
- Dark section: `#132238`
- Card border: `#d8dee8`, `#d0d7e2`
- Soft supporting surfaces: `#ffffff`, `#f1f5f9`, `#ecfdf5`

Use teal as the main action/accent color. Do not let the design become a
one-note teal theme; use dark sections, white cards, and subtle neutral
surfaces for rhythm.

## Typography

Current global family is:

```css
Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
```

Use large type only in the homepage hero and article/case-study hero areas.
Inside cards, diagrams, and project summaries, use compact headings and
scannable body text.

Do not use negative letter spacing. Keep link/button labels short and direct.

## Layout Principles

- Keep sections full-width with constrained inner content where useful.
- Use `8px` card radius, matching the existing system.
- Use visual aids for every major public topic, especially Underworld and
  Three-Party AI.
- Keep enterprise and school details abstract when confidentiality or privacy
  boundaries require it.
- Prefer diagrams, flows, and evidence cards over vague screenshots or stock
  imagery.
- Avoid nested cards and decorative blob/orb backgrounds.

## Components

Navigation:

- Fixed top nav, white/near-white background, restrained border, clear links.
- Keep `Resume`, project links, and contact paths easy to find.

Buttons:

- Primary: teal background, white text.
- Secondary: white background, neutral border, dark text.
- Radius: `8px`.
- Avoid pill buttons unless matching an existing specific component.

Cards:

- White surface, neutral border, `8px` radius.
- Strong enough hierarchy for scanning, not heavy shadows.
- Each public case-study card should answer: what system, what problem, what
  evidence, what claim boundary.

Diagrams:

- Use simple labeled flows with arrows/lines.
- Keep labels short enough for mobile.
- For Three-Party, show privacy boundaries and synthetic benchmark limits.
- For Underworld, show memory/continuity/evidence gates, not "sentient AI"
  framing.

## Public-Claim Boundaries

Never expose private client, student, family, employer, or internal evidence.

Allowed public tone:

- "research prototype"
- "synthetic benchmark"
- "reference architecture"
- "public-safe case study"
- "local/runtime evidence"
- "claim boundary"

Avoid:

- real-student validation claims for Three-Party AI;
- claims of consciousness, real agency, or stable human-like inner life for
  Underworld;
- confidential Walmart, GIIS, BAH, or family details;
- inflated metrics without source/date.

## Agent A/B Test Result

Pattern adopted from external `DESIGN.md` repo: use a repo-local visual
identity file as a stable prompt source for future UI agents.

Decision: adopt for Portfolio.

Why:

- The portfolio has public case studies where wording and visual framing can
  easily overclaim.
- Existing visual patterns were in CSS and components but not written as a
  reusable agent source.
- A stable design file should reduce drift when adding future case-study
  diagrams or recruiter-facing pages.

How to use:

1. Read this file before visible portfolio UI or case-study work.
2. Preserve confidentiality and public-claim boundaries from `AGENTS.md`.
3. Run `npm run build` for visible changes.
4. Update this file only when the design system itself changes.
