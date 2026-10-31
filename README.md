# Shayan Salehi — Portfolio

Personal academic portfolio, served by GitHub Pages at
<https://shayansalehi81.github.io/Portfolio/>.

A static site: no build step, no framework, no backend. English is the default language; Persian (right-to-left) is one click away, or link directly with `?lang=fa`. The light theme is the default; visitors can switch to dark, and the choice is remembered.

## Structure

```
index.html            page shell, metadata, structured data (JSON-LD)
assets/js/content.js  all text, in English and Persian (edit this to update the site)
assets/js/main.js     renders every section from content.js; language, theme, interactions
assets/js/mesh.js     drifting triangulated background (header banner and contact section)
assets/css/style.css  palette tokens and section layouts
assets/img/           web-sized header photograph and portrait (WebP + JPEG fallback)
assets/fonts/         Vazirmatn for Persian (OFL licence included)
assets/cv/            the downloadable CV
```

Source Serif 4 and Source Sans 3 load from Google Fonts.
