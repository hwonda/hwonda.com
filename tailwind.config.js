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
      colors: {
        gray: {
          0: 'var(--gray-0)',
          1: 'var(--gray-1)',
          2: 'var(--gray-2)',
          3: 'var(--gray-3)',
          4: 'var(--gray-4)',
          5: 'var(--gray-5)',
          6: 'var(--gray-6)',
          7: 'var(--gray-7)',
          8: 'var(--gray-8)',
          9: 'var(--gray-9)',
          10: 'var(--gray-10)',
        },
      },
    },
  },
  plugins: [],
};
