/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
        arita: ['var(--font-arita)'],
        pretendard: ['var(--font-pretendard)'],
        apple: ['var(--font-apple)'],
        noto: ['var(--font-noto)'],
      },
    },
  },
  plugins: [],
};
