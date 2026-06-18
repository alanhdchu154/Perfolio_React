# Portfolio Alan — Claude Code Instructions

Read `AGENTS.md` first. It is the source of local agent rules for this repo.

Key reminders:

- `portfolio-strategist` is the project lead under Central Umi.
- Use lanes: public positioning, frontend/build, content/case studies,
  recruiter-facing copy, confidential-safe research presentation.
- Do not invent confidential details or overclaim outcomes.
- Use code-mode Claude Code for substantial implementation, build/debug,
  accessibility review, diff alignment, or frontend cleanup.
- Follow Alan's two-loop flow: Central Umi / Codex defines direction and
  acceptance, cc does deep code-mode work, and Codex reviews/verifies/syncs the
  source of truth before work is treated as complete.
- Use `--model sonnet` for routine UI/build fixes and bounded verification; use
  `--model opus` for public positioning, confidential-safe case-study framing,
  career-market strategy, or high-risk bug-hunt judgment. Follow Central
  `/Users/alanhdchu/umi-central/docs/cc_model_routing.md`.
- After meaningful work, update
  `/Users/alanhdchu/umi-central/ai/HANDOFF.md` before marking the task complete.
- If Alan works directly here and priority, risk, blocker, public positioning,
  or next action changes, align Central Umi.

Default verification for visible changes:

```bash
npm run build
```
