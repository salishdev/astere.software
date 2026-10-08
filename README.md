# astere.software

The Astere Software website, built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). The design started from the [Tailwind UI](https://tailwindui.com) Spotlight template (see `LICENSE.md`).

## Development

Use Node.js 24.

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

- Pages live in `src/pages/` (`.astro` and `.mdx`). Each file becomes a route.
- Shared layout is in `src/layouts/BaseLayout.astro`; the privacy policy uses `src/layouts/LegalLayout.astro`.
- Images imported through `astro:assets` are resized and converted to WebP at build time.
- The site ships no framework JavaScript. The theme toggle (`src/lib/theme.ts`) and the header's scroll behavior are small scripts in `src/components/Header.astro`, and an inline script in `BaseLayout.astro` sets the theme before first paint.

## Cloudflare Pages deployment

The site builds to static files in `dist/` and deploys to Cloudflare Pages with GitHub Actions and Wrangler, matching the deployment architecture of `salishdev/salish.dev`.

- Pages project: `astere-software`
- Production branch: `main`
- Build: `npm ci` followed by `npm run build` (runs `astro check`, then `astro build`)
- Output directory: `dist`
- Runtime: static files; no Pages Functions

Run `npm run build` and `npm run preview` to preview the built site locally with Pages routing and headers. Run `npm run deploy -- --branch=main` after `npx wrangler login` to deploy manually.

The workflow in `.github/workflows/deploy.yml` builds pull requests and deploys main pushes or manual runs. It requires repository secrets named `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`; the token needs Cloudflare Pages write access in the target account.

`public/_headers` gives the fingerprinted files under `/_astro/` a one-year immutable cache. Astro emits `about.html`-style files (`build.format: 'file'`) so Pages serves `/privacy` directly instead of redirecting to `/privacy/`. Contact uses an embedded Google Form and requires no site-side credential.
