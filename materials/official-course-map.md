# Official course map - learn-mermaid-with-phoebe

Verified against mermaid.js.org docs on 2026-07-13. Mermaid version at design time: **11.16.0**.
Fast-moving project - re-verify the changelog (https://github.com/mermaid-js/mermaid/releases) before each delivery.

## Source universe

| Source | What it is | How we use it |
|---|---|---|
| mermaid.js.org docs (Diagram Syntax) | Canonical syntax reference, ~29 diagram types | Primary spine |
| mermaid.js.org (Deployment & Config) | Theming, directives, config, CLI, accessibility, layouts | Session 6 + deep dive 63 |
| mermaid.live | Official live editor | Taught in Session 1, linked from every diagram block |
| GitHub / GitLab / Notion / Obsidian native rendering | Where learners actually meet mermaid | Session 1 + Session 6 |
| mermaid-cli (mmdc) | Export to SVG/PNG/PDF in CI | Session 6 |

## The 80% rule applied

Mermaid ships ~29 diagram types; roughly half are experimental/beta. Live sessions teach the
**stable, daily-driver set deep** (flowchart, sequence, state, ER, class, gantt, timeline,
kanban, gitgraph, journey, mindmap, pie) plus theming/config/embedding. Experimental and
niche types move to the self-paced deep-dive track. Certificates, videos, and community
tutorials stay with the official ecosystem - the course says so honestly.

## Per-session coverage

Legend: ✓ taught to working depth · ◐ introduced, self-study to finish

### Session 1 · Diagrams as code (🟢)
| Official topic | Depth |
|---|---|
| About Mermaid / why text diagrams | ✓ |
| Getting started, live editor (mermaid.live) | ✓ |
| Flowchart: nodes, shapes, edges, direction | ✓ |
| Rendering in GitHub / Notion / Obsidian / VS Code | ✓ |
| Syntax structure + comments (%%) | ✓ |
| Installation / API usage | ◐ (S6 finishes) |

### Session 2 · Flowchart mastery (🟢/🟡)
| Official topic | Depth |
|---|---|
| Flowchart subgraphs | ✓ |
| Edge types, labels, lengths | ✓ |
| Node shapes incl. v11 `@{ shape: ... }` syntax | ✓ |
| classDef / class / style / linkStyle | ✓ |
| Click interactions | ◐ |
| New v11 shapes catalog (30+) | ◐ |

### Session 3 · Runtime stories (🟡)
| Official topic | Depth |
|---|---|
| Sequence: participants, actors, arrows, activations | ✓ |
| loops / alt / opt / par / critical blocks | ✓ |
| Notes, autonumber, boxes | ✓ |
| State diagrams v2: states, transitions, choice, fork | ✓ |
| Composite/nested states | ✓ |
| Sequence: links/menus, background rects | ◐ |

### Session 4 · Data models (🟡/🟠)
| Official topic | Depth |
|---|---|
| ER diagram: entities, attributes, keys (PK/FK), comments | ✓ |
| Crow's foot cardinality + identifying vs non-identifying | ✓ |
| Class diagram: classes, members, visibility | ✓ |
| Class relationships (inheritance, composition, etc.) | ✓ |
| Generics, annotations, namespaces | ◐ |

### Session 5 · Plans and people (🟠)
| Official topic | Depth |
|---|---|
| Gantt: sections, tasks, milestones, dependencies | ✓ |
| Timeline | ✓ |
| Kanban | ✓ |
| GitGraph: commit, branch, merge, cherry-pick | ✓ |
| User journey | ✓ |
| Mindmap | ✓ |
| Gantt: excludes/weekends, compact mode | ◐ |

### Session 6 · The pro layer (🔴)
| Official topic | Depth |
|---|---|
| Theming: built-in themes + themeVariables | ✓ |
| Config: init directives + frontmatter config | ✓ |
| Architecture diagram (+ icons) | ✓ |
| C4 (experimental - flagged as such) | ◐ |
| mermaid-cli (mmdc) export SVG/PNG/PDF, CI usage | ✓ |
| Embedding: GitHub/GitLab/Notion/docs sites/slides | ✓ |
| Accessibility (accTitle/accDescr) | ✓ |
| ELK layout | ◐ (deep dive 63 finishes) |

### Deep dive 61 · Data charts (self-paced)
pie ✓ · quadrantChart ✓ · xychart-beta ✓ · sankey-beta ✓ · radar ✓

### Deep dive 62 · Structure extras (self-paced)
block-beta ✓ · packet-beta ✓ · treemap ✓ · requirement diagram ✓ · venn ◐

### Deep dive 63 · Power config (self-paced)
directives deep ✓ · registered icon packs ✓ · ELK layouts ✓ · math (KaTeX) ✓ · securityLevel ✓

## Not covered by design (honest list)

- ZenUML (requires separate plugin, non-core)
- Event Modeling, Wardley, Cynefin, Ishikawa, TreeView, Swimlanes (very new/experimental at 11.16; revisit when stable)
- Mermaid Chart (the commercial SaaS) - mentioned, not taught
- Contributing to mermaid itself / adding new diagram types
- Official videos and community tutorials - linked, not replicated

## Fetched syllabus appendix

Docs navigation (2026-07-13): Introduction (About, Getting Started, Syntax and Configuration) ·
Diagram Syntax (Flowchart, Sequence, Gantt, Class, State, ER, User Journey, Pie, Quadrant,
Requirement, GitGraph, C4 ⚠, Mindmap, Timeline, ZenUML, Sankey 🔥, XY 🔥, Block 🔥, Packet 🔥,
Kanban 🔥, Architecture 🔥, Radar 🔥, Event Modeling 🔥, Treemap 🔥, Venn 🔥, Ishikawa 🔥,
Wardley 🔥, Cynefin 🔥, TreeView 🔥, Swimlanes 🔥) · Ecosystem (Mermaid Chart, Tutorials,
Integrations) · Deployment & Config (Configuration, API, Setup, Icons, Directives, Theming,
Math, Accessibility, CLI, FAQ, Layouts).
