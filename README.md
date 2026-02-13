# VMT Site

Static website built with Next.js 16, deployed to GitHub Pages.

**Live**: https://theotheo46.github.io/vmt_site/

## Tech Stack

- **Next.js 16** — App Router with static export
- **React 19** — UI library
- **Tailwind CSS v4** — Utility-first styling
- **shadcn/ui** — Radix-based component library
- **GitHub Pages** — Hosting via Actions workflow

## Development

```bash
npm install
```

```bash
npm run dev
```

Open http://localhost:3000/vmt_site

## Validation

```bash
npm run validate
```

Runs `format:check` → `lint` → `typecheck` in sequence.

## Build

```bash
npm run build
```

Produces static export in `out/` directory.

## Deployment

Automatic via GitHub Actions on push to `main`. The workflow:

1. Builds the static site
2. Uploads to GitHub Pages artifact
3. Deploys to https://theotheo46.github.io/vmt_site/

## GitHub CLI Commands Used

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
