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
- `src/data/` — Content data (category metadata, stats, process steps)
- `src/data/generated/` — Auto-generated image data (do not edit manually)
- `src/types/` — TypeScript interfaces
- `src/lib/` — Utilities and constants (basePath helper, nav items, contact info)
- `src/hooks/` — Custom hooks (active section observer)
- `public/images/` — Photos organized by category (source of truth for gallery)
- `scripts/` — Build-time scripts (image data generator, legacy image copier)

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000/vmt_site

## Managing Images

All images are **auto-discovered** from the filesystem at build time. No code changes needed — just add or remove files in `public/images/`.

### How it works

The `generate-gallery` script scans `public/images/` and writes `src/data/generated/gallery-images.ts` with all discovered image paths. This runs automatically on every `npm run build` (via the `prebuild` hook).

### Directory conventions

| Directory                   | Purpose                                                                |
| --------------------------- | ---------------------------------------------------------------------- |
| `public/images/<category>/` | Gallery images for a category (e.g. `kabinety/`, `dveri/`)             |
| `public/images/<section>/`  | Section image (e.g. `hero/`, `philosophy/`) — first file found is used |
| `public/images/logo/`       | Logo files (skipped by the scanner)                                    |

Section image directories are configured in `SECTION_IMAGES` inside `scripts/generate-gallery-images.mjs`. Current sections: `hero`, `philosophy`.

### File naming

- **`main_` prefix** — marks the main (hero) image for a category (e.g. `main_IMG_7144.jpg`)
- **All other files** — become secondary gallery images, sorted alphabetically
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- Dotfiles are ignored

### Common tasks

**Add a gallery image:** drop the file into `public/images/<category>/` and run `npm run generate-gallery`.

**Change a category's main image:** rename the desired file to start with `main_` (and remove the prefix from the old one).

**Change a section image (hero, philosophy, etc.):** replace the file in `public/images/<section>/`.

**Add a new section image:** add an entry to `SECTION_IMAGES` in `scripts/generate-gallery-images.mjs`, create `public/images/<section>/` with the image, and import `sectionImages.<section>` in the component.

**Add a new category:** add an entry to `categoryMeta` in `src/data/categories.ts`, then create the matching directory in `public/images/`.

After any image change, run:

```bash
npm run generate-gallery
```

Or just build — the `prebuild` hook runs the generator automatically.

## Validation

```bash
npm run validate
```

Runs `format:check` → `lint` → `typecheck` in sequence.

## Build

```bash
npm run build
```

The `prebuild` hook auto-generates gallery image data, then Next.js produces the `out/` directory ready for deployment. All pages are pre-rendered at build time — no server-side features are used.

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
- **Data-driven content** — Categories, stats, and process steps live in typed data files; gallery images are auto-discovered from the filesystem at build time
- **Scroll animations** — `AnimatedSection` wrapper uses IntersectionObserver via Motion for fade-in effects without impacting initial load
- **Mobile-first navigation** — Desktop shows inline links; mobile uses a slide-in Sheet panel with the same nav items
- **Image auto-discovery** — A build-time script scans `public/images/` and generates a TypeScript module with all image paths, so adding a photo requires zero code changes
