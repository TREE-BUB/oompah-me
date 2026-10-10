# oompah.me

Static website for **OompahME**, a polka quintet and musical contractor in Portland, Maine.
It is plain HTML, CSS and JavaScript, with no build step and no dependencies. GitHub Pages serves the files exactly as they are in the repo.

```
index.html      All page content: copy, song list, band bios, booking form
styles.css      All styling; colors and fonts are CSS variables at the top
script.js       Mobile menu, songbook filter, booking form submit (optional; the page works without it)
404.html        "Page not found" page (GitHub Pages serves it automatically)
CNAME           Custom domain for GitHub Pages (oompah.me)
.nojekyll       Tells GitHub Pages to serve files as-is (skips Jekyll)
assets/         Images: hero photo, member photos, social share image, favicons
```

---

## Editing content

All content is in `index.html`. Edit it in the GitHub web editor (open the file, then the pencil icon) or locally. Every section has a marked comment (`<!-- SONGBOOK -->`, `<!-- THE BAND -->` and so on).

### Add or remove a song

Find the `SONG LIST` comment in `index.html`. Each genre is a block like this:

```html
<div class="genre" data-genre="Polka">
  <div class="genre__meta">
    <h3 class="genre__name">Polka</h3>
    <p class="genre__count">12 selections</p>
  </div>
  <ul class="genre__songs">
    <li>Beer Barrel Polka</li>
    <li>Bonanza Polka</li>
    ...
  </ul>
</div>
```

- **Add a song:** add a new `<li>Song Title</li>` line in the right list.
- **Remove a song:** delete its `<li>` line.
- **"12 selections" count:** `script.js` recalculates this on page load, so you don't need to change it. Updating the number by hand only matters for visitors with JavaScript turned off.
- **Add a genre:** copy a whole `<div class="genre" …>` … `</div>` block, then change `data-genre` (a unique name) and the `<h3>`. A filter button appears automatically. If the button needs a shorter label than the heading, add `data-label="Short Name"`. The "New Orleans & Americana" genre already does this; its button reads "Jazz & Americana".
- **Optional note under a genre heading:** add `<p class="genre__note">Your note.</p>` after the count line.
- **Special characters:** write `&` as `&amp;`. Use curly apostrophes (’) to match the rest of the site.

### Change a band member

Each member is an `<li class="member">` in the `THE BAND` section. Edit the name, role and bio text directly.

To replace a photo:
1. Export a JPEG about **600px wide** (portrait or square both work; the frame crops to 4:5).
2. Save it as `assets/members/<name>.jpg`, and optionally a `.webp` copy with the same name (squoosh.app works well for this). If you skip the WebP, delete that member's `<source type="image/webp" …>` line, or the old WebP will keep showing.
3. Update the image's `width` and `height` attributes to the new pixel size.
4. To shift the crop, edit that member's `.member__photo--<name> { object-position: X% Y%; }` rule in `styles.css`. A lower Y moves the frame toward the top of the photo.

### Other copy

Hero, occasions strip, ensembles and booking copy are plain text in `index.html`. If you change the band's description, update the matching `<meta name="description">`, `og:` / `twitter:` tags and the JSON-LD block in `<head>` so search results and link previews stay consistent.

### Colors and fonts

The variables at the top of `styles.css` control everything:

| Variable | Value | Use |
|---|---|---|
| `--mustard` | `#dba72a` | Hero, booking, accents on dark |
| `--ink` | `#151310` | Text, borders, dark sections |
| `--paper` | `#f2ead8` | Page background |
| `--paper-soft` | `#fbf6ea` | Form fields |
| `--muted` | `#3a332a` | Body copy on light backgrounds |
| `--muted-dark` | `#cfc5b2` | Body copy on dark backgrounds |
| `--accent` | `#87620f` | Small labels (see note below) |

The mockup's accent `#8a6410` measured 4.48:1 against the paper background, just under the WCAG AA threshold of 4.5:1 for small text. `#87620f` is one step darker (4.63:1) and looks the same.

Fonts come from Google Fonts: Big Shoulders Display (headlines), Archivo (body) and IBM Plex Mono (labels).

---

## Booking form (Formspree)

GitHub Pages can't process form submissions, so the form posts to [Formspree](https://formspree.io).

1. Create a free Formspree account and a new form. Set the notification email to `hello@oompah.me`.
2. Copy the form ID: the part after `/f/` in the endpoint, e.g. `https://formspree.io/f/xyzabcd` gives you `xyzabcd`.
3. In `index.html`, find `TODO: Replace FORM_ID` and change
   `action="https://formspree.io/f/FORM_ID"` to `action="https://formspree.io/f/xyzabcd"`.
4. In Formspree's form settings, restrict submissions to the `oompah.me` domain.

How it behaves:
- **With JavaScript:** submits in the background and shows the "Danke!" confirmation in place of the form. If the submission fails, or the form ID hasn't been set yet, the visitor sees an error with a `mailto:hello@oompah.me` link that pre-fills an email with what they typed.
- **Without JavaScript:** a normal form post to Formspree, which shows its own thank-you page.
- **Spam:** a hidden `_gotcha` honeypot field. Formspree silently drops any submission that fills it in.

---

## Deploying to GitHub Pages

### 1. Enable Pages
1. Merge the site into the `main` branch of the GitHub repo.
2. Go to **Settings → Pages → Build and deployment**. Set Source to **Deploy from a branch**, Branch to **`main`**, folder **`/ (root)`**, then **Save**.
3. After about a minute the site is live at `https://<user>.github.io/<repo>/`.

### 2. Custom domain (oompah.me)
The `CNAME` file in the repo already contains `oompah.me`.

1. Go to **Settings → Pages → Custom domain**, enter `oompah.me` and **Save**.
2. At the domain registrar, **remove the existing Google Sites records** for `oompah.me` and `www`, then add:

   | Type | Host | Value |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA (optional, IPv6) | `@` | `2606:50c0:8000::153` |
   | AAAA (optional, IPv6) | `@` | `2606:50c0:8001::153` |
   | AAAA (optional, IPv6) | `@` | `2606:50c0:8002::153` |
   | AAAA (optional, IPv6) | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `<user>.github.io` (the GitHub account or org that owns the repo, **without** the repo name) |

   Keep any `MX` and `TXT` records, so email for `hello@oompah.me` keeps working.
3. DNS changes can take up to 24 hours. When **Settings → Pages** shows "DNS check successful", tick **Enforce HTTPS**. The certificate can take a few minutes to issue after the DNS check passes.
4. Recommended: verify the domain under **GitHub account/org Settings → Pages → Verified domains**. This prevents anyone else from claiming `oompah.me` on GitHub Pages.

Check the current IPs in GitHub's docs: [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

### 3. Formspree
Paste the form ID into `index.html` as described above, then commit. Every push to `main` redeploys automatically within a minute or two.

---

## Previewing locally

Any static file server works, for example:

```sh
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly from disk also mostly works. The 404 page uses root-relative paths, so preview it through a server.

## Images

The source photos were resized and re-encoded:

| File | Size | Notes |
|---|---|---|
| `assets/band-quintet-{640,1000,1400}.{webp,jpg}` | 4:5 crop | Hero; the browser picks a size via `srcset` |
| `assets/og-image.jpg` | 1200×630 | Link previews (Facebook, iMessage, Slack, etc.) |
| `assets/members/*.{webp,jpg}` | ≤600px wide | Several originals are smaller (Mike 277px, Chris 350px); replace with higher-resolution photos for sharp results on retina screens |
| `assets/favicon.svg`, `assets/apple-touch-icon.png` | | Placeholder icons; replace with final artwork |
