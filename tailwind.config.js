module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        primary900: 'var(--color-primary-900)',
        primary800: 'var(--color-primary-800)',
        primary500: 'var(--color-primary-500)',
        primary50: 'var(--color-primary-50)',
        primaryInactive: 'var(--color-primary-inactive)',
        secondary: 'var(--color-secondary)',
        secondary400: 'var(--color-secondary-400)',
        secondary800: 'var(--color-secondary-800)'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
