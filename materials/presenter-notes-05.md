# Presenter notes - Session 5 · Six diagrams for humans: plans, time, and teams

Instructor-only cues for `courses/05-plans-and-people.html`. This is the breadth session - six mini-masterclasses, all Live except two Self-study cards ("Living roadmaps - the workflow that makes gantt worth it" and "Choosing between the six - the chooser table"). Keep the pace brisk and honest: depth comes from the two or three types THEIR week needs, and the page says so in Part 0.

## Preflight (before people arrive)

- Tab 1: the session page served, cards collapsed, "Projector zoom" on. The orbit SVG (system in the center, six diagrams around it) is your opening visual.
- Tab 2: mermaid.live, empty - Demo 1 builds the gantt from scratch, and gantt is the strictest grammar of the day, so YOU want a clean editor with no leftovers.
- Tab 3: mermaid.live second window with the finished Nova Q3 gantt from Part 1 pasted - your safety net if the live build derails on a comma.
- Check the homework thread: people were asked to bring "a real project or roadmap currently tracked in a spreadsheet". Demo 1 lands harder when they map it to their own plan as you type.
- Know today's date relative to the example dates (plan runs 2026-07-06 to 2026-09-28) - someone always asks why the bars sit where they sit.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Recap | Sessions 1-4 diagrammed the system; Part 0's claim: a data platform is maybe 40% system, 60% coordination. Show the orbit SVG - six kinds of work, six grammars, all diffable text. |
| 3-9 | Part 1 · Gantt | Card "Anatomy: dateFormat, sections, tasks, after" (4 min): the task line decoded - tags, id, start, duration. Hammer `after ing2` beats hard-coded dates: the plan reflows when things slip. crit = the chain that must not slip; milestone + 0d = diamond; excludes weekends = no fake Saturdays. Read the tip callout verbatim: gantt is the strictest grammar in mermaid - when it breaks, check the last line you touched, it is almost always a comma. |
| 9-16 | Part 2 · Timeline + gitGraph | Card "Timeline - eras and events" (3 min): period : event, continuation lines, sections color-band eras. Land the narrative point - "Scrappy era" to "Platform era" tells the maturity story before any event is read. Card "gitGraph - the release flow" (4 min): commit, branch, checkout, merge read like git itself. The killer use is NOT history - git stores that - it is drawing the branching CONVENTION. Keep it idealized: 8-12 commits with a lesson in them. |
| 16-24 | Part 3 · Kanban + journey + mindmap | Card "Kanban" (3 min): columns, indented cards, @{ } metadata - assigned, ticket, priority; moving work = moving one line, so standup snapshots diff in git. Card "User journey" (3 min): Task: score: actor; the score is SATISFACTION 1-5, not priority, not effort - a row of frowns is an argument no dashboard makes as fast. Card "Mindmap" (2 min): pure indentation, relative depth only, shape brackets for emphasis; the five-minute diagram for soft thinking. |
| 24-32 | Demo 1 · Build the Nova Q3 gantt | Follow along - beats below. |
| 32-37 | Demo 2 · Your release flow as gitGraph | Build your own - beats below. |
| 37-42 | Demo 3 · Map your domain, then walk a stakeholder's journey | Build your own - beats below. |
| 42-45 | Q&A | Close on the chooser table (pick by the QUESTION in the room, not the syntax you like) and homework - especially "bring your messiest diagram" for Session 6. |

### Demo 1 beats (8 min, everyone follows - the finicky one, done slowly)

1. Header first: `gantt`, `title Nova Q3 delivery plan`, `dateFormat YYYY-MM-DD`, `excludes weekends`. Empty chart, no errors.
2. `section Foundations` + the anchor task with a real date: `Ingestion v2 rollout : done, ing2, 2026-07-06, 10d`. One bar, styled finished.
3. Chain with after: `Schema registry : active, reg, after ing2, 8d` - no date typed, the bar computes its own start.
4. `section Quality` with the crit task: `Quality gate library : crit, gates, after reg, 10d`. Red bar = the chain that decides the end date.
5. `section Serving`: two parallel chains (`after gates`, `after slas`), close with the diamond - `Q3 review : milestone, rev, 2026-09-28, 0d`.
6. THE PAYOFF - do not rush it: change ing2's duration from 10d to 15d and watch the whole dependent plan reflow. Say the page's line: that is the slide-deck gantt's funeral - re-plan by editing one number.

Where it goes wrong: a missing comma, or a colon inside a task NAME. Recovery lines ready: "check the last line you touched" and "keep names short and punctuation-free - detail goes in the ticket, not the bar label." If your own live build breaks and will not yield, swap to the prepared Tab 3 and diff against the room's - the debugging is itself the lesson.

### Demo 2 beats (5 min, they drive)

1. `gitGraph` + two or three `commit id: "..."` lines named after real kinds of work, not "commit 1".
2. Model THEIR feature flow: branch develop or feature branches - whatever their convention actually is.
3. Hang a release on the merge: `merge develop tag: "v1.4"` - if the team tags elsewhere, draw THAT. The diagram documents their convention, not the textbook's.
4. Add the hotfix path from main - the exception everyone asks about in onboarding.
5. Gut check: does the drawing match what happened last release? If not, they have found the gap between convention and practice - worth a team conversation either way.

### Demo 3 beats (5 min, they drive - two soft diagrams back to back)

1. Mindmap with a THREE-MINUTE timer, enforced: `root((your domain))`, 3-5 branches, 2-3 children deep. Overworking a mindmap defeats the point - say it.
2. Promote with shapes: `{{hexagon}}` the branch that matters this quarter, `[square]` the stable boring ones.
3. Journey: one recurring experience - "stakeholder requests a new dashboard" is the classic - two or three sections, five to seven tasks.
4. Honest scores, as the STAKEHOLDER feels it. The page's sharpest line, deliver it: the step you are tempted to score 3 "to be fair to the team" is usually a 2, and usually the finding.
5. The lowest face is a roadmap candidate - and now they have the picture that argues for it in planning. Tie to the real-world card: the metrics-catalog wait that a journey score of 1 got funded.

## Never cut

- Demo 1 beat 6, the reflow - it is the single moment that converts gantt from "another chart" into "why this beats the spreadsheet", which is what the audience brought their roadmap to see.
- The comma warning + recovery line for gantt - people WILL break it alone this week, and the recovery habit is what keeps them from quitting the type.
- The journey honest-scores discipline - without it the journey diagram becomes theater; with it, it is a funding instrument.
- The chooser framing at close (pick by the question in the room) - it is what stops six grammars from blurring into none.

## Cut if long

1. First: Demo 3's mindmap half - the three-minute timer becomes homework; keep the journey, it has the stakeholder payoff.
2. Second: the kanban card - one screen-glance at the rendered board and "columns, cards, @{ } metadata, diffs in git" covers it; the syntax is the simplest of the day.
3. Third: timeline shrinks to one minute - show Nova's three eras rendered, name the era-narrative trick, move on. The grammar is learnable from the cheat sheet alone.
4. Protect gantt and gitGraph end to end - they are the two types with meeting-level stakes (roadmaps and release conventions), and the two this audience will be asked to produce first.

## Q&A ammo

- "Should we move our project plan out of Jira / Asana into this?" - No. Mermaid gantt shines for the REVIEWED plan - the roadmap in a README updated by PR - not for task management. The Self-study card's workflow: statuses flip done in the same PR that finishes the work.
- "Can the gantt pull real dates from our tracker?" - Not natively - but the source is text, so a small script (or an LLM) can regenerate the .mmd from an export, and Session 6's CI pattern re-renders it on every push.
- "Journey scores look subjective - how do we defend them?" - They are subjective by design: satisfaction of the actors, stated honestly. Defend them by co-scoring with the actual stakeholders - which is itself the valuable conversation.
- "Is kanban-in-text not just worse Jira?" - Different job: a diffable snapshot for docs, incident pages, and sprint retros - places a live board is overkill. The board of record stays wherever it is.
- "gitGraph for our real history?" - The page is direct about this: git already stores history; the diagram is for the idealized CONVENTION. Eight to twelve commits, each teaching something.
- "Which of the six should my team learn first?" - The chooser table answer: whichever question your meetings ask most. For most data teams that is gantt (when will it ship) and journey (why does this feel painful), in that order.

## Timing reality check

Six masterclasses in 21 minutes only works if you treat the concept cards as guided tours of already-rendered diagrams rather than live typing - the ONLY live typing before minute 24 should be zero. The historical overrun is Part 2: gitGraph tempts engineers into branching-strategy debates (trunk-based vs gitflow), which are great conversations and not this session - one minute, then "draw yours in Demo 2 and we will see". Demo 1 is the other risk: a comma error in YOUR live build in front of a room. That is why Tab 3 holds the finished gantt - swap, diff, recover, and narrate it as the debugging habit rather than a stumble. If everything runs long anyway, Demo 3 converts to homework almost losslessly since both its diagrams are solo exercises by design.
