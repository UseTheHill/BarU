module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public.index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
      center: true,
    extend: {
      gridTemplateRows: {
        // Simple 8 row grid
       '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
       'layout': '200px minmax(900px, 1fr) 100px',
      }gridTemplateRows: {
        // Simple 8 row grid
       '8': 'repeat(8, minmax(0, 1fr))',

        // Complex site-specific row configuration
       'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
