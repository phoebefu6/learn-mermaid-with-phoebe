# Presenter notes - Session 1 · Draw with text: diagrams as code

Instructor-only cues for the student page `courses/01-diagrams-as-code.html`. The page carries the full content; you present the Live cards and run the three demos. Self-study cards ("How the rendering actually works", "When NOT to use mermaid", "Reading error messages without fear", "Everywhere else: slides, sites, AI chats") are homework depth - point at them, never present them.

## Preflight (before people arrive)

- Tab 1: the session page, served (not file://) so every pink block renders live. All cards collapsed - "Expand all" is the handout view, not the presenting view.
- Tab 2: mermaid.live, empty editor, zoomed so the back row reads the source pane.
- Tab 3: a scratch GitHub repo YOU own with an editable README - Demo 2 commits to it live.
- Tab 4: a scratch Notion page, ready for the /code block in Demo 2.
- Click "Projector zoom" on the page toolbar before anyone walks in.
- Verify the room can reach mermaid.live and GitHub on venue wifi - this session dies without both.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Welcome | Open with the whiteboard-photo story from Part 0's lede - everyone has lived it. Name the promise: first diagram rendering in three real places today. |
| 3-9 | Part 1 · Why text beats drag | Card "What mermaid is, and the pain it kills" (2 min): land the four bullets, linger on "nobody can diff a PNG". Card "Anatomy of a mermaid block" (2 min): type keyword first line, %% comments. Run the ★ Try it now live - flip one page diagram to Code, hit "Edit on mermaid.live", change a label. |
| 9-18 | Part 2 · Flowchart fundamentals | "Nodes and shapes" (3 min): walk the six-shape table, then the quoting rule callout - say out loud it prevents 80% of beginner errors. "Edges" (3 min): solid, dotted, thick carry meaning. "Direction" (1 min): run the ★ Try it - flip LR to TD on the edge-styles diagram. |
| 18-23 | Part 3 · Where mermaid renders | "The fence" (2 min): memorize-this-shape moment, GitHub/Notion/Obsidian/VS Code bullets. "mermaid.live - your workshop" (1 min): the URL is the file, no save button. |
| 23-31 | Demo 1 · Nova at 30,000 feet | Follow along - beats below. |
| 31-37 | Demo 2 · Ship it: GitHub and Notion | Build your own - beats below. |
| 37-42 | Demo 3 · Diagram your own week | Build your own - beats below. |
| 40-45 | Q&A | Close on the cheat sheet ("pin this") and the five homework bullets - especially "bring a messy 10+ node diagram to Session 2". |

### Demo 1 beats (8 min, everyone follows in mermaid.live)

1. Type only `flowchart LR`. Empty canvas, no error - name that as a good start.
2. The happy path in ONE chain: `ev[App events] --> ing[Ingestion] --> dw[(Warehouse)] --> bi[Dashboards]`.
3. Insert `qa{Quality checks}` with `|pass|` and `|fail|` edges - pause so the room watches the reflow.
4. Add `crm[CRM export] -.->|nightly| ing` - say why dotted: batch, edge style carrying meaning.
5. Break it on purpose: rename to `qa{Quality (v2) checks}`, show the parse error, fix with quotes. Do NOT skip this beat - debugging without fear is the session's real deliverable.
6. Compare with the page's finished block; have everyone copy their share URL for Demo 2.

Where it goes wrong: someone types `->` with one dash and gets a confusing error. Recovery line: "flowchart arrows need two dashes - that is suspect number two on the error checklist, right after quoting."

### Demo 2 beats (6 min)

1. In YOUR scratch repo, edit the README, add the ```mermaid fence with the Demo 1 source, commit.
2. Refresh, show native render, resize the window - "crisp at every size, it is SVG".
3. Edit in GitHub: change "Dashboards" to "BI dashboards", commit, open the diff - the reviewable-diagram superpower, live.
4. Notion: /code, language Mermaid, paste, toggle preview. One source, second home.
5. Room builds along in their own repos - pause until most have a rendering README. If corporate GitHub permissions bite, show yours and assign theirs as homework.

Where it goes wrong: someone fences with ``` but no `mermaid` tag and sees plain code. Recovery line: "the language tag is the passport - no tag, no render."

### Demo 3 beats (5 min)

1. One minute picking a real 5-10 step flow with a decision - offer the page's prompts: data request to dashboard, model shipping, expense approval.
2. Three quiet minutes drafting in mermaid.live: pills, rectangles, one diamond, a cylinder if data lands anywhere.
3. Last minute: two volunteers share screens. If time is tight, the sharing beat becomes "send your URL to a colleague this week" (step 5 on the page).

## Never cut

- The break-it-on-purpose beat in Demo 1 - error literacy is what makes people actually use mermaid alone next week.
- The GitHub commit-and-diff in Demo 2 - it is the entire diagrams-as-code argument made visible in 90 seconds.
- The quoting rule callout in "Nodes and shapes" - one habit, 80% of beginner errors gone.
- The fence itself ("memorize this shape") - without it nothing they learned today follows them anywhere.

## Cut if long

1. First: Demo 3 shrinks to "start now, finish as homework" - the page's steps are self-serve.
2. Second: the Notion half of Demo 2 - keep GitHub, point at step 4 on the page for Notion.
3. Third: Part 3's "mermaid.live - your workshop" card - they have already used it twice by then; one sentence covers it.
4. Never compress Part 2 below 7 minutes - shapes and edges are the vocabulary everything else builds on. The Self-study cards absorb rendering internals and when-not-to-use questions if they come up mid-lecture: "great question, that exact card is your homework."

## Q&A ammo

- "Why not draw.io or Lucidchart?" - Different job. Canvas tools win when position IS the meaning or pixel-perfection matters (the "When NOT to use mermaid" card says this honestly). Mermaid wins when the diagram must live next to code, diff in PRs, and never rot.
- "Does it render in Confluence?" - Not natively - via marketplace plugins, which most instances have. GitHub, GitLab, Notion, Obsidian and the big docs generators are native. Answer for YOUR stack: check where your team writes most.
- "Can AI generate these?" - Yes, fluently - the page calls text diagrams the native diagram format of the AI era. The skill this course teaches is REVIEWING and fixing generated mermaid, which is exactly Demo 3 step 4.
- "What about huge diagrams, 100+ nodes?" - Auto-layout spaghetti in any tool. The honest answer is split into linked smaller diagrams - Session 2 does exactly that with subgraphs and the split rule.
- "Which version are we learning?" - Mermaid 11.x, the version in current GitHub and mermaid.live. Around 15 stable diagram types; this course teaches the daily-driver set.
- "Can I control exactly where boxes go?" - No, and that is the deal: you trade pixel control for speed. When exact layout truly matters, export the SVG and refine elsewhere.

## Timing reality check

This session historically overruns in Demo 2, not the concepts - room-wide GitHub commits on venue wifi plus at least one person locked out of their org account eats five minutes fast. The fallback ladder: do Demo 2 on your screen only and make their commit homework; then shrink Demo 3 to a two-minute start. Part 1 also tempts you to preach the diagrams-as-code gospel for ten minutes because the room nods along - the page already makes the argument, so say it in six and bank the time for the demos, where the conversion actually happens.
