// With build.format 'file', Astro reports pages as /index.html, /privacy.html,
// etc. at build time. Map those back to the URLs Pages actually serves.
export function servedPathname(url: URL) {
  return url.pathname.replace(/(\/index)?\.html$/, '') || '/'
}
