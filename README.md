# Shayan Salehi — Portfolio

Personal academic portfolio, served by GitHub Pages at
<https://shayansalehi81.github.io/Portfolio/>.

A static site: no build step, no framework, no backend. English is the default language; Persian (right-to-left) is one click away, or link directly with `?lang=fa`. Light and dark themes follow the visitor's system setting and can be toggled.

## Structure

```
index.html            page shell, metadata, structured data (JSON-LD)
assets/js/content.js  all text, in English and Persian (edit this to update the site)
assets/js/main.js     renders every section from content.js; language, theme, interactions
assets/js/mesh.js     drifting triangulated background and the generated project emblems
assets/css/style.css  design tokens ("Cypress & Clay" palette) and per-section layouts
assets/img/           web-sized header photograph and portrait (WebP + JPEG fallback)
assets/fonts/         Manrope, Vazirmatn, Estedad (OFL licences included)
assets/cv/            the downloadable CV
```

Newsreader and JetBrains Mono load from Google Fonts.

## Editing

- **Content** — everything lives in `assets/js/content.js`. Each entry has `en` and `fa` fields. Publications, research projects, teaching, awards and experience are plain arrays; add or reorder items and the page follows. Counts in the hero and teaching section are computed from the data, except the hero statistics, which are set by hand.
- **CV** — replace `assets/cv/Shayan-Salehi-CV.pdf`.
- **Colours** — the tokens at the top of `assets/css/style.css`, for both `light` and `[data-theme="dark"]`.

## Preview locally

```bash
python -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish

In the repository's **Settings → Pages**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`. The empty `.nojekyll` file makes GitHub serve the files as they are.

## Design notes

Each section has its own structure while sharing one palette and type system: a photographic header seen through a drifting triangular veil, an editorial research profile with a tessellated band of interests, a bibliography with status filters, an interactive Gantt timeline of research projects, degree plates with GPA rings and a dotted-leader transcript, a dark band of awards, a semester board of teaching, vertical tabs for industry roles, a bento grid of projects with generated low-poly emblems, a notebook cell for the toolkit, and a closing contact statement. The triangulated field is adapted from the connected-triangle background of the reference portfolio; it pauses off-screen, respects `prefers-reduced-motion`, and can be paused from the navigation bar.
