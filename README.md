# ВМ-Торг — Эксклюзивная мебель на заказ

Presentation website for ООО «ВМ-Торг» — exclusive Russian representative of Belarusian furniture manufacturer «Мобили Концепт». The site showcases premium handcrafted furniture: executive offices, boardrooms, staircases, doors, and custom cabinetry.

**Live**: https://theotheo46.github.io/vmt_site/

## About

A single-page scrollable site with 6 anchor sections and sticky navigation, designed around a luxury dark brown + gold palette with serif typography. All content is in Russian.

### Sections

- **Hero** — Split layout with hero photo and brand introduction
- **Philosophy** — Company values: natural materials, handcraft, individual approach
- **Production** — Key stats: 15 years, 2000 m² factory, 21 craftsmen, 100+ projects
- **Process** — 5-step workflow from consultation to warranty
- **Gallery** — 10 furniture categories with 43 photographs and lightbox viewer
- **Contact** — Phone, email, address with call-to-action heading

### Gallery Categories

Кабинеты руководителей, Залы заседаний, Столы для переговорных, Лестницы, Двери, Встроенная мебель, Бытовая мебель, Мягкая мебель, Гардеробные, Стойки ресепшн

## Tech Stack

- **Next.js 16** — App Router with static export
- **React 19** — UI library
- **TypeScript** — Strict typing throughout
- **Tailwind CSS v4** — Utility-first styling with custom brand tokens
- **shadcn/ui** — Radix-based component library (Button, Card, Sheet, Separator, ScrollArea)
- **Motion** — Scroll-triggered section animations
- **Lucide React** — Icon library
- **GitHub Pages** — Hosting via Actions workflow

## Project Structure

- `src/app/` — Next.js App Router (single page + layout)
- `src/components/layout/` — Header (sticky nav + mobile menu) and Footer
- `src/components/sections/` — 6 page sections (hero, philosophy, production, process, gallery, contact)
- `src/components/gallery/` — Gallery sub-components (category blocks, lightbox modal)
- `src/components/shared/` — Reusable primitives (BasePathImage, AnimatedSection, StatCard, etc.)
- `src/components/ui/` — shadcn/ui base components
- `src/data/` — Content data (categories, stats, process steps)
- `src/types/` — TypeScript interfaces
- `src/lib/` — Utilities and constants (basePath helper, nav items, contact info)
- `src/hooks/` — Custom hooks (active section observer)
- `public/images/` — Optimized photos organized by category
- `source_img/` — Original source images (Cyrillic folder names)
- `scripts/` — Image pipeline script

## Development

Install dependencies, copy source images, and start the dev server.

```bash
npm install
```

```bash
npm run copy-images
```

```bash
npm run dev
```

Open http://localhost:3000/vmt_site

The `copy-images` script maps Cyrillic source folders to Latin slugs and sanitizes filenames for web compatibility.

## Validation

```bash
npm run validate
```

Runs `format:check` → `lint` → `typecheck` in sequence.

## Build

```bash
npm run build
```

Static export produces the `out/` directory ready for deployment. All pages are pre-rendered at build time — no server-side features are used.

## Deployment

Automatic via GitHub Actions on push to `main`. The workflow builds the static site, uploads to GitHub Pages artifact, and deploys to the live URL.

## GitHub CLI Commands

Create the repository:

```bash
gh repo create theotheo46/vmt_site --public --source=. --push
```

Enable GitHub Pages with Actions deployment:

```bash
gh api repos/theotheo46/vmt_site/pages -X POST -f build_type=workflow -f source.branch=main -f source.path=/
```

Watch deployment progress:

```bash
gh run watch
```

Check deployment status:

```bash
gh run list --limit 3
```

Verify Pages configuration:

```bash
gh api repos/theotheo46/vmt_site/pages
```

View log for given run:

```bash
gh run view <run-id>
```

View logs for given job:

```bash
gh run view --job=<job-id>
```

View full logs for given job:

```bash
gh run view --log --job=63431489108
```

View logs from a failed run:

```bash
gh run view <run-id> --log-failed
```

Re-run a failed deployment:

```bash
gh run rerun <run-id>
```

Manually trigger a deployment:

```bash
gh workflow run deploy.yml
```

## Design Decisions

- **Static export** — No backend needed for a presentation site; GitHub Pages provides free, fast hosting
- **basePath handling** — Production uses `/vmt_site/` prefix for GitHub Pages; dev uses root. A `BasePathImage` wrapper and `assetPath()` helper centralize this logic
- **Data-driven content** — Categories, stats, and process steps live in typed data files, making content updates independent of component logic
- **Scroll animations** — `AnimatedSection` wrapper uses IntersectionObserver via Motion for fade-in effects without impacting initial load
- **Mobile-first navigation** — Desktop shows inline links; mobile uses a slide-in Sheet panel with the same nav items
- **Image pipeline** — Source images with Cyrillic names and spaces are normalized to URL-safe Latin slugs via the copy script
