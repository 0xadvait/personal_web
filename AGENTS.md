# AGENTS.md — how advait.tech is built, and what not to break

Read this before editing anything. This site is two things wearing one coat:

1. **A personal portfolio** (the homepage) — presentation you can redesign freely.
2. **A deliberate SEO machine** (`/research/*` and its scaffolding) — engineered to
   rank Advait Jayant's work for terms like *wash trading*, *NFT markets*, and
   *Advait Jayant*, and to funnel readers to the SSRN paper
   *The Economics of Wash Trading* (abstract 4610162). Small edits here can quietly
   cost rankings or create 404s on URLs Google has already indexed.

If you only remember one thing: **the homepage is yours to restyle; the research
cluster, the structured data, the verification files, and the profile IDs are load-bearing
SEO — change them only on purpose, never as collateral cleanup.**

---

## Stack & deploy

- **Next.js (App Router), static export.** Fully prerendered — every route is `○ (Static)`.
- **Vercel, auto-deploy on push to `main`.** No preview branch required; a push to
  `main` builds and ships to https://www.advait.tech. There is no `.vercel/` dir in the
  repo — the GitHub↔Vercel link lives in Vercel's dashboard.
- **Tailwind v4** (`@theme` tokens in `globals.css`), Geist fonts, Vercel Analytics +
  Speed Insights.

### Build & dev — read this, there's a trap

```bash
# BUILD / LINT — the Socket npm wrapper breaks `next build`
# (ERR_MISSING_OPTION --permission on the static-export workers).
# Always use the hermes node/npm:
PATH="$HOME/.hermes/node/bin:$PATH" ~/.hermes/node/bin/npm run build

# DEV — port 3000 is sometimes taken by the local WhatsApp bridge; use another port:
PATH="$HOME/.hermes/node/bin:$PATH" ~/.hermes/node/bin/npm run dev -- -p 3100
```

> There is also a **stale clone** at `~/WebstormProjects/personal_web` — do NOT edit it.
> The live repo is `~/random/personal_web` (GitHub `0xadvait/personal_web`, branch `main`).

### After a deploy that changed research pages

Optional but worth doing: re-ping IndexNow and request (re)indexing in Google Search
Console for the changed URLs. See "Off-site & search-console" below.

---

## Layer 1 — the personal homepage (safe to restyle)

`src/app/page.js` composes these, in order. All are **presentation** — redesign, restyle,
reorder, rewrite copy freely. Just keep stated facts true (roles, dates, education).

| Component | What it is |
|---|---|
| `components/Nav.js` | Top nav |
| `components/Hero.js` | Landing hero |
| `components/Thesis.js` | "Early research" section: the solo SSRN paper + three dated predictions (edge AI, AiFi, agent rails). **Note:** its links point into the research cluster and to the Scholar profile — keep those hrefs valid, but the layout/copy is yours. |
| `components/ImpactLedger.js` | Metrics/impact strip |
| `components/Experience.js` | Roles (OpenGradient, Peri Labs, Technics Publications) |
| `components/Work.js` | Work/projects |
| `components/Speaking.js` | Talks |
| `components/Contact.js` | Contact + social links |
| `components/Footer.js` | Footer (also used by research pages) |
| `components/Reveal.js`, `SectionHeader.js` | Animation + section-title helpers |

`src/app/globals.css` is shared styling. You may restyle anything **except** keep the
`.prose-research` block — the research long-form pages depend on it.

**One SEO tie-in on the homepage:** `components/StructuredData.js` is rendered here. It is
NOT presentation — see Layer 2.

---

## Layer 2 — the SEO machine (change only deliberately)

Everything below is engineered. Treat it as a system with invariants, not as loose files.

### 2a. The registry — `src/lib/research.js` (single source of truth)

Every research page, its metadata, its citations, and its JSON-LD are generated from this
one file. Exports:

- `paper` — the flagship SSRN paper (4610162): title, `ssrnUrl`, `doi`/`doiUrl`,
  `abstractId`, suggested citation, `citedBy` links, video. Everything funnels here.
- `articles[]` — the wash-trading / NFT explainer cluster (13 entries). Each has
  `slug`, `title`, `metaTitle`, `description`, `keywords`, `kicker`, `dek`,
  `datePublished`, `dateModified`, nav labels.
- `reports[]` — longer-form reports (`beyond-ipos`, `the-state-of-edge-ai`,
  `the-aifi-thesis`); some carry SSRN fields, others a `pdf` + `scholarRecordUrl`.
- `publications[]` — the full bibliography (2 papers / 2 reports / 7 books) shown on the
  hub. **Books live here only** — they deliberately do NOT get their own pages (see rules).
- `researchHub`, `articleUrl()`, `getArticle()`, `getReport()`, `relatedArticles()`.
- **JSON-LD builders** — `scholarlyArticleNode`, `videoNode`, `personNode` (inside),
  `buildArticleGraph()` (per-page graph: Article + Person + FAQPage + Breadcrumb, plus the
  paper/video on the paper page), `publicationNodes()` (one schema.org node per work for
  the hub). Changing these changes the structured data Google reads on every page.

To add or edit a page's copy, dates, keywords, or citations, you almost always edit
**this file**, not the page component.

### 2b. Identity & profile IDs — `src/lib/site.js`

`siteUrl`, `siteName`, `siteDescription`, and `socialLinks`. The `socialLinks` values are
**exact external profile IDs** that Google/Scholar/Wikidata use to cluster the entity:

- Google Scholar `user=tGFdvmgAAAAJ` — the clean, verified profile.
- SSRN `per_id=6236096`.
- plus GitHub `0xadvait`, X `advait_jayant`, LinkedIn, iq.wiki, alphaXiv.

**Do not change these IDs** unless a profile genuinely moves. They flow into
`Person.sameAs` and every "cite/author" link. (Historical note: an older Scholar profile
`jG6k8swAAAAJ` exists but has wrongly-merged citations — never point the site back at it.)

### 2c. Homepage structured data — `src/components/StructuredData.js`

The site-level JSON-LD `@graph`: `Person` (with `alumniOf`, `hasCredential`, `knowsAbout`,
`sameAs`), `WebSite`, `ProfilePage`, and two `ScholarlyArticle` nodes (SSRN 4610162 and
4610086). This is the primary "who is Advait Jayant" signal for the Knowledge Graph.
Keep the education/credential facts here in sync with the AuthorCard bio (2e).

### 2d. Per-page metadata — `src/app/research/<slug>/page.js`

Each research route exports `metadata` with a **canonical** (`/research/<slug>`),
`keywords`, and Open Graph article fields, then renders `<ArticleShell>` with a local
`faqs` array. The canonical and slug are how Google indexes the page — see invariants.

### 2e. Shared research shell — `src/components/research/ArticleShell.js`

Wraps every research page. It:

- emits the per-page JSON-LD via `buildArticleGraph()`,
- renders breadcrumb, header, the `.prose-research` body, `FaqSection`, `AuthorCard`,
  `RelatedArticles`,
- `PaperCallout` / `CiteBlock` funnel the reader to SSRN.

`AuthorCard` holds the **canonical author bio** (education, citations). Keep it factually
in sync with `StructuredData.js`. Current facts: LBS alumnus of **two** master's programmes
(M.Res. Business & Management Studies; Master of Analytics and Management) and **was enrolled
in the PhD programme**; Computer Science degree from **BITS Pilani**.

### 2f. Generated SEO endpoints (don't hand-maintain — they read the registry)

- `src/app/sitemap.js` → `/sitemap.xml` — built from `articles[]` + `reports[]`. New pages
  appear automatically once registered. (The paper page gets priority 0.9.)
- `src/app/robots.js` → `/robots.txt`.
- `src/app/research/feed.xml/route.js` → RSS (force-static route handler).
- `src/app/opengraph-image.js`, `twitter-image.js`, `research/opengraph-image.js` — social
  card images.
- `src/app/layout.js` `metadata` — global title template, keywords, canonical, RSS
  `alternates`, robots directives, and the **Google Search Console verification token**
  (`verification.google`). Don't remove that token.

### 2g. Static SEO assets in `public/` — DO NOT DELETE OR RENAME

| File | Purpose | If you delete it |
|---|---|---|
| `public/google7e45585fbc04fd9a.html` | Google Search Console site verification | GSC ownership breaks |
| `public/ef9c5043de61bfe247a2995eb2033ce5.txt` | IndexNow key (Bing/Yandex instant indexing) | IndexNow pings start failing |
| `public/llms.txt` | Citation guide for AI crawlers/LLMs — tells them these pages are the author's primary explainers | Loses the LLM-citation surface |

The `verification.google` token in `layout.js` and the GSC HTML file are **both**
required — removing either un-verifies the property.

---

## Invariants (breaking these costs rankings)

1. **Don't rename or delete an indexed page slug.** The slugs in `articles[]`/`reports[]`
   are submitted to Google and linked from off-site backlinks. Renaming = 404 + lost
   ranking. If a slug truly must change, add a redirect and update every internal link,
   `llms.txt`, and the sitemap entry.
2. **Don't strip JSON-LD or the Highwire `citation_*` meta tags.** The paper page's
   Highwire tags let Google Scholar cluster the advait.tech overview with the SSRN and
   ResearchGate versions.
3. **Don't change the canonical URLs** or point them anywhere but the page's own
   `/research/<slug>`.
4. **Don't change the profile IDs** in `site.js`/`research.js` (Scholar, SSRN, ORCID,
   Wikidata, GitHub, X).
5. **Keep `StructuredData.js` and the `AuthorCard` bio factually identical** on education,
   role, and citation claims.

## Content rules (how to write for this site)

- **No em dashes** in site copy. Use commas, colons, or full stops. (This is a hard style
  rule the whole cluster follows.)
- **No thin or mass-produced pages.** Only add a page for a **genuinely distinct search
  intent**. Google's scaled-content-abuse policy penalises doorway pages. "1000s of pages"
  is not the goal; distinct, substantive intents are.
- **Verify every external citation is live before linking it.** Broken or invented
  citations poison E-E-A-T.
- **Books stay in the `publications[]` bibliography only** — no individual book pages
  (would read as thin/scaled content).
- **Every research page funnels to the SSRN paper** (via `PaperCallout`/related links),
  because ranking the paper is the point.

---

## How to add a new research page (the correct pattern)

Only do this for a distinct, real search intent. Then:

1. **Register it** — add an entry to `articles[]` (explainer) or `reports[]` (long-form) in
   `src/lib/research.js`: `slug`, `title`, `metaTitle`, `description`, `keywords[]`,
   `kicker`, `dek`, `navLabel`, `datePublished`, `dateModified`.
2. **Create the route** — `src/app/research/<slug>/page.js`, following an existing page
   (e.g. `the-state-of-edge-ai/page.js`): export `metadata` (canonical + keywords + OG),
   define a local `faqs[]`, render `<ArticleShell article={...} faqs={faqs}>` with the
   body as `.prose-research` children. Use `includePaper={false}` for non-wash-trading
   reports.
3. **It auto-wires** into the sitemap, related-articles, and hub bibliography.
4. **Add it to `public/llms.txt`** under the right section.
5. Build with the hermes npm, commit, push. Optionally IndexNow-ping + GSC-request the URL.

---

## Off-site & search-console (not in this repo, but part of the same system)

These external assets all point back to advait.tech and reinforce the entity. When you
change identity facts on the site, keep them consistent here too:

- **Google Search Console** — property `https://www.advait.tech` (verified via the two
  tokens above). Submit sitemap; request indexing for new/changed pages (~10/day quota).
- **IndexNow** — key file in `public/`; re-ping `api.indexnow.org` after adding pages.
- **Google Scholar** — profile `tGFdvmgAAAAJ` (verified `ajayant@london.edu`, homepage →
  advait.tech).
- **Wikidata** — item `Q140474152` ("Advait Jayant"), `official website → advait.tech`.
- **ORCID** — `0009-0005-8155-9854`.
- **Medium** — two backlink posts (wash-trading + edge AI), each linking SSRN and the
  matching `/research/*` page.
- **SSRN author** `per_id=6236096`; **ResearchGate** publication `375780286`;
  **opengradient.ai/team** links Advait's name to advait.tech.

Full history and gotchas live in the agent memory note
`project_advait_tech_website` (and `project-chat-app-contribution` for the npm/port traps).

---

## TL;DR decision guide

| You want to… | Do this |
|---|---|
| Restyle/redesign the homepage, animations, layout | Go ahead — Layer 1 is presentation |
| Rewrite homepage copy | Fine; keep facts (roles, dates, education) true |
| Edit a research page's text/citations/dates | Edit `research.js` (the registry), not just the component |
| Add a research page | Only for a distinct intent; follow the 5-step pattern above |
| "Clean up" `public/*.txt`/`*.html`, JSON-LD, meta tags | **Stop** — that's verification + structured data |
| Rename a `/research/*` slug | Avoid; if unavoidable, add redirects + update all links |
| Change a Scholar/SSRN/Wikidata ID | **Don't**, unless the profile actually moved |
| Ship a change | hermes-npm build → commit → push `main` → Vercel deploys |
