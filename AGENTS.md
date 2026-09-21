# AGENTS.md — what to edit to change what, and what never to touch

This repo does two jobs at once and it's easy to break the second one by accident:

1. **A personal portfolio** — the homepage. Presentation. **Edit it freely.**
2. **A deliberate SEO machine** — `/research/*` plus its scaffolding. It's engineered to
   rank Advait Jayant for *wash trading*, *NFT markets*, *Advait Jayant*, etc., and to push
   readers to the SSRN paper *The Economics of Wash Trading* (abstract 4610162). Editing
   the wrong file here silently loses rankings or 404s a URL Google already indexed.

**Start with the two tables below.** They tell you which file to touch for a given change,
and which files to never touch. The reference sections after them are backup detail.

---

## TABLE 1 — "I want to change ___" → edit this

| I want to change… | Edit this | Notes |
|---|---|---|
| Homepage look, layout, animation, colors | `src/components/*.js` (Hero, Nav, etc.) + `src/app/globals.css` | Free to redesign. Keep the `.prose-research` block in globals.css. |
| The section wrapper + label used by every homepage section | `src/components/ui.js` (`Section`) | One component. The label is the `.kicker` class in `globals.css`. |
| The dark hero card (headline, one-line sub, the three-up proof row) | `src/components/Hero.js` | The proof row's numbers must match `Experience.js` and `Research.js`. |
| The live ASCII globe inside the hero card | `src/components/AsciiGlobe.js` | Canvas, client-only, ~30fps, single frame under reduced motion. It is the one moving thing on the page; do not add a second. |
| The first-person bio (rendered at `/about`) | `src/components/About.js` | Keep its facts identical to `StructuredData.js` + the `AuthorCard` (see the education row). |
| The frame shared by `/about`, `/experience`, `/talks` (nav, h1, column, footer) | `src/components/PageShell.js` | The pages themselves are one-liners in `src/app/<page>/page.js` that set `metadata` + `current`. |
| The nav tabs and which one is active | `src/components/Nav.js` (`tabs`, `current` prop) | Server component; no client JS. |
| Contact line + socials (footer on every page) | `src/components/Footer.js` | The link values come from `site.js`. |
| Homepage copy (hero text, headings, blurbs) | the relevant `src/components/*.js` | Keep stated facts true. |
| Roles / job history, and the track-record numbers (revenue, views, users), rendered at `/experience` | `src/components/Experience.js` | The same numbers appear in the hero proof row (`Hero.js`); keep them in sync. |
| Talks / speaking, rendered at `/talks` | `src/components/Speaking.js` | |
| The three OpenGradient launch films (bottom of `/experience`) | `src/components/Films.js` | One paragraph, three links. Framed as marketing work, not a film credit. |
| Contact section / socials shown on page | `src/components/Contact.js` (display), `src/components/Footer.js` (footer row) | The link **values** come from `site.js` (next row). |
| A social / profile link (X, GitHub, Scholar, SSRN…) | `src/lib/site.js` → `socialLinks` | One source of truth. Flows into `Person.sameAs` and every cite link. Change the **ID** only if the profile truly moved. |
| Site name, URL, or tagline | `src/lib/site.js` | `siteUrl` flows into canonicals, sitemap, JSON-LD everywhere. |
| **Education / credentials** | ALL THREE of `src/components/StructuredData.js` (`alumniOf` + `hasCredential`), `src/components/research/ArticleShell.js` (`AuthorCard` bio), and `src/components/About.js` (second paragraph) | **Three places. Keep them factually identical.** |
| The author bio shown on research pages | `src/components/research/ArticleShell.js` → `AuthorCard` | Mirror any fact change into `StructuredData.js`. |
| A research page's **body text** | `src/app/research/<slug>/page.js` (the JSX children) | |
| A research page's **title / description / keywords / dates** | `src/lib/research.js` (that page's registry entry) | NOT the component — the component reads these from the registry. |
| A research page's **FAQ** | the local `faqs` array in that `src/app/research/<slug>/page.js` | Feeds the FAQPage JSON-LD. |
| The paper's "cited by" / suggested citation | `src/lib/research.js` → `paper` | Verify every citation link is live first. |
| The book / bibliography list | `src/lib/research.js` → `publications[]` | Books stay here only — no individual book pages (see Rules). |
| Homepage `<title>` / meta keywords / OG tags | `src/app/layout.js` → `metadata` | |
| The JSON-LD on the homepage | `src/components/StructuredData.js` | Structured data — edit deliberately. |
| The JSON-LD on research pages | `src/lib/research.js` → `buildArticleGraph()` / node builders | Structured data — edit deliberately. |
| **Add a brand-new research page** | register in `src/lib/research.js` + create `src/app/research/<slug>/page.js` + add to `public/llms.txt` | Only for a genuinely distinct search intent. Full steps below. |
| The sitemap | `src/app/sitemap.js` auto-builds research URLs from the registry; the three static pages (`about`, `experience`, `talks`) are a small literal list at the top | A new research page appears once registered; a new static page must be added to that list. |
| The RSS feed | **nothing** — `src/app/research/feed.xml/route.js` auto-builds from the registry | |
| robots directives | `src/app/robots.js` (generated) or `layout.js` `robots` | |

## TABLE 2 — NEVER edit / delete / rename these (SEO load-bearing)

| Do NOT touch | Why | If you break it |
|---|---|---|
| `public/google7e45585fbc04fd9a.html` | Google Search Console site-ownership proof | GSC un-verifies; lose indexing control |
| `layout.js` → `metadata.verification.google` token | Second half of that same GSC proof | Same as above (both are required) |
| `public/ef9c5043de61bfe247a2995eb2033ce5.txt` | IndexNow key (Bing/Yandex instant indexing) | IndexNow pings start failing |
| `public/llms.txt` | AI-crawler citation guide (edit content, but keep the file) | Lose the LLM-citation surface |
| Any `slug` of an already-published `/research/*` page | Google has indexed these; off-site backlinks point at them | 404 + lost ranking. If unavoidable: add a redirect + update every link, `llms.txt`, sitemap. |
| Profile IDs in `site.js` (Scholar `tGFdvmgAAAAJ`, SSRN `6236096`, …) | Entity-clustering signals for Google/Scholar/Wikidata | Breaks the "who is this person" graph. (Never revert Scholar to the old `jG6k8swAAAAJ` — wrongly-merged citations.) |
| The `canonical` value in any page's `metadata` | Tells Google the one true URL | Duplicate-content / ranking dilution |
| JSON-LD blocks and the Highwire `citation_*` meta on the paper page | Structured data + Scholar clustering | Google loses the entity + can't cluster the paper versions |

> Rule of thumb: if a file is in `public/` and looks like a random-hex `.txt`/`.html`, or if
> you're about to "tidy up" JSON-LD, meta tags, or a URL slug — **stop, it's SEO.**

---

## The map, in one breath

- **Homepage** = `src/app/page.js` composing `src/components/*.js`. Presentation. Yours.
- **Research cluster** = `src/app/research/<slug>/page.js` (one per page) + the shared
  `src/components/research/ArticleShell.js` + the `src/lib/research.js` registry. Engineered.
- **The registry `src/lib/research.js` is the brain** — page metadata, citations, and all
  research JSON-LD are generated from it. To change a page's *data*, edit the registry; to
  change its *words*, edit the page component.
- **`src/lib/site.js`** = identity (URL, name, profile IDs). Small file, huge blast radius.
- **`src/components/StructuredData.js`** = the homepage "who is Advait" JSON-LD.
- **`public/` + `layout.js` metadata** = verification tokens, sitemap/robots/feed, llms.txt.

---

## Stack & deploy

- Next.js (App Router), **fully static export** — every route prerenders to `○ (Static)`.
- **Vercel auto-deploys on push to `main`** → https://www.advait.tech. No preview branch
  needed; the GitHub↔Vercel link lives in Vercel's dashboard (no `.vercel/` in the repo).
- Tailwind v4 (`@theme` in `globals.css`), Vercel Analytics + Speed Insights.
- **Fonts: Figtree (everything on the homepage, including the wordmark), IBM Plex Mono (kicker
  labels + the ASCII globe), Newsreader (long-form article body only), all via `next/font/google`
  in `layout.js`.** They are wired to Tailwind through
  `--font-sans` / `--font-mono` / `--font-serif` in the `@theme` block. Geist is gone.
- **No animation library.** `motion` and `geist` were removed from `package.json`. The only
  entrance animation is the CSS `.rise` class on the hero, so content is never hidden behind
  hydration. Do not reintroduce JS scroll-reveals: the old ones left every section at
  `opacity: 0` until React hydrated, which broke the page for crawlers and slow clients.

### Design system, in one breath

Warm paper (`--color-bg #f5f4f0`) and warm ink (`--color-fg #1a1815`), **monochrome** (the
`--color-accent-*` tokens are deep-ink greys, not a hue). **The homepage is one screen**:
nav, a dark rounded card holding the two-tone headline and a live, draggable ASCII globe, a
three-up proof row (Marketing / BD / Research), and the footer. Everything else lives on its
own page behind a nav tab: `/about`, `/research` (the SEO hub), `/experience`, `/talks`. Those
pages share `PageShell.js`: nav, an h1, one 720px reading column, footer. No other cards or
images, no section numbers, no taglines. The one button is the ink pill in the nav. Links are
ink with a receding underline (`.link`), never coloured. Positioning is marketer first, BD
second, research as the credibility layer; do not drift back to "film" as a pillar.

### Build & dev — there's a trap

```bash
# BUILD/LINT — the Socket npm wrapper breaks `next build`
# (ERR_MISSING_OPTION --permission on the static-export workers). Use the hermes node/npm:
PATH="$HOME/.hermes/node/bin:$PATH" ~/.hermes/node/bin/npm run build

# DEV — port 3000 is sometimes held by the local WhatsApp bridge; use another port:
PATH="$HOME/.hermes/node/bin:$PATH" ~/.hermes/node/bin/npm run dev -- -p 3100
```

- **Turbopack stale-cache trap.** After editing `globals.css` (especially the `@theme` block),
  `next dev` can keep serving the previously compiled CSS, so new tokens/fonts silently do not
  apply and the page falls back to Times. Symptom: `getComputedStyle(document.documentElement)
  .getPropertyValue('--font-sans')` is empty. Fix: stop the dev server, move `.next` aside, restart.

- **Live repo:** `~/random/personal_web` (GitHub `0xadvait/personal_web`, `main`).
- **Stale clone — do NOT edit:** `~/WebstormProjects/personal_web`.
- **Ship a change:** hermes-npm build to check → commit → push `main` → Vercel deploys.
  After changing research pages, optionally re-ping IndexNow + request GSC (re)indexing.

---

## Content rules (how to write for this site)

- **No em dashes** in site copy. Use commas, colons, full stops, or `--`. Hard rule across
  the whole cluster.
- **No thin or mass-produced pages.** Add a page only for a **genuinely distinct search
  intent** — Google's scaled-content-abuse policy penalises doorway pages. Volume is not
  the goal; distinct substantive intents are.
- **Verify every external citation is live before linking it.**
- **Books stay in `publications[]` only** — no per-book pages (reads as thin content).
- **Every research page funnels to the SSRN paper** (via `PaperCallout` / related links) —
  ranking that paper is the whole point.
- **Keep author facts identical** across `StructuredData.js` and the `AuthorCard`.

---

## How to add a new research page (only for a distinct intent)

1. **Register it** in `src/lib/research.js` — add to `articles[]` (explainer) or `reports[]`
   (long-form): `slug`, `title`, `metaTitle`, `description`, `keywords[]`, `kicker`, `dek`,
   `navLabel`, `datePublished`, `dateModified`.
2. **Create the route** `src/app/research/<slug>/page.js`, copying an existing one
   (e.g. `the-state-of-edge-ai/page.js`): export `metadata` (canonical + keywords + OG),
   define a local `faqs[]`, render `<ArticleShell article={...} faqs={faqs}>` with the body
   as `.prose-research` children. Use `includePaper={false}` for non-wash-trading reports.
3. It **auto-wires** into the sitemap, related-articles, and hub bibliography.
4. **Add it to `public/llms.txt`** under the right section.
5. Build (hermes npm) → commit → push. Optionally IndexNow-ping + GSC-request the new URL.

---

## Off-site assets (not in this repo, but the same SEO system)

These all point back to advait.tech; keep identity facts consistent with the site:

- **Google Search Console** — property `https://www.advait.tech` (the two tokens above).
- **IndexNow** — key file in `public/`; re-ping `api.indexnow.org` after adding pages.
- **Google Scholar** `tGFdvmgAAAAJ` (verified `ajayant@london.edu`, homepage → advait.tech).
- **Wikidata** `Q140474152` (official website → advait.tech). **ORCID** `0009-0005-8155-9854`.
- **Medium** — two backlink posts (wash-trading + edge AI), each linking SSRN and the
  matching `/research/*` page.
- **SSRN author** `per_id=6236096`; **ResearchGate** publication `375780286`;
  **opengradient.ai/team** links Advait's name → advait.tech.

Deeper history and gotchas live in the agent memory note `project_advait_tech_website`
(and `project-chat-app-contribution` for the npm/port traps).
