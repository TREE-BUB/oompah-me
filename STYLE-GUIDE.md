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

## 2. Color

Sample values for the logo green and tan were taken from a compressed image and are approximate. Replace them with exact values from the logo source file when available.

### Palette

| Role | Name | Hex | Used for |
|---|---|---|---|
| Primary | Brass | `#d4a037` | Hero and booking backgrounds, headings on dark, nav button |
| Dark | Ink | `#14201a` | Text, borders, shadows, songbook and footer backgrounds |
| Light | Paper (tan, from logo) | `#dfd7b3` | Page background |
| Light, raised | Paper soft | `#ebe5c8` | Lighter surfaces such as cards |
| Light, recessed | Paper deep | `#d0c8a2` | Recessed surfaces and placeholders |
| Secondary | Ivy (green, from logo) | `#2b592b` | Button hover states, logo |
| Body text | Muted | `#2a382c` | Body copy on light backgrounds |
| Body text on dark | Muted dark | `#d9d3b8` | Body copy on ink backgrounds |
| Accent | Brick | `#8a3a22` | Small labels, link hover |

### CSS variables

```css
:root {
  --mustard: #d4a037;      /* brass */
  --ink: #14201a;
  --paper: #dfd7b3;
  --paper-soft: #ebe5c8;
  --paper-deep: #d0c8a2;
  --ivy: #2b592b;
  --muted: #2a382c;        /* body copy on light */
  --muted-dark: #d9d3b8;   /* body copy on ink */
  --accent: #8a3a22;       /* brick */
}
```

### Contrast (WCAG)

AA requires 4.5:1 for body text and 3:1 for large text (24px and up, or 19px bold and up).

| Pairing (text on background) | Ratio | Use |
|---|---|---|
| Ink on brass | 7.1:1 | OK for all text |
| Ink on paper | 11.6:1 | OK for all text |
| Body text on paper | 8.5:1 | OK for all text |
| Body text on paper soft | 9.7:1 | OK for all text |
| Paper on ink | 11.6:1 | OK for all text |
| Brass on ink | 7.1:1 | OK for all text |
| Muted dark on ink | 11.2:1 | OK for all text |
| Paper on ivy | 5.7:1 | OK for all text |
| Brick on paper | 5.4:1 | OK for all text |
| Brick on paper soft | 6.1:1 | OK for all text |
| Ivy on brass | 3.5:1 | Large display text only. Not for body or small text. |
| Brass on ivy | 3.5:1 | Large display text only. |
| Brass on paper | 1.6:1 | Do not use for text. Separate with a 2px ink border. |

### Color rules

- Headlines and body on brass are ink. Never ivy.
- Brass and paper are close in tone. Always divide them with a 2px ink border or an ink band.
- Ivy is a fill color (buttons, hover). Use paper text on it.

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
| Logo | Display | 800 | 28px | "Oompah" in paper, "ME" in brass |
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

The favicon (`assets/favicon.svg`) and apple touch icon are placeholders. The tree logo from the brand has not yet been added to the site.
