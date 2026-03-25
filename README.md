# Malel Heights — Gadrise Properties Limited

Premium real estate landing page for Malel Heights and Malel Residence developments in Eldoret, Kenya.

## Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styles**: CSS Modules + CSS Custom Properties (no Tailwind)
- **Fonts**: Playfair Display + Inter (Google Fonts via `<link>`)
- **Animations**: Framer Motion
- **Map**: Leaflet.js (dynamic import, no SSR)
- **Deployment**: Vercel

---

## Project Structure

```
malel-heights/
├── app/
│   ├── layout.tsx          ← Root layout, fonts, SEO metadata
│   ├── page.tsx            ← Main page (assembles all sections)
│   └── globals.css         ← Design tokens, utility classes
├── components/
│   ├── Navbar.tsx / .module.css
│   ├── Hero.tsx / .module.css
│   ├── StatsBar.tsx / .module.css
│   ├── About.tsx / .module.css
│   ├── Phase1.tsx / .module.css
│   ├── Phase2.tsx / .module.css
│   ├── Location.tsx / .module.css
│   ├── MapEmbed.tsx        ← Leaflet map (client-only)
│   ├── Contact.tsx / .module.css
│   └── Footer.tsx / .module.css
├── public/
│   ├── gadrise-logo.svg    ← Logo
│   ├── brochures/
│   │   ├── malel-heights-phase1.pdf
│   │   └── malel-residence-phase2.pdf
│   └── images/             ← Drop property renders here
└── vercel.json
```

---

## Local Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm start
```

---

## Deploying to Vercel

### Option 1 — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```
Follow the prompts. It auto-detects Next.js and deploys in ~60 seconds.

### Option 2 — GitHub + Vercel Dashboard
1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Every push to `main` auto-deploys

---

## Adding Real Images

Replace the grey placeholder divs with actual renders:

1. Drop image files into `public/images/` (use `.webp` for best performance)
2. In each component, swap the placeholder `<div>` for a Next.js `<Image>`:

```tsx
import Image from 'next/image'

// Replace the placeholder div:
<div className={styles.banner}>
  <span>Aerial overview render...</span>
</div>

// With:
<div className={styles.banner}>
  <Image
    src="/images/malel-heights-aerial.webp"
    alt="Malel Heights aerial view"
    fill
    className={styles.bannerImg}
    priority
  />
</div>
```

Add to the CSS module:
```css
.bannerImg {
  object-fit: cover;
}
```

**Recommended image sizes:**
| Placeholder | Recommended size |
|---|---|
| Hero right panel | 1400 × 900px |
| Phase 1 banner | 1600 × 700px |
| Phase 2 banner | 1600 × 700px |
| About developer image | 800 × 800px |
| Phase 2 exterior render | 800 × 600px |
| Phase 2 interior render | 800 × 500px |

---

## Customisation

### Colors (app/globals.css)
```css
:root {
  --gold: #C9962A;        /* Primary gold */
  --gold-light: #F0B429;  /* Hover gold */
  --gold-dark: #8B6914;   /* Phase 2 accent */
  --black: #0D0D0D;       /* Background */
  --surface: #111111;     /* Card surfaces */
  --offwhite: #F9F6F1;    /* Light sections */
}
```

### Contact details
Search for `+254 718 277 777` and `info@gadrisepropertieslimited.com` across components to update.

### Pricing
- Phase 1 turnkey: update in `Phase1.tsx`
- Phase 2 starting price: update in `Phase2.tsx` and `Contact.tsx`

---

## Design System

- **No Tailwind** — all styles are in `.module.css` files scoped per component
- **Global utilities** — `.serif`, `.btn-gold`, `.btn-outline`, `.btn-sm`, `.section-rule`, `.section-label` defined in `globals.css`
- **Responsive** — breakpoints at 900px and 1100px

---

## Contact

**Gadrise Properties Limited**
+254 718 277 777
info@gadrisepropertieslimited.com
Elgon View, Eldoret, Kenya
