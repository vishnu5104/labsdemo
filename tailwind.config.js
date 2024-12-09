import { defineConfig } from 'tailwindcss';
import daisyui from 'daisyui';
import { themes } from 'daisyui/src/theming/themes';

export default defineConfig({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [daisyui],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        Spiker: {
          ...themes['dim'],
          primary: '#6ba672',
        },
        Ghostiny: {
          ...themes['emerald'],
        },
      },
    ],
    darkTheme: 'Spiker',
    logs: false,
  },
});
