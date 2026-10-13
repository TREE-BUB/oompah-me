# OompahME Style Guide

Polka quintet and musical contractor, Portland, Maine. https://oompah.me

This guide describes the visual system used on the website (`styles.css` is the source of truth).

---

## 1. Brand character

- **Look:** a retro brass-band handbill. Square corners, hard 2px ink borders, solid offset shadows, and a warm serif for headings in sentence case.
- **Tone of voice:** serious musicians who have fun. Warm and confident, not arrogant, not kitschy.
- **Positioning:** a group of musicians who met playing jazz, dove into polka, and can play almost anything. A core quintet backed by a wide network of freelance musicians.
- **Core quintet:** Jimi Michel (trumpet, leader), Cleaves (clarinet), Mar Fink (trombone), Chris Beaven (banjo, pocket trumpet, co-leader), Mike Dank (drums).

---

## 2. Color and logo

The palette and logo come from the OompahME brand asset set ("Deep Ink" direction). Hex values below match `styles.css`.

### Palette

| Role | Name | Hex | Used for |
|---|---|---|---|
| Dark | Deep ink green | `#143A26` | Text, borders, shadows, header, songbook and footer backgrounds |
| Light | Warm paper | `#F2E8D0` | Page background, text on ink |
| Light, raised | Soft paper | `#F8F1DF` | Small light surfaces |
| Light, recessed | Aged paper | `#E0D2B5` | Placeholders, body text on ink |
| Primary accent | Brass | `#D4A441` | Hero and booking backgrounds, headings on dark, nav button |
| Secondary | Ivy | `#4F6B3E` | Button hover fills |
| Leather | Saddle tan | `#C7834E` | Logo leather tabs only |
| Accent | Brick | `#C65A32` | Non-text accents only |
| Small text accent | Brick, darker | `#9E3F26` | Member roles and link hover |
| Body text | Muted | `#2c4636` | Body copy on light backgrounds |
| Hairlines on dark | Line | `#2f5a43` | Dividers in dark sections |

### CSS variables

```css
:root {
  --ink: #143A26;
  --ink-deep: #14201a;
  --paper: #F2E8D0;
  --paper-soft: #F8F1DF;
  --paper-deep: #E0D2B5;
  --mustard: #D4A441;      /* brass */
  --ivy: #4F6B3E;
  --saddle: #C7834E;
  --muted: #2c4636;
  --muted-dark: #E0D2B5;
  --line-dark: #2f5a43;
  --accent: #C65A32;       /* non-text only */
  --accent-text: #9E3F26;  /* small text */
}
```

### Contrast (WCAG)

AA requires 4.5:1 for body text and 3:1 for large text (24px and up, or 19px bold and up).

| Pairing (text on background) | Ratio | Use |
|---|---|---|
| Ink on paper | 10.4:1 | All text |
| Paper on ink | 10.4:1 | All text |
| Body text on paper | 8.5:1 | All text |
| Aged paper on ink | 8.5:1 | All text |
| Ink on brass | 5.5:1 | All text |
| Brass on ink | 5.5:1 | All text, best for headings and accents |
| Paper on ivy | 4.9:1 | All text |
| Darker brick on paper | 5.4:1 | Small text |
| Brick on paper | 3.5:1 | Large text and non-text accents only |
| Saddle tan on paper | 2.5:1 | Logo illustration only |

### Color rules

- Headlines and body on brass are ink.
- Brass and paper are close in tone. Divide them with a 2px ink border or an ink band.
- Ivy is a fill color (hover). Use paper text on it.

### Logo

The logo is custom artwork: OOMPAHME in heavy condensed block letters, with brass suspenders forming the H. The suspenders carry a pine tree and two stars, with saddle-tan leather tabs and brass fasteners. Always use the supplied artwork. Never retype the logo or recolor it.

| Use | File |
|---|---|
| Header (wordmark on ink) | `assets/brand/wordmark-header.png` |
| Footer badge (round, on ink) | `assets/brand/badge-footer.png` |
| Favicon | `assets/favicon-32.png`, `assets/favicon-192.png` |
| Apple touch icon | `assets/apple-touch-icon.png` |

- The full brand asset set (all wordmark, stacked and badge variants, light and dark, one-color, black and white) is kept outside the repo. The files above are web-sized exports of it.
- Keep clear space of about half the wordmark cap height. Use the wordmark at 240px wide or larger, and the detailed badge at 96px or larger.

---

## 3. Typography

All three families load from Google Fonts. Fallbacks are listed in order.

| Role | Family | Weights | Fallback |
|---|---|---|---|
| Display (headings, logo) | Fraunces | 700, 800 | Georgia, Times New Roman, serif |
| Body | Archivo | 400, 500, 600 | system-ui, Segoe UI, sans-serif |
| Labels | IBM Plex Mono | 400, 500 | ui-monospace, Menlo, monospace |

Headings are set in sentence case, not all caps. Only the small mono labels (top strip, "Ideal for", member roles, nav links, filter buttons) are uppercase.

### Type scale

| Element | Family | Weight | Size | Notes |
|---|---|---|---|---|
| Hero title (h1) | Display | 800 | `clamp(40px, 5.4vw, 72px)` | Line-height 1.04, letter-spacing -.5px |
| Section title (h2) | Display | 800 | `clamp(38px, 4.8vw, 66px)` | Line-height 1.05, letter-spacing -.5px |
| Booking title | Display | 800 | `clamp(40px, 5.4vw, 72px)` | Line-height 1.05 |
| Booking button | Display | 700 | `clamp(22px, 3vw, 30px)` | Line-height 1.2 |
| Ensemble title | Display | 700 | 32px | Line-height 1.1 |
| Songbook genre | Display | 700 | 30px | Brass |
| Member name | Display | 700 | 24px | Line-height 1.1 |
| Occasions strip | Display | 700 | 22px | |
| Hero lede | Body | 400 | 19px | Line-height 1.55, max width 500px |
| Section intro | Body | 400 | 18px | Line-height 1.6 |
| Booking text | Body | 400 | 18px | Line-height 1.6 |
| Ensemble body | Body | 400 | 16px | Line-height 1.6 |
| Song list | Body | 400 | 16px | Rows separated by a 1px rule |
| Member bio | Body | 400 | 14.5px | Line-height 1.55 |
| Button | Body | 600 | 16px | Letter-spacing .3px |
| Small labels | Mono | 400 | 12px | Uppercase, letter-spacing 1 to 2px |

---

## 4. Layout and shape

| Token | Value |
|---|---|
| Max content width | 1240px |
| Side gutter | 28px |
| Section padding | 104px top and bottom |
| Header height | 60px, sticky |
| Border (rule) | 2px solid ink |
| Corners | Square. No border radius. |
| Hero photo shadow | `10px 10px 0` ink, solid with no blur |

---

## 5. Components

### Buttons

| Type | Style |
|---|---|
| Solid | Ink background, paper text, 2px ink border, 14px 26px padding. Hover: ivy background. |
| Outline | Transparent, ink text, 2px ink border. Hover: ink background, brass text. |
| Booking | Full-width block, ink background, paper text, Display 700. Hover: ivy background. |
| Nav call to action | Brass background, ink text, mono label. |

### Section color blocks

| Section | Background |
|---|---|
| Header, occasions strip, songbook, footer | Ink |
| Hero, booking | Brass |
| Ensembles, band | Paper |

### Photography

- Hero: the five members in white shirts and captain's hats against a green ivy wall.
- Aspect ratio 4:5, 2px ink border with the offset shadow.
- Member portraits and ensemble card photos: framed with the same 2px border. Ensemble photos are 3:2 and served as WebP with a JPEG fallback from `assets/ensembles/`.

---

## 6. Voice and copy

- Say what the band does plainly. Avoid superlatives such as "best" or "hardest-working".
- Lead with the music and the musicians, then the occasions.
- Contact: hello@oompah.me and 207-819-1358.
- Location line: based in Portland, Maine, happy to meet for coffee anywhere near Deering Center.
- Related sites are disclosed as related: Maine Wedding Trumpet (https://www.maineweddingtrumpet.com/) and Maine Trumpet Lessons (https://mainetrumpetlessons.com/).

---

## 7. Files and assets

| File | Purpose |
|---|---|
| `index.html` | All page content |
| `styles.css` | All styling. Colors and fonts are CSS variables at the top. |
| `script.js` | Mobile menu and songbook filter |
| `assets/` | Hero photo (640, 1000, 1400px, JPG and WebP), member photos, ensemble photos (`assets/ensembles/`), social share image (`og-image.jpg`, 1200x630), favicons |

Typography here intentionally differs from the brand asset set's own guide, which specifies Big Shoulders Display in all caps. The site uses Fraunces in sentence case by decision.
