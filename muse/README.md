# PARA Life OS — Organize Everything by Actionability

A functional, self-contained web app that organizes a person's digital life around Tiago Forte's PARA method: **Projects, Areas, Resources, Archives** — sorted not by where something came from, or what subject it's about, but by *how actionable it is right now*.

**Live link:** see `LINK.txt` in this folder — the hosted version is the Muse artifact “PARA Organizer” (slug: `para-organizer`, completed and verified live; access via its artifact card, as the status check returned no public share URL). The same entry also runs with zero setup by opening `index.html` — see below.

## What it does

- **Dashboard** — at-a-glance counts, overdue / due-soon project focus list, inbox queue, recent activity, and a built-in Weekly Review checklist.
- **Inbox / Quick Capture** — a capture box in the sidebar (and a full editor) dumps anything into the Inbox in seconds. The Inbox is treated as a *decision queue*, not storage: every item is meant to be processed out into a PARA bucket.
- **Projects** — active efforts with a goal/outcome, deadline (with overdue / due-today / due-soon highlighting), next action, progress %, and a checkable task list.
- **Areas** — ongoing responsibilities (Health, Finances, Home…) with an explicit *standard to maintain* and a next action.
- **Resources** — topics and references organised by topic, kept handy without cluttering your active work.
- **Archives** — completed or inactive items, out of sight but never deleted. One click archives; one click reactivates back into Projects.
- **Move between PARA categories** — every card has a “Move to…” control and an Archive/Reactivate button, so reclassifying as life changes takes one click — the core PARA habit.
- **Search, tags & sorting** — live search across titles, notes, tags, goals and topics (press `/` to jump to search), tag filtering, and sorting by updated date, deadline, title, or progress.
- **Persistence** — everything saves automatically to the browser's `localStorage`. No account, no server, no sign-up.
- **Export / Import** — one-click JSON export for backup, and import to restore or move to another browser.
- **Demo data** — the app ships pre-loaded with realistic example items in every bucket so a reviewer can see it working immediately; “Clear all data” and “Restore demo data” are in the sidebar.

## How to run it

1. **Easiest:** open the live link in `LINK.txt`.
2. **Offline / local:** open `index.html` in any modern browser (double-click the file). No build step, no server, no install, no credentials. Keep `style.css` and `app.js` in the same folder for the full styling; the core logic is also inlined in `index.html` so the file still works if copied on its own.
3. Add your first item with **+ New Item**, or dump thoughts into **Quick Capture** and process the Inbox.

Data note: local data lives only in that browser on that device. Use Export regularly if the data matters to you.

## Files

- `index.html` — the working app (structure + inline fallback styles/logic)
- `style.css` — full stylesheet
- `app.js` — external script reference / logic documentation (executable logic is inlined in `index.html` for standalone use)
- `LINK.txt` — the live hosted link
- `README.md` — this file
- `SALES.md` — one-page sales promotion

## Choices made, and why

- **PARA as the only top-level structure.** No folders-within-folders, no arbitrary workspaces. Forte's insight is that four buckets, ordered by actionability, are enough for *all* of a person's information. The UI enforces that simplicity: every item has exactly one bucket, and moving it is the primary action.
- **Different fields per bucket, not one generic note.** A Project without a goal and deadline isn't a project — so Projects surface goal, deadline, next action and progress. An Area without a standard drifts — so Areas surface the standard. Resources surface topic. One form captures all of it, and each card only displays what's relevant to its bucket.
- **Inbox as a first-class view, separate from PARA.** Capture must be frictionless and judgement-free; *processing* is where PARA decisions happen. Keeping Inbox visually distinct (and counted on the dashboard) makes “inbox zero” a real, motivating target.
- **Self-contained static app with localStorage.** The challenge required a build that stands entirely on its own with no owner, installs, or credentials. A single-page static app meets that literally: it works from a file, from the hosted link, offline, and forever — with zero backend cost or privacy surface. Your PARA data never leaves your browser unless you export it.
- **Demo data on first run, honesty over emptiness.** An empty organiser proves nothing. Seeded examples in every bucket demonstrate deadlines, standards, topics and archiving in the first ten seconds — and are clearly removable.
- **Archive, don't delete.** Deleting is offered in the editor, but the designed path is Archive: PARA's fourth bucket exists precisely so finished work stops competing for attention without being lost. Reactivate is one click when life brings it back.

## Method credit

PARA is Tiago Forte's method (Forte Labs / Building a Second Brain), introduced at https://every.to/forte-labs/para-an-introduction-827085 — this app is an independent implementation organised around that introduction.
