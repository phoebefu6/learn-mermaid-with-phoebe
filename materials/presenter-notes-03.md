# Presenter notes - Session 3 · Who calls whom: sequence and state

Instructor-only cues for `courses/03-runtime-stories.html`. You present the Live cards and run three demos; Self-study cards ("par and critical - the concurrency blocks", "Concurrency and the rest of the toolbox") are homework depth.

## Preflight (before people arrive)

- Tab 1: the session page served, cards collapsed, "Projector zoom" on.
- Tab 2: mermaid.live, empty - Demo 1 builds the nightly sync from scratch.
- Tab 3: mermaid.live second window with the Demo 3 incident prose visible (it lives in a prompt box on the page - have the page section scrolled ready instead if you prefer).
- Have Nova v2's share URL from Session 2 at hand for the recap beat.
- Decide where people will post their Demo 3 sources (session channel) and have that channel open - step 5 of Demo 3 depends on it.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Recap | Nova's zoned map shows structure - then the Part 0 hook: "the dashboard is slow" and "the job keeps retrying" are stories the map cannot tell. Today adds time. |
| 3-11 | Part 1 · Sequence basics | Show the lifelines SVG figure first: participants across, time DOWN, never up. Card "Participants, actors, and the arrow vocabulary" (4 min): walk the four-arrow table (solid asks, dotted answers, -) fire-and-forget, -x lost), then the two habits callout - short IDs long names, declaration order IS column order. Card "Activations, notes, autonumber" (4 min): render the Nova revenue-page example, point at the busy bars, land "step 4 is where it breaks" as the autonumber payoff. Tell the latency-hunt story - the N+1 made visible in thirty seconds. |
| 11-17 | Part 2 · Control blocks | Card "The block vocabulary + Nova's retry logic" (4 min): six-row table fast, then linger on the CRM sync example - loop wrapping an alt, break as the escape hatch. Read the real-world card aloud: an empty else branch is a to-do list of error handling you have not designed yet. That line wins the room. |
| 17-23 | Part 3 · State diagrams | Show the two-lenses SVG (conversation vs one thing's life). Card "stateDiagram-v2" (3 min): [*] entry and exit, states are nouns, labels are events. Card "Composite states and notes" (2 min): the altitude rule - job states outside, step states tucked inside running. |
| 22-30 | Demo 1 · The nightly sync, end to end | Follow along - beats below. |
| 30-37 | Demo 2 · The job lifecycle, as a state machine | Follow along - beats below. |
| 37-41 | Demo 3 · Sequence-ify a bug report | Build your own - beats below. |
| 41-45 | Q&A | Close on the cheat sheet ("Which lens?" item) and homework - especially "bring a schema you know well" for Session 4. |

### Demo 1 beats (8 min, everyone follows)

1. Declare all five participants first, in column order: sch, ing, crm, qa, dw. Render - five lifelines, zero messages, zero errors.
2. Happy path only, straight through: kick off, one fetch, one validate, one load, one summary. Skeleton before logic.
3. Wrap the fetch in `loop up to 3 attempts`, split with `alt export ready / else not ready yet` - watch the frames draw.
4. Second alt for the verdict: pass loads to staging, fail writes to quarantine.
5. Polish layer: `autonumber` up top, +/- activations on ingestion and quality checks, `Note over ing,dw: nothing is ever dropped silently`.
6. Read it back as an incident narrative ("at step 6 the CRM returned 202...") - if every step is citable, it is review-ready. Save the URL.

Say the layering habit out loud (it is the page's tip callout): happy path, then blocks, then polish. One-pass sequences always need untangling.

Where it goes wrong: someone opens a block and forgets `end`, and every later line errors. Recovery line: "every loop, alt, opt, and break owes you an end - count frames, count ends." Also watch for `->` vs `->>` - sequence arrows are their own dialect, not flowchart arrows.

### Demo 2 beats (7 min, everyone follows)

1. Skeleton: `[*] --> queued --> running --> succeeded --> [*]`, each transition on its own labeled line.
2. Trouble states: retrying loops back to queued, failed and quarantined terminal with their own `--> [*]`.
3. The choice point: `state verdict <<choice>>`, route running into it, fan out three labeled exits - one decision instead of three tangled arrows.
4. Open the composite: extract, transform, load inside `state running { }` with their own `[*]`.
5. The note on quarantined - "bad rows parked for review, never silently dropped" - is the design guarantee the diagram exists to defend.
6. Compare with Demo 1 on screen: same system, conversation lens vs lifecycle lens. That comparison IS the session thesis.

Where it goes wrong: typing `stateDiagram` without `-v2`, or `<<choice>>` with spaces inside the angle brackets. Recovery line: "always v2, and the guillemets hug the word - no spaces."

### Demo 3 beats (4 min, they drive)

1. Read the incident prose from the page (stale 2am dashboard, three not-ready responses, silent cache). List participants: scheduler, ingestion, CRM API, on-call as an `actor`, dashboard, analyst.
2. Sentences become messages. "Asked three times, got not-ready every time" is a loop with a SINGLE outcome - no alt, and that absence is the point of the incident.
3. "Gave up and paged" = break block + async `-)` to on-call. "Kept serving yesterday's cache" = the dashboard replying with no upstream call - the silent failure visible as a downstream-only arrow.
4. One `Note over` marking where an alert SHOULD have fired - the fix ticket writes itself.
5. Post sources to the channel; next session opens by comparing how differently people drew the same prose.

## Never cut

- The Demo 1 layering discipline (happy path, blocks, polish) - it is the transferable method, not just this diagram.
- The four-arrow table with "solid asks, dotted answers" - the entire sequence dialect compresses into that sentence.
- The two-lenses comparison at the end of Demo 2 - without it the session is two syntaxes; with it, it is one idea about runtime.
- The empty-else line in Part 2 - it converts sequence diagrams from documentation into a design-review tool, which is why a data/AI audience should care.

## Cut if long

1. First: Demo 3 becomes "start it now, post to the channel by Friday" - the steps on the page are fully self-serve, and the compare-next-week payoff survives.
2. Second: composite states in Demo 2 - do beats 1-3 and 5, point at step 4 on the page; the choice point matters more than the composite.
3. Third: the activations detail in Part 1 - autonumber and notes carry more daily value; the "Activations stack" bullet reads fine at home.
4. par and critical are already Self-study by design ("par and critical - the concurrency blocks") - if asked live, give the one-line answer and point there.

## Q&A ammo

- "Sequence or flowchart for a pipeline?" - The chooser sentence from the cheat sheet: "who talks to whom" is sequence, "what exists and connects" is flowchart, "what can happen to one thing" is state. Same system, different questions.
- "Can AI turn our incident tickets into these?" - Yes, and Demo 3 is exactly the human half: LLMs draft plausible sequences, but the judgment calls (loop vs alt, where the break sits, what the note asserts) are the value you add. Generated-then-reviewed is the workflow.
- "How do I show two services doing work at the same time?" - `par ... and ... end`, in the Self-study card. Nova's warehouse fan-out (dashboards and features both reading after a load) is the natural example.
- "Our state machine has 25 states - now what?" - Same medicine as Session 2: composites are the state-diagram subgraph, and past that, split by altitude. Also run the status-field audit from the Self-study story - unreachable states are usually the real finding.
- "Do these render in GitHub too?" - Yes, both types render in the same ```mermaid fence - the whole Session 1 ecosystem applies unchanged.
- "Can participants link to runbooks?" - There is a link/links syntax for participant menus - flagged in the Self-study card as a docs lookup, same host caveats as flowchart clicks.

## Timing reality check

This is the densest concept load of the six sessions - two full grammars in twenty minutes - and Part 1 is where it historically overruns: the arrow table invites questions and the latency-hunt story invites war stories from the room. Take at most one audience war story, then "hold the rest for Q&A". The demos are long (8 + 7 + 4 = 19 minutes against an 18-minute slot) so they only fit if concepts end by minute 22 sharp. The planned fallback: Demo 3 converts to homework cleanly because its payoff (comparing everyone's diagrams) happens next session anyway - protect Demos 1 and 2, which build the two Nova runtime artifacts the course keeps referring back to.
