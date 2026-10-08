/** @type {import('prettier').Options} */
export default {
  singleQuote: true,
  semi: false,
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
}
