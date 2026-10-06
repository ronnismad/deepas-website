# Deepa's — Handwoven Sarees from Bengal

A single-page, dependency-free website (HTML + CSS + vanilla JS) for **Deepa's**, a
boutique started by two sisters, Kamelia and Mistu, in memory of their late mother
Deepa — so that high-quality, traditionally handwoven Bengali sarees are accessible
to everyone, at fair prices.

Fully bilingual: **English and বাংলা (Bengali)**, switchable from the navigation.

## Layout

```
deepas-site/
├── index.html    # all markup; English is the source language
├── styles.css    # design system + responsive + Bengali typography overrides
├── script.js     # STRINGS (en/bn dictionaries), i18n, interactions
├── README.md
└── .nojekyll     # for GitHub Pages (skip Jekyll build)
```

No build step, no frameworks, no external images — every visual is CSS or inline SVG.

## Design

- Palette: background `#F0E5D8` · ink `#3F1414` · accent `#7A2E2A` · gold `#A9761F`
- Fonts: Cormorant Garamond + Jost (Latin), Tiro Bangla + Hind Siliguri (Bengali)
- Bengali print-heritage direction: a calm cream hero, an alpana rosette in the
  banner, a kantha-stitch rule across the six weaving-hub cards, tant-border bands
  as marquee/footer edges
- Sections: Home · About · Weavers (six hubs: Shantipur–Phulia, Begampur,
  Dhaniakhali, Bishnupur, Murshidabad, Santiniketan) · Collections · Contact · Terms
- Effects: 3D card tilt, scroll-reveal, marquee, mobile menu, accordion terms
- Accessible: keyboard-friendly, `prefers-reduced-motion` respected, semantic markup

## Internationalization (i18n)

- English copy lives directly in `index.html` markup.
- Bengali copy lives in `STRINGS.bn` inside `script.js` (keys ~line 20–272);
  `STRINGS.en` mirrors it. Both dictionaries must have the **same 116 keys**.
- Markup hooks: `data-i18n` (text), `data-i18n-html` (inner HTML),
  `data-i18n-ph` (placeholder), `data-i18n-aria` (aria-label).
- Language choice is stored in `localStorage` under `deepas.lang`; the `<html lang>`
  attribute is updated so fonts/typography switch correctly.
- Bengali typography rule: never apply wide `letter-spacing` or uppercase to
  `lang="bn"` — it tears conjuncts and matras. Handled in the `html[lang="bn"]` block.
- Intentionally untranslated (brand/cultural marks): `দীপা'স`, `মায়ের স্বপ্ন`,
  and the six hub town names.
- **When adding copy: add the key to BOTH `STRINGS.en` and `STRINGS.bn`.**
  Quick check: `node check-i18n.js` (scratch script) or compare key sets.

## Run locally

```bash
python -m http.server 8080    # or: npx serve .
```

Then open `http://localhost:8080/`. (Opening `index.html` directly also works.)

## Deploy

- **GitHub Pages**: push to `main` → Settings → Pages → Deploy from a branch →
  `main` / root. Keep `.nojekyll`.
- **Cloudflare Pages**: connect repo → Build command: *(none)* → output: `/` (root).

## Before going live

Replace the placeholder content:

- `hello@deepas.example` (contact section, terms, form `mailto:` in `script.js`)
- Phone `+91 00000 00000`, address, hours
- Social links (`href="#"`)
- The sample Terms & Conditions — have them reviewed legally
