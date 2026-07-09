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
| Homepage copy (hero text, headings, blurbs) | the relevant `src/components/*.js` | Keep stated facts true. |
| Roles / job history | `src/components/Experience.js` | |
| Talks / speaking | `src/components/Speaking.js` | |
| Projects / work | `src/components/Work.js` | |
| The "Early research" homepage section | `src/components/Thesis.js` | Layout/copy is yours; keep its links to `/research/*` and Scholar valid. |
| Contact section / socials shown on page | `src/components/Contact.js` (display) | The link **values** come from `site.js` (next row). |
| A social / profile link (X, GitHub, Scholar, SSRN…) | `src/lib/site.js` → `socialLinks` | One source of truth. Flows into `Person.sameAs` and every cite link. Change the **ID** only if the profile truly moved. |
| Site name, URL, or tagline | `src/lib/site.js` | `siteUrl` flows into canonicals, sitemap, JSON-LD everywhere. |
| **Education / credentials** | BOTH `src/components/StructuredData.js` (`alumniOf` + `hasCredential`) AND `src/components/research/ArticleShell.js` (`AuthorCard` bio) | **Two places — keep them factually identical.** |
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
| The sitemap | **nothing** — `src/app/sitemap.js` auto-builds from the registry | New pages appear once registered. |
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
- Tailwind v4 (`@theme` in `globals.css`), Geist fonts, Vercel Analytics + Speed Insights.

### Build & dev — there's a trap

```bash
# BUILD/LINT — the Socket npm wrapper breaks `next build`
# (ERR_MISSING_OPTION --permission on the static-export workers). Use the hermes node/npm:
PATH="$HOME/.hermes/node/bin:$PATH" ~/.hermes/node/bin/npm run build

# DEV — port 3000 is sometimes held by the local WhatsApp bridge; use another port:
PATH="$HOME/.hermes/node/bin:$PATH" ~/.hermes/node/bin/npm run dev -- -p 3100
```

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
