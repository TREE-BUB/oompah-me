# OompahME — Final Brand Style Guide

**Version:** 1.1 (typography revised; site type decisions override the original v1.0 type specification)  
**Status:** Approved visual direction; production artwork specifications  
**Website:** https://oompah.me  
**Home:** Portland, Maine  
**Brand:** Polka band and flexible live-music ensemble

This document supersedes the earlier proposed color palette and visual treatments. The approved identity is the **Deep Ink (#2)** direction: condensed OOMPAHME lettering, with the **H formed by brass suspenders**, a pine-and-stars center badge, and **lightened saddle-tan leather tabs**. The latest flat, simplified H shape is the canonical design for *all* wordmarks, badges, and related marks.

> **Production note:** The concept renderings establish the design direction, but are raster illustrations, not verified vector masters. The hex values below are the finalized production specifications. Rebuild one clean master vector using them, then derive every export from that master. Do not use independently regenerated artwork for each color variant.

---

## 1. Brand foundation

### Character

- **Look:** An old brass-band handbill meets a Maine civic-music emblem: retro, structured, warm, and memorable.
- **Personality:** Serious musicians who have fun. Confident but unpretentious; festive without becoming kitschy.
- **Positioning:** A Portland-based polka band that grew out of jazz musicianship, with the versatility and network to assemble musicians for weddings, festivals, chamber music, and other events.
- **Visual cues:** Bold condensed typography, paper and ink, brass-colored hardware, two stars and a pine tree, flat geometric shapes, square corners, rules, and restrained printmaking references.

### Name and terminology

- Brand name in prose: **OompahME**.
- Logo lettering: **OOMPAHME**, with suspenders substituting for the **H**.
- Primary descriptor: **POLKA BAND · PORTLAND, MAINE**.
- Optional repertoire line: **POLKA · JAZZ · CHAMBER · HOLIDAY**.
- Avoid presenting the band as only an Oktoberfest act; the identity should also feel credible for weddings, jazz, and chamber performances.

---

## 2. Final color palette

| Token | Name | Hex | Primary use |
|---|---|---|---|
| `--ink` | Deep Ink Green | `#143A26` | Primary brand dark, wordmark on light backgrounds, dark sections, outlines |
| `--paper` | Warm Paper | `#F2E8D0` | Primary light background, reverse wordmark lettering |
| `--paper-deep` | Aged Paper | `#E0D2B5` | Secondary surfaces, raised or recessed cards, muted text on dark |
| `--paper-soft` | Soft Paper | `#F8F1DF` | Light cards and small areas requiring additional separation |
| `--sage` | Sage | `#7F8F72` | Secondary background fields, illustrations and supporting graphics |
| `--ivy` | Ivy | `#4F6B3E` | Secondary fills, supporting graphics and hover states |
| `--brass` | Brass | `#D4A441` | **Primary suspender straps**, brand highlights, icon details, prominent CTA treatments |
| `--gold` | Antique Gold | `#B8862B` | Secondary buckle and hardware accents; supporting metallic warmth |
| `--saddle` | Saddle Tan | `#C7834E` | **Final leather tab fill**; replaces the former dark-brown ends |
| `--leather-dark` | Dark Leather | `#6B3F1F` | Rare small supporting details only; **not the principal tab fill** |
| `--accent` | Brick/Copper | `#C65A32` | Non-text accents only (3.5:1 on paper) |
| `--accent-text` | Dark Brick | `#9E3F26` | Small text such as member roles and link hover (5.4:1 on paper) |
| `--ink-deep` | Deep Outline Ink | `#14201A` | Optional high-contrast small text on sage, precision outlines |

### Core hierarchy

1. **Deep Ink + Warm Paper** are the foundational pair.
2. **Brass** is the signature brand accent, especially in the custom H.
3. **Saddle Tan** appears principally on the two leather tabs at the base of the suspenders.
4. Sage, ivy, antique gold, and brick are supporting colors, not competitors for visual attention.

### Why the leather tabs changed

The original dark-brown ends visually disappeared on deep-green backgrounds. The finalized **Saddle Tan `#C7834E`** is lighter and warmer. Keep the tabs identical in light and dark artwork, with a **continuous Deep Ink outline** (approximately 2px at the reference logo size, scaling proportionally). This ensures they remain legible against warm paper while contrasting with a dark background. Each tab retains its brass fastener.

### Accessibility

| Foreground on background | Approx. contrast | Usage |
|---|---:|---|
| Paper on Ink | 10.4:1 | All text |
| Ink on Paper | 10.4:1 | All text |
| Brass on Ink | 5.5:1 | All text, though best reserved for large/accent treatment |
| Ink on Brass | 5.5:1 | All text |
| Paper on Ivy | 4.9:1 | All text |
| Deep Outline Ink on Sage | 4.9:1 | All text |
| Ink on Sage | 3.7:1 | Large bold type only |
| Brick on Paper | 3.5:1 | Large bold type or non-text accents only |
| Saddle Tan on Paper | 2.5:1 | **Logo illustration only**, separated by an ink outline |

Ratios are approximate WCAG contrast calculations for the specified flat hex colors. Decorative logo elements are distinct from body text. Do not rely on Brass or Saddle Tan as unoutlined small lettering on Paper.

### CSS variables

```css
:root {
  --ink: #143A26;
  --ink-deep: #14201A;
  --paper: #F2E8D0;
  --paper-deep: #E0D2B5;
  --paper-soft: #F8F1DF;
  --sage: #7F8F72;
  --ivy: #4F6B3E;
  --brass: #D4A441;
  --gold: #B8862B;
  --saddle: #C7834E;
  --leather-dark: #6B3F1F;
  --accent: #C65A32;
  --accent-text: #9E3F26;

  --text-primary: var(--ink);
  --text-on-dark: var(--paper);
  --text-muted-on-dark: var(--paper-deep);
  --mustard: var(--brass); /* compatibility with current site */
}
```

---

## 3. Logo system

### 3.1 Canonical wordmark

The primary mark is a **single horizontal OOMPAHME wordmark** with the suspenders replacing the letter H between **A** and **M**. Non-H letters are solid, heavy, condensed block letterforms. The H is an intentionally simplified, flat icon—not a lifelike rendering of leather or metal.

**Lock these features across all logo variants:**

- Two straight, parallel brass straps creating the uprights of the H.
- One rectangular buckle on each upper strap, with simple geometric negative space.
- Symmetric central shield/bridge connecting the straps; brass fill, dark-ink outline, with one pine tree and two stars in ink.
- Two bottom leather tabs, **Saddle Tan**, with dark outlines and simple circular brass fasteners.
- Consistent proportions, baseline relationship, negative space, and letter spacing in every variant.
- Crisp flat fills. No gradients, bevels, highlights, glossy hardware, simulated shadows, or pseudo-3D effects in the master art.

The **last approved light-background horizontal design, incorporating lighter Saddle Tan tabs**, is the reference for the H geometry. It takes precedence over older suspender drawings used on early badge explorations.

### 3.2 Required horizontal versions

| Variant | Lettering | H design | Background/application |
|---|---|---|---|
| **Primary dark** | Paper `#F2E8D0` | Brass / Ink / Saddle Tan | Deep Ink `#143A26` |
| **Primary light** | Ink `#143A26` | Same full-color H | Paper `#F2E8D0` or white |
| **Transparent for dark surfaces** | Paper | Same full-color H | Transparent; place over approved dark field |
| **Transparent for light surfaces** | Ink | Same full-color H | Transparent; place over approved light field |
| **Black on white** | Black `#000000` | Entire H simplified to black | White `#FFFFFF` |
| **White on black** | White `#FFFFFF` | Entire H simplified to white | Black `#000000` |
| **One-color Ink** | Ink | Entire H simplified to Ink | Paper, white, or light neutral |
| **One-color Paper** | Paper | Entire H simplified to Paper | Ink or another sufficiently dark field |

A one-color logo must truly use **one ink color** throughout, including hardware, badge and tabs. Internal openings remain negative space. Do not approximate monochrome by desaturating a multicolor PNG.

### 3.3 Round badge / social avatar

The approved circular badge direction is **Round Profile #6: Classic Badge (Paper)**. It has OOMPAHME arched at the top, the shared custom suspenders-H in the center, and the repertoire identifiers positioned around the lower ring.

- **Primary light badge:** Paper background, Deep Ink outer lettering and ring, Brass suspenders, Saddle Tan tabs, dark pine-and-stars details.
- **Primary dark badge:** Deep Ink background, Paper lettering and ring, otherwise the *same* H artwork.
- **Monochrome badge:** Black/white and white/black versions, with simplified flat shapes.
- **Small-avatar badge:** Remove tiny genre labels when necessary; prioritize readable band name and central H.
- **Favicon / extreme small size:** Use the standalone H without the circular lettering. Supply an SVG favicon and raster touch icons.

The circular artwork should be optically centered, with enough padding that platforms' circular crops never clip letters, stars, or the ring.

### 3.4 Extended and stacked lockups

Create consistent versions using the same wordmark master:

- **Horizontal plus descriptor:** Wordmark above `POLKA BAND · PORTLAND, MAINE` in IBM Plex Mono or the approved label style.
- **Horizontal plus repertoire:** Wordmark above `POLKA · JAZZ · CHAMBER · HOLIDAY`.
- **Stacked:** `OOMPA` over the custom suspenders-H plus `ME`, preserving reading order and making the H clearly belong to the second line.
- **Poster lockup:** Primary wordmark, thin horizontal rule, then the ensemble/location descriptor; suitable for vertical posters and merchandise.

Keep genre and location descriptors **editable text outside the vectorized master logo** in working design files, where practical.

### 3.5 Logo safeguards

- Use the **same H master everywhere**: no alternate buckle geometry or old dark-brown tabs.
- Keep minimum clear space of roughly **half the wordmark cap height** around the mark. Use similar proportional spacing around the badge.
- As practical starting points, use the full wordmark at **240px or wider** digitally, and the full detailed badge at **96px or larger**. Test actual rendered sizes; use simplified marks smaller than these.
- Do not stretch, outline letters unnecessarily, rotate the H independently, place patterns inside the letterforms, change proportions, or recreate the mark by typing a substitute H.
- Textures may be used on posters or photographs **behind** or around the mark, but should not be baked into the master vector artwork.

---

## 4. Typography

The logo is custom artwork and is not reproducible by typing the brand name in a font. For everything else, the site uses a warm serif for headings in **sentence case**, with no all-caps text anywhere.

| Role | Family | Weights | Treatment |
|---|---|---|---|
| Display and headings | **Fraunces** | 700, 800 | Sentence case. Never all caps. |
| Body and interface | **Archivo** | 400, 500, 600 | Clear sentence-case prose and controls |
| Labels and metadata | **IBM Plex Mono** | 400, 500 | Normal capitalization, small size, light tracking (.3px) |

This replaces the earlier Big Shoulders Display / all-caps specification.

### Website type scale

| Element | Font | Size | Line-height / tracking |
|---|---|---|---|
| Hero H1 | Fraunces 800 | `clamp(40px, 5.4vw, 72px)` | `1.04`; `-.5px` |
| Section H2 | Fraunces 800 | `clamp(38px, 4.8vw, 66px)` | `1.05`; `-.5px` |
| Booking H2 | Fraunces 800 | `clamp(40px, 5.4vw, 72px)` | `1.05`; `-.5px` |
| Ensemble H3 | Fraunces 700 | `32px` | `1.1` |
| Songbook genre heading | Fraunces 700 | `30px` | `1.1` |
| Member name | Fraunces 700 | `24px` | `1.1` |
| Hero intro | Archivo 400 | `19px` | `1.55` |
| Section/booking text | Archivo 400 | `18px` | `1.6` |
| Ensemble/song lists | Archivo 400 | `16px` | `1.6` |
| Member bio | Archivo 400 | `14.5px` | `1.55` |
| Buttons | Archivo 600 | `16px` | `.3px` tracking |
| Labels, metadata | IBM Plex Mono 400 | `12px` | normal case, `.3px` tracking |

**Hierarchy:** Use large display text confidently, but keep paragraphs in Archivo. Never write long explanatory passages in the display face.

---

## 5. Website and layout rules

| Property | Standard |
|---|---|
| Max content width | `1240px` |
| Side gutter | `28px` desktop; responsive on mobile |
| Section padding | `104px` top/bottom desktop; reduce responsively |
| Sticky header | `60px` nominal desktop height |
| Standard border | `2px solid var(--ink)` |
| Corner treatment | Square, `border-radius: 0` for primary UI |
| Photo treatment | `2px` Ink border and `10px 10px 0` Ink offset shadow |
| Graphic treatment | Flat colors, simple rules and shapes; no soft UI shadows |

### Recommended section mapping

- **Header, songbook, footer:** Deep Ink, with Paper text and Brass accents.
- **Hero and booking:** Brass or Deep Ink, with contrast-appropriate text; the alternate paper hero is also approved.
- **Ensembles and band portraits:** Paper or Paper Deep with Ink text.
- **Supporting fields:** Sage, Ivy, or Paper Soft, used sparingly to distinguish content, never as a substitute for legible text contrast.

### Buttons

- **Primary on Paper:** Ink fill, Paper label, 2px Ink border; Ivy fill on hover where contrast remains sufficient.
- **Primary on Ink:** Paper fill, Ink label; alternatively Brass fill with Ink label for prominent booking CTAs.
- **Outline:** Transparent field with a 2px Ink border and Ink type on light backgrounds; reverse to Paper on dark.
- **Nav booking button:** Brass fill and Ink text; IBM Plex Mono label.
- Buttons keep square corners and obvious keyboard-focus states.

---

## 6. Photography and imagery

- Use authentic photos of the five musicians, instruments, performances and events; avoid generic Oktoberfest stock imagery.
- The primary hero photograph remains the quintet wearing white shirts and hats against green ivy, unless replaced with stronger current band photography.
- Portraits use consistent borders and crop behavior; the hero remains approximately **4:5** where the layout supports it.
- Illustrative graphics should be limited to pine trees, stars, simple brass-band/handbill motifs, and the custom H.
- Decorative print grain is acceptable in promotional artwork but **not part of the required logo geometry or flat-color SVG files**.

---

## 7. Voice and copy

**Voice:** Plainspoken, welcoming, slightly cheeky, rooted in musicianship. Lead with who plays and what the music sounds like; follow with where the band can play.

**Approved copy principles:**

- Be specific about the music and the musicians; avoid unsupported superlatives.
- Use humor as a small flourish, not as the only message.
- Present breadth clearly: polka, jazz, chamber music, weddings and special events.
- Prefer `Book a date`, `See the songbook`, and `Reach out` over vague calls to action.

**Contact:** [hello@oompah.me](mailto:hello@oompah.me) · **207-819-1358**.  
**Location:** Based in Portland, Maine; happy to meet for coffee near Deering Center.

Related sites should be labeled as such, not presented as OompahME sub-brands:

- [Maine Wedding Trumpet](https://www.maineweddingtrumpet.com/)
- [Maine Trumpet Lessons](https://mainetrumpetlessons.com/)

---

## 8. Production deliverables and file naming

These filenames define the **recommended export set**, not a claim that those SVG/vector files already exist.

```text
assets/brand/
  oompahme-wordmark-dark.svg          # paper letters on ink field
  oompahme-wordmark-light.svg         # ink letters on paper/white field
  oompahme-wordmark-on-dark.svg       # transparent background
  oompahme-wordmark-on-light.svg      # transparent background
  oompahme-wordmark-black.svg         # true one-color black
  oompahme-wordmark-white.svg         # true one-color white
  oompahme-wordmark-ink.svg           # true one-color ink
  oompahme-wordmark-paper.svg         # true one-color paper
  oompahme-wordmark-descriptor.svg    # horizontal + location/ensemble
  oompahme-wordmark-stacked.svg       # vertical arrangement
  oompahme-badge-light.svg            # approved #6 circular badge
  oompahme-badge-dark.svg             # reversed circular badge
  oompahme-badge-black.svg
  oompahme-badge-white.svg
  oompahme-h-mark.svg                  # reduced-detail favicon/app icon
  favicon.svg
  apple-touch-icon.png                # raster, 180x180
  social-avatar-light.png             # raster, 1024x1024
  social-avatar-dark.png              # raster, 1024x1024
  og-image.jpg                         # social preview, 1200x630
```

Retain an editable **master vector source** (SVG, Illustrator, or equivalent) with reusable H artwork and outlined/custom-drawn logo letters. Raster PNG exports should be produced from the approved SVGs at appropriate resolutions; transparent logos need real alpha transparency, not a simulated paper-colored background.

### Pre-release checklist

- [ ] The custom H uses the **most recently approved** simplified geometry.
- [ ] Bottom leather tabs are **Saddle Tan `#C7834E`**, not dark brown.
- [ ] The same H appears in wordmark, stacked lockup, and circular badge.
- [ ] The letters are solid fill; all logo masters are flat and texture-free.
- [ ] Dark, light, transparent, one-color, black and white logo versions have been visually verified.
- [ ] Wordmark lettering and small badge text are manually proofread: **OOMPAHME**.
- [ ] Contrast and legibility are checked at intended website, favicon and print sizes.
- [ ] Web fonts load reliably with the documented fallbacks.
- [ ] Existing CSS variables and logo assets on the live site have been updated together.

---

## 9. Design decisions that are now fixed

1. The **Deep Ink (#2)** visual direction is the primary brand identity.
2. The **final flat suspenders-H** from the latest horizontal wordmark supersedes all earlier variants.
3. The leather ends use **lighter Saddle Tan**, with an ink contour, on both light and dark backgrounds.
4. The **Classic Badge (Paper), round concept #6**, is the approved social/badge composition; dark and monochrome versions derive from it.
5. The finalized core palette is **Deep Ink + Warm Paper + Brass**, supported by Saddle Tan, Sage, Ivy and restrained accent colors.
6. The typography system is **Fraunces / Archivo / IBM Plex Mono**, in sentence case with no all-caps text, with the actual wordmark retained as custom artwork.
7. The brand should feel like an old Maine brass-band poster—**not a photorealistic costume illustration**.
