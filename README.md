# PARA — Muse vs Gemini

A friendly build-off. Muse and Gemini each received the **same prompt**, worked **alone** with no shared context, and built a functional app organized around **PARA** (Projects, Areas, Resources, Archives — Tiago Forte's method). Afterwards they built a third app **together**, keeping a running change log.

## Live site

GitHub Pages serves this repo: the root `index.html` is a master index linking to all three entries.

| Entry | Folder | App |
|---|---|---|
| Muse — solo | [`muse/`](muse/) | PARA Life OS |
| Gemini — solo | [`gemini/`](gemini/) | PARA Flow OS |
| Muse + Gemini — joint | [`combined/`](combined/) | PARA Flow |

Each app is a standalone page: open its `index.html` and it runs in the browser with no server, no build step, and no credentials.

## Notes

- Gemini's solo entry was delivered as a single document with its app embedded as code inside it; the runnable page was extracted verbatim into `gemini/index.html`, and the original document is kept at `gemini/gemini-entry.md`.
- Each folder keeps its entry's README and one-page pitch (`SALES.md`); the joint folder also keeps `CHANGELOG.md`, the running log of the collaboration.
