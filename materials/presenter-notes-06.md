# Presenter notes - Session 6 · Make it yours: theming, config, and shipping

Instructor-only cues for `courses/06-pro-layer.html`. The finale - and the session with the big reveal: every pink diagram across all six sessions was stock mermaid with theme base. You present the Live cards and run three demos; Self-study cards ("themeVariables worth memorizing", "GitHub's renderer vs pre-rendered SVG") are homework depth. Do NOT spoil the reveal in your welcome.

## Preflight (before people arrive)

- Tab 1: the session page served, cards collapsed, "Projector zoom" on.
- Tab 2: mermaid.live with the Session 1 Nova map pasted, un-themed - Demo 1 dresses it live.
- Tab 3: your company's homepage (or the venue org's) plus a color picker - Demo 1 step 1 pulls brand hexes from it, which lands better than inventing colors.
- Terminal: node and npm verified, and CRITICALLY - run `npm install -g @mermaid-js/mermaid-cli` BEFORE the session. The puppeteer browser download is huge and will not finish on stage wifi. Have `nova.mmd` saved in an empty folder ready for Demo 2.
- Optional but strong: the course repo's own `assets/mermaid-live.js` open in an editor - the "ten lines behind this site" card is more convincing shown against the real file.
- Have the deep-dive pages (61-data-charts, 62-structure-extras, 63-power-config) reachable - the closing reveal points at them.

## Run of show (45 min, timed)

| Time | Beat | Notes |
|------|------|-------|
| 0-3 | Welcome | Frame it: five sessions in, Nova is fully diagrammed but wears default clothes and lives in editors. Today: brand, tune, ship. Tease "a five-session secret gets revealed" - do not say what. |
| 3-11 | Part 1 · Theming | Card "Two ways to configure: frontmatter and init" (3 min): five themes, only base obeys; frontmatter YAML between --- fences is the modern form, %%{init}%% the legacy one. Show the live forest-theme block overriding the pink page. Read the YAML tip: two-space indents, and QUOTE hex colors or YAML eats everything after the #. Card "The reveal: how every pink diagram was made" (3 min): the confession beat - theme base + three pink themeVariables, no CSS hacks. Render the self-contained block. Tell the brand-kit story: one shared frontmatter snippet, design stopped asking. |
| 11-18 | Part 2 · Architecture-grade | Card "architecture-beta: Nova's cloud layout" (4 min): four words - group, service, junction, side-anchored edges (`ing:R --> L:dw` reads "from ingestion's right into warehouse's left"). Five built-in icons; beta means beta - plain labels, expect evolution. Card "C4 context: Nova and its neighbors" (3 min): C4 is a method with a house style; mermaid flags it experimental, keep examples small. Land the which-one-when tip: subgraphed flowchart = logical flow and still the default, architecture-beta = deployment, C4 = stakeholder context. |
| 18-25 | Part 3 · Shipping | Show the three-routes SVG (host renders, your page embeds, mmdc pre-renders). Card "mermaid-cli: mmdc in one minute" (2 min): extension picks the format, docker image if npm is unwelcome, heavy first install is normal not broken. Card "CI: render on push, never by hand" (2 min): the two flavors - commit artifacts back, or let the docs build render; tell the story - diagrams stopped drifting because updating became a side effect of merging. Card "Embedding: the ten lines behind this site" (2 min): ESM import, initialize, run; securityLevel strict sanitizes and kills clicks, loose only for sources you fully trust. Card "Accessibility: accTitle and accDescr" (1 min): two lines, any diagram type, right after the type keyword. |
| 25-33 | Demo 1 · Brand-theme a Nova diagram | Follow along - beats below. |
| 33-39 | Demo 2 · Export Nova with mmdc | Build your own (you drive the terminal) - beats below. |
| 39-43 | Demo 3 · Make every Nova diagram accessible | Build your own - beats below. |
| 43-45 | Q&A + course close | The second reveal: live sessions end, the course does not - three self-paced deep dives follow, starting with data charts. Point at the homework's last bullet. |

### Demo 1 beats (8 min, everyone follows)

1. Grab three brand hexes: a light tint, a strong accent, a mid-tone - color-pick from the company homepage if no brand guide is handy.
2. Paste the Nova map in mermaid.live, add frontmatter: `theme: base` plus `themeVariables` with `primaryColor` set to the tint.
3. Add `primaryBorderColor` (accent) and `lineColor` (mid-tone). QUOTE every hex - say it before they type, someone will still forget.
4. Squint test: text readable on the tint? If not, set `primaryTextColor` near-black. Bonus: `fontFamily` to the docs font.
5. The closer, from the page: save the snippet somewhere shared - this frontmatter block IS the team's diagram brand kit now.

Where it goes wrong: an unquoted `#D6246E` silently kills the whole variables block (YAML comment), or the theme is not base so variables are politely ignored. Recovery lines: "quote your hex" and "only base reads themeVariables - quiz question one, incidentally."

### Demo 2 beats (6 min, you drive the terminal on screen)

1. Show the install command but do NOT run it live - explain the puppeteer download is why you pre-installed. Rooms with npm can start theirs now and let it run.
2. Save the themed Demo 1 source (frontmatter included) as `nova.mmd`.
3. `mmdc -i nova.mmd -o nova.svg`, then `-o nova.png`. Two files, one source, extension picks the format.
4. Open both; zoom the SVG to 800% - still crisp. That is why SVG is the default and PNG is for hosts that refuse vectors.
5. Drop the PNG into a slide: a mermaid diagram shipped to the one place fences cannot reach.

Where it goes wrong: corporate proxies block the puppeteer download for the room. Recovery line: "the docker image on the page skips the install entirely - and the homework wires this into CI where the corporate laptop does not matter."

### Demo 3 beats (4 min, they drive)

1. Everyone opens the Nova diagrams they kept from Sessions 1-5 (map, sequence, ERD, gantt - whatever survived).
2. Add `accTitle:` naming each diagram, right under the type keyword.
3. Add `accDescr:` stating the TAKEAWAY in one sentence - what a listener should learn, not what shapes exist. Bad: "boxes and arrows showing data". Good: "app events flow through ingestion into the warehouse which feeds dashboards".
4. Re-render to confirm nothing broke - the lines are invisible in output by design. Frame it with the page's words: the cheapest professionalism upgrade in the whole course.

## Never cut

- The reveal card - it is the emotional payoff of six sessions and the proof that theming is real ("everything you trusted was already themed").
- The quote-your-hex YAML warning - it is the number one silent failure people will hit alone, and it costs one sentence.
- Demo 1 through step 5 - the shared brand-kit snippet is the artifact teams actually adopt from this session.
- The securityLevel strict vs loose sentence in the embedding card - it is the only security beat in the course, and data/AI teams WILL embed diagrams from generated sources.

## Cut if long

1. First: Demo 3 becomes pure homework - the four steps are fully self-serve, and the homework list already extends it to "every diagram in one real doc".
2. Second: the C4 card - one rendered glance plus "experimental, use it if your org already speaks C4" - the which-one-when tip carries the decision.
3. Third: the CI card compresses to its story sentence (updating stopped being a task, it became a side effect of merging) and a pointer to the homework's package.json script bullet.
4. Protect the reveal and Demo 1 at full length - they are the session. The Self-study card "GitHub's renderer vs pre-rendered SVG" absorbs any when-to-fence-vs-export questions mid-lecture.

## Q&A ammo

- "Is architecture-beta safe to use at work?" - The page's own words: beta means beta - the keyword literally says so, labels should stay plain, and syntax may evolve. Fine for docs you maintain; for long-lived artifacts, the subgraphed flowchart remains the stable default.
- "Why do my custom colors not show on GitHub?" - The host picks the renderer, version, and config - GitHub ignores custom themes and strips clicks. When brand matters, pre-render with mmdc; when freshness next to code matters, fence it. Docs sites are the sweet spot where fences render branded.
- "Can we enforce the brand kit across the team?" - Yes: the shared frontmatter snippet per diagram, or set the theme once in the renderer you control - docs-site config or the initialize call, exactly like this course site does.
- "Is loading mermaid from a CDN okay for internal tools?" - Pin the version (the snippet uses mermaid@11), or vendor the file into your repo for airgapped setups. Keep securityLevel strict unless every source is yours.
- "Can AI write the themeVariables for us?" - It will happily generate a plausible set - but run the page's squint test and contrast check yourself; light fill, dark border, near-black text survives projectors, printers, and colorblind readers.
- "What happened to ELK layout? My big diagram still tangles." - Named on this page, covered in Deep dive 6.3 (power config) - the self-paced track exists precisely for that layer.

## Timing reality check

Two clocks threaten this session and neither is the concepts: the puppeteer install (solved only by pre-installing - there is no on-stage recovery if you forgot) and Part 3, which is five cards deep and historically bleeds to twelve minutes because CI questions arrive early. Hold the line at seven minutes by deferring every "how would this work in OUR pipeline" to Q&A - the homework's package.json one-liner answers most of them anyway. The reveal deserves its full three minutes with a pause after the confession; rushing it wastes the best-engineered moment in the course. If minute 39 arrives mid-Demo 2, finish the SVG export, skip the PNG-into-slides beat, and convert Demo 3 to homework - then land the closing reveal about the deep dives no matter what, because it reframes the ending from "course over" to "course continues".
