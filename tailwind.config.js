module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: 'var(--color-primary)',
      primary800: 'var(--color-primary-800)',
      primary500: 'var(--color-primary-500)',
      primaryInactive: 'var(--color-primary-inactive)',
      secondary: 'var(--color-secondary)',
      secondary400: 'var(--color-secondary-400)'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
