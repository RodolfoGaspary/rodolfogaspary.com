# rodolfogaspary.com

Bilingual portfolio site. Static HTML, CSS and JavaScript — no framework, no build
step, no dependencies.

**Live:** [rodolfogaspary.com](https://rodolfogaspary.com)

## Why static

The site is ten project case studies, a credentials page and a contact page. That
does not need a build pipeline. Removing it removes the maintenance, the dependency
updates and the load time that come with one — and it makes the whole thing
deployable by pushing to a branch.

## Structure

```
index.html              Home (ES) — hero, work index, track record, capabilities
credenciales.html       Credentials (ES)
contacto.html           Contact (ES)
proyectos/              Case studies (ES)
en/                     English mirror — index, credentials, contact, projects/
assets/css/             One stylesheet, shared by both languages
assets/js/              Filter script — proyectos.js (ES), projects-en.js (EN)
assets/img/             Screenshots and social cards
certificados/           Certificate PDFs
descargas/              Project deliverables (notebooks, decks, docs) — noindex
assets/video/           Demo videos
404.html                Not-found page
_headers                Cloudflare cache and security headers
sitemap.xml             Both language trees with hreflang
```

## Languages

Spanish at the root, English under `/en/`. Every page carries reciprocal `hreflang`
tags and a language switch in the header. Adding a page means adding its counterpart
and updating `sitemap.xml`.

All internal links are **relative**, not root-absolute, so the site works opened
straight from the filesystem as well as served. Match the depth when adding pages:
root uses `index.html`, `proyectos/` and `en/` use `../`, `en/projects/` uses `../../`.

## Deploying

Cloudflare Pages, connected to this repository:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | *(empty)* |
| Build output directory | `/` |

Pushing to the default branch redeploys.

## Notes

- Filter categories differ per language (`todos` vs `all`) — the two JS files are not
  interchangeable.
- `_headers` marks `/certificados/*` `noindex` so certificates stay out of search results.
- Structured data: `Person` JSON-LD on both home pages, including `hasOccupation`,
  `knowsAbout` and `seeks`.
