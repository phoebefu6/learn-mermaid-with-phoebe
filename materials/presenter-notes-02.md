# Presenter notes - Session 2 · Tame the spaghetti: flowchart mastery

Instructor-only cues for `courses/02-flowchart-mastery.html`. You present the Live cards and run three demos; Self-study cards ("Zone design - what makes a good subgraph", "v11 expanded shapes", "Layout nudging - the polite fixes") are homework depth.

## Preflight (before people arrive)

- Tab 1: the session page served, cards collapsed, "Projector zoom" on.
- Tab 2: mermaid.live preloaded with the Session 1 Nova source (the 30,000-foot map) - Demo 1 starts FROM it, so have the share URL handy for anyone who lost theirs.
- Tab 3: mermaid.live in a second window with the Demo 2 "patient" (the 15-node flat mess) pasted and rendered - you want the ugly before-state on screen instantly.
- Tab 4: your scratch GitHub repo from Session 1 - useful for showing that GitHub strips click interactions in Demo 3.
- Check who actually brought the homework diagram ("one real diagram that grew past 10 nodes"). If nobody did, the Demo 2 patient carries the whole rescue narrative - it is designed for that.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Recap | One breath of Session 1: shapes, edges, the fence. Then the hook from Part 0: "that homework diagram that grew past 10 nodes is today's patient." |
| 3-10 | Part 1 · Subgraphs | Card "The subgraph block" (3 min): keyword, ID with display title, end - hammer "always give the ID". Tell the architecture-review story (same 25 nodes, zoned version, the CFO finally asks the right cost question). Card "Direction inside a subgraph" (2 min): the catch - an edge crossing the wall makes the zone inherit parent flow. Show the zoning SVG figure first; it is the mental model. |
| 10-17 | Part 2 · Styling | Card "classDef + class - define once, apply everywhere" (3 min): walk the five-row statement table, land the house style callout - classDefs at the BOTTOM, together. Card "One meaning per color" (2 min): read the color-chaos vs color-legend boxes aloud, then the migration-diagram story (deprecated class as a burndown chart). |
| 17-23 | Part 3 · Interaction + hygiene | Card "Click - nodes that go somewhere" (2 min): pattern plus the GitHub caveat - clicks are a bonus layer, never the only route. Card "When to split, how to link" (2 min): split signal is a QUESTION count, not a node count; ~20 nodes find the seam, past 30 overdue. The hairball-to-three-diagrams SVG figure sells this in one glance. |
| 22-30 | Demo 1 · Nova, zoned and styled | Follow along - beats below. |
| 30-36 | Demo 2 · Rescue a messy diagram | Build your own - beats below. |
| 36-40 | Demo 3 · Make Nova clickable | Follow along - beats below. |
| 40-45 | Q&A | Close on the cheat sheet and homework - especially "bring a process you can describe in prose but never diagrammed" for Session 3. |

### Demo 1 beats (8 min, everyone follows)

1. Start from the Session 1 source. Wrap `ev` and `crm` in `subgraph src[Sources]` ... `end` - watch the container appear.
2. Zone the middle into `plat[Platform]`: ingestion, quality checks, warehouse, quarantine. Say it explicitly: only DECLARATIONS moved, cross-zone edges keep working.
3. Zone `cons[Consumers]`: dashboards, ML features.
4. Add the three classDefs at the bottom: `stream`, `batch`, `storage`.
5. Apply with `:::` at declaration - `ev[App events]:::stream`, `crm:::batch`, storage on BOTH cylinders (warehouse and quarantine).
6. The pass condition, verbatim from the page: can a stranger tell what streams, what batches, and where data rests without reading a label?
7. Everyone saves the share URL - the page's "Keep this source" callout is real: Nova v2 returns in Sessions 4 and 6.

Where it goes wrong: an `end` goes missing and everything after it lands inside the subgraph. Recovery line: "count your subgraph lines, count your ends - mermaid will not warn you, it will just adopt your nodes."

### Demo 2 beats (6 min, they drive)

1. Everyone copies the 15-node patient into mermaid.live. Step 1 is spoken, not typed: name the natural zones out loud (Producers, Streaming path, Batch path, Warehouse, Serving is one good answer).
2. Wrap groups in titled subgraphs - declarations in, edge lines untouched.
3. Flip TD to LR, compare, keep the winner.
4. Palette: stream and batch on the two paths, storage on the cylinders, classDefs at the bottom.
5. Count wire crossings before and after - the recipe usually lands near zero. Sell the real-world card: this rescue is a great first-week move on a new team.

Where it goes wrong: people restructure edges instead of just wrapping declarations, and break the graph. Recovery line: "no nodes may be harmed - if you are editing arrow lines, you are doing surgery the patient does not need."

### Demo 3 beats (4 min, everyone follows)

1. Add one `click` line per platform node to the Demo 1 source: `click ing "https://github.com/nova-platform/ingestion#readme" "Ingestion README"`.
2. Test in mermaid.live: hover for tooltip, click follows. Show `_blank` for a new tab.
3. State the deployment rule once more: clicks survive mermaid.live, self-hosted pages, most docs sites - GitHub strips them. Keep a plain link list under the fence for GitHub readers.

## Never cut

- Demo 2, the rescue - it is the session's promise ("a diagram people thank you for") delivered by their own hands, and the recipe they will reuse most.
- "One meaning per color" with the good/bad prompt boxes - without the discipline, classDef just teaches prettier chaos.
- "Always give the ID" in the subgraph card - anonymous subgraphs are the number one reason people cannot style or wire zones later.
- The GitHub click caveat - skip it and someone ships a README where the only path to the runbook is a stripped click.

## Cut if long

1. First: Demo 3 - compress to 90 seconds on your screen; the page's three steps are self-serve homework.
2. Second: "Direction inside a subgraph" - one sentence ("zones can set their own direction, but an edge across the wall cancels it") and point at the card.
3. Third: the v11 `@{ shape: ... }` topic if it sneaks into questions - it is a Self-study card and a homework bullet by design.
4. Do not shorten Demo 1 below 7 minutes; Nova v2 is the artifact two later sessions depend on.

## Q&A ammo

- "How many subgraphs is too many?" - The Self-study zone-design card: 3-5 is the sweet spot, seven is spaghetti with extra steps. If you cannot name the zone in two words, it is not a zone.
- "Can I nest subgraphs?" - Yes, boxes within boxes - Platform containing Streaming and Batch is the page's example. One level of nesting reads fine; two starts to fight the split rule.
- "Why did my subgraph's direction TB get ignored?" - The documented catch: any node inside linking to a node outside makes the zone inherit the parent flow. Design zones as units first, wire them second.
- "Can I style edges, not just nodes?" - Yes, `linkStyle N` with a 0-based index in source order - it is in the statement table. Fragile if you reorder lines, so use it for the one critical edge, not a palette.
- "Do clicks work in our wiki / docs site?" - Test it: works wherever the site owns the renderer (MkDocs, Docusaurus, self-hosted). GitHub strips them for security. Treat clicks as progressive enhancement.
- "Colors for accessibility - any rules?" - One meaning per color, plus pair color with something else that carries the meaning (shape, edge style, zone). Session 6 covers contrast checking and accTitle/accDescr properly.

## Timing reality check

The overrun risk here is Part 2: the styling table plus both real-world stories can balloon to twelve minutes because the stories land well and you will want to tell both. Tell the migration-burndown story, summarize the CFO story in one line, and keep Part 2 at seven. Demo 2 also runs long when the room debates zone names - lovely energy, but cap the debate at one minute with "any two-word name you can defend is right, wrap your boxes." Fallback order if you hit minute 36 mid-rescue: Demo 3 becomes a 90-second show-and-tell, and Q&A absorbs the click questions.
