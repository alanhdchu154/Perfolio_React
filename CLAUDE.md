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
- Use `umi/workload.md` as the active worker assignment file. Do not write
  focused cc/Codex task state into `AGENTS.md`, `CLAUDE.md`, `WORKLOG.md`,
  `ROADMAP.md`, or Central `ai/HANDOFF.md`.
- Follow Central `/Users/alanhdchu/umi-central/docs/cc_model_routing.md` with
  confirmed-alias routing. Use `--model sonnet` for the latest Sonnet line on
  routine UI/build fixes and bounded verification; use `--model opus` for the
  latest available Opus-class line on public positioning, confidential-safe
  case-study framing, career-market strategy, or high-risk bug-hunt judgment;
  use full ID `--model claude-fable-5` only for highest-capability ambitious
  long-horizon work such as large migrations, complex multi-day implementation,
  broad cross-repo transformations, or long-running autonomous coding after
  local access is confirmed and retention/safeguard constraints are acceptable.
  Pin a full model ID only for Fable 5 access, model migration/regression
  reproduction, or an explicit runbook requirement.
- After meaningful work, update
  `/Users/alanhdchu/umi-central/ai/HANDOFF.md` before marking the task complete.
- If Alan works directly here and priority, risk, blocker, public positioning,
  or next action changes, align Central Umi.
- Avoid duplicated operating rules. Central docs are the canonical source for
  cross-project policy; this file should reference them and add only
  portfolio-specific exceptions.
- Treat `node_modules`, `build`, `.pytest_cache`, and `__pycache__` as
  rebuildable cache, not automatic cleanup. This repo can be cold-cleaned when
  idle, but keep caches during active design/build work. Do not use broad
  `git clean -xfd`, and do not treat public resume/assets or claim-safety
  evidence as ordinary cache.

Default verification for visible changes:

```bash
npm run build
```
