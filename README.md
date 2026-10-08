# Spotlight

Spotlight is a [Tailwind UI](https://tailwindui.com) site template built using [Tailwind CSS](https://tailwindcss.com) and [Next.js](https://nextjs.org).

## Getting started

To get started with this template, first install the npm dependencies:

```bash
npm install
```

Next, create a `.env.local` file in the root of your project and set the `NEXT_PUBLIC_SITE_URL` variable to your site's public URL:

```
NEXT_PUBLIC_SITE_URL=https://example.com
```

Next, run the development server:

```bash
npm run dev
```

Finally, open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Customizing

You can start editing this template by modifying the files in the `/src` folder. The site will auto-update as you edit these files.

## License

This site template is a commercial product and is licensed under the [Tailwind UI license](https://tailwindui.com/license).

## Learn more

To learn more about the technologies used in this site template, see the following resources:

- [Tailwind CSS](https://tailwindcss.com/docs) - the official Tailwind CSS documentation
- [Next.js](https://nextjs.org/docs) - the official Next.js documentation
- [Headless UI](https://headlessui.dev) - the official Headless UI documentation
- [MDX](https://mdxjs.com) - the MDX documentation


## Cloudflare Pages deployment

This site uses a Next.js static export and GitHub Actions with Wrangler, matching the deployment architecture of `salishdev/salish.dev`.

- Pages project: `astere-software`
- Production branch: `main`
- Build: `npm ci` followed by `npm run build`
- Output directory: `out`
- Runtime: static files; no Pages Functions

Use Node.js 24 and the Wrangler version installed by the lockfile. Run `npm run build` and `npm run preview` to preview the exported site locally. Run `npm run deploy -- --branch=main` after `npx wrangler login` to deploy manually.

The workflow in `.github/workflows/deploy.yml` builds pull requests and deploys main pushes or manual runs. It requires repository secrets named `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_API_TOKEN`; the token needs Cloudflare Pages write access in the target account.

Next.js server redirects are implemented in `public/_redirects`. The template's about, articles, projects, and RSS URLs remain disabled. The unused runtime RSS handler has been removed. Static images are served directly, without the Next.js image optimization server. Contact uses an embedded Google Form and requires no site-side credential.
