# Rodolfo Gaspary — Static site

Production-ready static HTML site for **rodolfogaspary.com**. No build step,
no framework. Push to GitHub → Cloudflare Pages serves it.

## What's in this folder

Everything in `site/` is meant to be copy-pasted into your GitHub repo's root.

```
site/                                    → Push contents of this folder to the repo root
├── index.html                           /
├── servicios.html                       /servicios
├── trabajo.html                         /trabajo
├── sobre-mi.html                        /sobre-mi
├── preguntas-frecuentes.html            /preguntas-frecuentes
├── contacto.html                        /contacto
├── blog.html                            /blog
├── blog/
│   ├── cuanto-cuesta-pagina-web-peru.html
│   ├── errores-sitio-web-pierde-clientes.html
│   ├── seo-vs-geo-que-necesita-tu-empresa.html
│   └── estrategia-digital-pymes-lima.html
├── 404.html                             Custom 404 page
├── assets/                              Logos, photos, OG images
├── css/
│   ├── tokens.css                       Design tokens (colors, type, spacing)
│   └── site.css                         Component styles
├── js/
│   └── site.js                          Mobile nav toggle (1 KB)
├── favicon.svg                          Modern browsers
├── favicon-32x32.png                    Fallback
├── favicon-192x192.png                  Android/manifest
├── apple-touch-icon.png                 iOS home screen
├── site.webmanifest                     PWA manifest
├── robots.txt                           Allow Google + AI crawlers
├── sitemap.xml                          All 11 URLs with lastmod
├── _redirects                           Cloudflare: clean URLs + 404 fallback
├── _headers                             Cloudflare: security + cache headers
└── README.md                            This file
```

## Deploy to Cloudflare Pages (recommended)

The fastest path:

1. **Create a new GitHub repo** (e.g. `rodolfogaspary-site`, public or private).
2. **Copy the contents of `site/`** into the repo root. The repo root should
   look like:
   ```
   index.html
   servicios.html
   blog.html
   blog/
   assets/
   css/
   ...
   ```
   *Do not* put everything inside a `site/` subfolder in the repo — Cloudflare
   serves from the repo root by default.
3. **Push to GitHub.**
4. **Go to Cloudflare Pages → Create a project → Connect to Git.**
   - Select your repo.
   - **Framework preset:** None
   - **Build command:** *(leave empty)*
   - **Build output directory:** *(leave empty or `/`)*
   - **Root directory:** *(leave empty)*
   - Click **Save and Deploy.**
5. Cloudflare gives you a `*.pages.dev` URL. Visit it — your site is live.
6. **Custom domain:** Pages → your project → Custom domains → Set up. Cloudflare
   handles DNS + SSL automatically if your domain is on Cloudflare.

Every push to `main` redeploys automatically. Cloudflare picks up `_redirects`
and `_headers` natively.

### Alternative: subfolder layout

If you'd rather keep the `site/` folder *inside* your repo (e.g. because
you want to keep other tooling alongside it), set:
- **Build output directory:** `site`

That tells Cloudflare to serve only what's in `site/`.

## What `_redirects` does

The clean-URL rules let visitors hit `/servicios` (no `.html`) and still get
the page. Examples that work:

```
https://www.rodolfogaspary.com/servicios               → /servicios.html
https://www.rodolfogaspary.com/blog                     → /blog.html
https://www.rodolfogaspary.com/blog/seo-vs-geo-que-necesita-tu-empresa → /blog/seo-vs-geo-que-necesita-tu-empresa.html
```

Anything that doesn't match falls through to `/404.html` with a real 404
status code (good for SEO — Google won't index "soft 404s").

If you'd later want to force clean URLs as the *primary* form (so `/foo.html`
redirects to `/foo`), update the canonical URLs in the `<head>` of each HTML
file and add 301 rules to `_redirects`. Optional — not done by default to
keep deploy idempotent.

## What `_headers` does

- **Security headers** on every response (`X-Content-Type-Options`,
  `Referrer-Policy`, `Permissions-Policy`).
- **One-year immutable cache** on `/css/*`, `/js/*`, `/assets/*`, favicons.
  Safe because we don't fingerprint files — but they rarely change, and
  Cloudflare purges on deploy.
- **No cache** on HTML so new deploys go live immediately.

## SEO + GEO scaffolding (already in place)

Per page:
- Unique `<title>` + `meta description` + canonical
- Open Graph + Twitter Card tags
- JSON-LD: `ProfessionalService` (home), `Service`+`OfferCatalog`+`FAQPage`
  (servicios), `Person` (sobre-mí, cross-referenced with `@id`), `BlogPosting`
  + `FAQPage` (blog posts), `ContactPage` (contacto), `BreadcrumbList`
  everywhere.
- Semantic HTML: one `<h1>` per page, nested headings, `<time datetime>`,
  `<nav aria-label>`, `<main id="main">`, skip link.

`robots.txt` explicitly allows:
- Googlebot (implicit, allow-all)
- GPTBot, ChatGPT-User, OAI-SearchBot
- PerplexityBot
- ClaudeBot
- Google-Extended, Applebot-Extended
- Bytespider

`sitemap.xml` lists all 11 URLs. **Submit it manually** in:
- [Google Search Console](https://search.google.com/search-console) → Sitemaps → add `sitemap.xml`
- [Bing Webmaster Tools](https://www.bing.com/webmasters) → same

## Placeholders to replace before launch

Search and replace globally:

| Find | Replace with |
|---|---|
| `+51 913 727 533` | Your real WhatsApp number (format: `+51 XXX XXX XXX`) |
| `51913727533` | Same, E.164 with no `+` (used in `wa.me/` links) |
| `info@rodolfogaspary.com` | Your real email |
| `linkedin.com/in/rodolfogaspary` | Your LinkedIn URL slug |
| `www.rodolfogaspary.com` | Your final domain |
| `assets/generated/about/founder.png` | A real portrait of you (current is a placeholder) |

Recommended: use VS Code's "Search → Replace in Files" with **Match Case**
enabled, run once per item. The contact form's `action="/contacto/enviar"`
also needs wiring — see below.

## Wiring the contact form

The `<form>` on `/contacto` posts to `/contacto/enviar`. You have three
common options:

**A. Cloudflare Pages Functions** *(stays inside Cloudflare)*. Create
`functions/contacto/enviar.js` in your repo:
```js
export async function onRequestPost({ request, env }) {
  const data = await request.formData();
  // Forward to your email provider — e.g. Resend, Mailgun, SendGrid.
  // env.RESEND_API_KEY etc. go in Cloudflare Pages → Settings → Environment variables.
  return Response.redirect("/contacto?ok=1", 303);
}
```

**B. Formspree / Web3Forms / Getform.** Change the form `action` to your
hosted endpoint. Zero-config, ~50 submissions/month free.

**C. WhatsApp only.** Delete the form and lean entirely on the WhatsApp
button (it's already in every page footer). For a side-business in Lima,
this is often the highest-converting option.

## Validation before launch

- [ ] All placeholders replaced
- [ ] Real founder photo in `assets/generated/about/founder.png`
- [ ] Test on a real phone — not just devtools
- [ ] [Rich Results Test](https://search.google.com/test/rich-results) — paste each URL, expect green Article/FAQ/Service schemas
- [ ] [Schema Validator](https://validator.schema.org/) — same
- [ ] [PageSpeed Insights](https://pagespeed.web.dev/) on home + 1 blog post — target ≥90 mobile
- [ ] WhatsApp link opens correctly from your phone
- [ ] Contact form posts and you receive the email
- [ ] `sitemap.xml` submitted in Search Console
- [ ] Ownership verified in Search Console + Bing Webmaster
- [ ] Google Analytics 4 added (paste your `gtag` snippet before `</head>` in each page)

## Editing content

Pages are plain HTML — edit in any text editor. No build step.

To do a sitewide change (new nav link, footer column, header phone number),
you'll edit all 11 HTML files. That's the tradeoff for zero-build. If editing
the same chrome in 11 places gets annoying, the migration path is:

- **Astro** — write pages in `.astro`, get the same HTML output. ~1h migration.
- **Eleventy (11ty)** — Markdown + Nunjucks templates. ~2h migration.

The CSS, fonts, JSON-LD shapes, and copy stay identical in either case.

## Performance targets (already configured)

- **LCP** < 1.5s on Pixel 6 / 4G (hero image is the biggest asset — compress
  to WebP for an extra ~30% size reduction)
- **CLS** < 0.1 (all `<img>` have aspect-ratio via CSS, no shifts)
- **Total page weight** < 350 KB
- **Lighthouse SEO** = 100
- **Lighthouse Accessibility** ≥ 95

For an extra speed boost: convert PNGs in `assets/generated/` to WebP/AVIF
using ImageMagick, Squoosh, or `cwebp`.
