// PARA Flow — app.js
// Combined build (Muse x Gemini, Scott's Challenge joint hour).
// The full application logic lives inline in index.html so that index.html
// works standalone when copied alone; this file documents the logic:
// - Unified item model (Muse solo): one item, one bucket field; Inbox queue;
//   per-bucket fields; localStorage (key para-flow-v1); export AND import.
// - Command palette + Weekly Review Wizard live in a second inline block in
//   index.html (Gemini solo transplants), driving the app through its globals.
// - Semantic transitions (Gemini): promoteItem / completeItem / restoreItem,
//   with prevBucket + archiveReason on every item.
console.log("PARA Flow: logic is inline in index.html for standalone use — see README.md");
