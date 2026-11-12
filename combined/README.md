# PARA Flow — Organize by Actionability (Combined Version)

The combined entry from Scott's Challenge joint hour (Nov 12, 2026, 3:00–4:00 AM EST): Muse's solo "PARA Life OS" and Gemini's solo "PARA Flow OS" merged into one app, after a real collaboration round — Gemini critiqued both entries via the API, argued for its best ideas, conceded its weakest ones, and proposed this spec (full reply: `gemini-collab.md` in this folder). The running, phase-by-phase change log is `CHANGELOG.md`.

**Name & pitch (Gemini's):** PARA Flow — *"Organize by actionability, capture at the speed of thought, and ship what matters."*

**Live link:** see `LINK.txt` in this folder — the hosted version is the Muse artifact "PARA Flow" (slug: `para-flow`). The same entry also runs with zero setup by opening `index.html`.

## What it does

Everything both solo apps did, in one unified app:

- **Dashboard** — counts, overdue / due-soon project focus, inbox queue, recent activity.
- **Inbox / Quick Capture** — capture in seconds, into the Inbox by default (a *decision queue*, not storage), with an optional destination selector when you already know the right PARA tier.
- **Projects** — goal/outcome, deadline with overdue/due-today/due-soon highlighting, next action, progress %, checkable task list — and an **Associated Area**, so every project shows which ongoing responsibility it serves.
- **Areas** — ongoing responsibilities with an explicit *standard to maintain* and a next action.
- **Resources** — topics and references, kept handy without cluttering active work.
- **Archives** — completed or inactive items, out of sight, never deleted, each stamped with *why* it was archived (Completed ✓ / Dropped). **Reactivate restores the item to its original bucket.**
- **Semantic transitions** — "⬆ Promote to Project" on Resources (opens the editor to add goal/deadline), "✓ Complete & Archive" on Projects (finishes tasks, sets 100%, archives as completed), plus the classic one-click Move-to for everything else.
- **Command palette** — Ctrl/⌘+K: search every item, or run commands (New Item, Quick Capture, Weekly Review, Export, jump to any view) without touching the mouse.
- **Guided Weekly Review Wizard** — a 4-step modal that walks the review live: clear the Inbox item by item → check each Project's next action and deadline → review each Area's standard (and spawn a Project for it) → archive what's dormant.
- **Search, tags & sorting** — live search (`/` jumps to it), tag filtering, sorting by updated / deadline / title / progress.
- **Persistence & portability** — auto-saves to `localStorage`; one-click JSON export **and** import.
- **Demo data** — realistic seeded examples in every bucket, including a Project linked to an Area; removable in one click.

## How to run it

1. **Easiest:** open the live link in `LINK.txt`.
2. **Offline / local:** open `index.html` in any modern browser. No build step, no server, no install, no credentials, **no network calls at all** — no CDNs. Keep `style.css` and `app.js` alongside for the full styling; the logic is inlined in `index.html` so the file still works copied on its own.
3. Capture your first thought in Quick Capture, or press Ctrl/⌘+K.

Data note: local data lives only in that browser (storage key `para-flow-v1`, separate from both solo apps). Export regularly if the data matters.

## Files

- `index.html` — the working app (structure + both inline script blocks: core app, then palette + wizard)
- `style.css` — full stylesheet · `app.js` — logic documentation stub (executable logic is inlined in `index.html`)
- `README.md` — this file · `SALES.md` — one-page sales promotion · `LINK.txt` — the live hosted link
- `CHANGELOG.md` — the running change log of the joint build, phase by phase, with credit per idea
- `gemini-collab.md` — Gemini's collaboration reply, verbatim · `collab-prompt-sent.txt` — the collaboration message sent to Gemini

## Who contributed what (the short version — full path in CHANGELOG.md)

- **From Muse's solo entry (kept as the base):** unified one-item/one-bucket data model; Inbox as a first-class decision queue; per-bucket fields (goal/deadline/standard/topic); overdue focus dashboard; search/tags/sorting; export **and** import; fully offline, zero-dependency file.
- **From Gemini's solo entry (transplanted):** command palette; guided Weekly Audit wizard (replacing Muse's static checklist); "Promote to Project" / "Complete & Archive" semantic transitions; Project ↔ Area linking.
- **From Gemini's collaboration input (new in the joint hour):** archive reason (completed / dropped) + restore-to-original-bucket on Reactivate; Promote opening the editor for goal/deadline; the wizard's exact 4 steps; the name PARA Flow.
- **Joint hybrids neither solo had:** Quick Capture with an optional destination (Inbox by default); editor/move-path consistency for archive reasons.
- **Dropped, by agreement:** Gemini's Tailwind CDN dependency (breaks offline use) and its separate per-type collections; Muse's static review checklist.

## Method credit

PARA is Tiago Forte's method (Forte Labs / Building a Second Brain), introduced at https://every.to/forte-labs/para-an-introduction-827085 — this app is an independent implementation organised around that introduction.
