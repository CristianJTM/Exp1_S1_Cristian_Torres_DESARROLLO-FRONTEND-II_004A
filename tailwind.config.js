/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  corePlugins: {
    // S1 ya tiene su propio reset en styles/base.css.
    preflight: false,
    // S1 usa la clase global .container en todas sus páginas.
    container: false,
  },
  theme: {
    extend: {
      colors: {
        sf: {
          green: '#136f43',
          dark: '#0d5232',
          soft: '#e8f5ee',
          cream: '#fbf8f1',
          sand: '#f3efe6',
          text: '#1d2521',
          muted: '#5f6b64',
          border: '#e3ded3',
          error: '#b3261e',
        },
      },
    },
  },
  plugins: [],
}
