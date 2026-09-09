# rodolfogaspary.com

Portfolio site. Static HTML, CSS and JavaScript — no build step, no dependencies.

## Deploying on Cloudflare Pages

Connect the repository and use these settings:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | *(leave empty)* |
| Build output directory | `/` |
| Root directory | `/` |

Cloudflare serves the repository root as-is. Pushing to the default branch redeploys.

## Structure

```
index.html              Spanish home — hero, work index, track record, capabilities
credenciales.html       Spanish credentials
contacto.html           Spanish contact
proyectos/              Spanish case studies
en/                     English mirror (index, credentials, contact, projects/)
assets/css/             Stylesheet, shared by both languages
assets/js/              Filter script — proyectos.js (ES), projects-en.js (EN)
assets/img/             Screenshots
certificados/           Certificate PDFs
404.html                Not-found page
_headers                Cloudflare cache and security headers
sitemap.xml             Both language trees with hreflang
robots.txt
```

## Languages

Spanish lives at the root, English under `/en/`. Every page carries reciprocal
`hreflang` tags and a language switch in the header. When adding a page, add its
counterpart and update `sitemap.xml`.

## Adding a project

1. Add the card to `index.html` and `en/index.html` — set `data-category`
   to one of `webapp`, `android`, `datos`/`data`, `sitio`/`site`.
2. Create the case study in `proyectos/` and `en/projects/`, copying an existing
   file as the template.
3. Drop screenshots in `assets/img/`. Card images are cropped to 16:10.
4. Add both URLs to `sitemap.xml`.

## Links

All internal links are **relative**, not root-absolute. This keeps the site working when
opened straight from the filesystem as well as when served. If you add a page, match the
depth: root pages use `proyectos.html`, pages in `proyectos/` or `en/` use `../`, and pages
in `en/projects/` use `../../`.

## Notes

- Filter categories differ per language (`todos` vs `all`) — the two JS files are
  not interchangeable.
- `_headers` marks `/certificados/*` and the APK `noindex` so certificates and the
  demo build stay out of search results.
