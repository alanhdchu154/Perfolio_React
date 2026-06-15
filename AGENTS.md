# Portfolio Alan — Agent Working Agreement

Read this before doing anything in this repo.

## Central Umi Coordination

This repo follows the global Central Umi coordination contract in
`/Users/alanhdchu/.codex/AGENTS.md`.

- Central Umi remains Alan's primary interface and cross-project coordinator.
- `portfolio-strategist` is the project lead for this repo, not a separate Umi
  persona.
- Use function lanes for routing: public positioning, frontend/build, content
  and case studies, recruiter-facing copy, and confidential-safe research
  presentation.
- Do not ask Alan to manage separate portfolio design/content/build
  conversations by default. Keep Central Umi as the entrypoint unless Alan
  explicitly opens a project-focused deep-work thread.
- After meaningful portfolio work, update
  `/Users/alanhdchu/umi-central/ai/HANDOFF.md` before marking the task complete.
- If Alan works directly in a Portfolio project-lead conversation, align Central
  Umi immediately for public positioning decisions, job/career priority shifts,
  confidential/public-risk choices, launch/deploy decisions, or major messaging
  changes. Align at end of turn when site files, blocker, risk, or next action
  changes.
- Read `/Users/alanhdchu/umi-central/goals.md` before local planning when
  priority or cross-project coordination matters. The central `portfolio-alan`
  row decides whether portfolio work is active or deferred.
- If active worker delegation is needed, create or update `umi/workload.md` for
  one focused Codex / Claude Code handoff. Do not turn it into a diary.
- Create `WORKLOG.md` or `ROADMAP.md` only when portfolio work becomes active
  enough that the file reduces confusion. Do not create files for format purity.
- Use `cc-code-mode-handoff` before substantial implementation, build/debug,
  accessibility review, diff alignment, or frontend cleanup.
- When assigning Claude Code / cc, follow Central
  `/Users/alanhdchu/umi-central/docs/cc_model_routing.md`: use `--model sonnet`
  for routine UI/build fixes, bounded verification, and mechanical cleanup; use
  `--model opus` for public positioning, confidential-safe case-study framing,
  career-market strategy, or high-risk bug-hunt judgment. Record the model
  target and reason in the handoff.

## Product Purpose

This is Alan's public portfolio. The site should support credible senior SDE /
data systems / applied AI positioning without exposing confidential details.

Preserve:

- senior engineering credibility
- applied AI and data systems positioning
- public-safe project descriptions
- clear contact / CTA consistency
- truthful, non-inflated claims

Avoid:

- inventing confidential project details
- overclaiming research, employment, school, or production outcomes
- publishing private client, student, family, or internal evidence
- replacing Alan's voice with generic startup copy

## Working Ritual

Before a task:

1. Read this file.
2. Read central `goals.md` if priority matters.
3. Inspect current git status and relevant files before editing.
4. Decide the function lane and whether cc should be used.
5. For technical work, prefer cc-first or Split-work when scope is clear.

After a task:

1. Run the smallest useful verification.
2. Update `/Users/alanhdchu/umi-central/ai/HANDOFF.md`.
3. Update central status or dispatch only if priority, risk, blocker, or next
   action changed.
4. Tell Alan the concise outcome and residual risk.

## Verification

For most visible changes:

```bash
npm run build
```

For local interactive review:

```bash
npm start
```

Do not run watch-mode commands as a long-lived background task unless the user
asked for a local preview and you will stop or report the server clearly.
