/** @type {import("prettier").Config} */
export default {
  arrowParens: 'always',
  bracketSpacing: true,
  printWidth: 80,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  useTabs: false,
  tabWidth: 2,

  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.{js,jsx,ts,tsx}',
      options: {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
      },
    },
  ],
};
