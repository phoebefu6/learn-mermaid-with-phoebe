# Presenter notes - Session 4 · Schemas that speak: ER and class diagrams

Instructor-only cues for `courses/04-data-models.html`. You present the Live cards and run three demos; Self-study cards ("How much model belongs on one diagram?", "Identifying or not? The two-question test", "Generics, annotations, namespaces, notes") are homework depth.

## Preflight (before people arrive)

- Tab 1: the session page served, cards collapsed, "Projector zoom" on. Scroll position bookmarked at the crow's foot decoder SVG in Part 2 - you will return to it repeatedly.
- Tab 2: mermaid.live, empty - Demo 1 rebuilds the Nova ERD from nothing.
- Tab 3: your scratch GitHub repo - Demo 1 step 6 commits the ERD to a README.
- Check the homework thread: people were asked to bring "a table or two from a schema you know well". Demo 2 runs on their schemas; have one of YOUR real table clusters ready as the fallback patient.
- This is the session where data folks feel most at home - expect more questions, budget accordingly.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Recap | Sessions 1-3 drew how Nova FLOWS - then the Part 0 hook: "wait, what exactly is IN the warehouse?" lives in someone's head or a 40-tab spreadsheet. Today it becomes twelve lines of text. |
| 3-12 | Part 1 · ER diagrams | Card "Entities and the relationship sentence" (3 min): the one-line shape `ENTITY sym--sym ENTITY : verb`, the four cardinality pairs, `--` identifying vs `..` non-identifying, and the mirror rule (crow's foot points AT the many entity). Mention word aliases (`one or more`) as training wheels. Card "Attributes, types, and keys" (3 min): type name KEY "comment"; land the callout - comment the traps ("lowercased at ingestion", "null while active"), never the obvious. Card "Nova's core warehouse model" (3 min): read the five relationships ALOUD as sentences - customers sign subscriptions, place orders, generate events; campaigns target and get credit. Point out `..` doing real work on the campaign lines. |
| 12-17 | Part 2 · Cardinality | Walk the crow's foot decoder SVG slowly - symbol nearest an entity answers "how many of THAT one". Card "The three patterns that cover 90% of models" (3 min): one-to-many workhorse, optional one-to-one, many-to-many resolved through CAMPAIGN-TOUCH with its composite `PK, FK` key. Tell the optionality-argument story - the analyst who asked "so organic orders are... impossible?" and saved the quarter. |
| 17-23 | Part 3 · Class diagrams | Card "Classes, members, visibility" (3 min): + - # ~ markers, return types after methods, $ static and * abstract; land "don't inventory every field - 30 members is a screenshot, not a model". Card "The six arrows + Nova's ingestion SDK" (3 min): the arrow table, then the diamonds via the SVG figure - filled diamond swallowed the part, it is not coming back out. Connectors aggregated, RunLog composed - say why for each. |
| 22-31 | Demo 1 · Build the Nova warehouse ERD | Follow along - beats below. |
| 31-37 | Demo 2 · Diagram YOUR schema | Build your own - beats below. |
| 37-41 | Demo 3 · Class-diagram the ingestion SDK | Follow along - beats below. |
| 41-45 | Q&A | Close on the cheat sheet and homework - especially "bring a real roadmap in a spreadsheet" for Session 5. |

### Demo 1 beats (9 min, everyone follows - the session's big artifact)

1. `erDiagram`, then the skeleton sentence: `CUSTOMER ||--o{ ORDER : places`. Everyone says it out loud both ways using the decoder rule - do not skip the saying-aloud, it is the learning mechanism.
2. Add the other hub relationships: `CUSTOMER ||--o{ SUBSCRIPTION : signs`, `CUSTOMER ||--o{ EVENT : generates`. CUSTOMER visibly becomes the hub - correct, it is the business's center of gravity.
3. Campaigns with DASHED lines and a quoted multi-word label: `CAMPAIGN |o..o{ ORDER : "gets credit for"`, `CAMPAIGN }o..o{ CUSTOMER : targets`. Same quoting rule as Session 1.
4. Furnish CUSTOMER: `int customer_id PK`, `string email UK`, `date signed_up_on` - watch key badges appear.
5. Furnish ORDER with the gotcha in writing: `int campaign_id FK "null for organic orders"` - one comment, the difference between a diagram and documentation.
6. Fill the remaining entities from Part 1's block, commit to the scratch repo README in a fence.

Where it goes wrong: cardinality symbols typed backwards (`{o` instead of `o{`). Recovery line: "the crow's foot points AT the many side - if the foot is not touching the entity that has many, mirror it." Second trap: unquoted multi-word relationship labels.

### Demo 2 beats (6 min, they drive)

1. Everyone picks 3-5 tables they actually query - fact plus dimensions is the classic. Say the warning: resist doing the whole warehouse.
2. Relationship sentences FIRST, no attributes - and read each aloud both directions. This is where people discover they are not sure whether a join is one-to-one or one-to-many. That discovery is the demo working, name it as such.
3. Attribute blocks for the two most-queried tables only, at least one quoted gotcha ("timezone is UTC", "soft deletes only").
4. Many-to-many check: a direct `}o--o{` means find or propose the bridge table.
5. Homework handoff: send the link to the teammate who knows the data best with one question - "what's wrong?"

### Demo 3 beats (4 min, everyone follows)

1. `classDiagram`, `class Connector` with `+connect() bool` and `+read() Batch*` - trailing star means abstract, subclasses owe an implementation.
2. Wire inheritance: `Connector <|-- EventStreamConnector`, `Connector <|-- CrmExportConnector`. Arrowhead points at the parent.
3. `Pipeline` with `-List~Connector~ sources` - tildes, not angle brackets, for generics. Expect this typo; call it before it happens.
4. The two diamonds: `Pipeline o-- "1..*" Connector : reads from` and `Pipeline *-- RunLog : owns`. Everyone says the lifecycle rule for each aloud - if they can, they have the session.

## Never cut

- The say-it-aloud-both-ways habit in Demo 1 - it is the single technique that makes cardinality stick, and the page repeats it in the drills for a reason.
- The `"null for organic orders"` comment beat - quoted gotcha comments are the highest-value ER feature for a data audience, worth more than any extra entity.
- The optionality-argument story in Part 2 - it converts cardinality from pedantry into money for this audience.
- The composition vs aggregation contrast on the diamonds - it is the one class-diagram idea people carry into design conversations (and interviews).

## Cut if long

1. First: Demo 3 - compress to showing the finished SDK block from Part 3 and reading the diamonds aloud; the four build steps are self-serve on the page.
2. Second: Part 3's visibility detail (# and ~) - keep + and -, point at the card for the rest.
3. Third: Demo 2 shrinks to steps 1-2 (relationships said aloud) with attributes as homework - the homework list already extends it to 5-8 entities anyway.
4. The identifying vs non-identifying decision has a dedicated Self-study card ("the two-question test") - answer live questions with its default: unsure means `..`, the weaker claim.

## Q&A ammo

- "Can this be generated from our actual database?" - Yes - schema-to-mermaid scripts and dbt/ORM exporters exist, and an LLM converts DDL to erDiagram well. But the Self-study card's warning applies: model the business, not the database dump. Generated full-schema ERDs are inventories; the 8-12 entity curated view is the documentation.
- "How is this different from DrawDB or dbdiagram.io?" - Those are dedicated schema tools with richer editing; mermaid's edge is living in the README and diffing in PRs next to the dbt models. Use both: dedicated tool to explore, mermaid to document where the team reads.
- "ER diagram or class diagram for our dbt models?" - ER. Class diagrams are for the CODE around the warehouse - connectors, checks, pipeline objects. The page's line: ER describes what you STORE, class describes what you BUILD.
- "Does mermaid validate my types?" - No - types are free text, your reviewers validate. That is a feature: write `NUMBER(38,0)` if that is what Snowflake calls it.
- "How many entities before it is unreadable?" - Working budget of roughly 8-12, then one diagram per domain linked from an index - the same split rule as Session 2's flowcharts.
- "What about many-to-many - can I just draw it?" - You can type `}o--o{`, but the cheat sheet says never ship it: resolve through a bridge entity with the composite `PK, FK` pair, which the warehouse almost always has already.

## Timing reality check

Data teams treat this session as home turf, and that is the risk: Part 1 and Part 2 invite live debugging of the audience's actual schemas ("so is invoice-to-payment identifying or not?"), and each such detour costs three minutes. Take one, answer it with the two-question test, and park the rest for Demo 2 - which exists precisely to absorb that energy. Demo 1 at nine minutes is the longest demo in the course and it does not compress well because the artifact matters; protect it by keeping Part 2 to five minutes (the decoder SVG does most of the teaching visually). If you reach minute 37 and Demo 3 has not started, show the finished SDK diagram, read the two diamonds aloud, and let the page carry the rest - the ERD is the artifact this session is judged by.
